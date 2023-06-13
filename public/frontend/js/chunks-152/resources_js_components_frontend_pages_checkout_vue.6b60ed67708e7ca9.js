"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
/* harmony import */ var _partials_telephone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/telephone */ "./resources/js/components/frontend/partials/telephone.vue");
/* harmony import */ var _partials_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/coupon */ "./resources/js/components/frontend/partials/coupon.vue");
/* harmony import */ var _partials_payment_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/payment_details */ "./resources/js/components/frontend/partials/payment_details.vue");
/* harmony import */ var _partials_addressForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/addressForm */ "./resources/js/components/frontend/partials/addressForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "checkout",
  components: {
    telePhone: _partials_telephone__WEBPACK_IMPORTED_MODULE_1__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__["default"],
    coupon: _partials_coupon__WEBPACK_IMPORTED_MODULE_2__["default"],
    payment_details: _partials_payment_details__WEBPACK_IMPORTED_MODULE_3__["default"],
    addressForm: _partials_addressForm__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
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
        postal_code: ''
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
      address_submit_button: "Add"
    };
  },
  mounted: function mounted() {
    this.getAddress();
    this.address_submit_button = this.lang.add;
  },
  watch: {
    carts: function carts(newValue, oldValue) {
      this.getAddress();
    },
    lang: function lang(newValue, oldValue) {
      this.address_submit_button = this.lang.add;
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
    getAddress: function getAddress() {
      var _this = this;

      var url = this.getUrl('user/address');
      this.$Progress.start();
      axios.get(url).then(function (response) {
        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          _this.$store.commit('setLoginRedirection', '');

          var coupons = response.data.coupons;

          _this.parseData(_this.carts, response.data.checkouts, coupons);

          _this.addresses = response.data.addresses;
          _this.checkout = response.data.checkout;
          _this.pick_hubs = response.data.pickup_hubs;

          for (var i = 0; i < _this.addresses.length; i++) {
            if (_this.addresses[i].default_shipping == 1) {
              _this.default_shipping = _this.addresses[i];
            }

            if (_this.addresses[i].default_billing == 1) {
              _this.default_billing = _this.addresses[i];
            }
          }

          if (_this.addresses.length === 0) {
            _this.address_area = true;
          }

          _this.$Progress.finish();
        }
      })["catch"](function (error) {
        _this.$Progress.fail();
      });
    },
    confirmOrder: function confirmOrder() {
      var _this2 = this;

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

      var url = this.getUrl('user/confirm-order');
      this.$Progress.start();
      this.loading = true;
      axios.post(url, this.payment_form).then(function (response) {
        _this2.loading = false;

        if (response.data.error) {
          _this2.$Progress.fail();

          toastr.error(response.data.error, _this2.lang.Error + ' !!');
        } else {
          _this2.$Progress.finish();

          _this2.$router.push({
            name: 'payment'
          });
        }
      })["catch"](function (error) {
        _this2.loading = false;
      });
    },
    billingAddressSelect: function billingAddressSelect() {
      if (this.same_address) {
        this.default_billing = this.default_shipping;
      } else {
        this.default_billing = {};
      }
    },
    parseData: function parseData(carts, checkouts, coupons) {
      this.resetForm();

      for (var i = 0; i < carts.length; i++) {
        this.payment_form.quantity.push({
          id: carts[i].id,
          quantity: carts[i].quantity
        });
        this.payment_form.sub_total += parseFloat(carts[i].price * carts[i].quantity);
        this.payment_form.discount_offer += parseFloat(carts[i].discount * carts[i].quantity);

        if (this.settings.shipping_cost == 'product_base') {
          this.payment_form.shipping_tax += parseFloat(carts[i].shipping_cost);
        }

        this.payment_form.tax += parseFloat(carts[i].tax * carts[i].quantity);
      }

      if (checkouts) {
        for (var key in checkouts) {
          this.payment_form.shipping_tax += parseFloat(checkouts[key].shipping_cost);
          this.payment_form.tax += parseFloat(checkouts[key].tax);
        }
      }

      if (coupons && this.settings.coupon_system == 1) {
        this.coupon_list = coupons;

        for (var _i = 0; _i < coupons.length; _i++) {
          this.payment_form.coupon_discount += parseFloat(coupons[_i].discount);
        }
      }

      this.shipping_cost = this.payment_form.shipping_tax;
      this.calculateShippingCost();
    },
    fetchShippingCost: function fetchShippingCost() {
      var _this3 = this;

      this.default_billing = this.default_shipping;

      if (this.settings.shipping_fee_type == 'area_base') {
        var url = this.getUrl('user/find/shipping_cost');
        var form = {
          city_id: this.default_shipping.address_ids.city_id
        };
        axios.post(url, form).then(function (response) {
          if (response.data.error) {
            toastr.error(response.data.error, _this3.lang.Error + ' !!');
          } else {
            _this3.payment_form.shipping_tax = response.data.shipping_cost;
            _this3.shipping_cost = _this3.payment_form.shipping_tax;
            _this3.payment_form.total = parseFloat(_this3.payment_form.sub_total) + parseFloat(_this3.payment_form.tax) + parseFloat(_this3.payment_form.shipping_tax) - (parseFloat(_this3.payment_form.discount_offer) + parseFloat(_this3.payment_form.coupon_discount));

            if (_this3.settings.tax_type == 'after_tax') {
              _this3.payment_form.total = parseFloat(_this3.payment_form.sub_total) + parseFloat(_this3.payment_form.shipping_tax) - (parseFloat(_this3.payment_form.discount_offer) + parseFloat(_this3.payment_form.coupon_discount));
              _this3.payment_form.total += _this3.payment_form.tax;
            } else {
              _this3.payment_form.total = parseFloat(_this3.payment_form.sub_total) + parseFloat(_this3.payment_form.tax) + parseFloat(_this3.payment_form.shipping_tax) - (parseFloat(_this3.payment_form.discount_offer) + parseFloat(_this3.payment_form.coupon_discount));
            }
          }
        });
      }

      return false;
    },
    calculateShippingCost: function calculateShippingCost() {
      this.payment_form.shipping_tax = 0;

      if (this.checkout_method == 1) {
        this.payment_form.shipping_tax = 0;
      } else {
        this.payment_form.shipping_tax = this.shipping_cost;
      }

      if (this.settings.tax_type == 'after_tax' && this.settings.vat_and_tax_type == 'order_base') {
        this.payment_form.total = parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.shipping_tax) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
        this.payment_form.total += this.payment_form.tax;
      } else {
        this.payment_form.total = parseFloat(this.payment_form.sub_total) + parseFloat(this.payment_form.tax) + parseFloat(this.payment_form.shipping_tax) - (parseFloat(this.payment_form.discount_offer) + parseFloat(this.payment_form.coupon_discount));
      }
    },
    getNumber: function getNumber(number) {
      this.form.phone_no = number;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _telephone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telephone */ "./resources/js/components/frontend/partials/telephone.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addressForm",
  components: {
    telePhone: _telephone__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      address_area: false,
      address_area_title: '',
      form: {
        name: '',
        email: '',
        phone_no: '',
        address: '',
        country_id: '',
        state_id: '',
        city_id: '',
        postal_code: '',
        id: ''
      },
      states: [],
      cities: [],
      address_submit_button: '',
      loading: false
    };
  },
  mounted: function mounted() {
    this.address_area_title = this.lang.address_area_title;
    this.address_submit_button = this.lang.address_submit_button;
  },
  watch: {
    lang: function lang() {
      this.address_area_title = this.lang.address_area_title;
      this.address_submit_button = this.lang.address_submit_button;
    }
  },
  computed: {
    countries: function countries() {
      return this.$store.getters.getCountryList;
    }
  },
  methods: {
    saveAddress: function saveAddress() {
      var _this = this;

      this.loading = true;
      var url = this.getUrl('store/user-address');
      axios.post(url, this.form).then(function (response) {
        _this.loading = false;

        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, _this.lang.Success + ' !!');
          _this.errors = [];

          _this.$parent.getAddress();

          _this.address_area = false;
          _this.form.id = '';
          _this.form.name = '';
          _this.form.email = '';
          _this.form.phone_no = '';
          _this.form.address = '';
          _this.form.country_id = '';
          _this.form.state_id = '';
          _this.form.city_id = '';
          _this.form.postal_code = '';
          _this.address_area_title = _this.lang.address_area_title;
          _this.address_submit_button = _this.lang.address_submit_button;

          _this.$store.commit('setMobileNo', '');
        }
      })["catch"](function (error) {
        _this.loading = false;

        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    },
    getNumber: function getNumber(number) {
      this.form.phone_no = number;
    },
    getStates: function getStates(address) {
      var _this2 = this;

      var country_id = this.form.country_id;
      var url = this.getUrl('state/by-country/' + country_id);
      axios.get(url).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this2.lang.Error + ' !!');
        } else {
          _this2.states = response.data.states;

          if (address && address.address_ids) {
            _this2.form.state_id = parseInt(address.address_ids.state_id);

            _this2.getCities(address);
          }
        }
      });
    },
    getCities: function getCities(address) {
      var _this3 = this;

      var state_id = this.form.state_id;
      var url = this.getUrl('city/by-state/' + state_id);
      axios.get(url).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this3.lang.Error + ' !!');
        } else {
          _this3.cities = response.data.cities;

          if (address && address.address_ids) {
            _this3.form.city_id = parseInt(address.address_ids.city_id);
          }
        }
      });
    },
    edit: function edit(address) {
      this.errors = [];
      this.address_area = true;
      this.address_area_title = this.lang.update_address;
      this.address_submit_button = this.lang.update;
      this.form.name = address.name;
      this.form.email = address.email;
      this.form.phone_no = address.phone_no;
      this.form.address = address.address;
      this.form.country_id = parseInt(address.address_ids ? address.address_ids.country_id : '');
      this.form.postal_code = address.postal_code;
      this.form.id = address.id;
      this.getStates(address);
      this.$store.commit('setMobileNo', this.form.phone_no);
      var el = this.$refs.update;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    deleteAddress: function deleteAddress(id) {
      var _this4 = this;

      var url = this.getUrl('delete/user-address/' + id);
      axios.get(url).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this4.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, _this4.lang.Success + ' !!');

          _this4.$parent.getAddress();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "coupon",
  props: ['coupon_list', 'cartList'],
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    applyCoupon: function applyCoupon() {
      var _this = this;

      var url = this.getUrl('user/apply_coupon');
      this.payment_form.trx_id = this.cartList[0].trx_id;
      this.loading = true;
      axios.post(url, this.payment_form).then(function (response) {
        _this.loading = false;

        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, _this.lang.Success + ' !!');
          _this.carts = [];
          var carts = response.data.carts;
          var checkouts = response.data.checkouts;
          var coupons = response.data.coupons;

          _this.$parent.parseData(carts, checkouts, coupons);

          _this.payment_form.coupon_code = '';
        }
      })["catch"](function (error) {
        _this.loading = false;
        toastr.success('Something Went Wrong', 'Error !!');
      });
    },
    removeCoupon: function removeCoupon(id) {
      var _this2 = this;

      if (confirm('Are You Sure ?')) {
        var url = this.getUrl('user/coupon-delete');
        this.disabled = true;
        var form = {
          trx_id: this.cartList[0].trx_id,
          coupon_id: id,
          user_id: this.authUser.id
        };
        axios.post(url, form).then(function (response) {
          _this2.disabled = false;

          if (response.data.error) {
            toastr.error(response.data.error, _this2.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, _this2.lang.Success + ' !!');
            _this2.carts = [];
            var carts = response.data.carts;
            var checkouts = response.data.checkouts;
            var coupons = response.data.coupons;

            _this2.$parent.parseData(carts, checkouts, coupons);

            _this2.payment_form.coupon_code = '';
          }
        })["catch"](function (error) {
          _this2.disabled = false;
          toastr.success('Something Went Wrong', 'Error !!');
        });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "telephone",
  data: function data() {
    return {
      dropdown_active: false,
      search_key: '',
      selected_country: '',
      defaultCountry: {
        flag: '',
        code: '',
        name: ''
      },
      activeClass: 'hideShow',
      phone_no: '',
      count: 1,
      filtered_countries: []
    };
  },
  watch: {
    phone: function phone() {
      this.phone_no = this.phone;
    }
  },
  mounted: function mounted() {
    this.country();
  },
  computed: {
    phone: function phone() {
      return this.$store.getters.getMobileNo;
    },
    countries: function countries() {
      return this.$store.getters.getCountryList;
    }
  },
  methods: {
    PlusCheck: function PlusCheck(country) {
      if (country) {
        return country.phonecode.includes("+");
      } else {
        return false;
      }
    },
    getCountryCode: function getCountryCode(country) {
      this.activeClass = 'hideShow';
      this.phone_no = '';
      this.count = 1;

      if (country) {
        this.defaultCountry.flag = country.flag_icon;
      } else {
        this.defaultCountry.flag = this.getUrl('public/images/flags/bd.png');
      }

      var code = '+880';

      if (!country) {
        this.defaultCountry.code = code;
        this.defaultCountry.name = 'Bangladesh';
      } else {
        if (country.phonecode.includes("+")) {
          this.defaultCountry.code = country.phonecode;
        } else {
          this.defaultCountry.code = '+' + country.phonecode;
        }

        this.defaultCountry.name = country.name;
      }
    },
    activeDropDown: function activeDropDown() {
      var _this = this;

      if (this.activeClass == 'hideShow') {
        this.activeClass = '';
      } else {
        this.activeClass = 'hideShow';
      }

      this.$nextTick(function () {
        document.addEventListener('click', _this.hideSearchDropdown);
      });
    },
    hideSearchDropdown: function hideSearchDropdown() {
      this.activeClass = 'hideShow';
      document.removeEventListener('click', this.hideSearchDropdown);
    },
    countrySearch: function countrySearch() {
      var _this2 = this;

      var res;
      res = this.countries.filter(function (d) {
        return d.name;
      });
      this.filtered_countries = res.filter(function (d) {
        return d.name && d.name.toLowerCase().includes(_this2.search_key);
      });
      return this.filtered_countries;
    },
    getNum: function getNum() {
      if (this.count == 1) {
        this.phone_no = this.defaultCountry.code + this.phone_no;
      } else if (this.phone_no == '') {
        this.phone_no = this.defaultCountry.code + this.phone_no;
      }

      this.$emit('phone_no', this.phone_no);
      this.count++;
    },
    country: function country() {
      var _this3 = this;

      var url = this.getUrl('get/country-list');

      if (this.countries.length > 0) {
        this.filtered_countries = this.countries;
        var country = this.countries.find(function (el) {
          return el.id == _this3.settings.default_country;
        });
        this.getCountryCode(country);
      } else {
        axios.get(url).then(function (response) {
          if (response.data.error) {
            toastr.error(response.data.error, _this3.lang.Error + ' !!');
          } else {
            _this3.$store.commit('setCountryList', response.data.countries);

            _this3.filtered_countries = response.data.countries;

            var _country = _this3.countries.find(function (el) {
              return el.id == _this3.settings.default_country;
            });

            _this3.getCountryCode(_country);
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/pages/checkout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/frontend/pages/checkout.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=026ff953& */ "./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__.render,
  _checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/addressForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/frontend/partials/addressForm.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addressForm.vue?vue&type=template&id=abacb606&scoped=true& */ "./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true&");
/* harmony import */ var _addressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addressForm.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "abacb606",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/addressForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/coupon.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/frontend/partials/coupon.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupon.vue?vue&type=template&id=d245afde&scoped=true& */ "./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true&");
/* harmony import */ var _coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d245afde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/coupon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/frontend/partials/telephone.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telephone.vue?vue&type=template&id=f4c5412e&scoped=true& */ "./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&");
/* harmony import */ var _telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telephone.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f4c5412e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/telephone.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addressForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coupon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./telephone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_026ff953___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=template&id=026ff953& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressForm_vue_vue_type_template_id_abacb606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addressForm.vue?vue&type=template&id=abacb606&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coupon_vue_vue_type_template_id_d245afde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coupon.vue?vue&type=template&id=d245afde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shimmer_vue_vue_type_template_id_44ada926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shimmer.vue?vue&type=template&id=44ada926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/shimmer.vue?vue&type=template&id=44ada926&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_telephone_vue_vue_type_template_id_f4c5412e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./telephone.vue?vue&type=template&id=f4c5412e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/checkout.vue?vue&type=template&id=026ff953& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
          _c("li", { staticClass: "breadcrumb-item" }, [
            _vm._v(_vm._s(_vm.lang.check_out)),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v(_vm._s(_vm.lang.confirm_order)),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "shopping-cart" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
           true
            ? _c("div", { staticClass: "col-lg-8" }, [
                _c(
                  "div",
                  { staticClass: "sg-shipping" },
                  [
                    _c("div", { staticClass: "title" }, [
                      _c("h1", [
                        _vm._v(_vm._s(_vm.lang.choose_a_way_to_collect_order)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.pick_hubs.length > 0
                      ? _c("div", { staticClass: "left-content" }, [
                          _c("form", { staticClass: "form-checkbox" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout_method,
                                    expression: "checkout_method",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  id: "address",
                                  value: "2",
                                },
                                domProps: {
                                  checked: _vm._q(_vm.checkout_method, "2"),
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      _vm.checkout_method = "2"
                                    },
                                    _vm.calculateShippingCost,
                                  ],
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "address" } }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang.use_shipping_billing_addresses
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout_method,
                                    expression: "checkout_method",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  id: "pickhub",
                                  value: "1",
                                },
                                domProps: {
                                  checked: _vm._q(_vm.checkout_method, "1"),
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      _vm.checkout_method = "1"
                                    },
                                    _vm.calculateShippingCost,
                                  ],
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "pickhub" } }, [
                                _vm._v(_vm._s(_vm.lang.use_pickHub_point)),
                              ]),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.pick_hubs.length > 0 && _vm.checkout_method == 1
                      ? _c("div", { staticClass: "title mt-2" }, [
                          _c("h1", [_vm._v(_vm._s(_vm.lang.pickHub_point))]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.checkout_method == 1 && _vm.pick_hubs.length > 0
                      ? _c("div", { staticClass: "left-content" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pick_hub_id,
                                  expression: "pick_hub_id",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: [
                                  function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.pick_hub_id = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.calculateShippingCost,
                                ],
                              },
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(_vm._s(_vm.lang.select_pickHub_point)),
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.pick_hubs, function (hub, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: hub.id } },
                                  [
                                    _vm._v(
                                      _vm._s(hub.name) +
                                        "\n                  => " +
                                        _vm._s(hub.address) +
                                        "\n                "
                                    ),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.addresses.length > 0 && _vm.checkout_method == 2
                      ? _c("div", { staticClass: "title mt-2" }, [
                          _c("h1", [_vm._v(_vm._s(_vm.lang.shipping_address))]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.addresses && _vm.checkout_method == 2
                      ? _c(
                          "div",
                          { staticClass: "row text-capitalize" },
                          [
                            _vm._l(_vm.addresses, function (address, index) {
                              return _c(
                                "div",
                                { key: index, staticClass: "col-lg-6" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "address_selector",
                                      attrs: { id: "shipping_" + address.id },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "sg-card address chekout",
                                          class:
                                            _vm.default_shipping.id ==
                                            address.id
                                              ? "selected"
                                              : "",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "justify-content-between d-flex",
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "text d-flex" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "float-left",
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.default_shipping,
                                                            expression:
                                                              "default_shipping",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-check-input",
                                                        attrs: {
                                                          type: "radio",
                                                          name: "radioNoLabel",
                                                          id:
                                                            "shipping_" +
                                                            address.id,
                                                          "aria-label": "...",
                                                        },
                                                        domProps: {
                                                          value: address,
                                                          checked: _vm._q(
                                                            _vm.default_shipping,
                                                            address
                                                          ),
                                                        },
                                                        on: {
                                                          change: [
                                                            function ($event) {
                                                              _vm.default_shipping =
                                                                address
                                                            },
                                                            _vm.fetchShippingCost,
                                                          ],
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "address-right",
                                                    },
                                                    [
                                                      _c(
                                                        "ul",
                                                        {
                                                          staticClass:
                                                            "global-list",
                                                        },
                                                        [
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.name
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.name
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.email
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.email
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.phone
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.phone_no
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang
                                                                  .street_address
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.address
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.country
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.country
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.state
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.state
                                                                )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("li", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.city
                                                              ) +
                                                                " : " +
                                                                _vm._s(
                                                                  address.city
                                                                )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "dropdown" },
                                                [
                                                  _c("span", {
                                                    staticClass:
                                                      "mdi mdi-name mdi-dots-vertical dropbtn",
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-content",
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href: "javascript:void(0)",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.$refs.address_form.edit(
                                                                address
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.edit
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      !address.default_shipping &&
                                                      !address.default_billing
                                                        ? _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.$refs.address_form.deleteAddress(
                                                                      address.id
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.lang
                                                                    .delete
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-12" }, [
                              _vm.addresses.length > 0
                                ? _c("div", { staticClass: "form-check" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.same_address,
                                          expression: "same_address",
                                        },
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        checked: "",
                                        id: "same_as",
                                        type: "checkbox",
                                      },
                                      domProps: {
                                        checked: Array.isArray(_vm.same_address)
                                          ? _vm._i(_vm.same_address, null) > -1
                                          : _vm.same_address,
                                      },
                                      on: {
                                        change: [
                                          function ($event) {
                                            var $$a = _vm.same_address,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.same_address =
                                                    $$a.concat([$$v]))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.same_address = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.same_address = $$c
                                            }
                                          },
                                          _vm.billingAddressSelect,
                                        ],
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "form-check-label",
                                        attrs: { for: "same_as" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.lang.address_is_shipping
                                            ) +
                                            "\n                  "
                                        ),
                                      ]
                                    ),
                                  ])
                                : _vm._e(),
                            ]),
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.addresses.length > 0 &&
                    !_vm.same_address &&
                    _vm.checkout_method == 2
                      ? _c("div", { staticClass: "title" }, [
                          _c("h1", [_vm._v(_vm._s(_vm.lang.billing_address))]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.addresses &&
                    !_vm.same_address &&
                    _vm.checkout_method == 2
                      ? _c(
                          "div",
                          { staticClass: "row text-capitalize" },
                          _vm._l(_vm.addresses, function (address, index) {
                            return _c(
                              "div",
                              { key: index, staticClass: "col-lg-6" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "address_selector",
                                    attrs: { id: "billing_" + address.id },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "sg-card address chekout",
                                        class:
                                          _vm.default_billing.id == address.id
                                            ? "selected"
                                            : "",
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "justify-content-between d-flex",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "text d-flex" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "float-left" },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.default_billing,
                                                          expression:
                                                            "default_billing",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-check-input",
                                                      attrs: {
                                                        type: "radio",
                                                        id:
                                                          "billing_" +
                                                          address.id,
                                                        "aria-label": "...",
                                                      },
                                                      domProps: {
                                                        checked:
                                                          _vm.default_billing
                                                            .id == address.id,
                                                        value: address,
                                                        checked: _vm._q(
                                                          _vm.default_billing,
                                                          address
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          _vm.default_billing =
                                                            address
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "address-right",
                                                  },
                                                  [
                                                    _c(
                                                      "ul",
                                                      {
                                                        staticClass:
                                                          "global-list",
                                                      },
                                                      [
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.name
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.name
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.email
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.email
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.phone
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.phone_no
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang
                                                                .street_address
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.address
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.country
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.country
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.state
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.state
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("li", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.lang.city
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                address.city
                                                              )
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "dropdown",
                                                staticStyle: { float: "right" },
                                              },
                                              [
                                                _c("span", {
                                                  staticClass:
                                                    "mdi mdi-name mdi-dots-vertical dropbtn",
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "dropdown-content",
                                                  },
                                                  [
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href: "javascript:void(0)",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.$refs.address_form.edit(
                                                              address
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.lang.edit)
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    !address.default_shipping &&
                                                    !address.default_billing
                                                      ? _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.$refs.address_form.deleteAddress(
                                                                  address.id
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.lang.delete
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.checkout_method == 2
                      ? _c("addressForm", { ref: "address_form" })
                      : _vm._e(),
                  ],
                  1
                ),
              ])
            : 0,
          _vm._v(" "),
          _vm.carts
            ? _c("div", { staticClass: "col-lg-4 pl-lg-5" }, [
                _c(
                  "div",
                  { staticClass: "order-summary" },
                  [
                    _c("h6", [_vm._v(_vm._s(_vm.lang.price_details))]),
                    _vm._v(" "),
                    _vm.authUser
                      ? _c("coupon", {
                          attrs: {
                            coupon_list: _vm.coupon_list,
                            cartList: _vm.carts,
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "sg-card" },
                      [
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
                        _vm._v(" "),
                        _c("div", { staticClass: "form-checkbox" }, [
                          _vm.settings.privacy_agreement
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.agreement,
                                      expression: "agreement",
                                    },
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    id: "tnc",
                                    value: "2",
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.agreement)
                                      ? _vm._i(_vm.agreement, "2") > -1
                                      : _vm.agreement,
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$a = _vm.agreement,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "2",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.agreement = $$a.concat([$$v]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.agreement = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.agreement = $$c
                                      }
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "tnc" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.lang.agreement) +
                                        "\n                    "
                                    ),
                                    _vm.urlCheck(_vm.settings.privacy_agreement)
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: _vm.settings
                                                .privacy_agreement,
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.lang.terms))]
                                        )
                                      : _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "page/" +
                                                _vm.settings.privacy_agreement,
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.lang.terms) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                  ],
                                  1
                                ),
                              ])
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("loading_button", {
                              attrs: { class_name: "btn btn-primary" },
                            })
                          : _c(
                              "a",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { href: "javascript:void(0)" },
                                on: { click: _vm.confirmOrder },
                              },
                              [_vm._v(_vm._s(_vm.lang.proceed_to_payment))]
                            ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/addressForm.vue?vue&type=template&id=abacb606&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "update", staticClass: "accordion add-new" }, [
    _c("div", { staticClass: "accordion-item" }, [
      _c("div", { staticClass: "accordion-header" }, [
        _c(
          "button",
          {
            staticClass: "accordion-button",
            class: { collapsed: !_vm.address_area },
            attrs: {
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#shipping_accordion",
              "aria-expanded": "false",
              "aria-controls": "collapse1",
            },
            on: {
              click: function ($event) {
                _vm.address_area = !_vm.address_area
              },
            },
          },
          [_vm._v(_vm._s(_vm.address_area_title) + "\n      ")]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "accordion-collapse collapse",
          class: { show: _vm.address_area },
          attrs: {
            id: "shipping_accordion",
            "aria-labelledby": "address1",
            "data-bs-parent": "#accordionExample",
          },
        },
        [
          _c("div", { staticClass: "accordion-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.saveAddress()
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(_vm._s(_vm.lang.name))]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name",
                          },
                        ],
                        staticClass: "form-control",
                        class: { error_border: _vm.errors.name },
                        attrs: { type: "text", placeholder: _vm.lang.name },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.name[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(_vm._s(_vm.lang.email))]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email",
                          },
                        ],
                        staticClass: "form-control",
                        class: { error_border: _vm.errors.email },
                        attrs: { type: "email", placeholder: _vm.lang.email },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.email[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c("label", [_vm._v(_vm._s(_vm.lang.phone))]),
                      _vm._v(" "),
                      _c("telePhone", { on: { phone_no: _vm.getNumber } }),
                      _vm._v(" "),
                      _vm.errors.phone_no
                        ? _c("span", { staticClass: "validation_error" }, [
                            _vm._v(_vm._s(_vm.errors.phone_no[0])),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v(_vm._s(_vm.lang.country))]),
                        _vm._v(" "),
                        _c("v-select", {
                          class: { error_border: _vm.errors.country_id },
                          attrs: {
                            dir: _vm.settings.text_direction,
                            label: "name",
                            options: _vm.countries,
                            reduce: function (option) {
                              return option.id
                            },
                          },
                          on: {
                            input: function ($event) {
                              return _vm.getStates()
                            },
                          },
                          model: {
                            value: _vm.form.country_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "country_id", $$v)
                            },
                            expression: "form.country_id",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.errors.country_id
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.country_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v(_vm._s(_vm.lang.state))]),
                        _vm._v(" "),
                        _c("v-select", {
                          class: { error_border: _vm.errors.state_id },
                          attrs: {
                            dir: _vm.settings.text_direction,
                            label: "name",
                            options: _vm.states,
                            reduce: function (option) {
                              return option.id
                            },
                          },
                          on: {
                            input: function ($event) {
                              return _vm.getCities()
                            },
                          },
                          model: {
                            value: _vm.form.state_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "state_id", $$v)
                            },
                            expression: "form.state_id",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.errors.state_id
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.state_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v(_vm._s(_vm.lang.city))]),
                        _vm._v(" "),
                        _c("v-select", {
                          class: { error_border: _vm.errors.city_id },
                          attrs: {
                            dir: _vm.settings.text_direction,
                            label: "name",
                            options: _vm.cities,
                            reduce: function (option) {
                              return option.id
                            },
                          },
                          model: {
                            value: _vm.form.city_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "city_id", $$v)
                            },
                            expression: "form.city_id",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.errors.city_id
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.city_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(_vm._s(_vm.lang.postal_code))]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.postal_code,
                            expression: "form.postal_code",
                          },
                        ],
                        staticClass: "form-control",
                        class: { error_border: _vm.errors.postal_code },
                        attrs: {
                          type: "text",
                          placeholder: _vm.lang.postal_code,
                        },
                        domProps: { value: _vm.form.postal_code },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "postal_code",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.errors.postal_code
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.postal_code[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(_vm._s(_vm.lang.address))]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address,
                              expression: "form.address",
                            },
                          ],
                          staticClass: "form-control",
                          class: { error_border: _vm.errors.address },
                          attrs: { placeholder: _vm.lang.street_address },
                          domProps: { value: _vm.form.address },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "address", $event.target.value)
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.errors.address
                      ? _c("span", { staticClass: "validation_error" }, [
                          _vm._v(_vm._s(_vm.errors.address[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _vm.loading
                        ? _c("loading_button", {
                            attrs: { class_name: "btn btn-primary" },
                          })
                        : _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.address_submit_button) +
                                  "\n              "
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
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/coupon.vue?vue&type=template&id=d245afde&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    { staticClass: "accordion", attrs: { id: "couponAccordion" } },
    [
      _c("div", { staticClass: "accordion-item" }, [
        _c(
          "div",
          { staticClass: "accordion-header", attrs: { id: "headingOne" } },
          [
            _c(
              "button",
              {
                staticClass: "accordion-button",
                attrs: {
                  type: "button",
                  "data-bs-toggle": "collapse",
                  "data-bs-target": "#couponCollapse",
                  "aria-expanded": "true",
                  "aria-controls": "collapseOne",
                },
              },
              [
                _c("span", [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: _vm.getUrl("public/images/others/pencil1.png"),
                      alt: "Image",
                    },
                  }),
                ]),
                _vm._v(_vm._s(_vm.lang.apply_coupon_code) + "\n      "),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "accordion-collapse collapse",
            attrs: {
              id: "couponCollapse",
              "aria-labelledby": "headingOne",
              "data-bs-parent": "#couponAccordion",
            },
          },
          [
            _c("div", { staticClass: "accordion-body" }, [
              _c(
                "div",
                { staticClass: "coupon-code-list" },
                _vm._l(_vm.coupon_list, function (coupon, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "coupon-code" },
                    [
                      _c("h5", [_vm._v(_vm._s(coupon.title))]),
                      _vm._v(" "),
                      _c("P", [
                        _vm._v(
                          _vm._s(
                            coupon.discount_type == "flat"
                              ? _vm.priceFormat(coupon.discount)
                              : coupon.coupon_discount + "% " + _vm.lang.off
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "btn-close",
                        attrs: {
                          type: "button",
                          "aria-label": "Close",
                          disabled: _vm.disabled,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.removeCoupon(coupon.coupon_id)
                          },
                        },
                      }),
                    ],
                    1
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.applyCoupon.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.payment_form.coupon_code,
                        expression: "payment_form.coupon_code",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: _vm.lang.enter_coupon_code,
                      required: "",
                    },
                    domProps: { value: _vm.payment_form.coupon_code },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.payment_form,
                          "coupon_code",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.loading
                    ? _c("loading_button", {
                        attrs: { class_name: "opacity_5" },
                      })
                    : _c("button", [_vm._v(_vm._s(_vm.lang.apply))]),
                ],
                1
              ),
            ]),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/payment_details.vue?vue&type=template&id=1cf80fa4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/telephone.vue?vue&type=template&id=f4c5412e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    "form",
    { staticClass: "yoori__signup--form", attrs: { action: "#" } },
    [
      _c(
        "div",
        {
          staticClass: "country__code--config",
          on: {
            click: function ($event) {
              $event.stopPropagation()
              return _vm.activeDropDown.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "country__code--config-details" }, [
            _c("span", { staticClass: "country__code--flag" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: _vm.defaultCountry.flag, alt: "Flag" },
              }),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "country__code--number" }, [
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.defaultCountry.code) +
                  "\n              "
              ),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "country__dropdown" }),
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "country__code--list",
              class: _vm.activeClass,
              on: {
                click: function ($event) {
                  $event.stopPropagation()
                },
              },
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search_key,
                    expression: "search_key",
                  },
                ],
                staticClass: "country__search",
                attrs: { placeholder: "Search", type: "text" },
                domProps: { value: _vm.search_key },
                on: {
                  keyup: _vm.countrySearch,
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_key = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm._l(_vm.filtered_countries, function (country, index) {
                return _c(
                  "li",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.getCountryCode(country)
                      },
                    },
                  },
                  [
                    _c("span", { staticClass: "country__code--flag" }, [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: country.flag_icon,
                            expression: "country.flag_icon",
                          },
                        ],
                        staticClass: "img-fluid",
                        attrs: { alt: "Flag" },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "country__name" }, [
                      _c("strong", [_vm._v(_vm._s(country.name))]),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "country__code--number" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.PlusCheck(country)
                              ? country.phonecode
                              : "+" + country.phonecode
                          ) +
                          "\n                      "
                      ),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.phone_no,
            expression: "phone_no",
          },
        ],
        staticClass: "number",
        attrs: { type: "tel" },
        domProps: { value: _vm.phone_no },
        on: {
          keyup: _vm.getNum,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.phone_no = $event.target.value
          },
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfY2hlY2tvdXRfdnVlLjZiNjBlZDY3NzA4ZTdjYTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLHVCQURBO0FBRUEscUJBRkE7QUFHQSxrQkFIQTtBQUlBO0FBQ0EsY0FEQTtBQUVBLGdCQUZBO0FBR0EsaUJBSEE7QUFJQSxvQkFKQTtBQUtBLG1CQUxBO0FBTUEsc0JBTkE7QUFPQSxvQkFQQTtBQVFBLG1CQVJBO0FBU0E7QUFUQSxPQUpBO0FBZUEsc0JBZkE7QUFnQkEseUJBaEJBO0FBaUJBLDBCQWpCQTtBQWtCQSx5QkFsQkE7QUFtQkEsd0JBbkJBO0FBb0JBLG1CQXBCQTtBQXFCQSxtQkFyQkE7QUFzQkEscUJBdEJBO0FBdUJBLHdCQXZCQTtBQXdCQSxvQkF4QkE7QUF5QkEseUJBekJBO0FBMEJBLHFCQTFCQTtBQTJCQSw2Q0EzQkE7QUE0QkE7QUE1QkE7QUE4QkEsR0FsQ0E7QUFtQ0EsU0FuQ0EscUJBbUNBO0FBQ0E7QUFDQTtBQUNBLEdBdENBO0FBdUNBO0FBQ0EsU0FEQSxpQkFDQSxRQURBLEVBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsUUFKQSxnQkFJQSxRQUpB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QseUJBQXlCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQzNELHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NoZWNrb3V0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvYWRkcmVzc0Zvcm0udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9jb3Vwb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9wYXltZW50X2RldGFpbHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdGVsZXBob25lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9jaGVja291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvYWRkcmVzc0Zvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL2NvdXBvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvcGF5bWVudF9kZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy90ZWxlcGhvbmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NoZWNrb3V0LnZ1ZT8wYjExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL2FkZHJlc3NGb3JtLnZ1ZT81ZTNhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL2NvdXBvbi52dWU/NzEyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9wYXltZW50X2RldGFpbHMudnVlPzJjZjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWU/MjQ1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy90ZWxlcGhvbmUudnVlP2NjYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvY2hlY2tvdXQudnVlP2JiZjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvYWRkcmVzc0Zvcm0udnVlPzUxMDgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvY291cG9uLnZ1ZT8yYWJlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3BheW1lbnRfZGV0YWlscy52dWU/MTE2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy90ZWxlcGhvbmUudnVlPzA5YzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvY2hlY2tvdXQudnVlP2ZiOTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvYWRkcmVzc0Zvcm0udnVlPzg4ZmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvY291cG9uLnZ1ZT84NWI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3BheW1lbnRfZGV0YWlscy52dWU/ZTEwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZT84NjUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3RlbGVwaG9uZS52dWU/NTllYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNnLXBhZ2UtY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNnLWJyZWFkY3J1bWJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnY2FydCcgfVwiPnt7IGxhbmcudmlld19jYXJ0IH19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj57eyBsYW5nLmNoZWNrX291dCB9fTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+e3sgbGFuZy5jb25maXJtX29yZGVyIH19PC9hPjwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj48IS0tIC8uc2ctYnJlYWRjcnVtYiAtLT5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOFwiIHYtaWY9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZy1zaGlwcGluZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcuY2hvb3NlX2Ffd2F5X3RvX2NvbGxlY3Rfb3JkZXIgfX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIiB2LWlmPVwicGlja19odWJzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImFkZHJlc3NcIiB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hlY2tvdXRfbWV0aG9kXCIgQGNoYW5nZT1cImNhbGN1bGF0ZVNoaXBwaW5nQ29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzXCI+e3sgbGFuZy51c2Vfc2hpcHBpbmdfYmlsbGluZ19hZGRyZXNzZXMgfX08L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwaWNraHViXCIgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrb3V0X21ldGhvZFwiIEBjaGFuZ2U9XCJjYWxjdWxhdGVTaGlwcGluZ0Nvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGlja2h1YlwiPnt7IGxhbmcudXNlX3BpY2tIdWJfcG9pbnQgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwaWNrX2h1YnMubGVuZ3RoID4gMCAmJiBjaGVja291dF9tZXRob2QgPT0gMVwiIGNsYXNzPVwidGl0bGUgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcucGlja0h1Yl9wb2ludCB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIiB2LWlmPVwiY2hlY2tvdXRfbWV0aG9kID09IDEgJiYgcGlja19odWJzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInBpY2tfaHViX2lkXCIgQGNoYW5nZT1cImNhbGN1bGF0ZVNoaXBwaW5nQ29zdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57eyBsYW5nLnNlbGVjdF9waWNrSHViX3BvaW50IH19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoaHViLGluZGV4KSBpbiBwaWNrX2h1YnNcIiA6a2V5PVwiaW5kZXhcIiA6dmFsdWU9XCJodWIuaWRcIj57eyBodWIubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID0+IHt7IGh1Yi5hZGRyZXNzIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImFkZHJlc3Nlcy5sZW5ndGggPiAwICYmIGNoZWNrb3V0X21ldGhvZCA9PSAyXCIgY2xhc3M9XCJ0aXRsZSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3sgbGFuZy5zaGlwcGluZ19hZGRyZXNzIH19PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtY2FwaXRhbGl6ZVwiIHYtaWY9XCJhZGRyZXNzZXMgJiYgY2hlY2tvdXRfbWV0aG9kID09IDJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiIHYtZm9yPVwiKGFkZHJlc3MsIGluZGV4KSBpbiBhZGRyZXNzZXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIDppZD1cIidzaGlwcGluZ18nK2FkZHJlc3MuaWRcIiBjbGFzcz1cImFkZHJlc3Nfc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctY2FyZCBhZGRyZXNzIGNoZWtvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiZGVmYXVsdF9zaGlwcGluZy5pZCA9PSBhZGRyZXNzLmlkID8gJ3NlbGVjdGVkJyA6ICcnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jb250ZW50LWJldHdlZW4gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiA6dmFsdWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9Ob0xhYmVsXCIgOmlkPVwiJ3NoaXBwaW5nXycrYWRkcmVzcy5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRlZmF1bHRfc2hpcHBpbmdcIiBAY2hhbmdlPVwiZmV0Y2hTaGlwcGluZ0Nvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzcy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZ2xvYmFsLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcubmFtZSB9fSA6IHt7IGFkZHJlc3MubmFtZSB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLmVtYWlsIH19IDoge3sgYWRkcmVzcy5lbWFpbCB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLnBob25lIH19IDoge3sgYWRkcmVzcy5waG9uZV9ubyB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLnN0cmVldF9hZGRyZXNzIH19IDoge3sgYWRkcmVzcy5hZGRyZXNzIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcuY291bnRyeSB9fSA6IHt7IGFkZHJlc3MuY291bnRyeSB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLnN0YXRlIH19IDoge3sgYWRkcmVzcy5zdGF0ZSB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLmNpdHkgfX0gOiB7eyBhZGRyZXNzLmNpdHkgfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1kb3RzLXZlcnRpY2FsIGRyb3BidG5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMuYWRkcmVzc19mb3JtLmVkaXQoYWRkcmVzcylcIj57eyBsYW5nLmVkaXQgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhYWRkcmVzcy5kZWZhdWx0X3NoaXBwaW5nICYmICFhZGRyZXNzLmRlZmF1bHRfYmlsbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcmVmcy5hZGRyZXNzX2Zvcm0uZGVsZXRlQWRkcmVzcyhhZGRyZXNzLmlkKVwiPnt7IGxhbmcuZGVsZXRlIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgdi1pZj1cImFkZHJlc3Nlcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHYtbW9kZWw9XCJzYW1lX2FkZHJlc3NcIiBjaGVja2VkIGlkPVwic2FtZV9hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJiaWxsaW5nQWRkcmVzc1NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJzYW1lX2FzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLmFkZHJlc3NfaXNfc2hpcHBpbmcgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5hY2NvcmRpb24gLS0+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYWRkcmVzc2VzLmxlbmd0aCA+IDAgJiYgIXNhbWVfYWRkcmVzcyAmJiBjaGVja291dF9tZXRob2QgPT0gMlwiIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57eyBsYW5nLmJpbGxpbmdfYWRkcmVzcyB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNhcGl0YWxpemVcIiB2LWlmPVwiYWRkcmVzc2VzICYmICFzYW1lX2FkZHJlc3MgJiYgY2hlY2tvdXRfbWV0aG9kID09IDJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiIHYtZm9yPVwiKGFkZHJlc3MsIGluZGV4KSBpbiBhZGRyZXNzZXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIDppZD1cIidiaWxsaW5nXycrYWRkcmVzcy5pZFwiIGNsYXNzPVwiYWRkcmVzc19zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZy1jYXJkIGFkZHJlc3MgY2hla291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJkZWZhdWx0X2JpbGxpbmcuaWQgPT0gYWRkcmVzcy5pZCA/ICdzZWxlY3RlZCcgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJkZWZhdWx0X2JpbGxpbmcuaWQgPT0gYWRkcmVzcy5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgdi1tb2RlbD1cImRlZmF1bHRfYmlsbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2JpbGxpbmdfJythZGRyZXNzLmlkXCIgOnZhbHVlPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIi4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3sgbGFuZy5uYW1lIH19IDoge3sgYWRkcmVzcy5uYW1lIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcuZW1haWwgfX0gOiB7eyBhZGRyZXNzLmVtYWlsIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcucGhvbmUgfX0gOiB7eyBhZGRyZXNzLnBob25lX25vIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcuc3RyZWV0X2FkZHJlc3MgfX0gOiB7eyBhZGRyZXNzLmFkZHJlc3MgfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3sgbGFuZy5jb3VudHJ5IH19IDoge3sgYWRkcmVzcy5jb3VudHJ5IH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcuc3RhdGUgfX0gOiB7eyBhZGRyZXNzLnN0YXRlIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7IGxhbmcuY2l0eSB9fSA6IHt7IGFkZHJlc3MuY2l0eSB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgc3R5bGU9XCJmbG9hdDpyaWdodDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktZG90cy12ZXJ0aWNhbCBkcm9wYnRuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmFkZHJlc3NfZm9ybS5lZGl0KGFkZHJlc3MpXCI+e3sgbGFuZy5lZGl0IH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWFkZHJlc3MuZGVmYXVsdF9zaGlwcGluZyAmJiAhYWRkcmVzcy5kZWZhdWx0X2JpbGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMuYWRkcmVzc19mb3JtLmRlbGV0ZUFkZHJlc3MoYWRkcmVzcy5pZClcIj57eyBsYW5nLmRlbGV0ZSB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhZGRyZXNzRm9ybSByZWY9XCJhZGRyZXNzX2Zvcm1cIiB2LWlmPVwiY2hlY2tvdXRfbWV0aG9kID09IDJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5zZy1zaGlwcGluZyAtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCIgdi1lbHNlLWlmPVwic2hpbW1lclwiPlxyXG4gICAgICAgICAgICA8c2hpbW1lciBjbGFzcz1cIm1iLTNcIiA6aGVpZ2h0PVwiMjAwXCIgdi1mb3I9XCIoYWRkcmVzc2VzLGkpIGluIDNcIiA6a2V5PVwiaVwiPjwvc2hpbW1lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBwbC1sZy01XCIgdi1pZj1cImNhcnRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPGg2Pnt7IGxhbmcucHJpY2VfZGV0YWlscyB9fTwvaDY+XHJcbiAgICAgICAgICAgICAgPGNvdXBvbiB2LWlmPVwiYXV0aFVzZXJcIiA6Y291cG9uX2xpc3Q9XCJjb3Vwb25fbGlzdFwiIDpjYXJ0TGlzdD1cImNhcnRzXCI+PC9jb3Vwb24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXltZW50X2RldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICA6c3ViX3RvdGFsPVwicGF5bWVudF9mb3JtLnN1Yl90b3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnRheD1cInBheW1lbnRfZm9ybS50YXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkaXNjb3VudF9vZmZlcj1cInBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnNoaXBwaW5nX3RheD1cInBheW1lbnRfZm9ybS5zaGlwcGluZ190YXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjb3Vwb25fZGlzY291bnQ9XCJwYXltZW50X2Zvcm0uY291cG9uX2Rpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICA6dG90YWw9XCJwYXltZW50X2Zvcm0udG90YWxcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF5bWVudF9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LWlmPVwic2V0dGluZ3MucHJpdmFjeV9hZ3JlZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0bmNcIiB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWdyZWVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRuY1wiPnt7IGxhbmcuYWdyZWVtZW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwidXJsQ2hlY2soc2V0dGluZ3MucHJpdmFjeV9hZ3JlZW1lbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwic2V0dGluZ3MucHJpdmFjeV9hZ3JlZW1lbnRcIj57eyBsYW5nLnRlcm1zIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtZWxzZSA6dG89XCIncGFnZS8nK3NldHRpbmdzLnByaXZhY3lfYWdyZWVtZW50XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nLnRlcm1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bG9hZGluZ19idXR0b24gdi1pZj1cImxvYWRpbmdcIiA6Y2xhc3NfbmFtZT1cIididG4gYnRuLXByaW1hcnknXCI+PC9sb2FkaW5nX2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB2LWVsc2UgQGNsaWNrPVwiY29uZmlybU9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgbGFuZy5wcm9jZWVkX3RvX3BheW1lbnQgfX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLnJvdyAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+PCEtLSAvLnNob3BwaW5nLWNhcnQgLS0+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4uL3BhcnRpYWxzL3NoaW1tZXJcIjtcclxuaW1wb3J0IHRlbGVQaG9uZSBmcm9tIFwiLi4vcGFydGlhbHMvdGVsZXBob25lXCI7XHJcbmltcG9ydCBjb3Vwb24gZnJvbSBcIi4uL3BhcnRpYWxzL2NvdXBvblwiO1xyXG5pbXBvcnQgcGF5bWVudF9kZXRhaWxzIGZyb20gXCIuLi9wYXJ0aWFscy9wYXltZW50X2RldGFpbHNcIjtcclxuaW1wb3J0IGFkZHJlc3NGb3JtIGZyb20gXCIuLi9wYXJ0aWFscy9hZGRyZXNzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiY2hlY2tvdXRcIixcclxuICBjb21wb25lbnRzOiB7dGVsZVBob25lLCBzaGltbWVyLCBjb3Vwb24sIHBheW1lbnRfZGV0YWlscywgYWRkcmVzc0Zvcm19LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb3Vwb25fYXJlYTogdHJ1ZSxcclxuICAgICAgY291cG9uX2xpc3Q6IFtdLFxyXG4gICAgICBjaGVja291dDoge30sXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lX25vOiAnJyxcclxuICAgICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgICBjb3VudHJ5X2lkOiAnJyxcclxuICAgICAgICBzdGF0ZV9pZDogJycsXHJcbiAgICAgICAgY2l0eV9pZDogJycsXHJcbiAgICAgICAgcG9zdGFsX2NvZGU6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBzaGlwcGluZ19jb3N0OiAwLFxyXG4gICAgICBhZGRyZXNzX2FyZWE6IGZhbHNlLFxyXG4gICAgICBkZWZhdWx0X3NoaXBwaW5nOiB7fSxcclxuICAgICAgZGVmYXVsdF9iaWxsaW5nOiB7fSxcclxuICAgICAgc2FtZV9hZGRyZXNzOiB0cnVlLFxyXG4gICAgICBhZGRyZXNzZXM6IFtdLFxyXG4gICAgICBwaWNrX2h1YnM6IFtdLFxyXG4gICAgICBwaWNrX2h1Yl9pZDogJycsXHJcbiAgICAgIGNoZWNrb3V0X21ldGhvZDogMixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHNhdmVfbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGFncmVlbWVudDogbnVsbCxcclxuICAgICAgYWRkcmVzc19hcmVhX3RpdGxlOiAnQWRkIGEgbmV3IGFkZHJlc3MnLFxyXG4gICAgICBhZGRyZXNzX3N1Ym1pdF9idXR0b246IFwiQWRkXCIsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5nZXRBZGRyZXNzKCk7XHJcbiAgICB0aGlzLmFkZHJlc3Nfc3VibWl0X2J1dHRvbiA9IHRoaXMubGFuZy5hZGQ7XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgY2FydHMobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZ2V0QWRkcmVzcygpO1xyXG4gICAgfSxcclxuICAgIGxhbmcobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWRkcmVzc19zdWJtaXRfYnV0dG9uID0gdGhpcy5sYW5nLmFkZDtcclxuXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNhcnRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXJ0cztcclxuICAgIH0sXHJcbiAgICBzaGltbWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubW9kdWxlLnNoaW1tZXJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRBZGRyZXNzKCkge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvYWRkcmVzcycpO1xyXG4gICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldExvZ2luUmVkaXJlY3Rpb24nLCAnJyk7XHJcbiAgICAgICAgICBsZXQgY291cG9ucyA9IHJlc3BvbnNlLmRhdGEuY291cG9ucztcclxuICAgICAgICAgIHRoaXMucGFyc2VEYXRhKHRoaXMuY2FydHMsIHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRzLCBjb3Vwb25zKTtcclxuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gcmVzcG9uc2UuZGF0YS5hZGRyZXNzZXM7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0ID0gcmVzcG9uc2UuZGF0YS5jaGVja291dDtcclxuICAgICAgICAgIHRoaXMucGlja19odWJzID0gcmVzcG9uc2UuZGF0YS5waWNrdXBfaHVicztcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWRkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZHJlc3Nlc1tpXS5kZWZhdWx0X3NoaXBwaW5nID09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRfc2hpcHBpbmcgPSB0aGlzLmFkZHJlc3Nlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzZXNbaV0uZGVmYXVsdF9iaWxsaW5nID09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRfYmlsbGluZyA9IHRoaXMuYWRkcmVzc2VzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuYWRkcmVzc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NfYXJlYSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY29uZmlybU9yZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5wcml2YWN5X2FncmVlbWVudCAmJiAhdGhpcy5hZ3JlZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdG9hc3RyLmluZm8odGhpcy5sYW5nLmFjY2VwdF90ZXJtcywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGF5bWVudF9mb3JtLmNoZWNrb3V0X21ldGhvZCA9IHRoaXMuY2hlY2tvdXRfbWV0aG9kO1xyXG4gICAgICBpZiAodGhpcy5jaGVja291dF9tZXRob2QgPT0gMSkge1xyXG4gICAgICAgIGlmICghdGhpcy5waWNrX2h1Yl9pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5pbmZvKHRoaXMubGFuZy5wbGVhc2VfY2hvb3NlX2FfcGlja0h1Yl9wb2ludCwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5waWNrX2h1Yl9pZCA9IHRoaXMucGlja19odWJfaWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRfc2hpcHBpbmcuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyh0aGlzLmxhbmcucGxlYXNlX2Nob29zZV9hX2JpbGxpbmdfYWRkcmVzcywgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5zaGlwcGluZ19hZGRyZXNzID0gdGhpcy5kZWZhdWx0X3NoaXBwaW5nO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLmJpbGxpbmdfYWRkcmVzcyA9IHRoaXMuZGVmYXVsdF9iaWxsaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY29uZmlybS1vcmRlcicpO1xyXG4gICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgYXhpb3MucG9zdCh1cmwsIHRoaXMucGF5bWVudF9mb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAncGF5bWVudCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiaWxsaW5nQWRkcmVzc1NlbGVjdCgpIHtcclxuICAgICAgaWYgKHRoaXMuc2FtZV9hZGRyZXNzKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0X2JpbGxpbmcgPSB0aGlzLmRlZmF1bHRfc2hpcHBpbmc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0X2JpbGxpbmcgPSB7fTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhcnNlRGF0YShjYXJ0cywgY2hlY2tvdXRzLCBjb3Vwb25zKSB7XHJcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5xdWFudGl0eS5wdXNoKHtpZDogY2FydHNbaV0uaWQsIHF1YW50aXR5OiBjYXJ0c1tpXS5xdWFudGl0eX0pO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnN1Yl90b3RhbCArPSBwYXJzZUZsb2F0KGNhcnRzW2ldLnByaWNlICogY2FydHNbaV0ucXVhbnRpdHkpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLmRpc2NvdW50X29mZmVyICs9IHBhcnNlRmxvYXQoY2FydHNbaV0uZGlzY291bnQgKiBjYXJ0c1tpXS5xdWFudGl0eSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hpcHBpbmdfY29zdCA9PSAncHJvZHVjdF9iYXNlJykge1xyXG4gICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4ICs9IHBhcnNlRmxvYXQoY2FydHNbaV0uc2hpcHBpbmdfY29zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRheCArPSBwYXJzZUZsb2F0KGNhcnRzW2ldLnRheCAqIGNhcnRzW2ldLnF1YW50aXR5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoZWNrb3V0cykge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjaGVja291dHMpIHtcclxuICAgICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCArPSBwYXJzZUZsb2F0KGNoZWNrb3V0c1trZXldLnNoaXBwaW5nX2Nvc3QpO1xyXG4gICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0udGF4ICs9IHBhcnNlRmxvYXQoY2hlY2tvdXRzW2tleV0udGF4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb3Vwb25zICYmIHRoaXMuc2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5jb3Vwb25fbGlzdCA9IGNvdXBvbnM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3Vwb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQgKz0gcGFyc2VGbG9hdChjb3Vwb25zW2ldLmRpc2NvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2hpcHBpbmdfY29zdCA9IHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheDtcclxuXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2hpcHBpbmdDb3N0KCk7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hTaGlwcGluZ0Nvc3QoKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdF9iaWxsaW5nID0gdGhpcy5kZWZhdWx0X3NoaXBwaW5nO1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaGlwcGluZ19mZWVfdHlwZSA9PSAnYXJlYV9iYXNlJykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9maW5kL3NoaXBwaW5nX2Nvc3QnKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm0gPSB7XHJcbiAgICAgICAgICBjaXR5X2lkOiB0aGlzLmRlZmF1bHRfc2hpcHBpbmcuYWRkcmVzc19pZHMuY2l0eV9pZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBmb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCA9IHJlc3BvbnNlLmRhdGEuc2hpcHBpbmdfY29zdDtcclxuICAgICAgICAgICAgdGhpcy5zaGlwcGluZ19jb3N0ID0gdGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4O1xyXG4gICAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS50b3RhbCA9IChwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnN1Yl90b3RhbCkgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnRheCkgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCkpIC0gKHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uZGlzY291bnRfb2ZmZXIpICsgcGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRheF90eXBlID09ICdhZnRlcl90YXgnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0udG90YWwgPSAocGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5zdWJfdG90YWwpICsgcGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5zaGlwcGluZ190YXgpKSAtIChwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLmRpc2NvdW50X29mZmVyKSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uY291cG9uX2Rpc2NvdW50KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXltZW50X2Zvcm0udG90YWwgKz0gdGhpcy5wYXltZW50X2Zvcm0udGF4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRvdGFsID0gKHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc3ViX3RvdGFsKSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0udGF4KSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4KSkgLSAocGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlcikgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLmNvdXBvbl9kaXNjb3VudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNhbGN1bGF0ZVNoaXBwaW5nQ29zdCgpIHtcclxuICAgICAgdGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4ID0gMDtcclxuICAgICAgaWYgKHRoaXMuY2hlY2tvdXRfbWV0aG9kID09IDEpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5zaGlwcGluZ190YXggPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCA9IHRoaXMuc2hpcHBpbmdfY29zdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGF4X3R5cGUgPT0gJ2FmdGVyX3RheCcgJiYgdGhpcy5zZXR0aW5ncy52YXRfYW5kX3RheF90eXBlID09ICdvcmRlcl9iYXNlJykge1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRvdGFsID0gKHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc3ViX3RvdGFsKSArIHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4KSkgLSAocGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlcikgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLmNvdXBvbl9kaXNjb3VudCkpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9mb3JtLnRvdGFsICs9IHRoaXMucGF5bWVudF9mb3JtLnRheDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS50b3RhbCA9IChwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnN1Yl90b3RhbCkgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnRheCkgKyBwYXJzZUZsb2F0KHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCkpIC0gKHBhcnNlRmxvYXQodGhpcy5wYXltZW50X2Zvcm0uZGlzY291bnRfb2ZmZXIpICsgcGFyc2VGbG9hdCh0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldE51bWJlcihudW1iZXIpIHtcclxuICAgICAgdGhpcy5mb3JtLnBob25lX25vID0gbnVtYmVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24gYWRkLW5ld1wiIHJlZj1cInVwZGF0ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1pdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjY29yZGlvbi1idXR0b25cIiA6Y2xhc3M9XCJ7ICdjb2xsYXBzZWQnIDogIWFkZHJlc3NfYXJlYSB9XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZHJlc3NfYXJlYSA9ICFhZGRyZXNzX2FyZWFcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjc2hpcHBpbmdfYWNjb3JkaW9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTFcIj57eyBhZGRyZXNzX2FyZWFfdGl0bGUgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJzaGlwcGluZ19hY2NvcmRpb25cIiBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnc2hvdycgOiBhZGRyZXNzX2FyZWEgfVwiIGFyaWEtbGFiZWxsZWRieT1cImFkZHJlc3MxXCJcclxuICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlQWRkcmVzcygpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLm5hbWUgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLm5hbWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb25fZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5uYW1lXCI+e3sgZXJyb3JzLm5hbWVbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5lbWFpbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMuZW1haWwgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb25fZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5lbWFpbFwiPnt7IGVycm9ycy5lbWFpbFswXSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLnBob25lIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZWxlUGhvbmUgQHBob25lX25vPVwiZ2V0TnVtYmVyXCI+PC90ZWxlUGhvbmU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb25fZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5waG9uZV9ub1wiPnt7IGVycm9ycy5waG9uZV9ub1swXSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLmNvdW50cnkgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOmRpcj1cInNldHRpbmdzLnRleHRfZGlyZWN0aW9uXCIgbGFiZWw9XCJuYW1lXCIgOm9wdGlvbnM9XCJjb3VudHJpZXNcIiB2LW1vZGVsPVwiZm9ybS5jb3VudHJ5X2lkXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIEBpbnB1dD1cImdldFN0YXRlcygpXCIgOmNsYXNzPVwieyAnZXJyb3JfYm9yZGVyJyA6IGVycm9ycy5jb3VudHJ5X2lkIH1cIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb25fZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5jb3VudHJ5X2lkXCI+e3sgZXJyb3JzLmNvdW50cnlfaWRbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5zdGF0ZSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6ZGlyPVwic2V0dGluZ3MudGV4dF9kaXJlY3Rpb25cIiBsYWJlbD1cIm5hbWVcIiA6b3B0aW9ucz1cInN0YXRlc1wiIHYtbW9kZWw9XCJmb3JtLnN0YXRlX2lkXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIEBpbnB1dD1cImdldENpdGllcygpXCIgOmNsYXNzPVwieyAnZXJyb3JfYm9yZGVyJyA6IGVycm9ycy5zdGF0ZV9pZCB9XCI+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJlcnJvcnMuc3RhdGVfaWRcIj57eyBlcnJvcnMuc3RhdGVfaWRbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5jaXR5IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDpkaXI9XCJzZXR0aW5ncy50ZXh0X2RpcmVjdGlvblwiIGxhYmVsPVwibmFtZVwiIDpvcHRpb25zPVwiY2l0aWVzXCIgdi1tb2RlbD1cImZvcm0uY2l0eV9pZFwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6Y2xhc3M9XCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLmNpdHlfaWQgfVwiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbl9lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZXJyb3JzLmNpdHlfaWRcIj57eyBlcnJvcnMuY2l0eV9pZFswXSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLnBvc3RhbF9jb2RlIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3JfYm9yZGVyJyA6IGVycm9ycy5wb3N0YWxfY29kZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImxhbmcucG9zdGFsX2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucG9zdGFsX2NvZGVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCIgdi1pZj1cImVycm9ycy5wb3N0YWxfY29kZVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnBvc3RhbF9jb2RlWzBdXHJcbiAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcuYWRkcmVzcyB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJmb3JtLmFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMuYWRkcmVzcyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy5zdHJlZXRfYWRkcmVzc1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb25fZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5hZGRyZXNzXCI+e3sgZXJyb3JzLmFkZHJlc3NbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxvYWRpbmdfYnV0dG9uIHYtaWY9XCJsb2FkaW5nXCIgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5J1wiPjwvbG9hZGluZ19idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2LWVsc2UgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAge3sgYWRkcmVzc19zdWJtaXRfYnV0dG9uIH19XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdGVsZVBob25lIGZyb20gXCIuL3RlbGVwaG9uZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiYWRkcmVzc0Zvcm1cIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAgdGVsZVBob25lXHJcbiAgfSxcclxuICBkYXRhKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhZGRyZXNzX2FyZWE6IGZhbHNlLFxyXG4gICAgICBhZGRyZXNzX2FyZWFfdGl0bGUgOiAnJyxcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZV9ubzogJycsXHJcbiAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgY291bnRyeV9pZDogJycsXHJcbiAgICAgICAgc3RhdGVfaWQ6ICcnLFxyXG4gICAgICAgIGNpdHlfaWQ6ICcnLFxyXG4gICAgICAgIHBvc3RhbF9jb2RlOiAnJyxcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlczogW10sXHJcbiAgICAgIGNpdGllczogW10sXHJcbiAgICAgIGFkZHJlc3Nfc3VibWl0X2J1dHRvbjogJycsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5hZGRyZXNzX2FyZWFfdGl0bGUgPSB0aGlzLmxhbmcuYWRkcmVzc19hcmVhX3RpdGxlO1xyXG4gICAgdGhpcy5hZGRyZXNzX3N1Ym1pdF9idXR0b24gPSB0aGlzLmxhbmcuYWRkcmVzc19zdWJtaXRfYnV0dG9uO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGxhbmcoKSB7XHJcbiAgICAgIHRoaXMuYWRkcmVzc19hcmVhX3RpdGxlID0gdGhpcy5sYW5nLmFkZHJlc3NfYXJlYV90aXRsZTtcclxuICAgICAgdGhpcy5hZGRyZXNzX3N1Ym1pdF9idXR0b24gPSB0aGlzLmxhbmcuYWRkcmVzc19zdWJtaXRfYnV0dG9uO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNvdW50cmllcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q291bnRyeUxpc3Q7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzIDoge1xyXG4gICAgc2F2ZUFkZHJlc3MoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgnc3RvcmUvdXNlci1hZGRyZXNzJyk7XHJcblxyXG4gICAgICBheGlvcy5wb3N0KHVybCwgdGhpcy5mb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLnN1Y2Nlc3MsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nZXRBZGRyZXNzKCk7XHJcbiAgICAgICAgICB0aGlzLmFkZHJlc3NfYXJlYSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mb3JtLmlkID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ubmFtZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mb3JtLmVtYWlsID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ucGhvbmVfbm8gPSAnJztcclxuICAgICAgICAgIHRoaXMuZm9ybS5hZGRyZXNzID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZvcm0uY291bnRyeV9pZCA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnN0YXRlX2lkID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZvcm0uY2l0eV9pZCA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnBvc3RhbF9jb2RlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmFkZHJlc3NfYXJlYV90aXRsZSA9IHRoaXMubGFuZy5hZGRyZXNzX2FyZWFfdGl0bGU7XHJcbiAgICAgICAgICB0aGlzLmFkZHJlc3Nfc3VibWl0X2J1dHRvbiA9IHRoaXMubGFuZy5hZGRyZXNzX3N1Ym1pdF9idXR0b247XHJcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldE1vYmlsZU5vJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MjIpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5waG9uZV9ubyA9IG51bWJlcjtcclxuICAgIH0sXHJcbiAgICBnZXRTdGF0ZXMoYWRkcmVzcykge1xyXG4gICAgICBsZXQgY291bnRyeV9pZCA9IHRoaXMuZm9ybS5jb3VudHJ5X2lkO1xyXG5cclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCdzdGF0ZS9ieS1jb3VudHJ5LycgKyBjb3VudHJ5X2lkKTtcclxuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZXMgPSByZXNwb25zZS5kYXRhLnN0YXRlcztcclxuICAgICAgICAgIGlmIChhZGRyZXNzICYmIGFkZHJlc3MuYWRkcmVzc19pZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLnN0YXRlX2lkID0gcGFyc2VJbnQoYWRkcmVzcy5hZGRyZXNzX2lkcy5zdGF0ZV9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2l0aWVzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2l0aWVzKGFkZHJlc3MpIHtcclxuICAgICAgbGV0IHN0YXRlX2lkID0gdGhpcy5mb3JtLnN0YXRlX2lkO1xyXG5cclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCdjaXR5L2J5LXN0YXRlLycgKyBzdGF0ZV9pZCk7XHJcbiAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2l0aWVzID0gcmVzcG9uc2UuZGF0YS5jaXRpZXM7XHJcbiAgICAgICAgICBpZiAoYWRkcmVzcyAmJiBhZGRyZXNzLmFkZHJlc3NfaWRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5jaXR5X2lkID0gcGFyc2VJbnQoYWRkcmVzcy5hZGRyZXNzX2lkcy5jaXR5X2lkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGVkaXQoYWRkcmVzcykge1xyXG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICB0aGlzLmFkZHJlc3NfYXJlYSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWRkcmVzc19hcmVhX3RpdGxlID0gdGhpcy5sYW5nLnVwZGF0ZV9hZGRyZXNzO1xyXG4gICAgICB0aGlzLmFkZHJlc3Nfc3VibWl0X2J1dHRvbiA9IHRoaXMubGFuZy51cGRhdGU7XHJcblxyXG4gICAgICB0aGlzLmZvcm0ubmFtZSA9IGFkZHJlc3MubmFtZTtcclxuICAgICAgdGhpcy5mb3JtLmVtYWlsID0gYWRkcmVzcy5lbWFpbDtcclxuICAgICAgdGhpcy5mb3JtLnBob25lX25vID0gYWRkcmVzcy5waG9uZV9ubztcclxuICAgICAgdGhpcy5mb3JtLmFkZHJlc3MgPSBhZGRyZXNzLmFkZHJlc3M7XHJcbiAgICAgIHRoaXMuZm9ybS5jb3VudHJ5X2lkID0gcGFyc2VJbnQoYWRkcmVzcy5hZGRyZXNzX2lkcyA/IGFkZHJlc3MuYWRkcmVzc19pZHMuY291bnRyeV9pZCA6ICcnKTtcclxuICAgICAgdGhpcy5mb3JtLnBvc3RhbF9jb2RlID0gYWRkcmVzcy5wb3N0YWxfY29kZTtcclxuICAgICAgdGhpcy5mb3JtLmlkID0gYWRkcmVzcy5pZDtcclxuICAgICAgdGhpcy5nZXRTdGF0ZXMoYWRkcmVzcyk7XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0TW9iaWxlTm8nLCB0aGlzLmZvcm0ucGhvbmVfbm8pO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy4kcmVmcy51cGRhdGU7XHJcblxyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICAvLyBVc2UgZWwuc2Nyb2xsSW50b1ZpZXcoKSB0byBpbnN0YW50bHkgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlQWRkcmVzcyhpZCkge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ2RlbGV0ZS91c2VyLWFkZHJlc3MvJyArIGlkKTtcclxuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nZXRBZGRyZXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiIGlkPVwiY291cG9uQWNjb3JkaW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2NvdXBvbkNvbGxhcHNlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCI+PHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL290aGVycy9wZW5jaWwxLnBuZycpXCIgYWx0PVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIj48L3NwYW4+e3sgbGFuZy5hcHBseV9jb3Vwb25fY29kZSB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImNvdXBvbkNvbGxhcHNlXCIgY2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIlxyXG4gICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLWJzLXBhcmVudD1cIiNjb3Vwb25BY2NvcmRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3Vwb24tY29kZS1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3Vwb24tY29kZVwiIHYtZm9yPVwiKGNvdXBvbixpbmRleCkgaW4gY291cG9uX2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDxoNT57eyBjb3Vwb24udGl0bGUgfX08L2g1PlxyXG4gICAgICAgICAgICAgIDxQPnt7XHJcbiAgICAgICAgICAgICAgICAgIGNvdXBvbi5kaXNjb3VudF90eXBlID09ICdmbGF0JyA/IHByaWNlRm9ybWF0KGNvdXBvbi5kaXNjb3VudCkgOiBjb3Vwb24uY291cG9uX2Rpc2NvdW50ICsgJyUgJyArIGxhbmcub2ZmXHJcbiAgICAgICAgICAgICAgICB9fTwvUD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIEBjbGljaz1cInJlbW92ZUNvdXBvbihjb3Vwb24uY291cG9uX2lkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiYXBwbHlDb3Vwb25cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBheW1lbnRfZm9ybS5jb3Vwb25fY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpwbGFjZWhvbGRlcj1cImxhbmcuZW50ZXJfY291cG9uX2NvZGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGxvYWRpbmdfYnV0dG9uIHYtaWY9XCJsb2FkaW5nXCIgOmNsYXNzX25hbWU9XCInb3BhY2l0eV81J1wiPjwvbG9hZGluZ19idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1lbHNlPnt7IGxhbmcuYXBwbHkgfX08L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImNvdXBvblwiLFxyXG4gIHByb3BzOiBbJ2NvdXBvbl9saXN0JywgJ2NhcnRMaXN0J10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXBwbHlDb3Vwb24oKSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9hcHBseV9jb3Vwb24nKTtcclxuICAgICAgdGhpcy5wYXltZW50X2Zvcm0udHJ4X2lkID0gdGhpcy5jYXJ0TGlzdFswXS50cnhfaWQ7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGF4aW9zLnBvc3QodXJsLCB0aGlzLnBheW1lbnRfZm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuICAgICAgICAgIHRoaXMuY2FydHMgPSBbXTtcclxuICAgICAgICAgIGxldCBjYXJ0cyA9IHJlc3BvbnNlLmRhdGEuY2FydHM7XHJcbiAgICAgICAgICBsZXQgY2hlY2tvdXRzID0gcmVzcG9uc2UuZGF0YS5jaGVja291dHM7XHJcbiAgICAgICAgICBsZXQgY291cG9ucyA9IHJlc3BvbnNlLmRhdGEuY291cG9ucztcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5wYXJzZURhdGEoY2FydHMsIGNoZWNrb3V0cywgY291cG9ucyk7XHJcbiAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fY29kZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTb21ldGhpbmcgV2VudCBXcm9uZycsICdFcnJvciAhIScpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVDb3Vwb24oaWQpIHtcclxuICAgICAgaWYgKGNvbmZpcm0oJ0FyZSBZb3UgU3VyZSA/JykpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvY291cG9uLWRlbGV0ZScpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBmb3JtID0ge1xyXG4gICAgICAgICAgdHJ4X2lkOiB0aGlzLmNhcnRMaXN0WzBdLnRyeF9pZCxcclxuICAgICAgICAgIGNvdXBvbl9pZDogaWQsXHJcbiAgICAgICAgICB1c2VyX2lkOiB0aGlzLmF1dGhVc2VyLmlkLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2FydHMgPSByZXNwb25zZS5kYXRhLmNhcnRzO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tvdXRzID0gcmVzcG9uc2UuZGF0YS5jaGVja291dHM7XHJcbiAgICAgICAgICAgIGxldCBjb3Vwb25zID0gcmVzcG9uc2UuZGF0YS5jb3Vwb25zO1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQucGFyc2VEYXRhKGNhcnRzLCBjaGVja291dHMsIGNvdXBvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnBheW1lbnRfZm9ybS5jb3Vwb25fY29kZSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTb21ldGhpbmcgV2VudCBXcm9uZycsICdFcnJvciAhIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx1bCBjbGFzcz1cImdsb2JhbC1saXN0XCI+XHJcbiAgICAgIDxsaT57eyBsYW5nLnN1YnRvdGFsIH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KHN1Yl90b3RhbCkgfX08L3NwYW4+PC9saT5cclxuICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy50YXhfdHlwZSA9PSAnYmVmb3JlX3RheCcgfHwgc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSAncHJvZHVjdF9iYXNlJ1wiPnt7IGxhbmcudGF4IH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KHRheCkgfX08L3NwYW4+PC9saT5cclxuICAgICAgPGxpPnt7IGxhbmcuZGlzY291bnQgfX08c3Bhbj57eyBwcmljZUZvcm1hdChkaXNjb3VudF9vZmZlcikgfX08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3Muc2hpcHBpbmdfY29zdCAhPSAnYXJlYV9iYXNlJyB8fCAkcm91dGUubmFtZSAhPSAnY2FydCdcIj57eyBsYW5nLnNoaXBwaW5nX2Nvc3QgfX08c3Bhbj57e1xyXG4gICAgICAgICAgcHJpY2VGb3JtYXQoc2hpcHBpbmdfdGF4KVxyXG4gICAgICAgIH19PC9zcGFuPjwvbGk+XHJcbiAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXCI+e3sgbGFuZy5jb3Vwb25fZGlzY291bnQgfX08c3Bhbj57e1xyXG4gICAgICAgICAgcHJpY2VGb3JtYXQoY291cG9uX2Rpc2NvdW50KVxyXG4gICAgICAgIH19PC9zcGFuPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGRpdiBjbGFzcz1cIm9yZGVyLXRvdGFsXCIgdi1pZj1cInNldHRpbmdzLnRheF90eXBlID09ICdhZnRlcl90YXgnICYmIHNldHRpbmdzLnZhdF9hbmRfdGF4X3R5cGUgPT0gJ29yZGVyX2Jhc2UnXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiZm9udF93ZWlnaHRfNDAwXCI+e3sgbGFuZy50b3RhbCB9fSA8c3Bhbj57eyBwcmljZUZvcm1hdCh0b3RhbCAtIHRheCkgfX08L3NwYW4+PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImZvbnRfd2VpZ2h0XzQwMFwiPnt7IGxhbmcudGF4IH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KHRheCkgfX08L3NwYW4+PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImdyYW5kX3RvdGFsX3N0eWxlXCI+e3sgbGFuZy5ncmFuZF90b3RhbCB9fSA8c3Bhbj57eyBwcmljZUZvcm1hdCh0b3RhbCkgfX08L3NwYW4+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3JkZXItdG90YWxcIiB2LWVsc2U+XHJcbiAgICAgIDxwPnt7IGxhbmcudG90YWwgfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQodG90YWwpIH19PC9zcGFuPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicGF5bWVudF9kZXRhaWxzXCIsXHJcbiAgcHJvcHMgOiBbJ3N1Yl90b3RhbCcsJ3RheCcsJ2Rpc2NvdW50X29mZmVyJywnc2hpcHBpbmdfdGF4JywnY291cG9uX2Rpc2NvdW50JywndG90YWwnXSxcclxuICBtb3VudGVkKCkge1xyXG4gIH1cclxufVxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZXZpZXcuanBnJylcIiBhbHQ9XCJzaGltbWVyXCJcclxuICAgICAgIGNsYXNzPVwic2hpbW1lclwiIHYtYmluZDpzdHlsZT0gXCJbaGVpZ2h0ID8gc3R5bGUgOiBudWxsXVwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJzaGltbWVyLnZ1ZVwiLFxyXG4gICAgcHJvcHM6IFsnaGVpZ2h0J10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5oZWlnaHQrJ3B4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwieW9vcmlfX3NpZ251cC0tZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLWNvbmZpZ1wiIEBjbGljay5zdG9wPVwiYWN0aXZlRHJvcERvd25cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLWNvbmZpZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLWZsYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJkZWZhdWx0Q291bnRyeS5mbGFnXCIgYWx0PVwiRmxhZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHJ5X19jb2RlLS1udW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBkZWZhdWx0Q291bnRyeS5jb2RlIH19XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHJ5X19kcm9wZG93blwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBAY2xpY2suc3RvcCBjbGFzcz1cImNvdW50cnlfX2NvZGUtLWxpc3RcIiA6Y2xhc3M9XCJhY3RpdmVDbGFzc1wiPlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHYtbW9kZWw9XCJzZWFyY2hfa2V5XCIgQGtleXVwPVwiY291bnRyeVNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb3VudHJ5X19zZWFyY2hcIj5cclxuICAgICAgICA8bGkgdi1mb3I9XCIoY291bnRyeSxpbmRleCkgaW4gZmlsdGVyZWRfY291bnRyaWVzXCIgQGNsaWNrPVwiZ2V0Q291bnRyeUNvZGUoY291bnRyeSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHJ5X19jb2RlLS1mbGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWxhenk9XCJjb3VudHJ5LmZsYWdfaWNvblwiIGFsdD1cIkZsYWdcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGNvdW50cnkubmFtZSB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLW51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IFBsdXNDaGVjayhjb3VudHJ5KSA/IGNvdW50cnkucGhvbmVjb2RlIDogJysnICsgY291bnRyeS5waG9uZWNvZGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj4gPCEtLSAvLmNvdW50cnlfX2NvZGUtLWNvbmZpZyAtLT5cclxuICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJudW1iZXJcIiBAa2V5dXA9XCJnZXROdW1cIiB2LW1vZGVsPVwicGhvbmVfbm9cIj5cclxuICA8L2Zvcm0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJ0ZWxlcGhvbmVcIixcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRyb3Bkb3duX2FjdGl2ZTogZmFsc2UsXHJcbiAgICAgIHNlYXJjaF9rZXk6ICcnLFxyXG4gICAgICBzZWxlY3RlZF9jb3VudHJ5OiAnJyxcclxuICAgICAgZGVmYXVsdENvdW50cnk6IHtcclxuICAgICAgICBmbGFnOiAnJyxcclxuICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBhY3RpdmVDbGFzczogJ2hpZGVTaG93JyxcclxuICAgICAgcGhvbmVfbm86ICcnLFxyXG4gICAgICBjb3VudDogMSxcclxuICAgICAgZmlsdGVyZWRfY291bnRyaWVzOiBbXVxyXG5cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgcGhvbmUoKSB7XHJcbiAgICAgIHRoaXMucGhvbmVfbm8gPSB0aGlzLnBob25lO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuY291bnRyeSgpO1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHBob25lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRNb2JpbGVObztcclxuICAgIH0sXHJcbiAgICBjb3VudHJpZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENvdW50cnlMaXN0O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgUGx1c0NoZWNrKGNvdW50cnkpIHtcclxuICAgICAgaWYgKGNvdW50cnkpIHtcclxuICAgICAgICByZXR1cm4gY291bnRyeS5waG9uZWNvZGUuaW5jbHVkZXMoXCIrXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0Q291bnRyeUNvZGUoY291bnRyeSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gJ2hpZGVTaG93J1xyXG4gICAgICB0aGlzLnBob25lX25vID0gJyc7XHJcbiAgICAgIHRoaXMuY291bnQgPSAxO1xyXG5cclxuICAgICAgaWYgKGNvdW50cnkpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5LmZsYWcgPSBjb3VudHJ5LmZsYWdfaWNvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5LmZsYWcgPSB0aGlzLmdldFVybCgncHVibGljL2ltYWdlcy9mbGFncy9iZC5wbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvZGUgPSAnKzg4MCdcclxuXHJcbiAgICAgIGlmICghY291bnRyeSkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeS5uYW1lID0gJ0JhbmdsYWRlc2gnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb3VudHJ5LnBob25lY29kZS5pbmNsdWRlcyhcIitcIikpIHtcclxuICAgICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkuY29kZSA9IGNvdW50cnkucGhvbmVjb2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5LmNvZGUgPSAnKycgKyBjb3VudHJ5LnBob25lY29kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeS5uYW1lID0gY291bnRyeS5uYW1lO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBhY3RpdmVEcm9wRG93bigpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlQ2xhc3MgPT0gJ2hpZGVTaG93Jykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnaGlkZVNob3cnXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2VhcmNoRHJvcGRvd24pXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaGlkZVNlYXJjaERyb3Bkb3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnaGlkZVNob3cnO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNlYXJjaERyb3Bkb3duKVxyXG4gICAgfSxcclxuICAgIGNvdW50cnlTZWFyY2goKSB7XHJcbiAgICAgIGxldCByZXM7XHJcbiAgICAgIHJlcyA9IHRoaXMuY291bnRyaWVzLmZpbHRlcigoZCkgPT4gZC5uYW1lKTtcclxuICAgICAgdGhpcy5maWx0ZXJlZF9jb3VudHJpZXMgPSByZXMuZmlsdGVyKFxyXG4gICAgICAgICAgKGQpID0+XHJcbiAgICAgICAgICAgICAgKGQubmFtZSAmJiBkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaF9rZXkpKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZF9jb3VudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtKCkge1xyXG4gICAgICBpZiAodGhpcy5jb3VudCA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZV9ubyA9IHRoaXMuZGVmYXVsdENvdW50cnkuY29kZSArIHRoaXMucGhvbmVfbm9cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBob25lX25vID09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZV9ubyA9IHRoaXMuZGVmYXVsdENvdW50cnkuY29kZSArIHRoaXMucGhvbmVfbm9cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdwaG9uZV9ubycsIHRoaXMucGhvbmVfbm8pO1xyXG4gICAgICB0aGlzLmNvdW50KytcclxuICAgIH0sXHJcbiAgICBjb3VudHJ5KCkge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ2dldC9jb3VudHJ5LWxpc3QnKTtcclxuICAgICAgaWYgKHRoaXMuY291bnRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkX2NvdW50cmllcyA9IHRoaXMuY291bnRyaWVzO1xyXG4gICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChlbCA9PiBlbC5pZCA9PSB0aGlzLnNldHRpbmdzLmRlZmF1bHRfY291bnRyeSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb3VudHJ5Q29kZShjb3VudHJ5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0Q291bnRyeUxpc3QnLHJlc3BvbnNlLmRhdGEuY291bnRyaWVzKVxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkX2NvdW50cmllcyA9IHJlc3BvbnNlLmRhdGEuY291bnRyaWVzO1xyXG4gICAgICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuY291bnRyaWVzLmZpbmQoZWwgPT4gZWwuaWQgPT0gdGhpcy5zZXR0aW5ncy5kZWZhdWx0X2NvdW50cnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdldENvdW50cnlDb2RlKGNvdW50cnkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNmZmOTUzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoZWNrb3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyNmZmOTUzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyNmZmOTUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyNmZmOTUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGVja291dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI2ZmY5NTMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDI2ZmY5NTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NoZWNrb3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWRkcmVzc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFiYWNiNjA2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FkZHJlc3NGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYWRkcmVzc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhYmFjYjYwNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWJhY2I2MDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWJhY2I2MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWJhY2I2MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FkZHJlc3NGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYmFjYjYwNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhYmFjYjYwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvYWRkcmVzc0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb3Vwb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQyNDVhZmRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvdXBvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvdXBvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQyNDVhZmRlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkMjQ1YWZkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMjQ1YWZkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMjQ1YWZkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY291cG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMjQ1YWZkZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMjQ1YWZkZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvY291cG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5bWVudF9kZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2Y4MGZhNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXltZW50X2RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXltZW50X2RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxY2Y4MGZhNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWNmODBmYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWNmODBmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWNmODBmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BheW1lbnRfZGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNmODBmYTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWNmODBmYTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3BheW1lbnRfZGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWRhOTI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFkYTkyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZGE5MjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90ZWxlcGhvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0YzU0MTJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY0YzU0MTJlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNGM1NDEyZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNGM1NDEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNGM1NDEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGVsZXBob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGM1NDEyZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNGM1NDEyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdGVsZXBob25lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja291dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkcmVzc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkcmVzc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvdXBvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb3Vwb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheW1lbnRfZGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXltZW50X2RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVsZXBob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNmZmOTUzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZHJlc3NGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYmFjYjYwNiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb3Vwb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQyNDVhZmRlJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheW1lbnRfZGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNmODBmYTQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVsZXBob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGM1NDEyZSZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctcGFnZS1jb250ZW50XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctYnJlYWRjcnVtYlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcIm9sXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJjYXJ0XCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnZpZXdfY2FydCkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmNoZWNrX291dCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuY29uZmlybV9vcmRlcikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJzaG9wcGluZy1jYXJ0XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIHRydWVcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNnLXNoaXBwaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuY2hvb3NlX2Ffd2F5X3RvX2NvbGxlY3Rfb3JkZXIpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5waWNrX2h1YnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZm9ybVwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tvdXRfbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja291dF9tZXRob2RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5jaGVja291dF9tZXRob2QsIFwiMlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrb3V0X21ldGhvZCA9IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGN1bGF0ZVNoaXBwaW5nQ29zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJhZGRyZXNzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy51c2Vfc2hpcHBpbmdfYmlsbGluZ19hZGRyZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja291dF9tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrb3V0X21ldGhvZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGlja2h1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLmNoZWNrb3V0X21ldGhvZCwgXCIxXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tvdXRfbWV0aG9kID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FsY3VsYXRlU2hpcHBpbmdDb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInBpY2todWJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy51c2VfcGlja0h1Yl9wb2ludCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGlja19odWJzLmxlbmd0aCA+IDAgJiYgX3ZtLmNoZWNrb3V0X21ldGhvZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucGlja0h1Yl9wb2ludCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5jaGVja291dF9tZXRob2QgPT0gMSAmJiBfdm0ucGlja19odWJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBpY2tfaHViX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGlja19odWJfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5waWNrX2h1Yl9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGN1bGF0ZVNoaXBwaW5nQ29zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnNlbGVjdF9waWNrSHViX3BvaW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBpY2tfaHVicywgZnVuY3Rpb24gKGh1YiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBkb21Qcm9wczogeyB2YWx1ZTogaHViLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhodWIubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgPT4gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhodWIuYWRkcmVzcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5hZGRyZXNzZXMubGVuZ3RoID4gMCAmJiBfdm0uY2hlY2tvdXRfbWV0aG9kID09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19hZGRyZXNzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZHJlc3NlcyAmJiBfdm0uY2hlY2tvdXRfbWV0aG9kID09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNhcGl0YWxpemVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZGRyZXNzZXMsIGZ1bmN0aW9uIChhZGRyZXNzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZGRyZXNzX3NlbGVjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInNoaXBwaW5nX1wiICsgYWRkcmVzcy5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZy1jYXJkIGFkZHJlc3MgY2hla291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWZhdWx0X3NoaXBwaW5nLmlkID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxvYXQtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVmYXVsdF9zaGlwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdF9zaGlwcGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJhZGlvTm9MYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaGlwcGluZ19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIi4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWZhdWx0X3NoaXBwaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWZhdWx0X3NoaXBwaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZldGNoU2hpcHBpbmdDb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzcy1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWwtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5waG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLnBob25lX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHJlZXRfYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuY291bnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Muc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRpIG1kaS1uYW1lIG1kaS1kb3RzLXZlcnRpY2FsIGRyb3BidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcmVmcy5hZGRyZXNzX2Zvcm0uZWRpdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcuZWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFkZHJlc3MuZGVmYXVsdF9zaGlwcGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFkZHJlc3MuZGVmYXVsdF9iaWxsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmFkZHJlc3NfZm9ybS5kZWxldGVBZGRyZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkcmVzc2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zYW1lX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNhbWVfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNhbWVfYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uc2FtZV9hZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnNhbWVfYWRkcmVzcywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc2FtZV9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnNhbWVfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5zYW1lX2FkZHJlc3MgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnNhbWVfYWRkcmVzcyA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2FtZV9hZGRyZXNzID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYmlsbGluZ0FkZHJlc3NTZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInNhbWVfYXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLmFkZHJlc3NfaXNfc2hpcHBpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uYWRkcmVzc2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zYW1lX2FkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrb3V0X21ldGhvZCA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmJpbGxpbmdfYWRkcmVzcykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5hZGRyZXNzZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5zYW1lX2FkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrb3V0X21ldGhvZCA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jYXBpdGFsaXplXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZGRyZXNzZXMsIGZ1bmN0aW9uIChhZGRyZXNzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZHJlc3Nfc2VsZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJpbGxpbmdfXCIgKyBhZGRyZXNzLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNnLWNhcmQgYWRkcmVzcyBjaGVrb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVmYXVsdF9iaWxsaW5nLmlkID09IGFkZHJlc3MuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQgZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlZmF1bHRfYmlsbGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0X2JpbGxpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmlsbGluZ19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVmYXVsdF9iaWxsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWQgPT0gYWRkcmVzcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVmYXVsdF9iaWxsaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlZmF1bHRfYmlsbGluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3MtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnBob25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLnBob25lX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHJlZXRfYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcy5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLmNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmbG9hdDogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kaSBtZGktbmFtZSBtZGktZG90cy12ZXJ0aWNhbCBkcm9wYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcmVmcy5hZGRyZXNzX2Zvcm0uZWRpdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmVkaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhZGRyZXNzLmRlZmF1bHRfc2hpcHBpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYWRkcmVzcy5kZWZhdWx0X2JpbGxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmFkZHJlc3NfZm9ybS5kZWxldGVBZGRyZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFuZy5kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tvdXRfbWV0aG9kID09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYWRkcmVzc0Zvcm1cIiwgeyByZWY6IFwiYWRkcmVzc19mb3JtXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uc2hpbW1lclxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLThcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbCgzLCBmdW5jdGlvbiAoYWRkcmVzc2VzLCBpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzaGltbWVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogMjAwIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5jYXJ0c1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IHBsLWxnLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvcmRlci1zdW1tYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wcmljZV9kZXRhaWxzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImNvdXBvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uX2xpc3Q6IF92bS5jb3Vwb25fbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGlzdDogX3ZtLmNhcnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2ctY2FyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXltZW50X2RldGFpbHNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl90b3RhbDogX3ZtLnBheW1lbnRfZm9ybS5zdWJfdG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4OiBfdm0ucGF5bWVudF9mb3JtLnRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudF9vZmZlcjogX3ZtLnBheW1lbnRfZm9ybS5kaXNjb3VudF9vZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ190YXg6IF92bS5wYXltZW50X2Zvcm0uc2hpcHBpbmdfdGF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9kaXNjb3VudDogX3ZtLnBheW1lbnRfZm9ybS5jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IF92bS5wYXltZW50X2Zvcm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5wcml2YWN5X2FncmVlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWdyZWVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFncmVlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uYWdyZWVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0uYWdyZWVtZW50LCBcIjJcIikgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5hZ3JlZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uYWdyZWVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hZ3JlZW1lbnQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hZ3JlZW1lbnQgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFncmVlbWVudCA9ICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmb3I6IFwidG5jXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmFncmVlbWVudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cmxDaGVjayhfdm0uc2V0dGluZ3MucHJpdmFjeV9hZ3JlZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uc2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcml2YWN5X2FncmVlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50ZXJtcykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MucHJpdmFjeV9hZ3JlZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnRlcm1zKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxvYWRpbmdfYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzX25hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29uZmlybU9yZGVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucHJvY2VlZF90b19wYXltZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyByZWY6IFwidXBkYXRlXCIsIHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbiBhZGQtbmV3XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWl0ZW1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi1oZWFkZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgY29sbGFwc2VkOiAhX3ZtLmFkZHJlc3NfYXJlYSB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjc2hpcHBpbmdfYWNjb3JkaW9uXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbGxhcHNlMVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmFkZHJlc3NfYXJlYSA9ICFfdm0uYWRkcmVzc19hcmVhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFkZHJlc3NfYXJlYV90aXRsZSkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCIsXG4gICAgICAgICAgY2xhc3M6IHsgc2hvdzogX3ZtLmFkZHJlc3NfYXJlYSB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJzaGlwcGluZ19hY2NvcmRpb25cIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiYWRkcmVzczFcIixcbiAgICAgICAgICAgIFwiZGF0YS1icy1wYXJlbnRcIjogXCIjYWNjb3JkaW9uRXhhbXBsZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVBZGRyZXNzKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogX3ZtLmxhbmcubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMubmFtZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLm5hbWVbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbWFpbFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5waG9uZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbGVQaG9uZVwiLCB7IG9uOiB7IHBob25lX25vOiBfdm0uZ2V0TnVtYmVyIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLnBob25lX25vXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBob25lX25vWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmNvdW50cnkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBlcnJvcl9ib3JkZXI6IF92bS5lcnJvcnMuY291bnRyeV9pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogX3ZtLnNldHRpbmdzLnRleHRfZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY291bnRyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0U3RhdGVzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb3VudHJ5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb3VudHJ5X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb3VudHJ5X2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jb3VudHJ5X2lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWxpZGF0aW9uX2Vycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuY291bnRyeV9pZFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuc3RhdGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBlcnJvcl9ib3JkZXI6IF92bS5lcnJvcnMuc3RhdGVfaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IF92bS5zZXR0aW5ncy50ZXh0X2RpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldENpdGllcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0ZV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuc3RhdGVfaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5zdGF0ZV9pZFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuY2l0eSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5jaXR5X2lkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBfdm0uc2V0dGluZ3MudGV4dF9kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jaXRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY2l0eV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY2l0eV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY2l0eV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2l0eV9pZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmNpdHlfaWRbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBvc3RhbF9jb2RlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucG9zdGFsX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5wb3N0YWxfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5wb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucG9zdGFsX2NvZGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdGFsX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5wb3N0YWxfY29kZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBvc3RhbF9jb2RlWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuYWRkcmVzcykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IF92bS5sYW5nLnN0cmVldF9hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImFkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5hZGRyZXNzWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NfbmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hZGRyZXNzX3N1Ym1pdF9idXR0b24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhY2NvcmRpb25cIiwgYXR0cnM6IHsgaWQ6IFwiY291cG9uQWNjb3JkaW9uXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24taGVhZGVyXCIsIGF0dHJzOiB7IGlkOiBcImhlYWRpbmdPbmVcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjY291cG9uQ29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbGxhcHNlT25lXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcInB1YmxpYy9pbWFnZXMvb3RoZXJzL3BlbmNpbDEucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5hcHBseV9jb3Vwb25fY29kZSkgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJjb3Vwb25Db2xsYXBzZVwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImhlYWRpbmdPbmVcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWJzLXBhcmVudFwiOiBcIiNjb3Vwb25BY2NvcmRpb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY291cG9uLWNvZGUtbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb3Vwb25fbGlzdCwgZnVuY3Rpb24gKGNvdXBvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJjb3Vwb24tY29kZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoX3ZtLl9zKGNvdXBvbi50aXRsZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uLmRpc2NvdW50X3R5cGUgPT0gXCJmbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnByaWNlRm9ybWF0KGNvdXBvbi5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291cG9uLmNvdXBvbl9kaXNjb3VudCArIFwiJSBcIiArIF92bS5sYW5nLm9mZlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVDb3Vwb24oY291cG9uLmNvdXBvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBseUNvdXBvbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLmNvdXBvbl9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXltZW50X2Zvcm0uY291cG9uX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW50ZXJfY291cG9uX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGF5bWVudF9mb3JtLmNvdXBvbl9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF5bWVudF9mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdXBvbl9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxvYWRpbmdfYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzX25hbWU6IFwib3BhY2l0eV81XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwiYnV0dG9uXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmFwcGx5KSldKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLWxpc3RcIiB9LCBbXG4gICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zdWJ0b3RhbCkgKyBcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLnN1Yl90b3RhbCkpKV0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNldHRpbmdzLnRheF90eXBlID09IFwiYmVmb3JlX3RheFwiIHx8XG4gICAgICBfdm0uc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSBcInByb2R1Y3RfYmFzZVwiXG4gICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRheCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50YXgpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmRpc2NvdW50KSksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLmRpc2NvdW50X29mZmVyKSkpXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2V0dGluZ3Muc2hpcHBpbmdfY29zdCAhPSBcImFyZWFfYmFzZVwiIHx8IF92bS4kcm91dGUubmFtZSAhPSBcImNhcnRcIlxuICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19jb3N0KSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5zaGlwcGluZ190YXgpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zZXR0aW5ncy5jb3Vwb25fc3lzdGVtID09IDFcbiAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuY291cG9uX2Rpc2NvdW50KSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS5jb3Vwb25fZGlzY291bnQpKSldKSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNldHRpbmdzLnRheF90eXBlID09IFwiYWZ0ZXJfdGF4XCIgJiZcbiAgICBfdm0uc2V0dGluZ3MudmF0X2FuZF90YXhfdHlwZSA9PSBcIm9yZGVyX2Jhc2VcIlxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnRfd2VpZ2h0XzQwMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcudG90YWwpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcmljZUZvcm1hdChfdm0udG90YWwgLSBfdm0udGF4KSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb250X3dlaWdodF80MDBcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRheCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50YXgpKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImdyYW5kX3RvdGFsX3N0eWxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5ncmFuZF90b3RhbCkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KF92bS50b3RhbCkpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRvdGFsKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoX3ZtLnRvdGFsKSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaW1nXCIsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaGltbWVyXCIsXG4gICAgc3R5bGU6IFtfdm0uaGVpZ2h0ID8gX3ZtLnN0eWxlIDogbnVsbF0sXG4gICAgYXR0cnM6IHtcbiAgICAgIHNyYzogX3ZtLmdldFVybChcInB1YmxpYy9pbWFnZXMvZGVmYXVsdC9wcmV2aWV3LmpwZ1wiKSxcbiAgICAgIGFsdDogXCJzaGltbWVyXCIsXG4gICAgfSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInlvb3JpX19zaWdudXAtLWZvcm1cIiwgYXR0cnM6IHsgYWN0aW9uOiBcIiNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1jb25maWdcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uYWN0aXZlRHJvcERvd24uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1jb25maWctZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX2NvZGUtLWZsYWdcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5kZWZhdWx0Q291bnRyeS5mbGFnLCBhbHQ6IFwiRmxhZ1wiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fY29kZS0tbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRlZmF1bHRDb3VudHJ5LmNvZGUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fZHJvcGRvd25cIiB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1saXN0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoX2tleSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hfa2V5XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hfa2V5IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGtleXVwOiBfdm0uY291bnRyeVNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2hfa2V5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWx0ZXJlZF9jb3VudHJpZXMsIGZ1bmN0aW9uIChjb3VudHJ5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRDb3VudHJ5Q29kZShjb3VudHJ5KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1mbGFnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvdW50cnkuZmxhZ19pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY291bnRyeS5mbGFnX2ljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsdDogXCJGbGFnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX25hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoY291bnRyeS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX2NvZGUtLW51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QbHVzQ2hlY2soY291bnRyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRyeS5waG9uZWNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIrXCIgKyBjb3VudHJ5LnBob25lY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnBob25lX25vLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwaG9uZV9ub1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bWJlclwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRlbFwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGhvbmVfbm8gfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBrZXl1cDogX3ZtLmdldE51bSxcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLnBob25lX25vID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=