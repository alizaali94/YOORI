<template>
  <div class="sg-page-content">
    <section class="after-track-order text-center" v-if="is_shimmer">
      <div class="container" v-if="order">
        <div class="invoice_border mt-2">
          <div class="page-title">
            <h1>{{ lang.thank_you }}</h1>
            <p>{{ lang.your_order_status_as_follows }}</p>
            <h2>{{ lang.order_id }}{{ order.code }}</h2>
          </div>
          <div class="step-content">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="step">
                  <ul class="global-list">
                    <li :class="{ active: current_status >= 0, 'reject incomplete': order.delivery_status == 'canceled' }">
                      {{ lang.order_placed }}
                    </li>
                    <li :class="{ active: current_status >= 1, reject: order.delivery_status == 'canceled', incomplete: current_status < 1 }">
                      {{ lang.order_confirmed }}
                    </li>
                    <li :class="{ active: current_status >= 2, reject: order.delivery_status == 'canceled', incomplete: current_status < 2 }">
                      {{ lang.order_processing }}
                    </li>
                    <li :class="{ active: current_status == 4, reject: order.delivery_status == 'canceled', incomplete: current_status < 4 }">
                      {{ lang.delivered }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="title">
              <h1 class="ms-2">{{ lang.order_details }}</h1>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th scope="col" class="text-start">{{ lang.product_name }}</th>
                  <th scope="col" class="text-end">{{ lang.price }}</th>
                  <th scope="col" class="text-end">{{ lang.quantity }}</th>
                  <th scope="col" class="text-end">{{ lang.sub_total }}</th>
                  <th v-if="((order.tax_method && order.tax_method.vat_tax_type == 'product_base') || (!order.tax_method || !order.tax_method.vat_tax_type))"
                      scope="col" class="text-end">{{ lang.tax }}
                  </th>
                  <th v-if="order.shipping_method == 'product_base' || !order.shipping_method" scope="col"
                      class="text-end">{{ lang.shipping_cost }}
                  </th>
                  <th scope="col" class="text-end">{{ lang.discount }}</th>
                  <th v-if="order.is_coupon_system_active == 1 && order.coupon_discount > 0"
                      scope="col" class="text-end">{{ lang.coupon_discount }}
                  </th>
                  <th scope="col" class="text-end">{{ lang.total_amount }}</th>
                  <th scope="col" class="text-start" v-if="addons.includes('refund')">{{ lang.refund }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(order_detail, index) in order.order_details" :key="'order' + index">
                  <td>
                    <div class="product-name">
                      <p>{{ order_detail.product_name }}</p>
                      <span>{{ order_detail.variation }}</span>
                    </div>
                  </td>
                  <td class="text-end">{{ priceFormat(order_detail.price) }}</td>
                  <td class="text-end">{{ order_detail.quantity }}</td>
                  <td class="text-end">{{ priceFormat(order_detail.price) }}
                    X {{ order_detail.quantity }}
                    = {{ priceFormat(order_detail.price * order_detail.quantity) }}
                  </td>
                  <td v-if="(order.tax_method && order.tax_method.vat_tax_type == 'product_base') || (!order.tax_method || !order.tax_method.vat_tax_type)"
                      class="text-end">
                      <span v-if="order_detail.tax > 0">
                        {{ priceFormat(order_detail.tax) }} X {{ order_detail.quantity }}
                                                    = {{ priceFormat(order_detail.tax * order_detail.quantity) }}
                      </span>
                    <span v-else>
                        {{ priceFormat(order_detail.tax * order_detail.quantity) }}
                      </span>
                  </td>
                  <td v-if="(order.shipping_method == 'product_base' || !order.shipping_method)" class="text-end">
                      <span v-if="order_detail.shipping_cost.depend_on_quantity == 1">
                        {{ priceFormat(order_detail.shipping_cost.per_cost) }}
                      X {{ order_detail.quantity }}
                      = {{ priceFormat(order_detail.shipping_cost.total_cost) }}
                      </span>
                    <span>
                        {{ priceFormat(order_detail.shipping_cost.total_cost) }}
                      </span>
                  </td>

                  <td v-if="(order_detail.discount * order_detail.quantity) > 0" class="text-end">
                    {{ priceFormat(order_detail.discount) }}
                    X {{ order_detail.quantity }}
                    = {{ priceFormat(order_detail.discount * order_detail.quantity) }}
                  </td>
                  <td v-else class="text-end">{{ priceFormat(0) }}</td>
                  <td class="text-end" v-if="order.is_coupon_system_active == 1 && order.coupon_discount > 0">
                    {{ priceFormat(order_detail.coupon_discount.discount) }}
                  </td>
                  <td class="text-end">{{
                      priceFormat(
                          ((parseFloat(order_detail.price) * order_detail.quantity) + (parseFloat(order_detail.tax) * order_detail.quantity) + parseFloat(order_detail.shipping_cost.total_cost)) -
                          ((parseFloat(order_detail.discount) * order_detail.quantity) + parseFloat(order_detail.coupon_discount.discount)),
                      )
                    }}
                  </td>
                  <td class="text-start text-capitalize" v-if="addons.includes('refund')">
                                    <span v-if="order_detail.refund"
                                          :class="order_detail.refund.status == 'pending' ? 'text-warning' : (order_detail.refund.status == 'rejected' ? 'text-danger' : 'text-success')">
                                        <a href="javascript:void(0)" class="text-danger"
                                           v-if="order_detail.refund.status == 'rejected'"
                                           @click="rejectedModal(order_detail, index)"> {{
                                            order_detail.refund.status
                                          }} </a>
                                        <span v-else> {{ order_detail.refund.status }} </span>

                                    </span>
                    <a href="javascript:void(0)"
                       v-else-if="order_detail.is_refundable && order.delivery_status == 'delivered' && order.delivered_days < settings.refund_request_time"
                       @click="refundModal(order_detail, index)"><span
                        class="mdi mdi-cash-refund"></span></a>
                    <span v-else>N/A</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="account-table">
              <div class="title">
                <h1>{{ lang.account_details }}</h1>
              </div>
              <div class="table-responsive">
                <table class="table text-start">
                  <tbody>
                  <tr>
                    <td>
                      <ul class="global-list">
                        <li>{{ lang.order_code }}</li>
                        <li v-if="authUser">{{ lang.name }}</li>
                        <li v-if="authUser">{{ lang.email }}</li>
                        <li>{{ lang.shipping_address }}</li>
                        <li>{{ lang.billing_address }}</li>
                      </ul>
                    </td>
                    <td>
                      <ul class="global-list">
                        <li>{{ order.code }}</li>
                        <li v-if="authUser">{{ order.user.full_name }}</li>
                        <li v-if="authUser">{{ order.user.email }}</li>
                        <li>{{ order.shipping_address ? order.shipping_address.address : "" }}</li>
                        <li>{{ order.billing_address ? order.billing_address.address : "" }}</li>
                      </ul>
                    </td>
                    <td>
                      <ul class="global-list">
                        <li>{{ lang.order_date }}</li>
                        <li>{{ lang.order_status }}</li>
                        <li>{{ lang.payment_status }}</li>
                        <li>{{ lang.payment_type }}</li>
                      </ul>
                    </td>
                    <td>
                      <ul class="global-list">
                        <li>{{ order.date }}</li>
                        <li class="text-capitalize">{{ order.delivery_status }}</li>
                        <li class="text-capitalize">{{ order.payment_status }}</li>
                        <li class="text-capitalize">{{ order.payment_type }}</li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="row">
                <div class="col-md-4 offset-md-8">
                  <div class="order-summary">
                    <div class="sg-card">
                      <ul class="global-list">
                        <li>{{ lang.subtotal }} <span>{{ priceFormat(order.sub_total) }}</span></li>
                        <li v-if="order.tax_type == 'before_tax' || order.vat_tax_type == 'product_base'">{{ lang.tax }}
                          <span>{{ priceFormat(order.total_tax) }}</span></li>
                        <li>{{ lang.discount }}<span>{{ priceFormat(order.discount) }}</span>
                        </li>
                        <li v-if="settings.shipping_cost != 'area_base' || $route.name != 'cart'">{{
                            lang.shipping_cost
                          }}<span>{{
                              priceFormat(order.shipping_cost)
                            }}</span></li>
                        <li v-if="settings.coupon_system == 1">{{ lang.coupon_discount }}<span>{{
                            priceFormat(order.coupon_discount)
                          }}</span></li>
                      </ul>
                      <div class="order-total text-left"
                           v-if="settings.tax_type == 'after_tax' && settings.vat_and_tax_type == 'order_base'">
                        <p class="font_weight_400">{{ lang.total }} <span>{{
                            priceFormat((parseFloat(order.sub_total) + parseFloat(order.shipping_cost)) - (parseFloat(order.coupon_discount) + parseFloat(order.discount)))
                          }}</span></p>
                        <p class="font_weight_400">{{ lang.tax }} <span>{{ priceFormat(order.total_tax) }}</span></p>
                        <p class="grand_total_style">{{ lang.grand_total }} <span>{{
                            priceFormat(order.total_payable)
                          }}</span></p>
                      </div>
                      <div class="order-total" v-else>
                        <p>{{ lang.total }} <span>{{ priceFormat(order.total_payable) }}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-12">
            <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
            <a href="javascript:void(0)" v-else class="btn btn-primary"
               @click="download(order.id, order.code)">{{ lang.download }} {{ lang.invoice }}</a>
          </div>
        </div>
        <div class="product_modal">
          <div class="modal fade" id="refund_modal" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ lang.send_refund_request }}</h5>
                  <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form @submit.prevent="refundSubmit()">
                  <div class="modal-body text-left">
                    <div class="form-group">
                      <label for="order">{{ lang.product }}</label>
                      <input type="hidden" v-model="form.order" class="form-control" disabled/>
                      <input type="hidden" v-model="form.order_detail_id" class="form-control" disabled/>
                      <input type="text" v-model="form.product_name" class="form-control"
                             :class="{ error_border: errors.order_id }" disabled id="order"/>
                      <span class="validation_error" v-if="errors.order_detail_id">{{
                          errors.order_detail_id[0]
                        }}</span>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="order_id">{{ lang.total_paid }}</label>
                          <input
                              type="text"
                              v-model="form.total_amount"
                              class="form-control"
                              :class="{ error_border: errors.total_amount }"
                              disabled
                              id="order_id"
                          />
                        </div>
                        <span class="validation_error" v-if="errors.total_amount">{{ errors.total_amount[0] }}</span>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="shipping_cost">{{ lang.shipping_cost }}</label>
                          <input
                              type="text"
                              v-model="form.shipping_cost"
                              class="form-control"
                              :class="{ error_border: errors.shipping_cost }"
                              disabled
                              id="shipping_cost"
                          />
                        </div>
                        <span class="validation_error" v-if="errors.shipping_cost">{{ errors.shipping_cost[0] }}</span>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="refundable_amount">{{ lang.refundable_amount }}</label>
                          <input
                              type="text"
                              v-model="form.refundable_amount"
                              class="form-control"
                              :class="{ error_border: errors.refundable_amount }"
                              disabled
                              id="refundable_amount"
                          />
                        </div>
                      </div>
                      <span class="validation_error" v-if="errors.refundable_amount">{{
                          errors.refundable_amount[0]
                        }}</span>
                    </div>
                    <div class="form-group">
                      <label for="refund_reason" class="col-form-label">{{ lang.refund_reason }}</label>
                      <textarea class="form-control" v-model="form.refund_reason"
                                :class="{ error_border: errors.refund_reason }" id="refund_reason"></textarea>
                    </div>
                    <span class="validation_error" v-if="errors.refund_reason">{{ errors.refund_reason[0] }}</span>

                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary" v-show="!loading">
                        {{ lang.send_request }}
                      </button>
                      <loading_button v-show="loading" :class_name="'btn btn-primary'"></loading_button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="modal fade" id="rejected_modal" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ lang.refund_rejected }}</h5>
                  <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                  <div class="form-group">
                    <label for="product" class="col-form-label">{{ lang.product }}</label>
                    <input type="text" v-model="product_name_show" class="form-control" disabled id="product"/>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="total_paid" class="col-form-label">{{ lang.total_paid }}</label>
                        <input type="text" v-model="total_amount_show" class="form-control" disabled id="total_paid"/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="shipping_cost_show" class="col-form-label">{{ lang.shipping_cost }}</label>
                        <input type="text" v-model="shipping_cost_show" class="form-control" disabled
                               id="shipping_cost_show"/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="refundable_amount_show" class="col-form-label">{{ lang.refundable_amount }}</label>
                        <input type="text" v-model="refundable_amount_show" class="form-control" disabled
                               id="refundable_amount_show"/>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="refund_reason_show" class="col-form-label">{{ lang.refund_reason }}</label>
                    <textarea class="form-control" v-model="refund_reason_show" disabled
                              id="refund_reason_show"></textarea>
                  </div>
                  <div class="form-group" v-if="reject_reason_show">
                    <label for="reject_reason" class="col-form-label">{{ lang.reject_reason }}</label>
                    <textarea class="form-control" v-model="reject_reason_show" disabled id="reject_reason"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section
    ><!-- /.track-order -->
    <section v-else-if="shimmer">
      <div class="container">
        <div class="page-title">
          <shimmer class="mb-3" v-for="(order, index) in 3" :key="index" :height="20"></shimmer>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="step">
              <ul class="global-list">
                <li>
                  <shimmer :height="5"></shimmer>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <table class="table">
          <div class="step-content">
            <div class="table-responsive">
              <shimmer :height="50"></shimmer>
            </div>
            <div class="account-table">
              <div class="table-responsive">
                <shimmer :height="155"></shimmer>
              </div>
            </div>
          </div>
        </table>
        <div class="row">
          <div class="col-md-4 offset-md-8">
            <shimmer :height="288"></shimmer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
  name: "after-track-order",
  mounted() {
    this.loadOrder();
  },
  components: {
    shimmer,
  },
  computed: {
    order() {
      return this.$store.getters.getInvoices;
    },
    shimmer() {
      return this.$store.state.module.shimmer;
    },
  },
  props: ["orderCode"],
  data() {
    return {
      code: this.orderCode,
      current_status: 0,
      status: ["pending", "confirm", "picked_up", "on_the_way", "delivered"],
      showModal: false,
      modal_height: 600,
      modal_width: 990,
      active_modal: "",
      product_name_show: "",
      refund_reason_show: "",
      total_amount_show: "",
      shipping_cost_show: "",
      refundable_amount_show: "",
      reject_reason_show: "",
      loading: false,
      current: false,
      is_shimmer: false,
      form: {
        order: "",
        order_detail_id: "",
        product_name: "",
        total_amount: "",
        shipping_cost: "",
        refundable_amount: "",
        refund_reason: "",
      },
    };
  },
  methods: {
    loadOrder() {
      let url = this.getUrl("user/invoice/" + this.code);

      this.$Progress.start();
      axios.get(url, this.code).then((response) => {
        this.is_shimmer = true;
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.$store.commit("getInvoices", response.data.order);
          let index = this.status.indexOf(this.order.delivery_status);
          if (index > -1) {
            this.current_status = index;
          }
          this.$Progress.finish();
        }
      });
    },
    refundModal(order_detail, index) {
      $("#refund_modal").modal("show");
      this.form.order = order_detail.order_id;
      this.form.order_detail_id = order_detail.id;
      this.form.product_name = order_detail.product_name;
      this.form.total_amount = this.priceFormat(
          order_detail.price * order_detail.quantity +
          order_detail.tax +
          order_detail.shipping_cost.total_cost -
          (order_detail.discount + order_detail.coupon_discount.discount),
      );
      this.form.shipping_cost = this.priceFormat(order_detail.shipping_cost.total_cost);
      if (this.settings.refund_with_shipping_cost) {
        this.form.refundable_amount = this.form.total_amount;
      } else {
        this.form.refundable_amount = this.priceFormat(
            order_detail.price * order_detail.quantity + order_detail.tax - (order_detail.discount + order_detail.coupon_discount.discount),
        );
      }

      this.order_dropdown = "";
      this.current = index;
    },
    refundSubmit() {
      let url = this.getUrl("refund-request");
      this.loading = true;

      axios
          .post(url, this.form)
          .then((response) => {
            if (response.data.error) {
              toastr.error(response.data.error, this.lang.Error + " !!");

              if (response.data.order_detail) {
                this.order.order_details[this.current] = response.data.order_detail;
              }
              this.loading = false;
              this.$modal.hide("refund_modal");

              this.errors = [];
            } else {
              toastr.success(response.data.success, this.lang.Success + " !!");
              this.loading = false;
              $("#refund_modal").modal("hide");

              this.errors = [];

              this.form.order = "";
              this.form.order_detail_id = "";
              this.form.product_name = "";
              this.form.total_amount = "";
              this.form.shipping_cost = "";
              this.form.refundable_amount = "";
              this.form.refund_reason = "";

              this.order.order_details[this.current] = response.data.order_detail;
            }

            this.loading = false;
          })
          .catch((error) => {
            if (error.response.status == 422) {
              this.errors = error.response.data.errors;
            }
            this.loading = false;
          });
    },
    rejectedModal(order_detail, index) {
      $("#rejected_modal").modal("show");

      this.product_name_show = order_detail.product_name;
      this.refund_reason_show = order_detail.refund.remark;
      this.total_amount_show = this.priceFormat(order_detail.refund.total_amount);
      this.shipping_cost_show = this.priceFormat(order_detail.refund.shipping_cost);
      this.refundable_amount_show = this.priceFormat(order_detail.refund.refund_amount);
      this.reject_reason_show = order_detail.refund.reject_reason;
    },
    download(id, code) {
      this.loading = true;
      axios
          .get(this.getUrl("user/invoice/download/" + id), {responseType: "arraybuffer"})
          .then((response) => {
            this.loading = false;
            if (response.data.error) {
              toastr.error(response.data.error, this.lang.Error + " !!");
            } else {
              let blob = new Blob([response.data], {type: "application/pdf"});
              let link = document.createElement("a");
              link.href = window.URL.createObjectURL(blob);
              link.download = code + ".pdf";
              link.click();
            }
          })
          .catch((error) => {
            this.loading = false;
            toastr.error(error.response.statusText, this.lang.Error + " !!");
          });
    },
  },
};
</script>
