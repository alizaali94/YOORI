(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_followed-shop_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/user_sidebar */ "./resources/js/components/frontend/partials/user_sidebar.vue");
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _partials_seller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/seller */ "./resources/js/components/frontend/partials/seller.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "followed-shop",
  data: function data() {
    return {
      current: "followed_shop",
      page: 1,
      loading: false,
      next_page_url: false,
      is_shimmer: false
    };
  },
  mounted: function mounted() {
    if (this.lengthCounter(this.sellers) == 0) {
      // this.$store.dispatch('FollowedSellers');
      this.$store.dispatch("FollowedSellers");
    }

    if (this.lengthCounter(this.sellers) > 0) {
      this.is_shimmer = true;
    }
  },
  components: {
    user_sidebar: _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__["default"],
    StarRating: (vue_star_rating__WEBPACK_IMPORTED_MODULE_2___default()),
    seller: _partials_seller__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  watch: {
    sellers: function sellers(newValue, oldValue) {
      this.is_shimmer = true;
    }
  },
  computed: {
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    },
    sellers: function sellers() {
      return this.$store.getters.getFollowedSellers.filter(function (seller) {
        return seller.id > 0;
      });
    },
    userShop: function userShop() {
      return this.$store.getters.getShopFollwer;
    }
  },
  methods: {
    loadSellers: function loadSellers() {
      var _this = this;

      var url = this.getUrl("user/followed-sellers?page=" + this.page);
      this.$Progress.start();
      axios.get(url).then(function (response) {
        if (response.data.error) {
          toastr.error(response.data.error, _this.lang.Error + " !!");
        } else {
          _this.$store.commit("setFollowedSellers", response.data.sellers.data);

          _this.next_page_url = response.data.sellers.next_page_url;
          _this.page++;

          _this.$Progress.finish();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "seller",
  props: ['sellers', 'class_name', 'number', 'is_shimmer'],
  components: {
    StarRating: (vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default()),
    shimmer: _shimmer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
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

/***/ "./resources/js/components/frontend/pages/user/followed-shop.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/followed-shop.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followed-shop.vue?vue&type=template&id=6dce889c& */ "./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c&");
/* harmony import */ var _followed_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followed-shop.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _followed_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__.render,
  _followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/followed-shop.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/partials/seller.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/frontend/partials/seller.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seller.vue?vue&type=template&id=f5276a2c& */ "./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c&");
/* harmony import */ var _seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/partials/seller.vue"
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

/***/ "./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_followed_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./followed-shop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_followed_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./seller.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_followed_shop_vue_vue_type_template_id_6dce889c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./followed-shop.vue?vue&type=template&id=6dce889c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c&");


/***/ }),

/***/ "./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_f5276a2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./seller.vue?vue&type=template&id=f5276a2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/followed-shop.vue?vue&type=template&id=6dce889c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "title justify-content-between" }, [
                  _c("h1", [
                    _vm._v(
                      _vm._s(
                        _vm.lengthCounter(_vm.sellers) == 0
                          ? _vm.lang.no_seller_founds
                          : _vm.lang.all_seller
                      )
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "sg-seller-product" },
                  [
                    _c("seller", {
                      attrs: {
                        sellers: _vm.sellers,
                        class_name: "grid-3",
                        number: 12,
                        shimmer: _vm.shimmer,
                        is_shimmer: _vm.is_shimmer,
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.next_page_url && !_vm.loading
                  ? _c(
                      "div",
                      { staticClass: "col-md-12 text-center show-more" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function ($event) {
                                return _vm.loadSellers()
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
                    staticClass: "col-md-12 text-center show-more",
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
                        _vm._v(" " + _vm._s(_vm.lang.loading)),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/seller.vue?vue&type=template&id=f5276a2c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _vm.is_shimmer
      ? _c(
          "ul",
          {
            staticClass: "products",
            class: _vm.class_name ? _vm.class_name : "grid-4",
          },
          _vm._l(_vm.sellers, function (shop, i) {
            return _c("li", [
              _c("div", { staticClass: "sg-product" }, [
                _c("div", { staticClass: "product-thumb" }, [
                  _c(
                    "a",
                    {
                      attrs: { href: _vm.getUrl("shop/" + shop.slug) },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.routerNavigator("shop", shop.slug)
                        },
                      },
                    },
                    [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: shop.image_297x203,
                            expression: "shop.image_297x203",
                          },
                        ],
                        staticClass: "img-fluid",
                        attrs: { alt: "Image" },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _vm.authUser
                  ? _c("div", { staticClass: "favorite-icon" }, [
                      _vm.checkFollowed(shop)
                        ? _c(
                            "a",
                            {
                              class: { disable_btn: _vm.btn_disabled },
                              attrs: { href: "javascript:void(0)" },
                              on: {
                                click: function ($event) {
                                  return _vm.removeFollowed(shop.id)
                                },
                              },
                            },
                            [
                              _c("span", {
                                staticClass: "mdi mdi-name mdi-heart",
                              }),
                            ]
                          )
                        : _c(
                            "a",
                            {
                              class: { disable_btn: _vm.btn_disabled },
                              attrs: { href: "javascript:void(0)" },
                              on: {
                                click: function ($event) {
                                  return _vm.follow(shop.id)
                                },
                              },
                            },
                            [
                              _c("span", {
                                staticClass: "mdi mdi-name mdi-heart-outline",
                              }),
                            ]
                          ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "seller-product-grid-view" }, [
                  _c("div", { staticClass: "product-info" }, [
                    _c("div", { staticClass: "seller-logo" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: _vm.getUrl("shop/" + shop.slug) },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.routerNavigator("shop", shop.slug)
                            },
                          },
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: shop.image_82x82,
                                expression: "shop.image_82x82",
                              },
                            ],
                            staticClass: "img-fluid",
                            attrs: { alt: "Image" },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h3", [
                      _c(
                        "a",
                        {
                          attrs: { href: _vm.getUrl("shop/" + shop.slug) },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.routerNavigator("shop", shop.slug)
                            },
                          },
                        },
                        [_vm._v(_vm._s(shop.shop_name))]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "sg-rating" },
                      [
                        _c("span", { staticClass: "pe-2 fw-bold" }, [
                          _vm._v(_vm._s(shop.rating_count)),
                        ]),
                        _vm._v(" "),
                        _c("star-rating", {
                          staticClass: "pb-1 seller_min_margin",
                          attrs: {
                            "read-only": true,
                            "star-size": 12,
                            "round-start-rating": false,
                          },
                          model: {
                            value: shop.rating_count,
                            callback: function ($$v) {
                              _vm.$set(shop, "rating_count", $$v)
                            },
                            expression: "shop.rating_count",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "rating-count" }, [
                          _vm._v(
                            "(" +
                              _vm._s(shop.reviews_count) +
                              " " +
                              _vm._s(_vm.lang.ratings) +
                              ")"
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product-info-bottom" }, [
                    _c("ul", { staticClass: "global-list" }, [
                      _c("li", [
                        _vm._v(
                          _vm._s(_vm.lang.products) +
                            ": " +
                            _vm._s(shop.total_products)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          _vm._s(_vm.lang.joined) +
                            ": " +
                            _vm._s(shop.join_date)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "store-btn",
                        attrs: { href: _vm.getUrl("shop/" + shop.slug) },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.routerNavigator("shop", shop.slug)
                          },
                        },
                      },
                      [
                        _vm._v(_vm._s(_vm.lang.visit_store) + " "),
                        _c("span", {
                          staticClass: "icon mdi mdi-name mdi-arrow-right",
                        }),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        )
      : _vm.shimmer
      ? _c(
          "ul",
          {
            staticClass: "products",
            class: _vm.class_name ? _vm.class_name : "grid-4",
          },
          _vm._l(_vm.number, function (seller, index) {
            return _c("li", { key: index }, [
              _c("div", { staticClass: "sg-product" }, [
                _c("div", { staticClass: "product-thumb" }, [
                  _c(
                    "a",
                    { attrs: { href: "javascript:void(0)" } },
                    [_c("shimmer")],
                    1
                  ),
                ]),
              ]),
            ])
          }),
          0
        )
      : _vm._e(),
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

/***/ "./node_modules/vue-star-rating/dist/VueStarRating.common.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-star-rating/dist/VueStarRating.common.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "27c2":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_3663__("4bad");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-star-rating-star[data-v-fde73a0c]{display:inline-block}.vue-star-rating-pointer[data-v-fde73a0c]{cursor:pointer}.vue-star-rating[data-v-fde73a0c]{display:flex;align-items:center}.vue-star-rating-inline[data-v-fde73a0c]{display:inline-flex}.vue-star-rating-rating-text[data-v-fde73a0c]{margin-left:7px}.vue-star-rating-rtl[data-v-fde73a0c]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-fde73a0c]{margin-right:10px;direction:rtl}.sr-only[data-v-fde73a0c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2b2b":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4521__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4521__("3c76");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4521__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3c76":
/***/ (function(module, exports, __nested_webpack_require_6906__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_6906__("27c2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_6906__("499e").default
var update = add("af45d76c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_7411__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_7411__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_7411__.d(__nested_webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "70a0":
/***/ (function(module, exports, __nested_webpack_require_17250__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_17250__("812a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_17250__("499e").default
var update = add("4599b915", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "812a":
/***/ (function(module, exports, __nested_webpack_require_17743__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_17743__("4bad");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-star-rating-star[data-v-ef4bc576]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-ef4bc576]{transition:all .25s}.vue-star-rating-star-rotate[data-v-ef4bc576]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "ab73":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21536__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21536__("70a0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_21536__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d4aa":
/***/ (function(module, exports) {

class AlphaColor {

    constructor(color) {
        this.color = color
    }

    parseAlphaColor() {
        if (/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseRgba()
        } else if (/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseHsla()
        } else if (/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)) {
            return this.parseAlphaHex()
        } else if (/^transparent$/.test(this.color)) {
            return this.parseTransparent()
        }

        return {
            color: this.color,
            opacity: '1'
        }
    }

    parseRgba() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseHsla() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseAlphaHex() {
        return {
            color: this.color.length === 5 ? this.color.substring(0, 4) : this.color.substring(0, 7),
            opacity: this.color.length === 5 ? (parseInt(this.color.substring(4, 5) + this.color.substring(4, 5), 16) / 255).toFixed(2) : (parseInt(this.color.substring(7, 9), 16) / 255).toFixed(2)

        }
    }

    parseTransparent() {
        return {
            color: '#fff',
            opacity: 0
        }
    }
}

module.exports = AlphaColor

/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_25488__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_25488__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_25488__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_25488__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1c5cd387-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star-rating.vue?vue&type=template&id=fde73a0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['vue-star-rating', {'vue-star-rating-rtl':_vm.rtl}, {'vue-star-rating-inline': _vm.inline}]},[_c('div',{staticClass:"sr-only"},[_vm._t("screen-reader",[_c('span',[_vm._v("Rated "+_vm._s(_vm.selectedRating)+" stars out of "+_vm._s(_vm.maxRating))])],{"rating":_vm.selectedRating,"stars":_vm.maxRating})],2),_c('div',{staticClass:"vue-star-rating",on:{"mouseleave":_vm.resetRating}},[_vm._l((_vm.maxRating),function(n){return _c('span',{key:n,class:[{'vue-star-rating-pointer': !_vm.readOnly }, 'vue-star-rating-star'],style:({'margin-right': _vm.margin + 'px'})},[_c('star',{attrs:{"fill":_vm.fillLevel[n-1],"size":_vm.starSize,"points":_vm.starPoints,"star-id":n,"step":_vm.step,"active-color":_vm.currentActiveColor,"inactive-color":_vm.inactiveColor,"border-color":_vm.borderColor,"active-border-color":_vm.currentActiveBorderColor,"border-width":_vm.borderWidth,"rounded-corners":_vm.roundedCorners,"rtl":_vm.rtl,"glow":_vm.glow,"glow-color":_vm.glowColor,"animate":_vm.animate},on:{"star-selected":function($event){return _vm.setRating($event, true)},"star-mouse-move":_vm.setRating}})],1)}),(_vm.showRating)?_c('span',{class:['vue-star-rating-rating-text', _vm.textClass]},[_vm._v(" "+_vm._s(_vm.formattedRating))]):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/star-rating.vue?vue&type=template&id=fde73a0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1c5cd387-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star.vue?vue&type=template&id=ef4bc576&scoped=true&
var starvue_type_template_id_ef4bc576_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:['vue-star-rating-star', {'vue-star-rating-star-rotate' : _vm.shouldAnimate}],attrs:{"height":_vm.starSize,"width":_vm.starSize,"viewBox":_vm.viewBox},on:{"mousemove":_vm.mouseMoving,"click":_vm.selected,"touchstart":_vm.touchStart,"touchend":_vm.touchEnd}},[_c('linearGradient',{attrs:{"id":_vm.grad,"x1":"0","x2":"100%","y1":"0","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.starFill,"stop-color":(_vm.rtl) ? _vm.getColor(_vm.inactiveColor) : _vm.getColor(_vm.activeColor),"stop-opacity":(_vm.rtl) ? _vm.getOpacity(_vm.inactiveColor) : _vm.getOpacity(_vm.activeColor)}}),_c('stop',{attrs:{"offset":_vm.starFill,"stop-color":(_vm.rtl) ? _vm.getColor(_vm.activeColor) : _vm.getColor(_vm.inactiveColor),"stop-opacity":(_vm.rtl) ? _vm.getOpacity(_vm.activeColor) : _vm.getOpacity(_vm.inactiveColor)}})],1),_c('filter',{attrs:{"id":_vm.glowId,"height":"130%","width":"130%","filterUnits":"userSpaceOnUse"}},[_c('feGaussianBlur',{attrs:{"stdDeviation":_vm.glow,"result":"coloredBlur"}}),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"coloredBlur"}}),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1),(_vm.glowColor && _vm.glow > 0)?_c('polygon',{directives:[{name:"show",rawName:"v-show",value:(_vm.fill > 1),expression:"fill > 1"}],attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId,"stroke":_vm.glowColor,"filter":'url(#'+_vm.glowId+')',"stroke-width":_vm.border}}):_vm._e(),_c('polygon',{attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId,"stroke":_vm.getBorderColor,"stroke-width":_vm.border,"stroke-linejoin":_vm.strokeLinejoin}}),_c('polygon',{attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId}})],1)}
var starvue_type_template_id_ef4bc576_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/star.vue?vue&type=template&id=ef4bc576&scoped=true&

// EXTERNAL MODULE: ./src/classes/AlphaColor.js
var AlphaColor = __nested_webpack_require_25488__("d4aa");
var AlphaColor_default = /*#__PURE__*/__nested_webpack_require_25488__.n(AlphaColor);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var starvue_type_script_lang_js_ = ({
    name: 'Star',
    props: {
        fill: {
            type: Number,
            default: 0
        },
        points: {
            type: Array,
            default() {
                return []
            }
        },
        size: {
            type: Number,
            default: 50
        },
        starId: {
            type: Number,
            required: true
        },
        activeColor: {
            type: String,
            required: true
        },
        inactiveColor: {
            type: String,
            required: true
        },
        borderColor: {
            type: String,
            default: '#000'
        },
        activeBorderColor: {
            type: String,
            default: '#000'
        },
        borderWidth: {
            type: Number,
            default: 0
        },
        roundedCorners: {
            type: Boolean,
            default: false
        },
        rtl: {
            type: Boolean,
            default: false
        },
        glow: {
            type: Number,
            default: 0
        },
        glowColor: {
            type: String,
            default: null,
            required: false
        },
        animate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
            grad: '',
            glowId: '',
            isStarActive: true
        }
    },
    computed: {
        starPointsToString() {
            return this.starPoints.join(',')
        },
        gradId() {
            return 'url(#' + this.grad + ')'
        },
        starSize() {
            // Adjust star size when rounded corners are set with no border, to account for the 'hidden' border
            const size = (this.roundedCorners && this.borderWidth <= 0) ? parseInt(this.size) - parseInt(this.border) : this.size
            return parseInt(size) + parseInt(this.border)
        },
        starFill() {
            return (this.rtl) ? 100 - this.fill + '%' : this.fill + '%'
        },
        border() {
            return (this.roundedCorners && this.borderWidth <= 0) ? 6 : this.borderWidth
        },
        getBorderColor() {
            if (this.roundedCorners && this.borderWidth <= 0) {
                // create a hidden border
                return (this.fill <= 0) ? this.inactiveColor : this.activeColor
            }

            return (this.fill <= 0) ? this.borderColor : this.activeBorderColor
        },
        maxSize() {
            return this.starPoints.reduce(function(a, b) {
                return Math.max(a, b)
            })
        },
        viewBox() {
            return '0 0 ' + this.maxSize + ' ' + this.maxSize
        },
        shouldAnimate() {
            return this.animate && this.isStarActive
        },
        strokeLinejoin() {
            return this.roundedCorners ? 'round' : 'miter'
        }
    },
    created() {
        this.starPoints = (this.points.length) ? this.points : this.starPoints
        this.calculatePoints()
        this.grad = this.getRandomId()
        this.glowId = this.getRandomId()
    },
    methods: {
        mouseMoving($event) {
            if ($event.touchAction !== 'undefined') {
                this.$emit('star-mouse-move', {
                    event: $event,
                    position: this.getPosition($event),
                    id: this.starId
                })
            }
        },
        touchStart() {
            this.$nextTick(() => {
                this.isStarActive = true
            })
        },
        touchEnd() {
            this.$nextTick(() => {
                this.isStarActive = false
            })
        },
        getPosition($event) {
            // calculate position in percentage.
            var starWidth = (92 / 100) * this.size
            const offset = (this.rtl) ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1)
            var position = Math.round((100 / starWidth) * offset)

            return Math.min(position, 100)
        },
        selected($event) {
            this.$emit('star-selected', {
                id: this.starId,
                position: this.getPosition($event)
            })
        },
        getRandomId() {
            return Math.random().toString(36).substring(7)
        },
        calculatePoints() {
            this.starPoints = this.starPoints.map((point, i) => {
                const offset = i % 2 === 0 ? this.border * 1.5 : 0
                return ((this.size / this.maxSize) * point) + offset
            })
        },
        getColor(color) {
            return new AlphaColor_default.a(color).parseAlphaColor().color
        },
        getOpacity(color) {
            return new AlphaColor_default.a(color).parseAlphaColor().opacity
        }
    }
});

// CONCATENATED MODULE: ./src/star.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_starvue_type_script_lang_js_ = (starvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/star.vue?vue&type=style&index=0&id=ef4bc576&scoped=true&lang=css&
var starvue_type_style_index_0_id_ef4bc576_scoped_true_lang_css_ = __nested_webpack_require_25488__("ab73");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/star.vue






/* normalize component */

var component = normalizeComponent(
  src_starvue_type_script_lang_js_,
  starvue_type_template_id_ef4bc576_scoped_true_render,
  starvue_type_template_id_ef4bc576_scoped_true_staticRenderFns,
  false,
  null,
  "ef4bc576",
  null
  
)

/* harmony default export */ var star = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star-rating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var star_ratingvue_type_script_lang_js_ = ({
    components: {
        star: star
    },
    model: {
        prop: 'rating',
        event: 'rating-selected'
    },
    props: {
        increment: {
            type: Number,
            default: 1
        },
        rating: {
            type: Number,
            default: 0
        },
        roundStartRating: {
            type: Boolean,
            default: true
        },
        activeColor: {
            type: [String, Array],
            default: '#ffd055'
        },
        inactiveColor: {
            type: String,
            default: '#d8d8d8'
        },
        maxRating: {
            type: Number,
            default: 5
        },
        starPoints: {
            type: Array,
            default() {
                return []
            }
        },
        starSize: {
            type: Number,
            default: 50
        },
        showRating: {
            type: Boolean,
            default: true
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        textClass: {
            type: String,
            default: ''
        },
        inline: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String,
            default: '#999'
        },
        activeBorderColor: {
            type: [String, Array],
            default: null
        },
        borderWidth: {
            type: Number,
            default: 0
        },
        roundedCorners: {
            type: Boolean,
            default: false
        },
        padding: {
            type: Number,
            default: 0
        },
        rtl: {
            type: Boolean,
            default: false
        },
        fixedPoints: {
            type: Number,
            default: null
        },
        glow: {
            type: Number,
            default: 0
        },
        glowColor: {
            type: String,
            default: '#fff'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        activeOnClick: {
            type: Boolean,
            default: false
        },
        animate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            step: 0,
            fillLevel: [],
            currentRating: 0,
            selectedRating: 0,
            ratingSelected: false
        }
    },
    computed: {
        formattedRating() {
            return (this.fixedPoints === null) ? this.currentRating : this.currentRating.toFixed(this.fixedPoints)
        },
        shouldRound() {
            return this.ratingSelected || this.roundStartRating
        },
        margin() {
            return this.padding + this.borderWidth
        },
        activeColors() {
            if (Array.isArray(this.activeColor)) {
                return this.padColors(this.activeColor, this.maxRating, this.activeColor.slice(-1)[0])
            }
            return new Array(this.maxRating).fill(this.activeColor)
        },
        currentActiveColor() {
            if (!this.activeOnClick) {
                return (this.currentRating > 0) ? this.activeColors[Math.ceil(this.currentRating) - 1] : this.inactiveColor
            }
            return (this.selectedRating > 0) ? this.activeColors[Math.ceil(this.selectedRating) - 1] : this.inactiveColor
        },
        activeBorderColors() {
            if (Array.isArray(this.activeBorderColor)) {
                return this.padColors(this.activeBorderColor, this.maxRating, this.activeBorderColor.slice(-1)[0])
            }
            let borderColor = (this.activeBorderColor) ? this.activeBorderColor : this.borderColor
            return new Array(this.maxRating).fill(borderColor)
        },
        currentActiveBorderColor() {
            if (!this.activeOnClick) {
                return (this.currentRating > 0) ? this.activeBorderColors[Math.ceil(this.currentRating) - 1] : this.borderColor
            }
            return (this.selectedRating > 0) ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1] : this.borderColor
        }
    },
    watch: {
        rating(val) {
            this.currentRating = val
            this.selectedRating = val
            this.createStars(this.shouldRound)
        }
    },
    created() {
        this.step = this.increment * 100
        this.currentRating = this.rating
        this.selectedRating = this.currentRating
        this.createStars(this.roundStartRating)
    },
    methods: {
        setRating($event, persist) {
            if (!this.readOnly) {
                const position = (this.rtl) ? (100 - $event.position) / 100 : $event.position / 100
                this.currentRating = (($event.id + position) - 1).toFixed(2)
                this.currentRating = (this.currentRating > this.maxRating) ? this.maxRating : this.currentRating
                if (persist) {
                    this.createStars(true, true)
                    if (this.clearable && this.currentRating === this.selectedRating) {
                        this.selectedRating = 0
                    } else {
                        this.selectedRating = this.currentRating
                    }

                    this.$emit('rating-selected', this.selectedRating)
                    this.ratingSelected = true
                } else {
                    this.createStars(true, !this.activeOnClick)
                    this.$emit('current-rating', this.currentRating)
                }
            }
        },
        resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating
                this.createStars(this.shouldRound)
            }
        },
        createStars(round = true, applyFill = true) {
            if (round) {
                this.round()
            }
            for (var i = 0; i < this.maxRating; i++) {
                let level = 0
                if (i < this.currentRating) {
                    level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100
                }
                if (applyFill) {
                    this.fillLevel[i] = Math.round(level)
                }
            }
        },
        round() {
            var inv = 1.0 / this.increment
            this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv)
        },
        padColors(array, minLength, fillValue) {
            return Object.assign(new Array(minLength).fill(fillValue), array)
        }
    }
});

// CONCATENATED MODULE: ./src/star-rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_star_ratingvue_type_script_lang_js_ = (star_ratingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/star-rating.vue?vue&type=style&index=0&id=fde73a0c&scoped=true&lang=css&
var star_ratingvue_type_style_index_0_id_fde73a0c_scoped_true_lang_css_ = __nested_webpack_require_25488__("2b2b");

// CONCATENATED MODULE: ./src/star-rating.vue






/* normalize component */

var star_rating_component = normalizeComponent(
  src_star_ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fde73a0c",
  null
  
)

/* harmony default export */ var star_rating = (star_rating_component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src_0 = (star_rating);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=VueStarRating.common.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfdXNlcl9mb2xsb3dlZC1zaG9wX3Z1ZS5mOTllMDViMWQxYjZhMTA5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSx1QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsYUFGQTtBQUdBLG9CQUhBO0FBSUEsMEJBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQXBCQTtBQXFCQTtBQUNBLGdGQURBO0FBRUEsc0VBRkE7QUFHQSx3RUFIQTtBQUlBO0FBSkEsR0FyQkE7QUEyQkE7QUFDQSxXQURBLG1CQUNBLFFBREEsRUFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0EzQkE7QUFnQ0E7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsV0FKQSxxQkFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBTkE7QUFPQSxZQVBBLHNCQU9BO0FBQ0E7QUFDQTtBQVRBLEdBaENBO0FBMkNBO0FBQ0EsZUFEQSx5QkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQVRBO0FBVUE7QUFkQTtBQTNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwQkE7QUFDQTtBQUVBO0FBQ0EsZ0JBREE7QUFFQSwwREFGQTtBQUdBO0FBQ0Esd0VBREE7QUFDQTtBQURBLEdBSEE7QUFNQSxNQU5BLGtCQU1BO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGdDQUFtQjs7QUFFdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsZ0NBQW1COztBQUU3Rjs7Ozs7OztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQSw2Q0FBNkMsMEJBQW1COzs7O0FBSWhFLE9BQU87O0FBRVAsVUFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvZm9sbG93ZWQtc2hvcC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NlbGxlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvZm9sbG93ZWQtc2hvcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2VsbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvZm9sbG93ZWQtc2hvcC52dWU/ZjIzZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zZWxsZXIudnVlPzI1MjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWU/MjQ1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlPzZhOTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9mb2xsb3dlZC1zaG9wLnZ1ZT8yYWFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvZm9sbG93ZWQtc2hvcC52dWU/M2U1MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zZWxsZXIudnVlPzQ0NWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWU/ODY1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlPzg3N2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdGFyLXJhdGluZy9kaXN0L1Z1ZVN0YXJSYXRpbmcuY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwic2ctcGFnZS1jb250ZW50XCI+XHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtcHJvZmlsZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PHVzZXJfc2lkZWJhciA6Y3VycmVudD1cImN1cnJlbnRcIj48L3VzZXJfc2lkZWJhcj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctOSBwbC1sZy01XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZy1zaGlwcGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxPnt7IGxlbmd0aENvdW50ZXIoc2VsbGVycykgPT0gMCA/IGxhbmcubm9fc2VsbGVyX2ZvdW5kcyA6IGxhbmcuYWxsX3NlbGxlciB9fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNnLXNlbGxlci1wcm9kdWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsbGVyIDpzZWxsZXJzPVwic2VsbGVyc1wiIDpjbGFzc19uYW1lPVwiJ2dyaWQtMydcIiA6bnVtYmVyPVwiMTJcIiA6c2hpbW1lcj1cInNoaW1tZXJcIiA6aXNfc2hpbW1lcj1cImlzX3NoaW1tZXJcIj48L3NlbGxlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlciBzaG93LW1vcmVcIiB2LWlmPVwibmV4dF9wYWdlX3VybCAmJiAhbG9hZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIEBjbGljaz1cImxvYWRTZWxsZXJzKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7IGxhbmcuc2hvd19tb3JlIH19PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlXCIgdi1zaG93PVwibG9hZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PGltZyB3aWR0aD1cIjIwXCIgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZWxvYWRlci5naWYnKVwiIGFsdD1cInByZWxvYWRlclwiIC8+IHt7IGxhbmcubG9hZGluZyB9fTwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdXNlcl9zaWRlYmFyIGZyb20gXCIuLi8uLi9wYXJ0aWFscy91c2VyX3NpZGViYXJcIjtcclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL3NoaW1tZXJcIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcInZ1ZS1zdGFyLXJhdGluZ1wiO1xyXG5pbXBvcnQgc2VsbGVyIGZyb20gXCIuLi8uLi9wYXJ0aWFscy9zZWxsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiBcImZvbGxvd2VkLXNob3BcIixcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y3VycmVudDogXCJmb2xsb3dlZF9zaG9wXCIsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRuZXh0X3BhZ2VfdXJsOiBmYWxzZSxcclxuXHRcdFx0aXNfc2hpbW1lcjogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aENvdW50ZXIodGhpcy5zZWxsZXJzKSA9PSAwKSB7XHJcblx0XHRcdC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdGb2xsb3dlZFNlbGxlcnMnKTtcclxuXHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJGb2xsb3dlZFNlbGxlcnNcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubGVuZ3RoQ291bnRlcih0aGlzLnNlbGxlcnMpID4gMCkge1xyXG5cdFx0XHR0aGlzLmlzX3NoaW1tZXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0dXNlcl9zaWRlYmFyLFxyXG5cdFx0c2hpbW1lcixcclxuXHRcdFN0YXJSYXRpbmcsXHJcblx0XHRzZWxsZXIsXHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0c2VsbGVycyhuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0dGhpcy5pc19zaGltbWVyID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0c2hpbW1lcigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLm1vZHVsZS5zaGltbWVyO1xyXG5cdFx0fSxcclxuXHRcdHNlbGxlcnMoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEZvbGxvd2VkU2VsbGVycy5maWx0ZXIoKHNlbGxlcikgPT4gc2VsbGVyLmlkID4gMCk7XHJcblx0XHR9LFxyXG5cdFx0dXNlclNob3AoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFNob3BGb2xsd2VyO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGxvYWRTZWxsZXJzKCkge1xyXG5cdFx0XHRsZXQgdXJsID0gdGhpcy5nZXRVcmwoXCJ1c2VyL2ZvbGxvd2VkLXNlbGxlcnM/cGFnZT1cIiArIHRoaXMucGFnZSk7XHJcblx0XHRcdHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcblx0XHRcdGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKyBcIiAhIVwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KFwic2V0Rm9sbG93ZWRTZWxsZXJzXCIsIHJlc3BvbnNlLmRhdGEuc2VsbGVycy5kYXRhKTtcclxuXHRcdFx0XHRcdHRoaXMubmV4dF9wYWdlX3VybCA9IHJlc3BvbnNlLmRhdGEuc2VsbGVycy5uZXh0X3BhZ2VfdXJsO1xyXG5cdFx0XHRcdFx0dGhpcy5wYWdlKys7XHJcblx0XHRcdFx0XHR0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0c1wiIDpjbGFzcz1cImNsYXNzX25hbWUgPyBjbGFzc19uYW1lIDogJ2dyaWQtNCdcIiB2LWlmPVwiaXNfc2hpbW1lclwiPlxyXG4gICAgICAgICAgICA8bGkgdi1mb3I9XCIoc2hvcCxpKSBpbiBzZWxsZXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXRodW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsKCdzaG9wLycrc2hvcC5zbHVnKVwiIEBjbGljay5wcmV2ZW50PVwicm91dGVyTmF2aWdhdG9yKCdzaG9wJyxzaG9wLnNsdWcpXCI+PGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1sYXp5PVwic2hvcC5pbWFnZV8yOTd4MjAzXCIgYWx0PVwiSW1hZ2VcIiBjbGFzcz1cImltZy1mbHVpZFwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdm9yaXRlLWljb25cIiB2LWlmPVwiYXV0aFVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIDpjbGFzcz1cInsgJ2Rpc2FibGVfYnRuJyA6IGJ0bl9kaXNhYmxlZCB9XCIgQGNsaWNrPVwicmVtb3ZlRm9sbG93ZWQoc2hvcC5pZClcIiB2LWlmPVwiY2hlY2tGb2xsb3dlZChzaG9wKVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktaGVhcnRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgOmNsYXNzPVwieyAnZGlzYWJsZV9idG4nIDogYnRuX2Rpc2FibGVkIH1cIiBAY2xpY2s9XCJmb2xsb3coc2hvcC5pZClcIiB2LWVsc2U+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1oZWFydC1vdXRsaW5lXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGxlci1wcm9kdWN0LWdyaWQtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsbGVyLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRVcmwoJ3Nob3AvJytzaG9wLnNsdWcpXCIgQGNsaWNrLnByZXZlbnQ9XCJyb3V0ZXJOYXZpZ2F0b3IoJ3Nob3AnLHNob3Auc2x1ZylcIj48aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWxhenk9XCJzaG9wLmltYWdlXzgyeDgyXCIgYWx0PVwiSW1hZ2VcIiBjbGFzcz1cImltZy1mbHVpZFwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxhIDpocmVmPVwiZ2V0VXJsKCdzaG9wLycrc2hvcC5zbHVnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJyb3V0ZXJOYXZpZ2F0b3IoJ3Nob3AnLHNob3Auc2x1ZylcIj57eyBzaG9wLnNob3BfbmFtZSB9fTwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLXJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGUtMiBmdy1ib2xkXCI+e3sgc2hvcC5yYXRpbmdfY291bnQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXItcmF0aW5nIGNsYXNzPVwicGItMSBzZWxsZXJfbWluX21hcmdpblwiIHYtbW9kZWw6cmF0aW5nX2NvdW50PVwic2hvcC5yYXRpbmdfY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVhZC1vbmx5PVwidHJ1ZVwiIDpzdGFyLXNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyb3VuZC1zdGFydC1yYXRpbmc9XCJmYWxzZVwiPjwvc3Rhci1yYXRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctY291bnRcIj4oe3sgc2hvcC5yZXZpZXdzX2NvdW50IH19IHt7IGxhbmcucmF0aW5ncyB9fSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm8tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLnByb2R1Y3RzIH19OiB7eyBzaG9wLnRvdGFsX3Byb2R1Y3RzIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3sgbGFuZy5qb2luZWQgfX06IHt7IHNob3Auam9pbl9kYXRlIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFVybCgnc2hvcC8nK3Nob3Auc2x1ZylcIiBAY2xpY2sucHJldmVudD1cInJvdXRlck5hdmlnYXRvcignc2hvcCcsc2hvcC5zbHVnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3JlLWJ0blwiPnt7IGxhbmcudmlzaXRfc3RvcmUgfX0gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIG1kaSBtZGktbmFtZSBtZGktYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLnNnLXByb2R1Y3QgLS0+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0c1wiIDpjbGFzcz1cImNsYXNzX25hbWUgPyBjbGFzc19uYW1lIDogJ2dyaWQtNCdcIiB2LWVsc2UtaWY9XCJzaGltbWVyXCI+XHJcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzZWxsZXIsaW5kZXgpIGluIG51bWJlclwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC10aHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+PHNoaW1tZXI+PC9zaGltbWVyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICd2dWUtc3Rhci1yYXRpbmcnO1xyXG5pbXBvcnQgc2hpbW1lciBmcm9tIFwiLi9zaGltbWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInNlbGxlclwiLFxyXG4gICAgcHJvcHM6IFsnc2VsbGVycycsICdjbGFzc19uYW1lJywnbnVtYmVyJywnaXNfc2hpbW1lciddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFN0YXJSYXRpbmcsc2hpbW1lclxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJldmlldy5qcGcnKVwiIGFsdD1cInNoaW1tZXJcIlxyXG4gICAgICAgY2xhc3M9XCJzaGltbWVyXCIgdi1iaW5kOnN0eWxlPSBcIltoZWlnaHQgPyBzdHlsZSA6IG51bGxdXCI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInNoaW1tZXIudnVlXCIsXHJcbiAgICBwcm9wczogWydoZWlnaHQnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLmhlaWdodCsncHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctM1wiIHYtaWY9XCJhdXRoVXNlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWRldGFpbHMgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtdGh1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImF1dGhVc2VyLnByb2ZpbGVfaW1hZ2VcIiA6YWx0PVwiYXV0aFVzZXIuZnVsbF9uYW1lXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMj57eyBhdXRoVXNlci5mdWxsX25hbWUgfX0gPHJvdXRlci1saW5rIGNsYXNzPVwiZC1pbmxpbmVcIiA6dG89XCJ7IG5hbWUgOiAnZWRpdC5wcm9maWxlJyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLXBlbmNpbFwiPjwvc3Bhbj48L3JvdXRlci1saW5rPjwvaDI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj57eyBhdXRoVXNlci5lbWFpbCB9fTwvYT5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYmVfc2VsbGVyIGJhc2VcIiA6dG89XCJ7IG5hbWUgOiAnbWlncmF0ZS5zZWxsZXInIH1cIiAgdi1pZj1cInNldHRpbmdzLnNlbGxlcl9zeXN0ZW0gPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbGFuZy5iZV9hX3NlbGxlciB9fSA8c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktc3RvcmUtb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImdsb2JhbC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2Rhc2hib2FyZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdkYXNoYm9hcmQnIH1cIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktdmlldy1kYXNoYm9hcmQtb3V0bGluZVwiPjwvc3Bhbj4ge3sgbGFuZy5kYXNoYm9hcmQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnYWRkcmVzc2VzJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ2FkZHJlc3NlcycgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1tYXAtbWFya2VyLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcuYWRkcmVzc2VzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ25vdGlmaWNhdGlvbid9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdub3RpZmljYXRpb24nIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktYmVsbC1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLm5vdGlmaWNhdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdvcmRlcl9oaXN0b3J5J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ29yZGVyLmhpc3RvcnknIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktY2FydC1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLm9yZGVyX2hpc3RvcnkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwiZG93bmxvYWRfdXJsXCIgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2RpZ2l0YWxfcHJvZHVjdF9vcmRlcl9oaXN0b3J5J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ29yZGVycy5kaWdpdGFsLnByb2R1Y3QnIH1cIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktY2FydC1hcnJvdy1kb3duXCI+PC9zcGFuPiB7eyBsYW5nLmRpZ2l0YWxfcHJvZHVjdF9vcmRlciB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5jb3Vwb25fc3lzdGVtID09IDFcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnZ2lmdF92b3VjaGVyJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ2dpZnQudm91Y2hlcicgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS13YWxsZXQtZ2lmdGNhcmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcuZ2lmdF92b3VjaGVyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ2NoYW5nZV9wYXNzd29yZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdjaGFuZ2UucGFzc3dvcmQnIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktbG9jay1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLmNoYW5nZV9wYXNzd29yZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy53YWxsZXRfc3lzdGVtID09IDFcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnd2FsbGV0X2hpc3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnd2FsbGV0Lmhpc3RvcnknIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktd2FsbGV0LW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcubXlfd2FsbGV0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImFkZG9ucy5pbmNsdWRlcygncmV3YXJkJylcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAncmV3YXJkX2hpc3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAncmV3YXJkLmhpc3RvcnknIH1cIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktdmVjdG9yLXBvaW50XCI+PC9zcGFuPnt7IGxhbmcubXlfcmV3YXJkcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5zZWxsZXJfc3lzdGVtID09IDFcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnZm9sbG93ZWRfc2hvcCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdzaG9wLmZvbGxvd2VkJyB9XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLWhvbWUtaGVhcnRcIj48L3NwYW4+e3sgbGFuZy5zaG9wIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSByZXdhcmRcIiBpZD1cImNvbnZlcnRfcmV3YXJkXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyBsYW5nLnJld2FyZF9wb2ludCB9fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbW9kYWxfY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgcmV3YXJkX21vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImNvbnZlcnRSZXdhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmV3YXJkXCI+e3sgbGFuZy5yZXdhcmRfcG9pbnQgfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicmV3YXJkXCIgdi1tb2RlbD1cImNvbnZlcnRlZF9yZXdhcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy5lbnRlcl9wb2ludF95b3Vfd2FudF9jb252ZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdGFydFwiIHYtaWY9XCJ0b3RhbFJld2FyZCAhPSBudWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFibGUgUG9pbnRzIHRvIENvbnZlcnQgOiB7eyB0b3RhbFJld2FyZC5yZXdhcmRzIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZSB9fXt7IGxhbmcucmV3YXJkX3BvaW50cyB9fXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRm9ybWF0KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInRvdGFsUmV3YXJkLnJld2FyZHMgPiAwXCI+e3sgbGFuZy50b3RhbF9hbW91bnRfeW91X3dpbGxfZ2V0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJpY2VGb3JtYXQoY29udmVydGVkX3Jld2FyZCAvIHNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUpIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmdfYnV0dG9uIHYtaWY9XCJsb2FkaW5nXCIgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5IG10LTMnXCI+PC9sb2FkaW5nX2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdi1lbHNlIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Rpc2FibGVfYnRuJyA6IGNvbnZlcnRlZF9yZXdhcmQgPCBzZXR0aW5ncy5yZXdhcmRfY29udmVydF9yYXRlIHx8IHRvdGFsUmV3YXJkLnJld2FyZHMgPCBjb252ZXJ0ZWRfcmV3YXJkIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcuY292ZXJ0X3Jld2FyZHMgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1ib2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4vc2hpbW1lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ1c2VyX3NpZGViYXJcIixcclxuICAgIHByb3BzOiBbXHJcbiAgICAgICAgJ2N1cnJlbnQnLFxyXG4gICAgICAgICdhZGRyZXNzZXMnXHJcbiAgICBdLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvd25sb2FkX3VybCA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0F1dGgoKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHRvdGFsUmV3YXJkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRUb3RhbFJld2FyZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsVHlwZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0TW9kYWxUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgc2hpbW1lcixcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tBdXRoKCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ2hvbWUvY2hlY2stYXV0aCcpXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndXNlcicsIHJlc3BvbnNlLmRhdGEudXNlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2dldE9yZGVyVXJsJywgcmVzcG9uc2UuZGF0YS5vcmRlcl91cmxzKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdXRoVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbG9naW4nfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0aFVzZXIudXNlcl90eXBlID09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2hvbWUnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFRvdGFsUmV3YXJkJywgcmVzcG9uc2UuZGF0YS5yZXdhcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZG93bmxvYWRfdXJscylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkX3VybCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnZlcnRSZXdhcmQoKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgndXNlci9jb252ZXJ0LXJld2FyZCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZvcm0gPSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuY29udmVydGVkX3Jld2FyZCAvIHRoaXMuc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZSxcclxuICAgICAgICAgICAgICAgIHJld2FyZDogdGhpcy5jb252ZXJ0ZWRfcmV3YXJkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uYW1vdW50ID4gMCAmJiB0aGlzLnRvdGFsUmV3YXJkLnJld2FyZHMgPj0gdGhpcy5jb252ZXJ0ZWRfcmV3YXJkICYmIGNvbmZpcm0oJ0FyZSBZb3UgU3VyZSEgWW91IHdhbnQgdG8gQ29udmVydCA/JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCwgZm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsnICEhJyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLmRhdGEuc3VjY2VzcywgdGhpcy5sYW5nLlN1Y2Nlc3MgKyAnISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnZlcnRfcmV3YXJkJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWRfcmV3YXJkID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1c2VyJywgcmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRUb3RhbFJld2FyZCcsIHJlc3BvbnNlLmRhdGEucmV3YXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mb2xsb3dlZC1zaG9wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGNlODg5YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb2xsb3dlZC1zaG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZm9sbG93ZWQtc2hvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRjZTg4OWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRjZTg4OWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRjZTg4OWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZvbGxvd2VkLXNob3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkY2U4ODljJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkY2U4ODljJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL2ZvbGxvd2VkLXNob3AudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWxsZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY1Mjc2YTJjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlbGxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlbGxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjUyNzZhMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjUyNzZhMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjUyNzZhMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlbGxlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjUyNzZhMmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjUyNzZhMmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NlbGxlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWRhOTI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFkYTkyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZGE5MjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkY2MxMGRhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2RjYzEwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RjYzEwZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2RjYzEwZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3VzZXJfc2lkZWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9sbG93ZWQtc2hvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb2xsb3dlZC1zaG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxsZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VsbGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZvbGxvd2VkLXNob3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkY2U4ODljJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZy1wYWdlLWNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZWRpdC1wcm9maWxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXNlcl9zaWRlYmFyXCIsIHsgYXR0cnM6IHsgY3VycmVudDogX3ZtLmN1cnJlbnQgfSB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IHBsLWxnLTVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctc2hpcHBpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxlbmd0aENvdW50ZXIoX3ZtLnNlbGxlcnMpID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ubGFuZy5ub19zZWxsZXJfZm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmxhbmcuYWxsX3NlbGxlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZy1zZWxsZXItcHJvZHVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic2VsbGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbGVyczogX3ZtLnNlbGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19uYW1lOiBcImdyaWQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaW1tZXI6IF92bS5zaGltbWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfc2hpbW1lcjogX3ZtLmlzX3NoaW1tZXIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ubmV4dF9wYWdlX3VybCAmJiAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiB0ZXh0LWNlbnRlciBzaG93LW1vcmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkU2VsbGVycygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnNob3dfbW9yZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZWxvYWRlci5naWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInByZWxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmxhbmcubG9hZGluZykpLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5pc19zaGltbWVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0c1wiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5jbGFzc19uYW1lID8gX3ZtLmNsYXNzX25hbWUgOiBcImdyaWQtNFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5zZWxsZXJzLCBmdW5jdGlvbiAoc2hvcCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNnLXByb2R1Y3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXRodW1iXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmdldFVybChcInNob3AvXCIgKyBzaG9wLnNsdWcpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucm91dGVyTmF2aWdhdG9yKFwic2hvcFwiLCBzaG9wLnNsdWcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzaG9wLmltYWdlXzI5N3gyMDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG9wLmltYWdlXzI5N3gyMDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsdDogXCJJbWFnZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmYXZvcml0ZS1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja0ZvbGxvd2VkKHNob3ApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVfYnRuOiBfdm0uYnRuX2Rpc2FibGVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlRm9sbG93ZWQoc2hvcC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLWhlYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZV9idG46IF92bS5idG5fZGlzYWJsZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb2xsb3coc2hvcC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLWhlYXJ0LW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGxlci1wcm9kdWN0LWdyaWQtdmlld1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGxlci1sb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5nZXRVcmwoXCJzaG9wL1wiICsgc2hvcC5zbHVnKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yb3V0ZXJOYXZpZ2F0b3IoXCJzaG9wXCIsIHNob3Auc2x1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzaG9wLmltYWdlXzgyeDgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3AuaW1hZ2VfODJ4ODJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbHQ6IFwiSW1hZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmdldFVybChcInNob3AvXCIgKyBzaG9wLnNsdWcpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJvdXRlck5hdmlnYXRvcihcInNob3BcIiwgc2hvcC5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc2hvcC5zaG9wX25hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNnLXJhdGluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGUtMiBmdy1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNob3AucmF0aW5nX2NvdW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0YXItcmF0aW5nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGItMSBzZWxsZXJfbWluX21hcmdpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZC1vbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFyLXNpemVcIjogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3VuZC1zdGFydC1yYXRpbmdcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNob3AucmF0aW5nX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChzaG9wLCBcInJhdGluZ19jb3VudFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3AucmF0aW5nX2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyYXRpbmctY291bnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Moc2hvcC5yZXZpZXdzX2NvdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcucmF0aW5ncykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWluZm8tYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5wcm9kdWN0cykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHNob3AudG90YWxfcHJvZHVjdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5qb2luZWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhzaG9wLmpvaW5fZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdG9yZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5nZXRVcmwoXCJzaG9wL1wiICsgc2hvcC5zbHVnKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucm91dGVyTmF2aWdhdG9yKFwic2hvcFwiLCBzaG9wLnNsdWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy52aXNpdF9zdG9yZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIG1kaSBtZGktbmFtZSBtZGktYXJyb3ctcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICA6IF92bS5zaGltbWVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0c1wiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5jbGFzc19uYW1lID8gX3ZtLmNsYXNzX25hbWUgOiBcImdyaWQtNFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5udW1iZXIsIGZ1bmN0aW9uIChzZWxsZXIsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNnLXByb2R1Y3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXRodW1iXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJzaGltbWVyXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hpbW1lclwiLFxuICAgIHN0eWxlOiBbX3ZtLmhlaWdodCA/IF92bS5zdHlsZSA6IG51bGxdLFxuICAgIGF0dHJzOiB7XG4gICAgICBzcmM6IF92bS5nZXRVcmwoXCJwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJldmlldy5qcGdcIiksXG4gICAgICBhbHQ6IFwic2hpbW1lclwiLFxuICAgIH0sXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmF1dGhVc2VyXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZmlsZS1kZXRhaWxzIHBvc2l0aW9uLXJlbGF0aXZlXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtdGh1bWJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uYXV0aFVzZXIucHJvZmlsZV9pbWFnZSxcbiAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmF1dGhVc2VyLmZ1bGxfbmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdXRoVXNlci5mdWxsX25hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImVkaXQucHJvZmlsZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1wZW5jaWxcIiB9KV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF1dGhVc2VyLmVtYWlsKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3Muc2VsbGVyX3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJlX3NlbGxlciBiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibWlncmF0ZS5zZWxsZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFuZy5iZV9hX3NlbGxlcikgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktc3RvcmUtb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJkYXNoYm9hcmRcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJkYXNoYm9hcmRcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS12aWV3LWRhc2hib2FyZC1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLmxhbmcuZGFzaGJvYXJkKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJhZGRyZXNzZXNcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJhZGRyZXNzZXNcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1tYXAtbWFya2VyLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5hZGRyZXNzZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwibm90aWZpY2F0aW9uXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibm90aWZpY2F0aW9uXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktYmVsbC1vdXRsaW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm5vdGlmaWNhdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJvcmRlcl9oaXN0b3J5XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwib3JkZXIuaGlzdG9yeVwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktY2FydC1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5vcmRlcl9oaXN0b3J5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRvd25sb2FkX3VybFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwiZGlnaXRhbF9wcm9kdWN0X29yZGVyX2hpc3RvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwib3JkZXJzLmRpZ2l0YWwucHJvZHVjdFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktY2FydC1hcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5kaWdpdGFsX3Byb2R1Y3Rfb3JkZXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwiZ2lmdF92b3VjaGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImdpZnQudm91Y2hlclwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktd2FsbGV0LWdpZnRjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuZ2lmdF92b3VjaGVyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcImNoYW5nZV9wYXNzd29yZFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImNoYW5nZS5wYXNzd29yZFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktbG9jay1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5jaGFuZ2VfcGFzc3dvcmQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2V0dGluZ3Mud2FsbGV0X3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwid2FsbGV0X2hpc3RvcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwid2FsbGV0Lmhpc3RvcnlcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLXdhbGxldC1vdXRsaW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm15X3dhbGxldCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRvbnMuaW5jbHVkZXMoXCJyZXdhcmRcIilcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJyZXdhcmRfaGlzdG9yeVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZXdhcmQuaGlzdG9yeVwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktdmVjdG9yLXBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5teV9yZXdhcmRzKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZXR0aW5ncy5zZWxsZXJfc3lzdGVtID09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJmb2xsb3dlZF9zaG9wXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInNob3AuZm9sbG93ZWRcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWhvbWUtaGVhcnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuc2hvcCkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGUgcmV3YXJkXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJjb252ZXJ0X3Jld2FyZFwiLFxuICAgICAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImV4YW1wbGVNb2RhbExhYmVsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnJld2FyZF9wb2ludCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5IHJld2FyZF9tb2RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvbnZlcnRSZXdhcmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicmV3YXJkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5yZXdhcmRfcG9pbnQpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnZlcnRlZF9yZXdhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udmVydGVkX3Jld2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJld2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLmVudGVyX3BvaW50X3lvdV93YW50X2NvbnZlcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnZlcnRlZF9yZXdhcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3RhcnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmFpbGFibGUgUG9pbnRzIHRvIENvbnZlcnQgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5yZXdhcmRfcG9pbnRzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLnRvdGFsX2Ftb3VudF95b3Vfd2lsbF9nZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJld2FyZF9jb252ZXJ0X3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibG9hZGluZ19idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NfbmFtZTogXCJidG4gYnRuLXByaW1hcnkgbXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlX2J0bjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb252ZXJ0ZWRfcmV3YXJkIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3RhbFJld2FyZC5yZXdhcmRzIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5jb3ZlcnRfcmV3YXJkcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgbW9kYWxfY2xvc2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiZmIxNVwiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIyN2MyXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNGJhZFwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pLCBcIi52dWUtc3Rhci1yYXRpbmctc3RhcltkYXRhLXYtZmRlNzNhMGNde2Rpc3BsYXk6aW5saW5lLWJsb2NrfS52dWUtc3Rhci1yYXRpbmctcG9pbnRlcltkYXRhLXYtZmRlNzNhMGNde2N1cnNvcjpwb2ludGVyfS52dWUtc3Rhci1yYXRpbmdbZGF0YS12LWZkZTczYTBjXXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS52dWUtc3Rhci1yYXRpbmctaW5saW5lW2RhdGEtdi1mZGU3M2EwY117ZGlzcGxheTppbmxpbmUtZmxleH0udnVlLXN0YXItcmF0aW5nLXJhdGluZy10ZXh0W2RhdGEtdi1mZGU3M2EwY117bWFyZ2luLWxlZnQ6N3B4fS52dWUtc3Rhci1yYXRpbmctcnRsW2RhdGEtdi1mZGU3M2EwY117ZGlyZWN0aW9uOnJ0bH0udnVlLXN0YXItcmF0aW5nLXJ0bCAudnVlLXN0YXItcmF0aW5nLXJhdGluZy10ZXh0W2RhdGEtdi1mZGU3M2EwY117bWFyZ2luLXJpZ2h0OjEwcHg7ZGlyZWN0aW9uOnJ0bH0uc3Itb25seVtkYXRhLXYtZmRlNzNhMGNde3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTEwMDAwcHg7dG9wOmF1dG87d2lkdGg6MXB4O2hlaWdodDoxcHg7b3ZlcmZsb3c6aGlkZGVufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMmIyYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3Z1ZV9zdHlsZV9sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8wX25vZGVfbW9kdWxlc192dWVfY2xpX3NlcnZpY2Vfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19ub2RlX21vZHVsZXNfY2FjaGVfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8wXzBfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19zdGFyX3JhdGluZ192dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF9mZGU3M2EwY19zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIzYzc2XCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfdnVlX3N0eWxlX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzBfbm9kZV9tb2R1bGVzX3Z1ZV9jbGlfc2VydmljZV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX25vZGVfbW9kdWxlc19jYWNoZV9sb2FkZXJfZGlzdF9janNfanNfcmVmXzBfMF9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX3N0YXJfcmF0aW5nX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkX2ZkZTczYTBjX3Njb3BlZF90cnVlX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9ub2RlX21vZHVsZXNfdnVlX3N0eWxlX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzBfbm9kZV9tb2R1bGVzX3Z1ZV9jbGlfc2VydmljZV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX25vZGVfbW9kdWxlc19jYWNoZV9sb2FkZXJfZGlzdF9janNfanNfcmVmXzBfMF9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX3N0YXJfcmF0aW5nX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkX2ZkZTczYTBjX3Njb3BlZF90cnVlX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIHVudXNlZCBoYXJtb255IHJlZXhwb3J0ICogKi9cbiAvKiB1bnVzZWQgaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgX3VudXNlZF93ZWJwYWNrX2RlZmF1bHRfZXhwb3J0ID0gKF9ub2RlX21vZHVsZXNfdnVlX3N0eWxlX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzBfbm9kZV9tb2R1bGVzX3Z1ZV9jbGlfc2VydmljZV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX25vZGVfbW9kdWxlc19jYWNoZV9sb2FkZXJfZGlzdF9janNfanNfcmVmXzBfMF9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX3N0YXJfcmF0aW5nX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkX2ZkZTczYTBjX3Njb3BlZF90cnVlX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYSk7IFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIzYzc2XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjdjMlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDk5ZVwiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYWY0NWQ3NmNcIiwgY29udGVudCwgdHJ1ZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNDk5ZVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBhZGRTdHlsZXNDbGllbnQ7IH0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0YmFkXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjcwYTBcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4MTJhXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaSwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0OTllXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0NTk5YjkxNVwiLCBjb250ZW50LCB0cnVlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI4MTJhXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNGJhZFwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pLCBcIi52dWUtc3Rhci1yYXRpbmctc3RhcltkYXRhLXYtZWY0YmM1NzZde292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50fS52dWUtc3Rhci1yYXRpbmctc3Rhci1yb3RhdGVbZGF0YS12LWVmNGJjNTc2XXt0cmFuc2l0aW9uOmFsbCAuMjVzfS52dWUtc3Rhci1yYXRpbmctc3Rhci1yb3RhdGVbZGF0YS12LWVmNGJjNTc2XTpob3Zlcnt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzO3RyYW5zZm9ybTpyb3RhdGUoLTE1ZGVnKSBzY2FsZSgxLjMpfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiODg3NVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvLyBhZGRhcHRlZCBmcm9tIHRoZSBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHBvbHlmaWxsIGJ5IEFkYW0gTWlsbGVyXG4vLyBNSVQgbGljZW5zZVxuLy8gc291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vYW1pbGxlci1naC9jdXJyZW50U2NyaXB0LXBvbHlmaWxsXG5cbi8vIGFkZGVkIHN1cHBvcnQgZm9yIEZpcmVmb3ggaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTYyMDUwNVxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7fVxufSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0ICgpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZG9jdW1lbnQsICdjdXJyZW50U2NyaXB0JylcbiAgICAvLyBmb3IgY2hyb21lXG4gICAgaWYgKCFkZXNjcmlwdG9yICYmICdjdXJyZW50U2NyaXB0JyBpbiBkb2N1bWVudCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3VycmVudFNjcmlwdFxuICAgIH1cblxuICAgIC8vIGZvciBvdGhlciBicm93c2VycyB3aXRoIG5hdGl2ZSBzdXBwb3J0IGZvciBjdXJyZW50U2NyaXB0XG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5nZXQgIT09IGdldEN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgICB9XG4gIFxuICAgIC8vIElFIDgtMTAgc3VwcG9ydCBzY3JpcHQgcmVhZHlTdGF0ZVxuICAgIC8vIElFIDExKyAmIEZpcmVmb3ggc3VwcG9ydCBzdGFjayB0cmFjZVxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgLy8gRmluZCB0aGUgc2Vjb25kIG1hdGNoIGZvciB0aGUgXCJhdFwiIHN0cmluZyB0byBnZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suXG4gICAgICB2YXIgaWVTdGFja1JlZ0V4cCA9IC8uKmF0IFteKF0qXFwoKC4qKTooLispOiguKylcXCkkL2lnLFxuICAgICAgICBmZlN0YWNrUmVnRXhwID0gL0AoW15AXSopOihcXGQrKTooXFxkKylcXHMqJC9pZyxcbiAgICAgICAgc3RhY2tEZXRhaWxzID0gaWVTdGFja1JlZ0V4cC5leGVjKGVyci5zdGFjaykgfHwgZmZTdGFja1JlZ0V4cC5leGVjKGVyci5zdGFjayksXG4gICAgICAgIHNjcmlwdExvY2F0aW9uID0gKHN0YWNrRGV0YWlscyAmJiBzdGFja0RldGFpbHNbMV0pIHx8IGZhbHNlLFxuICAgICAgICBsaW5lID0gKHN0YWNrRGV0YWlscyAmJiBzdGFja0RldGFpbHNbMl0pIHx8IGZhbHNlLFxuICAgICAgICBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24uaGFzaCwgJycpLFxuICAgICAgICBwYWdlU291cmNlLFxuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2VSZWdFeHAsXG4gICAgICAgIGlubGluZVNjcmlwdFNvdXJjZSxcbiAgICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTsgLy8gTGl2ZSBOb2RlTGlzdCBjb2xsZWN0aW9uXG4gIFxuICAgICAgaWYgKHNjcmlwdExvY2F0aW9uID09PSBjdXJyZW50TG9jYXRpb24pIHtcbiAgICAgICAgcGFnZVNvdXJjZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgIGlubGluZVNjcmlwdFNvdXJjZVJlZ0V4cCA9IG5ldyBSZWdFeHAoJyg/OlteXFxcXG5dKz9cXFxcbil7MCwnICsgKGxpbmUgLSAyKSArICd9W148XSo8c2NyaXB0PihbXFxcXGRcXFxcRF0qPyk8XFxcXC9zY3JpcHQ+W1xcXFxkXFxcXERdKicsICdpJyk7XG4gICAgICAgIGlubGluZVNjcmlwdFNvdXJjZSA9IHBhZ2VTb3VyY2UucmVwbGFjZShpbmxpbmVTY3JpcHRTb3VyY2VSZWdFeHAsICckMScpLnRyaW0oKTtcbiAgICAgIH1cbiAgXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gSWYgcmVhZHkgc3RhdGUgaXMgaW50ZXJhY3RpdmUsIHJldHVybiB0aGUgc2NyaXB0IHRhZ1xuICAgICAgICBpZiAoc2NyaXB0c1tpXS5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHNjcmlwdHNbaV07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIElmIHNyYyBtYXRjaGVzLCByZXR1cm4gdGhlIHNjcmlwdCB0YWdcbiAgICAgICAgaWYgKHNjcmlwdHNbaV0uc3JjID09PSBzY3JpcHRMb2NhdGlvbikge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJZiBpbmxpbmUgc291cmNlIG1hdGNoZXMsIHJldHVybiB0aGUgc2NyaXB0IHRhZ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2NyaXB0TG9jYXRpb24gPT09IGN1cnJlbnRMb2NhdGlvbiAmJlxuICAgICAgICAgIHNjcmlwdHNbaV0uaW5uZXJIVE1MICYmXG4gICAgICAgICAgc2NyaXB0c1tpXS5pbm5lckhUTUwudHJpbSgpID09PSBpbmxpbmVTY3JpcHRTb3VyY2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHNjcmlwdHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBJZiBubyBtYXRjaCwgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZ2V0Q3VycmVudFNjcmlwdFxufSkpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImFiNzNcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc192dWVfc3R5bGVfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMF9ub2RlX21vZHVsZXNfdnVlX2NsaV9zZXJ2aWNlX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl82X29uZU9mXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzJfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzNfbm9kZV9tb2R1bGVzX2NhY2hlX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfMF8wX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfc3Rhcl92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF9lZjRiYzU3Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3MGEwXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfdnVlX3N0eWxlX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzBfbm9kZV9tb2R1bGVzX3Z1ZV9jbGlfc2VydmljZV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX25vZGVfbW9kdWxlc19jYWNoZV9sb2FkZXJfZGlzdF9janNfanNfcmVmXzBfMF9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX3N0YXJfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfZWY0YmM1NzZfc2NvcGVkX3RydWVfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc192dWVfc3R5bGVfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMF9ub2RlX21vZHVsZXNfdnVlX2NsaV9zZXJ2aWNlX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl82X29uZU9mXzFfMV9ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzJfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzNfbm9kZV9tb2R1bGVzX2NhY2hlX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfMF8wX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfc3Rhcl92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF9lZjRiYzU3Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiB1bnVzZWQgaGFybW9ueSByZWV4cG9ydCAqICovXG4gLyogdW51c2VkIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIF91bnVzZWRfd2VicGFja19kZWZhdWx0X2V4cG9ydCA9IChfbm9kZV9tb2R1bGVzX3Z1ZV9zdHlsZV9sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8wX25vZGVfbW9kdWxlc192dWVfY2xpX3NlcnZpY2Vfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19ub2RlX21vZHVsZXNfY2FjaGVfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl8wXzBfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19zdGFyX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkX2VmNGJjNTc2X3Njb3BlZF90cnVlX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYSk7IFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJkNGFhXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmNsYXNzIEFscGhhQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgcGFyc2VBbHBoYUNvbG9yKCkge1xuICAgICAgICBpZiAoL15yZ2JhXFwoKFxcZHsxLDN9JT9cXHMqLFxccyopezN9KFxcZCooPzpcXC5cXGQrKT8pXFwpJC8udGVzdCh0aGlzLmNvbG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSZ2JhKClcbiAgICAgICAgfSBlbHNlIGlmICgvXmhzbGFcXChcXGQrXFxzKixcXHMqKFtcXGQuXSslXFxzKixcXHMqKXsyfShcXGQqKD86XFwuXFxkKyk/KVxcKSQvLnRlc3QodGhpcy5jb2xvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSHNsYSgpXG4gICAgICAgIH0gZWxzZSBpZiAoL14jKFswLTlBLUZhLWZdezR9fFswLTlBLUZhLWZdezh9KSQvLnRlc3QodGhpcy5jb2xvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQWxwaGFIZXgoKVxuICAgICAgICB9IGVsc2UgaWYgKC9edHJhbnNwYXJlbnQkLy50ZXN0KHRoaXMuY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRyYW5zcGFyZW50KClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VSZ2JhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IucmVwbGFjZSgvLCg/IS4qLCkuKig/PVxcKSl8YS9nLCAnJyksXG4gICAgICAgICAgICBvcGFjaXR5OiB0aGlzLmNvbG9yLm1hdGNoKC9cXC5cXGQrfFswMV0oPz1cXCkpLylbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlSHNsYSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLnJlcGxhY2UoLywoPyEuKiwpLiooPz1cXCkpfGEvZywgJycpLFxuICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5jb2xvci5tYXRjaCgvXFwuXFxkK3xbMDFdKD89XFwpKS8pWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZUFscGhhSGV4KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IubGVuZ3RoID09PSA1ID8gdGhpcy5jb2xvci5zdWJzdHJpbmcoMCwgNCkgOiB0aGlzLmNvbG9yLnN1YnN0cmluZygwLCA3KSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMuY29sb3IubGVuZ3RoID09PSA1ID8gKHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyaW5nKDQsIDUpICsgdGhpcy5jb2xvci5zdWJzdHJpbmcoNCwgNSksIDE2KSAvIDI1NSkudG9GaXhlZCgyKSA6IChwYXJzZUludCh0aGlzLmNvbG9yLnN1YnN0cmluZyg3LCA5KSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJhbnNwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFscGhhQ29sb3JcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZmIxNVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL2xpYi9jb21tYW5kcy9idWlsZC9zZXRQdWJsaWNQYXRoLmpzXG4vLyBUaGlzIGZpbGUgaXMgaW1wb3J0ZWQgaW50byBsaWIvd2MgY2xpZW50IGJ1bmRsZXMuXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3VycmVudFNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gIGlmICh0cnVlKSB7XG4gICAgdmFyIGdldEN1cnJlbnRTY3JpcHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODg3NVwiKVxuICAgIGN1cnJlbnRTY3JpcHQgPSBnZXRDdXJyZW50U2NyaXB0KClcblxuICAgIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBiZWNhdXNlIHByZXZpb3VzbHkgd2UgZGlyZWN0bHkgaW5jbHVkZWQgdGhlIHBvbHlmaWxsXG4gICAgaWYgKCEoJ2N1cnJlbnRTY3JpcHQnIGluIGRvY3VtZW50KSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAnY3VycmVudFNjcmlwdCcsIHsgZ2V0OiBnZXRDdXJyZW50U2NyaXB0IH0pXG4gICAgfVxuICB9XG5cbiAgdmFyIHNyYyA9IGN1cnJlbnRTY3JpcHQgJiYgY3VycmVudFNjcmlwdC5zcmMubWF0Y2goLyguK1xcLylbXi9dK1xcLmpzKFxcPy4qKT8kLylcbiAgaWYgKHNyYykge1xuICAgIF9fd2VicGFja19yZXF1aXJlX18ucCA9IHNyY1sxXSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cbn1cblxuLy8gSW5kaWNhdGUgdG8gd2VicGFjayB0aGF0IHRoaXMgZmlsZSBjYW4gYmUgY29uY2F0ZW5hdGVkXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzZXRQdWJsaWNQYXRoID0gKG51bGwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclwiLFwiY2FjaGVJZGVudGlmaWVyXCI6XCIxYzVjZDM4Ny12dWUtbG9hZGVyLXRlbXBsYXRlXCJ9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvc3Rhci1yYXRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZkZTczYTBjJnNjb3BlZD10cnVlJlxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2NsYXNzOlsndnVlLXN0YXItcmF0aW5nJywgeyd2dWUtc3Rhci1yYXRpbmctcnRsJzpfdm0ucnRsfSwgeyd2dWUtc3Rhci1yYXRpbmctaW5saW5lJzogX3ZtLmlubGluZX1dfSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic3Itb25seVwifSxbX3ZtLl90KFwic2NyZWVuLXJlYWRlclwiLFtfYygnc3BhbicsW192bS5fdihcIlJhdGVkIFwiK192bS5fcyhfdm0uc2VsZWN0ZWRSYXRpbmcpK1wiIHN0YXJzIG91dCBvZiBcIitfdm0uX3MoX3ZtLm1heFJhdGluZykpXSldLHtcInJhdGluZ1wiOl92bS5zZWxlY3RlZFJhdGluZyxcInN0YXJzXCI6X3ZtLm1heFJhdGluZ30pXSwyKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ2dWUtc3Rhci1yYXRpbmdcIixvbjp7XCJtb3VzZWxlYXZlXCI6X3ZtLnJlc2V0UmF0aW5nfX0sW192bS5fbCgoX3ZtLm1heFJhdGluZyksZnVuY3Rpb24obil7cmV0dXJuIF9jKCdzcGFuJyx7a2V5Om4sY2xhc3M6W3sndnVlLXN0YXItcmF0aW5nLXBvaW50ZXInOiAhX3ZtLnJlYWRPbmx5IH0sICd2dWUtc3Rhci1yYXRpbmctc3RhciddLHN0eWxlOih7J21hcmdpbi1yaWdodCc6IF92bS5tYXJnaW4gKyAncHgnfSl9LFtfYygnc3Rhcicse2F0dHJzOntcImZpbGxcIjpfdm0uZmlsbExldmVsW24tMV0sXCJzaXplXCI6X3ZtLnN0YXJTaXplLFwicG9pbnRzXCI6X3ZtLnN0YXJQb2ludHMsXCJzdGFyLWlkXCI6bixcInN0ZXBcIjpfdm0uc3RlcCxcImFjdGl2ZS1jb2xvclwiOl92bS5jdXJyZW50QWN0aXZlQ29sb3IsXCJpbmFjdGl2ZS1jb2xvclwiOl92bS5pbmFjdGl2ZUNvbG9yLFwiYm9yZGVyLWNvbG9yXCI6X3ZtLmJvcmRlckNvbG9yLFwiYWN0aXZlLWJvcmRlci1jb2xvclwiOl92bS5jdXJyZW50QWN0aXZlQm9yZGVyQ29sb3IsXCJib3JkZXItd2lkdGhcIjpfdm0uYm9yZGVyV2lkdGgsXCJyb3VuZGVkLWNvcm5lcnNcIjpfdm0ucm91bmRlZENvcm5lcnMsXCJydGxcIjpfdm0ucnRsLFwiZ2xvd1wiOl92bS5nbG93LFwiZ2xvdy1jb2xvclwiOl92bS5nbG93Q29sb3IsXCJhbmltYXRlXCI6X3ZtLmFuaW1hdGV9LG9uOntcInN0YXItc2VsZWN0ZWRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uc2V0UmF0aW5nKCRldmVudCwgdHJ1ZSl9LFwic3Rhci1tb3VzZS1tb3ZlXCI6X3ZtLnNldFJhdGluZ319KV0sMSl9KSwoX3ZtLnNob3dSYXRpbmcpP19jKCdzcGFuJyx7Y2xhc3M6Wyd2dWUtc3Rhci1yYXRpbmctcmF0aW5nLXRleHQnLCBfdm0udGV4dENsYXNzXX0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLmZvcm1hdHRlZFJhdGluZykpXSk6X3ZtLl9lKCldLDIpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zdGFyLXJhdGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRlNzNhMGMmc2NvcGVkPXRydWUmXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXCIsXCJjYWNoZUlkZW50aWZpZXJcIjpcIjFjNWNkMzg3LXZ1ZS1sb2FkZXItdGVtcGxhdGVcIn0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9zdGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZjRiYzU3NiZzY29wZWQ9dHJ1ZSZcbnZhciBzdGFydnVlX3R5cGVfdGVtcGxhdGVfaWRfZWY0YmM1NzZfc2NvcGVkX3RydWVfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc3ZnJyx7Y2xhc3M6Wyd2dWUtc3Rhci1yYXRpbmctc3RhcicsIHsndnVlLXN0YXItcmF0aW5nLXN0YXItcm90YXRlJyA6IF92bS5zaG91bGRBbmltYXRlfV0sYXR0cnM6e1wiaGVpZ2h0XCI6X3ZtLnN0YXJTaXplLFwid2lkdGhcIjpfdm0uc3RhclNpemUsXCJ2aWV3Qm94XCI6X3ZtLnZpZXdCb3h9LG9uOntcIm1vdXNlbW92ZVwiOl92bS5tb3VzZU1vdmluZyxcImNsaWNrXCI6X3ZtLnNlbGVjdGVkLFwidG91Y2hzdGFydFwiOl92bS50b3VjaFN0YXJ0LFwidG91Y2hlbmRcIjpfdm0udG91Y2hFbmR9fSxbX2MoJ2xpbmVhckdyYWRpZW50Jyx7YXR0cnM6e1wiaWRcIjpfdm0uZ3JhZCxcIngxXCI6XCIwXCIsXCJ4MlwiOlwiMTAwJVwiLFwieTFcIjpcIjBcIixcInkyXCI6XCIwXCJ9fSxbX2MoJ3N0b3AnLHthdHRyczp7XCJvZmZzZXRcIjpfdm0uc3RhckZpbGwsXCJzdG9wLWNvbG9yXCI6KF92bS5ydGwpID8gX3ZtLmdldENvbG9yKF92bS5pbmFjdGl2ZUNvbG9yKSA6IF92bS5nZXRDb2xvcihfdm0uYWN0aXZlQ29sb3IpLFwic3RvcC1vcGFjaXR5XCI6KF92bS5ydGwpID8gX3ZtLmdldE9wYWNpdHkoX3ZtLmluYWN0aXZlQ29sb3IpIDogX3ZtLmdldE9wYWNpdHkoX3ZtLmFjdGl2ZUNvbG9yKX19KSxfYygnc3RvcCcse2F0dHJzOntcIm9mZnNldFwiOl92bS5zdGFyRmlsbCxcInN0b3AtY29sb3JcIjooX3ZtLnJ0bCkgPyBfdm0uZ2V0Q29sb3IoX3ZtLmFjdGl2ZUNvbG9yKSA6IF92bS5nZXRDb2xvcihfdm0uaW5hY3RpdmVDb2xvciksXCJzdG9wLW9wYWNpdHlcIjooX3ZtLnJ0bCkgPyBfdm0uZ2V0T3BhY2l0eShfdm0uYWN0aXZlQ29sb3IpIDogX3ZtLmdldE9wYWNpdHkoX3ZtLmluYWN0aXZlQ29sb3IpfX0pXSwxKSxfYygnZmlsdGVyJyx7YXR0cnM6e1wiaWRcIjpfdm0uZ2xvd0lkLFwiaGVpZ2h0XCI6XCIxMzAlXCIsXCJ3aWR0aFwiOlwiMTMwJVwiLFwiZmlsdGVyVW5pdHNcIjpcInVzZXJTcGFjZU9uVXNlXCJ9fSxbX2MoJ2ZlR2F1c3NpYW5CbHVyJyx7YXR0cnM6e1wic3RkRGV2aWF0aW9uXCI6X3ZtLmdsb3csXCJyZXN1bHRcIjpcImNvbG9yZWRCbHVyXCJ9fSksX2MoJ2ZlTWVyZ2UnLFtfYygnZmVNZXJnZU5vZGUnLHthdHRyczp7XCJpblwiOlwiY29sb3JlZEJsdXJcIn19KSxfYygnZmVNZXJnZU5vZGUnLHthdHRyczp7XCJpblwiOlwiU291cmNlR3JhcGhpY1wifX0pXSwxKV0sMSksKF92bS5nbG93Q29sb3IgJiYgX3ZtLmdsb3cgPiAwKT9fYygncG9seWdvbicse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLmZpbGwgPiAxKSxleHByZXNzaW9uOlwiZmlsbCA+IDFcIn1dLGF0dHJzOntcInBvaW50c1wiOl92bS5zdGFyUG9pbnRzVG9TdHJpbmcsXCJmaWxsXCI6X3ZtLmdyYWRJZCxcInN0cm9rZVwiOl92bS5nbG93Q29sb3IsXCJmaWx0ZXJcIjondXJsKCMnK192bS5nbG93SWQrJyknLFwic3Ryb2tlLXdpZHRoXCI6X3ZtLmJvcmRlcn19KTpfdm0uX2UoKSxfYygncG9seWdvbicse2F0dHJzOntcInBvaW50c1wiOl92bS5zdGFyUG9pbnRzVG9TdHJpbmcsXCJmaWxsXCI6X3ZtLmdyYWRJZCxcInN0cm9rZVwiOl92bS5nZXRCb3JkZXJDb2xvcixcInN0cm9rZS13aWR0aFwiOl92bS5ib3JkZXIsXCJzdHJva2UtbGluZWpvaW5cIjpfdm0uc3Ryb2tlTGluZWpvaW59fSksX2MoJ3BvbHlnb24nLHthdHRyczp7XCJwb2ludHNcIjpfdm0uc3RhclBvaW50c1RvU3RyaW5nLFwiZmlsbFwiOl92bS5ncmFkSWR9fSldLDEpfVxudmFyIHN0YXJ2dWVfdHlwZV90ZW1wbGF0ZV9pZF9lZjRiYzU3Nl9zY29wZWRfdHJ1ZV9zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3N0YXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVmNGJjNTc2JnNjb3BlZD10cnVlJlxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vc3JjL2NsYXNzZXMvQWxwaGFDb2xvci5qc1xudmFyIEFscGhhQ29sb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDRhYVwiKTtcbnZhciBBbHBoYUNvbG9yX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKEFscGhhQ29sb3IpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvc3Rhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHN0YXJ2dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18gPSAoe1xuICAgIG5hbWU6ICdTdGFyJyxcbiAgICBwcm9wczoge1xuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA1MFxuICAgICAgICB9LFxuICAgICAgICBzdGFySWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBib3JkZXJDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyMwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnIzAwMCdcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRlZENvcm5lcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBydGw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBnbG93OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGdsb3dDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJQb2ludHM6IFsxOS44LCAyLjIsIDYuNiwgNDMuNTYsIDM5LjYsIDE3LjE2LCAwLCAxNy4xNiwgMzMsIDQzLjU2XSxcbiAgICAgICAgICAgIGdyYWQ6ICcnLFxuICAgICAgICAgICAgZ2xvd0lkOiAnJyxcbiAgICAgICAgICAgIGlzU3RhckFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzdGFyUG9pbnRzVG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFyUG9pbnRzLmpvaW4oJywnKVxuICAgICAgICB9LFxuICAgICAgICBncmFkSWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VybCgjJyArIHRoaXMuZ3JhZCArICcpJ1xuICAgICAgICB9LFxuICAgICAgICBzdGFyU2l6ZSgpIHtcbiAgICAgICAgICAgIC8vIEFkanVzdCBzdGFyIHNpemUgd2hlbiByb3VuZGVkIGNvcm5lcnMgYXJlIHNldCB3aXRoIG5vIGJvcmRlciwgdG8gYWNjb3VudCBmb3IgdGhlICdoaWRkZW4nIGJvcmRlclxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9ICh0aGlzLnJvdW5kZWRDb3JuZXJzICYmIHRoaXMuYm9yZGVyV2lkdGggPD0gMCkgPyBwYXJzZUludCh0aGlzLnNpemUpIC0gcGFyc2VJbnQodGhpcy5ib3JkZXIpIDogdGhpcy5zaXplXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc2l6ZSkgKyBwYXJzZUludCh0aGlzLmJvcmRlcilcbiAgICAgICAgfSxcbiAgICAgICAgc3RhckZpbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucnRsKSA/IDEwMCAtIHRoaXMuZmlsbCArICclJyA6IHRoaXMuZmlsbCArICclJ1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucm91bmRlZENvcm5lcnMgJiYgdGhpcy5ib3JkZXJXaWR0aCA8PSAwKSA/IDYgOiB0aGlzLmJvcmRlcldpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvcmRlckNvbG9yKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucm91bmRlZENvcm5lcnMgJiYgdGhpcy5ib3JkZXJXaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgaGlkZGVuIGJvcmRlclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5maWxsIDw9IDApID8gdGhpcy5pbmFjdGl2ZUNvbG9yIDogdGhpcy5hY3RpdmVDb2xvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZmlsbCA8PSAwKSA/IHRoaXMuYm9yZGVyQ29sb3IgOiB0aGlzLmFjdGl2ZUJvcmRlckNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIG1heFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFyUG9pbnRzLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGEsIGIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB2aWV3Qm94KCkge1xuICAgICAgICAgICAgcmV0dXJuICcwIDAgJyArIHRoaXMubWF4U2l6ZSArICcgJyArIHRoaXMubWF4U2l6ZVxuICAgICAgICB9LFxuICAgICAgICBzaG91bGRBbmltYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0ZSAmJiB0aGlzLmlzU3RhckFjdGl2ZVxuICAgICAgICB9LFxuICAgICAgICBzdHJva2VMaW5lam9pbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdW5kZWRDb3JuZXJzID8gJ3JvdW5kJyA6ICdtaXRlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zdGFyUG9pbnRzID0gKHRoaXMucG9pbnRzLmxlbmd0aCkgPyB0aGlzLnBvaW50cyA6IHRoaXMuc3RhclBvaW50c1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvaW50cygpXG4gICAgICAgIHRoaXMuZ3JhZCA9IHRoaXMuZ2V0UmFuZG9tSWQoKVxuICAgICAgICB0aGlzLmdsb3dJZCA9IHRoaXMuZ2V0UmFuZG9tSWQoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtb3VzZU1vdmluZygkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudG91Y2hBY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3Rhci1tb3VzZS1tb3ZlJywge1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5nZXRQb3NpdGlvbigkZXZlbnQpLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zdGFySWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFyQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UG9zaXRpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgcG9zaXRpb24gaW4gcGVyY2VudGFnZS5cbiAgICAgICAgICAgIHZhciBzdGFyV2lkdGggPSAoOTIgLyAxMDApICogdGhpcy5zaXplXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5ydGwpID8gTWF0aC5taW4oJGV2ZW50Lm9mZnNldFgsIDQ1KSA6IE1hdGgubWF4KCRldmVudC5vZmZzZXRYLCAxKVxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTWF0aC5yb3VuZCgoMTAwIC8gc3RhcldpZHRoKSAqIG9mZnNldClcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHBvc2l0aW9uLCAxMDApXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkKCRldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3Rhci1zZWxlY3RlZCcsIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zdGFySWQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuZ2V0UG9zaXRpb24oJGV2ZW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tSWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGN1bGF0ZVBvaW50cygpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhclBvaW50cyA9IHRoaXMuc3RhclBvaW50cy5tYXAoKHBvaW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaSAlIDIgPT09IDAgPyB0aGlzLmJvcmRlciAqIDEuNSA6IDBcbiAgICAgICAgICAgICAgICByZXR1cm4gKCh0aGlzLnNpemUgLyB0aGlzLm1heFNpemUpICogcG9pbnQpICsgb2Zmc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBnZXRDb2xvcihjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBbHBoYUNvbG9yX2RlZmF1bHQuYShjb2xvcikucGFyc2VBbHBoYUNvbG9yKCkuY29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3BhY2l0eShjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBbHBoYUNvbG9yX2RlZmF1bHQuYShjb2xvcikucGFyc2VBbHBoYUNvbG9yKCkub3BhY2l0eVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3N0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlxuIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNyY19zdGFydnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfID0gKHN0YXJ2dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18pOyBcbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9zcmMvc3Rhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZjRiYzU3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcbnZhciBzdGFydnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF9lZjRiYzU3Nl9zY29wZWRfdHJ1ZV9sYW5nX2Nzc18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWI3M1wiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXG4vKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zdGFyLnZ1ZVxuXG5cblxuXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzcmNfc3RhcnZ1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyxcbiAgc3RhcnZ1ZV90eXBlX3RlbXBsYXRlX2lkX2VmNGJjNTc2X3Njb3BlZF90cnVlX3JlbmRlcixcbiAgc3RhcnZ1ZV90eXBlX3RlbXBsYXRlX2lkX2VmNGJjNTc2X3Njb3BlZF90cnVlX3N0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWY0YmM1NzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3RhciA9IChjb21wb25lbnQuZXhwb3J0cyk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvc3Rhci1yYXRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHN0YXJfcmF0aW5ndnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfID0gKHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHN0YXI6IHN0YXJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICdyYXRpbmcnLFxuICAgICAgICBldmVudDogJ3JhdGluZy1zZWxlY3RlZCdcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGluY3JlbWVudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICB9LFxuICAgICAgICByYXRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRTdGFydFJhdGluZzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcjZmZkMDU1J1xuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnI2Q4ZDhkOCdcbiAgICAgICAgfSxcbiAgICAgICAgbWF4UmF0aW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA1XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJQb2ludHM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhclNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dSYXRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbmxpbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBib3JkZXJDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyM5OTknXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kZWRDb3JuZXJzOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuICAgICAgICBydGw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBmaXhlZFBvaW50czoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBnbG93OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGdsb3dDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJyNmZmYnXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZU9uQ2xpY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBmaWxsTGV2ZWw6IFtdLFxuICAgICAgICAgICAgY3VycmVudFJhdGluZzogMCxcbiAgICAgICAgICAgIHNlbGVjdGVkUmF0aW5nOiAwLFxuICAgICAgICAgICAgcmF0aW5nU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZvcm1hdHRlZFJhdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5maXhlZFBvaW50cyA9PT0gbnVsbCkgPyB0aGlzLmN1cnJlbnRSYXRpbmcgOiB0aGlzLmN1cnJlbnRSYXRpbmcudG9GaXhlZCh0aGlzLmZpeGVkUG9pbnRzKVxuICAgICAgICB9LFxuICAgICAgICBzaG91bGRSb3VuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdGluZ1NlbGVjdGVkIHx8IHRoaXMucm91bmRTdGFydFJhdGluZ1xuICAgICAgICB9LFxuICAgICAgICBtYXJnaW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWRkaW5nICsgdGhpcy5ib3JkZXJXaWR0aFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVDb2xvcnMoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmFjdGl2ZUNvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZENvbG9ycyh0aGlzLmFjdGl2ZUNvbG9yLCB0aGlzLm1heFJhdGluZywgdGhpcy5hY3RpdmVDb2xvci5zbGljZSgtMSlbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4UmF0aW5nKS5maWxsKHRoaXMuYWN0aXZlQ29sb3IpXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRBY3RpdmVDb2xvcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmVPbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRSYXRpbmcgPiAwKSA/IHRoaXMuYWN0aXZlQ29sb3JzW01hdGguY2VpbCh0aGlzLmN1cnJlbnRSYXRpbmcpIC0gMV0gOiB0aGlzLmluYWN0aXZlQ29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZFJhdGluZyA+IDApID8gdGhpcy5hY3RpdmVDb2xvcnNbTWF0aC5jZWlsKHRoaXMuc2VsZWN0ZWRSYXRpbmcpIC0gMV0gOiB0aGlzLmluYWN0aXZlQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3JzKCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5hY3RpdmVCb3JkZXJDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWRDb2xvcnModGhpcy5hY3RpdmVCb3JkZXJDb2xvciwgdGhpcy5tYXhSYXRpbmcsIHRoaXMuYWN0aXZlQm9yZGVyQ29sb3Iuc2xpY2UoLTEpWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJvcmRlckNvbG9yID0gKHRoaXMuYWN0aXZlQm9yZGVyQ29sb3IpID8gdGhpcy5hY3RpdmVCb3JkZXJDb2xvciA6IHRoaXMuYm9yZGVyQ29sb3JcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkodGhpcy5tYXhSYXRpbmcpLmZpbGwoYm9yZGVyQ29sb3IpXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRBY3RpdmVCb3JkZXJDb2xvcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmVPbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRSYXRpbmcgPiAwKSA/IHRoaXMuYWN0aXZlQm9yZGVyQ29sb3JzW01hdGguY2VpbCh0aGlzLmN1cnJlbnRSYXRpbmcpIC0gMV0gOiB0aGlzLmJvcmRlckNvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWRSYXRpbmcgPiAwKSA/IHRoaXMuYWN0aXZlQm9yZGVyQ29sb3JzW01hdGguY2VpbCh0aGlzLnNlbGVjdGVkUmF0aW5nKSAtIDFdIDogdGhpcy5ib3JkZXJDb2xvclxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICByYXRpbmcodmFsKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSYXRpbmcgPSB2YWxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYXRpbmcgPSB2YWxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhcnModGhpcy5zaG91bGRSb3VuZClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5pbmNyZW1lbnQgKiAxMDBcbiAgICAgICAgdGhpcy5jdXJyZW50UmF0aW5nID0gdGhpcy5yYXRpbmdcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhdGluZyA9IHRoaXMuY3VycmVudFJhdGluZ1xuICAgICAgICB0aGlzLmNyZWF0ZVN0YXJzKHRoaXMucm91bmRTdGFydFJhdGluZylcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0UmF0aW5nKCRldmVudCwgcGVyc2lzdCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAodGhpcy5ydGwpID8gKDEwMCAtICRldmVudC5wb3NpdGlvbikgLyAxMDAgOiAkZXZlbnQucG9zaXRpb24gLyAxMDBcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYXRpbmcgPSAoKCRldmVudC5pZCArIHBvc2l0aW9uKSAtIDEpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYXRpbmcgPSAodGhpcy5jdXJyZW50UmF0aW5nID4gdGhpcy5tYXhSYXRpbmcpID8gdGhpcy5tYXhSYXRpbmcgOiB0aGlzLmN1cnJlbnRSYXRpbmdcbiAgICAgICAgICAgICAgICBpZiAocGVyc2lzdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJzKHRydWUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyYWJsZSAmJiB0aGlzLmN1cnJlbnRSYXRpbmcgPT09IHRoaXMuc2VsZWN0ZWRSYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYXRpbmcgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUmF0aW5nID0gdGhpcy5jdXJyZW50UmF0aW5nXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdyYXRpbmctc2VsZWN0ZWQnLCB0aGlzLnNlbGVjdGVkUmF0aW5nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhdGluZ1NlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhcnModHJ1ZSwgIXRoaXMuYWN0aXZlT25DbGljaylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY3VycmVudC1yYXRpbmcnLCB0aGlzLmN1cnJlbnRSYXRpbmcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNldFJhdGluZygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWFkT25seSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhdGluZyA9IHRoaXMuc2VsZWN0ZWRSYXRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJzKHRoaXMuc2hvdWxkUm91bmQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVN0YXJzKHJvdW5kID0gdHJ1ZSwgYXBwbHlGaWxsID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4UmF0aW5nOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLmN1cnJlbnRSYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSAodGhpcy5jdXJyZW50UmF0aW5nIC0gaSA+IDEpID8gMTAwIDogKHRoaXMuY3VycmVudFJhdGluZyAtIGkpICogMTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcHBseUZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsTGV2ZWxbaV0gPSBNYXRoLnJvdW5kKGxldmVsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcm91bmQoKSB7XG4gICAgICAgICAgICB2YXIgaW52ID0gMS4wIC8gdGhpcy5pbmNyZW1lbnRcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJhdGluZyA9IE1hdGgubWluKHRoaXMubWF4UmF0aW5nLCBNYXRoLmNlaWwodGhpcy5jdXJyZW50UmF0aW5nICogaW52KSAvIGludilcbiAgICAgICAgfSxcbiAgICAgICAgcGFkQ29sb3JzKGFycmF5LCBtaW5MZW5ndGgsIGZpbGxWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEFycmF5KG1pbkxlbmd0aCkuZmlsbChmaWxsVmFsdWUpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zdGFyLXJhdGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXG4gLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjX3N0YXJfcmF0aW5ndnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfID0gKHN0YXJfcmF0aW5ndnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfKTsgXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vc3JjL3N0YXItcmF0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZkZTczYTBjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlxudmFyIHN0YXJfcmF0aW5ndnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF9mZGU3M2EwY19zY29wZWRfdHJ1ZV9sYW5nX2Nzc18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMmIyYlwiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc3Rhci1yYXRpbmcudnVlXG5cblxuXG5cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5cbnZhciBzdGFyX3JhdGluZ19jb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIHNyY19zdGFyX3JhdGluZ3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZkZTczYTBjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHN0YXJfcmF0aW5nID0gKHN0YXJfcmF0aW5nX2NvbXBvbmVudC5leHBvcnRzKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2luZGV4LmpzXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjXzAgPSAoc3Rhcl9yYXRpbmcpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL2xpYi9jb21tYW5kcy9idWlsZC9lbnRyeS1saWIuanNcblxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlbnRyeV9saWIgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChzcmNfMCk7XG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZ1ZVN0YXJSYXRpbmcuY29tbW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==