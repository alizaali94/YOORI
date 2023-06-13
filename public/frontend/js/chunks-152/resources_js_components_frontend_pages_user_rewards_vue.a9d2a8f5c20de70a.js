"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_rewards_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/user_sidebar */ "./resources/js/components/frontend/partials/user_sidebar.vue");
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "wallet",
  components: {
    user_sidebar: _partials_user_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      current: 'reward_history',
      page: 1,
      loading: false,
      next_page_url: false,
      is_shimmer: false
    };
  },
  created: function created() {
    if (!this.addons.includes('reward')) {
      this.$router.push({
        name: 'home'
      });
    }
  },
  mounted: function mounted() {
    if (this.lengthCounter(this.rewards) == 0) {
      this.loadRewards();
    }

    if (this.lengthCounter(this.rewards) > 0) {
      this.is_shimmer = true;
    }
  },
  computed: {
    rewards: function rewards() {
      return this.$store.getters.getRewards;
    },
    totalReward: function totalReward() {
      return this.$store.getters.getTotalReward;
    },
    shLength: function shLength() {
      return this.$store.getters.getCommonData;
    },
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    }
  },
  methods: {
    loadRewards: function loadRewards() {
      var _this = this;

      var url = this.getUrl('user/reward-history?page=' + this.page);

      if (this.page > 1) {
        this.loading = true;
      }

      this.$Progress.start();
      axios.get(url).then(function (response) {
        _this.loading = false;
        _this.is_shimmer = true;

        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + ' !!');
          ;
        } else {
          if (response.data.reward_details) {
            _this.$store.commit("getRewards", response.data.reward_details.data);

            _this.next_page_url = response.data.reward_details.next_page_url;
          }

          _this.$store.commit("setTotalReward", response.data.reward);

          _this.$store.commit("commonData", response.data.reward);

          _this.page++;

          _this.$Progress.finish();
        }
      })["catch"](function (error) {
        _this.$Progress.fail();
      });
    }
  }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/frontend/pages/user/rewards.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/rewards.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rewards.vue?vue&type=template&id=6bd05d26& */ "./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26&");
/* harmony import */ var _rewards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rewards.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _rewards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__.render,
  _rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/rewards.vue"
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

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./rewards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rewards_vue_vue_type_template_id_6bd05d26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./rewards.vue?vue&type=template&id=6bd05d26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26&");


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

/***/ "./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_sidebar_vue_vue_type_template_id_cdcc10da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user_sidebar.vue?vue&type=template&id=cdcc10da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/rewards.vue?vue&type=template&id=6bd05d26& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                  _vm.lengthCounter(
                    _vm.totalReward != null && _vm.totalReward.rewards
                  ) > 0
                    ? _c("h1", [_vm._v(_vm._s(_vm.lang.my_rewards))])
                    : _vm.is_shimmer
                    ? _c("h1", [_vm._v(_vm._s(_vm.lang.no_my_rewards))])
                    : _c("h1", [_vm._v(_vm._s(_vm.lang.loading))]),
                ]),
              ]),
              _vm._v(" "),
              _vm.is_shimmer
                ? _c("div", { staticClass: "row" }, [
                    _vm.totalReward != null && _vm.totalReward.rewards > 0
                      ? _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "#",
                                "data-bs-target": "#convert_reward",
                                "data-bs-toggle": "modal",
                              },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card text-center profile-card d-flex justify-center profile-card-green",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "profile-card-title mb-3" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.lang.convert_reward_to_wallet
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0),
                                ]
                              ),
                            ]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card text-center profile-card d-flex justify-center profile-card-black",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "profile-card-title mb-3" },
                            [_vm._v(_vm._s(_vm.lang.total_rewards))]
                          ),
                          _vm._v(" "),
                          _c("h3", { staticClass: "text-white" }, [
                            _vm._v(
                              _vm._s(
                                _vm.totalReward != null
                                  ? _vm.totalReward.rewards
                                  : 0
                              )
                            ),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _vm.totalReward && _vm.totalReward.last_conversion
                      ? _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card text-center profile-card d-flex justify-center profile-card-black",
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "profile-card-title mb-3" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.lang.last_converted_to_wallet)
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("h3", { staticClass: "text-white" }, [
                                _vm._v(_vm._s(_vm.totalReward.last_conversion)),
                              ]),
                            ]
                          ),
                        ])
                      : _vm._e(),
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
                          [_c("h1", [_vm._v(_vm._s(_vm.lang.reward_history))])]
                        ),
                        _vm._v(" "),
                        _c("table", { staticClass: "table dashboard-table" }, [
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
                                _vm._v(_vm._s(_vm.lang.product)),
                              ]),
                              _vm._v(" "),
                              _c("th", { attrs: { scope: "col" } }, [
                                _vm._v(_vm._s(_vm.lang.quantity)),
                              ]),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticClass: "text-end",
                                  attrs: { scope: "col" },
                                },
                                [_vm._v(_vm._s(_vm.lang.total_reward))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.rewards, function (reward, index) {
                              return _c("tr", { key: index }, [
                                _c("td", { staticClass: "text-end" }, [
                                  _vm._v(_vm._s(++index)),
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(reward.product.product_name)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(reward.product_qty))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-capitalize text-end pt-3 pb-3",
                                  },
                                  [_vm._v(_vm._s(reward.reward))]
                                ),
                              ])
                            }),
                            0
                          ),
                        ]),
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
                                      return _vm.loadRewards()
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
                              _vm._v("Loading........"),
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
                    _vm._l(4, function (num, i) {
                      return _c(
                        "div",
                        { staticClass: "col-md-12 mb-3" },
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
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("i", { staticClass: "mdi mdi-transfer" })])
  },
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/partials/user_sidebar.vue?vue&type=template&id=cdcc10da& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfdXNlcl9yZXdhcmRzX3Z1ZS5hOWQyYThmNWMyMGRlNzBhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUZBO0FBQ0E7QUFHQTtBQUNBLGdCQURBO0FBRUE7QUFDQSxnRkFEQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsYUFGQTtBQUdBLG9CQUhBO0FBSUEsMEJBSkE7QUFLQTtBQUxBO0FBUUEsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQSx5Q0FDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsR0FwQkE7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBNUJBO0FBNkJBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEseUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxZQVBBLHNCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsV0FWQSxxQkFVQTtBQUNBO0FBQ0E7QUFaQSxHQTdCQTtBQTJDQTtBQUNBLGVBREEseUJBQ0E7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQ0EsU0FIQSxNQUdBO0FBQ0EsNENBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBO0FBQ0E7QUFDQSxPQW5CQSxXQW1CQTtBQUNBO0FBQ0EsT0FyQkE7QUFzQkE7QUEvQkE7QUEzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQSxxQkFEQTtBQUVBLG1CQUZBO0FB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QXlCO0FBQ3REO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9yZXdhcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3VzZXJfc2lkZWJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9yZXdhcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy91c2VyX3NpZGViYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvcmV3YXJkcy52dWU/OWI1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZT8yNDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3VzZXJfc2lkZWJhci52dWU/NmE5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL3Jld2FyZHMudnVlPzgwYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9yZXdhcmRzLnZ1ZT8yMjgyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlPzg2NTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvdXNlcl9zaWRlYmFyLnZ1ZT84NzdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZy1wYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImVkaXQtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVzZXJfc2lkZWJhciA6Y3VycmVudD1cImN1cnJlbnRcIj48L3VzZXJfc2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTkgcGwtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctc2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSB2LWlmPVwibGVuZ3RoQ291bnRlcih0b3RhbFJld2FyZCAhPSBudWxsICYmIHRvdGFsUmV3YXJkLnJld2FyZHMpPjBcIj57e2xhbmcubXlfcmV3YXJkc319PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgdi1lbHNlLWlmPVwiaXNfc2hpbW1lclwiPnt7bGFuZy5ub19teV9yZXdhcmRzfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSB2LWVsc2UgPnt7bGFuZy5sb2FkaW5nfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImlzX3NoaW1tZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHYtaWY9XCJ0b3RhbFJld2FyZCAhPSBudWxsICYmIHRvdGFsUmV3YXJkLnJld2FyZHMgPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWJzLXRhcmdldD1cIiNjb252ZXJ0X3Jld2FyZFwiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXIgcHJvZmlsZS1jYXJkIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBwcm9maWxlLWNhcmQtZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWNhcmQtdGl0bGUgbWItM1wiPnt7bGFuZy5jb252ZXJ0X3Jld2FyZF90b193YWxsZXR9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwibWRpIG1kaS10cmFuc2ZlclwiPjwvaT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyIHByb2ZpbGUtY2FyZCBkLWZsZXgganVzdGlmeS1jZW50ZXIgcHJvZmlsZS1jYXJkLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWNhcmQtdGl0bGUgbWItM1wiPnt7bGFuZy50b3RhbF9yZXdhcmRzfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC13aGl0ZVwiPnt7dG90YWxSZXdhcmQgIT0gbnVsbCA/IHRvdGFsUmV3YXJkLnJld2FyZHMgOiAwfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIiB2LWlmPVwidG90YWxSZXdhcmQgJiYgdG90YWxSZXdhcmQubGFzdF9jb252ZXJzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXIgcHJvZmlsZS1jYXJkIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBwcm9maWxlLWNhcmQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtY2FyZC10aXRsZSBtYi0zXCI+e3tsYW5nLmxhc3RfY29udmVydGVkX3RvX3dhbGxldH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtd2hpdGVcIj57eyB0b3RhbFJld2FyZC5sYXN0X2NvbnZlcnNpb24gfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1lbHNlLWlmPVwic2hpbW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IG1iLTNcIiB2LWZvcj1cIihudW0saSkgaW4gMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzaGltbWVyIDpoZWlnaHQ9XCIxMDBcIj48L3NoaW1tZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiaXNfc2hpbW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ctdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRpdGxlIGItMCBtYi0yIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57e2xhbmcucmV3YXJkX2hpc3Rvcnl9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBkYXNoYm9hcmQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWVuZFwiIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3tsYW5nLnByb2R1Y3R9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3tsYW5nLnF1YW50aXR5fX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtZW5kXCIgc2NvcGU9XCJjb2xcIj57e2xhbmcudG90YWxfcmV3YXJkfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIocmV3YXJkLGluZGV4KSBpbiByZXdhcmRzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1lbmRcIj57eyArK2luZGV4IH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyByZXdhcmQucHJvZHVjdC5wcm9kdWN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3sgcmV3YXJkLnByb2R1Y3RfcXR5IH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemUgdGV4dC1lbmQgcHQtMyBwYi0zXCI+e3sgcmV3YXJkLnJld2FyZCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyIHNob3ctbW9yZSBtdC0zXCIgdi1pZj1cIm5leHRfcGFnZV91cmwgJiYgIWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIEBjbGljaz1cImxvYWRSZXdhcmRzKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7bGFuZy5zaG93X21vcmV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyIHNob3ctbW9yZSBtdC0zXCIgdi1zaG93PVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48aW1nIHdpZHRoPVwiMjBcIiA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJlbG9hZGVyLmdpZicpXCIgYWx0PVwicHJlbG9hZGVyXCI+TG9hZGluZy4uLi4uLi4uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1lbHNlLWlmPVwic2hpbW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtYi0zXCIgdi1mb3I9XCIobnVtLGkpIGluIDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2hpbW1lciA6aGVpZ2h0PVwiNTBcIj48L3NoaW1tZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdXNlcl9zaWRlYmFyIGZyb20gXCIuLi8uLi9wYXJ0aWFscy91c2VyX3NpZGViYXJcIjtcclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL3NoaW1tZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIndhbGxldFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHVzZXJfc2lkZWJhcixzaGltbWVyXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAncmV3YXJkX2hpc3RvcnknLFxyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV4dF9wYWdlX3VybCA6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc19zaGltbWVyOmZhbHNlLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWRkb25zLmluY2x1ZGVzKCdyZXdhcmQnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZSA6ICdob21lJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGhDb3VudGVyKHRoaXMucmV3YXJkcykgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXdhcmRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aENvdW50ZXIodGhpcy5yZXdhcmRzKSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc19zaGltbWVyID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHJld2FyZHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFJld2FyZHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3RhbFJld2FyZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0VG90YWxSZXdhcmQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaExlbmd0aCgpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDb21tb25EYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGltbWVyKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5tb2R1bGUuc2hpbW1lclxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxvYWRSZXdhcmRzKCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3VzZXIvcmV3YXJkLWhpc3Rvcnk/cGFnZT0nICsgdGhpcy5wYWdlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX3NoaW1tZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsnICEhJyApOztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5yZXdhcmRfZGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImdldFJld2FyZHNcIiwgcmVzcG9uc2UuZGF0YS5yZXdhcmRfZGV0YWlscy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0X3BhZ2VfdXJsID0gcmVzcG9uc2UuZGF0YS5yZXdhcmRfZGV0YWlscy5uZXh0X3BhZ2VfdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzZXRUb3RhbFJld2FyZFwiLCByZXNwb25zZS5kYXRhLnJld2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY29tbW9uRGF0YVwiLCByZXNwb25zZS5kYXRhLnJld2FyZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmFpbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8aW1nIDpzcmM9XCJnZXRVcmwoJ3B1YmxpYy9pbWFnZXMvZGVmYXVsdC9wcmV2aWV3LmpwZycpXCIgYWx0PVwic2hpbW1lclwiXHJcbiAgICAgICBjbGFzcz1cInNoaW1tZXJcIiB2LWJpbmQ6c3R5bGU9IFwiW2hlaWdodCA/IHN0eWxlIDogbnVsbF1cIj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic2hpbW1lci52dWVcIixcclxuICAgIHByb3BzOiBbJ2hlaWdodCddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA6IHRoaXMuaGVpZ2h0KydweCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCIgdi1pZj1cImF1dGhVc2VyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtZGV0YWlscyBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZS10aHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYXV0aFVzZXIucHJvZmlsZV9pbWFnZVwiIDphbHQ9XCJhdXRoVXNlci5mdWxsX25hbWVcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyPnt7IGF1dGhVc2VyLmZ1bGxfbmFtZSB9fSA8cm91dGVyLWxpbmsgY2xhc3M9XCJkLWlubGluZVwiIDp0bz1cInsgbmFtZSA6ICdlZGl0LnByb2ZpbGUnIH1cIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktcGVuY2lsXCI+PC9zcGFuPjwvcm91dGVyLWxpbms+PC9oMj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPnt7IGF1dGhVc2VyLmVtYWlsIH19PC9hPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJiZV9zZWxsZXIgYmFzZVwiIDp0bz1cInsgbmFtZSA6ICdtaWdyYXRlLnNlbGxlcicgfVwiICB2LWlmPVwic2V0dGluZ3Muc2VsbGVyX3N5c3RlbSA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBsYW5nLmJlX2Ffc2VsbGVyIH19IDxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1zdG9yZS1vdXRsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZ2xvYmFsLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnZGFzaGJvYXJkJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ2Rhc2hib2FyZCcgfVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS12aWV3LWRhc2hib2FyZC1vdXRsaW5lXCI+PC9zcGFuPiB7eyBsYW5nLmRhc2hib2FyZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdhZGRyZXNzZXMnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnYWRkcmVzc2VzJyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLW1hcC1tYXJrZXItb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5hZGRyZXNzZXMgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnbm90aWZpY2F0aW9uJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ25vdGlmaWNhdGlvbicgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1iZWxsLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcubm90aWZpY2F0aW9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwie2FjdGl2ZTogY3VycmVudCA9PT0gJ29yZGVyX2hpc3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnb3JkZXIuaGlzdG9yeScgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1jYXJ0LW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcub3JkZXJfaGlzdG9yeSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJkb3dubG9hZF91cmxcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnZGlnaXRhbF9wcm9kdWN0X29yZGVyX2hpc3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnb3JkZXJzLmRpZ2l0YWwucHJvZHVjdCcgfVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1jYXJ0LWFycm93LWRvd25cIj48L3NwYW4+IHt7IGxhbmcuZGlnaXRhbF9wcm9kdWN0X29yZGVyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmNvdXBvbl9zeXN0ZW0gPT0gMVwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdnaWZ0X3ZvdWNoZXInfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAnZ2lmdC52b3VjaGVyJyB9XCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLXdhbGxldC1naWZ0Y2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5naWZ0X3ZvdWNoZXIgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7YWN0aXZlOiBjdXJyZW50ID09PSAnY2hhbmdlX3Bhc3N3b3JkJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ2NoYW5nZS5wYXNzd29yZCcgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1sb2NrLW91dGxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhbmcuY2hhbmdlX3Bhc3N3b3JkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLndhbGxldF9zeXN0ZW0gPT0gMVwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICd3YWxsZXRfaGlzdG9yeSd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICd3YWxsZXQuaGlzdG9yeScgfVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS13YWxsZXQtb3V0bGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5teV93YWxsZXQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwiYWRkb25zLmluY2x1ZGVzKCdyZXdhcmQnKVwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdyZXdhcmRfaGlzdG9yeSd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdyZXdhcmQuaGlzdG9yeScgfVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRpIG1kaS12ZWN0b3ItcG9pbnRcIj48L3NwYW4+e3sgbGFuZy5teV9yZXdhcmRzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLnNlbGxlcl9zeXN0ZW0gPT0gMVwiIDpjbGFzcz1cInthY3RpdmU6IGN1cnJlbnQgPT09ICdmb2xsb3dlZF9zaG9wJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lIDogJ3Nob3AuZm9sbG93ZWQnIH1cIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktaG9tZS1oZWFydFwiPjwvc3Bhbj57eyBsYW5nLnNob3AgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIHJld2FyZFwiIGlkPVwiY29udmVydF9yZXdhcmRcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGxhbmcucmV3YXJkX3BvaW50IH19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBtb2RhbF9jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSByZXdhcmRfbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiY29udmVydFJld2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXdhcmRcIj57eyBsYW5nLnJld2FyZF9wb2ludCB9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZXdhcmRcIiB2LW1vZGVsPVwiY29udmVydGVkX3Jld2FyZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJsYW5nLmVudGVyX3BvaW50X3lvdV93YW50X2NvbnZlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN0YXJ0XCIgdi1pZj1cInRvdGFsUmV3YXJkICE9IG51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF2YWlsYWJsZSBQb2ludHMgdG8gQ29udmVydCA6IHt7IHRvdGFsUmV3YXJkLnJld2FyZHMgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBzZXR0aW5ncy5yZXdhcmRfY29udmVydF9yYXRlIH19e3sgbGFuZy5yZXdhcmRfcG9pbnRzIH19e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VGb3JtYXQoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidG90YWxSZXdhcmQucmV3YXJkcyA+IDBcIj57eyBsYW5nLnRvdGFsX2Ftb3VudF95b3Vfd2lsbF9nZXQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcmljZUZvcm1hdChjb252ZXJ0ZWRfcmV3YXJkIC8gc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZSkgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9hZGluZ19idXR0b24gdi1pZj1cImxvYWRpbmdcIiA6Y2xhc3NfbmFtZT1cIididG4gYnRuLXByaW1hcnkgbXQtMydcIj48L2xvYWRpbmdfYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2LWVsc2UgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZGlzYWJsZV9idG4nIDogY29udmVydGVkX3Jld2FyZCA8IHNldHRpbmdzLnJld2FyZF9jb252ZXJ0X3JhdGUgfHwgdG90YWxSZXdhcmQucmV3YXJkcyA8IGNvbnZlcnRlZF9yZXdhcmQgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5jb3ZlcnRfcmV3YXJkcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgc2hpbW1lciBmcm9tIFwiLi9zaGltbWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInVzZXJfc2lkZWJhclwiLFxyXG4gICAgcHJvcHM6IFtcclxuICAgICAgICAnY3VycmVudCcsXHJcbiAgICAgICAgJ2FkZHJlc3NlcydcclxuICAgIF0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgZG93bmxvYWRfdXJsIDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXV0aCgpO1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgdG90YWxSZXdhcmQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFRvdGFsUmV3YXJkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxUeXBlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRNb2RhbFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBzaGltbWVyLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja0F1dGgoKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgnaG9tZS9jaGVjay1hdXRoJylcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1c2VyJywgcmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZ2V0T3JkZXJVcmwnLCByZXNwb25zZS5kYXRhLm9yZGVyX3VybHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF1dGhVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRoVXNlci51c2VyX3R5cGUgPT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VG90YWxSZXdhcmQnLCByZXNwb25zZS5kYXRhLnJld2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kb3dubG9hZF91cmxzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRfdXJsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udmVydFJld2FyZCgpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCd1c2VyL2NvbnZlcnQtcmV3YXJkJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5jb252ZXJ0ZWRfcmV3YXJkIC8gdGhpcy5zZXR0aW5ncy5yZXdhcmRfY29udmVydF9yYXRlLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkOiB0aGlzLmNvbnZlcnRlZF9yZXdhcmQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5hbW91bnQgPiAwICYmIHRoaXMudG90YWxSZXdhcmQucmV3YXJkcyA+PSB0aGlzLmNvbnZlcnRlZF9yZXdhcmQgJiYgY29uZmlybSgnQXJlIFlvdSBTdXJlISBZb3Ugd2FudCB0byBDb252ZXJ0ID8nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCBmb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKycgISEnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5zdWNjZXNzLCB0aGlzLmxhbmcuU3VjY2VzcyArICchIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29udmVydF9yZXdhcmQnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRlZF9yZXdhcmQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VzZXInLCByZXNwb25zZS5kYXRhLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFRvdGFsUmV3YXJkJywgcmVzcG9uc2UuZGF0YS5yZXdhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Jld2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZDA1ZDI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Jld2FyZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZXdhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YmQwNWQyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YmQwNWQyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YmQwNWQyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmV3YXJkcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJkMDVkMjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmJkMDVkMjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvcmV3YXJkcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWRhOTI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFkYTkyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFkYTkyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZGE5MjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkY2MxMGRhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2RjYzEwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2RjYzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RjYzEwZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2RjYzEwZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3VzZXJfc2lkZWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmV3YXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXdhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJfc2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyX3NpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jld2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZDA1ZDI2JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZy1wYWdlLWNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZWRpdC1wcm9maWxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXNlcl9zaWRlYmFyXCIsIHsgYXR0cnM6IHsgY3VycmVudDogX3ZtLmN1cnJlbnQgfSB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IHBsLWxnLTVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctc2hpcHBpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5sZW5ndGhDb3VudGVyKFxuICAgICAgICAgICAgICAgICAgICBfdm0udG90YWxSZXdhcmQgIT0gbnVsbCAmJiBfdm0udG90YWxSZXdhcmQucmV3YXJkc1xuICAgICAgICAgICAgICAgICAgKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm15X3Jld2FyZHMpKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLmlzX3NoaW1tZXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm5vX215X3Jld2FyZHMpKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5sb2FkaW5nKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc19zaGltbWVyXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkICE9IG51bGwgJiYgX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNjb252ZXJ0X3Jld2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkIHRleHQtY2VudGVyIHByb2ZpbGUtY2FyZCBkLWZsZXgganVzdGlmeS1jZW50ZXIgcHJvZmlsZS1jYXJkLWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtY2FyZC10aXRsZSBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYW5nLmNvbnZlcnRfcmV3YXJkX3RvX3dhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZCB0ZXh0LWNlbnRlciBwcm9maWxlLWNhcmQgZC1mbGV4IGp1c3RpZnktY2VudGVyIHByb2ZpbGUtY2FyZC1ibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtY2FyZC10aXRsZSBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50b3RhbF9yZXdhcmRzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS50b3RhbFJld2FyZC5yZXdhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS50b3RhbFJld2FyZCAmJiBfdm0udG90YWxSZXdhcmQubGFzdF9jb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmQgdGV4dC1jZW50ZXIgcHJvZmlsZS1jYXJkIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBwcm9maWxlLWNhcmQtYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtY2FyZC10aXRsZSBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5sYXN0X2NvbnZlcnRlZF90b193YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udG90YWxSZXdhcmQubGFzdF9jb252ZXJzaW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLnNoaW1tZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbCgyLCBmdW5jdGlvbiAobnVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgbWItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzaGltbWVyXCIsIHsgYXR0cnM6IHsgaGVpZ2h0OiAxMDAgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc19zaGltbWVyXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgb3ZlcmZsb3cteS1hdXRvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0aXRsZSBiLTAgbWItMiBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnJld2FyZF9oaXN0b3J5KSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIGRhc2hib2FyZC10YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiI1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnByb2R1Y3QpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5xdWFudGl0eSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcudG90YWxfcmV3YXJkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucmV3YXJkcywgZnVuY3Rpb24gKHJld2FyZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKCsraW5kZXgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcGl0YWxpemVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyZXdhcmQucHJvZHVjdC5wcm9kdWN0X25hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocmV3YXJkLnByb2R1Y3RfcXR5KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtY2FwaXRhbGl6ZSB0ZXh0LWVuZCBwdC0zIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJld2FyZC5yZXdhcmQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV4dF9wYWdlX3VybCAmJiAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkUmV3YXJkcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnNob3dfbW9yZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgc2hvdy1tb3JlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0VXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJlbG9hZGVyLmdpZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwicHJlbG9hZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxvYWRpbmcuLi4uLi4uLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLnNoaW1tZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbCg0LCBmdW5jdGlvbiAobnVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIG1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic2hpbW1lclwiLCB7IGF0dHJzOiB7IGhlaWdodDogNTAgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDNcIiwgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktdHJhbnNmZXJcIiB9KV0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaW1nXCIsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaGltbWVyXCIsXG4gICAgc3R5bGU6IFtfdm0uaGVpZ2h0ID8gX3ZtLnN0eWxlIDogbnVsbF0sXG4gICAgYXR0cnM6IHtcbiAgICAgIHNyYzogX3ZtLmdldFVybChcInB1YmxpYy9pbWFnZXMvZGVmYXVsdC9wcmV2aWV3LmpwZ1wiKSxcbiAgICAgIGFsdDogXCJzaGltbWVyXCIsXG4gICAgfSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYXV0aFVzZXJcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9maWxlLWRldGFpbHMgcG9zaXRpb24tcmVsYXRpdmVcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZmlsZS10aHVtYlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5hdXRoVXNlci5wcm9maWxlX2ltYWdlLFxuICAgICAgICAgICAgICAgICAgYWx0OiBfdm0uYXV0aFVzZXIuZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF1dGhVc2VyLmZ1bGxfbmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZWRpdC5wcm9maWxlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLXBlbmNpbFwiIH0pXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYXV0aFVzZXIuZW1haWwpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZXR0aW5ncy5zZWxsZXJfc3lzdGVtID09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmVfc2VsbGVyIGJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJtaWdyYXRlLnNlbGxlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYW5nLmJlX2Ffc2VsbGVyKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1zdG9yZS1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaWRlYmFyLW1lbnVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JhbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcImRhc2hib2FyZFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImRhc2hib2FyZFwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLXZpZXctZGFzaGJvYXJkLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0ubGFuZy5kYXNoYm9hcmQpICsgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcImFkZHJlc3Nlc1wiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImFkZHJlc3Nlc1wiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLW1hcC1tYXJrZXItb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmFkZHJlc3NlcykgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJub3RpZmljYXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJub3RpZmljYXRpb25cIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1iZWxsLW91dGxpbmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcubm90aWZpY2F0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcIm9yZGVyX2hpc3RvcnlcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJvcmRlci5oaXN0b3J5XCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1jYXJ0LW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm9yZGVyX2hpc3RvcnkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZG93bmxvYWRfdXJsXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJkaWdpdGFsX3Byb2R1Y3Rfb3JkZXJfaGlzdG9yeVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJvcmRlcnMuZGlnaXRhbC5wcm9kdWN0XCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1jYXJ0LWFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmRpZ2l0YWxfcHJvZHVjdF9vcmRlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZXR0aW5ncy5jb3Vwb25fc3lzdGVtID09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJnaWZ0X3ZvdWNoZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZ2lmdC52b3VjaGVyXCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS13YWxsZXQtZ2lmdGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGFuZy5naWZ0X3ZvdWNoZXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmN1cnJlbnQgPT09IFwiY2hhbmdlX3Bhc3N3b3JkXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiY2hhbmdlLnBhc3N3b3JkXCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1sb2NrLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmNoYW5nZV9wYXNzd29yZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZXR0aW5ncy53YWxsZXRfc3lzdGVtID09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudCA9PT0gXCJ3YWxsZXRfaGlzdG9yeVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ3YWxsZXQuaGlzdG9yeVwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktd2FsbGV0LW91dGxpbmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcubXlfd2FsbGV0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFkZG9ucy5pbmNsdWRlcyhcInJld2FyZFwiKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcInJld2FyZF9oaXN0b3J5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInJld2FyZC5oaXN0b3J5XCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS12ZWN0b3ItcG9pbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm15X3Jld2FyZHMpICsgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnNlbGxlcl9zeXN0ZW0gPT0gMVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5jdXJyZW50ID09PSBcImZvbGxvd2VkX3Nob3BcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwic2hvcC5mb2xsb3dlZFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktaG9tZS1oZWFydFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaG9wKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZSByZXdhcmRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcImNvbnZlcnRfcmV3YXJkXCIsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucmV3YXJkX3BvaW50KSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHkgcmV3YXJkX21vZGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29udmVydFJld2FyZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJyZXdhcmRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnJld2FyZF9wb2ludCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29udmVydGVkX3Jld2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb252ZXJ0ZWRfcmV3YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmV3YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcuZW50ZXJfcG9pbnRfeW91X3dhbnRfY29udmVydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29udmVydGVkX3Jld2FyZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udmVydGVkX3Jld2FyZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG90YWxSZXdhcmQgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdGFydFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YWlsYWJsZSBQb2ludHMgdG8gQ29udmVydCA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udG90YWxSZXdhcmQucmV3YXJkcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLnJld2FyZF9wb2ludHMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJpY2VGb3JtYXQoMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG90YWxSZXdhcmQucmV3YXJkcyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhbmcudG90YWxfYW1vdW50X3lvdV93aWxsX2dldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udmVydGVkX3Jld2FyZCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmV3YXJkX2NvbnZlcnRfcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19uYW1lOiBcImJ0biBidG4tcHJpbWFyeSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVfYnRuOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnZlcnRlZF9yZXdhcmQgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MucmV3YXJkX2NvbnZlcnRfcmF0ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsUmV3YXJkLnJld2FyZHMgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udmVydGVkX3Jld2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmNvdmVydF9yZXdhcmRzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBtb2RhbF9jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==