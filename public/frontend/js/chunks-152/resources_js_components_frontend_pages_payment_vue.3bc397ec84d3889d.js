(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_payment_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
/* harmony import */ var _payment_partials_paypal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment_partials/paypal */ "./resources/js/components/frontend/payment_partials/paypal.vue");
/* harmony import */ var _payment_partials_offline_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment_partials/offline_method */ "./resources/js/components/frontend/payment_partials/offline_method.vue");
/* harmony import */ var _payment_partials_kkiapay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment_partials/kkiapay */ "./resources/js/components/frontend/payment_partials/kkiapay.vue");
/* harmony import */ var _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment_partials/paystack */ "./resources/js/components/frontend/payment_partials/paystack.vue");
/* harmony import */ var _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment_partials/flutter_wave */ "./resources/js/components/frontend/payment_partials/flutter_wave.vue");
/* harmony import */ var _partials_payment_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partials/payment_details */ "./resources/js/components/frontend/partials/payment_details.vue");
/* harmony import */ var _payment_partials_midtrans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../payment_partials/midtrans */ "./resources/js/components/frontend/payment_partials/midtrans.vue");
/* harmony import */ var _payment_partials_google_pay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payment_partials/google_pay */ "./resources/js/components/frontend/payment_partials/google_pay.vue");
/* harmony import */ var _payment_partials_apple_pay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../payment_partials/apple_pay */ "./resources/js/components/frontend/payment_partials/apple_pay.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "payment",
  data: function data() {
    return {
      offline_methods: [],
      indian_currency: {},
      check_cod: false,
      razor_laod: false,
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
      trx_id: '',
      offline_method: {
        id: '',
        name: '',
        image: '',
        instructions: ''
      },
      jazz_data: [],
      jazz_url: '',
      wallet_loading: false,
      code: typeof this.$route.params.code != 'undefined' ? this.$route.params.code : '',
      loading: false,
      offline_modal: false,
      showStripeModal: false,
      mid_trans_token: '',
      xof: ''
    };
  },
  components: {
    Flutter_wave: _payment_partials_flutter_wave__WEBPACK_IMPORTED_MODULE_5__["default"],
    google_pay: _payment_partials_google_pay__WEBPACK_IMPORTED_MODULE_8__["default"],
    apple_pay: _payment_partials_apple_pay__WEBPACK_IMPORTED_MODULE_9__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__["default"],
    paypal: _payment_partials_paypal__WEBPACK_IMPORTED_MODULE_1__["default"],
    offline_method: _payment_partials_offline_method__WEBPACK_IMPORTED_MODULE_2__["default"],
    paystack: _payment_partials_paystack__WEBPACK_IMPORTED_MODULE_4__["default"],
    payment_details: _partials_payment_details__WEBPACK_IMPORTED_MODULE_6__["default"],
    midtrans: _payment_partials_midtrans__WEBPACK_IMPORTED_MODULE_7__["default"],
    kkiapay: _payment_partials_kkiapay__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.takeOrders();
  },
  watch: {
    carts: function carts(newValue, oldValue) {
      this.$router.go(-1);
    }
  },
  computed: {
    carts: function carts() {
      return this.$store.getters.getCarts;
    },
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    }
  },
  methods: {
    takeOrders: function takeOrders() {
      var _this = this;

      var carts = this.carts;
      this.$Progress.start();
      var url = this.getUrl('user/payment-order?code=' + this.code);
      this.resetForm();
      axios.get(url).then(function (response) {
        _this.$store.commit('setShimmer', 0);

        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          _this.$store.commit('setLoginRedirection', '');

          _this.$Progress.finish();

          var orders = response.data.orders;
          _this.indian_currency = response.data.indian_currency;
          _this.xof = response.data.xof;
          _this.offline_methods = response.data.offline_methods;
          _this.jazz_data = response.data.jazz_data;
          _this.jazz_url = response.data.jazz_url;
          _this.mid_trans_token = response.data.mid_trans_token;

          if (response.data.check_cod) {
            _this.check_cod = response.data.check_cod;
          }

          if (orders) {
            for (var i = 0; i < orders.length; i++) {
              _this.payment_form.sub_total += parseFloat(orders[i].sub_total);
              _this.payment_form.discount_offer += parseFloat(orders[i].discount);
              _this.payment_form.shipping_tax += parseFloat(orders[i].shipping_cost);
              _this.payment_form.tax += parseFloat(orders[i].total_tax);

              if (_this.settings.coupon_system == 1) {
                _this.payment_form.coupon_discount += parseFloat(orders[i].coupon_discount); // alert(this.payment_form.coupon_discount);
              }

              _this.trx_id = orders[i].trx_id;
            }

            if (_this.settings.tax_type == 'after_tax' && _this.settings.vat_and_tax_type == 'order_base') {
              _this.payment_form.total = parseFloat(_this.payment_form.sub_total) + parseFloat(_this.payment_form.shipping_tax) - (parseFloat(_this.payment_form.discount_offer) + parseFloat(_this.payment_form.coupon_discount));
              _this.payment_form.total += parseFloat(_this.payment_form.tax);
            } else {
              _this.payment_form.total = parseFloat(_this.payment_form.sub_total) + parseFloat(_this.payment_form.tax) + parseFloat(_this.payment_form.shipping_tax) - (parseFloat(_this.payment_form.discount_offer) + parseFloat(_this.payment_form.coupon_discount));
            }
          }

          if (!_this.trx_id) {
            toastr.warning(_this.lang.something_went_wrong_try_chooing_address, _this.lang.Warning + ' !!');

            _this.$router.push({
              name: 'checkout'
            });
          }
        }
      });
    },
    integrateRazorPay: function integrateRazorPay() {
      this.razorPayRemove();

      if (this.settings.is_razorpay_activated == 1 && this.indian_currency) {
        var myScript = document.createElement('script');
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
        myScript.setAttribute('src', this.getUrl('public/frontend/js/razor_pay_checkout.js')); // Append script

        this.$refs.razor_pay.insertAdjacentElement('afterend', myScript);
      }
    },
    razorPayRemove: function razorPayRemove() {
      $('.razor_pay').removeClass('d-none');
      var razorKeys = document.querySelectorAll('.razorpay-payment-button');

      for (var i = 0; i < razorKeys.length; i++) {
        razorKeys[i].style.display = "none";
      }

      this.offline_method.name = '';
      this.offline_method.image = '';
      this.offline_method.instructions = '';
    },
    offlineCheck: function offlineCheck(offline) {
      this.razorPayRemove();
      this.offline_method.id = offline.id;
      this.offline_method.name = offline.name;
      this.offline_method.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    },
    payment: function payment(wallet) {
      var _this2 = this;

      var payment_type = '';

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

      var form = {
        id: this.offline_method.id,
        file: this.product_form.image,
        payment_type: payment_type,
        trx_id: this.trx_id
      };
      var url = this.getUrl('user/complete-order?code=' + this.code);

      if (payment_type == 'cash_on_delivery' || payment_type == 'pay_later' || this.offline_method.id || payment_type == 'wallet') {
        if (wallet != 'wallet') {
          this.loading = true;
        }

        axios.post(url, form, {
          transformRequest: [function (data, headers) {
            return objectToFormData(data);
          }]
        }).then(function (response) {
          _this2.wallet_loading = false;
          _this2.loading = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            $('#offline').modal('hide');
            var image_selector = document.getElementById('upload-image');

            if (image_selector) {
              image_selector.innerHTML = '';
            }

            if (_this2.code) {
              _this2.$router.push({
                name: 'get.invoice',
                params: {
                  orderCode: _this2.code
                }
              });
            } else {
              _this2.$router.push({
                name: 'invoice.list',
                params: {
                  trx_id: _this2.trx_id
                }
              });
            }
          }
        })["catch"](function (error) {
          _this2.loading = false;
        });
      } else if (payment_type == 'paystack') {
        return this.$refs.paystack.payStack();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
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
  name: "payment_details",
  props: ['sub_total', 'tax', 'discount_offer', 'shipping_tax', 'coupon_discount', 'total'],
  mounted: function mounted() {}
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "apple_pay",
  components: {},
  props: ['trx_id', 'code', 'amount'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var script = document.createElement("script");
    script.src = "https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js";
    document.body.appendChild(script);
    this.onApplePayButtonClicked();
  },
  methods: {
    onApplePayButtonClicked: function onApplePayButtonClicked() {
      // Define ApplePayPaymentRequest
      var request = {
        "countryCode": "US",
        "currencyCode": "USD",
        "merchantCapabilities": ["supports3DS"],
        "supportedNetworks": ["visa", "masterCard", "amex", "discover"],
        "total": {
          "label": "Demo (Card is not charged)",
          "type": "final",
          "amount": "1.99"
        }
      }; // Create ApplePaySession

      var session = new ApplePaySession(3, request);

      if (!session) {
        return confirm('Apple Session Cannot be Created');
      }

      session.onvalidatemerchant = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
          var merchantSession;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return validateMerchant();

                case 2:
                  merchantSession = _context.sent;
                  session.completeMerchantValidation(merchantSession);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      session.onpaymentmethodselected = function (event) {
        // Define ApplePayPaymentMethodUpdate based on the selected payment method.
        // No updates or errors are needed, pass an empty object.
        var update = {};
        session.completePaymentMethodSelection(update);
      };

      session.onshippingmethodselected = function (event) {
        // Define ApplePayShippingMethodUpdate based on the selected shipping method.
        // No updates or errors are needed, pass an empty object.
        var update = {};
        session.completeShippingMethodSelection(update);
      };

      session.onshippingcontactselected = function (event) {
        // Define ApplePayShippingContactUpdate based on the selected shipping contact.
        var update = {};
        session.completeShippingContactSelection(update);
      };

      session.onpaymentauthorized = function (event) {
        // Define ApplePayPaymentAuthorizationResult
        var result = {
          "status": ApplePaySession.STATUS_SUCCESS
        };
        session.completePayment(result);
      };

      session.oncouponcodechanged = function (event) {
        // Define ApplePayCouponCodeUpdate
        var newTotal = calculateNewTotal(event.couponCode);
        var newLineItems = calculateNewLineItems(event.couponCode);
        var newShippingMethods = calculateNewShippingMethods(event.couponCode);
        var errors = calculateErrors(event.couponCode);
        session.completeCouponCodeChange({
          newTotal: newTotal,
          newLineItems: newLineItems,
          newShippingMethods: newShippingMethods,
          errors: errors
        });
      };

      session.oncancel = function (event) {// Payment cancelled by WebKit
      };

      session.begin();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "offline_method",
  props: ['trx_id', 'code', 'amount', 'offline_method', 'loading'],
  methods: {
    submit: function submit() {
      this.$parent.payment();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "paypal",
  props: ['trx_id', 'code', 'amount', 'payment_type', 'type'],
  mounted: function mounted() {
    this.loadPaypal();
  },
  methods: {
    loadPaypal: function loadPaypal() {
      var script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=" + this.settings.paypal_key;
      script.setAttribute('data-namespace', 'paypal_sdk');
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function setLoaded() {
      var _this = this;

      window.paypal_sdk.Buttons({
        createOrder: function createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [{
              description: "Product Purchase",
              amount: {
                currency_code: "USD",
                value: _this.round(_this.amount / _this.activeCurrency.exchange_rate, 2)
              }
            }]
          });
        },
        onApprove: function () {
          var _onApprove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data, actions) {
            var order, url;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return actions.order.capture();

                  case 2:
                    order = _context.sent;
                    // this.data;
                    _this.loading = true;
                    url = '';

                    if (_this.type == 'wallet') {
                      url = _this.getUrl('user/recharge-wallet');
                    } else {
                      if (_this.authUser) url = _this.getUrl('user/complete-order?code=' + _this.code + '&trx_id=' + _this.trx_id);else url = _this.getUrl('user/complete-order?code=' + _this.code + '&guest=1' + '&trx_id=' + _this.trx_id);
                    }

                    data.amount = _this.payment_form.total;
                    data.payment_type = _this.payment_type;
                    data.order = order;

                    _this.axios.post(url, data).then(function (response) {
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
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onApprove(_x, _x2) {
            return _onApprove.apply(this, arguments);
          }

          return onApprove;
        }(),
        onError: function onError(err) {
          alert('Error');
        }
      }).render('#paypal-button-container');
    }
  }
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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/vue-google-pay/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-google-pay/dist/index.js ***!
  \***************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return r={},o.m=n=[function(t,e,n){t.exports=n(3)},function(t,e){function u(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){u(r,e,n,o,a,"next",t)}function a(t){u(r,e,n,o,a,"throw",t)}o(void 0)})}}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=function(a){"use strict";var u,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function i(t,e,n,r){var a,i,c,u,o=e&&e.prototype instanceof g?e:g,s=Object.create(o.prototype),l=new j(r||[]);return s._invoke=(a=t,i=n,c=l,u=h,function(t,e){if(u===d)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return L()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=O(n,c);if(r){if(r===m)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=y,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=d;var o=f(a,i,c);if("normal"===o.type){if(u=c.done?y:p,o.arg===m)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg)}}),s}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=i;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function g(){}function c(){}function l(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==t&&s.call(b,o)&&(v=b);var P=l.prototype=g.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(u){var e;this._invoke=function(n,r){function t(){return new Promise(function(t,e){!function e(t,n,r,o){var a=f(u[t],u,n);if("throw"!==a.type){var i=a.arg,c=i.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):Promise.resolve(c).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(a.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function O(t,e){var n=t.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,m;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=u,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:u,done:!0}}return c.prototype=P.constructor=l,l.constructor=c,l[r]=c.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(P),t},a.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[n]=function(){return this},a.AsyncIterator=C,a.async=function(t,e,n,r){var o=new C(i(t,e,n,r));return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(P),P[r]="Generator",P[o]=function(){return this},P.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=u),m}},a}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c),s={environment:"TEST",buttonColor:"white",baseRequest:{apiVersion:2,apiVersionMinor:0},allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"],allowedCardAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],merchantInfo:{merchantName:"Example Merchant",merchantId:"0123456789"},transactionInfo:{totalPriceStatus:"FINAL",totalPrice:"1.00",currencyCode:"USD",countryCode:"US"},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"example",gatewayMerchantId:"exampleGatewayMerchantId"}},baseCardPaymentMethod:{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}},cardPaymentMethod:null,paymentDataRequest:{baseRequest:{apiVersion:2,apiVersionMinor:0},allowedPaymentMethods:null,transactionInfo:{totalPriceStatus:"FINAL",totalPrice:"1.00",currencyCode:"USD",countryCode:"US"},merchantInfo:{merchantName:"Example Merchant",merchantId:"0123456789"}}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=function(t,e,n,r,o,a,i,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),a&&(s._scopeId="data-v-"+a),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}({props:{id:{type:String,required:!1,default:"google-pay-button"},options:{type:Object,required:!0,default:function(){return s}}},data:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s,{cardPaymentMethod:null,paymentsClient:null})},mounted:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.assignVars();case 2:t.sent&&e.injectGooglePayScript();case 4:case"end":return t.stop()}},t)}))()},methods:{assignVars:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Object.assign(e,e.options),t.next=3,e.$nextTick();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}))()},injectGooglePayScript:function(){var t=this;if(!this.paymentsClient){var e=document.createElement("script");e.setAttribute("src","https://pay.google.com/gp/p/js/pay.js"),e.setAttribute("async",!0),e.setAttribute("defer",!0),e.onload=function(){return t.onGooglePayLoaded()},document.head.appendChild(e)}},initPaymentsVars:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.cardPaymentMethod=Object.assign({},e.baseCardPaymentMethod,{tokenizationSpecification:e.tokenizationSpecification}),t.next=3,e.$nextTick();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}))()},getGoogleIsReadyToPayRequest:function(){return Object.assign({},this.baseRequest,{allowedPaymentMethods:[this.baseCardPaymentMethod]})},getGooglePaymentsClient:function(){return null===this.paymentsClient&&(this.paymentsClient=new google.payments.api.PaymentsClient({environment:this.environment})),this.paymentsClient},addGooglePayButton:function(){var t=this,e=this.paymentsClient.createButton({onClick:function(){return t.googlePayButtonClick()},buttonColor:this.buttonColor});document.getElementById(this.id).appendChild(e)},onGooglePayLoaded:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initPaymentsVars();case 2:t.sent&&e.getGooglePaymentsClient().isReadyToPay(e.getGoogleIsReadyToPayRequest()).then(function(t){t.result&&e.addGooglePayButton()}).catch(function(t){console.error(t)});case 4:case"end":return t.stop()}},t)}))()},getGooglePaymentDataRequest:function(){var t=Object.assign({},this.baseRequest);return t.allowedPaymentMethods=[this.cardPaymentMethod],t.transactionInfo=this.transactionInfo,t.merchantInfo={merchantId:this.merchantInfo.merchantId,merchantName:this.merchantInfo.merchantName},t},googlePayButtonClick:function(){var e=this,t=this.getGooglePaymentDataRequest();t.transactionInfo=this.transactionInfo,this.getGooglePaymentsClient().loadPaymentData(t).then(function(t){e.$emit("payed",t)}).catch(function(t){console.error(t),"CANCELED"===t.statusCode&&e.$emit("cancel")})}}},function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})},[],!1,null,null,null).exports;e.default=f}],o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=4);function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,r});

/***/ }),

/***/ "./resources/js/components/frontend/pages/payment.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/frontend/pages/payment.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=4ece8289& */ "./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& */ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&");
/* harmony import */ var _payment_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment_details.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1cf80fa4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/payment_details.vue"
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

/***/ "./resources/js/components/frontend/payment_partials/apple_pay.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/apple_pay.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple_pay.vue?vue&type=template&id=3a92b681&scoped=true& */ "./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true&");
/* harmony import */ var _apple_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple_pay.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apple_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3a92b681",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/apple_pay.vue"
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

/***/ "./resources/js/components/frontend/payment_partials/offline_method.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/offline_method.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offline_method.vue?vue&type=template&id=6cb47122&scoped=true& */ "./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true&");
/* harmony import */ var _offline_method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline_method.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _offline_method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6cb47122",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/offline_method.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paypal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paypal.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal.vue?vue&type=template&id=533c6aa5&scoped=true& */ "./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true&");
/* harmony import */ var _paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypal.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "533c6aa5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/payment_partials/paypal.vue"
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

/***/ "./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment_details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apple_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apple_pay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apple_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offline_method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./offline_method.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offline_method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paypal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_4ece8289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=template&id=4ece8289& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_details_vue_vue_type_template_id_1cf80fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&");


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

/***/ "./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apple_pay_vue_vue_type_template_id_3a92b681_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apple_pay.vue?vue&type=template&id=3a92b681&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true&");


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

/***/ "./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offline_method_vue_vue_type_template_id_6cb47122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./offline_method.vue?vue&type=template&id=6cb47122&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paypal_vue_vue_type_template_id_533c6aa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./paypal.vue?vue&type=template&id=533c6aa5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/payment.vue?vue&type=template&id=4ece8289& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sg-page-content" }, [
    _c("div", { staticClass: "sg-breadcrumb" }, [
      _c("div", { staticClass: "container" }, [
        _c("ol", { staticClass: "breadcrumb justify-content-center" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [
              _c("router-link", { attrs: { to: { name: "cart" } } }, [
                _vm._v(_vm._s(_vm.lang.view_cart)),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [
              _c("router-link", { attrs: { to: { name: "checkout" } } }, [
                _vm._v(_vm._s(_vm.lang.check_out)),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _vm._v(_vm._s(_vm.lang.confirm_order)),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "shopping-cart" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _vm.lengthCounter(_vm.settings) > 0
            ? _c("div", { staticClass: "col-lg-8 pl-lg-5" }, [
                _c("div", { staticClass: "sg-shipping" }, [
                  _c("div", { staticClass: "title" }, [
                    _c("h1", [_vm._v(_vm._s(_vm.lang.payment_method))]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-list" }, [
                    _c(
                      "ul",
                      { staticClass: "global-list grid-3" },
                      [
                        _vm.settings.is_paypal_activated == 1 &&
                        _vm.settings.paypal_key
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "paypal" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/paypal.svg"
                                      ),
                                      alt: "paypal",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_payPal) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_stripe_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "stripe" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/stripe.svg"
                                      ),
                                      alt: "stripe",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_stripe) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_sslcommerz_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                        alt: "sslcommerze",
                                        width: "90",
                                      },
                                    }),
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(_vm.lang.pay_with_sSLCOMMERZE) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_paytm_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "paytm" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/paytm.svg"
                                      ),
                                      alt: "paytm",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_paytm) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_razorpay_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "razor_pay" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/razorpay.svg"
                                      ),
                                      alt: "razorpay",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_razorpay) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_jazz_cash_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "jazzCash" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/jazzCash.svg"
                                      ),
                                      alt: "jazz_cash",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_jazzCash) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_mollie_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "mollie" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/mollie.svg"
                                      ),
                                      alt: "mollie",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_mollie) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_paystack_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "paystack" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/paystack.svg"
                                      ),
                                      alt: "paystack",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_with_paystack) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_flutterwave_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                        alt: "flutter_wave",
                                        width: "90",
                                      },
                                    }),
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(_vm.lang.pay_with_flutter) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_mercado_pago_activated == 1
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "mercadopago" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/mercado-pago.svg"
                                      ),
                                      alt: "mercadopago",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_mercadopago)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_mid_trans_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "mid_trans" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/midtrans.svg"
                                      ),
                                      alt: "mid_trans",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_mid_trans)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_telr_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "telr" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/telr.svg"
                                      ),
                                      alt: "telr",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_telr)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_google_pay_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "google_pay" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/google_pay.svg"
                                      ),
                                      alt: "google_pay",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_google_pay)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_bkash_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "bkash" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/bKash.svg"
                                      ),
                                      alt: "bkash",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_bkash)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_nagad_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "nagad" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/nagad.svg"
                                      ),
                                      alt: "nagad",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_nagad)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_amarpay_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "amarpay" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/amarpay.svg"
                                      ),
                                      alt: "aamarpay",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_amarpay)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_skrill_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "skrill" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/skrill.svg"
                                      ),
                                      alt: "skrill",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_skrill)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_iyzico_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "iyzico" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/iyzico.svg"
                                      ),
                                      alt: "iyzico",
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(_vm._s(_vm.lang.pay_with_iyzico)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.is_kkiapay_activated
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
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
                                _c("label", { attrs: { for: "kkiapay" } }, [
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
                                  _vm._v(_vm._s(_vm.lang.pay_with_kkiapay)),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.code &&
                        _vm.settings.pay_later_system == 1 &&
                        _vm.authUser
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
                                    },
                                  ],
                                  attrs: {
                                    type: "radio",
                                    id: "pay_later",
                                    value: "pay_later",
                                    name: "radio",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.payment_form.payment_type,
                                      "pay_later"
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function ($event) {
                                        return _vm.$set(
                                          _vm.payment_form,
                                          "payment_type",
                                          "pay_later"
                                        )
                                      },
                                      _vm.razorPayRemove,
                                    ],
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "pay_later" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/paylater.svg"
                                      ),
                                      alt: _vm.payment_form.payment_type,
                                      width: "90",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.pay_later) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.payment_form.total > 0 &&
                        !_vm.code &&
                        !_vm.check_cod
                          ? _c("li", [
                              _c("div", { staticClass: "input-checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payment_form.payment_type,
                                      expression: "payment_form.payment_type",
                                    },
                                  ],
                                  attrs: {
                                    type: "radio",
                                    id: "cash",
                                    value: "cash_on_delivery",
                                    name: "radio",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.payment_form.payment_type,
                                      "cash_on_delivery"
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function ($event) {
                                        return _vm.$set(
                                          _vm.payment_form,
                                          "payment_type",
                                          "cash_on_delivery"
                                        )
                                      },
                                      _vm.razorPayRemove,
                                    ],
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "cash" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: _vm.getUrl(
                                        "public/images/payment-method/cash.svg"
                                      ),
                                      alt: _vm.payment_form.payment_type,
                                    },
                                  }),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.lang.cash_on_delivery) +
                                      "\n                    "
                                  ),
                                ]),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.offline_methods, function (offline, index) {
                          return !_vm.code &&
                            _vm.addons.includes("offline_payment")
                            ? _c("li", { key: index }, [
                                _c("div", { staticClass: "input-checkbox" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.payment_form.payment_type,
                                        expression: "payment_form.payment_type",
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
                                        _vm.payment_form.payment_type,
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
                                          return _vm.offlineCheck(offline)
                                        },
                                      ],
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { attrs: { for: "offline" + offline.id } },
                                    [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: offline.image,
                                            expression: "offline.image",
                                          },
                                        ],
                                        staticClass: "img-fluid",
                                        attrs: { alt: offline.name },
                                      }),
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(offline.name) +
                                          "\n                    "
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e()
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.payment_form.total > 0 &&
                    _vm.authUser &&
                    _vm.authUser.balance >= _vm.payment_form.total &&
                    _vm.settings.wallet_system == 1
                      ? _c("div", { staticClass: "row text-center" }, [
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c("div", { staticClass: "separator mb-3" }, [
                              _c("span", { staticClass: "bg-white px-3" }, [
                                _c("span", { staticClass: "opacity-60" }, [
                                  _vm._v(_vm._s(_vm.lang.or)),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-12" },
                            [
                              _c("p", [
                                _vm._v(
                                  _vm._s(_vm.lang.your_wallet_balance) +
                                    " : " +
                                    _vm._s(
                                      _vm.priceFormat(_vm.authUser.balance)
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              !_vm.wallet_loading
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.payment("wallet")
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.lang.pay_with_wallet))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.wallet_loading
                                ? _c("loading_button", {
                                    attrs: { class_name: "btn btn-primary" },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
              ])
            : _vm.shimmer
            ? _c(
                "div",
                { staticClass: "col-lg-8" },
                _vm._l(3, function (payment, i) {
                  return _c("shimmer", {
                    key: i,
                    staticClass: "mb-3",
                    attrs: { height: 200 },
                  })
                }),
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 pl-lg-5" }, [
            _c("div", { staticClass: "order-summary" }, [
              _c("h6", [_vm._v(_vm._s(_vm.lang.price_details))]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "sg-card" },
                [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: _vm.authUser
                          ? _vm.getUrl("user/complete-order?code=" + _vm.code)
                          : _vm.getUrl(
                              "user/complete-order?code=" +
                                _vm.code +
                                "&guest=1"
                            ),
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
                        attrs: { type: "hidden", name: "trx_id" },
                        domProps: { value: _vm.trx_id },
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", name: "payment_type" },
                        domProps: { value: _vm.payment_form.payment_type },
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", name: "amount" },
                        domProps: { value: _vm.payment_form.total },
                      }),
                      _vm._v(" "),
                      _c("div", { ref: "razor_pay" }),
                      _vm._v(" "),
                      _c("payment_details", {
                        attrs: {
                          sub_total: _vm.payment_form.sub_total,
                          tax: _vm.payment_form.tax,
                          discount_offer: _vm.payment_form.discount_offer,
                          shipping_tax: _vm.payment_form.shipping_tax,
                          coupon_discount: _vm.payment_form.coupon_discount,
                          total: _vm.payment_form.total,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.loading &&
                  (_vm.payment_form.payment_type == "cash_on_delivery" ||
                    _vm.payment_form.payment_type == "pay_later")
                    ? _c("loading_button", {
                        attrs: { class_name: "btn btn-primary w-100" },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "stripe"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary w-100",
                          attrs: {
                            href: _vm.getUrl(
                              "stripe/redirect?trx_id=" +
                                _vm.carts[0].trx_id +
                                "&code=" +
                                _vm.$route.params.code
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.payment_form.payment_type
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary disable_btn",
                          attrs: { href: "javascript:void(0)" },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
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
                              "user/payment/paytmRedirect?trx_id=" +
                                _vm.carts[0].trx_id +
                                "&code=" +
                                _vm.$route.params.code +
                                "&payment_type=paytm"
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
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
                              "get/ssl-response?payment_type=ssl_commerze&code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "cash_on_delivery" ||
                  _vm.payment_form.payment_type == "pay_later"
                    ? _c(
                        "a",
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
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm.payment },
                        },
                        [_vm._v(_vm._s(_vm.lang.confirm))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.offline_methods.length > 0 &&
                  !_vm.code &&
                  _vm.addons.includes("offline_payment")
                    ? _c("offline_method", {
                        attrs: {
                          trx_id: _vm.trx_id,
                          code: _vm.code,
                          amount: _vm.payment_form.total,
                          offline_method: _vm.offline_method,
                          loading: _vm.loading,
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "mollie"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary w-100",
                          attrs: {
                            href: _vm.getUrl(
                              "mollie/payment?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [_vm._v(" " + _vm._s(_vm.lang.pay_now))]
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
                              "telr/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [_vm._v(" " + _vm._s(_vm.lang.pay_now))]
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
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.settings.is_flutterwave_activated == 1
                    ? _c("flutter_wave", {
                        ref: "flutter_wave",
                        attrs: {
                          trx_id: _vm.trx_id,
                          code: _vm.code,
                          amount: _vm.payment_form.total,
                          type: _vm.payment_form.payment_type,
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "mercadopago"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary w-100",
                          attrs: {
                            href: _vm.getUrl(
                              "mercadopago/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
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
                          amount: _vm.payment_form.total,
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "amarpay"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            href: _vm.getUrl(
                              "amarpay/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "bkash"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            href: _vm.getUrl(
                              "bkash/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "nagad"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            href: _vm.getUrl(
                              "nagad/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_form.payment_type == "skrill"
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            href: _vm.getUrl(
                              "skrill/redirect?code=" +
                                _vm.$route.params.code +
                                "&trx_id=" +
                                _vm.carts[0].trx_id
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n                " + _vm._s(_vm.lang.pay_now)
                          ),
                        ]
                      )
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
                          amount: _vm.payment_form.total,
                          payment_type: _vm.payment_form.payment_type,
                          xof: _vm.xof,
                          type: "order",
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.settings.is_paypal_activated == 1 &&
                  _vm.settings.paypal_key &&
                  _vm.payment_form.payment_type == "paypal"
                    ? _c("paypal", {
                        attrs: {
                          trx_id: _vm.trx_id,
                          code: _vm.code,
                          amount: _vm.payment_form.total,
                          payment_type: _vm.payment_form.payment_type,
                          type: "order",
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
                                _vm._s(_vm.lang.pay_now) + "\n                "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    2
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
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
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _vm.settings.is_paystack_activated == 1
                  ? _c("paystack", {
                      attrs: {
                        trx_id: _vm.trx_id,
                        paystack_key: _vm.settings.paystack_pk,
                        ngn_exchange_rate: _vm.settings.ngn_exchange_rate,
                        code: _vm.code,
                        amount: _vm.payment_form.total,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& ***!
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
  return _c("div", [
    _c("ul", { staticClass: "global-list" }, [
      _c("li", [
        _vm._v(_vm._s(_vm.lang.subtotal) + " "),
        _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.sub_total)))]),
      ]),
      _vm._v(" "),
      _vm.settings.tax_type == "before_tax" ||
      _vm.settings.vat_and_tax_type == "product_base"
        ? _c("li", [
            _vm._v(_vm._s(_vm.lang.tax) + " "),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.tax)))]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("li", [
        _vm._v(_vm._s(_vm.lang.discount)),
        _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.discount_offer)))]),
      ]),
      _vm._v(" "),
      _vm.settings.shipping_cost != "area_base" || _vm.$route.name != "cart"
        ? _c("li", [
            _vm._v(_vm._s(_vm.lang.shipping_cost)),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.shipping_tax)))]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.settings.coupon_system == 1
        ? _c("li", [
            _vm._v(_vm._s(_vm.lang.coupon_discount)),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.coupon_discount)))]),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _vm.settings.tax_type == "after_tax" &&
    _vm.settings.vat_and_tax_type == "order_base"
      ? _c("div", { staticClass: "order-total" }, [
          _c("p", { staticClass: "font_weight_400" }, [
            _vm._v(_vm._s(_vm.lang.total) + " "),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.total - _vm.tax)))]),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "font_weight_400" }, [
            _vm._v(_vm._s(_vm.lang.tax) + " "),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.tax)))]),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "grand_total_style" }, [
            _vm._v(_vm._s(_vm.lang.grand_total) + " "),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.total)))]),
          ]),
        ])
      : _c("div", { staticClass: "order-total" }, [
          _c("p", [
            _vm._v(_vm._s(_vm.lang.total) + " "),
            _c("span", [_vm._v(_vm._s(_vm.priceFormat(_vm.total)))]),
          ]),
        ]),
  ])
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/apple_pay.vue?vue&type=template&id=3a92b681&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "apple-pay-button" })
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/offline_method.vue?vue&type=template&id=6cb47122&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
                _vm._m(0),
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
                                attrs: { alt: "file" },
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
                            innerHTML: _vm._s(_vm.offline_method.instructions),
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
                          on: { click: _vm.submit },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/payment_partials/paypal.vue?vue&type=template&id=533c6aa5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    directives: [
      {
        name: "show",
        rawName: "v-show",
        value: _vm.payment_type == "paypal",
        expression: "payment_type == 'paypal'",
      },
    ],
    ref: "paypal",
    staticClass: "mx-auto w_40",
    attrs: { id: "paypal-button-container" },
  })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfcGF5bWVudF92dWUuM2JjMzk3ZWM4NGQzODg5ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2liL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EseUJBREE7QUFFQSx5QkFGQTtBQUdBLHNCQUhBO0FBSUEsdUJBSkE7QUFLQTtBQUNBLGtCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBLE9BTEE7QUFVQTtBQUNBLGtCQURBO0FBRUEsbUJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsT0FWQTtBQWdCQSxnQkFoQkE7QUFpQkE7QUFDQSxjQURBO0FBRUEsZ0JBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkEs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2p2QkEsZUFBZSxLQUFpRCxvQkFBb0IsQ0FBaUksQ0FBQyxtQkFBbUIsV0FBVyx3QkFBd0IsZUFBZSxlQUFlLDBCQUEwQixJQUFJLHdCQUF3QixTQUFTLGlCQUFpQix5Q0FBeUMsc0JBQXNCLGtCQUFrQix1QkFBdUIsaUNBQWlDLG1CQUFtQixjQUFjLHNCQUFzQixjQUFjLHVCQUF1QixVQUFVLElBQUksZUFBZSwwQkFBMEIseUNBQXlDLGtEQUFrRCxZQUFZLGlCQUFpQixrQkFBa0IsYUFBYSxpRkFBaUYsa0dBQWtHLG9CQUFvQiwwRkFBMEYsZ0RBQWdELHlEQUF5RCxVQUFVLHVCQUF1QixXQUFXLHdCQUF3QixFQUFFLGlCQUFpQixNQUFNLGFBQWEsTUFBTSxrQkFBa0IsVUFBVSwwQ0FBMEMsNEJBQTRCLHlCQUF5QiwyQkFBMkIsa0RBQWtELElBQUksZUFBZSxzQkFBc0IsbUNBQW1DLE9BQU8seUJBQXlCLHNEQUFzRCxJQUFJLGtCQUFrQixJQUFJLE9BQU8sK0JBQStCLFNBQVMsT0FBTyxxQkFBcUIsU0FBUywyRUFBMkUsY0FBYyxjQUFjLGNBQWMsU0FBUyxnQkFBZ0IsYUFBYSw2Q0FBNkMsNkJBQTZCLCtDQUErQyxjQUFjLDhDQUE4QyxpQkFBaUIsMEJBQTBCLEVBQUUsY0FBYyxNQUFNLDJCQUEyQixhQUFhLGlDQUFpQyxxQkFBcUIsa0JBQWtCLHFCQUFxQixzQkFBc0IsOEZBQThGLGdCQUFnQixhQUFhLGlCQUFpQixzQ0FBc0MsZUFBZSxhQUFhLHdCQUF3QixFQUFFLFNBQVMsVUFBVSxFQUFFLDRCQUE0QixnQkFBZ0IsMkJBQTJCLFVBQVUsdUNBQXVDLHFGQUFxRix1RkFBdUYsU0FBUyw0QkFBNEIsMEVBQTBFLFlBQVksMk5BQTJOLGNBQWMsT0FBTyxhQUFhLDhGQUE4RixjQUFjLHVCQUF1Qiw0Q0FBNEMsY0FBYyxrQkFBa0IsY0FBYyxtQ0FBbUMsY0FBYyxNQUFNLFdBQVcsc0JBQXNCLHNDQUFzQyxxQkFBcUIsd0JBQXdCLEtBQUssYUFBYSxnREFBZ0QsOEJBQThCLGlCQUFpQixPQUFPLFFBQVEsYUFBYSxPQUFPLGlCQUFpQiw0SEFBNEgsMENBQTBDLGtFQUFrRSxvQkFBb0IsMElBQTBJLHFCQUFxQixPQUFPLFdBQVcsMENBQTBDLFlBQVksNkNBQTZDLHdCQUF3Qiw0REFBNEQsK0JBQStCLEVBQUUsdUNBQXVDLFlBQVksdUJBQXVCLDJCQUEyQixvQkFBb0IsU0FBUyx5QkFBeUIsZ0NBQWdDLEtBQUssU0FBUyxFQUFFLGNBQWMsdUNBQXVDLG9CQUFvQix5QkFBeUIsZ0NBQWdDLG9PQUFvTyxpQkFBaUIsYUFBYSxvQ0FBb0MsZ0NBQWdDLGlCQUFpQiwrQkFBK0IscUJBQXFCLFdBQVcsZ0JBQWdCLHdFQUF3RSxtQ0FBbUMsS0FBSyxLQUFLLHdDQUF3QyxxQ0FBcUMsd0JBQXdCLG9EQUFvRCxTQUFTLGdEQUFnRCxpREFBaUQsV0FBVyxnREFBZ0QsS0FBSyxnRUFBZ0Usb0RBQW9ELHNCQUFzQixtQ0FBbUMsS0FBSyxLQUFLLHlCQUF5Qix3RUFBd0UsUUFBUSxPQUFPLHlFQUF5RSx3QkFBd0IseUZBQXlGLHdCQUF3QixnQ0FBZ0Msb0xBQW9MLG9CQUFvQixtQ0FBbUMsS0FBSyxLQUFLLHlCQUF5QiwwRUFBMEUsbUJBQW1CLG1DQUFtQyxLQUFLLEtBQUsseUJBQXlCLGlCQUFpQixtQkFBbUIscUJBQXFCLFlBQVksS0FBSyxVQUFVLHlDQUF5QywrQkFBK0Isc0JBQXNCLHFDQUFxQyx1Q0FBdUMsR0FBRyxZQUFZLElBQUkscUJBQXFCLFNBQVMsMkNBQTJDLGlCQUFpQixhQUFhLE9BQU8sdURBQXVELG9EQUFvRCwrQkFBK0IsZ0pBQWdKLHdEQUF3RCxrQkFBa0IsK0VBQStFLDRCQUE0QixtQ0FBbUMsZ0VBQWdFLHdCQUF3Qix3QkFBd0IsOEhBQThILDRDQUE0QyxhQUFhLCtCQUErQiw2Q0FBNkMsK0VBQStFLGVBQWUsMkRBQTJELGdCQUFnQixxQkFBcUIsaUNBQWlDLHNDQUFzQywyQkFBMkIsdURBQXVELHFCQUFxQixTQUFTLGdDQUFnQyx5Q0FBeUMsd0hBQXdILDBQQUEwUCxzQ0FBc0MsNENBQTRDLHVCQUF1QixrQkFBa0IsZUFBZSx1QkFBdUIseUJBQXlCLEtBQUsscUJBQXFCLG9DQUFvQyxPQUFPLHFCQUFxQixFQUFFLE9BQU8sSUFBSSxvREFBb0QsVUFBVSwyQ0FBMkMsV0FBVyxpQkFBaUIsbUJBQW1CLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHdDQUF3QyxjQUFjLG1JQUFtSSxnRUFBZ0UsRUFBRSxTQUFTLEdBQUcsSUFBSSwyQ0FBMkMsRUFBRSxvQkFBb0IsV0FBVyxpQ0FBaUMsNEJBQTRCLE1BQU0sdUJBQXVCLHNDQUFzQyx5Q0FBeUMsa0NBQWtDLElBQUksS0FBSyxVQUFVLHNCQUFzQixXQUFXLGlDQUFpQyw0QkFBNEIsTUFBTSx1QkFBdUIsZ0VBQWdFLHdDQUF3QyxrQ0FBa0MsSUFBSSxLQUFLLGtDQUFrQyxXQUFXLHlCQUF5Qix1Q0FBdUMsd0lBQXdJLDZCQUE2QiwrQkFBK0IsNkJBQTZCLFdBQVcsaUNBQWlDLDRCQUE0QixNQUFNLHVCQUF1QixrREFBa0QsMEJBQTBCLHNEQUFzRCx5QkFBeUIsd0NBQXdDLGtDQUFrQyxJQUFJLEtBQUsseUNBQXlDLHVCQUF1QixtQkFBbUIsbURBQW1ELEVBQUUsb0NBQW9DLGdHQUFnRyw2QkFBNkIsdUJBQXVCLCtCQUErQiwrQ0FBK0MsbUJBQW1CLGdDQUFnQyw4QkFBOEIsRUFBRSxnREFBZ0QsOEJBQThCLFdBQVcsaUNBQWlDLDRCQUE0QixNQUFNLHVCQUF1Qiw0Q0FBNEMsMkdBQTJHLGlDQUFpQyxvQkFBb0IsaUJBQWlCLEVBQUUsa0NBQWtDLElBQUksS0FBSyx3Q0FBd0Msc0JBQXNCLG1CQUFtQiwrR0FBK0csb0ZBQW9GLEdBQUcsaUNBQWlDLGdEQUFnRCwwR0FBMEcsbUJBQW1CLG9CQUFvQiw4REFBOEQsSUFBSSxZQUFZLDBCQUEwQixnQ0FBZ0MsT0FBTyxZQUFZLEVBQUUsK0JBQStCLFlBQVksNEJBQTRCLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELHVCQUF1QixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXAzWjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMyRjtBQUN2QztBQUNMOzs7QUFHOUQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN1RTtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENxRjtBQUN2QztBQUNMOzs7QUFHeEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN3RjtBQUN2QztBQUNMOzs7QUFHM0Q7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENzRjtBQUN2QztBQUNMOzs7QUFHekQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtRjtBQUN2QztBQUNMOzs7QUFHdEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENvRjtBQUN2QztBQUNMOzs7QUFHdkQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMwRjtBQUN2QztBQUNMOzs7QUFHN0Q7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENrRjtBQUN2QztBQUNMOzs7QUFHckQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENvRjtBQUN2QztBQUNMOzs7QUFHdkQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDOE0sQ0FBQyxpRUFBZSw0TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVosQ0FBQyxpRUFBZSxvTkFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTVCLENBQUMsaUVBQWUsNE1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQixDQUFDLGlFQUFlLDhNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsQ0FBQyxpRUFBZSxpTkFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXRCLENBQUMsaUVBQWUsK01BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QixDQUFDLGlFQUFlLDRNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbkIsQ0FBQyxpRUFBZSw2TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWQsQ0FBQyxpRUFBZSxtTkFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTVCLENBQUMsaUVBQWUsMk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQixDQUFDLGlFQUFlLDZNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FVQWxQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRCxnQkFBZ0IsOEJBQThCO0FBQzlDLGtCQUFrQiwwQkFBMEI7QUFDNUMsbUJBQW1CLGtEQUFrRDtBQUNyRTtBQUNBO0FBQ0EsY0FBYyxnQ0FBZ0M7QUFDOUM7QUFDQSxrQ0FBa0MsU0FBUyxNQUFNLGtCQUFrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQ0FBZ0M7QUFDOUM7QUFDQSxrQ0FBa0MsU0FBUyxNQUFNLHNCQUFzQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQsa0JBQWtCLDBCQUEwQjtBQUM1QyxvQkFBb0IsMkNBQTJDO0FBQy9EO0FBQ0EsMEJBQTBCLGlDQUFpQztBQUMzRCw0QkFBNEIsNEJBQTRCO0FBQ3hELDhCQUE4QixzQkFBc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RDtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLGlCQUFpQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsaUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsdUJBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMsU0FBUyxvQkFBb0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsbUJBQW1CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLGlCQUFpQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMsU0FBUyxtQkFBbUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLHVCQUF1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsc0JBQXNCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMsU0FBUyxvQkFBb0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLGVBQWU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLHFCQUFxQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMsU0FBUyxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLGtCQUFrQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsaUJBQWlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMsU0FBUyxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLGtCQUFrQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQztBQUNBLDhDQUE4QyxTQUFTLG9CQUFvQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0EsOENBQThDLFNBQVMsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRCw0Q0FBNEMsK0JBQStCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVMsK0JBQStCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEUsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFLHNDQUFzQywwQkFBMEI7QUFDaEUsd0NBQXdDLCtCQUErQjtBQUN2RSwyQ0FBMkMsOEJBQThCO0FBQ3pFLDZDQUE2QywyQkFBMkI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNEJBQTRCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUUsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQyxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RCx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakUsb0NBQW9DLGtCQUFrQjtBQUN0RCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakUsb0NBQW9DLG1CQUFtQjtBQUN2RCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQyxzQ0FBc0M7QUFDdkUsb0NBQW9DLHNDQUFzQztBQUMxRSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakUsb0NBQW9DLCtCQUErQjtBQUNuRSx1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUM7QUFDdEUsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRCxnQ0FBZ0Msb0JBQW9CO0FBQ3BELHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3BheW1lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9wYXltZW50X2RldGFpbHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9hcHBsZV9wYXkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZ29vZ2xlX3BheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMva2tpYXBheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvbWlkdHJhbnMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL29mZmxpbmVfbWV0aG9kLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlwYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXN0YWNrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtZ29vZ2xlLXBheS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3BheW1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3BheW1lbnRfZGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9hcHBsZV9wYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZmx1dHRlcl93YXZlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2dvb2dsZV9wYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMva2tpYXBheS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9taWR0cmFucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9vZmZsaW5lX21ldGhvZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlwYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvcGF5c3RhY2sudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3BheW1lbnQudnVlPzI5ZjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvcGF5bWVudF9kZXRhaWxzLnZ1ZT8yY2Y4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlPzI0NTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9hcHBsZV9wYXkudnVlPzQ2NjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9mbHV0dGVyX3dhdmUudnVlPzRiOTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9nb29nbGVfcGF5LnZ1ZT9hNjhjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMva2tpYXBheS52dWU/MzgzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL21pZHRyYW5zLnZ1ZT80ZDg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvb2ZmbGluZV9tZXRob2QudnVlPzMxMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlwYWwudnVlP2I0NTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlzdGFjay52dWU/MGIyMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9wYXltZW50LnZ1ZT8wZDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvYXBwbGVfcGF5LnZ1ZT80YzMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZmx1dHRlcl93YXZlLnZ1ZT8yMDlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZ29vZ2xlX3BheS52dWU/Y2Y4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2traWFwYXkudnVlP2JiY2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9taWR0cmFucy52dWU/YTk0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL29mZmxpbmVfbWV0aG9kLnZ1ZT8yNDA5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvcGF5cGFsLnZ1ZT8wZTAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvcGF5c3RhY2sudnVlPzc1YzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvcGF5bWVudC52dWU/NTIyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9wYXltZW50X2RldGFpbHMudnVlP2UxMDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWU/ODY1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2FwcGxlX3BheS52dWU/NWVmMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2ZsdXR0ZXJfd2F2ZS52dWU/OTk2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2dvb2dsZV9wYXkudnVlPzIwMzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9ra2lhcGF5LnZ1ZT81MzI5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvbWlkdHJhbnMudnVlPzM1ZDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9vZmZsaW5lX21ldGhvZC52dWU/MTVlNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXBhbC52dWU/ODViMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL3BheXN0YWNrLnZ1ZT8zNGY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtcGF5c3RhY2svZGlzdC9wYXlzdGFjay5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2ctcGFnZS1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2ctYnJlYWRjcnVtYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdjYXJ0JyB9XCI+e3sgbGFuZy52aWV3X2NhcnQgfX08L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ2NoZWNrb3V0JyB9XCI+e3sgbGFuZy5jaGVja19vdXQgfX08L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiPnt7IGxhbmcuY29uZmlybV9vcmRlciB9fTwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj48IS0tIC8uc2ctYnJlYWRjcnVtYiAtLT5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IHBsLWxnLTVcIiB2LWlmPVwibGVuZ3RoQ291bnRlcihzZXR0aW5ncyk+MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctc2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57eyBsYW5nLnBheW1lbnRfbWV0aG9kIH19PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdCBncmlkLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19wYXlwYWxfYWN0aXZhdGVkID09IDEgJiYgc2V0dGluZ3MucGF5cGFsX2tleVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGF5cGFsXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXlwYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3BheXBhbC5zdmcnKVwiIGFsdD1cInBheXBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9wYXlQYWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfc3RyaXBlX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdHJpcGVcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cInN0cmlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdHJpcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3N0cmlwZS5zdmcnKVwiIGFsdD1cInN0cmlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9zdHJpcGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfc3NsY29tbWVyel9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3NsX2NvbW1lcnplXCIgdmFsdWU9XCJzc2xfY29tbWVyemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzc2xfY29tbWVyemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3NzbGNvbW1lcnplLnN2ZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzc2xjb21tZXJ6ZVwiIHdpZHRoPVwiOTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9zU0xDT01NRVJaRSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19wYXl0bV9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGF5dG1cIiB2YWx1ZT1cInBheXRtXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBheXRtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9wYXl0bS5zdmcnKVwiIGFsdD1cInBheXRtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX3BheXRtIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX3Jhem9ycGF5X2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYXpvcl9wYXlcIiB2YWx1ZT1cInJhem9yX3BheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBAY2hhbmdlPVwiaW50ZWdyYXRlUmF6b3JQYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJhem9yX3BheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcmF6b3JwYXkuc3ZnJylcIiBhbHQ9XCJyYXpvcnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9yYXpvcnBheSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfamF6el9jYXNoX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJqYXp6Q2FzaFwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiamF6el9jYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImphenpDYXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9qYXp6Q2FzaC5zdmcnKVwiIGFsdD1cImphenpfY2FzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfd2l0aF9qYXp6Q2FzaCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19tb2xsaWVfYWN0aXZhdGVkID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1vbGxpZVwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwibW9sbGllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vbGxpZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvbW9sbGllLnN2ZycpXCIgYWx0PVwibW9sbGllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX21vbGxpZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19wYXlzdGFja19hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGF5c3RhY2tcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cInBheXN0YWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBheXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9wYXlzdGFjay5zdmcnKVwiIGFsdD1cInBheXN0YWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX3BheXN0YWNrIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2ZsdXR0ZXJ3YXZlX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJmbHV0dGVyX3dhdmVcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cImZsdXR0ZXJfd2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmbHV0dGVyX3dhdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2Z3LnN2ZycpXCIgYWx0PVwiZmx1dHRlcl93YXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV93aXRoX2ZsdXR0ZXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfbWVyY2Fkb19wYWdvX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZXJjYWRvcGFnb1wiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwibWVyY2Fkb3BhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVyY2Fkb3BhZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21lcmNhZG8tcGFnby5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibWVyY2Fkb3BhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIiBjbGFzcz1cImltZy1mbHVpZFwiPnt7IGxhbmcucGF5X3dpdGhfbWVyY2Fkb3BhZ28gfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19taWRfdHJhbnNfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtaWRfdHJhbnNcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cIm1pZF90cmFuc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaWRfdHJhbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21pZHRyYW5zLnN2ZycpXCIgYWx0PVwibWlkX3RyYW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX21pZF90cmFucyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfdGVscl9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRlbHJcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cInRlbHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVsclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvdGVsci5zdmcnKVwiIGFsdD1cInRlbHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIiBjbGFzcz1cImltZy1mbHVpZFwiPnt7IGxhbmcucGF5X3dpdGhfdGVsciB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfZ29vZ2xlX3BheV9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImdvb2dsZV9wYXlcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cImdvb2dsZV9wYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ29vZ2xlX3BheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZ29vZ2xlX3BheS5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlX3BheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9nb29nbGVfcGF5IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19ia2FzaF9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImJrYXNoXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJia2FzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJia2FzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvYkthc2guc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJrYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX2JrYXNoIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19uYWdhZF9hY3RpdmF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm5hZ2FkXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJuYWdhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYWdhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvbmFnYWQuc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm5hZ2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX25hZ2FkIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19hbWFycGF5X2FjdGl2YXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiYW1hcnBheVwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiIHZhbHVlPVwiYW1hcnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhbWFycGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9hbWFycGF5LnN2ZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhYW1hcnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9hbWFycGF5IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19za3JpbGxfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJza3JpbGxcIiBAY2hhbmdlPVwicmF6b3JQYXlSZW1vdmVcIiB2YWx1ZT1cInNrcmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJza3JpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3NrcmlsbC5zdmcnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2tyaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCIgY2xhc3M9XCJpbWctZmx1aWRcIj57eyBsYW5nLnBheV93aXRoX3NrcmlsbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuaXNfaXl6aWNvX2FjdGl2YXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaXl6aWNvXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJpeXppY29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIgbmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXl6aWNvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9peXppY28uc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIml5emljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+e3sgbGFuZy5wYXlfd2l0aF9peXppY28gfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2traWFwYXlfYWN0aXZhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJra2lhcGF5XCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCIgdmFsdWU9XCJra2lhcGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImtraWFwYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2traWFwYXkuc3ZnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImtraWFwYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIiBjbGFzcz1cImltZy1mbHVpZFwiPnt7IGxhbmcucGF5X3dpdGhfa2tpYXBheSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cIiFjb2RlICYmIHNldHRpbmdzLnBheV9sYXRlcl9zeXN0ZW0gPT0gMSAmJiBhdXRoVXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGF5X2xhdGVyXCIgQGNoYW5nZT1cInJhem9yUGF5UmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInBheV9sYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXlfbGF0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3BheWxhdGVyLnN2ZycpXCIgOmFsdD1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X2xhdGVyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInBheW1lbnRfZm9ybS50b3RhbCA+IDAgJiYgIWNvZGUgJiYgIWNoZWNrX2NvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiY2FzaFwiIEBjaGFuZ2U9XCJyYXpvclBheVJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjYXNoX29uX2RlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2Nhc2guc3ZnJylcIiA6YWx0PVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5jYXNoX29uX2RlbGl2ZXJ5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cIiFjb2RlICYmIGFkZG9ucy5pbmNsdWRlcygnb2ZmbGluZV9wYXltZW50JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIob2ZmbGluZSxpbmRleCkgaW4gb2ZmbGluZV9tZXRob2RzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgOmlkPVwiJ29mZmxpbmUnK29mZmxpbmUuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvZmZsaW5lQ2hlY2sob2ZmbGluZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib2ZmbGluZV9tZXRob2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb1wiIHYtbW9kZWw9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidvZmZsaW5lJytvZmZsaW5lLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1sYXp5PVwib2ZmbGluZS5pbWFnZVwiIDphbHQ9XCJvZmZsaW5lLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9mZmxpbmUubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS50b3RhbCA+IDAgJiYgYXV0aFVzZXIgJiYgYXV0aFVzZXIuYmFsYW5jZSA+PSBwYXltZW50X2Zvcm0udG90YWwgJiYgc2V0dGluZ3Mud2FsbGV0X3N5c3RlbSA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZy13aGl0ZSBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wYWNpdHktNjBcIj57eyBsYW5nLm9yIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgbGFuZy55b3VyX3dhbGxldF9iYWxhbmNlIH19IDoge3sgcHJpY2VGb3JtYXQoYXV0aFVzZXIuYmFsYW5jZSkgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIEBjbGljaz1cInBheW1lbnQoJ3dhbGxldCcpXCIgdi1pZj1cIiF3YWxsZXRfbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyBsYW5nLnBheV93aXRoX3dhbGxldCB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8bG9hZGluZ19idXR0b24gdi1pZj1cIndhbGxldF9sb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5J1wiPjwvbG9hZGluZ19idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIiB2LWVsc2UtaWY9XCJzaGltbWVyXCI+XHJcbiAgICAgICAgICAgIDxzaGltbWVyIGNsYXNzPVwibWItM1wiIDpoZWlnaHQ9XCIyMDBcIiB2LWZvcj1cIihwYXltZW50LGkpIGluIDNcIiA6a2V5PVwiaVwiPjwvc2hpbW1lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IHBsLWxnLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLXN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICA8aDY+e3sgbGFuZy5wcmljZV9kZXRhaWxzIH19PC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgOmFjdGlvbj1cImF1dGhVc2VyID8gZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyP2NvZGU9Jytjb2RlKSA6Z2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyP2NvZGU9Jytjb2RlKycmZ3Vlc3Q9MScpXCJcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIDp2YWx1ZT1cInRva2VuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInRyeF9pZFwiIDp2YWx1ZT1cInRyeF9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwYXltZW50X3R5cGVcIiA6dmFsdWU9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFtb3VudFwiIDp2YWx1ZT1cInBheW1lbnRfZm9ybS50b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInJhem9yX3BheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cGF5bWVudF9kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICA6c3ViX3RvdGFsPVwicGF5bWVudF9mb3JtLnN1Yl90b3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6dGF4PVwicGF5bWVudF9mb3JtLnRheFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzY291bnRfb2ZmZXI9XCJwYXltZW50X2Zvcm0uZGlzY291bnRfb2ZmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnNoaXBwaW5nX3RheD1cInBheW1lbnRfZm9ybS5zaGlwcGluZ190YXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOmNvdXBvbl9kaXNjb3VudD1cInBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnRvdGFsPVwicGF5bWVudF9mb3JtLnRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgPjwvcGF5bWVudF9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsb2FkaW5nX2J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkaW5nICYmIChwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdjYXNoX29uX2RlbGl2ZXJ5JyB8fCBwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdwYXlfbGF0ZXInKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5IHctMTAwJ1wiPjwvbG9hZGluZ19idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ3N0cmlwZS9yZWRpcmVjdD90cnhfaWQ9JyArIGNhcnRzWzBdLnRyeF9pZCArICcmY29kZT0nICsgJHJvdXRlLnBhcmFtcy5jb2RlKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdzdHJpcGUnIFwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV9ub3cgfX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRpc2FibGVfYnRuXCJcclxuICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhcGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV9ub3cgfX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ3VzZXIvcGF5bWVudC9wYXl0bVJlZGlyZWN0P3RyeF9pZD0nICsgY2FydHNbMF0udHJ4X2lkICsgJyZjb2RlPScgKyAkcm91dGUucGFyYW1zLmNvZGUgKyAnJnBheW1lbnRfdHlwZT1wYXl0bScpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3BheXRtJyBcIj5cclxuICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdnZXQvc3NsLXJlc3BvbnNlP3BheW1lbnRfdHlwZT1zc2xfY29tbWVyemUmY29kZT0nICsgJHJvdXRlLnBhcmFtcy5jb2RlICsgJyZ0cnhfaWQ9JyArIGNhcnRzWzBdLnRyeF9pZClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnc3NsX2NvbW1lcnplJyBcIj5cclxuICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBAY2xpY2s9XCJwYXltZW50XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1zaG93PVwiIWxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ2Nhc2hfb25fZGVsaXZlcnknIHx8IHBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3BheV9sYXRlcidcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmcuY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB9fTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8b2ZmbGluZV9tZXRob2Qgdi1pZj1cIm9mZmxpbmVfbWV0aG9kcy5sZW5ndGggPiAwICYmICFjb2RlICYmIGFkZG9ucy5pbmNsdWRlcygnb2ZmbGluZV9wYXltZW50JylcIiA6dHJ4X2lkPVwidHJ4X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29kZT1cImNvZGVcIiA6YW1vdW50PVwicGF5bWVudF9mb3JtLnRvdGFsXCIgOm9mZmxpbmVfbWV0aG9kPVwib2ZmbGluZV9tZXRob2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiPjwvb2ZmbGluZV9tZXRob2Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ21vbGxpZS9wYXltZW50P2NvZGU9Jyskcm91dGUucGFyYW1zLmNvZGUrJyZ0cnhfaWQ9JytjYXJ0c1swXS50cnhfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ21vbGxpZSdcIj4ge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCd0ZWxyL3JlZGlyZWN0P2NvZGU9Jyskcm91dGUucGFyYW1zLmNvZGUrJyZ0cnhfaWQ9JytjYXJ0c1swXS50cnhfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3RlbHInXCI+IHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjcGF5c3RhY2tfbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3BheXN0YWNrJyBcIj5cclxuICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmbHV0dGVyX3dhdmUgdi1pZj1cInNldHRpbmdzLmlzX2ZsdXR0ZXJ3YXZlX2FjdGl2YXRlZCA9PSAxXCIgOnRyeF9pZD1cInRyeF9pZFwiIDpjb2RlPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbW91bnQ9XCJwYXltZW50X2Zvcm0udG90YWxcIiA6dHlwZT1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiByZWY9XCJmbHV0dGVyX3dhdmVcIj48L2ZsdXR0ZXJfd2F2ZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgnbWVyY2Fkb3BhZ28vcmVkaXJlY3Q/Y29kZT0nKyRyb3V0ZS5wYXJhbXMuY29kZSsnJnRyeF9pZD0nK2NhcnRzWzBdLnRyeF9pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ21lcmNhZG9wYWdvJ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV9ub3cgfX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGdvb2dsZV9wYXkgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ2dvb2dsZV9wYXknXCIgOnRyeF9pZD1cInRyeF9pZFwiIDpjb2RlPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwicGF5bWVudF9mb3JtLnRvdGFsXCI+PC9nb29nbGVfcGF5PlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdhbWFycGF5L3JlZGlyZWN0P2NvZGU9Jyskcm91dGUucGFyYW1zLmNvZGUrJyZ0cnhfaWQ9JytjYXJ0c1swXS50cnhfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdhbWFycGF5J1wiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBsYW5nLnBheV9ub3cgfX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ2JrYXNoL3JlZGlyZWN0P2NvZGU9Jyskcm91dGUucGFyYW1zLmNvZGUrJyZ0cnhfaWQ9JytjYXJ0c1swXS50cnhfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdia2FzaCdcIj5cclxuICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCduYWdhZC9yZWRpcmVjdD9jb2RlPScrJHJvdXRlLnBhcmFtcy5jb2RlKycmdHJ4X2lkPScrY2FydHNbMF0udHJ4X2lkKVwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnbmFnYWQnXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdza3JpbGwvcmVkaXJlY3Q/Y29kZT0nKyRyb3V0ZS5wYXJhbXMuY29kZSsnJnRyeF9pZD0nK2NhcnRzWzBdLnRyeF9pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgdi1pZj1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gJ3NrcmlsbCdcIj5cclxuICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXlfbm93IH19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGtraWFwYXkgdi1pZj1cInNldHRpbmdzLmlzX2traWFwYXlfYWN0aXZhdGVkICYmIHNldHRpbmdzLmtraWFwYXlfcHVibGljX2tleSAmJiBwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09ICdra2lhcGF5JyAmJiB4b2ZcIiA6dHJ4X2lkPVwidHJ4X2lkXCIgOmNvZGU9XCJjb2RlXCIgOmFtb3VudD1cInBheW1lbnRfZm9ybS50b3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6cGF5bWVudF90eXBlPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiIDp4b2Y9XCJ4b2ZcIiA6dHlwZT1cIidvcmRlcidcIj48L2traWFwYXk+XHJcblxyXG4gICAgICAgICAgICAgICAgPHBheXBhbCB2LWlmPVwic2V0dGluZ3MuaXNfcGF5cGFsX2FjdGl2YXRlZCA9PSAxICYmIHNldHRpbmdzLnBheXBhbF9rZXkgJiYgcGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAncGF5cGFsJ1wiIDp0cnhfaWQ9XCJ0cnhfaWRcIiA6Y29kZT1cImNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6YW1vdW50PVwicGF5bWVudF9mb3JtLnRvdGFsXCIgOnBheW1lbnRfdHlwZT1cInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIiA6dHlwZT1cIidvcmRlcidcIj48L3BheXBhbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwianNmb3JtXCIgOmFjdGlvbj1cImphenpfdXJsXCIgbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWZvcj1cIih2YWx1ZSxuYW1lKSBpbiBqYXp6X2RhdGFcIiA6a2V5PVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cIiFsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSAnamF6el9jYXNoJ1wiPnt7IGxhbmcucGF5X25vdyB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLnJvdyAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+PCEtLSAvLnNob3BwaW5nLWNhcnQgLS0+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cInBheXN0YWNrX21vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cInBheXN0YWNrX21vZGFsXCJcclxuICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyBsYW5nLnBheV93aXRoX3BheXN0YWNrIH19PC9oNT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBtb2RhbF9jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwYXlzdGFjayB2LWlmPVwic2V0dGluZ3MuaXNfcGF5c3RhY2tfYWN0aXZhdGVkID09IDFcIiA6dHJ4X2lkPVwidHJ4X2lkXCIgOnBheXN0YWNrX2tleT1cInNldHRpbmdzLnBheXN0YWNrX3BrXCJcclxuICAgICAgICAgICAgICAgICAgICA6bmduX2V4Y2hhbmdlX3JhdGU9XCJzZXR0aW5ncy5uZ25fZXhjaGFuZ2VfcmF0ZVwiIDpjb2RlPVwiY29kZVwiIDphbW91bnQ9XCJwYXltZW50X2Zvcm0udG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp0eXBlPVwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiPjwvcGF5c3RhY2s+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgc2hpbW1lciBmcm9tIFwiLi4vcGFydGlhbHMvc2hpbW1lclwiO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gXCIuLi9wYXltZW50X3BhcnRpYWxzL3BheXBhbFwiO1xyXG5pbXBvcnQgb2ZmbGluZV9tZXRob2QgZnJvbSBcIi4uL3BheW1lbnRfcGFydGlhbHMvb2ZmbGluZV9tZXRob2RcIjtcclxuaW1wb3J0IGtraWFwYXkgZnJvbSBcIi4uL3BheW1lbnRfcGFydGlhbHMva2tpYXBheVwiO1xyXG5pbXBvcnQgcGF5c3RhY2sgZnJvbSBcIi4uL3BheW1lbnRfcGFydGlhbHMvcGF5c3RhY2tcIjtcclxuaW1wb3J0IEZsdXR0ZXJfd2F2ZSBmcm9tIFwiLi4vcGF5bWVudF9wYXJ0aWFscy9mbHV0dGVyX3dhdmVcIjtcclxuaW1wb3J0IHBheW1lbnRfZGV0YWlscyBmcm9tIFwiLi4vcGFydGlhbHMvcGF5bWVudF9kZXRhaWxzXCI7XHJcbmltcG9ydCBtaWR0cmFucyBmcm9tIFwiLi4vcGF5bWVudF9wYXJ0aWFscy9taWR0cmFuc1wiO1xyXG5pbXBvcnQgZ29vZ2xlX3BheSBmcm9tIFwiLi4vcGF5bWVudF9wYXJ0aWFscy9nb29nbGVfcGF5XCI7XHJcbmltcG9ydCBhcHBsZV9wYXkgZnJvbSBcIi4uL3BheW1lbnRfcGFydGlhbHMvYXBwbGVfcGF5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwYXltZW50XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9mZmxpbmVfbWV0aG9kczogW10sXHJcbiAgICAgIGluZGlhbl9jdXJyZW5jeToge30sXHJcbiAgICAgIGNoZWNrX2NvZDogZmFsc2UsXHJcbiAgICAgIHJhem9yX2xhb2Q6IGZhbHNlLFxyXG4gICAgICBzc2w6IHtcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICByYXpvcl9mb3JtOiB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICBwaG9uZTogbnVsbCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgdHJ4X2lkOiAnJyxcclxuICAgICAgb2ZmbGluZV9tZXRob2Q6IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIGluc3RydWN0aW9uczogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGphenpfZGF0YTogW10sXHJcbiAgICAgIGphenpfdXJsOiAnJyxcclxuICAgICAgd2FsbGV0X2xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBjb2RlOiB0eXBlb2YgdGhpcy4kcm91dGUucGFyYW1zLmNvZGUgIT0gJ3VuZGVmaW5lZCcgPyB0aGlzLiRyb3V0ZS5wYXJhbXMuY29kZSA6ICcnLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgb2ZmbGluZV9tb2RhbDogZmFsc2UsXHJcbiAgICAgIHNob3dTdHJpcGVNb2RhbDogZmFsc2UsXHJcbiAgICAgIG1pZF90cmFuc190b2tlbjogJycsXHJcbiAgICAgIHhvZjogJycsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBGbHV0dGVyX3dhdmUsIGdvb2dsZV9wYXksYXBwbGVfcGF5LFxyXG4gICAgc2hpbW1lciwgcGF5cGFsLCBvZmZsaW5lX21ldGhvZCwgcGF5c3RhY2ssIHBheW1lbnRfZGV0YWlscywgbWlkdHJhbnMsa2tpYXBheVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMudGFrZU9yZGVycygpO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGNhcnRzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgY2FydHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhcnRzO1xyXG4gICAgfSxcclxuICAgIHNoaW1tZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5tb2R1bGUuc2hpbW1lclxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdGFrZU9yZGVycygpIHtcclxuICAgICAgbGV0IGNhcnRzID0gdGhpcy5jYXJ0cztcclxuICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3BheW1lbnQtb3JkZXI/Y29kZT0nICsgdGhpcy5jb2RlKTtcclxuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFNoaW1tZXInLCAwKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmFpbCgpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRMb2dpblJlZGlyZWN0aW9uJywgJycpO1xyXG4gICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgICBsZXQgb3JkZXJzID0gcmVzcG9uc2UuZGF0YS5vcmRlcnM7XHJcbiAgICAgICAgICB0aGlzLmluZGlhbl9jdXJyZW5jeSA9IHJlc3BvbnNlLmRhdGEuaW5kaWFuX2N1cnJlbmN5O1xyXG4gICAgICAgICAgdGhpcy54b2YgPSByZXNwb25zZS5kYXRhLnhvZjtcclxuICAgICAgICAgIHRoaXMub2ZmbGluZV9tZXRob2RzID0gcmVzcG9uc2UuZGF0YS5vZmZsaW5lX21ldGhvZHM7XHJcbiAgICAgICAgICB0aGlzLmphenpfZGF0YSA9IHJlc3BvbnNlLmRhdGEuamF6el9kYXRhO1xyXG4gICAgICAgICAgdGhpcy5qYXp6X3VybCA9IHJlc3BvbnNlLmRhdGEuamF6el91cmw7XHJcbiAgICAgICAgICB0aGlzLm1pZF90cmFuc190b2tlbiA9IHJlc3BvbnNlLmRhdGEubWlkX3RyYW5zX3Rva2VuO1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNoZWNrX2NvZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrX2NvZCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tfY29kO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChvcmRlcnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5zdWJfdG90YWwgKz0gcGFyc2VGbG9hdChvcmRlcnNbaV0uc3ViX3RvdGFsKTtcclxuICAgICAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlciArPSBwYXJzZUZsb2F0KG9yZGVyc1tpXS5kaXNjb3VudCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4ICs9IHBhcnNlRmxvYXQob3JkZXJzW2ldLnNoaXBwaW5nX2Nvc3QpO1xyXG4gICAgICAgICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRheCArPSBwYXJzZUZsb2F0KG9yZGVyc1tpXS50b3RhbF90YXgpO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvdXBvbl9zeXN0ZW0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0uY291cG9uX2Rpc2NvdW50ICs9IHBhcnNlRmxvYXQob3JkZXJzW2ldLmNvdXBvbl9kaXNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCh0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy50cnhfaWQgPSBvcmRlcnNbaV0udHJ4X2lkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50YXhfdHlwZSA9PSAnYWZ0ZXJfdGF4JyAmJiB0aGlzLnNldHRpbmdzLnZhdF9hbmRfdGF4X3R5cGUgPT0gJ29yZGVyX2Jhc2UnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0udG90YWwgPSAocGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5zdWJfdG90YWwpICsgcGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5zaGlwcGluZ190YXgpKSAtIChwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLmRpc2NvdW50X29mZmVyKSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uY291cG9uX2Rpc2NvdW50KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0udG90YWwgKz0gcGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS50YXgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRvdGFsID0gKHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc3ViX3RvdGFsKSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0udGF4KSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4KSkgLSAocGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlcikgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLmNvdXBvbl9kaXNjb3VudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLnRyeF9pZCkge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmdfdHJ5X2Nob29pbmdfYWRkcmVzcywgdGhpcy5sYW5nLldhcm5pbmcgKyAnICEhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnY2hlY2tvdXQnfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGludGVncmF0ZVJhem9yUGF5KCkge1xyXG4gICAgICB0aGlzLnJhem9yUGF5UmVtb3ZlKCk7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmlzX3Jhem9ycGF5X2FjdGl2YXRlZCA9PSAxICYmIHRoaXMuaW5kaWFuX2N1cnJlbmN5KSB7XHJcbiAgICAgICAgbGV0IG15U2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2xhbmd1YWdlJywgJ2phdmFzY3JpcHQnKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgdGhpcy5zZXR0aW5ncy5yYXpvcl9rZXkpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnLCB0aGlzLnJvdW5kKHRoaXMucGF5bWVudF9mb3JtLnRvdGFsICogMTAwICogdGhpcy5pbmRpYW5fY3VycmVuY3kuZXhjaGFuZ2VfcmF0ZSkpO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGhpcy5zZXR0aW5ncy5zeXN0ZW1fbmFtZSk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWRlc2NyaXB0aW9uJywgJ1Jhem9ycGF5Jyk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJywgdGhpcy5zZXR0aW5ncy5kYXJrX2xvZ28pO1xyXG4gICAgICAgIG15U2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaWxsLm5hbWUnLCAnJyk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpbGwuZW1haWwnLCAnJyk7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpbGwuYWRkcmVzcycsICcnKTtcclxuICAgICAgICBteVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUuY29sb3InLCB0aGlzLnNldHRpbmdzLm1lbnVfYmFja2dyb3VuZF9jb2xvcik7XHJcbiAgICAgICAgbXlTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmdldFVybCgncHVibGljL2Zyb250ZW5kL2pzL3Jhem9yX3BheV9jaGVja291dC5qcycpKTtcclxuICAgICAgICAvLyBBcHBlbmQgc2NyaXB0XHJcbiAgICAgICAgdGhpcy4kcmVmcy5yYXpvcl9wYXkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG15U2NyaXB0KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICByYXpvclBheVJlbW92ZSgpIHtcclxuICAgICAgJCgnLnJhem9yX3BheScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgIHZhciByYXpvcktleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF6b3JwYXktcGF5bWVudC1idXR0b24nKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF6b3JLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmF6b3JLZXlzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5uYW1lID0gJyc7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QuaW1hZ2UgPSAnJztcclxuICAgICAgdGhpcy5vZmZsaW5lX21ldGhvZC5pbnN0cnVjdGlvbnMgPSAnJztcclxuICAgIH0sXHJcbiAgICBvZmZsaW5lQ2hlY2sob2ZmbGluZSkge1xyXG4gICAgICB0aGlzLnJhem9yUGF5UmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QuaWQgPSBvZmZsaW5lLmlkO1xyXG4gICAgICB0aGlzLm9mZmxpbmVfbWV0aG9kLm5hbWUgPSBvZmZsaW5lLm5hbWU7XHJcbiAgICAgIHRoaXMub2ZmbGluZV9tZXRob2QuaW1hZ2UgPSBvZmZsaW5lLmltYWdlO1xyXG4gICAgICB0aGlzLm9mZmxpbmVfbWV0aG9kLmluc3RydWN0aW9ucyA9IG9mZmxpbmUuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgfSxcclxuICAgIHBheW1lbnQod2FsbGV0KSB7XHJcbiAgICAgIGxldCBwYXltZW50X3R5cGUgPSAnJztcclxuICAgICAgaWYgKHdhbGxldCA9PSAnd2FsbGV0Jykge1xyXG4gICAgICAgIHRoaXMud2FsbGV0X2xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHBheW1lbnRfdHlwZSA9IHdhbGxldDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXltZW50X3R5cGUgPSB0aGlzLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcGF5bWVudF90eXBlKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcodGhpcy5sYW5nLnBsZWFzZV9jaG9vc2VfYV9wYXltZW50X21ldGhvZCwgdGhpcy5sYW5nLldhcm5pbmcgKyAnICEhJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLm9mZmxpbmVfbWV0aG9kLmlkLFxyXG4gICAgICAgIGZpbGU6IHRoaXMucHJvZHVjdF9mb3JtLmltYWdlLFxyXG4gICAgICAgIHBheW1lbnRfdHlwZTogcGF5bWVudF90eXBlLFxyXG4gICAgICAgIHRyeF9pZDogdGhpcy50cnhfaWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgdGhpcy5jb2RlKTtcclxuXHJcbiAgICAgIGlmIChwYXltZW50X3R5cGUgPT0gJ2Nhc2hfb25fZGVsaXZlcnknIHx8IHBheW1lbnRfdHlwZSA9PSAncGF5X2xhdGVyJyB8fCB0aGlzLm9mZmxpbmVfbWV0aG9kLmlkIHx8IHBheW1lbnRfdHlwZSA9PSAnd2FsbGV0Jykge1xyXG5cclxuICAgICAgICBpZiAod2FsbGV0ICE9ICd3YWxsZXQnKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGZvcm0sIHtcclxuXHJcbiAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gKGRhdGEsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFRvRm9ybURhdGEoZGF0YSlcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMud2FsbGV0X2xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNvZmZsaW5lJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbGV0IGltYWdlX3NlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZC1pbWFnZScpO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2Vfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICBpbWFnZV9zZWxlY3Rvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdnZXQuaW52b2ljZScsIHBhcmFtczoge29yZGVyQ29kZTogdGhpcy5jb2RlfX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0aGlzLnRyeF9pZH19KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09ICdwYXlzdGFjaycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5wYXlzdGFjay5wYXlTdGFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHVsIGNsYXNzPVwiZ2xvYmFsLWxpc3RcIj5cclxuICAgICAgPGxpPnt7IGxhbmcuc3VidG90YWwgfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQoc3ViX3RvdGFsKSB9fTwvc3Bhbj48L2xpPlxyXG4gICAgICA8bGkgdi1pZj1cInNldHRpbmdzLnRheF90eXBlID09ICdiZWZvcmVfdGF4JyB8fCBzZXR0aW5ncy52YXRfYW5kX3RheF90eXBlID09ICdwcm9kdWN0X2Jhc2UnXCI+e3sgbGFuZy50YXggfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQodGF4KSB9fTwvc3Bhbj48L2xpPlxyXG4gICAgICA8bGk+e3sgbGFuZy5kaXNjb3VudCB9fTxzcGFuPnt7IHByaWNlRm9ybWF0KGRpc2NvdW50X29mZmVyKSB9fTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5zaGlwcGluZ19jb3N0ICE9ICdhcmVhX2Jhc2UnIHx8ICRyb3V0ZS5uYW1lICE9ICdjYXJ0J1wiPnt7IGxhbmcuc2hpcHBpbmdfY29zdCB9fTxzcGFuPnt7XHJcbiAgICAgICAgICBwcmljZUZvcm1hdChzaGlwcGluZ190YXgpXHJcbiAgICAgICAgfX08L3NwYW4+PC9saT5cclxuICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5jb3Vwb25fc3lzdGVtID09IDFcIj57eyBsYW5nLmNvdXBvbl9kaXNjb3VudCB9fTxzcGFuPnt7XHJcbiAgICAgICAgICBwcmljZUZvcm1hdChjb3Vwb25fZGlzY291bnQpXHJcbiAgICAgICAgfX08L3NwYW4+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3JkZXItdG90YWxcIiB2LWlmPVwic2V0dGluZ3MudGF4X3R5cGUgPT0gJ2FmdGVyX3RheCcgJiYgc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSAnb3JkZXJfYmFzZSdcIj5cclxuICAgICAgPHAgY2xhc3M9XCJmb250X3dlaWdodF80MDBcIj57eyBsYW5nLnRvdGFsIH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KHRvdGFsIC0gdGF4KSB9fTwvc3Bhbj48L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiZm9udF93ZWlnaHRfNDAwXCI+e3sgbGFuZy50YXggfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQodGF4KSB9fTwvc3Bhbj48L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiZ3JhbmRfdG90YWxfc3R5bGVcIj57eyBsYW5nLmdyYW5kX3RvdGFsIH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KHRvdGFsKSB9fTwvc3Bhbj48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJvcmRlci10b3RhbFwiIHYtZWxzZT5cclxuICAgICAgPHA+e3sgbGFuZy50b3RhbCB9fSA8c3Bhbj57eyBwcmljZUZvcm1hdCh0b3RhbCkgfX08L3NwYW4+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwYXltZW50X2RldGFpbHNcIixcclxuICBwcm9wcyA6IFsnc3ViX3RvdGFsJywndGF4JywnZGlzY291bnRfb2ZmZXInLCdzaGlwcGluZ190YXgnLCdjb3Vwb25fZGlzY291bnQnLCd0b3RhbCddLFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJldmlldy5qcGcnKVwiIGFsdD1cInNoaW1tZXJcIlxyXG4gICAgICAgY2xhc3M9XCJzaGltbWVyXCIgdi1iaW5kOnN0eWxlPSBcIltoZWlnaHQgPyBzdHlsZSA6IG51bGxdXCI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInNoaW1tZXIudnVlXCIsXHJcbiAgICBwcm9wczogWydoZWlnaHQnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLmhlaWdodCsncHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYXBwbGUtcGF5LWJ1dHRvblwiPjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJhcHBsZV9wYXlcIixcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hcHBsZXBheS5jZG4tYXBwbGUuY29tL2pzYXBpL3YxL2FwcGxlLXBheS1zZGsuanNcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgICB0aGlzLm9uQXBwbGVQYXlCdXR0b25DbGlja2VkKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkFwcGxlUGF5QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgLy8gRGVmaW5lIEFwcGxlUGF5UGF5bWVudFJlcXVlc3RcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBcImNvdW50cnlDb2RlXCI6IFwiVVNcIixcclxuICAgICAgICBcImN1cnJlbmN5Q29kZVwiOiBcIlVTRFwiLFxyXG4gICAgICAgIFwibWVyY2hhbnRDYXBhYmlsaXRpZXNcIjogW1xyXG4gICAgICAgICAgXCJzdXBwb3J0czNEU1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInN1cHBvcnRlZE5ldHdvcmtzXCI6IFtcclxuICAgICAgICAgIFwidmlzYVwiLFxyXG4gICAgICAgICAgXCJtYXN0ZXJDYXJkXCIsXHJcbiAgICAgICAgICBcImFtZXhcIixcclxuICAgICAgICAgIFwiZGlzY292ZXJcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0b3RhbFwiOiB7XHJcbiAgICAgICAgICBcImxhYmVsXCI6IFwiRGVtbyAoQ2FyZCBpcyBub3QgY2hhcmdlZClcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImZpbmFsXCIsXHJcbiAgICAgICAgICBcImFtb3VudFwiOiBcIjEuOTlcIlxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBBcHBsZVBheVNlc3Npb25cclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBBcHBsZVBheVNlc3Npb24oMywgcmVxdWVzdCk7XHJcblxyXG4gICAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybSgnQXBwbGUgU2Vzc2lvbiBDYW5ub3QgYmUgQ3JlYXRlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXNzaW9uLm9udmFsaWRhdGVtZXJjaGFudCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBDYWxsIHlvdXIgb3duIHNlcnZlciB0byByZXF1ZXN0IGEgbmV3IG1lcmNoYW50IHNlc3Npb24uXHJcbiAgICAgICAgY29uc3QgbWVyY2hhbnRTZXNzaW9uID0gYXdhaXQgdmFsaWRhdGVNZXJjaGFudCgpO1xyXG4gICAgICAgIHNlc3Npb24uY29tcGxldGVNZXJjaGFudFZhbGlkYXRpb24obWVyY2hhbnRTZXNzaW9uKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlc3Npb24ub25wYXltZW50bWV0aG9kc2VsZWN0ZWQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gRGVmaW5lIEFwcGxlUGF5UGF5bWVudE1ldGhvZFVwZGF0ZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgcGF5bWVudCBtZXRob2QuXHJcbiAgICAgICAgLy8gTm8gdXBkYXRlcyBvciBlcnJvcnMgYXJlIG5lZWRlZCwgcGFzcyBhbiBlbXB0eSBvYmplY3QuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnRNZXRob2RTZWxlY3Rpb24odXBkYXRlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlc3Npb24ub25zaGlwcGluZ21ldGhvZHNlbGVjdGVkID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIERlZmluZSBBcHBsZVBheVNoaXBwaW5nTWV0aG9kVXBkYXRlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBzaGlwcGluZyBtZXRob2QuXHJcbiAgICAgICAgLy8gTm8gdXBkYXRlcyBvciBlcnJvcnMgYXJlIG5lZWRlZCwgcGFzcyBhbiBlbXB0eSBvYmplY3QuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVNoaXBwaW5nTWV0aG9kU2VsZWN0aW9uKHVwZGF0ZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXNzaW9uLm9uc2hpcHBpbmdjb250YWN0c2VsZWN0ZWQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gRGVmaW5lIEFwcGxlUGF5U2hpcHBpbmdDb250YWN0VXBkYXRlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBzaGlwcGluZyBjb250YWN0LlxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHNlc3Npb24uY29tcGxldGVTaGlwcGluZ0NvbnRhY3RTZWxlY3Rpb24odXBkYXRlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlc3Npb24ub25wYXltZW50YXV0aG9yaXplZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBEZWZpbmUgQXBwbGVQYXlQYXltZW50QXV0aG9yaXphdGlvblJlc3VsdFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgIFwic3RhdHVzXCI6IEFwcGxlUGF5U2Vzc2lvbi5TVEFUVVNfU1VDQ0VTU1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlc3Npb24ub25jb3Vwb25jb2RlY2hhbmdlZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBEZWZpbmUgQXBwbGVQYXlDb3Vwb25Db2RlVXBkYXRlXHJcbiAgICAgICAgY29uc3QgbmV3VG90YWwgPSBjYWxjdWxhdGVOZXdUb3RhbChldmVudC5jb3Vwb25Db2RlKTtcclxuICAgICAgICBjb25zdCBuZXdMaW5lSXRlbXMgPSBjYWxjdWxhdGVOZXdMaW5lSXRlbXMoZXZlbnQuY291cG9uQ29kZSk7XHJcbiAgICAgICAgY29uc3QgbmV3U2hpcHBpbmdNZXRob2RzID0gY2FsY3VsYXRlTmV3U2hpcHBpbmdNZXRob2RzKGV2ZW50LmNvdXBvbkNvZGUpO1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IGNhbGN1bGF0ZUVycm9ycyhldmVudC5jb3Vwb25Db2RlKTtcclxuXHJcbiAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZUNvdXBvbkNvZGVDaGFuZ2Uoe1xyXG4gICAgICAgICAgbmV3VG90YWw6IG5ld1RvdGFsLFxyXG4gICAgICAgICAgbmV3TGluZUl0ZW1zOiBuZXdMaW5lSXRlbXMsXHJcbiAgICAgICAgICBuZXdTaGlwcGluZ01ldGhvZHM6IG5ld1NoaXBwaW5nTWV0aG9kcyxcclxuICAgICAgICAgIGVycm9yczogZXJyb3JzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2Vzc2lvbi5vbmNhbmNlbCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBQYXltZW50IGNhbmNlbGxlZCBieSBXZWJLaXRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlc3Npb24uYmVnaW4oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjZndfbW9kYWxcIlxyXG4gICAgICAgdi1pZj1cInR5cGUgPT0gJ2ZsdXR0ZXJfd2F2ZScgXCI+XHJcbiAgICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJmd19tb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJmd19tb2RhbFwiXHJcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgbGFuZy5wYXlfd2l0aF9mbHV0dGVyIH19PC9oNT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBtb2RhbF9jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy5lbWFpbFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cInBob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy5waG9uZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZsdXR0ZXJfd2F2ZVwiIEBjbGljaz1cImluaXRpYXRlUG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIHt7IGxhbmcucGF5IH19IHt7IHByaWNlRm9ybWF0KGFtb3VudCkgfX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImZsdXR0ZXJfd2F2ZVwiLFxyXG4gICAgcHJvcHM6IFsndHJ4X2lkJywgJ2NvZGUnLCAnYW1vdW50JywndHJhbnNhY3Rpb25fdHlwZScsJ3R5cGUnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcclxuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2NoZWNrb3V0LmZsdXR0ZXJ3YXZlLmNvbS92My5qc1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdGlhdGVQb3B1cCgpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBGbHV0dGVyd2F2ZUNoZWNrb3V0KHtcclxuICAgICAgICAgICAgICAgIHB1YmxpY19rZXk6IHRoaXMuc2V0dGluZ3MuZmx3X3B1YmxpY19rZXksXHJcbiAgICAgICAgICAgICAgICB0eF9yZWY6IHRoYXQucmVmZXJlbmNlKCksXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoYXQucm91bmQodGhhdC5hbW91bnQqdGhhdC5hY3RpdmVDdXJyZW5jeS5leGNoYW5nZV9yYXRlLDIpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMuYWN0aXZlQ3VycmVuY3kuY29kZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfb3B0aW9uczogXCJjYXJkLCBiYW5rdHJhbnNmZXIsbW9iaWxlbW9uZXlnaGFuYSwgdXNzZFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gcmVkaXJlY3RfdXJsOiBcImh0dHBzOi8vZ2xhY2llcnMudGl0YW5pYy5jb20vaGFuZGxlLWZsdXR0ZXJ3YXZlLXBheW1lbnRcIixcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHBheW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZlcmlmeVRyYW5zYWN0aW9uKHBheW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdW1lcl9pZDogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJfbWFjOiBcIjkyYTMtOTEyYmEtMTE5MmFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGF0LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lX251bWJlcjogdGhhdC5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGF0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhhdC5zZXR0aW5ncy5zeXN0ZW1fbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGZvciBhbiBhd2Vzb21lIGNydWlzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ286IHRoYXQuc2V0dGluZ3MuZGFya19sb2dvLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcmlmeVRyYW5zYWN0aW9uKHBheW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkIDogcGF5bWVudC50cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU6ICdmbHV0dGVyX3dhdmUnLFxyXG4gICAgICAgICAgICAgICAgdHJ4X2lkOiB0aGlzLnRyeF9pZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsIC8vIHRoZSBhbW91bnQgeW91IHdhbnQgdG8gY2hhcmdlIHRoZSBjdXN0b21lciBpbiBjZW50cy4gJDEwMCBpcyAxMDAwIChpdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgdXNlIGEgcHJvZHVjdCBpZCBhbmQgcXVhbnRpdHkgYW5kIGdldCBjYWxjdWxhdGUgdGhpcyBvbiB0aGUgYmFja2VuZCB0byBhdm9pZCBwZW9wbGUgbWFuaXB1bGF0aW5nIHRoZSBjb3N0KVxyXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZih0aGlzLnRyYW5zYWN0aW9uX3R5cGUgPT0gJ3dhbGxldF9yZWNoYXJnZScpe1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9yZWNoYXJnZS13YWxsZXQnKTtcclxuICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCwgZm9ybSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IodGhpcy5sYW5nLnNvbWV0aGluZ193ZW50X3dyb25nLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZyk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcicpO1xyXG4gICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLGZvcm0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuZ2V0VXJsKCdnZXQtaW52b2ljZS8nK3RoaXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmdldFVybCgnaW52b2ljZS8nK3RoaXMudHJ4X2lkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZyk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGdvb2dsZVxyXG4gICAgICBpZD1cImdvb2dsZS1wYXktYnRuXCJcclxuICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcclxuICAgICAgQHBheWVkPVwicGF5ZWQoKVwiXHJcbiAgICAgIEBjYW5jZWw9XCJjYW5jZWxsZWRcIlxyXG4gIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZ29vZ2xlIGZyb20gJ3Z1ZS1nb29nbGUtcGF5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImdvb2dsZV9wYXlcIixcclxuICBjb21wb25lbnRzOiB7Z29vZ2xlfSxcclxuICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCd0eXBlJ10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBlbnZpcm9ubWVudDogJ1RFU1QnLFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGJ1dHRvblR5cGU6ICdwYXknLFxyXG4gICAgICAgIGFsbG93ZWRDYXJkTmV0d29ya3M6IFtcclxuICAgICAgICAgICdBTUVYJyxcclxuICAgICAgICAgICdESVNDT1ZFUicsXHJcbiAgICAgICAgICAnSU5URVJBQycsXHJcbiAgICAgICAgICAnSkNCJyxcclxuICAgICAgICAgICdNQVNURVJDQVJEJyxcclxuICAgICAgICAgICdWSVNBJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWxsb3dlZENhcmRBdXRoTWV0aG9kczogWydQQU5fT05MWScsICdDUllQVE9HUkFNXzNEUyddLFxyXG4gICAgICAgIG1lcmNoYW50SW5mbzoge1xyXG4gICAgICAgICAgbWVyY2hhbnROYW1lOiAnJyxcclxuICAgICAgICAgIG1lcmNoYW50SWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmFuc2FjdGlvbkluZm86IHtcclxuICAgICAgICAgIHRvdGFsUHJpY2VTdGF0dXM6ICdGSU5BTCcsXHJcbiAgICAgICAgICB0b3RhbFByaWNlOiAnJyxcclxuICAgICAgICAgIGN1cnJlbmN5Q29kZTogJ1VTRCcsXHJcbiAgICAgICAgICBjb3VudHJ5Q29kZTogJ1VTJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbjoge1xyXG4gICAgICAgICAgdHlwZTogJ1BBWU1FTlRfR0FURVdBWScsXHJcbiAgICAgICAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIGdhdGV3YXk6ICcnLFxyXG4gICAgICAgICAgICBnYXRld2F5TWVyY2hhbnRJZDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMudHJhbnNhY3Rpb25JbmZvLnRvdGFsUHJpY2UgPSB0aGlzLnJvdW5kKHRoaXMuYW1vdW50LCAyKTtcclxuICAgIHRoaXMub3B0aW9ucy5tZXJjaGFudEluZm8ubWVyY2hhbnROYW1lID0gdGhpcy5zZXR0aW5ncy5nb29nbGVfcGF5X21lcmNoYW50X25hbWU7XHJcbiAgICB0aGlzLm9wdGlvbnMubWVyY2hhbnRJbmZvLm1lcmNoYW50SWQgPSB0aGlzLnNldHRpbmdzLmdvb2dsZV9wYXlfbWVyY2hhbnRfaWQ7XHJcbiAgICB0aGlzLm9wdGlvbnMudG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbi5wYXJhbWV0ZXJzLmdhdGV3YXkgPSB0aGlzLnNldHRpbmdzLmdvb2dsZV9wYXlfZ2F0ZXdheTtcclxuICAgIHRoaXMub3B0aW9ucy50b2tlbml6YXRpb25TcGVjaWZpY2F0aW9uLnBhcmFtZXRlcnMuZ2F0ZXdheU1lcmNoYW50SWQgPSB0aGlzLnNldHRpbmdzLmdvb2dsZV9wYXlfZ2F0ZXdheV9tZXJjaGFudF9pZDtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHBheWVkKHBheW1lbnREYXRhKSB7XHJcbiAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAgIGlmKHRoaXMudHlwZSA9ICd3YWxsZXRfcmVjaGFyZ2UnKXtcclxuICAgICAgICBsZXQgcGF5bWVudF90eXBlID0gXCJnb29nbGVfcGF5XCJcclxuICAgICAgICAgIHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLXJlY2hhcmdlP2Ftb3VudCcgKyB0aGlzLmFtb3VudCArICcmcGF5bWVudF90eXBlJyArIHBheW1lbnRfdHlwZSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhVc2VyKVxyXG4gICAgICAgICAgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgdGhpcy5jb2RlICsgJyZ0cnhfaWQ9JyArIHRoaXMudHJ4X2lkKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcj9jb2RlPScgKyB0aGlzLmNvZGUgKyAnJmd1ZXN0PTEnICsgJyZ0cnhfaWQ9JyArIHRoaXMudHJ4X2lkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS5hbW91bnQgPSB0aGlzLmFtb3VudDtcclxuICAgICAgZGF0YS5wYXltZW50X3R5cGUgPSAnZ29vZ2xlX3BheSc7XHJcbiAgICAgIGRhdGEuY29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgZGF0YS50cnhfaWQgPSB0aGlzLnRyeF9pZDtcclxuICAgICAgZGF0YS5vcmRlciA9IHBheW1lbnREYXRhO1xyXG5cclxuICAgICAgdGhpcy5heGlvcy5wb3N0KHVybCwgZGF0YSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdnZXQuaW52b2ljZScsIHBhcmFtczoge29yZGVyQ29kZTogdGhpcy5jb2RlfX0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2ludm9pY2UubGlzdCcsIHBhcmFtczoge3RyeF9pZDogdGhpcy50cnhfaWR9fSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLmRhdGEuc3VjY2VzcywgdGhpcy5sYW5nLlN1Y2Nlc3MgKyAnICEhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNhbmNlbGxlZCgpIHtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImhvbWVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkga2tpYXBheS1idXR0b25cIiA+e3sgbGFuZy5wYXlfbm93IH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImtraWFQYXlcIixcclxuICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCAncGF5bWVudF90eXBlJywneG9mJywndHlwZSddLFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXHJcbiAgICBzY3JpcHQuc3JjID0gdGhpcy5nZXRVcmwoJ3B1YmxpYy9mcm9udGVuZC9qcy9rLmpzJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gdGhpcy50eXBlID09ICd3YWxsZXQnID8gdGhpcy5yb3VuZCgodGhpcy5hbW91bnQgLyB0aGlzLmFjdGl2ZUN1cnJlbmN5LmV4Y2hhbmdlX3JhdGUpICogdGhpcy54b2YuZXhjaGFuZ2VfcmF0ZSkgOiB0aGlzLnJvdW5kKHRoaXMuYW1vdW50KiB0aGlzLnhvZi5leGNoYW5nZV9yYXRlKTtcclxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2Ftb3VudCcsIGFtb3VudCk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd1cmwnLCB0aGlzLnNldHRpbmdzLmRhcmtfbG9nbyk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdjZW50ZXInKTtcclxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhpcy5zZXR0aW5ncy5tZW51X2JhY2tncm91bmRfY29sb3IpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc2FuZGJveCcsIHRoaXMuc2V0dGluZ3MuaXNfa2tpYXBheV9zYW5kYm94ZWQpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgna2V5JywgdGhpcy5zZXR0aW5ncy5ra2lhcGF5X3B1YmxpY19rZXkpO1xyXG4gICAgbGV0IHVybCA9IHRoaXMudHlwZSA9PSAnd2FsbGV0JyA/IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldD9hbW91bnQ9Jyt0aGlzLmFtb3VudCsnJnR5cGU9d2FsbGV0JnBheW1lbnRfdHlwZT1ra2lhcGF5JykgOiB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcj9wYXltZW50X3R5cGU9a2tpYXBheSZjb2RlPScgKyB0aGlzLmNvZGUgKyAnJnRyeF9pZD0nICsgdGhpcy50cnhfaWQpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY2FsbGJhY2snLCB1cmwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpIHtcclxuICAgICAgbGV0IGZvcm0gPSB7XHJcbiAgICAgICAgcGF5bWVudF90eXBlOiAna2tpYXBheScsXHJcbiAgICAgICAgdHJ4X2lkOiB0aGlzLnRyeF9pZCxcclxuICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgYWNjb3VudDogcmVzcG9uc2UuYWNjb3VudCxcclxuICAgICAgICB0cmFuc2FjdGlvbl9pZDogcmVzcG9uc2UudHJhbnNhY3Rpb25JZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb21wbGV0ZS1vcmRlcicpO1xyXG4gICAgICBheGlvcy5wb3N0KHVybCwgZm9ybSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcih0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnZ2V0Lmludm9pY2UnLCBwYXJhbXM6IHtvcmRlckNvZGU6IHRoaXMuY29kZX19KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0aGlzLnRyeF9pZH19KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhbGVydCh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG5cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBpZD1cInBheS1idXR0b25cIj5cclxuICAgIHt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWlkX3RyYW5zXCIsXHJcbiAgICBwcm9wczogWydtaWRfdG9rZW4nLCd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCd0eXBlJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG4gICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2FwcC5taWR0cmFucy5jb20vc25hcC9zbmFwLmpzXCI7XHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpZW50LWtleScsIHRoaXMuc2V0dGluZ3MubWlkX3RyYW5zX2NsaWVudF9pZCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMubWlkX3Rva2VuO1xyXG4gICAgICBsZXQgYXV0aFVzZXIgPSB0aGlzLmF1dGhVc2VyO1xyXG4gICAgICBsZXQgYW1vdW50ID0gdGhpcy5hbW91bnQ7XHJcbiAgICAgIGxldCBjb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICBsZXQgdHJ4X2lkID0gdGhpcy50cnhfaWQ7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXktYnV0dG9uJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTbmFwVG9rZW4gYWNxdWlyZWQgZnJvbSBwcmV2aW91cyBzdGVwXHJcbiAgICAgICAgc25hcC5wYXkodG9rZW4sIHtcclxuICAgICAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50eXBlID0gJ3dhbGxldF9yZWNoYXJnZScpe1xyXG4gICAgICAgICAgICAgIGxldCBwYXltZW50X3R5cGUgPSBcIm1pZF90cmFuc1wiXHJcbiAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtcmVjaGFyZ2U/YW1vdW50JyArIHRoaXMuYW1vdW50ICsgJyZwYXltZW50X3R5cGUnICsgcGF5bWVudF90eXBlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgaWYgKGF1dGhVc2VyKVxyXG4gICAgICAgICAgICAgICAgdXJsID0gdGhhdC5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgY29kZSArICcmdHJ4X2lkPScgKyB0cnhfaWQpO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHVybCA9IHRoYXQuZ2V0VXJsKCd1c2VyL2NvbXBsZXRlLW9yZGVyP2NvZGU9JyArIGNvZGUgKyAnJmd1ZXN0PTEnICsgJyZ0cnhfaWQ9JyArIHRyeF9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGEuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgICAgICAgICBkYXRhLnBheW1lbnRfdHlwZSA9ICdnb29nbGVfcGF5JztcclxuICAgICAgICAgICAgZGF0YS5jb2RlID0gY29kZTtcclxuICAgICAgICAgICAgZGF0YS50cnhfaWQgPSB0cnhfaWQ7XHJcbiAgICAgICAgICAgIGRhdGEub3JkZXIgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QodXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoYXQubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2dldC5pbnZvaWNlJywgcGFyYW1zOiB7b3JkZXJDb2RlOiBjb2RlfX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2ludm9pY2UubGlzdCcsIHBhcmFtczoge3RyeF9pZDogdHJ4X2lkfX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoYXQubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGF0LmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgb25QZW5kaW5nOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhhdC4kcm91dGVyLnB1c2goJ3BheW1lbnQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgZGF0YS1icy10YXJnZXQ9XCIjb2ZmbGluZVwiXHJcbiAgICAgICB2LWlmPVwib2ZmbGluZV9tZXRob2QubmFtZVwiPnt7IGxhbmcucGF5X25vdyB9fTwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJvZmZsaW5lXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cIm9mZmxpbmVfbW9kYWxcIlxyXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGxhbmcucGF5X3dpdGggfX0ge3sgb2ZmbGluZV9tZXRob2QubmFtZSB9fTwvaDU+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbW9kYWxfY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcudXBsb2FkX2ZpbGUgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGUgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ1cGxvYWQtaW1hZ2UgZm9ybS1jb250cm9sXCIgZm9yPVwidXBsb2FkLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJ1cGxvYWQtMVwiIEBjaGFuZ2U9XCJpbWFnZVVwKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgaWQ9XCJ1cGxvYWQtaW1hZ2VcIj57eyBsYW5nLnVwbG9hZF9maWxlIH19PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwbG9hZC1pbWFnZSB1cGxvYWQtdGV4dFwiIGZvcj1cInVwbG9hZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwidXBsb2FkLTJcIiBAY2hhbmdlPVwiaW1hZ2VVcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1sYXp5PVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL290aGVycy9lbnYuc3ZnJylcIiBhbHQ9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnVwbG9hZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCIgdi1pZj1cIm9mZmxpbmVfbWV0aG9kLmluc3RydWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcuaW5zdHJ1Y3Rpb25zIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvblwiIHYtaHRtbD1cIm9mZmxpbmVfbWV0aG9kLmluc3RydWN0aW9uc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHYtc2hvdz1cIiFsb2FkaW5nXCI+e3sgbGFuZy5wcm9jZWVkIH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bG9hZGluZ19idXR0b24gdi1zaG93PVwibG9hZGluZ1wiIDpjbGFzc19uYW1lPVwiJ2J0biBidG4tcHJpbWFyeSdcIj48L2xvYWRpbmdfYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1ib2R5IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJvZmZsaW5lX21ldGhvZFwiLFxyXG4gICAgcHJvcHMgOiBbJ3RyeF9pZCcsJ2NvZGUnLCdhbW91bnQnLCdvZmZsaW5lX21ldGhvZCcsJ2xvYWRpbmcnXSxcclxuICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgc3VibWl0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5wYXltZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibXgtYXV0byB3XzQwXCIgdi1zaG93PVwicGF5bWVudF90eXBlID09ICdwYXlwYWwnXCJcclxuICAgICAgIGlkPVwicGF5cGFsLWJ1dHRvbi1jb250YWluZXJcIiByZWY9XCJwYXlwYWxcIj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicGF5cGFsXCIsXHJcbiAgICBwcm9wcyA6IFsndHJ4X2lkJywnY29kZScsJ2Ftb3VudCcsJ3BheW1lbnRfdHlwZScsJ3R5cGUnXSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubG9hZFBheXBhbCgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgbG9hZFBheXBhbCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9XCIgKyB0aGlzLnNldHRpbmdzLnBheXBhbF9rZXk7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZXNwYWNlJywgJ3BheXBhbF9zZGsnKTtcclxuICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuc2V0TG9hZGVkKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TG9hZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXlwYWxfc2RrLkJ1dHRvbnMoe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChkYXRhLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm9kdWN0IFB1cmNoYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5X2NvZGU6IFwiVVNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJvdW5kKHRoaXMuYW1vdW50IC8gdGhpcy5hY3RpdmVDdXJyZW5jeS5leGNoYW5nZV9yYXRlLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQXBwcm92ZTogYXN5bmMgKGRhdGEsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlciA9IGF3YWl0IGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPScnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09ICd3YWxsZXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoVXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgdGhpcy5jb2RlICsgJyZ0cnhfaWQ9JyArIHRoaXMudHJ4X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXI/Y29kZT0nICsgdGhpcy5jb2RlICsgJyZndWVzdD0xJyArICcmdHJ4X2lkPScgKyB0aGlzLnRyeF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgPSB0aGlzLnBheW1lbnRfZm9ybS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnBheW1lbnRfdHlwZSA9IHRoaXMucGF5bWVudF90eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEub3JkZXIgPSBvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QodXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2dldC5pbnZvaWNlJywgcGFyYW1zOiB7b3JkZXJDb2RlOiB0aGlzLmNvZGV9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdpbnZvaWNlLmxpc3QnLCBwYXJhbXM6IHt0cnhfaWQ6IHRoaXMudHJ4X2lkfX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucmVuZGVyKCcjcGF5cGFsLWJ1dHRvbi1jb250YWluZXInKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cInBob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLnBob25lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF5c3RhY2sgOmNsYXNzPVwieyAnb3ZlcmxheV9idG4nIDogIW5hbWUgfHwgIWVtYWlsIHx8ICFwaG9uZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbW91bnQ9XCJyb3VuZChhbW91bnQqMTAwKmFjdGl2ZUN1cnJlbmN5LmV4Y2hhbmdlX3JhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwaG9uZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGF5c3RhY2trZXk9XCJwYXlzdGFja19rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhbGxiYWNrPVwiY2FsbGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZmVyZW5jZT1cInJlZmVyZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hhbm5lbHM9XCJjaGFubmVsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y3VycmVuY3k9XCJhY3RpdmVDdXJyZW5jeS5jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbG9zZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplbWJlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LW1vbmV5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5wYXkgfX0ge3sgcHJpY2VGb3JtYXQoYW1vdW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BheXN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF5c3RhY2sgZnJvbSAndnVlLXBheXN0YWNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicGF5LXN0YWNrXCIsXHJcbiAgICBwcm9wczogWyd0cnhfaWQnLCAnY29kZScsICdhbW91bnQnLCAndHlwZScsJ3BheXN0YWNrX2tleScsJ25nbl9leGNoYW5nZV9yYXRlJywndHJhbnNhY3Rpb25fdHlwZSddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHBheXN0YWNrXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGNoYW5uZWxzOiBbJ2NhcmQnLCAnYmFuaycsICd1c3NkJywgJ21vYmlsZV9tb25leSddXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICByZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnI3BheXN0YWNrX21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB0cnhfaWQ6IHRoaXMudHJ4X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsIC8vIHRoZSBhbW91bnQgeW91IHdhbnQgdG8gY2hhcmdlIHRoZSBjdXN0b21lciBpbiBjZW50cy4gJDEwMCBpcyAxMDAwIChpdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgdXNlIGEgcHJvZHVjdCBpZCBhbmQgcXVhbnRpdHkgYW5kIGdldCBjYWxjdWxhdGUgdGhpcyBvbiB0aGUgYmFja2VuZCB0byBhdm9pZCBwZW9wbGUgbWFuaXB1bGF0aW5nIHRoZSBjb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6IHJlc3BvbnNlLnJlZmVyZW5jZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50cmFuc2FjdGlvbl90eXBlID09ICd3YWxsZXRfcmVjaGFyZ2UnKXtcclxuICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL3JlY2hhcmdlLXdhbGxldCcpO1xyXG4gICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCxmb3JtKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMubGFuZy5zb21ldGhpbmdfd2VudF93cm9uZyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29tcGxldGUtb3JkZXInKTtcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsZm9ybSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnZ2V0Lmludm9pY2UnLCBwYXJhbXM6IHtvcmRlckNvZGU6IHRoaXMuY29kZX19KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW52b2ljZS5saXN0JywgcGFyYW1zOiB7dHJ4X2lkOiB0aGlzLnRyeF9pZH19KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLmxhbmcuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1widnVlLWdvb2dsZS1wYXlcIl09ZSgpOnRbXCJ2dWUtZ29vZ2xlLXBheVwiXT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiByPXt9LG8ubT1uPVtmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oMyl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gdSh0LGUsbixyLG8sYSxpKXt0cnl7dmFyIGM9dFthXShpKSx1PWMudmFsdWV9Y2F0Y2godCl7cmV0dXJuIHZvaWQgbih0KX1jLmRvbmU/ZSh1KTpQcm9taXNlLnJlc29sdmUodSkudGhlbihyLG8pfXQuZXhwb3J0cz1mdW5jdGlvbihjKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9YXJndW1lbnRzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciByPWMuYXBwbHkodCxpKTtmdW5jdGlvbiBvKHQpe3UocixlLG4sbyxhLFwibmV4dFwiLHQpfWZ1bmN0aW9uIGEodCl7dShyLGUsbixvLGEsXCJ0aHJvd1wiLHQpfW8odm9pZCAwKX0pfX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1mdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgdSx0PU9iamVjdC5wcm90b3R5cGUscz10Lmhhc093blByb3BlcnR5LGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbDp7fSxvPWUuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLG49ZS5hc3luY0l0ZXJhdG9yfHxcIkBAYXN5bmNJdGVyYXRvclwiLHI9ZS50b1N0cmluZ1RhZ3x8XCJAQHRvU3RyaW5nVGFnXCI7ZnVuY3Rpb24gaSh0LGUsbixyKXt2YXIgYSxpLGMsdSxvPWUmJmUucHJvdG90eXBlIGluc3RhbmNlb2YgZz9lOmcscz1PYmplY3QuY3JlYXRlKG8ucHJvdG90eXBlKSxsPW5ldyBqKHJ8fFtdKTtyZXR1cm4gcy5faW52b2tlPShhPXQsaT1uLGM9bCx1PWgsZnVuY3Rpb24odCxlKXtpZih1PT09ZCl0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2lmKHU9PT15KXtpZihcInRocm93XCI9PT10KXRocm93IGU7cmV0dXJuIEwoKX1mb3IoYy5tZXRob2Q9dCxjLmFyZz1lOzspe3ZhciBuPWMuZGVsZWdhdGU7aWYobil7dmFyIHI9TyhuLGMpO2lmKHIpe2lmKHI9PT1tKWNvbnRpbnVlO3JldHVybiByfX1pZihcIm5leHRcIj09PWMubWV0aG9kKWMuc2VudD1jLl9zZW50PWMuYXJnO2Vsc2UgaWYoXCJ0aHJvd1wiPT09Yy5tZXRob2Qpe2lmKHU9PT1oKXRocm93IHU9eSxjLmFyZztjLmRpc3BhdGNoRXhjZXB0aW9uKGMuYXJnKX1lbHNlXCJyZXR1cm5cIj09PWMubWV0aG9kJiZjLmFicnVwdChcInJldHVyblwiLGMuYXJnKTt1PWQ7dmFyIG89ZihhLGksYyk7aWYoXCJub3JtYWxcIj09PW8udHlwZSl7aWYodT1jLmRvbmU/eTpwLG8uYXJnPT09bSljb250aW51ZTtyZXR1cm57dmFsdWU6by5hcmcsZG9uZTpjLmRvbmV9fVwidGhyb3dcIj09PW8udHlwZSYmKHU9eSxjLm1ldGhvZD1cInRocm93XCIsYy5hcmc9by5hcmcpfX0pLHN9ZnVuY3Rpb24gZih0LGUsbil7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOnQuY2FsbChlLG4pfX1jYXRjaCh0KXtyZXR1cm57dHlwZTpcInRocm93XCIsYXJnOnR9fX1hLndyYXA9aTt2YXIgaD1cInN1c3BlbmRlZFN0YXJ0XCIscD1cInN1c3BlbmRlZFlpZWxkXCIsZD1cImV4ZWN1dGluZ1wiLHk9XCJjb21wbGV0ZWRcIixtPXt9O2Z1bmN0aW9uIGcoKXt9ZnVuY3Rpb24gYygpe31mdW5jdGlvbiBsKCl7fXZhciB2PXt9O3Zbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dmFyIHc9T2JqZWN0LmdldFByb3RvdHlwZU9mLGI9dyYmdyh3KFMoW10pKSk7YiYmYiE9PXQmJnMuY2FsbChiLG8pJiYodj1iKTt2YXIgUD1sLnByb3RvdHlwZT1nLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHYpO2Z1bmN0aW9uIHgodCl7W1wibmV4dFwiLFwidGhyb3dcIixcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RbZV09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ludm9rZShlLHQpfX0pfWZ1bmN0aW9uIEModSl7dmFyIGU7dGhpcy5faW52b2tlPWZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gdCgpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LGUpeyFmdW5jdGlvbiBlKHQsbixyLG8pe3ZhciBhPWYodVt0XSx1LG4pO2lmKFwidGhyb3dcIiE9PWEudHlwZSl7dmFyIGk9YS5hcmcsYz1pLnZhbHVlO3JldHVybiBjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmcy5jYWxsKGMsXCJfX2F3YWl0XCIpP1Byb21pc2UucmVzb2x2ZShjLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odCl7ZShcIm5leHRcIix0LHIsbyl9LGZ1bmN0aW9uKHQpe2UoXCJ0aHJvd1wiLHQscixvKX0pOlByb21pc2UucmVzb2x2ZShjKS50aGVuKGZ1bmN0aW9uKHQpe2kudmFsdWU9dCxyKGkpfSxmdW5jdGlvbih0KXtyZXR1cm4gZShcInRocm93XCIsdCxyLG8pfSl9byhhLmFyZyl9KG4scix0LGUpfSl9cmV0dXJuIGU9ZT9lLnRoZW4odCx0KTp0KCl9fWZ1bmN0aW9uIE8odCxlKXt2YXIgbj10Lml0ZXJhdG9yW2UubWV0aG9kXTtpZihuPT09dSl7aWYoZS5kZWxlZ2F0ZT1udWxsLFwidGhyb3dcIj09PWUubWV0aG9kKXtpZih0Lml0ZXJhdG9yLnJldHVybiYmKGUubWV0aG9kPVwicmV0dXJuXCIsZS5hcmc9dSxPKHQsZSksXCJ0aHJvd1wiPT09ZS5tZXRob2QpKXJldHVybiBtO2UubWV0aG9kPVwidGhyb3dcIixlLmFyZz1uZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKX1yZXR1cm4gbX12YXIgcj1mKG4sdC5pdGVyYXRvcixlLmFyZyk7aWYoXCJ0aHJvd1wiPT09ci50eXBlKXJldHVybiBlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9ci5hcmcsZS5kZWxlZ2F0ZT1udWxsLG07dmFyIG89ci5hcmc7cmV0dXJuIG8/by5kb25lPyhlW3QucmVzdWx0TmFtZV09by52YWx1ZSxlLm5leHQ9dC5uZXh0TG9jLFwicmV0dXJuXCIhPT1lLm1ldGhvZCYmKGUubWV0aG9kPVwibmV4dFwiLGUuYXJnPXUpLGUuZGVsZWdhdGU9bnVsbCxtKTpvOihlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9bmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLGUuZGVsZWdhdGU9bnVsbCxtKX1mdW5jdGlvbiBFKHQpe3ZhciBlPXt0cnlMb2M6dFswXX07MSBpbiB0JiYoZS5jYXRjaExvYz10WzFdKSwyIGluIHQmJihlLmZpbmFsbHlMb2M9dFsyXSxlLmFmdGVyTG9jPXRbM10pLHRoaXMudHJ5RW50cmllcy5wdXNoKGUpfWZ1bmN0aW9uIF8odCl7dmFyIGU9dC5jb21wbGV0aW9ufHx7fTtlLnR5cGU9XCJub3JtYWxcIixkZWxldGUgZS5hcmcsdC5jb21wbGV0aW9uPWV9ZnVuY3Rpb24gaih0KXt0aGlzLnRyeUVudHJpZXM9W3t0cnlMb2M6XCJyb290XCJ9XSx0LmZvckVhY2goRSx0aGlzKSx0aGlzLnJlc2V0KCEwKX1mdW5jdGlvbiBTKGUpe2lmKGUpe3ZhciB0PWVbb107aWYodClyZXR1cm4gdC5jYWxsKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUubmV4dClyZXR1cm4gZTtpZighaXNOYU4oZS5sZW5ndGgpKXt2YXIgbj0tMSxyPWZ1bmN0aW9uIHQoKXtmb3IoOysrbjxlLmxlbmd0aDspaWYocy5jYWxsKGUsbikpcmV0dXJuIHQudmFsdWU9ZVtuXSx0LmRvbmU9ITEsdDtyZXR1cm4gdC52YWx1ZT11LHQuZG9uZT0hMCx0fTtyZXR1cm4gci5uZXh0PXJ9fXJldHVybntuZXh0Okx9fWZ1bmN0aW9uIEwoKXtyZXR1cm57dmFsdWU6dSxkb25lOiEwfX1yZXR1cm4gYy5wcm90b3R5cGU9UC5jb25zdHJ1Y3Rvcj1sLGwuY29uc3RydWN0b3I9YyxsW3JdPWMuZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiLGEuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbih0KXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yO3JldHVybiEhZSYmKGU9PT1jfHxcIkdlbmVyYXRvckZ1bmN0aW9uXCI9PT0oZS5kaXNwbGF5TmFtZXx8ZS5uYW1lKSl9LGEubWFyaz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGwpOih0Ll9fcHJvdG9fXz1sLHIgaW4gdHx8KHRbcl09XCJHZW5lcmF0b3JGdW5jdGlvblwiKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShQKSx0fSxhLmF3cmFwPWZ1bmN0aW9uKHQpe3JldHVybntfX2F3YWl0OnR9fSx4KEMucHJvdG90eXBlKSxDLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxhLkFzeW5jSXRlcmF0b3I9QyxhLmFzeW5jPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBvPW5ldyBDKGkodCxlLG4scikpO3JldHVybiBhLmlzR2VuZXJhdG9yRnVuY3Rpb24oZSk/bzpvLm5leHQoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRvbmU/dC52YWx1ZTpvLm5leHQoKX0pfSx4KFApLFBbcl09XCJHZW5lcmF0b3JcIixQW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LFAudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgR2VuZXJhdG9yXVwifSxhLmtleXM9ZnVuY3Rpb24obil7dmFyIHI9W107Zm9yKHZhciB0IGluIG4pci5wdXNoKHQpO3JldHVybiByLnJldmVyc2UoKSxmdW5jdGlvbiB0KCl7Zm9yKDtyLmxlbmd0aDspe3ZhciBlPXIucG9wKCk7aWYoZSBpbiBuKXJldHVybiB0LnZhbHVlPWUsdC5kb25lPSExLHR9cmV0dXJuIHQuZG9uZT0hMCx0fX0sYS52YWx1ZXM9UyxqLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aixyZXNldDpmdW5jdGlvbih0KXtpZih0aGlzLnByZXY9MCx0aGlzLm5leHQ9MCx0aGlzLnNlbnQ9dGhpcy5fc2VudD11LHRoaXMuZG9uZT0hMSx0aGlzLmRlbGVnYXRlPW51bGwsdGhpcy5tZXRob2Q9XCJuZXh0XCIsdGhpcy5hcmc9dSx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChfKSwhdClmb3IodmFyIGUgaW4gdGhpcylcInRcIj09PWUuY2hhckF0KDApJiZzLmNhbGwodGhpcyxlKSYmIWlzTmFOKCtlLnNsaWNlKDEpKSYmKHRoaXNbZV09dSl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIHQ9dGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247aWYoXCJ0aHJvd1wiPT09dC50eXBlKXRocm93IHQuYXJnO3JldHVybiB0aGlzLnJ2YWx9LGRpc3BhdGNoRXhjZXB0aW9uOmZ1bmN0aW9uKG4pe2lmKHRoaXMuZG9uZSl0aHJvdyBuO3ZhciByPXRoaXM7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiBhLnR5cGU9XCJ0aHJvd1wiLGEuYXJnPW4sci5uZXh0PXQsZSYmKHIubWV0aG9kPVwibmV4dFwiLHIuYXJnPXUpLCEhZX1mb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PWU7LS1lKXt2YXIgbz10aGlzLnRyeUVudHJpZXNbZV0sYT1vLmNvbXBsZXRpb247aWYoXCJyb290XCI9PT1vLnRyeUxvYylyZXR1cm4gdChcImVuZFwiKTtpZihvLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgaT1zLmNhbGwobyxcImNhdGNoTG9jXCIpLGM9cy5jYWxsKG8sXCJmaW5hbGx5TG9jXCIpO2lmKGkmJmMpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiB0KG8uY2F0Y2hMb2MsITApO2lmKHRoaXMucHJldjxvLmZpbmFsbHlMb2MpcmV0dXJuIHQoby5maW5hbGx5TG9jKX1lbHNlIGlmKGkpe2lmKHRoaXMucHJldjxvLmNhdGNoTG9jKXJldHVybiB0KG8uY2F0Y2hMb2MsITApfWVsc2V7aWYoIWMpdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7aWYodGhpcy5wcmV2PG8uZmluYWxseUxvYylyZXR1cm4gdChvLmZpbmFsbHlMb2MpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PW47LS1uKXt2YXIgcj10aGlzLnRyeUVudHJpZXNbbl07aWYoci50cnlMb2M8PXRoaXMucHJldiYmcy5jYWxsKHIsXCJmaW5hbGx5TG9jXCIpJiZ0aGlzLnByZXY8ci5maW5hbGx5TG9jKXt2YXIgbz1yO2JyZWFrfX1vJiYoXCJicmVha1wiPT09dHx8XCJjb250aW51ZVwiPT09dCkmJm8udHJ5TG9jPD1lJiZlPD1vLmZpbmFsbHlMb2MmJihvPW51bGwpO3ZhciBhPW8/by5jb21wbGV0aW9uOnt9O3JldHVybiBhLnR5cGU9dCxhLmFyZz1lLG8/KHRoaXMubWV0aG9kPVwibmV4dFwiLHRoaXMubmV4dD1vLmZpbmFsbHlMb2MsbSk6dGhpcy5jb21wbGV0ZShhKX0sY29tcGxldGU6ZnVuY3Rpb24odCxlKXtpZihcInRocm93XCI9PT10LnR5cGUpdGhyb3cgdC5hcmc7cmV0dXJuXCJicmVha1wiPT09dC50eXBlfHxcImNvbnRpbnVlXCI9PT10LnR5cGU/dGhpcy5uZXh0PXQuYXJnOlwicmV0dXJuXCI9PT10LnR5cGU/KHRoaXMucnZhbD10aGlzLmFyZz10LmFyZyx0aGlzLm1ldGhvZD1cInJldHVyblwiLHRoaXMubmV4dD1cImVuZFwiKTpcIm5vcm1hbFwiPT09dC50eXBlJiZlJiYodGhpcy5uZXh0PWUpLG19LGZpbmlzaDpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PWU7LS1lKXt2YXIgbj10aGlzLnRyeUVudHJpZXNbZV07aWYobi5maW5hbGx5TG9jPT09dClyZXR1cm4gdGhpcy5jb21wbGV0ZShuLmNvbXBsZXRpb24sbi5hZnRlckxvYyksXyhuKSxtfX0sY2F0Y2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTswPD1lOy0tZSl7dmFyIG49dGhpcy50cnlFbnRyaWVzW2VdO2lmKG4udHJ5TG9jPT09dCl7dmFyIHI9bi5jb21wbGV0aW9uO2lmKFwidGhyb3dcIj09PXIudHlwZSl7dmFyIG89ci5hcmc7XyhuKX1yZXR1cm4gb319dGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpfSxkZWxlZ2F0ZVlpZWxkOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5kZWxlZ2F0ZT17aXRlcmF0b3I6Uyh0KSxyZXN1bHROYW1lOmUsbmV4dExvYzpufSxcIm5leHRcIj09PXRoaXMubWV0aG9kJiYodGhpcy5hcmc9dSksbX19LGF9KHQuZXhwb3J0cyk7dHJ5e3JlZ2VuZXJhdG9yUnVudGltZT1yfWNhdGNoKHQpe0Z1bmN0aW9uKFwiclwiLFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShyKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9bigwKSxvPW4ubihyKSxhPW4oMSksaT1uLm4oYSksYz1uKDIpLHU9bi5uKGMpLHM9e2Vudmlyb25tZW50OlwiVEVTVFwiLGJ1dHRvbkNvbG9yOlwid2hpdGVcIixiYXNlUmVxdWVzdDp7YXBpVmVyc2lvbjoyLGFwaVZlcnNpb25NaW5vcjowfSxhbGxvd2VkQ2FyZE5ldHdvcmtzOltcIkFNRVhcIixcIkRJU0NPVkVSXCIsXCJJTlRFUkFDXCIsXCJKQ0JcIixcIk1BU1RFUkNBUkRcIixcIlZJU0FcIl0sYWxsb3dlZENhcmRBdXRoTWV0aG9kczpbXCJQQU5fT05MWVwiLFwiQ1JZUFRPR1JBTV8zRFNcIl0sbWVyY2hhbnRJbmZvOnttZXJjaGFudE5hbWU6XCJFeGFtcGxlIE1lcmNoYW50XCIsbWVyY2hhbnRJZDpcIjAxMjM0NTY3ODlcIn0sdHJhbnNhY3Rpb25JbmZvOnt0b3RhbFByaWNlU3RhdHVzOlwiRklOQUxcIix0b3RhbFByaWNlOlwiMS4wMFwiLGN1cnJlbmN5Q29kZTpcIlVTRFwiLGNvdW50cnlDb2RlOlwiVVNcIn0sdG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbjp7dHlwZTpcIlBBWU1FTlRfR0FURVdBWVwiLHBhcmFtZXRlcnM6e2dhdGV3YXk6XCJleGFtcGxlXCIsZ2F0ZXdheU1lcmNoYW50SWQ6XCJleGFtcGxlR2F0ZXdheU1lcmNoYW50SWRcIn19LGJhc2VDYXJkUGF5bWVudE1ldGhvZDp7dHlwZTpcIkNBUkRcIixwYXJhbWV0ZXJzOnthbGxvd2VkQXV0aE1ldGhvZHM6W1wiUEFOX09OTFlcIixcIkNSWVBUT0dSQU1fM0RTXCJdLGFsbG93ZWRDYXJkTmV0d29ya3M6W1wiQU1FWFwiLFwiRElTQ09WRVJcIixcIklOVEVSQUNcIixcIkpDQlwiLFwiTUFTVEVSQ0FSRFwiLFwiVklTQVwiXX19LGNhcmRQYXltZW50TWV0aG9kOm51bGwscGF5bWVudERhdGFSZXF1ZXN0OntiYXNlUmVxdWVzdDp7YXBpVmVyc2lvbjoyLGFwaVZlcnNpb25NaW5vcjowfSxhbGxvd2VkUGF5bWVudE1ldGhvZHM6bnVsbCx0cmFuc2FjdGlvbkluZm86e3RvdGFsUHJpY2VTdGF0dXM6XCJGSU5BTFwiLHRvdGFsUHJpY2U6XCIxLjAwXCIsY3VycmVuY3lDb2RlOlwiVVNEXCIsY291bnRyeUNvZGU6XCJVU1wifSxtZXJjaGFudEluZm86e21lcmNoYW50TmFtZTpcIkV4YW1wbGUgTWVyY2hhbnRcIixtZXJjaGFudElkOlwiMDEyMzQ1Njc4OVwifX19O2Z1bmN0aW9uIGwoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihyPXIuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn12YXIgZj1mdW5jdGlvbih0LGUsbixyLG8sYSxpLGMpe3ZhciB1LHM9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Lm9wdGlvbnM6dDtpZihlJiYocy5yZW5kZXI9ZSxzLnN0YXRpY1JlbmRlckZucz1uLHMuX2NvbXBpbGVkPSEwKSxyJiYocy5mdW5jdGlvbmFsPSEwKSxhJiYocy5fc2NvcGVJZD1cImRhdGEtdi1cIithKSxpPyh1PWZ1bmN0aW9uKHQpeyh0PXR8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCl8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwodD1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxvJiZvLmNhbGwodGhpcyx0KSx0JiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cyYmdC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKGkpfSxzLl9zc3JSZWdpc3Rlcj11KTpvJiYodT1jP2Z1bmN0aW9uKCl7by5jYWxsKHRoaXMsdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KX06byksdSlpZihzLmZ1bmN0aW9uYWwpe3MuX2luamVjdFN0eWxlcz11O3ZhciBsPXMucmVuZGVyO3MucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHUuY2FsbChlKSxsKHQsZSl9fWVsc2V7dmFyIGY9cy5iZWZvcmVDcmVhdGU7cy5iZWZvcmVDcmVhdGU9Zj9bXS5jb25jYXQoZix1KTpbdV19cmV0dXJue2V4cG9ydHM6dCxvcHRpb25zOnN9fSh7cHJvcHM6e2lkOnt0eXBlOlN0cmluZyxyZXF1aXJlZDohMSxkZWZhdWx0OlwiZ29vZ2xlLXBheS1idXR0b25cIn0sb3B0aW9uczp7dHlwZTpPYmplY3QscmVxdWlyZWQ6ITAsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBzfX19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/bChPYmplY3QobiksITApLmZvckVhY2goZnVuY3Rpb24odCl7dSgpKGUsdCxuW3RdKX0pOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOmwoT2JqZWN0KG4pKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pfXJldHVybiBlfSh7fSxzLHtjYXJkUGF5bWVudE1ldGhvZDpudWxsLHBheW1lbnRzQ2xpZW50Om51bGx9KX0sbW91bnRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGkoKShvLmEubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIG8uYS53cmFwKGZ1bmN0aW9uKHQpe2Zvcig7Oylzd2l0Y2godC5wcmV2PXQubmV4dCl7Y2FzZSAwOnJldHVybiB0Lm5leHQ9MixlLmFzc2lnblZhcnMoKTtjYXNlIDI6dC5zZW50JiZlLmluamVjdEdvb2dsZVBheVNjcmlwdCgpO2Nhc2UgNDpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfSxtZXRob2RzOnthc3NpZ25WYXJzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gaSgpKG8uYS5tYXJrKGZ1bmN0aW9uIHQoKXtyZXR1cm4gby5hLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6cmV0dXJuIE9iamVjdC5hc3NpZ24oZSxlLm9wdGlvbnMpLHQubmV4dD0zLGUuJG5leHRUaWNrKCk7Y2FzZSAzOnJldHVybiB0LmFicnVwdChcInJldHVyblwiLHQuc2VudCk7Y2FzZSA0OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9LGluamVjdEdvb2dsZVBheVNjcmlwdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYoIXRoaXMucGF5bWVudHNDbGllbnQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImh0dHBzOi8vcGF5Lmdvb2dsZS5jb20vZ3AvcC9qcy9wYXkuanNcIiksZS5zZXRBdHRyaWJ1dGUoXCJhc3luY1wiLCEwKSxlLnNldEF0dHJpYnV0ZShcImRlZmVyXCIsITApLGUub25sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIHQub25Hb29nbGVQYXlMb2FkZWQoKX0sZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlKX19LGluaXRQYXltZW50c1ZhcnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBpKCkoby5hLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBvLmEud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpyZXR1cm4gZS5jYXJkUGF5bWVudE1ldGhvZD1PYmplY3QuYXNzaWduKHt9LGUuYmFzZUNhcmRQYXltZW50TWV0aG9kLHt0b2tlbml6YXRpb25TcGVjaWZpY2F0aW9uOmUudG9rZW5pemF0aW9uU3BlY2lmaWNhdGlvbn0pLHQubmV4dD0zLGUuJG5leHRUaWNrKCk7Y2FzZSAzOnJldHVybiB0LmFicnVwdChcInJldHVyblwiLHQuc2VudCk7Y2FzZSA0OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9LGdldEdvb2dsZUlzUmVhZHlUb1BheVJlcXVlc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx0aGlzLmJhc2VSZXF1ZXN0LHthbGxvd2VkUGF5bWVudE1ldGhvZHM6W3RoaXMuYmFzZUNhcmRQYXltZW50TWV0aG9kXX0pfSxnZXRHb29nbGVQYXltZW50c0NsaWVudDpmdW5jdGlvbigpe3JldHVybiBudWxsPT09dGhpcy5wYXltZW50c0NsaWVudCYmKHRoaXMucGF5bWVudHNDbGllbnQ9bmV3IGdvb2dsZS5wYXltZW50cy5hcGkuUGF5bWVudHNDbGllbnQoe2Vudmlyb25tZW50OnRoaXMuZW52aXJvbm1lbnR9KSksdGhpcy5wYXltZW50c0NsaWVudH0sYWRkR29vZ2xlUGF5QnV0dG9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMucGF5bWVudHNDbGllbnQuY3JlYXRlQnV0dG9uKHtvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuZ29vZ2xlUGF5QnV0dG9uQ2xpY2soKX0sYnV0dG9uQ29sb3I6dGhpcy5idXR0b25Db2xvcn0pO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmFwcGVuZENoaWxkKGUpfSxvbkdvb2dsZVBheUxvYWRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGkoKShvLmEubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIG8uYS53cmFwKGZ1bmN0aW9uKHQpe2Zvcig7Oylzd2l0Y2godC5wcmV2PXQubmV4dCl7Y2FzZSAwOnJldHVybiB0Lm5leHQ9MixlLmluaXRQYXltZW50c1ZhcnMoKTtjYXNlIDI6dC5zZW50JiZlLmdldEdvb2dsZVBheW1lbnRzQ2xpZW50KCkuaXNSZWFkeVRvUGF5KGUuZ2V0R29vZ2xlSXNSZWFkeVRvUGF5UmVxdWVzdCgpKS50aGVuKGZ1bmN0aW9uKHQpe3QucmVzdWx0JiZlLmFkZEdvb2dsZVBheUJ1dHRvbigpfSkuY2F0Y2goZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcih0KX0pO2Nhc2UgNDpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfSxnZXRHb29nbGVQYXltZW50RGF0YVJlcXVlc3Q6ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMuYmFzZVJlcXVlc3QpO3JldHVybiB0LmFsbG93ZWRQYXltZW50TWV0aG9kcz1bdGhpcy5jYXJkUGF5bWVudE1ldGhvZF0sdC50cmFuc2FjdGlvbkluZm89dGhpcy50cmFuc2FjdGlvbkluZm8sdC5tZXJjaGFudEluZm89e21lcmNoYW50SWQ6dGhpcy5tZXJjaGFudEluZm8ubWVyY2hhbnRJZCxtZXJjaGFudE5hbWU6dGhpcy5tZXJjaGFudEluZm8ubWVyY2hhbnROYW1lfSx0fSxnb29nbGVQYXlCdXR0b25DbGljazpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLmdldEdvb2dsZVBheW1lbnREYXRhUmVxdWVzdCgpO3QudHJhbnNhY3Rpb25JbmZvPXRoaXMudHJhbnNhY3Rpb25JbmZvLHRoaXMuZ2V0R29vZ2xlUGF5bWVudHNDbGllbnQoKS5sb2FkUGF5bWVudERhdGEodCkudGhlbihmdW5jdGlvbih0KXtlLiRlbWl0KFwicGF5ZWRcIix0KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IodCksXCJDQU5DRUxFRFwiPT09dC5zdGF0dXNDb2RlJiZlLiRlbWl0KFwiY2FuY2VsXCIpfSl9fX0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRjcmVhdGVFbGVtZW50O3JldHVybih0aGlzLl9zZWxmLl9jfHx0KShcImRpdlwiLHthdHRyczp7aWQ6dGhpcy5pZH19KX0sW10sITEsbnVsbCxudWxsLG51bGwpLmV4cG9ydHM7ZS5kZWZhdWx0PWZ9XSxvLmM9cixvLmQ9ZnVuY3Rpb24odCxlLG4pe28ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LG8ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxvLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW8oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihvLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpby5kKG4scixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gbn0sby5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBvLmQoZSxcImFcIixlKSxlfSxvLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG8ucD1cIi9kaXN0L1wiLG8oby5zPTQpO2Z1bmN0aW9uIG8odCl7aWYoclt0XSlyZXR1cm4gclt0XS5leHBvcnRzO3ZhciBlPXJbdF09e2k6dCxsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3RdLmNhbGwoZS5leHBvcnRzLGUsZS5leHBvcnRzLG8pLGUubD0hMCxlLmV4cG9ydHN9dmFyIG4scn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5bWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGVjZTgyODkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlY2U4Mjg5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlY2U4Mjg5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlY2U4Mjg5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYXltZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWNlODI4OSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZWNlODI4OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvcGF5bWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BheW1lbnRfZGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNmODBmYTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGF5bWVudF9kZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGF5bWVudF9kZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWNmODBmYTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjZjgwZmE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjZjgwZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjZjgwZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYXltZW50X2RldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZjgwZmE0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjZjgwZmE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9wYXltZW50X2RldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFkYTkyNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDRhZGE5MjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDRhZGE5MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDRhZGE5MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWRhOTI2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ0YWRhOTI2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXBwbGVfcGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTkyYjY4MSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hcHBsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHBsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzYTkyYjY4MVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2E5MmI2ODEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2E5MmI2ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2E5MmI2ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcGxlX3BheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2E5MmI2ODEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2E5MmI2ODEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvYXBwbGVfcGF5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmx1dHRlcl93YXZlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZWVlYThlZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mbHV0dGVyX3dhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mbHV0dGVyX3dhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZWVlYThlZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2VlZWE4ZWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2VlZWE4ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2VlZWE4ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZsdXR0ZXJfd2F2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2VlZWE4ZWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2VlZWE4ZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvZmx1dHRlcl93YXZlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZ29vZ2xlX3BheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGIwNjhlNTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ29vZ2xlX3BheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4YjA2OGU1OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGIwNjhlNTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGIwNjhlNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGIwNjhlNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiMDY4ZTU4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhiMDY4ZTU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL2dvb2dsZV9wYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ra2lhcGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmY3OWU2ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ra2lhcGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4va2tpYXBheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY2Zjc5ZTZlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NmY3OWU2ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NmY3OWU2ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NmY3OWU2ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4va2tpYXBheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmNzllNmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjZmNzllNmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMva2tpYXBheS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21pZHRyYW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OWUzYzgxMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9taWR0cmFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21pZHRyYW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTllM2M4MTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU5ZTNjODEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU5ZTNjODEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU5ZTNjODEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9taWR0cmFucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTllM2M4MTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTllM2M4MTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvbWlkdHJhbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9vZmZsaW5lX21ldGhvZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNiNDcxMjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb2ZmbGluZV9tZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9vZmZsaW5lX21ldGhvZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZjYjQ3MTIyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Y2I0NzEyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Y2I0NzEyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Y2I0NzEyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vb2ZmbGluZV9tZXRob2QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjYjQ3MTIyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZjYjQ3MTIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXltZW50X3BhcnRpYWxzL29mZmxpbmVfbWV0aG9kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5cGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzNjNmFhNSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXlwYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXlwYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MzNjNmFhNVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTMzYzZhYTUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTMzYzZhYTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTMzYzZhYTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BheXBhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTMzYzZhYTUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTMzYzZhYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BheW1lbnRfcGFydGlhbHMvcGF5cGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5c3RhY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YmQ2Y2RjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGF5c3RhY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwN2JkNmNkY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdiZDZjZGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdiZDZjZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdiZDZjZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2JkNmNkYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2JkNmNkYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGF5bWVudF9wYXJ0aWFscy9wYXlzdGFjay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXltZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXltZW50X2RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5bWVudF9kZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGxlX3BheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHBsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZsdXR0ZXJfd2F2ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mbHV0dGVyX3dhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2dsZV9wYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ29vZ2xlX3BheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4va2tpYXBheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ra2lhcGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9taWR0cmFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9taWR0cmFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2ZmbGluZV9tZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2ZmbGluZV9tZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXBhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlwYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXltZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWNlODI4OSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHBsZV9wYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhOTJiNjgxJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZsdXR0ZXJfd2F2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2VlZWE4ZWUmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ29vZ2xlX3BheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGIwNjhlNTgmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4va2tpYXBheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmNzllNmUmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWlkdHJhbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ZTNjODEyJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29mZmxpbmVfbWV0aG9kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2I0NzEyMiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlwYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzM2M2YWE1JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXN0YWNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2JkNmNkYyZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctcGFnZS1jb250ZW50XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctYnJlYWRjcnVtYlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcIm9sXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJjYXJ0XCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnZpZXdfY2FydCkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJjaGVja291dFwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5jaGVja19vdXQpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5jb25maXJtX29yZGVyKSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJzaG9wcGluZy1jYXJ0XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLmxlbmd0aENvdW50ZXIoX3ZtLnNldHRpbmdzKSA+IDBcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBwbC1sZy01XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctc2hpcHBpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheW1lbnRfbWV0aG9kKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdCBncmlkLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19wYXlwYWxfYWN0aXZhdGVkID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5wYXlwYWxfa2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInBheXBhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGF5cGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXlwYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcGF5cGFsLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJwYXlwYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfcGF5UGFsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfc3RyaXBlX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInN0cmlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwic3RyaXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJzdHJpcGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2Qvc3RyaXBlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJzdHJpcGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfc3RyaXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfc3NsY29tbWVyel9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzc2xfY29tbWVyemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInNzbF9jb21tZXJ6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3NsX2NvbW1lcnplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3NsX2NvbW1lcnplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJzc2xfY29tbWVyemVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9zc2xjb21tZXJ6ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInNzbGNvbW1lcnplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3NTTENPTU1FUlpFKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX3BheXRtX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBheXRtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJwYXl0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5dG1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXl0bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInBheXRtXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3BheXRtLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJwYXl0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9wYXl0bSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX3Jhem9ycGF5X2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJhem9yX3BheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmF6b3JfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXpvcl9wYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXpvcl9wYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmludGVncmF0ZVJhem9yUGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJyYXpvcl9wYXlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvcmF6b3JwYXkuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInJhem9ycGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3Jhem9ycGF5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfamF6el9jYXNoX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImphenpDYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJqYXp6X2Nhc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImphenpfY2FzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImphenpfY2FzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImphenpDYXNoXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2phenpDYXNoLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJqYXp6X2Nhc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfamF6ekNhc2gpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19tb2xsaWVfYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibW9sbGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJtb2xsaWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vbGxpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vbGxpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1vbGxpZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9tb2xsaWUuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIm1vbGxpZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9tb2xsaWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19wYXlzdGFja19hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwYXlzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicGF5c3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheXN0YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5c3RhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXlzdGFja1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9wYXltZW50LW1ldGhvZC9wYXlzdGFjay5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwicGF5c3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfcGF5c3RhY2spICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19mbHV0dGVyd2F2ZV9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmbHV0dGVyX3dhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImZsdXR0ZXJfd2F2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmx1dHRlcl93YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmx1dHRlcl93YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogXCJmbHV0dGVyX3dhdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZncuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJmbHV0dGVyX3dhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfZmx1dHRlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19tZXJjYWRvX3BhZ29fYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWVyY2Fkb3BhZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1lcmNhZG9wYWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXJjYWRvcGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lcmNhZG9wYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWVyY2Fkb3BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvbWVyY2Fkby1wYWdvLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJtZXJjYWRvcGFnb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX21lcmNhZG9wYWdvKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfbWlkX3RyYW5zX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtaWRfdHJhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1pZF90cmFuc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWlkX3RyYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWlkX3RyYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWlkX3RyYW5zXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL21pZHRyYW5zLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJtaWRfdHJhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9taWRfdHJhbnMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc190ZWxyX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0ZWxyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0ZWxyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRlbHJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvdGVsci5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwidGVsclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3RlbHIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19nb29nbGVfcGF5X2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJnb29nbGVfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJnb29nbGVfcGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnb29nbGVfcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ29vZ2xlX3BheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImdvb2dsZV9wYXlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvZ29vZ2xlX3BheS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiZ29vZ2xlX3BheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX2dvb2dsZV9wYXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19ia2FzaF9hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYmthc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImJrYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJia2FzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJrYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiYmthc2hcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvYkthc2guc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImJrYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfYmthc2gpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19uYWdhZF9hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmFnYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm5hZ2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYWdhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hZ2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFnYWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvbmFnYWQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIm5hZ2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfbmFnYWQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19hbWFycGF5X2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhbWFycGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbWFycGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbWFycGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1hcnBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmF6b3JQYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImFtYXJwYXlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYy9pbWFnZXMvcGF5bWVudC1tZXRob2QvYW1hcnBheS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYWFtYXJwYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9hbWFycGF5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfc2tyaWxsX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJza3JpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInNrcmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2tyaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2tyaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwic2tyaWxsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3NrcmlsbC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwic2tyaWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfc2tyaWxsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfaXl6aWNvX2FjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpeXppY29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIml5emljb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXl6aWNvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXl6aWNvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiaXl6aWNvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2l5emljby5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaXl6aWNvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfaXl6aWNvKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfa2tpYXBheV9hY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwia2tpYXBheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwia2tpYXBheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2tpYXBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtraWFwYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJra2lhcGF5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2traWFwYXkuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImtraWFwYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9ra2lhcGF5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmNvZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5wYXlfbGF0ZXJfc3lzdGVtID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwYXlfbGF0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInBheV9sYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5X2xhdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5X2xhdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yYXpvclBheVJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicGF5X2xhdGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL3BheWxhdGVyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheV9sYXRlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS50b3RhbCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uY29kZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5jaGVja19jb2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY2FzaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY2FzaF9vbl9kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FzaF9vbl9kZWxpdmVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF5bWVudF90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhc2hfb25fZGVsaXZlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhem9yUGF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjYXNoXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL3BheW1lbnQtbWV0aG9kL2Nhc2guc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuY2FzaF9vbl9kZWxpdmVyeSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5vZmZsaW5lX21ldGhvZHMsIGZ1bmN0aW9uIChvZmZsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIV92bS5jb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZG9ucy5pbmNsdWRlcyhcIm9mZmxpbmVfcGF5bWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfZm9ybS5wYXltZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm9mZmxpbmVcIiArIG9mZmxpbmUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9mZmxpbmVfbWV0aG9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZsaW5lX21ldGhvZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZmxpbmVfbWV0aG9kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub2ZmbGluZUNoZWNrKG9mZmxpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcIm9mZmxpbmVcIiArIG9mZmxpbmUuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9mZmxpbmUuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib2ZmbGluZS5pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsdDogb2ZmbGluZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9mZmxpbmUubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnRvdGFsID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmJhbGFuY2UgPj0gX3ZtLnBheW1lbnRfZm9ybS50b3RhbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3Mud2FsbGV0X3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXBhcmF0b3IgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHB4LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wYWNpdHktNjBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5vcikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy55b3VyX3dhbGxldF9iYWxhbmNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KF92bS5hdXRoVXNlci5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS53YWxsZXRfbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGF5bWVudChcIndhbGxldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGhfd2FsbGV0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53YWxsZXRfbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibG9hZGluZ19idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NfbmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLnNoaW1tZXJcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04XCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24gKHBheW1lbnQsIGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInNoaW1tZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiAyMDAgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNCBwbC1sZy01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcmRlci1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg2XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnByaWNlX2RldGFpbHMpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2ctY2FyZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmF1dGhVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFVybChcInVzZXIvY29tcGxldGUtb3JkZXI/Y29kZT1cIiArIF92bS5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXIvY29tcGxldGUtb3JkZXI/Y29kZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImZ3Vlc3Q9MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50b2tlbiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInRyeF9pZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRyeF9pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInBheW1lbnRfdHlwZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJhbW91bnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXltZW50X2Zvcm0udG90YWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInJhem9yX3BheVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXltZW50X2RldGFpbHNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX3RvdGFsOiBfdm0ucGF5bWVudF9mb3JtLnN1Yl90b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4OiBfdm0ucGF5bWVudF9mb3JtLnRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRfb2ZmZXI6IF92bS5wYXltZW50X2Zvcm0uZGlzY291bnRfb2ZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX3RheDogX3ZtLnBheW1lbnRfZm9ybS5zaGlwcGluZ190YXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9kaXNjb3VudDogX3ZtLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0ucGF5bWVudF9mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgKF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiY2FzaF9vbl9kZWxpdmVyeVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwicGF5X2xhdGVyXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc19uYW1lOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInN0cmlwZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaXBlL3JlZGlyZWN0P3RyeF9pZD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJ0c1swXS50cnhfaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZjb2RlPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGRpc2FibGVfYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInBheXRtXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyL3BheW1lbnQvcGF5dG1SZWRpcmVjdD90cnhfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FydHNbMF0udHJ4X2lkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImY29kZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUucGFyYW1zLmNvZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZwYXltZW50X3R5cGU9cGF5dG1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJzc2xfY29tbWVyemVcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC9zc2wtcmVzcG9uc2U/cGF5bWVudF90eXBlPXNzbF9jb21tZXJ6ZSZjb2RlPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuY29kZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnRyeF9pZD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJ0c1swXS50cnhfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiY2FzaF9vbl9kZWxpdmVyeVwiIHx8XG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInBheV9sYXRlclwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wYXltZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuY29uZmlybSkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ub2ZmbGluZV9tZXRob2RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICFfdm0uY29kZSAmJlxuICAgICAgICAgICAgICAgICAgX3ZtLmFkZG9ucy5pbmNsdWRlcyhcIm9mZmxpbmVfcGF5bWVudFwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwib2ZmbGluZV9tZXRob2RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBfdm0uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0ucGF5bWVudF9mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZsaW5lX21ldGhvZDogX3ZtLm9mZmxpbmVfbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcIm1vbGxpZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9sbGllL3BheW1lbnQ/Y29kZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUucGFyYW1zLmNvZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZ0cnhfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FydHNbMF0udHJ4X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJ0ZWxyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxyL3JlZGlyZWN0P2NvZGU9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHJ4X2lkPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcnRzWzBdLnRyeF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwicGF5c3RhY2tcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjcGF5c3RhY2tfbW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfZmx1dHRlcndhdmVfYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImZsdXR0ZXJfd2F2ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmx1dHRlcl93YXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnhfaWQ6IF92bS50cnhfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IF92bS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IF92bS5wYXltZW50X2Zvcm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwibWVyY2Fkb3BhZ29cIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lcmNhZG9wYWdvL3JlZGlyZWN0P2NvZGU9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHJ4X2lkPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcnRzWzBdLnRyeF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJnb29nbGVfcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImdvb2dsZV9wYXlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBfdm0uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0ucGF5bWVudF9mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiYW1hcnBheVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1hcnBheS9yZWRpcmVjdD9jb2RlPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuY29kZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnRyeF9pZD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJ0c1swXS50cnhfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlID09IFwiYmthc2hcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5nZXRVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJrYXNoL3JlZGlyZWN0P2NvZGU9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHJ4X2lkPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcnRzWzBdLnRyeF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJuYWdhZFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFnYWQvcmVkaXJlY3Q/Y29kZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUucGFyYW1zLmNvZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZ0cnhfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FydHNbMF0udHJ4X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInNrcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2tyaWxsL3JlZGlyZWN0P2NvZGU9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImdHJ4X2lkPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcnRzWzBdLnRyeF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2traWFwYXlfYWN0aXZhdGVkICYmXG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3Mua2tpYXBheV9wdWJsaWNfa2V5ICYmXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcImtraWFwYXlcIiAmJlxuICAgICAgICAgICAgICAgICAgX3ZtLnhvZlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwia2tpYXBheVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnhfaWQ6IF92bS50cnhfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IF92bS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IF92bS5wYXltZW50X2Zvcm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhvZjogX3ZtLnhvZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19wYXlwYWxfYWN0aXZhdGVkID09IDEgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5wYXlwYWxfa2V5ICYmXG4gICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLnBheW1lbnRfdHlwZSA9PSBcInBheXBhbFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwYXlwYWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4X2lkOiBfdm0udHJ4X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBfdm0uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0ucGF5bWVudF9mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU6IF92bS5wYXltZW50X2Zvcm0ucGF5bWVudF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwianNmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5qYXp6X3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5qYXp6X2RhdGEsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IG5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUgPT0gXCJqYXp6X2Nhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IFwicGF5c3RhY2tfbW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicGF5c3RhY2tfbW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV93aXRoX3BheXN0YWNrKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfcGF5c3RhY2tfYWN0aXZhdGVkID09IDFcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJwYXlzdGFja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeF9pZDogX3ZtLnRyeF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheXN0YWNrX2tleTogX3ZtLnNldHRpbmdzLnBheXN0YWNrX3BrLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmduX2V4Y2hhbmdlX3JhdGU6IF92bS5zZXR0aW5ncy5uZ25fZXhjaGFuZ2VfcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IF92bS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBfdm0ucGF5bWVudF9mb3JtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnBheW1lbnRfZm9ybS5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBtb2RhbF9jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLWxpc3RcIiB9LCBbXG4gICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zdWJ0b3RhbCkgKyBcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLnN1Yl90b3RhbCkpKV0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNldHRpbmdzLnRheF90eXBlID09IFwiYmVmb3JlX3RheFwiIHx8XG4gICAgICBfdm0uc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSBcInByb2R1Y3RfYmFzZVwiXG4gICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRheCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50YXgpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmRpc2NvdW50KSksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLmRpc2NvdW50X29mZmVyKSkpXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2V0dGluZ3Muc2hpcHBpbmdfY29zdCAhPSBcImFyZWFfYmFzZVwiIHx8IF92bS4kcm91dGUubmFtZSAhPSBcImNhcnRcIlxuICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19jb3N0KSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5zaGlwcGluZ190YXgpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zZXR0aW5ncy5jb3Vwb25fc3lzdGVtID09IDFcbiAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuY291cG9uX2Rpc2NvdW50KSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5jb3Vwb25fZGlzY291bnQpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNldHRpbmdzLnRheF90eXBlID09IFwiYWZ0ZXJfdGF4XCIgJiZcbiAgICBfdm0uc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSBcIm9yZGVyX2Jhc2VcIlxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnRfd2VpZ2h0XzQwMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcudG90YWwpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcmljZUZvcm1hdChfdm0udG90YWwgLSBfdm0udGF4KSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb250X3dlaWdodF80MDBcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRheCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50YXgpKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImdyYW5kX3RvdGFsX3N0eWxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5ncmFuZF90b3RhbCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50b3RhbCkpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRvdGFsKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLnRvdGFsKSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaW1nXCIsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaGltbWVyXCIsXG4gICAgc3R5bGU6IFtfdm0uaGVpZ2h0ID8gX3ZtLnN0eWxlIDogbnVsbF0sXG4gICAgYXR0cnM6IHtcbiAgICAgIHNyYzogX3ZtLmdldFVybChcInB1YmxpYy9pbWFnZXMvZGVmYXVsdC9wcmV2aWV3LmpwZ1wiKSxcbiAgICAgIGFsdDogXCJzaGltbWVyXCIsXG4gICAgfSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcGxlLXBheS1idXR0b25cIiB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0udHlwZSA9PSBcImZsdXR0ZXJfd2F2ZVwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICBcImRhdGEtYnMtdGFyZ2V0XCI6IFwiI2Z3X21vZGFsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5wYXlfbm93KSldXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJmd19tb2RhbFwiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJmd19tb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wYXlfd2l0aF9mbHV0dGVyKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgZmx1dHRlcl93YXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhdGVQb3B1cCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLmFtb3VudCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBtb2RhbF9jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZ29vZ2xlXCIsIHtcbiAgICBhdHRyczogeyBpZDogXCJnb29nbGUtcGF5LWJ0blwiLCBvcHRpb25zOiBfdm0ub3B0aW9ucyB9LFxuICAgIG9uOiB7XG4gICAgICBwYXllZDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICByZXR1cm4gX3ZtLnBheWVkKClcbiAgICAgIH0sXG4gICAgICBjYW5jZWw6IF92bS5jYW5jZWxsZWQsXG4gICAgfSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbWVcIiB9LCBbXG4gICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkga2tpYXBheS1idXR0b25cIiB9LCBbXG4gICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIGlkOiBcInBheS1idXR0b25cIiB9LFxuICAgIH0sXG4gICAgW192bS5fdihcIlxcbiAgXCIgKyBfdm0uX3MoX3ZtLmxhbmcucGF5X25vdykpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5vZmZsaW5lX21ldGhvZC5uYW1lXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjb2ZmbGluZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBheV9ub3cpKV1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcIm9mZmxpbmVcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwib2ZmbGluZV9tb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucGF5X3dpdGgpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vZmZsaW5lX21ldGhvZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy51cGxvYWRfZmlsZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZSBkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2UgZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwidXBsb2FkLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBpZDogXCJ1cGxvYWQtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmltYWdlVXAoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBhdHRyczogeyBpZDogXCJ1cGxvYWQtaW1hZ2VcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy51cGxvYWRfZmlsZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlIHVwbG9hZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwidXBsb2FkLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBpZDogXCJ1cGxvYWQtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmltYWdlVXAoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL290aGVycy9lbnYuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFVybCgncHVibGljL2ltYWdlcy9vdGhlcnMvZW52LnN2ZycpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsdDogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnVwbG9hZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ub2ZmbGluZV9tZXRob2QuaW5zdHJ1Y3Rpb25zXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmluc3RydWN0aW9ucykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnN0cnVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5vZmZsaW5lX21ldGhvZC5pbnN0cnVjdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC1jZW50ZXIgbXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbG9hZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnByb2NlZWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc19uYW1lOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBtb2RhbF9jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICB2YWx1ZTogX3ZtLnBheW1lbnRfdHlwZSA9PSBcInBheXBhbFwiLFxuICAgICAgICBleHByZXNzaW9uOiBcInBheW1lbnRfdHlwZSA9PSAncGF5cGFsJ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHJlZjogXCJwYXlwYWxcIixcbiAgICBzdGF0aWNDbGFzczogXCJteC1hdXRvIHdfNDBcIixcbiAgICBhdHRyczogeyBpZDogXCJwYXlwYWwtYnV0dG9uLWNvbnRhaW5lclwiIH0sXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5sYW5nLm5hbWUsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5lbWFpbCwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVtYWlsIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGhvbmUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZWxcIiwgcGxhY2Vob2xkZXI6IF92bS5sYW5nLnBob25lLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5waG9uZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInBheXN0YWNrXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IHsgb3ZlcmxheV9idG46ICFfdm0ubmFtZSB8fCAhX3ZtLmVtYWlsIHx8ICFfdm0ucGhvbmUgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGFtb3VudDogX3ZtLnJvdW5kKFxuICAgICAgICAgICAgICAgIF92bS5hbW91bnQgKiAxMDAgKiBfdm0uYWN0aXZlQ3VycmVuY3kuZXhjaGFuZ2VfcmF0ZVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBlbWFpbDogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICBwaG9uZTogX3ZtLnBob25lLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgcGF5c3RhY2trZXk6IF92bS5wYXlzdGFja19rZXksXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBfdm0uY2FsbGJhY2ssXG4gICAgICAgICAgICAgIHJlZmVyZW5jZTogX3ZtLnJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgY2hhbm5lbHM6IF92bS5jaGFubmVscyxcbiAgICAgICAgICAgICAgY3VycmVuY3k6IF92bS5hY3RpdmVDdXJyZW5jeS5jb2RlLFxuICAgICAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgICAgICBlbWJlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnggYngtbW9uZXlcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnBheSkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5hbW91bnQpKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlZ1ZVBheXN0YWNrXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5WdWVQYXlzdGFjaz1lKCk6dC5WdWVQYXlzdGFjaz1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBhPXt9LHIubT1uPVtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciBhLHIsaSxvLGMsdSxzLGQsbCxwLGYsbj0obz0hKGk9W10pLHM9dT1jPW51bGwsZj1cImZ1bmN0aW9uXCI9PXR5cGVvZihhPXtwcm9wczp7ZW1iZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxwYXlzdGFja2tleTp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LGVtYWlsOnt0eXBlOlN0cmluZyxyZXF1aXJlZDohMH0sZmlyc3RuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LGxhc3RuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LGFtb3VudDp7dHlwZTpOdW1iZXIscmVxdWlyZWQ6ITB9LHJlZmVyZW5jZTp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LGNoYW5uZWxzOnt0eXBlOkFycmF5LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5bXCJjYXJkXCIsXCJiYW5rXCJdfX0sYWNjZXNzQ29kZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxjYWxsYmFjazp7dHlwZTpGdW5jdGlvbixyZXF1aXJlZDohMCxkZWZhdWx0OmZ1bmN0aW9uKCl7fX0sY2xvc2U6e3R5cGU6RnVuY3Rpb24scmVxdWlyZWQ6ITAsZGVmYXVsdDpmdW5jdGlvbigpe319LG1ldGFkYXRhOnt0eXBlOk9iamVjdCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJue319fSxjdXJyZW5jeTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5HTlwifSxwbGFuOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHF1YW50aXR5Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHN1YmFjY291bnQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sc3BsaXQ6e3R5cGU6T2JqZWN0LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19LHNwbGl0Q29kZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSx0cmFuc2FjdGlvbkNoYXJnZTp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSxiZWFyZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c2NyaXB0TG9hZGVkOm51bGx9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnNjcmlwdExvYWRlZD1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXtlLmxvYWRTY3JpcHQoZnVuY3Rpb24oKXt0KCl9KX0pfSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy5lbWJlZCYmdGhpcy5wYXlXaXRoUGF5c3RhY2soKX0sbWV0aG9kczp7bG9hZFNjcmlwdDpmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2Uuc3JjPVwiaHR0cHM6Ly9qcy5wYXlzdGFjay5jby92MS9pbmxpbmUuanNcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoZSksZS5yZWFkeVN0YXRlP2Uub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7XCJsb2FkZWRcIiE9PWUucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT09ZS5yZWFkeVN0YXRlfHwoZS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCx0KCkpfTplLm9ubG9hZD1mdW5jdGlvbigpe3QoKX19LGlzRHluYW1pY1NwbGl0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3BsaXQuY29uc3RydWN0b3I9PT1PYmplY3QmJjA8T2JqZWN0LmtleXModGhpcy5zcGxpdCkubGVuZ3RofSxwYXlXaXRoUGF5c3RhY2s6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuc2NyaXB0TG9hZGVkJiZ0aGlzLnNjcmlwdExvYWRlZC50aGVuKGZ1bmN0aW9uKCl7dmFyIHQ9e2tleTplLnBheXN0YWNra2V5LGVtYWlsOmUuZW1haWwsZmlyc3RuYW1lOmUuZmlyc3RuYW1lLGxhc3RuYW1lOmUubGFzdG5hbWUsY2hhbm5lbHM6ZS5jaGFubmVscyxhbW91bnQ6ZS5hbW91bnQsYWNjZXNzX2NvZGU6ZS5hY2Nlc3NDb2RlLHJlZjplLnJlZmVyZW5jZSxjYWxsYmFjazpmdW5jdGlvbih0KXtlLmNhbGxiYWNrKHQpfSxvbkNsb3NlOmZ1bmN0aW9uKCl7ZS5jbG9zZSgpfSxtZXRhZGF0YTplLm1ldGFkYXRhLGN1cnJlbmN5OmUuY3VycmVuY3kscGxhbjplLnBsYW4scXVhbnRpdHk6ZS5xdWFudGl0eSxzdWJhY2NvdW50OmUuaXNEeW5hbWljU3BsaXQoKT9cIlwiOmUuc3ViYWNjb3VudCxzcGxpdDplLmlzRHluYW1pY1NwbGl0KCk/ZS5zcGxpdDpudWxsLHNwbGl0X2NvZGU6ZS5pc0R5bmFtaWNTcGxpdCgpP1wiXCI6ZS5zcGxpdENvZGUsdHJhbnNhY3Rpb25fY2hhcmdlOmUuaXNEeW5hbWljU3BsaXQoKT8wOmUudHJhbnNhY3Rpb25DaGFyZ2UsYmVhcmVyOmUuaXNEeW5hbWljU3BsaXQoKT9cIlwiOmUuYmVhcmVyfTtlLmVtYmVkJiYodC5jb250YWluZXI9XCJwYXlzdGFja0VtYmVkQ29udGFpbmVyXCIpO3Q9d2luZG93LlBheXN0YWNrUG9wLnNldHVwKHQpO2UuZW1iZWR8fHQub3BlbklmcmFtZSgpfSl9fX0pP2Eub3B0aW9uczphLChyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX3NlbGYuX2N8fHQuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuIHQuZW1iZWQ/ZShcImRpdlwiLHthdHRyczp7aWQ6XCJwYXlzdGFja0VtYmVkQ29udGFpbmVyXCJ9fSk6ZShcImJ1dHRvblwiLHtzdGF0aWNDbGFzczpcInBheUJ1dHRvblwiLG9uOntjbGljazp0LnBheVdpdGhQYXlzdGFja319LFt0Ll90KFwiZGVmYXVsdFwiLFt0Ll92KFwiTWFrZSBQYXltZW50XCIpXSldLDIpfSkmJihmLnJlbmRlcj1yLGYuc3RhdGljUmVuZGVyRm5zPWksZi5fY29tcGlsZWQ9ITApLG8mJihmLmZ1bmN0aW9uYWw9ITApLHUmJihmLl9zY29wZUlkPVwiZGF0YS12LVwiK3UpLHM/Zi5fc3NyUmVnaXN0ZXI9bD1mdW5jdGlvbih0KXsodD10fHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfX3x8KHQ9X19WVUVfU1NSX0NPTlRFWFRfXyksYyYmYy5jYWxsKHRoaXMsdCksdCYmdC5fcmVnaXN0ZXJlZENvbXBvbmVudHMmJnQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChzKX06YyYmKGw9ZD9mdW5jdGlvbigpe2MuY2FsbCh0aGlzLChmLmZ1bmN0aW9uYWw/dGhpcy5wYXJlbnQ6dGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCl9OmMpLGwmJihmLmZ1bmN0aW9uYWw/KGYuX2luamVjdFN0eWxlcz1sLHA9Zi5yZW5kZXIsZi5yZW5kZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbC5jYWxsKGUpLHAodCxlKX0pOmYuYmVmb3JlQ3JlYXRlPShkPWYuYmVmb3JlQ3JlYXRlKT9bXS5jb25jYXQoZCxsKTpbbF0pLHtleHBvcnRzOmEsb3B0aW9uczpmfSk7ZS5kZWZhdWx0PW4uZXhwb3J0c31dLHIuYz1hLHIuZD1mdW5jdGlvbih0LGUsbil7ci5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIGEgaW4gZSlyLmQobixhLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsYSkpO3JldHVybiBufSxyLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIHIuZChlLFwiYVwiLGUpLGV9LHIubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sci5wPVwiL2Rpc3QvXCIscihyLnM9MCk7ZnVuY3Rpb24gcih0KXtpZihhW3RdKXJldHVybiBhW3RdLmV4cG9ydHM7dmFyIGU9YVt0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIG5bdF0uY2FsbChlLmV4cG9ydHMsZSxlLmV4cG9ydHMsciksZS5sPSEwLGUuZXhwb3J0c312YXIgbixhfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9