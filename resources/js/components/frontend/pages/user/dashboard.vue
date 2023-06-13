<template>
  <div class="sg-page-content" v-if="authUser && authUser.user_type == 'customer'">

    <section class="sg-global-content">
      <div class="container">
        <div class="row">
          <user_sidebar :current="current"></user_sidebar>
          <div class="col-lg-9">
            <div class="profile-banner-image">
              <a href="#"><img v-lazy="settings.user_dashboard_banner" alt="profile-banner"></a>
            </div>
            <div class="title justify-between">
              <h1>{{ lang.dashboard }}</h1>
            </div>
            <div class="row">
              <div class="col-md-4">
                <router-link :to="{ name : 'order.history' }">
                  <div class="card text-center profile-card d-flex justify-center profile-card-red">
                    <div class="profile-card-title mb-3">{{ lang.total_order }}</div>
                    <h3 class="text-white ">{{ profileOrders ? profileOrders.total : 0 }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4">
                <router-link :to="{name : 'cart'}">
                  <div class="card text-center profile-card d-flex justify-center profile-card-gray">
                    <div class="profile-card-title mb-3">{{ lang.product_cart }}</div>
                    <h3 class="text-white"> {{ carts ? carts.length : 0 }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4">
                <router-link :to="{ name : 'wishlist' }">
                  <div class="card text-center profile-card d-flex justify-center profile-card-green">
                    <div class="profile-card-title mb-3">{{ lang.product_you_love }}</div>
                    <h3 class="text-white">{{ wishlists }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4" v-if="settings.wallet_system == 1">
                <router-link :to="{ name : 'wallet.history' }">
                  <div class="card text-center profile-card d-flex justify-center profile-card-white">
                    <div class="profile-card-title text-black mb-3">{{ lang.wallet_balance }}</div>
                    <h3 class="text-black">{{ priceFormat(authUser.balance) }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4" v-if="settings.wallet_system == 1">
                <div class="card text-center profile-card d-flex justify-center profile-card-white">
                  <div class="profile-card-title mb-3 text-black">{{ lang.last_recharge }}</div>
                  <h3 class="text-black">{{ priceFormat(authUser.last_recharge) }}</h3>
                </div>
              </div>
              <div class="col-md-4" v-if="settings.wallet_system == 1">
                <a href="#" data-bs-target="#recharge_wallet" data-bs-toggle="modal">
                  <div
                      class="card text-center profile-card d-flex justify-center profile-card-white-outline-dashed">
                    <div class="profile-card-title mb-3">{{ lang.recharge_wallet }}</div>
                    <h3><i class="mdi mdi-plus"></i></h3>
                  </div>
                </a>
              </div>

              <div class="col-md-4" v-if="addons.includes('reward')">
                <router-link :to="{name : 'reward.history'}">
                  <div class="card text-center profile-card d-flex justify-center profile-card-white">
                    <div class="profile-card-title mb-3 text-black">{{ lang.total_rewards }}</div>
                    <h3 class="text-black"> {{ totalReward ? totalReward.reward_sum : 0 }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4" v-if="addons.includes('reward')">
                <router-link :to="{name : 'reward.history'}">
                  <div class="card text-center profile-card d-flex justify-center profile-card-white">
                    <div class="profile-card-title mb-3 text-black">{{ lang.current_rewards }}</div>
                    <h3 class="text-black"> {{ totalReward ? totalReward.rewards : 0 }}</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4"
                   v-if="settings.reward_convert_rate > 0 && totalReward && totalReward.rewards > 0 && addons.includes('reward') && settings.wallet_system == 1">
                <a href="#" data-bs-target="#convert_reward" data-bs-toggle="modal">
                  <div class="card text-center profile-card d-flex justify-center profile-card-white">
                    <div class="profile-card-title mb-3">{{ lang.convert_reward_wallet }}</div>
                    <h3><i class="mdi mdi-transfer"></i></h3>
                  </div>
                </a>
              </div>
            </div>

            <div class="sg-shipping" v-if="authUser">
              <div class="row">
                <div class="col-md-6">
                  <div class="title mt-3 mb-0 b-0">
                    <h1>{{ lang.default_shipping }}</h1>
                  </div>
                  <div class="sg-card address" v-if="default_shipping">
                    <div class="justify-content-between d-flex">
                      <div class="text">
                        <ul class="global-list">
                          <li>{{ lang.name }}: {{ default_shipping.name }}</li>
                          <li>{{ lang.email }}: {{ default_shipping.email }}</li>
                          <li>{{ lang.phone }}: {{ default_shipping.phone_no }}</li>
                          <li>{{ lang.street_address }}: {{ default_shipping.default_shipping }}</li>
                          <li>{{ lang.city }}: {{ default_shipping.city }}</li>
                          <li>{{ lang.country }}: {{ default_shipping.country }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="title mt-3 mb-0 b-0">
                    <h1>{{ lang.default_billing }}</h1>
                  </div>
                  <div class="sg-card address" v-if="default_billing">
                    <div class="justify-content-between d-flex">
                      <div class="text">
                        <ul class="global-list">
                          <li>{{ lang.name }}: {{ default_billing.name }}</li>
                          <li>{{ lang.email }}: {{ default_billing.email }}</li>
                          <li>{{ lang.phone }}: {{ default_billing.phone_no }}</li>
                          <li>{{ lang.street_address }}: {{ default_billing.default_shipping }}</li>
                          <li>{{ lang.city }}: {{ default_billing.city }}</li>
                          <li>{{ lang.country }}: {{ default_billing.country }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12" v-if="profileOrders && profileOrders.total > 0">
              <div class="sg-table">
                <div class="title justify-content-between">
                  <h1>{{ lang.order_history }}</h1>
                </div>
                <orders :orders="profileOrders.data" :user_dashboard="false"></orders>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.container -->
    </section>
    <div class="modal fade" id="recharge_wallet" tabindex="-1" aria-labelledby="recharge_wallet"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.wallet_recharge }}</h5>
            <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="sg-shipping">
                  <div class="sg-card">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="amount">{{ lang.amount }}</label>
                          <input type="text" class="form-control" id="amount" @input="removeData"
                                 v-model="form.total" :placeholder="lang.enter_amount">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-list" :class="{ 'disable_section' : form.total == 0 }">
                    <ul class="global-list grid-3">
                      <li v-if="settings.is_paypal_activated == 1">
                        <div class="input-checkbox">
                          <input type="radio" value="paypal" @change="razorPayRemove"
                                 v-model="payment_form.payment_type"
                                 id="paypal" name="radio">
                          <label for="paypal">
                            <img :src="getUrl('public/images/payment-method/paypal.svg')" :alt="payment_form.payment_type"
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
                            <img :src="getUrl('public/images/payment-method/stripe.svg')" :alt="payment_form.payment_type"
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
                                 :alt="payment_form.payment_type" width="90">
                            {{ lang.pay_with_sSLCOMMERZE }}
                          </label>
                        </div>
                      </li>
                      <li v-if="settings.is_paytm_activated == 1">
                        <div class="input-checkbox">
                          <input type="radio" id="paytm" value="paytm" @change="razorPayRemove"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="paytm">
                            <img :src="getUrl('public/images/payment-method/paytm.svg')" :alt="payment_form.payment_type"
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
                            <img :src="getUrl('public/images/payment-method/razorpay.svg')" :alt="payment_form.payment_type"
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
                            <img :src="getUrl('public/images/payment-method/jazzCash.svg')" :alt="payment_form.payment_type"
                                 width="90"
                                 class="img-fluid">
                            {{ lang.pay_with_jazzCash }}
                          </label>
                        </div>
                      </li>
                      <li v-if="settings.is_paystack_activated == 1">
                        <div class="input-checkbox">
                          <input type="radio" id="paystack" @change="razorPayRemove" value="paystack"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="paystack">
                            <img :src="getUrl('public/images/payment-method/paystack.svg')" :alt="payment_form.payment_type"
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
                            <img :src="getUrl('public/images/payment-method/fw.svg')" :alt="payment_form.payment_type"
                                 width="90"
                                 class="img-fluid">
                            {{ lang.pay_with_flutter }}
                          </label>
                        </div>
                      </li>
                      <li v-if="settings.is_mollie_activated == 1">
                        <div class="input-checkbox">
                          <input type="radio" id="mollie" @change="razorPayRemove" value="mollie"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="mollie">
                            <img :src="getUrl('public/images/payment-method/mollie.svg')" :alt="payment_form.payment_type"
                                 width="90"
                                 class="img-fluid">
                            {{ lang.pay_with_mollie }}
                          </label>
                        </div>
                      </li>
                      <li v-if="settings.is_mercado_pago_activated == 1">
                        <div class="input-checkbox">
                          <input type="radio" id="mercadopago" @change="razorPayRemove" value="mercadopago"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="mercadopago">
                            <img :src="getUrl('public/images/payment-method/mercado-pago.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_mercadopago }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_bkash_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="bkash" @change="razorPayRemove" value="bkash"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="bkash">
                            <img :src="getUrl('public/images/payment-method/bKash.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_bkash }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_google_pay_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="google_pay" @change="razorPayRemove" value="google_pay"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="google_pay">
                            <img :src="getUrl('public/images/payment-method/google_pay.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_google_pay }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_nagad_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="nagad" @change="razorPayRemove" value="nagad"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="nagad">
                            <img :src="getUrl('public/images/payment-method/nagad.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_nagad }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_amarpay_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="amarpay" @change="razorPayRemove" value="amarpay"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="amarpay">
                            <img :src="getUrl('public/images/payment-method/amarpay.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_amarpay }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_skrill_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="skrill" @change="razorPayRemove" value="skrill"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="skrill">
                            <img :src="getUrl('public/images/payment-method/skrill.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_skrill }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_iyzico_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="iyzico" @change="razorPayRemove" value="iyzico"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="iyzico">
                            <img :src="getUrl('public/images/payment-method/iyzico.svg')"
                                 :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_iyzico }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_mid_trans_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="mid_trans" @change="razorPayRemove" value="mid_trans"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="mid_trans">
                            <img :src="getUrl('public/images/payment-method/midtrans.svg')" :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_mid_trans }}</label>
                        </div>
                      </li>
                      <li v-if="settings.is_telr_activated">
                        <div class="input-checkbox">
                          <input type="radio" id="telr" @change="razorPayRemove" value="telr"
                                 v-model="payment_form.payment_type" name="radio">
                          <label for="telr">
                            <img :src="getUrl('public/images/payment-method/telr.svg')" :alt="payment_form.payment_type"
                                 width="90" class="img-fluid">{{ lang.pay_with_telr }}</label>
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
                      <li v-if="addons.includes('offline_payment')" v-for="(offline,index) in offline_methods"
                          :key="index">
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
                  </div>
                </div>
                <div class="row justify-content-center text-end mt-3" :class="{ 'disable_section' : !form.total }">
                  <div class="col-lg-5" id="payment_buttons">
                    <div class="mx-auto" v-show="payment_form.payment_type == 'paypal'"
                         id="paypal-button-container" ref="paypal"></div>

                    <paypal v-if="settings.is_paypal_activated == 1 && settings.paypal_key && payment_form.payment_type == 'paypal'" :trx_id="trx_id" :code="code"
                            :amount="form.total" :payment_type="payment_form.payment_type" :type="'wallet'"></paypal>

                    <a href="javascript:void(0)" class="btn btn-primary w-100 disable_btn"
                       v-if="!payment_form.payment_type">{{ lang.pay_now }}</a>

                    <a :href="getUrl('stripe/redirect?amount='+ form.total+'&type=wallet')" class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'stripe' ">{{ lang.pay_now }}</a>

                    <a :href="getUrl('get/ssl-response?amount='+ form.total+'&type=wallet')" class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'ssl_commerze' ">{{ lang.pay_now }}</a>

                    <a :href="getUrl('user/payment/paytmRedirect?amount='+ form.total+'&type=wallet')" class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'paytm' ">{{ lang.pay_now }}</a>

                    <a href="javascript:void(0)" class="btn btn-primary w-100" data-bs-toggle="modal"
                       data-bs-target="#offline"
                       v-if="offline_method.name">{{ lang.pay_now }}</a>
                    <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal"
                       data-bs-target="#paystack_modal" @click="payment_component_load = true"
                       v-if="payment_form.payment_type == 'paystack' ">
                      {{ lang.pay_now }}</a>

                    <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#fw_modal"
                       v-if="payment_form.payment_type == 'flutter_wave' ">
                      {{ lang.pay_now }}</a>

                    <a :href="getUrl('mollie/recharge-payment/?amount=' + form.total)" class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'mollie'">{{ lang.pay_now }}</a>
                    <a :href="getUrl('mercadopago/redirect/wallet?amount='+form.total)"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'mercadopago'">
                      {{ lang.pay_now }}</a>
                    <a :href="getUrl('bkash/redirect?amount='+form.total+'&type=wallet')"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'bkash'">
                      {{ lang.pay_now }}</a>

                    <a :href="getUrl('nagad/redirect/wallet?amount='+form.total)"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'nagad'">
                      {{ lang.pay_now }}</a>

                    <a :href="getUrl('amarpay/redirect?amount='+form.total+'&type=wallet&payment_type=amarpay')"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'amarpay'">
                      {{ lang.pay_now }}</a>

                    <google_pay v-if="payment_form.payment_type == 'google_pay'" :trx_id="trx_id" :code="code" :type="wallet_recharge"
                                :amount="form.total"></google_pay>

                    <a :href="getUrl('skrill/redirect?amount='+form.total+'&type=wallet&payment_type=skrill')"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'skrill'">
                      {{ lang.pay_now }}</a>

                    <a :href="getUrl('iyzico/redirect/wallet?amount='+form.total)"
                       class="btn btn-primary w-100"
                       v-if="payment_form.payment_type == 'iyzico'">
                      {{ lang.pay_now }}</a>

                    <a :href="getUrl('telr/redirect/wallet?amount='+form.total)"
                       class="btn btn-primary w-100" v-if="payment_form.payment_type == 'telr'"> {{ lang.pay_now }}</a>

                    <midtrans v-if="payment_form.payment_type == 'mid_trans'" :amount="form.total" :type="wallet_recharge"></midtrans>
                    <kkiapay v-if="settings.is_kkiapay_activated && settings.kkiapay_public_key && payment_form.payment_type == 'kkiapay' && xof"
                             :trx_id="trx_id" :code="code" :amount="form.total" :payment_type="payment_form.payment_type" :xof="xof" :type="'wallet'"></kkiapay>


                    <form name="jsform" :action="jazz_url" method="get">
                      <input v-for="(value,name) in jazz_data" :key="name" type="hidden" :name="name"
                             :value="value">
                      <button type="submit" class="btn btn-primary w-100"
                              v-show="!loading"
                              v-if="payment_form.payment_type == 'jazz_cash'">{{ lang.pay_now }}
                      </button>
                    </form>

                    <form :action="getUrl('user/recharge-wallet')" method="post"
                          v-show="payment_form.payment_type == 'razor_pay'">
                      <input type="hidden" name="_token" :value="token">
                      <input type="hidden" name="payment_type" :value="payment_form.payment_type">
                      <input type="hidden" name="amount" :value="form.total">
                      <div ref="razor_pay">

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- /.modal-body -->
        </div>
      </div>
    </div>
    <div class="modal fade" id="offline" tabindex="-1" aria-labelledby="offline_modal"
         aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.pay_with }}{{ offline_method.name }}</h5>
            <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label>{{ lang.upload_file }}</label>
                  <div class="input-group">
                    <div class="custom-file d-flex">
                      <label class="upload-image form-control" for="upload-1">
                        <input type="file" id="upload-1" @change="imageUp($event)">
                        <i id="upload-image">{{ lang.upload_file }}</i>
                      </label>
                      <label class="upload-image upload-text" for="upload-2">
                        <input type="file" id="upload-2" @change="imageUp($event)">
                        <img v-lazy="getUrl('public/images/others/env.svg')" alt="file up icon"
                             class="img-fluid">
                        {{ lang.upload }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12" v-if="offline_method.instructions">
                <label>{{ lang.instructions }}</label>
                <div class="instruction" v-html="offline_method.instructions"></div>
              </div>
              <div class="col-lg-12 text-center mt-3">
                <button @click="payment" class="btn btn-primary" v-show="!loading">{{ lang.proceed }}</button>
                <loading_button v-show="loading" :class_name="'btn btn-primary'"></loading_button>
              </div>
            </div>
          </div><!-- /.modal-body -->
        </div>
      </div>
    </div>
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
          <paystack v-if="payment_component_load" :trx_id="trx_id" :transaction_type="'wallet_recharge'"
                    :paystack_key="settings.paystack_pk" :ngn_exchange_rate="settings.ngn_exchange_rate" :code="code"
                    :amount="form.total" :type="payment_form.payment_type"></paystack>
        </div>
      </div>
    </div>
    <flutter_wave :trx_id="trx_id" :code="code" :transaction_type="'wallet_recharge'" :amount="form.total"
                  :type="payment_form.payment_type" ref="flutter_wave"></flutter_wave>
  </div>
</template>

<script>
import orders from "./../../partials/orders";
import user_sidebar from "../../partials/user_sidebar";
import shimmer from "../../partials/shimmer";
import paystack from "../../payment_partials/paystack";
import Flutter_wave from "../../payment_partials/flutter_wave";
import google_pay from "../../payment_partials/google_pay";
import midtrans from "../../payment_partials/midtrans";
import paypal from "../../payment_partials/paypal";
import kkiapay from "../../payment_partials/kkiapay";


export default {
  name: "dashboard",
  data() {
    return {
      current: 'dashboard',
      amount: 0,
      offline_methods: [],
      indian_currency: {},
      form: {
        total: ''
      },
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
      loading: false,
      jazz_data: [],
      jazz_url: '',
      offline_method: {
        id: '',
        name: '',
        image: '',
        instructions: '',
      },
      trx_id: "",
      code: "",
      payment_component_load: false,
      xof: '',
    }
  },
  components: {
    user_sidebar, orders, shimmer, paystack, Flutter_wave,google_pay,midtrans,paypal,kkiapay
  },
  mounted() {
    this.getProfileOrders();
    this.takeData();
  },

  computed: {
    profileOrders() {
      return this.$store.getters.getProfileOrders
    },
    carts() {
      return this.$store.getters.getCarts;
    },
    wishlists() {
      return this.$store.getters.getTotalWishlists;
    },
    activeCurrency() {
      return this.$store.getters.getActiveCurrency;
    },
    totalReward() {
      return this.$store.getters.getTotalReward === '' ? null : this.$store.getters.getTotalReward;
    },
    shimmer() {
      return this.$store.state.module.shimmer
    },
    default_shipping() {
      return this.authUser ? this.$store.getters.getUser.shipping_address : null
    },
    default_billing() {
      return this.authUser ? this.$store.getters.getUser.billing_address : null

    }

  },
  methods: {
    getProfileOrders() {
      let url = this.getUrl('user/profile-orders')
      axios.get(url).then((response) => {
        this.$store.commit('setShimmer', false);
        this.xof = response.data.xof;
        this.$store.commit("getProfileOrders", response.data.orders);
      })
    },
    payment() {
      let payment_type = this.payment_form.payment_type;

      if (!payment_type) {
        toastr.warning(this.lang.please_choose_a_payment_method, this.lang.Warning + ' !!');

        return false;
      }
      let form = {
        id: this.offline_method.id,
        file: this.product_form.image,
        payment_type: payment_type,
        amount: this.form.total,
      };

      let url = this.getUrl('user/recharge-wallet');

      if (this.offline_method.id) {
        this.loading = true;

        axios.post(url, form, {

          transformRequest: [function (data, headers) {
            return objectToFormData(data)
          }]
        }).then((response) => {
          this.loading = false;
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            $('#offline').modal('hide');
            let unshift = 1;
            this.$store.commit("getWalletRecharges", {unshift: unshift, data: response.data.recharges.data});
            let image_selector = document.getElementById('upload-image');
            if (image_selector) {
              image_selector.innerHTML = '';
            }
            this.$router.push({name: 'wallet.history'});
          }
        }).catch((error) => {
          this.loading = false;
        })
        ;
      }
    },
    takeData() {
      this.$Progress.start();
      let url = this.getUrl('user/wallet-data');
      axios.get(url).then((response) => {
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$Progress.finish();
          this.indian_currency = response.data.indian_currency;
          this.offline_methods = response.data.offline_methods;
          this.jazz_data = response.data.jazz_data;
          this.jazz_url = response.data.jazz_url;
        }
      })
    },
    integrateRazorPay() {
      this.razorPayRemove();
      if (this.payment_form.payment_type == 'razor_pay' && this.indian_currency) {
        var razorKeys = document.querySelectorAll('.razorpay-payment-button');

        for (let i = 0; i < razorKeys.length; i++) {
          razorKeys[i].style.display = "none";
        }

        let myScript = document.createElement('script');

        myScript.setAttribute('type', 'text/javascript');
        myScript.setAttribute('language', 'javascript');
        myScript.setAttribute('data-key', this.settings.razor_key);
        myScript.setAttribute('data-amount', parseInt(this.form.total * 100 * this.indian_currency.exchange_rate));
        myScript.setAttribute('data-name', 'Yoori');
        myScript.setAttribute('data-description', 'Rozerpay');
        myScript.setAttribute('data-image', this.settings.dark_logo);
        myScript.setAttribute('data-prefill.name', 'name');
        myScript.setAttribute('data-prefill.email', 'email');
        myScript.setAttribute('data-prefill.address', 'address');
        myScript.setAttribute('data-theme.color', '#ff7529');
        myScript.setAttribute('src', this.getUrl('public/frontend/js/razor_pay_checkout.js'));

        // Append script
        this.$refs.razor_pay.insertAdjacentElement('afterend', myScript);
      }
      if (this.payment_form.payment_type == 'ssl_commerze') {
        var ssl_keys = document.getElementById('sslczPayBtn');
        if (ssl_keys) {
          ssl_keys.setAttribute("endpoint", this.getUrl('user/recharge-wallet?payment_type=ssl_commerze&amount=' + this.form.total));
        }
      }

    },
    razorPayRemove() {
      var razorKeys = document.querySelectorAll('.razorpay-payment-button');

      for (let i = 0; i < razorKeys.length; i++) {
        razorKeys[i].style.display = "none";
      }

      this.offline_method.name = '';
      this.offline_method.image = '';
      this.offline_method.instructions = '';
    },
    removeData() {
      this.payment_form.payment_type = '';
      this.razorPayRemove();
    },
    offlineCheck(offline) {
      this.razorPayRemove();
      this.offline_method.id = offline.id;
      this.offline_method.name = offline.name;
      this.offline_method.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    },
  }
}
</script>
