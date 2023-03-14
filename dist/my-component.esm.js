var script = {
    name: 'DpeGes',
    props: ['isdpe', 'valueDPE', 'others'],
    data: function data() {
        return {
            dpe: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', max: 0, maxrange: 50 },
                { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', min: 0, max: 32 + 4, minrange: 51, maxrange: 110 },
                { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', min: 32 + 4, max: 64 + 8, minrange: 111, maxrange: 210 },
                { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', min: 64 + 8, max: 96 + 12, minrange: 211, maxrange: 350 },
                { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', min: 96 + 12, max: 128 + 16, minrange: 351, maxrange: 540 },
                { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', min: 128 + 16, max: 160 + 20, minrange: 541, maxrange: 750 },
                { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', min: 160 + 20, max: 192 + 24, minrange: 751, maxrange: 752 } ],
            ges: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" } ],
            widthDaron: 0,
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
        this.widthDaron = document.getElementById('dpe_div').offsetWidth;
        // let step = (dpefind.max / (dpefind.maxrange - dpefind.minrange));
        var DynamicHeight = (parseFloat(dpefind.max) / 720) * (parseFloat(this.valueDPE) - parseFloat(dpefind.min)*(dpefind.max / (dpefind.maxrange - dpefind.minrange)));
        console.log(dpefind.min + DynamicHeight);
        var r = document.querySelector(':root');
        r.style.setProperty('--height', (DynamicHeight)+"px");
    },
    methods: {

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
        { staticClass: "etiquette" },
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
          }) ]) ]) ]) ])
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
    inject("data-v-104e6fc8_0", { source: ":root {\n  --height: 216px;\n}\n.space_beetween {\n  height: var(--height);\n}\n#dpe_div {\n  position: relative;\n  width: 50%;\n  max-height: fit-content;\n  height: fit-content;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .div_right {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .aim_line {\n  height: 1px;\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=my-component.vue.map */", map: {"version":3,"sources":["C:\\Users\\jaflu\\Desktop\\DEV\\nuxt-components\\src\\my-component.vue","my-component.vue"],"names":[],"mappings":"AAuFA;EACA,eAAA;ACtFA;ADyFA;EACA,qBAAA;ACtFA;ADyFA;EACA,kBAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;ACtFA;ADwFA;EACA,aAAA;ACtFA;ADyFA;EACA,WAAA;EACA,UAAA;ACvFA;AD0FA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;ACxFA;AD2FA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;ACzFA;AD4FA;EACA,wBAAA;AC1FA;AD8FA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;AC5FA;ADgGA;EACA,kCAAA;EACA,qCAAA;AC9FA;ADiGA;EACA,kCAAA;EACA,qCAAA;AC/FA;ADkGA;EACA,WAAA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AChGA;;AAEA,2CAA2C","file":"my-component.vue","sourcesContent":["<template>\r\n    <div id=\"dpe_div\" class=\"flex\">\r\n        <div class=\"div_left\">\r\n            <div class=\"legend_top\">\r\n                <p>Logement économe</p>\r\n            </div>\r\n            <div class=\"etiquette\">\r\n                <div v-for=\"(e, index) in dpe\" :key=\"index\">\r\n                    <div class=\"grp-et\">\r\n                        <div class=\"etiquette_base\" :style=\"'background : ' + e.color + ' ; width: ' + e.width\">\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-left: 8px'\">{{ e.text }}</p>\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-right: 8px'\">{{ e.letter }}</p>\r\n                        </div>\r\n                        <div class=\"triangle-code\" :style=\"'border-left: 24px solid ' + e.color + ';'\"></div>\r\n                    </div>\r\n                    <p class=\"space_between_class\"></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"legend_bottom\">\r\n                <p>Logement énergivore</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"div_right\">\r\n            <div class=\"legend_top_r\">\r\n                Logement\r\n            </div>\r\n            <div class=\"space_beetween\"></div>\r\n            <div class=\"grp-et\">\r\n                <div class=\"triangle-leftcode\" :style=\"'border-right: 24px solid black;'\"></div>\r\n                <div class=\"slider_number\">\r\n                    <p style=\"z-index: 8;\">{{ valueDPE }}</p>\r\n                    <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script lang=\"js\">\r\nexport default {\r\n    name: 'DpeGes',\r\n    props: ['isdpe', 'valueDPE', 'others'],\r\n    data() {\r\n        return {\r\n            dpe: [\r\n                { text: \"≤ 50\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', max: 0, maxrange: 50 },\r\n                { text: \"51 à 110\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', min: 0, max: 32 + 4, minrange: 51, maxrange: 110 },\r\n                { text: \"111 à 210\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', min: 32 + 4, max: 64 + 8, minrange: 111, maxrange: 210 },\r\n                { text: \"211 à 350\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', min: 64 + 8, max: 96 + 12, minrange: 211, maxrange: 350 },\r\n                { text: \"351 à 540\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', min: 96 + 12, max: 128 + 16, minrange: 351, maxrange: 540 },\r\n                { text: \"541 à 750\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', min: 128 + 16, max: 160 + 20, minrange: 541, maxrange: 750 },\r\n                { text: \"> 750\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', min: 160 + 20, max: 192 + 24, minrange: 751, maxrange: 752 },\r\n            ],\r\n            ges: [\r\n                { text: \"≤ 5\", letter: \"A\", color: \"#f2eff4\" },\r\n                { text: \"6 à 15\", letter: \"B\", color: \"#dfc1f7\" },\r\n                { text: \"16 à 30\", letter: \"C\", color: \"#d6aaf4\" },\r\n                { text: \"31 à 60\", letter: \"D\", color: \"#cc93f4\" },\r\n                { text: \"61 à 100\", letter: \"E\", color: \"#bb72f3\" },\r\n                { text: \"101 à 145\", letter: \"F\", color: \"#a94cee\" },\r\n                { text: \"> 145\", letter: \"G\", color: \"#8b1ae1\" },\r\n            ],\r\n            widthDaron: 0,\r\n        }\r\n    },\r\n    created() {\r\n\r\n    },\r\n    destroyed() {\r\n\r\n    },\r\n    mounted() {\r\n        let dpefind = this.dpe.find(item => item.minrange <= this.valueDPE && item.maxrange >= this.valueDPE);\r\n        dpefind == undefined ? dpefind = this.dpe[this.dpe.length - 1] : '';\r\n        this.widthDaron = document.getElementById('dpe_div').offsetWidth;\r\n        // let step = (dpefind.max / (dpefind.maxrange - dpefind.minrange));\r\n        let DynamicHeight = (parseFloat(dpefind.max) / 720) * (parseFloat(this.valueDPE) - parseFloat(dpefind.min)*(dpefind.max / (dpefind.maxrange - dpefind.minrange)));\r\n        console.log(dpefind.min + DynamicHeight)\r\n        var r = document.querySelector(':root');\r\n        r.style.setProperty('--height', (DynamicHeight)+\"px\");\r\n    },\r\n    methods: {\r\n\r\n    }\r\n}\r\n\r\n</script>\r\n<style lang=\"scss\">\r\n:root {\r\n    --height: 216px;\r\n}\r\n\r\n.space_beetween {\r\n    height: var(--height);\r\n}\r\n\r\n#dpe_div {\r\n    position: relative;\r\n    width: 50%;\r\n    max-height: fit-content;\r\n    height: fit-content;\r\n\r\n    .grp-et {\r\n        display: flex;\r\n    }\r\n\r\n    .div_left {\r\n        width: 100%;\r\n        z-index: 5;\r\n    }\r\n\r\n    .div_right {\r\n        display: flex;\r\n        flex-direction: column;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .slider_number {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        z-index: 2;\r\n    }\r\n\r\n    .space_between_class {\r\n        padding: 2px 0px 2px 0px;\r\n    }\r\n\r\n    .etiquette {\r\n        .etiquette_base {\r\n            height: 32px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            position: relative;\r\n        }\r\n    }\r\n\r\n    .triangle-code {\r\n        border-top: 16px solid transparent;\r\n        border-bottom: 16px solid transparent;\r\n    }\r\n\r\n    .triangle-leftcode {\r\n        border-top: 16px solid transparent;\r\n        border-bottom: 16px solid transparent;\r\n    }\r\n\r\n    .aim_line {\r\n        height: 1px;\r\n        border-style: dotted;\r\n        border-color: black;\r\n        border-width: 1px;\r\n        position: absolute;\r\n        right: 0;\r\n        z-index: 1;\r\n    }\r\n}\r\n</style>",":root {\n  --height: 216px;\n}\n\n.space_beetween {\n  height: var(--height);\n}\n\n#dpe_div {\n  position: relative;\n  width: 50%;\n  max-height: fit-content;\n  height: fit-content;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .div_right {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n}\n#dpe_div .aim_line {\n  height: 1px;\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=my-component.vue.map */"]}, media: undefined });

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
  
	Vue.component('MyComponent', __vue_component__);
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

export default __vue_component__;
export { install };