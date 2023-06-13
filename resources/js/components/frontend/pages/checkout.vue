<template>
  <div class="sg-page-content">
    <div class="sg-breadcrumb">
      <div class="container">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">
            <router-link :to="{ name : 'cart' }">{{ lang.view_cart }}</router-link>
          </li>
          <li class="breadcrumb-item">{{ lang.check_out }}</li>
          <li class="breadcrumb-item"><a href="javascript:void(0)">{{ lang.confirm_order }}</a></li>
        </ol>
      </div>
    </div><!-- /.sg-breadcrumb -->

    <section class="shopping-cart">
      <div class="container">
        <div class="row">
          <div class="col-lg-8" v-if="true">
            <div class="sg-shipping">
              <div class="title">
                <h1>{{ lang.choose_a_way_to_collect_order }}</h1>
              </div>
              <div class="left-content" v-if="pick_hubs.length > 0">
                <form class="form-checkbox">
                  <div class="form-group">
                    <input type="radio" id="address" value="2"
                           v-model="checkout_method" @change="calculateShippingCost"
                           class="form-check-input">
                    <label for="address">{{ lang.use_shipping_billing_addresses }}</label>

                    <input type="radio" id="pickhub" value="1"
                           v-model="checkout_method" @change="calculateShippingCost"
                           class="form-check-input">
                    <label for="pickhub">{{ lang.use_pickHub_point }}</label>
                  </div>
                </form>
              </div>
              <div v-if="pick_hubs.length > 0 && checkout_method == 1" class="title mt-2">
                <h1>{{ lang.pickHub_point }}</h1>
              </div>

              <div class="left-content" v-if="checkout_method == 1 && pick_hubs.length > 0">
                <select v-model="pick_hub_id" @change="calculateShippingCost" class="form-control">
                  <option value="">{{ lang.select_pickHub_point }}</option>
                  <option v-for="(hub,index) in pick_hubs" :key="index" :value="hub.id">{{ hub.name }}
                    => {{ hub.address }}
                  </option>
                </select>
              </div>

              <div v-if="addresses.length > 0 && checkout_method == 2" class="title mt-2">
                <h1>{{ lang.shipping_address }}</h1>
              </div>
              <div class="row text-capitalize" v-if="addresses && checkout_method == 2">
                <div class="col-lg-6" v-for="(address, index) in addresses" :key="index">
                  <label :id="'shipping_'+address.id" class="address_selector">
                    <div class="sg-card address chekout"
                         :class="default_shipping.id == address.id ? 'selected' : ''">
                      <div class="justify-content-between d-flex">
                        <div class="text d-flex">
                          <div class="float-left">
                            <input class="form-check-input"
                                   type="radio" :value="address"
                                   name="radioNoLabel" :id="'shipping_'+address.id"
                                   v-model="default_shipping" @change="fetchShippingCost"
                                   aria-label="...">
                          </div>
                          <div class="address-right">
                            <ul class="global-list">
                              <li>{{ lang.name }} : {{ address.name }}</li>
                              <li>{{ lang.email }} : {{ address.email }}</li>
                              <li>{{ lang.phone }} : {{ address.phone_no }}</li>
                              <li>{{ lang.street_address }} : {{ address.address }}</li>
                              <li>{{ lang.country }} : {{ address.country }}</li>
                              <li>{{ lang.state }} : {{ address.state }}</li>
                              <li>{{ lang.city }} : {{ address.city }}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="dropdown">
                          <span class="mdi mdi-name mdi-dots-vertical dropbtn"></span>
                          <div class="dropdown-content">
                            <a href="javascript:void(0)"
                               @click="$refs.address_form.edit(address)">{{ lang.edit }}</a>
                            <a href="javascript:void(0)"
                               v-if="!address.default_shipping && !address.default_billing"
                               @click="$refs.address_form.deleteAddress(address.id)">{{ lang.delete }}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="col-lg-12">
                  <div class="form-check" v-if="addresses.length > 0">
                    <input class="form-check-input" v-model="same_address" checked id="same_as"
                           type="checkbox" @change="billingAddressSelect">
                    <label class="form-check-label" for="same_as">
                      {{ lang.address_is_shipping }}
                    </label>
                  </div>
                </div>
              </div><!-- /.accordion -->
              <div v-if="addresses.length > 0 && !same_address && checkout_method == 2" class="title">
                <h1>{{ lang.billing_address }}</h1>
              </div>
              <div class="row text-capitalize" v-if="addresses && !same_address && checkout_method == 2">
                <div class="col-lg-6" v-for="(address, index) in addresses" :key="index">
                  <label :id="'billing_'+address.id" class="address_selector">
                    <div class="sg-card address chekout"
                         :class="default_billing.id == address.id ? 'selected' : ''">
                      <div class="justify-content-between d-flex">
                        <div class="text d-flex">
                          <div class="float-left">
                            <input class="form-check-input"
                                   :checked="default_billing.id == address.id"
                                   type="radio" v-model="default_billing"
                                   :id="'billing_'+address.id" :value="address"
                                   aria-label="...">
                          </div>
                          <div class="address-right">
                            <ul class="global-list">
                              <li>{{ lang.name }} : {{ address.name }}</li>
                              <li>{{ lang.email }} : {{ address.email }}</li>
                              <li>{{ lang.phone }} : {{ address.phone_no }}</li>
                              <li>{{ lang.street_address }} : {{ address.address }}</li>
                              <li>{{ lang.country }} : {{ address.country }}</li>
                              <li>{{ lang.state }} : {{ address.state }}</li>
                              <li>{{ lang.city }} : {{ address.city }}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="dropdown" style="float:right;">
                          <span class="mdi mdi-name mdi-dots-vertical dropbtn"></span>
                          <div class="dropdown-content">
                            <a href="javascript:void(0)"
                               @click="$refs.address_form.edit(address)">{{ lang.edit }}</a>
                            <a href="javascript:void(0)"
                               v-if="!address.default_shipping && !address.default_billing"
                               @click="$refs.address_form.deleteAddress(address.id)">{{ lang.delete }}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <addressForm ref="address_form" v-if="checkout_method == 2"/>
            </div><!-- /.sg-shipping -->
          </div>
          <div class="col-lg-8" v-else-if="shimmer">
            <shimmer class="mb-3" :height="200" v-for="(addresses,i) in 3" :key="i"></shimmer>
          </div>

          <div class="col-lg-4 pl-lg-5" v-if="carts">
            <div class="order-summary">
              <h6>{{ lang.price_details }}</h6>
              <coupon v-if="authUser" :coupon_list="coupon_list" :cartList="carts"></coupon>
              <div class="sg-card">
                <payment_details
                    :sub_total="payment_form.sub_total"
                    :tax="payment_form.tax"
                    :discount_offer="payment_form.discount_offer"
                    :shipping_tax="payment_form.shipping_tax"
                    :coupon_discount="payment_form.coupon_discount"
                    :total="payment_form.total"
                ></payment_details>
                <div class="form-checkbox">
                  <div class="form-group" v-if="settings.privacy_agreement">
                    <input type="checkbox" id="tnc" value="2"
                           v-model="agreement"
                           class="form-check-input">
                    <label for="tnc">{{ lang.agreement }}
                      <a v-if="urlCheck(settings.privacy_agreement)"
                         :href="settings.privacy_agreement">{{ lang.terms }}</a>
                      <router-link v-else :to="'page/'+settings.privacy_agreement">{{
                          lang.terms
                        }}
                      </router-link>
                    </label>
                  </div>
                </div>
                <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                <a href="javascript:void(0)" v-else @click="confirmOrder"
                   class="btn btn-primary">{{ lang.proceed_to_payment }}</a>
              </div>
            </div>
          </div>
        </div><!-- /.row -->
      </div>
    </section><!-- /.shopping-cart -->

  </div>
</template>

<script>
import shimmer from "../partials/shimmer";
import telePhone from "../partials/telephone";
import coupon from "../partials/coupon";
import payment_details from "../partials/payment_details";
import addressForm from "../partials/addressForm";

export default {
  name: "checkout",
  components: {telePhone, shimmer, coupon, payment_details, addressForm},
  data() {
    return {
      coupon_area: true,
      coupon_list: [],
      checkout: {},
      form: {
        id: '',
        name: '',
        email: '',
        phone_no: '',
        address: '',
        country_id: '',
        state_id: '',
        city_id: '',
        postal_code: '',
      },
      shipping_cost: 0,
      address_area: false,
      default_shipping: {},
      default_billing: {},
      same_address: true,
      addresses: [],
      pick_hubs: [],
      pick_hub_id: '',
      checkout_method: 2,
      loading: false,
      save_loading: false,
      agreement: null,
      address_area_title: 'Add a new address',
      address_submit_button: "Add",
    }
  },
  mounted() {
    this.getAddress();
    this.address_submit_button = this.lang.add;
  },
  watch: {
    carts(newValue, oldValue) {
      this.getAddress();
    },
    lang(newValue, oldValue) {
      this.address_submit_button = this.lang.add;

    },
  },
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    },
    shimmer() {
      return this.$store.state.module.shimmer
    }
  },

  methods: {
    getAddress() {
      let url = this.getUrl('user/address');
      this.$Progress.start();
      axios.get(url).then((response) => {
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.commit('setLoginRedirection', '');
          let coupons = response.data.coupons;
          this.parseData(this.carts, response.data.checkouts, coupons);
          this.addresses = response.data.addresses;
          this.checkout = response.data.checkout;
          this.pick_hubs = response.data.pickup_hubs;

          for (let i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].default_shipping == 1) {
              this.default_shipping = this.addresses[i];
            }
            if (this.addresses[i].default_billing == 1) {
              this.default_billing = this.addresses[i];
            }
          }

          if (this.addresses.length === 0) {
            this.address_area = true;
          }

          this.$Progress.finish();
        }
      }).catch((error) => {
        this.$Progress.fail();
      })
    },
    confirmOrder() {
      if (this.settings.privacy_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }
      this.payment_form.checkout_method = this.checkout_method;
      if (this.checkout_method == 1) {
        if (!this.pick_hub_id) {
          return toastr.info(this.lang.please_choose_a_pickHub_point, this.lang.Error + ' !!');
        }
        this.payment_form.pick_hub_id = this.pick_hub_id;
      } else {
        if (!this.default_shipping.id) {
          return toastr.info(this.lang.please_choose_a_billing_address, this.lang.Error + ' !!');
        }
        this.payment_form.shipping_address = this.default_shipping;
        this.payment_form.billing_address = this.default_billing;
      }

      let url = this.getUrl('user/confirm-order');
      this.$Progress.start();
      this.loading = true;

      axios.post(url, this.payment_form).then((response) => {
        this.loading = false;
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$Progress.finish();
          this.$router.push({name: 'payment'});
        }
      }).catch((error) => {
        this.loading = false;
      });
    },
    billingAddressSelect() {
      if (this.same_address) {
        this.default_billing = this.default_shipping;
      } else {
        this.default_billing = {};
      }
    },
    parseData(carts, checkouts, coupons) {
      this.resetForm();
      for (let i = 0; i < carts.length; i++) {
        this.payment_form.quantity.push({id: carts[i].id, quantity: carts[i].quantity});
        this.payment_form.sub_total += parseFloat(carts[i].price * carts[i].quantity);
        this.payment_form.discount_offer += parseFloat(carts[i].discount * carts[i].quantity);
        if (this.settings.shipping_cost == 'product_base') {
          this.payment_form.shipping_tax += parseFloat(carts[i].shipping_cost);
        }
        this.payment_form.tax += parseFloat(carts[i].tax * carts[i].quantity);
      }

      if (checkouts) {
        for (let key in checkouts) {
          this.payment_form.shipping_tax += parseFloat(checkouts[key].shipping_cost);
          this.payment_form.tax += parseFloat(checkouts[key].tax);
        }
      }

      if (coupons && this.settings.coupon_system == 1) {
        this.coupon_list = coupons;
        for (let i = 0; i < coupons.length; i++) {
          this.payment_form.coupon_discount += parseFloat(coupons[i].discount);
        }
      }

      this.shipping_cost = this.payment_form.shipping_tax;

      this.calculateShippingCost();
    },
    fetchShippingCost() {
      this.default_billing = this.default_shipping;
      if (this.settings.shipping_fee_type == 'area_base') {
        let url = this.getUrl('user/find/shipping_cost');

        let form = {
          city_id: this.default_shipping.address_ids.city_id
        };

        axios.post(url, form).then((response) => {
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            this.payment_form.shipping_tax = response.data.shipping_cost;
            this.shipping_cost = this.payment_form.shipping_tax;
            this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));

            if (this.settings.tax_type == 'after_tax') {
              this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
              this.payment_form.total += this.payment_form.tax;
            } else {
              this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
            }
          }
        });
      }
      return false;
    },
    calculateShippingCost() {
      this.payment_form.shipping_tax = 0;
      if (this.checkout_method == 1) {
        this.payment_form.shipping_tax = 0;
      } else {
        this.payment_form.shipping_tax = this.shipping_cost;
      }

      if (this.settings.tax_type == 'after_tax' && this.settings.vat_and_tax_type == 'order_base') {
        this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
        this.payment_form.total += this.payment_form.tax;
      } else {
        this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
      }
    },
    getNumber(number) {
      this.form.phone_no = number;
    }
  }
}
</script>
