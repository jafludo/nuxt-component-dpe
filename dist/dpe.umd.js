(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('html-to-image')) :
    typeof define === 'function' && define.amd ? define(['exports', 'html-to-image'], factory) :
    (global = global || self, factory(global.MyComponent = {}, global.htmlToImage));
}(this, (function (exports, htmlToImage) { 'use strict';

    var script = {
        name: 'dpe',
        props: ['valueDPE', 'exportMode'],
        data: function data() {
            return {
                dpe: [
                    { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50, more: 0, min: 0 },
                    { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 110, more: 4, min: 36, max: 72 },
                    { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 111, maxrange: 210, more: 8, min: 72, max: 108 },
                    { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 211, maxrange: 350, more: 12, min: 108, max: 144 },
                    { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 351, maxrange: 540, more: 16, min: 144, max: 180 },
                    { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 541, maxrange: 750, more: 20, min: 180, max: 214 },
                    { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999, more: 24, min: 214, max: 250 } ],
                ges: [
                    { text: "≤ 5", letter: "A", color: "#f2eff4" },
                    { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                    { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                    { text: "31 à 60", letter: "D", color: "#cc93f4" },
                    { text: "61 à 100", letter: "E", color: "#bb72f3" },
                    { text: "101 à 145", letter: "F", color: "#a94cee" },
                    { text: "> 145", letter: "G", color: "#8b1ae1" } ],
                widthDaron: 0,
                exportMode: null
            }
        },
        created: function created() {
        },
        destroyed: function destroyed() {
        },
        mounted: function mounted() {
            var this$1 = this;

            var dpefind = this.dpe.find(function (item) { return item.minrange <= this$1.valueDPE && item.maxrange >= this$1.valueDPE; });
            dpefind == undefined ? dpefind = this.dpe[this.dpe.length - 1] : '';
            console.log(dpefind);
            this.widthDaron = document.getElementById('dpe_div').offsetWidth;
            var heightDaron = document.getElementById('etiquette_ener').offsetHeight;
            // let step = (dpefind.max / (dpefind.maxrange - dpefind.minrange));
            var DynamicHeight = dpefind.min;
            console.log(DynamicHeight);
            var r = document.querySelector(':root');
            r.style.setProperty('--height', (DynamicHeight) + "px");
        },
        computed:{
        },
        methods: {
            exporttopng: function exporttopng() {
                var node = document.querySelector("#dpe_div");
                var acc = this;
                this.exportMode = '';
                htmlToImage.toPng(node)
                    .then(function (dataUrl) {
                        var link = document.createElement('a');
                        var img = new Image();
                        img.src = dataUrl;
                        link.download = 'etiquette.jpeg';
                        link.href = dataUrl;
                        link.click();
                        acc.exportMode = 'active';
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
            }
        }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        var options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        var hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    var isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return function (id, style) { return addStyle(id, style); };
    }
    var HEAD;
    var styles = {};
    function addStyle(id, css) {
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            var code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    { style.element.setAttribute('media', css.media); }
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                var index = style.ids.size - 1;
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index])
                    { style.element.removeChild(nodes[index]); }
                if (nodes.length)
                    { style.element.insertBefore(textNode, nodes[index]); }
                else
                    { style.element.appendChild(textNode); }
            }
        }
    }

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function () {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "flex", attrs: { id: "dpe_div" } }, [
        _c("div", { staticClass: "div_left" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "etiquette", attrs: { id: "etiquette_ener" } },
            _vm._l(_vm.dpe, function (e, index) {
              return _c("div", { key: index }, [
                _c("div", { staticClass: "grp-et" }, [
                  _c(
                    "div",
                    {
                      staticClass: "etiquette_base",
                      style: "background : " + e.color + " ; width: " + e.width,
                    },
                    [
                      _c(
                        "p",
                        {
                          style: "color : " + e.colortext + " ; padding-left: 8px",
                        },
                        [_vm._v(_vm._s(e.text))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          style: "color : " + e.colortext + " ; padding-right: 8px",
                        },
                        [_vm._v(_vm._s(e.letter))]
                      ) ]
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "triangle-code",
                    style: "border-left: 24px solid " + e.color + ";",
                  }) ]),
                _vm._v(" "),
                _c("p", { staticClass: "space_between_class" }) ])
            }),
            0
          ),
          _vm._v(" "),
          _vm._m(1) ]),
        _vm._v(" "),
        _c("div", { staticClass: "div_right" }, [
          _c("div", { staticClass: "legend_top_r" }, [
            _vm._v("\n            Logement\n        ") ]),
          _vm._v(" "),
          _c("div", { staticClass: "space_beetween" }),
          _vm._v(" "),
          _c("div", { staticClass: "grp-et" }, [
            _c("div", {
              staticClass: "triangle-leftcode",
              style: "border-right: 24px solid black;",
            }),
            _vm._v(" "),
            _c("div", { staticClass: "slider_number" }, [
              _c("p", { staticStyle: { "z-index": "8" } }, [
                _vm._v(_vm._s(_vm.valueDPE)) ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "aim_line",
                style: "width: " + this.widthDaron + "px",
              }) ]) ]) ]),
        _vm._v(" "),
        _vm.exportMode == "active"
          ? _c(
              "div",
              { staticClass: "export_div", on: { click: _vm.exporttopng } },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                    },
                  },
                  [
                    _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                      _c("path", {
                        attrs: {
                          d: "M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          fill: "currentColor",
                          d: "M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V12h-2v-2h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v16h6v2H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586Zm5.121 12.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L18.414 19H14a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 0 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z",
                        },
                      }) ]) ]
                ) ]
            )
          : _c("div") ])
    };
    var __vue_staticRenderFns__ = [
      function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { staticClass: "legend_top" }, [
          _c("p", [_vm._v("Logement économe")]) ])
      },
      function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { staticClass: "legend_bottom" }, [
          _c("p", [_vm._v("Logement énergivore")]) ])
      } ];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-33e80035_0", { source: ":root {\n  --height: 216px;\n}\n.space_beetween {\n  height: var(--height);\n}\n#dpe_div {\n  position: relative;\n  max-height: fit-content;\n  height: fit-content;\n  width: 100%;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .div_right {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .aim_line {\n  height: 1px;\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n#dpe_div .export_div {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=dpe.vue.map */", map: {"version":3,"sources":["C:\\Users\\jaflu\\Desktop\\DEV\\nuxt-components\\src\\dpe.vue","dpe.vue"],"names":[],"mappings":"AAsHA;EACA,eAAA;ACrHA;ADwHA;EACA,qBAAA;ACrHA;ADwHA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ACrHA;ADuHA;EACA,aAAA;ACrHA;ADwHA;EACA,WAAA;EACA,UAAA;ACtHA;ADyHA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;ACvHA;AD0HA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;ACxHA;AD2HA;EACA,wBAAA;ACzHA;AD6HA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;AC3HA;AD+HA;EACA,kCAAA;EACA,qCAAA;AC7HA;ADgIA;EACA,kCAAA;EACA,qCAAA;AC9HA;ADiIA;EACA,WAAA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AC/HA;ADkIA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,eAAA;AChIA;;AAEA,kCAAkC","file":"dpe.vue","sourcesContent":["<template>\r\n    <div id=\"dpe_div\" class=\"flex\">\r\n        <div class=\"div_left\">\r\n            <div class=\"legend_top\">\r\n                <p>Logement économe</p>\r\n            </div>\r\n            <div id='etiquette_ener' class=\"etiquette\">\r\n                <div v-for=\"(e, index) in dpe\" :key=\"index\">\r\n                    <div class=\"grp-et\">\r\n                        <div class=\"etiquette_base\" :style=\"'background : ' + e.color + ' ; width: ' + e.width\">\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-left: 8px'\">{{ e.text }}</p>\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-right: 8px'\">{{ e.letter }}</p>\r\n                        </div>\r\n                        <div class=\"triangle-code\" :style=\"'border-left: 24px solid ' + e.color + ';'\"></div>\r\n                    </div>\r\n                    <p class=\"space_between_class\"></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"legend_bottom\">\r\n                <p>Logement énergivore</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"div_right\">\r\n            <div class=\"legend_top_r\">\r\n                Logement\r\n            </div>\r\n            <div class=\"space_beetween\"></div>\r\n            <div class=\"grp-et\">\r\n                <div class=\"triangle-leftcode\" :style=\"'border-right: 24px solid black;'\"></div>\r\n                <div class=\"slider_number\">\r\n                    <p style=\"z-index: 8;\">{{ valueDPE }}</p>\r\n                    <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class='export_div' v-if=\"exportMode == 'active'\" @click=\"exporttopng\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n                <g fill=\"none\" fill-rule=\"evenodd\">\r\n                    <path\r\n                        d=\"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z\" />\r\n                    <path fill=\"currentColor\"\r\n                        d=\"M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V12h-2v-2h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v16h6v2H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586Zm5.121 12.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L18.414 19H14a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 0 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z\" />\r\n                </g>\r\n            </svg>\r\n        </div>\r\n        <div v-else></div>\r\n    </div>\r\n</template>\r\n<script lang=\"js\">\r\nimport * as htmlToImage from 'html-to-image';\r\nexport default {\r\n    name: 'dpe',\r\n    props: ['valueDPE', 'exportMode'],\r\n    data() {\r\n        return {\r\n            dpe: [\r\n                { text: \"≤ 50\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', minrange: 0, maxrange: 50, more: 0, min: 0 },\r\n                { text: \"51 à 110\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', minrange: 51, maxrange: 110, more: 4, min: 36, max: 72 },\r\n                { text: \"111 à 210\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', minrange: 111, maxrange: 210, more: 8, min: 72, max: 108 },\r\n                { text: \"211 à 350\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', minrange: 211, maxrange: 350, more: 12, min: 108, max: 144 },\r\n                { text: \"351 à 540\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', minrange: 351, maxrange: 540, more: 16, min: 144, max: 180 },\r\n                { text: \"541 à 750\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', minrange: 541, maxrange: 750, more: 20, min: 180, max: 214 },\r\n                { text: \"> 750\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999, more: 24, min: 214, max: 250 },\r\n            ],\r\n            ges: [\r\n                { text: \"≤ 5\", letter: \"A\", color: \"#f2eff4\" },\r\n                { text: \"6 à 15\", letter: \"B\", color: \"#dfc1f7\" },\r\n                { text: \"16 à 30\", letter: \"C\", color: \"#d6aaf4\" },\r\n                { text: \"31 à 60\", letter: \"D\", color: \"#cc93f4\" },\r\n                { text: \"61 à 100\", letter: \"E\", color: \"#bb72f3\" },\r\n                { text: \"101 à 145\", letter: \"F\", color: \"#a94cee\" },\r\n                { text: \"> 145\", letter: \"G\", color: \"#8b1ae1\" },\r\n            ],\r\n            widthDaron: 0,\r\n            exportMode: null\r\n        }\r\n    },\r\n    created() {\r\n    },\r\n    destroyed() {\r\n    },\r\n    mounted() {\r\n        let dpefind = this.dpe.find(item => item.minrange <= this.valueDPE && item.maxrange >= this.valueDPE);\r\n        dpefind == undefined ? dpefind = this.dpe[this.dpe.length - 1] : '';\r\n        console.log(dpefind)\r\n        this.widthDaron = document.getElementById('dpe_div').offsetWidth;\r\n        let heightDaron = document.getElementById('etiquette_ener').offsetHeight;\r\n        // let step = (dpefind.max / (dpefind.maxrange - dpefind.minrange));\r\n        let DynamicHeight = dpefind.min;\r\n        console.log(DynamicHeight)\r\n        var r = document.querySelector(':root');\r\n        r.style.setProperty('--height', (DynamicHeight) + \"px\");\r\n    },\r\n    computed:{\r\n    },\r\n    methods: {\r\n        exporttopng() {\r\n            var node = document.querySelector(\"#dpe_div\");\r\n            let acc = this;\r\n            this.exportMode = ''\r\n            htmlToImage.toPng(node)\r\n                .then(function (dataUrl) {\r\n                    var link = document.createElement('a');\r\n                    var img = new Image();\r\n                    img.src = dataUrl;\r\n                    link.download = 'etiquette.jpeg';\r\n                    link.href = dataUrl;\r\n                    link.click();\r\n                    acc.exportMode = 'active'\r\n                })\r\n                .catch(function (error) {\r\n                    console.error('oops, something went wrong!', error);\r\n                });\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style lang=\"scss\">\r\n:root {\r\n    --height: 216px;\r\n}\r\n\r\n.space_beetween {\r\n    height: var(--height);\r\n}\r\n\r\n#dpe_div {\r\n    position: relative;\r\n    max-height: fit-content;\r\n    height: fit-content;\r\n    width: 100%;\r\n\r\n    .grp-et {\r\n        display: flex;\r\n    }\r\n\r\n    .div_left {\r\n        width: 100%;\r\n        z-index: 5;\r\n    }\r\n\r\n    .div_right {\r\n        display: flex;\r\n        flex-direction: column;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .slider_number {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        z-index: 2;\r\n    }\r\n\r\n    .space_between_class {\r\n        padding: 2px 0px 2px 0px;\r\n    }\r\n\r\n    .etiquette {\r\n        .etiquette_base {\r\n            height: 32px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            position: relative;\r\n        }\r\n    }\r\n\r\n    .triangle-code {\r\n        border-top: 16px solid transparent;\r\n        border-bottom: 16px solid transparent;\r\n    }\r\n\r\n    .triangle-leftcode {\r\n        border-top: 16px solid transparent;\r\n        border-bottom: 16px solid transparent;\r\n    }\r\n\r\n    .aim_line {\r\n        height: 1px;\r\n        border-style: dotted;\r\n        border-color: black;\r\n        border-width: 1px;\r\n        position: absolute;\r\n        right: 0;\r\n        z-index: 1;\r\n    }\r\n\r\n    .export_div {\r\n        position: absolute;\r\n        bottom: 0;\r\n        right: 0;\r\n        cursor: pointer;\r\n    }\r\n}\r\n</style>",":root {\n  --height: 216px;\n}\n\n.space_beetween {\n  height: var(--height);\n}\n\n#dpe_div {\n  position: relative;\n  max-height: fit-content;\n  height: fit-content;\n  width: 100%;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .div_right {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .aim_line {\n  height: 1px;\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n#dpe_div .export_div {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=dpe.vue.map */"]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      var __vue_component__ = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    // Importation de notre composant Vue

    // Déclaration de la méthode d'installation utilisée via Vue.use(...)
    function install(Vue) {
    	if (install.installed) { return; }
      
    	install.installed = true;
      
    	Vue.component('dpe', __vue_component__);
    }

    // Création du module à destionation Vue.use(...)
    var plugin = {
    	install: install,
    };

    // Installation automatique si Vue est détecté (par exemple dans un navigation via la balise <script>)
    var GlobalVue = null;

    if (typeof window !== 'undefined') {
    	GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
    	GlobalVue = global.Vue;
    }

    if (GlobalVue) {
    	GlobalVue.use(plugin);
    }

    exports.default = __vue_component__;
    exports.install = install;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
