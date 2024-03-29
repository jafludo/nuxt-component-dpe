import { toPng } from 'html-to-image';

var script = {
    name: 'dpe',
    props: ['value', 'exportMode', 'type', 'objectifs', 'displayunite'],
    data: function data() {
        return {
            dpe: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },
                { text: "151 à 230", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 151, maxrange: 230.99, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },
                { text: "> 450", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 450, maxrange: 9999999999.99, min: '13.5rem', index: 6 } ],
            dpeTertiaire: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '34%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '41%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '48%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },
                { text: "150 à 230", letter: "D", color: "#fbfe06", width: '56%', colortext: 'black', minrange: 150, maxrange: 230.99, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '64%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '71%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },
                { text: "451 à 590", letter: "G", color: "#fc0205", width: '78%', colortext: 'black', minrange: 451, maxrange: 590.99, min: '13.5rem', index: 6 },
                { text: "591 à 750", letter: "H", color: "#4d4d4d", width: '85%', colortext: 'black', minrange: 591, maxrange: 750.99, min: '15.75rem', index: 7 },
                { text: "> 750", letter: "I", color: "#000000", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '18rem', index: 8 } ],
            dpePublic: [
                { text: "≤ 30", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "31 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 170", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 170.99, min: '4.5rem', index: 2 },
                { text: "171 à 270", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 171, maxrange: 270.99, min: '6.75rem', index: 3 },
                { text: "271 à 380", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 271, maxrange: 380.99, min: '9rem', index: 4 },
                { text: "381 à 510", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 381, maxrange: 510.99, min: '11.25rem', index: 5 },
                { text: "> 510", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 510, maxrange: 9999999999.99, min: '13.5rem', index: 6 } ],
            dpeBureaux: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, more: 0, min: 0, index: 0 },
                { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 110.99, min: '2.25rem', index: 1 },
                { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 111, maxrange: 210.99, min: '4.5rem', index: 2 },
                { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 211, maxrange: 350.99, min: '6.75rem', index: 3 },
                { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 351, maxrange: 540.99, min: '9rem', index: 4 },
                { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 541, maxrange: 750.99, min: '11.25rem', index: 5 },
                { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '13.5rem', index: 6 } ],
            dpecentre_commerciaux: [
                { text: "≤ 80", letter: "A", color: "#319834", width: '30%', colortext: 'black', minrange: 0, maxrange: 80.0, min: 0, index: 0 },
                { text: "81 à 120", letter: "B", color: "#33cc31", width: '40%', colortext: 'black', minrange: 81, maxrange: 120.0, min: '2.25rem', index: 1 },
                { text: "121 à 180", letter: "C", color: "#cbfc34", width: '50%', colortext: 'black', minrange: 121, maxrange: 180.0, min: '4.5rem', index: 2 },
                { text: "181 à 230", letter: "D", color: "#fbfe06", width: '60%', colortext: 'black', minrange: 181, maxrange: 230.0, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '70%', colortext: 'black', minrange: 231, maxrange: 330.0, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '80%', colortext: 'black', minrange: 331, maxrange: 450.0, min: '11.25rem', index: 5 },
                { text: "> 450", letter: "G", color: "#fc0205", width: '90%', colortext: 'white', minrange: 450, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            dpeOccContinue: [
                { text: "≤ 100", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 100.99, min: 0, index: 0 },
                { text: "101 à 210", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 101, maxrange: 210.99, min: '2.25rem', index: 1 },
                { text: "211 à 370", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 211, maxrange: 370.99, min: '4.5rem', index: 2 },
                { text: "371 à 580", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 371, maxrange: 580.99, min: '6.75rem', index: 3 },
                { text: "581 à 830", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 581, maxrange: 830.99, min: '9rem', index: 4 },
                { text: "831 à 1130", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 831, maxrange: 1130.99, min: '11.25rem', index: 5 },
                { text: "> 1130", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 1130, maxrange: 9999999999.99, min: '13.5rem', index: 6 } ],
            assocDPE: [
                { type: 'logement', ref: 'dpe', title_haut: 'Logement économe', title_bas: 'Logement énergivore', typeBatiment: 'Logement' },
                { type: 'tertiaire', ref: 'dpeTertiaire', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'public', ref: 'dpePublic', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'bureaux', ref: 'dpeBureaux', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'centre_commerciaux', ref: 'dpecentre_commerciaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'OccContinue', ref: 'dpeOccContinue', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' } ],
            widthDaron: 0,
            title_haut: '',
            title_bas: '',
            typeBatiment: '',
            indexActif: 0,
            multi: false
        }
    },
    created: function created() {
        var this$1 = this;

        this.$watch('value', function (newValue) {
            this$1.refreshHeight(newValue, false);
            this$1.objectifs ? this$1.checkrange() : '';
        });
    },
    destroyed: function destroyed() {
    },
    mounted: function mounted() {
        var this$1 = this;

        if (typeof window !== 'undefined') {
            //Value
            var dpefind = this.type ? this.assocDPE.find(function (ass) { return ass.type == this$1.type; }) : this.dpe;
            this.type ? this.dpe = this[dpefind.ref] : this.dpe;
            this.heightCell = (document.getElementById('dpe_div').offsetHeight / this[dpefind.ref].length) - 12;
            dpefind ? this.title_haut = dpefind.title_haut : '';
            dpefind ? this.title_bas = dpefind.title_bas : '';
            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';
            var dperange = this.dpe.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
            dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';
            this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;
            var DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;
            var r = document.querySelector(':root');
            r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px');
            r.style.setProperty('--heightCell', this.heightCell + 'px');
            r.style.setProperty('--heightTriangle', this.heightCell / 2 + 'px');

            //Objectif
            if (this.objectifs) {
                var dperangeObj = this.dpe.find(function (item) { return item.minrange <= parseFloat(this$1.objectifs[this$1.indexActif].value) && item.maxrange >= parseFloat(this$1.objectifs[this$1.indexActif].value); });
                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';
                var DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');
            }
        }
    },
    methods: {
        getExportMode: function () {
            return this.exportMode
        },
        setExportMode: function (mode) {
            this.exportMode = mode;
        },
        exporttopng: function exporttopng() {
            var node = document.querySelector("#dpe_div");
            var acc = this;
            toPng(node)
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    var img = new Image();
                    img.src = dataUrl;
                    link.download = 'etiquette_dpe.jpeg';
                    link.href = dataUrl;
                    link.click();
                    acc.setExportMode('active');
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        },
        refreshHeight: function refreshHeight(newValue, obj) {
            var this$1 = this;
            if ( obj === void 0 ) obj = false;

            //Value
            var dpefind = this.type ? this.assocDPE.find(function (ass) { return ass.type == this$1.type; }) : this.dpe;
            this.type ? this.dpe = this[dpefind.ref] : this.dpe;
            dpefind ? this.title_haut = dpefind.title_haut : '';
            dpefind ? this.title_bas = dpefind.title_bas : '';
            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';
            if (obj == false) {
                this.value = newValue;
                var dperange = this.dpe.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
                dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';
                this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;
                var DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px');
            }

            //Objectif
            if (obj == true && this.objectifs) {
                var dperangeObj = this.dpe.find(function (item) { return item.minrange <= parseFloat(this$1.objectifs[this$1.indexActif].value) && item.maxrange >= parseFloat(this$1.objectifs[this$1.indexActif].value); });
                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';
                var DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');
            }
        },
        objectifsselector: function () {
            var visibility = document.getElementById('dropdown_body').style.visibility;
            visibility == 'visible' ? document.getElementById('dropdown_body').setAttribute("style", "visibility:hidden;") : document.getElementById('dropdown_body').setAttribute("style", "visibility:visible;");
        },
        onChangeSelect: function (e) {
            var this$1 = this;

            this.objectifs.map(function (objectif, index) {
                if (objectif.value == e.target.value) {
                    this$1.indexActif = index;
                    this$1.refreshHeight(parseInt(objectif.value), true);
                    this$1.checkrange();
                }
            });
        },
        checkrange: function checkrange() {
            var this$1 = this;

            var dperangevalue = this.dpe.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
            var dperangeobj = this.dpe.find(function (item) { return item.minrange <= this$1.objectifs[this$1.indexActif].value && item.maxrange >= this$1.objectifs[this$1.indexActif].value; });
            dperangevalue.index == dperangeobj.index ? this.multi = true : this.multi = false;
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
  return _c("div", { attrs: { id: "dpe_div" } }, [
    _c("div", { staticClass: "div_left" }, [
      _c("div", { staticClass: "legend_top" }, [
        _c("p", [_vm._v(_vm._s(_vm.title_haut))]) ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "etiquette", attrs: { id: "etiquette_ener_dpe" } },
        _vm._l(_vm.dpe, function (e, index) {
          return _c("div", [
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
                      style:
                        "color : " +
                        e.colortext +
                        " ; padding-left: 8px;font-size: 13px;",
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
                style: "border-left: 18px solid " + e.color + ";",
              }) ]),
            _vm._v(" "),
            _c("p", { staticClass: "space_between_class" }) ])
        }),
        0
      ) ]),
    _vm._v(" "),
    _c("div", { staticClass: "div_right" }, [
      _c(
        "div",
        {
          staticClass: "legend_top_r",
          staticStyle: { "font-size": "13px", position: "absolute" },
        },
        [_vm._v("\n            " + _vm._s(_vm.typeBatiment) + "\n        ")]
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { width: "5rem" } }, [
        _c("div", { staticClass: "space_beetween" }),
        _vm._v(" "),
        _c("div", { staticClass: "grp-et" }, [
          _c("div", {
            staticClass: "triangle-leftcode",
            style: "border-right: 18px solid black;",
          }),
          _vm._v(" "),
          _c("div", { staticClass: "slider_number" }, [
            _c(
              "p",
              { staticClass: "number_slider", staticStyle: { "z-index": "9" } },
              [_vm._v(_vm._s(this.value))]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "aim_line",
              style: "width: " + this.widthDaron + "px",
            }) ]) ]),
        _vm._v(" "),
        _vm.displayunite
          ? _c("div", { staticClass: "custom_unite" }, [
              _c("p", [_vm._v(_vm._s(_vm.displayunite))]) ])
          : _vm._e() ]),
      _vm._v(" "),
      _vm.objectifs
        ? _c("div", {}, [
            _c("div", { staticClass: "space_beetweenobj" }),
            _vm._v(" "),
            _c("div", { staticClass: "grp-et" }, [
              _c("div", {
                staticClass: "triangle-leftcode",
                style: "border-right: 18px solid black;",
              }),
              _vm._v(" "),
              _c("div", { staticClass: "slider_number" }, [
                _vm.multi
                  ? _c("div", { staticClass: "multiobj" }, [
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8" },
                        },
                        [_vm._v(_vm._s(_vm.value) + " |")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8", color: "#ffff00" },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.objectifs[_vm.indexActif].value) +
                              "\n                        "
                          ) ]
                      ) ])
                  : _c("div", [
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8", color: "#ffff00" },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.objectifs[_vm.indexActif].value) +
                              "\n                        "
                          ) ]
                      ) ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "aim_line",
                  style: "width: " + this.widthDaron + "px",
                }) ]) ]) ])
        : _vm._e() ]),
    _vm._v(" "),
    _c("div", { staticClass: "legend_bottom" }, [
      _c("p", [_vm._v(_vm._s(_vm.title_bas))]),
      _vm._v(" "),
      _c("div", { staticClass: "options_bot_right" }, [
        _vm.objectifs
          ? _c("div", { attrs: { id: "dropdown" } }, [
              _c(
                "button",
                { staticClass: "droplistbody", attrs: { id: "button_drop" } },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "objectifs_selector",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 512 512",
                      },
                      on: { click: _vm.objectifsselector },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M176 64h64v384h-64z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M80 336h64v112H80z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M272 272h64v176h-64z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M368 176h64v272h-64z",
                          fill: "currentColor",
                        },
                      }) ]
                  ) ]
              ),
              _vm._v(" "),
              _c("div", { attrs: { id: "dropdown_body" } }, [
                _c("input", {
                  staticStyle: { width: "18px" },
                  attrs: {
                    type: "checkbox",
                    id: "scales",
                    name: "scales",
                    checked: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    attrs: { id: "selection_objectifs" },
                    on: {
                      change: function ($event) {
                        return _vm.onChangeSelect($event)
                      },
                    },
                  },
                  _vm._l(_vm.objectifs, function (objectif, index) {
                    return _c(
                      "option",
                      { domProps: { value: objectif.value } },
                      [_vm._v(_vm._s(objectif.name))]
                    )
                  }),
                  0
                ) ]) ])
          : _vm._e(),
        _vm._v(" "),
        _vm.exportMode == "active"
          ? _c(
              "div",
              {
                staticClass: "export_div",
                attrs: { title: "Exporter" },
                on: { click: _vm.exporttopng },
              },
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
                    _c(
                      "g",
                      { attrs: { fill: "none", "fill-rule": "evenodd" } },
                      [
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
                        }) ]
                    ) ]
                ) ]
            )
          : _c("div") ]) ]) ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-52a20ba8_0", { source: ":root {\n  --heightDPE: 0px;\n  --heightDPEobj: 0px;\n  --heightCell: 2rem;\n  --heightTriangle: 1rem;\n}\n#dpe_div {\n  position: relative;\n  min-height: fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n}\n#dpe_div .options_bot_right {\n  display: flex;\n}\n#dpe_div .options_bot_right .objectifs_selector {\n  cursor: pointer;\n}\n#dpe_div #dropdown {\n  position: relative;\n}\n#dpe_div #dropdown_body {\n  display: flex;\n  position: absolute;\n  visibility: hidden;\n  background-color: white;\n  min-width: 5rem;\n  -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  margin-top: 1px;\n  padding: 8px;\n  font: 10px;\n  right: 0px;\n  bottom: 100%;\n}\n#dpe_div #selection_objectifs {\n  padding-left: 8px;\n}\n#dpe_div .space_beetween {\n  height: var(--heightDPE);\n}\n#dpe_div .space_beetweenobj {\n  height: var(--heightDPEobj);\n}\n#dpe_div .custom_unite {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: right;\n  padding-top: 4px;\n}\n#dpe_div .number_slider {\n  margin-right: 4px;\n}\n#dpe_div .multiobj {\n  display: flex;\n  font-size: 9.5px;\n}\n#dpe_div * {\n  margin: 0;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .legend_top {\n  height: 24px;\n  text-align: initial;\n}\n#dpe_div .legend_bottom {\n  display: flex;\n  bottom: 0;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n#dpe_div .export_div {\n  cursor: pointer;\n  right: 0;\n  margin-right: 8px;\n}\n#dpe_div .div_right {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  padding: 0px;\n  padding-left: 2px;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: var(--heightCell);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: var(--heightTriangle) solid transparent;\n  border-bottom: var(--heightTriangle) solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: var(--heightTriangle) solid transparent;\n  border-bottom: var(--heightTriangle) solid transparent;\n}\n#dpe_div .aim_line {\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: -2;\n}\n\n/*# sourceMappingURL=dpe.vue.map */", map: {"version":3,"sources":["C:\\Users\\Ludo\\Desktop\\DEV\\nuxt-component-dpe\\src\\dpe.vue","dpe.vue"],"names":[],"mappings":"AAsRA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;ACrRA;ADwRA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;ACrRA;ADwRA;EACA,aAAA;ACtRA;ADwRA;EACA,eAAA;ACtRA;AD2RA;EACA,kBAAA;ACzRA;AD4RA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,uDAAA;EACA,oDAAA;EACA,+CAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;AC1RA;AD6RA;EACA,iBAAA;AC3RA;AD8RA;EACA,wBAAA;AC5RA;AD+RA;EACA,2BAAA;AC7RA;ADgSA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AC9RA;ADiSA;EACA,iBAAA;AC/RA;ADkSA;EACA,aAAA;EACA,gBAAA;AChSA;ADmSA;EACA,SAAA;ACjSA;ADoSA;EACA,aAAA;AClSA;ADqSA;EACA,WAAA;EACA,UAAA;ACnSA;ADsSA;EACA,YAAA;EACA,mBAAA;ACpSA;ADuSA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;ACrSA;ADwSA;EACA,eAAA;EACA,QAAA;EACA,iBAAA;ACtSA;ADySA;EACA,aAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;ACvSA;AD0SA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;ACxSA;AD2SA;EACA,wBAAA;ACzSA;AD6SA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;AC3SA;AD+SA;EACA,mDAAA;EACA,sDAAA;AC7SA;ADgTA;EACA,mDAAA;EACA,sDAAA;AC9SA;ADiTA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;AC/SA;;AAEA,kCAAkC","file":"dpe.vue","sourcesContent":["<template>\r\n    <div id=\"dpe_div\">\r\n        <div class=\"div_left\">\r\n            <div class=\"legend_top\">\r\n                <p>{{ title_haut }}</p>\r\n            </div>\r\n            <div id='etiquette_ener_dpe' class=\"etiquette\">\r\n                <div v-for=\"(e, index) in dpe\">\r\n                    <div class=\"grp-et\">\r\n                        <div class=\"etiquette_base\" :style=\"'background : ' + e.color + ' ; width: ' + e.width\">\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-left: 8px;font-size: 13px;'\">{{ e.text }}</p>\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-right: 8px'\">{{ e.letter }}</p>\r\n                        </div>\r\n                        <div class=\"triangle-code\" :style=\"'border-left: 18px solid ' + e.color + ';'\"></div>\r\n                    </div>\r\n                    <p class=\"space_between_class\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"div_right\">\r\n            <div class=\"legend_top_r\" style=\"font-size: 13px;position:absolute;\">\r\n                {{ typeBatiment }}\r\n            </div>\r\n            <div style=\"width:5rem\">\r\n                <div class=\"space_beetween\"></div>\r\n                <div class=\"grp-et\">\r\n                    <div class=\"triangle-leftcode\" :style=\"'border-right: 18px solid black;'\"></div>\r\n                    <div class=\"slider_number\">\r\n                        <p class=\"number_slider\" style=\"z-index: 9;\">{{ this.value }}</p>\r\n                        <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                    </div>\r\n                </div>\r\n                <div v-if=\"displayunite\" class=\"custom_unite\">\r\n                    <p>{{ displayunite }}</p>\r\n                </div>\r\n            </div>\r\n            <div v-if=\"objectifs\" class=\"\">\r\n                <div class=\"space_beetweenobj\"></div>\r\n                <div class=\"grp-et\">\r\n                    <div class=\"triangle-leftcode\" :style=\"'border-right: 18px solid black;'\"></div>\r\n                    <div class=\"slider_number\">\r\n                        <div v-if=\"multi\" class=\"multiobj\">\r\n                            <p class=\"number_slider\" style=\"z-index: 8;\">{{ value }} |</p>\r\n                            <p class=\"number_slider\" style=\"z-index: 8;color: #ffff00;\"> {{ objectifs[indexActif].value }}\r\n                            </p>\r\n                        </div>\r\n                        <div v-else>\r\n                            <p class=\"number_slider\" style=\"z-index: 8;color: #ffff00;\"> {{ objectifs[indexActif].value }}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"legend_bottom\">\r\n            <p>{{ title_bas }}</p>\r\n            <div class=\"options_bot_right\">\r\n                <div v-if=\"objectifs\" id=\"dropdown\">\r\n                    <button id=\"button_drop\" class=\"droplistbody\">\r\n                        <svg @click=\"objectifsselector\" class=\"objectifs_selector\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"24\" height=\"24\" viewBox=\"0 0 512 512\">\r\n                            <path d=\"M176 64h64v384h-64z\" fill=\"currentColor\" />\r\n                            <path d=\"M80 336h64v112H80z\" fill=\"currentColor\" />\r\n                            <path d=\"M272 272h64v176h-64z\" fill=\"currentColor\" />\r\n                            <path d=\"M368 176h64v272h-64z\" fill=\"currentColor\" />\r\n                        </svg>\r\n                    </button>\r\n                    <div id=\"dropdown_body\">\r\n                        <input type=\"checkbox\" style=\"width: 18px;\" id=\"scales\" name=\"scales\" checked>\r\n                        <select @change=\"onChangeSelect($event)\" id=\"selection_objectifs\">\r\n                            <option v-for=\"(objectif, index) in objectifs\" :value=\"objectif.value\">{{ objectif.name\r\n                            }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='export_div' title=\"Exporter\" v-if=\"exportMode == 'active'\" @click=\"exporttopng\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n                        <g fill=\"none\" fill-rule=\"evenodd\">\r\n                            <path\r\n                                d=\"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z\" />\r\n                            <path fill=\"currentColor\"\r\n                                d=\"M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V12h-2v-2h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v16h6v2H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586Zm5.121 12.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L18.414 19H14a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 0 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z\" />\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n                <div v-else></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script lang=\"js\">\r\nimport * as htmlToImage from 'html-to-image';\r\nexport default {\r\n    name: 'dpe',\r\n    props: ['value', 'exportMode', 'type', 'objectifs', 'displayunite'],\r\n    data() {\r\n        return {\r\n            dpe: [\r\n                { text: \"≤ 50\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },\r\n                { text: \"51 à 90\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },\r\n                { text: \"91 à 150\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },\r\n                { text: \"151 à 230\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', minrange: 151, maxrange: 230.99, min: '6.75rem', index: 3 },\r\n                { text: \"231 à 330\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },\r\n                { text: \"331 à 450\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 450\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', minrange: 450, maxrange: 9999999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            dpeTertiaire: [\r\n                { text: \"≤ 50\", letter: \"A\", color: \"#319834\", width: '34%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },\r\n                { text: \"51 à 90\", letter: \"B\", color: \"#33cc31\", width: '41%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },\r\n                { text: \"91 à 150\", letter: \"C\", color: \"#cbfc34\", width: '48%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },\r\n                { text: \"150 à 230\", letter: \"D\", color: \"#fbfe06\", width: '56%', colortext: 'black', minrange: 150, maxrange: 230.99, min: '6.75rem', index: 3 },\r\n                { text: \"231 à 330\", letter: \"E\", color: \"#fbcc05\", width: '64%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },\r\n                { text: \"331 à 450\", letter: \"F\", color: \"#fc9935\", width: '71%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },\r\n                { text: \"451 à 590\", letter: \"G\", color: \"#fc0205\", width: '78%', colortext: 'black', minrange: 451, maxrange: 590.99, min: '13.5rem', index: 6 },\r\n                { text: \"591 à 750\", letter: \"H\", color: \"#4d4d4d\", width: '85%', colortext: 'black', minrange: 591, maxrange: 750.99, min: '15.75rem', index: 7 },\r\n                { text: \"> 750\", letter: \"I\", color: \"#000000\", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '18rem', index: 8 },\r\n            ],\r\n            dpePublic: [\r\n                { text: \"≤ 30\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },\r\n                { text: \"31 à 90\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },\r\n                { text: \"91 à 170\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', minrange: 91, maxrange: 170.99, min: '4.5rem', index: 2 },\r\n                { text: \"171 à 270\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', minrange: 171, maxrange: 270.99, min: '6.75rem', index: 3 },\r\n                { text: \"271 à 380\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', minrange: 271, maxrange: 380.99, min: '9rem', index: 4 },\r\n                { text: \"381 à 510\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', minrange: 381, maxrange: 510.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 510\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', minrange: 510, maxrange: 9999999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            dpeBureaux: [\r\n                { text: \"≤ 50\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, more: 0, min: 0, index: 0 },\r\n                { text: \"51 à 110\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', minrange: 51, maxrange: 110.99, min: '2.25rem', index: 1 },\r\n                { text: \"111 à 210\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', minrange: 111, maxrange: 210.99, min: '4.5rem', index: 2 },\r\n                { text: \"211 à 350\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', minrange: 211, maxrange: 350.99, min: '6.75rem', index: 3 },\r\n                { text: \"351 à 540\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', minrange: 351, maxrange: 540.99, min: '9rem', index: 4 },\r\n                { text: \"541 à 750\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', minrange: 541, maxrange: 750.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 750\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            dpecentre_commerciaux: [\r\n                { text: \"≤ 80\", letter: \"A\", color: \"#319834\", width: '30%', colortext: 'black', minrange: 0, maxrange: 80.0, min: 0, index: 0 },\r\n                { text: \"81 à 120\", letter: \"B\", color: \"#33cc31\", width: '40%', colortext: 'black', minrange: 81, maxrange: 120.0, min: '2.25rem', index: 1 },\r\n                { text: \"121 à 180\", letter: \"C\", color: \"#cbfc34\", width: '50%', colortext: 'black', minrange: 121, maxrange: 180.0, min: '4.5rem', index: 2 },\r\n                { text: \"181 à 230\", letter: \"D\", color: \"#fbfe06\", width: '60%', colortext: 'black', minrange: 181, maxrange: 230.0, min: '6.75rem', index: 3 },\r\n                { text: \"231 à 330\", letter: \"E\", color: \"#fbcc05\", width: '70%', colortext: 'black', minrange: 231, maxrange: 330.0, min: '9rem', index: 4 },\r\n                { text: \"331 à 450\", letter: \"F\", color: \"#fc9935\", width: '80%', colortext: 'black', minrange: 331, maxrange: 450.0, min: '11.25rem', index: 5 },\r\n                { text: \"> 450\", letter: \"G\", color: \"#fc0205\", width: '90%', colortext: 'white', minrange: 450, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            dpeOccContinue: [\r\n                { text: \"≤ 100\", letter: \"A\", color: \"#319834\", width: '35%', colortext: 'black', minrange: 0, maxrange: 100.99, min: 0, index: 0 },\r\n                { text: \"101 à 210\", letter: \"B\", color: \"#33cc31\", width: '45%', colortext: 'black', minrange: 101, maxrange: 210.99, min: '2.25rem', index: 1 },\r\n                { text: \"211 à 370\", letter: \"C\", color: \"#cbfc34\", width: '55%', colortext: 'black', minrange: 211, maxrange: 370.99, min: '4.5rem', index: 2 },\r\n                { text: \"371 à 580\", letter: \"D\", color: \"#fbfe06\", width: '65%', colortext: 'black', minrange: 371, maxrange: 580.99, min: '6.75rem', index: 3 },\r\n                { text: \"581 à 830\", letter: \"E\", color: \"#fbcc05\", width: '75%', colortext: 'black', minrange: 581, maxrange: 830.99, min: '9rem', index: 4 },\r\n                { text: \"831 à 1130\", letter: \"F\", color: \"#fc9935\", width: '85%', colortext: 'black', minrange: 831, maxrange: 1130.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 1130\", letter: \"G\", color: \"#fc0205\", width: '100%', colortext: 'white', minrange: 1130, maxrange: 9999999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            assocDPE: [\r\n                { type: 'logement', ref: 'dpe', title_haut: 'Logement économe', title_bas: 'Logement énergivore', typeBatiment: 'Logement' },\r\n                { type: 'tertiaire', ref: 'dpeTertiaire', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },\r\n                { type: 'public', ref: 'dpePublic', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },\r\n                { type: 'bureaux', ref: 'dpeBureaux', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },\r\n                { type: 'centre_commerciaux', ref: 'dpecentre_commerciaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n                { type: 'OccContinue', ref: 'dpeOccContinue', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },\r\n            ],\r\n            widthDaron: 0,\r\n            title_haut: '',\r\n            title_bas: '',\r\n            typeBatiment: '',\r\n            indexActif: 0,\r\n            multi: false\r\n        }\r\n    },\r\n    created() {\r\n        this.$watch('value', (newValue) => {\r\n            this.refreshHeight(newValue, false);\r\n            this.objectifs ? this.checkrange() : '';\r\n        })\r\n    },\r\n    destroyed() {\r\n    },\r\n    mounted() {\r\n        if (typeof window !== 'undefined') {\r\n            //Value\r\n            let dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;\r\n            this.type ? this.dpe = this[dpefind.ref] : this.dpe;\r\n            this.heightCell = (document.getElementById('dpe_div').offsetHeight / this[dpefind.ref].length) - 12;\r\n            dpefind ? this.title_haut = dpefind.title_haut : '';\r\n            dpefind ? this.title_bas = dpefind.title_bas : '';\r\n            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';\r\n            let dperange = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n            dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';\r\n            this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;\r\n            let DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;\r\n            var r = document.querySelector(':root');\r\n            r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px');\r\n            r.style.setProperty('--heightCell', this.heightCell + 'px');\r\n            r.style.setProperty('--heightTriangle', this.heightCell / 2 + 'px');\r\n\r\n            //Objectif\r\n            if (this.objectifs) {\r\n                let dperangeObj = this.dpe.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));\r\n                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';\r\n                let DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');\r\n            }\r\n        }\r\n    },\r\n    methods: {\r\n        getExportMode: function () {\r\n            return this.exportMode\r\n        },\r\n        setExportMode: function (mode) {\r\n            this.exportMode = mode;\r\n        },\r\n        exporttopng() {\r\n            var node = document.querySelector(\"#dpe_div\");\r\n            let acc = this;\r\n            htmlToImage.toPng(node)\r\n                .then(function (dataUrl) {\r\n                    var link = document.createElement('a');\r\n                    var img = new Image();\r\n                    img.src = dataUrl;\r\n                    link.download = 'etiquette_dpe.jpeg';\r\n                    link.href = dataUrl;\r\n                    link.click();\r\n                    acc.setExportMode('active');\r\n                })\r\n                .catch(function (error) {\r\n                    console.error('oops, something went wrong!', error);\r\n                });\r\n        },\r\n        refreshHeight(newValue, obj = false) {\r\n            //Value\r\n            let dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;\r\n            this.type ? this.dpe = this[dpefind.ref] : this.dpe;\r\n            dpefind ? this.title_haut = dpefind.title_haut : '';\r\n            dpefind ? this.title_bas = dpefind.title_bas : '';\r\n            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';\r\n            if (obj == false) {\r\n                this.value = newValue;\r\n                let dperange = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n                dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';\r\n                this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;\r\n                let DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px')\r\n            }\r\n\r\n            //Objectif\r\n            if (obj == true && this.objectifs) {\r\n                let dperangeObj = this.dpe.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));\r\n                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';\r\n                let DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');\r\n            }\r\n        },\r\n        objectifsselector: function () {\r\n            let visibility = document.getElementById('dropdown_body').style.visibility;\r\n            visibility == 'visible' ? document.getElementById('dropdown_body').setAttribute(\"style\", \"visibility:hidden;\") : document.getElementById('dropdown_body').setAttribute(\"style\", \"visibility:visible;\");\r\n        },\r\n        onChangeSelect: function (e) {\r\n            this.objectifs.map((objectif, index) => {\r\n                if (objectif.value == e.target.value) {\r\n                    this.indexActif = index;\r\n                    this.refreshHeight(parseInt(objectif.value), true);\r\n                    this.checkrange();\r\n                }\r\n            })\r\n        },\r\n        checkrange() {\r\n            let dperangevalue = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n            let dperangeobj = this.dpe.find(item => item.minrange <= this.objectifs[this.indexActif].value && item.maxrange >= this.objectifs[this.indexActif].value);\r\n            dperangevalue.index == dperangeobj.index ? this.multi = true : this.multi = false;\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style lang=\"scss\">\r\n:root {\r\n    --heightDPE: 0px;\r\n    --heightDPEobj: 0px;\r\n    --heightCell: 2rem;\r\n    --heightTriangle: 1rem;\r\n}\r\n\r\n#dpe_div {\r\n    position: relative;\r\n    min-height: fit-content;\r\n    height: fit-content;\r\n    width: 100%;\r\n    display: flex;\r\n\r\n\r\n    .options_bot_right {\r\n        display: flex;\r\n\r\n        .objectifs_selector {\r\n            cursor: pointer;\r\n        }\r\n\r\n    }\r\n\r\n    #dropdown {\r\n        position: relative;\r\n    }\r\n\r\n    #dropdown_body {\r\n        display: flex;\r\n        position: absolute;\r\n        visibility: hidden;\r\n        background-color: white;\r\n        min-width: 5rem;\r\n        -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        -webkit-border-radius: 8px;\r\n        -moz-border-radius: 8px;\r\n        border-radius: 8px;\r\n        margin-top: 1px;\r\n        padding: 8px;\r\n        font: 10px;\r\n        right: 0px;\r\n        bottom: 100%;\r\n    }\r\n\r\n    #selection_objectifs {\r\n        padding-left: 8px;\r\n    }\r\n\r\n    .space_beetween {\r\n        height: var(--heightDPE);\r\n    }\r\n\r\n    .space_beetweenobj {\r\n        height: var(--heightDPEobj);\r\n    }\r\n\r\n    .custom_unite {\r\n        font-size: 10px;\r\n        font-weight: bold;\r\n        text-align: right;\r\n        padding-top: 4px;\r\n    }\r\n\r\n    .number_slider {\r\n        margin-right: 4px;\r\n    }\r\n\r\n    .multiobj {\r\n        display: flex;\r\n        font-size: 9.5px;\r\n    }\r\n\r\n    * {\r\n        margin: 0;\r\n    }\r\n\r\n    .grp-et {\r\n        display: flex;\r\n    }\r\n\r\n    .div_left {\r\n        width: 100%;\r\n        z-index: 5;\r\n    }\r\n\r\n    .legend_top {\r\n        height: 24px;\r\n        text-align: initial;\r\n    }\r\n\r\n    .legend_bottom {\r\n        display: flex;\r\n        bottom: 0;\r\n        position: absolute;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n    }\r\n\r\n    .export_div {\r\n        cursor: pointer;\r\n        right: 0;\r\n        margin-right: 8px;\r\n    }\r\n\r\n    .div_right {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .slider_number {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        padding: 0px;\r\n        padding-left: 2px;\r\n        z-index: 2;\r\n    }\r\n\r\n    .space_between_class {\r\n        padding: 2px 0px 2px 0px;\r\n    }\r\n\r\n    .etiquette {\r\n        .etiquette_base {\r\n            height: var(--heightCell);\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            position: relative;\r\n        }\r\n    }\r\n\r\n    .triangle-code {\r\n        border-top: var(--heightTriangle) solid transparent;\r\n        border-bottom: var(--heightTriangle) solid transparent;\r\n    }\r\n\r\n    .triangle-leftcode {\r\n        border-top: var(--heightTriangle) solid transparent;\r\n        border-bottom: var(--heightTriangle) solid transparent;\r\n    }\r\n\r\n    .aim_line {\r\n        border-style: dotted;\r\n        border-color: black;\r\n        border-width: 1px;\r\n        position: absolute;\r\n        right: 0;\r\n        z-index: -2;\r\n    }\r\n\r\n\r\n}\r\n</style>",":root {\n  --heightDPE: 0px;\n  --heightDPEobj: 0px;\n  --heightCell: 2rem;\n  --heightTriangle: 1rem;\n}\n\n#dpe_div {\n  position: relative;\n  min-height: fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n}\n#dpe_div .options_bot_right {\n  display: flex;\n}\n#dpe_div .options_bot_right .objectifs_selector {\n  cursor: pointer;\n}\n#dpe_div #dropdown {\n  position: relative;\n}\n#dpe_div #dropdown_body {\n  display: flex;\n  position: absolute;\n  visibility: hidden;\n  background-color: white;\n  min-width: 5rem;\n  -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  margin-top: 1px;\n  padding: 8px;\n  font: 10px;\n  right: 0px;\n  bottom: 100%;\n}\n#dpe_div #selection_objectifs {\n  padding-left: 8px;\n}\n#dpe_div .space_beetween {\n  height: var(--heightDPE);\n}\n#dpe_div .space_beetweenobj {\n  height: var(--heightDPEobj);\n}\n#dpe_div .custom_unite {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: right;\n  padding-top: 4px;\n}\n#dpe_div .number_slider {\n  margin-right: 4px;\n}\n#dpe_div .multiobj {\n  display: flex;\n  font-size: 9.5px;\n}\n#dpe_div * {\n  margin: 0;\n}\n#dpe_div .grp-et {\n  display: flex;\n}\n#dpe_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#dpe_div .legend_top {\n  height: 24px;\n  text-align: initial;\n}\n#dpe_div .legend_bottom {\n  display: flex;\n  bottom: 0;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n#dpe_div .export_div {\n  cursor: pointer;\n  right: 0;\n  margin-right: 8px;\n}\n#dpe_div .div_right {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  position: relative;\n}\n#dpe_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  padding: 0px;\n  padding-left: 2px;\n  z-index: 2;\n}\n#dpe_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#dpe_div .etiquette .etiquette_base {\n  height: var(--heightCell);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n#dpe_div .triangle-code {\n  border-top: var(--heightTriangle) solid transparent;\n  border-bottom: var(--heightTriangle) solid transparent;\n}\n#dpe_div .triangle-leftcode {\n  border-top: var(--heightTriangle) solid transparent;\n  border-bottom: var(--heightTriangle) solid transparent;\n}\n#dpe_div .aim_line {\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: -2;\n}\n\n/*# sourceMappingURL=dpe.vue.map */"]}, media: undefined });

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

var script$1 = {
    name: 'ges',
    props: ['value', 'exportMode', 'type', 'objectifs', 'displayunite'],
    data: function data() {
        return {
            ges: [
                { text: "≤ 5", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },
                { text: "6 à 10", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 6, maxrange: 10.99, min: '2.25rem', index: 1 },
                { text: "11 à 20", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 11, maxrange: 20.99, min: '4.5rem', index: 2 },
                { text: "21 à 35", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 21, maxrange: 35.99, min: '6.75rem', index: 3 },
                { text: "36 à 55", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 36, maxrange: 55.99, min: '9rem', index: 4 },
                { text: "56 à 80", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 56, maxrange: 79.99, min: '11.25rem', index: 5 },
                { text: "> 80", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 80, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            gesTertiaire: [
                { text: "≤ 5", letter: "A", color: "#f2eff4", width: '45%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },
                { text: "6 à 10", letter: "B", color: "#dfc1f7", width: '50%', colortext: 'black', minrange: 6, maxrange: 10.99, min: '2.25rem', index: 1 },
                { text: "11 à 20", letter: "C", color: "#d6aaf4", width: '55%', colortext: 'black', minrange: 11, maxrange: 20.99, min: '4.5rem', index: 2 },
                { text: "21 à 35", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 21, maxrange: 35.99, min: '6.75rem', index: 3 },
                { text: "36 à 55", letter: "E", color: "#bb72f3", width: '65%', colortext: 'black', minrange: 36, maxrange: 55.99, min: '9rem', index: 4 },
                { text: "56 à 80", letter: "F", color: "#a94cee", width: '70%', colortext: 'black', minrange: 56, maxrange: 80.99, min: '11.25rem', index: 5 },
                { text: "81 à 110", letter: "G", color: "#8b1ae1", width: '75%', colortext: 'white', minrange: 81, maxrange: 110.99, min: '13.5rem', index: 6 },
                { text: "111 à 145", letter: "H", color: "#4d4d4d", width: '80%', colortext: 'white', minrange: 111, maxrange: 144.99, min: '15.75rem', index: 7 },
                { text: "> 145", letter: "I", color: "#000000", width: '85%', colortext: 'white', minrange: 145, maxrange: 99999999.99, min: '18rem', index: 8 } ],
            gesPublic: [
                { text: "≤ 3", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 3.99, min: 0, index: 0 },
                { text: "4 à 10", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 4, maxrange: 10.99, min: '2.25rem', index: 1 },
                { text: "11 à 25", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 11, maxrange: 25.99, min: '4.5rem', index: 2 },
                { text: "26 à 45", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 26, maxrange: 45.99, min: '6.75rem', index: 3 },
                { text: "46 à 70", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 46, maxrange: 70.99, min: '9rem', index: 4 },
                { text: "71 à 95", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 71, maxrange: 95.99, min: '11.25rem', index: 5 },
                { text: "> 95", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 95, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            gesBureaux: [
                { text: "≤ 5", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },
                { text: "6 à 15", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 6, maxrange: 15.99, min: '2.25rem', index: 1 },
                { text: "16 à 30", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 16, maxrange: 30.99, min: '4.5rem', index: 2 },
                { text: "31 à 60", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 31, maxrange: 60.99, min: '6.75rem', index: 3 },
                { text: "61 à 100", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 61, maxrange: 100.99, min: '9rem', index: 4 },
                { text: "101 à 145", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 101, maxrange: 145.99, min: '11.25rem', index: 5 },
                { text: "> 145", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 145, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            gescentre_commerciaux: [
                { text: "≤ 10", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 10.0, min: 0, index: 0 },
                { text: "11 à 15", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 11, maxrange: 15.0, min: '2.25rem', index: 1 },
                { text: "16 à 25", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 16, maxrange: 25.0, min: '4.5rem', index: 2 },
                { text: "26 à 35", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 26, maxrange: 35.0, min: '6.75rem', index: 3 },
                { text: "36 à 55", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 36, maxrange: 55.0, min: '9rem', index: 4 },
                { text: "71 à 95", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 71, maxrange: 95.0, min: '11.25rem', index: 5 },
                { text: "> 95", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 95, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            gesOccContinue: [
                { text: "≤ 12", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 12.99, min: 0, index: 0 },
                { text: "13 à 30", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 13, maxrange: 30.99, min: '2.25rem', index: 1 },
                { text: "31 à 65", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 31, maxrange: 65.99, min: '4.5rem', index: 2 },
                { text: "66 à 110", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 66, maxrange: 110.99, min: '6.75rem', index: 3 },
                { text: "111 à 160", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 111, maxrange: 160.99, min: '9rem', index: 4 },
                { text: "161 à 220", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 161, maxrange: 220.99, min: '11.25rem', index: 5 },
                { text: "> 221", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 221, maxrange: 99999999.99, min: '13.5rem', index: 6 } ],
            assocGES: [
                { type: 'logement', ref: 'ges', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Logement' },
                { type: 'tertiaire', ref: 'gesTertiaire', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'public', ref: 'gesPublic', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'bureaux', ref: 'gesBureaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'centre_commerciaux', ref: 'gescentre_commerciaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'OccContinue', ref: 'gesOccContinue', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' } ],
            widthDaron: 0,
            title_haut: '',
            title_bas: '',
            typeBatiment: '',
            indexActif: 0,
            multi: false
        }
    },
    created: function created() {
        var this$1 = this;

        this.$watch('value', function (newValue) {
            this$1.refreshHeight(newValue, false);
            this$1.objectifs ? this$1.checkrange() : '';
        });
    },
    destroyed: function destroyed() {
    },
    mounted: function mounted() {
        var this$1 = this;

        if (typeof window !== 'undefined') {
            //Value
            var gesfind = this.type ? this.assocGES.find(function (ass) { return ass.type == this$1.type; }) : this.ges;
            this.type ? this.ges = this[gesfind.ref] : this.ges;
            this.heightCell = (document.getElementById('ges_div').offsetHeight / this[gesfind.ref].length) - 12;
            gesfind ? this.title_haut = gesfind.title_haut : '';
            gesfind ? this.title_bas = gesfind.title_bas : '';
            gesfind ? this.typeBatiment = gesfind.typeBatiment : '';
            var gesrange = this.ges.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
            gesrange == undefined ? gesrange = this.ges[this.ges.length - 1] : '';
            this.widthDaron = document.getElementById('ges_div').offsetWidth - 24;
            var DynamicHeight = (gesrange.index * this.heightCell) + 4 * gesrange.index;
            var r = document.querySelector(':root');
            r.style.setProperty('--heightGES', DynamicHeight + 24 + 'px');
            r.style.setProperty('--heightCellGES', this.heightCell - 1.6 + 'px');
            r.style.setProperty('--heightTriangleGES', this.heightCell / 2 + 'px');

            //Objectif
            if (this.objectifs) {
                var gesrangeObj = this.ges.find(function (item) { return item.minrange <= parseFloat(this$1.objectifs[this$1.indexActif].value) && item.maxrange >= parseFloat(this$1.objectifs[this$1.indexActif].value); });
                gesrangeObj == undefined ? gesrangeObj = this.ges[this.dgespe.length - 1] : '';
                var DynamicHeightObj = (gesrangeObj.index * this.heightCell) + 4 * gesrangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightGESobj', DynamicHeightObj + 24 + 'px');
            }
        }
    },
    computed: {
    },
    methods: {
        getExportMode: function () {
            return this.exportMode
        },
        setExportMode: function (mode) {
            this.exportMode = mode;
        },
        exporttopng: function exporttopng() {
            var node = document.querySelector("#ges_div");
            var acc = this;
            toPng(node)
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    var img = new Image();
                    img.src = dataUrl;
                    link.download = 'etiquette_ges.jpeg';
                    link.href = dataUrl;
                    link.click();
                    acc.setExportMode('active');
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        },
        refreshHeight: function refreshHeight(newValue, obj) {
            var this$1 = this;
            if ( obj === void 0 ) obj = false;

            //Value
            var gesfind = this.type ? this.assocGES.find(function (ass) { return ass.type == this$1.type; }) : this.ges;
            this.type ? this.ges = this[gesfind.ref] : this.ges;
            gesfind ? this.title_haut = gesfind.title_haut : '';
            gesfind ? this.title_bas = gesfind.title_bas : '';
            gesfind ? this.typeBatiment = gesfind.typeBatiment : '';
            if (obj == false) {
                this.value = newValue;
                var gesrange = this.ges.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
                gesrange == undefined ? gesrange = this.ges[this.ges.length - 1] : '';
                this.widthDaron = document.getElementById('ges_div').offsetWidth - 24;
                var DynamicHeight = (gesrange.index * this.heightCell) + 4 * gesrange.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightGES', DynamicHeight + 24 + 'px');
            }

            //Objectif
            if (obj == true && this.objectifs) {
                var gesrangeObj = this.ges.find(function (item) { return item.minrange <= parseFloat(this$1.objectifs[this$1.indexActif].value) && item.maxrange >= parseFloat(this$1.objectifs[this$1.indexActif].value); });
                gesrangeObj == undefined ? gesrangeObj = this.ges[this.ges.length - 1] : '';
                var DynamicHeightObj = (gesrangeObj.index * this.heightCell) + 4 * gesrangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightGESobj', DynamicHeightObj + 24 + 'px');
            }
        },
        objectifsselector: function () {
            var visibility = document.getElementById('dropdown2_body2').style.visibility;
            visibility == 'visible' ? document.getElementById('dropdown2_body2').setAttribute("style", "visibility:hidden;") : document.getElementById('dropdown2_body2').setAttribute("style", "visibility:visible;");
        },
        onChangeSelect: function (e) {
            var this$1 = this;

            this.objectifs.map(function (objectif, index) {
                if (objectif.value == e.target.value) {
                    this$1.indexActif = index;
                    this$1.refreshHeight(parseInt(objectif.value), true);
                    this$1.checkrange();
                }
            });
        },
        checkrange: function checkrange() {
            var this$1 = this;

            var gesrangevalue = this.ges.find(function (item) { return item.minrange <= this$1.value && item.maxrange >= this$1.value; });
            var gesrangeobj = this.ges.find(function (item) { return item.minrange <= this$1.objectifs[this$1.indexActif].value && item.maxrange >= this$1.objectifs[this$1.indexActif].value; });
            gesrangevalue.index == gesrangeobj.index ? this.multi = true : this.multi = false;
        }
    }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { id: "ges_div" } }, [
    _c("div", { staticClass: "div_left" }, [
      _c("div", { staticClass: "legend_top" }, [
        _c("p", [_vm._v(_vm._s(_vm.title_haut))]) ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "etiquette", attrs: { id: "etiquette_ener_ges" } },
        _vm._l(_vm.ges, function (e, index) {
          return _c("div", [
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
                      style:
                        "color : " +
                        e.colortext +
                        " ; padding-left: 8px;font-size: 13px;",
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
              ) ]),
            _vm._v(" "),
            _c("p", { staticClass: "space_between_class" }) ])
        }),
        0
      ) ]),
    _vm._v(" "),
    _c("div", { staticClass: "div_right" }, [
      _c(
        "div",
        {
          staticClass: "legend_top_r",
          staticStyle: { "font-size": "13px", position: "absolute" },
        },
        [_vm._v("\n            " + _vm._s(_vm.typeBatiment) + "\n        ")]
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { width: "5rem" } }, [
        _c("div", { staticClass: "space_beetweenges" }),
        _vm._v(" "),
        _c("div", { staticClass: "grp-et" }, [
          _c("div", {
            staticClass: "triangle-leftcode",
            style: "border-right: 18px solid black;",
          }),
          _vm._v(" "),
          _c("div", { staticClass: "slider_number" }, [
            _c(
              "p",
              { staticClass: "number_slider", staticStyle: { "z-index": "9" } },
              [_vm._v(_vm._s(_vm.value))]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "aim_line",
              style: "width: " + this.widthDaron + "px",
            }) ]) ]),
        _vm._v(" "),
        _vm.displayunite
          ? _c("div", { staticClass: "custom_unite" }, [
              _c("p", [_vm._v(_vm._s(_vm.displayunite))]) ])
          : _vm._e() ]),
      _vm._v(" "),
      _vm.objectifs
        ? _c("div", {}, [
            _c("div", { staticClass: "space_beetweengesobj" }),
            _vm._v(" "),
            _c("div", { staticClass: "grp-et" }, [
              _c("div", {
                staticClass: "triangle-leftcode",
                style: "border-right: 18px solid black;",
              }),
              _vm._v(" "),
              _c("div", { staticClass: "slider_number" }, [
                _vm.multi
                  ? _c("div", { staticClass: "multiobj" }, [
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8" },
                        },
                        [_vm._v(_vm._s(_vm.value) + " |")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8", color: "#ffff00" },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.objectifs[_vm.indexActif].value) +
                              "\n                        "
                          ) ]
                      ) ])
                  : _c("div", [
                      _c(
                        "p",
                        {
                          staticClass: "number_slider",
                          staticStyle: { "z-index": "8", color: "#ffff00" },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.objectifs[_vm.indexActif].value) +
                              "\n                        "
                          ) ]
                      ) ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "aim_line",
                  style: "width: " + this.widthDaron + "px",
                }) ]) ]) ])
        : _vm._e() ]),
    _vm._v(" "),
    _c("div", { staticClass: "legend_bottom" }, [
      _c("p", [_vm._v(_vm._s(_vm.title_bas))]),
      _vm._v(" "),
      _c("div", { staticClass: "options_bot_right" }, [
        _vm.objectifs
          ? _c("div", { attrs: { id: "dropdown2" } }, [
              _c(
                "button",
                { staticClass: "droplistbody", attrs: { id: "button_drop" } },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "objectifs_selector",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 512 512",
                      },
                      on: { click: _vm.objectifsselector },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M176 64h64v384h-64z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M80 336h64v112H80z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M272 272h64v176h-64z",
                          fill: "currentColor",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M368 176h64v272h-64z",
                          fill: "currentColor",
                        },
                      }) ]
                  ) ]
              ),
              _vm._v(" "),
              _c("div", { attrs: { id: "dropdown2_body2" } }, [
                _c("input", {
                  staticStyle: { width: "18px" },
                  attrs: {
                    type: "checkbox",
                    id: "scales",
                    name: "scales",
                    checked: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    attrs: { id: "selection_objectifs" },
                    on: {
                      change: function ($event) {
                        return _vm.onChangeSelect($event)
                      },
                    },
                  },
                  _vm._l(_vm.objectifs, function (objectif, index) {
                    return _c(
                      "option",
                      { domProps: { value: objectif.value } },
                      [_vm._v(_vm._s(objectif.name))]
                    )
                  }),
                  0
                ) ]) ])
          : _vm._e(),
        _vm._v(" "),
        _vm.exportMode == "active"
          ? _c(
              "div",
              {
                staticClass: "export_div",
                attrs: { title: "Exporter" },
                on: { click: _vm.exporttopng },
              },
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
                    _c(
                      "g",
                      { attrs: { fill: "none", "fill-rule": "evenodd" } },
                      [
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
                        }) ]
                    ) ]
                ) ]
            )
          : _c("div") ]) ]) ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-8b1e1268_0", { source: ":root {\n  --heightGES: 0px;\n  --heightGESobj: 0px;\n  --heightCellGES: 2rem;\n  --heightTriangleGES: 1rem;\n}\n#ges_div {\n  position: relative;\n  min-height: fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n}\n#ges_div .options_bot_right {\n  display: flex;\n}\n#ges_div .options_bot_right .objectifs_selector {\n  cursor: pointer;\n}\n#ges_div #dropdown2 {\n  position: relative;\n}\n#ges_div #dropdown2_body2 {\n  display: flex;\n  position: absolute;\n  visibility: hidden;\n  background-color: white;\n  min-width: 5rem;\n  -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  margin-top: 1px;\n  padding: 8px;\n  font: 10px;\n  right: 0px;\n  bottom: 100%;\n}\n#ges_div #selection_objectifs {\n  padding-left: 8px;\n}\n#ges_div .space_beetweenges {\n  height: var(--heightGES);\n}\n#ges_div .custom_unite {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: right;\n  padding-top: 4px;\n}\n#ges_div .space_beetweengesobj {\n  height: var(--heightGESobj);\n}\n#ges_div .number_slider {\n  margin-right: 4px;\n}\n#ges_div .multiobj {\n  display: flex;\n  font-size: 9.5px;\n}\n#ges_div * {\n  margin: 0;\n}\n#ges_div .grp-et {\n  display: flex;\n}\n#ges_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#ges_div .legend_top {\n  height: 24px;\n  text-align: initial;\n}\n#ges_div .legend_bottom {\n  display: flex;\n  bottom: 0;\n  position: absolute;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n#ges_div .export_div {\n  cursor: pointer;\n  right: 0;\n  margin-right: 8px;\n}\n#ges_div .div_right {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  position: relative;\n}\n#ges_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  padding: 0px;\n  padding-left: 2px;\n  z-index: 2;\n}\n#ges_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#ges_div * {\n  margin: 0;\n}\n#ges_div .etiquette .etiquette_base {\n  height: var(--heightCellGES);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  border: 1px solid;\n}\n#ges_div .triangle-leftcode {\n  border-top: var(--heightTriangleGES) solid transparent;\n  border-bottom: var(--heightTriangleGES) solid transparent;\n}\n#ges_div .aim_line {\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: -2;\n}\n\n/*# sourceMappingURL=ges.vue.map */", map: {"version":3,"sources":["C:\\Users\\Ludo\\Desktop\\DEV\\nuxt-component-dpe\\src\\ges.vue","ges.vue"],"names":[],"mappings":"AAuRA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;ACtRA;ADyRA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;ACtRA;ADwRA;EACA,aAAA;ACtRA;ADwRA;EACA,eAAA;ACtRA;AD2RA;EACA,kBAAA;ACzRA;AD4RA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,uDAAA;EACA,oDAAA;EACA,+CAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;AC1RA;AD6RA;EACA,iBAAA;AC3RA;AD8RA;EACA,wBAAA;AC5RA;AD+RA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AC7RA;ADgSA;EACA,2BAAA;AC9RA;ADiSA;EACA,iBAAA;AC/RA;ADkSA;EACA,aAAA;EACA,gBAAA;AChSA;ADmSA;EACA,SAAA;ACjSA;ADoSA;EACA,aAAA;AClSA;ADqSA;EACA,WAAA;EACA,UAAA;ACnSA;ADsSA;EACA,YAAA;EACA,mBAAA;ACpSA;ADuSA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;ACrSA;ADwSA;EACA,eAAA;EACA,QAAA;EACA,iBAAA;ACtSA;ADySA;EACA,aAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;ACvSA;AD0SA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;ACxSA;AD2SA;EACA,wBAAA;ACzSA;AD4SA;EACA,SAAA;AC1SA;AD8SA;EACA,4BAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,iBAAA;AC5SA;ADgTA;EACA,sDAAA;EACA,yDAAA;AC9SA;ADiTA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;AC/SA;;AAEA,kCAAkC","file":"ges.vue","sourcesContent":["<template>\r\n    <div id=\"ges_div\">\r\n        <div class=\"div_left\">\r\n            <div class=\"legend_top\">\r\n                <p>{{ title_haut }}</p>\r\n            </div>\r\n            <div id='etiquette_ener_ges' class=\"etiquette\">\r\n                <div v-for=\"(e, index) in ges\">\r\n                    <div class=\"grp-et\">\r\n                        <div class=\"etiquette_base\" :style=\"'background : ' + e.color + ' ; width: ' + e.width\">\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-left: 8px;font-size: 13px;'\">{{ e.text }}</p>\r\n                            <p :style=\"'color : ' + e.colortext + ' ; padding-right: 8px'\">{{ e.letter }}</p>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"space_between_class\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"div_right\">\r\n            <div class=\"legend_top_r\" style=\"font-size: 13px;position:absolute;\">\r\n                {{ typeBatiment }}\r\n            </div>\r\n            <div style=\"width:5rem\">\r\n                <div class=\"space_beetweenges\"></div>\r\n                <div class=\"grp-et\">\r\n                    <div class=\"triangle-leftcode\" :style=\"'border-right: 18px solid black;'\"></div>\r\n                    <div class=\"slider_number\">\r\n                        <p class=\"number_slider\" style=\"z-index: 9;\">{{ value }}</p>\r\n                        <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                    </div>\r\n                </div>\r\n                <div v-if=\"displayunite\" class=\"custom_unite\">\r\n                    <p>{{ displayunite }}</p>\r\n                </div>\r\n            </div>\r\n            <div v-if=\"objectifs\" class=\"\">\r\n                <div class=\"space_beetweengesobj\"></div>\r\n                <div class=\"grp-et\">\r\n                    <div class=\"triangle-leftcode\" :style=\"'border-right: 18px solid black;'\"></div>\r\n                    <div class=\"slider_number\">\r\n                        <div v-if=\"multi\" class=\"multiobj\">\r\n                            <p class=\"number_slider\" style=\"z-index: 8;\">{{ value }} |</p>\r\n                            <p class=\"number_slider\" style=\"z-index: 8;color: #ffff00;\"> {{ objectifs[indexActif].value }}\r\n                            </p>\r\n                        </div>\r\n                        <div v-else>\r\n                            <p class=\"number_slider\" style=\"z-index: 8;color: #ffff00;\"> {{ objectifs[indexActif].value }}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"aim_line\" :style=\"'width: ' + this.widthDaron + 'px'\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"legend_bottom\">\r\n            <p>{{ title_bas }}</p>\r\n            <div class=\"options_bot_right\">\r\n                <div v-if=\"objectifs\" id=\"dropdown2\">\r\n                    <button id=\"button_drop\" class=\"droplistbody\">\r\n                        <svg @click=\"objectifsselector\" class=\"objectifs_selector\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"24\" height=\"24\" viewBox=\"0 0 512 512\">\r\n                            <path d=\"M176 64h64v384h-64z\" fill=\"currentColor\" />\r\n                            <path d=\"M80 336h64v112H80z\" fill=\"currentColor\" />\r\n                            <path d=\"M272 272h64v176h-64z\" fill=\"currentColor\" />\r\n                            <path d=\"M368 176h64v272h-64z\" fill=\"currentColor\" />\r\n                        </svg>\r\n                    </button>\r\n                    <div id=\"dropdown2_body2\">\r\n                        <input type=\"checkbox\" style=\"width: 18px;\" id=\"scales\" name=\"scales\" checked>\r\n                        <select @change=\"onChangeSelect($event)\" id=\"selection_objectifs\">\r\n                            <option v-for=\"(objectif, index) in objectifs\" :value=\"objectif.value\">{{ objectif.name\r\n                            }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='export_div' title=\"Exporter\" v-if=\"exportMode == 'active'\" @click=\"exporttopng\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n                        <g fill=\"none\" fill-rule=\"evenodd\">\r\n                            <path\r\n                                d=\"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z\" />\r\n                            <path fill=\"currentColor\"\r\n                                d=\"M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V12h-2v-2h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v16h6v2H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586Zm5.121 12.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L18.414 19H14a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 0 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z\" />\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n                <div v-else></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script lang=\"js\">\r\nimport * as htmlToImage from 'html-to-image';\r\nexport default {\r\n    name: 'ges',\r\n    props: ['value', 'exportMode', 'type', 'objectifs', 'displayunite'],\r\n    data() {\r\n        return {\r\n            ges: [\r\n                { text: \"≤ 5\", letter: \"A\", color: \"#f2eff4\", width: '30%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },\r\n                { text: \"6 à 10\", letter: \"B\", color: \"#dfc1f7\", width: '40%', colortext: 'black', minrange: 6, maxrange: 10.99, min: '2.25rem', index: 1 },\r\n                { text: \"11 à 20\", letter: \"C\", color: \"#d6aaf4\", width: '50%', colortext: 'black', minrange: 11, maxrange: 20.99, min: '4.5rem', index: 2 },\r\n                { text: \"21 à 35\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 21, maxrange: 35.99, min: '6.75rem', index: 3 },\r\n                { text: \"36 à 55\", letter: \"E\", color: \"#bb72f3\", width: '70%', colortext: 'black', minrange: 36, maxrange: 55.99, min: '9rem', index: 4 },\r\n                { text: \"56 à 80\", letter: \"F\", color: \"#a94cee\", width: '80%', colortext: 'black', minrange: 56, maxrange: 79.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 80\", letter: \"G\", color: \"#8b1ae1\", width: '90%', colortext: 'white', minrange: 80, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            gesTertiaire: [\r\n                { text: \"≤ 5\", letter: \"A\", color: \"#f2eff4\", width: '45%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },\r\n                { text: \"6 à 10\", letter: \"B\", color: \"#dfc1f7\", width: '50%', colortext: 'black', minrange: 6, maxrange: 10.99, min: '2.25rem', index: 1 },\r\n                { text: \"11 à 20\", letter: \"C\", color: \"#d6aaf4\", width: '55%', colortext: 'black', minrange: 11, maxrange: 20.99, min: '4.5rem', index: 2 },\r\n                { text: \"21 à 35\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 21, maxrange: 35.99, min: '6.75rem', index: 3 },\r\n                { text: \"36 à 55\", letter: \"E\", color: \"#bb72f3\", width: '65%', colortext: 'black', minrange: 36, maxrange: 55.99, min: '9rem', index: 4 },\r\n                { text: \"56 à 80\", letter: \"F\", color: \"#a94cee\", width: '70%', colortext: 'black', minrange: 56, maxrange: 80.99, min: '11.25rem', index: 5 },\r\n                { text: \"81 à 110\", letter: \"G\", color: \"#8b1ae1\", width: '75%', colortext: 'white', minrange: 81, maxrange: 110.99, min: '13.5rem', index: 6 },\r\n                { text: \"111 à 145\", letter: \"H\", color: \"#4d4d4d\", width: '80%', colortext: 'white', minrange: 111, maxrange: 144.99, min: '15.75rem', index: 7 },\r\n                { text: \"> 145\", letter: \"I\", color: \"#000000\", width: '85%', colortext: 'white', minrange: 145, maxrange: 99999999.99, min: '18rem', index: 8 },\r\n            ],\r\n            gesPublic: [\r\n                { text: \"≤ 3\", letter: \"A\", color: \"#f2eff4\", width: '30%', colortext: 'black', minrange: 0, maxrange: 3.99, min: 0, index: 0 },\r\n                { text: \"4 à 10\", letter: \"B\", color: \"#dfc1f7\", width: '40%', colortext: 'black', minrange: 4, maxrange: 10.99, min: '2.25rem', index: 1 },\r\n                { text: \"11 à 25\", letter: \"C\", color: \"#d6aaf4\", width: '50%', colortext: 'black', minrange: 11, maxrange: 25.99, min: '4.5rem', index: 2 },\r\n                { text: \"26 à 45\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 26, maxrange: 45.99, min: '6.75rem', index: 3 },\r\n                { text: \"46 à 70\", letter: \"E\", color: \"#bb72f3\", width: '70%', colortext: 'black', minrange: 46, maxrange: 70.99, min: '9rem', index: 4 },\r\n                { text: \"71 à 95\", letter: \"F\", color: \"#a94cee\", width: '80%', colortext: 'black', minrange: 71, maxrange: 95.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 95\", letter: \"G\", color: \"#8b1ae1\", width: '90%', colortext: 'white', minrange: 95, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            gesBureaux: [\r\n                { text: \"≤ 5\", letter: \"A\", color: \"#f2eff4\", width: '30%', colortext: 'black', minrange: 0, maxrange: 5.99, min: 0, index: 0 },\r\n                { text: \"6 à 15\", letter: \"B\", color: \"#dfc1f7\", width: '40%', colortext: 'black', minrange: 6, maxrange: 15.99, min: '2.25rem', index: 1 },\r\n                { text: \"16 à 30\", letter: \"C\", color: \"#d6aaf4\", width: '50%', colortext: 'black', minrange: 16, maxrange: 30.99, min: '4.5rem', index: 2 },\r\n                { text: \"31 à 60\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 31, maxrange: 60.99, min: '6.75rem', index: 3 },\r\n                { text: \"61 à 100\", letter: \"E\", color: \"#bb72f3\", width: '70%', colortext: 'black', minrange: 61, maxrange: 100.99, min: '9rem', index: 4 },\r\n                { text: \"101 à 145\", letter: \"F\", color: \"#a94cee\", width: '80%', colortext: 'black', minrange: 101, maxrange: 145.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 145\", letter: \"G\", color: \"#8b1ae1\", width: '90%', colortext: 'white', minrange: 145, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            gescentre_commerciaux: [\r\n                { text: \"≤ 10\", letter: \"A\", color: \"#f2eff4\", width: '30%', colortext: 'black', minrange: 0, maxrange: 10.0, min: 0, index: 0 },\r\n                { text: \"11 à 15\", letter: \"B\", color: \"#dfc1f7\", width: '40%', colortext: 'black', minrange: 11, maxrange: 15.0, min: '2.25rem', index: 1 },\r\n                { text: \"16 à 25\", letter: \"C\", color: \"#d6aaf4\", width: '50%', colortext: 'black', minrange: 16, maxrange: 25.0, min: '4.5rem', index: 2 },\r\n                { text: \"26 à 35\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 26, maxrange: 35.0, min: '6.75rem', index: 3 },\r\n                { text: \"36 à 55\", letter: \"E\", color: \"#bb72f3\", width: '70%', colortext: 'black', minrange: 36, maxrange: 55.0, min: '9rem', index: 4 },\r\n                { text: \"71 à 95\", letter: \"F\", color: \"#a94cee\", width: '80%', colortext: 'black', minrange: 71, maxrange: 95.0, min: '11.25rem', index: 5 },\r\n                { text: \"> 95\", letter: \"G\", color: \"#8b1ae1\", width: '90%', colortext: 'white', minrange: 95, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            gesOccContinue: [\r\n                { text: \"≤ 12\", letter: \"A\", color: \"#f2eff4\", width: '30%', colortext: 'black', minrange: 0, maxrange: 12.99, min: 0, index: 0 },\r\n                { text: \"13 à 30\", letter: \"B\", color: \"#dfc1f7\", width: '40%', colortext: 'black', minrange: 13, maxrange: 30.99, min: '2.25rem', index: 1 },\r\n                { text: \"31 à 65\", letter: \"C\", color: \"#d6aaf4\", width: '50%', colortext: 'black', minrange: 31, maxrange: 65.99, min: '4.5rem', index: 2 },\r\n                { text: \"66 à 110\", letter: \"D\", color: \"#cc93f4\", width: '60%', colortext: 'black', minrange: 66, maxrange: 110.99, min: '6.75rem', index: 3 },\r\n                { text: \"111 à 160\", letter: \"E\", color: \"#bb72f3\", width: '70%', colortext: 'black', minrange: 111, maxrange: 160.99, min: '9rem', index: 4 },\r\n                { text: \"161 à 220\", letter: \"F\", color: \"#a94cee\", width: '80%', colortext: 'black', minrange: 161, maxrange: 220.99, min: '11.25rem', index: 5 },\r\n                { text: \"> 221\", letter: \"G\", color: \"#8b1ae1\", width: '90%', colortext: 'white', minrange: 221, maxrange: 99999999.99, min: '13.5rem', index: 6 },\r\n            ],\r\n            assocGES: [\r\n                { type: 'logement', ref: 'ges', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Logement' },\r\n                { type: 'tertiaire', ref: 'gesTertiaire', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n                { type: 'public', ref: 'gesPublic', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n                { type: 'bureaux', ref: 'gesBureaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n                { type: 'centre_commerciaux', ref: 'gescentre_commerciaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n                { type: 'OccContinue', ref: 'gesOccContinue', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },\r\n            ],\r\n            widthDaron: 0,\r\n            title_haut: '',\r\n            title_bas: '',\r\n            typeBatiment: '',\r\n            indexActif: 0,\r\n            multi: false\r\n        }\r\n    },\r\n    created() {\r\n        this.$watch('value', (newValue) => {\r\n            this.refreshHeight(newValue, false);\r\n            this.objectifs ? this.checkrange() : '';\r\n        })\r\n    },\r\n    destroyed() {\r\n    },\r\n    mounted() {\r\n        if (typeof window !== 'undefined') {\r\n            //Value\r\n            let gesfind = this.type ? this.assocGES.find(ass => ass.type == this.type) : this.ges;\r\n            this.type ? this.ges = this[gesfind.ref] : this.ges;\r\n            this.heightCell = (document.getElementById('ges_div').offsetHeight / this[gesfind.ref].length) - 12;\r\n            gesfind ? this.title_haut = gesfind.title_haut : '';\r\n            gesfind ? this.title_bas = gesfind.title_bas : '';\r\n            gesfind ? this.typeBatiment = gesfind.typeBatiment : '';\r\n            let gesrange = this.ges.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n            gesrange == undefined ? gesrange = this.ges[this.ges.length - 1] : '';\r\n            this.widthDaron = document.getElementById('ges_div').offsetWidth - 24;\r\n            let DynamicHeight = (gesrange.index * this.heightCell) + 4 * gesrange.index;\r\n            var r = document.querySelector(':root');\r\n            r.style.setProperty('--heightGES', DynamicHeight + 24 + 'px');\r\n            r.style.setProperty('--heightCellGES', this.heightCell - 1.6 + 'px');\r\n            r.style.setProperty('--heightTriangleGES', this.heightCell / 2 + 'px');\r\n\r\n            //Objectif\r\n            if (this.objectifs) {\r\n                let gesrangeObj = this.ges.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));\r\n                gesrangeObj == undefined ? gesrangeObj = this.ges[this.dgespe.length - 1] : '';\r\n                let DynamicHeightObj = (gesrangeObj.index * this.heightCell) + 4 * gesrangeObj.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightGESobj', DynamicHeightObj + 24 + 'px');\r\n            }\r\n        }\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n        getExportMode: function () {\r\n            return this.exportMode\r\n        },\r\n        setExportMode: function (mode) {\r\n            this.exportMode = mode;\r\n        },\r\n        exporttopng() {\r\n            var node = document.querySelector(\"#ges_div\");\r\n            let acc = this;\r\n            htmlToImage.toPng(node)\r\n                .then(function (dataUrl) {\r\n                    var link = document.createElement('a');\r\n                    var img = new Image();\r\n                    img.src = dataUrl;\r\n                    link.download = 'etiquette_ges.jpeg';\r\n                    link.href = dataUrl;\r\n                    link.click();\r\n                    acc.setExportMode('active');\r\n                })\r\n                .catch(function (error) {\r\n                    console.error('oops, something went wrong!', error);\r\n                });\r\n        },\r\n        refreshHeight(newValue, obj = false) {\r\n            //Value\r\n            let gesfind = this.type ? this.assocGES.find(ass => ass.type == this.type) : this.ges;\r\n            this.type ? this.ges = this[gesfind.ref] : this.ges;\r\n            gesfind ? this.title_haut = gesfind.title_haut : '';\r\n            gesfind ? this.title_bas = gesfind.title_bas : '';\r\n            gesfind ? this.typeBatiment = gesfind.typeBatiment : '';\r\n            if (obj == false) {\r\n                this.value = newValue;\r\n                let gesrange = this.ges.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n                gesrange == undefined ? gesrange = this.ges[this.ges.length - 1] : '';\r\n                this.widthDaron = document.getElementById('ges_div').offsetWidth - 24;\r\n                let DynamicHeight = (gesrange.index * this.heightCell) + 4 * gesrange.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightGES', DynamicHeight + 24 + 'px')\r\n            }\r\n\r\n            //Objectif\r\n            if (obj == true && this.objectifs) {\r\n                let gesrangeObj = this.ges.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));\r\n                gesrangeObj == undefined ? gesrangeObj = this.ges[this.ges.length - 1] : '';\r\n                let DynamicHeightObj = (gesrangeObj.index * this.heightCell) + 4 * gesrangeObj.index;\r\n                var r = document.querySelector(':root');\r\n                r.style.setProperty('--heightGESobj', DynamicHeightObj + 24 + 'px');\r\n            }\r\n        },\r\n        objectifsselector: function () {\r\n            let visibility = document.getElementById('dropdown2_body2').style.visibility;\r\n            visibility == 'visible' ? document.getElementById('dropdown2_body2').setAttribute(\"style\", \"visibility:hidden;\") : document.getElementById('dropdown2_body2').setAttribute(\"style\", \"visibility:visible;\");\r\n        },\r\n        onChangeSelect: function (e) {\r\n            this.objectifs.map((objectif, index) => {\r\n                if (objectif.value == e.target.value) {\r\n                    this.indexActif = index;\r\n                    this.refreshHeight(parseInt(objectif.value), true);\r\n                    this.checkrange();\r\n                }\r\n            })\r\n        },\r\n        checkrange() {\r\n            let gesrangevalue = this.ges.find(item => item.minrange <= this.value && item.maxrange >= this.value);\r\n            let gesrangeobj = this.ges.find(item => item.minrange <= this.objectifs[this.indexActif].value && item.maxrange >= this.objectifs[this.indexActif].value);\r\n            gesrangevalue.index == gesrangeobj.index ? this.multi = true : this.multi = false;\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style lang=\"scss\">\r\n:root {\r\n    --heightGES: 0px;\r\n    --heightGESobj: 0px;\r\n    --heightCellGES: 2rem;\r\n    --heightTriangleGES: 1rem;\r\n}\r\n\r\n#ges_div {\r\n    position: relative;\r\n    min-height: fit-content;\r\n    height: fit-content;\r\n    width: 100%;\r\n    display: flex;\r\n\r\n    .options_bot_right {\r\n        display: flex;\r\n\r\n        .objectifs_selector {\r\n            cursor: pointer;\r\n        }\r\n\r\n    }\r\n\r\n    #dropdown2 {\r\n        position: relative;\r\n    }\r\n\r\n    #dropdown2_body2 {\r\n        display: flex;\r\n        position: absolute;\r\n        visibility: hidden;\r\n        background-color: white;\r\n        min-width: 5rem;\r\n        -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\r\n        -webkit-border-radius: 8px;\r\n        -moz-border-radius: 8px;\r\n        border-radius: 8px;\r\n        margin-top: 1px;\r\n        padding: 8px;\r\n        font: 10px;\r\n        right: 0px;\r\n        bottom: 100%;\r\n    }\r\n\r\n    #selection_objectifs {\r\n        padding-left: 8px;\r\n    }\r\n\r\n    .space_beetweenges {\r\n        height: var(--heightGES);\r\n    }\r\n\r\n    .custom_unite {\r\n        font-size: 10px;\r\n        font-weight: bold;\r\n        text-align: right;\r\n        padding-top: 4px;\r\n    }\r\n\r\n    .space_beetweengesobj {\r\n        height: var(--heightGESobj);\r\n    }\r\n\r\n    .number_slider {\r\n        margin-right: 4px;\r\n    }\r\n\r\n    .multiobj {\r\n        display: flex;\r\n        font-size: 9.5px;\r\n    }\r\n\r\n    * {\r\n        margin: 0;\r\n    }\r\n\r\n    .grp-et {\r\n        display: flex;\r\n    }\r\n\r\n    .div_left {\r\n        width: 100%;\r\n        z-index: 5;\r\n    }\r\n\r\n    .legend_top {\r\n        height: 24px;\r\n        text-align: initial;\r\n    }\r\n\r\n    .legend_bottom {\r\n        display: flex;\r\n        bottom: 0;\r\n        position: absolute;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    .export_div {\r\n        cursor: pointer;\r\n        right: 0;\r\n        margin-right: 8px;\r\n    }\r\n\r\n    .div_right {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .slider_number {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: black;\r\n        color: white;\r\n        width: 100%;\r\n        padding: 0px;\r\n        padding-left: 2px;\r\n        z-index: 2;\r\n    }\r\n\r\n    .space_between_class {\r\n        padding: 2px 0px 2px 0px;\r\n    }\r\n\r\n    * {\r\n        margin: 0;\r\n    }\r\n\r\n    .etiquette {\r\n        .etiquette_base {\r\n            height: var(--heightCellGES);\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            position: relative;\r\n            border: 1px solid;\r\n        }\r\n    }\r\n\r\n    .triangle-leftcode {\r\n        border-top: var(--heightTriangleGES) solid transparent;\r\n        border-bottom: var(--heightTriangleGES) solid transparent;\r\n    }\r\n\r\n    .aim_line {\r\n        border-style: dotted;\r\n        border-color: black;\r\n        border-width: 1px;\r\n        position: absolute;\r\n        right: 0;\r\n        z-index: -2;\r\n    }\r\n}\r\n</style>",":root {\n  --heightGES: 0px;\n  --heightGESobj: 0px;\n  --heightCellGES: 2rem;\n  --heightTriangleGES: 1rem;\n}\n\n#ges_div {\n  position: relative;\n  min-height: fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n}\n#ges_div .options_bot_right {\n  display: flex;\n}\n#ges_div .options_bot_right .objectifs_selector {\n  cursor: pointer;\n}\n#ges_div #dropdown2 {\n  position: relative;\n}\n#ges_div #dropdown2_body2 {\n  display: flex;\n  position: absolute;\n  visibility: hidden;\n  background-color: white;\n  min-width: 5rem;\n  -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  margin-top: 1px;\n  padding: 8px;\n  font: 10px;\n  right: 0px;\n  bottom: 100%;\n}\n#ges_div #selection_objectifs {\n  padding-left: 8px;\n}\n#ges_div .space_beetweenges {\n  height: var(--heightGES);\n}\n#ges_div .custom_unite {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: right;\n  padding-top: 4px;\n}\n#ges_div .space_beetweengesobj {\n  height: var(--heightGESobj);\n}\n#ges_div .number_slider {\n  margin-right: 4px;\n}\n#ges_div .multiobj {\n  display: flex;\n  font-size: 9.5px;\n}\n#ges_div * {\n  margin: 0;\n}\n#ges_div .grp-et {\n  display: flex;\n}\n#ges_div .div_left {\n  width: 100%;\n  z-index: 5;\n}\n#ges_div .legend_top {\n  height: 24px;\n  text-align: initial;\n}\n#ges_div .legend_bottom {\n  display: flex;\n  bottom: 0;\n  position: absolute;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n#ges_div .export_div {\n  cursor: pointer;\n  right: 0;\n  margin-right: 8px;\n}\n#ges_div .div_right {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  position: relative;\n}\n#ges_div .slider_number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  width: 100%;\n  padding: 0px;\n  padding-left: 2px;\n  z-index: 2;\n}\n#ges_div .space_between_class {\n  padding: 2px 0px 2px 0px;\n}\n#ges_div * {\n  margin: 0;\n}\n#ges_div .etiquette .etiquette_base {\n  height: var(--heightCellGES);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  border: 1px solid;\n}\n#ges_div .triangle-leftcode {\n  border-top: var(--heightTriangleGES) solid transparent;\n  border-bottom: var(--heightTriangleGES) solid transparent;\n}\n#ges_div .aim_line {\n  border-style: dotted;\n  border-color: black;\n  border-width: 1px;\n  position: absolute;\n  right: 0;\n  z-index: -2;\n}\n\n/*# sourceMappingURL=ges.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
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

  Vue.component("dpe", __vue_component__);
  Vue.component("ges", __vue_component__$1);
}

// Création du module à destionation Vue.use(...)
var plugin = {
  install: install,
};

// Installation automatique si Vue est détecté (par exemple dans un navigation via la balise <script>)
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { __vue_component__ as dpe, __vue_component__$1 as ges, install };
