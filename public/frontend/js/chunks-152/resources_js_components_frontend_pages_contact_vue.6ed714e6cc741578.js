"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_contact_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/shimmer */ "./resources/js/components/frontend/partials/shimmer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "contact",
  components: {
    shimmer: _partials_shimmer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var that = this;

    if (!that.contact) {
      that.$store.dispatch('contactPage');
    }

    if (that.settings.map_api_key) {
      var script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + that.settings.map_api_key + '&callback=initMap&v=weekly';
      script.async = true;

      window.initMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 23.822141,
            lng: 90.440813
          },
          zoom: parseInt(that.settings.zoom_level)
        });
        new google.maps.Marker({
          position: new google.maps.LatLng(23.822141, 90.440813),
          map: map,
          title: 'Cryptox'
        });
      };

      document.head.appendChild(script);
    }
  },
  data: function data() {
    return {
      loading: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      map: ''
    };
  },
  computed: {
    contact: function contact() {
      return this.$store.getters.getContactPage;
    },
    shimmer: function shimmer() {
      return this.$store.state.module.shimmer;
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      var url = this.getUrl('send-message');
      axios.post(url, this.form).then(function (response) {
        _this.loading = false;

        if (response.data.success) {
          toastr.success(_this.lang.message_sent_successfully, _this.lang.Success + ' !!');
          _this.errors = [];
          _this.form.email = '';
          _this.form.name = '';
          _this.form.subject = '';
          _this.form.message = '';
        } else {
          if (response.data.error) {
            toastr.error(response.data.error, _this.lang.Error + ' !!');
          }
        }
      })["catch"](function (error) {
        _this.loading = false;

        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#map {\r\n  height: 100%;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/frontend/pages/contact.vue"],"names":[],"mappings":";AAkLA;EACA,YAAA;AACA","sourcesContent":["<template>\r\n  <div class=\"sg-page-content\">\r\n    <section class=\"contact-section\">\r\n      <div class=\"container\">\r\n        <div class=\"page-title\">\r\n          <h1>{{ contact.title }}</h1>\r\n        </div>\r\n        <div class=\"contact-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"title b-0\">\r\n                <h1>{{ lang.send_message }}</h1>\r\n              </div>\r\n              <form @click.prevent>\r\n                  <div class=\"form-group\">\r\n                    <label>{{ lang.name }}</label>\r\n                    <input type=\"text\" v-model=\"form.name\" class=\"form-control\"\r\n                           :class=\"{ 'error_border' : errors.name }\" :placeholder=\"lang.name\">\r\n                  </div>\r\n                  <span class=\"validation_error\"\r\n                        v-if=\"errors.name\">{{ errors.name[0] }}</span>\r\n                  <div class=\"form-group\">\r\n                    <label>{{ lang.email }}</label>\r\n                    <input type=\"email\" v-model=\"form.email\" class=\"form-control\"\r\n                           :class=\"{ 'error_border' : errors.email }\" :placeholder=\"lang.email\">\r\n                  </div>\r\n                  <span class=\"validation_error\"\r\n                        v-if=\"errors.email\">{{ errors.email[0] }}</span>\r\n                  <div class=\"form-group\">\r\n                    <label>{{ lang.subject }}</label>\r\n                    <input type=\"text\" v-model=\"form.subject\" class=\"form-control\"\r\n                           :class=\"{ 'error_border' : errors.subject }\" :placeholder=\"lang.subject\">\r\n                  </div>\r\n                  <span class=\"validation_error\"\r\n                        v-if=\"errors.subject\">{{ errors.subject[0] }}</span>\r\n                  <div class=\"form-group\">\r\n                    <label>{{ lang.message }}</label>\r\n                    <textarea class=\"form-control\" v-model=\"form.message\"\r\n                              :class=\"{ 'error_border' : errors.message }\"\r\n                              :placeholder=\"lang.write_your_message\"></textarea>\r\n                  </div>\r\n                  <span class=\"validation_error\"\r\n                        v-if=\"errors.message\">{{ errors.message[0] }}</span>\r\n                  <div>\r\n                    <loading_button v-if=\"loading\" :class_name=\"'btn btn-primary'\"></loading_button>\r\n                    <button type=\"submit\" v-else @click=\"submit\" class=\"btn btn-primary\">\r\n                      {{ lang.send }}\r\n                    </button>\r\n                  </div>\r\n              </form><!-- /.contact-form -->\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"contact-info\">\r\n                <div class=\"title b-0\">\r\n                  <h1>{{ lang.reach_on_us }}</h1>\r\n                </div>\r\n                <div class=\"contact-list\">\r\n                  <ul class=\"global-list\">\r\n                    <li v-if=\"contact.address\"><span class=\"mdi mdi-name mdi-map-marker\"></span>{{ contact.address }}\r\n                    </li>\r\n                    <li v-if=\"contact.phone || contact.optional_phone\"><span class=\"mdi mdi-name mdi-phone\"></span> <a\r\n                        :href=\"'tel:'+contact.phone\">{{ contact.phone }}</a> <a\r\n                        :href=\"'tel:'+contact.optional_phone\">{{ contact.optional_phone }}</a></li>\r\n                    <li v-if=\"contact.email || contact.optional_email\"><span class=\"mdi mdi-name mdi-email\"></span> <a\r\n                        :href=\"'mailto:'+contact.email\">{{ contact.email }}</a> <a\r\n                        :href=\"'mailto:'+contact.optional_email\">{{ contact.optional_email }}</a></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"social\"\r\n                     v-if=\"settings.show_social_links && settings.show_social_links == 1\">\r\n                  <div class=\"title b-0 mb-0\">\r\n                    <h1>{{ lang.follow_us }}</h1>\r\n                  </div>\r\n                  <ul class=\"global-list\">\r\n                    <li v-if=\"settings.facebook_link\"><a :href=\"settings.facebook_link\"><span\r\n                        class=\"mdi mdi-name mdi-facebook\"></span></a></li>\r\n                    <li v-if=\"settings.twitter_link\"><a :href=\"settings.twitter_link\"><span\r\n                        class=\"mdi mdi-name mdi-twitter\"></span></a></li>\r\n                    <li v-if=\"settings.linkedin_link\"><a :href=\"settings.linkedin_link\"><span\r\n                        class=\"mdi mdi-linkedin\"></span></a></li>\r\n                    <li v-if=\"settings.instagram_link\"><a :href=\"settings.instagram_link\"><span\r\n                        class=\"mdi mdi-instagram\"></span></a></li>\r\n                    <li v-if=\"settings.youtube_link\"><a :href=\"settings.youtube_link\"><span\r\n                        class=\"mdi mdi-youtube\"></span></a></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"map\" id=\"map\" style=\"height: 250px\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div><!-- /.contact-content -->\r\n      </div><!-- /.container -->\r\n    </section><!-- /.contact-section -->\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport shimmer from \"../partials/shimmer\";\r\n\r\nexport default {\r\n  name: \"contact\",\r\n  components: {\r\n    shimmer\r\n  },\r\n  mounted() {\r\n    let that = this;\r\n    if (!that.contact) {\r\n      that.$store.dispatch('contactPage');\r\n    }\r\n    if (that.settings.map_api_key) {\r\n      var script = document.createElement('script');\r\n      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + that.settings.map_api_key + '&callback=initMap&v=weekly';\r\n      script.async = true;\r\n      window.initMap = function () {\r\n        let map = new google.maps.Map(document.getElementById('map'), {\r\n          center: {lat: 23.822141, lng: 90.440813},\r\n          zoom: parseInt(that.settings.zoom_level)\r\n        });\r\n        new google.maps.Marker({\r\n          position: new google.maps.LatLng(23.822141, 90.440813),\r\n          map: map,\r\n          title: 'Cryptox'\r\n        });\r\n      };\r\n      document.head.appendChild(script);\r\n    }\r\n  },\r\n  data() {\r\n    return {\r\n      loading: false,\r\n      form: {\r\n        name: \"\",\r\n        email: \"\",\r\n        subject: \"\",\r\n        message: \"\"\r\n      },\r\n      map: '',\r\n    }\r\n  },\r\n\r\n  computed: {\r\n    contact() {\r\n      return this.$store.getters.getContactPage;\r\n    },\r\n    shimmer() {\r\n      return this.$store.state.module.shimmer\r\n    }\r\n  },\r\n  methods: {\r\n    submit() {\r\n      this.loading = true\r\n      let url = this.getUrl('send-message');\r\n      axios.post(url, this.form)\r\n          .then((response) => {\r\n            this.loading = false;\r\n            if (response.data.success) {\r\n              toastr.success(this.lang.message_sent_successfully, this.lang.Success + ' !!');\r\n              this.errors = [];\r\n              this.form.email = '';\r\n              this.form.name = '';\r\n              this.form.subject = '';\r\n              this.form.message = '';\r\n            } else {\r\n              if (response.data.error) {\r\n                toastr.error(response.data.error, this.lang.Error + ' !!');\r\n              }\r\n            }\r\n          }).catch((error) => {\r\n        this.loading = false;\r\n        if (error.response.status == 422) {\r\n          this.errors = error.response.data.errors;\r\n        }\r\n      })\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style>\r\n#map {\r\n  height: 100%;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contact.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/frontend/pages/contact.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/frontend/pages/contact.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=a5e250ba& */ "./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba&");
/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/contact.vue"
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

/***/ "./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contact.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_a5e250ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contact.vue?vue&type=template&id=a5e250ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/contact.vue?vue&type=template&id=a5e250ba& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "contact-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "page-title" }, [
          _c("h1", [_vm._v(_vm._s(_vm.contact.title))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "contact-content" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "title b-0" }, [
                _c("h1", [_vm._v(_vm._s(_vm.lang.send_message))]),
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                    },
                  },
                },
                [
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
                  _vm._v(" "),
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
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(_vm._s(_vm.lang.subject))]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.subject,
                          expression: "form.subject",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.subject },
                      attrs: { type: "text", placeholder: _vm.lang.subject },
                      domProps: { value: _vm.form.subject },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "subject", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.subject
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.subject[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v(_vm._s(_vm.lang.message))]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.message,
                          expression: "form.message",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_border: _vm.errors.message },
                      attrs: { placeholder: _vm.lang.write_your_message },
                      domProps: { value: _vm.form.message },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "message", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.errors.message
                    ? _c("span", { staticClass: "validation_error" }, [
                        _vm._v(_vm._s(_vm.errors.message[0])),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
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
                              on: { click: _vm.submit },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.lang.send) +
                                  "\n                  "
                              ),
                            ]
                          ),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "contact-info" }, [
                _c("div", { staticClass: "title b-0" }, [
                  _c("h1", [_vm._v(_vm._s(_vm.lang.reach_on_us))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "contact-list" }, [
                  _c("ul", { staticClass: "global-list" }, [
                    _vm.contact.address
                      ? _c("li", [
                          _c("span", {
                            staticClass: "mdi mdi-name mdi-map-marker",
                          }),
                          _vm._v(
                            _vm._s(_vm.contact.address) + "\n                  "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.contact.phone || _vm.contact.optional_phone
                      ? _c("li", [
                          _c("span", { staticClass: "mdi mdi-name mdi-phone" }),
                          _vm._v(" "),
                          _c(
                            "a",
                            { attrs: { href: "tel:" + _vm.contact.phone } },
                            [_vm._v(_vm._s(_vm.contact.phone))]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "tel:" + _vm.contact.optional_phone,
                              },
                            },
                            [_vm._v(_vm._s(_vm.contact.optional_phone))]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.contact.email || _vm.contact.optional_email
                      ? _c("li", [
                          _c("span", { staticClass: "mdi mdi-name mdi-email" }),
                          _vm._v(" "),
                          _c(
                            "a",
                            { attrs: { href: "mailto:" + _vm.contact.email } },
                            [_vm._v(_vm._s(_vm.contact.email))]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "mailto:" + _vm.contact.optional_email,
                              },
                            },
                            [_vm._v(_vm._s(_vm.contact.optional_email))]
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _vm.settings.show_social_links &&
                _vm.settings.show_social_links == 1
                  ? _c("div", { staticClass: "social" }, [
                      _c("div", { staticClass: "title b-0 mb-0" }, [
                        _c("h1", [_vm._v(_vm._s(_vm.lang.follow_us))]),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "global-list" }, [
                        _vm.settings.facebook_link
                          ? _c("li", [
                              _c(
                                "a",
                                { attrs: { href: _vm.settings.facebook_link } },
                                [
                                  _c("span", {
                                    staticClass: "mdi mdi-name mdi-facebook",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.twitter_link
                          ? _c("li", [
                              _c(
                                "a",
                                { attrs: { href: _vm.settings.twitter_link } },
                                [
                                  _c("span", {
                                    staticClass: "mdi mdi-name mdi-twitter",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.linkedin_link
                          ? _c("li", [
                              _c(
                                "a",
                                { attrs: { href: _vm.settings.linkedin_link } },
                                [
                                  _c("span", {
                                    staticClass: "mdi mdi-linkedin",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.instagram_link
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: { href: _vm.settings.instagram_link },
                                },
                                [
                                  _c("span", {
                                    staticClass: "mdi mdi-instagram",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.settings.youtube_link
                          ? _c("li", [
                              _c(
                                "a",
                                { attrs: { href: _vm.settings.youtube_link } },
                                [_c("span", { staticClass: "mdi mdi-youtube" })]
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", {
                  staticClass: "map",
                  staticStyle: { height: "250px" },
                  attrs: { id: "map" },
                }),
              ]),
            ]),
          ]),
        ]),
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL2Zyb250ZW5kL2pzL2NodW5rcy0xNTIvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfZnJvbnRlbmRfcGFnZXNfY29udGFjdF92dWUuNmVkNzE0ZTZjYzc0MTU3OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlHQTtBQUVBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLFNBTEEscUJBS0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFFQTtBQUZBO0FBSUE7QUFDQSxnRUFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLE9BVkE7O0FBV0E7QUFDQTtBQUNBLEdBM0JBO0FBNEJBLE1BNUJBLGtCQTRCQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBLGdCQURBO0FBRUEsaUJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsT0FGQTtBQVFBO0FBUkE7QUFVQSxHQXZDQTtBQXlDQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxXQUpBLHFCQUlBO0FBQ0E7QUFDQTtBQU5BLEdBekNBO0FBaURBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxpQ0FDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FmQSxXQWVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkE7QUF6QkE7QUFqREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQSxxQkFEQTtBQUVBLG1CQUZBO0FBR0EsTUFIQSxr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c291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NvbnRhY3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9jb250YWN0LnZ1ZT9lOWIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NvbnRhY3QudnVlPzVjMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvY29udGFjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvY29udGFjdC52dWU/OGQ4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYXJ0aWFscy9zaGltbWVyLnZ1ZT8yNDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NvbnRhY3QudnVlPzBiYTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFnZXMvY29udGFjdC52dWU/YjZlMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9jb250YWN0LnZ1ZT8yNzkwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhcnRpYWxzL3NoaW1tZXIudnVlPzg2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzZy1wYWdlLWNvbnRlbnRcIj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGFjdC1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPnt7IGNvbnRhY3QudGl0bGUgfX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcuc2VuZF9tZXNzYWdlIH19PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBAY2xpY2sucHJldmVudD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5uYW1lIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLm5hbWUgfVwiIDpwbGFjZWhvbGRlcj1cImxhbmcubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5uYW1lXCI+e3sgZXJyb3JzLm5hbWVbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcuZW1haWwgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3JfYm9yZGVyJyA6IGVycm9ycy5lbWFpbCB9XCIgOnBsYWNlaG9sZGVyPVwibGFuZy5lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5lbWFpbFwiPnt7IGVycm9ycy5lbWFpbFswXSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5zdWJqZWN0IH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5zdWJqZWN0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLnN1YmplY3QgfVwiIDpwbGFjZWhvbGRlcj1cImxhbmcuc3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5zdWJqZWN0XCI+e3sgZXJyb3JzLnN1YmplY3RbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcubWVzc2FnZSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImZvcm0ubWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMubWVzc2FnZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwibGFuZy53cml0ZV95b3VyX21lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5tZXNzYWdlXCI+e3sgZXJyb3JzLm1lc3NhZ2VbMF0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmdfYnV0dG9uIHYtaWY9XCJsb2FkaW5nXCIgOmNsYXNzX25hbWU9XCInYnRuIGJ0bi1wcmltYXJ5J1wiPjwvbG9hZGluZ19idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdi1lbHNlIEBjbGljaz1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBsYW5nLnNlbmQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPjwhLS0gLy5jb250YWN0LWZvcm0gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57eyBsYW5nLnJlYWNoX29uX3VzIH19PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnbG9iYWwtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwiY29udGFjdC5hZGRyZXNzXCI+PHNwYW4gY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLW1hcC1tYXJrZXJcIj48L3NwYW4+e3sgY29udGFjdC5hZGRyZXNzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cImNvbnRhY3QucGhvbmUgfHwgY29udGFjdC5vcHRpb25hbF9waG9uZVwiPjxzcGFuIGNsYXNzPVwibWRpIG1kaS1uYW1lIG1kaS1waG9uZVwiPjwvc3Bhbj4gPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCIndGVsOicrY29udGFjdC5waG9uZVwiPnt7IGNvbnRhY3QucGhvbmUgfX08L2E+IDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiJ3RlbDonK2NvbnRhY3Qub3B0aW9uYWxfcGhvbmVcIj57eyBjb250YWN0Lm9wdGlvbmFsX3Bob25lIH19PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJjb250YWN0LmVtYWlsIHx8IGNvbnRhY3Qub3B0aW9uYWxfZW1haWxcIj48c3BhbiBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktZW1haWxcIj48L3NwYW4+IDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiJ21haWx0bzonK2NvbnRhY3QuZW1haWxcIj57eyBjb250YWN0LmVtYWlsIH19PC9hPiA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cIidtYWlsdG86Jytjb250YWN0Lm9wdGlvbmFsX2VtYWlsXCI+e3sgY29udGFjdC5vcHRpb25hbF9lbWFpbCB9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNldHRpbmdzLnNob3dfc29jaWFsX2xpbmtzICYmIHNldHRpbmdzLnNob3dfc29jaWFsX2xpbmtzID09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGItMCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcuZm9sbG93X3VzIH19PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdsb2JhbC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5mYWNlYm9va19saW5rXCI+PGEgOmhyZWY9XCJzZXR0aW5ncy5mYWNlYm9va19saW5rXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGkgbWRpLW5hbWUgbWRpLWZhY2Vib29rXCI+PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MudHdpdHRlcl9saW5rXCI+PGEgOmhyZWY9XCJzZXR0aW5ncy50d2l0dGVyX2xpbmtcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktbmFtZSBtZGktdHdpdHRlclwiPjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cInNldHRpbmdzLmxpbmtlZGluX2xpbmtcIj48YSA6aHJlZj1cInNldHRpbmdzLmxpbmtlZGluX2xpbmtcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktbGlua2VkaW5cIj48L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XCJzZXR0aW5ncy5pbnN0YWdyYW1fbGlua1wiPjxhIDpocmVmPVwic2V0dGluZ3MuaW5zdGFncmFtX2xpbmtcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGktaW5zdGFncmFtXCI+PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVwic2V0dGluZ3MueW91dHViZV9saW5rXCI+PGEgOmhyZWY9XCJzZXR0aW5ncy55b3V0dWJlX2xpbmtcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kaSBtZGkteW91dHViZVwiPjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiIGlkPVwibWFwXCIgc3R5bGU9XCJoZWlnaHQ6IDI1MHB4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhY3QtY29udGVudCAtLT5cclxuICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lciAtLT5cclxuICAgIDwvc2VjdGlvbj48IS0tIC8uY29udGFjdC1zZWN0aW9uIC0tPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHNoaW1tZXIgZnJvbSBcIi4uL3BhcnRpYWxzL3NoaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImNvbnRhY3RcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBzaGltbWVyXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGF0LmNvbnRhY3QpIHtcclxuICAgICAgdGhhdC4kc3RvcmUuZGlzcGF0Y2goJ2NvbnRhY3RQYWdlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhhdC5zZXR0aW5ncy5tYXBfYXBpX2tleSkge1xyXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0nICsgdGhhdC5zZXR0aW5ncy5tYXBfYXBpX2tleSArICcmY2FsbGJhY2s9aW5pdE1hcCZ2PXdlZWtseSc7XHJcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgICAgY2VudGVyOiB7bGF0OiAyMy44MjIxNDEsIGxuZzogOTAuNDQwODEzfSxcclxuICAgICAgICAgIHpvb206IHBhcnNlSW50KHRoYXQuc2V0dGluZ3Muem9vbV9sZXZlbClcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDIzLjgyMjE0MSwgOTAuNDQwODEzKSxcclxuICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgdGl0bGU6ICdDcnlwdG94J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBtYXA6ICcnLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjb250YWN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDb250YWN0UGFnZTtcclxuICAgIH0sXHJcbiAgICBzaGltbWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubW9kdWxlLnNoaW1tZXJcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoJ3NlbmQtbWVzc2FnZScpO1xyXG4gICAgICBheGlvcy5wb3N0KHVybCwgdGhpcy5mb3JtKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3ModGhpcy5sYW5nLm1lc3NhZ2Vfc2VudF9zdWNjZXNzZnVsbHksIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLmVtYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJztcclxuICAgICAgICAgICAgICB0aGlzLmZvcm0uc3ViamVjdCA9ICcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5tZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yLCB0aGlzLmxhbmcuRXJyb3IgKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQyMikge1xyXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbiNtYXAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGltZyA6c3JjPVwiZ2V0VXJsKCdwdWJsaWMvaW1hZ2VzL2RlZmF1bHQvcHJldmlldy5qcGcnKVwiIGFsdD1cInNoaW1tZXJcIlxyXG4gICAgICAgY2xhc3M9XCJzaGltbWVyXCIgdi1iaW5kOnN0eWxlPSBcIltoZWlnaHQgPyBzdHlsZSA6IG51bGxdXCI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInNoaW1tZXIudnVlXCIsXHJcbiAgICBwcm9wczogWydoZWlnaHQnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLmhlaWdodCsncHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI21hcCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zyb250ZW5kL3BhZ2VzL2NvbnRhY3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrTEE7RUFDQSxZQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic2ctcGFnZS1jb250ZW50XFxcIj5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRhY3Qtc2VjdGlvblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICA8aDE+e3sgY29udGFjdC50aXRsZSB9fTwvaDE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGl0bGUgYi0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcuc2VuZF9tZXNzYWdlIH19PC9oMT5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPGZvcm0gQGNsaWNrLnByZXZlbnQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgbGFuZy5uYW1lIH19PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJmb3JtLm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdlcnJvcl9ib3JkZXInIDogZXJyb3JzLm5hbWUgfVxcXCIgOnBsYWNlaG9sZGVyPVxcXCJsYW5nLm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2YWxpZGF0aW9uX2Vycm9yXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImVycm9ycy5uYW1lXFxcIj57eyBlcnJvcnMubmFtZVswXSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLmVtYWlsIH19PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgdi1tb2RlbD1cXFwiZm9ybS5lbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMuZW1haWwgfVxcXCIgOnBsYWNlaG9sZGVyPVxcXCJsYW5nLmVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmFsaWRhdGlvbl9lcnJvclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJlcnJvcnMuZW1haWxcXFwiPnt7IGVycm9ycy5lbWFpbFswXSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBsYW5nLnN1YmplY3QgfX08L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcImZvcm0uc3ViamVjdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2Vycm9yX2JvcmRlcicgOiBlcnJvcnMuc3ViamVjdCB9XFxcIiA6cGxhY2Vob2xkZXI9XFxcImxhbmcuc3ViamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZhbGlkYXRpb25fZXJyb3JcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiZXJyb3JzLnN1YmplY3RcXFwiPnt7IGVycm9ycy5zdWJqZWN0WzBdIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGxhbmcubWVzc2FnZSB9fTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdi1tb2RlbD1cXFwiZm9ybS5tZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnZXJyb3JfYm9yZGVyJyA6IGVycm9ycy5tZXNzYWdlIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJsYW5nLndyaXRlX3lvdXJfbWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmFsaWRhdGlvbl9lcnJvclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJlcnJvcnMubWVzc2FnZVxcXCI+e3sgZXJyb3JzLm1lc3NhZ2VbMF0gfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nX2J1dHRvbiB2LWlmPVxcXCJsb2FkaW5nXFxcIiA6Y2xhc3NfbmFtZT1cXFwiJ2J0biBidG4tcHJpbWFyeSdcXFwiPjwvbG9hZGluZ19idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgdi1lbHNlIEBjbGljaz1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAge3sgbGFuZy5zZW5kIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZm9ybT48IS0tIC8uY29udGFjdC1mb3JtIC0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlIGItMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcucmVhY2hfb25fdXMgfX08L2gxPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFjdC1saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImdsb2JhbC1saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJjb250YWN0LmFkZHJlc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJtZGkgbWRpLW5hbWUgbWRpLW1hcC1tYXJrZXJcXFwiPjwvc3Bhbj57eyBjb250YWN0LmFkZHJlc3MgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cXFwiY29udGFjdC5waG9uZSB8fCBjb250YWN0Lm9wdGlvbmFsX3Bob25lXFxcIj48c3BhbiBjbGFzcz1cXFwibWRpIG1kaS1uYW1lIG1kaS1waG9uZVxcXCI+PC9zcGFuPiA8YVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVxcXCIndGVsOicrY29udGFjdC5waG9uZVxcXCI+e3sgY29udGFjdC5waG9uZSB9fTwvYT4gPGFcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cXFwiJ3RlbDonK2NvbnRhY3Qub3B0aW9uYWxfcGhvbmVcXFwiPnt7IGNvbnRhY3Qub3B0aW9uYWxfcGhvbmUgfX08L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJjb250YWN0LmVtYWlsIHx8IGNvbnRhY3Qub3B0aW9uYWxfZW1haWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJtZGkgbWRpLW5hbWUgbWRpLWVtYWlsXFxcIj48L3NwYW4+IDxhXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XFxcIidtYWlsdG86Jytjb250YWN0LmVtYWlsXFxcIj57eyBjb250YWN0LmVtYWlsIH19PC9hPiA8YVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVxcXCInbWFpbHRvOicrY29udGFjdC5vcHRpb25hbF9lbWFpbFxcXCI+e3sgY29udGFjdC5vcHRpb25hbF9lbWFpbCB9fTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzb2NpYWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwic2V0dGluZ3Muc2hvd19zb2NpYWxfbGlua3MgJiYgc2V0dGluZ3Muc2hvd19zb2NpYWxfbGlua3MgPT0gMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGl0bGUgYi0wIG1iLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGxhbmcuZm9sbG93X3VzIH19PC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImdsb2JhbC1saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJzZXR0aW5ncy5mYWNlYm9va19saW5rXFxcIj48YSA6aHJlZj1cXFwic2V0dGluZ3MuZmFjZWJvb2tfbGlua1xcXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWRpIG1kaS1uYW1lIG1kaS1mYWNlYm9va1xcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XFxcInNldHRpbmdzLnR3aXR0ZXJfbGlua1xcXCI+PGEgOmhyZWY9XFxcInNldHRpbmdzLnR3aXR0ZXJfbGlua1xcXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWRpIG1kaS1uYW1lIG1kaS10d2l0dGVyXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1pZj1cXFwic2V0dGluZ3MubGlua2VkaW5fbGlua1xcXCI+PGEgOmhyZWY9XFxcInNldHRpbmdzLmxpbmtlZGluX2xpbmtcXFwiPjxzcGFuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1kaSBtZGktbGlua2VkaW5cXFwiPjwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJzZXR0aW5ncy5pbnN0YWdyYW1fbGlua1xcXCI+PGEgOmhyZWY9XFxcInNldHRpbmdzLmluc3RhZ3JhbV9saW5rXFxcIj48c3BhblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtZGkgbWRpLWluc3RhZ3JhbVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtaWY9XFxcInNldHRpbmdzLnlvdXR1YmVfbGlua1xcXCI+PGEgOmhyZWY9XFxcInNldHRpbmdzLnlvdXR1YmVfbGlua1xcXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWRpIG1kaS15b3V0dWJlXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1hcFxcXCIgaWQ9XFxcIm1hcFxcXCIgc3R5bGU9XFxcImhlaWdodDogMjUwcHhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhY3QtY29udGVudCAtLT5cXHJcXG4gICAgICA8L2Rpdj48IS0tIC8uY29udGFpbmVyIC0tPlxcclxcbiAgICA8L3NlY3Rpb24+PCEtLSAvLmNvbnRhY3Qtc2VjdGlvbiAtLT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgc2hpbW1lciBmcm9tIFxcXCIuLi9wYXJ0aWFscy9zaGltbWVyXFxcIjtcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICBuYW1lOiBcXFwiY29udGFjdFxcXCIsXFxyXFxuICBjb21wb25lbnRzOiB7XFxyXFxuICAgIHNoaW1tZXJcXHJcXG4gIH0sXFxyXFxuICBtb3VudGVkKCkge1xcclxcbiAgICBsZXQgdGhhdCA9IHRoaXM7XFxyXFxuICAgIGlmICghdGhhdC5jb250YWN0KSB7XFxyXFxuICAgICAgdGhhdC4kc3RvcmUuZGlzcGF0Y2goJ2NvbnRhY3RQYWdlJyk7XFxyXFxuICAgIH1cXHJcXG4gICAgaWYgKHRoYXQuc2V0dGluZ3MubWFwX2FwaV9rZXkpIHtcXHJcXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XFxyXFxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScgKyB0aGF0LnNldHRpbmdzLm1hcF9hcGlfa2V5ICsgJyZjYWxsYmFjaz1pbml0TWFwJnY9d2Vla2x5JztcXHJcXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xcclxcbiAgICAgIHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XFxyXFxuICAgICAgICAgIGNlbnRlcjoge2xhdDogMjMuODIyMTQxLCBsbmc6IDkwLjQ0MDgxM30sXFxyXFxuICAgICAgICAgIHpvb206IHBhcnNlSW50KHRoYXQuc2V0dGluZ3Muem9vbV9sZXZlbClcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDIzLjgyMjE0MSwgOTAuNDQwODEzKSxcXHJcXG4gICAgICAgICAgbWFwOiBtYXAsXFxyXFxuICAgICAgICAgIHRpdGxlOiAnQ3J5cHRveCdcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgIH07XFxyXFxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgZGF0YSgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcXHJcXG4gICAgICBmb3JtOiB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiXFxcIixcXHJcXG4gICAgICAgIGVtYWlsOiBcXFwiXFxcIixcXHJcXG4gICAgICAgIHN1YmplY3Q6IFxcXCJcXFwiLFxcclxcbiAgICAgICAgbWVzc2FnZTogXFxcIlxcXCJcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIG1hcDogJycsXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuXFxyXFxuICBjb21wdXRlZDoge1xcclxcbiAgICBjb250YWN0KCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENvbnRhY3RQYWdlO1xcclxcbiAgICB9LFxcclxcbiAgICBzaGltbWVyKCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5tb2R1bGUuc2hpbW1lclxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczoge1xcclxcbiAgICBzdWJtaXQoKSB7XFxyXFxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcclxcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgnc2VuZC1tZXNzYWdlJyk7XFxyXFxuICAgICAgYXhpb3MucG9zdCh1cmwsIHRoaXMuZm9ybSlcXHJcXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xcclxcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3ModGhpcy5sYW5nLm1lc3NhZ2Vfc2VudF9zdWNjZXNzZnVsbHksIHRoaXMubGFuZy5TdWNjZXNzICsgJyAhIScpO1xcclxcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcXHJcXG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5lbWFpbCA9ICcnO1xcclxcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJztcXHJcXG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJqZWN0ID0gJyc7XFxyXFxuICAgICAgICAgICAgICB0aGlzLmZvcm0ubWVzc2FnZSA9ICcnO1xcclxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcikge1xcclxcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciwgdGhpcy5sYW5nLkVycm9yICsgJyAhIScpO1xcclxcbiAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxyXFxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXHJcXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XFxyXFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfSlcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGU+XFxyXFxuI21hcCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LThbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250YWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29udGFjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTVlMjUwYmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udGFjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRhY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRhY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxlY29tbWVyY2VcXFxceW9vcmlfcmVsZWFzZV8xNTNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTVlMjUwYmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTVlMjUwYmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTVlMjUwYmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRhY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1ZTI1MGJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E1ZTI1MGJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mcm9udGVuZC9wYWdlcy9jb250YWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZGE5MjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2hpbW1lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZWNvbW1lcmNlXFxcXHlvb3JpX3JlbGVhc2VfMTUzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ0YWRhOTI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ0YWRhOTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ0YWRhOTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFkYTkyNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NGFkYTkyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZnJvbnRlbmQvcGFydGlhbHMvc2hpbW1lci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGFjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250YWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGltbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaW1tZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC04WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LThbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGFjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250YWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNWUyNTBiYSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2ctcGFnZS1jb250ZW50XCIgfSwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3Qtc2VjdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2UtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY29udGFjdC50aXRsZSkpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuc2VuZF9tZXNzYWdlKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5sYW5nLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5uYW1lWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuZW1haWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZXJyb3JfYm9yZGVyOiBfdm0uZXJyb3JzLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogX3ZtLmxhbmcuZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWRhdGlvbl9lcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbWFpbFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLnN1YmplY3QpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3ViamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5zdWJqZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBfdm0ubGFuZy5zdWJqZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnN1YmplY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3ViamVjdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuc3ViamVjdFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbGlkYXRpb25fZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuc3ViamVjdFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sYW5nLm1lc3NhZ2UpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGVycm9yX2JvcmRlcjogX3ZtLmVycm9ycy5tZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IF92bS5sYW5nLndyaXRlX3lvdXJfbWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5tZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm1lc3NhZ2VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWxpZGF0aW9uX2Vycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLm1lc3NhZ2VbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nX2J1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NfbmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxhbmcuc2VuZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFjdC1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGFuZy5yZWFjaF9vbl91cykpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRhY3QuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1tYXAtbWFya2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb250YWN0LmFkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uY29udGFjdC5waG9uZSB8fCBfdm0uY29udGFjdC5vcHRpb25hbF9waG9uZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktcGhvbmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcInRlbDpcIiArIF92bS5jb250YWN0LnBob25lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY29udGFjdC5waG9uZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcInRlbDpcIiArIF92bS5jb250YWN0Lm9wdGlvbmFsX3Bob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jb250YWN0Lm9wdGlvbmFsX3Bob25lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5jb250YWN0LmVtYWlsIHx8IF92bS5jb250YWN0Lm9wdGlvbmFsX2VtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1uYW1lIG1kaS1lbWFpbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgX3ZtLmNvbnRhY3QuZW1haWwgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jb250YWN0LmVtYWlsKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwibWFpbHRvOlwiICsgX3ZtLmNvbnRhY3Qub3B0aW9uYWxfZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRhY3Qub3B0aW9uYWxfZW1haWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnNob3dfc29jaWFsX2xpbmtzICYmXG4gICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnNob3dfc29jaWFsX2xpbmtzID09IDFcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb2NpYWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBiLTAgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxhbmcuZm9sbG93X3VzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iYWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5mYWNlYm9va19saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnNldHRpbmdzLmZhY2Vib29rX2xpbmsgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbmFtZSBtZGktZmFjZWJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50d2l0dGVyX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBfdm0uc2V0dGluZ3MudHdpdHRlcl9saW5rIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLW5hbWUgbWRpLXR3aXR0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5saW5rZWRpbl9saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnNldHRpbmdzLmxpbmtlZGluX2xpbmsgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktbGlua2VkaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5pbnN0YWdyYW1fbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnNldHRpbmdzLmluc3RhZ3JhbV9saW5rIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1pbnN0YWdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy55b3V0dWJlX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBfdm0uc2V0dGluZ3MueW91dHViZV9saW5rIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGkteW91dHViZVwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjI1MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1hcFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJpbWdcIiwge1xuICAgIHN0YXRpY0NsYXNzOiBcInNoaW1tZXJcIixcbiAgICBzdHlsZTogW192bS5oZWlnaHQgPyBfdm0uc3R5bGUgOiBudWxsXSxcbiAgICBhdHRyczoge1xuICAgICAgc3JjOiBfdm0uZ2V0VXJsKFwicHVibGljL2ltYWdlcy9kZWZhdWx0L3ByZXZpZXcuanBnXCIpLFxuICAgICAgYWx0OiBcInNoaW1tZXJcIixcbiAgICB9LFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==