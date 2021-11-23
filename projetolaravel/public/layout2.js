(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loading */ "./resources/js/loading.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout2',
  data: function data() {
    return {
      isLoading: false,
      tabShow: -1
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    navbartema: 'auth/getNavbarTema',
    groups: 'dashboard/getGroups',
    favorites: 'dashboard/getFavorites',
    userfavorite: 'dashboard/getUserFavorite'
  })),
  methods: {
    ShowGroup: function ShowGroup(index) {
      //console.log(index)
      this.tabShow = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-navbar",
        {
          attrs: {
            toggleable: "lg",
            variant: _vm.navbarcolor,
            type: _vm.navbarcolor
          }
        },
        [
          _c("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "b-collapse",
                { attrs: { id: "nav-collapse", "is-nav": "" } },
                [
                  _c(
                    "b-navbar-nav",
                    [
                      _c(
                        "b-nav-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.favorites,
                              expression: "favorites"
                            }
                          ],
                          staticClass: "navbaropcao",
                          attrs: { active: _vm.tabShow == -1 },
                          on: {
                            click: function($event) {
                              return _vm.ShowGroup(-1)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-user-circle" }),
                          _vm._v(" My DEXBoard\n                    ")
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.groups, function(grupo, index) {
                        return _c(
                          "b-nav-item",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: grupo.type == "N",
                                expression: "grupo.type == 'N'"
                              }
                            ],
                            key: index,
                            staticClass: "navbaropcao",
                            attrs: { active: _vm.tabShow == index },
                            on: {
                              click: function($event) {
                                return _vm.ShowGroup(grupo.group_id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(grupo.grupo) +
                                "\n                    "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "is-full-page": true,
          color: "#006FFF",
          "background-color": "#BDBDBD"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("p", [_vm._v("Layout2")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("router-link")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/layout2.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/layout2.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout2.vue?vue&type=template&id=000f8c47& */ "./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47&");
/* harmony import */ var _layout2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout2.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/layout2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./layout2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/layout2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./layout2.vue?vue&type=template&id=000f8c47& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/layout2.vue?vue&type=template&id=000f8c47&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout2_vue_vue_type_template_id_000f8c47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);