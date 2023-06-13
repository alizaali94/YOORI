"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_telephone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/telephone */ "./resources/js/components/frontend/partials/telephone.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "register",
  components: {
    telePhone: _partials_telephone__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        phone_no: '',
        otp: '',
        user_type: this.$route.params.type
      },
      optionTo: 'phone',
      loading: false,
      buttonText: 'Get OTP',
      phone_no: '',
      minute: 1,
      second: 60,
      otp: '',
      agreement: '',
      country_code: []
    };
  },
  watch: {
    $route: function $route(from, to) {
      this.form.user_type = from.params.type;
    }
  },
  mounted: function mounted() {
    this.loginOptions();
  },
  methods: {
    countDownTimer: function countDownTimer() {
      var _this = this;

      this.minute = 1;
      this.second = 60;
      setInterval(function () {
        _this.second--;

        if (_this.second == 0) {
          _this.minute--;
          _this.second = 60;

          if (_this.minute == 0) {
            _this.minute = 0;
          }
        }
      }, 1000);
    },
    register: function register() {
      var _this2 = this;

      if (this.settings.customer_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }

      this.loading = true;
      var url = this.getUrl('register');
      this.form.real_otp = this.otp;

      if (this.form.real_otp != this.otp) {
        toastr.error(this.lang.OTP_doesnt_match, this.lang.Error + ' !!');
      }

      axios.post(url, this.form).then(function (response) {
        _this2.loading = false;

        if (response.data.error) {
          _this2.$Progress.fail();

          toastr.error(response.data.error, _this2.lang.Error + ' !!');
        }

        if (response.data.success) {
          if (response.data.type == 1) {
            _this2.$store.dispatch('user', response.data.auth_user);

            _this2.$router.push({
              name: 'dashboard'
            });
          } else {
            _this2.$router.push({
              name: 'login'
            });
          }

          _this2.errors = [];
          toastr.success(response.data.success, _this2.lang.Success + ' !!');
        }
      })["catch"](function (error) {
        _this2.loading = false;

        _this2.$Progress.fail();

        if (error.response && error.response.status == 422) {
          _this2.errors = error.response.data.errors;
        }
      });
    },
    socialLogin: function socialLogin(provider) {
      var url = this.getUrl('login/' + provider);
      axios.get(url).then(function (response) {
        window.location.href = response.data;
      });
    },
    loginOptions: function loginOptions(optionTo) {
      if (optionTo) {
        if (optionTo == 'phone') {
          this.buttonText = 'Get OTP';
          this.optionTo = 'email';
        } else {
          this.buttonText = 'Sign Up';
          this.optionTo = 'phone';
        }
      } else {
        if (this.addons.includes('otp_system')) {
          this.optionTo = 'email';
          this.buttonText = 'Get OTP';
        } else {
          this.buttonText = 'Sign Up';
          this.optionTo = 'phone';
        }
      }
    },
    registerByPhone: function registerByPhone() {
      var _this3 = this;

      this.form.email = null;

      if (this.settings.customer_agreement && !this.agreement) {
        return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
      }

      var url = this.getUrl('register/by-phone');
      this.loading = true;
      axios.post(url, this.form).then(function (response) {
        _this3.loading = false;

        if (response.data.error) {
          toastr.error(response.data.error, _this3.lang.Error + ' !!');
        } else {
          toastr.success(response.data.data, _this3.lang.Success + ' !!');
          _this3.errors = [];
          _this3.otp = true;

          _this3.countDownTimer();
        }
      })["catch"](function (error) {
        _this3.loading = false;

        _this3.$Progress.fail();

        if (error.response && error.response.status == 422) {
          _this3.errors = error.response.data.errors;
        }
      });
    },
    getNumber: function getNumber(number) {
      this.form.phone = number;
    }
  },
  computed: {}
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

/***/ "./resources/js/components/frontend/pages/register.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=4576e430& */ "./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/register.vue"
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

/***/ "./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4576e430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=4576e430& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/register.vue?vue&type=template&id=4576e430& ***!
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
    _c("section", { staticClass: "ragister-account text-center" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "account-content" }, [
          _c("div", { staticClass: "thumb" }, [
            _c("img", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: _vm.settings.sign_up_banner,
                  expression: "settings.sign_up_banner",
                },
              ],
              staticClass: "img-fluid img-fit",
              attrs: { alt: _vm.form.user_type },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-content" }, [
            _c("h1", [_vm._v(_vm._s(_vm.lang.sign_up) + " ")]),
            _vm._v(" "),
            _vm.otp
              ? _c("p", [
                  _vm._v(_vm._s(_vm.lang.enter_to_complete_registration)),
                ])
              : _c("p", [_vm._v(_vm._s(_vm.lang.sign_to_continue_shopping))]),
            _vm._v(" "),
            _vm.form.user_type == "seller"
              ? _c("h5", { staticClass: "registration_heading" }, [
                  _vm._v(_vm._s(_vm.lang.personal_info)),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "ragister-form",
                attrs: { name: "ragister-form" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.register.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-account-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.first_name,
                          expression: "form.first_name",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.first_name },
                      attrs: { type: "text", placeholder: _vm.lang.first_name },
                      domProps: { value: _vm.form.first_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "first_name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.first_name
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.first_name[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("span", {
                      staticClass: "mdi mdi-name mdi-account-outline",
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.last_name,
                          expression: "form.last_name",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.last_name },
                      attrs: { type: "text", placeholder: _vm.lang.last_name },
                      domProps: { value: _vm.form.last_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "last_name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.last_name
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.last_name[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.optionTo == "phone"
                    ? _c("div", { staticClass: "form-group" }, [
                        _c("span", {
                          staticClass: "mdi mdi-name mdi-email-outline",
                        }),
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
                          staticClass: "form-control mb-0",
                          class: { "error_border mb-0": _vm.errors.email },
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
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errors.email && _vm.optionTo == "phone"
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.email[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.optionTo == "email" && _vm.addons.includes("otp_system")
                    ? _c(
                        "div",
                        [
                          _c("telePhone", { on: { phone_no: _vm.getNumber } }),
                          _vm._v(" "),
                          _vm.errors.phone
                            ? _c("span", { staticClass: "validation_error" }, [
                                _vm._v(_vm._s(_vm.errors.phone[0])),
                              ])
                            : _vm._e(),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.addons.includes("otp_system")
                    ? _c("div", { staticClass: "form-group text-end mb-3" }, [
                        !_vm.otp
                          ? _c(
                              "a",
                              {
                                staticClass: "btn sign-in-option",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.loginOptions(_vm.optionTo)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.optionTo == "email"
                                      ? _vm.lang.use_email_instead
                                      : _vm.lang.use_phone_instead
                                  )
                                ),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.optionTo == "phone"
                    ? _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "mt-4": !_vm.addons.includes("otp_system") },
                        },
                        [
                          _c("span", {
                            staticClass: "mdi mdi-name mdi-lock-outline",
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password",
                              },
                            ],
                            staticClass: "form-control",
                            class: { error_border: _vm.errors.password },
                            attrs: {
                              type: "password",
                              placeholder: _vm.lang.Password,
                            },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errors.password && _vm.optionTo == "phone"
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.password[0])),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.addons.includes("otp_system") && _vm.otp
                  ? _c("div", { staticClass: "form-group mt-4" }, [
                      _c("span", {
                        staticClass: "mdi mdi-name mdi-lock-outline",
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.otp,
                            expression: "form.otp",
                          },
                        ],
                        staticClass: "form-control otp mb-0",
                        class: { error_border: _vm.errors.otp },
                        attrs: {
                          type: "text",
                          placeholder: _vm.lang.enter_oTP,
                        },
                        domProps: { value: _vm.form.otp },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "otp", $event.target.value)
                          },
                        },
                      }),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.addons.includes("otp_system") && _vm.otp
                  ? _c("div", [
                      _c("p", { staticClass: "count_down_timer" }, [
                        _vm.otp && _vm.minute >= 0 && _vm.second >= 0
                          ? _c("span", [
                              _vm._v(
                                "0" +
                                  _vm._s(_vm.minute) +
                                  ":" +
                                  _vm._s(_vm.second)
                              ),
                            ])
                          : _c("span", { on: { click: _vm.registerByPhone } }, [
                              _vm._v(_vm._s(_vm.lang.otp_request)),
                            ]),
                      ]),
                      _vm._v(" "),
                      _vm.otp && !_vm.loading
                        ? _c(
                            "button",
                            {
                              staticClass: "btn",
                              class: { disable_btn: _vm.form.otp.length != 5 },
                              attrs: { type: "submit" },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.lang.sign_up) +
                                  "\n                                "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-checkbox" }, [
                  _vm.settings.customer_agreement
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
                          attrs: { type: "checkbox", id: "tnc", value: "2" },
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
                                  $$i < 0 && (_vm.agreement = $$a.concat([$$v]))
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
                                "\n                                        "
                            ),
                            _vm.urlCheck(_vm.settings.customer_agreement)
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.customer_agreement,
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
                                        _vm.settings.customer_agreement,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.lang.terms) +
                                        "\n                                        "
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
                _vm.optionTo == "phone" && !_vm.loading
                  ? _c(
                      "button",
                      { staticClass: "btn", attrs: { type: "submit" } },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.lang.sign_up) +
                            "\n                            "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.loading
                  ? _c("loading_button", { attrs: { class_name: "btn" } })
                  : _vm.optionTo == "email" && !_vm.otp
                  ? _c(
                      "button",
                      {
                        staticClass: "btn",
                        attrs: { type: "button" },
                        on: { click: _vm.registerByPhone },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.lang.get_oTP) +
                            "\n                            "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _vm._v(
                      _vm._s(_vm.lang.have_an_account) +
                        "\n                                "
                    ),
                    _c("router-link", { attrs: { to: { name: "login" } } }, [
                      _vm._v(_vm._s(_vm.lang.sign_in)),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.settings.is_facebook_login_activated == 1 ||
                _vm.settings.is_google_login_activated == 1 ||
                _vm.settings.is_twitter_login_activated == 1
                  ? _c("div", { staticClass: "continue-with" }, [
                      _c("p", [_vm._v(_vm._s(_vm.lang.or_continue_with))]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.user_type != "seller"
                  ? _c("ul", { staticClass: "global-list" }, [
                      _vm.settings.is_facebook_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "facebook",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("facebook")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-facebook",
                                }),
                                _vm._v(_vm._s(_vm.lang.facebook)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.is_twitter_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "twitter",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("twitter")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-twitter",
                                }),
                                _vm._v(_vm._s(_vm.lang.twitter)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.settings.is_google_login_activated == 1
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "google",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.socialLogin("google")
                                  },
                                },
                              },
                              [
                                _c("span", {
                                  staticClass: "mdi mdi-name mdi-google",
                                }),
                                _vm._v(_vm._s(_vm.lang.google)),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfcmVnaXN0ZXJfdnVlLjYxZmE2MmVkMGYyZmJlZWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0lBO0FBR0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHFCQUZBO0FBR0EsaUJBSEE7QUFJQSxvQkFKQTtBQUtBLGlCQUxBO0FBTUEsbUJBTkE7QUFPQSxvQkFQQTtBQVFBLGVBUkE7QUFTQTtBQVRBLE9BREE7QUFZQSx1QkFaQTtBQWFBLG9CQWJBO0FBY0EsMkJBZEE7QUFlQSxrQkFmQTtBQWdCQSxlQWhCQTtBQWlCQSxnQkFqQkE7QUFrQkEsYUFsQkE7QUFtQkEsbUJBbkJBO0FBb0JBO0FBcEJBO0FBdUJBLEdBN0JBO0FBOEJBO0FBQ0EsVUFEQSxrQkFDQSxJQURBLEVBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBLEdBOUJBO0FBb0NBLFNBcENBLHFCQW9DQTtBQUNBO0FBQ0EsR0F0Q0E7QUF3Q0E7QUFDQSxrQkFEQSw0QkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVEEsRUFTQSxJQVRBO0FBVUEsS0FkQTtBQWVBLFlBZkEsc0JBZUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QixvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3RlbGVwaG9uZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3RlbGVwaG9uZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvcmVnaXN0ZXIudnVlPzRmOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdGVsZXBob25lLnZ1ZT9jY2I5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3JlZ2lzdGVyLnZ1ZT80NWI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3JlZ2lzdGVyLnZ1ZT81Y2U5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3RlbGVwaG9uZS52dWU/NTllYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2ctcGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJyYWdpc3Rlci1hY2NvdW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvdW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWxhenk9XCJzZXR0aW5ncy5zaWduX3VwX2Jhbm5lclwiIDphbHQ9XCJmb3JtLnVzZXJfdHlwZVwiIGNsYXNzPVwiaW1nLWZsdWlkIGltZy1maXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3sgbGFuZy5zaWduX3VwIH19IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJvdHBcIj57eyBsYW5nLmVudGVyX3RvX2NvbXBsZXRlX3JlZ2lzdHJhdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1lbHNlPnt7IGxhbmcuc2lnbl90b19jb250aW51ZV9zaG9wcGluZyB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwicmVnaXN0cmF0aW9uX2hlYWRpbmdcIiB2LWlmPVwiZm9ybS51c2VyX3R5cGUgPT0gJ3NlbGxlcidcIj57eyBsYW5nLnBlcnNvbmFsX2luZm8gfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJhZ2lzdGVyLWZvcm1cIiBuYW1lPVwicmFnaXN0ZXItZm9ybVwiIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1hY2NvdW50LW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLmZpcnN0X25hbWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmZpcnN0X25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCIgdi1pZj1cImVycm9ycy5maXJzdF9uYW1lXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdF9uYW1lWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1hY2NvdW50LW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLmxhc3RfbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMubGFzdF9uYW1lIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy5sYXN0X25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCIgdi1pZj1cImVycm9ycy5sYXN0X25hbWVcIj57eyBlcnJvcnMubGFzdF9uYW1lWzBdIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1pZj1cIm9wdGlvblRvID09ICdwaG9uZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWVtYWlsLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG1iLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3JfYm9yZGVyIG1iLTAnIDogZXJyb3JzLmVtYWlsIH1cIiA6cGxhY2Vob2xkZXI9XCJsYW5nLmVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbl9lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5lbWFpbCAmJiBvcHRpb25UbyA9PSAncGhvbmUnXCI+e3sgZXJyb3JzLmVtYWlsWzBdIH19PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJvcHRpb25UbyA9PSAnZW1haWwnICYmIGFkZG9ucy5pbmNsdWRlcygnb3RwX3N5c3RlbScpXCI+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLXRlbC1pbnB1dCB2LWJpbmQ9XCJiaW5kUHJvcHNcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwaG9uZV9pbnRsXCItLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlciBtYi0wJyA6IGVycm9ycy5waG9uZSB9XCItLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBob25lXCI+PC92dWUtdGVsLWlucHV0Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVsZVBob25lICBAcGhvbmVfbm89XCJnZXROdW1iZXJcIj48L3RlbGVQaG9uZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbl9lcnJvclwiIHYtaWY9XCJlcnJvcnMucGhvbmVcIj57eyBlcnJvcnMucGhvbmVbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYWRkb25zLmluY2x1ZGVzKCdvdHBfc3lzdGVtJylcIiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1lbmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwiIW90cFwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBzaWduLWluLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImxvZ2luT3B0aW9ucyhvcHRpb25UbylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRvID09ICdlbWFpbCcgPyBsYW5nLnVzZV9lbWFpbF9pbnN0ZWFkIDogbGFuZy51c2VfcGhvbmVfaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LWlmPVwib3B0aW9uVG8gPT0gJ3Bob25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdtdC00JyA6ICFhZGRvbnMuaW5jbHVkZXMoJ290cF9zeXN0ZW0nKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1sb2NrLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMucGFzc3dvcmQgfVwiIDpwbGFjZWhvbGRlcj1cImxhbmcuUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZXJyb3JzLnBhc3N3b3JkICYmIG9wdGlvblRvID09ICdwaG9uZSdcIj57eyBlcnJvcnMucGFzc3dvcmRbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG10LTRcIiB2LWlmPVwiYWRkb25zLmluY2x1ZGVzKCdvdHBfc3lzdGVtJykgJiYgb3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWxvY2stb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5vdHBcIiBjbGFzcz1cImZvcm0tY29udHJvbCBvdHAgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMub3RwIH1cIiA6cGxhY2Vob2xkZXI9XCJsYW5nLmVudGVyX29UUFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYWRkb25zLmluY2x1ZGVzKCdvdHBfc3lzdGVtJykgJiYgb3RwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3VudF9kb3duX3RpbWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvdHAgJiYgKG1pbnV0ZSA+PTAgJiYgc2Vjb25kID49IDApXCI+MHt7IG1pbnV0ZSB9fTp7eyBzZWNvbmQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlZ2lzdGVyQnlQaG9uZVwiIHYtZWxzZT57eyBsYW5nLm90cF9yZXF1ZXN0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIiB2LWlmPVwib3RwICYmICFsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Rpc2FibGVfYnRuJyA6IGZvcm0ub3RwLmxlbmd0aCAhPSA1IH1cIj57eyBsYW5nLnNpZ25fdXAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHYtaWY9XCJzZXR0aW5ncy5jdXN0b21lcl9hZ3JlZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG5jXCIgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhZ3JlZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0bmNcIj57eyBsYW5nLmFncmVlbWVudCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cInVybENoZWNrKHNldHRpbmdzLmN1c3RvbWVyX2FncmVlbWVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJzZXR0aW5ncy5jdXN0b21lcl9hZ3JlZW1lbnRcIj57eyBsYW5nLnRlcm1zIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtZWxzZSA6dG89XCIncGFnZS8nK3NldHRpbmdzLmN1c3RvbWVyX2FncmVlbWVudFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcudGVybXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIiB2LWlmPVwib3B0aW9uVG8gPT0gJ3Bob25lJyAmJiAhbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcuc2lnbl91cCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9hZGluZ19idXR0b24gdi1pZj1cImxvYWRpbmdcIiA6Y2xhc3NfbmFtZT1cIididG4nXCI+PC9sb2FkaW5nX2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInJlZ2lzdGVyQnlQaG9uZVwiIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwib3B0aW9uVG8gPT0gJ2VtYWlsJyAmJiAhb3RwXCI+e3sgbGFuZy5nZXRfb1RQIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGxhbmcuaGF2ZV9hbl9hY2NvdW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdsb2dpbicgfVwiPnt7IGxhbmcuc2lnbl9pbiB9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGludWUtd2l0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZXR0aW5ncy5pc19mYWNlYm9va19sb2dpbl9hY3RpdmF0ZWQgPT0gMSB8fCBzZXR0aW5ncy5pc19nb29nbGVfbG9naW5fYWN0aXZhdGVkID09IDEgfHwgc2V0dGluZ3MuaXNfdHdpdHRlcl9sb2dpbl9hY3RpdmF0ZWQgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGxhbmcub3JfY29udGludWVfd2l0aCB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZ2xvYmFsLWxpc3RcIiB2LWlmPVwiZm9ybS51c2VyX3R5cGUgIT0gJ3NlbGxlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX2ZhY2Vib29rX2xvZ2luX2FjdGl2YXRlZCA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmFjZWJvb2tcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwic29jaWFsTG9naW4oJ2ZhY2Vib29rJylcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWZhY2Vib29rXCI+PC9zcGFuPnt7IGxhbmcuZmFjZWJvb2sgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmlzX3R3aXR0ZXJfbG9naW5fYWN0aXZhdGVkID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0d2l0dGVyXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIEBjbGljaz1cInNvY2lhbExvZ2luKCd0d2l0dGVyJylcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLXR3aXR0ZXJcIj48L3NwYW4+e3sgbGFuZy50d2l0dGVyIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pc19nb29nbGVfbG9naW5fYWN0aXZhdGVkID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJnb29nbGVcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwic29jaWFsTG9naW4oJ2dvb2dsZScpXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1nb29nbGVcIj48L3NwYW4+e3sgbGFuZy5nb29nbGUgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbnRhY3QtZm9ybSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSAvLmFjY291bnQtY29udGVudCAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gLy5jb250YWluZXIgLS0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gLy5yYWdpc3Rlci1hY2NvdW50IC0tPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHRlbGVQaG9uZSBmcm9tIFwiLi4vcGFydGlhbHMvdGVsZXBob25lXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHRlbGVQaG9uZSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVfbm86ICcnLFxyXG4gICAgICAgICAgICAgICAgb3RwOiAnJyxcclxuICAgICAgICAgICAgICAgIHVzZXJfdHlwZTogdGhpcy4kcm91dGUucGFyYW1zLnR5cGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvblRvOiAncGhvbmUnLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgYnV0dG9uVGV4dDogJ0dldCBPVFAnLFxyXG4gICAgICAgICAgICBwaG9uZV9ubzogJycsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kOiA2MCxcclxuICAgICAgICAgICAgb3RwOiAnJyxcclxuICAgICAgICAgICAgYWdyZWVtZW50OiAnJyxcclxuICAgICAgICAgICAgY291bnRyeV9jb2RlOltdXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgICRyb3V0ZShmcm9tLCB0bykge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0udXNlcl90eXBlID0gZnJvbS5wYXJhbXMudHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbk9wdGlvbnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNvdW50RG93blRpbWVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gNjA7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kLS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWNvbmQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWludXRlLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSA2MDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5taW51dGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ2lzdGVyKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY3VzdG9tZXJfYWdyZWVtZW50ICYmICF0aGlzLmFncmVlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvYXN0ci5pbmZvKHRoaXMubGFuZy5hY2NlcHRfdGVybXMsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3JlZ2lzdGVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZWFsX290cCA9IHRoaXMub3RwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlYWxfb3RwICE9IHRoaXMub3RwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IodGhpcy5sYW5nLk9UUF9kb2VzbnRfbWF0Y2gsIHRoaXMubGFuZy5FcnJvciArICcgISEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KHVybCwgdGhpcy5mb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndXNlcicsIHJlc3BvbnNlLmRhdGEuYXV0aF91c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdkYXNoYm9hcmQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICcgISEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29jaWFsTG9naW4ocHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCdsb2dpbi8nICsgcHJvdmlkZXIpO1xyXG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5PcHRpb25zKG9wdGlvblRvKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25Ubykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvblRvID09ICdwaG9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnR2V0IE9UUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25UbyA9ICdlbWFpbCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdTaWduIFVwJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblRvID0gJ3Bob25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZG9ucy5pbmNsdWRlcygnb3RwX3N5c3RlbScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25UbyA9ICdlbWFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gJ0dldCBPVFAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnU2lnbiBVcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25UbyA9ICdwaG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWdpc3RlckJ5UGhvbmUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5lbWFpbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmN1c3RvbWVyX2FncmVlbWVudCAmJiAhdGhpcy5hZ3JlZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyh0aGlzLmxhbmcuYWNjZXB0X3Rlcm1zLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCdyZWdpc3Rlci9ieS1waG9uZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIHRoaXMuZm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLmRhdGEsIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdHAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXROdW1iZXIobnVtYmVyKXtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLnBob25lID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHt9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJ5b29yaV9fc2lnbnVwLS1mb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fY29kZS0tY29uZmlnXCIgQGNsaWNrLnN0b3A9XCJhY3RpdmVEcm9wRG93blwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fY29kZS0tY29uZmlnLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRyeV9fY29kZS0tZmxhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImRlZmF1bHRDb3VudHJ5LmZsYWdcIiBhbHQ9XCJGbGFnXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLW51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRlZmF1bHRDb3VudHJ5LmNvZGUgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX2Ryb3Bkb3duXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIEBjbGljay5zdG9wIGNsYXNzPVwiY291bnRyeV9fY29kZS0tbGlzdFwiIDpjbGFzcz1cImFjdGl2ZUNsYXNzXCI+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgdi1tb2RlbD1cInNlYXJjaF9rZXlcIiBAa2V5dXA9XCJjb3VudHJ5U2VhcmNoXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImNvdW50cnlfX3NlYXJjaFwiPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIihjb3VudHJ5LGluZGV4KSBpbiBmaWx0ZXJlZF9jb3VudHJpZXNcIiBAY2xpY2s9XCJnZXRDb3VudHJ5Q29kZShjb3VudHJ5KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50cnlfX2NvZGUtLWZsYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtbGF6eT1cImNvdW50cnkuZmxhZ19pY29uXCIgYWx0PVwiRmxhZ1wiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRyeV9fbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY291bnRyeS5uYW1lIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRyeV9fY29kZS0tbnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgUGx1c0NoZWNrKGNvdW50cnkpID8gY291bnRyeS5waG9uZWNvZGUgOiAnKycgKyBjb3VudHJ5LnBob25lY29kZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PiA8IS0tIC8uY291bnRyeV9fY29kZS0tY29uZmlnIC0tPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cIm51bWJlclwiIEBrZXl1cD1cImdldE51bVwiIHYtbW9kZWw9XCJwaG9uZV9ub1wiPlxyXG4gIDwvZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInRlbGVwaG9uZVwiLFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZHJvcGRvd25fYWN0aXZlOiBmYWxzZSxcclxuICAgICAgc2VhcmNoX2tleTogJycsXHJcbiAgICAgIHNlbGVjdGVkX2NvdW50cnk6ICcnLFxyXG4gICAgICBkZWZhdWx0Q291bnRyeToge1xyXG4gICAgICAgIGZsYWc6ICcnLFxyXG4gICAgICAgIGNvZGU6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFjdGl2ZUNsYXNzOiAnaGlkZVNob3cnLFxyXG4gICAgICBwaG9uZV9ubzogJycsXHJcbiAgICAgIGNvdW50OiAxLFxyXG4gICAgICBmaWx0ZXJlZF9jb3VudHJpZXM6IFtdXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICBwaG9uZSgpIHtcclxuICAgICAgdGhpcy5waG9uZV9ubyA9IHRoaXMucGhvbmU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5jb3VudHJ5KCk7XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcGhvbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldE1vYmlsZU5vO1xyXG4gICAgfSxcclxuICAgIGNvdW50cmllcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q291bnRyeUxpc3Q7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBQbHVzQ2hlY2soY291bnRyeSkge1xyXG4gICAgICBpZiAoY291bnRyeSkge1xyXG4gICAgICAgIHJldHVybiBjb3VudHJ5LnBob25lY29kZS5pbmNsdWRlcyhcIitcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRDb3VudHJ5Q29kZShjb3VudHJ5KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnaGlkZVNob3cnXHJcbiAgICAgIHRoaXMucGhvbmVfbm8gPSAnJztcclxuICAgICAgdGhpcy5jb3VudCA9IDE7XHJcblxyXG4gICAgICBpZiAoY291bnRyeSkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkuZmxhZyA9IGNvdW50cnkuZmxhZ19pY29uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkuZmxhZyA9IHRoaXMuZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL2ZsYWdzL2JkLnBuZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29kZSA9ICcrODgwJ1xyXG5cclxuICAgICAgaWYgKCFjb3VudHJ5KSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeS5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5Lm5hbWUgPSAnQmFuZ2xhZGVzaCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvdW50cnkucGhvbmVjb2RlLmluY2x1ZGVzKFwiK1wiKSkge1xyXG4gICAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeS5jb2RlID0gY291bnRyeS5waG9uZWNvZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkuY29kZSA9ICcrJyArIGNvdW50cnkucGhvbmVjb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5Lm5hbWUgPSBjb3VudHJ5Lm5hbWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGFjdGl2ZURyb3BEb3duKCkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmVDbGFzcyA9PSAnaGlkZVNob3cnKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9ICcnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9ICdoaWRlU2hvdydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTZWFyY2hEcm9wZG93bilcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoaWRlU2VhcmNoRHJvcGRvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9ICdoaWRlU2hvdyc7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2VhcmNoRHJvcGRvd24pXHJcbiAgICB9LFxyXG4gICAgY291bnRyeVNlYXJjaCgpIHtcclxuICAgICAgbGV0IHJlcztcclxuICAgICAgcmVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKChkKSA9PiBkLm5hbWUpO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkX2NvdW50cmllcyA9IHJlcy5maWx0ZXIoXHJcbiAgICAgICAgICAoZCkgPT5cclxuICAgICAgICAgICAgICAoZC5uYW1lICYmIGQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoX2tleSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkX2NvdW50cmllcztcclxuICAgIH0sXHJcbiAgICBnZXROdW0oKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50ID09IDEpIHtcclxuICAgICAgICB0aGlzLnBob25lX25vID0gdGhpcy5kZWZhdWx0Q291bnRyeS5jb2RlICsgdGhpcy5waG9uZV9ub1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGhvbmVfbm8gPT0gJycpIHtcclxuICAgICAgICB0aGlzLnBob25lX25vID0gdGhpcy5kZWZhdWx0Q291bnRyeS5jb2RlICsgdGhpcy5waG9uZV9ub1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3Bob25lX25vJywgdGhpcy5waG9uZV9ubyk7XHJcbiAgICAgIHRoaXMuY291bnQrK1xyXG4gICAgfSxcclxuICAgIGNvdW50cnkoKSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgnZ2V0L2NvdW50cnktbGlzdCcpO1xyXG4gICAgICBpZiAodGhpcy5jb3VudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRfY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXM7XHJcbiAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKGVsID0+IGVsLmlkID09IHRoaXMuc2V0dGluZ3MuZGVmYXVsdF9jb3VudHJ5KTtcclxuICAgICAgICB0aGlzLmdldENvdW50cnlDb2RlKGNvdW50cnkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRDb3VudHJ5TGlzdCcscmVzcG9uc2UuZGF0YS5jb3VudHJpZXMpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfY291bnRyaWVzID0gcmVzcG9uc2UuZGF0YS5jb3VudHJpZXM7XHJcbiAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChlbCA9PiBlbC5pZCA9PSB0aGlzLnNldHRpbmdzLmRlZmF1bHRfY291bnRyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRyeUNvZGUoY291bnRyeSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDU3NmU0MzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDU3NmU0MzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDU3NmU0MzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDU3NmU0MzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTc2ZTQzMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NTc2ZTQzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvcmVnaXN0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90ZWxlcGhvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0YzU0MTJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY0YzU0MTJlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNGM1NDEyZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNGM1NDEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNGM1NDEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGVsZXBob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGM1NDEyZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNGM1NDEyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdGVsZXBob25lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVsZXBob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RlbGVwaG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1NzZlNDMwJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZy1wYWdlLWNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFnaXN0ZXItYWNjb3VudCB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRodW1iXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5zaWduX3VwX2Jhbm5lcixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3Muc2lnbl91cF9iYW5uZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWQgaW1nLWZpdFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBhbHQ6IF92bS5mb3JtLnVzZXJfdHlwZSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuc2lnbl91cCkgKyBcIiBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0ub3RwXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuZW50ZXJfdG9fY29tcGxldGVfcmVnaXN0cmF0aW9uKSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuc2lnbl90b19jb250aW51ZV9zaG9wcGluZykpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmZvcm0udXNlcl90eXBlID09IFwic2VsbGVyXCJcbiAgICAgICAgICAgICAgPyBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVnaXN0cmF0aW9uX2hlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnBlcnNvbmFsX2luZm8pKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJhZ2lzdGVyLWZvcm1cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInJhZ2lzdGVyLWZvcm1cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWdpc3Rlci5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1hY2NvdW50LW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLmZpcnN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5sYW5nLmZpcnN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZmlyc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmaXJzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5maXJzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdF9uYW1lWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1hY2NvdW50LW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5sYXN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5sYW5nLmxhc3RfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5sYXN0X25hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWxpZGF0aW9uX2Vycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmxhc3RfbmFtZVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvblRvID09IFwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktZW1haWwtb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBtYi0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3JfYm9yZGVyIG1iLTBcIjogX3ZtLmVycm9ycy5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmVtYWlsICYmIF92bS5vcHRpb25UbyA9PSBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWxpZGF0aW9uX2Vycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmVtYWlsWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ub3B0aW9uVG8gPT0gXCJlbWFpbFwiICYmIF92bS5hZGRvbnMuaW5jbHVkZXMoXCJvdHBfc3lzdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbGVQaG9uZVwiLCB7IG9uOiB7IHBob25lX25vOiBfdm0uZ2V0TnVtYmVyIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5waG9uZVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmFkZG9ucy5pbmNsdWRlcyhcIm90cF9zeXN0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1lbmQgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ub3RwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIHNpZ24taW4tb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2dpbk9wdGlvbnMoX3ZtLm9wdGlvblRvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvblRvID09IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5sYW5nLnVzZV9lbWFpbF9pbnN0ZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmxhbmcudXNlX3Bob25lX2luc3RlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvblRvID09IFwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcIm10LTRcIjogIV92bS5hZGRvbnMuaW5jbHVkZXMoXCJvdHBfc3lzdGVtXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktbG9jay1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLnBhc3N3b3JkICYmIF92bS5vcHRpb25UbyA9PSBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWxpZGF0aW9uX2Vycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBhc3N3b3JkWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hZGRvbnMuaW5jbHVkZXMoXCJvdHBfc3lzdGVtXCIpICYmIF92bS5vdHBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG10LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktbG9jay1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ub3RwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5vdHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgb3RwIG1iLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5vdHAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW50ZXJfb1RQLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5vdHAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwib3RwXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hZGRvbnMuaW5jbHVkZXMoXCJvdHBfc3lzdGVtXCIpICYmIF92bS5vdHBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50X2Rvd25fdGltZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3RwICYmIF92bS5taW51dGUgPj0gMCAmJiBfdm0uc2Vjb25kID49IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5taW51dGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWNvbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5yZWdpc3RlckJ5UGhvbmUgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm90cF9yZXF1ZXN0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ub3RwICYmICFfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZV9idG46IF92bS5mb3JtLm90cC5sZW5ndGggIT0gNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuc2lnbl91cCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmN1c3RvbWVyX2FncmVlbWVudFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFncmVlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWdyZWVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcInRuY1wiLCB2YWx1ZTogXCIyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5hZ3JlZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0uYWdyZWVtZW50LCBcIjJcIikgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uYWdyZWVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hZ3JlZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5hZ3JlZW1lbnQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5hZ3JlZW1lbnQgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWdyZWVtZW50ID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcInRuY1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5hZ3JlZW1lbnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cmxDaGVjayhfdm0uc2V0dGluZ3MuY3VzdG9tZXJfYWdyZWVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uc2V0dGluZ3MuY3VzdG9tZXJfYWdyZWVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRlcm1zKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmN1c3RvbWVyX2FncmVlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy50ZXJtcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLm9wdGlvblRvID09IFwicGhvbmVcIiAmJiAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0blwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnNpZ25fdXApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImxvYWRpbmdfYnV0dG9uXCIsIHsgYXR0cnM6IHsgY2xhc3NfbmFtZTogXCJidG5cIiB9IH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5vcHRpb25UbyA9PSBcImVtYWlsXCIgJiYgIV92bS5vdHBcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVnaXN0ZXJCeVBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5nZXRfb1RQKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5oYXZlX2FuX2FjY291bnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJsb2dpblwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaWduX2luKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2ZhY2Vib29rX2xvZ2luX2FjdGl2YXRlZCA9PSAxIHx8XG4gICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmlzX2dvb2dsZV9sb2dpbl9hY3RpdmF0ZWQgPT0gMSB8fFxuICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc190d2l0dGVyX2xvZ2luX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGludWUtd2l0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcub3JfY29udGludWVfd2l0aCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmZvcm0udXNlcl90eXBlICE9IFwic2VsbGVyXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JhbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc19mYWNlYm9va19sb2dpbl9hY3RpdmF0ZWQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYWNlYm9va1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29jaWFsTG9naW4oXCJmYWNlYm9va1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktZmFjZWJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuZmFjZWJvb2spKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pc190d2l0dGVyX2xvZ2luX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInR3aXR0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvY2lhbExvZ2luKFwidHdpdHRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktdHdpdHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50d2l0dGVyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuaXNfZ29vZ2xlX2xvZ2luX2FjdGl2YXRlZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdvb2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc29jaWFsTG9naW4oXCJnb29nbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLWdvb2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5nb29nbGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ5b29yaV9fc2lnbnVwLS1mb3JtXCIsIGF0dHJzOiB7IGFjdGlvbjogXCIjXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fY29kZS0tY29uZmlnXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFjdGl2ZURyb3BEb3duLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fY29kZS0tY29uZmlnLWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1mbGFnXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZGVmYXVsdENvdW50cnkuZmxhZywgYWx0OiBcIkZsYWdcIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX2NvZGUtLW51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kZWZhdWx0Q291bnRyeS5jb2RlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX2Ryb3Bkb3duXCIgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fY29kZS0tbGlzdFwiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaF9rZXksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoX2tleVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvdW50cnlfX3NlYXJjaFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoX2tleSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLmNvdW50cnlTZWFyY2gsXG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoX2tleSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsdGVyZWRfY291bnRyaWVzLCBmdW5jdGlvbiAoY291bnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0Q291bnRyeUNvZGUoY291bnRyeSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnRyeV9fY29kZS0tZmxhZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb3VudHJ5LmZsYWdfaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvdW50cnkuZmxhZ19pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbHQ6IFwiRmxhZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKGNvdW50cnkubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudHJ5X19jb2RlLS1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGx1c0NoZWNrKGNvdW50cnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50cnkucGhvbmVjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiK1wiICsgY291bnRyeS5waG9uZWNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5waG9uZV9ubyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGhvbmVfbm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJudW1iZXJcIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZWxcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBob25lX25vIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAga2V5dXA6IF92bS5nZXROdW0sXG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5waG9uZV9ubyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9