<template>
  <div class="sg-page-content">
    <div class="sg-breadcrumb" v-if="is_shimmer">
      <div class="container">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">{{ lang.view_cart }}</li>
          <li class="breadcrumb-item"><a href="javascript:void(0)">{{ lang.check_out }}</a></li>
          <li class="breadcrumb-item"><a href="javascript:void(0)">{{ lang.confirm_order }}</a></li>
        </ol>
      </div>
    </div><!-- /.sg-breadcrumb -->
    <section class="sg-global-content">
      <div class="container" v-if="is_shimmer">
        <div class="row" v-if="cartList && cartList.length > 0">
          <div class="col-lg-8 justify-content-end">
            <div class="accordion" id="accordionExample">
              <div v-if="seller_carts" class="accordion-item"
                   v-for="(seller_cart,seller_id,seller_index) in seller_carts"
                   :class="{'cart_accordion' : collapseAttribute[seller_index].status }">
                <div class="accordion-header" :id="'cart'+seller_index">
                  <button class="accordion-button title"
                          @click="collapseAttribute[seller_index].status = !collapseAttribute[seller_index].status"
                          :class="{ 'collapsed' :  !collapseAttribute[seller_index].status }"
                          type="button"
                          data-bs-toggle="collapse" data-bs-target="#category"
                          aria-expanded="true" aria-controls="collapse1">
                    {{ collapseAttribute[seller_index].name }}
                  </button>
                </div>
                <div :id="'cart'+seller_index" class="accordion-collapse collapse"
                     :class="{ 'show' : collapseAttribute[seller_index].status }"
                     :aria-labelledby="'cart'+seller_index"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="sg-table table-responsive">
                      <table class="table">
                        <thead>
                        <tr>
                          <th scope="col">{{ lang.product }}</th>
                          <th scope="col">{{ lang.unit_price }}</th>
                          <th scope="col">{{ lang.quantity }}</th>
                          <th scope="col">{{ lang.total_price }}</th>
                          <th scope="col">{{ lang.action }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(cart,index) in carts" :key="index"
                            v-if="seller_id == cart.seller_id">
                          <th scope="row">
                            <div class="product">
                              <router-link
                                  :to="{name: 'product.details',params: {slug:cart.product_slug}}">
                                                            <span class="product-thumb">
                                                                <img :src="cart.image_72x72" :alt="cart.product_name"
                                                                     class="img-fluid">
                                                            </span>
                                <div class="text">
                                  <p>{{ cart.product_name }}</p>
                                  <span v-if="cart.sku">{{ lang.SKU }}: {{
                                      cart.sku
                                    }}</span>
                                </div>
                              </router-link>
                            </div>
                          </th>
                          <td>
                                                        <span v-if="cart.discount > 0"><del>{{
                                                            priceFormat((cart.price))
                                                          }}</del></span>
                            <span>{{ priceFormat(cart.price - cart.discount) }}</span>
                          </td>
                          <td v-if="cart.is_digital_product == 1">
                            1
                          </td>
                          <td width="10%" v-else>
                            <div class="product-quantity">
                              <div class="quantity" data-trigger="spinner">
                                <a class="btn pull-left" @click="cartMinus(index)"
                                   href="javascript:void(0);"
                                   data-spin="down"><span
                                    class="mdi mdi-name mdi-minus"></span></a>
                                <input type="text" name="quantity"
                                       v-model="payment_form.quantity[index].quantity"
                                       title="quantity" readonly
                                       class="input-text">
                                <a class="btn pull-right" @click="cartPlus(index)"
                                   href="javascript:void(0);" data-spin="up"><span
                                    class="mdi mdi-name mdi-plus"></span></a>
                              </div>
                            </div>
                          </td>
                          <td><span v-if="cart.discount > 0"><del>{{
                              priceFormat((cart.price * payment_form.quantity[index].quantity))
                            }}</del></span>
                            <span>{{
                                priceFormat((cart.price - cart.discount) * payment_form.quantity[index].quantity)
                              }}</span></td>
                          <td>
                            <div class="delete">
                              <a @click="deleteCart(cart.id)"
                                 href="javascript:void(0)">{{ lang.delete }}</a>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 pl-lg-5">
            <div class="order-summary">
              <h6>{{ lang.price_details }}</h6>
              <coupon v-if="authUser" :coupon_list="coupon_list" :cartList="cartList"></coupon>
              <div class="sg-card">
                <payment_details
                    :sub_total="payment_form.sub_total"
                    :tax="payment_form.tax"
                    :discount_offer="payment_form.discount_offer"
                    :shipping_tax="payment_form.shipping_tax"
                    :coupon_discount="payment_form.coupon_discount"
                    :total="payment_form.total"
                ></payment_details>
                <router-link :to="{ name : 'checkout' }"
                             class="btn btn-primary">{{ lang.proceed_to_checkout }}
                </router-link>
              </div>
            </div>
          </div>
        </div><!-- /.row -->
        <div v-else class="justify-content-center text-center">
          <h4 class="breadcrumb-item text-danger"> {{ lang.no_product_found }} </h4>
        </div>
      </div>
      <div class="container" v-else-if="shimmer">
        <div class="row">
          <div class="col-lg-8 justify-content-end">
            <shimmer class="mb-3" :height="100" v-for="(cart,i) in 4" :key="i"></shimmer>
          </div>
          <div class="col-lg-4 pl-lg-5">
            <shimmer :height="400"></shimmer>
          </div>
        </div>
      </div>
    </section><!-- /.shopping-cart -->

  </div>
</template>

<script>
import shimmer from "../partials/shimmer";
import coupon from "../partials/coupon";
import payment_details from "../partials/payment_details";

export default {
  name: "cart",
  components: {
    shimmer, coupon, payment_details
  },

  data() {
    return {
      carts: [],
      seller_carts: [],
      coupon_area: true,
      coupon: [],
      cart_length: 0,
      collapseAttribute: [],
      disable: false,
      is_shimmer: false,
      coupon_list: [],
    }
  },
  mounted() {
    this.getCheckout();
  },
  watch: {
    cartList(newValue, oldValue) {
      this.getCheckout();
    },
  },
  computed: {
    cartList() {
      return this.$store.getters.getCarts;
    },
    shimmer() {
      return this.$store.state.module.shimmer
    }
  },
  methods: {
    getCheckout() {
      this.$Progress.start();
      let url = this.getUrl('cart/list');
      axios.get(url).then((response) => {
        this.is_shimmer = true;
        this.$store.commit('setShimmer', 0);
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$Progress.finish();
          let checkouts = response.data.checkouts;
          let coupons = response.data.coupons;
          this.parseData(this.cartList, checkouts, coupons);
        }
      })
    },
    deleteCart(id) {
      if (confirm("Are you sure?")) {
        let url = this.getUrl('cart/delete/' + id);
        axios.get(url).then((response) => {
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            this.$store.dispatch('carts', response.data.carts);
          }
        })
      }
    },
    checkout() {
      if (!this.authUser) {
        toastr.error(this.lang.login_first, this.lang.Error + ' !!');
        this.$store.commit('setLoginRedirection', this.$route.name);
        this.$router.push({name: 'login'});
        return false;
      }
      if (this.authUser.user_type != 'customer') {
        return toastr.warning(this.lang.you_are_not_able_topurchase_products, this.lang.Warning + ' !!');
      }
      this.$router.push({name: 'checkout'});
    },
    parseData(carts, checkouts, coupons) {
      this.resetForm();
      this.collapseAttribute = [];
      this.carts = [];

      if (carts) {
        for (let i = 0; i < carts.length; i++) {
          this.payment_form.quantity.push({id: carts[i].id, quantity: carts[i].quantity});
          this.carts.push(carts[i]);
          this.payment_form.sub_total += parseFloat(carts[i].price * carts[i].quantity);
          this.payment_form.discount_offer += (parseFloat(carts[i].discount) * carts[i].quantity);
          if (this.settings.shipping_cost == 'product_base') {
            this.payment_form.shipping_tax += parseFloat(carts[i].shipping_cost);
          }

          this.payment_form.tax += parseFloat(carts[i].tax * carts[i].quantity);
        }
      }

      if (checkouts) {
        this.seller_carts = checkouts;
        this.coupon = checkouts;

        for (let key in this.seller_carts) {
          this.collapseAttribute.push({
            name: checkouts[key].name,
            image: checkouts[key].image,
            status: true,
          });
          if (this.settings.shipping_cost != 'area_base') {
            this.payment_form.shipping_tax += parseFloat(checkouts[key].shipping_cost);
          }
          this.payment_form.tax += parseFloat(checkouts[key].tax);
          if (this.settings.coupon_system == 1) {
            this.payment_form.coupon_discount += parseFloat(checkouts[key].discount);
          }
        }
      }

      if (coupons && this.settings.coupon_system == 1) {
        this.coupon_list = coupons;
        for (let i = 0; i < coupons.length; i++) {
          this.payment_form.coupon_discount += parseFloat(coupons[i].discount);
        }
      }

      if (this.settings.tax_type == 'after_tax' && this.settings.vat_and_tax_type == 'order_base') {
        this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
        this.payment_form.total += this.payment_form.tax;
      } else {
        this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
      }

    },
    cartPlus(index) {
      if (this.disable) {
        return false;
      }
      if (this.payment_form.quantity[index].quantity < this.carts[index].current_stock) {
        let formData = {
          id: this.carts[index].id,
          quantity: 1,
        };

        this.disable = true;
        let url = this.getUrl('cart/update');
        axios.post(url, formData).then((response) => {
          this.disable = false;
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            this.$store.dispatch('carts', response.data.carts);
            let coupons = response.data.coupons;
            this.parseData(this.cartList, response.data.checkouts, coupons);
          }
        }).catch((error) => {
          this.disable = false;
        })


      } else {
        toastr.warning(this.lang.Only + ' ' + this.carts[index].current_stock + ' ' + this.lang.items_available_at_this_time, this.lang.Warning + ' !!');
      }
    },
    cartMinus(index) {
      if (this.disable) {
        return false;
      }
      if (this.payment_form.quantity[index].quantity > this.carts[index].min_quantity) {
        let formData = {
          id: this.carts[index].id,
          quantity: -1,
          status: 'minus',
        };

        let url = this.getUrl('cart/update');
        this.disable = true;

        axios.post(url, formData).then((response) => {
          this.disable = false;
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            this.$store.dispatch('carts', response.data.carts);
            let coupons = response.data.coupons;
            let checkouts = response.data.checkouts;
            this.parseData(this.cartList, checkouts, coupons);
          }
        })


      } else {
        toastr.warning(this.lang.please_order_minimum_of + ' ' + this.carts[index].min_quantity + ' ' + this.lang.Quantity, this.lang.Warning + ' !!');
      }
    }
  }
}
</script>
