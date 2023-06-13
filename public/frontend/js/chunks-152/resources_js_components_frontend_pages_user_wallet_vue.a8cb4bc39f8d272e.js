(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_wallet_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/user_sidebar */ "./resources/js/components/frontend/partials/user_sidebar.vue");
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
/* harmony import */ var _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payment_partials/paystack */ "./resources/js/components/frontend/payment_partials/paystack.vue");
/* harmony import */ var _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payment_partials/flutter_wave */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue");
/* harmony import */ var _payment_partials_google_pay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../payment_partials/google_pay */ "./resources/js/components/frontend/payment_partials/google_pay.vue");
/* harmony import */ var _payment_partials_midtrans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../payment_partials/midtrans */ "./resources/js/components/frontend/payment_partials/midtrans.vue");
/* harmony import */ var _payment_partials_kkiapay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../payment_partials/kkiapay */ "./resources/js/components/frontend/payment_partials/kkiapay.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import paystack from 'vue-paystack';






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "wallet",
  components: {
    user_sidebar: _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__["default"],
    paystack: _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_2__["default"],
    Flutter_wave: _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_3__["default"],
    google_pay: _payment_partials_google_pay__WEBPACK_IMPORTED_MODULE_4__["default"],
    midtrans: _payment_partials_midtrans__WEBPACK_IMPORTED_MODULE_5__["default"],
    kkiapay: _payment_partials_kkiapay__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      current: 'wallet_history',
      page: 1,
      next_page_url: false,
      stripe_form: {
        name: null,
        email: null,
        phone: null,
        description: null,
        loading: null
      },
      amount: 0,
      offline_methods: [],
      indian_currency: {},
      xof: '',
      form: {
        total: ''
      },
      ssl: {
        name: null,
        email: null,
        phone: null
      },
      razor_form: {
        name: null,
        email: null,
        phone: null,
        description: null
      },
      loading: false,
      jazz_data: [],
      jazz_url: '',
      offline_method: {
        id: '',
        name: '',
        image: '',
        instructions: ''
      },
      is_shimmer: false,
      trx_id: "",
      code: "",
      wallet_recharge: "wallet_recharge",
      payment_component_load: false
    };
  },
  created: function created() {
    if (this.settings.wallet_system != 1) {
      this.$router.push({
        name: 'home'
      });
    }
  },
  mounted: function mounted() {
    if (this.lengthCounter(this.wallets) == 0) {
      this.loadWallets();
    }

    if (this.lengthCounter(this.wallets) > 0) {
      this.is_shimmer = true;
    }

    this.takeData();
  },
  computed: {
    wallets: function wallets() {
      return this.$store.getters.getWalletRecharges;
    },
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    },
    reference: function reference() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  },
  methods: {
    loadWallets: function loadWallets() {
      var _this = this;

      var url = this.getUrl('user/wallet-history?page=' + this.page);

      if (this.page > 1) {
        this.loading = true;
      }

      this.$Progress.start();
      axios.get(url).then(function (response) {
        _this.loading = false;
        _this.is_shimmer = true;

        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          var unshift = 0;

          _this.$store.commit("getWalletRecharges", {
            unshift: unshift,
            data: response.data.recharges.data
          });

          _this.next_page_url = response.data.recharges.next_page_url;
          _this.page++;

          _this.$Progress.finish();
        }
      });
    },
    payment: function payment() {
      var _this2 = this;

      var payment_type = this.payment_form.payment_type;

      if (!payment_type) {
        return toastr.warning(this.lang.please_choose_a_payment_method, this.lang.Warning + ' !!');
      }

      var form = {
        id: this.offline_method.id,
        file: this.product_form.image,
        payment_type: payment_type,
        amount: this.form.total
      };
      var url = this.getUrl('user/recharge-wallet');

      if (this.offline_method.id) {
        this.loading = true;
        axios.post(url, form, {
          transformRequest: [function (data, headers) {
            return objectToFormData(data);
          }]
        }).then(function (response) {
          _this2.is_shimmer = true;
          _this2.loading = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            $('#offline').modal('hide');
            var unshift = 1;

            _this2.$store.commit("getWalletRecharges", {
              unshift: unshift,
              data: response.data.recharges.data
            });

            var image_selector = document.getElementById('upload-image');

            if (image_selector) {
              image_selector.innerHTML = '';
            }
          }
        })["catch"](function (error) {
          _this2.loading = false;
        });
      }
    },
    takeData: function takeData() {
      var _this3 = this;

      this.$Progress.start();
      var url = this.getUrl('user/wallet-data');
      axios.get(url).then(function (response) {
        _this3.is_shimmer = true;

        if (response.data.error) {
          _this3.$Progress.fail();

          toastr.error(response.data.error, _this3.lang.Error + ' !!');
        } else {
          _this3.$Progress.finish();

          _this3.indian_currency = response.data.indian_currency;
          _this3.offline_methods = response.data.offline_methods;
          _this3.jazz_data = response.data.jazz_data;
          _this3.jazz_url = response.data.jazz_url;
          _this3.xof = response.data.xof;
        }
      });
    },
    integrateRazorPay: function integrateRazorPay() {
      this.razorPayRemove();

      if (this.payment_form.payment_type == 'razor_pay' && this.indian_currency) {
        var razorKeys = document.querySelectorAll('.razorpay-payment-button');

        for (var i = 0; i < razorKeys.length; i++) {
          razorKeys[i].style.display = "none";
        }

        var myScript = document.createElement('script');
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
        myScript.setAttribute('src', this.getUrl('public/frontend/js/razor_pay_checkout.js')); // Append script

        this.$refs.razor_pay.insertAdjacentElement('afterend', myScript);
      }

      if (this.payment_form.payment_type == 'ssl_commerze') {
        var ssl_keys = document.getElementById('sslczPayBtn');

        if (ssl_keys) {
          ssl_keys.setAttribute("endpoint", this.getUrl('user/recharge-wallet?payment_type=ssl_commerze&amount=' + this.form.total));
        }
      }
    },
    razorPayRemove: function razorPayRemove() {
      var razorKeys = document.querySelectorAll('.razorpay-payment-button');

      for (var i = 0; i < razorKeys.length; i++) {
        razorKeys[i].style.display = "none";
      }

      this.offline_method.name = '';
      this.offline_method.image = '';
      this.offline_method.instructions = '';
    },
    removeData: function removeData() {
      this.payment_form.payment_type = '';
      this.razorPayRemove();
    },
    rechargeModalHide: function rechargeModalHide() {
      $('#recharge_wallet').modal('hide');
    },
    offlineCheck: function offlineCheck(offline) {
      this.razorPayRemove();
      this.offline_method.id = offline.id;
      this.offline_method.name = offline.name;
      this.offline_method.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "shimmer.vue",
  props: ['height'],
  data: function data() {
    return {
      style: {
        height: this.height + 'px'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "user_sidebar",
  props: ['current', 'addresses'],
  data: function data() {
    return {
      loading: false,
      download_url: false
    };
  },
  mounted: function mounted() {
    this.checkAuth();
  },
  computed: {
    totalReward: function totalReward() {
      return this.$store.getters.getTotalReward;
    },
    modalType: function modalType() {
      return this.$store.getters.getModalType;
    }
  },
  components: {
    shimmer: _shimmer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    checkAuth: function checkAuth() {
      var _this = this;

      var url = this.getUrl('home/check-auth');
      axios.get(url).then(function (response) {
        _this.$store.dispatch('user', response.data.user);

        _this.$store.commit('getOrderUrl', response.data.order_urls);

        if (!_this.authUser) {
          _this.$router.push({
            name: 'login'
          });
        } else if (_this.authUser.user_type == 'admin') {
          _this.$router.push({
            name: 'home'
          });
        }

        if (response.data.reward) {
          _this.$store.commit('setTotalReward', response.data.reward);
        }

        if (response.data.download_urls) {
          _this.download_url = true;
        }
      });
    },
    convertReward: function convertReward() {
      var _this2 = this;

      var url = this.getUrl('user/convert-reward');
      var form = {
        amount: this.converted_reward / this.settings.reward_convert_rate,
        reward: this.converted_reward
      };

      if (form.amount > 0 && this.totalReward.rewards >= this.converted_reward && confirm('Are You Sure! You want to Convert ?')) {
        this.loading = true;
        axios.post(url, form).then(function (response) {
          _this2.loading = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this2.lang.Success + '!!');
            $('#convert_reward').modal('hide');
            _this2.converted_reward = '';

            _this2.$store.dispatch('user', response.data.user);

            _this2.$store.commit('setTotalReward', response.data.reward);
          }
        })["catch"](function (error) {
          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "flutter_wave",
  props: ['trx_id', 'code', 'amount', 'transaction_type', 'type'],
  data: function data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  mounted: function mounted() {
    var script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.body.appendChild(script);
  },
  methods: {
    initiatePopup: function initiatePopup() {
      var that = this;
      FlutterwaveCheckout({
        public_key: this.settings.flw_public_key,
        tx_ref: that.reference(),
        amount: that.round(that.amount * that.activeCurrency.exchange_rate, 2),
        currency: this.activeCurrency.code,
        payment_options: "card, banktransfer,mobilemoneyghana, ussd",
        // redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        callback: function callback(payment) {
          that.verifyTransaction(payment);
        },
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a"
        },
        customer: {
          email: that.email,
          phone_number: that.phone,
          name: that.name
        },
        customizations: {
          title: that.settings.system_name,
          description: "Payment for an awesome cruise",
          logo: that.settings.dark_logo
        }
      });
    },
    reference: function reference() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    },
    verifyTransaction: function verifyTransaction(payment) {
      var _this = this;

      var form = {
        transaction_id: payment.transaction_id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        payment_type: 'flutter_wave',
        trx_id: this.trx_id,
        amount: this.amount,
        // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        code: this.code
      };

      if (this.transaction_type == 'wallet_recharge') {
        var url = this.getUrl('user/recharge-wallet');
        axios.post(url, form).then(function (response) {
          if (response.data.error) {
            toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this.lang.Success + ' !!');
          }
        })["catch"](function (error) {
          alert(_this.lang.something_went_wrong);
        });
      } else {
        var _url = this.getUrl('user/complete-order');

        axios.post(_url, form).then(function (response) {
          if (response.data.error) {
            toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this.lang.Success + ' !!');

            if (_this.code) {
              window.location.href = _this.getUrl('get-invoice/' + _this.code);
            } else {
              window.location.href = _this.getUrl('invoice/' + _this.trx_id);
            }
          }
        })["catch"](function (error) {
          alert(_this.lang.something_went_wrong);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_google_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-google-pay */ "./node_modules/vue-google-pay/dist/index.js");
/* harmony import */ var vue_google_pay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_google_pay__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "google_pay",
  components: {
    google: (vue_google_pay__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: ['trx_id', 'code', 'amount', 'type'],
  data: function data() {
    return {
      options: {
        environment: 'TEST',
        buttonColor: 'black',
        buttonType: 'pay',
        allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
        allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        merchantInfo: {
          merchantName: '',
          merchantId: ''
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '',
          currencyCode: 'USD',
          countryCode: 'US'
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: '',
            gatewayMerchantId: ''
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.options.transactionInfo.totalPrice = this.round(this.amount, 2);
    this.options.merchantInfo.merchantName = this.settings.google_pay_merchant_name;
    this.options.merchantInfo.merchantId = this.settings.google_pay_merchant_id;
    this.options.tokenizationSpecification.parameters.gateway = this.settings.google_pay_gateway;
    this.options.tokenizationSpecification.parameters.gatewayMerchantId = this.settings.google_pay_gateway_merchant_id;
  },
  methods: {
    payed: function payed(paymentData) {
      var _this = this;

      var url = '';
      var data = {};

      if (this.type = 'wallet_recharge') {
        var payment_type = "google_pay";
        url = this.getUrl('user/complete-recharge?amount' + this.amount + '&payment_type' + payment_type);
      } else {
        if (this.authUser) url = this.getUrl('user/complete-order?code=' + this.code + '&trx_id=' + this.trx_id);else url = this.getUrl('user/complete-order?code=' + this.code + '&guest=1' + '&trx_id=' + this.trx_id);
      }

      data.amount = this.amount;
      data.payment_type = 'google_pay';
      data.code = this.code;
      data.trx_id = this.trx_id;
      data.order = paymentData;
      this.axios.post(url, data).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          _this.loading = false;

          if (_this.code) {
            _this.$router.push({
              name: 'get.invoice',
              params: {
                orderCode: _this.code
              }
            });
          } else {
            _this.$router.push({
              name: 'invoice.list',
              params: {
                trx_id: _this.trx_id
              }
            });
          }

          toastr.success(response.data.success, _this.lang.Success + ' !!');
        }
      })["catch"](function (error) {
        _this.loading = false;
      });
    },
    cancelled: function cancelled() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "kkiaPay",
  props: ['trx_id', 'code', 'amount', 'payment_type', 'xof', 'type'],
  mounted: function mounted() {
    var script = document.createElement("script");
    script.src = this.getUrl('public/frontend/js/k.js');
    var amount = this.type == 'wallet' ? this.round(this.amount / this.activeCurrency.exchange_rate * this.xof.exchange_rate) : this.round(this.amount * this.xof.exchange_rate);
    script.setAttribute('amount', amount);
    script.setAttribute('url', this.settings.dark_logo);
    script.setAttribute('position', 'center');
    script.setAttribute('theme', this.settings.menu_background_color);
    script.setAttribute('sandbox', this.settings.is_kkiapay_sandboxed);
    script.setAttribute('key', this.settings.kkiapay_public_key);
    var url = this.type == 'wallet' ? this.getUrl('user/recharge-wallet?amount=' + this.amount + '&type=wallet&payment_type=kkiapay') : this.getUrl('user/complete-order?payment_type=kkiapay&code=' + this.code + '&trx_id=' + this.trx_id);
    script.setAttribute('callback', url);
    document.body.appendChild(script);
  },
  methods: {
    successHandler: function successHandler(response) {
      var _this = this;

      var form = {
        payment_type: 'kkiapay',
        trx_id: this.trx_id,
        code: this.code,
        account: response.account,
        transaction_id: response.transactionId
      };
      var url = this.getUrl('user/complete-order');
      axios.post(url, form).then(function (response) {
        if (response.data.error) {
          toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, _this.lang.Success + ' !!');

          if (_this.code) {
            _this.$router.push({
              name: 'get.invoice',
              params: {
                orderCode: _this.code
              }
            });
          } else {
            _this.$router.push({
              name: 'invoice.list',
              params: {
                trx_id: _this.trx_id
              }
            });
          }
        }
      })["catch"](function (error) {
        alert(_this.lang.something_went_wrong);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "mid_trans",
  props: ['mid_token', 'trx_id', 'code', 'amount', 'type'],
  data: function data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  mounted: function mounted() {
    var script = document.createElement("script");
    script.src = "https://app.midtrans.com/snap/snap.js";
    script.setAttribute('data-client-key', this.settings.mid_trans_client_id);
    document.body.appendChild(script);
    var token = this.mid_token;
    var authUser = this.authUser;
    var amount = this.amount;
    var code = this.code;
    var trx_id = this.trx_id;
    var that = this;

    document.getElementById('pay-button').onclick = function () {
      // SnapToken acquired from previous step
      snap.pay(token, {
        // Optional
        onSuccess: function onSuccess(result) {
          var _this = this;

          var url = '';
          var data = {};

          if (this.type = 'wallet_recharge') {
            var payment_type = "mid_trans";
            url = this.getUrl('user/complete-recharge?amount' + this.amount + '&payment_type' + payment_type);
          } else {
            if (authUser) url = that.getUrl('user/complete-order?code=' + code + '&trx_id=' + trx_id);else url = that.getUrl('user/complete-order?code=' + code + '&guest=1' + '&trx_id=' + trx_id);
          }

          data.amount = amount;
          data.payment_type = 'google_pay';
          data.code = code;
          data.trx_id = trx_id;
          data.order = result;
          this.axios.post(url, data).then(function (response) {
            if (response.data.error) {
              toastr.error(response.data.error, that.lang.Error + ' !!');
            } else {
              _this.loading = false;

              if (_this.code) {
                _this.$router.push({
                  name: 'get.invoice',
                  params: {
                    orderCode: code
                  }
                });
              } else {
                _this.$router.push({
                  name: 'invoice.list',
                  params: {
                    trx_id: trx_id
                  }
                });
              }

              toastr.success(response.data.success, that.lang.Success + ' !!');
            }
          })["catch"](function (error) {
            that.loading = false;
          });
        },
        // Optional
        onPending: function onPending(result) {},
        // Optional
        onError: function onError(result) {
          that.$router.push('payment');
        }
      });
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_paystack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-paystack */ "./node_modules/vue-paystack/dist/paystack.min.js");
/* harmony import */ var vue_paystack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_paystack__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "pay-stack",
  props: ['trx_id', 'code', 'amount', 'type', 'paystack_key', 'ngn_exchange_rate', 'transaction_type'],
  components: {
    paystack: (vue_paystack__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      name: '',
      email: '',
      phone: '',
      channels: ['card', 'bank', 'ussd', 'mobile_money']
    };
  },
  mounted: function mounted() {},
  computed: {
    reference: function reference() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  },
  methods: {
    callback: function callback(response) {
      var _this = this;

      $('#paystack_modal').modal('hide');

      if (response.status == 'success') {
        var form = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          payment_type: this.type,
          trx_id: this.trx_id,
          amount: this.amount,
          // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
          code: this.code,
          ref: response.reference
        };

        if (this.transaction_type == 'wallet_recharge') {
          var url = this.getUrl('user/recharge-wallet');
          axios.post(url, form).then(function (response) {
            if (response.data.error) {
              toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
            } else {
              toastr.success(response.data.success, _this.lang.Success + ' !!');
            }
          })["catch"](function (error) {
            alert(_this.lang.something_went_wrong);
          });
        } else {
          var _url = this.getUrl('user/complete-order');

          axios.post(_url, form).then(function (response) {
            if (response.data.error) {
              toastr.error(_this.lang.something_went_wrong, _this.lang.Error + ' !!');
            } else {
              toastr.success(response.data.success, _this.lang.Success + ' !!');

              if (_this.code) {
                _this.$router.push({
                  name: 'get.invoice',
                  params: {
                    orderCode: _this.code
                  }
                });
              } else {
                _this.$router.push({
                  name: 'invoice.list',
                  params: {
                    trx_id: _this.trx_id
                  }
                });
              }
            }
          })["catch"](function (error) {
            alert(_this.lang.something_went_wrong);
          });
        }
      } else {
        alert(this.lang.something_went_wrong);
      }
    },
    close: function close() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-google-pay/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-google-pay/dist/index.js ***!
  \***************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return r={},o.m=n=[function(t,e,n){t.exports=n(3)},function(t,e){function u(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){u(r,e,n,o,a,"next",t)}function a(t){u(r,e,n,o,a,"throw",t)}o(void 0)})}}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=function(a){"use strict";var u,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function i(t,e,n,r){var a,i,c,u,o=e&&e.prototype instanceof g?e:g,s=Object.create(o.prototype),l=new j(r||[]);return s._invoke=(a=t,i=n,c=l,u=h,function(t,e){if(u===d)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return L()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=O(n,c);if(r){if(r===m)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=y,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=d;var o=f(a,i,c);if("normal"===o.type){if(u=c.done?y:p,o.arg===m)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg)}}),s}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=i;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function g(){}function c(){}function l(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==t&&s.call(b,o)&&(v=b);var P=l.prototype=g.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(u){var e;this._invoke=function(n,r){function t(){return new Promise(function(t,e){!function e(t,n,r,o){var a=f(u[t],u,n);if("throw"!==a.type){var i=a.arg,c=i.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):Promise.resolve(c).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(a.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function O(t,e){var n=t.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,m;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=u,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:u,done:!0}}return c.prototype=P.constructor=l,l.constructor=c,l[r]=c.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(P),t},a.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[n]=function(){return this},a.AsyncIterator=C,a.async=function(t,e,n,r){var o=new C(i(t,e,n,r));return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(P),P[r]="Generator",P[o]=function(){return this},P.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=u),m}},a}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c),s={environment:"TEST",buttonColor:"white",baseRequest:{apiVersion:2,apiVersionMinor:0},allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"],allowedCardAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],merchantInfo:{merchantName:"Example Merchant",merchantId:"0123456789"},transactionInfo:{totalPriceStatus:"FINAL",totalPrice:"1.00",currencyCode:"USD",countryCode:"US"},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"example",gatewayMerchantId:"exampleGatewayMerchantId"}},baseCardPaymentMethod:{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}},cardPaymentMethod:null,paymentDataRequest:{baseRequest:{apiVersion:2,apiVersionMinor:0},allowedPaymentMethods:null,transactionInfo:{totalPriceStatus:"FINAL",totalPrice:"1.00",currencyCode:"USD",countryCode:"US"},merchantInfo:{merchantName:"Example Merchant",merchantId:"0123456789"}}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=function(t,e,n,r,o,a,i,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),a&&(s._scopeId="data-v-"+a),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}({props:{id:{type:String,required:!1,default:"google-pay-button"},options:{type:Object,required:!0,default:function(){return s}}},data:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s,{cardPaymentMethod:null,paymentsClient:null})},mounted:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.assignVars();case 2:t.sent&&e.injectGooglePayScript();case 4:case"end":return t.stop()}},t)}))()},methods:{assignVars:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Object.assign(e,e.options),t.next=3,e.$nextTick();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}))()},injectGooglePayScript:function(){var t=this;if(!this.paymentsClient){var e=document.createElement("script");e.setAttribute("src","https://pay.google.com/gp/p/js/pay.js"),e.setAttribute("async",!0),e.setAttribute("defer",!0),e.onload=function(){return t.onGooglePayLoaded()},document.head.appendChild(e)}},initPaymentsVars:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.cardPaymentMethod=Object.assign({},e.baseCardPaymentMethod,{tokenizationSpecification:e.tokenizationSpecification}),t.next=3,e.$nextTick();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}))()},getGoogleIsReadyToPayRequest:function(){return Object.assign({},this.baseRequest,{allowedPaymentMethods:[this.baseCardPaymentMethod]})},getGooglePaymentsClient:function(){return null===this.paymentsClient&&(this.paymentsClient=new google.payments.api.PaymentsClient({environment:this.environment})),this.paymentsClient},addGooglePayButton:function(){var t=this,e=this.paymentsClient.createButton({onClick:function(){return t.googlePayButtonClick()},buttonColor:this.buttonColor});document.getElementById(this.id).appendChild(e)},onGooglePayLoaded:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initPaymentsVars();case 2:t.sent&&e.getGooglePaymentsClient().isReadyToPay(e.getGoogleIsReadyToPayRequest()).then(function(t){t.result&&e.addGooglePayButton()}).catch(function(t){console.error(t)});case 4:case"end":return t.stop()}},t)}))()},getGooglePaymentDataRequest:function(){var t=Object.assign({},this.baseRequest);return t.allowedPaymentMethods=[this.cardPaymentMethod],t.transactionInfo=this.transactionInfo,t.merchantInfo={merchantId:this.merchantInfo.merchantId,merchantName:this.merchantInfo.merchantName},t},googlePayButtonClick:function(){var e=this,t=this.getGooglePaymentDataRequest();t.transactionInfo=this.transactionInfo,this.getGooglePaymentsClient().loadPaymentData(t).then(function(t){e.$emit("payed",t)}).catch(function(t){console.error(t),"CANCELED"===t.statusCode&&e.$emit("cancel")})}}},function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})},[],!1,null,null,null).exports;e.default=f}],o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=4);function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,r});

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/wallet.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/wallet.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.vue?vue&type=template&id=8e61a380& */ "./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380&");
/* harmony import */ var _wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__.render,
  _wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/wallet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shimmer.vue?vue&type=template&id=44ada926& */ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");
/* harmony import */ var _shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shimmer.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render,
  _shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/shimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_sidebar.vue?vue&type=template&id=cdcc10da& */ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&");
/* harmony import */ var _user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/user_sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&");
/* harmony import */ var _flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flutter_wave.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7eeea8ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/flutter_wave.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/google_pay.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/google_pay.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google_pay.vue?vue&type=template&id=8b068e58&scoped=true& */ "./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true&");
/* harmony import */ var _google_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google_pay.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _google_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8b068e58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/google_pay.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/kkiapay.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/kkiapay.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true& */ "./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true&");
/* harmony import */ var _kkiapay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kkiapay.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _kkiapay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66f79e6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/kkiapay.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/midtrans.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/midtrans.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./midtrans.vue?vue&type=template&id=59e3c812&scoped=true& */ "./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true&");
/* harmony import */ var _midtrans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./midtrans.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _midtrans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59e3c812",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/midtrans.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& */ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&");
/* harmony import */ var _paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paystack.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "07bd6cdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/paystack.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./wallet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./flutter_wave.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_google_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./google_pay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_google_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kkiapay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./kkiapay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kkiapay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_midtrans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./midtrans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_midtrans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paystack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wallet_vue_vue_type_template_id_8e61a380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./wallet.vue?vue&type=template&id=8e61a380& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=template&id=44ada926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=template&id=cdcc10da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flutter_wave_vue_vue_type_template_id_7eeea8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_pay_vue_vue_type_template_id_8b068e58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./google_pay.vue?vue&type=template&id=8b068e58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_kkiapay_vue_vue_type_template_id_66f79e6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_midtrans_vue_vue_type_template_id_59e3c812_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./midtrans.vue?vue&type=template&id=59e3c812&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paystack_vue_vue_type_template_id_07bd6cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/wallet.vue?vue&type=template&id=8e61a380& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sg-page-content" },
    [
      _c("section", { staticClass: "edit-profile" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("user_sidebar", { attrs: { current: _vm.current } }),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 pl-lg-5" }, [
                _c("div", { staticClass: "sg-shipping" }, [
                  _c("div", { staticClass: "title" }, [
                    _c("h1", [_vm._v(_vm._s(_vm.lang.my_wallet))]),
                  ]),
                ]),
                _vm._v(" "),
                _vm.is_shimmer
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "card text-center profile-card d-flex justify-center profile-card-white-outline-dashed",
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "profile-card-title text-black mb-3",
                              },
                              [_vm._v(_vm._s(_vm.lang.total_balance))]
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "text-black" }, [
                              _vm._v(
                                _vm._s(_vm.priceFormat(_vm.authUser.balance))
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-bs-target": "#recharge_wallet",
                              "data-bs-toggle": "modal",
                            },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card text-center profile-card d-flex justify-center profile-card-white-outline-dashed",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "profile-card-title mb-3" },
                                  [_vm._v(_vm._s(_vm.lang.recharge_wallet))]
                                ),
                                _vm._v(" "),
                                _vm._m(0),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ])
                  : _vm.shimmer
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(2, function (num, i) {
                        return _c(
                          "div",
                          { staticClass: "col-md-6 mb-3" },
                          [_c("shimmer", { attrs: { height: 100 } })],
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.is_shimmer
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12 overflow-y-auto" }, [
                        _c("div", { staticClass: "sg-table" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-between title b-0 mb-2 mt-3",
                            },
                            [
                              _c("h1", [
                                _vm._v(_vm._s(_vm.lang.wallet_history)),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "table",
                            { staticClass: "table dashboard-table" },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-end",
                                      attrs: { scope: "col" },
                                    },
                                    [_vm._v("#")]
                                  ),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v(_vm._s(_vm.lang.source)),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v(_vm._s(_vm.lang.date)),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-end",
                                      attrs: { scope: "col" },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.amount))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-end",
                                      attrs: { scope: "col" },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.payment_method))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-end",
                                      attrs: { scope: "col" },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.status))]
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.wallets, function (wallet, index) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { staticClass: "text-end" }, [
                                      _vm._v(_vm._s(++index)),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-capitalize" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            wallet.source.replaceAll("_", " ")
                                          )
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(wallet.recharge_date)),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "text-end",
                                        class:
                                          wallet.type == "expense"
                                            ? "text-danger"
                                            : "",
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              _vm.priceFormat(wallet.amount)
                                            ) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-capitalize text-end pt-3 pb-3",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            wallet.payment_method.replace(
                                              "_",
                                              " "
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-capitalize text-end pt-3 pb-3",
                                        class: {
                                          "text-success":
                                            wallet.status == "approved",
                                          "text-danger":
                                            wallet.status == "rejected",
                                          "text-warning":
                                            wallet.status == "pending",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(wallet.status) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                  ])
                                }),
                                0
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _vm.next_page_url && !_vm.loading
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-md-12 text-center show-more mt-3",
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.loadWallets()
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.lang.show_more))]
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.loading,
                                expression: "loading",
                              },
                            ],
                            staticClass: "col-md-12 text-center show-more mt-3",
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { href: "javascript:void(0)" },
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    width: "20",
                                    src: _vm.getUrl(
                                      "public/images/default/preloader.gif"
                                    ),
                                    alt: "preloader",
                                  },
                                }),
                                _vm._v(_vm._s(this.lang.loading)),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ])
                  : _vm.shimmer
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(6, function (num, i) {
                        return _c(
                          "div",
                          { staticClass: "col-md-12 mb-3 overflow-y-auto" },
                          [_c("shimmer", { attrs: { height: 50 } })],
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e(),
              ]),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "recharge_wallet",
            tabindex: "-1",
            "aria-labelledby": "recharge_wallet",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable",
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v(_vm._s(_vm.lang.wallet_recharge)),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "sg-shipping" }, [
                        _c("div", { staticClass: "sg-card" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "amount" } }, [
                                  _vm._v(_vm._s(_vm.lang.amount)),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.total,
                                      expression: "form.total",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "amount",
                                    placeholder: _vm.lang.enter_amount,
                                  },
                                  domProps: { value: _vm.form.total },
                                  on: {
                                    input: [
                                      function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "total",
                                          $event.target.value
                                        )
                                      },
                                      _vm.removeData,
                                    ],
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "card-list",
                            class: { disable_section: _vm.form.total == 0 },
                          },
                          [
                            _c(
                              "ul",
                              { staticClass: "global-list grid-3" },
                              [
                                _vm.settings.is_paypal_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "paypal",
                                              id: "paypal",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "paypal"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "paypal"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "paypal" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/paypal.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_payPal
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_stripe_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "stripe",
                                              value: "stripe",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "stripe"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "stripe"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "stripe" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/stripe.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_stripe
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_sslcommerz_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              name: "radio",
                                              id: "ssl_commerze",
                                              value: "ssl_commerze",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "ssl_commerze"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "ssl_commerze"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "ssl_commerze" } },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/sslcommerze.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang
                                                      .pay_with_sSLCOMMERZE
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_paytm_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "paytm",
                                              value: "paytm",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "paytm"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "paytm"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "paytm" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/paytm.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_paytm
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_razorpay_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "razor_pay",
                                              value: "razor_pay",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "razor_pay"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "razor_pay"
                                                  )
                                                },
                                                _vm.integrateRazorPay,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "razor_pay" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/razorpay.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_razorpay
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_jazz_cash_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "jazzCash",
                                              value: "jazz_cash",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "jazz_cash"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "jazz_cash"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "jazzCash" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/jazzCash.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_jazzCash
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_paystack_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "paystack",
                                              value: "paystack",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "paystack"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "paystack"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "paystack" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/paystack.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_paystack
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_flutterwave_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "flutter_wave",
                                              value: "flutter_wave",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "flutter_wave"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "flutter_wave"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "flutter_wave" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/fw.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_flutter
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_mollie_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "mollie",
                                              value: "mollie",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "mollie"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "mollie"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "mollie" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/mollie.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.lang.pay_with_mollie
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_mercado_pago_activated == 1
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "mercadopago",
                                              value: "mercadopago",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "mercadopago"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "mercadopago"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "mercadopago" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/mercado-pago.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.lang.pay_with_mercadopago
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_bkash_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "bkash",
                                              value: "bkash",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "bkash"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "bkash"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "bkash" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/bKash.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_with_bkash)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_google_pay_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "google_pay",
                                              value: "google_pay",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "google_pay"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "google_pay"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "google_pay" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/google_pay.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.lang.pay_with_google_pay
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_nagad_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "nagad",
                                              value: "nagad",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "nagad"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "nagad"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "nagad" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/nagad.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_with_nagad)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_amarpay_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "amarpay",
                                              value: "amarpay",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "amarpay"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "amarpay"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "amarpay" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/amarpay.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.lang.pay_with_amarpay
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_skrill_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "skrill",
                                              value: "skrill",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "skrill"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "skrill"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "skrill" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/skrill.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_with_skrill)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_iyzico_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "iyzico",
                                              value: "iyzico",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "iyzico"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "iyzico"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "iyzico" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/iyzico.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_with_iyzico)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_mid_trans_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "mid_trans",
                                              value: "mid_trans",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "mid_trans"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "mid_trans"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "mid_trans" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/midtrans.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.lang.pay_with_mid_trans
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_telr_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "telr",
                                              value: "telr",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "telr"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "telr"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "telr" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/telr.svg"
                                                  ),
                                                  alt: _vm.payment_form
                                                    .payment_type,
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(_vm.lang.pay_with_telr)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.settings.is_kkiapay_activated
                                  ? _c("li", [
                                      _c(
                                        "div",
                                        { staticClass: "input-checkbox" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.payment_form.payment_type,
                                                expression:
                                                  "payment_form.payment_type",
                                              },
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "kkiapay",
                                              value: "kkiapay",
                                              name: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.payment_form.payment_type,
                                                "kkiapay"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function ($event) {
                                                  return _vm.$set(
                                                    _vm.payment_form,
                                                    "payment_type",
                                                    "kkiapay"
                                                  )
                                                },
                                                _vm.razorPayRemove,
                                              ],
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "kkiapay" } },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src: _vm.getUrl(
                                                    "public/images/payment-method/kkiapay.svg"
                                                  ),
                                                  alt: "kkiapay",
                                                  width: "90",
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.lang.pay_with_kkiapay
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.offline_methods,
                                  function (offline, index) {
                                    return _vm.addons.includes(
                                      "offline_payment"
                                    )
                                      ? _c("li", { key: index }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-checkbox" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.payment_form
                                                        .payment_type,
                                                    expression:
                                                      "payment_form.payment_type",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "radio",
                                                  id: "offline" + offline.id,
                                                  value: "offline_method",
                                                  name: "radio",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.payment_form
                                                      .payment_type,
                                                    "offline_method"
                                                  ),
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.payment_form,
                                                        "payment_type",
                                                        "offline_method"
                                                      )
                                                    },
                                                    function ($event) {
                                                      return _vm.offlineCheck(
                                                        offline
                                                      )
                                                    },
                                                  ],
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  attrs: {
                                                    for: "offline" + offline.id,
                                                  },
                                                },
                                                [
                                                  _c("img", {
                                                    directives: [
                                                      {
                                                        name: "lazy",
                                                        rawName: "v-lazy",
                                                        value: offline.image,
                                                        expression:
                                                          "offline.image",
                                                      },
                                                    ],
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      alt: offline.name,
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(offline.name) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : _vm._e()
                                  }
                                ),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "row justify-content-center text-end mt-3",
                          class: { disable_section: !_vm.form.total },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-lg-5",
                              attrs: { id: "payment_buttons" },
                            },
                            [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.payment_form.payment_type == "paypal",
                                    expression:
                                      "payment_form.payment_type == 'paypal'",
                                  },
                                ],
                                ref: "paypal",
                                staticClass: "mx-auto",
                                attrs: { id: "paypal-button-container" },
                              }),
                              _vm._v(" "),
                              _vm.settings.is_paypal_activated == 1 &&
                              _vm.settings.paypal_key &&
                              _vm.payment_form.payment_type == "paypal"
                                ? _c("paypal", {
                                    attrs: {
                                      trx_id: _vm.trx_id,
                                      code: _vm.code,
                                      amount: _vm.form.total,
                                      payment_type:
                                        _vm.payment_form.payment_type,
                                      type: "wallet",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.payment_form.payment_type
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-primary w-100 disable_btn",
                                      attrs: { href: "javascript:void(0)" },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "stripe"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "stripe/redirect?amount=" +
                                            _vm.form.total +
                                            "&type=wallet"
                                        ),
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "ssl_commerze"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "get/ssl-response?amount=" +
                                            _vm.form.total +
                                            "&type=wallet"
                                        ),
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "paytm"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "user/payment/paytmRedirect?amount=" +
                                            _vm.form.total +
                                            "&type=wallet"
                                        ),
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.offline_method.name
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#offline",
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "paystack"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: "#",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#paystack_modal",
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.payment_component_load = true
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "flutter_wave"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: "#",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#fw_modal",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "mollie"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "mollie/recharge-payment/?amount=" +
                                            _vm.form.total
                                        ),
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "mercadopago"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "mercadopago/redirect/wallet?amount=" +
                                            _vm.form.total
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "bkash"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "bkash/redirect?amount=" +
                                            _vm.form.total +
                                            "&type=wallet"
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "nagad"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "nagad/redirect/wallet?amount=" +
                                            _vm.form.total
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "amarpay"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "amarpay/redirect?amount=" +
                                            _vm.form.total +
                                            "&type=wallet&payment_type=amarpay"
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "google_pay"
                                ? _c("google_pay", {
                                    attrs: {
                                      trx_id: _vm.trx_id,
                                      code: _vm.code,
                                      type: _vm.wallet_recharge,
                                      amount: _vm.form.total,
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "skrill"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "skrill/redirect?amount=" +
                                            _vm.form.total +
                                            "&type=wallet&payment_type=skrill"
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "iyzico"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "iyzico/redirect/wallet?amount=" +
                                            _vm.form.total
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.lang.pay_now)
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "telr"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary w-100",
                                      attrs: {
                                        href: _vm.getUrl(
                                          "telr/redirect/wallet?amount=" +
                                            _vm.form.total
                                        ),
                                      },
                                    },
                                    [_vm._v(" " + _vm._s(_vm.lang.pay_now))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payment_form.payment_type == "mid_trans"
                                ? _c("midtrans", {
                                    attrs: {
                                      amount: _vm.form.total,
                                      type: _vm.wallet_recharge,
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.settings.is_kkiapay_activated &&
                              _vm.settings.kkiapay_public_key &&
                              _vm.payment_form.payment_type == "kkiapay" &&
                              _vm.xof
                                ? _c("kkiapay", {
                                    attrs: {
                                      trx_id: _vm.trx_id,
                                      code: _vm.code,
                                      amount: _vm.form.total,
                                      payment_type:
                                        _vm.payment_form.payment_type,
                                      xof: _vm.xof,
                                      type: "wallet",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  attrs: {
                                    name: "jsform",
                                    action: _vm.jazz_url,
                                    method: "get",
                                  },
                                },
                                [
                                  _vm._l(_vm.jazz_data, function (value, name) {
                                    return _c("input", {
                                      key: name,
                                      attrs: { type: "hidden", name: name },
                                      domProps: { value: value },
                                    })
                                  }),
                                  _vm._v(" "),
                                  _vm.payment_form.payment_type == "jazz_cash"
                                    ? _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !_vm.loading,
                                              expression: "!loading",
                                            },
                                          ],
                                          staticClass: "btn btn-primary w-100",
                                          attrs: { type: "submit" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.lang.pay_now) +
                                              "\n                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        _vm.payment_form.payment_type ==
                                        "razor_pay",
                                      expression:
                                        "payment_form.payment_type == 'razor_pay'",
                                    },
                                  ],
                                  attrs: {
                                    action: _vm.getUrl("user/recharge-wallet"),
                                    method: "post",
                                  },
                                },
                                [
                                  _c("input", {
                                    attrs: { type: "hidden", name: "_token" },
                                    domProps: { value: _vm.token },
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      name: "payment_type",
                                    },
                                    domProps: {
                                      value: _vm.payment_form.payment_type,
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: { type: "hidden", name: "amount" },
                                    domProps: { value: _vm.form.total },
                                  }),
                                  _vm._v(" "),
                                  _c("div", { ref: "razor_pay" }),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "offline",
            tabindex: "-1",
            "aria-labelledby": "offline_modal",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v(
                      _vm._s(_vm.lang.pay_with) +
                        " " +
                        _vm._s(_vm.offline_method.name)
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(_vm._s(_vm.lang.upload_file))]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group" }, [
                          _c("div", { staticClass: "custom-file d-flex" }, [
                            _c(
                              "label",
                              {
                                staticClass: "upload-image form-control",
                                attrs: { for: "upload-1" },
                              },
                              [
                                _c("input", {
                                  attrs: { type: "file", id: "upload-1" },
                                  on: {
                                    change: function ($event) {
                                      return _vm.imageUp($event)
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("i", { attrs: { id: "upload-image" } }, [
                                  _vm._v(_vm._s(_vm.lang.upload_file)),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "upload-image upload-text",
                                attrs: { for: "upload-2" },
                              },
                              [
                                _c("input", {
                                  attrs: { type: "file", id: "upload-2" },
                                  on: {
                                    change: function ($event) {
                                      return _vm.imageUp($event)
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: _vm.getUrl(
                                        "public/images/others/env.svg"
                                      ),
                                      expression:
                                        "getUrl('public/images/others/env.svg')",
                                    },
                                  ],
                                  staticClass: "img-fluid",
                                  attrs: { alt: "file upload icon" },
                                }),
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(_vm.lang.upload) +
                                    "\n                    "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.offline_method.instructions
                      ? _c("div", { staticClass: "col-lg-12" }, [
                          _c("label", [_vm._v(_vm._s(_vm.lang.instructions))]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "instruction",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.offline_method.instructions
                              ),
                            },
                          }),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12 text-center mt-3" },
                      [
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.loading,
                                expression: "!loading",
                              },
                            ],
                            staticClass: "btn btn-primary",
                            on: { click: _vm.payment },
                          },
                          [_vm._v(_vm._s(_vm.lang.proceed))]
                        ),
                        _vm._v(" "),
                        _c("loading_button", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.loading,
                              expression: "loading",
                            },
                          ],
                          attrs: { class_name: "btn btn-primary" },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "paystack_modal",
            tabindex: "-1",
            "aria-labelledby": "paystack_modal",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
            },
            [
              _c(
                "div",
                { staticClass: "modal-content" },
                [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v(_vm._s(_vm.lang.pay_with_paystack)),
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                  ]),
                  _vm._v(" "),
                  _vm.payment_component_load
                    ? _c("paystack", {
                        attrs: {
                          trx_id: _vm.trx_id,
                          transaction_type: "wallet_recharge",
                          paystack_key: _vm.settings.paystack_pk,
                          ngn_exchange_rate: _vm.settings.ngn_exchange_rate,
                          code: _vm.code,
                          amount: _vm.form.total,
                          type: _vm.payment_form.payment_type,
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("flutter_wave", {
        ref: "flutter_wave",
        attrs: {
          trx_id: _vm.trx_id,
          code: _vm.code,
          transaction_type: "wallet_recharge",
          amount: _vm.form.total,
          type: _vm.payment_form.payment_type,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("i", { staticClass: "mdi mdi-plus" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    staticClass: "shimmer",
    style: [_vm.height ? _vm.style : null],
    attrs: {
      src: _vm.getUrl("public/images/default/preview.jpg"),
      alt: "shimmer",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.authUser
    ? _c("div", { staticClass: "col-lg-3" }, [
        _c(
          "div",
          { staticClass: "profile-details position-relative" },
          [
            _c("div", { staticClass: "profile-thumb" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: _vm.authUser.profile_image,
                  alt: _vm.authUser.full_name,
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "h2",
              [
                _vm._v(_vm._s(_vm.authUser.full_name) + " "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-inline",
                    attrs: { to: { name: "edit.profile" } },
                  },
                  [_c("span", { staticClass: "mdi mdi-name mdi-pencil" })]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v(_vm._s(_vm.authUser.email)),
            ]),
            _vm._v(" "),
            _vm.settings.seller_system == 1
              ? _c(
                  "router-link",
                  {
                    staticClass: "be_seller base",
                    attrs: { to: { name: "migrate.seller" } },
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(_vm.lang.be_a_seller) + " "
                    ),
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-store-outline",
                    }),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-menu" }, [
          _c("ul", { staticClass: "global-list" }, [
            _c(
              "li",
              { class: { active: _vm.current === "dashboard" } },
              [
                _c("router-link", { attrs: { to: { name: "dashboard" } } }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-view-dashboard-outline",
                  }),
                  _vm._v(
                    " " + _vm._s(_vm.lang.dashboard) + "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "addresses" } },
              [
                _c("router-link", { attrs: { to: { name: "addresses" } } }, [
                  _c("span", {
                    staticClass: "mdi mdi-name mdi-map-marker-outline",
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.lang.addresses) +
                      "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "notification" } },
              [
                _c("router-link", { attrs: { to: { name: "notification" } } }, [
                  _c("span", { staticClass: "mdi mdi-name mdi-bell-outline" }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.lang.notification) +
                      "\n                "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "order_history" } },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "order.history" } } },
                  [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-cart-outline",
                    }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.lang.order_history) +
                        "\n                "
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.download_url
              ? _c(
                  "li",
                  {
                    class: {
                      active: _vm.current === "digital_product_order_history",
                    },
                  },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "orders.digital.product" } } },
                      [
                        _c("span", {
                          staticClass: "mdi mdi-name mdi-cart-arrow-down",
                        }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.lang.digital_product_order) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.settings.coupon_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "gift_voucher" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "gift.voucher" } } },
                      [
                        _c("span", {
                          staticClass: "mdi mdi-name mdi-wallet-giftcard",
                        }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.lang.gift_voucher) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              { class: { active: _vm.current === "change_password" } },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "change.password" } } },
                  [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-lock-outline",
                    }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.lang.change_password) +
                        "\n                "
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.settings.wallet_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "wallet_history" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "wallet.history" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-wallet-outline" }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.lang.my_wallet) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.addons.includes("reward")
              ? _c(
                  "li",
                  { class: { active: _vm.current === "reward_history" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "reward.history" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-vector-point" }),
                        _vm._v(
                          _vm._s(_vm.lang.my_rewards) + "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.settings.seller_system == 1
              ? _c(
                  "li",
                  { class: { active: _vm.current === "followed_shop" } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "shop.followed" } } },
                      [
                        _c("span", { staticClass: "mdi mdi-home-heart" }),
                        _vm._v(_vm._s(_vm.lang.shop) + "\n                "),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade reward",
            attrs: {
              id: "convert_reward",
              tabindex: "-1",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
              },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v(_vm._s(_vm.lang.reward_point)),
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body reward_modal" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.convertReward.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12 text-center" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "reward" } }, [
                                  _vm._v(_vm._s(_vm.lang.reward_point) + " "),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.converted_reward,
                                      expression: "converted_reward",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "reward",
                                    placeholder:
                                      _vm.lang.enter_point_you_want_convert,
                                  },
                                  domProps: { value: _vm.converted_reward },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.converted_reward = $event.target.value
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _vm.totalReward != null
                                ? _c("div", { staticClass: "text-start" }, [
                                    _c("p", [
                                      _vm._v(
                                        "Available Points to Convert : " +
                                          _vm._s(_vm.totalReward.rewards)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.settings.reward_convert_rate
                                        ) +
                                          _vm._s(_vm.lang.reward_points) +
                                          _vm._s(_vm.priceFormat(1))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.totalReward.rewards > 0
                                      ? _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.lang.total_amount_you_will_get
                                            ) +
                                              "\n                                        " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  _vm.converted_reward /
                                                    _vm.settings
                                                      .reward_convert_rate
                                                )
                                              )
                                          ),
                                        ])
                                      : _vm._e(),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.loading
                                ? _c("loading_button", {
                                    attrs: {
                                      class_name: "btn btn-primary mt-3",
                                    },
                                  })
                                : _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary mt-3",
                                      class: {
                                        disable_btn:
                                          _vm.converted_reward <
                                            _vm.settings.reward_convert_rate ||
                                          _vm.totalReward.rewards <
                                            _vm.converted_reward,
                                      },
                                      attrs: { type: "submit" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(_vm.lang.covert_rewards) +
                                          "\n                                "
                                      ),
                                    ]
                                  ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
          ]
        ),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/flutter_wave.vue?vue&type=template&id=7eeea8ee&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.type == "flutter_wave"
      ? _c(
          "a",
          {
            staticClass: "btn btn-primary w-100",
            attrs: {
              href: "#",
              "data-bs-toggle": "modal",
              "data-bs-target": "#fw_modal",
            },
          },
          [_vm._v("\n    " + _vm._s(_vm.lang.pay_now))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "fw_modal",
          tabindex: "-1",
          "aria-labelledby": "fw_modal",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable",
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v(_vm._s(_vm.lang.pay_with_flutter)),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.name,
                            expression: "name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: _vm.lang.name,
                          required: "",
                        },
                        domProps: { value: _vm.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.name = $event.target.value
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        placeholder: _vm.lang.email,
                        required: "",
                      },
                      domProps: { value: _vm.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.phone,
                            expression: "phone",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "tel",
                          placeholder: _vm.lang.phone,
                          required: "",
                        },
                        domProps: { value: _vm.phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.phone = $event.target.value
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12 text-center" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary flutter_wave",
                      attrs: { href: "javascript:void(0)" },
                      on: { click: _vm.initiatePopup },
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.lang.pay) +
                          " " +
                          _vm._s(_vm.priceFormat(_vm.amount)) +
                          "\n            "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close modal_close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/google_pay.vue?vue&type=template&id=8b068e58&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("google", {
    attrs: { id: "google-pay-btn", options: _vm.options },
    on: {
      payed: function ($event) {
        return _vm.payed()
      },
      cancel: _vm.cancelled,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/kkiapay.vue?vue&type=template&id=66f79e6e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home" }, [
    _c("button", { staticClass: "btn btn-primary kkiapay-button" }, [
      _vm._v(_vm._s(_vm.lang.pay_now)),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/midtrans.vue?vue&type=template&id=59e3c812&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "btn btn-primary w-100",
      attrs: { href: "javascript:void(0)", id: "pay-button" },
    },
    [_vm._v("\n  " + _vm._s(_vm.lang.pay_now))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paystack.vue?vue&type=template&id=07bd6cdc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-body" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: _vm.lang.name, required: "" },
            domProps: { value: _vm.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email",
            },
          ],
          staticClass: "form-control",
          attrs: { type: "email", placeholder: _vm.lang.email, required: "" },
          domProps: { value: _vm.email },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.phone,
                expression: "phone",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "tel", placeholder: _vm.lang.phone, required: "" },
            domProps: { value: _vm.phone },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.phone = $event.target.value
              },
            },
          }),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12 text-center" },
      [
        _c(
          "paystack",
          {
            class: { overlay_btn: !_vm.name || !_vm.email || !_vm.phone },
            attrs: {
              amount: _vm.round(
                _vm.amount * 100 * _vm.activeCurrency.exchange_rate
              ),
              email: _vm.email,
              phone: _vm.phone,
              name: _vm.name,
              paystackkey: _vm.paystack_key,
              callback: _vm.callback,
              reference: _vm.reference,
              channels: _vm.channels,
              currency: _vm.activeCurrency.code,
              close: _vm.close,
              embed: false,
            },
          },
          [
            _c("i", { staticClass: "bx bx-money" }),
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.pay) +
                " " +
                _vm._s(_vm.priceFormat(_vm.amount)) +
                "\n        "
            ),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-paystack/dist/paystack.min.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-paystack/dist/paystack.min.js ***!
  \********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return a={},r.m=n=[function(t,e,n){"use strict";n.r(e);var a,r,i,o,c,u,s,d,l,p,f,n=(o=!(i=[]),s=u=c=null,f="function"==typeof(a={props:{embed:{type:Boolean,default:!1},paystackkey:{type:String,required:!0},email:{type:String,required:!0},firstname:{type:String,default:""},lastname:{type:String,default:""},amount:{type:Number,required:!0},reference:{type:String,required:!0},channels:{type:Array,default:function(){return["card","bank"]}},accessCode:{type:String,default:""},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Object,default:function(){return{}}},currency:{type:String,default:"NGN"},plan:{type:String,default:""},quantity:{type:String,default:""},subaccount:{type:String,default:""},split:{type:Object,default:function(){return{}}},splitCode:{type:String,default:""},transactionCharge:{type:Number,default:0},bearer:{type:String,default:""}},data:function(){return{scriptLoaded:null}},created:function(){var e=this;this.scriptLoaded=new Promise(function(t){e.loadScript(function(){t()})})},mounted:function(){this.embed&&this.payWithPaystack()},methods:{loadScript:function(t){var e=document.createElement("script");e.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(e),e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()}},isDynamicSplit:function(){return this.split.constructor===Object&&0<Object.keys(this.split).length},payWithPaystack:function(){var e=this;this.scriptLoaded&&this.scriptLoaded.then(function(){var t={key:e.paystackkey,email:e.email,firstname:e.firstname,lastname:e.lastname,channels:e.channels,amount:e.amount,access_code:e.accessCode,ref:e.reference,callback:function(t){e.callback(t)},onClose:function(){e.close()},metadata:e.metadata,currency:e.currency,plan:e.plan,quantity:e.quantity,subaccount:e.isDynamicSplit()?"":e.subaccount,split:e.isDynamicSplit()?e.split:null,split_code:e.isDynamicSplit()?"":e.splitCode,transaction_charge:e.isDynamicSplit()?0:e.transactionCharge,bearer:e.isDynamicSplit()?"":e.bearer};e.embed&&(t.container="paystackEmbedContainer");t=window.PaystackPop.setup(t);e.embed||t.openIframe()})}}})?a.options:a,(r=function(){var t=this,e=t._self._c||t.$createElement;return t.embed?e("div",{attrs:{id:"paystackEmbedContainer"}}):e("button",{staticClass:"payButton",on:{click:t.payWithPaystack}},[t._t("default",[t._v("Make Payment")])],2)})&&(f.render=r,f.staticRenderFns=i,f._compiled=!0),o&&(f.functional=!0),u&&(f._scopeId="data-v-"+u),s?f._ssrRegister=l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),c&&c.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)}:c&&(l=d?function(){c.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:c),l&&(f.functional?(f._injectStyles=l,p=f.render,f.render=function(t,e){return l.call(e),p(t,e)}):f.beforeCreate=(d=f.beforeCreate)?[].concat(d,l):[l]),{exports:a,options:f});e.default=n.exports}],r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0);function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,a});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfdXNlcl93YWxsZXRfdnVlLmE4Y2I0YmMzOWY4ZDI3MmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdWZBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBLGdGQURBO0FBQ0Esc0VBREE7QUFDQSxnRkFEQTtBQUNBLHdGQURBO0FBQ0Esb0ZBREE7QUFDQSxnRkFEQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsYUFGQTtBQUdBLDBCQUhBO0FBSUE7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0EsbUJBSEE7QUFJQSx5QkFK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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVMsdUJBQXVCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVMsaUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0QkFBNEI7QUFDM0UscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7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LHVCQUF1QixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL3dhbGxldC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZ29vZ2xlX3BheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMva2tpYXBheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvbWlkdHJhbnMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXN0YWNrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWdvb2dsZS1wYXkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL3dhbGxldC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdXNlcl9zaWRlYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9nb29nbGVfcGF5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2traWFwYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvbWlkdHJhbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvcGF5c3RhY2sudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvd2FsbGV0LnZ1ZT82ZTgxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlPzI0NTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdXNlcl9zaWRlYmFyLnZ1ZT82YTk3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZmx1dHRlcl93YXZlLnZ1ZT80YjkxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZ29vZ2xlX3BheS52dWU/YTY4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2traWFwYXkudnVlPzM4MzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9taWR0cmFucy52dWU/NGQ4NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXN0YWNrLnZ1ZT8wYjIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvd2FsbGV0LnZ1ZT8yZjY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvd2FsbGV0LnZ1ZT9mNmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlPzg2NTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdXNlcl9zaWRlYmFyLnZ1ZT84NzdmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZmx1dHRlcl93YXZlLnZ1ZT85OTZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZ29vZ2xlX3BheS52dWU/MjAzOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2traWFwYXkudnVlPzUzMjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9taWR0cmFucy52dWU/MzVkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXN0YWNrLnZ1ZT8zNGY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtcGF5c3RhY2svZGlzdC9wYXlzdGFjay5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzZy1wYWdlLWNvbnRlbnRcIj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZWRpdC1wcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8dXNlcl9zaWRlYmFyIDpjdXJyZW50PVwiY3VycmVudFwiPjwvdXNlcl9zaWRlYmFyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05IHBsLWxnLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLXNoaXBwaW5nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3sgbGFuZy5teV93YWxsZXQgfX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJpc19zaGltbWVyXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXIgcHJvZmlsZS1jYXJkIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBwcm9maWxlLWNhcmQtd2hpdGUtb3V0bGluZS1kYXNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtY2FyZC10aXRsZSB0ZXh0LWJsYWNrIG1iLTNcIj57eyBsYW5nLnRvdGFsX2JhbGFuY2UgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1ibGFja1wiPnt7IHByaWNlRm9ybWF0KGF1dGhVc2VyLmJhbGFuY2UpIH19PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWJzLXRhcmdldD1cIiNyZWNoYXJnZV93YWxsZXRcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCB0ZXh0LWNlbnRlciBwcm9maWxlLWNhcmQgZC1mbGV4IGp1c3RpZnktY2VudGVyIHByb2ZpbGUtY2FyZC13aGl0ZS1vdXRsaW5lLWRhc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWNhcmQtdGl0bGUgbWItM1wiPnt7IGxhbmcucmVjaGFyZ2Vfd2FsbGV0IH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwibWRpIG1kaS1wbHVzXCI+PC9pPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtZWxzZS1pZj1cInNoaW1tZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbWItM1wiIHYtZm9yPVwiKG51bSxpKSBpbiAyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2hpbW1lciA6aGVpZ2h0PVwiMTAwXCI+PC9zaGltbWVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJpc19zaGltbWVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZy10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jb250ZW50LWJldHdlZW4gdGl0bGUgYi0wIG1iLTIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57eyBsYW5nLndhbGxldF9oaXN0b3J5IH19PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGRhc2hib2FyZC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWVuZFwiIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj57eyBsYW5nLnNvdXJjZSB9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj57eyBsYW5nLmRhdGUgfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1lbmRcIiBzY29wZT1cImNvbFwiPnt7IGxhbmcuYW1vdW50IH19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtZW5kXCIgc2NvcGU9XCJjb2xcIj57eyBsYW5nLnBheW1lbnRfbWV0aG9kIH19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtZW5kXCIgc2NvcGU9XCJjb2xcIj57eyBsYW5nLnN0YXR1cyB9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIod2FsbGV0LGluZGV4KSBpbiB3YWxsZXRzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWVuZFwiPnt7ICsraW5kZXggfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jYXBpdGFsaXplXCI+e3sgd2FsbGV0LnNvdXJjZS5yZXBsYWNlQWxsKCdfJywgJyAnKSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgd2FsbGV0LnJlY2hhcmdlX2RhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1lbmRcIiA6Y2xhc3M9XCJ3YWxsZXQudHlwZSA9PSAnZXhwZW5zZScgPyAndGV4dC1kYW5nZXInIDogJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJpY2VGb3JtYXQod2FsbGV0LmFtb3VudCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemUgdGV4dC1lbmQgcHQtMyBwYi0zXCI+e3sgd2FsbGV0LnBheW1lbnRfbWV0aG9kLnJlcGxhY2UoJ18nLCAnICcpIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZSB0ZXh0LWVuZCBwdC0zIHBiLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ3RleHQtc3VjY2VzcycgOiB3YWxsZXQuc3RhdHVzID09ICdhcHByb3ZlZCcsJ3RleHQtZGFuZ2VyJyA6IHdhbGxldC5zdGF0dXMgPT0gJ3JlamVjdGVkJywndGV4dC13YXJuaW5nJyA6IHdhbGxldC5zdGF0dXMgPT0gJ3BlbmRpbmcnIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgd2FsbGV0LnN0YXR1cyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlIG10LTNcIiB2LWlmPVwibmV4dF9wYWdlX3VybCAmJiAhbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwibG9hZFdhbGxldHMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgbGFuZy5zaG93X21vcmUgfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlIG10LTNcIiB2LXNob3c9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPjxpbWcgd2lkdGg9XCIyMFwiIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvZGVmYXVsdC9wcmVsb2FkZXIuZ2lmJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJlbG9hZGVyXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZy5sb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWVsc2UtaWY9XCJzaGltbWVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtYi0zIG92ZXJmbG93LXktYXV0b1wiIHYtZm9yPVwiKG51bSxpKSBpbiA2XCI+XHJcbiAgICAgICAgICAgICAgICA8c2hpbW1lciA6aGVpZ2h0PVwiNTBcIj48L3NoaW1tZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cInJlY2hhcmdlX3dhbGxldFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWNoYXJnZV93YWxsZXRcIlxyXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGxhbmcud2FsbGV0X3JlY2hhcmdlIH19PC9oNT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBtb2RhbF9jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctc2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFtb3VudFwiPnt7IGxhbmcuYW1vdW50IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYW1vdW50XCIgQGlucHV0PVwicmVtb3ZlRGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRvdGFsXCIgOnBsYWNlaG9sZGVyPVwibGFuZy5lbnRlcl9hbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxpc3RcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlX3NlY3Rpb24nIDogZm9ybS50b3RhbCA9PSAwIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdCBncmlkLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfcGF5cGFsX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBheXBhbFwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF5cGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcGF5cGFsLnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9wYXlQYWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX3N0cmlwZV9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdHJpcGVcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cInN0cmlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0cmlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3N0cmlwZS5zdmcnKVwiIDphbHQ9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X3dpdGhfc3RyaXBlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19zc2xjb21tZXJ6X2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3NsX2NvbW1lcnplXCIgdmFsdWU9XCJzc2xfY29tbWVyemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3NsX2NvbW1lcnplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2Qvc3NsY29tbWVyemUuc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIHdpZHRoPVwiOTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X3dpdGhfc1NMQ09NTUVSWkUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX3BheXRtX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBheXRtXCIgdmFsdWU9XCJwYXl0bVwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBheXRtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcGF5dG0uc3ZnJylcIiA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX3BheXRtIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19yYXpvcnBheV9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYXpvcl9wYXlcIiB2YWx1ZT1cInJhem9yX3BheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgQGNoYW5nZT1cImludGVncmF0ZVJhem9yUGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJhem9yX3BheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3Jhem9ycGF5LnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X3dpdGhfcmF6b3JwYXkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2phenpfY2FzaF9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJqYXp6Q2FzaFwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiamF6el9jYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiamF6ekNhc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9qYXp6Q2FzaC5zdmcnKVwiIDphbHQ9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX2phenpDYXNoIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19wYXlzdGFja19hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXlzdGFja1wiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwicGF5c3RhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXlzdGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3BheXN0YWNrLnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X3dpdGhfcGF5c3RhY2sgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2ZsdXR0ZXJ3YXZlX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImZsdXR0ZXJfd2F2ZVwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiZmx1dHRlcl93YXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmx1dHRlcl93YXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZncuc3ZnJylcIiA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9mbHV0dGVyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19tb2xsaWVfYWN0aXZhdGVkID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibW9sbGllXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJtb2xsaWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb2xsaWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9tb2xsaWUuc3ZnJylcIiA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9tb2xsaWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX21lcmNhZG9fcGFnb19hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZXJjYWRvcGFnb1wiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwibWVyY2Fkb3BhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXJjYWRvcGFnb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21lcmNhZG8tcGFnby5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9tZXJjYWRvcGFnbyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfYmthc2hfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImJrYXNoXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJia2FzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJrYXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvYkthc2guc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIiBjbGFzcz1cImltZy1mbHVpZFwiPnt7IGxhbmcucGF5X3dpdGhfYmthc2ggfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2dvb2dsZV9wYXlfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdvb2dsZV9wYXlcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cImdvb2dsZV9wYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJnb29nbGVfcGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZ29vZ2xlX3BheS5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9nb29nbGVfcGF5IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19uYWdhZF9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibmFnYWRcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cIm5hZ2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFnYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9uYWdhZC5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9uYWdhZCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfYW1hcnBheV9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiYW1hcnBheVwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiYW1hcnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFtYXJwYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9hbWFycGF5LnN2ZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX2FtYXJwYXkgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX3NrcmlsbF9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwic2tyaWxsXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJza3JpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJza3JpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9za3JpbGwuc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIiBjbGFzcz1cImltZy1mbHVpZFwiPnt7IGxhbmcucGF5X3dpdGhfc2tyaWxsIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19peXppY29fYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIml5emljb1wiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiaXl6aWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXl6aWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvaXl6aWNvLnN2ZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX2l5emljbyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfbWlkX3RyYW5zX2FjdGl2YXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtaWRfdHJhbnNcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cIm1pZF90cmFuc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1pZF90cmFuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21pZHRyYW5zLnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX21pZF90cmFucyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfdGVscl9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGVsclwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwidGVsclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlbHJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC90ZWxyLnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX3RlbHIgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2traWFwYXlfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImtraWFwYXlcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cImtraWFwYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJra2lhcGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2Qva2tpYXBheS5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImtraWFwYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX2traWFwYXkgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImFkZG9ucy5pbmNsdWRlcygnb2ZmbGluZV9wYXltZW50JylcIiB2LWZvcj1cIihvZmZsaW5lLGluZGV4KSBpbiBvZmZsaW5lX21ldGhvZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgOmlkPVwiJ29mZmxpbmUnK29mZmxpbmUuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwib2ZmbGluZUNoZWNrKG9mZmxpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvZmZsaW5lX21ldGhvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb1wiIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInb2ZmbGluZScrb2ZmbGluZS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWxhenk9XCJvZmZsaW5lLmltYWdlXCIgOmFsdD1cIm9mZmxpbmUubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvZmZsaW5lLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWVuZCBtdC0zXCIgOmNsYXNzPVwieyAnZGlzYWJsZV9zZWN0aW9uJyA6ICFmb3JtLnRvdGFsIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy01XCIgaWQ9XCJwYXltZW50X2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtYXV0b1wiIHYtc2hvdz1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3BheXBhbCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXlwYWwtYnV0dG9uLWNvbnRhaW5lclwiIHJlZj1cInBheXBhbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cGF5cGFsIHYtaWY9XCJzZXR0aW5ncy5pc19wYXlwYWxfYWN0aXZhdGVkID09IDEgJiYgc2V0dGluZ3MucGF5cGFsX2tleSAmJiBwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdwYXlwYWwnXCIgOnRyeF9pZD1cInRyeF9pZFwiIDpjb2RlPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwiZm9ybS50b3RhbFwiIDpwYXltZW50X3R5cGU9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgOnR5cGU9XCInd2FsbGV0J1wiPjwvcGF5cGFsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDAgZGlzYWJsZV9idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhcGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiPnt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ3N0cmlwZS9yZWRpcmVjdD9hbW91bnQ9JysgZm9ybS50b3RhbCsnJnR5cGU9d2FsbGV0JylcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3N0cmlwZScgXCI+e3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgnZ2V0L3NzbC1yZXNwb25zZT9hbW91bnQ9JysgZm9ybS50b3RhbCsnJnR5cGU9d2FsbGV0JylcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3NzbF9jb21tZXJ6ZScgXCI+e3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgndXNlci9wYXltZW50L3BheXRtUmVkaXJlY3Q/YW1vdW50PScrIGZvcm0udG90YWwrJyZ0eXBlPXdhbGxldCcpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdwYXl0bScgXCI+e3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNvZmZsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwib2ZmbGluZV9tZXRob2QubmFtZVwiPnt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjcGF5c3RhY2tfbW9kYWxcIiBAY2xpY2s9XCJwYXltZW50X2NvbXBvbmVudF9sb2FkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3BheXN0YWNrJyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWJzLXRhcmdldD1cIiNmd19tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ2ZsdXR0ZXJfd2F2ZScgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV9ub3cgfX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdtb2xsaWUvcmVjaGFyZ2UtcGF5bWVudC8/YW1vdW50PScgKyBmb3JtLnRvdGFsKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnbW9sbGllJ1wiPnt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgnbWVyY2Fkb3BhZ28vcmVkaXJlY3Qvd2FsbGV0P2Ftb3VudD0nK2Zvcm0udG90YWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ21lcmNhZG9wYWdvJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdia2FzaC9yZWRpcmVjdD9hbW91bnQ9Jytmb3JtLnRvdGFsKycmdHlwZT13YWxsZXQnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdia2FzaCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ25hZ2FkL3JlZGlyZWN0L3dhbGxldD9hbW91bnQ9Jytmb3JtLnRvdGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICduYWdhZCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ2FtYXJwYXkvcmVkaXJlY3Q/YW1vdW50PScrZm9ybS50b3RhbCsnJnR5cGU9d2FsbGV0JnBheW1lbnRfdHlwZT1hbWFycGF5JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnYW1hcnBheSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGdvb2dsZV9wYXkgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ2dvb2dsZV9wYXknXCIgOnRyeF9pZD1cInRyeF9pZFwiIDpjb2RlPVwiY29kZVwiIDp0eXBlPVwid2FsbGV0X3JlY2hhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwiZm9ybS50b3RhbFwiPjwvZ29vZ2xlX3BheT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ3NrcmlsbC9yZWRpcmVjdD9hbW91bnQ9Jytmb3JtLnRvdGFsKycmdHlwZT13YWxsZXQmcGF5bWVudF90eXBlPXNrcmlsbCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3NrcmlsbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ2l5emljby9yZWRpcmVjdC93YWxsZXQ/YW1vdW50PScrZm9ybS50b3RhbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnaXl6aWNvJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgndGVsci9yZWRpcmVjdC93YWxsZXQ/YW1vdW50PScrZm9ybS50b3RhbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3RlbHInXCI+IHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1pZHRyYW5zIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdtaWRfdHJhbnMnXCIgOmFtb3VudD1cImZvcm0udG90YWxcIiA6dHlwZT1cIndhbGxldF9yZWNoYXJnZVwiPjwvbWlkdHJhbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGtraWFwYXkgdi1pZj1cInNldHRpbmdzLmlzX2traWFwYXlfYWN0aXZhdGVkICYmIHNldHRpbmdzLmtraWFwYXlfcHVibGljX2tleSAmJiBwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdra2lhcGF5JyAmJiB4b2ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0cnhfaWQ9XCJ0cnhfaWRcIiA6Y29kZT1cImNvZGVcIiA6YW1vdW50PVwiZm9ybS50b3RhbFwiIDpwYXltZW50X3R5cGU9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgOnhvZj1cInhvZlwiIDp0eXBlPVwiJ3dhbGxldCdcIj48L2traWFwYXk+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwianNmb3JtXCIgOmFjdGlvbj1cImphenpfdXJsXCIgbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1mb3I9XCIodmFsdWUsbmFtZSkgaW4gamF6el9kYXRhXCIgOmtleT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCIhbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdqYXp6X2Nhc2gnXCI+e3sgbGFuZy5wYXlfbm93IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIDphY3Rpb249XCJnZXRVcmwoJ3VzZXIvcmVjaGFyZ2Utd2FsbGV0JylcIiBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdyYXpvcl9wYXknXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJ0b2tlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGF5bWVudF90eXBlXCIgOnZhbHVlPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYW1vdW50XCIgOnZhbHVlPVwiZm9ybS50b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJyYXpvcl9wYXlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWJvZHkgLS0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJvZmZsaW5lXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cIm9mZmxpbmVfbW9kYWxcIlxyXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGxhbmcucGF5X3dpdGggfX0ge3sgb2ZmbGluZV9tZXRob2QubmFtZSB9fTwvaDU+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbW9kYWxfY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcudXBsb2FkX2ZpbGUgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGUgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ1cGxvYWQtaW1hZ2UgZm9ybS1jb250cm9sXCIgZm9yPVwidXBsb2FkLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJ1cGxvYWQtMVwiIEBjaGFuZ2U9XCJpbWFnZVVwKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgaWQ9XCJ1cGxvYWQtaW1hZ2VcIj57eyBsYW5nLnVwbG9hZF9maWxlIH19PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwbG9hZC1pbWFnZSB1cGxvYWQtdGV4dFwiIGZvcj1cInVwbG9hZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwidXBsb2FkLTJcIiBAY2hhbmdlPVwiaW1hZ2VVcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1sYXp5PVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL290aGVycy9lbnYuc3ZnJylcIiBhbHQ9XCJmaWxlIHVwbG9hZCBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnVwbG9hZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCIgdi1pZj1cIm9mZmxpbmVfbWV0aG9kLmluc3RydWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcuaW5zdHJ1Y3Rpb25zIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvblwiIHYtaHRtbD1cIm9mZmxpbmVfbWV0aG9kLmluc3RydWN0aW9uc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJwYXltZW50XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2LXNob3c9XCIhbG9hZGluZ1wiPnt7IGxhbmcucHJvY2VlZCB9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGxvYWRpbmdfYnV0dG9uIHYtc2hvdz1cImxvYWRpbmdcIiA6Y2xhc3NfbmFtZT1cIididG4gYnRuLXByaW1hcnknXCI+PC9sb2FkaW5nX2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtYm9keSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJwYXlzdGFja19tb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJwYXlzdGFja19tb2RhbFwiXHJcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgbGFuZy5wYXlfd2l0aF9wYXlzdGFjayB9fTwvaDU+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbW9kYWxfY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwYXlzdGFjayB2LWlmPVwicGF5bWVudF9jb21wb25lbnRfbG9hZFwiIDp0cnhfaWQ9XCJ0cnhfaWRcIiA6dHJhbnNhY3Rpb25fdHlwZT1cIid3YWxsZXRfcmVjaGFyZ2UnXCIgOnBheXN0YWNrX2tleT1cInNldHRpbmdzLnBheXN0YWNrX3BrXCIgOm5nbl9leGNoYW5nZV9yYXRlPVwic2V0dGluZ3MubmduX2V4Y2hhbmdlX3JhdGVcIiA6Y29kZT1cImNvZGVcIiA6YW1vdW50PVwiZm9ybS50b3RhbFwiIDp0eXBlPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiPjwvcGF5c3RhY2s+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Zmx1dHRlcl93YXZlICA6dHJ4X2lkPVwidHJ4X2lkXCIgOmNvZGU9XCJjb2RlXCIgOnRyYW5zYWN0aW9uX3R5cGU9XCInd2FsbGV0X3JlY2hhcmdlJ1wiIDphbW91bnQ9XCJmb3JtLnRvdGFsXCIgOnR5cGU9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgcmVmPVwiZmx1dHRlcl93YXZlXCI+PC9mbHV0dGVyX3dhdmU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdXNlcl9zaWRlYmFyIGZyb20gXCIuLi8uLi9wYXJ0aWFscy91c2VyX3NpZGViYXJcIjtcclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL3NoaW1tZXJcIjtcclxuLy8gaW1wb3J0IHBheXN0YWNrIGZyb20gJ3Z1ZS1wYXlzdGFjayc7XHJcbmltcG9ydCBwYXlzdGFjayBmcm9tIFwiLi4vLi4vcGF5bWVudF9wYXJ0aWFscy9wYXlzdGFja1wiO1xyXG5pbXBvcnQgRmx1dHRlcl93YXZlIGZyb20gXCIuLi8uLi9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZVwiO1xyXG5pbXBvcnQgZ29vZ2xlX3BheSBmcm9tIFwiLi4vLi4vcGF5bWVudF9wYXJ0aWFscy9nb29nbGVfcGF5XCI7XHJcbmltcG9ydCBtaWR0cmFucyBmcm9tIFwiLi4vLi4vcGF5bWVudF9wYXJ0aWFscy9taWR0cmFuc1wiO1xyXG5pbXBvcnQga2tpYXBheSBmcm9tIFwiLi4vLi4vcGF5bWVudF9wYXJ0aWFscy9ra2lhcGF5XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIndhbGxldFwiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIHVzZXJfc2lkZWJhciwgc2hpbW1lciwgcGF5c3RhY2ssIEZsdXR0ZXJfd2F2ZSxnb29nbGVfcGF5LG1pZHRyYW5zLGtraWFwYXlcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjdXJyZW50OiAnd2FsbGV0X2hpc3RvcnknLFxyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBuZXh0X3BhZ2VfdXJsOiBmYWxzZSxcclxuICAgICAgc3RyaXBlX2Zvcm06IHtcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgIGxvYWRpbmc6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGFtb3VudDogMCxcclxuICAgICAgb2ZmbGluZV9tZXRob2RzOiBbXSxcclxuICAgICAgaW5kaWFuX2N1cnJlbmN5OiB7fSxcclxuICAgICAgeG9mOiAnJyxcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIHRvdGFsOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBzc2w6IHtcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgcmF6b3JfZm9ybToge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBqYXp6X2RhdGE6IFtdLFxyXG4gICAgICBqYXp6X3VybDogJycsXHJcbiAgICAgIG9mZmxpbmVfbWV0aG9kOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICBpbnN0cnVjdGlvbnM6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBpc19zaGltbWVyOiBmYWxzZSxcclxuXHJcbiAgICAgIHRyeF9pZCA6XCJcIixcclxuICAgICAgY29kZSA6XCJcIixcclxuICAgICAgd2FsbGV0X3JlY2hhcmdlIDpcIndhbGxldF9yZWNoYXJnZVwiLFxyXG4gICAgICBwYXltZW50X2NvbXBvbmVudF9sb2FkOmZhbHNlLFxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy53YWxsZXRfc3lzdGVtICE9IDEpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdob21lJ30pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aENvdW50ZXIodGhpcy53YWxsZXRzKSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubG9hZFdhbGxldHMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxlbmd0aENvdW50ZXIodGhpcy53YWxsZXRzKSA+IDApIHtcclxuICAgICAgdGhpcy5pc19zaGltbWVyID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdGhpcy50YWtlRGF0YSgpO1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHdhbGxldHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFdhbGxldFJlY2hhcmdlcztcclxuICAgIH0sXHJcbiAgICBzaGltbWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubW9kdWxlLnNoaW1tZXJcclxuICAgIH0sXHJcbiAgICByZWZlcmVuY2UoKSB7XHJcbiAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgbGV0IHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxyXG4gICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkV2FsbGV0cygpIHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3dhbGxldC1oaXN0b3J5P3BhZ2U9JyArIHRoaXMucGFnZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYWdlID4gMSkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHJcbiAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19zaGltbWVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIGxldCB1bnNoaWZ0ID0gMDtcclxuXHJcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJnZXRXYWxsZXRSZWNoYXJnZXNcIiwge3Vuc2hpZnQ6IHVuc2hpZnQsIGRhdGE6IHJlc3BvbnNlLmRhdGEucmVjaGFyZ2VzLmRhdGF9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLm5leHRfcGFnZV91cmwgPSByZXNwb25zZS5kYXRhLnJlY2hhcmdlcy5uZXh0X3BhZ2VfdXJsO1xyXG4gICAgICAgICAgdGhpcy5wYWdlKys7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXltZW50KCkge1xyXG5cclxuICAgICAgbGV0IHBheW1lbnRfdHlwZSA9IHRoaXMucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZTtcclxuXHJcbiAgICAgIGlmICghcGF5bWVudF90eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0ci53YXJuaW5nKHRoaXMubGFuZy5wbGVhc2VfY2hvb3NlX2FfcGF5bWVudF9tZXRob2QsIHRoaXMubGFuZy5XYXJuaW5nICsgJyAhIScpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLm9mZmxpbmVfbWV0aG9kLmlkLFxyXG4gICAgICAgIGZpbGU6IHRoaXMucHJvZHVjdF9mb3JtLmltYWdlLFxyXG4gICAgICAgIHBheW1lbnRfdHlwZTogcGF5bWVudF90eXBlLFxyXG4gICAgICAgIGFtb3VudDogdGhpcy5mb3JtLnRvdGFsLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldCcpO1xyXG5cclxuICAgICAgaWYgKHRoaXMub2ZmbGluZV9tZXRob2QuaWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZm9ybSwge1xyXG5cclxuICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiAoZGF0YSwgaGVhZGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0VG9Gb3JtRGF0YShkYXRhKVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc19zaGltbWVyID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNvZmZsaW5lJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbGV0IHVuc2hpZnQgPSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiZ2V0V2FsbGV0UmVjaGFyZ2VzXCIsIHt1bnNoaWZ0OiB1bnNoaWZ0LCBkYXRhOiByZXNwb25zZS5kYXRhLnJlY2hhcmdlcy5kYXRhfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2Vfc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkLWltYWdlJyk7XHJcbiAgICAgICAgICAgIGlmIChpbWFnZV9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgIGltYWdlX3NlbGVjdG9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRha2VEYXRhKCkge1xyXG4gICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvd2FsbGV0LWRhdGEnKTtcclxuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmlzX3NoaW1tZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgIHRoaXMuaW5kaWFuX2N1cnJlbmN5ID0gcmVzcG9uc2UuZGF0YS5pbmRpYW5fY3VycmVuY3k7XHJcbiAgICAgICAgICB0aGlzLm9mZmxpbmVfbWV0aG9kcyA9IHJlc3BvbnNlLmRhdGEub2ZmbGluZV9tZXRob2RzO1xyXG4gICAgICAgICAgdGhpcy5qYXp6X2RhdGEgPSByZXNwb25zZS5kYXRhLmphenpfZGF0YTtcclxuICAgICAgICAgIHRoaXMuamF6el91cmwgPSByZXNwb25zZS5kYXRhLmphenpfdXJsO1xyXG4gICAgICAgICAgdGhpcy54b2YgPSByZXNwb25zZS5kYXRhLnhvZjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaW50ZWdyYXRlUmF6b3JQYXkoKSB7XHJcbiAgICAgIHRoaXMucmF6b3JQYXlSZW1vdmUoKTtcclxuICAgICAgaWYgKHRoaXMucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAncmF6b3JfcGF5JyAmJiB0aGlzLmluZGlhbl9jdXJyZW5jeSkge1xyXG4gICAgICAgIHZhciByYXpvcktleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF6b3JwYXktcGF5bWVudC1idXR0b24nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXpvcktleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHJhem9yS2V5c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbXlTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnbGFuZ3VhZ2UnLCAnamF2YXNjcmlwdCcpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCB0aGlzLnNldHRpbmdzLnJhem9yX2tleSk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcsIHBhcnNlSW50KHRoaXMuZm9ybS50b3RhbCAqIDEwMCAqIHRoaXMuaW5kaWFuX2N1cnJlbmN5LmV4Y2hhbmdlX3JhdGUpKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsICdZb29yaScpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1kZXNjcmlwdGlvbicsICdSb3plcnBheScpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScsIHRoaXMuc2V0dGluZ3MuZGFya19sb2dvKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZmlsbC5uYW1lJywgJ25hbWUnKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZmlsbC5lbWFpbCcsICdlbWFpbCcpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaWxsLmFkZHJlc3MnLCAnYWRkcmVzcycpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZS5jb2xvcicsICcjZmY3NTI5Jyk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmdldFVybCgncHVibGljL2Zyb250ZW5kL2pzL3Jhem9yX3BheV9jaGVja291dC5qcycpKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIHNjcmlwdFxyXG4gICAgICAgIHRoaXMuJHJlZnMucmF6b3JfcGF5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBteVNjcmlwdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnc3NsX2NvbW1lcnplJykge1xyXG4gICAgICAgIHZhciBzc2xfa2V5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2xjelBheUJ0bicpO1xyXG4gICAgICAgIGlmIChzc2xfa2V5cykge1xyXG4gICAgICAgICAgc3NsX2tleXMuc2V0QXR0cmlidXRlKFwiZW5kcG9pbnRcIiwgdGhpcy5nZXRVcmwoJ3VzZXIvcmVjaGFyZ2Utd2FsbGV0P3BheW1lbnRfdHlwZT1zc2xfY29tbWVyemUmYW1vdW50PScgKyB0aGlzLmZvcm0udG90YWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmF6b3JQYXlSZW1vdmUoKSB7XHJcbiAgICAgIHZhciByYXpvcktleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF6b3JwYXktcGF5bWVudC1idXR0b24nKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF6b3JLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmF6b3JLZXlzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5uYW1lID0gJyc7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QuaW1hZ2UgPSAnJztcclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5pbnN0cnVjdGlvbnMgPSAnJztcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlRGF0YSgpIHtcclxuICAgICAgdGhpcy5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID0gJyc7XHJcbiAgICAgIHRoaXMucmF6b3JQYXlSZW1vdmUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVjaGFyZ2VNb2RhbEhpZGUoKSB7XHJcbiAgICAgICQoJyNyZWNoYXJnZV93YWxsZXQnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfSxcclxuICAgIG9mZmxpbmVDaGVjayhvZmZsaW5lKSB7XHJcbiAgICAgIHRoaXMucmF6b3JQYXlSZW1vdmUoKTtcclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5pZCA9IG9mZmxpbmUuaWQ7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QubmFtZSA9IG9mZmxpbmUubmFtZTtcclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5pbWFnZSA9IG9mZmxpbmUuaW1hZ2U7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QuaW5zdHJ1Y3Rpb25zID0gb2ZmbGluZS5pbnN0cnVjdGlvbnM7XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZXZpZXcuanBnJylcIiBhbHQ9XCJzaGltbWVyXCJcclxuICAgICAgIGNsYXNzPVwic2hpbW1lclwiIHYtYmluZDpzdHlsZT0gXCJbaGVpZ2h0ID8gc3R5bGUgOiBudWxsXVwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJzaGltbWVyLnZ1ZVwiLFxyXG4gICAgcHJvcHM6IFsnaGVpZ2h0J10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5oZWlnaHQrJ3B4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIiB2LWlmPVwiYXV0aFVzZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZS1kZXRhaWxzIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLXRodW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJhdXRoVXNlci5wcm9maWxlX2ltYWdlXCIgOmFsdD1cImF1dGhVc2VyLmZ1bGxfbmFtZVwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+e3sgYXV0aFVzZXIuZnVsbF9uYW1lIH19IDxyb3V0ZXItbGluayBjbGFzcz1cImQtaW5saW5lXCIgOnRvPVwieyBuYW1lIDogJ2VkaXQucHJvZmlsZScgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1wZW5jaWxcIj48L3NwYW4+PC9yb3V0ZXItbGluaz48L2gyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+e3sgYXV0aFVzZXIuZW1haWwgfX08L2E+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJlX3NlbGxlciBiYXNlXCIgOnRvPVwieyBuYW1lIDogJ21pZ3JhdGUuc2VsbGVyJyB9XCIgIHYtaWY9XCJzZXR0aW5ncy5zZWxsZXJfc3lzdGVtID09IDFcIj5cclxuICAgICAgICAgICAgICAgIHt7IGxhbmcuYmVfYV9zZWxsZXIgfX0gPHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLXN0b3JlLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItbWVudVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdkYXNoYm9hcmQnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnZGFzaGJvYXJkJyB9XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLXZpZXctZGFzaGJvYXJkLW91dGxpbmVcIj48L3NwYW4+IHt7IGxhbmcuZGFzaGJvYXJkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2FkZHJlc3Nlcyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdhZGRyZXNzZXMnIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktbWFwLW1hcmtlci1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLmFkZHJlc3NlcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdub3RpZmljYXRpb24nfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnbm90aWZpY2F0aW9uJyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWJlbGwtb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5ub3RpZmljYXRpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnb3JkZXJfaGlzdG9yeSd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdvcmRlci5oaXN0b3J5JyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWNhcnQtb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5vcmRlcl9oaXN0b3J5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImRvd25sb2FkX3VybFwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdkaWdpdGFsX3Byb2R1Y3Rfb3JkZXJfaGlzdG9yeSd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdvcmRlcnMuZGlnaXRhbC5wcm9kdWN0JyB9XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWNhcnQtYXJyb3ctZG93blwiPjwvc3Bhbj4ge3sgbGFuZy5kaWdpdGFsX3Byb2R1Y3Rfb3JkZXIgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXCIgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2dpZnRfdm91Y2hlcid9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdnaWZ0LnZvdWNoZXInIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktd2FsbGV0LWdpZnRjYXJkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLmdpZnRfdm91Y2hlciB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdjaGFuZ2VfcGFzc3dvcmQnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnY2hhbmdlLnBhc3N3b3JkJyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWxvY2stb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5jaGFuZ2VfcGFzc3dvcmQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3Mud2FsbGV0X3N5c3RlbSA9PSAxXCIgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ3dhbGxldF9oaXN0b3J5J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ3dhbGxldC5oaXN0b3J5JyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLXdhbGxldC1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLm15X3dhbGxldCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJhZGRvbnMuaW5jbHVkZXMoJ3Jld2FyZCcpXCIgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ3Jld2FyZF9oaXN0b3J5J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ3Jld2FyZC5oaXN0b3J5JyB9XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLXZlY3Rvci1wb2ludFwiPjwvc3Bhbj57eyBsYW5nLm15X3Jld2FyZHMgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3Muc2VsbGVyX3N5c3RlbSA9PSAxXCIgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2ZvbGxvd2VkX3Nob3AnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnc2hvcC5mb2xsb3dlZCcgfVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS1ob21lLWhlYXJ0XCI+PC9zcGFuPnt7IGxhbmcuc2hvcCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgcmV3YXJkXCIgaWQ9XCJjb252ZXJ0X3Jld2FyZFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgbGFuZy5yZXdhcmRfcG9pbnQgfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIG1vZGFsX2Nsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHJld2FyZF9tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJjb252ZXJ0UmV3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJld2FyZFwiPnt7IGxhbmcucmV3YXJkX3BvaW50IH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJld2FyZFwiIHYtbW9kZWw9XCJjb252ZXJ0ZWRfcmV3YXJkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImxhbmcuZW50ZXJfcG9pbnRfeW91X3dhbnRfY29udmVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3RhcnRcIiB2LWlmPVwidG90YWxSZXdhcmQgIT0gbnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXZhaWxhYmxlIFBvaW50cyB0byBDb252ZXJ0IDoge3sgdG90YWxSZXdhcmQucmV3YXJkcyB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUgfX17eyBsYW5nLnJld2FyZF9wb2ludHMgfX17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUZvcm1hdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ0b3RhbFJld2FyZC5yZXdhcmRzID4gMFwiPnt7IGxhbmcudG90YWxfYW1vdW50X3lvdV93aWxsX2dldCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByaWNlRm9ybWF0KGNvbnZlcnRlZF9yZXdhcmQgLyBzZXR0aW5ncy5yZXdhcmRfY29udmVydF9yYXRlKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nX2J1dHRvbiB2LWlmPVwibG9hZGluZ1wiIDpjbGFzc19uYW1lPVwiJ2J0biBidG4tcHJpbWFyeSBtdC0zJ1wiPjwvbG9hZGluZ19idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHYtZWxzZSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdkaXNhYmxlX2J0bicgOiBjb252ZXJ0ZWRfcmV3YXJkIDwgc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZSB8fCB0b3RhbFJld2FyZC5yZXdhcmRzIDwgY29udmVydGVkX3Jld2FyZCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLmNvdmVydF9yZXdhcmRzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBzaGltbWVyIGZyb20gXCIuL3NoaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXNlcl9zaWRlYmFyXCIsXHJcbiAgICBwcm9wczogW1xyXG4gICAgICAgICdjdXJyZW50JyxcclxuICAgICAgICAnYWRkcmVzc2VzJ1xyXG4gICAgXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb3dubG9hZF91cmwgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBdXRoKCk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB0b3RhbFJld2FyZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0VG90YWxSZXdhcmQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFR5cGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldE1vZGFsVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHNoaW1tZXIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNoZWNrQXV0aCgpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCdob21lL2NoZWNrLWF1dGgnKVxyXG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VzZXInLCByZXNwb25zZS5kYXRhLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdnZXRPcmRlclVybCcsIHJlc3BvbnNlLmRhdGEub3JkZXJfdXJscyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXV0aFVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhVc2VyLnVzZXJfdHlwZSA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdob21lJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRUb3RhbFJld2FyZCcsIHJlc3BvbnNlLmRhdGEucmV3YXJkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmRvd25sb2FkX3VybHMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZF91cmwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb252ZXJ0UmV3YXJkKCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29udmVydC1yZXdhcmQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmNvbnZlcnRlZF9yZXdhcmQgLyB0aGlzLnNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUsXHJcbiAgICAgICAgICAgICAgICByZXdhcmQ6IHRoaXMuY29udmVydGVkX3Jld2FyZCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmFtb3VudCA+IDAgJiYgdGhpcy50b3RhbFJld2FyZC5yZXdhcmRzID49IHRoaXMuY29udmVydGVkX3Jld2FyZCAmJiBjb25maXJtKCdBcmUgWW91IFN1cmUhIFlvdSB3YW50IHRvIENvbnZlcnQgPycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIGZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArJyAhIScgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb252ZXJ0X3Jld2FyZCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGVkX3Jld2FyZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndXNlcicsIHJlc3BvbnNlLmRhdGEudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VG90YWxSZXdhcmQnLCByZXNwb25zZS5kYXRhLnJld2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWJzLXRhcmdldD1cIiNmd19tb2RhbFwiXHJcbiAgICAgICB2LWlmPVwidHlwZSA9PSAnZmx1dHRlcl93YXZlJyBcIj5cclxuICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cImZ3X21vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImZ3X21vZGFsXCJcclxuICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyBsYW5nLnBheV93aXRoX2ZsdXR0ZXIgfX08L2g1PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIG1vZGFsX2Nsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImxhbmcubmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLnBob25lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmx1dHRlcl93YXZlXCIgQGNsaWNrPVwiaW5pdGlhdGVQb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAge3sgbGFuZy5wYXkgfX0ge3sgcHJpY2VGb3JtYXQoYW1vdW50KSB9fVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiZmx1dHRlcl93YXZlXCIsXHJcbiAgICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCd0cmFuc2FjdGlvbl90eXBlJywndHlwZSddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2hlY2tvdXQuZmx1dHRlcndhdmUuY29tL3YzLmpzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0aWF0ZVBvcHVwKCkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIEZsdXR0ZXJ3YXZlQ2hlY2tvdXQoe1xyXG4gICAgICAgICAgICAgICAgcHVibGljX2tleTogdGhpcy5zZXR0aW5ncy5mbHdfcHVibGljX2tleSxcclxuICAgICAgICAgICAgICAgIHR4X3JlZjogdGhhdC5yZWZlcmVuY2UoKSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhhdC5yb3VuZCh0aGF0LmFtb3VudCp0aGF0LmFjdGl2ZUN1cnJlbmN5LmV4Y2hhbmdlX3JhdGUsMiksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5hY3RpdmVDdXJyZW5jeS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9vcHRpb25zOiBcImNhcmQsIGJhbmt0cmFuc2Zlcixtb2JpbGVtb25leWdoYW5hLCB1c3NkXCIsXHJcbiAgICAgICAgICAgICAgICAvLyByZWRpcmVjdF91cmw6IFwiaHR0cHM6Ly9nbGFjaWVycy50aXRhbmljLmNvbS9oYW5kbGUtZmx1dHRlcndhdmUtcGF5bWVudFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocGF5bWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudmVyaWZ5VHJhbnNhY3Rpb24ocGF5bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN1bWVyX2lkOiAyMyxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdW1lcl9tYWM6IFwiOTJhMy05MTJiYS0xMTkyYVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoYXQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoYXQubmFtZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21pemF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGF0LnNldHRpbmdzLnN5c3RlbV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgZm9yIGFuIGF3ZXNvbWUgY3J1aXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nbzogdGhhdC5zZXR0aW5ncy5kYXJrX2xvZ28sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZmVyZW5jZSgpIHtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspXHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVyaWZ5VHJhbnNhY3Rpb24ocGF5bWVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQgOiBwYXltZW50LnRyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZTogJ2ZsdXR0ZXJfd2F2ZScsXHJcbiAgICAgICAgICAgICAgICB0cnhfaWQ6IHRoaXMudHJ4X2lkLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCwgLy8gdGhlIGFtb3VudCB5b3Ugd2FudCB0byBjaGFyZ2UgdGhlIGN1c3RvbWVyIGluIGNlbnRzLiAkMTAwIGlzIDEwMDAgKGl0IGlzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHlvdSB1c2UgYSBwcm9kdWN0IGlkIGFuZCBxdWFudGl0eSBhbmQgZ2V0IGNhbGN1bGF0ZSB0aGlzIG9uIHRoZSBiYWNrZW5kIHRvIGF2b2lkIHBlb3BsZSBtYW5pcHVsYXRpbmcgdGhlIGNvc3QpXHJcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJhbnNhY3Rpb25fdHlwZSA9PSAnd2FsbGV0X3JlY2hhcmdlJyl7XHJcbiAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldCcpO1xyXG4gICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCBmb3JtKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLmRhdGEuc3VjY2VzcywgdGhpcy5sYW5nLlN1Y2Nlc3MgKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5sYW5nLnNvbWV0aGluZ193ZW50X3dyb25nKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsZm9ybSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IodGhpcy5sYW5nLnNvbWV0aGluZ193ZW50X3dyb25nLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5nZXRVcmwoJ2dldC1pbnZvaWNlLycrdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuZ2V0VXJsKCdpbnZvaWNlLycrdGhpcy50cnhfaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5sYW5nLnNvbWV0aGluZ193ZW50X3dyb25nKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8Z29vZ2xlXHJcbiAgICAgIGlkPVwiZ29vZ2xlLXBheS1idG5cIlxyXG4gICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxyXG4gICAgICBAcGF5ZWQ9XCJwYXllZCgpXCJcclxuICAgICAgQGNhbmNlbD1cImNhbmNlbGxlZFwiXHJcbiAgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBnb29nbGUgZnJvbSAndnVlLWdvb2dsZS1wYXknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiZ29vZ2xlX3BheVwiLFxyXG4gIGNvbXBvbmVudHM6IHtnb29nbGV9LFxyXG4gIHByb3BzOiBbJ3RyeF9pZCcsICdjb2RlJywgJ2Ftb3VudCcsJ3R5cGUnXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVudmlyb25tZW50OiAnVEVTVCcsXHJcbiAgICAgICAgYnV0dG9uQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgYnV0dG9uVHlwZTogJ3BheScsXHJcbiAgICAgICAgYWxsb3dlZENhcmROZXR3b3JrczogW1xyXG4gICAgICAgICAgJ0FNRVgnLFxyXG4gICAgICAgICAgJ0RJU0NPVkVSJyxcclxuICAgICAgICAgICdJTlRFUkFDJyxcclxuICAgICAgICAgICdKQ0InLFxyXG4gICAgICAgICAgJ01BU1RFUkNBUkQnLFxyXG4gICAgICAgICAgJ1ZJU0EnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhbGxvd2VkQ2FyZEF1dGhNZXRob2RzOiBbJ1BBTl9PTkxZJywgJ0NSWVBUT0dSQU1fM0RTJ10sXHJcbiAgICAgICAgbWVyY2hhbnRJbmZvOiB7XHJcbiAgICAgICAgICBtZXJjaGFudE5hbWU6ICcnLFxyXG4gICAgICAgICAgbWVyY2hhbnRJZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uSW5mbzoge1xyXG4gICAgICAgICAgdG90YWxQcmljZVN0YXR1czogJ0ZJTkFMJyxcclxuICAgICAgICAgIHRvdGFsUHJpY2U6ICcnLFxyXG4gICAgICAgICAgY3VycmVuY3lDb2RlOiAnVVNEJyxcclxuICAgICAgICAgIGNvdW50cnlDb2RlOiAnVVMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2tlbml6YXRpb25TcGVjaWZpY2F0aW9uOiB7XHJcbiAgICAgICAgICB0eXBlOiAnUEFZTUVOVF9HQVRFV0FZJyxcclxuICAgICAgICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgZ2F0ZXdheTogJycsXHJcbiAgICAgICAgICAgIGdhdGV3YXlNZXJjaGFudElkOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMub3B0aW9ucy50cmFuc2FjdGlvbkluZm8udG90YWxQcmljZSA9IHRoaXMucm91bmQodGhpcy5hbW91bnQsIDIpO1xyXG4gICAgdGhpcy5vcHRpb25zLm1lcmNoYW50SW5mby5tZXJjaGFudE5hbWUgPSB0aGlzLnNldHRpbmdzLmdvb2dsZV9wYXlfbWVyY2hhbnRfbmFtZTtcclxuICAgIHRoaXMub3B0aW9ucy5tZXJjaGFudEluZm8ubWVyY2hhbnRJZCA9IHRoaXMuc2V0dGluZ3MuZ29vZ2xlX3BheV9tZXJjaGFudF9pZDtcclxuICAgIHRoaXMub3B0aW9ucy50b2tlbml6YXRpb25TcGVjaWZpY2F0aW9uLnBhcmFtZXRlcnMuZ2F0ZXdheSA9IHRoaXMuc2V0dGluZ3MuZ29vZ2xlX3BheV9nYXRld2F5O1xyXG4gICAgdGhpcy5vcHRpb25zLnRva2VuaXphdGlvblNwZWNpZmljYXRpb24ucGFyYW1ldGVycy5nYXRld2F5TWVyY2hhbnRJZCA9IHRoaXMuc2V0dGluZ3MuZ29vZ2xlX3BheV9nYXRld2F5X21lcmNoYW50X2lkO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcGF5ZWQocGF5bWVudERhdGEpIHtcclxuICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgaWYodGhpcy50eXBlID0gJ3dhbGxldF9yZWNoYXJnZScpe1xyXG4gICAgICAgIGxldCBwYXltZW50X3R5cGUgPSBcImdvb2dsZV9wYXlcIlxyXG4gICAgICAgICAgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtcmVjaGFyZ2U/YW1vdW50JyArIHRoaXMuYW1vdW50ICsgJyZwYXltZW50X3R5cGUnICsgcGF5bWVudF90eXBlKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpXHJcbiAgICAgICAgICB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcj9jb2RlPScgKyB0aGlzLmNvZGUgKyAnJnRyeF9pZD0nICsgdGhpcy50cnhfaWQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyP2NvZGU9JyArIHRoaXMuY29kZSArICcmZ3Vlc3Q9MScgKyAnJnRyeF9pZD0nICsgdGhpcy50cnhfaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLmFtb3VudCA9IHRoaXMuYW1vdW50O1xyXG4gICAgICBkYXRhLnBheW1lbnRfdHlwZSA9ICdnb29nbGVfcGF5JztcclxuICAgICAgZGF0YS5jb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICBkYXRhLnRyeF9pZCA9IHRoaXMudHJ4X2lkO1xyXG4gICAgICBkYXRhLm9yZGVyID0gcGF5bWVudERhdGE7XHJcblxyXG4gICAgICB0aGlzLmF4aW9zLnBvc3QodXJsLCBkYXRhKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2dldC5pbnZvaWNlJywgcGFyYW1zOiB7b3JkZXJDb2RlOiB0aGlzLmNvZGV9fSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0aGlzLnRyeF9pZH19KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsbGVkKCkge1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBra2lhcGF5LWJ1dHRvblwiID57eyBsYW5nLnBheV9ub3cgfX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwia2tpYVBheVwiLFxyXG4gIHByb3BzOiBbJ3RyeF9pZCcsICdjb2RlJywgJ2Ftb3VudCcsICdwYXltZW50X3R5cGUnLCd4b2YnLCd0eXBlJ10sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcclxuICAgIHNjcmlwdC5zcmMgPSB0aGlzLmdldFVybCgncHVibGljL2Zyb250ZW5kL2pzL2suanMnKTtcclxuICAgIGxldCBhbW91bnQgPSB0aGlzLnR5cGUgPT0gJ3dhbGxldCcgPyB0aGlzLnJvdW5kKCh0aGlzLmFtb3VudCAvIHRoaXMuYWN0aXZlQ3VycmVuY3kuZXhjaGFuZ2VfcmF0ZSkgKiB0aGlzLnhvZi5leGNoYW5nZV9yYXRlKSA6IHRoaXMucm91bmQodGhpcy5hbW91bnQqIHRoaXMueG9mLmV4Y2hhbmdlX3JhdGUpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnYW1vdW50JywgYW1vdW50KTtcclxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3VybCcsIHRoaXMuc2V0dGluZ3MuZGFya19sb2dvKTtcclxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJ2NlbnRlcicpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGlzLnNldHRpbmdzLm1lbnVfYmFja2dyb3VuZF9jb2xvcik7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzYW5kYm94JywgdGhpcy5zZXR0aW5ncy5pc19ra2lhcGF5X3NhbmRib3hlZCk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdrZXknLCB0aGlzLnNldHRpbmdzLmtraWFwYXlfcHVibGljX2tleSk7XHJcbiAgICBsZXQgdXJsID0gdGhpcy50eXBlID09ICd3YWxsZXQnID8gdGhpcy5nZXRVcmwoJ3VzZXIvcmVjaGFyZ2Utd2FsbGV0P2Ftb3VudD0nK3RoaXMuYW1vdW50KycmdHlwZT13YWxsZXQmcGF5bWVudF90eXBlPWtraWFwYXknKSA6IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyP3BheW1lbnRfdHlwZT1ra2lhcGF5JmNvZGU9JyArIHRoaXMuY29kZSArICcmdHJ4X2lkPScgKyB0aGlzLnRyeF9pZCk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjYWxsYmFjaycsIHVybCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSkge1xyXG4gICAgICBsZXQgZm9ybSA9IHtcclxuICAgICAgICBwYXltZW50X3R5cGU6ICdra2lhcGF5JyxcclxuICAgICAgICB0cnhfaWQ6IHRoaXMudHJ4X2lkLFxyXG4gICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICBhY2NvdW50OiByZXNwb25zZS5hY2NvdW50LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkOiByZXNwb25zZS50cmFuc2FjdGlvbklkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyJyk7XHJcbiAgICAgIGF4aW9zLnBvc3QodXJsLCBmb3JtKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdnZXQuaW52b2ljZScsIHBhcmFtczoge29yZGVyQ29kZTogdGhpcy5jb2RlfX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdpbnZvaWNlLmxpc3QnLCBwYXJhbXM6IHt0cnhfaWQ6IHRoaXMudHJ4X2lkfX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGFsZXJ0KHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcblxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIGlkPVwicGF5LWJ1dHRvblwiPlxyXG4gICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJtaWRfdHJhbnNcIixcclxuICAgIHByb3BzOiBbJ21pZF90b2tlbicsJ3RyeF9pZCcsICdjb2RlJywgJ2Ftb3VudCcsJ3R5cGUnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXHJcbiAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBwLm1pZHRyYW5zLmNvbS9zbmFwL3NuYXAuanNcIjtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGllbnQta2V5JywgdGhpcy5zZXR0aW5ncy5taWRfdHJhbnNfY2xpZW50X2lkKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5taWRfdG9rZW47XHJcbiAgICAgIGxldCBhdXRoVXNlciA9IHRoaXMuYXV0aFVzZXI7XHJcbiAgICAgIGxldCBhbW91bnQgPSB0aGlzLmFtb3VudDtcclxuICAgICAgbGV0IGNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgIGxldCB0cnhfaWQgPSB0aGlzLnRyeF9pZDtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheS1idXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFNuYXBUb2tlbiBhY3F1aXJlZCBmcm9tIHByZXZpb3VzIHN0ZXBcclxuICAgICAgICBzbmFwLnBheSh0b2tlbiwge1xyXG4gICAgICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgPSAnd2FsbGV0X3JlY2hhcmdlJyl7XHJcbiAgICAgICAgICAgICAgbGV0IHBheW1lbnRfdHlwZSA9IFwibWlkX3RyYW5zXCJcclxuICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1yZWNoYXJnZT9hbW91bnQnICsgdGhpcy5hbW91bnQgKyAnJnBheW1lbnRfdHlwZScgKyBwYXltZW50X3R5cGUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBpZiAoYXV0aFVzZXIpXHJcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGF0LmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcj9jb2RlPScgKyBjb2RlICsgJyZ0cnhfaWQ9JyArIHRyeF9pZCk7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdXJsID0gdGhhdC5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgY29kZSArICcmZ3Vlc3Q9MScgKyAnJnRyeF9pZD0nICsgdHJ4X2lkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGF0YS5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIGRhdGEucGF5bWVudF90eXBlID0gJ2dvb2dsZV9wYXknO1xyXG4gICAgICAgICAgICBkYXRhLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgICAgICBkYXRhLnRyeF9pZCA9IHRyeF9pZDtcclxuICAgICAgICAgICAgZGF0YS5vcmRlciA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCh1cmwsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhhdC5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnZ2V0Lmludm9pY2UnLCBwYXJhbXM6IHtvcmRlckNvZGU6IGNvZGV9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0cnhfaWR9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLmRhdGEuc3VjY2VzcywgdGhhdC5sYW5nLlN1Y2Nlc3MgKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICBvblBlbmRpbmc6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGF0LiRyb3V0ZXIucHVzaCgncGF5bWVudCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cInBob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLnBob25lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF5c3RhY2sgOmNsYXNzPVwieyAnb3ZlcmxheV9idG4nIDogIW5hbWUgfHwgIWVtYWlsIHx8ICFwaG9uZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbW91bnQ9XCJyb3VuZChhbW91bnQqMTAwKmFjdGl2ZUN1cnJlbmN5LmV4Y2hhbmdlX3JhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwaG9uZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGF5c3RhY2trZXk9XCJwYXlzdGFja19rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhbGxiYWNrPVwiY2FsbGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZmVyZW5jZT1cInJlZmVyZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hhbm5lbHM9XCJjaGFubmVsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y3VycmVuY3k9XCJhY3RpdmVDdXJyZW5jeS5jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbG9zZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplbWJlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LW1vbmV5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXkgfX0ge3sgcHJpY2VGb3JtYXQoYW1vdW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BheXN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF5c3RhY2sgZnJvbSAndnVlLXBheXN0YWNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicGF5LXN0YWNrXCIsXHJcbiAgICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCAndHlwZScsJ3BheXN0YWNrX2tleScsJ25nbl9leGNoYW5nZV9yYXRlJywndHJhbnNhY3Rpb25fdHlwZSddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHBheXN0YWNrXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGNoYW5uZWxzOiBbJ2NhcmQnLCAnYmFuaycsICd1c3NkJywgJ21vYmlsZV9tb25leSddXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICByZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnI3BheXN0YWNrX21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB0cnhfaWQ6IHRoaXMudHJ4X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsIC8vIHRoZSBhbW91bnQgeW91IHdhbnQgdG8gY2hhcmdlIHRoZSBjdXN0b21lciBpbiBjZW50cy4gJDEwMCBpcyAxMDAwIChpdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgdXNlIGEgcHJvZHVjdCBpZCBhbmQgcXVhbnRpdHkgYW5kIGdldCBjYWxjdWxhdGUgdGhpcyBvbiB0aGUgYmFja2VuZCB0byBhdm9pZCBwZW9wbGUgbWFuaXB1bGF0aW5nIHRoZSBjb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6IHJlc3BvbnNlLnJlZmVyZW5jZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50cmFuc2FjdGlvbl90eXBlID09ICd3YWxsZXRfcmVjaGFyZ2UnKXtcclxuICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldCcpO1xyXG4gICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCxmb3JtKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXInKTtcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsZm9ybSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnZ2V0Lmludm9pY2UnLCBwYXJhbXM6IHtvcmRlckNvZGU6IHRoaXMuY29kZX19KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0aGlzLnRyeF9pZH19KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1widnVlLWdvb2dsZS1wYXlcIl09ZSgpOnRbXCJ2dWUtZ29vZ2xlLXBheVwiXT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiByPXt9LG8ubT1uPVtmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oMyl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gdSh0LGUsbixyLG8sYSxpKXt0cnl7dmFyIGM9dFthXShpKSx1PWMudmFsdWV9Y2F0Y2godCl7cmV0dXJuIHZvaWQgbih0KX1jLmRvbmU/ZSh1KTpQcm9taXNlLnJlc29sdmUodSkudGhlbihyLG8pfXQuZXhwb3J0cz1mdW5jdGlvbihjKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9YXJndW1lbnRzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciByPWMuYXBwbHkodCxpKTtmdW5jdGlvbiBvKHQpe3UocixlLG4sbyxhLFwibmV4dFwiLHQpfWZ1bmN0aW9uIGEodCl7dShyLGUsbixvLGEsXCJ0aHJvd1wiLHQpfW8odm9pZCAwKX0pfX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1mdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgdSx0PU9iamVjdC5wcm90b3R5cGUscz10Lmhhc093blByb3BlcnR5LGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbDp7fSxvPWUuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLG49ZS5hc3luY0l0ZXJhdG9yfHxcIkBAYXN5bmNJdGVyYXRvclwiLHI9ZS50b1N0cmluZ1RhZ3x8XCJAQHRvU3RyaW5nVGFnXCI7ZnVuY3Rpb24gaSh0LGUsbixyKXt2YXIgYSxpLGMsdSxvPWUmJmUucHJvdG90eXBlIGluc3RhbmNlb2YgZz9lOmcscz1PYmplY3QuY3JlYXRlKG8ucHJvdG90eXBlKSxsPW5ldyBqKHJ8fFtdKTtyZXR1cm4gcy5faW52b2tlPShhPXQsaT1uLGM9bCx1PWgsZnVuY3Rpb24odCxlKXtpZih1PT09ZCl0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2lmKHU9PT15KXtpZihcInRocm93XCI9PT10KXRocm93IGU7cmV0dXJuIEwoKX1mb3IoYy5tZXRob2Q9dCxjLmFyZz1lOzspe3ZhciBuPWMuZGVsZWdhdGU7aWYobil7dmFyIHI9TyhuLGMpO2lmKHIpe2lmKHI9PT1tKWNvbnRpbnVlO3JldHVybiByfX1pZihcIm5leHRcIj09PWMubWV0aG9kKWMuc2VudD1jLl9zZW50PWMuYXJnO2Vsc2UgaWYoXCJ0aHJvd1wiPT09Yy5tZXRob2Qpe2lmKHU9PT1oKXRocm93IHU9eSxjLmFyZztjLmRpc3BhdGNoRXhjZXB0aW9uKGMuYXJnKX1lbHNlXCJyZXR1cm5cIj09PWMubWV0aG9kJiZjLmFicnVwdChcInJldHVyblwiLGMuYXJnKTt1PWQ7dmFyIG89ZihhLGksYyk7aWYoXCJub3JtYWxcIj09PW8udHlwZSl7aWYodT1jLmRvbmU/eTpwLG8uYXJnPT09bSljb250aW51ZTtyZXR1cm57dmFsdWU6by5hcmcsZG9uZTpjLmRvbmV9fVwidGhyb3dcIj09PW8udHlwZSYmKHU9eSxjLm1ldGhvZD1cInRocm93XCIsYy5hcmc9by5hcmcpfX0pLHN9ZnVuY3Rpb24gZih0LGUsbil7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOnQuY2FsbChlLG4pfX1jYXRjaCh0KXtyZXR1cm57dHlwZTpcInRocm93XCIsYXJnOnR9fX1hLndyYXA9aTt2YXIgaD1cInN1c3BlbmRlZFN0YXJ0XCIscD1cInN1c3BlbmRlZFlpZWxkXCIsZD1cImV4ZWN1dGluZ1wiLHk9XCJjb21wbGV0ZWRcIixtPXt9O2Z1bmN0aW9uIGcoKXt9ZnVuY3Rpb24gYygpe31mdW5jdGlvbiBsKCl7fXZhciB2PXt9O3Zbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dmFyIHc9T2JqZWN0LmdldFByb3RvdHlwZU9mLGI9dyYmdyh3KFMoW10pKSk7YiYmYiE9PXQmJnMuY2FsbChiLG8pJiYodj1iKTt2YXIgUD1sLnByb3RvdHlwZT1nLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHYpO2Z1bmN0aW9uIHgodCl7W1wibmV4dFwiLFwidGhyb3dcIixcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RbZV09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ludm9rZShlLHQpfX0pfWZ1bmN0aW9uIEModSl7dmFyIGU7dGhpcy5faW52b2tlPWZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gdCgpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LGUpeyFmdW5jdGlvbiBlKHQsbixyLG8pe3ZhciBhPWYodVt0XSx1LG4pO2lmKFwidGhyb3dcIiE9PWEudHlwZSl7dmFyIGk9YS5hcmcsYz1pLnZhbHVlO3JldHVybiBjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmcy5jYWxsKGMsXCJfX2F3YWl0XCIpP1Byb21pc2UucmVzb2x2ZShjLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odCl7ZShcIm5leHRcIix0LHIsbyl9LGZ1bmN0aW9uKHQpe2UoXCJ0aHJvd1wiLHQscixvKX0pOlByb21pc2UucmVzb2x2ZShjKS50aGVuKGZ1bmN0aW9uKHQpe2kudmFsdWU9dCxyKGkpfSxmdW5jdGlvbih0KXtyZXR1cm4gZShcInRocm93XCIsdCxyLG8pfSl9byhhLmFyZyl9KG4scix0LGUpfSl9cmV0dXJuIGU9ZT9lLnRoZW4odCx0KTp0KCl9fWZ1bmN0aW9uIE8odCxlKXt2YXIgbj10Lml0ZXJhdG9yW2UubWV0aG9kXTtpZihuPT09dSl7aWYoZS5kZWxlZ2F0ZT1udWxsLFwidGhyb3dcIj09PWUubWV0aG9kKXtpZih0Lml0ZXJhdG9yLnJldHVybiYmKGUubWV0aG9kPVwicmV0dXJuXCIsZS5hcmc9dSxPKHQsZSksXCJ0aHJvd1wiPT09ZS5tZXRob2QpKXJldHVybiBtO2UubWV0aG9kPVwidGhyb3dcIixlLmFyZz1uZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKX1yZXR1cm4gbX12YXIgcj1mKG4sdC5pdGVyYXRvcixlLmFyZyk7aWYoXCJ0aHJvd1wiPT09ci50eXBlKXJldHVybiBlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9ci5hcmcsZS5kZWxlZ2F0ZT1udWxsLG07dmFyIG89ci5hcmc7cmV0dXJuIG8/by5kb25lPyhlW3QucmVzdWx0TmFtZV09by52YWx1ZSxlLm5leHQ9dC5uZXh0TG9jLFwicmV0dXJuXCIhPT1lLm1ldGhvZCYmKGUubWV0aG9kPVwibmV4dFwiLGUuYXJnPXUpLGUuZGVsZWdhdGU9bnVsbCxtKTpvOihlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9bmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLGUuZGVsZWdhdGU9bnVsbCxtKX1mdW5jdGlvbiBFKHQpe3ZhciBlPXt0cnlMb2M6dFswXX07MSBpbiB0JiYoZS5jYXRjaExvYz10WzFdKSwyIGluIHQmJihlLmZpbmFsbHlMb2M9dFsyXSxlLmFmdGVyTG9jPXRbM10pLHRoaXMudHJ5RW50cmllcy5wdXNoKGUpfWZ1bmN0aW9uIF8odCl7dmFyIGU9dC5jb21wbGV0aW9ufHx7fTtlLnR5cGU9XCJub3JtYWxcIixkZWxldGUgZS5hcmcsdC5jb21wbGV0aW9uPWV9ZnVuY3Rpb24gaih0KXt0aGlzLnRyeUVudHJpZXM9W3t0cnlMb2M6XCJyb290XCJ9XSx0LmZvckVhY2goRSx0aGlzKSx0aGlzLnJlc2V0KCEwKX1mdW5jdGlvbiBTKGUpe2lmKGUpe3ZhciB0PWVbb107aWYodClyZXR1cm4gdC5jYWxsKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUubmV4dClyZXR1cm4gZTtpZighaXNOYU4oZS5sZW5ndGgpKXt2YXIgbj0tMSxyPWZ1bmN0aW9uIHQoKXtmb3IoOysrbjxlLmxlbmd0aDspaWYocy5jYWxsKGUsbikpcmV0dXJuIHQudmFsdWU9ZVtuXSx0LmRvbmU9ITEsdDtyZXR1cm4gdC52YWx1ZT11LHQuZG9uZT0hMCx0fTtyZXR1cm4gci5uZXh0PXJ9fXJldHVybntuZXh0Okx9fWZ1bmN0aW9uIEwoKXtyZXR1cm57dmFsdWU6dSxkb25lOiEwfX1yZXR1cm4gYy5wcm90b3R5cGU9UC5jb25zdHJ1Y3Rvcj1sLGwuY29uc3RydWN0b3I9YyxsW3JdPWMuZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiLGEuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbih0KXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yO3JldHVybiEhZSYmKGU9PT1jfHxcIkdlbmVyYXRvckZ1bmN0aW9uXCI9PT0oZS5kaXNwbGF5TmFtZXx8ZS5uYW1lKSl9LGEubWFyaz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGwpOih0Ll9fcHJvdG9fXz1sLHIgaW4gdHx8KHRbcl09XCJHZW5lcmF0b3JGdW5jdGlvblwiKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShQKSx0fSxhLmF3cmFwPWZ1bmN0aW9uKHQpe3JldHVybntfX2F3YWl0OnR9fSx4KEMucHJvdG90eXBlKSxDLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxhLkFzeW5jSXRlcmF0b3I9QyxhLmFzeW5jPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBvPW5ldyBDKGkodCxlLG4scikpO3JldHVybiBhLmlzR2VuZXJhdG9yRnVuY3Rpb24oZSk/bzpvLm5leHQoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRvbmU/dC52YWx1ZTpvLm5leHQoKX0pfSx4KFApLFBbcl09XCJHZW5lcmF0b3JcIixQW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LFAudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgR2VuZXJhdG9yXVwifSxhLmtleXM9ZnVuY3Rpb24obil7dmFyIHI9W107Zm9yKHZhciB0IGluIG4pci5wdXNoKHQpO3JldHVybiByLnJldmVyc2UoKSxmdW5jdGlvbiB0KCl7Zm9yKDtyLmxlbmd0aDspe3ZhciBlPXIucG9wKCk7aWYoZSBpbiBuKXJldHVybiB0LnZhbHVlPWUsdC5kb25lPSExLHR9cmV0dXJuIHQuZG9uZT0hMCx0fX0sYS52YWx1ZXM9UyxqLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aixyZXNldDpmdW5jdGlvbih0KXtpZih0aGlzLnByZXY9MCx0aGlzLm5leHQ9MCx0aGlzLnNlbnQ9dGhpcy5fc2VudD11LHRoaXMuZG9uZT0hMSx0aGlzLmRlbGVnYXRlPW51bGwsdGhpcy5tZXRob2Q9XCJuZXh0XCIsdGhpcy5hcmc9dSx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChfKSwhdClmb3IodmFyIGUgaW4gdGhpcylcInRcIj09PWUuY2hhckF0KDApJiZzLmNhbGwodGhpcyxlKSYmIWlzTmFOKCtlLnNsaWNlKDEpKSYmKHRoaXNbZV09dSl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIHQ9dGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247aWYoXCJ0aHJvd1wiPT09dC50eXBlKXRocm93IHQuYXJnO3JldHVybiB0aGlzLnJ2YWx9LGRpc3BhdGNoRXhjZXB0aW9uOmZ1bmN0aW9uKG4pe2lmKHRoaXMuZG9uZSl0aHJvdyBuO3ZhciByPXRoaXM7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiBhLnR5cGU9XCJ0aHJvd1wiLGEuYXJnPW4sci5uZXh0PXQsZSYmKHIubWV0aG9kPVwibmV4dFwiLHIuYXJnPXUpLCEhZX1mb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PWU7LS1lKXt2YXIgbz10aGlzLnRyeUVudHJpZXNbZV0sYT1vLmNvbXBsZXRpb247aWYoXCJyb290XCI9PT1vLnRyeUxvYylyZXR1cm4gdChcImVuZFwiKTtpZihvLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgaT1zLmNhbGwobyxcImNhdGNoTG9jXCIpLGM9cy5jYWxsKG8sXCJmaW5hbGx5TG9jXCIpO2lmKGkmJmMpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiB0KG8uY2F0Y2hMb2MsITApO2lmKHRoaXMucHJldjxvLmZpbmFsbHlMb2MpcmV0dXJuIHQoby5maW5hbGx5TG9jKX1lbHNlIGlmKGkpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiB0KG8uY2F0Y2hMb2MsITApfWVsc2V7aWYoIWMpdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7aWYodGhpcy5wcmV2PG8uZmluYWxseUxvYylyZXR1cm4gdChvLmZpbmFsbHlMb2MpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PW47LS1uKXt2YXIgcj10aGlzLnRyeUVudHJpZXNbbl07aWYoci50cnlMb2M8PXRoaXMucHJldiYmcy5jYWxsKHIsXCJmaW5hbGx5TG9jXCIpJiZ0aGlzLnByZXY8ci5maW5hbGx5TG9jKXt2YXIgbz1yO2JyZWFrfX1vJiYoXCJicmVha1wiPT09dHx8XCJjb250aW51ZVwiPT09dCkmJm8udHJ5TG9jPD1lJiZlPD1vLmZpbmFsbHlMb2MmJihvPW51bGwpO3ZhciBhPW8/by5jb21wbGV0aW9uOnt9O3JldHVybiBhLnR5cGU9dCxhLmFyZz1lLG8/KHRoaXMubWV0aG9kPVwibmV4dFwiLHRoaXMubmV4dD1vLmZpbmFsbHlMb2MsbSk6dGhpcy5jb21wbGV0ZShhKX0sY29tcGxldGU6ZnVuY3Rpb24odCxlKXtpZihcInRocm93XCI9PT10LnR5cGUpdGhyb3cgdC5hcmc7cmV0dXJuXCJicmVha1wiPT09dC50eXBlfHxcImNvbnRpbnVlXCI9PT10LnR5cGU/dGhpcy5uZXh0PXQuYXJnOlwicmV0dXJuXCI9PT10LnR5cGU/KHRoaXMucnZhbD10aGlzLmFyZz10LmFyZyx0aGlzLm1ldGhvZD1cInJldHVyblwiLHRoaXMubmV4dD1cImVuZFwiKTpcIm5vcm1hbFwiPT09dC50eXBlJiZlJiYodGhpcy5uZXh0PWUpLG19LGZpbmlzaDpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PWU7LS1lKXt2YXIgbj10aGlzLnRyeUVudHJpZXNbZV07aWYobi5maW5hbGx5TG9jPT09dClyZXR1cm4gdGhpcy5jb21wbGV0ZShuLmNvbXBsZXRpb24sbi5hZnRlckxvYyksXyhuKSxtfX0sY2F0Y2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTswPD1lOy0tZSl7dmFyIG49dGhpcy50cnlFbnRyaWVzW2VdO2lmKG4udHJ5TG9jPT09dCl7dmFyIHI9bi5jb21wbGV0aW9uO2lmKFwidGhyb3dcIj09PXIudHlwZSl7dmFyIG89ci5hcmc7XyhuKX1yZXR1cm4gb319dGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpfSxkZWxlZ2F0ZVlpZWxkOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5kZWxlZ2F0ZT17aXRlcmF0b3I6Uyh0KSxyZXN1bHROYW1lOmUsbmV4dExvYzpufSxcIm5leHRcIj09PXRoaXMubWV0aG9kJiYodGhpcy5hcmc9dSksbX19LGF9KHQuZXhwb3J0cyk7dHJ5e3JlZ2VuZXJhdG9yUnVudGltZT1yfWNhdGNoKHQpe0Z1bmN0aW9uKFwiclwiLFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShyKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9bigwKSxvPW4ubihyKSxhPW4oMSksaT1uLm4oYSksYz1uKDIpLHU9bi5uKGMpLHM9e2Vudmlyb25tZW50OlwiVEVTVFwiLGJ1dHRvbkNvbG9yOlwid2hpdGVcIixiYXNlUmVxdWVzdDp7YXBpVmVyc2lvbjoyLGFwaVZlcnNpb25NaW5vcjowfSxhbGxvd2VkQ2FyZE5ldHdvcmtzOltcIkFNRVhcIixcIkRJU0NPVkVSXCIsXCJJTlRFUkFDXCIsXCJKQ0JcIixcIk1BU1RFUkNBUkRcIixcIlZJU0FcIl0sYWxsb3dlZENhcmRBdXRoTWV0aG9kczpbXCJQQU5fT05MWVwiLFwiQ1JZUFRPR1JBTV8zRFNcIl0sbWVyY2hhbnRJbmZvOnttZXJjaGFudE5hbWU6XCJFeGFtcGxlIE1lcmNoYW50XCIsbWVyY2hhbnRJZDpcIjAxMjM0NTY3ODlcIn0sdHJhbnNhY3Rpb25JbmZvOnt0b3RhbFByaWNlU3RhdHVzOlwiRklOQUxcIix0b3RhbFByaWNlOlwiMS4wMFwiLGN1cnJlbmN5Q29kZTpcIlVTRFwiLGNvdW50cnlDb2RlOlwiVVNcIn0sdG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbjp7dHlwZTpcIlBBWU1FTlRfR0FURVdBWVwiLHBhcmFtZXRlcnM6e2dhdGV3YXk6XCJleGFtcGxlXCIsZ2F0ZXdheU1lcmNoYW50SWQ6XCJleGFtcGxlR2F0ZXdheU1lcmNoYW50SWRcIn19LGJhc2VDYXJkUGF5bWVudE1ldGhvZDp7dHlwZTpcIkNBUkRcIixwYXJhbWV0ZXJzOnthbGxvd2VkQXV0aE1ldGhvZHM6W1wiUEFOX09OTFlcIixcIkNSWVBUT0dSQU1fM0RTXCJdLGFsbG93ZWRDYXJkTmV0d29ya3M6W1wiQU1FWFwiLFwiRElTQ09WRVJcIixcIklOVEVSQUNcIixcIkpDQlwiLFwiTUFTVEVSQ0FSRFwiLFwiVklTQVwiXX19LGNhcmRQYXltZW50TWV0aG9kOm51bGwscGF5bWVudERhdGFSZXF1ZXN0OntiYXNlUmVxdWVzdDp7YXBpVmVyc2lvbjoyLGFwaVZlcnNpb25NaW5vcjowfSxhbGxvd2VkUGF5bWVudE1ldGhvZHM6bnVsbCx0cmFuc2FjdGlvbkluZm86e3RvdGFsUHJpY2VTdGF0dXM6XCJGSU5BTFwiLHRvdGFsUHJpY2U6XCIxLjAwXCIsY3VycmVuY3lDb2RlOlwiVVNEXCIsY291bnRyeUNvZGU6XCJVU1wifSxtZXJjaGFudEluZm86e21lcmNoYW50TmFtZTpcIkV4YW1wbGUgTWVyY2hhbnRcIixtZXJjaGFudElkOlwiMDEyMzQ1Njc4OVwifX19O2Z1bmN0aW9uIGwoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihyPXIuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn12YXIgZj1mdW5jdGlvbih0LGUsbixyLG8sYSxpLGMpe3ZhciB1LHM9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Lm9wdGlvbnM6dDtpZihlJiYocy5yZW5kZXI9ZSxzLnN0YXRpY1JlbmRlckZucz1uLHMuX2NvbXBpbGVkPSEwKSxyJiYocy5mdW5jdGlvbmFsPSEwKSxhJiYocy5fc2NvcGVJZD1cImRhdGEtdi1cIithKSxpPyh1PWZ1bmN0aW9uKHQpeyh0PXR8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCl8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwodD1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxvJiZvLmNhbGwodGhpcyx0KSx0JiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cyYmdC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKGkpfSxzLl9zc3JSZWdpc3Rlcj11KTpvJiYodT1jP2Z1bmN0aW9uKCl7by5jYWxsKHRoaXMsdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KX06byksdSlpZihzLmZ1bmN0aW9uYWwpe3MuX2luamVjdFN0eWxlcz11O3ZhciBsPXMucmVuZGVyO3MucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHUuY2FsbChlKSxsKHQsZSl9fWVsc2V7dmFyIGY9cy5iZWZvcmVDcmVhdGU7cy5iZWZvcmVDcmVhdGU9Zj9bXS5jb25jYXQoZix1KTpbdV19cmV0dXJue2V4cG9ydHM6dCxvcHRpb25zOnN9fSh7cHJvcHM6e2lkOnt0eXBlOlN0cmluZyxyZXF1aXJlZDohMSxkZWZhdWx0OlwiZ29vZ2xlLXBheS1idXR0b25cIn0sb3B0aW9uczp7dHlwZTpPYmplY3QscmVxdWlyZWQ6ITAsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBzfX19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/bChPYmplY3QobiksITApLmZvckVhY2goZnVuY3Rpb24odCl7dSgpKGUsdCxuW3RdKX0pOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOmwoT2JqZWN0KG4pKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pfXJldHVybiBlfSh7fSxzLHtjYXJkUGF5bWVudE1ldGhvZDpudWxsLHBheW1lbnRzQ2xpZW50Om51bGx9KX0sbW91bnRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGkoKShvLmEubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIG8uYS53cmFwKGZ1bmN0aW9uKHQpe2Zvcig7Oylzd2l0Y2godC5wcmV2PXQubmV4dCl7Y2FzZSAwOnJldHVybiB0Lm5leHQ9MixlLmFzc2lnblZhcnMoKTtjYXNlIDI6dC5zZW50JiZlLmluamVjdEdvb2dsZVBheVNjcmlwdCgpO2Nhc2UgNDpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfSxtZXRob2RzOnthc3NpZ25WYXJzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gaSgpKG8uYS5tYXJrKGZ1bmN0aW9uIHQoKXtyZXR1cm4gby5hLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6cmV0dXJuIE9iamVjdC5hc3NpZ24oZSxlLm9wdGlvbnMpLHQubmV4dD0zLGUuJG5leHRUaWNrKCk7Y2FzZSAzOnJldHVybiB0LmFicnVwdChcInJldHVyblwiLHQuc2VudCk7Y2FzZSA0OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9LGluamVjdEdvb2dsZVBheVNjcmlwdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYoIXRoaXMucGF5bWVudHNDbGllbnQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImh0dHBzOi8vcGF5Lmdvb2dsZS5jb20vZ3AvcC9qcy9wYXkuanNcIiksZS5zZXRBdHRyaWJ1dGUoXCJhc3luY1wiLCEwKSxlLnNldEF0dHJpYnV0ZShcImRlZmVyXCIsITApLGUub25sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIHQub25Hb29nbGVQYXlMb2FkZWQoKX0sZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlKX19LGluaXRQYXltZW50c1ZhcnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBpKCkoby5hLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBvLmEud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpyZXR1cm4gZS5jYXJkUGF5bWVudE1ldGhvZD1PYmplY3QuYXNzaWduKHt9LGUuYmFzZUNhcmRQYXltZW50TWV0aG9kLHt0b2tlbml6YXRpb25TcGVjaWZpY2F0aW9uOmUudG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbn0pLHQubmV4dD0zLGUuJG5leHRUaWNrKCk7Y2FzZSAzOnJldHVybiB0LmFicnVwdChcInJldHVyblwiLHQuc2VudCk7Y2FzZSA0OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9LGdldEdvb2dsZUlzUmVhZHlUb1BheVJlcXVlc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx0aGlzLmJhc2VSZXF1ZXN0LHthbGxvd2VkUGF5bWVudE1ldGhvZHM6W3RoaXMuYmFzZUNhcmRQYXltZW50TWV0aG9kXX0pfSxnZXRHb29nbGVQYXltZW50c0NsaWVudDpmdW5jdGlvbigpe3JldHVybiBudWxsPT09dGhpcy5wYXltZW50c0NsaWVudCYmKHRoaXMucGF5bWVudHNDbGllbnQ9bmV3IGdvb2dsZS5wYXltZW50cy5hcGkuUGF5bWVudHNDbGllbnQoe2Vudmlyb25tZW50OnRoaXMuZW52aXJvbm1lbnR9KSksdGhpcy5wYXltZW50c0NsaWVudH0sYWRkR29vZ2xlUGF5QnV0dG9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMucGF5bWVudHNDbGllbnQuY3JlYXRlQnV0dG9uKHtvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuZ29vZ2xlUGF5QnV0dG9uQ2xpY2soKX0sYnV0dG9uQ29sb3I6dGhpcy5idXR0b25Db2xvcn0pO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmFwcGVuZENoaWxkKGUpfSxvbkdvb2dsZVBheUxvYWRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGkoKShvLmEubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIG8uYS53cmFwKGZ1bmN0aW9uKHQpe2Zvcig7Oylzd2l0Y2godC5wcmV2PXQubmV4dCl7Y2FzZSAwOnJldHVybiB0Lm5leHQ9MixlLmluaXRQYXltZW50c1ZhcnMoKTtjYXNlIDI6dC5zZW50JiZlLmdldEdvb2dsZVBheW1lbnRzQ2xpZW50KCkuaXNSZWFkeVRvUGF5KGUuZ2V0R29vZ2xlSXNSZWFkeVRvUGF5UmVxdWVzdCgpKS50aGVuKGZ1bmN0aW9uKHQpe3QucmVzdWx0JiZlLmFkZEdvb2dsZVBheUJ1dHRvbigpfSkuY2F0Y2goZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcih0KX0pO2Nhc2UgNDpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfSxnZXRHb29nbGVQYXltZW50RGF0YVJlcXVlc3Q6ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMuYmFzZVJlcXVlc3QpO3JldHVybiB0LmFsbG93ZWRQYXltZW50TWV0aG9kcz1bdGhpcy5jYXJkUGF5bWVudE1ldGhvZF0sdC50cmFuc2FjdGlvbkluZm89dGhpcy50cmFuc2FjdGlvbkluZm8sdC5tZXJjaGFudEluZm89e21lcmNoYW50SWQ6dGhpcy5tZXJjaGFudEluZm8ubWVyY2hhbnRJZCxtZXJjaGFudE5hbWU6dGhpcy5tZXJjaGFudEluZm8ubWVyY2hhbnROYW1lfSx0fSxnb29nbGVQYXlCdXR0b25DbGljazpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLmdldEdvb2dsZVBheW1lbnREYXRhUmVxdWVzdCgpO3QudHJhbnNhY3Rpb25JbmZvPXRoaXMudHJhbnNhY3Rpb25JbmZvLHRoaXMuZ2V0R29vZ2xlUGF5bWVudHNDbGllbnQoKS5sb2FkUGF5bWVudERhdGEodCkudGhlbihmdW5jdGlvbih0KXtlLiRlbWl0KFwicGF5ZWRcIix0KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IodCksXCJDQU5DRUxFRFwiPT09dC5zdGF0dXNDb2RlJiZlLiRlbWl0KFwiY2FuY2VsXCIpfSl9fX0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRjcmVhdGVFbGVtZW50O3JldHVybih0aGlzLl9zZWxmLl9jfHx0KShcImRpdlwiLHthdHRyczp7aWQ6dGhpcy5pZH19KX0sW10sITEsbnVsbCxudWxsLG51bGwpLmV4cG9ydHM7ZS5kZWZhdWx0PWZ9XSxvLmM9cixvLmQ9ZnVuY3Rpb24odCxlLG4pe28ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LG8ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxvLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW8oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihvLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpby5kKG4scixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gbn0sby5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBvLmQoZSxcImFcIixlKSxlfSxvLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG8ucD1cIi9kaXN0L1wiLG8oby5zPTQpO2Z1bmN0aW9uIG8odCl7aWYoclt0XSlyZXR1cm4gclt0XS5leHBvcnRzO3ZhciBlPXJbdF09e2k6dCxsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3RdLmNhbGwoZS5leHBvcnRzLGUsZS5leHBvcnRzLG8pLGUubD0hMCxlLmV4cG9ydHN9dmFyIG4scn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2FsbGV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZTYxYTM4MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YWxsZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93YWxsZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhlNjFhMzgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhlNjFhMzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhlNjFhMzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93YWxsZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlNjFhMzgwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhlNjFhMzgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL3dhbGxldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWRhOTI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFkYTkyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZGE5MjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkY2MxMGRhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2RjYzEwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RjYzEwZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2RjYzEwZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3VzZXJfc2lkZWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZsdXR0ZXJfd2F2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2VlZWE4ZWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmx1dHRlcl93YXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmx1dHRlcl93YXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2VlZWE4ZWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdlZWVhOGVlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdlZWVhOGVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdlZWVhOGVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mbHV0dGVyX3dhdmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlZWVhOGVlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdlZWVhOGVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiMDY4ZTU4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb29nbGVfcGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOGIwNjhlNThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhiMDY4ZTU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhiMDY4ZTU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhiMDY4ZTU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9nb29nbGVfcGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YjA2OGU1OCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YjA2OGU1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9nb29nbGVfcGF5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4va2tpYXBheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmNzllNmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4va2tpYXBheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2traWFwYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NmY3OWU2ZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjZmNzllNmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjZmNzllNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjZmNzllNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2traWFwYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2Zjc5ZTZlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY2Zjc5ZTZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2traWFwYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9taWR0cmFucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTllM2M4MTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWlkdHJhbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9taWR0cmFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjU5ZTNjODEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OWUzYzgxMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OWUzYzgxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OWUzYzgxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWlkdHJhbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ZTNjODEyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU5ZTNjODEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL21pZHRyYW5zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5c3RhY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YmQ2Y2RjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGF5c3RhY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwN2JkNmNkY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdiZDZjZGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdiZDZjZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdiZDZjZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2JkNmNkYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2JkNmNkYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlzdGFjay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2FsbGV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhbGxldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlcl9zaWRlYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mbHV0dGVyX3dhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmx1dHRlcl93YXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nb29nbGVfcGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2traWFwYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4va2tpYXBheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWlkdHJhbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWlkdHJhbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YWxsZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlNjFhMzgwJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNnLXBhZ2UtY29udGVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZWRpdC1wcm9maWxlXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidXNlcl9zaWRlYmFyXCIsIHsgYXR0cnM6IHsgY3VycmVudDogX3ZtLmN1cnJlbnQgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOSBwbC1sZy01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctc2hpcHBpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm15X3dhbGxldCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5pc19zaGltbWVyXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkIHRleHQtY2VudGVyIHByb2ZpbGUtY2FyZCBkLWZsZXgganVzdGlmeS1jZW50ZXIgcHJvZmlsZS1jYXJkLXdoaXRlLW91dGxpbmUtZGFzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZS1jYXJkLXRpdGxlIHRleHQtYmxhY2sgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRvdGFsX2JhbGFuY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtYmxhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLmF1dGhVc2VyLmJhbGFuY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdGFyZ2V0XCI6IFwiI3JlY2hhcmdlX3dhbGxldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkIHRleHQtY2VudGVyIHByb2ZpbGUtY2FyZCBkLWZsZXgganVzdGlmeS1jZW50ZXIgcHJvZmlsZS1jYXJkLXdoaXRlLW91dGxpbmUtZGFzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZmlsZS1jYXJkLXRpdGxlIG1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnJlY2hhcmdlX3dhbGxldCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnNoaW1tZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDIsIGZ1bmN0aW9uIChudW0sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic2hpbW1lclwiLCB7IGF0dHJzOiB7IGhlaWdodDogMTAwIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmlzX3NoaW1tZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgb3ZlcmZsb3cteS1hdXRvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZy10YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0aXRsZSBiLTAgbWItMiBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy53YWxsZXRfaGlzdG9yeSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSBkYXNoYm9hcmQtdGFibGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiI1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zb3VyY2UpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuZGF0ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuYW1vdW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheW1lbnRfbWV0aG9kKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnN0YXR1cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS53YWxsZXRzLCBmdW5jdGlvbiAod2FsbGV0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoKytpbmRleCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcGl0YWxpemVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQuc291cmNlLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod2FsbGV0LnJlY2hhcmdlX2RhdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LnR5cGUgPT0gXCJleHBlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KHdhbGxldC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jYXBpdGFsaXplIHRleHQtZW5kIHB0LTMgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQucGF5bWVudF9tZXRob2QucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtY2FwaXRhbGl6ZSB0ZXh0LWVuZCBwdC0zIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LnN0YXR1cyA9PSBcImFwcHJvdmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5zdGF0dXMgPT0gXCJyZWplY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdhcm5pbmdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LnN0YXR1cyA9PSBcInBlbmRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod2FsbGV0LnN0YXR1cykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXh0X3BhZ2VfdXJsICYmICFfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRXYWxsZXRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaG93X21vcmUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiB0ZXh0LWNlbnRlciBzaG93LW1vcmUgbXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJlbG9hZGVyLmdpZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInByZWxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoaXMubGFuZy5sb2FkaW5nKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnNoaW1tZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDYsIGZ1bmN0aW9uIChudW0sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgbWItMyBvdmVyZmxvdy15LWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzaGltbWVyXCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiA1MCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcInJlY2hhcmdlX3dhbGxldFwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicmVjaGFyZ2Vfd2FsbGV0XCIsXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLndhbGxldF9yZWNoYXJnZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctc2hpcHBpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNnLWNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImFtb3VudFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuYW1vdW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRvdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW50ZXJfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnRvdGFsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbW92ZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlX3NlY3Rpb246IF92bS5mb3JtLnRvdGFsID09IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdCBncmlkLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfcGF5cGFsX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicGF5cGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGF5cGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJwYXlwYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcGF5cGFsLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnBheW1lbnRfZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5wYXlfd2l0aF9wYXlQYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX3N0cmlwZV9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInN0cmlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInN0cmlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmb3I6IFwic3RyaXBlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3N0cmlwZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcucGF5X3dpdGhfc3RyaXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19zc2xjb21tZXJ6X2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNzbF9jb21tZXJ6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInNzbF9jb21tZXJ6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzc2xfY29tbWVyemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzc2xfY29tbWVyemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJzc2xfY29tbWVyemVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3NzbGNvbW1lcnplLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnBheW1lbnRfZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheV93aXRoX3NTTENPTU1FUlpFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19wYXl0bV9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBheXRtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicGF5dG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheXRtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5dG1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJwYXl0bVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9wYXl0bS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcucGF5X3dpdGhfcGF5dG1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX3Jhem9ycGF5X2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmF6b3JfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmF6b3JfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXpvcl9wYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXpvcl9wYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmludGVncmF0ZVJhem9yUGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJyYXpvcl9wYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcmF6b3JwYXkuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX3Jhem9ycGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19qYXp6X2Nhc2hfYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJqYXp6Q2FzaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImphenpfY2FzaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiamF6el9jYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiamF6el9jYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmb3I6IFwiamF6ekNhc2hcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvamF6ekNhc2guc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX2phenpDYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19wYXlzdGFja19hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBheXN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicGF5c3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheXN0YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5c3RhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJwYXlzdGFja1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9wYXlzdGFjay5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcucGF5X3dpdGhfcGF5c3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2ZsdXR0ZXJ3YXZlX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmx1dHRlcl93YXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZmx1dHRlcl93YXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbHV0dGVyX3dhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbHV0dGVyX3dhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJmbHV0dGVyX3dhdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZncuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX2ZsdXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX21vbGxpZV9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1vbGxpZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1vbGxpZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9sbGllXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9sbGllXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmb3I6IFwibW9sbGllXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21vbGxpZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcucGF5X3dpdGhfbW9sbGllXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19tZXJjYWRvX3BhZ29fYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtZXJjYWRvcGFnb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1lcmNhZG9wYWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXJjYWRvcGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lcmNhZG9wYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmb3I6IFwibWVyY2Fkb3BhZ29cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvbWVyY2Fkby1wYWdvLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnBheW1lbnRfZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcucGF5X3dpdGhfbWVyY2Fkb3BhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2JrYXNoX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJrYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYmthc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJrYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmthc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJia2FzaFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9iS2FzaC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfYmthc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19nb29nbGVfcGF5X2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImdvb2dsZV9wYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJnb29nbGVfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnb29nbGVfcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ29vZ2xlX3BheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcImdvb2dsZV9wYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZ29vZ2xlX3BheS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX2dvb2dsZV9wYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX25hZ2FkX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm5hZ2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwibmFnYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hZ2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFnYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJuYWdhZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9uYWdhZC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfbmFnYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19hbWFycGF5X2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFtYXJwYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbWFycGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbWFycGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1hcnBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcImFtYXJwYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvYW1hcnBheS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX2FtYXJwYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX3NrcmlsbF9hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJza3JpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJza3JpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNrcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNrcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcInNrcmlsbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9za3JpbGwuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3NrcmlsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2l5emljb19hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpeXppY29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJpeXppY29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml5emljb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml5emljb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcIml5emljb1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9peXppY28uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX2l5emljbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX21pZF90cmFuc19hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtaWRfdHJhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJtaWRfdHJhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pZF90cmFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pZF90cmFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcIm1pZF90cmFuc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9taWR0cmFucy5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5wYXltZW50X2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX21pZF90cmFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfdGVscl9hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0ZWxyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidGVsclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJ0ZWxyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3RlbHIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3RlbHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19ra2lhcGF5X2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImtraWFwYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJra2lhcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJra2lhcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2tpYXBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcImtraWFwYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2Qva2tpYXBheS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwia2tpYXBheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBheV93aXRoX2traWFwYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vZmZsaW5lX21ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG9mZmxpbmUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZG9ucy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZsaW5lX3BheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm9mZmxpbmVcIiArIG9mZmxpbmUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9mZmxpbmVfbWV0aG9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZmxpbmVfbWV0aG9kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2ZmbGluZV9tZXRob2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vZmZsaW5lQ2hlY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogXCJvZmZsaW5lXCIgKyBvZmZsaW5lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvZmZsaW5lLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2ZmbGluZS5pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IG9mZmxpbmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob2ZmbGluZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtZW5kIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZV9zZWN0aW9uOiAhX3ZtLmZvcm0udG90YWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBheW1lbnRfYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJwYXlwYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAncGF5cGFsJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXlwYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXlwYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfcGF5cGFsX2FjdGl2YXRlZCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MucGF5cGFsX2tleSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicGF5cGFsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeF9pZDogX3ZtLnRyeF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogX3ZtLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogX3ZtLmZvcm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YWxsZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSB3LTEwMCBkaXNhYmxlX2J0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X25vdykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInN0cmlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaXBlL3JlZGlyZWN0P2Ftb3VudD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHlwZT13YWxsZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X25vdykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInNzbF9jb21tZXJ6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0L3NzbC1yZXNwb25zZT9hbW91bnQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS50b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnR5cGU9d2FsbGV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJwYXl0bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlci9wYXltZW50L3BheXRtUmVkaXJlY3Q/YW1vdW50PVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0udG90YWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZ0eXBlPXdhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vZmZsaW5lX21ldGhvZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdGFyZ2V0XCI6IFwiI29mZmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwicGF5c3RhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjcGF5c3RhY2tfbW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfY29tcG9uZW50X2xvYWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiZmx1dHRlcl93YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdGFyZ2V0XCI6IFwiI2Z3X21vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcIm1vbGxpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9sbGllL3JlY2hhcmdlLXBheW1lbnQvP2Ftb3VudD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwibWVyY2Fkb3BhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lcmNhZG9wYWdvL3JlZGlyZWN0L3dhbGxldD9hbW91bnQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS50b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcImJrYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJia2FzaC9yZWRpcmVjdD9hbW91bnQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS50b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnR5cGU9d2FsbGV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJuYWdhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFnYWQvcmVkaXJlY3Qvd2FsbGV0P2Ftb3VudD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiYW1hcnBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1hcnBheS9yZWRpcmVjdD9hbW91bnQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS50b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnR5cGU9d2FsbGV0JnBheW1lbnRfdHlwZT1hbWFycGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJnb29nbGVfcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImdvb2dsZV9wYXlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBfdm0uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLndhbGxldF9yZWNoYXJnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0uZm9ybS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInNrcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2tyaWxsL3JlZGlyZWN0P2Ftb3VudD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHlwZT13YWxsZXQmcGF5bWVudF90eXBlPXNrcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiaXl6aWNvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpeXppY28vcmVkaXJlY3Qvd2FsbGV0P2Ftb3VudD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwidGVsclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsci9yZWRpcmVjdC93YWxsZXQ/YW1vdW50PVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0udG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcIm1pZF90cmFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJtaWR0cmFuc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IF92bS5mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBfdm0ud2FsbGV0X3JlY2hhcmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19ra2lhcGF5X2FjdGl2YXRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmtraWFwYXlfcHVibGljX2tleSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJra2lhcGF5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS54b2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImtraWFwYXlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBfdm0uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0uZm9ybS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4b2Y6IF92bS54b2YsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FsbGV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwianNmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5qYXp6X3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5qYXp6X2RhdGEsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IG5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJqYXp6X2Nhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmF6b3JfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdyYXpvcl9wYXknXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmdldFVybChcInVzZXIvcmVjaGFyZ2Utd2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl90b2tlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRva2VuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJhbW91bnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnRvdGFsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJyYXpvcl9wYXlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJvZmZsaW5lX21vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9mZmxpbmVfbWV0aG9kLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy51cGxvYWRfZmlsZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZSBkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZSBmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInVwbG9hZC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBpZDogXCJ1cGxvYWQtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmltYWdlVXAoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgYXR0cnM6IHsgaWQ6IFwidXBsb2FkLWltYWdlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy51cGxvYWRfZmlsZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZSB1cGxvYWQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwidXBsb2FkLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIGlkOiBcInVwbG9hZC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaW1hZ2VVcCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL290aGVycy9lbnYuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFVybCgncHVibGljL2ltYWdlcy9vdGhlcnMvZW52LnN2ZycpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYWx0OiBcImZpbGUgdXBsb2FkIGljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy51cGxvYWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ub2ZmbGluZV9tZXRob2QuaW5zdHJ1Y3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5pbnN0cnVjdGlvbnMpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5zdHJ1Y3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vZmZsaW5lX21ldGhvZC5pbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC1jZW50ZXIgbXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wYXltZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnByb2NlZWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc19uYW1lOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJwYXlzdGFja19tb2RhbFwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicGF5c3RhY2tfbW9kYWxcIixcbiAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3BheXN0YWNrKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9jb21wb25lbnRfbG9hZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicGF5c3RhY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiBcIndhbGxldF9yZWNoYXJnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlzdGFja19rZXk6IF92bS5zZXR0aW5ncy5wYXlzdGFja19wayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmduX2V4Y2hhbmdlX3JhdGU6IF92bS5zZXR0aW5ncy5uZ25fZXhjaGFuZ2VfcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogX3ZtLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogX3ZtLmZvcm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmbHV0dGVyX3dhdmVcIiwge1xuICAgICAgICByZWY6IFwiZmx1dHRlcl93YXZlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgIGNvZGU6IF92bS5jb2RlLFxuICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IFwid2FsbGV0X3JlY2hhcmdlXCIsXG4gICAgICAgICAgYW1vdW50OiBfdm0uZm9ybS50b3RhbCxcbiAgICAgICAgICB0eXBlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoM1wiLCBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1wbHVzXCIgfSldKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBtb2RhbF9jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlIG1vZGFsX2Nsb3NlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImRhdGEtYnMtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgbW9kYWxfY2xvc2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hpbW1lclwiLFxuICAgIHN0eWxlOiBbX3ZtLmhlaWdodCA/IF92bS5zdHlsZSA6IG51bGxdLFxuICAgIGF0dHJzOiB7XG4gICAgICBzcmM6IF92bS5nZXRVcmwoXCJwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJldmlldy5qcGdcIiksXG4gICAgICBhbHQ6IFwic2hpbW1lclwiLFxuICAgIH0sXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmF1dGhVc2VyXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZmlsZS1kZXRhaWxzIHBvc2l0aW9uLXJlbGF0aXZlXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtdGh1bWJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uYXV0aFVzZXIucHJvZmlsZV9pbWFnZSxcbiAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmF1dGhVc2VyLmZ1bGxfbmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdXRoVXNlci5mdWxsX25hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImVkaXQucHJvZmlsZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1wZW5jaWxcIiB9KV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF1dGhVc2VyLmVtYWlsKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3Muc2VsbGVyX3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJlX3NlbGxlciBiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibWlncmF0ZS5zZWxsZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5iZV9hX3NlbGxlcikgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktc3RvcmUtb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJkYXNoYm9hcmRcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJkYXNoYm9hcmRcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS12aWV3LWRhc2hib2FyZC1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLmxhbmcuZGFzaGJvYXJkKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJhZGRyZXNzZXNcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJhZGRyZXNzZXNcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1tYXAtbWFya2VyLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5hZGRyZXNzZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwibm90aWZpY2F0aW9uXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibm90aWZpY2F0aW9uXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktYmVsbC1vdXRsaW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm5vdGlmaWNhdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJvcmRlcl9oaXN0b3J5XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwib3JkZXIuaGlzdG9yeVwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktY2FydC1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5vcmRlcl9oaXN0b3J5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRvd25sb2FkX3VybFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwiZGlnaXRhbF9wcm9kdWN0X29yZGVyX2hpc3RvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwib3JkZXJzLmRpZ2l0YWwucHJvZHVjdFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktY2FydC1hcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5kaWdpdGFsX3Byb2R1Y3Rfb3JkZXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwiZ2lmdF92b3VjaGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImdpZnQudm91Y2hlclwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktd2FsbGV0LWdpZnRjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuZ2lmdF92b3VjaGVyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcImNoYW5nZV9wYXNzd29yZFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImNoYW5nZS5wYXNzd29yZFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktbG9jay1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5jaGFuZ2VfcGFzc3dvcmQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3Mud2FsbGV0X3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwid2FsbGV0X2hpc3RvcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwid2FsbGV0Lmhpc3RvcnlcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLXdhbGxldC1vdXRsaW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm15X3dhbGxldCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRvbnMuaW5jbHVkZXMoXCJyZXdhcmRcIilcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJyZXdhcmRfaGlzdG9yeVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZXdhcmQuaGlzdG9yeVwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktdmVjdG9yLXBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5teV9yZXdhcmRzKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZXR0aW5ncy5zZWxsZXJfc3lzdGVtID09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJmb2xsb3dlZF9zaG9wXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInNob3AuZm9sbG93ZWRcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWhvbWUtaGVhcnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuc2hvcCkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGUgcmV3YXJkXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJjb252ZXJ0X3Jld2FyZFwiLFxuICAgICAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImV4YW1wbGVNb2RhbExhYmVsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnJld2FyZF9wb2ludCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5IHJld2FyZF9tb2RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvbnZlcnRSZXdhcmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicmV3YXJkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5yZXdhcmRfcG9pbnQpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnZlcnRlZF9yZXdhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udmVydGVkX3Jld2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJld2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLmVudGVyX3BvaW50X3lvdV93YW50X2NvbnZlcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnZlcnRlZF9yZXdhcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3RhcnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmFpbGFibGUgUG9pbnRzIHRvIENvbnZlcnQgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5yZXdhcmRfcG9pbnRzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnRvdGFsX2Ftb3VudF95b3Vfd2lsbF9nZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJld2FyZF9jb252ZXJ0X3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibG9hZGluZ19idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NfbmFtZTogXCJidG4gYnRuLXByaW1hcnkgbXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlX2J0bjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb252ZXJ0ZWRfcmV3YXJkIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3RhbFJld2FyZC5yZXdhcmRzIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5jb3ZlcnRfcmV3YXJkcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgbW9kYWxfY2xvc2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLnR5cGUgPT0gXCJmbHV0dGVyX3dhdmVcIlxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNmd19tb2RhbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdykpXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IFwiZndfbW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiZndfbW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfZmx1dHRlcikpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5sYW5nLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGhvbmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGZsdXR0ZXJfd2F2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluaXRpYXRlUG9wdXAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5hbW91bnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgbW9kYWxfY2xvc2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImdvb2dsZVwiLCB7XG4gICAgYXR0cnM6IHsgaWQ6IFwiZ29vZ2xlLXBheS1idG5cIiwgb3B0aW9uczogX3ZtLm9wdGlvbnMgfSxcbiAgICBvbjoge1xuICAgICAgcGF5ZWQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS5wYXllZCgpXG4gICAgICB9LFxuICAgICAgY2FuY2VsOiBfdm0uY2FuY2VsbGVkLFxuICAgIH0sXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW1xuICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGtraWFwYXktYnV0dG9uXCIgfSwgW1xuICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBpZDogXCJwYXktYnV0dG9uXCIgfSxcbiAgICB9LFxuICAgIFtfdm0uX3YoXCJcXG4gIFwiICsgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5uYW1lLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW1haWwsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBob25lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGVsXCIsIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5waG9uZSwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGhvbmUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwYXlzdGFja1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiB7IG92ZXJsYXlfYnRuOiAhX3ZtLm5hbWUgfHwgIV92bS5lbWFpbCB8fCAhX3ZtLnBob25lIH0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBhbW91bnQ6IF92bS5yb3VuZChcbiAgICAgICAgICAgICAgICBfdm0uYW1vdW50ICogMTAwICogX3ZtLmFjdGl2ZUN1cnJlbmN5LmV4Y2hhbmdlX3JhdGVcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgZW1haWw6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgcGhvbmU6IF92bS5waG9uZSxcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgIHBheXN0YWNra2V5OiBfdm0ucGF5c3RhY2tfa2V5LFxuICAgICAgICAgICAgICBjYWxsYmFjazogX3ZtLmNhbGxiYWNrLFxuICAgICAgICAgICAgICByZWZlcmVuY2U6IF92bS5yZWZlcmVuY2UsXG4gICAgICAgICAgICAgIGNoYW5uZWxzOiBfdm0uY2hhbm5lbHMsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBfdm0uYWN0aXZlQ3VycmVuY3kuY29kZSxcbiAgICAgICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICAgICAgZW1iZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJ4IGJ4LW1vbmV5XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXkpICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcmljZUZvcm1hdChfdm0uYW1vdW50KSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJWdWVQYXlzdGFja1wiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlUGF5c3RhY2s9ZSgpOnQuVnVlUGF5c3RhY2s9ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gYT17fSxyLm09bj1bZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTt2YXIgYSxyLGksbyxjLHUscyxkLGwscCxmLG49KG89IShpPVtdKSxzPXU9Yz1udWxsLGY9XCJmdW5jdGlvblwiPT10eXBlb2YoYT17cHJvcHM6e2VtYmVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0scGF5c3RhY2trZXk6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOiEwfSxlbWFpbDp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LGZpcnN0bmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxsYXN0bmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxhbW91bnQ6e3R5cGU6TnVtYmVyLHJlcXVpcmVkOiEwfSxyZWZlcmVuY2U6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOiEwfSxjaGFubmVsczp7dHlwZTpBcnJheSxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuW1wiY2FyZFwiLFwiYmFua1wiXX19LGFjY2Vzc0NvZGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sY2FsbGJhY2s6e3R5cGU6RnVuY3Rpb24scmVxdWlyZWQ6ITAsZGVmYXVsdDpmdW5jdGlvbigpe319LGNsb3NlOnt0eXBlOkZ1bmN0aW9uLHJlcXVpcmVkOiEwLGRlZmF1bHQ6ZnVuY3Rpb24oKXt9fSxtZXRhZGF0YTp7dHlwZTpPYmplY3QsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybnt9fX0sY3VycmVuY3k6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJOR05cIn0scGxhbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxxdWFudGl0eTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzdWJhY2NvdW50Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHNwbGl0Ont0eXBlOk9iamVjdCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJue319fSxzcGxpdENvZGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sdHJhbnNhY3Rpb25DaGFyZ2U6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MH0sYmVhcmVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3NjcmlwdExvYWRlZDpudWxsfX0sY3JlYXRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5zY3JpcHRMb2FkZWQ9bmV3IFByb21pc2UoZnVuY3Rpb24odCl7ZS5sb2FkU2NyaXB0KGZ1bmN0aW9uKCl7dCgpfSl9KX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMuZW1iZWQmJnRoaXMucGF5V2l0aFBheXN0YWNrKCl9LG1ldGhvZHM6e2xvYWRTY3JpcHQ6ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtlLnNyYz1cImh0dHBzOi8vanMucGF5c3RhY2suY28vdjEvaW5saW5lLmpzXCIsZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGUpLGUucmVhZHlTdGF0ZT9lLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1wibG9hZGVkXCIhPT1lLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9PWUucmVhZHlTdGF0ZXx8KGUub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdCgpKX06ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt0KCl9fSxpc0R5bmFtaWNTcGxpdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNwbGl0LmNvbnN0cnVjdG9yPT09T2JqZWN0JiYwPE9iamVjdC5rZXlzKHRoaXMuc3BsaXQpLmxlbmd0aH0scGF5V2l0aFBheXN0YWNrOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnNjcmlwdExvYWRlZCYmdGhpcy5zY3JpcHRMb2FkZWQudGhlbihmdW5jdGlvbigpe3ZhciB0PXtrZXk6ZS5wYXlzdGFja2tleSxlbWFpbDplLmVtYWlsLGZpcnN0bmFtZTplLmZpcnN0bmFtZSxsYXN0bmFtZTplLmxhc3RuYW1lLGNoYW5uZWxzOmUuY2hhbm5lbHMsYW1vdW50OmUuYW1vdW50LGFjY2Vzc19jb2RlOmUuYWNjZXNzQ29kZSxyZWY6ZS5yZWZlcmVuY2UsY2FsbGJhY2s6ZnVuY3Rpb24odCl7ZS5jYWxsYmFjayh0KX0sb25DbG9zZTpmdW5jdGlvbigpe2UuY2xvc2UoKX0sbWV0YWRhdGE6ZS5tZXRhZGF0YSxjdXJyZW5jeTplLmN1cnJlbmN5LHBsYW46ZS5wbGFuLHF1YW50aXR5OmUucXVhbnRpdHksc3ViYWNjb3VudDplLmlzRHluYW1pY1NwbGl0KCk/XCJcIjplLnN1YmFjY291bnQsc3BsaXQ6ZS5pc0R5bmFtaWNTcGxpdCgpP2Uuc3BsaXQ6bnVsbCxzcGxpdF9jb2RlOmUuaXNEeW5hbWljU3BsaXQoKT9cIlwiOmUuc3BsaXRDb2RlLHRyYW5zYWN0aW9uX2NoYXJnZTplLmlzRHluYW1pY1NwbGl0KCk/MDplLnRyYW5zYWN0aW9uQ2hhcmdlLGJlYXJlcjplLmlzRHluYW1pY1NwbGl0KCk/XCJcIjplLmJlYXJlcn07ZS5lbWJlZCYmKHQuY29udGFpbmVyPVwicGF5c3RhY2tFbWJlZENvbnRhaW5lclwiKTt0PXdpbmRvdy5QYXlzdGFja1BvcC5zZXR1cCh0KTtlLmVtYmVkfHx0Lm9wZW5JZnJhbWUoKX0pfX19KT9hLm9wdGlvbnM6YSwocj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Ll9zZWxmLl9jfHx0LiRjcmVhdGVFbGVtZW50O3JldHVybiB0LmVtYmVkP2UoXCJkaXZcIix7YXR0cnM6e2lkOlwicGF5c3RhY2tFbWJlZENvbnRhaW5lclwifX0pOmUoXCJidXR0b25cIix7c3RhdGljQ2xhc3M6XCJwYXlCdXR0b25cIixvbjp7Y2xpY2s6dC5wYXlXaXRoUGF5c3RhY2t9fSxbdC5fdChcImRlZmF1bHRcIixbdC5fdihcIk1ha2UgUGF5bWVudFwiKV0pXSwyKX0pJiYoZi5yZW5kZXI9cixmLnN0YXRpY1JlbmRlckZucz1pLGYuX2NvbXBpbGVkPSEwKSxvJiYoZi5mdW5jdGlvbmFsPSEwKSx1JiYoZi5fc2NvcGVJZD1cImRhdGEtdi1cIit1KSxzP2YuX3NzclJlZ2lzdGVyPWw9ZnVuY3Rpb24odCl7KHQ9dHx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fCh0PV9fVlVFX1NTUl9DT05URVhUX18pLGMmJmMuY2FsbCh0aGlzLHQpLHQmJnQuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQocyl9OmMmJihsPWQ/ZnVuY3Rpb24oKXtjLmNhbGwodGhpcywoZi5mdW5jdGlvbmFsP3RoaXMucGFyZW50OnRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpfTpjKSxsJiYoZi5mdW5jdGlvbmFsPyhmLl9pbmplY3RTdHlsZXM9bCxwPWYucmVuZGVyLGYucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGwuY2FsbChlKSxwKHQsZSl9KTpmLmJlZm9yZUNyZWF0ZT0oZD1mLmJlZm9yZUNyZWF0ZSk/W10uY29uY2F0KGQsbCk6W2xdKSx7ZXhwb3J0czphLG9wdGlvbnM6Zn0pO2UuZGVmYXVsdD1uLmV4cG9ydHN9XSxyLmM9YSxyLmQ9ZnVuY3Rpb24odCxlLG4pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBhIGluIGUpci5kKG4sYSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGEpKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIi9kaXN0L1wiLHIoci5zPTApO2Z1bmN0aW9uIHIodCl7aWYoYVt0XSlyZXR1cm4gYVt0XS5leHBvcnRzO3ZhciBlPWFbdF09e2k6dCxsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3RdLmNhbGwoZS5leHBvcnRzLGUsZS5leHBvcnRzLHIpLGUubD0hMCxlLmV4cG9ydHN9dmFyIG4sYX0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==