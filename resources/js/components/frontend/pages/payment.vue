<template>
  <div class="sg-page-content">
    <div class="sg-breadcrumb">
      <div class="container">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">
            <router-link :to="{ name : 'cart' }">{{ lang.view_cart }}</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name : 'checkout' }">{{ lang.check_out }}</router-link>
          </li>
          <li class="breadcrumb-item">{{ lang.confirm_order }}</li>
        </ol>
      </div>
    </div><!-- /.sg-breadcrumb -->

    <section class="shopping-cart">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 pl-lg-5" v-if="lengthCounter(settings)>0">
            <div class="sg-shipping">
              <div class="title">
                <h1>{{ lang.payment_method }}</h1>
              </div>
              <div class="card-list">
                <ul class="global-list grid-3">
                  <li v-if="settings.is_paypal_activated == 1 && settings.paypal_key">
                    <div class="input-checkbox">
                      <input type="radio" value="paypal" @change="razorPayRemove"
                             v-model="payment_form.payment_type"
                             id="paypal" name="radio">
                      <label for="paypal">
                        <img :src="getUrl('public/images/payment-method/paypal.svg')" alt="paypal"
                             class="img-fluid">
                        {{ lang.pay_with_payPal }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_stripe_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="stripe" @change="razorPayRemove" value="stripe"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="stripe">
                        <img :src="getUrl('public/images/payment-method/stripe.svg')" alt="stripe"
                             class="img-fluid">
                        {{ lang.pay_with_stripe }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_sslcommerz_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" name="radio" @change="razorPayRemove"
                             v-model="payment_form.payment_type"
                             id="ssl_commerze" value="ssl_commerze">
                      <label for="ssl_commerze">
                        <img :src="getUrl('public/images/payment-method/sslcommerze.svg')"
                             alt="sslcommerze" width="90">
                        {{ lang.pay_with_sSLCOMMERZE }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_paytm_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="paytm" value="paytm" @change="razorPayRemove"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="paytm">
                        <img :src="getUrl('public/images/payment-method/paytm.svg')" alt="paytm"
                             class="img-fluid">
                        {{ lang.pay_with_paytm }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_razorpay_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="razor_pay" value="razor_pay"
                             v-model="payment_form.payment_type" @change="integrateRazorPay"
                             name="radio">
                      <label for="razor_pay">
                        <img :src="getUrl('public/images/payment-method/razorpay.svg')" alt="razorpay"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_with_razorpay }}
                      </label>
                    </div>

                  </li>
                  <li v-if="settings.is_jazz_cash_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="jazzCash" @change="razorPayRemove" value="jazz_cash"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="jazzCash">
                        <img :src="getUrl('public/images/payment-method/jazzCash.svg')" alt="jazz_cash"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_with_jazzCash }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_mollie_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="mollie" @change="razorPayRemove" value="mollie"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="mollie">
                        <img :src="getUrl('public/images/payment-method/mollie.svg')" alt="mollie"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_with_mollie }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_paystack_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="paystack" @change="razorPayRemove" value="paystack"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="paystack">
                        <img :src="getUrl('public/images/payment-method/paystack.svg')" alt="paystack"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_with_paystack }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_flutterwave_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="flutter_wave" @change="razorPayRemove" value="flutter_wave"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="flutter_wave">
                        <img :src="getUrl('public/images/payment-method/fw.svg')" alt="flutter_wave"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_with_flutter }}
                      </label>
                    </div>
                  </li>
                  <li v-if="settings.is_mercado_pago_activated == 1">
                    <div class="input-checkbox">
                      <input type="radio" id="mercadopago" @change="razorPayRemove" value="mercadopago"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="mercadopago">
                        <img :src="getUrl('public/images/payment-method/mercado-pago.svg')"
                             alt="mercadopago"
                             width="90" class="img-fluid">{{ lang.pay_with_mercadopago }}</label>
                    </div>
                  </li>

                  <li v-if="settings.is_mid_trans_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="mid_trans" @change="razorPayRemove" value="mid_trans"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="mid_trans">
                        <img :src="getUrl('public/images/payment-method/midtrans.svg')" alt="mid_trans"
                             width="90" class="img-fluid">{{ lang.pay_with_mid_trans }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_telr_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="telr" @change="razorPayRemove" value="telr"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="telr">
                        <img :src="getUrl('public/images/payment-method/telr.svg')" alt="telr"
                             width="90" class="img-fluid">{{ lang.pay_with_telr }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_google_pay_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="google_pay" @change="razorPayRemove" value="google_pay"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="google_pay">
                        <img :src="getUrl('public/images/payment-method/google_pay.svg')"
                             alt="google_pay"
                             width="90" class="img-fluid">{{ lang.pay_with_google_pay }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_bkash_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="bkash" @change="razorPayRemove" value="bkash"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="bkash">
                        <img :src="getUrl('public/images/payment-method/bKash.svg')"
                             alt="bkash"
                             width="90" class="img-fluid">{{ lang.pay_with_bkash }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_nagad_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="nagad" @change="razorPayRemove" value="nagad"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="nagad">
                        <img :src="getUrl('public/images/payment-method/nagad.svg')"
                             alt="nagad"
                             width="90" class="img-fluid">{{ lang.pay_with_nagad }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_amarpay_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="amarpay" @change="razorPayRemove" value="amarpay"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="amarpay">
                        <img :src="getUrl('public/images/payment-method/amarpay.svg')"
                             alt="aamarpay"
                             width="90" class="img-fluid">{{ lang.pay_with_amarpay }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_skrill_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="skrill" @change="razorPayRemove" value="skrill"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="skrill">
                        <img :src="getUrl('public/images/payment-method/skrill.svg')"
                             alt="skrill"
                             width="90" class="img-fluid">{{ lang.pay_with_skrill }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_iyzico_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="iyzico" @change="razorPayRemove" value="iyzico"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="iyzico">
                        <img :src="getUrl('public/images/payment-method/iyzico.svg')"
                             alt="iyzico"
                             width="90" class="img-fluid">{{ lang.pay_with_iyzico }}</label>
                    </div>
                  </li>
                  <li v-if="settings.is_kkiapay_activated">
                    <div class="input-checkbox">
                      <input type="radio" id="kkiapay" @change="razorPayRemove" value="kkiapay"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="kkiapay">
                        <img :src="getUrl('public/images/payment-method/kkiapay.svg')"
                             alt="kkiapay"
                             width="90" class="img-fluid">{{ lang.pay_with_kkiapay }}</label>
                    </div>
                  </li>

                  <li v-if="!code && settings.pay_later_system == 1 && authUser">
                    <div class="input-checkbox">
                      <input type="radio" id="pay_later" @change="razorPayRemove"
                             value="pay_later"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="pay_later">
                        <img :src="getUrl('public/images/payment-method/paylater.svg')" :alt="payment_form.payment_type"
                             width="90"
                             class="img-fluid">
                        {{ lang.pay_later }}
                      </label>
                    </div>
                  </li>
                  <li v-if="payment_form.total > 0 && !code && !check_cod">
                    <div class="input-checkbox">
                      <input type="radio" id="cash" @change="razorPayRemove"
                             value="cash_on_delivery"
                             v-model="payment_form.payment_type" name="radio">
                      <label for="cash">
                        <img :src="getUrl('public/images/payment-method/cash.svg')" :alt="payment_form.payment_type"
                             class="img-fluid">
                        {{ lang.cash_on_delivery }}
                      </label>
                    </div>
                  </li>
                  <li v-if="!code && addons.includes('offline_payment')"
                      v-for="(offline,index) in offline_methods" :key="index">
                    <div class="input-checkbox">
                      <input type="radio" :id="'offline'+offline.id"
                             @change="offlineCheck(offline)"
                             value="offline_method"
                             name="radio" v-model="payment_form.payment_type">
                      <label :for="'offline'+offline.id">
                        <img v-lazy="offline.image" :alt="offline.name"
                             class="img-fluid">
                        {{ offline.name }}
                      </label>
                    </div>
                  </li>
                </ul>
                <div class="row text-center"
                     v-if="payment_form.total > 0 && authUser && authUser.balance >= payment_form.total && settings.wallet_system == 1">
                  <div class="col-lg-12">
                    <div class="separator mb-3">
                                    <span class="bg-white px-3">
                                        <span class="opacity-60">{{ lang.or }}</span>
                                    </span>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <p>{{ lang.your_wallet_balance }} : {{ priceFormat(authUser.balance) }}</p>
                    <a href="javascript:void(0)" @click="payment('wallet')" v-if="!wallet_loading"
                       class="btn btn-primary">{{ lang.pay_with_wallet }}</a>
                    <loading_button v-if="wallet_loading"
                                    :class_name="'btn btn-primary'"></loading_button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8" v-else-if="shimmer">
            <shimmer class="mb-3" :height="200" v-for="(payment,i) in 3" :key="i"></shimmer>
          </div>
          <div class="col-lg-4 pl-lg-5">
            <div class="order-summary">
              <h6>{{ lang.price_details }}</h6>

              <div class="sg-card">
                <form
                    :action="authUser ? getUrl('user/complete-order?code='+code) :getUrl('user/complete-order?code='+code+'&guest=1')"
                    method="post">
                  <input type="hidden" name="_token" :value="token">
                  <input type="hidden" name="trx_id" :value="trx_id">
                  <input type="hidden" name="payment_type" :value="payment_form.payment_type">
                  <input type="hidden" name="amount" :value="payment_form.total">
                  <div ref="razor_pay"></div>
                  <payment_details
                      :sub_total="payment_form.sub_total"
                      :tax="payment_form.tax"
                      :discount_offer="payment_form.discount_offer"
                      :shipping_tax="payment_form.shipping_tax"
                      :coupon_discount="payment_form.coupon_discount"
                      :total="payment_form.total"
                  ></payment_details>
                </form>

                <loading_button
                    v-if="loading && (payment_form.payment_type == 'cash_on_delivery' || payment_form.payment_type == 'pay_later')"
                    :class_name="'btn btn-primary w-100'"></loading_button>

                <a :href="getUrl('stripe/redirect?trx_id=' + carts[0].trx_id + '&code=' + $route.params.code)" class="btn btn-primary w-100"
                   v-if="payment_form.payment_type == 'stripe' ">
                  {{ lang.pay_now }}</a>

                <a href="javascript:void(0)" class="btn btn-primary disable_btn"
                   v-if="!payment_form.payment_type">
                  {{ lang.pay_now }}</a>

                <a :href="getUrl('user/payment/paytmRedirect?trx_id=' + carts[0].trx_id + '&code=' + $route.params.code + '&payment_type=paytm')" class="btn btn-primary w-100"
                   v-if="payment_form.payment_type == 'paytm' ">
                  {{ lang.pay_now }}</a>

                <a :href="getUrl('get/ssl-response?payment_type=ssl_commerze&code=' + $route.params.code + '&trx_id=' + carts[0].trx_id)" class="btn btn-primary w-100"
                   v-if="payment_form.payment_type == 'ssl_commerze' ">
                  {{ lang.pay_now }}</a>

                <a href="javascript:void(0)" @click="payment" class="btn btn-primary w-100"
                   v-show="!loading"
                   v-if="payment_form.payment_type == 'cash_on_delivery' || payment_form.payment_type == 'pay_later'">{{
                    lang.confirm
                  }}</a>

                <offline_method v-if="offline_methods.length > 0 && !code && addons.includes('offline_payment')" :trx_id="trx_id"
                                :code="code" :amount="payment_form.total" :offline_method="offline_method"
                                :loading="loading"></offline_method>

                <a :href="getUrl('mollie/payment?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary w-100" v-if="payment_form.payment_type == 'mollie'"> {{ lang.pay_now }}</a>

                <a :href="getUrl('telr/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary w-100" v-if="payment_form.payment_type == 'telr'"> {{ lang.pay_now }}</a>
                <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#paystack_modal"
                   v-if="payment_form.payment_type == 'paystack' ">
                  {{ lang.pay_now }}</a>

                <flutter_wave v-if="settings.is_flutterwave_activated == 1" :trx_id="trx_id" :code="code"
                              :amount="payment_form.total" :type="payment_form.payment_type" ref="flutter_wave"></flutter_wave>

                <a :href="getUrl('mercadopago/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary w-100"
                   v-if="payment_form.payment_type == 'mercadopago'">
                  {{ lang.pay_now }}</a>

                <google_pay v-if="payment_form.payment_type == 'google_pay'" :trx_id="trx_id" :code="code"
                            :amount="payment_form.total"></google_pay>

                <a :href="getUrl('amarpay/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary"
                   v-if="payment_form.payment_type == 'amarpay'">
                  {{ lang.pay_now }}</a>

                <a :href="getUrl('bkash/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary"
                   v-if="payment_form.payment_type == 'bkash'">
                  {{ lang.pay_now }}</a>

                <a :href="getUrl('nagad/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary"
                   v-if="payment_form.payment_type == 'nagad'">
                  {{ lang.pay_now }}</a>
                <a :href="getUrl('skrill/redirect?code='+$route.params.code+'&trx_id='+carts[0].trx_id)"
                   class="btn btn-primary"
                   v-if="payment_form.payment_type == 'skrill'">
                  {{ lang.pay_now }}</a>
                <kkiapay v-if="settings.is_kkiapay_activated && settings.kkiapay_public_key && payment_form.payment_type == 'kkiapay' && xof" :trx_id="trx_id" :code="code" :amount="payment_form.total"
                         :payment_type="payment_form.payment_type" :xof="xof" :type="'order'"></kkiapay>

                <paypal v-if="settings.is_paypal_activated == 1 && settings.paypal_key && payment_form.payment_type == 'paypal'" :trx_id="trx_id" :code="code"
                        :amount="payment_form.total" :payment_type="payment_form.payment_type" :type="'order'"></paypal>

                <form name="jsform" :action="jazz_url" method="get">
                  <input v-for="(value,name) in jazz_data" :key="name" type="hidden" :name="name"
                         :value="value">
                  <button type="submit" class="btn btn-primary w-100"
                          v-show="!loading"
                          v-if="payment_form.payment_type == 'jazz_cash'">{{ lang.pay_now }}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div><!-- /.row -->
      </div>
    </section><!-- /.shopping-cart -->

    <div class="modal fade" id="paystack_modal" tabindex="-1" aria-labelledby="paystack_modal"
         aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.pay_with_paystack }}</h5>
            <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <paystack v-if="settings.is_paystack_activated == 1" :trx_id="trx_id" :paystack_key="settings.paystack_pk"
                    :ngn_exchange_rate="settings.ngn_exchange_rate" :code="code" :amount="payment_form.total"
                    :type="payment_form.payment_type"></paystack>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import shimmer from "../partials/shimmer";
import paypal from "../payment_partials/paypal";
import offline_method from "../payment_partials/offline_method";
import kkiapay from "../payment_partials/kkiapay";
import paystack from "../payment_partials/paystack";
import Flutter_wave from "../payment_partials/flutter_wave";
import payment_details from "../partials/payment_details";
import midtrans from "../payment_partials/midtrans";
import google_pay from "../payment_partials/google_pay";
import apple_pay from "../payment_partials/apple_pay";

export default {
  name: "payment",
  data() {
    return {
      offline_methods: [],
      indian_currency: {},
      check_cod: false,
      razor_laod: false,
      ssl: {
        name: null,
        email: null,
        phone: null,
      },
      razor_form: {
        name: null,
        email: null,
        phone: null,
        description: null,
      },
      trx_id: '',
      offline_method: {
        id: '',
        name: '',
        image: '',
        instructions: '',
      },
      jazz_data: [],
      jazz_url: '',
      wallet_loading: false,
      code: typeof this.$route.params.code != 'undefined' ? this.$route.params.code : '',
      loading: false,
      offline_modal: false,
      showStripeModal: false,
      mid_trans_token: '',
      xof: '',
    }
  },
  components: {
    Flutter_wave, google_pay,apple_pay,
    shimmer, paypal, offline_method, paystack, payment_details, midtrans,kkiapay
  },
  mounted() {
    this.takeOrders();
  },
  watch: {
    carts(newValue, oldValue) {
      this.$router.go(-1);
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
    takeOrders() {
      let carts = this.carts;
      this.$Progress.start();
      let url = this.getUrl('user/payment-order?code=' + this.code);
      this.resetForm();
      axios.get(url).then((response) => {
        this.$store.commit('setShimmer', 0);
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.commit('setLoginRedirection', '');
          this.$Progress.finish();
          let orders = response.data.orders;
          this.indian_currency = response.data.indian_currency;
          this.xof = response.data.xof;
          this.offline_methods = response.data.offline_methods;
          this.jazz_data = response.data.jazz_data;
          this.jazz_url = response.data.jazz_url;
          this.mid_trans_token = response.data.mid_trans_token;

          if (response.data.check_cod) {
            this.check_cod = response.data.check_cod;
          }

          if (orders) {
            for (let i = 0; i < orders.length; i++) {
              this.payment_form.sub_total += parseFloat(orders[i].sub_total);
              this.payment_form.discount_offer += parseFloat(orders[i].discount);
              this.payment_form.shipping_tax += parseFloat(orders[i].shipping_cost);
              this.payment_form.tax += parseFloat(orders[i].total_tax);
              if (this.settings.coupon_system == 1) {
                this.payment_form.coupon_discount += parseFloat(orders[i].coupon_discount);
                // alert(this.payment_form.coupon_discount);
              }

              this.trx_id = orders[i].trx_id;
            }

            if (this.settings.tax_type == 'after_tax' && this.settings.vat_and_tax_type == 'order_base') {
              this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
              this.payment_form.total += parseFloat(this.payment_form.tax);
            } else {
              this.payment_form.total = (parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax)) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
            }
          }

          if (!this.trx_id) {
            toastr.warning(this.lang.something_went_wrong_try_chooing_address, this.lang.Warning + ' !!');
            this.$router.push({name: 'checkout'});
          }
        }
      })
    },
    integrateRazorPay() {
      this.razorPayRemove();
      if (this.settings.is_razorpay_activated == 1 && this.indian_currency) {
        let myScript = document.createElement('script');

        myScript.setAttribute('type', 'text/javascript');
        myScript.setAttribute('language', 'javascript');
        myScript.setAttribute('data-key', this.settings.razor_key);
        myScript.setAttribute('data-amount', this.round(this.payment_form.total * 100 * this.indian_currency.exchange_rate));
        myScript.setAttribute('data-name', this.settings.system_name);
        myScript.setAttribute('data-description', 'Razorpay');
        myScript.setAttribute('data-image', this.settings.dark_logo);
        myScript.setAttribute('data-prefill.name', '');
        myScript.setAttribute('data-prefill.email', '');
        myScript.setAttribute('data-prefill.address', '');
        myScript.setAttribute('data-theme.color', this.settings.menu_background_color);
        myScript.setAttribute('src', this.getUrl('public/frontend/js/razor_pay_checkout.js'));
        // Append script
        this.$refs.razor_pay.insertAdjacentElement('afterend', myScript);
      }

    },
    razorPayRemove() {
      $('.razor_pay').removeClass('d-none');

      var razorKeys = document.querySelectorAll('.razorpay-payment-button');

      for (let i = 0; i < razorKeys.length; i++) {
        razorKeys[i].style.display = "none";
      }

      this.offline_method.name = '';
      this.offline_method.image = '';
      this.offline_method.instructions = '';
    },
    offlineCheck(offline) {
      this.razorPayRemove();
      this.offline_method.id = offline.id;
      this.offline_method.name = offline.name;
      this.offline_method.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    },
    payment(wallet) {
      let payment_type = '';
      if (wallet == 'wallet') {
        this.wallet_loading = true;
        payment_type = wallet;
      } else {
        payment_type = this.payment_form.payment_type;
      }

      if (!payment_type) {
        toastr.warning(this.lang.please_choose_a_payment_method, this.lang.Warning + ' !!');
        return false;
      }
      let form = {
        id: this.offline_method.id,
        file: this.product_form.image,
        payment_type: payment_type,
        trx_id: this.trx_id,
      };

      let url = this.getUrl('user/complete-order?code=' + this.code);

      if (payment_type == 'cash_on_delivery' || payment_type == 'pay_later' || this.offline_method.id || payment_type == 'wallet') {

        if (wallet != 'wallet') {
          this.loading = true;
        }

        axios.post(url, form, {

          transformRequest: [function (data, headers) {
            return objectToFormData(data)
          }]
        }).then((response) => {
          this.wallet_loading = false;
          this.loading = false;
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            $('#offline').modal('hide');
            let image_selector = document.getElementById('upload-image');
            if (image_selector) {
              image_selector.innerHTML = '';
            }
            if (this.code) {
              this.$router.push({name: 'get.invoice', params: {orderCode: this.code}});
            } else {
              this.$router.push({name: 'invoice.list', params: {trx_id: this.trx_id}});
            }
          }
        }).catch((error) => {
          this.loading = false;
        });
      } else if (payment_type == 'paystack') {
        return this.$refs.paystack.payStack();
      }
    }
  },

}
</script>
