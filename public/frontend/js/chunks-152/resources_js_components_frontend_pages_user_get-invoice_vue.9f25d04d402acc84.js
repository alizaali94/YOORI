"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_user_get-invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "get-invoice.vue",
  data: function data() {
    return {
      orders: [],
      is_shimmer: false,
      loading: false
    };
  },
  mounted: function mounted() {
    this.getInvoices();
  },
  components: {
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    }
  },
  methods: {
    getInvoices: function getInvoices() {
      var _this = this;

      this.$Progress.start();
      var url = this.getUrl("user/get-invoices/" + this.$route.params.trx_id);
      axios.get(url).then(function (response) {
        _this.is_shimmer = true;

        if (response.data.error) {
          _this.$Progress.fail();

          toastr.error(response.data.error, _this.lang.Error + " !!");
        } else {
          _this.$Progress.finish();

          if (!response.data.guest) {
            _this.$store.dispatch("user", response.data.user);
          }

          _this.$store.dispatch("compareList", response.data.compare_list);

          _this.$store.dispatch("wishlists", response.data.wishlists);

          _this.$store.dispatch("carts", 0);

          var orders = response.data.orders;
          _this.orders = orders;

          if (orders) {
            for (var i = 0; i < orders.length; i++) {
              _this.payment_form.sub_total += orders[i].total_amount;
              _this.payment_form.discount_offer += orders[i].discount;
              _this.payment_form.shipping_tax += orders[i].shipping_cost;
              _this.payment_form.tax += orders[i].total_tax;

              if (_this.settings.coupon_system == 1) {
                _this.payment_form.coupon_discount += orders[i].coupon_discount;
              }

              _this.trx_id = orders[i].trx_id;
            }

            if (orders[0].is_mailed == 0) {
              _this.sendMail();
            }

            _this.payment_form.total = _this.payment_form.sub_total + _this.payment_form.tax + _this.payment_form.shipping_tax - (_this.payment_form.discount_offer + _this.payment_form.coupon_discount);
          }
        }
      })["catch"](function (error) {
        _this.$Progress.finish();
      });
    },
    sendMail: function sendMail() {
      var url = this.getUrl("user/mail-order/" + this.trx_id);
      axios.get(url).then(function (response) {// this.sendMailSeller();
      });
    },
    sendMailSeller: function sendMailSeller() {
      var url = this.getUrl("user/mail-order-seller/" + this.trx_id);
      axios.get(url).then(function (response) {});
    },
    download: function download(id, code) {
      var _this2 = this;

      this.loading = true;
      axios.get(this.getUrl("user/invoice/download/" + id), {
        responseType: "arraybuffer"
      }).then(function (response) {
        _this2.loading = false;
        1;

        if (response.data.error) {
          toastr.error(response.data.error, _this2.lang.Error + " !!");
        } else {
          var blob = new Blob([response.data], {
            type: "application/pdf"
          });
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = code + ".pdf";
          link.click();
        }
      })["catch"](function (error) {
        _this2.loading = false;
        toastr.error(error.response.statusText, _this2.lang.Error + " !!");
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

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-invoice.vue?vue&type=template&id=59913f02& */ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&");
/* harmony import */ var _get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.render,
  _get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/user/get-invoice.vue"
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

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./get-invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_get_invoice_vue_vue_type_template_id_59913f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./get-invoice.vue?vue&type=template&id=59913f02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/user/get-invoice.vue?vue&type=template&id=59913f02& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _vm.is_shimmer
      ? _c(
          "section",
          { staticClass: "after-track-order text-center" },
          _vm._l(_vm.orders, function (order, index) {
            return _c("div", { key: index, staticClass: "container" }, [
              _c("div", { staticClass: "invoice_border mt-2" }, [
                _c("div", { staticClass: "page-title" }, [
                  _c("h1", [_vm._v(_vm._s(_vm.lang.thank_you_for_purchase))]),
                  _vm._v(" "),
                  _vm.authUser
                    ? _c("p", [
                        _vm._v(
                          _vm._s(_vm.lang.a_copy_summary_has_been_sent_to) + " "
                        ),
                        _c(
                          "a",
                          { attrs: { href: "mailto" + _vm.authUser.email } },
                          [_vm._v(_vm._s(_vm.authUser.email))]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h2", [
                    _vm._v(
                      _vm._s(_vm.lang.order_id) + " " + _vm._s(order.code)
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "step-content" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "text-start",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.product_name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-end",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.price))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-end",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.quantity))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-end",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.sub_total))]
                          ),
                          _vm._v(" "),
                          (order.tax_method &&
                            order.tax_method.vat_tax_type == "product_base") ||
                          !order.tax_method ||
                          !order.tax_method.vat_tax_type
                            ? _c(
                                "th",
                                {
                                  staticClass: "text-end",
                                  attrs: { scope: "col" },
                                },
                                [_vm._v(_vm._s(_vm.lang.tax))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          order.shipping_method == "product_base" ||
                          !order.shipping_method
                            ? _c(
                                "th",
                                {
                                  staticClass: "text-end",
                                  attrs: { scope: "col" },
                                },
                                [_vm._v(_vm._s(_vm.lang.shipping_cost))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-end",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.discount))]
                          ),
                          _vm._v(" "),
                          order.is_coupon_system_active == 1 &&
                          order.coupon_discount > 0
                            ? _c(
                                "th",
                                {
                                  staticClass: "text-end",
                                  attrs: { scope: "col" },
                                },
                                [_vm._v(_vm._s(_vm.lang.coupon_discount))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-end",
                              attrs: { scope: "col" },
                            },
                            [_vm._v(_vm._s(_vm.lang.total_amount))]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(
                          order.order_details,
                          function (order_detail, index) {
                            return _c("tr", { key: "order" + index }, [
                              _c("td", [
                                _c("div", { staticClass: "product-name" }, [
                                  _c("p", [
                                    _vm._v(_vm._s(order_detail.product_name)),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(order_detail.variation)),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-end" }, [
                                _vm._v(
                                  _vm._s(_vm.priceFormat(order_detail.price))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-end" }, [
                                _vm._v(_vm._s(order_detail.quantity)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-end" }, [
                                _vm._v(
                                  _vm._s(_vm.priceFormat(order_detail.price)) +
                                    "\n                      X " +
                                    _vm._s(order_detail.quantity) +
                                    "\n                      = " +
                                    _vm._s(
                                      _vm.priceFormat(
                                        order_detail.price *
                                          order_detail.quantity
                                      )
                                    )
                                ),
                              ]),
                              _vm._v(" "),
                              (order.tax_method &&
                                order.tax_method.vat_tax_type ==
                                  "product_base") ||
                              !order.tax_method ||
                              !order.tax_method.vat_tax_type
                                ? _c("td", { staticClass: "text-end" }, [
                                    order_detail.tax > 0
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  order_detail.tax
                                                )
                                              ) +
                                              " X " +
                                              _vm._s(order_detail.quantity) +
                                              "\n                                                    = " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  order_detail.tax *
                                                    order_detail.quantity
                                                )
                                              ) +
                                              "\n                      "
                                          ),
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  order_detail.tax *
                                                    order_detail.quantity
                                                )
                                              ) +
                                              "\n                      "
                                          ),
                                        ]),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              order.shipping_method == "product_base" ||
                              !order.shipping_method
                                ? _c("td", { staticClass: "text-end" }, [
                                    order_detail.shipping_cost
                                      .depend_on_quantity == 1
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  order_detail.shipping_cost
                                                    .per_cost
                                                )
                                              ) +
                                              "\n                      X " +
                                              _vm._s(order_detail.quantity) +
                                              "\n                      = " +
                                              _vm._s(
                                                _vm.priceFormat(
                                                  order_detail.shipping_cost
                                                    .total_cost
                                                )
                                              ) +
                                              "\n                      "
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            _vm.priceFormat(
                                              order_detail.shipping_cost
                                                .total_cost
                                            )
                                          ) +
                                          "\n                      "
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              order_detail.discount * order_detail.quantity > 0
                                ? _c("td", { staticClass: "text-end" }, [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(
                                          _vm.priceFormat(order_detail.discount)
                                        ) +
                                        "\n                      X " +
                                        _vm._s(order_detail.quantity) +
                                        "\n                      = " +
                                        _vm._s(
                                          _vm.priceFormat(
                                            order_detail.discount *
                                              order_detail.quantity
                                          )
                                        ) +
                                        "\n                    "
                                    ),
                                  ])
                                : _c("td", { staticClass: "text-end" }, [
                                    _vm._v(_vm._s(_vm.priceFormat(0))),
                                  ]),
                              _vm._v(" "),
                              order.is_coupon_system_active == 1 &&
                              order.coupon_discount > 0
                                ? _c("td", { staticClass: "text-end" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.priceFormat(
                                          order_detail.coupon_discount.discount
                                        )
                                      )
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-end" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.priceFormat(
                                      parseFloat(order_detail.price) *
                                        order_detail.quantity +
                                        parseFloat(order_detail.tax) *
                                          order_detail.quantity +
                                        parseFloat(
                                          order_detail.shipping_cost.total_cost
                                        ) -
                                        (parseFloat(order_detail.discount) *
                                          order_detail.quantity +
                                          parseFloat(
                                            order_detail.coupon_discount
                                              .discount
                                          ))
                                    )
                                  )
                                ),
                              ]),
                            ])
                          }
                        ),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "account-table" }, [
                    _c("div", { staticClass: "title" }, [
                      _c("h1", [_vm._v(_vm._s(_vm.lang.account_details))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table text-start" }, [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.order_code) + " "),
                                ]),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.lang._name) + " "),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [_vm._v(_vm._s(_vm.lang._email))])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.shipping_address)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.billing_address)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(order.code))]),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.authUser.full_name)),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.authUser
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.authUser.email)),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    _vm._s(order.shipping_address.address)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(order.billing_address.address)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(_vm.lang.order_date))]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.order_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.payment_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(_vm._s(_vm.lang.payment_type)),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("ul", { staticClass: "global-list" }, [
                                _c("li", [_vm._v(_vm._s(order.date))]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(order.delivery_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(order.payment_status)),
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "text-capitalize" }, [
                                  _vm._v(
                                    _vm._s(
                                      order.payment_type.replaceAll("_", " ")
                                    )
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 offset-md-8" }, [
                        _c("div", { staticClass: "order-summary" }, [
                          _c("div", { staticClass: "sg-card" }, [
                            _c("ul", { staticClass: "global-list" }, [
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.subtotal) + " "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.sub_total))
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              order.tax_type == "before_tax" ||
                              order.vat_tax_type == "product_base"
                                ? _c("li", [
                                    _vm._v(_vm._s(_vm.lang.tax) + " "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.priceFormat(order.total_tax))
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(_vm._s(_vm.lang.discount)),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.priceFormat(order.discount))
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _vm.settings.shipping_cost != "area_base" ||
                              _vm.$route.name != "cart"
                                ? _c("li", [
                                    _vm._v(_vm._s(_vm.lang.shipping_cost)),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.priceFormat(order.shipping_cost)
                                        )
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.settings.coupon_system == 1
                                ? _c("li", [
                                    _vm._v(_vm._s(_vm.lang.coupon_discount)),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.priceFormat(order.coupon_discount)
                                        )
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _vm.settings.tax_type == "after_tax" &&
                            _vm.settings.vat_and_tax_type == "order_base"
                              ? _c(
                                  "div",
                                  { staticClass: "order-total text-left" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "font_weight_400" },
                                      [
                                        _vm._v(_vm._s(_vm.lang.total) + " "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.priceFormat(
                                                parseFloat(order.sub_total) +
                                                  parseFloat(
                                                    order.shipping_cost
                                                  ) -
                                                  (parseFloat(
                                                    order.coupon_discount
                                                  ) +
                                                    parseFloat(order.discount))
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "font_weight_400" },
                                      [
                                        _vm._v(_vm._s(_vm.lang.tax) + " "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.priceFormat(order.total_tax)
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "grand_total_style" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.lang.grand_total) + " "
                                        ),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.priceFormat(
                                                order.total_payable
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                )
                              : _c("div", { staticClass: "order-total" }, [
                                  _c("p", [
                                    _vm._v(_vm._s(_vm.lang.total) + " "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.priceFormat(order.total_payable)
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _vm.loading
                      ? _c("loading_button", {
                          attrs: { class_name: "btn btn-primary" },
                        })
                      : _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function ($event) {
                                return _vm.download(order.id, order.code)
                              },
                            },
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.lang.download) +
                                " " +
                                _vm._s(_vm.lang.invoice)
                            ),
                          ]
                        ),
                  ],
                  1
                ),
              ]),
            ])
          }),
          0
        )
      : _vm.shimmer
      ? _c("section", [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "page-title" },
              _vm._l(3, function (order, index) {
                return _c("shimmer", {
                  key: index,
                  staticClass: "mb-3",
                  attrs: { height: 20 },
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _c("div", { staticClass: "step-content" }, [
                _c(
                  "div",
                  { staticClass: "table-responsive" },
                  [_c("shimmer", { attrs: { height: 50 } })],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "account-table" }, [
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [_c("shimmer", { attrs: { height: 155 } })],
                    1
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4 offset-md-8" },
                [_c("shimmer", { attrs: { height: 288 } })],
                1
              ),
            ]),
          ]),
        ])
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfdXNlcl9nZXQtaW52b2ljZV92dWUuOWYyNWQwNGQ0MDJhY2M4NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErTEE7QUFFQTtBQUNBLHlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBO0FBSEE7QUFLQSxHQVJBO0FBU0EsU0FUQSxxQkFTQTtBQUNBO0FBQ0EsR0FYQTtBQVlBO0FBQ0E7QUFEQSxHQVpBO0FBZUE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBZkE7QUFvQkE7QUFDQSxlQURBLHlCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLFlBQ0EsR0FEQSxDQUNBLEdBREEsRUFFQSxJQUZBLENBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FDQSwrQkFDQSxzQkFEQSxHQUVBLCtCQUZBLElBR0Esc0VBSEEsQ0FEQTtBQUtBO0FBQ0E7QUFDQSxPQXpDQSxXQTBDQTtBQUNBO0FBQ0EsT0E1Q0E7QUE2Q0EsS0FqREE7QUFrREEsWUFsREEsc0JBa0RBO0FBQ0E7QUFDQSwr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QUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL2dldC1pbnZvaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9nZXQtaW52b2ljZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9nZXQtaW52b2ljZS52dWU/N2Y2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZT8yNDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL3VzZXIvZ2V0LWludm9pY2UudnVlP2NmYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvdXNlci9nZXQtaW52b2ljZS52dWU/YTNkMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZT84NjUwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwic2ctcGFnZS1jb250ZW50XCI+XHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImFmdGVyLXRyYWNrLW9yZGVyIHRleHQtY2VudGVyXCIgdi1pZj1cImlzX3NoaW1tZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHYtZm9yPVwiKG9yZGVyLCBpbmRleCkgaW4gb3JkZXJzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImludm9pY2VfYm9yZGVyIG10LTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxoMT57eyBsYW5nLnRoYW5rX3lvdV9mb3JfcHVyY2hhc2UgfX08L2gxPlxyXG5cdFx0XHRcdFx0XHQ8cCB2LWlmPVwiYXV0aFVzZXJcIlxyXG5cdFx0XHRcdFx0XHRcdD57eyBsYW5nLmFfY29weV9zdW1tYXJ5X2hhc19iZWVuX3NlbnRfdG8gfX0gPGEgOmhyZWY9XCInbWFpbHRvJyArIGF1dGhVc2VyLmVtYWlsXCI+e3sgYXV0aFVzZXIuZW1haWwgfX08L2E+PC9wXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGgyPnt7IGxhbmcub3JkZXJfaWQgfX0ge3sgb3JkZXIuY29kZSB9fTwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdGVwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJ0ZXh0LXN0YXJ0XCI+e3sgbGFuZy5wcm9kdWN0X25hbWUgfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwidGV4dC1lbmRcIj57eyBsYW5nLnByaWNlIH19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInRleHQtZW5kXCI+e3sgbGFuZy5xdWFudGl0eSB9fTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJ0ZXh0LWVuZFwiPnt7IGxhbmcuc3ViX3RvdGFsIH19PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggdi1pZj1cIigob3JkZXIudGF4X21ldGhvZCAmJiBvcmRlci50YXhfbWV0aG9kLnZhdF90YXhfdHlwZSA9PSAncHJvZHVjdF9iYXNlJykgfHwgKCFvcmRlci50YXhfbWV0aG9kIHx8ICFvcmRlci50YXhfbWV0aG9kLnZhdF90YXhfdHlwZSkpXCIgc2NvcGU9XCJjb2xcIiBjbGFzcz1cInRleHQtZW5kXCI+e3sgbGFuZy50YXggfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCB2LWlmPVwib3JkZXIuc2hpcHBpbmdfbWV0aG9kID09ICdwcm9kdWN0X2Jhc2UnIHx8ICFvcmRlci5zaGlwcGluZ19tZXRob2RcIiBzY29wZT1cImNvbFwiIGNsYXNzPVwidGV4dC1lbmRcIj57eyBsYW5nLnNoaXBwaW5nX2Nvc3QgfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwidGV4dC1lbmRcIj57eyBsYW5nLmRpc2NvdW50IH19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggdi1pZj1cIm9yZGVyLmlzX2NvdXBvbl9zeXN0ZW1fYWN0aXZlID09IDEgJiYgb3JkZXIuY291cG9uX2Rpc2NvdW50ID4gMFwiIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJ0ZXh0LWVuZFwiPnt7IGxhbmcuY291cG9uX2Rpc2NvdW50IH19PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInRleHQtZW5kXCI+e3sgbGFuZy50b3RhbF9hbW91bnQgfX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIHYtZm9yPVwiKG9yZGVyX2RldGFpbCwgaW5kZXgpIGluIG9yZGVyLm9yZGVyX2RldGFpbHNcIiA6a2V5PVwiJ29yZGVyJyArIGluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57eyBvcmRlcl9kZXRhaWwucHJvZHVjdF9uYW1lIH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57eyBvcmRlcl9kZXRhaWwudmFyaWF0aW9uIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWVuZFwiPnt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC5wcmljZSkgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtZW5kXCI+e3sgb3JkZXJfZGV0YWlsLnF1YW50aXR5IH19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LWVuZFwiPnt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC5wcmljZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIFgge3sgb3JkZXJfZGV0YWlsLnF1YW50aXR5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA9IHt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC5wcmljZSAqIG9yZGVyX2RldGFpbC5xdWFudGl0eSkgfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCB2LWlmPVwiKG9yZGVyLnRheF9tZXRob2QgJiYgb3JkZXIudGF4X21ldGhvZC52YXRfdGF4X3R5cGUgPT0gJ3Byb2R1Y3RfYmFzZScpIHx8ICghb3JkZXIudGF4X21ldGhvZCB8fCAhb3JkZXIudGF4X21ldGhvZC52YXRfdGF4X3R5cGUpXCIgY2xhc3M9XCJ0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIm9yZGVyX2RldGFpbC50YXggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC50YXgpIH19IFgge3sgb3JkZXJfZGV0YWlsLnF1YW50aXR5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC50YXggKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC50YXggKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cIihvcmRlci5zaGlwcGluZ19tZXRob2QgPT0gJ3Byb2R1Y3RfYmFzZScgfHwgIW9yZGVyLnNoaXBwaW5nX21ldGhvZClcIiBjbGFzcz1cInRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXJfZGV0YWlsLnNoaXBwaW5nX2Nvc3QuZGVwZW5kX29uX3F1YW50aXR5ID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJpY2VGb3JtYXQob3JkZXJfZGV0YWlsLnNoaXBwaW5nX2Nvc3QucGVyX2Nvc3QpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBYIHt7IG9yZGVyX2RldGFpbC5xdWFudGl0eSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPSB7eyBwcmljZUZvcm1hdChvcmRlcl9kZXRhaWwuc2hpcHBpbmdfY29zdC50b3RhbF9jb3N0KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC5zaGlwcGluZ19jb3N0LnRvdGFsX2Nvc3QpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCIob3JkZXJfZGV0YWlsLmRpc2NvdW50ICogb3JkZXJfZGV0YWlsLnF1YW50aXR5KSA+IDBcIiBjbGFzcz1cInRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBwcmljZUZvcm1hdChvcmRlcl9kZXRhaWwuZGlzY291bnQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBYIHt7IG9yZGVyX2RldGFpbC5xdWFudGl0eSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPSB7eyBwcmljZUZvcm1hdChvcmRlcl9kZXRhaWwuZGlzY291bnQgKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgdi1lbHNlIGNsYXNzPVwidGV4dC1lbmRcIj57eyBwcmljZUZvcm1hdCgwKSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1lbmRcIiB2LWlmPVwib3JkZXIuaXNfY291cG9uX3N5c3RlbV9hY3RpdmUgPT0gMSAmJiBvcmRlci5jb3Vwb25fZGlzY291bnQgPiAwXCI+e3sgcHJpY2VGb3JtYXQob3JkZXJfZGV0YWlsLmNvdXBvbl9kaXNjb3VudC5kaXNjb3VudCkgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtZW5kXCI+e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByaWNlRm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKHBhcnNlRmxvYXQob3JkZXJfZGV0YWlsLnByaWNlKSAqIG9yZGVyX2RldGFpbC5xdWFudGl0eSkgK1x0KHBhcnNlRmxvYXQob3JkZXJfZGV0YWlsLnRheCkgKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkpICtwYXJzZUZsb2F0KG9yZGVyX2RldGFpbC5zaGlwcGluZ19jb3N0LnRvdGFsX2Nvc3QpKSAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChwYXJzZUZsb2F0KG9yZGVyX2RldGFpbC5kaXNjb3VudCkgKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkpICsgcGFyc2VGbG9hdChvcmRlcl9kZXRhaWwuY291cG9uX2Rpc2NvdW50LmRpc2NvdW50KSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY291bnQtdGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMT57eyBsYW5nLmFjY291bnRfZGV0YWlscyB9fTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRleHQtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZ2xvYmFsLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+e3sgbGFuZy5vcmRlcl9jb2RlIH19IDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIHYtaWY9XCJhdXRoVXNlclwiPnt7IGxhbmcuX25hbWUgfX0gPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgdi1pZj1cImF1dGhVc2VyXCI+e3sgbGFuZy5fZW1haWwgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBsYW5nLnNoaXBwaW5nX2FkZHJlc3MgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBsYW5nLmJpbGxpbmdfYWRkcmVzcyB9fTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBvcmRlci5jb2RlIH19PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgdi1pZj1cImF1dGhVc2VyXCI+e3sgYXV0aFVzZXIuZnVsbF9uYW1lIH19PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgdi1pZj1cImF1dGhVc2VyXCI+e3sgYXV0aFVzZXIuZW1haWwgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBvcmRlci5zaGlwcGluZ19hZGRyZXNzLmFkZHJlc3MgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBvcmRlci5iaWxsaW5nX2FkZHJlc3MuYWRkcmVzcyB9fTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBsYW5nLm9yZGVyX2RhdGUgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBsYW5nLm9yZGVyX3N0YXR1cyB9fTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPnt7IGxhbmcucGF5bWVudF9zdGF0dXMgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBsYW5nLnBheW1lbnRfdHlwZSB9fTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57eyBvcmRlci5kYXRlIH19PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyBvcmRlci5kZWxpdmVyeV9zdGF0dXMgfX08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IG9yZGVyLnBheW1lbnRfc3RhdHVzIH19PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyBvcmRlci5wYXltZW50X3R5cGUucmVwbGFjZUFsbChcIl9cIiwgXCIgXCIpIH19PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00IG9mZnNldC1tZC04XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1zdW1tYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNnLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdsb2JhbC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eyBsYW5nLnN1YnRvdGFsIH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KG9yZGVyLnN1Yl90b3RhbCkgfX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJvcmRlci50YXhfdHlwZSA9PSAnYmVmb3JlX3RheCcgfHwgb3JkZXIudmF0X3RheF90eXBlID09ICdwcm9kdWN0X2Jhc2UnXCI+e3sgbGFuZy50YXggfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQob3JkZXIudG90YWxfdGF4KSB9fTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3sgbGFuZy5kaXNjb3VudCB9fTxzcGFuPnt7IHByaWNlRm9ybWF0KG9yZGVyLmRpc2NvdW50KSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5zaGlwcGluZ19jb3N0ICE9ICdhcmVhX2Jhc2UnIHx8ICRyb3V0ZS5uYW1lICE9ICdjYXJ0J1wiPnt7IGxhbmcuc2hpcHBpbmdfY29zdCB9fTxzcGFuPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUZvcm1hdChvcmRlci5zaGlwcGluZ19jb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXCI+e3sgbGFuZy5jb3Vwb25fZGlzY291bnQgfX08c3Bhbj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VGb3JtYXQob3JkZXIuY291cG9uX2Rpc2NvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLXRvdGFsIHRleHQtbGVmdFwiIHYtaWY9XCJzZXR0aW5ncy50YXhfdHlwZSA9PSAnYWZ0ZXJfdGF4JyAmJiBzZXR0aW5ncy52YXRfYW5kX3RheF90eXBlID09ICdvcmRlcl9iYXNlJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnRfd2VpZ2h0XzQwMFwiPnt7IGxhbmcudG90YWwgfX0gPHNwYW4+e3sgcHJpY2VGb3JtYXQoKHBhcnNlRmxvYXQob3JkZXIuc3ViX3RvdGFsKSArIHBhcnNlRmxvYXQob3JkZXIuc2hpcHBpbmdfY29zdCkpIC0gKHBhcnNlRmxvYXQob3JkZXIuY291cG9uX2Rpc2NvdW50KSArIHBhcnNlRmxvYXQob3JkZXIuZGlzY291bnQpKSkgfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnRfd2VpZ2h0XzQwMFwiPnt7IGxhbmcudGF4IH19IDxzcGFuPnt7IHByaWNlRm9ybWF0KG9yZGVyLnRvdGFsX3RheCkgfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdyYW5kX3RvdGFsX3N0eWxlXCI+e3sgbGFuZy5ncmFuZF90b3RhbCB9fSA8c3Bhbj57eyBwcmljZUZvcm1hdChvcmRlci50b3RhbF9wYXlhYmxlKSB9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci10b3RhbFwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgbGFuZy50b3RhbCB9fSA8c3Bhbj57eyBwcmljZUZvcm1hdChvcmRlci50b3RhbF9wYXlhYmxlKSB9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuXHRcdFx0XHRcdFx0PGxvYWRpbmdfYnV0dG9uIHYtaWY9XCJsb2FkaW5nXCIgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5J1wiPjwvbG9hZGluZ19idXR0b24+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB2LWVsc2UgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJkb3dubG9hZChvcmRlci5pZCwgb3JkZXIuY29kZSlcIj57eyBsYW5nLmRvd25sb2FkIH19IHt7IGxhbmcuaW52b2ljZSB9fTwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj4gPC9zZWN0aW9uXHJcblx0XHQ+PCEtLSAvLnRyYWNrLW9yZGVyIC0tPlxyXG5cdFx0PHNlY3Rpb24gdi1lbHNlLWlmPVwic2hpbW1lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxzaGltbWVyIGNsYXNzPVwibWItM1wiIHYtZm9yPVwiKG9yZGVyLCBpbmRleCkgaW4gM1wiIDprZXk9XCJpbmRleFwiIDpoZWlnaHQ9XCIyMFwiPjwvc2hpbW1lcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN0ZXAtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzaGltbWVyIDpoZWlnaHQ9XCI1MFwiPjwvc2hpbW1lcj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvdW50LXRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzaGltbWVyIDpoZWlnaHQ9XCIxNTVcIj48L3NoaW1tZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb2Zmc2V0LW1kLThcIj5cclxuXHRcdFx0XHRcdFx0PHNoaW1tZXIgOmhlaWdodD1cIjI4OFwiPjwvc2hpbW1lcj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj4gPC9kaXZcclxuXHQ+PCEtLSAvLnNnLXBhZ2UtY29udGVudCAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBzaGltbWVyIGZyb20gXCIuLi8uLi9wYXJ0aWFscy9zaGltbWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogXCJnZXQtaW52b2ljZS52dWVcIixcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b3JkZXJzOiBbXSxcclxuXHRcdFx0aXNfc2hpbW1lcjogZmFsc2UsXHJcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLmdldEludm9pY2VzKCk7XHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRzaGltbWVyLFxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdHNoaW1tZXIoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5tb2R1bGUuc2hpbW1lcjtcclxuXHRcdH0sXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRJbnZvaWNlcygpIHtcclxuXHRcdFx0dGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdFx0bGV0IHVybCA9IHRoaXMuZ2V0VXJsKFwidXNlci9nZXQtaW52b2ljZXMvXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMudHJ4X2lkKTtcclxuXHRcdFx0YXhpb3NcclxuXHRcdFx0XHQuZ2V0KHVybClcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNfc2hpbW1lciA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRQcm9ncmVzcy5mYWlsKCk7XHJcblx0XHRcdFx0XHRcdHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKyBcIiAhIVwiKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmRhdGEuZ3Vlc3QpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaChcInVzZXJcIiwgcmVzcG9uc2UuZGF0YS51c2VyKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaChcImNvbXBhcmVMaXN0XCIsIHJlc3BvbnNlLmRhdGEuY29tcGFyZV9saXN0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ3aXNobGlzdHNcIiwgcmVzcG9uc2UuZGF0YS53aXNobGlzdHMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaChcImNhcnRzXCIsIDApO1xyXG5cclxuXHRcdFx0XHRcdFx0bGV0IG9yZGVycyA9IHJlc3BvbnNlLmRhdGEub3JkZXJzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9yZGVycyA9IG9yZGVycztcclxuXHRcdFx0XHRcdFx0aWYgKG9yZGVycykge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBheW1lbnRfZm9ybS5zdWJfdG90YWwgKz0gb3JkZXJzW2ldLnRvdGFsX2Ftb3VudDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGF5bWVudF9mb3JtLmRpc2NvdW50X29mZmVyICs9IG9yZGVyc1tpXS5kaXNjb3VudDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGF5bWVudF9mb3JtLnNoaXBwaW5nX3RheCArPSBvcmRlcnNbaV0uc2hpcHBpbmdfY29zdDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGF5bWVudF9mb3JtLnRheCArPSBvcmRlcnNbaV0udG90YWxfdGF4O1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGF5bWVudF9mb3JtLmNvdXBvbl9kaXNjb3VudCArPSBvcmRlcnNbaV0uY291cG9uX2Rpc2NvdW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50cnhfaWQgPSBvcmRlcnNbaV0udHJ4X2lkO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKG9yZGVyc1swXS5pc19tYWlsZWQgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZW5kTWFpbCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYXltZW50X2Zvcm0udG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wYXltZW50X2Zvcm0uc3ViX3RvdGFsICtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGF5bWVudF9mb3JtLnRheCArXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBheW1lbnRfZm9ybS5zaGlwcGluZ190YXggLVxyXG5cdFx0XHRcdFx0XHRcdFx0KHRoaXMucGF5bWVudF9mb3JtLmRpc2NvdW50X29mZmVyICsgdGhpcy5wYXltZW50X2Zvcm0uY291cG9uX2Rpc2NvdW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0c2VuZE1haWwoKSB7XHJcblx0XHRcdGxldCB1cmwgPSB0aGlzLmdldFVybChcInVzZXIvbWFpbC1vcmRlci9cIiArIHRoaXMudHJ4X2lkKTtcclxuXHRcdFx0YXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQvLyB0aGlzLnNlbmRNYWlsU2VsbGVyKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHNlbmRNYWlsU2VsbGVyKCkge1xyXG5cdFx0XHRsZXQgdXJsID0gdGhpcy5nZXRVcmwoXCJ1c2VyL21haWwtb3JkZXItc2VsbGVyL1wiICsgdGhpcy50cnhfaWQpO1xyXG5cdFx0XHRheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge30pO1xyXG5cdFx0fSxcclxuXHRcdGRvd25sb2FkKGlkLCBjb2RlKSB7XHJcblx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGF4aW9zXHJcblx0XHRcdFx0LmdldCh0aGlzLmdldFVybChcInVzZXIvaW52b2ljZS9kb3dubG9hZC9cIiArIGlkKSwgeyByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIiB9KVxyXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHQxO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0dG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IsIHRoaXMubGFuZy5FcnJvciArIFwiICEhXCIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bGV0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KTtcclxuXHRcdFx0XHRcdFx0bGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdFx0XHRcdFx0bGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblx0XHRcdFx0XHRcdGxpbmsuZG93bmxvYWQgPSBjb2RlICsgXCIucGRmXCI7XHJcblx0XHRcdFx0XHRcdGxpbmsuY2xpY2soKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dG9hc3RyLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQsIHRoaXMubGFuZy5FcnJvciArIFwiICEhXCIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxpbWcgOnNyYz1cImdldFVybCgncHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZXZpZXcuanBnJylcIiBhbHQ9XCJzaGltbWVyXCJcclxuICAgICAgIGNsYXNzPVwic2hpbW1lclwiIHYtYmluZDpzdHlsZT0gXCJbaGVpZ2h0ID8gc3R5bGUgOiBudWxsXVwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJzaGltbWVyLnZ1ZVwiLFxyXG4gICAgcHJvcHM6IFsnaGVpZ2h0J10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5oZWlnaHQrJ3B4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2dldC1pbnZvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTkxM2YwMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9nZXQtaW52b2ljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dldC1pbnZvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGVjb21tZXJjZVxcXFx5b29yaV9yZWxlYXNlXzE1M1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OTkxM2YwMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OTkxM2YwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OTkxM2YwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZ2V0LWludm9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OTEzZjAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU5OTEzZjAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy91c2VyL2dldC1pbnZvaWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ0YWRhOTI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ0YWRhOTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ0YWRhOTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFkYTkyNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NGFkYTkyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2V0LWludm9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2V0LWludm9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2V0LWludm9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OTEzZjAyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZy1wYWdlLWNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLmlzX3NoaW1tZXJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhZnRlci10cmFjay1vcmRlciB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5vcmRlcnMsIGZ1bmN0aW9uIChvcmRlciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZvaWNlX2JvcmRlciBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcudGhhbmtfeW91X2Zvcl9wdXJjaGFzZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmFfY29weV9zdW1tYXJ5X2hhc19iZWVuX3NlbnRfdG8pICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG9cIiArIF92bS5hdXRoVXNlci5lbWFpbCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5hdXRoVXNlci5lbWFpbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLm9yZGVyX2lkKSArIFwiIFwiICsgX3ZtLl9zKG9yZGVyLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RlcC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5wcm9kdWN0X25hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucHJpY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcucXVhbnRpdHkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuc3ViX3RvdGFsKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChvcmRlci50YXhfbWV0aG9kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIudGF4X21ldGhvZC52YXRfdGF4X3R5cGUgPT0gXCJwcm9kdWN0X2Jhc2VcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLnRheF9tZXRob2QgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLnRheF9tZXRob2QudmF0X3RheF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50YXgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5zaGlwcGluZ19tZXRob2QgPT0gXCJwcm9kdWN0X2Jhc2VcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhb3JkZXIuc2hpcHBpbmdfbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19jb3N0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuZGlzY291bnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuaXNfY291cG9uX3N5c3RlbV9hY3RpdmUgPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5jb3Vwb25fZGlzY291bnQgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5jb3Vwb25fZGlzY291bnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50b3RhbF9hbW91bnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLm9yZGVyX2RldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvcmRlcl9kZXRhaWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IFwib3JkZXJcIiArIGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhvcmRlcl9kZXRhaWwucHJvZHVjdF9uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhvcmRlcl9kZXRhaWwudmFyaWF0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcmljZUZvcm1hdChvcmRlcl9kZXRhaWwucHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyX2RldGFpbC5xdWFudGl0eSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcmljZUZvcm1hdChvcmRlcl9kZXRhaWwucHJpY2UpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBYIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcmRlcl9kZXRhaWwucXVhbnRpdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgID0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnByaWNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIudGF4X21ldGhvZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci50YXhfbWV0aG9kLnZhdF90YXhfdHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdF9iYXNlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhb3JkZXIudGF4X21ldGhvZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLnRheF9tZXRob2QudmF0X3RheF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnRheCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC50YXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBYIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3JkZXJfZGV0YWlsLnF1YW50aXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwudGF4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwucXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnRheCAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5zaGlwcGluZ19tZXRob2QgPT0gXCJwcm9kdWN0X2Jhc2VcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLnNoaXBwaW5nX21ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5zaGlwcGluZ19jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXBlbmRfb25fcXVhbnRpdHkgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnNoaXBwaW5nX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGVyX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBYIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3JkZXJfZGV0YWlsLnF1YW50aXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgPSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwuc2hpcHBpbmdfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3RhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwuc2hpcHBpbmdfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdGFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwuZGlzY291bnQgKiBvcmRlcl9kZXRhaWwucXVhbnRpdHkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KG9yZGVyX2RldGFpbC5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBYIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3JkZXJfZGV0YWlsLnF1YW50aXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgPSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwuZGlzY291bnQgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KDApKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuaXNfY291cG9uX3N5c3RlbV9hY3RpdmUgPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuY291cG9uX2Rpc2NvdW50ID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5jb3Vwb25fZGlzY291bnQuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1lbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQob3JkZXJfZGV0YWlsLnByaWNlKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGV0YWlsLnF1YW50aXR5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG9yZGVyX2RldGFpbC50YXgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5xdWFudGl0eSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5zaGlwcGluZ19jb3N0LnRvdGFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChvcmRlcl9kZXRhaWwuZGlzY291bnQpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RldGFpbC5xdWFudGl0eSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kZXRhaWwuY291cG9uX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5hY2NvdW50X2RldGFpbHMpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0ZXh0LXN0YXJ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JhbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm9yZGVyX2NvZGUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5fbmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5fZW1haWwpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19hZGRyZXNzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmJpbGxpbmdfYWRkcmVzcykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihfdm0uX3Mob3JkZXIuY29kZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF1dGhVc2VyLmZ1bGxfbmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdXRoVXNlci5lbWFpbCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3JkZXIuc2hpcHBpbmdfYWRkcmVzcy5hZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyLmJpbGxpbmdfYWRkcmVzcy5hZGRyZXNzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5vcmRlcl9kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5vcmRlcl9zdGF0dXMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5bWVudF9zdGF0dXMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcucGF5bWVudF90eXBlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KF92bS5fcyhvcmRlci5kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyLmRlbGl2ZXJ5X3N0YXR1cykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyLnBheW1lbnRfc3RhdHVzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXBpdGFsaXplXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIucGF5bWVudF90eXBlLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IG9mZnNldC1tZC04XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcmRlci1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNnLWNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JhbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuc3VidG90YWwpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJpY2VGb3JtYXQob3JkZXIuc3ViX3RvdGFsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnRheF90eXBlID09IFwiYmVmb3JlX3RheFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci52YXRfdGF4X3R5cGUgPT0gXCJwcm9kdWN0X2Jhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50YXgpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJpY2VGb3JtYXQob3JkZXIudG90YWxfdGF4KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxhbmcuZGlzY291bnQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByaWNlRm9ybWF0KG9yZGVyLmRpc2NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5zaGlwcGluZ19jb3N0ICE9IFwiYXJlYV9iYXNlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGUubmFtZSAhPSBcImNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5zaGlwcGluZ19jb3N0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KG9yZGVyLnNoaXBwaW5nX2Nvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuY291cG9uX3N5c3RlbSA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLmNvdXBvbl9kaXNjb3VudCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmljZUZvcm1hdChvcmRlci5jb3Vwb25fZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50YXhfdHlwZSA9PSBcImFmdGVyX3RheFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnZhdF9hbmRfdGF4X3R5cGUgPT0gXCJvcmRlcl9iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnRfd2VpZ2h0XzQwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRvdGFsKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByaWNlRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChvcmRlci5zdWJfdG90YWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5zaGlwcGluZ19jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5jb3Vwb25fZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChvcmRlci5kaXNjb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250X3dlaWdodF80MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFuZy50YXgpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQob3JkZXIudG90YWxfdGF4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmFuZF90b3RhbF9zdHlsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuZ3JhbmRfdG90YWwpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci50b3RhbF9wYXlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyLXRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnRvdGFsKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VGb3JtYXQob3JkZXIudG90YWxfcGF5YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibG9hZGluZ19idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc19uYW1lOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25sb2FkKG9yZGVyLmlkLCBvcmRlci5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmRvd25sb2FkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5sYW5nLmludm9pY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgOiBfdm0uc2hpbW1lclxuICAgICAgPyBfYyhcInNlY3Rpb25cIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZS10aXRsZVwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbCgzLCBmdW5jdGlvbiAob3JkZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic2hpbW1lclwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiAyMCB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGVwLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcInNoaW1tZXJcIiwgeyBhdHRyczogeyBoZWlnaHQ6IDUwIH0gfSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwic2hpbW1lclwiLCB7IGF0dHJzOiB7IGhlaWdodDogMTU1IH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgb2Zmc2V0LW1kLThcIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInNoaW1tZXJcIiwgeyBhdHRyczogeyBoZWlnaHQ6IDI4OCB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJpbWdcIiwge1xuICAgIHN0YXRpY0NsYXNzOiBcInNoaW1tZXJcIixcbiAgICBzdHlsZTogW192bS5oZWlnaHQgPyBfdm0uc3R5bGUgOiBudWxsXSxcbiAgICBhdHRyczoge1xuICAgICAgc3JjOiBfdm0uZ2V0VXJsKFwicHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZXZpZXcuanBnXCIpLFxuICAgICAgYWx0OiBcInNoaW1tZXJcIixcbiAgICB9LFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==