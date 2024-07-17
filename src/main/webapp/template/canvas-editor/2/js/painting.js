(()=>{
    "use strict";
    var t = {
        785: (t,e,i)=>{
            i.d(e, {
                Z: ()=>a
            });
            var s = i(193)
              , r = i.n(s)
              , n = i(731)
              , o = i.n(n)()(r());
            o.push([t.id, ".mce-editor {\n\tposition: relative;\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n}\n.mce-workspace {\n\tflex: 1;\n\toverflow: hidden;\n\tbackground: #252525;\n}\n.mce-sidebar {\n\twidth: 10%;\n\tmin-width: 200px;\n\theight: 100%;\n\tbackground: #474747;\n\tcolor: #d4d4d4;\n}\n.mce-sidebar-body {\n\theight: 100%;\n}\n.mce-sidebar-switch {\n\tdisplay: none;\n}\n.mce-mobile .mce-sidebar {\n\tposition: absolute;\n\tz-index: 100;\n\ttop: 0;\n\tright: 0;\n\twidth: auto;\n\tmin-width: auto;\n}\n.mce-mobile .mce-sidebar-body {\n\tdisplay: none;\n\twidth: 0;\n}\n.mce-mobile .mce-visible .mce-sidebar-body {\n\tdisplay: block;\n\tmax-width: 200px;\n\twidth: 100%;\n}\n.mce-mobile .mce-sidebar-switch {\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 100%;\n\twidth: 40px;\n\theight: 40px;\n\tbackground: #474747;\n\tcursor: pointer;\n}\n.mce-mobile .mce-sidebar-switch-icon {\n\twidth: 20px;\n\theight: 20px;\n\tmargin: 10px;\n}\n.mce-mobile .mce-sidebar-switch-icon path {\n\tfill: #fff;\n}\n\n/* .mce-toolbar */\n.mce-toolbar {\n\tposition: absolute;\n\tz-index: 99;\n\ttop: 0;\n\tleft: 40px;\n\tbackground: #474747;\n\tcolor: #d4d4d4;\n\tpadding: 6px;\n\tborder-top-right-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n.mce-toolbar.mce-hidden {\n\tdisplay: none;\n}\n.mce-toolbar-item {\n\tdisplay: inline-block;\n}\n.mce-toolbar-label {\n\tpadding: 0 5px;\n\tvertical-align: middle;\n}\n.mce-toolbar-number-input {\n\twidth: 60px;\n\tbackground: #2b2b2b;\n\tcolor: #fff;\n\tbox-sizing: border-box;\n\tborder: 0;\n\toutline: 0;\n\tpadding: 5px;\n\tborder-radius: 4px;\n\tvertical-align: middle;\n}\n.mce-toolbar-color-input {\n\twidth: 60px;\n\tborder: 0;\n\toutline: 0;\n\tpadding: 0;\n\theight: 26px;\n\tborder-radius: 4px;\n\t-webkit-appearance: none;\n\tvertical-align: middle;\n}\n.mce-toolbar-color-input::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\n.mce-toolbar-color-input::-webkit-color-swatch {\n\tborder: none;\n}\n\n/* .mce-toolbox */\n.mce-toolbox {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 40px;\n\tbackground: #474747;\n}\n.mce-toolbox-top {\n\tflex: 1;\n}\n\n.mce-toolbox-item {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 32px;\n\theight: 32px;\n\tmargin: 4px;\n\tcursor: pointer;\n\tborder-radius: 4px;\n\tuser-select: none;\n}\n.mce-toolbox-item:hover,\n.mce-toolbox-item.mce-selected {\n\tbackground: #5d5d5d;\n}\n.mce-toolbox-item-icon {\n\twidth: 20px;\n\theight: 20px;\n\tmargin: 6px;\n}\n.mce-toolbox-item-icon path {\n\tfill: #fff;\n}\n.mce-toolbox-item-zoom {\n\tcolor: #fff;\n\tfont-size: 11px;\n}\n\n/* .mce-icon-button */\n.mce-icon-button {\n\tcursor: pointer;\n}\n.mce-icon-button:hover {\n\topacity: 0.8;\n}\n.mce-icon-button.mce-icon-button-sm {\n\twidth: 16px;\n\theight: 16px;\n}\n.mce-icon-button.mce-icon-button-sm svg {\n\twidth: 14px;\n\theight: 14px;\n\tmargin: 1px;\n}\n.mce-icon-button.mce-icon-button-sm svg path {\n\tfill: #fff;\n}\n\n/* .mce-panel */\n.mce-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 50%;\n}\n.mce-panel-tabs {\n\tbackground: #252525;\n\tpadding: 4px 0 0;\n}\n.mce-panel-tab {\n\tdisplay: inline-block;\n\tbackground: #474747;\n\tpadding: 3px 6px;\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n}\n.mce-panel-body {\n\tflex: 1;\n\toverflow: auto;\n}\n.mce-panel-empty {\n\ttext-align: center;\n\tpadding: 5px 0;\n}\n\n.mce-layers-panel-item {\n\tdisplay: flex;\n\twidth: 100%;\n\tflex-direction: row;\n\talign-items: center;\n\tborder-bottom: 1px solid #252525;\n}\n.mce-layers-panel-item.mce-selected {\n\tbackground: #5d5d5d;\n}\n.mce-layers-panel-item .mce-icon-button {\n\tmargin: 0 4px;\n}\n.mce-layers-panel-item-label {\n\tflex: 1;\n\tmargin: 6px 4px;\n}\n.mce-layers-panel-item-label-input {\n\twidth: 100%;\n\tborder: 0;\n\toutline: 0;\n\tmargin: 0;\n\tpadding: 3px 0;\n\tbackground: transparent;\n\tcolor: #d4d4d4;\n}\n.mce-layers-panel-item-label-input:read-only {\n\tcursor: default;\n\tpointer-events: none;\n}\n\n.mce-properties-editor {\n\tpadding: 4px;\n}\n\n/* .mce-prop-row */\n.mce-prop-row {\n\tdisplay: flex;\n\twidth: 100%;\n\tgap: 4px;\n}\n.mce-prop-col {\n\tflex: 1;\n}\n\n/* .mce-prop-simple */\n.mce-prop-simple {\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: center;\n\tbox-sizing: border-box;\n}\n.mce-prop-simple-label {\n\tpadding: 2px 8px 2px 2px;\n}\n.mce-prop-simple-body {\n\tflex: 1;\n\tpadding: 2px 4px 2px 0;\n}\n\n/* .mce-prop-number-input */\n.mce-prop-number-input {\n\twidth: 100%;\n\tbackground: #2b2b2b;\n\tcolor: #fff;\n\tbox-sizing: border-box;\n\tborder: 0;\n\toutline: 0;\n\tpadding: 5px;\n\tborder-radius: 4px;\n}\n\n/* .mce-prop-color-input */\n.mce-prop-color-input {\n\twidth: 100%;\n\tborder: 0;\n\toutline: 0;\n\tpadding: 0;\n\theight: 26px;\n\tborder-radius: 4px;\n\t-webkit-appearance: none;\n}\n.mce-prop-color-input::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\n.mce-prop-color-input::-webkit-color-swatch {\n\tborder: none;\n}\n\n/* .mce-prop-number-input-color */\n.mce-prop-choice {\n\twidth: 100%;\n\tbackground: #2b2b2b;\n\tcolor: #fff;\n\tbox-sizing: border-box;\n\tborder: 0;\n\toutline: 0;\n\tpadding: 5px;\n\tborder-radius: 4px;\n}\n", ""]);
            const a = o
        }
        ,
        731: t=>{
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var i = ""
                          , s = void 0 !== e[5];
                        return e[4] && (i += "@supports (".concat(e[4], ") {")),
                        e[2] && (i += "@media ".concat(e[2], " {")),
                        s && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                        i += t(e),
                        s && (i += "}"),
                        e[2] && (i += "}"),
                        e[4] && (i += "}"),
                        i
                    }
                    )).join("")
                }
                ,
                e.i = function(t, i, s, r, n) {
                    "string" == typeof t && (t = [[null, t, void 0]]);
                    var o = {};
                    if (s)
                        for (var a = 0; a < this.length; a++) {
                            var h = this[a][0];
                            null != h && (o[h] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var l = [].concat(t[c]);
                        s && o[l[0]] || (void 0 !== n && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                        l[5] = n),
                        i && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"),
                        l[2] = i) : l[2] = i),
                        r && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"),
                        l[4] = r) : l[4] = "".concat(r)),
                        e.push(l))
                    }
                }
                ,
                e
            }
        }
        ,
        193: t=>{
            t.exports = function(t) {
                return t[1]
            }
        }
        ,
        624: t=>{
            var e = [];
            function i(t) {
                for (var i = -1, s = 0; s < e.length; s++)
                    if (e[s].identifier === t) {
                        i = s;
                        break
                    }
                return i
            }
            function s(t, s) {
                for (var n = {}, o = [], a = 0; a < t.length; a++) {
                    var h = t[a]
                      , c = s.base ? h[0] + s.base : h[0]
                      , l = n[c] || 0
                      , d = "".concat(c, " ").concat(l);
                    n[c] = l + 1;
                    var u = i(d)
                      , g = {
                        css: h[1],
                        media: h[2],
                        sourceMap: h[3],
                        supports: h[4],
                        layer: h[5]
                    };
                    if (-1 !== u)
                        e[u].references++,
                        e[u].updater(g);
                    else {
                        var f = r(g, s);
                        s.byIndex = a,
                        e.splice(a, 0, {
                            identifier: d,
                            updater: f,
                            references: 1
                        })
                    }
                    o.push(d)
                }
                return o
            }
            function r(t, e) {
                var i = e.domAPI(e);
                return i.update(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                            return;
                        i.update(t = e)
                    } else
                        i.remove()
                }
            }
            t.exports = function(t, r) {
                var n = s(t = t || [], r = r || {});
                return function(t) {
                    t = t || [];
                    for (var o = 0; o < n.length; o++) {
                        var a = i(n[o]);
                        e[a].references--
                    }
                    for (var h = s(t, r), c = 0; c < n.length; c++) {
                        var l = i(n[c]);
                        0 === e[l].references && (e[l].updater(),
                        e.splice(l, 1))
                    }
                    n = h
                }
            }
        }
        ,
        201: t=>{
            var e = {};
            t.exports = function(t, i) {
                var s = function(t) {
                    if (void 0 === e[t]) {
                        var i = document.querySelector(t);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                            try {
                                i = i.contentDocument.head
                            } catch (t) {
                                i = null
                            }
                        e[t] = i
                    }
                    return e[t]
                }(t);
                if (!s)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                s.appendChild(i)
            }
        }
        ,
        180: t=>{
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes),
                t.insert(e, t.options),
                e
            }
        }
        ,
        210: (t,e,i)=>{
            t.exports = function(t) {
                var e = i.nc;
                e && t.setAttribute("nonce", e)
            }
        }
        ,
        440: t=>{
            t.exports = function(t) {
                var e = t.insertStyleElement(t);
                return {
                    update: function(i) {
                        !function(t, e, i) {
                            var s = "";
                            i.supports && (s += "@supports (".concat(i.supports, ") {")),
                            i.media && (s += "@media ".concat(i.media, " {"));
                            var r = void 0 !== i.layer;
                            r && (s += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")),
                            s += i.css,
                            r && (s += "}"),
                            i.media && (s += "}"),
                            i.supports && (s += "}");
                            var n = i.sourceMap;
                            n && "undefined" != typeof btoa && (s += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")),
                            e.styleTagTransform(s, t, e.options)
                        }(e, t, i)
                    },
                    remove: function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        }
        ,
        686: t=>{
            t.exports = function(t, e) {
                if (e.styleSheet)
                    e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        }
    }
      , e = {};
    function i(s) {
        var r = e[s];
        if (void 0 !== r)
            return r.exports;
        var n = e[s] = {
            id: s,
            exports: {}
        };
        return t[s](n, n.exports, i),
        n.exports
    }
    i.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return i.d(e, {
            a: e
        }),
        e
    }
    ,
    i.d = (t,e)=>{
        for (var s in e)
            i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
            })
    }
    ,
    i.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    i.nc = void 0,
    (()=>{
        function t(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
        function e(e) {
            for (var i = 1; i < arguments.length; i++) {
                var r = null != arguments[i] ? arguments[i] : {};
                i % 2 ? t(Object(r), !0).forEach((function(t) {
                    s(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function s(t, e, i) {
            return (e = o(e))in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function r(t, e) {
            if (null == t)
                return {};
            var i, s, r = function(t, e) {
                if (null == t)
                    return {};
                var i, s, r = {}, n = Object.keys(t);
                for (s = 0; s < n.length; s++)
                    i = n[s],
                    e.indexOf(i) >= 0 || (r[i] = t[i]);
                return r
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                for (s = 0; s < n.length; s++)
                    i = n[s],
                    e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
            }
            return r
        }
        function n(t, e) {
            return e || (e = t.slice(0)),
            Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function o(t) {
            var e = function(t, e) {
                if ("object" != typeof t || null === t)
                    return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(t, "string");
                    if ("object" != typeof s)
                        return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : String(e)
        }
        class a {
            constructor() {
                s(this, "browserShadowBlurConstant", 1),
                s(this, "DPI", 96),
                s(this, "devicePixelRatio", 1),
                s(this, "perfLimitSizeTotal", 2097152),
                s(this, "maxCacheSideLimit", 4096),
                s(this, "minCacheSideLimit", 256),
                s(this, "disableStyleCopyPaste", !1),
                s(this, "enableGLFiltering", !0),
                s(this, "textureSize", 4096),
                s(this, "forceGLPutImageData", !1),
                s(this, "cachesBoundsOfCurve", !0),
                s(this, "fontPaths", {}),
                s(this, "NUM_FRACTION_DIGITS", 4)
            }
        }
        const h = new class extends a {
            constructor(t) {
                super(),
                this.configure(t)
            }
            configure() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object.assign(this, t)
            }
            addFonts() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.fontPaths = e(e({}, this.fontPaths), t)
            }
            removeFonts() {
                (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t=>{
                    delete this.fontPaths[t]
                }
                ))
            }
            clearFonts() {
                this.fontPaths = {}
            }
            restoreDefaults(t) {
                const e = new a
                  , i = (null == t ? void 0 : t.reduce(((t,i)=>(t[i] = e[i],
                t)), {})) || e;
                this.configure(i)
            }
        }
          , c = function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                i[s - 1] = arguments[s];
            return console[t]("fabric", ...i)
        };
        class l extends Error {
            constructor(t, e) {
                super("fabric: ".concat(t), e)
            }
        }
        class d extends l {
            constructor(t) {
                super("".concat(t, " 'options.signal' is in 'aborted' state"))
            }
        }
        class u {
        }
        class g extends u {
            testPrecision(t, e) {
                const i = "precision ".concat(e, " float;\nvoid main(){}")
                  , s = t.createShader(t.FRAGMENT_SHADER);
                return !!s && (t.shaderSource(s, i),
                t.compileShader(s),
                !!t.getShaderParameter(s, t.COMPILE_STATUS))
            }
            queryWebGL(t) {
                const e = t.getContext("webgl");
                e && (this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
                this.GLPrecision = ["highp", "mediump", "lowp"].find((t=>this.testPrecision(e, t))),
                c("log", "WebGL: max texture size ".concat(this.maxTextureSize)))
            }
            isSupported(t) {
                return !!this.maxTextureSize && this.maxTextureSize >= t
            }
        }
        const f = {};
        let p, m = !1;
        const v = ()=>(m || (h.configure({
            devicePixelRatio: window.devicePixelRatio || 1
        }),
        p = "ontouchstart"in window || "ontouchstart"in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
        m = !0),
        {
            document,
            window,
            isTouchSupported: p,
            WebGLProbe: new g,
            dispose() {},
            copyPasteData: f
        })
          , y = ()=>v().document
          , x = ()=>v().window
          , _ = new class {
            constructor() {
                s(this, "charWidthsCache", {}),
                s(this, "boundsOfCurveCache", {})
            }
            getFontCache(t) {
                let {fontFamily: e, fontStyle: i, fontWeight: s} = t;
                e = e.toLowerCase(),
                this.charWidthsCache[e] || (this.charWidthsCache[e] = {});
                const r = this.charWidthsCache[e]
                  , n = "".concat(i.toLowerCase(), "_").concat((s + "").toLowerCase());
                return r[n] || (r[n] = {}),
                r[n]
            }
            clearFontCache(t) {
                (t = (t || "").toLowerCase()) ? this.charWidthsCache[t] && delete this.charWidthsCache[t] : this.charWidthsCache = {}
            }
            limitDimsByArea(t) {
                const {perfLimitSizeTotal: e} = h
                  , i = Math.sqrt(e * t);
                return [Math.floor(i), Math.floor(e / i)]
            }
        }
          , b = "6.0.0-beta14";
        function w() {}
        const C = Math.PI / 2
          , S = 2 * Math.PI
          , T = Math.PI / 180
          , O = Object.freeze([1, 0, 0, 1, 0, 0])
          , k = 16
          , D = .4477152502
          , M = "center"
          , E = "left"
          , j = "top"
          , P = "bottom"
          , A = "right"
          , L = "none"
          , F = /\r?\n/
          , B = "json"
          , R = "svg"
          , I = new class {
            constructor() {
                this[B] = new Map,
                this[R] = new Map
            }
            getClass(t) {
                const e = this[B].get(t);
                if (!e)
                    throw new l("No class registered for ".concat(t));
                return e
            }
            setClass(t, e) {
                e ? this[B].set(e, t) : (this[B].set(t.type, t),
                this[B].set(t.type.toLowerCase(), t))
            }
            getSVGClass(t) {
                return this[R].get(t)
            }
            setSVGClass(t, e) {
                this[R].set(null != e ? e : t.type.toLowerCase(), t)
            }
        }
          , W = new class extends Array {
            remove(t) {
                const e = this.indexOf(t);
                e > -1 && this.splice(e, 1)
            }
            cancelAll() {
                const t = this.splice(0);
                return t.forEach((t=>t.abort())),
                t
            }
            cancelByCanvas(t) {
                if (!t)
                    return [];
                const e = this.filter((e=>{
                    var i;
                    return e.target === t || "object" == typeof e.target && (null === (i = e.target) || void 0 === i ? void 0 : i.canvas) === t
                }
                ));
                return e.forEach((t=>t.abort())),
                e
            }
            cancelByTarget(t) {
                if (!t)
                    return [];
                const e = this.filter((e=>e.target === t));
                return e.forEach((t=>t.abort())),
                e
            }
        }
        ;
        class X {
            constructor() {
                s(this, "__eventListeners", {})
            }
            on(t, e) {
                if (this.__eventListeners || (this.__eventListeners = {}),
                "object" == typeof t)
                    return Object.entries(t).forEach((t=>{
                        let[e,i] = t;
                        this.on(e, i)
                    }
                    )),
                    ()=>this.off(t);
                if (e) {
                    const i = t;
                    return this.__eventListeners[i] || (this.__eventListeners[i] = []),
                    this.__eventListeners[i].push(e),
                    ()=>this.off(i, e)
                }
                return ()=>!1
            }
            once(t, e) {
                if ("object" == typeof t) {
                    const e = [];
                    return Object.entries(t).forEach((t=>{
                        let[i,s] = t;
                        e.push(this.once(i, s))
                    }
                    )),
                    ()=>e.forEach((t=>t()))
                }
                if (e) {
                    const i = this.on(t, (function() {
                        for (var t = arguments.length, s = new Array(t), r = 0; r < t; r++)
                            s[r] = arguments[r];
                        e.call(this, ...s),
                        i()
                    }
                    ));
                    return i
                }
                return ()=>!1
            }
            _removeEventListener(t, e) {
                if (this.__eventListeners[t])
                    if (e) {
                        const i = this.__eventListeners[t]
                          , s = i.indexOf(e);
                        s > -1 && i.splice(s, 1)
                    } else
                        this.__eventListeners[t] = []
            }
            off(t, e) {
                if (this.__eventListeners)
                    if (void 0 === t)
                        for (const t in this.__eventListeners)
                            this._removeEventListener(t);
                    else
                        "object" == typeof t ? Object.entries(t).forEach((t=>{
                            let[e,i] = t;
                            this._removeEventListener(e, i)
                        }
                        )) : this._removeEventListener(t, e)
            }
            fire(t, e) {
                var i;
                if (!this.__eventListeners)
                    return;
                const s = null === (i = this.__eventListeners[t]) || void 0 === i ? void 0 : i.concat();
                if (s)
                    for (let t = 0; t < s.length; t++)
                        s[t].call(this, e || {})
            }
        }
        const Y = (t,e)=>isNaN(t) && "number" == typeof e ? e : t
          , H = (t,e)=>{
            const i = t.indexOf(e);
            return -1 !== i && t.splice(i, 1),
            t
        }
          , V = t=>{
            if (0 === t)
                return 1;
            switch (Math.abs(t) / C) {
            case 1:
            case 3:
                return 0;
            case 2:
                return -1
            }
            return Math.cos(t)
        }
          , z = t=>{
            if (0 === t)
                return 0;
            const e = t / C
              , i = Math.sign(t);
            switch (e) {
            case 1:
                return i;
            case 2:
                return 0;
            case 3:
                return -i
            }
            return Math.sin(t)
        }
        ;
        class G {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                "object" == typeof t ? (this.x = t.x,
                this.y = t.y) : (this.x = t,
                this.y = e)
            }
            add(t) {
                return new G(this.x + t.x,this.y + t.y)
            }
            addEquals(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            }
            scalarAdd(t) {
                return new G(this.x + t,this.y + t)
            }
            scalarAddEquals(t) {
                return this.x += t,
                this.y += t,
                this
            }
            subtract(t) {
                return new G(this.x - t.x,this.y - t.y)
            }
            subtractEquals(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            }
            scalarSubtract(t) {
                return new G(this.x - t,this.y - t)
            }
            scalarSubtractEquals(t) {
                return this.x -= t,
                this.y -= t,
                this
            }
            multiply(t) {
                return new G(this.x * t.x,this.y * t.y)
            }
            scalarMultiply(t) {
                return new G(this.x * t,this.y * t)
            }
            scalarMultiplyEquals(t) {
                return this.x *= t,
                this.y *= t,
                this
            }
            divide(t) {
                return new G(this.x / t.x,this.y / t.y)
            }
            scalarDivide(t) {
                return new G(this.x / t,this.y / t)
            }
            scalarDivideEquals(t) {
                return this.x /= t,
                this.y /= t,
                this
            }
            eq(t) {
                return this.x === t.x && this.y === t.y
            }
            lt(t) {
                return this.x < t.x && this.y < t.y
            }
            lte(t) {
                return this.x <= t.x && this.y <= t.y
            }
            gt(t) {
                return this.x > t.x && this.y > t.y
            }
            gte(t) {
                return this.x >= t.x && this.y >= t.y
            }
            lerp(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
                return e = Math.max(Math.min(1, e), 0),
                new G(this.x + (t.x - this.x) * e,this.y + (t.y - this.y) * e)
            }
            distanceFrom(t) {
                const e = this.x - t.x
                  , i = this.y - t.y;
                return Math.sqrt(e * e + i * i)
            }
            midPointFrom(t) {
                return this.lerp(t)
            }
            min(t) {
                return new G(Math.min(this.x, t.x),Math.min(this.y, t.y))
            }
            max(t) {
                return new G(Math.max(this.x, t.x),Math.max(this.y, t.y))
            }
            toString() {
                return "".concat(this.x, ",").concat(this.y)
            }
            setXY(t, e) {
                return this.x = t,
                this.y = e,
                this
            }
            setX(t) {
                return this.x = t,
                this
            }
            setY(t) {
                return this.y = t,
                this
            }
            setFromPoint(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
            swap(t) {
                const e = this.x
                  , i = this.y;
                this.x = t.x,
                this.y = t.y,
                t.x = e,
                t.y = i
            }
            clone() {
                return new G(this.x,this.y)
            }
            rotate(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
                const i = z(t)
                  , s = V(t)
                  , r = this.subtract(e);
                return new G(r.x * s - r.y * i,r.x * i + r.y * s).add(e)
            }
            transform(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return new G(t[0] * this.x + t[2] * this.y + (e ? 0 : t[4]),t[1] * this.x + t[3] * this.y + (e ? 0 : t[5]))
            }
        }
        const U = new G(0,0);
        function N(t) {
            class e extends t {
                constructor() {
                    super(...arguments),
                    s(this, "_objects", [])
                }
                _onObjectAdded(t) {}
                _onObjectRemoved(t) {}
                _onStackOrderChanged(t) {}
                add() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    const s = this._objects.push(...e);
                    return e.forEach((t=>this._onObjectAdded(t))),
                    s
                }
                insertAt(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                        i[s - 1] = arguments[s];
                    return this._objects.splice(t, 0, ...i),
                    i.forEach((t=>this._onObjectAdded(t))),
                    this._objects.length
                }
                remove() {
                    const t = this._objects
                      , e = [];
                    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                        s[r] = arguments[r];
                    return s.forEach((i=>{
                        const s = t.indexOf(i);
                        -1 !== s && (t.splice(s, 1),
                        e.push(i),
                        this._onObjectRemoved(i))
                    }
                    )),
                    e
                }
                forEachObject(t) {
                    this.getObjects().forEach(((e,i,s)=>t(e, i, s)))
                }
                getObjects() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    return 0 === e.length ? [...this._objects] : this._objects.filter((t=>t.isType(...e)))
                }
                item(t) {
                    return this._objects[t]
                }
                isEmpty() {
                    return 0 === this._objects.length
                }
                size() {
                    return this._objects.length
                }
                contains(t, i) {
                    return !!this._objects.includes(t) || !!i && this._objects.some((i=>i instanceof e && i.contains(t, !0)))
                }
                complexity() {
                    return this._objects.reduce(((t,e)=>t + (e.complexity ? e.complexity() : 0)), 0)
                }
                sendObjectToBack(t) {
                    return !(!t || t === this._objects[0] || (H(this._objects, t),
                    this._objects.unshift(t),
                    this._onStackOrderChanged(t),
                    0))
                }
                bringObjectToFront(t) {
                    return !(!t || t === this._objects[this._objects.length - 1] || (H(this._objects, t),
                    this._objects.push(t),
                    this._onStackOrderChanged(t),
                    0))
                }
                sendObjectBackwards(t, e) {
                    if (!t)
                        return !1;
                    const i = this._objects.indexOf(t);
                    if (0 !== i) {
                        const s = this.findNewLowerIndex(t, i, e);
                        return H(this._objects, t),
                        this._objects.splice(s, 0, t),
                        this._onStackOrderChanged(t),
                        !0
                    }
                    return !1
                }
                bringObjectForward(t, e) {
                    if (!t)
                        return !1;
                    const i = this._objects.indexOf(t);
                    if (i !== this._objects.length - 1) {
                        const s = this.findNewUpperIndex(t, i, e);
                        return H(this._objects, t),
                        this._objects.splice(s, 0, t),
                        this._onStackOrderChanged(t),
                        !0
                    }
                    return !1
                }
                moveObjectTo(t, e) {
                    return t !== this._objects[e] && (H(this._objects, t),
                    this._objects.splice(e, 0, t),
                    this._onStackOrderChanged(t),
                    !0)
                }
                findNewLowerIndex(t, e, i) {
                    let s;
                    if (i) {
                        s = e;
                        for (let i = e - 1; i >= 0; --i)
                            if (t.isOverlapping(this._objects[i])) {
                                s = i;
                                break
                            }
                    } else
                        s = e - 1;
                    return s
                }
                findNewUpperIndex(t, e, i) {
                    let s;
                    if (i) {
                        s = e;
                        for (let i = e + 1; i < this._objects.length; ++i)
                            if (t.isOverlapping(this._objects[i])) {
                                s = i;
                                break
                            }
                    } else
                        s = e + 1;
                    return s
                }
                collectObjects(t) {
                    let {left: e, top: i, width: s, height: r} = t
                      , {includeIntersecting: n=!0} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const o = []
                      , a = new G(e,i)
                      , h = a.add(new G(s,r));
                    for (let t = this._objects.length - 1; t >= 0; t--) {
                        const e = this._objects[t];
                        e.selectable && e.visible && (n && e.intersectsWithRect(a, h, !0) || e.isContainedWithinRect(a, h, !0) || n && e.containsPoint(a, !0) || n && e.containsPoint(h, !0)) && o.push(e)
                    }
                    return o
                }
            }
            return e
        }
        class q extends X {
            _setOptions() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                for (const e in t)
                    this.set(e, t[e])
            }
            _setObject(t) {
                for (const e in t)
                    this._set(e, t[e])
            }
            set(t, e) {
                return "object" == typeof t ? this._setObject(t) : this._set(t, e),
                this
            }
            _set(t, e) {
                this[t] = e
            }
            toggle(t) {
                const e = this.get(t);
                return "boolean" == typeof e && this.set(t, !e),
                this
            }
            get(t) {
                return this[t]
            }
        }
        function Z(t) {
            return x().requestAnimationFrame(t)
        }
        let K = 0;
        const J = ()=>K++
          , $ = ()=>{
            const t = y().createElement("canvas");
            if (!t || void 0 === t.getContext)
                throw new l("Failed to create `canvas` element");
            return t
        }
          , Q = (t,e,i)=>t.toDataURL("image/".concat(e), i)
          , tt = t=>t * T
          , et = t=>t / T
          , it = ["translateX", "translateY", "angle"]
          , st = (t,e,i)=>new G(t).transform(e, i)
          , rt = t=>{
            const e = 1 / (t[0] * t[3] - t[1] * t[2])
              , i = [e * t[3], -e * t[1], -e * t[2], e * t[0], 0, 0]
              , {x: s, y: r} = new G(t[4],t[5]).transform(i, !0);
            return i[4] = -s,
            i[5] = -r,
            i
        }
          , nt = (t,e,i)=>[t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]]
          , ot = (t,e)=>t.reduceRight(((t,i)=>i ? nt(i, t, e) : t), O)
          , at = t=>{
            const e = Math.atan2(t[1], t[0])
              , i = Math.pow(t[0], 2) + Math.pow(t[1], 2)
              , s = Math.sqrt(i)
              , r = (t[0] * t[3] - t[2] * t[1]) / s
              , n = Math.atan2(t[0] * t[2] + t[1] * t[3], i);
            return {
                angle: et(e),
                scaleX: s,
                scaleY: r,
                skewX: et(n),
                skewY: 0,
                translateX: t[4] || 0,
                translateY: t[5] || 0
            }
        }
          , ht = function(t) {
            return [1, 0, 0, 1, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0]
        };
        function ct() {
            let {angle: t=0} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {x: e=0, y: i=0} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const s = tt(t)
              , r = V(s)
              , n = z(s);
            return [r, n, -n, r, e ? e - (r * e - n * i) : 0, i ? i - (n * e + r * i) : 0]
        }
        const lt = function(t) {
            return [t, 0, 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t, 0, 0]
        }
          , dt = t=>Math.tan(tt(t))
          , ut = t=>[1, 0, dt(t), 1, 0, 0]
          , gt = t=>[1, dt(t), 0, 1, 0, 0]
          , ft = t=>{
            let {scaleX: e=1, scaleY: i=1, flipX: s=!1, flipY: r=!1, skewX: n=0, skewY: o=0} = t;
            return ot([lt(s ? -e : e, r ? -i : i), n && ut(n), o && gt(o)], !0)
        }
          , pt = function(t) {
            let {signal: e, crossOrigin: i=null} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(s, r) {
                if (e && e.aborted)
                    return r(new d("loadImage"));
                const n = y().createElement("img");
                let o;
                e && (o = function(t) {
                    n.src = "",
                    r(t)
                }
                ,
                e.addEventListener("abort", o, {
                    once: !0
                }));
                const a = function() {
                    n.onload = n.onerror = null,
                    o && (null == e || e.removeEventListener("abort", o)),
                    s(n)
                };
                t ? (n.onload = a,
                n.onerror = function() {
                    o && (null == e || e.removeEventListener("abort", o)),
                    r(new l("Error loading ".concat(n.src)))
                }
                ,
                i && (n.crossOrigin = i),
                n.src = t) : a()
            }
            ))
        }
          , mt = function(t) {
            let {signal: e, reviver: i=w} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(((s,r)=>{
                const n = [];
                e && e.addEventListener("abort", r, {
                    once: !0
                }),
                Promise.all(t.map((t=>I.getClass(t.type).fromObject(t, {
                    signal: e,
                    reviver: i
                }).then((e=>(i(t, e),
                n.push(e),
                e)))))).then(s).catch((t=>{
                    n.forEach((t=>{
                        t.dispose && t.dispose()
                    }
                    )),
                    r(t)
                }
                )).finally((()=>{
                    e && e.removeEventListener("abort", r)
                }
                ))
            }
            ))
        }
          , vt = function(t) {
            let {signal: e} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(((i,s)=>{
                const r = [];
                e && e.addEventListener("abort", s, {
                    once: !0
                });
                const n = Object.values(t).map((t=>t ? t.colorStops ? new (I.getClass("gradient"))(t) : t.type ? mt([t], {
                    signal: e
                }).then((t=>{
                    let[e] = t;
                    return r.push(e),
                    e
                }
                )) : t.source ? I.getClass("pattern").fromObject(t, {
                    signal: e
                }).then((t=>(r.push(t),
                t))) : t : t))
                  , o = Object.keys(t);
                Promise.all(n).then((t=>t.reduce(((t,e,i)=>(t[o[i]] = e,
                t)), {}))).then(i).catch((t=>{
                    r.forEach((t=>{
                        t.dispose && t.dispose()
                    }
                    )),
                    s(t)
                }
                )).finally((()=>{
                    e && e.removeEventListener("abort", s)
                }
                ))
            }
            ))
        }
          , yt = function(t) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).reduce(((e,i)=>(i in t && (e[i] = t[i]),
            e)), {})
        }
          , xt = (t,e)=>Object.keys(t).reduce(((i,s)=>(e(t[s], s, t) && (i[s] = t[s]),
        i)), {})
          , _t = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#0FF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000",
            blanchedalmond: "#FFEBCD",
            blue: "#00F",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#0FF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgrey: "#A9A9A9",
            darkgreen: "#006400",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#F0F",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgrey: "#D3D3D3",
            lightgreen: "#90EE90",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#789",
            lightslategrey: "#789",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#0F0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#F0F",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#639",
            red: "#F00",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FF0",
            yellowgreen: "#9ACD32"
        }
          , bt = (t,e,i)=>(i < 0 && (i += 1),
        i > 1 && (i -= 1),
        i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t)
          , wt = (t,e,i,s)=>{
            t /= 255,
            e /= 255,
            i /= 255;
            const r = Math.max(t, e, i)
              , n = Math.min(t, e, i);
            let o, a;
            const h = (r + n) / 2;
            if (r === n)
                o = a = 0;
            else {
                const s = r - n;
                switch (a = h > .5 ? s / (2 - r - n) : s / (r + n),
                r) {
                case t:
                    o = (e - i) / s + (e < i ? 6 : 0);
                    break;
                case e:
                    o = (i - t) / s + 2;
                    break;
                case i:
                    o = (t - e) / s + 4
                }
                o /= 6
            }
            return [Math.round(360 * o), Math.round(100 * a), Math.round(100 * h), s]
        }
          , Ct = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
            return parseFloat(t) / (t.endsWith("%") ? 100 : 1)
        }
          , St = t=>Math.min(Math.round(t), 255).toString(16).toUpperCase().padStart(2, "0")
          , Tt = t=>{
            let[e,i,s,r=1] = t;
            const n = Math.round(.3 * e + .59 * i + .11 * s);
            return [n, n, n, r]
        }
        ;
        class Ot {
            constructor(t) {
                if (t)
                    if (t instanceof Ot)
                        this.setSource([...t._source]);
                    else if (Array.isArray(t)) {
                        const [e,i,s,r=1] = t;
                        this.setSource([e, i, s, r])
                    } else
                        this.setSource(this._tryParsingColor(t));
                else
                    this.setSource([0, 0, 0, 1])
            }
            _tryParsingColor(t) {
                return t in _t && (t = _t[t]),
                "transparent" === t ? [255, 255, 255, 0] : Ot.sourceFromHex(t) || Ot.sourceFromRgb(t) || Ot.sourceFromHsl(t) || [0, 0, 0, 1]
            }
            getSource() {
                return this._source
            }
            setSource(t) {
                this._source = t
            }
            toRgb() {
                const [t,e,i] = this.getSource();
                return "rgb(".concat(t, ",").concat(e, ",").concat(i, ")")
            }
            toRgba() {
                return "rgba(".concat(this.getSource().join(","), ")")
            }
            toHsl() {
                const [t,e,i] = wt(...this.getSource());
                return "hsl(".concat(t, ",").concat(e, "%,").concat(i, "%)")
            }
            toHsla() {
                const [t,e,i,s] = wt(...this.getSource());
                return "hsla(".concat(t, ",").concat(e, "%,").concat(i, "%,").concat(s, ")")
            }
            toHex() {
                return this.toHexa().slice(0, 6)
            }
            toHexa() {
                const [t,e,i,s] = this.getSource();
                return "".concat(St(t)).concat(St(e)).concat(St(i)).concat(St(Math.round(255 * s)))
            }
            getAlpha() {
                return this.getSource()[3]
            }
            setAlpha(t) {
                return this._source[3] = t,
                this
            }
            toGrayscale() {
                return this.setSource(Tt(this.getSource())),
                this
            }
            toBlackWhite(t) {
                const [e,,,i] = Tt(this.getSource())
                  , s = e < (t || 127) ? 0 : 255;
                return this.setSource([s, s, s, i]),
                this
            }
            overlayWith(t) {
                t instanceof Ot || (t = new Ot(t));
                const e = this.getSource()
                  , i = t.getSource()
                  , [s,r,n] = e.map(((t,e)=>Math.round(.5 * t + .5 * i[e])));
                return this.setSource([s, r, n, e[3]]),
                this
            }
            static fromRgb(t) {
                return Ot.fromRgba(t)
            }
            static fromRgba(t) {
                return new Ot(Ot.sourceFromRgb(t))
            }
            static sourceFromRgb(t) {
                const e = t.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
                if (e) {
                    const [t,i,s] = e.slice(1, 4).map((t=>{
                        const e = parseFloat(t);
                        return t.endsWith("%") ? Math.round(2.55 * e) : e
                    }
                    ));
                    return [t, i, s, Ct(e[4])]
                }
            }
            static fromHsl(t) {
                return Ot.fromHsla(t)
            }
            static fromHsla(t) {
                return new Ot(Ot.sourceFromHsl(t))
            }
            static sourceFromHsl(t) {
                const e = t.match(/^hsla?\(\s*([+-]?\d{1,3})\s*[\s|,]\s*(\d{1,3}%)\s*[\s|,]\s*(\d{1,3}%)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
                if (!e)
                    return;
                const i = (parseFloat(e[1]) % 360 + 360) % 360 / 360
                  , s = parseFloat(e[2]) / 100
                  , r = parseFloat(e[3]) / 100;
                let n, o, a;
                if (0 === s)
                    n = o = a = r;
                else {
                    const t = r <= .5 ? r * (s + 1) : r + s - r * s
                      , e = 2 * r - t;
                    n = bt(e, t, i + 1 / 3),
                    o = bt(e, t, i),
                    a = bt(e, t, i - 1 / 3)
                }
                return [Math.round(255 * n), Math.round(255 * o), Math.round(255 * a), Ct(e[4])]
            }
            static fromHex(t) {
                return new Ot(Ot.sourceFromHex(t))
            }
            static sourceFromHex(t) {
                if (t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
                    const e = t.slice(t.indexOf("#") + 1);
                    let i;
                    i = e.length <= 4 ? e.split("").map((t=>t + t)) : e.match(/.{2}/g);
                    const [s,r,n,o=255] = i.map((t=>parseInt(t, 16)));
                    return [s, r, n, o / 255]
                }
            }
        }
        const kt = (t,e)=>parseFloat(Number(t).toFixed(e))
          , Dt = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
            const i = /\D{0,2}$/.exec(t)
              , s = parseFloat(t)
              , r = h.DPI;
            switch (null == i ? void 0 : i[0]) {
            case "mm":
                return s * r / 25.4;
            case "cm":
                return s * r / 2.54;
            case "in":
                return s * r;
            case "pt":
                return s * r / 72;
            case "pc":
                return s * r / 72 * 12;
            case "em":
                return s * e;
            default:
                return s
            }
        }
          , Mt = t=>"matrix(" + t.map((t=>kt(t, h.NUM_FRACTION_DIGITS))).join(" ") + ")"
          , Et = function(t, e) {
            let i, s, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (e)
                if (e.toLive)
                    i = "url(#SVGID_".concat(e.id, ")");
                else {
                    const t = new Ot(e)
                      , r = t.getAlpha();
                    i = t.toRgb(),
                    1 !== r && (s = r.toString())
                }
            else
                i = "none";
            return r ? "".concat(t, ": ").concat(i, "; ").concat(s ? "".concat(t, "-opacity: ").concat(s, "; ") : "") : "".concat(t, '="').concat(i, '" ').concat(s ? "".concat(t, '-opacity="').concat(s, '" ') : "")
        }
          , jt = t=>!!t && void 0 !== t.toLive
          , Pt = t=>!!t && "function" == typeof t.toObject
          , At = t=>!!t && void 0 !== t.offsetX && void 0 !== t.source
          , Lt = t=>!!t && Array.isArray(t._objects)
          , Ft = t=>!!t && t.isType("Text", "IText", "Textbox")
          , Bt = t=>!!t && t.isType("IText", "Textbox")
          , Rt = t=>!!t && "function" == typeof t.onDragStart && "function" == typeof t.shouldStartDragging;
        function It(t) {
            const e = t && Wt(t);
            let i = 0
              , s = 0;
            if (!t || !e)
                return {
                    left: i,
                    top: s
                };
            const r = e.documentElement
              , n = e.body || {
                scrollLeft: 0,
                scrollTop: 0
            };
            for (; t && (t.parentNode || t.host) && ((t = t.parentNode || t.host) === e ? (i = n.scrollLeft || r.scrollLeft || 0,
            s = n.scrollTop || r.scrollTop || 0) : (i += t.scrollLeft || 0,
            s += t.scrollTop || 0),
            1 !== t.nodeType || "fixed" !== t.style.position); )
                ;
            return {
                left: i,
                top: s
            }
        }
        const Wt = t=>t.ownerDocument || null
          , Xt = t=>{
            var e;
            return (null === (e = t.ownerDocument) || void 0 === e ? void 0 : e.defaultView) || null
        }
        ;
        function Yt(t, e) {
            const i = t.style;
            i && ("string" == typeof e ? t.style.cssText += ";" + e : Object.entries(e).forEach((t=>{
                let[e,s] = t;
                return i.setProperty(e, s)
            }
            )))
        }
        const Ht = function(t, e, i) {
            let {width: s, height: r} = i
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            t.width = s,
            t.height = r,
            n > 1 && (t.setAttribute("width", (s * n).toString()),
            t.setAttribute("height", (r * n).toString()),
            e.scale(n, n))
        }
          , Vt = (t,e)=>{
            let {width: i, height: s} = e;
            i && (t.style.width = "number" == typeof i ? "".concat(i, "px") : i),
            s && (t.style.height = "number" == typeof s ? "".concat(s, "px") : s)
        }
        ;
        function zt(t) {
            return void 0 !== t.onselectstart && (t.onselectstart = ()=>!1),
            t.style.userSelect = L,
            t
        }
        class Gt {
            constructor(t) {
                s(this, "_originalCanvasStyle", void 0),
                s(this, "lower", void 0);
                const e = this.createLowerCanvas(t);
                this.lower = {
                    el: e,
                    ctx: e.getContext("2d")
                }
            }
            createLowerCanvas(t) {
                const e = (i = t) && void 0 !== i.getContext ? t : t && y().getElementById(t) || $();
                var i;
                if (e.hasAttribute("data-fabric"))
                    throw new l("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
                return this._originalCanvasStyle = e.style.cssText,
                e.setAttribute("data-fabric", "main"),
                e.classList.add("lower-canvas"),
                e
            }
            cleanupDOM(t) {
                let {width: e, height: i} = t;
                const {el: s} = this.lower;
                s.classList.remove("lower-canvas"),
                s.removeAttribute("data-fabric"),
                s.setAttribute("width", "".concat(e)),
                s.setAttribute("height", "".concat(i)),
                s.style.cssText = this._originalCanvasStyle || "",
                this._originalCanvasStyle = void 0
            }
            setDimensions(t, e) {
                const {el: i, ctx: s} = this.lower;
                Ht(i, s, t, e)
            }
            setCSSDimensions(t) {
                Vt(this.lower.el, t)
            }
            calcOffset() {
                return function(t) {
                    var e;
                    let i = {
                        left: 0,
                        top: 0
                    };
                    const s = t && Wt(t)
                      , r = {
                        left: 0,
                        top: 0
                    }
                      , n = {
                        borderLeftWidth: E,
                        borderTopWidth: j,
                        paddingLeft: E,
                        paddingTop: j
                    };
                    if (!s)
                        return r;
                    const o = (null === (e = Xt(t)) || void 0 === e ? void 0 : e.getComputedStyle(t, null)) || {};
                    for (const t in n)
                        r[n[t]] += parseInt(o[t], 10) || 0;
                    const a = s.documentElement;
                    void 0 !== t.getBoundingClientRect && (i = t.getBoundingClientRect());
                    const h = It(t);
                    return {
                        left: i.left + h.left - (a.clientLeft || 0) + r.left,
                        top: i.top + h.top - (a.clientTop || 0) + r.top
                    }
                }(this.lower.el)
            }
            dispose() {
                v().dispose(this.lower.el),
                delete this.lower
            }
        }
        const Ut = {
            backgroundVpt: !0,
            backgroundColor: "",
            overlayVpt: !0,
            overlayColor: "",
            includeDefaultValues: !0,
            svgViewportTransformation: !0,
            renderOnAddRemove: !0,
            skipOffscreen: !0,
            enableRetinaScaling: !0,
            imageSmoothingEnabled: !0,
            controlsAboveOverlay: !1,
            allowTouchScrolling: !1,
            viewportTransform: [...O]
        };
        class Nt extends (N(q)) {
            get lowerCanvasEl() {
                var t;
                return null === (t = this.elements.lower) || void 0 === t ? void 0 : t.el
            }
            get contextContainer() {
                var t;
                return null === (t = this.elements.lower) || void 0 === t ? void 0 : t.ctx
            }
            static getDefaults() {
                return Nt.ownDefaults
            }
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(),
                Object.assign(this, this.constructor.getDefaults()),
                this.set(e),
                this.initElements(t),
                this._setDimensionsImpl({
                    width: this.width || this.elements.lower.el.width || 0,
                    height: this.height || this.elements.lower.el.height || 0
                }),
                this.viewportTransform = [...this.viewportTransform],
                this.calcViewportBoundaries()
            }
            initElements(t) {
                this.elements = new Gt(t)
            }
            add() {
                const t = super.add(...arguments);
                return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(),
                t
            }
            insertAt(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                    i[s - 1] = arguments[s];
                const r = super.insertAt(t, ...i);
                return i.length > 0 && this.renderOnAddRemove && this.requestRenderAll(),
                r
            }
            remove() {
                const t = super.remove(...arguments);
                return t.length > 0 && this.renderOnAddRemove && this.requestRenderAll(),
                t
            }
            _onObjectAdded(t) {
                t.canvas && t.canvas !== this && (c("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"),
                t.canvas.remove(t)),
                t._set("canvas", this),
                t.setCoords(),
                this.fire("object:added", {
                    target: t
                }),
                t.fire("added", {
                    target: this
                })
            }
            _onObjectRemoved(t) {
                t._set("canvas", void 0),
                this.fire("object:removed", {
                    target: t
                }),
                t.fire("removed", {
                    target: this
                })
            }
            _onStackOrderChanged() {
                this.renderOnAddRemove && this.requestRenderAll()
            }
            _isRetinaScaling() {
                return h.devicePixelRatio > 1 && this.enableRetinaScaling
            }
            getRetinaScaling() {
                return this._isRetinaScaling() ? Math.max(1, h.devicePixelRatio) : 1
            }
            calcOffset() {
                return this._offset = this.elements.calcOffset()
            }
            getWidth() {
                return this.width
            }
            getHeight() {
                return this.height
            }
            setWidth(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.setDimensions({
                    width: t
                }, e)
            }
            setHeight(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.setDimensions({
                    height: t
                }, e)
            }
            _setDimensionsImpl(t) {
                let {cssOnly: i=!1, backstoreOnly: s=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!i) {
                    const i = e({
                        width: this.width,
                        height: this.height
                    }, t);
                    this.elements.setDimensions(i, this.getRetinaScaling()),
                    this.hasLostContext = !0,
                    this.width = i.width,
                    this.height = i.height
                }
                s || this.elements.setCSSDimensions(t),
                this.calcOffset()
            }
            setDimensions(t) {
                let {cssOnly: e=!1, backstoreOnly: i=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._setDimensionsImpl(t, {
                    cssOnly: e,
                    backstoreOnly: i
                }),
                e || this.requestRenderAll()
            }
            getZoom() {
                return this.viewportTransform[0]
            }
            setViewportTransform(t) {
                const e = this.backgroundImage
                  , i = this.overlayImage
                  , s = this._objects.length;
                this.viewportTransform = t;
                for (let t = 0; t < s; t++) {
                    const e = this._objects[t];
                    e.group || e.setCoords()
                }
                e && e.setCoords(),
                i && i.setCoords(),
                this.calcViewportBoundaries(),
                this.renderOnAddRemove && this.requestRenderAll()
            }
            zoomToPoint(t, e) {
                const i = t
                  , s = [...this.viewportTransform]
                  , r = st(t, rt(s));
                s[0] = e,
                s[3] = e;
                const n = st(r, s);
                s[4] += i.x - n.x,
                s[5] += i.y - n.y,
                this.setViewportTransform(s)
            }
            setZoom(t) {
                this.zoomToPoint(new G(0,0), t)
            }
            absolutePan(t) {
                const e = [...this.viewportTransform];
                return e[4] = -t.x,
                e[5] = -t.y,
                this.setViewportTransform(e)
            }
            relativePan(t) {
                return this.absolutePan(new G(-t.x - this.viewportTransform[4],-t.y - this.viewportTransform[5]))
            }
            getElement() {
                return this.elements.lower.el
            }
            clearContext(t) {
                t.clearRect(0, 0, this.width, this.height)
            }
            getContext() {
                return this.elements.lower.ctx
            }
            clear() {
                this.remove(...this.getObjects()),
                this.backgroundImage = void 0,
                this.overlayImage = void 0,
                this.backgroundColor = "",
                this.overlayColor = "",
                this.clearContext(this.getContext()),
                this.fire("canvas:cleared"),
                this.renderOnAddRemove && this.requestRenderAll()
            }
            renderAll() {
                this.cancelRequestedRender(),
                this.destroyed || this.renderCanvas(this.getContext(), this._objects)
            }
            renderAndReset() {
                this.nextRenderHandle = 0,
                this.renderAll()
            }
            requestRenderAll() {
                this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = Z((()=>this.renderAndReset())))
            }
            calcViewportBoundaries() {
                const t = this.width
                  , e = this.height
                  , i = rt(this.viewportTransform)
                  , s = st({
                    x: 0,
                    y: 0
                }, i)
                  , r = st({
                    x: t,
                    y: e
                }, i)
                  , n = s.min(r)
                  , o = s.max(r);
                return this.vptCoords = {
                    tl: n,
                    tr: new G(o.x,n.y),
                    bl: new G(n.x,o.y),
                    br: o
                }
            }
            cancelRequestedRender() {
                var t;
                this.nextRenderHandle && (t = this.nextRenderHandle,
                x().cancelAnimationFrame(t),
                this.nextRenderHandle = 0)
            }
            drawControls(t) {}
            renderCanvas(t, e) {
                if (this.destroyed)
                    return;
                const i = this.viewportTransform
                  , s = this.clipPath;
                this.calcViewportBoundaries(),
                this.clearContext(t),
                t.imageSmoothingEnabled = this.imageSmoothingEnabled,
                t.patternQuality = "best",
                this.fire("before:render", {
                    ctx: t
                }),
                this._renderBackground(t),
                t.save(),
                t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                this._renderObjects(t, e),
                t.restore(),
                this.controlsAboveOverlay || this.drawControls(t),
                s && (s._set("canvas", this),
                s.shouldCache(),
                s._transformDone = !0,
                s.renderCache({
                    forClipping: !0
                }),
                this.drawClipPathOnCanvas(t, s)),
                this._renderOverlay(t),
                this.controlsAboveOverlay && this.drawControls(t),
                this.fire("after:render", {
                    ctx: t
                }),
                this.__cleanupTask && (this.__cleanupTask(),
                this.__cleanupTask = void 0)
            }
            drawClipPathOnCanvas(t, e) {
                const i = this.viewportTransform;
                t.save(),
                t.transform(...i),
                t.globalCompositeOperation = "destination-in",
                e.transform(t),
                t.scale(1 / e.zoomX, 1 / e.zoomY),
                t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY),
                t.restore()
            }
            _renderObjects(t, e) {
                for (let i = 0, s = e.length; i < s; ++i)
                    e[i] && e[i].render(t)
            }
            _renderBackgroundOrOverlay(t, e) {
                const i = this["".concat(e, "Color")]
                  , s = this["".concat(e, "Image")]
                  , r = this.viewportTransform
                  , n = this["".concat(e, "Vpt")];
                if (!i && !s)
                    return;
                const o = jt(i);
                if (i) {
                    if (t.save(),
                    t.beginPath(),
                    t.moveTo(0, 0),
                    t.lineTo(this.width, 0),
                    t.lineTo(this.width, this.height),
                    t.lineTo(0, this.height),
                    t.closePath(),
                    t.fillStyle = o ? i.toLive(t) : i,
                    n && t.transform(...r),
                    o) {
                        t.transform(1, 0, 0, 1, i.offsetX || 0, i.offsetY || 0);
                        const e = i.gradientTransform || i.patternTransform;
                        e && t.transform(...e)
                    }
                    t.fill(),
                    t.restore()
                }
                if (s) {
                    t.save();
                    const {skipOffscreen: e} = this;
                    this.skipOffscreen = n,
                    n && t.transform(...r),
                    s.render(t),
                    this.skipOffscreen = e,
                    t.restore()
                }
            }
            _renderBackground(t) {
                this._renderBackgroundOrOverlay(t, "background")
            }
            _renderOverlay(t) {
                this._renderBackgroundOrOverlay(t, "overlay")
            }
            getCenter() {
                return {
                    top: this.height / 2,
                    left: this.width / 2
                }
            }
            getCenterPoint() {
                return new G(this.width / 2,this.height / 2)
            }
            centerObjectH(t) {
                return this._centerObject(t, new G(this.getCenterPoint().x,t.getCenterPoint().y))
            }
            centerObjectV(t) {
                return this._centerObject(t, new G(t.getCenterPoint().x,this.getCenterPoint().y))
            }
            centerObject(t) {
                return this._centerObject(t, this.getCenterPoint())
            }
            viewportCenterObject(t) {
                return this._centerObject(t, this.getVpCenter())
            }
            viewportCenterObjectH(t) {
                return this._centerObject(t, new G(this.getVpCenter().x,t.getCenterPoint().y))
            }
            viewportCenterObjectV(t) {
                return this._centerObject(t, new G(t.getCenterPoint().x,this.getVpCenter().y))
            }
            getVpCenter() {
                return st(this.getCenterPoint(), rt(this.viewportTransform))
            }
            _centerObject(t, e) {
                t.setXY(e, M, M),
                t.setCoords(),
                this.renderOnAddRemove && this.requestRenderAll()
            }
            toDatalessJSON(t) {
                return this.toDatalessObject(t)
            }
            toObject(t) {
                return this._toObjectMethod("toObject", t)
            }
            toJSON() {
                return this.toObject()
            }
            toDatalessObject(t) {
                return this._toObjectMethod("toDatalessObject", t)
            }
            _toObjectMethod(t, i) {
                const s = this.clipPath
                  , r = s && !s.excludeFromExport ? this._toObject(s, t, i) : null;
                return e(e(e({
                    version: b
                }, yt(this, i)), {}, {
                    objects: this._objects.filter((t=>!t.excludeFromExport)).map((e=>this._toObject(e, t, i)))
                }, this.__serializeBgOverlay(t, i)), r ? {
                    clipPath: r
                } : null)
            }
            _toObject(t, e, i) {
                let s;
                this.includeDefaultValues || (s = t.includeDefaultValues,
                t.includeDefaultValues = !1);
                const r = t[e](i);
                return this.includeDefaultValues || (t.includeDefaultValues = !!s),
                r
            }
            __serializeBgOverlay(t, e) {
                const i = {}
                  , s = this.backgroundImage
                  , r = this.overlayImage
                  , n = this.backgroundColor
                  , o = this.overlayColor;
                return jt(n) ? n.excludeFromExport || (i.background = n.toObject(e)) : n && (i.background = n),
                jt(o) ? o.excludeFromExport || (i.overlay = o.toObject(e)) : o && (i.overlay = o),
                s && !s.excludeFromExport && (i.backgroundImage = this._toObject(s, t, e)),
                r && !r.excludeFromExport && (i.overlayImage = this._toObject(r, t, e)),
                i
            }
            toSVG() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                t.reviver = e;
                const i = [];
                return this._setSVGPreamble(i, t),
                this._setSVGHeader(i, t),
                this.clipPath && i.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, ')" >\n')),
                this._setSVGBgOverlayColor(i, "background"),
                this._setSVGBgOverlayImage(i, "backgroundImage", e),
                this._setSVGObjects(i, e),
                this.clipPath && i.push("</g>\n"),
                this._setSVGBgOverlayColor(i, "overlay"),
                this._setSVGBgOverlayImage(i, "overlayImage", e),
                i.push("</svg>"),
                i.join("")
            }
            _setSVGPreamble(t, e) {
                e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
            }
            _setSVGHeader(t, e) {
                const i = e.width || "".concat(this.width)
                  , s = e.height || "".concat(this.height)
                  , r = h.NUM_FRACTION_DIGITS
                  , n = e.viewBox;
                let o;
                if (n)
                    o = 'viewBox="'.concat(n.x, " ").concat(n.y, " ").concat(n.width, " ").concat(n.height, '" ');
                else if (this.svgViewportTransformation) {
                    const t = this.viewportTransform;
                    o = 'viewBox="'.concat(kt(-t[4] / t[0], r), " ").concat(kt(-t[5] / t[3], r), " ").concat(kt(this.width / t[0], r), " ").concat(kt(this.height / t[3], r), '" ')
                } else
                    o = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
                t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', i, '" ', 'height="', s, '" ', o, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", b, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), "</defs>\n")
            }
            createSVGClipPathMarkup(t) {
                const e = this.clipPath;
                return e ? (e.clipPathId = "CLIPPATH_".concat(J()),
                '<clipPath id="'.concat(e.clipPathId, '" >\n').concat(e.toClipPathSVG(t.reviver), "</clipPath>\n")) : ""
            }
            createSVGRefElementsMarkup() {
                return ["background", "overlay"].map((t=>{
                    const e = this["".concat(t, "Color")];
                    if (jt(e)) {
                        const i = this["".concat(t, "Vpt")]
                          , s = this.viewportTransform
                          , r = {
                            isType: ()=>!1,
                            width: this.width / (i ? s[0] : 1),
                            height: this.height / (i ? s[3] : 1)
                        };
                        return e.toSVG(r, {
                            additionalTransform: i ? Mt(s) : ""
                        })
                    }
                }
                )).join("")
            }
            createSVGFontFacesMarkup() {
                const t = []
                  , e = {}
                  , i = h.fontPaths;
                this._objects.forEach((function e(i) {
                    t.push(i),
                    Lt(i) && i._objects.forEach(e)
                }
                )),
                t.forEach((t=>{
                    if (!Ft(t))
                        return;
                    const {styles: s, fontFamily: r} = t;
                    !e[r] && i[r] && (e[r] = !0,
                    s && Object.values(s).forEach((t=>{
                        Object.values(t).forEach((t=>{
                            let {fontFamily: s=""} = t;
                            !e[s] && i[s] && (e[s] = !0)
                        }
                        ))
                    }
                    )))
                }
                ));
                const s = Object.keys(e).map((t=>"\t\t@font-face {\n\t\t\tfont-family: '".concat(t, "';\n\t\t\tsrc: url('").concat(i[t], "');\n\t\t}\n"))).join("");
                return s ? '\t<style type="text/css"><![CDATA[\n'.concat(s, "]]></style>\n") : ""
            }
            _setSVGObjects(t, e) {
                this.forEachObject((i=>{
                    i.excludeFromExport || this._setSVGObject(t, i, e)
                }
                ))
            }
            _setSVGObject(t, e, i) {
                t.push(e.toSVG(i))
            }
            _setSVGBgOverlayImage(t, e, i) {
                const s = this[e];
                s && !s.excludeFromExport && s.toSVG && t.push(s.toSVG(i))
            }
            _setSVGBgOverlayColor(t, e) {
                const i = this["".concat(e, "Color")];
                if (i)
                    if (jt(i)) {
                        const s = i.repeat || ""
                          , r = this.width
                          , n = this.height
                          , o = this["".concat(e, "Vpt")] ? Mt(rt(this.viewportTransform)) : "";
                        t.push('<rect transform="'.concat(o, " translate(").concat(r / 2, ",").concat(n / 2, ')" x="').concat(i.offsetX - r / 2, '" y="').concat(i.offsetY - n / 2, '" width="').concat("repeat-y" !== s && "no-repeat" !== s || !At(i) ? r : i.source.width, '" height="').concat("repeat-x" !== s && "no-repeat" !== s || !At(i) ? n : i.source.height, '" fill="url(#SVGID_').concat(i.id, ')"></rect>\n'))
                    } else
                        t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', i, '"', "></rect>\n")
            }
            loadFromJSON(t, e) {
                let {signal: i} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t)
                    return Promise.reject(new l("`json` is undefined"));
                const s = "string" == typeof t ? JSON.parse(t) : t
                  , {objects: r=[], backgroundImage: n, background: o, overlayImage: a, overlay: h, clipPath: c} = s
                  , d = this.renderOnAddRemove;
                return this.renderOnAddRemove = !1,
                Promise.all([mt(r, {
                    reviver: e,
                    signal: i
                }), vt({
                    backgroundImage: n,
                    backgroundColor: o,
                    overlayImage: a,
                    overlayColor: h,
                    clipPath: c
                }, {
                    signal: i
                })]).then((t=>{
                    let[e,i] = t;
                    return this.clear(),
                    this.add(...e),
                    this.set(s),
                    this.set(i),
                    this.renderOnAddRemove = d,
                    this
                }
                ))
            }
            clone(t) {
                const e = this.toObject(t);
                return this.cloneWithoutData().loadFromJSON(e)
            }
            cloneWithoutData() {
                const t = $();
                return t.width = this.width,
                t.height = this.height,
                new this.constructor(t)
            }
            toDataURL() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {format: e="png", quality: i=1, multiplier: s=1, enableRetinaScaling: r=!1} = t
                  , n = s * (r ? this.getRetinaScaling() : 1);
                return Q(this.toCanvasElement(n, t), e, i)
            }
            toCanvasElement() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , {width: e, height: i, left: s, top: r, filter: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const o = (e || this.width) * t
                  , a = (i || this.height) * t
                  , h = this.getZoom()
                  , c = this.width
                  , l = this.height
                  , d = h * t
                  , u = this.viewportTransform
                  , g = [d, 0, 0, d, (u[4] - (s || 0)) * t, (u[5] - (r || 0)) * t]
                  , f = this.enableRetinaScaling
                  , p = $()
                  , m = n ? this._objects.filter((t=>n(t))) : this._objects;
                return p.width = o,
                p.height = a,
                this.enableRetinaScaling = !1,
                this.viewportTransform = g,
                this.width = o,
                this.height = a,
                this.calcViewportBoundaries(),
                this.renderCanvas(p.getContext("2d"), m),
                this.viewportTransform = u,
                this.width = c,
                this.height = l,
                this.calcViewportBoundaries(),
                this.enableRetinaScaling = f,
                p
            }
            dispose() {
                return !this.disposed && this.elements.cleanupDOM({
                    width: this.width,
                    height: this.height
                }),
                W.cancelByCanvas(this),
                this.disposed = !0,
                new Promise(((t,e)=>{
                    const i = ()=>{
                        this.destroy(),
                        t(!0)
                    }
                    ;
                    i.kill = e,
                    this.__cleanupTask && this.__cleanupTask.kill("aborted"),
                    this.destroyed ? t(!1) : this.nextRenderHandle ? this.__cleanupTask = i : i()
                }
                ))
            }
            destroy() {
                this.destroyed = !0,
                this.cancelRequestedRender(),
                this.forEachObject((t=>t.dispose())),
                this._objects = [],
                this.backgroundImage && this.backgroundImage.dispose(),
                this.backgroundImage = void 0,
                this.overlayImage && this.overlayImage.dispose(),
                this.overlayImage = void 0,
                this.elements.dispose()
            }
            toString() {
                return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>")
            }
        }
        s(Nt, "ownDefaults", Ut);
        const qt = ["touchstart", "touchmove", "touchend"]
          , Zt = t=>qt.includes(t.type) || "touch" === t.pointerType
          , Kt = t=>{
            t.preventDefault(),
            t.stopPropagation()
        }
          , Jt = t=>{
            if (0 === t.length)
                return {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
            const {min: e, max: i} = t.reduce(((t,e)=>{
                let {min: i, max: s} = t;
                return {
                    min: i.min(e),
                    max: s.max(e)
                }
            }
            ), {
                min: new G(t[0]),
                max: new G(t[0])
            })
              , s = i.subtract(e);
            return {
                left: e.x,
                top: e.y,
                width: s.x,
                height: s.y
            }
        }
          , $t = ["translateX", "translateY", "scaleX", "scaleY"]
          , Qt = (t,e)=>{
            const i = at(e)
              , {translateX: s, translateY: n, scaleX: o, scaleY: a} = i
              , h = r(i, $t)
              , c = new G(s,n);
            t.flipX = !1,
            t.flipY = !1,
            Object.assign(t, h),
            t.set({
                scaleX: o,
                scaleY: a
            }),
            t.setPositionByOrigin(c, M, M)
        }
          , te = t=>{
            t.scaleX = 1,
            t.scaleY = 1,
            t.skewX = 0,
            t.skewY = 0,
            t.flipX = !1,
            t.flipY = !1,
            t.rotate(0)
        }
          , ee = t=>({
            scaleX: t.scaleX,
            scaleY: t.scaleY,
            skewX: t.skewX,
            skewY: t.skewY,
            angle: t.angle,
            left: t.left,
            flipX: t.flipX,
            flipY: t.flipY,
            top: t.top
        })
          , ie = (t,e,i)=>{
            const s = t / 2
              , r = e / 2
              , n = ft(i)
              , o = [new G(-s,-r), new G(s,-r), new G(-s,r), new G(s,r)].map((t=>t.transform(n)))
              , a = Jt(o);
            return new G(a.width,a.height)
        }
          , se = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
            return nt(rt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O), t)
        }
          , re = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O;
            return t.transform(se(e, i))
        }
          , ne = (t,i)=>{
            var s;
            const {transform: {target: r}} = i;
            null === (s = r.canvas) || void 0 === s || s.fire("object:".concat(t), e(e({}, i), {}, {
                target: r
            })),
            r.fire(t, i)
        }
          , oe = {
            left: -.5,
            top: -.5,
            center: 0,
            bottom: .5,
            right: .5
        }
          , ae = t=>"string" == typeof t ? oe[t] : t - .5
          , he = "not-allowed";
        function ce(t) {
            return t.originX === M && t.originY === M
        }
        function le(t) {
            return .5 - ae(t)
        }
        const de = (t,e)=>t[e]
          , ue = (t,e,i,s)=>({
            e: t,
            transform: e,
            pointer: new G(i,s)
        });
        function ge(t, e) {
            const i = t.getTotalAngle() + et(Math.atan2(e.y, e.x)) + 360;
            return Math.round(i % 360 / 45)
        }
        function fe(t, e, i, s, r) {
            var n;
            let {target: o, corner: a} = t;
            const h = o.controls[a]
              , c = (null === (n = o.canvas) || void 0 === n ? void 0 : n.getZoom()) || 1
              , l = o.padding / c
              , d = function(t, e, i, s) {
                const r = t.getRelativeCenterPoint()
                  , n = void 0 !== i && void 0 !== s ? t.translateToGivenOrigin(r, M, M, i, s) : new G(t.left,t.top);
                return (t.angle ? e.rotate(-tt(t.angle), r) : e).subtract(n)
            }(o, new G(s,r), e, i);
            return d.x >= l && (d.x -= l),
            d.x <= -l && (d.x += l),
            d.y >= l && (d.y -= l),
            d.y <= l && (d.y += l),
            d.x -= h.offsetX,
            d.y -= h.offsetY,
            d
        }
        const pe = (t,e,i,s)=>{
            const {target: r, offsetX: n, offsetY: o} = e
              , a = i - n
              , h = s - o
              , c = !de(r, "lockMovementX") && r.left !== a
              , l = !de(r, "lockMovementY") && r.top !== h;
            return c && r.set(E, a),
            l && r.set(j, h),
            (c || l) && ne("moving", ue(t, e, i, s)),
            c || l
        }
        ;
        class me {
            getSvgStyles(t) {
                const e = this.fillRule ? this.fillRule : "nonzero"
                  , i = this.strokeWidth ? this.strokeWidth : "0"
                  , s = this.strokeDashArray ? this.strokeDashArray.join(" ") : L
                  , r = this.strokeDashOffset ? this.strokeDashOffset : "0"
                  , n = this.strokeLineCap ? this.strokeLineCap : "butt"
                  , o = this.strokeLineJoin ? this.strokeLineJoin : "miter"
                  , a = this.strokeMiterLimit ? this.strokeMiterLimit : "4"
                  , h = void 0 !== this.opacity ? this.opacity : "1"
                  , c = this.visible ? "" : " visibility: hidden;"
                  , l = t ? "" : this.getSvgFilter()
                  , d = Et("fill", this.fill);
                return [Et("stroke", this.stroke), "stroke-width: ", i, "; ", "stroke-dasharray: ", s, "; ", "stroke-linecap: ", n, "; ", "stroke-dashoffset: ", r, "; ", "stroke-linejoin: ", o, "; ", "stroke-miterlimit: ", a, "; ", d, "fill-rule: ", e, "; ", "opacity: ", h, ";", l, c].join("")
            }
            getSvgFilter() {
                return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : ""
            }
            getSvgCommons() {
                return [this.id ? 'id="'.concat(this.id, '" ') : "", this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""].join("")
            }
            getSvgTransform(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                const i = t ? this.calcTransformMatrix() : this.calcOwnMatrix()
                  , s = 'transform="'.concat(Mt(i));
                return "".concat(s).concat(e, '" ')
            }
            _toSVG(t) {
                return [""]
            }
            toSVG(t) {
                return this._createBaseSVGMarkup(this._toSVG(t), {
                    reviver: t
                })
            }
            toClipPathSVG(t) {
                return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(t), {
                    reviver: t
                })
            }
            _createBaseClipPathSVGMarkup(t) {
                let {reviver: e, additionalTransform: i=""} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const s = [this.getSvgTransform(!0, i), this.getSvgCommons()].join("")
                  , r = t.indexOf("COMMON_PARTS");
                return t[r] = s,
                e ? e(t.join("")) : t.join("")
            }
            _createBaseSVGMarkup(t) {
                let {noStyle: e, reviver: i, withShadow: s, additionalTransform: r} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = e ? "" : 'style="'.concat(this.getSvgStyles(), '" ')
                  , o = s ? 'style="'.concat(this.getSvgFilter(), '" ') : ""
                  , a = this.clipPath
                  , h = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : ""
                  , c = a && a.absolutePositioned
                  , l = this.stroke
                  , d = this.fill
                  , u = this.shadow
                  , g = []
                  , f = t.indexOf("COMMON_PARTS");
                let p;
                a && (a.clipPathId = "CLIPPATH_".concat(J()),
                p = '<clipPath id="'.concat(a.clipPathId, '" >\n').concat(a.toClipPathSVG(i), "</clipPath>\n")),
                c && g.push("<g ", o, this.getSvgCommons(), " >\n"),
                g.push("<g ", this.getSvgTransform(!1), c ? "" : o + this.getSvgCommons(), " >\n");
                const m = [n, h, e ? "" : this.addPaintOrder(), " ", r ? 'transform="'.concat(r, '" ') : ""].join("");
                return t[f] = m,
                jt(d) && g.push(d.toSVG(this)),
                jt(l) && g.push(l.toSVG(this)),
                u && g.push(u.toSVG(this)),
                a && g.push(p),
                g.push(t.join("")),
                g.push("</g>\n"),
                c && g.push("</g>\n"),
                i ? i(g.join("")) : g.join("")
            }
            addPaintOrder() {
                return "fill" !== this.paintFirst ? ' paint-order="'.concat(this.paintFirst, '" ') : ""
            }
        }
        const ve = (t,e,i,s)=>-i * Math.cos(t / s * C) + i + e
          , ye = ()=>!1;
        class xe {
            constructor(t) {
                let {startValue: e, byValue: i, duration: r=500, delay: n=0, easing: o=ve, onStart: a=w, onChange: h=w, onComplete: c=w, abort: l=ye, target: d} = t;
                s(this, "_state", "pending"),
                s(this, "durationProgress", 0),
                s(this, "valueProgress", 0),
                this.tick = this.tick.bind(this),
                this.duration = r,
                this.delay = n,
                this.easing = o,
                this._onStart = a,
                this._onChange = h,
                this._onComplete = c,
                this._abort = l,
                this.target = d,
                this.startValue = e,
                this.byValue = i,
                this.value = this.startValue,
                this.endValue = Object.freeze(this.calculate(this.duration).value)
            }
            get state() {
                return this._state
            }
            isDone() {
                return "aborted" === this._state || "completed" === this._state
            }
            start() {
                const t = t=>{
                    "pending" === this._state && (this.startTime = t || +new Date,
                    this._state = "running",
                    this._onStart(),
                    this.tick(this.startTime))
                }
                ;
                this.register(),
                this.delay > 0 ? setTimeout((()=>Z(t)), this.delay) : Z(t)
            }
            tick(t) {
                const e = (t || +new Date) - this.startTime
                  , i = Math.min(e, this.duration);
                this.durationProgress = i / this.duration;
                const {value: s, valueProgress: r} = this.calculate(i);
                this.value = Object.freeze(s),
                this.valueProgress = r,
                "aborted" !== this._state && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted",
                this.unregister()) : e >= this.duration ? (this.durationProgress = this.valueProgress = 1,
                this._onChange(this.endValue, this.valueProgress, this.durationProgress),
                this._state = "completed",
                this._onComplete(this.endValue, this.valueProgress, this.durationProgress),
                this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress),
                Z(this.tick)))
            }
            register() {
                W.push(this)
            }
            unregister() {
                W.remove(this)
            }
            abort() {
                this._state = "aborted",
                this.unregister()
            }
        }
        const _e = ["startValue", "endValue"];
        class be extends xe {
            constructor(t) {
                let {startValue: i=0, endValue: s=100} = t;
                super(e(e({}, r(t, _e)), {}, {
                    startValue: i,
                    byValue: s - i
                }))
            }
            calculate(t) {
                const e = this.easing(t, this.startValue, this.byValue, this.duration);
                return {
                    value: e,
                    valueProgress: Math.abs((e - this.startValue) / this.byValue)
                }
            }
        }
        const we = ["startValue", "endValue"];
        class Ce extends xe {
            constructor(t) {
                let {startValue: i=[0], endValue: s=[100]} = t;
                super(e(e({}, r(t, we)), {}, {
                    startValue: i,
                    byValue: s.map(((t,e)=>t - i[e]))
                }))
            }
            calculate(t) {
                const e = this.startValue.map(((e,i)=>this.easing(t, e, this.byValue[i], this.duration, i)));
                return {
                    value: e,
                    valueProgress: Math.abs((e[0] - this.startValue[0]) / this.byValue[0])
                }
            }
        }
        const Se = (t,e,i)=>Math.max(t, Math.min(e, i))
          , Te = ["startValue", "endValue", "easing", "onChange", "onComplete", "abort"]
          , Oe = (t,e,i,s)=>e + i * (1 - Math.cos(t / s * C))
          , ke = t=>t && ((e,i,s)=>t(new Ot(e).toRgba(), i, s));
        class De extends xe {
            constructor(t) {
                let {startValue: i, endValue: s, easing: n=Oe, onChange: o, onComplete: a, abort: h} = t
                  , c = r(t, Te);
                const l = new Ot(i).getSource()
                  , d = new Ot(s).getSource();
                super(e(e({}, c), {}, {
                    startValue: l,
                    byValue: d.map(((t,e)=>t - l[e])),
                    easing: n,
                    onChange: ke(o),
                    onComplete: ke(a),
                    abort: ke(h)
                }))
            }
            calculate(t) {
                const [e,i,s,r] = this.startValue.map(((e,i)=>this.easing(t, e, this.byValue[i], this.duration, i)))
                  , n = [...[e, i, s].map(Math.round), Se(0, r, 1)];
                return {
                    value: n,
                    valueProgress: n.map(((t,e)=>0 !== this.byValue[e] ? Math.abs((t - this.startValue[e]) / this.byValue[e]) : 0)).find((t=>0 !== t)) || 0
                }
            }
        }
        function Me(t) {
            const e = (t=>Array.isArray(t.startValue) || Array.isArray(t.endValue))(t) ? new Ce(t) : new be(t);
            return e.start(),
            e
        }
        const Ee = new G(1,0)
          , je = new G
          , Pe = (t,e)=>t.rotate(e)
          , Ae = (t,e)=>new G(e).subtract(t)
          , Le = t=>t.distanceFrom(je)
          , Fe = (t,e)=>Math.atan2(Ie(t, e), We(t, e))
          , Be = t=>t.eq(je) ? t : t.scalarDivide(Le(t))
          , Re = function(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return Be(new G(-t.y,t.x).scalarMultiply(e ? 1 : -1))
        }
          , Ie = (t,e)=>t.x * e.y - t.y * e.x
          , We = (t,e)=>t.x * e.x + t.y * e.y
          , Xe = (t,e,i)=>{
            if (t.eq(e) || t.eq(i))
                return !0;
            const s = Ie(e, i)
              , r = Ie(e, t)
              , n = Ie(i, t);
            return s >= 0 ? r >= 0 && n <= 0 : !(r <= 0 && n >= 0)
        }
        ;
        class Ye {
            constructor(t) {
                this.status = t,
                this.points = []
            }
            includes(t) {
                return this.points.some((e=>e.eq(t)))
            }
            append() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return this.points = this.points.concat(e.filter((t=>!this.includes(t)))),
                this
            }
            static isPointContained(t, e, i) {
                let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (e.eq(i))
                    return t.eq(e);
                if (e.x === i.x)
                    return t.x === e.x && (s || t.y >= Math.min(e.y, i.y) && t.y <= Math.max(e.y, i.y));
                if (e.y === i.y)
                    return t.y === e.y && (s || t.x >= Math.min(e.x, i.x) && t.x <= Math.max(e.x, i.x));
                {
                    const r = Ae(e, i)
                      , n = Ae(e, t).divide(r);
                    return s ? Math.abs(n.x) === Math.abs(n.y) : n.x === n.y && n.x >= 0 && n.x <= 1
                }
            }
            static isPointInPolygon(t, e) {
                const i = new G(t).setX(Math.min(t.x - 1, ...e.map((t=>t.x))));
                let s = 0;
                for (let r = 0; r < e.length; r++) {
                    const n = this.intersectSegmentSegment(e[r], e[(r + 1) % e.length], t, i);
                    if (n.includes(t))
                        return !0;
                    s += Number("Intersection" === n.status)
                }
                return s % 2 == 1
            }
            static intersectLineLine(t, e, i, s) {
                let r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                  , n = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                const o = e.x - t.x
                  , a = e.y - t.y
                  , h = s.x - i.x
                  , c = s.y - i.y
                  , l = t.x - i.x
                  , d = t.y - i.y
                  , u = h * d - c * l
                  , g = o * d - a * l
                  , f = c * o - h * a;
                if (0 !== f) {
                    const e = u / f
                      , i = g / f;
                    return (r || 0 <= e && e <= 1) && (n || 0 <= i && i <= 1) ? new Ye("Intersection").append(new G(t.x + e * o,t.y + e * a)) : new Ye
                }
                if (0 === u || 0 === g) {
                    const o = r || n || Ye.isPointContained(t, i, s) || Ye.isPointContained(e, i, s) || Ye.isPointContained(i, t, e) || Ye.isPointContained(s, t, e);
                    return new Ye(o ? "Coincident" : void 0)
                }
                return new Ye("Parallel")
            }
            static intersectSegmentLine(t, e, i, s) {
                return Ye.intersectLineLine(t, e, i, s, !1, !0)
            }
            static intersectSegmentSegment(t, e, i, s) {
                return Ye.intersectLineLine(t, e, i, s, !1, !1)
            }
            static intersectLinePolygon(t, e, i) {
                let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                const r = new Ye
                  , n = i.length;
                for (let o, a, h, c = 0; c < n; c++) {
                    if (o = i[c],
                    a = i[(c + 1) % n],
                    h = Ye.intersectLineLine(t, e, o, a, s, !1),
                    "Coincident" === h.status)
                        return h;
                    r.append(...h.points)
                }
                return r.points.length > 0 && (r.status = "Intersection"),
                r
            }
            static intersectSegmentPolygon(t, e, i) {
                return Ye.intersectLinePolygon(t, e, i, !1)
            }
            static intersectPolygonPolygon(t, e) {
                const i = new Ye
                  , s = t.length
                  , r = [];
                for (let n = 0; n < s; n++) {
                    const o = t[n]
                      , a = t[(n + 1) % s]
                      , h = Ye.intersectSegmentPolygon(o, a, e);
                    "Coincident" === h.status ? (r.push(h),
                    i.append(o, a)) : i.append(...h.points)
                }
                return r.length > 0 && r.length === t.length ? new Ye("Coincident") : (i.points.length > 0 && (i.status = "Intersection"),
                i)
            }
            static intersectPolygonRectangle(t, e, i) {
                const s = e.min(i)
                  , r = e.max(i)
                  , n = new G(r.x,s.y)
                  , o = new G(s.x,r.y);
                return Ye.intersectPolygonPolygon(t, [s, n, r, o])
            }
        }
        class He extends q {
            _getTransformedDimensions() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const i = e({
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    skewX: this.skewX,
                    skewY: this.skewY,
                    width: this.width,
                    height: this.height,
                    strokeWidth: this.strokeWidth
                }, t)
                  , s = i.strokeWidth;
                let r = s
                  , n = 0;
                this.strokeUniform && (r = 0,
                n = s);
                const o = i.width + r
                  , a = i.height + r;
                let h;
                return h = 0 === i.skewX && 0 === i.skewY ? new G(o * i.scaleX,a * i.scaleY) : ie(o, a, i),
                h.scalarAdd(n)
            }
            translateToGivenOrigin(t, e, i, s, r) {
                let n = t.x
                  , o = t.y;
                const a = ae(s) - ae(e)
                  , h = ae(r) - ae(i);
                if (a || h) {
                    const t = this._getTransformedDimensions();
                    n += a * t.x,
                    o += h * t.y
                }
                return new G(n,o)
            }
            translateToCenterPoint(t, e, i) {
                const s = this.translateToGivenOrigin(t, e, i, M, M);
                return this.angle ? s.rotate(tt(this.angle), t) : s
            }
            translateToOriginPoint(t, e, i) {
                const s = this.translateToGivenOrigin(t, M, M, e, i);
                return this.angle ? s.rotate(tt(this.angle), t) : s
            }
            getCenterPoint() {
                const t = this.getRelativeCenterPoint();
                return this.group ? st(t, this.group.calcTransformMatrix()) : t
            }
            getRelativeCenterPoint() {
                return this.translateToCenterPoint(new G(this.left,this.top), this.originX, this.originY)
            }
            getPointByOrigin(t, e) {
                return this.translateToOriginPoint(this.getRelativeCenterPoint(), t, e)
            }
            setPositionByOrigin(t, e, i) {
                const s = this.translateToCenterPoint(t, e, i)
                  , r = this.translateToOriginPoint(s, this.originX, this.originY);
                this.set({
                    left: r.x,
                    top: r.y
                })
            }
            _getLeftTopCoords() {
                return this.translateToOriginPoint(this.getRelativeCenterPoint(), E, j)
            }
        }
        class Ve extends He {
            getX() {
                return this.getXY().x
            }
            setX(t) {
                this.setXY(this.getXY().setX(t))
            }
            getY() {
                return this.getXY().y
            }
            setY(t) {
                this.setXY(this.getXY().setY(t))
            }
            getRelativeX() {
                return this.left
            }
            setRelativeX(t) {
                this.left = t
            }
            getRelativeY() {
                return this.top
            }
            setRelativeY(t) {
                this.top = t
            }
            getXY() {
                const t = this.getRelativeXY();
                return this.group ? st(t, this.group.calcTransformMatrix()) : t
            }
            setXY(t, e, i) {
                this.group && (t = st(t, rt(this.group.calcTransformMatrix()))),
                this.setRelativeXY(t, e, i)
            }
            getRelativeXY() {
                return new G(this.left,this.top)
            }
            setRelativeXY(t, e, i) {
                this.setPositionByOrigin(t, e || this.originX, i || this.originY)
            }
            _getCoords() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t ? this.calcACoords() : this.calcLineCoords() : (this.aCoords || (this.aCoords = this.calcACoords()),
                this.lineCoords || (this.lineCoords = this.calcLineCoords()),
                t ? this.aCoords : this.lineCoords)
            }
            getCoords() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const {tl: i, tr: s, br: r, bl: n} = this._getCoords(t, e)
                  , o = [i, s, r, n];
                if (this.group) {
                    const t = this.group.calcTransformMatrix();
                    return o.map((e=>st(e, t)))
                }
                return o
            }
            intersectsWithRect(t, e, i, s) {
                const r = this.getCoords(i, s);
                return "Intersection" === Ye.intersectPolygonRectangle(r, t, e).status
            }
            intersectsWithObject(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const s = Ye.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i));
                return "Intersection" === s.status || "Coincident" === s.status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i)
            }
            isContainedWithinObject(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const s = this.getCoords(e, i);
                return i && t.getCoords(e, !0),
                s.every((e=>t.containsPoint(e)))
            }
            isContainedWithinRect(t, e, i, s) {
                const r = this.getBoundingRect(i, s);
                return r.left >= t.x && r.left + r.width <= e.x && r.top >= t.y && r.top + r.height <= e.y
            }
            isOverlapping(t) {
                return this.intersectsWithObject(t) || this.isContainedWithinObject(t) || t.isContainedWithinObject(this)
            }
            containsPoint(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return Ye.isPointInPolygon(t, this.getCoords(e, i))
            }
            isOnScreen() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this.canvas)
                    return !1;
                const {tl: e, br: i} = this.canvas.vptCoords;
                return !!this.getCoords(!0, t).some((t=>t.x <= i.x && t.x >= e.x && t.y <= i.y && t.y >= e.y)) || !!this.intersectsWithRect(e, i, !0, t) || this._containsCenterOfCanvas(e, i, t)
            }
            _containsCenterOfCanvas(t, e, i) {
                const s = t.midPointFrom(e);
                return this.containsPoint(s, !0, i)
            }
            isPartiallyOnScreen(t) {
                if (!this.canvas)
                    return !1;
                const {tl: e, br: i} = this.canvas.vptCoords;
                return !!this.intersectsWithRect(e, i, !0, t) || this.getCoords(!0, t).every((t=>(t.x >= i.x || t.x <= e.x) && (t.y >= i.y || t.y <= e.y))) && this._containsCenterOfCanvas(e, i, t)
            }
            getBoundingRect(t, e) {
                return Jt(this.getCoords(t, e))
            }
            getScaledWidth() {
                return this._getTransformedDimensions().x
            }
            getScaledHeight() {
                return this._getTransformedDimensions().y
            }
            scale(t) {
                this._set("scaleX", t),
                this._set("scaleY", t),
                this.setCoords()
            }
            scaleToWidth(t, e) {
                const i = this.getBoundingRect(e).width / this.getScaledWidth();
                return this.scale(t / this.width / i)
            }
            scaleToHeight(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const i = this.getBoundingRect(e).height / this.getScaledHeight();
                return this.scale(t / this.height / i)
            }
            getCanvasRetinaScaling() {
                var t;
                return (null === (t = this.canvas) || void 0 === t ? void 0 : t.getRetinaScaling()) || 1
            }
            getTotalAngle() {
                return this.group ? at(this.calcTransformMatrix()).angle : this.angle
            }
            calcLineCoords() {
                const t = this.getViewportTransform()
                  , e = this.padding
                  , i = tt(this.getTotalAngle())
                  , s = V(i) * e
                  , r = z(i) * e
                  , n = s + r
                  , o = s - r
                  , {tl: a, tr: h, bl: c, br: l} = this.calcACoords()
                  , d = {
                    tl: st(a, t),
                    tr: st(h, t),
                    bl: st(c, t),
                    br: st(l, t)
                };
                return e && (d.tl.x -= o,
                d.tl.y -= n,
                d.tr.x += n,
                d.tr.y -= o,
                d.bl.x -= n,
                d.bl.y += o,
                d.br.x += o,
                d.br.y += n),
                d
            }
            getViewportTransform() {
                var t;
                return (null === (t = this.canvas) || void 0 === t ? void 0 : t.viewportTransform) || O.concat()
            }
            calcACoords() {
                const t = ct({
                    angle: this.angle
                })
                  , {x: e, y: i} = this.getRelativeCenterPoint()
                  , s = ht(e, i)
                  , r = nt(s, t)
                  , n = this._getTransformedDimensions()
                  , o = n.x / 2
                  , a = n.y / 2;
                return {
                    tl: st({
                        x: -o,
                        y: -a
                    }, r),
                    tr: st({
                        x: o,
                        y: -a
                    }, r),
                    bl: st({
                        x: -o,
                        y: a
                    }, r),
                    br: st({
                        x: o,
                        y: a
                    }, r)
                }
            }
            setCoords() {
                this.aCoords = this.calcACoords(),
                this.lineCoords = this.group ? this.aCoords : this.calcLineCoords()
            }
            transformMatrixKey() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const e = "_";
                let i = "";
                return !t && this.group && (i = this.group.transformMatrixKey(t) + e),
                i + this.top + e + this.left + e + this.scaleX + e + this.scaleY + e + this.skewX + e + this.skewY + e + this.angle + e + this.originX + e + this.originY + e + this.width + e + this.height + e + this.strokeWidth + this.flipX + this.flipY
            }
            calcTransformMatrix() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = this.calcOwnMatrix();
                if (t || !this.group)
                    return e;
                const i = this.transformMatrixKey(t)
                  , s = this.matrixCache;
                return s && s.key === i ? s.value : (this.group && (e = nt(this.group.calcTransformMatrix(!1), e)),
                this.matrixCache = {
                    key: i,
                    value: e
                },
                e)
            }
            calcOwnMatrix() {
                const t = this.transformMatrixKey(!0)
                  , e = this.ownMatrixCache;
                if (e && e.key === t)
                    return e.value;
                const i = this.getRelativeCenterPoint()
                  , s = (t=>{
                    let {translateX: e=0, translateY: i=0, angle: s=0} = t
                      , n = r(t, it);
                    return ot([ht(e, i), s && ct({
                        angle: s
                    }), ft(n)])
                }
                )({
                    angle: this.angle,
                    translateX: i.x,
                    translateY: i.y,
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    skewX: this.skewX,
                    skewY: this.skewY,
                    flipX: this.flipX,
                    flipY: this.flipY
                });
                return this.ownMatrixCache = {
                    key: t,
                    value: s
                },
                s
            }
            _getNonTransformedDimensions() {
                return new G(this.width,this.height).scalarAdd(this.strokeWidth)
            }
            _calculateCurrentDimensions(t) {
                return this._getTransformedDimensions(t).transform(this.getViewportTransform(), !0).scalarAdd(2 * this.padding)
            }
        }
        class ze extends Ve {
            getParent(t) {
                return ((e = this.group) && e.isType("ActiveSelection") ? this.__owningGroup : this.group) || (t ? void 0 : this.canvas);
                var e
            }
            isDescendantOf(t) {
                return this.__owningGroup === t || this.group === t || this.canvas === t || !!this.__owningGroup && this.__owningGroup.isDescendantOf(t) || !!this.group && this.group.isDescendantOf(t)
            }
            getAncestors(t) {
                const e = [];
                let i = this;
                do {
                    i = i instanceof ze ? i.getParent(t) : void 0,
                    i && e.push(i)
                } while (i);
                return e
            }
            findCommonAncestors(t, e) {
                if (this === t)
                    return {
                        fork: [],
                        otherFork: [],
                        common: [this, ...this.getAncestors(e)]
                    };
                const i = this.getAncestors(e)
                  , s = t.getAncestors(e);
                if (0 === i.length && s.length > 0 && this === s[s.length - 1])
                    return {
                        fork: [],
                        otherFork: [t, ...s.slice(0, s.length - 1)],
                        common: [this]
                    };
                for (let e, r = 0; r < i.length; r++) {
                    if (e = i[r],
                    e === t)
                        return {
                            fork: [this, ...i.slice(0, r)],
                            otherFork: [],
                            common: i.slice(r)
                        };
                    for (let n = 0; n < s.length; n++) {
                        if (this === s[n])
                            return {
                                fork: [],
                                otherFork: [t, ...s.slice(0, n)],
                                common: [this, ...i]
                            };
                        if (e === s[n])
                            return {
                                fork: [this, ...i.slice(0, r)],
                                otherFork: [t, ...s.slice(0, n)],
                                common: i.slice(r)
                            }
                    }
                }
                return {
                    fork: [this, ...i],
                    otherFork: [t, ...s],
                    common: []
                }
            }
            hasCommonAncestors(t, e) {
                const i = this.findCommonAncestors(t, e);
                return i && !!i.common.length
            }
            isInFrontOf(t) {
                if (this === t)
                    return;
                const e = this.findCommonAncestors(t);
                if (!e)
                    return;
                if (e.fork.includes(t))
                    return !0;
                if (e.otherFork.includes(this))
                    return !1;
                const i = e.common[0];
                if (!i)
                    return;
                const s = e.fork.pop()
                  , r = e.otherFork.pop()
                  , n = i._objects.indexOf(s)
                  , o = i._objects.indexOf(r);
                return n > -1 && n > o
            }
        }
        class Ge extends ze {
            animate(t, e) {
                return Object.entries(t).reduce(((t,i)=>{
                    let[s,r] = i;
                    return t[s] = this._animate(s, r, e),
                    t
                }
                ), {})
            }
            _animate(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const s = t.split(".")
                  , r = this.colorProperties.includes(s[s.length - 1])
                  , {easing: n, duration: o, abort: a, startValue: h, onChange: c, onComplete: l} = i
                  , d = {
                    target: this,
                    startValue: null != h ? h : s.reduce(((t,e)=>t[e]), this),
                    endValue: e,
                    easing: n,
                    duration: o,
                    abort: null == a ? void 0 : a.bind(this),
                    onChange: (t,e,i)=>{
                        s.reduce(((e,i,r)=>(r === s.length - 1 && (e[i] = t),
                        e[i])), this),
                        c && c(t, e, i)
                    }
                    ,
                    onComplete: (t,e,i)=>{
                        this.setCoords(),
                        l && l(t, e, i)
                    }
                };
                return r ? function(t) {
                    const e = new De(t);
                    return e.start(),
                    e
                }(d) : Me(d)
            }
        }
        class Ue {
            constructor(t) {
                const e = "string" == typeof t ? Ue.parseShadow(t) : t;
                Object.assign(this, this.constructor.ownDefaults);
                for (const t in e)
                    this[t] = e[t];
                this.id = J()
            }
            static parseShadow(t) {
                const e = t.trim()
                  , [i,s=0,r=0,n=0] = (Ue.reOffsetsAndBlur.exec(e) || []).map((t=>parseFloat(t) || 0));
                return {
                    color: (e.replace(Ue.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(),
                    offsetX: s,
                    offsetY: r,
                    blur: n
                }
            }
            toString() {
                return [this.offsetX, this.offsetY, this.blur, this.color].join("px ")
            }
            toSVG(t) {
                const e = Pe(new G(this.offsetX,this.offsetY), tt(-t.angle))
                  , i = new Ot(this.color);
                let s = 40
                  , r = 40;
                return t.width && t.height && (s = 100 * kt((Math.abs(e.x) + this.blur) / t.width, h.NUM_FRACTION_DIGITS) + 20,
                r = 100 * kt((Math.abs(e.y) + this.blur) / t.height, h.NUM_FRACTION_DIGITS) + 20),
                t.flipX && (e.x *= -1),
                t.flipY && (e.y *= -1),
                '<filter id="SVGID_'.concat(this.id, '" y="-').concat(r, '%" height="').concat(100 + 2 * r, '%" x="-').concat(s, '%" width="').concat(100 + 2 * s, '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="').concat(kt(this.blur ? this.blur / 2 : 0, h.NUM_FRACTION_DIGITS), '"></feGaussianBlur>\n\t<feOffset dx="').concat(kt(e.x, h.NUM_FRACTION_DIGITS), '" dy="').concat(kt(e.y, h.NUM_FRACTION_DIGITS), '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="').concat(i.toRgb(), '" flood-opacity="').concat(i.getAlpha(), '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n')
            }
            toObject() {
                const t = {
                    color: this.color,
                    blur: this.blur,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    affectStroke: this.affectStroke,
                    nonScaling: this.nonScaling
                }
                  , e = Ue.ownDefaults;
                return this.includeDefaultValues ? t : xt(t, ((t,i)=>t !== e[i]))
            }
        }
        s(Ue, "ownDefaults", {
            color: "rgb(0,0,0)",
            blur: 0,
            offsetX: 0,
            offsetY: 0,
            affectStroke: !1,
            includeDefaultValues: !0,
            nonScaling: !1
        }),
        s(Ue, "reOffsetsAndBlur", /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/);
        const Ne = t=>JSON.parse(JSON.stringify(t))
          , qe = [j, E, "scaleX", "scaleY", "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", "skewX", "skewY"]
          , Ze = ["fill", "stroke", "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"]
          , Ke = {
            originX: E,
            originY: j,
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            scaleX: 1,
            scaleY: 1,
            flipX: !1,
            flipY: !1,
            opacity: 1,
            angle: 0,
            skewX: 0,
            skewY: 0,
            cornerSize: 13,
            touchCornerSize: 24,
            transparentCorners: !0,
            hoverCursor: null,
            moveCursor: null,
            padding: 0,
            borderColor: "rgb(178,204,255)",
            borderDashArray: null,
            cornerColor: "rgb(178,204,255)",
            cornerStrokeColor: "",
            cornerStyle: "rect",
            cornerDashArray: null,
            centeredScaling: !1,
            centeredRotation: !0,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            globalCompositeOperation: "source-over",
            backgroundColor: "",
            selectionBackgroundColor: "",
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeDashOffset: 0,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 4,
            shadow: null,
            borderOpacityWhenMoving: .4,
            borderScaleFactor: 1,
            minScaleLimit: 0,
            selectable: !0,
            evented: !0,
            visible: !0,
            hasControls: !0,
            hasBorders: !0,
            perPixelTargetFind: !1,
            includeDefaultValues: !0,
            lockMovementX: !1,
            lockMovementY: !1,
            lockRotation: !1,
            lockScalingX: !1,
            lockScalingY: !1,
            lockSkewingX: !1,
            lockSkewingY: !1,
            lockScalingFlip: !1,
            excludeFromExport: !1,
            objectCaching: !0,
            noScaleCache: !0,
            strokeUniform: !1,
            dirty: !0,
            paintFirst: "fill",
            activeOn: "down",
            colorProperties: ["fill", "stroke", "backgroundColor"],
            clipPath: void 0,
            inverted: !1,
            absolutePositioned: !1,
            FX_DURATION: 500
        }
          , Je = ["extraParam"];
        let $e = class t extends Ge {
            static getDefaults() {
                return e({}, t.ownDefaults)
            }
            get type() {
                const t = this.constructor.type;
                return "FabricObject" === t ? "object" : t.toLowerCase()
            }
            set type(t) {
                c("warn", "Setting type has no effect", t)
            }
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                super(),
                s(this, "_cacheContext", null),
                Object.assign(this, this.constructor.getDefaults()),
                this.setOptions(t)
            }
            _createCacheCanvas() {
                this._cacheCanvas = $(),
                this._cacheContext = this._cacheCanvas.getContext("2d"),
                this._updateCacheCanvas(),
                this.dirty = !0
            }
            _limitCacheSize(t) {
                const e = t.width
                  , i = t.height
                  , s = h.maxCacheSideLimit
                  , r = h.minCacheSideLimit;
                if (e <= s && i <= s && e * i <= h.perfLimitSizeTotal)
                    return e < r && (t.width = r),
                    i < r && (t.height = r),
                    t;
                const n = e / i
                  , [o,a] = _.limitDimsByArea(n)
                  , c = Se(r, o, s)
                  , l = Se(r, a, s);
                return e > c && (t.zoomX /= e / c,
                t.width = c,
                t.capped = !0),
                i > l && (t.zoomY /= i / l,
                t.height = l,
                t.capped = !0),
                t
            }
            _getCacheCanvasDimensions() {
                const t = this.getTotalObjectScaling()
                  , e = this._getTransformedDimensions({
                    skewX: 0,
                    skewY: 0
                })
                  , i = e.x * t.x / this.scaleX
                  , s = e.y * t.y / this.scaleY;
                return {
                    width: i + 2,
                    height: s + 2,
                    zoomX: t.x,
                    zoomY: t.y,
                    x: i,
                    y: s
                }
            }
            _updateCacheCanvas() {
                const t = this._cacheCanvas
                  , e = this._cacheContext
                  , i = this._limitCacheSize(this._getCacheCanvasDimensions())
                  , s = h.minCacheSideLimit
                  , r = i.width
                  , n = i.height
                  , o = i.zoomX
                  , a = i.zoomY
                  , c = r !== this.cacheWidth || n !== this.cacheHeight
                  , l = this.zoomX !== o || this.zoomY !== a;
                if (!t || !e)
                    return !1;
                let d, u, g = c || l, f = 0, p = 0, m = !1;
                if (c) {
                    const t = this._cacheCanvas.width
                      , e = this._cacheCanvas.height
                      , o = r > t || n > e;
                    m = o || (r < .9 * t || n < .9 * e) && t > s && e > s,
                    o && !i.capped && (r > s || n > s) && (f = .1 * r,
                    p = .1 * n)
                }
                return Ft(this) && this.path && (g = !0,
                m = !0,
                f += this.getHeightOfLine(0) * this.zoomX,
                p += this.getHeightOfLine(0) * this.zoomY),
                !!g && (m ? (t.width = Math.ceil(r + f),
                t.height = Math.ceil(n + p)) : (e.setTransform(1, 0, 0, 1, 0, 0),
                e.clearRect(0, 0, t.width, t.height)),
                d = i.x / 2,
                u = i.y / 2,
                this.cacheTranslationX = Math.round(t.width / 2 - d) + d,
                this.cacheTranslationY = Math.round(t.height / 2 - u) + u,
                this.cacheWidth = r,
                this.cacheHeight = n,
                e.translate(this.cacheTranslationX, this.cacheTranslationY),
                e.scale(o, a),
                this.zoomX = o,
                this.zoomY = a,
                !0)
            }
            setOptions() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._setOptions(t)
            }
            transform(t) {
                const e = this.group && !this.group._transformDone || this.group && this.canvas && t === this.canvas.contextTop
                  , i = this.calcTransformMatrix(!e);
                t.transform(i[0], i[1], i[2], i[3], i[4], i[5])
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                const i = h.NUM_FRACTION_DIGITS
                  , s = this.clipPath && !this.clipPath.excludeFromExport ? e(e({}, this.clipPath.toObject(t)), {}, {
                    inverted: this.clipPath.inverted,
                    absolutePositioned: this.clipPath.absolutePositioned
                }) : null
                  , r = e(e({}, yt(this, t)), {}, {
                    type: this.constructor.type,
                    version: b,
                    originX: this.originX,
                    originY: this.originY,
                    left: kt(this.left, i),
                    top: kt(this.top, i),
                    width: kt(this.width, i),
                    height: kt(this.height, i),
                    fill: Pt(this.fill) ? this.fill.toObject() : this.fill,
                    stroke: Pt(this.stroke) ? this.stroke.toObject() : this.stroke,
                    strokeWidth: kt(this.strokeWidth, i),
                    strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                    strokeLineCap: this.strokeLineCap,
                    strokeDashOffset: this.strokeDashOffset,
                    strokeLineJoin: this.strokeLineJoin,
                    strokeUniform: this.strokeUniform,
                    strokeMiterLimit: kt(this.strokeMiterLimit, i),
                    scaleX: kt(this.scaleX, i),
                    scaleY: kt(this.scaleY, i),
                    angle: kt(this.angle, i),
                    flipX: this.flipX,
                    flipY: this.flipY,
                    opacity: kt(this.opacity, i),
                    shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                    visible: this.visible,
                    backgroundColor: this.backgroundColor,
                    fillRule: this.fillRule,
                    paintFirst: this.paintFirst,
                    globalCompositeOperation: this.globalCompositeOperation,
                    skewX: kt(this.skewX, i),
                    skewY: kt(this.skewY, i)
                }, s ? {
                    clipPath: s
                } : null);
                return this.includeDefaultValues ? r : this._removeDefaultValues(r)
            }
            toDatalessObject(t) {
                return this.toObject(t)
            }
            _removeDefaultValues(t) {
                const e = this.constructor.getDefaults()
                  , i = Object.keys(e).length > 0 ? e : Object.getPrototypeOf(this);
                return xt(t, ((t,e)=>{
                    if (e === E || e === j || "type" === e)
                        return !0;
                    const s = i[e];
                    return t !== s && !(Array.isArray(t) && Array.isArray(s) && 0 === t.length && 0 === s.length)
                }
                ))
            }
            toString() {
                return "#<".concat(this.constructor.type, ">")
            }
            getObjectScaling() {
                if (!this.group)
                    return new G(Math.abs(this.scaleX),Math.abs(this.scaleY));
                const t = at(this.calcTransformMatrix());
                return new G(Math.abs(t.scaleX),Math.abs(t.scaleY))
            }
            getTotalObjectScaling() {
                const t = this.getObjectScaling();
                if (this.canvas) {
                    const e = this.canvas.getZoom()
                      , i = this.getCanvasRetinaScaling();
                    return t.scalarMultiply(e * i)
                }
                return t
            }
            getObjectOpacity() {
                let t = this.opacity;
                return this.group && (t *= this.group.getObjectOpacity()),
                t
            }
            _constrainScale(t) {
                return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t ? 1e-4 : t
            }
            _set(t, e) {
                const i = this[t] !== e;
                if ("scaleX" !== t && "scaleY" !== t || (e = this._constrainScale(e)),
                "scaleX" === t && e < 0 ? (this.flipX = !this.flipX,
                e *= -1) : "scaleY" === t && e < 0 ? (this.flipY = !this.flipY,
                e *= -1) : "shadow" !== t || !e || e instanceof Ue ? "dirty" === t && this.group && this.group.set("dirty", e) : e = new Ue(e),
                this[t] = e,
                i) {
                    const e = this.group && this.group.isOnACache();
                    this.constructor.cacheProperties.includes(t) ? (this.dirty = !0,
                    e && this.group.set("dirty", !0)) : e && this.constructor.stateProperties.includes(t) && this.group.set("dirty", !0)
                }
                return this
            }
            isNotVisible() {
                return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible
            }
            render(t) {
                this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t.save(),
                this._setupCompositeOperation(t),
                this.drawSelectionBackground(t),
                this.transform(t),
                this._setOpacity(t),
                this._setShadow(t),
                this.shouldCache() ? (this.renderCache(),
                this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(),
                this.drawObject(t),
                this.dirty = !1),
                t.restore())
            }
            drawSelectionBackground(t) {}
            renderCache(t) {
                t = t || {},
                this._cacheCanvas && this._cacheContext || this._createCacheCanvas(),
                this.isCacheDirty() && this._cacheContext && (this.drawObject(this._cacheContext, t.forClipping),
                this.dirty = !1)
            }
            _removeCacheCanvas() {
                this._cacheCanvas = void 0,
                this._cacheContext = null,
                this.cacheWidth = 0,
                this.cacheHeight = 0
            }
            hasStroke() {
                return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth
            }
            hasFill() {
                return this.fill && "transparent" !== this.fill
            }
            needsItsOwnCache() {
                return !("stroke" !== this.paintFirst || !this.hasFill() || !this.hasStroke() || "object" != typeof this.shadow) || !!this.clipPath
            }
            shouldCache() {
                return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()),
                this.ownCaching
            }
            willDrawShadow() {
                return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
            }
            drawClipPathOnCache(t, e) {
                if (t.save(),
                e.inverted ? t.globalCompositeOperation = "destination-out" : t.globalCompositeOperation = "destination-in",
                e.absolutePositioned) {
                    const e = rt(this.calcTransformMatrix());
                    t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
                }
                e.transform(t),
                t.scale(1 / e.zoomX, 1 / e.zoomY),
                t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY),
                t.restore()
            }
            drawObject(t, e) {
                const i = this.fill
                  , s = this.stroke;
                e ? (this.fill = "black",
                this.stroke = "",
                this._setClippingProperties(t)) : this._renderBackground(t),
                this._render(t),
                this._drawClipPath(t, this.clipPath),
                this.fill = i,
                this.stroke = s
            }
            _drawClipPath(t, e) {
                e && (e._set("canvas", this.canvas),
                e.shouldCache(),
                e._transformDone = !0,
                e.renderCache({
                    forClipping: !0
                }),
                this.drawClipPathOnCache(t, e))
            }
            drawCacheOnCanvas(t) {
                t.scale(1 / this.zoomX, 1 / this.zoomY),
                t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY)
            }
            isCacheDirty() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.isNotVisible())
                    return !1;
                if (this._cacheCanvas && this._cacheContext && !t && this._updateCacheCanvas())
                    return !0;
                if (this.dirty || this.clipPath && this.clipPath.absolutePositioned) {
                    if (this._cacheCanvas && this._cacheContext && !t) {
                        const t = this.cacheWidth / this.zoomX
                          , e = this.cacheHeight / this.zoomY;
                        this._cacheContext.clearRect(-t / 2, -e / 2, t, e)
                    }
                    return !0
                }
                return !1
            }
            _renderBackground(t) {
                if (!this.backgroundColor)
                    return;
                const e = this._getNonTransformedDimensions();
                t.fillStyle = this.backgroundColor,
                t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y),
                this._removeShadow(t)
            }
            _setOpacity(t) {
                this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity
            }
            _setStrokeStyles(t, e) {
                const i = e.stroke;
                i && (t.lineWidth = e.strokeWidth,
                t.lineCap = e.strokeLineCap,
                t.lineDashOffset = e.strokeDashOffset,
                t.lineJoin = e.strokeLineJoin,
                t.miterLimit = e.strokeMiterLimit,
                jt(i) ? "percentage" === i.gradientUnits || i.gradientTransform || i.patternTransform ? this._applyPatternForTransformedGradient(t, i) : (t.strokeStyle = i.toLive(t),
                this._applyPatternGradientTransform(t, i)) : t.strokeStyle = e.stroke)
            }
            _setFillStyles(t, e) {
                let {fill: i} = e;
                i && (jt(i) ? (t.fillStyle = i.toLive(t),
                this._applyPatternGradientTransform(t, i)) : t.fillStyle = i)
            }
            _setClippingProperties(t) {
                t.globalAlpha = 1,
                t.strokeStyle = "transparent",
                t.fillStyle = "#000000"
            }
            _setLineDash(t, e) {
                e && 0 !== e.length && (1 & e.length && e.push(...e),
                t.setLineDash(e))
            }
            _setShadow(t) {
                if (!this.shadow)
                    return;
                const e = this.shadow
                  , i = this.canvas
                  , s = this.getCanvasRetinaScaling()
                  , [r,,,n] = (null == i ? void 0 : i.viewportTransform) || O
                  , o = r * s
                  , a = n * s
                  , c = e.nonScaling ? new G(1,1) : this.getObjectScaling();
                t.shadowColor = e.color,
                t.shadowBlur = e.blur * h.browserShadowBlurConstant * (o + a) * (c.x + c.y) / 4,
                t.shadowOffsetX = e.offsetX * o * c.x,
                t.shadowOffsetY = e.offsetY * a * c.y
            }
            _removeShadow(t) {
                this.shadow && (t.shadowColor = "",
                t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
            }
            _applyPatternGradientTransform(t, e) {
                if (!jt(e))
                    return {
                        offsetX: 0,
                        offsetY: 0
                    };
                const i = e.gradientTransform || e.patternTransform
                  , s = -this.width / 2 + e.offsetX || 0
                  , r = -this.height / 2 + e.offsetY || 0;
                return "percentage" === e.gradientUnits ? t.transform(this.width, 0, 0, this.height, s, r) : t.transform(1, 0, 0, 1, s, r),
                i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                {
                    offsetX: s,
                    offsetY: r
                }
            }
            _renderPaintInOrder(t) {
                "stroke" === this.paintFirst ? (this._renderStroke(t),
                this._renderFill(t)) : (this._renderFill(t),
                this._renderStroke(t))
            }
            _render(t) {}
            _renderFill(t) {
                this.fill && (t.save(),
                this._setFillStyles(t, this),
                "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(),
                t.restore())
            }
            _renderStroke(t) {
                if (this.stroke && 0 !== this.strokeWidth) {
                    if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
                    t.save(),
                    this.strokeUniform) {
                        const e = this.getObjectScaling();
                        t.scale(1 / e.x, 1 / e.y)
                    }
                    this._setLineDash(t, this.strokeDashArray),
                    this._setStrokeStyles(t, this),
                    t.stroke(),
                    t.restore()
                }
            }
            _applyPatternForTransformedGradient(t, e) {
                var i;
                const s = this._limitCacheSize(this._getCacheCanvasDimensions())
                  , r = $()
                  , n = this.getCanvasRetinaScaling()
                  , o = s.x / this.scaleX / n
                  , a = s.y / this.scaleY / n;
                r.width = Math.ceil(o),
                r.height = Math.ceil(a);
                const h = r.getContext("2d");
                h && (h.beginPath(),
                h.moveTo(0, 0),
                h.lineTo(o, 0),
                h.lineTo(o, a),
                h.lineTo(0, a),
                h.closePath(),
                h.translate(o / 2, a / 2),
                h.scale(s.zoomX / this.scaleX / n, s.zoomY / this.scaleY / n),
                this._applyPatternGradientTransform(h, e),
                h.fillStyle = e.toLive(t),
                h.fill(),
                t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2),
                t.scale(n * this.scaleX / s.zoomX, n * this.scaleY / s.zoomY),
                t.strokeStyle = null !== (i = h.createPattern(r, "no-repeat")) && void 0 !== i ? i : "")
            }
            _findCenterFromElement() {
                return new G(this.left + this.width / 2,this.top + this.height / 2)
            }
            clone(t) {
                const e = this.toObject(t);
                return this.constructor.fromObject(e)
            }
            cloneAsImage(t) {
                const e = this.toCanvasElement(t);
                return new (I.getClass("image"))(e)
            }
            toCanvasElement() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const e = ee(this)
                  , i = this.group
                  , s = this.shadow
                  , r = Math.abs
                  , n = t.enableRetinaScaling ? Math.max(h.devicePixelRatio, 1) : 1
                  , o = (t.multiplier || 1) * n;
                delete this.group,
                t.withoutTransform && te(this),
                t.withoutShadow && (this.shadow = null),
                t.viewportTransform && ((t,e,i)=>{
                    const s = se(e, i);
                    Qt(t, nt(s, t.calcOwnMatrix()))
                }
                )(this, this.getViewportTransform());
                const a = $()
                  , c = this.getBoundingRect(!0, !0)
                  , l = this.shadow
                  , d = new G;
                if (l) {
                    const t = l.blur
                      , e = l.nonScaling ? new G(1,1) : this.getObjectScaling();
                    d.x = 2 * Math.round(r(l.offsetX) + t) * r(e.x),
                    d.y = 2 * Math.round(r(l.offsetY) + t) * r(e.y)
                }
                const u = c.width + d.x
                  , g = c.height + d.y;
                a.width = Math.ceil(u),
                a.height = Math.ceil(g);
                const f = new Nt(a,{
                    enableRetinaScaling: !1,
                    renderOnAddRemove: !1,
                    skipOffscreen: !1
                });
                "jpeg" === t.format && (f.backgroundColor = "#fff"),
                this.setPositionByOrigin(new G(f.width / 2,f.height / 2), M, M);
                const p = this.canvas;
                f._objects = [this],
                this.set("canvas", f),
                this.setCoords();
                const m = f.toCanvasElement(o || 1, t);
                return this.set("canvas", p),
                this.shadow = s,
                i && (this.group = i),
                this.set(e),
                this.setCoords(),
                f._objects = [],
                f.destroy(),
                m
            }
            toDataURL() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Q(this.toCanvasElement(t), t.format || "png", t.quality || 1)
            }
            isType() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return e.includes(this.constructor.type) || e.includes(this.type)
            }
            complexity() {
                return 1
            }
            toJSON() {
                return this.toObject()
            }
            rotate(t) {
                const {centeredRotation: e, originX: i, originY: s} = this;
                if (e) {
                    const {x: t, y: e} = this.getRelativeCenterPoint();
                    this.originX = M,
                    this.originY = M,
                    this.left = t,
                    this.top = e
                }
                if (this.set("angle", t),
                e) {
                    const {x: t, y: e} = this.translateToOriginPoint(this.getRelativeCenterPoint(), i, s);
                    this.left = t,
                    this.top = e,
                    this.originX = i,
                    this.originY = s
                }
            }
            setOnGroup() {}
            _setupCompositeOperation(t) {
                this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
            }
            dispose() {
                W.cancelByTarget(this),
                this.off(),
                this._set("canvas", void 0),
                this._cacheCanvas && v().dispose(this._cacheCanvas),
                this._cacheCanvas = void 0,
                this._cacheContext = null
            }
            static _fromObject(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , {extraParam: s} = i
                  , n = r(i, Je);
                return vt(Ne(t), n).then((t=>{
                    const i = e(e({}, n), t);
                    if (s) {
                        const {[s]: t, type: e} = i;
                        return new this(t,r(i, [s, "type"].map(o)))
                    }
                    return new this(i)
                }
                ))
            }
            static fromObject(t, e) {
                return this._fromObject(t, e)
            }
        }
        ;
        s($e, "stateProperties", qe),
        s($e, "cacheProperties", Ze),
        s($e, "ownDefaults", Ke),
        s($e, "type", "FabricObject"),
        I.setClass($e),
        I.setClass($e, "object");
        const Qe = (t,e)=>(i,s,r,n)=>{
            const o = e(i, s, r, n);
            return o && ne(t, ue(i, s, r, n)),
            o
        }
        ;
        function ti(t) {
            return (e,i,s,r)=>{
                const {target: n, originX: o, originY: a} = i
                  , h = n.getRelativeCenterPoint()
                  , c = n.translateToOriginPoint(h, o, a)
                  , l = t(e, i, s, r);
                return n.setPositionByOrigin(c, i.originX, i.originY),
                l
            }
        }
        const ei = Qe("resizing", ti(((t,e,i,s)=>{
            const r = fe(e, e.originX, e.originY, i, s);
            if (e.originX === M || e.originX === A && r.x < 0 || e.originX === E && r.x > 0) {
                const {target: t} = e
                  , i = t.strokeWidth / (t.strokeUniform ? t.scaleX : 1)
                  , s = ce(e) ? 2 : 1
                  , n = t.width
                  , o = Math.ceil(Math.abs(r.x * s / t.scaleX) - i);
                return t.set("width", Math.max(o, 0)),
                n !== t.width
            }
            return !1
        }
        )));
        function ii(t, e, i, s, r) {
            s = s || {};
            const n = this.sizeX || s.cornerSize || r.cornerSize
              , o = this.sizeY || s.cornerSize || r.cornerSize
              , a = void 0 !== s.transparentCorners ? s.transparentCorners : r.transparentCorners
              , h = a ? "stroke" : "fill"
              , c = !a && (s.cornerStrokeColor || r.cornerStrokeColor);
            let l, d = e, u = i;
            t.save(),
            t.fillStyle = s.cornerColor || r.cornerColor || "",
            t.strokeStyle = s.cornerStrokeColor || r.cornerStrokeColor || "",
            n > o ? (l = n,
            t.scale(1, o / n),
            u = i * n / o) : o > n ? (l = o,
            t.scale(n / o, 1),
            d = e * o / n) : l = n,
            t.lineWidth = 1,
            t.beginPath(),
            t.arc(d, u, l / 2, 0, S, !1),
            t[h](),
            c && t.stroke(),
            t.restore()
        }
        function si(t, e, i, s, r) {
            s = s || {};
            const n = this.sizeX || s.cornerSize || r.cornerSize
              , o = this.sizeY || s.cornerSize || r.cornerSize
              , a = void 0 !== s.transparentCorners ? s.transparentCorners : r.transparentCorners
              , h = a ? "stroke" : "fill"
              , c = !a && (s.cornerStrokeColor || r.cornerStrokeColor)
              , l = n / 2
              , d = o / 2;
            t.save(),
            t.fillStyle = s.cornerColor || r.cornerColor || "",
            t.strokeStyle = s.cornerStrokeColor || r.cornerStrokeColor || "",
            t.lineWidth = 1,
            t.translate(e, i);
            const u = r.getTotalAngle();
            t.rotate(tt(u)),
            t["".concat(h, "Rect")](-l, -d, n, o),
            c && t.strokeRect(-l, -d, n, o),
            t.restore()
        }
        class ri {
            constructor(t) {
                s(this, "visible", !0),
                s(this, "actionName", "scale"),
                s(this, "angle", 0),
                s(this, "x", 0),
                s(this, "y", 0),
                s(this, "offsetX", 0),
                s(this, "offsetY", 0),
                s(this, "sizeX", 0),
                s(this, "sizeY", 0),
                s(this, "touchSizeX", 0),
                s(this, "touchSizeY", 0),
                s(this, "cursorStyle", "crosshair"),
                s(this, "withConnection", !1),
                Object.assign(this, t)
            }
            shouldActivate(t, e, i, s) {
                var r;
                let {tl: n, tr: o, br: a, bl: h} = s;
                return (null === (r = e.canvas) || void 0 === r ? void 0 : r.getActiveObject()) === e && e.isControlVisible(t) && Ye.isPointInPolygon(i, [n, o, a, h])
            }
            getActionHandler(t, e, i) {
                return this.actionHandler
            }
            getMouseDownHandler(t, e, i) {
                return this.mouseDownHandler
            }
            getMouseUpHandler(t, e, i) {
                return this.mouseUpHandler
            }
            cursorStyleHandler(t, e, i) {
                return e.cursorStyle
            }
            getActionName(t, e, i) {
                return e.actionName
            }
            getVisibility(t, e) {
                var i, s;
                return null !== (i = null === (s = t._controlsVisibility) || void 0 === s ? void 0 : s[e]) && void 0 !== i ? i : this.visible
            }
            setVisibility(t, e, i) {
                this.visible = t
            }
            positionHandler(t, e, i, s) {
                return new G(this.x * t.x + this.offsetX,this.y * t.y + this.offsetY).transform(e)
            }
            calcCornerCoords(t, e, i, s, r, n) {
                const o = ot([ht(i, s), ct({
                    angle: t
                }), lt((r ? this.touchSizeX : this.sizeX) || e, (r ? this.touchSizeY : this.sizeY) || e)]);
                return {
                    tl: new G(-.5,-.5).transform(o),
                    tr: new G(.5,-.5).transform(o),
                    bl: new G(-.5,.5).transform(o),
                    br: new G(.5,.5).transform(o)
                }
            }
            render(t, e, i, s, r) {
                "circle" === ((s = s || {}).cornerStyle || r.cornerStyle) ? ii.call(this, t, e, i, s, r) : si.call(this, t, e, i, s, r)
            }
        }
        const ni = (t,e,i)=>i.lockRotation ? he : e.cursorStyle
          , oi = Qe("rotating", ti(((t,e,i,s)=>{
            let {target: r, ex: n, ey: o, theta: a, originX: h, originY: c} = e;
            const l = r.translateToOriginPoint(r.getRelativeCenterPoint(), h, c);
            if (de(r, "lockRotation"))
                return !1;
            const d = Math.atan2(o - l.y, n - l.x)
              , u = Math.atan2(s - l.y, i - l.x);
            let g = et(u - d + a);
            if (r.snapAngle && r.snapAngle > 0) {
                const t = r.snapAngle
                  , e = r.snapThreshold || t
                  , i = Math.ceil(g / t) * t
                  , s = Math.floor(g / t) * t;
                Math.abs(g - s) < e ? g = s : Math.abs(g - i) < e && (g = i)
            }
            g < 0 && (g = 360 + g),
            g %= 360;
            const f = r.angle !== g;
            return r.angle = g,
            f
        }
        )));
        function ai(t, e) {
            const i = e.canvas
              , s = t[i.uniScaleKey];
            return i.uniformScaling && !s || !i.uniformScaling && s
        }
        function hi(t, e, i) {
            const s = de(t, "lockScalingX")
              , r = de(t, "lockScalingY");
            return !((!s || !r) && (e || !s && !r || !i) && (!s || "x" !== e) && (!r || "y" !== e))
        }
        const ci = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"]
          , li = (t,e,i)=>{
            const s = ai(t, i);
            if (hi(i, 0 !== e.x && 0 === e.y ? "x" : 0 === e.x && 0 !== e.y ? "y" : "", s))
                return he;
            const r = ge(i, e);
            return "".concat(ci[r], "-resize")
        }
        ;
        function di(t, e, i, s) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            const n = e.target
              , o = r.by
              , a = ai(t, n);
            let h, c, l, d, u, g;
            if (hi(n, o, a))
                return !1;
            if (e.gestureScale)
                c = e.scaleX * e.gestureScale,
                l = e.scaleY * e.gestureScale;
            else {
                if (h = fe(e, e.originX, e.originY, i, s),
                u = "y" !== o ? Math.sign(h.x || e.signX || 1) : 1,
                g = "x" !== o ? Math.sign(h.y || e.signY || 1) : 1,
                e.signX || (e.signX = u),
                e.signY || (e.signY = g),
                de(n, "lockScalingFlip") && (e.signX !== u || e.signY !== g))
                    return !1;
                if (d = n._getTransformedDimensions(),
                a && !o) {
                    const t = Math.abs(h.x) + Math.abs(h.y)
                      , {original: i} = e
                      , s = t / (Math.abs(d.x * i.scaleX / n.scaleX) + Math.abs(d.y * i.scaleY / n.scaleY));
                    c = i.scaleX * s,
                    l = i.scaleY * s
                } else
                    c = Math.abs(h.x * n.scaleX / d.x),
                    l = Math.abs(h.y * n.scaleY / d.y);
                ce(e) && (c *= 2,
                l *= 2),
                e.signX !== u && "y" !== o && (e.originX = le(e.originX),
                c *= -1,
                e.signX = u),
                e.signY !== g && "x" !== o && (e.originY = le(e.originY),
                l *= -1,
                e.signY = g)
            }
            const f = n.scaleX
              , p = n.scaleY;
            return o ? ("x" === o && n.set("scaleX", c),
            "y" === o && n.set("scaleY", l)) : (!de(n, "lockScalingX") && n.set("scaleX", c),
            !de(n, "lockScalingY") && n.set("scaleY", l)),
            f !== n.scaleX || p !== n.scaleY
        }
        const ui = Qe("scaling", ti(((t,e,i,s)=>di(t, e, i, s))))
          , gi = Qe("scaling", ti(((t,e,i,s)=>di(t, e, i, s, {
            by: "x"
        }))))
          , fi = Qe("scaling", ti(((t,e,i,s)=>di(t, e, i, s, {
            by: "y"
        }))))
          , pi = ["target", "ex", "ey", "skewingSide"]
          , mi = {
            x: {
                counterAxis: "y",
                scale: "scaleX",
                skew: "skewX",
                lockSkewing: "lockSkewingX",
                origin: "originX",
                flip: "flipX"
            },
            y: {
                counterAxis: "x",
                scale: "scaleY",
                skew: "skewY",
                lockSkewing: "lockSkewingY",
                origin: "originY",
                flip: "flipY"
            }
        }
          , vi = ["ns", "nesw", "ew", "nwse"];
        function yi(t, i, s, n, o) {
            const {target: a} = s
              , {counterAxis: h, origin: c, lockSkewing: l, skew: d, flip: u} = mi[t];
            if (de(a, l))
                return !1;
            const {origin: g, flip: f} = mi[h]
              , p = ae(s[g]) * (a[f] ? -1 : 1)
              , m = -Math.sign(p) * (a[u] ? -1 : 1)
              , v = -(0 === a[d] && fe(s, M, M, n, o)[t] > 0 || a[d] > 0 ? 1 : -1) * m * .5 + .5
              , y = Qe("skewing", ti(((e,i,s,n)=>function(t, e, i) {
                let {target: s, ex: n, ey: o, skewingSide: a} = e
                  , h = r(e, pi);
                const {skew: c} = mi[t]
                  , l = i.subtract(new G(n,o)).divide(new G(s.scaleX,s.scaleY))[t]
                  , d = s[c]
                  , u = h[c]
                  , g = Math.tan(tt(u))
                  , f = "y" === t ? s._getTransformedDimensions({
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0
                }).x : s._getTransformedDimensions({
                    scaleX: 1,
                    scaleY: 1
                }).y
                  , p = 2 * l * a / Math.max(f, 1) + g
                  , m = et(Math.atan(p));
                s.set(c, m);
                const v = d !== s[c];
                if (v && "y" === t) {
                    const {skewX: t, scaleX: e} = s
                      , i = s._getTransformedDimensions({
                        skewY: d
                    })
                      , r = s._getTransformedDimensions()
                      , n = 0 !== t ? i.x / r.x : 1;
                    1 !== n && s.set("scaleX", n * e)
                }
                return v
            }(t, i, new G(s,n)))));
            return y(i, e(e({}, s), {}, {
                [c]: v,
                skewingSide: m
            }), n, o)
        }
        function xi(t, e) {
            return t[e.canvas.altActionKey]
        }
        const _i = (t,e,i)=>{
            const s = xi(t, i);
            return 0 === e.x ? s ? "skewX" : "scaleY" : 0 === e.y ? s ? "skewY" : "scaleX" : ""
        }
          , bi = (t,e,i)=>xi(t, i) ? ((t,e,i)=>{
            if (0 !== e.x && de(i, "lockSkewingY"))
                return he;
            if (0 !== e.y && de(i, "lockSkewingX"))
                return he;
            const s = ge(i, e) % 4;
            return "".concat(vi[s], "-resize")
        }
        )(0, e, i) : li(t, e, i)
          , wi = (t,e,i,s)=>xi(t, e.target) ? ((t,e,i,s)=>yi("y", t, e, i, s))(t, e, i, s) : gi(t, e, i, s)
          , Ci = (t,e,i,s)=>xi(t, e.target) ? ((t,e,i,s)=>yi("x", t, e, i, s))(t, e, i, s) : fi(t, e, i, s)
          , Si = ()=>({
            ml: new ri({
                x: -.5,
                y: 0,
                cursorStyleHandler: bi,
                actionHandler: wi,
                getActionName: _i
            }),
            mr: new ri({
                x: .5,
                y: 0,
                cursorStyleHandler: bi,
                actionHandler: wi,
                getActionName: _i
            }),
            mb: new ri({
                x: 0,
                y: .5,
                cursorStyleHandler: bi,
                actionHandler: Ci,
                getActionName: _i
            }),
            mt: new ri({
                x: 0,
                y: -.5,
                cursorStyleHandler: bi,
                actionHandler: Ci,
                getActionName: _i
            }),
            tl: new ri({
                x: -.5,
                y: -.5,
                cursorStyleHandler: li,
                actionHandler: ui
            }),
            tr: new ri({
                x: .5,
                y: -.5,
                cursorStyleHandler: li,
                actionHandler: ui
            }),
            bl: new ri({
                x: -.5,
                y: .5,
                cursorStyleHandler: li,
                actionHandler: ui
            }),
            br: new ri({
                x: .5,
                y: .5,
                cursorStyleHandler: li,
                actionHandler: ui
            }),
            mtr: new ri({
                x: 0,
                y: -.5,
                actionHandler: oi,
                cursorStyleHandler: ni,
                offsetY: -40,
                withConnection: !0,
                actionName: "rotate"
            })
        })
          , Ti = ()=>e(e({}, Si()), {
            mr: new ri({
                x: .5,
                y: 0,
                actionHandler: ei,
                cursorStyleHandler: bi,
                actionName: "resizing"
            }),
            ml: new ri({
                x: -.5,
                y: 0,
                actionHandler: ei,
                cursorStyleHandler: bi,
                actionName: "resizing"
            })
        });
        class Oi extends $e {
            static getDefaults() {
                return e(e({}, super.getDefaults()), {}, {
                    controls: Si()
                }, Oi.ownDefaults)
            }
            _updateCacheCanvas() {
                const t = this.canvas;
                if (this.noScaleCache && t && t._currentTransform) {
                    const e = t._currentTransform.target
                      , i = t._currentTransform.action;
                    if (this === e && i.startsWith("scale"))
                        return !1
                }
                return super._updateCacheCanvas()
            }
            getActiveControl() {
                return this.__corner
            }
            _findTargetCorner(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.hasControls || !this.canvas)
                    return "";
                this.__corner = void 0;
                const i = Object.entries(this.oCoords);
                for (let s = i.length - 1; s >= 0; s--) {
                    const [r,n] = i[s];
                    if (this.controls[r].shouldActivate(r, this, t, e ? n.touchCorner : n.corner))
                        return this.__corner = r
                }
                return ""
            }
            calcOCoords() {
                const t = this.getViewportTransform()
                  , e = this.getCenterPoint()
                  , i = ht(e.x, e.y)
                  , s = ct({
                    angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
                })
                  , r = nt(i, s)
                  , n = nt(t, r)
                  , o = nt(n, [1 / t[0], 0, 0, 1 / t[3], 0, 0])
                  , a = this.group ? at(this.calcTransformMatrix()) : void 0
                  , h = this._calculateCurrentDimensions(a)
                  , c = {};
                return this.forEachControl(((t,e)=>{
                    const i = t.positionHandler(h, o, this, t);
                    c[e] = Object.assign(i, this._calcCornerCoords(t, i))
                }
                )),
                c
            }
            _calcCornerCoords(t, e) {
                const i = this.getTotalAngle();
                return {
                    corner: t.calcCornerCoords(i, this.cornerSize, e.x, e.y, !1, this),
                    touchCorner: t.calcCornerCoords(i, this.touchCornerSize, e.x, e.y, !0, this)
                }
            }
            setCoords() {
                super.setCoords(),
                this.canvas && (this.oCoords = this.calcOCoords())
            }
            forEachControl(t) {
                for (const e in this.controls)
                    t(this.controls[e], e, this)
            }
            drawSelectionBackground(t) {
                if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this)
                    return;
                t.save();
                const e = this.getRelativeCenterPoint()
                  , i = this._calculateCurrentDimensions()
                  , s = this.getViewportTransform();
                t.translate(e.x, e.y),
                t.scale(1 / s[0], 1 / s[3]),
                t.rotate(tt(this.angle)),
                t.fillStyle = this.selectionBackgroundColor,
                t.fillRect(-i.x / 2, -i.y / 2, i.x, i.y),
                t.restore()
            }
            strokeBorders(t, e) {
                t.strokeRect(-e.x / 2, -e.y / 2, e.x, e.y)
            }
            _drawBorders(t, i) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = e({
                    hasControls: this.hasControls,
                    borderColor: this.borderColor,
                    borderDashArray: this.borderDashArray
                }, s);
                t.save(),
                t.strokeStyle = r.borderColor,
                this._setLineDash(t, r.borderDashArray),
                this.strokeBorders(t, i),
                r.hasControls && this.drawControlsConnectingLines(t, i),
                t.restore()
            }
            _renderControls(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {hasBorders: s, hasControls: r} = this
                  , n = e({
                    hasBorders: s,
                    hasControls: r
                }, i)
                  , o = this.getViewportTransform()
                  , a = n.hasBorders
                  , h = n.hasControls
                  , c = nt(o, this.calcTransformMatrix())
                  , l = at(c);
                t.save(),
                t.translate(l.translateX, l.translateY),
                t.lineWidth = 1 * this.borderScaleFactor,
                this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
                this.flipX && (l.angle -= 180),
                t.rotate(tt(this.group ? l.angle : this.angle)),
                a && this.drawBorders(t, l, i),
                h && this.drawControls(t, i),
                t.restore()
            }
            drawBorders(t, e, i) {
                let s;
                if (i && i.forActiveSelection || this.group) {
                    const t = ie(this.width, this.height, e)
                      , i = (this.strokeUniform ? (new G).scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new G(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);
                    s = t.add(i).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding)
                } else
                    s = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
                this._drawBorders(t, s, i)
            }
            drawControlsConnectingLines(t, e) {
                let i = !1;
                t.beginPath(),
                this.forEachControl(((s,r)=>{
                    s.withConnection && s.getVisibility(this, r) && (i = !0,
                    t.moveTo(s.x * e.x, s.y * e.y),
                    t.lineTo(s.x * e.x + s.offsetX, s.y * e.y + s.offsetY))
                }
                )),
                i && t.stroke()
            }
            drawControls(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.save();
                const s = this.getCanvasRetinaScaling()
                  , {cornerStrokeColor: r, cornerDashArray: n, cornerColor: o} = this
                  , a = e({
                    cornerStrokeColor: r,
                    cornerDashArray: n,
                    cornerColor: o
                }, i);
                t.setTransform(s, 0, 0, s, 0, 0),
                t.strokeStyle = t.fillStyle = a.cornerColor,
                this.transparentCorners || (t.strokeStyle = a.cornerStrokeColor),
                this._setLineDash(t, a.cornerDashArray),
                this.setCoords(),
                this.forEachControl(((e,i)=>{
                    if (e.getVisibility(this, i)) {
                        const s = this.oCoords[i];
                        e.render(t, s.x, s.y, a, this)
                    }
                }
                )),
                t.restore()
            }
            isControlVisible(t) {
                return this.controls[t] && this.controls[t].getVisibility(this, t)
            }
            setControlVisible(t, e) {
                this._controlsVisibility || (this._controlsVisibility = {}),
                this._controlsVisibility[t] = e
            }
            setControlsVisibility() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object.entries(t).forEach((t=>{
                    let[e,i] = t;
                    return this.setControlVisible(e, i)
                }
                ))
            }
            clearContextTop(t) {
                if (!this.canvas)
                    return;
                const e = this.canvas.contextTop;
                if (!e)
                    return;
                const i = this.canvas.viewportTransform;
                e.save(),
                e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                this.transform(e);
                const s = this.width + 4
                  , r = this.height + 4;
                return e.clearRect(-s / 2, -r / 2, s, r),
                t || e.restore(),
                e
            }
            onDeselect(t) {
                return !1
            }
            onSelect(t) {
                return !1
            }
            canDrop(t) {
                return !1
            }
            renderDragSourceEffect(t) {}
            renderDropTargetEffect(t) {}
        }
        function ki(t, e) {
            return e.forEach((e=>{
                Object.getOwnPropertyNames(e.prototype).forEach((i=>{
                    "constructor" !== i && Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i) || Object.create(null))
                }
                ))
            }
            )),
            t
        }
        s(Oi, "ownDefaults", {});
        class Di extends Oi {
        }
        ki(Di, [me]),
        I.setClass(Di),
        I.setClass(Di, "object");
        const Mi = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];
        function Ei(t) {
            return new RegExp("^(" + t.join("|") + ")\\b","i")
        }
        var ji, Pi;
        const Ai = String.raw(ji || (ji = n(["(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)"], ["(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)"])));
        String.raw(Pi || (Pi = n(["(?:s+,?s*|,s*|$)"], ["(?:\\s+,?\\s*|,\\s*|$)"])));
        const Li = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + Ai + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + Ai + "))?\\s+(.*)")
          , Fi = {
            cx: E,
            x: E,
            r: "radius",
            cy: j,
            y: j,
            display: "visible",
            visibility: "visible",
            transform: "transformMatrix",
            "fill-opacity": "fillOpacity",
            "fill-rule": "fillRule",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "letter-spacing": "charSpacing",
            "paint-order": "paintFirst",
            "stroke-dasharray": "strokeDashArray",
            "stroke-dashoffset": "strokeDashOffset",
            "stroke-linecap": "strokeLineCap",
            "stroke-linejoin": "strokeLineJoin",
            "stroke-miterlimit": "strokeMiterLimit",
            "stroke-opacity": "strokeOpacity",
            "stroke-width": "strokeWidth",
            "text-decoration": "textDecoration",
            "text-anchor": "textAnchor",
            opacity: "opacity",
            "clip-path": "clipPath",
            "clip-rule": "clipRule",
            "vector-effect": "strokeUniform",
            "image-rendering": "imageSmoothing"
        }
          , Bi = "font-size"
          , Ri = "clip-path"
          , Ii = (Ei(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]),
        Ei(["symbol", "image", "marker", "pattern", "view", "svg"]),
        Ei(["symbol", "g", "a", "svg", "clipPath", "defs"]));
        function Wi(t, e) {
            const i = t.nodeName
              , s = t.getAttribute("class")
              , r = t.getAttribute("id");
            let n;
            if (n = new RegExp("^" + i,"i"),
            e = e.replace(n, ""),
            r && e.length && (n = new RegExp("#" + r + "(?![a-zA-Z\\-]+)","i"),
            e = e.replace(n, "")),
            s && e.length) {
                const t = s.split(" ");
                for (let i = t.length; i--; )
                    n = new RegExp("\\." + t[i] + "(?![a-zA-Z\\-]+)","i"),
                    e = e.replace(n, "")
            }
            return 0 === e.length
        }
        function Xi(t, e) {
            let i = !0;
            const s = Wi(t, e.pop());
            return s && e.length && (i = function(t, e) {
                let i, s = !0;
                for (; t.parentElement && 1 === t.parentElement.nodeType && e.length; )
                    s && (i = e.pop()),
                    s = Wi(t = t.parentElement, i);
                return 0 === e.length
            }(t, e)),
            s && i && 0 === e.length
        }
        new RegExp("^\\s*(" + Ai + "+)\\s*,?\\s*(" + Ai + "+)\\s*,?\\s*(" + Ai + "+)\\s*,?\\s*(" + Ai + "+)\\s*$");
        const Yi = t=>{
            var e;
            return null !== (e = Fi[t]) && void 0 !== e ? e : t
        }
          , Hi = t=>t.replace(new RegExp("(".concat(Ai, ")"),"gi"), " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " ");
        var Vi, zi, Gi, Ui, Ni, qi, Zi;
        const Ki = "(".concat(Ai, ")")
          , Ji = String.raw(Vi || (Vi = n(["(skewX)(", ")"], ["(skewX)\\(", "\\)"])), Ki)
          , $i = String.raw(zi || (zi = n(["(skewY)(", ")"], ["(skewY)\\(", "\\)"])), Ki)
          , Qi = String.raw(Gi || (Gi = n(["(rotate)(", "(?: ", " ", ")?)"], ["(rotate)\\(", "(?: ", " ", ")?\\)"])), Ki, Ki, Ki)
          , ts = String.raw(Ui || (Ui = n(["(scale)(", "(?: ", ")?)"], ["(scale)\\(", "(?: ", ")?\\)"])), Ki, Ki)
          , es = String.raw(Ni || (Ni = n(["(translate)(", "(?: ", ")?)"], ["(translate)\\(", "(?: ", ")?\\)"])), Ki, Ki)
          , is = String.raw(qi || (qi = n(["(matrix)(", " ", " ", " ", " ", " ", ")"], ["(matrix)\\(", " ", " ", " ", " ", " ", "\\)"])), Ki, Ki, Ki, Ki, Ki, Ki)
          , ss = "(?:".concat(is, "|").concat(es, "|").concat(Qi, "|").concat(ts, "|").concat(Ji, "|").concat($i, ")")
          , rs = "(?:".concat(ss, "*)")
          , ns = String.raw(Zi || (Zi = n(["^s*(?:", "?)s*$"], ["^\\s*(?:", "?)\\s*$"])), rs)
          , os = new RegExp(ns)
          , as = new RegExp(ss,"g");
        function hs(t) {
            const e = [];
            if (!(t = Hi(t).replace(/\s*([()])\s*/gi, "$1")) || t && !os.test(t))
                return [...O];
            for (const i of t.matchAll(as)) {
                const t = new RegExp(ss).exec(i[0]);
                if (!t)
                    continue;
                let s = O;
                const r = t.filter((t=>!!t))
                  , [,n,...o] = r
                  , [a,h,c,l,d,u] = o.map((t=>parseFloat(t)));
                switch (n) {
                case "translate":
                    s = ht(a, h);
                    break;
                case "rotate":
                    s = ct({
                        angle: a
                    }, {
                        x: h,
                        y: c
                    });
                    break;
                case "scale":
                    s = lt(a, h);
                    break;
                case "skewX":
                    s = ut(a);
                    break;
                case "skewY":
                    s = gt(a);
                    break;
                case "matrix":
                    s = [a, h, c, l, d, u]
                }
                e.push(s)
            }
            return ot(e)
        }
        function cs(t, e, i, s) {
            const r = Array.isArray(e);
            let n, o = e;
            if ("fill" !== t && "stroke" !== t || e !== L) {
                if ("strokeUniform" === t)
                    return "non-scaling-stroke" === e;
                if ("strokeDashArray" === t)
                    o = e === L ? null : e.replace(/,/g, " ").split(/\s+/).map(parseFloat);
                else if ("transformMatrix" === t)
                    o = i && i.transformMatrix ? nt(i.transformMatrix, hs(e)) : hs(e);
                else if ("visible" === t)
                    o = e !== L && "hidden" !== e,
                    i && !1 === i.visible && (o = !1);
                else if ("opacity" === t)
                    o = parseFloat(e),
                    i && void 0 !== i.opacity && (o *= i.opacity);
                else if ("textAnchor" === t)
                    o = "start" === e ? E : "end" === e ? A : M;
                else if ("charSpacing" === t)
                    n = Dt(e, s) / s * 1e3;
                else if ("paintFirst" === t) {
                    const t = e.indexOf("fill")
                      , i = e.indexOf("stroke");
                    o = "fill",
                    (t > -1 && i > -1 && i < t || -1 === t && i > -1) && (o = "stroke")
                } else {
                    if ("href" === t || "xlink:href" === t || "font" === t)
                        return e;
                    if ("imageSmoothing" === t)
                        return "optimizeQuality" === e;
                    n = r ? e.map(Dt) : Dt(e, s)
                }
            } else
                o = "";
            return !r && isNaN(n) ? o : n
        }
        const ls = {
            stroke: "strokeOpacity",
            fill: "fillOpacity"
        };
        function ds(t, i, s) {
            if (!t)
                return {};
            let r, n = {}, o = k;
            t.parentNode && Ii.test(t.parentNode.nodeName) && (n = ds(t.parentElement, i, s),
            n.fontSize && (r = o = Dt(n.fontSize)));
            const a = e(e(e({}, i.reduce(((e,i)=>{
                const s = t.getAttribute(i);
                return s && (e[i] = s),
                e
            }
            ), {})), function(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = {};
                for (const r in i)
                    Xi(t, r.split(" ")) && (s = e(e({}, s), i[r]));
                return s
            }(t, s)), function(t) {
                const e = {}
                  , i = t.getAttribute("style");
                return i ? ("string" == typeof i ? function(t, e) {
                    t.replace(/;\s*$/, "").split(";").forEach((t=>{
                        const [i,s] = t.split(":");
                        e[i.trim().toLowerCase()] = s.trim()
                    }
                    ))
                }(i, e) : function(t, e) {
                    Object.entries(t).forEach((t=>{
                        let[i,s] = t;
                        void 0 !== s && (e[i.toLowerCase()] = s)
                    }
                    ))
                }(i, e),
                e) : e
            }(t));
            a[Ri] && t.setAttribute(Ri, a[Ri]),
            a[Bi] && (r = Dt(a[Bi], o),
            a[Bi] = "".concat(r));
            const h = {};
            for (const t in a) {
                const e = Yi(t)
                  , i = cs(e, a[t], n, r);
                h[e] = i
            }
            h && h.font && function(t, e) {
                const i = t.match(Li);
                if (!i)
                    return;
                const s = i[1]
                  , r = i[3]
                  , n = i[4]
                  , o = i[5]
                  , a = i[6];
                s && (e.fontStyle = s),
                r && (e.fontWeight = isNaN(parseFloat(r)) ? r : parseFloat(r)),
                n && (e.fontSize = Dt(n)),
                a && (e.fontFamily = a),
                o && (e.lineHeight = "normal" === o ? 1 : o)
            }(h.font, h);
            const c = e(e({}, n), h);
            return Ii.test(t.nodeName) ? c : function(t) {
                const e = Di.getDefaults();
                return Object.entries(ls).forEach((i=>{
                    let[s,r] = i;
                    if (void 0 === t[r] || "" === t[s])
                        return;
                    if (void 0 === t[s]) {
                        if (!e[s])
                            return;
                        t[s] = e[s]
                    }
                    if (0 === t[s].indexOf("url("))
                        return;
                    const n = new Ot(t[s]);
                    t[s] = n.setAlpha(kt(n.getAlpha() * t[r], 2)).toRgba()
                }
                )),
                t
            }(c)
        }
        const us = ["left", "top", "width", "height", "visible"]
          , gs = ["rx", "ry"];
        class fs extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), fs.ownDefaults)
            }
            constructor(t) {
                super(t),
                this._initRxRy()
            }
            _initRxRy() {
                const {rx: t, ry: e} = this;
                t && !e ? this.ry = t : e && !t && (this.rx = e)
            }
            _render(t) {
                const {width: e, height: i} = this
                  , s = -e / 2
                  , r = -i / 2
                  , n = this.rx ? Math.min(this.rx, e / 2) : 0
                  , o = this.ry ? Math.min(this.ry, i / 2) : 0
                  , a = 0 !== n || 0 !== o;
                t.beginPath(),
                t.moveTo(s + n, r),
                t.lineTo(s + e - n, r),
                a && t.bezierCurveTo(s + e - D * n, r, s + e, r + D * o, s + e, r + o),
                t.lineTo(s + e, r + i - o),
                a && t.bezierCurveTo(s + e, r + i - D * o, s + e - D * n, r + i, s + e - n, r + i),
                t.lineTo(s + n, r + i),
                a && t.bezierCurveTo(s + D * n, r + i, s, r + i - D * o, s, r + i - o),
                t.lineTo(s, r + o),
                a && t.bezierCurveTo(s, r + D * o, s + D * n, r, s + n, r),
                t.closePath(),
                this._renderPaintInOrder(t)
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return super.toObject([...gs, ...t])
            }
            _toSVG() {
                const {width: t, height: e, rx: i, ry: s} = this;
                return ["<rect ", "COMMON_PARTS", 'x="'.concat(-t / 2, '" y="').concat(-e / 2, '" rx="').concat(i, '" ry="').concat(s, '" width="').concat(t, '" height="').concat(e, '" />\n')]
            }
            static async fromElement(t, i, s) {
                const n = ds(t, this.ATTRIBUTE_NAMES, s)
                  , {left: o=0, top: a=0, width: h=0, height: c=0, visible: l=!0} = n
                  , d = r(n, us);
                return new this(e(e(e({}, i), d), {}, {
                    left: o,
                    top: a,
                    width: h,
                    height: c,
                    visible: Boolean(l && h && c)
                }))
            }
        }
        s(fs, "type", "Rect"),
        s(fs, "cacheProperties", [...Ze, ...gs]),
        s(fs, "ownDefaults", {
            rx: 0,
            ry: 0
        }),
        s(fs, "ATTRIBUTE_NAMES", [...Mi, "x", "y", "rx", "ry", "width", "height"]),
        I.setClass(fs),
        I.setSVGClass(fs);
        const ps = ["objects"];
        class ms extends (N(Di)) {
            static getDefaults() {
                return e(e({}, super.getDefaults()), ms.ownDefaults)
            }
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments.length > 2 ? arguments[2] : void 0;
                super(),
                s(this, "_activeObjects", []),
                s(this, "__objectSelectionTracker", void 0),
                s(this, "__objectSelectionDisposer", void 0),
                s(this, "_firstLayoutDone", !1),
                this._objects = t.slice(),
                this.__objectMonitor = this.__objectMonitor.bind(this),
                this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, !0),
                this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, !1),
                this.set(e(e({}, i), {}, {
                    angle: 0,
                    skewX: 0,
                    skewY: 0
                })),
                this.forEachObject((t=>{
                    this.enterGroup(t, !1)
                }
                )),
                this._applyLayoutStrategy({
                    type: "initialization",
                    options: i,
                    objectsRelativeToGroup: r
                })
            }
            canEnterGroup(t) {
                return t === this || this.isDescendantOf(t) ? (c("error", "Group: circular object trees are not supported, this call has no effect"),
                !1) : -1 === this._objects.indexOf(t) || (c("error", "Group: duplicate objects are not supported inside group, this call has no effect"),
                !1)
            }
            _filterObjectsBeforeEnteringGroup(t) {
                return t.filter(((t,e,i)=>this.canEnterGroup(t) && i.indexOf(t) === e))
            }
            add() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                const s = this._filterObjectsBeforeEnteringGroup(e)
                  , r = super.add(...s);
                return this._onAfterObjectsChange("added", s),
                r
            }
            insertAt(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                    i[s - 1] = arguments[s];
                const r = this._filterObjectsBeforeEnteringGroup(i)
                  , n = super.insertAt(t, ...r);
                return this._onAfterObjectsChange("added", r),
                n
            }
            remove() {
                const t = super.remove(...arguments);
                return this._onAfterObjectsChange("removed", t),
                t
            }
            _onObjectAdded(t) {
                this.enterGroup(t, !0),
                this.fire("object:added", {
                    target: t
                }),
                t.fire("added", {
                    target: this
                })
            }
            _onRelativeObjectAdded(t) {
                this.enterGroup(t, !1),
                this.fire("object:added", {
                    target: t
                }),
                t.fire("added", {
                    target: this
                })
            }
            _onObjectRemoved(t, e) {
                this.exitGroup(t, e),
                this.fire("object:removed", {
                    target: t
                }),
                t.fire("removed", {
                    target: this
                })
            }
            _onAfterObjectsChange(t, e) {
                this._applyLayoutStrategy({
                    type: t,
                    targets: e
                }),
                this._set("dirty", !0)
            }
            _onStackOrderChanged() {
                this._set("dirty", !0)
            }
            _set(t, e) {
                const i = this[t];
                return super._set(t, e),
                "canvas" === t && i !== e && this.forEachObject((i=>{
                    i._set(t, e)
                }
                )),
                "layout" === t && i !== e && this._applyLayoutStrategy({
                    type: "layout_change",
                    layout: e,
                    prevLayout: i
                }),
                "interactive" === t && this.forEachObject((t=>this._watchObject(e, t))),
                this
            }
            _shouldSetNestedCoords() {
                return this.subTargetCheck
            }
            removeAll() {
                return this._activeObjects = [],
                this.remove(...this._objects)
            }
            __objectMonitor(t) {
                this._applyLayoutStrategy(e(e({}, t), {}, {
                    type: "object_modified"
                })),
                this._set("dirty", !0)
            }
            __objectSelectionMonitor(t, e) {
                let {target: i} = e;
                if (t)
                    this._activeObjects.push(i),
                    this._set("dirty", !0);
                else if (this._activeObjects.length > 0) {
                    const t = this._activeObjects.indexOf(i);
                    t > -1 && (this._activeObjects.splice(t, 1),
                    this._set("dirty", !0))
                }
            }
            _watchObject(t, e) {
                const i = t ? "on" : "off";
                t && this._watchObject(!1, e),
                e[i]("changed", this.__objectMonitor),
                e[i]("modified", this.__objectMonitor),
                e[i]("selected", this.__objectSelectionTracker),
                e[i]("deselected", this.__objectSelectionDisposer)
            }
            enterGroup(t, e) {
                return t.group && t.group.remove(t),
                this._enterGroup(t, e),
                !0
            }
            _enterGroup(t, e) {
                e && Qt(t, nt(rt(this.calcTransformMatrix()), t.calcTransformMatrix())),
                this._shouldSetNestedCoords() && t.setCoords(),
                t._set("group", this),
                t._set("canvas", this.canvas),
                this.interactive && this._watchObject(!0, t);
                const i = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
                i && (i === t || t.isDescendantOf(i)) && this._activeObjects.push(t)
            }
            exitGroup(t, e) {
                this._exitGroup(t, e),
                t._set("canvas", void 0)
            }
            _exitGroup(t, e) {
                t._set("group", void 0),
                e || (Qt(t, nt(this.calcTransformMatrix(), t.calcTransformMatrix())),
                t.setCoords()),
                this._watchObject(!1, t);
                const i = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t) : -1;
                i > -1 && this._activeObjects.splice(i, 1)
            }
            shouldCache() {
                const t = Di.prototype.shouldCache.call(this);
                if (t)
                    for (let t = 0; t < this._objects.length; t++)
                        if (this._objects[t].willDrawShadow())
                            return this.ownCaching = !1,
                            !1;
                return t
            }
            willDrawShadow() {
                if (Di.prototype.willDrawShadow.call(this))
                    return !0;
                for (let t = 0; t < this._objects.length; t++)
                    if (this._objects[t].willDrawShadow())
                        return !0;
                return !1
            }
            isOnACache() {
                return this.ownCaching || !!this.group && this.group.isOnACache()
            }
            drawObject(t) {
                this._renderBackground(t);
                for (let i = 0; i < this._objects.length; i++) {
                    var e;
                    null !== (e = this.canvas) && void 0 !== e && e.preserveObjectStacking && this._objects[i].group !== this ? (t.save(),
                    t.transform(...rt(this.calcTransformMatrix())),
                    this._objects[i].render(t),
                    t.restore()) : this._objects[i].group === this && this._objects[i].render(t)
                }
                this._drawClipPath(t, this.clipPath)
            }
            setCoords() {
                super.setCoords(),
                this._shouldSetNestedCoords() && this.forEachObject((t=>t.setCoords()))
            }
            render(t) {
                this._transformDone = !0,
                super.render(t),
                this._transformDone = !1
            }
            triggerLayout(t) {
                t && t.layout && (t.prevLayout = this.layout,
                this.layout = t.layout),
                this._applyLayoutStrategy({
                    type: "imperative",
                    context: t
                })
            }
            _adjustObjectPosition(t, e) {
                t.set({
                    left: t.left + e.x,
                    top: t.top + e.y
                })
            }
            _applyLayoutStrategy(t) {
                const e = "initialization" === t.type;
                if (!e && !this._firstLayoutDone)
                    return;
                const i = e && t.options
                  , s = i && {
                    angle: i.angle || 0,
                    skewX: i.skewX || 0,
                    skewY: i.skewY || 0
                }
                  , r = this.getRelativeCenterPoint();
                let n, o = this.getLayoutStrategyResult(this.layout, [...this._objects], t);
                if (o) {
                    const i = new G(o.centerX,o.centerY)
                      , a = r.subtract(i).add(new G(o.correctionX || 0,o.correctionY || 0));
                    n = a.transform(rt(this.calcOwnMatrix()), !0),
                    this.set({
                        width: o.width,
                        height: o.height
                    }),
                    !t.objectsRelativeToGroup && this.forEachObject((t=>{
                        t.group === this && this._adjustObjectPosition(t, n)
                    }
                    )),
                    !e && "clip-path" !== this.layout && this.clipPath && !this.clipPath.absolutePositioned && this._adjustObjectPosition(this.clipPath, n),
                    i.eq(r) && !s || (this.setPositionByOrigin(i, M, M),
                    s && this.set(s),
                    this.setCoords())
                } else {
                    if (!e)
                        return;
                    o = {
                        centerX: r.x,
                        centerY: r.y,
                        width: this.width,
                        height: this.height
                    },
                    s && this.set(s),
                    n = new G
                }
                this._firstLayoutDone = !0,
                this.onLayout(t, o),
                this.fire("layout", {
                    context: t,
                    result: o,
                    diff: n
                }),
                this.group && this.group._applyLayoutStrategy && (t.path || (t.path = []),
                t.path.push(this),
                this.group._applyLayoutStrategy(t))
            }
            getLayoutStrategyResult(t, e, i) {
                if ("fit-content-lazy" === t && "added" === i.type && e.length > i.targets.length) {
                    const e = i.targets.concat(this);
                    return this.prepareBoundingBox(t, e, i)
                }
                if ("fit-content" === t || "fit-content-lazy" === t || "fixed" === t && ("initialization" === i.type || "imperative" === i.type))
                    return this.prepareBoundingBox(t, e, i);
                if ("clip-path" === t && this.clipPath) {
                    const s = this.clipPath
                      , r = s._getTransformedDimensions();
                    if (s.absolutePositioned && ("initialization" === i.type || "layout_change" === i.type)) {
                        let t = s.getCenterPoint();
                        if (this.group) {
                            const e = rt(this.group.calcTransformMatrix());
                            t = st(t, e)
                        }
                        return {
                            centerX: t.x,
                            centerY: t.y,
                            width: r.x,
                            height: r.y
                        }
                    }
                    if (!s.absolutePositioned) {
                        let n;
                        const o = s.getRelativeCenterPoint()
                          , a = st(o, this.calcOwnMatrix(), !0);
                        if ("initialization" === i.type || "layout_change" === i.type) {
                            const r = this.prepareBoundingBox(t, e, i) || {};
                            return n = new G(r.centerX || 0,r.centerY || 0),
                            {
                                centerX: n.x + a.x,
                                centerY: n.y + a.y,
                                correctionX: r.correctionX - a.x,
                                correctionY: r.correctionY - a.y,
                                width: s.width,
                                height: s.height
                            }
                        }
                        return n = this.getRelativeCenterPoint(),
                        {
                            centerX: n.x + a.x,
                            centerY: n.y + a.y,
                            width: r.x,
                            height: r.y
                        }
                    }
                }
            }
            prepareBoundingBox(t, i, s) {
                return "initialization" === s.type ? this.prepareInitialBoundingBox(t, i, s) : "imperative" === s.type && s.context ? e(e({}, this.getObjectsBoundingBox(i) || {}), s.context) : this.getObjectsBoundingBox(i)
            }
            prepareInitialBoundingBox(t, e, i) {
                const s = i.options || {}
                  , r = "number" == typeof s.left
                  , n = "number" == typeof s.top
                  , o = "number" == typeof s.width
                  , a = "number" == typeof s.height;
                if (r && n && o && a && i.objectsRelativeToGroup || 0 === e.length)
                    return;
                const h = this.getObjectsBoundingBox(e) || {}
                  , {centerX: c=0, centerY: l=0, width: d=0, height: u=0} = h
                  , g = o ? this.width : d
                  , f = a ? this.height : u
                  , p = new G(c,l)
                  , m = new G(ae(this.originX),ae(this.originY))
                  , v = new G(g,f)
                  , y = this._getTransformedDimensions({
                    width: 0,
                    height: 0
                })
                  , x = this._getTransformedDimensions({
                    width: g,
                    height: f,
                    strokeWidth: 0
                })
                  , _ = this._getTransformedDimensions({
                    width: h.width,
                    height: h.height,
                    strokeWidth: 0
                })
                  , b = new G(0,0)
                  , w = m.scalarAdd(.5)
                  , C = x.multiply(w)
                  , S = new G(o ? _.x / 2 : C.x,a ? _.y / 2 : C.y)
                  , T = new G(r ? this.left - (x.x + y.x) * m.x : p.x - S.x,n ? this.top - (x.y + y.y) * m.y : p.y - S.y)
                  , O = new G(r ? T.x - p.x + _.x * (o ? .5 : 0) : -(o ? .5 * (x.x - y.x) : x.x * w.x),n ? T.y - p.y + _.y * (a ? .5 : 0) : -(a ? .5 * (x.y - y.y) : x.y * w.y)).add(b)
                  , k = new G(o ? -x.x / 2 : 0,a ? -x.y / 2 : 0).add(O);
                return {
                    centerX: T.x,
                    centerY: T.y,
                    correctionX: k.x,
                    correctionY: k.y,
                    width: v.x,
                    height: v.y
                }
            }
            getObjectsBoundingBox(t, e) {
                if (0 === t.length)
                    return null;
                const i = [];
                t.forEach((t=>{
                    const e = t.getRelativeCenterPoint();
                    let s = t._getTransformedDimensions().scalarDivide(2);
                    if (t.angle) {
                        const e = tt(t.angle)
                          , i = Math.abs(z(e))
                          , r = Math.abs(V(e))
                          , n = s.x * r + s.y * i
                          , o = s.x * i + s.y * r;
                        s = new G(n,o)
                    }
                    i.push(e.subtract(s), e.add(s))
                }
                ));
                const {left: s, top: r, width: n, height: o} = Jt(i)
                  , a = new G(n,o)
                  , h = (e ? new G : new G(s,r)).add(a.scalarDivide(2)).transform(this.calcOwnMatrix());
                return {
                    centerX: h.x,
                    centerY: h.y,
                    width: a.x,
                    height: a.y
                }
            }
            onLayout(t, e) {}
            __serializeObjects(t, e) {
                const i = this.includeDefaultValues;
                return this._objects.filter((function(t) {
                    return !t.excludeFromExport
                }
                )).map((function(s) {
                    const r = s.includeDefaultValues;
                    s.includeDefaultValues = i;
                    const n = s[t || "toObject"](e);
                    return s.includeDefaultValues = r,
                    n
                }
                ))
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e(e({}, super.toObject(["layout", "subTargetCheck", "interactive", ...t])), {}, {
                    objects: this.__serializeObjects("toObject", t)
                })
            }
            toString() {
                return "#<Group: (".concat(this.complexity(), ")>")
            }
            dispose() {
                this._activeObjects = [],
                this.forEachObject((t=>{
                    this._watchObject(!1, t),
                    t.dispose()
                }
                )),
                super.dispose()
            }
            _createSVGBgRect(t) {
                if (!this.backgroundColor)
                    return "";
                const e = fs.prototype._toSVG.call(this)
                  , i = e.indexOf("COMMON_PARTS");
                e[i] = 'for="group" ';
                const s = e.join("");
                return t ? t(s) : s
            }
            _toSVG(t) {
                const e = ["<g ", "COMMON_PARTS", " >\n"]
                  , i = this._createSVGBgRect(t);
                i && e.push("\t\t", i);
                for (let i = 0; i < this._objects.length; i++)
                    e.push("\t\t", this._objects[i].toSVG(t));
                return e.push("</g>\n"),
                e
            }
            getSvgStyles() {
                const t = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: ".concat(this.opacity, ";") : ""
                  , e = this.visible ? "" : " visibility: hidden;";
                return [t, this.getSvgFilter(), e].join("")
            }
            toClipPathSVG(t) {
                const e = []
                  , i = this._createSVGBgRect(t);
                i && e.push("\t", i);
                for (let i = 0; i < this._objects.length; i++)
                    e.push("\t", this._objects[i].toClipPathSVG(t));
                return this._createBaseClipPathSVGMarkup(e, {
                    reviver: t
                })
            }
            static fromObject(t) {
                let {objects: i=[]} = t
                  , s = r(t, ps);
                return Promise.all([mt(i), vt(s)]).then((t=>{
                    let[i,r] = t;
                    return new this(i,e(e({}, s), r),!0)
                }
                ))
            }
        }
        s(ms, "stateProperties", [...Di.stateProperties, "layout"]),
        s(ms, "type", "Group"),
        s(ms, "ownDefaults", {
            layout: "fit-content",
            strokeWidth: 0,
            subTargetCheck: !1,
            interactive: !1
        }),
        I.setClass(ms);
        class vs extends ms {
            constructor() {
                super(...arguments),
                s(this, "multiSelectionStacking", "canvas-stacking")
            }
            _shouldSetNestedCoords() {
                return !0
            }
            __objectSelectionMonitor() {}
            multiSelectAdd() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                "selection-order" === this.multiSelectionStacking ? this.add(...e) : e.forEach((t=>{
                    const e = this._objects.findIndex((e=>e.isInFrontOf(t)))
                      , i = -1 === e ? this.size() : e;
                    this.insertAt(i, t)
                }
                ))
            }
            enterGroup(t, e) {
                if (t.group) {
                    const e = t.group;
                    e._exitGroup(t),
                    !(e instanceof vs) && (t.__owningGroup = e)
                }
                return this._enterGroup(t, e),
                !0
            }
            exitGroup(t, e) {
                this._exitGroup(t, e);
                const i = t.__owningGroup;
                i && (i._enterGroup(t, !0),
                delete t.__owningGroup)
            }
            _onAfterObjectsChange(t, e) {
                super._onAfterObjectsChange(t, e);
                const i = [];
                e.forEach((t=>{
                    t.group && !i.includes(t.group) && i.push(t.group)
                }
                )),
                "removed" === t ? i.forEach((t=>{
                    t._onAfterObjectsChange("added", e)
                }
                )) : i.forEach((t=>{
                    t._set("dirty", !0)
                }
                ))
            }
            onDeselect() {
                return this.removeAll(),
                !1
            }
            _applyLayoutStrategy(t) {
                super._applyLayoutStrategy(t),
                0 === this._objects.length && Object.assign(this, {
                    left: 0,
                    top: 0,
                    angle: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                    flipX: !1,
                    flipY: !1
                })
            }
            toString() {
                return "#<ActiveSelection: (".concat(this.complexity(), ")>")
            }
            shouldCache() {
                return !1
            }
            isOnACache() {
                return !1
            }
            _renderControls(t, i, s) {
                t.save(),
                t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1,
                super._renderControls(t, i);
                const r = e(e({
                    hasControls: !1
                }, s), {}, {
                    forActiveSelection: !0
                });
                for (let e = 0; e < this._objects.length; e++)
                    this._objects[e]._renderControls(t, r);
                t.restore()
            }
        }
        s(vs, "type", "ActiveSelection"),
        I.setClass(vs),
        I.setClass(vs, "activeSelection");
        class ys {
            constructor(t) {
                this.options = t,
                this.strokeProjectionMagnitude = this.options.strokeWidth / 2,
                this.scale = new G(this.options.scaleX,this.options.scaleY),
                this.strokeUniformScalar = this.options.strokeUniform ? new G(1 / this.options.scaleX,1 / this.options.scaleY) : new G(1,1)
            }
            createSideVector(t, e) {
                const i = Ae(t, e);
                return this.options.strokeUniform ? i.multiply(this.scale) : i
            }
            projectOrthogonally(t, e, i) {
                return this.applySkew(t.add(this.calcOrthogonalProjection(t, e, i)))
            }
            isSkewed() {
                return 0 !== this.options.skewX || 0 !== this.options.skewY
            }
            applySkew(t) {
                const e = new G(t);
                return e.y += e.x * Math.tan(tt(this.options.skewY)),
                e.x += e.y * Math.tan(tt(this.options.skewX)),
                e
            }
            scaleUnitVector(t, e) {
                return t.multiply(this.strokeUniformScalar).scalarMultiply(e)
            }
        }
        const xs = new G;
        class _s extends ys {
            static getOrthogonalRotationFactor(t, e) {
                const i = e ? Fe(t, e) : (t=>Fe(Ee, t))(t);
                return Math.abs(i) < C ? -1 : 1
            }
            constructor(t, e, i, r) {
                super(r),
                s(this, "AB", void 0),
                s(this, "AC", void 0),
                s(this, "alpha", void 0),
                s(this, "bisector", void 0),
                this.A = new G(t),
                this.B = new G(e),
                this.C = new G(i),
                this.AB = this.createSideVector(this.A, this.B),
                this.AC = this.createSideVector(this.A, this.C),
                this.alpha = Fe(this.AB, this.AC),
                this.bisector = Be(Pe(this.AB.eq(xs) ? this.AC : this.AB, this.alpha / 2))
            }
            calcOrthogonalProjection(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
                const s = this.createSideVector(t, e)
                  , r = Re(s)
                  , n = _s.getOrthogonalRotationFactor(r, this.bisector);
                return this.scaleUnitVector(r, i * n)
            }
            projectBevel() {
                const t = [];
                return (this.alpha % S == 0 ? [this.B] : [this.B, this.C]).forEach((e=>{
                    t.push(this.projectOrthogonally(this.A, e)),
                    t.push(this.projectOrthogonally(this.A, e, -this.strokeProjectionMagnitude))
                }
                )),
                t
            }
            projectMiter() {
                const t = []
                  , e = Math.abs(this.alpha)
                  , i = 1 / Math.sin(e / 2)
                  , s = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * i)
                  , r = this.options.strokeUniform ? Le(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
                return Le(s) / this.strokeProjectionMagnitude <= r && t.push(this.applySkew(this.A.add(s))),
                t.push(...this.projectBevel()),
                t
            }
            projectRoundNoSkew(t, e) {
                const i = []
                  , s = new G(_s.getOrthogonalRotationFactor(this.bisector),_s.getOrthogonalRotationFactor(new G(this.bisector.y,this.bisector.x)));
                return [new G(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s), new G(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s)].forEach((s=>{
                    Xe(s, t, e) && i.push(this.A.add(s))
                }
                )),
                i
            }
            projectRoundWithSkew(t, e) {
                const i = []
                  , {skewX: s, skewY: r, scaleX: n, scaleY: o, strokeUniform: a} = this.options
                  , h = new G(Math.tan(tt(s)),Math.tan(tt(r)))
                  , c = this.strokeProjectionMagnitude
                  , l = a ? c / o / Math.sqrt(1 / o ** 2 + 1 / n ** 2 * h.y ** 2) : c / Math.sqrt(1 + h.y ** 2)
                  , d = new G(Math.sqrt(Math.max(c ** 2 - l ** 2, 0)),l)
                  , u = a ? c / Math.sqrt(1 + h.x ** 2 * (1 / o) ** 2 / (1 / n + 1 / n * h.x * h.y) ** 2) : c / Math.sqrt(1 + h.x ** 2 / (1 + h.x * h.y) ** 2)
                  , g = new G(u,Math.sqrt(Math.max(c ** 2 - u ** 2, 0)));
                return [g, g.scalarMultiply(-1), d, d.scalarMultiply(-1)].map((t=>this.applySkew(a ? t.multiply(this.strokeUniformScalar) : t))).forEach((s=>{
                    Xe(s, t, e) && i.push(this.applySkew(this.A).add(s))
                }
                )),
                i
            }
            projectRound() {
                const t = [];
                t.push(...this.projectBevel());
                const e = this.alpha % S == 0
                  , i = this.applySkew(this.A)
                  , s = t[e ? 0 : 2].subtract(i)
                  , r = t[e ? 1 : 0].subtract(i)
                  , n = e ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1))
                  , o = Ie(s, n) > 0
                  , a = o ? s : r
                  , h = o ? r : s;
                return this.isSkewed() ? t.push(...this.projectRoundWithSkew(a, h)) : t.push(...this.projectRoundNoSkew(a, h)),
                t
            }
            projectPoints() {
                switch (this.options.strokeLineJoin) {
                case "miter":
                    return this.projectMiter();
                case "round":
                    return this.projectRound();
                default:
                    return this.projectBevel()
                }
            }
            project() {
                return this.projectPoints().map((t=>({
                    originPoint: this.A,
                    projectedPoint: t,
                    angle: this.alpha,
                    bisector: this.bisector
                })))
            }
        }
        class bs extends ys {
            constructor(t, e, i) {
                super(i),
                this.A = new G(t),
                this.T = new G(e)
            }
            calcOrthogonalProjection(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
                const s = this.createSideVector(t, e);
                return this.scaleUnitVector(Re(s), i)
            }
            projectButt() {
                return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)]
            }
            projectRound() {
                const t = [];
                if (!this.isSkewed() && this.A.eq(this.T)) {
                    const e = new G(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
                    t.push(this.applySkew(this.A.add(e)), this.applySkew(this.A.subtract(e)))
                } else
                    t.push(...new _s(this.A,this.T,this.T,this.options).projectRound());
                return t
            }
            projectSquare() {
                const t = [];
                if (this.A.eq(this.T)) {
                    const e = new G(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
                    t.push(this.A.add(e), this.A.subtract(e))
                } else {
                    const e = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude)
                      , i = this.scaleUnitVector(Be(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude)
                      , s = this.A.add(i);
                    t.push(s.add(e), s.subtract(e))
                }
                return t.map((t=>this.applySkew(t)))
            }
            projectPoints() {
                switch (this.options.strokeLineCap) {
                case "round":
                    return this.projectRound();
                case "square":
                    return this.projectSquare();
                default:
                    return this.projectButt()
                }
            }
            project() {
                return this.projectPoints().map((t=>({
                    originPoint: this.A,
                    projectedPoint: t
                })))
            }
        }
        const ws = function(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return t.fill !== e.fill || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth || t.fontSize !== e.fontSize || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle || t.textBackgroundColor !== e.textBackgroundColor || t.deltaY !== e.deltaY || i && (t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough)
        }
          , Cs = (t,e)=>{
            const i = e.split("\n")
              , s = [];
            let r = -1
              , n = {};
            t = Ne(t);
            for (let e = 0; e < i.length; e++)
                if (t[e])
                    for (let o = 0; o < i[e].length; o++) {
                        r++;
                        const i = t[e][o];
                        i && Object.keys(i).length > 0 && (ws(n, i, !0) ? s.push({
                            start: r,
                            end: r + 1,
                            style: i
                        }) : s[s.length - 1].end++),
                        n = i || {}
                    }
                else
                    r += i[e].length,
                    n = {};
            return s
        }
          , Ss = (t,i)=>{
            if (!Array.isArray(t))
                return Ne(t);
            const s = i.split(F)
              , r = {};
            let n = -1
              , o = 0;
            for (let i = 0; i < s.length; i++)
                for (let a = 0; a < s[i].length; a++)
                    n++,
                    t[o] && t[o].start <= n && n < t[o].end && (r[i] = r[i] || {},
                    r[i][a] = e({}, t[o].style),
                    n === t[o].end - 1 && o++);
            return r
        }
          , Ts = (t,e)=>{
            const i = t.charCodeAt(e);
            if (isNaN(i))
                return "";
            if (i < 55296 || i > 57343)
                return t.charAt(e);
            if (55296 <= i && i <= 56319) {
                if (t.length <= e + 1)
                    throw "High surrogate without following low surrogate";
                const i = t.charCodeAt(e + 1);
                if (56320 > i || i > 57343)
                    throw "High surrogate without following low surrogate";
                return t.charAt(e) + t.charAt(e + 1)
            }
            if (0 === e)
                throw "Low surrogate without preceding high surrogate";
            const s = t.charCodeAt(e - 1);
            if (55296 > s || s > 56319)
                throw "Low surrogate without preceding high surrogate";
            return !1
        }
        ;
        var Os;
        const ks = "(".concat(Ai, ")")
          , Ds = "(M) (?:".concat(ks, " ").concat(ks, " ?)+")
          , Ms = "(L) (?:".concat(ks, " ").concat(ks, " ?)+")
          , Es = "(H) (?:".concat(ks, " ?)+")
          , js = "(V) (?:".concat(ks, " ?)+")
          , Ps = String.raw(Os || (Os = n(["(Z)s*"], ["(Z)\\s*"])))
          , As = "(C) (?:".concat(ks, " ").concat(ks, " ").concat(ks, " ").concat(ks, " ").concat(ks, " ").concat(ks, " ?)+")
          , Ls = "(S) (?:".concat(ks, " ").concat(ks, " ").concat(ks, " ").concat(ks, " ?)+")
          , Fs = "(Q) (?:".concat(ks, " ").concat(ks, " ").concat(ks, " ").concat(ks, " ?)+")
          , Bs = "(T) (?:".concat(ks, " ").concat(ks, " ?)+")
          , Rs = "(A) (?:".concat(ks, " ").concat(ks, " ").concat(ks, " ([01]) ?([01]) ").concat(ks, " ").concat(ks, " ?)+")
          , Is = "(?:(?:".concat(Ds, ")") + "|(?:".concat(Ms, ")") + "|(?:".concat(Es, ")") + "|(?:".concat(js, ")") + "|(?:".concat(Ps, ")") + "|(?:".concat(As, ")") + "|(?:".concat(Ls, ")") + "|(?:".concat(Fs, ")") + "|(?:".concat(Bs, ")") + "|(?:".concat(Rs, "))")
          , Ws = {
            m: "l",
            M: "L"
        }
          , Xs = (t,e,i,s,r,n,o,a,h,c,l)=>{
            const d = V(t)
              , u = z(t)
              , g = V(e)
              , f = z(e)
              , p = i * r * g - s * n * f + o
              , m = s * r * g + i * n * f + a;
            return ["C", c + h * (-i * r * u - s * n * d), l + h * (-s * r * u + i * n * d), p + h * (i * r * f + s * n * g), m + h * (s * r * f - i * n * g), p, m]
        }
          , Ys = (t,e,i,s)=>{
            const r = Math.atan2(e, t)
              , n = Math.atan2(s, i);
            return n >= r ? n - r : 2 * Math.PI - (r - n)
        }
        ;
        function Hs(t, e, i, s, r, n, o, a) {
            let c;
            if (h.cachesBoundsOfCurve && (c = [...arguments].join(),
            _.boundsOfCurveCache[c]))
                return _.boundsOfCurveCache[c];
            const l = Math.sqrt
              , d = Math.abs
              , u = []
              , g = [[0, 0], [0, 0]];
            let f = 6 * t - 12 * i + 6 * r
              , p = -3 * t + 9 * i - 9 * r + 3 * o
              , m = 3 * i - 3 * t;
            for (let t = 0; t < 2; ++t) {
                if (t > 0 && (f = 6 * e - 12 * s + 6 * n,
                p = -3 * e + 9 * s - 9 * n + 3 * a,
                m = 3 * s - 3 * e),
                d(p) < 1e-12) {
                    if (d(f) < 1e-12)
                        continue;
                    const t = -m / f;
                    0 < t && t < 1 && u.push(t);
                    continue
                }
                const i = f * f - 4 * m * p;
                if (i < 0)
                    continue;
                const r = l(i)
                  , o = (-f + r) / (2 * p);
                0 < o && o < 1 && u.push(o);
                const h = (-f - r) / (2 * p);
                0 < h && h < 1 && u.push(h)
            }
            let v = u.length;
            const y = v
              , x = Gs(t, e, i, s, r, n, o, a);
            for (; v--; ) {
                const {x: t, y: e} = x(u[v]);
                g[0][v] = t,
                g[1][v] = e
            }
            g[0][y] = t,
            g[1][y] = e,
            g[0][y + 1] = o,
            g[1][y + 1] = a;
            const b = [new G(Math.min(...g[0]),Math.min(...g[1])), new G(Math.max(...g[0]),Math.max(...g[1]))];
            return h.cachesBoundsOfCurve && (_.boundsOfCurveCache[c] = b),
            b
        }
        const Vs = (t,e,i)=>{
            let[s,r,n,o,a,h,c,l] = i;
            const d = ((t,e,i,s,r,n,o)=>{
                if (0 === i || 0 === s)
                    return [];
                let a = 0
                  , h = 0
                  , c = 0;
                const l = Math.PI
                  , d = o * T
                  , u = z(d)
                  , g = V(d)
                  , f = .5 * (-g * t - u * e)
                  , p = .5 * (-g * e + u * t)
                  , m = i ** 2
                  , v = s ** 2
                  , y = p ** 2
                  , x = f ** 2
                  , _ = m * v - m * y - v * x;
                let b = Math.abs(i)
                  , w = Math.abs(s);
                if (_ < 0) {
                    const t = Math.sqrt(1 - _ / (m * v));
                    b *= t,
                    w *= t
                } else
                    c = (r === n ? -1 : 1) * Math.sqrt(_ / (m * y + v * x));
                const C = c * b * p / w
                  , S = -c * w * f / b
                  , O = g * C - u * S + .5 * t
                  , k = u * C + g * S + .5 * e;
                let D = Ys(1, 0, (f - C) / b, (p - S) / w)
                  , M = Ys((f - C) / b, (p - S) / w, (-f - C) / b, (-p - S) / w);
                0 === n && M > 0 ? M -= 2 * l : 1 === n && M < 0 && (M += 2 * l);
                const E = Math.ceil(Math.abs(M / l * 2))
                  , j = new Array(E)
                  , P = M / E
                  , A = 8 / 3 * Math.sin(P / 4) * Math.sin(P / 4) / Math.sin(P / 2);
                let L = D + P;
                for (let t = 0; t < E; t++)
                    j[t] = Xs(D, L, g, u, b, w, O, k, A, a, h),
                    a = j[t][5],
                    h = j[t][6],
                    D = L,
                    L += P;
                return j
            }
            )(c - t, l - e, r, n, a, h, o);
            for (let i = 0, s = d.length; i < s; i++)
                d[i][1] += t,
                d[i][2] += e,
                d[i][3] += t,
                d[i][4] += e,
                d[i][5] += t,
                d[i][6] += e;
            return d
        }
          , zs = (t,e,i,s)=>Math.sqrt((i - t) ** 2 + (s - e) ** 2)
          , Gs = (t,e,i,s,r,n,o,a)=>h=>{
            const c = h ** 3
              , l = (t=>3 * t ** 2 * (1 - t))(h)
              , d = (t=>3 * t * (1 - t) ** 2)(h)
              , u = (t=>(1 - t) ** 3)(h);
            return new G(o * c + r * l + i * d + t * u,a * c + n * l + s * d + e * u)
        }
          , Us = t=>t ** 2
          , Ns = t=>2 * t * (1 - t)
          , qs = t=>(1 - t) ** 2
          , Zs = (t,e,i,s,r,n,o,a)=>h=>{
            const c = Us(h)
              , l = Ns(h)
              , d = qs(h)
              , u = 3 * (d * (i - t) + l * (r - i) + c * (o - r))
              , g = 3 * (d * (s - e) + l * (n - s) + c * (a - n));
            return Math.atan2(g, u)
        }
          , Ks = (t,e,i,s,r,n)=>o=>{
            const a = Us(o)
              , h = Ns(o)
              , c = qs(o);
            return new G(r * a + i * h + t * c,n * a + s * h + e * c)
        }
          , Js = (t,e,i,s,r,n)=>o=>{
            const a = 1 - o
              , h = 2 * (a * (i - t) + o * (r - i))
              , c = 2 * (a * (s - e) + o * (n - s));
            return Math.atan2(c, h)
        }
          , $s = (t,e,i)=>{
            let s = new G(e,i)
              , r = 0;
            for (let e = 1; e <= 100; e += 1) {
                const i = t(e / 100);
                r += zs(s.x, s.y, i.x, i.y),
                s = i
            }
            return r
        }
          , Qs = t=>{
            let e, i, s = 0, r = 0, n = 0, o = 0, a = 0;
            const h = [];
            for (const c of t) {
                const t = {
                    x: r,
                    y: n,
                    command: c[0],
                    length: 0
                };
                switch (c[0]) {
                case "M":
                    i = t,
                    i.x = o = r = c[1],
                    i.y = a = n = c[2];
                    break;
                case "L":
                    i = t,
                    i.length = zs(r, n, c[1], c[2]),
                    r = c[1],
                    n = c[2];
                    break;
                case "C":
                    e = Gs(r, n, c[1], c[2], c[3], c[4], c[5], c[6]),
                    i = t,
                    i.iterator = e,
                    i.angleFinder = Zs(r, n, c[1], c[2], c[3], c[4], c[5], c[6]),
                    i.length = $s(e, r, n),
                    r = c[5],
                    n = c[6];
                    break;
                case "Q":
                    e = Ks(r, n, c[1], c[2], c[3], c[4]),
                    i = t,
                    i.iterator = e,
                    i.angleFinder = Js(r, n, c[1], c[2], c[3], c[4]),
                    i.length = $s(e, r, n),
                    r = c[3],
                    n = c[4];
                    break;
                case "Z":
                    i = t,
                    i.destX = o,
                    i.destY = a,
                    i.length = zs(r, n, o, a),
                    r = o,
                    n = a
                }
                s += i.length,
                h.push(i)
            }
            return h.push({
                length: s,
                x: r,
                y: n
            }),
            h
        }
          , tr = function(t, i) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qs(t)
              , r = 0;
            for (; i - s[r].length > 0 && r < s.length - 2; )
                i -= s[r].length,
                r++;
            const n = s[r]
              , o = i / n.length
              , a = t[r];
            switch (n.command) {
            case "M":
                return {
                    x: n.x,
                    y: n.y,
                    angle: 0
                };
            case "Z":
                return e(e({}, new G(n.x,n.y).lerp(new G(n.destX,n.destY), o)), {}, {
                    angle: Math.atan2(n.destY - n.y, n.destX - n.x)
                });
            case "L":
                return e(e({}, new G(n.x,n.y).lerp(new G(a[1],a[2]), o)), {}, {
                    angle: Math.atan2(a[2] - n.y, a[1] - n.x)
                });
            case "C":
            case "Q":
                return ((t,i)=>{
                    let s, r = 0, n = 0, o = {
                        x: t.x,
                        y: t.y
                    }, a = e({}, o), h = .01, c = 0;
                    const l = t.iterator
                      , d = t.angleFinder;
                    for (; n < i && h > 1e-4; )
                        a = l(r),
                        c = r,
                        s = zs(o.x, o.y, a.x, a.y),
                        s + n > i ? (r -= h,
                        h /= 2) : (o = a,
                        r += h,
                        n += s);
                    return e(e({}, a), {}, {
                        angle: d(c)
                    })
                }
                )(n, i)
            }
        }
          , er = (t,e)=>t.map((t=>t.map(((t,i)=>0 === i || void 0 === e ? t : kt(t, e))).join(" "))).join(" ");
        class ir extends Gt {
            constructor(t) {
                let {allowTouchScrolling: e=!1, containerClass: i=""} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(t),
                s(this, "upper", void 0),
                s(this, "container", void 0);
                const {el: r} = this.lower
                  , n = this.createUpperCanvas();
                this.upper = {
                    el: n,
                    ctx: n.getContext("2d")
                },
                this.applyCanvasStyle(r, {
                    allowTouchScrolling: e
                }),
                this.applyCanvasStyle(n, {
                    allowTouchScrolling: e
                });
                const o = this.createContainerElement();
                o.classList.add(i),
                r.parentNode && r.parentNode.replaceChild(o, r),
                o.append(r, n),
                this.container = o
            }
            createUpperCanvas() {
                const {el: t} = this.lower
                  , e = $();
                return e.className = t.className,
                e.classList.remove("lower-canvas"),
                e.classList.add("upper-canvas"),
                e.setAttribute("data-fabric", "top"),
                e.style.cssText = t.style.cssText,
                e.setAttribute("draggable", "true"),
                e
            }
            createContainerElement() {
                const t = y().createElement("div");
                return t.setAttribute("data-fabric", "wrapper"),
                Yt(t, {
                    position: "relative"
                }),
                zt(t),
                t
            }
            applyCanvasStyle(t, e) {
                let {allowTouchScrolling: i} = e;
                Yt(t, {
                    position: "absolute",
                    left: "0",
                    top: "0"
                }),
                function(t, e) {
                    const i = e ? "manipulation" : L;
                    Yt(t, {
                        "touch-action": i,
                        "-ms-touch-action": i
                    })
                }(t, i),
                zt(t)
            }
            setDimensions(t, e) {
                super.setDimensions(t, e);
                const {el: i, ctx: s} = this.upper;
                Ht(i, s, t, e)
            }
            setCSSDimensions(t) {
                super.setCSSDimensions(t),
                Vt(this.upper.el, t),
                Vt(this.container, t)
            }
            cleanupDOM(t) {
                const e = this.container
                  , {el: i} = this.lower
                  , {el: s} = this.upper;
                super.cleanupDOM(t),
                e.removeChild(s),
                e.removeChild(i),
                e.parentNode && e.parentNode.replaceChild(i, e)
            }
            dispose() {
                super.dispose(),
                v().dispose(this.upper.el),
                delete this.upper,
                delete this.container
            }
        }
        const sr = ["activeSelection"];
        class rr extends Nt {
            static getDefaults() {
                return e(e({}, super.getDefaults()), rr.ownDefaults)
            }
            get upperCanvasEl() {
                var t;
                return null === (t = this.elements.upper) || void 0 === t ? void 0 : t.el
            }
            get contextTop() {
                var t;
                return null === (t = this.elements.upper) || void 0 === t ? void 0 : t.ctx
            }
            get wrapperEl() {
                return this.elements.container
            }
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , {activeSelection: i=new vs} = e;
                super(t, r(e, sr)),
                s(this, "targets", []),
                s(this, "_hoveredTargets", []),
                s(this, "_objectsToRender", void 0),
                s(this, "_currentTransform", null),
                s(this, "_groupSelector", null),
                s(this, "contextTopDirty", !1),
                s(this, "_activeSelection", void 0),
                this._activeSelection = i,
                this._activeSelection.set("canvas", this),
                this._activeSelection.setCoords()
            }
            initElements(t) {
                this.elements = new ir(t,{
                    allowTouchScrolling: this.allowTouchScrolling,
                    containerClass: this.containerClass
                }),
                this._createCacheCanvas()
            }
            _onObjectAdded(t) {
                this._objectsToRender = void 0,
                super._onObjectAdded(t)
            }
            _onObjectRemoved(t) {
                this._objectsToRender = void 0,
                t === this._activeObject && (this.fire("before:selection:cleared", {
                    deselected: [t]
                }),
                this._discardActiveObject(),
                this.fire("selection:cleared", {
                    deselected: [t]
                }),
                t.fire("deselected", {
                    target: t
                })),
                t === this._hoveredTarget && (this._hoveredTarget = void 0,
                this._hoveredTargets = []),
                super._onObjectRemoved(t)
            }
            _onStackOrderChanged() {
                this._objectsToRender = void 0,
                super._onStackOrderChanged()
            }
            _chooseObjectsToRender() {
                const t = this._activeObject;
                return !this.preserveObjectStacking && t ? this._objects.filter((e=>!e.group && e !== t)).concat(t) : this._objects
            }
            renderAll() {
                this.cancelRequestedRender(),
                this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop),
                this.contextTopDirty = !1),
                this.hasLostContext && (this.renderTopLayer(this.contextTop),
                this.hasLostContext = !1),
                !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()),
                this.renderCanvas(this.getContext(), this._objectsToRender))
            }
            renderTopLayer(t) {
                t.save(),
                this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(),
                this.contextTopDirty = !0),
                this.selection && this._groupSelector && (this._drawSelection(t),
                this.contextTopDirty = !0),
                t.restore()
            }
            renderTop() {
                const t = this.contextTop;
                this.clearContext(t),
                this.renderTopLayer(t),
                this.fire("after:render", {
                    ctx: t
                })
            }
            setTargetFindTolerance(t) {
                t = Math.round(t),
                this.targetFindTolerance = t;
                const e = this.getRetinaScaling()
                  , i = Math.ceil((2 * t + 1) * e);
                this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = i,
                this.pixelFindContext.scale(e, e)
            }
            isTargetTransparent(t, e, i) {
                const s = this.targetFindTolerance
                  , r = this.pixelFindContext;
                this.clearContext(r),
                r.save(),
                r.translate(-e + s, -i + s),
                r.transform(...this.viewportTransform);
                const n = t.selectionBackgroundColor;
                t.selectionBackgroundColor = "",
                t.render(r),
                t.selectionBackgroundColor = n,
                r.restore();
                const o = Math.round(s * this.getRetinaScaling());
                return ((t,e,i,s)=>{
                    const r = 2 * (s = Math.round(s)) + 1
                      , {data: n} = t.getImageData(e - s, i - s, r, r);
                    for (let t = 3; t < n.length; t += 4)
                        if (n[t] > 0)
                            return !1;
                    return !0
                }
                )(r, o, o, o)
            }
            _isSelectionKeyPressed(t) {
                const e = this.selectionKey;
                return !!e && (Array.isArray(e) ? !!e.find((e=>!!e && !0 === t[e])) : t[e])
            }
            _shouldClearSelection(t, e) {
                const i = this.getActiveObjects()
                  , s = this._activeObject;
                return !!(!e || e && s && i.length > 1 && -1 === i.indexOf(e) && s !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && s && s !== e)
            }
            _shouldCenterTransform(t, e, i) {
                if (!t)
                    return;
                let s;
                return "scale" === e || "scaleX" === e || "scaleY" === e || "resizing" === e ? s = this.centeredScaling || t.centeredScaling : "rotate" === e && (s = this.centeredRotation || t.centeredRotation),
                s ? !i : i
            }
            _getOriginFromCorner(t, e) {
                const i = {
                    x: t.originX,
                    y: t.originY
                };
                return ["ml", "tl", "bl"].includes(e) ? i.x = A : ["mr", "tr", "br"].includes(e) && (i.x = E),
                ["tl", "mt", "tr"].includes(e) ? i.y = P : ["bl", "mb", "br"].includes(e) && (i.y = j),
                i
            }
            _setupCurrentTransform(t, i, s) {
                var r;
                if (!i)
                    return;
                const n = i.group ? re(this.getPointer(t), void 0, i.group.calcTransformMatrix()) : this.getPointer(t)
                  , o = i.getActiveControl() || ""
                  , a = !!o && i.controls[o]
                  , h = s && a ? null === (r = a.getActionHandler(t, i, a)) || void 0 === r ? void 0 : r.bind(a) : pe
                  , c = ((t,e,i,s)=>{
                    if (!e || !t)
                        return "drag";
                    const r = s.controls[e];
                    return r.getActionName(i, r, s)
                }
                )(s, o, t, i)
                  , l = this._getOriginFromCorner(i, o)
                  , d = t[this.centeredKey]
                  , u = {
                    target: i,
                    action: c,
                    actionHandler: h,
                    actionPerformed: !1,
                    corner: o,
                    scaleX: i.scaleX,
                    scaleY: i.scaleY,
                    skewX: i.skewX,
                    skewY: i.skewY,
                    offsetX: n.x - i.left,
                    offsetY: n.y - i.top,
                    originX: l.x,
                    originY: l.y,
                    ex: n.x,
                    ey: n.y,
                    lastX: n.x,
                    lastY: n.y,
                    theta: tt(i.angle),
                    width: i.width,
                    height: i.height,
                    shiftKey: t.shiftKey,
                    altKey: d,
                    original: e(e({}, ee(i)), {}, {
                        originX: l.x,
                        originY: l.y
                    })
                };
                this._shouldCenterTransform(i, c, d) && (u.originX = M,
                u.originY = M),
                this._currentTransform = u,
                this._beforeTransform(t)
            }
            setCursor(t) {
                this.upperCanvasEl.style.cursor = t
            }
            _drawSelection(t) {
                const {x: e, y: i, deltaX: s, deltaY: r} = this._groupSelector
                  , n = new G(e,i).transform(this.viewportTransform)
                  , o = new G(e + s,i + r).transform(this.viewportTransform)
                  , a = this.selectionLineWidth / 2;
                let h = Math.min(n.x, o.x)
                  , c = Math.min(n.y, o.y)
                  , l = Math.max(n.x, o.x)
                  , d = Math.max(n.y, o.y);
                this.selectionColor && (t.fillStyle = this.selectionColor,
                t.fillRect(h, c, l - h, d - c)),
                this.selectionLineWidth && this.selectionBorderColor && (t.lineWidth = this.selectionLineWidth,
                t.strokeStyle = this.selectionBorderColor,
                h += a,
                c += a,
                l -= a,
                d -= a,
                Di.prototype._setLineDash.call(this, t, this.selectionDashArray),
                t.strokeRect(h, c, l - h, d - c))
            }
            findTarget(t) {
                if (this.skipTargetFind)
                    return;
                const e = this.getPointer(t, !0)
                  , i = this._activeObject
                  , s = this.getActiveObjects();
                if (this.targets = [],
                i && s.length >= 1) {
                    if (i._findTargetCorner(e, Zt(t)))
                        return i;
                    if (s.length > 1 && this.searchPossibleTargets([i], e))
                        return i;
                    if (i === this.searchPossibleTargets([i], e)) {
                        if (this.preserveObjectStacking) {
                            const s = this.targets;
                            this.targets = [];
                            const r = this.searchPossibleTargets(this._objects, e);
                            return t[this.altSelectionKey] && r && r !== i ? (this.targets = s,
                            i) : r
                        }
                        return i
                    }
                }
                return this.searchPossibleTargets(this._objects, e)
            }
            _checkTarget(t, e) {
                if (t && t.visible && t.evented && t.containsPoint(this.restorePointerVpt(e), !0)) {
                    if (!this.perPixelTargetFind && !t.perPixelTargetFind || t.isEditing)
                        return !0;
                    if (!this.isTargetTransparent(t, e.x, e.y))
                        return !0
                }
                return !1
            }
            _searchPossibleTargets(t, e) {
                let i = t.length;
                for (; i--; ) {
                    const s = t[i];
                    if (this._checkTarget(s, e)) {
                        if (Lt(s) && s.subTargetCheck) {
                            const t = this._searchPossibleTargets(s._objects, e);
                            t && this.targets.push(t)
                        }
                        return s
                    }
                }
            }
            searchPossibleTargets(t, e) {
                const i = this._searchPossibleTargets(t, e);
                return i && Lt(i) && i.interactive && this.targets[0] ? this.targets[0] : i
            }
            restorePointerVpt(t) {
                return t.transform(rt(this.viewportTransform))
            }
            getPointer(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this._absolutePointer && !e)
                    return this._absolutePointer;
                if (this._pointer && e)
                    return this._pointer;
                const i = this.upperCanvasEl
                  , s = i.getBoundingClientRect();
                let r = (t=>{
                    const e = It(t.target)
                      , i = function(t) {
                        const e = t.changedTouches;
                        return e && e[0] ? e[0] : t
                    }(t);
                    return new G(i.clientX + e.left,i.clientY + e.top)
                }
                )(t)
                  , n = s.width || 0
                  , o = s.height || 0;
                n && o || (j in s && P in s && (o = Math.abs(s.top - s.bottom)),
                A in s && E in s && (n = Math.abs(s.right - s.left))),
                this.calcOffset(),
                r.x = r.x - this._offset.left,
                r.y = r.y - this._offset.top,
                e || (r = this.restorePointerVpt(r));
                const a = this.getRetinaScaling();
                1 !== a && (r.x /= a,
                r.y /= a);
                const h = 0 === n || 0 === o ? new G(1,1) : new G(i.width / n,i.height / o);
                return r.multiply(h)
            }
            _setDimensionsImpl(t, e) {
                this._resetTransformEventData(),
                super._setDimensionsImpl(t, e),
                this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop)
            }
            _createCacheCanvas() {
                this.pixelFindCanvasEl = $(),
                this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
                    willReadFrequently: !0
                }),
                this.setTargetFindTolerance(this.targetFindTolerance)
            }
            getTopContext() {
                return this.elements.upper.ctx
            }
            getSelectionContext() {
                return this.elements.upper.ctx
            }
            getSelectionElement() {
                return this.elements.upper.el
            }
            getActiveObject() {
                return this._activeObject
            }
            getActiveSelection() {
                return this._activeSelection
            }
            getActiveObjects() {
                const t = this._activeObject;
                return t ? t === this._activeSelection ? [...t._objects] : [t] : []
            }
            _fireSelectionEvents(t, e) {
                let i = !1
                  , s = !1;
                const r = this.getActiveObjects()
                  , n = []
                  , o = [];
                t.forEach((t=>{
                    r.includes(t) || (i = !0,
                    t.fire("deselected", {
                        e,
                        target: t
                    }),
                    o.push(t))
                }
                )),
                r.forEach((s=>{
                    t.includes(s) || (i = !0,
                    s.fire("selected", {
                        e,
                        target: s
                    }),
                    n.push(s))
                }
                )),
                t.length > 0 && r.length > 0 ? (s = !0,
                i && this.fire("selection:updated", {
                    e,
                    selected: n,
                    deselected: o
                })) : r.length > 0 ? (s = !0,
                this.fire("selection:created", {
                    e,
                    selected: n
                })) : t.length > 0 && (s = !0,
                this.fire("selection:cleared", {
                    e,
                    deselected: o
                })),
                s && (this._objectsToRender = void 0)
            }
            setActiveObject(t, e) {
                const i = this.getActiveObjects()
                  , s = this._setActiveObject(t, e);
                return this._fireSelectionEvents(i, e),
                s
            }
            _setActiveObject(t, e) {
                return !(this._activeObject === t || !this._discardActiveObject(e, t) && this._activeObject || t.onSelect({
                    e
                }) || (this._activeObject = t,
                t instanceof vs && this._activeSelection !== t && (this._activeSelection = t,
                t.set("canvas", this),
                t.setCoords()),
                0))
            }
            _discardActiveObject(t, e) {
                const i = this._activeObject;
                return !!i && !i.onDeselect({
                    e: t,
                    object: e
                }) && (i === this._activeSelection && (this._activeSelection.removeAll(),
                te(this._activeSelection)),
                this._currentTransform && this._currentTransform.target === i && this.endCurrentTransform(t),
                this._activeObject = void 0,
                !0)
            }
            discardActiveObject(t) {
                const e = this.getActiveObjects()
                  , i = this.getActiveObject();
                e.length && this.fire("before:selection:cleared", {
                    e: t,
                    deselected: [i]
                });
                const s = this._discardActiveObject(t);
                return this._fireSelectionEvents(e, t),
                s
            }
            setViewportTransform(t) {
                super.setViewportTransform(t);
                const e = this._activeObject;
                e && e.setCoords()
            }
            destroy() {
                const t = this._activeSelection;
                t.removeAll(),
                this._activeSelection = void 0,
                t.dispose(),
                super.destroy(),
                this.pixelFindContext = null,
                this.pixelFindCanvasEl = void 0
            }
            clear() {
                this.discardActiveObject(),
                this._activeObject = void 0,
                this.clearContext(this.contextTop),
                super.clear()
            }
            drawControls(t) {
                const e = this._activeObject;
                e && e._renderControls(t)
            }
            _toObject(t, e, i) {
                const s = this._realizeGroupTransformOnObject(t)
                  , r = super._toObject(t, e, i);
                return t.set(s),
                r
            }
            _realizeGroupTransformOnObject(t) {
                if (t.group && t.group === this._activeSelection && this._activeObject === t.group) {
                    const e = yt(t, ["angle", "flipX", "flipY", E, "scaleX", "scaleY", "skewX", "skewY", j]);
                    return ((t,e)=>{
                        Qt(t, nt(e, t.calcOwnMatrix()))
                    }
                    )(t, this._activeObject.calcOwnMatrix()),
                    e
                }
                return {}
            }
            _setSVGObject(t, e, i) {
                const s = this._realizeGroupTransformOnObject(e);
                super._setSVGObject(t, e, i),
                e.set(s)
            }
        }
        s(rr, "ownDefaults", {
            uniformScaling: !0,
            uniScaleKey: "shiftKey",
            centeredScaling: !1,
            centeredRotation: !1,
            centeredKey: "altKey",
            altActionKey: "shiftKey",
            selection: !0,
            selectionKey: "shiftKey",
            selectionColor: "rgba(100, 100, 255, 0.3)",
            selectionDashArray: [],
            selectionBorderColor: "rgba(255, 255, 255, 0.3)",
            selectionLineWidth: 1,
            selectionFullyContained: !1,
            hoverCursor: "move",
            moveCursor: "move",
            defaultCursor: "default",
            freeDrawingCursor: "crosshair",
            notAllowedCursor: "not-allowed",
            perPixelTargetFind: !1,
            targetFindTolerance: 0,
            skipTargetFind: !1,
            stopContextMenu: !1,
            fireRightClick: !1,
            fireMiddleClick: !1,
            enablePointerEvents: !1,
            containerClass: "canvas-container",
            preserveObjectStacking: !1
        });
        class nr {
            constructor(t) {
                s(this, "targets", []),
                s(this, "__disposer", void 0);
                const e = ()=>{
                    const e = t.getActiveObject();
                    Bt(e) && e.hiddenTextarea && e.hiddenTextarea.focus()
                }
                  , i = t.upperCanvasEl;
                i.addEventListener("click", e),
                this.__disposer = ()=>i.removeEventListener("click", e)
            }
            exitTextEditing() {
                this.target = void 0,
                this.targets.forEach((t=>{
                    t.isEditing && t.exitEditing()
                }
                ))
            }
            add(t) {
                this.targets.push(t)
            }
            remove(t) {
                this.unregister(t),
                H(this.targets, t)
            }
            register(t) {
                this.target = t
            }
            unregister(t) {
                t === this.target && (this.target = void 0)
            }
            onMouseMove(t) {
                var e;
                (null === (e = this.target) || void 0 === e ? void 0 : e.isEditing) && this.target.updateSelectionOnMouseMove(t)
            }
            clear() {
                this.targets = [],
                this.target = void 0
            }
            dispose() {
                this.clear(),
                this.__disposer(),
                delete this.__disposer
            }
        }
        const or = ["target", "oldTarget", "fireCanvas", "e"]
          , ar = {
            passive: !1
        };
        function hr(t, e) {
            return !!t.button && t.button === e - 1
        }
        const cr = function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                i[s - 1] = arguments[s];
            return t.addEventListener(...i)
        }
          , lr = function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                i[s - 1] = arguments[s];
            return t.removeEventListener(...i)
        }
          , dr = {
            mouse: {
                in: "over",
                out: "out",
                targetIn: "mouseover",
                targetOut: "mouseout",
                canvasIn: "mouse:over",
                canvasOut: "mouse:out"
            },
            drag: {
                in: "enter",
                out: "leave",
                targetIn: "dragenter",
                targetOut: "dragleave",
                canvasIn: "drag:enter",
                canvasOut: "drag:leave"
            }
        };
        class ur extends rr {
            constructor(t) {
                super(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}),
                s(this, "_isClick", void 0),
                s(this, "textEditingManager", new nr(this)),
                ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onDoubleClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach((t=>{
                    this[t] = this[t].bind(this)
                }
                )),
                this.addOrRemove(cr, "add")
            }
            _getEventPrefix() {
                return this.enablePointerEvents ? "pointer" : "mouse"
            }
            addOrRemove(t, e) {
                const i = this.upperCanvasEl
                  , s = this._getEventPrefix();
                t(Xt(i), "resize", this._onResize),
                t(i, s + "down", this._onMouseDown),
                t(i, "".concat(s, "move"), this._onMouseMove, ar),
                t(i, "".concat(s, "out"), this._onMouseOut),
                t(i, "".concat(s, "enter"), this._onMouseEnter),
                t(i, "wheel", this._onMouseWheel),
                t(i, "contextmenu", this._onContextMenu),
                t(i, "dblclick", this._onDoubleClick),
                t(i, "dragstart", this._onDragStart),
                t(i, "dragend", this._onDragEnd),
                t(i, "dragover", this._onDragOver),
                t(i, "dragenter", this._onDragEnter),
                t(i, "dragleave", this._onDragLeave),
                t(i, "drop", this._onDrop),
                this.enablePointerEvents || t(i, "touchstart", this._onTouchStart, ar)
            }
            removeListeners() {
                this.addOrRemove(lr, "remove");
                const t = this._getEventPrefix()
                  , e = Wt(this.upperCanvasEl);
                lr(e, "".concat(t, "up"), this._onMouseUp),
                lr(e, "touchend", this._onTouchEnd, ar),
                lr(e, "".concat(t, "move"), this._onMouseMove, ar),
                lr(e, "touchmove", this._onMouseMove, ar)
            }
            _onMouseWheel(t) {
                this.__onMouseWheel(t)
            }
            _onMouseOut(t) {
                const i = this._hoveredTarget
                  , s = {
                    e: t,
                    isClick: !1,
                    pointer: this.getPointer(t, !0),
                    absolutePointer: this.getPointer(t)
                };
                this.fire("mouse:out", e(e({}, s), {}, {
                    target: i
                })),
                this._hoveredTarget = void 0,
                i && i.fire("mouseout", e({}, s)),
                this._hoveredTargets.forEach((t=>{
                    this.fire("mouse:out", e(e({}, s), {}, {
                        target: t
                    })),
                    t && t.fire("mouseout", e({}, s))
                }
                )),
                this._hoveredTargets = []
            }
            _onMouseEnter(t) {
                this._currentTransform || this.findTarget(t) || (this.fire("mouse:over", {
                    e: t,
                    isClick: !1,
                    pointer: this.getPointer(t, !0),
                    absolutePointer: this.getPointer(t)
                }),
                this._hoveredTarget = void 0,
                this._hoveredTargets = [])
            }
            _onDragStart(t) {
                this._isClick = !1;
                const e = this.getActiveObject();
                if (Rt(e) && e.onDragStart(t)) {
                    this._dragSource = e;
                    const i = {
                        e: t,
                        target: e
                    };
                    return this.fire("dragstart", i),
                    e.fire("dragstart", i),
                    void cr(this.upperCanvasEl, "drag", this._onDragProgress)
                }
                Kt(t)
            }
            _renderDragEffects(t, e, i) {
                let s = !1;
                const r = this._dropTarget;
                r && r !== e && r !== i && (r.clearContextTop(),
                s = !0),
                null == e || e.clearContextTop(),
                i !== e && (null == i || i.clearContextTop());
                const n = this.contextTop;
                n.save(),
                n.transform(...this.viewportTransform),
                e && (n.save(),
                e.transform(n),
                e.renderDragSourceEffect(t),
                n.restore(),
                s = !0),
                i && (n.save(),
                i.transform(n),
                i.renderDropTargetEffect(t),
                n.restore(),
                s = !0),
                n.restore(),
                s && (this.contextTopDirty = !0)
            }
            _onDragEnd(t) {
                const e = !!t.dataTransfer && t.dataTransfer.dropEffect !== L
                  , i = e ? this._activeObject : void 0
                  , s = {
                    e: t,
                    target: this._dragSource,
                    subTargets: this.targets,
                    dragSource: this._dragSource,
                    didDrop: e,
                    dropTarget: i
                };
                lr(this.upperCanvasEl, "drag", this._onDragProgress),
                this.fire("dragend", s),
                this._dragSource && this._dragSource.fire("dragend", s),
                delete this._dragSource,
                this._onMouseUp(t)
            }
            _onDragProgress(t) {
                const e = {
                    e: t,
                    target: this._dragSource,
                    dragSource: this._dragSource,
                    dropTarget: this._draggedoverTarget
                };
                this.fire("drag", e),
                this._dragSource && this._dragSource.fire("drag", e)
            }
            findDragTargets(t) {
                return this.targets = [],
                {
                    target: this._searchPossibleTargets(this._objects, this.getPointer(t, !0)),
                    targets: [...this.targets]
                }
            }
            _onDragOver(t) {
                const e = "dragover"
                  , {target: i, targets: s} = this.findDragTargets(t)
                  , r = this._dragSource
                  , n = {
                    e: t,
                    target: i,
                    subTargets: s,
                    dragSource: r,
                    canDrop: !1,
                    dropTarget: void 0
                };
                let o;
                this.fire(e, n),
                this._fireEnterLeaveEvents(i, n),
                i && (i.canDrop(t) && (o = i),
                i.fire(e, n));
                for (let i = 0; i < s.length; i++) {
                    const r = s[i];
                    r.canDrop(t) && (o = r),
                    r.fire(e, n)
                }
                this._renderDragEffects(t, r, o),
                this._dropTarget = o
            }
            _onDragEnter(t) {
                const {target: e, targets: i} = this.findDragTargets(t)
                  , s = {
                    e: t,
                    target: e,
                    subTargets: i,
                    dragSource: this._dragSource
                };
                this.fire("dragenter", s),
                this._fireEnterLeaveEvents(e, s)
            }
            _onDragLeave(t) {
                const e = {
                    e: t,
                    target: this._draggedoverTarget,
                    subTargets: this.targets,
                    dragSource: this._dragSource
                };
                this.fire("dragleave", e),
                this._fireEnterLeaveEvents(void 0, e),
                this._renderDragEffects(t, this._dragSource),
                this._dropTarget = void 0,
                this.targets = [],
                this._hoveredTargets = []
            }
            _onDrop(t) {
                const {target: e, targets: i} = this.findDragTargets(t)
                  , s = this._basicEventHandler("drop:before", {
                    e: t,
                    target: e,
                    subTargets: i,
                    dragSource: this._dragSource,
                    pointer: this.getPointer(t, !0),
                    absolutePointer: this.getPointer(t)
                });
                s.didDrop = !1,
                s.dropTarget = void 0,
                this._basicEventHandler("drop", s),
                this.fire("drop:after", s)
            }
            _onContextMenu(t) {
                const e = this.findTarget(t)
                  , i = this.targets || []
                  , s = this._basicEventHandler("contextmenu:before", {
                    e: t,
                    target: e,
                    subTargets: i
                });
                return this.stopContextMenu && Kt(t),
                this._basicEventHandler("contextmenu", s),
                !1
            }
            _onDoubleClick(t) {
                this._cacheTransformEventData(t),
                this._handleEvent(t, "dblclick"),
                this._resetTransformEventData()
            }
            getPointerId(t) {
                const e = t.changedTouches;
                return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1
            }
            _isMainEvent(t) {
                return !0 === t.isPrimary || !1 !== t.isPrimary && ("touchend" === t.type && 0 === t.touches.length || !t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId)
            }
            _onTouchStart(t) {
                t.preventDefault(),
                null === this.mainTouchId && (this.mainTouchId = this.getPointerId(t)),
                this.__onMouseDown(t),
                this._resetTransformEventData();
                const e = this.upperCanvasEl
                  , i = this._getEventPrefix()
                  , s = Wt(e);
                cr(s, "touchend", this._onTouchEnd, ar),
                cr(s, "touchmove", this._onMouseMove, ar),
                lr(e, "".concat(i, "down"), this._onMouseDown)
            }
            _onMouseDown(t) {
                this.__onMouseDown(t),
                this._resetTransformEventData();
                const e = this.upperCanvasEl
                  , i = this._getEventPrefix();
                lr(e, "".concat(i, "move"), this._onMouseMove, ar);
                const s = Wt(e);
                cr(s, "".concat(i, "up"), this._onMouseUp),
                cr(s, "".concat(i, "move"), this._onMouseMove, ar)
            }
            _onTouchEnd(t) {
                if (t.touches.length > 0)
                    return;
                this.__onMouseUp(t),
                this._resetTransformEventData(),
                this.mainTouchId = null;
                const e = this._getEventPrefix()
                  , i = Wt(this.upperCanvasEl);
                lr(i, "touchend", this._onTouchEnd, ar),
                lr(i, "touchmove", this._onMouseMove, ar),
                this._willAddMouseDown && clearTimeout(this._willAddMouseDown),
                this._willAddMouseDown = setTimeout((()=>{
                    cr(this.upperCanvasEl, "".concat(e, "down"), this._onMouseDown),
                    this._willAddMouseDown = 0
                }
                ), 400)
            }
            _onMouseUp(t) {
                this.__onMouseUp(t),
                this._resetTransformEventData();
                const e = this.upperCanvasEl
                  , i = this._getEventPrefix();
                if (this._isMainEvent(t)) {
                    const t = Wt(this.upperCanvasEl);
                    lr(t, "".concat(i, "up"), this._onMouseUp),
                    lr(t, "".concat(i, "move"), this._onMouseMove, ar),
                    cr(e, "".concat(i, "move"), this._onMouseMove, ar)
                }
            }
            _onMouseMove(t) {
                const e = this.getActiveObject();
                !this.allowTouchScrolling && (!e || Rt(e) && !e.shouldStartDragging()) && t.preventDefault && t.preventDefault(),
                this.__onMouseMove(t)
            }
            _onResize() {
                this.calcOffset(),
                this._resetTransformEventData()
            }
            _shouldRender(t) {
                const e = this.getActiveObject();
                return !!(!!e != !!t || e && t && e !== t) || (Bt(e),
                !1)
            }
            __onMouseUp(t) {
                const e = this._currentTransform;
                this._cacheTransformEventData(t);
                const i = this._target
                  , s = this._isClick;
                if (this._handleEvent(t, "up:before"),
                hr(t, 3))
                    return void (this.fireRightClick && this._handleEvent(t, "up", 3, s));
                if (hr(t, 2))
                    return this.fireMiddleClick && this._handleEvent(t, "up", 2, s),
                    void this._resetTransformEventData();
                if (this.isDrawingMode && this._isCurrentlyDrawing)
                    return void this._onMouseUpInDrawingMode(t);
                if (!this._isMainEvent(t))
                    return;
                let r, n, o = !1;
                if (e && (this._finalizeCurrentTransform(t),
                o = e.actionPerformed),
                !s) {
                    const e = i === this._activeObject;
                    this.handleSelection(t),
                    o || (o = this._shouldRender(i) || !e && i === this._activeObject)
                }
                if (i) {
                    if (n = i._findTargetCorner(this.getPointer(t, !0), Zt(t)),
                    i.selectable && i !== this._activeObject && "up" === i.activeOn)
                        this.setActiveObject(i, t),
                        o = !0;
                    else {
                        const s = i.controls[n]
                          , o = s && s.getMouseUpHandler(t, i, s);
                        o && (r = this.getPointer(t),
                        o.call(s, t, e, r.x, r.y))
                    }
                    i.isMoving = !1
                }
                if (e && (e.target !== i || e.corner !== n)) {
                    const i = e.target && e.target.controls[e.corner]
                      , s = i && i.getMouseUpHandler(t, e.target, i);
                    r = r || this.getPointer(t),
                    s && s.call(i, t, e, r.x, r.y)
                }
                this._setCursorFromEvent(t, i),
                this._handleEvent(t, "up", 1, s),
                this._groupSelector = null,
                this._currentTransform = null,
                i && (i.__corner = void 0),
                o ? this.requestRenderAll() : s || Bt(this._activeObject) && this._activeObject.isEditing || this.renderTop()
            }
            _basicEventHandler(t, e) {
                const {target: i, subTargets: s=[]} = e;
                this.fire(t, e),
                i && i.fire(t, e);
                for (let r = 0; r < s.length; r++)
                    s[r] !== i && s[r].fire(t, e);
                return e
            }
            _handleEvent(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                const r = this._target
                  , n = this.targets || []
                  , o = {
                    e: t,
                    target: r,
                    subTargets: n,
                    button: i,
                    isClick: s,
                    pointer: this.getPointer(t, !0),
                    absolutePointer: this.getPointer(t),
                    transform: this._currentTransform
                };
                "up" === e && (o.currentTarget = this.findTarget(t),
                o.currentSubTargets = this.targets),
                this.fire("mouse:".concat(e), o),
                r && r.fire("mouse".concat(e), o);
                for (let t = 0; t < n.length; t++)
                    n[t] !== r && n[t].fire("mouse".concat(e), o)
            }
            endCurrentTransform(t) {
                const e = this._currentTransform;
                this._finalizeCurrentTransform(t),
                e && e.target && (e.target.isMoving = !1),
                this._currentTransform = null
            }
            _finalizeCurrentTransform(t) {
                const e = this._currentTransform
                  , i = e.target
                  , s = {
                    e: t,
                    target: i,
                    transform: e,
                    action: e.action
                };
                i._scaling && (i._scaling = !1),
                i.setCoords(),
                e.actionPerformed && (this.fire("object:modified", s),
                i.fire("modified", s))
            }
            _onMouseDownInDrawingMode(t) {
                this._isCurrentlyDrawing = !0,
                this.getActiveObject() && (this.discardActiveObject(t),
                this.requestRenderAll());
                const e = this.getPointer(t);
                this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e, {
                    e: t,
                    pointer: e
                }),
                this._handleEvent(t, "down")
            }
            _onMouseMoveInDrawingMode(t) {
                if (this._isCurrentlyDrawing) {
                    const e = this.getPointer(t);
                    this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e, {
                        e: t,
                        pointer: e
                    })
                }
                this.setCursor(this.freeDrawingCursor),
                this._handleEvent(t, "move")
            }
            _onMouseUpInDrawingMode(t) {
                const e = this.getPointer(t);
                this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
                    e: t,
                    pointer: e
                }) : this._isCurrentlyDrawing = !1,
                this._handleEvent(t, "up")
            }
            __onMouseDown(t) {
                this._isClick = !0,
                this._cacheTransformEventData(t),
                this._handleEvent(t, "down:before");
                let e = this._target;
                if (hr(t, 3))
                    return void (this.fireRightClick && this._handleEvent(t, "down", 3));
                if (hr(t, 2))
                    return void (this.fireMiddleClick && this._handleEvent(t, "down", 2));
                if (this.isDrawingMode)
                    return void this._onMouseDownInDrawingMode(t);
                if (!this._isMainEvent(t))
                    return;
                if (this._currentTransform)
                    return;
                let i = this._shouldRender(e)
                  , s = !1;
                if (this.handleMultiSelection(t, e) ? (e = this._activeObject,
                s = !0,
                i = !0) : this._shouldClearSelection(t, e) && this.discardActiveObject(t),
                this.selection && (!e || !e.selectable && !e.isEditing && e !== this._activeObject)) {
                    const e = this.getPointer(t);
                    this._groupSelector = {
                        x: e.x,
                        y: e.y,
                        deltaY: 0,
                        deltaX: 0
                    }
                }
                if (e) {
                    const i = e === this._activeObject;
                    e.selectable && "down" === e.activeOn && this.setActiveObject(e, t);
                    const r = e._findTargetCorner(this.getPointer(t, !0), Zt(t));
                    if (e === this._activeObject && (r || !s)) {
                        this._setupCurrentTransform(t, e, i);
                        const s = e.controls[r]
                          , n = this.getPointer(t)
                          , o = s && s.getMouseDownHandler(t, e, s);
                        o && o.call(s, t, this._currentTransform, n.x, n.y)
                    }
                }
                i && (this._objectsToRender = void 0),
                this._handleEvent(t, "down"),
                i && this.requestRenderAll()
            }
            _resetTransformEventData() {
                this._target = void 0,
                this._pointer = void 0,
                this._absolutePointer = void 0
            }
            _cacheTransformEventData(t) {
                this._resetTransformEventData(),
                this._pointer = this.getPointer(t, !0),
                this._absolutePointer = this.restorePointerVpt(this._pointer),
                this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t)
            }
            _beforeTransform(t) {
                const e = this._currentTransform;
                this.fire("before:transform", {
                    e: t,
                    transform: e
                })
            }
            __onMouseMove(t) {
                if (this._isClick = !1,
                this._handleEvent(t, "move:before"),
                this._cacheTransformEventData(t),
                this.isDrawingMode)
                    return void this._onMouseMoveInDrawingMode(t);
                if (!this._isMainEvent(t))
                    return;
                const e = this._groupSelector;
                if (e) {
                    const i = this.getPointer(t);
                    e.deltaX = i.x - e.x,
                    e.deltaY = i.y - e.y,
                    this.renderTop()
                } else if (this._currentTransform)
                    this._transformObject(t);
                else {
                    const e = this.findTarget(t);
                    this._setCursorFromEvent(t, e),
                    this._fireOverOutEvents(t, e)
                }
                this.textEditingManager.onMouseMove(t),
                this._handleEvent(t, "move"),
                this._resetTransformEventData()
            }
            _fireOverOutEvents(t, e) {
                const i = this._hoveredTarget
                  , s = this._hoveredTargets
                  , r = this.targets
                  , n = Math.max(s.length, r.length);
                this.fireSyntheticInOutEvents("mouse", {
                    e: t,
                    target: e,
                    oldTarget: i,
                    fireCanvas: !0
                });
                for (let e = 0; e < n; e++)
                    this.fireSyntheticInOutEvents("mouse", {
                        e: t,
                        target: r[e],
                        oldTarget: s[e]
                    });
                this._hoveredTarget = e,
                this._hoveredTargets = this.targets.concat()
            }
            _fireEnterLeaveEvents(t, i) {
                const s = this._draggedoverTarget
                  , r = this._hoveredTargets
                  , n = this.targets
                  , o = Math.max(r.length, n.length);
                this.fireSyntheticInOutEvents("drag", e(e({}, i), {}, {
                    target: t,
                    oldTarget: s,
                    fireCanvas: !0
                }));
                for (let t = 0; t < o; t++)
                    this.fireSyntheticInOutEvents("drag", e(e({}, i), {}, {
                        target: n[t],
                        oldTarget: r[t]
                    }));
                this._draggedoverTarget = t
            }
            fireSyntheticInOutEvents(t, i) {
                let {target: s, oldTarget: n, fireCanvas: o, e: a} = i
                  , h = r(i, or);
                const {targetIn: c, targetOut: l, canvasIn: d, canvasOut: u} = dr[t]
                  , g = n !== s;
                if (n && g) {
                    const t = e(e({}, h), {}, {
                        e: a,
                        target: n,
                        nextTarget: s,
                        isClick: !1,
                        pointer: this.getPointer(a, !0),
                        absolutePointer: this.getPointer(a)
                    });
                    o && this.fire(u, t),
                    n.fire(l, t)
                }
                if (s && g) {
                    const t = e(e({}, h), {}, {
                        e: a,
                        target: s,
                        previousTarget: n,
                        isClick: !1,
                        pointer: this.getPointer(a, !0),
                        absolutePointer: this.getPointer(a)
                    });
                    o && this.fire(d, t),
                    s.fire(c, t)
                }
            }
            __onMouseWheel(t) {
                this._cacheTransformEventData(t),
                this._handleEvent(t, "wheel"),
                this._resetTransformEventData()
            }
            _transformObject(t) {
                const e = this.getPointer(t)
                  , i = this._currentTransform
                  , s = i.target
                  , r = s.group ? re(e, void 0, s.group.calcTransformMatrix()) : e;
                i.reset = !1,
                i.shiftKey = t.shiftKey,
                i.altKey = !!this.centeredKey && t[this.centeredKey],
                this._performTransformAction(t, i, r),
                i.actionPerformed && this.requestRenderAll()
            }
            _performTransformAction(t, e, i) {
                const s = i.x
                  , r = i.y
                  , n = e.action
                  , o = e.actionHandler;
                let a = !1;
                o && (a = o(t, e, s, r)),
                "drag" === n && a && (e.target.isMoving = !0,
                this.setCursor(e.target.moveCursor || this.moveCursor)),
                e.actionPerformed = e.actionPerformed || a
            }
            _setCursorFromEvent(t, e) {
                if (!e)
                    return void this.setCursor(this.defaultCursor);
                let i = e.hoverCursor || this.hoverCursor;
                const s = this._activeObject === this._activeSelection ? this._activeObject : null
                  , r = (!s || e.group !== s) && e._findTargetCorner(this.getPointer(t, !0));
                if (r) {
                    const i = e.controls[r];
                    this.setCursor(i.cursorStyleHandler(t, i, e))
                } else
                    e.subTargetCheck && this.targets.concat().reverse().map((t=>{
                        i = t.hoverCursor || i
                    }
                    )),
                    this.setCursor(i)
            }
            handleMultiSelection(t, e) {
                const i = this._activeObject
                  , s = this._activeSelection
                  , r = i === s;
                if (i && this._isSelectionKeyPressed(t) && this.selection && e && e.selectable && (i !== e || r) && (r || !e.isDescendantOf(i) && !i.isDescendantOf(e)) && !e.onSelect({
                    e: t
                }) && !i.getActiveControl()) {
                    if (r) {
                        const i = s.getObjects();
                        if (e === s) {
                            const s = this.getPointer(t, !0);
                            if (!(e = this.searchPossibleTargets(i, s) || this.searchPossibleTargets(this._objects, s)) || !e.selectable)
                                return !1
                        }
                        e.group === s ? (s.remove(e),
                        this._hoveredTarget = e,
                        this._hoveredTargets = [...this.targets],
                        1 === s.size() && this._setActiveObject(s.item(0), t)) : (s.multiSelectAdd(e),
                        this._hoveredTarget = s,
                        this._hoveredTargets = [...this.targets]),
                        this._fireSelectionEvents(i, t)
                    } else
                        Bt(i) && i.exitEditing(),
                        s.multiSelectAdd(i, e),
                        this._hoveredTarget = s,
                        this._setActiveObject(s, t),
                        this._fireSelectionEvents([i], t);
                    return !0
                }
                return !1
            }
            handleSelection(t) {
                if (!this.selection || !this._groupSelector)
                    return !1;
                const {x: e, y: i, deltaX: s, deltaY: r} = this._groupSelector
                  , n = new G(e,i)
                  , o = n.add(new G(s,r))
                  , a = n.min(o)
                  , h = n.max(o).subtract(a)
                  , c = n.eq(o)
                  , l = this.collectObjects({
                    left: a.x,
                    top: a.y,
                    width: h.x,
                    height: h.y
                }, {
                    includeIntersecting: !this.selectionFullyContained
                })
                  , d = c ? l[0] ? [l[0]] : [] : l.length > 1 ? l.filter((e=>!e.onSelect({
                    e: t
                }))).reverse() : l;
                return 1 === d.length ? this.setActiveObject(d[0], t) : d.length > 1 && (this._activeSelection.add(...d),
                this.setActiveObject(this._activeSelection, t)),
                this._groupSelector = null,
                !0
            }
            clear() {
                this.textEditingManager.clear(),
                super.clear()
            }
            destroy() {
                this.removeListeners(),
                this.textEditingManager.dispose(),
                super.destroy()
            }
        }
        const gr = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0
        }
          , fr = e(e({}, gr), {}, {
            r1: 0,
            r2: 0
        })
          , pr = /^(\d+\.\d+)%|(\d+)%$/;
        function mr(t) {
            return t && pr.test(t)
        }
        function vr(t, e) {
            const i = "number" == typeof t ? t : "string" == typeof t ? parseFloat(t) / (mr(t) ? 100 : 1) : NaN;
            return Se(0, Y(i, e), 1)
        }
        const yr = /\s*;\s*/
          , xr = /\s*:\s*/;
        function _r(t, e) {
            let i, s;
            const r = t.getAttribute("style");
            if (r) {
                const t = r.split(yr);
                "" === t[t.length - 1] && t.pop();
                for (let e = t.length; e--; ) {
                    const [r,n] = t[e].split(xr).map((t=>t.trim()));
                    "stop-color" === r ? i = n : "stop-opacity" === r && (s = n)
                }
            }
            const n = new Ot(i || t.getAttribute("stop-color") || "rgb(0,0,0)");
            return {
                offset: vr(t.getAttribute("offset"), 0),
                color: n.toRgb(),
                opacity: Y(parseFloat(s || t.getAttribute("stop-opacity") || ""), 1) * n.getAlpha() * e
            }
        }
        function br(t, e) {
            const i = []
              , s = t.getElementsByTagName("stop")
              , r = vr(e, 1);
            for (let t = s.length; t--; )
                i.push(_r(s[t], r));
            return i
        }
        function wr(t) {
            return "linearGradient" === t.nodeName || "LINEARGRADIENT" === t.nodeName ? "linear" : "radial"
        }
        function Cr(t) {
            return "userSpaceOnUse" === t.getAttribute("gradientUnits") ? "pixels" : "percentage"
        }
        function Sr(t, e) {
            return t.getAttribute(e)
        }
        function Tr(t, i) {
            return function(t, e) {
                let i, {width: s, height: r, gradientUnits: n} = e;
                return Object.keys(t).reduce(((e,o)=>{
                    const a = t[o];
                    return "Infinity" === a ? i = 1 : "-Infinity" === a ? i = 0 : (i = "string" == typeof a ? parseFloat(a) : a,
                    "string" == typeof a && mr(a) && (i *= .01,
                    "pixels" === n && ("x1" !== o && "x2" !== o && "r2" !== o || (i *= s),
                    "y1" !== o && "y2" !== o || (i *= r)))),
                    e[o] = i,
                    e
                }
                ), {})
            }("linear" === wr(t) ? function(t) {
                return {
                    x1: Sr(t, "x1") || 0,
                    y1: Sr(t, "y1") || 0,
                    x2: Sr(t, "x2") || "100%",
                    y2: Sr(t, "y2") || 0
                }
            }(t) : function(t) {
                return {
                    x1: Sr(t, "fx") || Sr(t, "cx") || "50%",
                    y1: Sr(t, "fy") || Sr(t, "cy") || "50%",
                    r1: 0,
                    x2: Sr(t, "cx") || "50%",
                    y2: Sr(t, "cy") || "50%",
                    r2: Sr(t, "r") || "50%"
                }
            }(t), e(e({}, i), {}, {
                gradientUnits: Cr(t)
            }))
        }
        class Or {
            constructor(t) {
                let {type: i="linear", gradientUnits: s="pixels", coords: r, colorStops: n=[], offsetX: o=0, offsetY: a=0, gradientTransform: h, id: c} = t;
                this.id = c ? "".concat(c, "_").concat(J()) : J(),
                this.type = i,
                this.gradientUnits = s,
                this.gradientTransform = h,
                this.offsetX = o,
                this.offsetY = a,
                this.coords = e(e({}, "radial" === this.type ? fr : gr), r),
                this.colorStops = n.slice()
            }
            addColorStop(t) {
                for (const e in t) {
                    const i = new Ot(t[e]);
                    this.colorStops.push({
                        offset: parseFloat(e),
                        color: i.toRgb(),
                        opacity: i.getAlpha()
                    })
                }
                return this
            }
            toObject(t) {
                return e(e({}, yt(this, t)), {}, {
                    type: this.type,
                    coords: this.coords,
                    colorStops: this.colorStops,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    gradientUnits: this.gradientUnits,
                    gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0
                })
            }
            toSVG(t) {
                let {additionalTransform: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const s = []
                  , r = this.gradientTransform ? this.gradientTransform.concat() : O.concat()
                  , n = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox"
                  , o = this.colorStops.map((t=>e({}, t))).sort(((t,e)=>t.offset - e.offset));
                let a = -this.offsetX
                  , h = -this.offsetY;
                var c;
                "objectBoundingBox" === n ? (a /= t.width,
                h /= t.height) : (a += t.width / 2,
                h += t.height / 2),
                (c = t) && c.isType("Path") && "percentage" !== this.gradientUnits && (a -= t.pathOffset.x,
                h -= t.pathOffset.y),
                r[4] -= a,
                r[5] -= h;
                const l = ['id="SVGID_'.concat(this.id, '"'), 'gradientUnits="'.concat(n, '"'), 'gradientTransform="'.concat(i ? i + " " : "").concat(Mt(r), '"'), ""].join(" ");
                if ("linear" === this.type) {
                    const {x1: t, y1: e, x2: i, y2: r} = this.coords;
                    s.push("<linearGradient ", l, ' x1="', t, '" y1="', e, '" x2="', i, '" y2="', r, '">\n')
                } else if ("radial" === this.type) {
                    const {x1: t, y1: e, x2: i, y2: r, r1: n, r2: a} = this.coords
                      , h = n > a;
                    s.push("<radialGradient ", l, ' cx="', h ? t : i, '" cy="', h ? e : r, '" r="', h ? n : a, '" fx="', h ? i : t, '" fy="', h ? r : e, '">\n'),
                    h && (o.reverse(),
                    o.forEach((t=>{
                        t.offset = 1 - t.offset
                    }
                    )));
                    const c = Math.min(n, a);
                    if (c > 0) {
                        const t = c / Math.max(n, a);
                        o.forEach((e=>{
                            e.offset += t * (1 - e.offset)
                        }
                        ))
                    }
                }
                return o.forEach((t=>{
                    let {color: e, offset: i, opacity: r} = t;
                    s.push("<stop ", 'offset="', 100 * i + "%", '" style="stop-color:', e, void 0 !== r ? ";stop-opacity: " + r : ";", '"/>\n')
                }
                )),
                s.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"),
                s.join("")
            }
            toLive(t) {
                const e = this.coords
                  , i = "linear" === this.type ? t.createLinearGradient(e.x1, e.y1, e.x2, e.y2) : t.createRadialGradient(e.x1, e.y1, e.r1, e.x2, e.y2, e.r2);
                return this.colorStops.forEach((t=>{
                    let {color: e, opacity: s, offset: r} = t;
                    i.addColorStop(r, void 0 !== s ? new Ot(e).setAlpha(s).toRgba() : e)
                }
                )),
                i
            }
            static fromElement(t, i, s) {
                const r = Cr(t)
                  , n = i._findCenterFromElement();
                return new this(e({
                    id: t.getAttribute("id") || void 0,
                    type: wr(t),
                    coords: Tr(t, {
                        width: s.viewBoxWidth || s.width,
                        height: s.viewBoxHeight || s.height
                    }),
                    colorStops: br(t, s.opacity),
                    gradientUnits: r,
                    gradientTransform: hs(t.getAttribute("gradientTransform") || "")
                }, "pixels" === r ? {
                    offsetX: i.width / 2 - n.x,
                    offsetY: i.height / 2 - n.y
                } : {
                    offsetX: 0,
                    offsetY: 0
                }))
            }
        }
        s(Or, "type", "Gradient"),
        I.setClass(Or, "gradient");
        const kr = ["source"];
        class Dr {
            get type() {
                return "pattern"
            }
            set type(t) {
                c("warn", "Setting type has no effect", t)
            }
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, "repeat", "repeat"),
                s(this, "offsetX", 0),
                s(this, "offsetY", 0),
                s(this, "crossOrigin", ""),
                s(this, "patternTransform", null),
                this.id = J(),
                Object.assign(this, t)
            }
            isImageSource() {
                return !!this.source && "string" == typeof this.source.src
            }
            isCanvasSource() {
                return !!this.source && !!this.source.toDataURL
            }
            sourceToString() {
                return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : ""
            }
            toLive(t) {
                return this.source && (!this.isImageSource() || this.source.complete && 0 !== this.source.naturalWidth && 0 !== this.source.naturalHeight) ? t.createPattern(this.source, this.repeat) : null
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                const {repeat: i, crossOrigin: s} = this;
                return e(e({}, yt(this, t)), {}, {
                    type: "pattern",
                    source: this.sourceToString(),
                    repeat: i,
                    crossOrigin: s,
                    offsetX: kt(this.offsetX, h.NUM_FRACTION_DIGITS),
                    offsetY: kt(this.offsetY, h.NUM_FRACTION_DIGITS),
                    patternTransform: this.patternTransform ? [...this.patternTransform] : null
                })
            }
            toSVG(t) {
                let {width: e, height: i} = t;
                const {source: s, repeat: r, id: n} = this
                  , o = Y(this.offsetX / e, 0)
                  , a = Y(this.offsetY / i, 0)
                  , h = "repeat-y" === r || "no-repeat" === r ? 1 + Math.abs(o || 0) : Y(s.width / e, 0)
                  , c = "repeat-x" === r || "no-repeat" === r ? 1 + Math.abs(a || 0) : Y(s.height / i, 0);
                return ['<pattern id="SVGID_'.concat(n, '" x="').concat(o, '" y="').concat(a, '" width="').concat(h, '" height="').concat(c, '">'), '<image x="0" y="0" width="'.concat(s.width, '" height="').concat(s.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'), "</pattern>", ""].join("\n")
            }
            static async fromObject(t, i) {
                let {source: s} = t
                  , n = r(t, kr);
                const o = await pt(s, e(e({}, i), {}, {
                    crossOrigin: n.crossOrigin
                }));
                return new this(e(e({}, n), {}, {
                    source: o
                }))
            }
        }
        s(Dr, "type", "Pattern"),
        I.setClass(Dr),
        I.setClass(Dr, "pattern");
        class Mr {
            constructor(t) {
                s(this, "color", "rgb(0, 0, 0)"),
                s(this, "width", 1),
                s(this, "shadow", null),
                s(this, "strokeLineCap", "round"),
                s(this, "strokeLineJoin", "round"),
                s(this, "strokeMiterLimit", 10),
                s(this, "strokeDashArray", null),
                s(this, "limitedToCanvasSize", !1),
                this.canvas = t
            }
            _setBrushStyles(t) {
                t.strokeStyle = this.color,
                t.lineWidth = this.width,
                t.lineCap = this.strokeLineCap,
                t.miterLimit = this.strokeMiterLimit,
                t.lineJoin = this.strokeLineJoin,
                t.setLineDash(this.strokeDashArray || [])
            }
            _saveAndTransform(t) {
                const e = this.canvas.viewportTransform;
                t.save(),
                t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
            }
            needsFullRender() {
                return new Ot(this.color).getAlpha() < 1 || !!this.shadow
            }
            _setShadow() {
                if (!this.shadow || !this.canvas)
                    return;
                const t = this.canvas
                  , e = this.shadow
                  , i = t.contextTop
                  , s = t.getZoom() * t.getRetinaScaling();
                i.shadowColor = e.color,
                i.shadowBlur = e.blur * s,
                i.shadowOffsetX = e.offsetX * s,
                i.shadowOffsetY = e.offsetY * s
            }
            _resetShadow() {
                const t = this.canvas.contextTop;
                t.shadowColor = "",
                t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0
            }
            _isOutSideCanvas(t) {
                return t.x < 0 || t.x > this.canvas.getWidth() || t.y < 0 || t.y > this.canvas.getHeight()
            }
        }
        const Er = ["path", "left", "top"]
          , jr = ["d"];
        class Pr extends Di {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , {path: i, left: s, top: n} = e;
                super(r(e, Er)),
                this._setPath(t || [], !0),
                "number" == typeof s && this.set(E, s),
                "number" == typeof n && this.set(j, n)
            }
            _setPath(t, e) {
                this.path = (t=>{
                    let e = 0
                      , i = 0
                      , s = 0
                      , r = 0;
                    const n = [];
                    let o, a = 0, h = 0;
                    for (const c of t) {
                        const t = [...c];
                        let l;
                        switch (t[0]) {
                        case "l":
                            t[1] += e,
                            t[2] += i;
                        case "L":
                            e = t[1],
                            i = t[2],
                            l = ["L", e, i];
                            break;
                        case "h":
                            t[1] += e;
                        case "H":
                            e = t[1],
                            l = ["L", e, i];
                            break;
                        case "v":
                            t[1] += i;
                        case "V":
                            i = t[1],
                            l = ["L", e, i];
                            break;
                        case "m":
                            t[1] += e,
                            t[2] += i;
                        case "M":
                            e = t[1],
                            i = t[2],
                            s = t[1],
                            r = t[2],
                            l = ["M", e, i];
                            break;
                        case "c":
                            t[1] += e,
                            t[2] += i,
                            t[3] += e,
                            t[4] += i,
                            t[5] += e,
                            t[6] += i;
                        case "C":
                            a = t[3],
                            h = t[4],
                            e = t[5],
                            i = t[6],
                            l = ["C", t[1], t[2], a, h, e, i];
                            break;
                        case "s":
                            t[1] += e,
                            t[2] += i,
                            t[3] += e,
                            t[4] += i;
                        case "S":
                            "C" === o ? (a = 2 * e - a,
                            h = 2 * i - h) : (a = e,
                            h = i),
                            e = t[3],
                            i = t[4],
                            l = ["C", a, h, t[1], t[2], e, i],
                            a = l[3],
                            h = l[4];
                            break;
                        case "q":
                            t[1] += e,
                            t[2] += i,
                            t[3] += e,
                            t[4] += i;
                        case "Q":
                            a = t[1],
                            h = t[2],
                            e = t[3],
                            i = t[4],
                            l = ["Q", a, h, e, i];
                            break;
                        case "t":
                            t[1] += e,
                            t[2] += i;
                        case "T":
                            "Q" === o ? (a = 2 * e - a,
                            h = 2 * i - h) : (a = e,
                            h = i),
                            e = t[1],
                            i = t[2],
                            l = ["Q", a, h, e, i];
                            break;
                        case "a":
                            t[6] += e,
                            t[7] += i;
                        case "A":
                            Vs(e, i, t).forEach((t=>n.push(t))),
                            e = t[6],
                            i = t[7];
                            break;
                        case "z":
                        case "Z":
                            e = s,
                            i = r,
                            l = ["Z"]
                        }
                        l ? (n.push(l),
                        o = l[0]) : o = ""
                    }
                    return n
                }
                )(Array.isArray(t) ? t : (t=>{
                    t = Hi(t);
                    const e = [];
                    for (const i of t.matchAll(new RegExp(Is,"gi"))) {
                        let t = i[0];
                        const s = [];
                        let r;
                        do {
                            if (r = new RegExp(Is,"i").exec(t),
                            !r)
                                break;
                            const e = r.filter((t=>t));
                            e.shift();
                            const i = e.map((t=>{
                                const e = Number.parseFloat(t);
                                return Number.isNaN(e) ? t : e
                            }
                            ));
                            if (s.push(i),
                            e.length <= 1)
                                break;
                            e.shift(),
                            t = t.replace(new RegExp("".concat(e.join(" ?"), " ?$")), "")
                        } while (r);
                        s.reverse().forEach(((t,i)=>{
                            const s = Ws[t[0]];
                            i > 0 && ("l" == s || "L" == s) && (t[0] = s),
                            e.push(t)
                        }
                        ))
                    }
                    return e
                }
                )(t)),
                this.setBoundingBox(e)
            }
            _findCenterFromElement() {
                const t = this._calcBoundsFromPath();
                return new G(t.left + t.width / 2,t.top + t.height / 2)
            }
            _renderPathCommands(t) {
                let e = 0
                  , i = 0
                  , s = 0
                  , r = 0
                  , n = 0
                  , o = 0;
                const a = -this.pathOffset.x
                  , h = -this.pathOffset.y;
                t.beginPath();
                for (const c of this.path)
                    switch (c[0]) {
                    case "L":
                        s = c[1],
                        r = c[2],
                        t.lineTo(s + a, r + h);
                        break;
                    case "M":
                        s = c[1],
                        r = c[2],
                        e = s,
                        i = r,
                        t.moveTo(s + a, r + h);
                        break;
                    case "C":
                        s = c[5],
                        r = c[6],
                        n = c[3],
                        o = c[4],
                        t.bezierCurveTo(c[1] + a, c[2] + h, n + a, o + h, s + a, r + h);
                        break;
                    case "Q":
                        t.quadraticCurveTo(c[1] + a, c[2] + h, c[3] + a, c[4] + h),
                        s = c[3],
                        r = c[4],
                        n = c[1],
                        o = c[2];
                        break;
                    case "Z":
                        s = e,
                        r = i,
                        t.closePath()
                    }
            }
            _render(t) {
                this._renderPathCommands(t),
                this._renderPaintInOrder(t)
            }
            toString() {
                return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>")
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e(e({}, super.toObject(t)), {}, {
                    path: Ne(this.path)
                })
            }
            toDatalessObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                const e = this.toObject(t);
                return this.sourcePath && (delete e.path,
                e.sourcePath = this.sourcePath),
                e
            }
            _toSVG() {
                const t = er(this.path, h.NUM_FRACTION_DIGITS);
                return ["<path ", "COMMON_PARTS", 'd="'.concat(t, '" stroke-linecap="round" />\n')]
            }
            _getOffsetTransform() {
                const t = h.NUM_FRACTION_DIGITS;
                return " translate(".concat(kt(-this.pathOffset.x, t), ", ").concat(kt(-this.pathOffset.y, t), ")")
            }
            toClipPathSVG(t) {
                const e = this._getOffsetTransform();
                return "\t" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
                    reviver: t,
                    additionalTransform: e
                })
            }
            toSVG(t) {
                const e = this._getOffsetTransform();
                return this._createBaseSVGMarkup(this._toSVG(), {
                    reviver: t,
                    additionalTransform: e
                })
            }
            complexity() {
                return this.path.length
            }
            setDimensions() {
                this.setBoundingBox()
            }
            setBoundingBox(t) {
                const {width: e, height: i, pathOffset: s} = this._calcDimensions();
                this.set({
                    width: e,
                    height: i,
                    pathOffset: s
                }),
                t && this.setPositionByOrigin(s, M, M)
            }
            _calcBoundsFromPath() {
                const t = [];
                let e = 0
                  , i = 0
                  , s = 0
                  , r = 0;
                for (const n of this.path)
                    switch (n[0]) {
                    case "L":
                        s = n[1],
                        r = n[2],
                        t.push(new G(e,i), new G(s,r));
                        break;
                    case "M":
                        s = n[1],
                        r = n[2],
                        e = s,
                        i = r;
                        break;
                    case "C":
                        t.push(...Hs(s, r, n[1], n[2], n[3], n[4], n[5], n[6])),
                        s = n[5],
                        r = n[6];
                        break;
                    case "Q":
                        t.push(...Hs(s, r, n[1], n[2], n[1], n[2], n[3], n[4])),
                        s = n[3],
                        r = n[4];
                        break;
                    case "Z":
                        s = e,
                        r = i
                    }
                return Jt(t)
            }
            _calcDimensions() {
                const t = this._calcBoundsFromPath();
                return e(e({}, t), {}, {
                    pathOffset: new G(t.left + t.width / 2,t.top + t.height / 2)
                })
            }
            static fromObject(t) {
                return this._fromObject(t, {
                    extraParam: "path"
                })
            }
            static async fromElement(t, i, s) {
                const n = ds(t, this.ATTRIBUTE_NAMES, s)
                  , {d: o} = n;
                return new this(o,e(e(e({}, r(n, jr)), i), {}, {
                    left: void 0,
                    top: void 0
                }))
            }
        }
        s(Pr, "type", "Path"),
        s(Pr, "cacheProperties", [...Ze, "path", "fillRule"]),
        s(Pr, "ATTRIBUTE_NAMES", [...Mi, "d"]),
        I.setClass(Pr),
        I.setSVGClass(Pr);
        class Ar extends Mr {
            constructor(t) {
                super(t),
                s(this, "decimate", .4),
                s(this, "drawStraightLine", !1),
                s(this, "straightLineKey", "shiftKey"),
                this._points = [],
                this._hasStraightLine = !1
            }
            needsFullRender() {
                return super.needsFullRender() || this._hasStraightLine
            }
            static drawSegment(t, e, i) {
                const s = e.midPointFrom(i);
                return t.quadraticCurveTo(e.x, e.y, s.x, s.y),
                s
            }
            onMouseDown(t, e) {
                let {e: i} = e;
                this.canvas._isMainEvent(i) && (this.drawStraightLine = !!this.straightLineKey && i[this.straightLineKey],
                this._prepareForDrawing(t),
                this._addPoint(t),
                this._render())
            }
            onMouseMove(t, e) {
                let {e: i} = e;
                if (this.canvas._isMainEvent(i) && (this.drawStraightLine = !!this.straightLineKey && i[this.straightLineKey],
                (!0 !== this.limitedToCanvasSize || !this._isOutSideCanvas(t)) && this._addPoint(t) && this._points.length > 1))
                    if (this.needsFullRender())
                        this.canvas.clearContext(this.canvas.contextTop),
                        this._render();
                    else {
                        const t = this._points
                          , e = t.length
                          , i = this.canvas.contextTop;
                        this._saveAndTransform(i),
                        this.oldEnd && (i.beginPath(),
                        i.moveTo(this.oldEnd.x, this.oldEnd.y)),
                        this.oldEnd = Ar.drawSegment(i, t[e - 2], t[e - 1]),
                        i.stroke(),
                        i.restore()
                    }
            }
            onMouseUp(t) {
                let {e} = t;
                return !this.canvas._isMainEvent(e) || (this.drawStraightLine = !1,
                this.oldEnd = void 0,
                this._finalizeAndAddPath(),
                !1)
            }
            _prepareForDrawing(t) {
                this._reset(),
                this._addPoint(t),
                this.canvas.contextTop.moveTo(t.x, t.y)
            }
            _addPoint(t) {
                return !(this._points.length > 1 && t.eq(this._points[this._points.length - 1]) || (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0,
                this._points.pop()),
                this._points.push(t),
                0))
            }
            _reset() {
                this._points = [],
                this._setBrushStyles(this.canvas.contextTop),
                this._setShadow(),
                this._hasStraightLine = !1
            }
            _render() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas.contextTop
                  , e = this._points[0]
                  , i = this._points[1];
                if (this._saveAndTransform(t),
                t.beginPath(),
                2 === this._points.length && e.x === i.x && e.y === i.y) {
                    const t = this.width / 1e3;
                    e.x -= t,
                    i.x += t
                }
                t.moveTo(e.x, e.y);
                for (let s = 1; s < this._points.length; s++)
                    Ar.drawSegment(t, e, i),
                    e = this._points[s],
                    i = this._points[s + 1];
                t.lineTo(e.x, e.y),
                t.stroke(),
                t.restore()
            }
            convertPointsToSVGPath(t) {
                return function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = new G(t[0])
                      , s = new G(t[1])
                      , r = 1
                      , n = 0;
                    const o = []
                      , a = t.length
                      , h = a > 2;
                    let c;
                    for (h && (r = t[2].x < s.x ? -1 : t[2].x === s.x ? 0 : 1,
                    n = t[2].y < s.y ? -1 : t[2].y === s.y ? 0 : 1),
                    o.push(["M", i.x - r * e, i.y - n * e]),
                    c = 1; c < a; c++) {
                        if (!i.eq(s)) {
                            const t = i.midPointFrom(s);
                            o.push(["Q", i.x, i.y, t.x, t.y])
                        }
                        i = t[c],
                        c + 1 < t.length && (s = t[c + 1])
                    }
                    return h && (r = i.x > t[c - 2].x ? 1 : i.x === t[c - 2].x ? 0 : -1,
                    n = i.y > t[c - 2].y ? 1 : i.y === t[c - 2].y ? 0 : -1),
                    o.push(["L", i.x + r * e, i.y + n * e]),
                    o
                }(t, this.width / 1e3)
            }
            createPath(t) {
                const e = new Pr(t,{
                    fill: null,
                    stroke: this.color,
                    strokeWidth: this.width,
                    strokeLineCap: this.strokeLineCap,
                    strokeMiterLimit: this.strokeMiterLimit,
                    strokeLineJoin: this.strokeLineJoin,
                    strokeDashArray: this.strokeDashArray
                });
                return this.shadow && (this.shadow.affectStroke = !0,
                e.shadow = new Ue(this.shadow)),
                e
            }
            decimatePoints(t, e) {
                if (t.length <= 2)
                    return t;
                let i, s = t[0];
                const r = this.canvas.getZoom()
                  , n = Math.pow(e / r, 2)
                  , o = t.length - 1
                  , a = [s];
                for (let e = 1; e < o - 1; e++)
                    i = Math.pow(s.x - t[e].x, 2) + Math.pow(s.y - t[e].y, 2),
                    i >= n && (s = t[e],
                    a.push(s));
                return a.push(t[o]),
                a
            }
            _finalizeAndAddPath() {
                this.canvas.contextTop.closePath(),
                this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
                const t = this.convertPointsToSVGPath(this._points);
                if (function(t) {
                    return "M 0 0 Q 0 0 0 0 L 0 0" === er(t)
                }(t))
                    return void this.canvas.requestRenderAll();
                const e = this.createPath(t);
                this.canvas.clearContext(this.canvas.contextTop),
                this.canvas.fire("before:path:created", {
                    path: e
                }),
                this.canvas.add(e),
                this.canvas.requestRenderAll(),
                e.setCoords(),
                this._resetShadow(),
                this.canvas.fire("path:created", {
                    path: e
                })
            }
        }
        const Lr = ["left", "top", "radius"]
          , Fr = ["radius", "startAngle", "endAngle"];
        class Br extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Br.ownDefaults)
            }
            _set(t, e) {
                return super._set(t, e),
                "radius" === t && this.setRadius(e),
                this
            }
            _render(t) {
                t.beginPath(),
                t.arc(0, 0, this.radius, tt(this.startAngle), tt(this.endAngle), !1),
                this._renderPaintInOrder(t)
            }
            getRadiusX() {
                return this.get("radius") * this.get("scaleX")
            }
            getRadiusY() {
                return this.get("radius") * this.get("scaleY")
            }
            setRadius(t) {
                this.radius = t,
                this.set({
                    width: 2 * t,
                    height: 2 * t
                })
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return super.toObject([...Fr, ...t])
            }
            _toSVG() {
                const t = (this.endAngle - this.startAngle) % 360;
                if (0 === t)
                    return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', "".concat(this.radius), '" />\n'];
                {
                    const {radius: e} = this
                      , i = tt(this.startAngle)
                      , s = tt(this.endAngle)
                      , r = V(i) * e
                      , n = z(i) * e
                      , o = V(s) * e
                      , a = z(s) * e
                      , h = t > 180 ? "1" : "0";
                    return ['<path d="M '.concat(r, " ").concat(n), " A ".concat(e, " ").concat(e), " 0 ", "".concat(h, " 1"), " ".concat(o, " ").concat(a), '" ', "COMMON_PARTS", " />\n"]
                }
            }
            static async fromElement(t, i, s) {
                const n = ds(t, this.ATTRIBUTE_NAMES, s)
                  , {left: o=0, top: a=0, radius: h=0} = n;
                return new this(e(e({}, r(n, Lr)), {}, {
                    radius: h,
                    left: o - h,
                    top: a - h
                }))
            }
            static fromObject(t) {
                return super._fromObject(t)
            }
        }
        s(Br, "type", "Circle"),
        s(Br, "cacheProperties", [...Ze, ...Fr]),
        s(Br, "ownDefaults", {
            radius: 0,
            startAngle: 0,
            endAngle: 360
        }),
        s(Br, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ...Mi]),
        I.setClass(Br),
        I.setSVGClass(Br);
        const Rr = ["x1", "y1", "x2", "y2"]
          , Ir = ["x1", "y1", "x2", "y2"]
          , Wr = ["x1", "x2", "y1", "y2"];
        class Xr extends Di {
            constructor() {
                let[t,i,s,r] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0]
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e(e({}, n), {}, {
                    x1: t,
                    y1: i,
                    x2: s,
                    y2: r
                })),
                this._setWidthHeight();
                const {left: o, top: a} = n;
                "number" == typeof o && this.set(E, o),
                "number" == typeof a && this.set(j, a)
            }
            _setWidthHeight() {
                const {x1: t, y1: e, x2: i, y2: s} = this;
                this.width = Math.abs(i - t),
                this.height = Math.abs(s - e);
                const {left: r, top: n, width: o, height: a} = Jt([{
                    x: t,
                    y: e
                }, {
                    x: i,
                    y: s
                }])
                  , h = new G(r + o / 2,n + a / 2);
                this.setPositionByOrigin(h, M, M)
            }
            _set(t, e) {
                return super._set(t, e),
                Wr.includes(t) && this._setWidthHeight(),
                this
            }
            _render(t) {
                t.beginPath();
                const e = this.calcLinePoints();
                t.moveTo(e.x1, e.y1),
                t.lineTo(e.x2, e.y2),
                t.lineWidth = this.strokeWidth;
                const i = t.strokeStyle;
                var s;
                jt(this.stroke) ? t.strokeStyle = this.stroke.toLive(t) : t.strokeStyle = null !== (s = this.stroke) && void 0 !== s ? s : t.fillStyle,
                this.stroke && this._renderStroke(t),
                t.strokeStyle = i
            }
            _findCenterFromElement() {
                return new G((this.x1 + this.x2) / 2,(this.y1 + this.y2) / 2)
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e(e({}, super.toObject(t)), this.calcLinePoints())
            }
            _getNonTransformedDimensions() {
                const t = super._getNonTransformedDimensions();
                return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth),
                0 === this.height && (t.x -= this.strokeWidth)),
                t
            }
            calcLinePoints() {
                const {x1: t, x2: e, y1: i, y2: s, width: r, height: n} = this
                  , o = t <= e ? -1 : 1
                  , a = i <= s ? -1 : 1;
                return {
                    x1: o * r / 2,
                    x2: o * -r / 2,
                    y1: a * n / 2,
                    y2: a * -n / 2
                }
            }
            _toSVG() {
                const {x1: t, x2: e, y1: i, y2: s} = this.calcLinePoints();
                return ["<line ", "COMMON_PARTS", 'x1="'.concat(t, '" y1="').concat(i, '" x2="').concat(e, '" y2="').concat(s, '" />\n')]
            }
            static async fromElement(t, e, i) {
                const s = ds(t, this.ATTRIBUTE_NAMES, i)
                  , {x1: n=0, y1: o=0, x2: a=0, y2: h=0} = s;
                return new this([n, o, a, h],r(s, Rr))
            }
            static fromObject(t) {
                let {x1: i, y1: s, x2: n, y2: o} = t
                  , a = r(t, Ir);
                return this._fromObject(e(e({}, a), {}, {
                    points: [i, s, n, o]
                }), {
                    extraParam: "points"
                })
            }
        }
        s(Xr, "type", "Line"),
        s(Xr, "cacheProperties", [...Ze, ...Wr]),
        s(Xr, "ATTRIBUTE_NAMES", Mi.concat(Wr)),
        I.setClass(Xr),
        I.setSVGClass(Xr);
        class Yr extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Yr.ownDefaults)
            }
            _render(t) {
                const e = this.width / 2
                  , i = this.height / 2;
                t.beginPath(),
                t.moveTo(-e, i),
                t.lineTo(0, -i),
                t.lineTo(e, i),
                t.closePath(),
                this._renderPaintInOrder(t)
            }
            _toSVG() {
                const t = this.width / 2
                  , e = this.height / 2;
                return ["<polygon ", "COMMON_PARTS", 'points="', "".concat(-t, " ").concat(e, ",0 ").concat(-e, ",").concat(t, " ").concat(e), '" />']
            }
        }
        s(Yr, "type", "Triangle"),
        s(Yr, "ownDefaults", {
            width: 100,
            height: 100
        }),
        I.setClass(Yr),
        I.setSVGClass(Yr);
        const Hr = ["rx", "ry"];
        class Vr extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Vr.ownDefaults)
            }
            _set(t, e) {
                switch (super._set(t, e),
                t) {
                case "rx":
                    this.rx = e,
                    this.set("width", 2 * e);
                    break;
                case "ry":
                    this.ry = e,
                    this.set("height", 2 * e)
                }
                return this
            }
            getRx() {
                return this.get("rx") * this.get("scaleX")
            }
            getRy() {
                return this.get("ry") * this.get("scaleY")
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return super.toObject([...Hr, ...t])
            }
            _toSVG() {
                return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, '" />\n')]
            }
            _render(t) {
                t.beginPath(),
                t.save(),
                t.transform(1, 0, 0, this.ry / this.rx, 0, 0),
                t.arc(0, 0, this.rx, 0, S, !1),
                t.restore(),
                this._renderPaintInOrder(t)
            }
            static async fromElement(t, e, i) {
                const s = ds(t, this.ATTRIBUTE_NAMES, i);
                return s.left = (s.left || 0) - s.rx,
                s.top = (s.top || 0) - s.ry,
                new this(s)
            }
        }
        s(Vr, "type", "Ellipse"),
        s(Vr, "cacheProperties", [...Ze, ...Hr]),
        s(Vr, "ownDefaults", {
            rx: 0,
            ry: 0
        }),
        s(Vr, "ATTRIBUTE_NAMES", [...Mi, "cx", "cy", "rx", "ry"]),
        I.setClass(Vr),
        I.setSVGClass(Vr);
        const zr = ["left", "top"]
          , Gr = {
            exactBoundingBox: !1
        };
        class Ur extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Ur.ownDefaults)
            }
            constructor() {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e({
                    points: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                }, t)),
                s(this, "strokeDiff", void 0);
                const {left: i, top: r} = t;
                this.initialized = !0,
                this.setBoundingBox(!0),
                "number" == typeof i && this.set(E, i),
                "number" == typeof r && this.set(j, r)
            }
            isOpen() {
                return !0
            }
            _projectStrokeOnPoints(t) {
                return function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const s = [];
                    if (0 === t.length)
                        return s;
                    const r = t.reduce(((t,e)=>(t[t.length - 1].eq(e) || t.push(new G(e)),
                    t)), [new G(t[0])]);
                    if (1 === r.length)
                        i = !0;
                    else if (!i) {
                        const t = r[0]
                          , e = ((e,i)=>{
                            for (let i = e.length - 1; i >= 0; i--)
                                if (!e[i].eq(t))
                                    return i;
                            return -1
                        }
                        )(r);
                        r.splice(e + 1)
                    }
                    return r.forEach(((t,r,n)=>{
                        let o, a;
                        0 === r ? (a = n[1],
                        o = i ? t : n[n.length - 1]) : r === n.length - 1 ? (o = n[r - 1],
                        a = i ? t : n[0]) : (o = n[r - 1],
                        a = n[r + 1]),
                        i && 1 === n.length ? s.push(...new bs(t,t,e).project()) : !i || 0 !== r && r !== n.length - 1 ? s.push(...new _s(t,o,a,e).project()) : s.push(...new bs(t,0 === r ? a : o,e).project())
                    }
                    )),
                    s
                }(this.points, t, this.isOpen())
            }
            _calcDimensions(t) {
                t = e({
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    skewX: this.skewX,
                    skewY: this.skewY,
                    strokeLineCap: this.strokeLineCap,
                    strokeLineJoin: this.strokeLineJoin,
                    strokeMiterLimit: this.strokeMiterLimit,
                    strokeUniform: this.strokeUniform,
                    strokeWidth: this.strokeWidth
                }, t || {});
                const i = this.exactBoundingBox ? this._projectStrokeOnPoints(t).map((t=>t.projectedPoint)) : this.points;
                if (0 === i.length)
                    return {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        pathOffset: new G,
                        strokeOffset: new G,
                        strokeDiff: new G
                    };
                const s = Jt(i)
                  , r = ft(e(e({}, t), {}, {
                    scaleX: 1,
                    scaleY: 1
                }))
                  , n = Jt(this.points.map((t=>st(t, r, !0))))
                  , o = s.left + s.width / 2
                  , a = s.top + s.height / 2
                  , h = o - a * Math.tan(tt(this.skewX))
                  , c = a - h * Math.tan(tt(this.skewY))
                  , l = new G(this.scaleX,this.scaleY);
                return e(e({}, s), {}, {
                    pathOffset: new G(h,c),
                    strokeOffset: new G(n.left,n.top).subtract(new G(s.left,s.top)).multiply(l),
                    strokeDiff: new G(s.width,s.height).subtract(new G(n.width,n.height)).multiply(l)
                })
            }
            _findCenterFromElement() {
                const t = Jt(this.points);
                return new G(t.left + t.width / 2,t.top + t.height / 2)
            }
            setDimensions() {
                this.setBoundingBox()
            }
            setBoundingBox(t) {
                const {left: e, top: i, width: s, height: r, pathOffset: n, strokeOffset: o, strokeDiff: a} = this._calcDimensions();
                this.set({
                    width: s,
                    height: r,
                    pathOffset: n,
                    strokeOffset: o,
                    strokeDiff: a
                }),
                t && this.setPositionByOrigin(new G(e + s / 2,i + r / 2), M, M)
            }
            _getNonTransformedDimensions() {
                return this.exactBoundingBox ? new G(this.width,this.height) : super._getNonTransformedDimensions()
            }
            _getTransformedDimensions() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.exactBoundingBox) {
                    let n;
                    if (Object.keys(t).some((t=>this.strokeUniform || this.constructor.layoutProperties.includes(t)))) {
                        var e, i;
                        const {width: s, height: r} = this._calcDimensions(t);
                        n = new G(null !== (e = t.width) && void 0 !== e ? e : s,null !== (i = t.height) && void 0 !== i ? i : r)
                    } else {
                        var s, r;
                        n = new G(null !== (s = t.width) && void 0 !== s ? s : this.width,null !== (r = t.height) && void 0 !== r ? r : this.height)
                    }
                    return n.multiply(new G(t.scaleX || this.scaleX,t.scaleY || this.scaleY))
                }
                return super._getTransformedDimensions(t)
            }
            _set(t, e) {
                const i = this.initialized && this[t] !== e
                  , s = super._set(t, e);
                return this.exactBoundingBox && i && (("scaleX" === t || "scaleY" === t) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t)) && this.setDimensions(),
                s
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e(e({}, super.toObject(t)), {}, {
                    points: Ne(this.points)
                })
            }
            _toSVG() {
                const t = []
                  , e = this.pathOffset.x
                  , i = this.pathOffset.y
                  , s = h.NUM_FRACTION_DIGITS;
                for (let r = 0, n = this.points.length; r < n; r++)
                    t.push(kt(this.points[r].x - e, s), ",", kt(this.points[r].y - i, s), " ");
                return ["<".concat(this.constructor.type.toLowerCase(), " "), "COMMON_PARTS", 'points="'.concat(t.join(""), '" />\n')]
            }
            _render(t) {
                const e = this.points.length
                  , i = this.pathOffset.x
                  , s = this.pathOffset.y;
                if (e && !isNaN(this.points[e - 1].y)) {
                    t.beginPath(),
                    t.moveTo(this.points[0].x - i, this.points[0].y - s);
                    for (let r = 0; r < e; r++) {
                        const e = this.points[r];
                        t.lineTo(e.x - i, e.y - s)
                    }
                    !this.isOpen() && t.closePath(),
                    this._renderPaintInOrder(t)
                }
            }
            complexity() {
                return this.points.length
            }
            static async fromElement(t, i, s) {
                return new this(function(t) {
                    if (!t)
                        return [];
                    const e = t.replace(/,/g, " ").trim().split(/\s+/)
                      , i = [];
                    for (let t = 0; t < e.length; t += 2)
                        i.push({
                            x: parseFloat(e[t]),
                            y: parseFloat(e[t + 1])
                        });
                    return i
                }(t.getAttribute("points")),e(e({}, r(ds(t, this.ATTRIBUTE_NAMES, s), zr)), i))
            }
            static fromObject(t) {
                return this._fromObject(t, {
                    extraParam: "points"
                })
            }
        }
        s(Ur, "ownDefaults", Gr),
        s(Ur, "type", "Polyline"),
        s(Ur, "layoutProperties", ["skewX", "skewY", "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]),
        s(Ur, "cacheProperties", [...Ze, "points"]),
        s(Ur, "ATTRIBUTE_NAMES", [...Mi]),
        I.setClass(Ur),
        I.setSVGClass(Ur);
        class Nr extends Ur {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Ur.ownDefaults)
            }
            isOpen() {
                return !1
            }
        }
        s(Nr, "ownDefaults", Gr),
        s(Nr, "type", "Polygon"),
        I.setClass(Nr),
        I.setSVGClass(Nr);
        const qr = ["fontSize", "fontWeight", "fontFamily", "fontStyle"]
          , Zr = ["underline", "overline", "linethrough"]
          , Kr = [...qr, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"]
          , Jr = [...Kr, ...Zr, "textBackgroundColor", "direction"]
          , $r = [...qr, ...Zr, "stroke", "strokeWidth", "fill", "deltaY", "textBackgroundColor"]
          , Qr = {
            _reNewline: F,
            _reSpacesAndTabs: /[ \t\r]/g,
            _reSpaceAndTab: /[ \t\r]/,
            _reWords: /\S+/g,
            fontSize: 40,
            fontWeight: "normal",
            fontFamily: "Times New Roman",
            underline: !1,
            overline: !1,
            linethrough: !1,
            textAlign: E,
            fontStyle: "normal",
            lineHeight: 1.16,
            superscript: {
                size: .6,
                baseline: -.35
            },
            subscript: {
                size: .6,
                baseline: .11
            },
            textBackgroundColor: "",
            stroke: null,
            shadow: null,
            path: void 0,
            pathStartOffset: 0,
            pathSide: E,
            pathAlign: "baseline",
            _fontSizeFraction: .222,
            offsets: {
                underline: .1,
                linethrough: -.315,
                overline: -.88
            },
            _fontSizeMult: 1.13,
            charSpacing: 0,
            deltaY: 0,
            direction: "ltr",
            CACHE_FONT_SIZE: 400,
            MIN_TEXT_WIDTH: 2
        }
          , tn = "justify"
          , en = "justify-left"
          , sn = "justify-right"
          , rn = "justify-center";
        class nn extends Di {
            isEmptyStyles(t) {
                if (!this.styles)
                    return !0;
                if (void 0 !== t && !this.styles[t])
                    return !0;
                const e = void 0 === t ? this.styles : {
                    line: this.styles[t]
                };
                for (const t in e)
                    for (const i in e[t])
                        for (const s in e[t][i])
                            return !1;
                return !0
            }
            styleHas(t, e) {
                if (!this.styles)
                    return !1;
                if (void 0 !== e && !this.styles[e])
                    return !1;
                const i = void 0 === e ? this.styles : {
                    0: this.styles[e]
                };
                for (const e in i)
                    for (const s in i[e])
                        if (void 0 !== i[e][s][t])
                            return !0;
                return !1
            }
            cleanStyle(t) {
                if (!this.styles)
                    return !1;
                const e = this.styles;
                let i, s, r = 0, n = !0, o = 0;
                for (const o in e) {
                    i = 0;
                    for (const a in e[o]) {
                        const h = e[o][a] || {};
                        r++,
                        void 0 !== h[t] ? (s ? h[t] !== s && (n = !1) : s = h[t],
                        h[t] === this[t] && delete h[t]) : n = !1,
                        0 !== Object.keys(h).length ? i++ : delete e[o][a]
                    }
                    0 === i && delete e[o]
                }
                for (let t = 0; t < this._textLines.length; t++)
                    o += this._textLines[t].length;
                n && r === o && (this[t] = s,
                this.removeStyle(t))
            }
            removeStyle(t) {
                if (!this.styles)
                    return;
                const e = this.styles;
                let i, s, r;
                for (s in e) {
                    for (r in i = e[s],
                    i)
                        delete i[r][t],
                        0 === Object.keys(i[r]).length && delete i[r];
                    0 === Object.keys(i).length && delete e[s]
                }
            }
            _extendStyles(t, e) {
                const {lineIndex: i, charIndex: s} = this.get2DCursorLocation(t);
                this._getLineStyle(i) || this._setLineStyle(i),
                Object.keys(this._getStyleDeclaration(i, s)).length || this._setStyleDeclaration(i, s, {}),
                Object.assign(this._getStyleDeclaration(i, s), e)
            }
            getSelectionStyles(t, e, i) {
                const s = [];
                for (let r = t; r < (e || t); r++)
                    s.push(this.getStyleAtPosition(r, i));
                return s
            }
            getStyleAtPosition(t, e) {
                const {lineIndex: i, charIndex: s} = this.get2DCursorLocation(t);
                return e ? this.getCompleteStyleDeclaration(i, s) : this._getStyleDeclaration(i, s)
            }
            setSelectionStyles(t, e, i) {
                for (let s = e; s < (i || e); s++)
                    this._extendStyles(s, t);
                this._forceClearCache = !0
            }
            _getStyleDeclaration(t, e) {
                var i;
                const s = this.styles && this.styles[t];
                return s && null !== (i = s[e]) && void 0 !== i ? i : {}
            }
            getCompleteStyleDeclaration(t, i) {
                return e(e({}, yt(this, this.constructor._styleProperties)), this._getStyleDeclaration(t, i))
            }
            _setStyleDeclaration(t, e, i) {
                this.styles[t][e] = i
            }
            _deleteStyleDeclaration(t, e) {
                delete this.styles[t][e]
            }
            _getLineStyle(t) {
                return !!this.styles[t]
            }
            _setLineStyle(t) {
                this.styles[t] = {}
            }
            _deleteLineStyle(t) {
                delete this.styles[t]
            }
        }
        s(nn, "_styleProperties", $r);
        const on = /  +/g
          , an = /"/g;
        function hn(t, e, i, s, r) {
            return "\t\t".concat(function(t, e) {
                let {left: i, top: s, width: r, height: n} = e
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.NUM_FRACTION_DIGITS;
                const a = Et("fill", t, !1)
                  , [c,l,d,u] = [i, s, r, n].map((t=>kt(t, o)));
                return "<rect ".concat(a, ' x="').concat(c, '" y="').concat(l, '" width="').concat(d, '" height="').concat(u, '"></rect>')
            }(t, {
                left: e,
                top: i,
                width: s,
                height: r
            }), "\n")
        }
        const cn = ["textAnchor", "textDecoration", "dx", "dy", "top", "left", "fontSize", "strokeWidth"];
        let ln;
        class dn extends nn {
            static getDefaults() {
                return e(e({}, super.getDefaults()), dn.ownDefaults)
            }
            constructor(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e(e({}, i), {}, {
                    text: t,
                    styles: (null == i ? void 0 : i.styles) || {}
                })),
                s(this, "__charBounds", []),
                this.initialized = !0,
                this.path && this.setPathInfo(),
                this.initDimensions(),
                this.setCoords()
            }
            setPathInfo() {
                const t = this.path;
                t && (t.segmentsInfo = Qs(t.path))
            }
            _splitText() {
                const t = this._splitTextIntoLines(this.text);
                return this.textLines = t.lines,
                this._textLines = t.graphemeLines,
                this._unwrappedTextLines = t._unwrappedLines,
                this._text = t.graphemeText,
                t
            }
            initDimensions() {
                this._splitText(),
                this._clearCache(),
                this.dirty = !0,
                this.path ? (this.width = this.path.width,
                this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH,
                this.height = this.calcTextHeight()),
                this.textAlign.includes(tn) && this.enlargeSpaces()
            }
            enlargeSpaces() {
                let t, e, i, s, r, n, o;
                for (let a = 0, h = this._textLines.length; a < h; a++)
                    if ((this.textAlign === tn || a !== h - 1 && !this.isEndOfWrapping(a)) && (s = 0,
                    r = this._textLines[a],
                    e = this.getLineWidth(a),
                    e < this.width && (o = this.textLines[a].match(this._reSpacesAndTabs)))) {
                        i = o.length,
                        t = (this.width - e) / i;
                        for (let e = 0; e <= r.length; e++)
                            n = this.__charBounds[a][e],
                            this._reSpaceAndTab.test(r[e]) ? (n.width += t,
                            n.kernedWidth += t,
                            n.left += s,
                            s += t) : n.left += s
                    }
            }
            isEndOfWrapping(t) {
                return t === this._textLines.length - 1
            }
            missingNewlineOffset(t) {
                return 1
            }
            get2DCursorLocation(t, e) {
                const i = e ? this._unwrappedTextLines : this._textLines;
                let s;
                for (s = 0; s < i.length; s++) {
                    if (t <= i[s].length)
                        return {
                            lineIndex: s,
                            charIndex: t
                        };
                    t -= i[s].length + this.missingNewlineOffset(s, e)
                }
                return {
                    lineIndex: s - 1,
                    charIndex: i[s - 1].length < t ? i[s - 1].length : t
                }
            }
            toString() {
                return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>')
            }
            _getCacheCanvasDimensions() {
                const t = super._getCacheCanvasDimensions()
                  , e = this.fontSize;
                return t.width += e * t.zoomX,
                t.height += e * t.zoomY,
                t
            }
            _render(t) {
                const e = this.path;
                e && !e.isNotVisible() && e._render(t),
                this._setTextStyles(t),
                this._renderTextLinesBackground(t),
                this._renderTextDecoration(t, "underline"),
                this._renderText(t),
                this._renderTextDecoration(t, "overline"),
                this._renderTextDecoration(t, "linethrough")
            }
            _renderText(t) {
                "stroke" === this.paintFirst ? (this._renderTextStroke(t),
                this._renderTextFill(t)) : (this._renderTextFill(t),
                this._renderTextStroke(t))
            }
            _setTextStyles(t, e, i) {
                if (t.textBaseline = "alphabetic",
                this.path)
                    switch (this.pathAlign) {
                    case M:
                        t.textBaseline = "middle";
                        break;
                    case "ascender":
                        t.textBaseline = j;
                        break;
                    case "descender":
                        t.textBaseline = P
                    }
                t.font = this._getFontDeclaration(e, i)
            }
            calcTextWidth() {
                let t = this.getLineWidth(0);
                for (let e = 1, i = this._textLines.length; e < i; e++) {
                    const i = this.getLineWidth(e);
                    i > t && (t = i)
                }
                return t
            }
            _renderTextLine(t, e, i, s, r, n) {
                this._renderChars(t, e, i, s, r, n)
            }
            _renderTextLinesBackground(t) {
                if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))
                    return;
                const e = t.fillStyle
                  , i = this._getLeftOffset();
                let s = this._getTopOffset();
                for (let e = 0, r = this._textLines.length; e < r; e++) {
                    const r = this.getHeightOfLine(e);
                    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e)) {
                        s += r;
                        continue
                    }
                    const n = this._textLines[e].length
                      , o = this._getLineLeftOffset(e);
                    let a, h, c = 0, l = 0, d = this.getValueOfPropertyAt(e, 0, "textBackgroundColor");
                    for (let u = 0; u < n; u++) {
                        const n = this.__charBounds[e][u];
                        h = this.getValueOfPropertyAt(e, u, "textBackgroundColor"),
                        this.path ? (t.save(),
                        t.translate(n.renderLeft, n.renderTop),
                        t.rotate(n.angle),
                        t.fillStyle = h,
                        h && t.fillRect(-n.width / 2, -r / this.lineHeight * (1 - this._fontSizeFraction), n.width, r / this.lineHeight),
                        t.restore()) : h !== d ? (a = i + o + l,
                        "rtl" === this.direction && (a = this.width - a - c),
                        t.fillStyle = d,
                        d && t.fillRect(a, s, c, r / this.lineHeight),
                        l = n.left,
                        c = n.width,
                        d = h) : c += n.kernedWidth
                    }
                    h && !this.path && (a = i + o + l,
                    "rtl" === this.direction && (a = this.width - a - c),
                    t.fillStyle = h,
                    t.fillRect(a, s, c, r / this.lineHeight)),
                    s += r
                }
                t.fillStyle = e,
                this._removeShadow(t)
            }
            _measureChar(t, e, i, s) {
                const r = _.getFontCache(e)
                  , n = this._getFontDeclaration(e)
                  , o = i + t
                  , a = i && n === this._getFontDeclaration(s)
                  , h = e.fontSize / this.CACHE_FONT_SIZE;
                let c, l, d, u;
                if (i && void 0 !== r[i] && (d = r[i]),
                void 0 !== r[t] && (u = c = r[t]),
                a && void 0 !== r[o] && (l = r[o],
                u = l - d),
                void 0 === c || void 0 === d || void 0 === l) {
                    const s = (ln || (ln = $().getContext("2d")),
                    ln);
                    this._setTextStyles(s, e, !0),
                    void 0 === c && (u = c = s.measureText(t).width,
                    r[t] = c),
                    void 0 === d && a && i && (d = s.measureText(i).width,
                    r[i] = d),
                    a && void 0 === l && (l = s.measureText(o).width,
                    r[o] = l,
                    u = l - d)
                }
                return {
                    width: c * h,
                    kernedWidth: u * h
                }
            }
            getHeightOfChar(t, e) {
                return this.getValueOfPropertyAt(t, e, "fontSize")
            }
            measureLine(t) {
                const e = this._measureLine(t);
                return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()),
                e.width < 0 && (e.width = 0),
                e
            }
            _measureLine(t) {
                let e, i, s = 0;
                const r = this.pathSide === A
                  , n = this.path
                  , o = this._textLines[t]
                  , a = o.length
                  , h = new Array(a);
                this.__charBounds[t] = h;
                for (let r = 0; r < a; r++) {
                    const n = o[r];
                    i = this._getGraphemeBox(n, t, r, e),
                    h[r] = i,
                    s += i.kernedWidth,
                    e = n
                }
                if (h[a] = {
                    left: i ? i.left + i.width : 0,
                    width: 0,
                    kernedWidth: 0,
                    height: this.fontSize,
                    deltaY: 0
                },
                n && n.segmentsInfo) {
                    let t = 0;
                    const e = n.segmentsInfo[n.segmentsInfo.length - 1].length;
                    switch (this.textAlign) {
                    case E:
                        t = r ? e - s : 0;
                        break;
                    case M:
                        t = (e - s) / 2;
                        break;
                    case A:
                        t = r ? 0 : e - s
                    }
                    t += this.pathStartOffset * (r ? -1 : 1);
                    for (let s = r ? a - 1 : 0; r ? s >= 0 : s < a; r ? s-- : s++)
                        i = h[s],
                        t > e ? t %= e : t < 0 && (t += e),
                        this._setGraphemeOnPath(t, i),
                        t += i.kernedWidth
                }
                return {
                    width: s,
                    numOfSpaces: 0
                }
            }
            _setGraphemeOnPath(t, e) {
                const i = t + e.kernedWidth / 2
                  , s = this.path
                  , r = tr(s.path, i, s.segmentsInfo);
                e.renderLeft = r.x - s.pathOffset.x,
                e.renderTop = r.y - s.pathOffset.y,
                e.angle = r.angle + (this.pathSide === A ? Math.PI : 0)
            }
            _getGraphemeBox(t, e, i, s, r) {
                const n = this.getCompleteStyleDeclaration(e, i)
                  , o = s ? this.getCompleteStyleDeclaration(e, i - 1) : {}
                  , a = this._measureChar(t, n, s, o);
                let h, c = a.kernedWidth, l = a.width;
                0 !== this.charSpacing && (h = this._getWidthOfCharSpacing(),
                l += h,
                c += h);
                const d = {
                    width: l,
                    left: 0,
                    height: n.fontSize,
                    kernedWidth: c,
                    deltaY: n.deltaY
                };
                if (i > 0 && !r) {
                    const t = this.__charBounds[e][i - 1];
                    d.left = t.left + t.width + a.kernedWidth - a.width
                }
                return d
            }
            getHeightOfLine(t) {
                if (this.__lineHeights[t])
                    return this.__lineHeights[t];
                let e = this.getHeightOfChar(t, 0);
                for (let i = 1, s = this._textLines[t].length; i < s; i++)
                    e = Math.max(this.getHeightOfChar(t, i), e);
                return this.__lineHeights[t] = e * this.lineHeight * this._fontSizeMult
            }
            calcTextHeight() {
                let t, e = 0;
                for (let i = 0, s = this._textLines.length; i < s; i++)
                    t = this.getHeightOfLine(i),
                    e += i === s - 1 ? t / this.lineHeight : t;
                return e
            }
            _getLeftOffset() {
                return "ltr" === this.direction ? -this.width / 2 : this.width / 2
            }
            _getTopOffset() {
                return -this.height / 2
            }
            _renderTextCommon(t, e) {
                t.save();
                let i = 0;
                const s = this._getLeftOffset()
                  , r = this._getTopOffset();
                for (let n = 0, o = this._textLines.length; n < o; n++) {
                    const o = this.getHeightOfLine(n)
                      , a = o / this.lineHeight
                      , h = this._getLineLeftOffset(n);
                    this._renderTextLine(e, t, this._textLines[n], s + h, r + i + a, n),
                    i += o
                }
                t.restore()
            }
            _renderTextFill(t) {
                (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText")
            }
            _renderTextStroke(t) {
                (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
                t.save(),
                this._setLineDash(t, this.strokeDashArray),
                t.beginPath(),
                this._renderTextCommon(t, "strokeText"),
                t.closePath(),
                t.restore())
            }
            _renderChars(t, e, i, s, r, n) {
                const o = this.getHeightOfLine(n)
                  , a = this.textAlign.includes(tn)
                  , h = this.path
                  , c = !a && 0 === this.charSpacing && this.isEmptyStyles(n) && !h
                  , l = "ltr" === this.direction
                  , d = "ltr" === this.direction ? 1 : -1
                  , u = e.direction;
                let g, f, p, m, v, y = "", x = 0;
                if (e.save(),
                u !== this.direction && (e.canvas.setAttribute("dir", l ? "ltr" : "rtl"),
                e.direction = l ? "ltr" : "rtl",
                e.textAlign = l ? E : A),
                r -= o * this._fontSizeFraction / this.lineHeight,
                c)
                    return this._renderChar(t, e, n, 0, i.join(""), s, r),
                    void e.restore();
                for (let o = 0, c = i.length - 1; o <= c; o++)
                    m = o === c || this.charSpacing || h,
                    y += i[o],
                    p = this.__charBounds[n][o],
                    0 === x ? (s += d * (p.kernedWidth - p.width),
                    x += p.width) : x += p.kernedWidth,
                    a && !m && this._reSpaceAndTab.test(i[o]) && (m = !0),
                    m || (g = g || this.getCompleteStyleDeclaration(n, o),
                    f = this.getCompleteStyleDeclaration(n, o + 1),
                    m = ws(g, f, !1)),
                    m && (h ? (e.save(),
                    e.translate(p.renderLeft, p.renderTop),
                    e.rotate(p.angle),
                    this._renderChar(t, e, n, o, y, -x / 2, 0),
                    e.restore()) : (v = s,
                    this._renderChar(t, e, n, o, y, v, r)),
                    y = "",
                    g = f,
                    s += d * x,
                    x = 0);
                e.restore()
            }
            _applyPatternGradientTransformText(t) {
                const e = $()
                  , i = this.width + this.strokeWidth
                  , s = this.height + this.strokeWidth
                  , r = e.getContext("2d");
                return e.width = i,
                e.height = s,
                r.beginPath(),
                r.moveTo(0, 0),
                r.lineTo(i, 0),
                r.lineTo(i, s),
                r.lineTo(0, s),
                r.closePath(),
                r.translate(i / 2, s / 2),
                r.fillStyle = t.toLive(r),
                this._applyPatternGradientTransform(r, t),
                r.fill(),
                r.createPattern(e, "no-repeat")
            }
            handleFiller(t, e, i) {
                let s, r;
                return jt(i) ? "percentage" === i.gradientUnits || i.gradientTransform || i.patternTransform ? (s = -this.width / 2,
                r = -this.height / 2,
                t.translate(s, r),
                t[e] = this._applyPatternGradientTransformText(i),
                {
                    offsetX: s,
                    offsetY: r
                }) : (t[e] = i.toLive(t),
                this._applyPatternGradientTransform(t, i)) : (t[e] = i,
                {
                    offsetX: 0,
                    offsetY: 0
                })
            }
            _setStrokeStyles(t, e) {
                let {stroke: i, strokeWidth: s} = e;
                return t.lineWidth = s,
                t.lineCap = this.strokeLineCap,
                t.lineDashOffset = this.strokeDashOffset,
                t.lineJoin = this.strokeLineJoin,
                t.miterLimit = this.strokeMiterLimit,
                this.handleFiller(t, "strokeStyle", i)
            }
            _setFillStyles(t, e) {
                let {fill: i} = e;
                return this.handleFiller(t, "fillStyle", i)
            }
            _renderChar(t, e, i, s, r, n, o) {
                const a = this._getStyleDeclaration(i, s)
                  , h = this.getCompleteStyleDeclaration(i, s)
                  , c = "fillText" === t && h.fill
                  , l = "strokeText" === t && h.stroke && h.strokeWidth;
                if (l || c) {
                    if (e.save(),
                    e.font = this._getFontDeclaration(h),
                    a.textBackgroundColor && this._removeShadow(e),
                    a.deltaY && (o += a.deltaY),
                    c) {
                        const t = this._setFillStyles(e, h);
                        e.fillText(r, n - t.offsetX, o - t.offsetY)
                    }
                    if (l) {
                        const t = this._setStrokeStyles(e, h);
                        e.strokeText(r, n - t.offsetX, o - t.offsetY)
                    }
                    e.restore()
                }
            }
            setSuperscript(t, e) {
                this._setScript(t, e, this.superscript)
            }
            setSubscript(t, e) {
                this._setScript(t, e, this.subscript)
            }
            _setScript(t, e, i) {
                const s = this.get2DCursorLocation(t, !0)
                  , r = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "fontSize")
                  , n = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "deltaY")
                  , o = {
                    fontSize: r * i.size,
                    deltaY: n + r * i.baseline
                };
                this.setSelectionStyles(o, t, e)
            }
            _getLineLeftOffset(t) {
                const e = this.getLineWidth(t)
                  , i = this.width - e
                  , s = this.textAlign
                  , r = this.direction
                  , n = this.isEndOfWrapping(t);
                let o = 0;
                return s === tn || s === rn && !n || s === sn && !n || s === en && !n ? 0 : (s === M && (o = i / 2),
                s === A && (o = i),
                s === rn && (o = i / 2),
                s === sn && (o = i),
                "rtl" === r && (s === A || s === tn || s === sn ? o = 0 : s === E || s === en ? o = -i : s !== M && s !== rn || (o = -i / 2)),
                o)
            }
            _clearCache() {
                this._forceClearCache = !1,
                this.__lineWidths = [],
                this.__lineHeights = [],
                this.__charBounds = []
            }
            getLineWidth(t) {
                if (void 0 !== this.__lineWidths[t])
                    return this.__lineWidths[t];
                const {width: e} = this.measureLine(t);
                return this.__lineWidths[t] = e,
                e
            }
            _getWidthOfCharSpacing() {
                return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0
            }
            getValueOfPropertyAt(t, e, i) {
                var s;
                return null !== (s = this._getStyleDeclaration(t, e)[i]) && void 0 !== s ? s : this[i]
            }
            _renderTextDecoration(t, e) {
                if (!this[e] && !this.styleHas(e))
                    return;
                let i = this._getTopOffset();
                const s = this._getLeftOffset()
                  , r = this.path
                  , n = this._getWidthOfCharSpacing()
                  , o = this.offsets[e];
                for (let a = 0, h = this._textLines.length; a < h; a++) {
                    const h = this.getHeightOfLine(a);
                    if (!this[e] && !this.styleHas(e, a)) {
                        i += h;
                        continue
                    }
                    const c = this._textLines[a]
                      , l = h / this.lineHeight
                      , d = this._getLineLeftOffset(a);
                    let u, g, f = 0, p = 0, m = this.getValueOfPropertyAt(a, 0, e), v = this.getValueOfPropertyAt(a, 0, "fill");
                    const y = i + l * (1 - this._fontSizeFraction);
                    let x = this.getHeightOfChar(a, 0)
                      , _ = this.getValueOfPropertyAt(a, 0, "deltaY");
                    for (let i = 0, n = c.length; i < n; i++) {
                        const n = this.__charBounds[a][i];
                        u = this.getValueOfPropertyAt(a, i, e),
                        g = this.getValueOfPropertyAt(a, i, "fill");
                        const h = this.getHeightOfChar(a, i)
                          , c = this.getValueOfPropertyAt(a, i, "deltaY");
                        if (r && u && g)
                            t.save(),
                            t.fillStyle = v,
                            t.translate(n.renderLeft, n.renderTop),
                            t.rotate(n.angle),
                            t.fillRect(-n.kernedWidth / 2, o * h + c, n.kernedWidth, this.fontSize / 15),
                            t.restore();
                        else if ((u !== m || g !== v || h !== x || c !== _) && p > 0) {
                            let e = s + d + f;
                            "rtl" === this.direction && (e = this.width - e - p),
                            m && v && (t.fillStyle = v,
                            t.fillRect(e, y + o * x + _, p, this.fontSize / 15)),
                            f = n.left,
                            p = n.width,
                            m = u,
                            v = g,
                            x = h,
                            _ = c
                        } else
                            p += n.kernedWidth
                    }
                    let b = s + d + f;
                    "rtl" === this.direction && (b = this.width - b - p),
                    t.fillStyle = g,
                    u && g && t.fillRect(b, y + o * x + _, p - n, this.fontSize / 15),
                    i += h
                }
                this._removeShadow(t)
            }
            _getFontDeclaration() {
                let {fontFamily: t=this.fontFamily, fontStyle: e=this.fontStyle, fontWeight: i=this.fontWeight, fontSize: s=this.fontSize} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , r = arguments.length > 1 ? arguments[1] : void 0;
                const n = t.includes("'") || t.includes('"') || t.includes(",") || dn.genericFonts.includes(t.toLowerCase()) ? t : '"'.concat(t, '"');
                return [e, i, "".concat(r ? this.CACHE_FONT_SIZE : s, "px"), n].join(" ")
            }
            render(t) {
                this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(),
                super.render(t)))
            }
            graphemeSplit(t) {
                return (t=>{
                    const e = [];
                    for (let i, s = 0; s < t.length; s++)
                        !1 !== (i = Ts(t, s)) && e.push(i);
                    return e
                }
                )(t)
            }
            _splitTextIntoLines(t) {
                const e = t.split(this._reNewline)
                  , i = new Array(e.length)
                  , s = ["\n"];
                let r = [];
                for (let t = 0; t < e.length; t++)
                    i[t] = this.graphemeSplit(e[t]),
                    r = r.concat(i[t], s);
                return r.pop(),
                {
                    _unwrappedLines: i,
                    lines: e,
                    graphemeText: r,
                    graphemeLines: i
                }
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e(e({}, super.toObject([...Jr, ...t])), {}, {
                    styles: Cs(this.styles, this.text)
                }, this.path ? {
                    path: this.path.toObject()
                } : {})
            }
            set(t, e) {
                const {textLayoutProperties: i} = this.constructor;
                super.set(t, e);
                let s = !1
                  , r = !1;
                if ("object" == typeof t)
                    for (const e in t)
                        "path" === e && this.setPathInfo(),
                        s = s || i.includes(e),
                        r = r || "path" === e;
                else
                    s = i.includes(t),
                    r = "path" === t;
                return r && this.setPathInfo(),
                s && this.initialized && (this.initDimensions(),
                this.setCoords()),
                this
            }
            complexity() {
                return 1
            }
            static async fromElement(t, i, s) {
                const n = ds(t, dn.ATTRIBUTE_NAMES, s)
                  , o = e(e({}, i), n)
                  , {textAnchor: a=E, textDecoration: h="", dx: c=0, dy: l=0, top: d=0, left: u=0, fontSize: g=k, strokeWidth: f=1} = o
                  , p = r(o, cn)
                  , m = new this((t.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "),e({
                    left: u + c,
                    top: d + l,
                    underline: h.includes("underline"),
                    overline: h.includes("overline"),
                    linethrough: h.includes("line-through"),
                    strokeWidth: 0,
                    fontSize: g
                }, p))
                  , v = m.getScaledHeight() / m.height
                  , y = ((m.height + m.strokeWidth) * m.lineHeight - m.height) * v
                  , x = m.getScaledHeight() + y;
                let _ = 0;
                return a === M && (_ = m.getScaledWidth() / 2),
                a === A && (_ = m.getScaledWidth()),
                m.set({
                    left: m.left - _,
                    top: m.top - (x - m.fontSize * (.07 + m._fontSizeFraction)) / m.lineHeight,
                    strokeWidth: f
                }),
                m
            }
            static fromObject(t) {
                return this._fromObject(e(e({}, t), {}, {
                    styles: Ss(t.styles || {}, t.text)
                }), {
                    extraParam: "text"
                })
            }
        }
        s(dn, "textLayoutProperties", Kr),
        s(dn, "cacheProperties", [...Ze, ...Jr]),
        s(dn, "ownDefaults", Qr),
        s(dn, "type", "Text"),
        s(dn, "genericFonts", ["sans-serif", "serif", "cursive", "fantasy", "monospace"]),
        s(dn, "ATTRIBUTE_NAMES", Mi.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")),
        ki(dn, [class extends me {
            _toSVG() {
                const t = this._getSVGLeftTopOffsets()
                  , e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                return this._wrapSVGTextAndBg(e)
            }
            toSVG(t) {
                return this._createBaseSVGMarkup(this._toSVG(), {
                    reviver: t,
                    noStyle: !0,
                    withShadow: !0
                })
            }
            _getSVGLeftTopOffsets() {
                return {
                    textLeft: -this.width / 2,
                    textTop: -this.height / 2,
                    lineTop: this.getHeightOfLine(0)
                }
            }
            _wrapSVGTextAndBg(t) {
                let {textBgRects: e, textSpans: i} = t;
                const s = this.getSvgTextDecoration(this);
                return [e.join(""), '\t\t<text xml:space="preserve" ', this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(an, "'"), '" ') : "", this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : "", this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "", this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "", s ? 'text-decoration="'.concat(s, '" ') : "", "rtl" === this.direction ? 'direction="'.concat(this.direction, '" ') : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", i.join(""), "</text>\n"]
            }
            _getSVGTextAndBg(t, e) {
                const i = []
                  , s = [];
                let r, n = t;
                this.backgroundColor && s.push(...hn(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
                for (let t = 0, o = this._textLines.length; t < o; t++)
                    r = this._getLineLeftOffset(t),
                    "rtl" === this.direction && (r += this.width),
                    (this.textBackgroundColor || this.styleHas("textBackgroundColor", t)) && this._setSVGTextLineBg(s, t, e + r, n),
                    this._setSVGTextLineText(i, t, e + r, n),
                    n += this.getHeightOfLine(t);
                return {
                    textSpans: i,
                    textBgRects: s
                }
            }
            _createTextCharSpan(t, e, i, s) {
                const r = this.getSvgSpanStyles(e, t !== t.trim() || !!t.match(on))
                  , n = r ? 'style="'.concat(r, '"') : ""
                  , o = e.deltaY
                  , a = o ? ' dy="'.concat(kt(o, h.NUM_FRACTION_DIGITS), '" ') : "";
                return '<tspan x="'.concat(kt(i, h.NUM_FRACTION_DIGITS), '" y="').concat(kt(s, h.NUM_FRACTION_DIGITS), '" ').concat(a).concat(n, ">").concat(t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "</tspan>")
            }
            _setSVGTextLineText(t, e, i, s) {
                const r = this.getHeightOfLine(e)
                  , n = this.textAlign.includes(tn)
                  , o = this._textLines[e];
                let a, h, c, l, d, u = "", g = 0;
                s += r * (1 - this._fontSizeFraction) / this.lineHeight;
                for (let r = 0, f = o.length - 1; r <= f; r++)
                    d = r === f || this.charSpacing,
                    u += o[r],
                    c = this.__charBounds[e][r],
                    0 === g ? (i += c.kernedWidth - c.width,
                    g += c.width) : g += c.kernedWidth,
                    n && !d && this._reSpaceAndTab.test(o[r]) && (d = !0),
                    d || (a = a || this.getCompleteStyleDeclaration(e, r),
                    h = this.getCompleteStyleDeclaration(e, r + 1),
                    d = ws(a, h, !0)),
                    d && (l = this._getStyleDeclaration(e, r),
                    t.push(this._createTextCharSpan(u, l, i, s)),
                    u = "",
                    a = h,
                    "rtl" === this.direction ? i -= g : i += g,
                    g = 0)
            }
            _setSVGTextLineBg(t, e, i, s) {
                const r = this._textLines[e]
                  , n = this.getHeightOfLine(e) / this.lineHeight;
                let o, a = 0, h = 0, c = this.getValueOfPropertyAt(e, 0, "textBackgroundColor");
                for (let l = 0; l < r.length; l++) {
                    const {left: r, width: d, kernedWidth: u} = this.__charBounds[e][l];
                    o = this.getValueOfPropertyAt(e, l, "textBackgroundColor"),
                    o !== c ? (c && t.push(...hn(c, i + h, s, a, n)),
                    h = r,
                    a = d,
                    c = o) : a += u
                }
                o && t.push(...hn(c, i + h, s, a, n))
            }
            _getSVGLineTopOffset(t) {
                let e, i = 0;
                for (e = 0; e < t; e++)
                    i += this.getHeightOfLine(e);
                const s = this.getHeightOfLine(e);
                return {
                    lineTop: i,
                    offset: (this._fontSizeMult - this._fontSizeFraction) * s / (this.lineHeight * this._fontSizeMult)
                }
            }
            getSvgStyles(t) {
                return "".concat(super.getSvgStyles(t), " white-space: pre;")
            }
            getSvgSpanStyles(t, e) {
                const {fontFamily: i, strokeWidth: s, stroke: r, fill: n, fontSize: o, fontStyle: a, fontWeight: h, deltaY: c} = t
                  , l = this.getSvgTextDecoration(t);
                return [r ? Et("stroke", r) : "", s ? "stroke-width: ".concat(s, "; ") : "", i ? "font-family: ".concat(i.includes("'") || i.includes('"') ? i : "'".concat(i, "'"), "; ") : "", o ? "font-size: ".concat(o, "px; ") : "", a ? "font-style: ".concat(a, "; ") : "", h ? "font-weight: ".concat(h, "; ") : "", l ? "text-decoration: ".concat(l, "; ") : l, n ? Et("fill", n) : "", c ? "baseline-shift: ".concat(-c, "; ") : "", e ? "white-space: pre; " : ""].join("")
            }
            getSvgTextDecoration(t) {
                return ["overline", "underline", "line-through"].filter((e=>t[e.replace("-", "")])).join(" ")
            }
        }
        ]),
        I.setClass(dn),
        I.setSVGClass(dn);
        class un {
            constructor(t) {
                s(this, "target", void 0),
                s(this, "__mouseDownInPlace", !1),
                s(this, "__dragStartFired", !1),
                s(this, "__isDraggingOver", !1),
                s(this, "__dragStartSelection", void 0),
                s(this, "__dragImageDisposer", void 0),
                s(this, "_dispose", void 0),
                this.target = t;
                const e = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
                this._dispose = ()=>{
                    e.forEach((t=>t())),
                    this._dispose = void 0
                }
            }
            isPointerOverSelection(t) {
                const e = this.target
                  , i = e.getSelectionStartFromPointer(t);
                return e.isEditing && i >= e.selectionStart && i <= e.selectionEnd && e.selectionStart < e.selectionEnd
            }
            start(t) {
                return this.__mouseDownInPlace = this.isPointerOverSelection(t)
            }
            isActive() {
                return this.__mouseDownInPlace
            }
            end(t) {
                const e = this.isActive();
                return e && !this.__dragStartFired && (this.target.setCursorByClick(t),
                this.target.initDelayedCursor(!0)),
                this.__mouseDownInPlace = !1,
                this.__dragStartFired = !1,
                this.__isDraggingOver = !1,
                e
            }
            getDragStartSelection() {
                return this.__dragStartSelection
            }
            setDragImage(t, e) {
                var i;
                let {selectionStart: s, selectionEnd: r} = e;
                const n = this.target
                  , o = n.canvas
                  , a = new G(n.flipX ? -1 : 1,n.flipY ? -1 : 1)
                  , h = n._getCursorBoundaries(s)
                  , c = new G(h.left + h.leftOffset,h.top + h.topOffset).multiply(a).transform(n.calcTransformMatrix())
                  , l = o.getPointer(t).subtract(c)
                  , d = o._isRetinaScaling()
                  , u = n.getCanvasRetinaScaling()
                  , g = n.getBoundingRect(!0)
                  , f = c.subtract(new G(g.left,g.top))
                  , p = o.viewportTransform
                  , m = f.add(l).transform(p, !0)
                  , v = n.backgroundColor
                  , y = Ne(n.styles);
                n.backgroundColor = "";
                const x = {
                    stroke: "transparent",
                    fill: "transparent",
                    textBackgroundColor: "transparent"
                };
                n.setSelectionStyles(x, 0, s),
                n.setSelectionStyles(x, r, n.text.length),
                n.dirty = !0;
                const _ = n.toCanvasElement({
                    enableRetinaScaling: d,
                    viewportTransform: !0
                });
                n.backgroundColor = v,
                n.styles = y,
                n.dirty = !0,
                Yt(_, {
                    position: "fixed",
                    left: "".concat(-_.width, "px"),
                    border: L,
                    width: "".concat(_.width / u, "px"),
                    height: "".concat(_.height / u, "px")
                }),
                this.__dragImageDisposer && this.__dragImageDisposer(),
                this.__dragImageDisposer = ()=>{
                    _.remove()
                }
                ,
                Wt(t.target || this.target.hiddenTextarea).body.appendChild(_),
                null === (i = t.dataTransfer) || void 0 === i || i.setDragImage(_, m.x, m.y)
            }
            onDragStart(t) {
                this.__dragStartFired = !0;
                const i = this.target
                  , s = this.isActive();
                if (s && t.dataTransfer) {
                    const s = this.__dragStartSelection = {
                        selectionStart: i.selectionStart,
                        selectionEnd: i.selectionEnd
                    }
                      , r = i._text.slice(s.selectionStart, s.selectionEnd).join("")
                      , n = e({
                        text: i.text,
                        value: r
                    }, s);
                    t.dataTransfer.setData("text/plain", r),
                    t.dataTransfer.setData("application/fabric", JSON.stringify({
                        value: r,
                        styles: i.getSelectionStyles(s.selectionStart, s.selectionEnd, !0)
                    })),
                    t.dataTransfer.effectAllowed = "copyMove",
                    this.setDragImage(t, n)
                }
                return i.abortCursorAnimation(),
                s
            }
            canDrop(t) {
                if (this.target.editable && !this.target.getActiveControl() && !t.defaultPrevented) {
                    if (this.isActive() && this.__dragStartSelection) {
                        const e = this.target.getSelectionStartFromPointer(t)
                          , i = this.__dragStartSelection;
                        return e < i.selectionStart || e > i.selectionEnd
                    }
                    return !0
                }
                return !1
            }
            targetCanDrop(t) {
                return this.target.canDrop(t)
            }
            dragEnterHandler(t) {
                let {e} = t;
                const i = this.targetCanDrop(e);
                !this.__isDraggingOver && i && (this.__isDraggingOver = !0)
            }
            dragOverHandler(t) {
                const {e} = t
                  , i = this.targetCanDrop(e);
                !this.__isDraggingOver && i ? this.__isDraggingOver = !0 : this.__isDraggingOver && !i && (this.__isDraggingOver = !1),
                this.__isDraggingOver && (e.preventDefault(),
                t.canDrop = !0,
                t.dropTarget = this.target)
            }
            dragLeaveHandler() {
                (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = !1)
            }
            dropHandler(t) {
                var e;
                const {e: i} = t
                  , s = i.defaultPrevented;
                this.__isDraggingOver = !1,
                i.preventDefault();
                let r = null === (e = i.dataTransfer) || void 0 === e ? void 0 : e.getData("text/plain");
                if (r && !s) {
                    const e = this.target
                      , s = e.canvas;
                    let n = e.getSelectionStartFromPointer(i);
                    const {styles: o} = i.dataTransfer.types.includes("application/fabric") ? JSON.parse(i.dataTransfer.getData("application/fabric")) : {}
                      , a = r[Math.max(0, r.length - 1)]
                      , h = 0;
                    if (this.__dragStartSelection) {
                        const t = this.__dragStartSelection.selectionStart
                          , i = this.__dragStartSelection.selectionEnd;
                        n > t && n <= i ? n = t : n > i && (n -= i - t),
                        e.removeChars(t, i),
                        delete this.__dragStartSelection
                    }
                    e._reNewline.test(a) && (e._reNewline.test(e._text[n]) || n === e._text.length) && (r = r.trimEnd()),
                    t.didDrop = !0,
                    t.dropTarget = e,
                    e.insertChars(r, o, n),
                    s.setActiveObject(e),
                    e.enterEditing(i),
                    e.selectionStart = Math.min(n + h, e._text.length),
                    e.selectionEnd = Math.min(e.selectionStart + r.length, e._text.length),
                    e.hiddenTextarea.value = e.text,
                    e._updateTextarea(),
                    e.hiddenTextarea.focus(),
                    e.fire("changed", {
                        index: n + h,
                        action: "drop"
                    }),
                    s.fire("text:changed", {
                        target: e
                    }),
                    s.contextTopDirty = !0,
                    s.requestRenderAll()
                }
            }
            dragEndHandler(t) {
                let {e} = t;
                if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
                    var i;
                    const t = this.target
                      , s = this.target.canvas
                      , {selectionStart: r, selectionEnd: n} = this.__dragStartSelection
                      , o = (null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.dropEffect) || L;
                    o === L ? (t.selectionStart = r,
                    t.selectionEnd = n,
                    t._updateTextarea(),
                    t.hiddenTextarea.focus()) : (t.clearContextTop(),
                    "move" === o && (t.removeChars(r, n),
                    t.selectionStart = t.selectionEnd = r,
                    t.hiddenTextarea && (t.hiddenTextarea.value = t.text),
                    t._updateTextarea(),
                    t.fire("changed", {
                        index: r,
                        action: "dragend"
                    }),
                    s.fire("text:changed", {
                        target: t
                    }),
                    s.requestRenderAll()),
                    t.exitEditing())
                }
                this.__dragImageDisposer && this.__dragImageDisposer(),
                delete this.__dragImageDisposer,
                delete this.__dragStartSelection,
                this.__isDraggingOver = !1
            }
            dispose() {
                this._dispose && this._dispose()
            }
        }
        const gn = /[ \n\.,;!\?\-]/;
        class fn extends dn {
            constructor() {
                super(...arguments),
                s(this, "_currentCursorOpacity", 1)
            }
            initBehavior() {
                this._tick = this._tick.bind(this),
                this._onTickComplete = this._onTickComplete.bind(this),
                this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this)
            }
            onDeselect(t) {
                return this.isEditing && this.exitEditing(),
                this.selected = !1,
                super.onDeselect(t)
            }
            _animateCursor(t) {
                let {toValue: e, duration: i, delay: s, onComplete: r} = t;
                return Me({
                    startValue: this._currentCursorOpacity,
                    endValue: e,
                    duration: i,
                    delay: s,
                    onComplete: r,
                    abort: ()=>!this.canvas || this.selectionStart !== this.selectionEnd,
                    onChange: t=>{
                        this._currentCursorOpacity = t,
                        this.renderCursorOrSelection()
                    }
                })
            }
            _tick(t) {
                this._currentTickState = this._animateCursor({
                    toValue: 1,
                    duration: this.cursorDuration,
                    delay: t,
                    onComplete: this._onTickComplete
                })
            }
            _onTickComplete() {
                var t;
                null === (t = this._currentTickCompleteState) || void 0 === t || t.abort(),
                this._currentTickCompleteState = this._animateCursor({
                    toValue: 0,
                    duration: this.cursorDuration / 2,
                    delay: 100,
                    onComplete: this._tick
                })
            }
            initDelayedCursor(t) {
                this.abortCursorAnimation(),
                this._tick(t ? 0 : this.cursorDelay)
            }
            abortCursorAnimation() {
                let t = !1;
                [this._currentTickState, this._currentTickCompleteState].forEach((e=>{
                    e && !e.isDone() && (t = !0,
                    e.abort())
                }
                )),
                this._currentCursorOpacity = 1,
                t && this.clearContextTop()
            }
            restartCursorIfNeeded() {
                [this._currentTickState, this._currentTickCompleteState].some((t=>!t || t.isDone())) && this.initDelayedCursor()
            }
            selectAll() {
                return this.selectionStart = 0,
                this.selectionEnd = this._text.length,
                this._fireSelectionChanged(),
                this._updateTextarea(),
                this
            }
            getSelectedText() {
                return this._text.slice(this.selectionStart, this.selectionEnd).join("")
            }
            findWordBoundaryLeft(t) {
                let e = 0
                  , i = t - 1;
                if (this._reSpace.test(this._text[i]))
                    for (; this._reSpace.test(this._text[i]); )
                        e++,
                        i--;
                for (; /\S/.test(this._text[i]) && i > -1; )
                    e++,
                    i--;
                return t - e
            }
            findWordBoundaryRight(t) {
                let e = 0
                  , i = t;
                if (this._reSpace.test(this._text[i]))
                    for (; this._reSpace.test(this._text[i]); )
                        e++,
                        i++;
                for (; /\S/.test(this._text[i]) && i < this._text.length; )
                    e++,
                    i++;
                return t + e
            }
            findLineBoundaryLeft(t) {
                let e = 0
                  , i = t - 1;
                for (; !/\n/.test(this._text[i]) && i > -1; )
                    e++,
                    i--;
                return t - e
            }
            findLineBoundaryRight(t) {
                let e = 0
                  , i = t;
                for (; !/\n/.test(this._text[i]) && i < this._text.length; )
                    e++,
                    i++;
                return t + e
            }
            searchWordBoundary(t, e) {
                const i = this._text;
                let s = t > 0 && this._reSpace.test(i[t]) && (-1 === e || !F.test(i[t - 1])) ? t - 1 : t
                  , r = i[s];
                for (; s > 0 && s < i.length && !gn.test(r); )
                    s += e,
                    r = i[s];
                return -1 === e && gn.test(r) && s++,
                s
            }
            selectWord(t) {
                t = t || this.selectionStart;
                const e = this.searchWordBoundary(t, -1)
                  , i = Math.max(e, this.searchWordBoundary(t, 1));
                this.selectionStart = e,
                this.selectionEnd = i,
                this._fireSelectionChanged(),
                this._updateTextarea(),
                this.renderCursorOrSelection()
            }
            selectLine(t) {
                t = t || this.selectionStart;
                const e = this.findLineBoundaryLeft(t)
                  , i = this.findLineBoundaryRight(t);
                return this.selectionStart = e,
                this.selectionEnd = i,
                this._fireSelectionChanged(),
                this._updateTextarea(),
                this
            }
            enterEditing(t) {
                !this.isEditing && this.editable && (this.canvas && (this.canvas.calcOffset(),
                this.canvas.textEditingManager.exitTextEditing()),
                this.isEditing = !0,
                this.initHiddenTextarea(),
                this.hiddenTextarea.focus(),
                this.hiddenTextarea.value = this.text,
                this._updateTextarea(),
                this._saveEditingProps(),
                this._setEditingProps(),
                this._textBeforeEdit = this.text,
                this._tick(),
                this.fire("editing:entered", t ? {
                    e: t
                } : void 0),
                this._fireSelectionChanged(),
                this.canvas && (this.canvas.fire("text:editing:entered", {
                    target: this,
                    e: t
                }),
                this.canvas.requestRenderAll()))
            }
            updateSelectionOnMouseMove(t) {
                if (this.getActiveControl())
                    return;
                const e = this.hiddenTextarea;
                Wt(e).activeElement !== e && e.focus();
                const i = this.getSelectionStartFromPointer(t)
                  , s = this.selectionStart
                  , r = this.selectionEnd;
                (i === this.__selectionStartOnMouseDown && s !== r || s !== i && r !== i) && (i > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown,
                this.selectionEnd = i) : (this.selectionStart = i,
                this.selectionEnd = this.__selectionStartOnMouseDown),
                this.selectionStart === s && this.selectionEnd === r || (this._fireSelectionChanged(),
                this._updateTextarea(),
                this.renderCursorOrSelection()))
            }
            _setEditingProps() {
                this.hoverCursor = "text",
                this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"),
                this.borderColor = this.editingBorderColor,
                this.hasControls = this.selectable = !1,
                this.lockMovementX = this.lockMovementY = !0
            }
            fromStringToGraphemeSelection(t, e, i) {
                const s = i.slice(0, t)
                  , r = this.graphemeSplit(s).length;
                if (t === e)
                    return {
                        selectionStart: r,
                        selectionEnd: r
                    };
                const n = i.slice(t, e);
                return {
                    selectionStart: r,
                    selectionEnd: r + this.graphemeSplit(n).length
                }
            }
            fromGraphemeToStringSelection(t, e, i) {
                const s = i.slice(0, t).join("").length;
                return t === e ? {
                    selectionStart: s,
                    selectionEnd: s
                } : {
                    selectionStart: s,
                    selectionEnd: s + i.slice(t, e).join("").length
                }
            }
            _updateTextarea() {
                if (this.cursorOffsetCache = {},
                this.hiddenTextarea) {
                    if (!this.inCompositionMode) {
                        const t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                        this.hiddenTextarea.selectionStart = t.selectionStart,
                        this.hiddenTextarea.selectionEnd = t.selectionEnd
                    }
                    this.updateTextareaPosition()
                }
            }
            updateFromTextArea() {
                if (!this.hiddenTextarea)
                    return;
                this.cursorOffsetCache = {};
                const t = this.hiddenTextarea;
                this.text = t.value,
                this.set("dirty", !0),
                this.initDimensions(),
                this.setCoords();
                const e = this.fromStringToGraphemeSelection(t.selectionStart, t.selectionEnd, t.value);
                this.selectionEnd = this.selectionStart = e.selectionEnd,
                this.inCompositionMode || (this.selectionStart = e.selectionStart),
                this.updateTextareaPosition()
            }
            updateTextareaPosition() {
                if (this.selectionStart === this.selectionEnd) {
                    const t = this._calcTextareaPosition();
                    this.hiddenTextarea.style.left = t.left,
                    this.hiddenTextarea.style.top = t.top
                }
            }
            _calcTextareaPosition() {
                if (!this.canvas)
                    return {
                        left: "1px",
                        top: "1px"
                    };
                const t = this.inCompositionMode ? this.compositionStart : this.selectionStart
                  , e = this._getCursorBoundaries(t)
                  , i = this.get2DCursorLocation(t)
                  , s = i.lineIndex
                  , r = i.charIndex
                  , n = this.getValueOfPropertyAt(s, r, "fontSize") * this.lineHeight
                  , o = e.leftOffset
                  , a = this.getCanvasRetinaScaling()
                  , h = this.canvas.upperCanvasEl
                  , c = h.width / a
                  , l = h.height / a
                  , d = c - n
                  , u = l - n
                  , g = new G(e.left + o,e.top + e.topOffset + n).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new G(h.clientWidth / c,h.clientHeight / l));
                return g.x < 0 && (g.x = 0),
                g.x > d && (g.x = d),
                g.y < 0 && (g.y = 0),
                g.y > u && (g.y = u),
                g.x += this.canvas._offset.left,
                g.y += this.canvas._offset.top,
                {
                    left: "".concat(g.x, "px"),
                    top: "".concat(g.y, "px"),
                    fontSize: "".concat(n, "px"),
                    charHeight: n
                }
            }
            _saveEditingProps() {
                this._savedProps = {
                    hasControls: this.hasControls,
                    borderColor: this.borderColor,
                    lockMovementX: this.lockMovementX,
                    lockMovementY: this.lockMovementY,
                    hoverCursor: this.hoverCursor,
                    selectable: this.selectable,
                    defaultCursor: this.canvas && this.canvas.defaultCursor,
                    moveCursor: this.canvas && this.canvas.moveCursor
                }
            }
            _restoreEditingProps() {
                this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor,
                this.hasControls = this._savedProps.hasControls,
                this.borderColor = this._savedProps.borderColor,
                this.selectable = this._savedProps.selectable,
                this.lockMovementX = this._savedProps.lockMovementX,
                this.lockMovementY = this._savedProps.lockMovementY,
                this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor,
                this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor),
                delete this._savedProps)
            }
            _exitEditing() {
                const t = this.hiddenTextarea;
                this.selected = !1,
                this.isEditing = !1,
                t && (t.blur && t.blur(),
                t.parentNode && t.parentNode.removeChild(t)),
                this.hiddenTextarea = null,
                this.abortCursorAnimation(),
                this.selectionStart !== this.selectionEnd && this.clearContextTop()
            }
            exitEditing() {
                const t = this._textBeforeEdit !== this.text;
                return this._exitEditing(),
                this.selectionEnd = this.selectionStart,
                this._restoreEditingProps(),
                this._forceClearCache && (this.initDimensions(),
                this.setCoords()),
                this.fire("editing:exited"),
                t && this.fire("modified"),
                this.canvas && (this.canvas.fire("text:editing:exited", {
                    target: this
                }),
                t && this.canvas.fire("object:modified", {
                    target: this
                })),
                this
            }
            _removeExtraneousStyles() {
                for (const t in this.styles)
                    this._textLines[t] || delete this.styles[t]
            }
            removeStyleFromTo(t, e) {
                const {lineIndex: i, charIndex: s} = this.get2DCursorLocation(t, !0)
                  , {lineIndex: r, charIndex: n} = this.get2DCursorLocation(e, !0);
                if (i !== r) {
                    if (this.styles[i])
                        for (let t = s; t < this._unwrappedTextLines[i].length; t++)
                            delete this.styles[i][t];
                    if (this.styles[r])
                        for (let t = n; t < this._unwrappedTextLines[r].length; t++) {
                            const e = this.styles[r][t];
                            e && (this.styles[i] || (this.styles[i] = {}),
                            this.styles[i][s + t - n] = e)
                        }
                    for (let t = i + 1; t <= r; t++)
                        delete this.styles[t];
                    this.shiftLineStyles(r, i - r)
                } else if (this.styles[i]) {
                    const t = this.styles[i]
                      , e = n - s;
                    for (let e = s; e < n; e++)
                        delete t[e];
                    for (const s in this.styles[i]) {
                        const i = parseInt(s, 10);
                        i >= n && (t[i - e] = t[s],
                        delete t[s])
                    }
                }
            }
            shiftLineStyles(t, e) {
                const i = Object.assign({}, this.styles);
                for (const s in this.styles) {
                    const r = parseInt(s, 10);
                    r > t && (this.styles[r + e] = i[r],
                    i[r - e] || delete this.styles[r])
                }
            }
            insertNewlineStyleObject(t, i, s, r) {
                const n = {}
                  , o = this._unwrappedTextLines[t].length === i;
                let a = !1;
                s || (s = 1),
                this.shiftLineStyles(t, s);
                const h = this.styles[t] ? this.styles[t][0 === i ? i : i - 1] : void 0;
                for (const e in this.styles[t]) {
                    const s = parseInt(e, 10);
                    s >= i && (a = !0,
                    n[s - i] = this.styles[t][e],
                    o && 0 === i || delete this.styles[t][e])
                }
                let c = !1;
                for (a && !o && (this.styles[t + s] = n,
                c = !0),
                c && s--; s > 0; )
                    r && r[s - 1] ? this.styles[t + s] = {
                        0: e({}, r[s - 1])
                    } : h ? this.styles[t + s] = {
                        0: e({}, h)
                    } : delete this.styles[t + s],
                    s--;
                this._forceClearCache = !0
            }
            insertCharStyleObject(t, i, s, r) {
                this.styles || (this.styles = {});
                const n = this.styles[t]
                  , o = n ? e({}, n) : {};
                s || (s = 1);
                for (const t in o) {
                    const e = parseInt(t, 10);
                    e >= i && (n[e + s] = o[e],
                    o[e - s] || delete n[e])
                }
                if (this._forceClearCache = !0,
                r) {
                    for (; s--; )
                        Object.keys(r[s]).length && (this.styles[t] || (this.styles[t] = {}),
                        this.styles[t][i + s] = e({}, r[s]));
                    return
                }
                if (!n)
                    return;
                const a = n[i ? i - 1 : 1];
                for (; a && s--; )
                    this.styles[t][i + s] = e({}, a)
            }
            insertNewStyleBlock(t, e, i) {
                const s = this.get2DCursorLocation(e, !0)
                  , r = [0];
                let n, o = 0;
                for (let e = 0; e < t.length; e++)
                    "\n" === t[e] ? (o++,
                    r[o] = 0) : r[o]++;
                for (r[0] > 0 && (this.insertCharStyleObject(s.lineIndex, s.charIndex, r[0], i),
                i = i && i.slice(r[0] + 1)),
                o && this.insertNewlineStyleObject(s.lineIndex, s.charIndex + r[0], o),
                n = 1; n < o; n++)
                    r[n] > 0 ? this.insertCharStyleObject(s.lineIndex + n, 0, r[n], i) : i && this.styles[s.lineIndex + n] && i[0] && (this.styles[s.lineIndex + n][0] = i[0]),
                    i = i && i.slice(r[n] + 1);
                r[n] > 0 && this.insertCharStyleObject(s.lineIndex + n, 0, r[n], i)
            }
            removeChars(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t + 1;
                this.removeStyleFromTo(t, e),
                this._text.splice(t, e - t),
                this.text = this._text.join(""),
                this.set("dirty", !0),
                this.initDimensions(),
                this.setCoords(),
                this._removeExtraneousStyles()
            }
            insertChars(t, e, i) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i;
                s > i && this.removeStyleFromTo(i, s);
                const r = this.graphemeSplit(t);
                this.insertNewStyleBlock(r, i, e),
                this._text = [...this._text.slice(0, i), ...r, ...this._text.slice(s)],
                this.text = this._text.join(""),
                this.set("dirty", !0),
                this.initDimensions(),
                this.setCoords(),
                this._removeExtraneousStyles()
            }
            setSelectionStartEndWithShift(t, e, i) {
                i <= t ? (e === t ? this._selectionDirection = E : this._selectionDirection === A && (this._selectionDirection = E,
                this.selectionEnd = t),
                this.selectionStart = i) : i > t && i < e ? this._selectionDirection === A ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = A : this._selectionDirection === E && (this._selectionDirection = A,
                this.selectionStart = e),
                this.selectionEnd = i)
            }
        }
        class pn extends fn {
            initHiddenTextarea() {
                const t = this.canvas && Wt(this.canvas.getElement()) || y()
                  , e = t.createElement("textarea");
                Object.entries({
                    autocapitalize: "off",
                    autocorrect: "off",
                    autocomplete: "off",
                    spellcheck: "false",
                    "data-fabric": "textarea",
                    wrap: "off"
                }).map((t=>{
                    let[i,s] = t;
                    return e.setAttribute(i, s)
                }
                ));
                const {top: i, left: s, fontSize: r} = this._calcTextareaPosition();
                e.style.cssText = "position: absolute; top: ".concat(i, "; left: ").concat(s, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r, ";"),
                (this.hiddenTextareaContainer || t.body).appendChild(e),
                Object.entries({
                    blur: "blur",
                    keydown: "onKeyDown",
                    keyup: "onKeyUp",
                    input: "onInput",
                    copy: "copy",
                    cut: "copy",
                    paste: "paste",
                    compositionstart: "onCompositionStart",
                    compositionupdate: "onCompositionUpdate",
                    onCompositionUpdate: "onCompositionEnd"
                }).map((t=>{
                    let[i,s] = t;
                    return e.addEventListener(i, this[s].bind(this))
                }
                )),
                this.hiddenTextarea = e
            }
            blur() {
                this.abortCursorAnimation()
            }
            onKeyDown(t) {
                if (!this.isEditing)
                    return;
                const e = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
                if (t.keyCode in e)
                    this[e[t.keyCode]](t);
                else {
                    if (!(t.keyCode in this.ctrlKeysMapDown) || !t.ctrlKey && !t.metaKey)
                        return;
                    this[this.ctrlKeysMapDown[t.keyCode]](t)
                }
                t.stopImmediatePropagation(),
                t.preventDefault(),
                t.keyCode >= 33 && t.keyCode <= 40 ? (this.inCompositionMode = !1,
                this.clearContextTop(),
                this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll()
            }
            onKeyUp(t) {
                !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t),
                t.stopImmediatePropagation(),
                t.preventDefault(),
                this.canvas && this.canvas.requestRenderAll())
            }
            onInput(t) {
                const e = this.fromPaste;
                if (this.fromPaste = !1,
                t && t.stopPropagation(),
                !this.isEditing)
                    return;
                const i = ()=>{
                    this.updateFromTextArea(),
                    this.fire("changed"),
                    this.canvas && (this.canvas.fire("text:changed", {
                        target: this
                    }),
                    this.canvas.requestRenderAll())
                }
                ;
                if ("" === this.hiddenTextarea.value)
                    return this.styles = {},
                    void i();
                const s = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText
                  , r = this._text.length
                  , n = s.length
                  , o = this.selectionStart
                  , a = this.selectionEnd
                  , c = o !== a;
                let l, d, u, g, f = n - r;
                const p = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value)
                  , m = o > p.selectionStart;
                c ? (d = this._text.slice(o, a),
                f += a - o) : n < r && (d = m ? this._text.slice(a + f, a) : this._text.slice(o, o - f));
                const y = s.slice(p.selectionEnd - f, p.selectionEnd);
                if (d && d.length && (y.length && (l = this.getSelectionStyles(o, o + 1, !1),
                l = y.map((()=>l[0]))),
                c ? (u = o,
                g = a) : m ? (u = a - d.length,
                g = a) : (u = a,
                g = a + d.length),
                this.removeStyleFromTo(u, g)),
                y.length) {
                    const {copyPasteData: t} = v();
                    e && y.join("") === t.copiedText && !h.disableStyleCopyPaste && (l = t.copiedTextStyle),
                    this.insertNewStyleBlock(y, o, l)
                }
                i()
            }
            onCompositionStart() {
                this.inCompositionMode = !0
            }
            onCompositionEnd() {
                this.inCompositionMode = !1
            }
            onCompositionUpdate(t) {
                let {target: e} = t;
                const {selectionStart: i, selectionEnd: s} = e;
                this.compositionStart = i,
                this.compositionEnd = s,
                this.updateTextareaPosition()
            }
            copy() {
                if (this.selectionStart === this.selectionEnd)
                    return;
                const {copyPasteData: t} = v();
                t.copiedText = this.getSelectedText(),
                h.disableStyleCopyPaste ? t.copiedTextStyle = void 0 : t.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0),
                this._copyDone = !0
            }
            paste() {
                this.fromPaste = !0
            }
            _getWidthBeforeCursor(t, e) {
                let i, s = this._getLineLeftOffset(t);
                return e > 0 && (i = this.__charBounds[t][e - 1],
                s += i.left + i.width),
                s
            }
            getDownCursorOffset(t, e) {
                const i = this._getSelectionForOffset(t, e)
                  , s = this.get2DCursorLocation(i)
                  , r = s.lineIndex;
                if (r === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode)
                    return this._text.length - i;
                const n = s.charIndex
                  , o = this._getWidthBeforeCursor(r, n)
                  , a = this._getIndexOnLine(r + 1, o);
                return this._textLines[r].slice(n).length + a + 1 + this.missingNewlineOffset(r)
            }
            _getSelectionForOffset(t, e) {
                return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
            }
            getUpCursorOffset(t, e) {
                const i = this._getSelectionForOffset(t, e)
                  , s = this.get2DCursorLocation(i)
                  , r = s.lineIndex;
                if (0 === r || t.metaKey || 33 === t.keyCode)
                    return -i;
                const n = s.charIndex
                  , o = this._getWidthBeforeCursor(r, n)
                  , a = this._getIndexOnLine(r - 1, o)
                  , h = this._textLines[r].slice(0, n)
                  , c = this.missingNewlineOffset(r - 1);
                return -this._textLines[r - 1].length + a - h.length + (1 - c)
            }
            _getIndexOnLine(t, e) {
                const i = this._textLines[t];
                let s, r, n = this._getLineLeftOffset(t), o = 0;
                for (let a = 0, h = i.length; a < h; a++)
                    if (s = this.__charBounds[t][a].width,
                    n += s,
                    n > e) {
                        r = !0;
                        const t = n - s
                          , i = n
                          , h = Math.abs(t - e);
                        o = Math.abs(i - e) < h ? a : a - 1;
                        break
                    }
                return r || (o = i.length - 1),
                o
            }
            moveCursorDown(t) {
                this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t)
            }
            moveCursorUp(t) {
                0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t)
            }
            _moveCursorUpOrDown(t, e) {
                const i = this["get".concat(t, "CursorOffset")](e, this._selectionDirection === A);
                if (e.shiftKey ? this.moveCursorWithShift(i) : this.moveCursorWithoutShift(i),
                0 !== i) {
                    const t = this.text.length;
                    this.selectionStart = Se(0, this.selectionStart, t),
                    this.selectionEnd = Se(0, this.selectionEnd, t),
                    this.abortCursorAnimation(),
                    this._currentCursorOpacity = 1,
                    this.initDelayedCursor(),
                    this._fireSelectionChanged(),
                    this._updateTextarea()
                }
            }
            moveCursorWithShift(t) {
                const e = this._selectionDirection === E ? this.selectionStart + t : this.selectionEnd + t;
                return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e),
                0 !== t
            }
            moveCursorWithoutShift(t) {
                return t < 0 ? (this.selectionStart += t,
                this.selectionEnd = this.selectionStart) : (this.selectionEnd += t,
                this.selectionStart = this.selectionEnd),
                0 !== t
            }
            moveCursorLeft(t) {
                0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t)
            }
            _move(t, e, i) {
                let s;
                if (t.altKey)
                    s = this["findWordBoundary".concat(i)](this[e]);
                else {
                    if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode)
                        return this[e] += "Left" === i ? -1 : 1,
                        !0;
                    s = this["findLineBoundary".concat(i)](this[e])
                }
                return void 0 !== s && this[e] !== s && (this[e] = s,
                !0)
            }
            _moveLeft(t, e) {
                return this._move(t, e, "Left")
            }
            _moveRight(t, e) {
                return this._move(t, e, "Right")
            }
            moveCursorLeftWithoutShift(t) {
                let e = !0;
                return this._selectionDirection = E,
                this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")),
                this.selectionEnd = this.selectionStart,
                e
            }
            moveCursorLeftWithShift(t) {
                return this._selectionDirection === A && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = E,
                this._moveLeft(t, "selectionStart")) : void 0
            }
            moveCursorRight(t) {
                this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t)
            }
            _moveCursorLeftOrRight(t, e) {
                const i = "moveCursor".concat(t).concat(e.shiftKey ? "WithShift" : "WithoutShift");
                this._currentCursorOpacity = 1,
                this[i](e) && (this.abortCursorAnimation(),
                this.initDelayedCursor(),
                this._fireSelectionChanged(),
                this._updateTextarea())
            }
            moveCursorRightWithShift(t) {
                return this._selectionDirection === E && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = A,
                this._moveRight(t, "selectionEnd")) : void 0
            }
            moveCursorRightWithoutShift(t) {
                let e = !0;
                return this._selectionDirection = A,
                this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"),
                this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd,
                e
            }
        }
        function mn(t) {
            return t.button && 1 !== t.button
        }
        class vn extends pn {
            constructor() {
                super(...arguments),
                s(this, "draggableTextDelegate", void 0)
            }
            initBehavior() {
                this.on("mousedown", this._mouseDownHandler),
                this.on("mousedown:before", this._mouseDownHandlerBefore),
                this.on("mouseup", this.mouseUpHandler),
                this.on("mousedblclick", this.doubleClickHandler),
                this.on("tripleclick", this.tripleClickHandler),
                this.__lastClickTime = +new Date,
                this.__lastLastClickTime = +new Date,
                this.__lastPointer = {},
                this.on("mousedown", this.onMouseDown),
                this.draggableTextDelegate = new un(this),
                super.initBehavior()
            }
            shouldStartDragging() {
                return this.draggableTextDelegate.isActive()
            }
            onDragStart(t) {
                return this.draggableTextDelegate.onDragStart(t)
            }
            canDrop(t) {
                return this.draggableTextDelegate.canDrop(t)
            }
            onMouseDown(t) {
                if (!this.canvas)
                    return;
                this.__newClickTime = +new Date;
                const e = t.pointer;
                this.isTripleClick(e) && (this.fire("tripleclick", t),
                Kt(t.e)),
                this.__lastLastClickTime = this.__lastClickTime,
                this.__lastClickTime = this.__newClickTime,
                this.__lastPointer = e,
                this.__lastSelected = this.selected
            }
            isTripleClick(t) {
                return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y
            }
            doubleClickHandler(t) {
                this.isEditing && this.selectWord(this.getSelectionStartFromPointer(t.e))
            }
            tripleClickHandler(t) {
                this.isEditing && this.selectLine(this.getSelectionStartFromPointer(t.e))
            }
            _mouseDownHandler(t) {
                let {e} = t;
                this.canvas && this.editable && !mn(e) && !this.getActiveControl() && (this.draggableTextDelegate.start(e) || (this.canvas.textEditingManager.register(this),
                this.selected && (this.inCompositionMode = !1,
                this.setCursorByClick(e)),
                this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart,
                this.selectionStart === this.selectionEnd && this.abortCursorAnimation(),
                this.renderCursorOrSelection())))
            }
            _mouseDownHandlerBefore(t) {
                let {e} = t;
                this.canvas && this.editable && !mn(e) && (this.selected = this === this.canvas._activeObject)
            }
            mouseUpHandler(t) {
                let {e, transform: i, button: s} = t;
                const r = this.draggableTextDelegate.end(e);
                if (this.canvas) {
                    this.canvas.textEditingManager.unregister(this);
                    const t = this.canvas._activeObject;
                    if (t && t !== this)
                        return
                }
                !this.editable || this.group && !this.group.interactive || i && i.actionPerformed || mn(e) || r || (this.__lastSelected && !this.getActiveControl() ? (this.selected = !1,
                this.__lastSelected = !1,
                this.enterEditing(e),
                this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0)
            }
            setCursorByClick(t) {
                const e = this.getSelectionStartFromPointer(t)
                  , i = this.selectionStart
                  , s = this.selectionEnd;
                t.shiftKey ? this.setSelectionStartEndWithShift(i, s, e) : (this.selectionStart = e,
                this.selectionEnd = e),
                this.isEditing && (this._fireSelectionChanged(),
                this._updateTextarea())
            }
            getSelectionStartFromPointer(t) {
                const e = this.canvas.getPointer(t).transform(rt(this.calcTransformMatrix())).add(new G(-this._getLeftOffset(),-this._getTopOffset()));
                let i = 0
                  , s = 0
                  , r = 0;
                for (let t = 0; t < this._textLines.length && i <= e.y; t++)
                    i += this.getHeightOfLine(t),
                    r = t,
                    t > 0 && (s += this._textLines[t - 1].length + this.missingNewlineOffset(t - 1));
                let n = Math.abs(this._getLineLeftOffset(r));
                const o = this._textLines[r].length
                  , a = this.__charBounds[r];
                for (let t = 0; t < o; t++) {
                    const i = n + a[t].kernedWidth;
                    if (e.x <= i) {
                        Math.abs(e.x - i) <= Math.abs(e.x - n) && s++;
                        break
                    }
                    n = i,
                    s++
                }
                return Math.min(this.flipX ? o - s : s, this._text.length)
            }
        }
        const yn = "moveCursorUp"
          , xn = "moveCursorDown"
          , _n = "moveCursorLeft"
          , bn = "moveCursorRight"
          , wn = "exitEditing"
          , Cn = {
            selectionStart: 0,
            selectionEnd: 0,
            selectionColor: "rgba(17,119,255,0.3)",
            isEditing: !1,
            editable: !0,
            editingBorderColor: "rgba(102,153,255,0.25)",
            cursorWidth: 2,
            cursorColor: "",
            cursorDelay: 1e3,
            cursorDuration: 600,
            caching: !0,
            hiddenTextareaContainer: null,
            _selectionDirection: null,
            _reSpace: /\s|\r?\n/,
            inCompositionMode: !1,
            keysMap: {
                9: wn,
                27: wn,
                33: yn,
                34: xn,
                35: bn,
                36: _n,
                37: _n,
                38: yn,
                39: bn,
                40: xn
            },
            keysMapRtl: {
                9: wn,
                27: wn,
                33: yn,
                34: xn,
                35: _n,
                36: bn,
                37: bn,
                38: yn,
                39: _n,
                40: xn
            },
            ctrlKeysMapDown: {
                65: "selectAll"
            },
            ctrlKeysMapUp: {
                67: "copy",
                88: "cut"
            }
        };
        class Sn extends vn {
            static getDefaults() {
                return e(e({}, super.getDefaults()), Sn.ownDefaults)
            }
            get type() {
                const t = super.type;
                return "itext" === t ? "i-text" : t
            }
            constructor(t, e) {
                super(t, e),
                this.initBehavior()
            }
            _set(t, e) {
                return this.isEditing && this._savedProps && t in this._savedProps ? (this._savedProps[t] = e,
                this) : ("canvas" === t && (this.canvas instanceof ur && this.canvas.textEditingManager.remove(this),
                e instanceof ur && e.textEditingManager.add(this)),
                super._set(t, e))
            }
            setSelectionStart(t) {
                t = Math.max(t, 0),
                this._updateAndFire("selectionStart", t)
            }
            setSelectionEnd(t) {
                t = Math.min(t, this.text.length),
                this._updateAndFire("selectionEnd", t)
            }
            _updateAndFire(t, e) {
                this[t] !== e && (this._fireSelectionChanged(),
                this[t] = e),
                this._updateTextarea()
            }
            _fireSelectionChanged() {
                this.fire("selection:changed"),
                this.canvas && this.canvas.fire("text:selection:changed", {
                    target: this
                })
            }
            initDimensions() {
                this.isEditing && this.initDelayedCursor(),
                super.initDimensions()
            }
            getSelectionStyles() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                return super.getSelectionStyles(t, e, i)
            }
            setSelectionStyles(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
                return super.setSelectionStyles(t, e, i)
            }
            get2DCursorLocation() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                return super.get2DCursorLocation(t, e)
            }
            render(t) {
                super.render(t),
                this.cursorOffsetCache = {},
                this.renderCursorOrSelection()
            }
            toCanvasElement(t) {
                const e = this.isEditing;
                this.isEditing = !1;
                const i = super.toCanvasElement(t);
                return this.isEditing = e,
                i
            }
            renderCursorOrSelection() {
                if (!this.isEditing)
                    return;
                const t = this.clearContextTop(!0);
                if (!t)
                    return;
                const e = this._getCursorBoundaries();
                this.selectionStart === this.selectionEnd ? this.renderCursor(t, e) : this.renderSelection(t, e),
                this.canvas.contextTopDirty = !0,
                t.restore()
            }
            _getCursorBoundaries() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                const i = this._getLeftOffset()
                  , s = this._getTopOffset()
                  , r = this._getCursorBoundariesOffsets(t, e);
                return {
                    left: i,
                    top: s,
                    leftOffset: r.left,
                    topOffset: r.top
                }
            }
            _getCursorBoundariesOffsets(t, e) {
                return e ? this.__getCursorBoundariesOffsets(t) : this.cursorOffsetCache && "top"in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t)
            }
            __getCursorBoundariesOffsets(t) {
                let e = 0
                  , i = 0;
                const {charIndex: s, lineIndex: r} = this.get2DCursorLocation(t);
                for (let t = 0; t < r; t++)
                    e += this.getHeightOfLine(t);
                const n = this._getLineLeftOffset(r)
                  , o = this.__charBounds[r][s];
                o && (i = o.left),
                0 !== this.charSpacing && s === this._textLines[r].length && (i -= this._getWidthOfCharSpacing());
                const a = {
                    top: e,
                    left: n + (i > 0 ? i : 0)
                };
                return "rtl" === this.direction && (this.textAlign === A || this.textAlign === tn || this.textAlign === sn ? a.left *= -1 : this.textAlign === E || this.textAlign === en ? a.left = n - (i > 0 ? i : 0) : this.textAlign !== M && this.textAlign !== rn || (a.left = n - (i > 0 ? i : 0))),
                a
            }
            renderCursorAt(t) {
                const e = this._getCursorBoundaries(t, !0);
                this._renderCursor(this.canvas.contextTop, e, t)
            }
            renderCursor(t, e) {
                this._renderCursor(t, e, this.selectionStart)
            }
            _renderCursor(t, e, i) {
                const s = this.get2DCursorLocation(i)
                  , r = s.lineIndex
                  , n = s.charIndex > 0 ? s.charIndex - 1 : 0
                  , o = this.getValueOfPropertyAt(r, n, "fontSize")
                  , a = this.getObjectScaling().x * this.canvas.getZoom()
                  , h = this.cursorWidth / a
                  , c = this.getValueOfPropertyAt(r, n, "deltaY")
                  , l = e.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(r) / this.lineHeight - o * (1 - this._fontSizeFraction);
                this.inCompositionMode && this.renderSelection(t, e),
                t.fillStyle = this.cursorColor || this.getValueOfPropertyAt(r, n, "fill"),
                t.globalAlpha = this._currentCursorOpacity,
                t.fillRect(e.left + e.leftOffset - h / 2, l + e.top + c, h, o)
            }
            renderSelection(t, e) {
                const i = {
                    selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
                    selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
                };
                this._renderSelection(t, i, e)
            }
            renderDragSourceEffect() {
                const t = this.draggableTextDelegate.getDragStartSelection();
                this._renderSelection(this.canvas.contextTop, t, this._getCursorBoundaries(t.selectionStart, !0))
            }
            renderDropTargetEffect(t) {
                const e = this.getSelectionStartFromPointer(t);
                this.renderCursorAt(e)
            }
            _renderSelection(t, e, i) {
                const s = e.selectionStart
                  , r = e.selectionEnd
                  , n = this.textAlign.includes(tn)
                  , o = this.get2DCursorLocation(s)
                  , a = this.get2DCursorLocation(r)
                  , h = o.lineIndex
                  , c = a.lineIndex
                  , l = o.charIndex < 0 ? 0 : o.charIndex
                  , d = a.charIndex < 0 ? 0 : a.charIndex;
                for (let e = h; e <= c; e++) {
                    const s = this._getLineLeftOffset(e) || 0;
                    let r = this.getHeightOfLine(e)
                      , o = 0
                      , a = 0
                      , u = 0;
                    if (e === h && (a = this.__charBounds[h][l].left),
                    e >= h && e < c)
                        u = n && !this.isEndOfWrapping(e) ? this.width : this.getLineWidth(e) || 5;
                    else if (e === c)
                        if (0 === d)
                            u = this.__charBounds[c][d].left;
                        else {
                            const t = this._getWidthOfCharSpacing();
                            u = this.__charBounds[c][d - 1].left + this.__charBounds[c][d - 1].width - t
                        }
                    o = r,
                    (this.lineHeight < 1 || e === c && this.lineHeight > 1) && (r /= this.lineHeight);
                    let g = i.left + s + a
                      , f = r
                      , p = 0;
                    const m = u - a;
                    this.inCompositionMode ? (t.fillStyle = this.compositionColor || "black",
                    f = 1,
                    p = r) : t.fillStyle = this.selectionColor,
                    "rtl" === this.direction && (this.textAlign === A || this.textAlign === tn || this.textAlign === sn ? g = this.width - g - m : this.textAlign === E || this.textAlign === en ? g = i.left + s - u : this.textAlign !== M && this.textAlign !== rn || (g = i.left + s - u)),
                    t.fillRect(g, i.top + i.topOffset + p, m, f),
                    i.topOffset += o
                }
            }
            getCurrentCharFontSize() {
                const t = this._getCurrentCharIndex();
                return this.getValueOfPropertyAt(t.l, t.c, "fontSize")
            }
            getCurrentCharColor() {
                const t = this._getCurrentCharIndex();
                return this.getValueOfPropertyAt(t.l, t.c, "fill")
            }
            _getCurrentCharIndex() {
                const t = this.get2DCursorLocation(this.selectionStart, !0)
                  , e = t.charIndex > 0 ? t.charIndex - 1 : 0;
                return {
                    l: t.lineIndex,
                    c: e
                }
            }
            dispose() {
                this._exitEditing(),
                this.draggableTextDelegate.dispose(),
                super.dispose()
            }
        }
        s(Sn, "ownDefaults", Cn),
        s(Sn, "type", "IText"),
        I.setClass(Sn),
        I.setClass(Sn, "i-text");
        class Tn extends Sn {
            static getDefaults() {
                return e(e({}, super.getDefaults()), {}, {
                    controls: Ti()
                }, Tn.ownDefaults)
            }
            initDimensions() {
                this.initialized && (this.isEditing && this.initDelayedCursor(),
                this._clearCache(),
                this.dynamicMinWidth = 0,
                this._styleMap = this._generateStyleMap(this._splitText()),
                this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth),
                this.textAlign.includes(tn) && this.enlargeSpaces(),
                this.height = this.calcTextHeight())
            }
            _generateStyleMap(t) {
                let e = 0
                  , i = 0
                  , s = 0;
                const r = {};
                for (let n = 0; n < t.graphemeLines.length; n++)
                    "\n" === t.graphemeText[s] && n > 0 ? (i = 0,
                    s++,
                    e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[s]) && n > 0 && (i++,
                    s++),
                    r[n] = {
                        line: e,
                        offset: i
                    },
                    s += t.graphemeLines[n].length,
                    i += t.graphemeLines[n].length;
                return r
            }
            styleHas(t, e) {
                if (this._styleMap && !this.isWrapping) {
                    const t = this._styleMap[e];
                    t && (e = t.line)
                }
                return super.styleHas(t, e)
            }
            isEmptyStyles(t) {
                if (!this.styles)
                    return !0;
                let e, i = 0, s = t + 1, r = !1;
                const n = this._styleMap[t]
                  , o = this._styleMap[t + 1];
                n && (t = n.line,
                i = n.offset),
                o && (s = o.line,
                r = s === t,
                e = o.offset);
                const a = void 0 === t ? this.styles : {
                    line: this.styles[t]
                };
                for (const t in a)
                    for (const s in a[t]) {
                        const n = parseInt(s, 10);
                        if (n >= i && (!r || n < e))
                            for (const e in a[t][s])
                                return !1
                    }
                return !0
            }
            _getStyleDeclaration(t, e) {
                if (this._styleMap && !this.isWrapping) {
                    const i = this._styleMap[t];
                    if (!i)
                        return {};
                    t = i.line,
                    e = i.offset + e
                }
                return super._getStyleDeclaration(t, e)
            }
            _setStyleDeclaration(t, e, i) {
                const s = this._styleMap[t];
                t = s.line,
                e = s.offset + e,
                this.styles[t][e] = i
            }
            _deleteStyleDeclaration(t, e) {
                const i = this._styleMap[t];
                t = i.line,
                e = i.offset + e,
                delete this.styles[t][e]
            }
            _getLineStyle(t) {
                const e = this._styleMap[t];
                return !!this.styles[e.line]
            }
            _setLineStyle(t) {
                const e = this._styleMap[t];
                this.styles[e.line] = {}
            }
            _wrapText(t, e) {
                this.isWrapping = !0;
                const i = this.getGraphemeDataForRender(t)
                  , s = [];
                for (let t = 0; t < i.wordsData.length; t++)
                    s.push(...this._wrapLine(t, e, i));
                return this.isWrapping = !1,
                s
            }
            getGraphemeDataForRender(t) {
                const e = this.splitByGrapheme
                  , i = e ? "" : " ";
                let s = 0;
                return {
                    wordsData: t.map(((t,r)=>{
                        let n = 0;
                        const o = e ? this.graphemeSplit(t) : this.wordSplit(t);
                        return 0 === o.length ? [{
                            word: [],
                            width: 0
                        }] : o.map((t=>{
                            const o = e ? [t] : this.graphemeSplit(t)
                              , a = this._measureWord(o, r, n);
                            return s = Math.max(a, s),
                            n += o.length + i.length,
                            {
                                word: o,
                                width: a
                            }
                        }
                        ))
                    }
                    )),
                    largestWordWidth: s
                }
            }
            _measureWord(t, e) {
                let i, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = 0;
                for (let n = 0, o = t.length; n < o; n++)
                    r += this._getGraphemeBox(t[n], e, n + s, i, !0).kernedWidth,
                    i = t[n];
                return r
            }
            wordSplit(t) {
                return t.split(this._wordJoiners)
            }
            _wrapLine(t, e, i) {
                let {largestWordWidth: s, wordsData: r} = i
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                const o = this._getWidthOfCharSpacing()
                  , a = this.splitByGrapheme
                  , h = []
                  , c = a ? "" : " ";
                let l = 0
                  , d = []
                  , u = 0
                  , g = 0
                  , f = !0;
                e -= n;
                const p = Math.max(e, s, this.dynamicMinWidth)
                  , m = r[t];
                let v;
                for (u = 0,
                v = 0; v < m.length; v++) {
                    const {word: e, width: i} = m[v];
                    u += e.length,
                    l += g + i - o,
                    l > p && !f ? (h.push(d),
                    d = [],
                    l = i,
                    f = !0) : l += o,
                    f || a || d.push(c),
                    d = d.concat(e),
                    g = a ? 0 : this._measureWord([c], t, u),
                    u++,
                    f = !1
                }
                return v && h.push(d),
                s + n > this.dynamicMinWidth && (this.dynamicMinWidth = s - o + n),
                h
            }
            isEndOfWrapping(t) {
                return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line
            }
            missingNewlineOffset(t, e) {
                return this.splitByGrapheme && !e ? this.isEndOfWrapping(t) ? 1 : 0 : 1
            }
            _splitTextIntoLines(t) {
                const e = super._splitTextIntoLines(t)
                  , i = this._wrapText(e.lines, this.width)
                  , s = new Array(i.length);
                for (let t = 0; t < i.length; t++)
                    s[t] = i[t].join("");
                return e.lines = s,
                e.graphemeLines = i,
                e
            }
            getMinWidth() {
                return Math.max(this.minWidth, this.dynamicMinWidth)
            }
            _removeExtraneousStyles() {
                const t = new Map;
                for (const e in this._styleMap) {
                    const i = parseInt(e, 10);
                    if (this._textLines[i]) {
                        const i = this._styleMap[e].line;
                        t.set("".concat(i), !0)
                    }
                }
                for (const e in this.styles)
                    t.has(e) || delete this.styles[e]
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return super.toObject(["minWidth", "splitByGrapheme", ...t])
            }
        }
        s(Tn, "type", "Textbox"),
        s(Tn, "textLayoutProperties", [...Sn.textLayoutProperties, "width"]),
        s(Tn, "ownDefaults", {
            minWidth: 20,
            dynamicMinWidth: 2,
            lockScalingFlip: !0,
            noScaleCache: !1,
            _wordJoiners: /[ \t\r]/,
            splitByGrapheme: !1
        }),
        I.setClass(Tn);
        class On {
            constructor() {
                s(this, "resources", {})
            }
            applyFilters(t, e, i, s, r) {
                const n = r.getContext("2d");
                if (!n)
                    return;
                n.drawImage(e, 0, 0, i, s);
                const o = {
                    sourceWidth: i,
                    sourceHeight: s,
                    imageData: n.getImageData(0, 0, i, s),
                    originalEl: e,
                    originalImageData: n.getImageData(0, 0, i, s),
                    canvasEl: r,
                    ctx: n,
                    filterBackend: this
                };
                t.forEach((t=>{
                    t.applyTo(o)
                }
                ));
                const {imageData: a} = o;
                return a.width === i && a.height === s || (r.width = a.width,
                r.height = a.height),
                n.putImageData(a, 0, 0),
                o
            }
        }
        class kn {
            constructor() {
                let {tileSize: t=h.textureSize} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])),
                s(this, "resources", {}),
                this.tileSize = t,
                this.setupGLContext(t, t),
                this.captureGPUInfo()
            }
            setupGLContext(t, e) {
                this.dispose(),
                this.createWebGLCanvas(t, e),
                this.chooseFastestCopyGLTo2DMethod(t, e)
            }
            chooseFastestCopyGLTo2DMethod(t, e) {
                const i = $()
                  , s = new ArrayBuffer(t * e * 4);
                if (h.forceGLPutImageData)
                    return this.imageBuffer = s,
                    void (this.copyGLTo2D = Dn);
                const r = {
                    imageBuffer: s
                }
                  , n = {
                    destinationWidth: t,
                    destinationHeight: e,
                    targetCanvas: i
                };
                let o;
                i.width = t,
                i.height = e,
                o = x().performance.now(),
                this.copyGLTo2D.call(r, this.gl, n);
                const a = x().performance.now() - o;
                o = x().performance.now(),
                Dn.call(r, this.gl, n),
                a > x().performance.now() - o && (this.imageBuffer = s,
                this.copyGLTo2D = Dn)
            }
            createWebGLCanvas(t, e) {
                const i = $();
                i.width = t,
                i.height = e;
                const s = i.getContext("webgl", {
                    alpha: !0,
                    premultipliedAlpha: !1,
                    depth: !1,
                    stencil: !1,
                    antialias: !1
                });
                s && (s.clearColor(0, 0, 0, 0),
                this.canvas = i,
                this.gl = s)
            }
            applyFilters(t, e, i, s, r, n) {
                const o = this.gl
                  , a = r.getContext("2d");
                if (!o || !a)
                    return;
                let h;
                n && (h = this.getCachedTexture(n, e));
                const c = {
                    originalWidth: e.width || e.originalWidth || 0,
                    originalHeight: e.height || e.originalHeight || 0,
                    sourceWidth: i,
                    sourceHeight: s,
                    destinationWidth: i,
                    destinationHeight: s,
                    context: o,
                    sourceTexture: this.createTexture(o, i, s, h ? void 0 : e),
                    targetTexture: this.createTexture(o, i, s),
                    originalTexture: h || this.createTexture(o, i, s, h ? void 0 : e),
                    passes: t.length,
                    webgl: !0,
                    aPosition: this.aPosition,
                    programCache: this.programCache,
                    pass: 0,
                    filterBackend: this,
                    targetCanvas: r
                }
                  , l = o.createFramebuffer();
                return o.bindFramebuffer(o.FRAMEBUFFER, l),
                t.forEach((t=>{
                    t && t.applyTo(c)
                }
                )),
                function(t) {
                    const e = t.targetCanvas
                      , i = e.width
                      , s = e.height
                      , r = t.destinationWidth
                      , n = t.destinationHeight;
                    i === r && s === n || (e.width = r,
                    e.height = n)
                }(c),
                this.copyGLTo2D(o, c),
                o.bindTexture(o.TEXTURE_2D, null),
                o.deleteTexture(c.sourceTexture),
                o.deleteTexture(c.targetTexture),
                o.deleteFramebuffer(l),
                a.setTransform(1, 0, 0, 1, 0, 0),
                c
            }
            dispose() {
                this.canvas && (this.canvas = null,
                this.gl = null),
                this.clearWebGLCaches()
            }
            clearWebGLCaches() {
                this.programCache = {},
                this.textureCache = {}
            }
            createTexture(t, e, i, s, r) {
                const {NEAREST: n, TEXTURE_2D: o, RGBA: a, UNSIGNED_BYTE: h, CLAMP_TO_EDGE: c, TEXTURE_MAG_FILTER: l, TEXTURE_MIN_FILTER: d, TEXTURE_WRAP_S: u, TEXTURE_WRAP_T: g} = t
                  , f = t.createTexture();
                return t.bindTexture(o, f),
                t.texParameteri(o, l, r || n),
                t.texParameteri(o, d, r || n),
                t.texParameteri(o, u, c),
                t.texParameteri(o, g, c),
                s ? t.texImage2D(o, 0, a, a, h, s) : t.texImage2D(o, 0, a, e, i, 0, a, h, null),
                f
            }
            getCachedTexture(t, e, i) {
                const {textureCache: s} = this;
                if (s[t])
                    return s[t];
                {
                    const r = this.createTexture(this.gl, e.width, e.height, e, i);
                    return r && (s[t] = r),
                    r
                }
            }
            evictCachesForKey(t) {
                this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]),
                delete this.textureCache[t])
            }
            copyGLTo2D(t, e) {
                const i = t.canvas
                  , s = e.targetCanvas
                  , r = s.getContext("2d");
                if (!r)
                    return;
                r.translate(0, s.height),
                r.scale(1, -1);
                const n = i.height - s.height;
                r.drawImage(i, 0, n, s.width, s.height, 0, 0, s.width, s.height)
            }
            captureGPUInfo() {
                if (this.gpuInfo)
                    return this.gpuInfo;
                const t = this.gl
                  , e = {
                    renderer: "",
                    vendor: ""
                };
                if (!t)
                    return e;
                const i = t.getExtension("WEBGL_debug_renderer_info");
                if (i) {
                    const s = t.getParameter(i.UNMASKED_RENDERER_WEBGL)
                      , r = t.getParameter(i.UNMASKED_VENDOR_WEBGL);
                    s && (e.renderer = s.toLowerCase()),
                    r && (e.vendor = r.toLowerCase())
                }
                return this.gpuInfo = e,
                e
            }
        }
        function Dn(t, e) {
            const i = e.targetCanvas.getContext("2d")
              , s = e.destinationWidth
              , r = e.destinationHeight
              , n = s * r * 4;
            if (!i)
                return;
            const o = new Uint8Array(this.imageBuffer,0,n)
              , a = new Uint8ClampedArray(this.imageBuffer,0,n);
            t.readPixels(0, 0, s, r, t.RGBA, t.UNSIGNED_BYTE, o);
            const h = new ImageData(a,s,r);
            i.putImageData(h, 0, 0)
        }
        let Mn;
        function En() {
            return !Mn && (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (Mn = function() {
                const {WebGLProbe: t} = v();
                return t.queryWebGL($()),
                h.enableGLFiltering && t.isSupported(h.textureSize) ? new kn({
                    tileSize: h.textureSize
                }) : new On
            }()),
            Mn
        }
        const jn = ["filters", "resizeFilter", "src", "crossOrigin"]
          , Pn = ["cropX", "cropY"];
        class An extends Di {
            static getDefaults() {
                return e(e({}, super.getDefaults()), An.ownDefaults)
            }
            constructor(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e({
                    filters: []
                }, i)),
                s(this, "_lastScaleX", 1),
                s(this, "_lastScaleY", 1),
                s(this, "_filterScalingX", 1),
                s(this, "_filterScalingY", 1),
                this.cacheKey = "texture".concat(J()),
                this.setElement("string" == typeof t ? (this.canvas && Wt(this.canvas.getElement()) || y()).getElementById(t) : t, i)
            }
            getElement() {
                return this._element
            }
            setElement(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.removeTexture(this.cacheKey),
                this.removeTexture("".concat(this.cacheKey, "_filtered")),
                this._element = t,
                this._originalElement = t,
                this._setWidthHeight(e),
                t.classList.add(An.CSS_CANVAS),
                0 !== this.filters.length && this.applyFilters(),
                this.resizeFilter && this.applyResizeFilters()
            }
            removeTexture(t) {
                const e = En(!1);
                e instanceof kn && e.evictCachesForKey(t)
            }
            dispose() {
                super.dispose(),
                this.removeTexture(this.cacheKey),
                this.removeTexture("".concat(this.cacheKey, "_filtered")),
                this._cacheContext = null,
                ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((t=>{
                    const e = this[t];
                    e && v().dispose(e),
                    this[t] = void 0
                }
                ))
            }
            getCrossOrigin() {
                return this._originalElement && (this._originalElement.crossOrigin || null)
            }
            getOriginalSize() {
                const t = this.getElement();
                return t ? {
                    width: t.naturalWidth || t.width,
                    height: t.naturalHeight || t.height
                } : {
                    width: 0,
                    height: 0
                }
            }
            _stroke(t) {
                if (!this.stroke || 0 === this.strokeWidth)
                    return;
                const e = this.width / 2
                  , i = this.height / 2;
                t.beginPath(),
                t.moveTo(-e, -i),
                t.lineTo(e, -i),
                t.lineTo(e, i),
                t.lineTo(-e, i),
                t.lineTo(-e, -i),
                t.closePath()
            }
            toObject() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                const i = [];
                return this.filters.forEach((t=>{
                    t && i.push(t.toObject())
                }
                )),
                e(e({}, super.toObject([...Pn, ...t])), {}, {
                    src: this.getSrc(),
                    crossOrigin: this.getCrossOrigin(),
                    filters: i
                }, this.resizeFilter ? {
                    resizeFilter: this.resizeFilter.toObject()
                } : {})
            }
            hasCrop() {
                return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height
            }
            _toSVG() {
                const t = []
                  , e = this._element
                  , i = -this.width / 2
                  , s = -this.height / 2;
                let r = []
                  , n = []
                  , o = ""
                  , a = "";
                if (!e)
                    return [];
                if (this.hasCrop()) {
                    const t = J();
                    r.push('<clipPath id="imageCrop_' + t + '">\n', '\t<rect x="' + i + '" y="' + s + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"),
                    o = ' clip-path="url(#imageCrop_' + t + ')" '
                }
                if (this.imageSmoothing || (a = ' image-rendering="optimizeSpeed"'),
                t.push("\t<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(!0), '" x="').concat(i - this.cropX, '" y="').concat(s - this.cropY, '" width="').concat(e.width || e.naturalWidth, '" height="').concat(e.height || e.naturalHeight, '"').concat(a).concat(o, "></image>\n")),
                this.stroke || this.strokeDashArray) {
                    const t = this.fill;
                    this.fill = null,
                    n = ['\t<rect x="'.concat(i, '" y="').concat(s, '" width="').concat(this.width, '" height="').concat(this.height, '" styles="').concat(this.getSvgStyles(), '" />\n')],
                    this.fill = t
                }
                return r = "fill" !== this.paintFirst ? r.concat(n, t) : r.concat(t, n),
                r
            }
            getSrc(t) {
                const e = t ? this._element : this._originalElement;
                return e ? e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") || "" : e.src : this.src || ""
            }
            getSvgSrc(t) {
                return this.getSrc(t)
            }
            setSrc(t) {
                let {crossOrigin: e, signal: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return pt(t, {
                    crossOrigin: e,
                    signal: i
                }).then((t=>{
                    void 0 !== e && this.set({
                        crossOrigin: e
                    }),
                    this.setElement(t)
                }
                ))
            }
            toString() {
                return '#<Image: { src: "'.concat(this.getSrc(), '" }>')
            }
            applyResizeFilters() {
                const t = this.resizeFilter
                  , e = this.minimumScaleTrigger
                  , i = this.getTotalObjectScaling()
                  , s = i.x
                  , r = i.y
                  , n = this._filteredEl || this._originalElement;
                if (this.group && this.set("dirty", !0),
                !t || s > e && r > e)
                    return this._element = n,
                    this._filterScalingX = 1,
                    this._filterScalingY = 1,
                    this._lastScaleX = s,
                    void (this._lastScaleY = r);
                const o = $()
                  , a = n.width
                  , h = n.height;
                o.width = a,
                o.height = h,
                this._element = o,
                this._lastScaleX = t.scaleX = s,
                this._lastScaleY = t.scaleY = r,
                En().applyFilters([t], n, a, h, this._element),
                this._filterScalingX = o.width / this._originalElement.width,
                this._filterScalingY = o.height / this._originalElement.height
            }
            applyFilters() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
                if (t = t.filter((t=>t && !t.isNeutralState())),
                this.set("dirty", !0),
                this.removeTexture("".concat(this.cacheKey, "_filtered")),
                0 === t.length)
                    return this._element = this._originalElement,
                    this._filteredEl = void 0,
                    this._filterScalingX = 1,
                    void (this._filterScalingY = 1);
                const e = this._originalElement
                  , i = e.naturalWidth || e.width
                  , s = e.naturalHeight || e.height;
                if (this._element === this._originalElement) {
                    const t = $();
                    t.width = i,
                    t.height = s,
                    this._element = t,
                    this._filteredEl = t
                } else
                    this._filteredEl && (this._element = this._filteredEl,
                    this._filteredEl.getContext("2d").clearRect(0, 0, i, s),
                    this._lastScaleX = 1,
                    this._lastScaleY = 1);
                En().applyFilters(t, this._originalElement, i, s, this._element),
                this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width,
                this._filterScalingY = this._element.height / this._originalElement.height)
            }
            _render(t) {
                t.imageSmoothingEnabled = this.imageSmoothing,
                !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(),
                this._stroke(t),
                this._renderPaintInOrder(t)
            }
            drawCacheOnCanvas(t) {
                t.imageSmoothingEnabled = this.imageSmoothing,
                super.drawCacheOnCanvas(t)
            }
            shouldCache() {
                return this.needsItsOwnCache()
            }
            _renderFill(t) {
                const e = this._element;
                if (!e)
                    return;
                const i = this._filterScalingX
                  , s = this._filterScalingY
                  , r = this.width
                  , n = this.height
                  , o = Math.max(this.cropX, 0)
                  , a = Math.max(this.cropY, 0)
                  , h = e.naturalWidth || e.width
                  , c = e.naturalHeight || e.height
                  , l = o * i
                  , d = a * s
                  , u = Math.min(r * i, h - l)
                  , g = Math.min(n * s, c - d)
                  , f = -r / 2
                  , p = -n / 2
                  , m = Math.min(r, h / i - o)
                  , v = Math.min(n, c / s - a);
                e && t.drawImage(e, l, d, u, g, f, p, m, v)
            }
            _needsResize() {
                const t = this.getTotalObjectScaling();
                return t.x !== this._lastScaleX || t.y !== this._lastScaleY
            }
            _resetWidthHeight() {
                this.set(this.getOriginalSize())
            }
            _setWidthHeight() {
                let {width: t, height: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const i = this.getOriginalSize();
                this.width = t || i.width,
                this.height = e || i.height
            }
            parsePreserveAspectRatioAttribute() {
                const t = (t=>{
                    const [e,i] = t.trim().split(" ")
                      , [s,r] = (n = e) && n !== L ? [n.slice(1, 4), n.slice(5, 8)] : n === L ? [n, n] : ["Mid", "Mid"];
                    var n;
                    return {
                        meetOrSlice: i || "meet",
                        alignX: s,
                        alignY: r
                    }
                }
                )(this.preserveAspectRatio || "")
                  , e = this.width
                  , i = this.height
                  , s = {
                    width: e,
                    height: i
                };
                let r, n = this._element.width, o = this._element.height, a = 1, h = 1, c = 0, l = 0, d = 0, u = 0;
                return !t || t.alignX === L && t.alignY === L ? (a = e / n,
                h = i / o) : ("meet" === t.meetOrSlice && (g = this._element,
                f = s,
                a = h = Math.min(f.width / g.width, f.height / g.height),
                r = (e - n * a) / 2,
                "Min" === t.alignX && (c = -r),
                "Max" === t.alignX && (c = r),
                r = (i - o * h) / 2,
                "Min" === t.alignY && (l = -r),
                "Max" === t.alignY && (l = r)),
                "slice" === t.meetOrSlice && (a = h = ((t,e)=>Math.max(e.width / t.width, e.height / t.height))(this._element, s),
                r = n - e / a,
                "Mid" === t.alignX && (d = r / 2),
                "Max" === t.alignX && (d = r),
                r = o - i / h,
                "Mid" === t.alignY && (u = r / 2),
                "Max" === t.alignY && (u = r),
                n = e / a,
                o = i / h)),
                {
                    width: n,
                    height: o,
                    scaleX: a,
                    scaleY: h,
                    offsetLeft: c,
                    offsetTop: l,
                    cropX: d,
                    cropY: u
                };
                var g, f
            }
            static fromObject(t) {
                let {filters: i, resizeFilter: s, src: n, crossOrigin: o} = t
                  , a = r(t, jn)
                  , h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Promise.all([pt(n, e(e({}, h), {}, {
                    crossOrigin: o
                })), i && mt(i, h), s && mt([s], h), vt(a, h)]).then((t=>{
                    let[i,s=[],[r]=[],o={}] = t;
                    return new this(i,e(e({}, a), {}, {
                        src: n,
                        filters: s,
                        resizeFilter: r
                    }, o))
                }
                ))
            }
            static fromURL(t) {
                let {crossOrigin: e=null, signal: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = arguments.length > 2 ? arguments[2] : void 0;
                return pt(t, {
                    crossOrigin: e,
                    signal: i
                }).then((t=>new this(t,s)))
            }
            static async fromElement(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                const s = ds(t, this.ATTRIBUTE_NAMES, i);
                return this.fromURL(s["xlink:href"], e, s).catch((t=>(c("log", "Unable to parse Image", t),
                null)))
            }
        }
        s(An, "type", "Image"),
        s(An, "cacheProperties", [...Ze, ...Pn]),
        s(An, "ownDefaults", {
            strokeWidth: 0,
            srcFromAttribute: !1,
            minimumScaleTrigger: .5,
            cropX: 0,
            cropY: 0,
            imageSmoothing: !0
        }),
        s(An, "CSS_CANVAS", "canvas-img"),
        s(An, "ATTRIBUTE_NAMES", [...Mi, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "crossOrigin", "image-rendering"]),
        I.setClass(An),
        I.setSVGClass(An);
        class Ln extends An {
        }
        Ei(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);
        const Fn = t=>void 0 !== t.webgl
          , Bn = "precision highp float"
          , Rn = "\n    ".concat(Bn, ";\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }")
          , In = ["type"]
          , Wn = ["type"];
        class Xn {
            get type() {
                return this.constructor.type
            }
            constructor() {
                let t = r(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, In);
                s(this, "vertexSource", "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }"),
                Object.assign(this, this.constructor.defaults, t)
            }
            getFragmentSource() {
                return Rn
            }
            createProgram(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource()
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.vertexSource;
                const {WebGLProbe: {GLPrecision: s="highp"}} = v();
                "highp" !== s && (e = e.replace(new RegExp(Bn,"g"), Bn.replace("highp", s)));
                const r = t.createShader(t.VERTEX_SHADER)
                  , n = t.createShader(t.FRAGMENT_SHADER)
                  , o = t.createProgram();
                if (!r || !n || !o)
                    throw new l("Vertex, fragment shader or program creation error");
                if (t.shaderSource(r, i),
                t.compileShader(r),
                !t.getShaderParameter(r, t.COMPILE_STATUS))
                    throw new l("Vertex shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(r)));
                if (t.shaderSource(n, e),
                t.compileShader(n),
                !t.getShaderParameter(n, t.COMPILE_STATUS))
                    throw new l("Fragment shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(n)));
                if (t.attachShader(o, r),
                t.attachShader(o, n),
                t.linkProgram(o),
                !t.getProgramParameter(o, t.LINK_STATUS))
                    throw new l('Shader link error for "'.concat(this.type, '" ').concat(t.getProgramInfoLog(o)));
                const a = this.getUniformLocations(t, o) || {};
                return a.uStepW = t.getUniformLocation(o, "uStepW"),
                a.uStepH = t.getUniformLocation(o, "uStepH"),
                {
                    program: o,
                    attributeLocations: this.getAttributeLocations(t, o),
                    uniformLocations: a
                }
            }
            getAttributeLocations(t, e) {
                return {
                    aPosition: t.getAttribLocation(e, "aPosition")
                }
            }
            getUniformLocations(t, e) {
                return {}
            }
            sendAttributeData(t, e, i) {
                const s = e.aPosition
                  , r = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, r),
                t.enableVertexAttribArray(s),
                t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0),
                t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW)
            }
            _setupFrameBuffer(t) {
                const e = t.context;
                if (t.passes > 1) {
                    const i = t.destinationWidth
                      , s = t.destinationHeight;
                    t.sourceWidth === i && t.sourceHeight === s || (e.deleteTexture(t.targetTexture),
                    t.targetTexture = t.filterBackend.createTexture(e, i, s)),
                    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.targetTexture, 0)
                } else
                    e.bindFramebuffer(e.FRAMEBUFFER, null),
                    e.finish()
            }
            _swapTextures(t) {
                t.passes--,
                t.pass++;
                const e = t.targetTexture;
                t.targetTexture = t.sourceTexture,
                t.sourceTexture = e
            }
            isNeutralState(t) {
                const e = this.mainParameter
                  , i = this.constructor.defaults[e];
                if (e) {
                    const t = this[e];
                    return Array.isArray(i) && Array.isArray(t) ? i.every(((e,i)=>e === t[i])) : i === t
                }
                return !1
            }
            applyTo(t) {
                Fn(t) ? (this._setupFrameBuffer(t),
                this.applyToWebGL(t),
                this._swapTextures(t)) : this.applyTo2d(t)
            }
            applyTo2d(t) {}
            getCacheKey() {
                return this.type
            }
            retrieveShader(t) {
                const e = this.getCacheKey();
                return t.programCache[e] || (t.programCache[e] = this.createProgram(t.context)),
                t.programCache[e]
            }
            applyToWebGL(t) {
                const e = t.context
                  , i = this.retrieveShader(t);
                0 === t.pass && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
                e.useProgram(i.program),
                this.sendAttributeData(e, i.attributeLocations, t.aPosition),
                e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth),
                e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight),
                this.sendUniformData(e, i.uniformLocations),
                e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
                e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
            }
            bindAdditionalTexture(t, e, i) {
                t.activeTexture(i),
                t.bindTexture(t.TEXTURE_2D, e),
                t.activeTexture(t.TEXTURE0)
            }
            unbindAdditionalTexture(t, e) {
                t.activeTexture(e),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE0)
            }
            getMainParameter() {
                return this.mainParameter ? this[this.mainParameter] : void 0
            }
            setMainParameter(t) {
                this.mainParameter && (this[this.mainParameter] = t)
            }
            sendUniformData(t, e) {}
            createHelpLayer(t) {
                if (!t.helpLayer) {
                    const e = $();
                    e.width = t.sourceWidth,
                    e.height = t.sourceHeight,
                    t.helpLayer = e
                }
            }
            toObject() {
                const t = this.mainParameter;
                return e({
                    type: this.type
                }, t ? {
                    [t]: this[t]
                } : {})
            }
            toJSON() {
                return this.toObject()
            }
            static async fromObject(t, e) {
                return new this(r(t, Wn))
            }
        }
        s(Xn, "type", "BaseFilter");
        const Yn = {
            multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
            screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
            add: "gl_FragColor.rgb += uColor.rgb;\n",
            difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
            subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
            lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
            darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
            exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
            overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
            tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
        };
        class Hn extends Xn {
            getCacheKey() {
                return "".concat(this.type, "_").concat(this.mode)
            }
            getFragmentSource() {
                return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ".concat(Yn[this.mode], "\n        }\n      }\n      ")
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                const i = new Ot(this.color).getSource()
                  , s = i[0] * this.alpha
                  , r = i[1] * this.alpha
                  , n = i[2] * this.alpha
                  , o = 1 - this.alpha;
                for (let t = 0; t < e.length; t += 4) {
                    const i = e[t]
                      , a = e[t + 1]
                      , h = e[t + 2];
                    switch (this.mode) {
                    case "multiply":
                        e[t] = i * s / 255,
                        e[t + 1] = a * r / 255,
                        e[t + 2] = h * n / 255;
                        break;
                    case "screen":
                        e[t] = 255 - (255 - i) * (255 - s) / 255,
                        e[t + 1] = 255 - (255 - a) * (255 - r) / 255,
                        e[t + 2] = 255 - (255 - h) * (255 - n) / 255;
                        break;
                    case "add":
                        e[t] = i + s,
                        e[t + 1] = a + r,
                        e[t + 2] = h + n;
                        break;
                    case "difference":
                        e[t] = Math.abs(i - s),
                        e[t + 1] = Math.abs(a - r),
                        e[t + 2] = Math.abs(h - n);
                        break;
                    case "subtract":
                        e[t] = i - s,
                        e[t + 1] = a - r,
                        e[t + 2] = h - n;
                        break;
                    case "darken":
                        e[t] = Math.min(i, s),
                        e[t + 1] = Math.min(a, r),
                        e[t + 2] = Math.min(h, n);
                        break;
                    case "lighten":
                        e[t] = Math.max(i, s),
                        e[t + 1] = Math.max(a, r),
                        e[t + 2] = Math.max(h, n);
                        break;
                    case "overlay":
                        e[t] = s < 128 ? 2 * i * s / 255 : 255 - 2 * (255 - i) * (255 - s) / 255,
                        e[t + 1] = r < 128 ? 2 * a * r / 255 : 255 - 2 * (255 - a) * (255 - r) / 255,
                        e[t + 2] = n < 128 ? 2 * h * n / 255 : 255 - 2 * (255 - h) * (255 - n) / 255;
                        break;
                    case "exclusion":
                        e[t] = s + i - 2 * s * i / 255,
                        e[t + 1] = r + a - 2 * r * a / 255,
                        e[t + 2] = n + h - 2 * n * h / 255;
                        break;
                    case "tint":
                        e[t] = s + i * o,
                        e[t + 1] = r + a * o,
                        e[t + 2] = n + h * o
                    }
                }
            }
            getUniformLocations(t, e) {
                return {
                    uColor: t.getUniformLocation(e, "uColor")
                }
            }
            sendUniformData(t, e) {
                const i = new Ot(this.color).getSource();
                i[0] = this.alpha * i[0] / 255,
                i[1] = this.alpha * i[1] / 255,
                i[2] = this.alpha * i[2] / 255,
                i[3] = this.alpha,
                t.uniform4fv(e.uColor, i)
            }
            toObject() {
                return {
                    type: this.type,
                    color: this.color,
                    mode: this.mode,
                    alpha: this.alpha
                }
            }
        }
        s(Hn, "defaults", {
            color: "#F95C63",
            mode: "multiply",
            alpha: 1
        }),
        s(Hn, "type", "BlendColor"),
        I.setClass(Hn);
        const Vn = {
            multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
            mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
        }
          , zn = ["type", "image"];
        class Gn extends Xn {
            getCacheKey() {
                return "".concat(this.type, "_").concat(this.mode)
            }
            getFragmentSource() {
                return Vn[this.mode]
            }
            applyToWebGL(t) {
                const e = t.context
                  , i = this.createTexture(t.filterBackend, this.image);
                this.bindAdditionalTexture(e, i, e.TEXTURE1),
                super.applyToWebGL(t),
                this.unbindAdditionalTexture(e, e.TEXTURE1)
            }
            createTexture(t, e) {
                return t.getCachedTexture(e.cacheKey, e.getElement())
            }
            calculateMatrix() {
                const t = this.image
                  , {width: e, height: i} = t.getElement();
                return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / i, 1]
            }
            applyTo2d(t) {
                let {imageData: {data: e, width: i, height: s}, filterBackend: {resources: r}} = t;
                const n = this.image;
                r.blendImage || (r.blendImage = $());
                const o = r.blendImage
                  , a = o.getContext("2d");
                o.width !== i || o.height !== s ? (o.width = i,
                o.height = s) : a.clearRect(0, 0, i, s),
                a.setTransform(n.scaleX, 0, 0, n.scaleY, n.left, n.top),
                a.drawImage(n.getElement(), 0, 0, i, s);
                const h = a.getImageData(0, 0, i, s).data;
                for (let t = 0; t < e.length; t += 4) {
                    const i = e[t]
                      , s = e[t + 1]
                      , r = e[t + 2]
                      , n = e[t + 3]
                      , o = h[t]
                      , a = h[t + 1]
                      , c = h[t + 2]
                      , l = h[t + 3];
                    switch (this.mode) {
                    case "multiply":
                        e[t] = i * o / 255,
                        e[t + 1] = s * a / 255,
                        e[t + 2] = r * c / 255,
                        e[t + 3] = n * l / 255;
                        break;
                    case "mask":
                        e[t + 3] = l
                    }
                }
            }
            getUniformLocations(t, e) {
                return {
                    uTransformMatrix: t.getUniformLocation(e, "uTransformMatrix"),
                    uImage: t.getUniformLocation(e, "uImage")
                }
            }
            sendUniformData(t, e) {
                const i = this.calculateMatrix();
                t.uniform1i(e.uImage, 1),
                t.uniformMatrix3fv(e.uTransformMatrix, !1, i)
            }
            toObject() {
                return {
                    type: this.type,
                    image: this.image && this.image.toObject(),
                    mode: this.mode,
                    alpha: this.alpha
                }
            }
            static fromObject(t, i) {
                let {type: s, image: n} = t
                  , o = r(t, zn);
                return An.fromObject(n, i).then((t=>new this(e(e({}, o), {}, {
                    image: t
                }))))
            }
        }
        s(Gn, "type", "BlendImage"),
        s(Gn, "defaults", {
            mode: "multiply",
            alpha: 1,
            vertexSource: "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    "
        }),
        I.setClass(Gn);
        class Un extends Xn {
            getFragmentSource() {
                return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float total = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        float weight = 1.0 - abs(percent);\n        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\n        total += weight;\n      }\n      gl_FragColor = color / total;\n    }\n  "
            }
            applyTo(t) {
                Fn(t) ? (this.aspectRatio = t.sourceWidth / t.sourceHeight,
                t.passes++,
                this._setupFrameBuffer(t),
                this.horizontal = !0,
                this.applyToWebGL(t),
                this._swapTextures(t),
                this._setupFrameBuffer(t),
                this.horizontal = !1,
                this.applyToWebGL(t),
                this._swapTextures(t)) : this.applyTo2d(t)
            }
            applyTo2d(t) {
                t.imageData = this.simpleBlur(t)
            }
            simpleBlur(t) {
                let {ctx: e, imageData: i, filterBackend: {resources: s}} = t;
                const {width: r, height: n} = i;
                s.blurLayer1 || (s.blurLayer1 = $(),
                s.blurLayer2 = $());
                const o = s.blurLayer1
                  , a = s.blurLayer2;
                o.width === r && o.height === n || (a.width = o.width = r,
                a.height = o.height = n);
                const h = o.getContext("2d")
                  , c = a.getContext("2d")
                  , l = .06 * this.blur * .5;
                let d, u, g, f;
                for (h.putImageData(i, 0, 0),
                c.clearRect(0, 0, r, n),
                f = -15; f <= 15; f++)
                    d = (Math.random() - .5) / 4,
                    u = f / 15,
                    g = l * u * r + d,
                    c.globalAlpha = 1 - Math.abs(u),
                    c.drawImage(o, g, d),
                    h.drawImage(a, 0, 0),
                    c.globalAlpha = 1,
                    c.clearRect(0, 0, a.width, a.height);
                for (f = -15; f <= 15; f++)
                    d = (Math.random() - .5) / 4,
                    u = f / 15,
                    g = l * u * n + d,
                    c.globalAlpha = 1 - Math.abs(u),
                    c.drawImage(o, d, g),
                    h.drawImage(a, 0, 0),
                    c.globalAlpha = 1,
                    c.clearRect(0, 0, a.width, a.height);
                e.drawImage(o, 0, 0);
                const p = e.getImageData(0, 0, o.width, o.height);
                return h.globalAlpha = 1,
                h.clearRect(0, 0, o.width, o.height),
                p
            }
            getUniformLocations(t, e) {
                return {
                    delta: t.getUniformLocation(e, "uDelta")
                }
            }
            sendUniformData(t, e) {
                const i = this.chooseRightDelta();
                t.uniform2fv(e.delta, i)
            }
            chooseRightDelta() {
                let t = 1;
                const e = [0, 0];
                this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio);
                const i = t * this.blur * .12;
                return this.horizontal ? e[0] = i : e[1] = i,
                e
            }
        }
        s(Un, "type", "Blur"),
        s(Un, "defaults", {
            blur: 0,
            mainParameter: "blur"
        }),
        I.setClass(Un);
        class Nn extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                if (0 === this.brightness)
                    return;
                const i = Math.round(255 * this.brightness);
                for (let t = 0; t < e.length; t += 4)
                    e[t] = e[t] + i,
                    e[t + 1] = e[t + 1] + i,
                    e[t + 2] = e[t + 2] + i
            }
            getUniformLocations(t, e) {
                return {
                    uBrightness: t.getUniformLocation(e, "uBrightness")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uBrightness, this.brightness)
            }
        }
        s(Nn, "type", "Brightness"),
        s(Nn, "defaults", {
            brightness: 0,
            mainParameter: "brightness"
        }),
        I.setClass(Nn);
        const qn = ["matrix"]
          , Zn = {
            matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            mainParameter: "matrix",
            colorsOnly: !0
        };
        class Kn extends Xn {
            setOptions(t) {
                let {matrix: e} = t
                  , i = r(t, qn);
                e && (this.matrix = [...e]),
                Object.assign(this, i)
            }
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }"
            }
            applyTo2d(t) {
                const e = t.imageData.data
                  , i = this.matrix
                  , s = this.colorsOnly;
                for (let t = 0; t < e.length; t += 4) {
                    const r = e[t]
                      , n = e[t + 1]
                      , o = e[t + 2];
                    if (s)
                        e[t] = r * i[0] + n * i[1] + o * i[2] + 255 * i[4],
                        e[t + 1] = r * i[5] + n * i[6] + o * i[7] + 255 * i[9],
                        e[t + 2] = r * i[10] + n * i[11] + o * i[12] + 255 * i[14];
                    else {
                        const s = e[t + 3];
                        e[t] = r * i[0] + n * i[1] + o * i[2] + s * i[3] + 255 * i[4],
                        e[t + 1] = r * i[5] + n * i[6] + o * i[7] + s * i[8] + 255 * i[9],
                        e[t + 2] = r * i[10] + n * i[11] + o * i[12] + s * i[13] + 255 * i[14],
                        e[t + 3] = r * i[15] + n * i[16] + o * i[17] + s * i[18] + 255 * i[19]
                    }
                }
            }
            getUniformLocations(t, e) {
                return {
                    uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                    uConstants: t.getUniformLocation(e, "uConstants")
                }
            }
            sendUniformData(t, e) {
                const i = this.matrix
                  , s = [i[0], i[1], i[2], i[3], i[5], i[6], i[7], i[8], i[10], i[11], i[12], i[13], i[15], i[16], i[17], i[18]]
                  , r = [i[4], i[9], i[14], i[19]];
                t.uniformMatrix4fv(e.uColorMatrix, !1, s),
                t.uniform4fv(e.uConstants, r)
            }
        }
        function Jn(t, i) {
            var r;
            const n = (s(r = class extends Kn {
            }
            , "type", t),
            s(r, "defaults", e(e({}, Zn), {}, {
                mainParameter: void 0,
                matrix: i
            })),
            r);
            return I.setClass(n, t),
            n
        }
        s(Kn, "type", "ColorMatrix"),
        s(Kn, "defaults", Zn),
        I.setClass(Kn),
        Jn("Brownie", [.5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0]),
        Jn("Vintage", [.62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0]),
        Jn("Kodachrome", [1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0]),
        Jn("Technicolor", [1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0]),
        Jn("Polaroid", [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0]),
        Jn("Sepia", [.393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0]),
        Jn("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]);
        const $n = ["subFilters"];
        class Qn extends Xn {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , {subFilters: e=[]} = t;
                super(r(t, $n)),
                this.subFilters = e
            }
            applyTo(t) {
                Fn(t) && (t.passes += this.subFilters.length - 1),
                this.subFilters.forEach((e=>{
                    e.applyTo(t)
                }
                ))
            }
            toObject() {
                return e(e({}, super.toObject()), {}, {
                    subFilters: this.subFilters.map((t=>t.toObject()))
                })
            }
            isNeutralState() {
                return !this.subFilters.some((t=>!t.isNeutralState()))
            }
            static fromObject(t, e) {
                return Promise.all((t.subFilters || []).map((t=>I.getClass(t.type).fromObject(t, e)))).then((t=>new this({
                    subFilters: t
                })))
            }
        }
        s(Qn, "type", "Composed"),
        I.setClass(Qn);
        class to extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                if (0 === this.contrast)
                    return;
                const i = Math.floor(255 * this.contrast)
                  , s = 259 * (i + 255) / (255 * (259 - i));
                for (let t = 0; t < e.length; t += 4)
                    e[t] = s * (e[t] - 128) + 128,
                    e[t + 1] = s * (e[t + 1] - 128) + 128,
                    e[t + 2] = s * (e[t + 2] - 128) + 128
            }
            getUniformLocations(t, e) {
                return {
                    uContrast: t.getUniformLocation(e, "uContrast")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uContrast, this.contrast)
            }
        }
        s(to, "type", "Contrast"),
        s(to, "defaults", {
            contrast: 0,
            mainParameter: "contrast"
        }),
        I.setClass(to);
        const eo = {
            Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
            Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
            Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
            Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
            Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
            Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
            Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
            Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
        };
        class io extends Xn {
            getCacheKey() {
                return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(this.opaque ? 1 : 0)
            }
            getFragmentSource() {
                return eo[this.getCacheKey()]
            }
            applyTo2d(t) {
                const e = t.imageData
                  , i = e.data
                  , s = this.matrix
                  , r = Math.round(Math.sqrt(s.length))
                  , n = Math.floor(r / 2)
                  , o = e.width
                  , a = e.height
                  , h = t.ctx.createImageData(o, a)
                  , c = h.data
                  , l = this.opaque ? 1 : 0;
                let d, u, g, f, p, m, v, y, x, _, b, w, C;
                for (b = 0; b < a; b++)
                    for (_ = 0; _ < o; _++) {
                        for (p = 4 * (b * o + _),
                        d = 0,
                        u = 0,
                        g = 0,
                        f = 0,
                        C = 0; C < r; C++)
                            for (w = 0; w < r; w++)
                                v = b + C - n,
                                m = _ + w - n,
                                v < 0 || v >= a || m < 0 || m >= o || (y = 4 * (v * o + m),
                                x = s[C * r + w],
                                d += i[y] * x,
                                u += i[y + 1] * x,
                                g += i[y + 2] * x,
                                l || (f += i[y + 3] * x));
                        c[p] = d,
                        c[p + 1] = u,
                        c[p + 2] = g,
                        c[p + 3] = l ? i[p + 3] : f
                    }
                t.imageData = h
            }
            getUniformLocations(t, e) {
                return {
                    uMatrix: t.getUniformLocation(e, "uMatrix"),
                    uOpaque: t.getUniformLocation(e, "uOpaque"),
                    uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                    uSize: t.getUniformLocation(e, "uSize")
                }
            }
            sendUniformData(t, e) {
                t.uniform1fv(e.uMatrix, this.matrix)
            }
            toObject() {
                return e(e({}, super.toObject()), {}, {
                    opaque: this.opaque,
                    matrix: [...this.matrix]
                })
            }
        }
        s(io, "type", "Convolute"),
        s(io, "defaults", {
            opaque: !1,
            matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0]
        }),
        I.setClass(io);
        const so = ["gamma"];
        class ro extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n"
            }
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , {gamma: e=[1, 1, 1]} = t;
                super(r(t, so)),
                this.gamma = e
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                const i = this.gamma
                  , s = 1 / i[0]
                  , r = 1 / i[1]
                  , n = 1 / i[2];
                this.rgbValues || (this.rgbValues = {
                    r: new Uint8Array(256),
                    g: new Uint8Array(256),
                    b: new Uint8Array(256)
                });
                const o = this.rgbValues;
                for (let t = 0; t < 256; t++)
                    o.r[t] = 255 * Math.pow(t / 255, s),
                    o.g[t] = 255 * Math.pow(t / 255, r),
                    o.b[t] = 255 * Math.pow(t / 255, n);
                for (let t = 0; t < e.length; t += 4)
                    e[t] = o.r[e[t]],
                    e[t + 1] = o.g[e[t + 1]],
                    e[t + 2] = o.b[e[t + 2]]
            }
            getUniformLocations(t, e) {
                return {
                    uGamma: t.getUniformLocation(e, "uGamma")
                }
            }
            sendUniformData(t, e) {
                t.uniform3fv(e.uGamma, this.gamma)
            }
        }
        s(ro, "type", "Gamma"),
        s(ro, "defaults", {
            mainParameter: "gamma",
            gamma: [1, 1, 1]
        }),
        I.setClass(ro);
        const no = {
            average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
            lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
            luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
        };
        class oo extends Xn {
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                for (let t, i = 0; i < e.length; i += 4) {
                    switch (this.mode) {
                    case "average":
                        t = (e[i] + e[i + 1] + e[i + 2]) / 3;
                        break;
                    case "lightness":
                        t = (Math.min(e[i], e[i + 1], e[i + 2]) + Math.max(e[i], e[i + 1], e[i + 2])) / 2;
                        break;
                    case "luminosity":
                        t = .21 * e[i] + .72 * e[i + 1] + .07 * e[i + 2]
                    }
                    e[i] = t,
                    e[i + 1] = t,
                    e[i + 2] = t
                }
            }
            getCacheKey() {
                return "".concat(this.type, "_").concat(this.mode)
            }
            getFragmentSource() {
                return no[this.mode]
            }
            getUniformLocations(t, e) {
                return {
                    uMode: t.getUniformLocation(e, "uMode")
                }
            }
            sendUniformData(t, e) {
                t.uniform1i(e.uMode, 1)
            }
            isNeutralState() {
                return !1
            }
        }
        s(oo, "type", "Grayscale"),
        s(oo, "defaults", {
            mode: "average",
            mainParameter: "mode"
        }),
        I.setClass(oo);
        class ao extends Kn {
            calculateMatrix() {
                const t = this.rotation * Math.PI
                  , e = V(t)
                  , i = z(t)
                  , s = 1 / 3
                  , r = Math.sqrt(s) * i
                  , n = 1 - e;
                this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                this.matrix[0] = e + n / 3,
                this.matrix[1] = s * n - r,
                this.matrix[2] = s * n + r,
                this.matrix[5] = s * n + r,
                this.matrix[6] = e + s * n,
                this.matrix[7] = s * n - r,
                this.matrix[10] = s * n - r,
                this.matrix[11] = s * n + r,
                this.matrix[12] = e + s * n
            }
            isNeutralState() {
                return this.calculateMatrix(),
                super.isNeutralState()
            }
            applyTo(t) {
                this.calculateMatrix(),
                super.applyTo(t)
            }
        }
        s(ao, "type", "HueRotation"),
        s(ao, "defaults", {
            rotation: 0,
            mainParameter: "rotation"
        }),
        I.setClass(ao);
        class ho extends Xn {
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                for (let t = 0; t < e.length; t += 4)
                    e[t] = 255 - e[t],
                    e[t + 1] = 255 - e[t + 1],
                    e[t + 2] = 255 - e[t + 2],
                    this.alpha && (e[t + 3] = 255 - e[t + 3])
            }
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n"
            }
            isNeutralState() {
                return !this.invert
            }
            getUniformLocations(t, e) {
                return {
                    uInvert: t.getUniformLocation(e, "uInvert"),
                    uAlpha: t.getUniformLocation(e, "uAlpha")
                }
            }
            sendUniformData(t, e) {
                t.uniform1i(e.uInvert, Number(this.invert)),
                t.uniform1i(e.uAlpha, Number(this.alpha))
            }
        }
        s(ho, "type", "Invert"),
        s(ho, "defaults", {
            alpha: !1,
            invert: !0,
            mainParameter: "invert"
        }),
        I.setClass(ho);
        class co extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                if (0 === this.noise)
                    return;
                const i = this.noise;
                for (let t = 0; t < e.length; t += 4) {
                    const s = (.5 - Math.random()) * i;
                    e[t] += s,
                    e[t + 1] += s,
                    e[t + 2] += s
                }
            }
            getUniformLocations(t, e) {
                return {
                    uNoise: t.getUniformLocation(e, "uNoise"),
                    uSeed: t.getUniformLocation(e, "uSeed")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uNoise, this.noise / 255),
                t.uniform1f(e.uSeed, Math.random())
            }
            toObject() {
                return e(e({}, super.toObject()), {}, {
                    noise: this.noise
                })
            }
        }
        s(co, "type", "Noise"),
        s(co, "defaults", {
            mainParameter: "noise",
            noise: 0
        }),
        I.setClass(co);
        class lo extends Xn {
            applyTo2d(t) {
                let {imageData: {data: e, width: i, height: s}} = t;
                for (let t = 0; t < s; t += this.blocksize)
                    for (let r = 0; r < i; r += this.blocksize) {
                        const n = 4 * t * i + 4 * r
                          , o = e[n]
                          , a = e[n + 1]
                          , h = e[n + 2]
                          , c = e[n + 3];
                        for (let n = t; n < Math.min(t + this.blocksize, s); n++)
                            for (let t = r; t < Math.min(r + this.blocksize, i); t++) {
                                const s = 4 * n * i + 4 * t;
                                e[s] = o,
                                e[s + 1] = a,
                                e[s + 2] = h,
                                e[s + 3] = c
                            }
                    }
            }
            isNeutralState() {
                return 1 === this.blocksize
            }
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepW;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n"
            }
            getUniformLocations(t, e) {
                return {
                    uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                    uStepW: t.getUniformLocation(e, "uStepW"),
                    uStepH: t.getUniformLocation(e, "uStepH")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uBlocksize, this.blocksize)
            }
        }
        s(lo, "type", "Pixelate"),
        s(lo, "defaults", {
            blocksize: 4,
            mainParameter: "blocksize"
        }),
        I.setClass(lo);
        class uo extends Xn {
            getFragmentShader() {
                return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                const i = 255 * this.distance
                  , s = new Ot(this.color).getSource()
                  , r = [s[0] - i, s[1] - i, s[2] - i]
                  , n = [s[0] + i, s[1] + i, s[2] + i];
                for (let t = 0; t < e.length; t += 4) {
                    const i = e[t]
                      , s = e[t + 1]
                      , o = e[t + 2];
                    i > r[0] && s > r[1] && o > r[2] && i < n[0] && s < n[1] && o < n[2] && (e[t + 3] = 0)
                }
            }
            getUniformLocations(t, e) {
                return {
                    uLow: t.getUniformLocation(e, "uLow"),
                    uHigh: t.getUniformLocation(e, "uHigh")
                }
            }
            sendUniformData(t, e) {
                const i = new Ot(this.color).getSource()
                  , s = this.distance
                  , r = [0 + i[0] / 255 - s, 0 + i[1] / 255 - s, 0 + i[2] / 255 - s, 1]
                  , n = [i[0] / 255 + s, i[1] / 255 + s, i[2] / 255 + s, 1];
                t.uniform4fv(e.uLow, r),
                t.uniform4fv(e.uHigh, n)
            }
            toObject() {
                return e(e({}, super.toObject()), {}, {
                    color: this.color,
                    distance: this.distance
                })
            }
        }
        s(uo, "type", "RemoveColor"),
        s(uo, "defaults", {
            color: "#FFFFFF",
            distance: .02,
            useAlpha: !1
        }),
        I.setClass(uo);
        class go extends Xn {
            getUniformLocations(t, e) {
                return {
                    uDelta: t.getUniformLocation(e, "uDelta"),
                    uTaps: t.getUniformLocation(e, "uTaps")
                }
            }
            sendUniformData(t, e) {
                t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]),
                t.uniform1fv(e.uTaps, this.taps)
            }
            getFilterWindow() {
                const t = this.tempScale;
                return Math.ceil(this.lanczosLobes / t)
            }
            getCacheKey() {
                const t = this.getFilterWindow();
                return "".concat(this.type, "_").concat(t)
            }
            getFragmentSource() {
                const t = this.getFilterWindow();
                return this.generateShader(t)
            }
            getTaps() {
                const t = this.lanczosCreate(this.lanczosLobes)
                  , e = this.tempScale
                  , i = this.getFilterWindow()
                  , s = new Array(i);
                for (let r = 1; r <= i; r++)
                    s[r - 1] = t(r * e);
                return s
            }
            generateShader(t) {
                const e = new Array(t);
                for (let i = 1; i <= t; i++)
                    e[i - 1] = "".concat(i, ".0 * uDelta");
                return "\n      ".concat(this.fragmentSourceTOP, "\n      uniform float uTaps[").concat(t, "];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ").concat(e.map(((t,e)=>"\n              color += texture2D(uTexture, vTexCoord + ".concat(t, ") * uTaps[").concat(e, "] + texture2D(uTexture, vTexCoord - ").concat(t, ") * uTaps[").concat(e, "];\n              sum += 2.0 * uTaps[").concat(e, "];\n            "))).join("\n"), "\n        gl_FragColor = color / sum;\n      }\n    ")
            }
            applyToForWebgl(t) {
                t.passes++,
                this.width = t.sourceWidth,
                this.horizontal = !0,
                this.dW = Math.round(this.width * this.scaleX),
                this.dH = t.sourceHeight,
                this.tempScale = this.dW / this.width,
                this.taps = this.getTaps(),
                t.destinationWidth = this.dW,
                super.applyTo(t),
                t.sourceWidth = t.destinationWidth,
                this.height = t.sourceHeight,
                this.horizontal = !1,
                this.dH = Math.round(this.height * this.scaleY),
                this.tempScale = this.dH / this.height,
                this.taps = this.getTaps(),
                t.destinationHeight = this.dH,
                super.applyTo(t),
                t.sourceHeight = t.destinationHeight
            }
            applyTo(t) {
                Fn(t) ? this.applyToForWebgl(t) : this.applyTo2d(t)
            }
            isNeutralState() {
                return 1 === this.scaleX && 1 === this.scaleY
            }
            lanczosCreate(t) {
                return e=>{
                    if (e >= t || e <= -t)
                        return 0;
                    if (e < 1.1920929e-7 && e > -1.1920929e-7)
                        return 1;
                    const i = (e *= Math.PI) / t;
                    return Math.sin(e) / e * Math.sin(i) / i
                }
            }
            applyTo2d(t) {
                const e = t.imageData
                  , i = this.scaleX
                  , s = this.scaleY;
                this.rcpScaleX = 1 / i,
                this.rcpScaleY = 1 / s;
                const r = e.width
                  , n = e.height
                  , o = Math.round(r * i)
                  , a = Math.round(n * s);
                let h;
                h = "sliceHack" === this.resizeType ? this.sliceByTwo(t, r, n, o, a) : "hermite" === this.resizeType ? this.hermiteFastResize(t, r, n, o, a) : "bilinear" === this.resizeType ? this.bilinearFiltering(t, r, n, o, a) : "lanczos" === this.resizeType ? this.lanczosResize(t, r, n, o, a) : new ImageData(o,a),
                t.imageData = h
            }
            sliceByTwo(t, e, i, s, r) {
                const n = t.imageData
                  , o = .5;
                let a = !1
                  , h = !1
                  , c = e * o
                  , l = i * o;
                const d = t.filterBackend.resources;
                let u = 0
                  , g = 0;
                const f = e;
                let p = 0;
                d.sliceByTwo || (d.sliceByTwo = $());
                const m = d.sliceByTwo;
                (m.width < 1.5 * e || m.height < i) && (m.width = 1.5 * e,
                m.height = i);
                const v = m.getContext("2d");
                for (v.clearRect(0, 0, 1.5 * e, i),
                v.putImageData(n, 0, 0),
                s = Math.floor(s),
                r = Math.floor(r); !a || !h; )
                    e = c,
                    i = l,
                    s < Math.floor(c * o) ? c = Math.floor(c * o) : (c = s,
                    a = !0),
                    r < Math.floor(l * o) ? l = Math.floor(l * o) : (l = r,
                    h = !0),
                    v.drawImage(m, u, g, e, i, f, p, c, l),
                    u = f,
                    g = p,
                    p += l;
                return v.getImageData(u, g, s, r)
            }
            lanczosResize(t, e, i, s, r) {
                const n = t.imageData.data
                  , o = t.ctx.createImageData(s, r)
                  , a = o.data
                  , h = this.lanczosCreate(this.lanczosLobes)
                  , c = this.rcpScaleX
                  , l = this.rcpScaleY
                  , d = 2 / this.rcpScaleX
                  , u = 2 / this.rcpScaleY
                  , g = Math.ceil(c * this.lanczosLobes / 2)
                  , f = Math.ceil(l * this.lanczosLobes / 2)
                  , p = {}
                  , m = {
                    x: 0,
                    y: 0
                }
                  , v = {
                    x: 0,
                    y: 0
                };
                return function t(y) {
                    let x, _, b, w, C, S, T, O, k, D, M;
                    for (m.x = (y + .5) * c,
                    v.x = Math.floor(m.x),
                    x = 0; x < r; x++) {
                        for (m.y = (x + .5) * l,
                        v.y = Math.floor(m.y),
                        C = 0,
                        S = 0,
                        T = 0,
                        O = 0,
                        k = 0,
                        _ = v.x - g; _ <= v.x + g; _++)
                            if (!(_ < 0 || _ >= e)) {
                                D = Math.floor(1e3 * Math.abs(_ - m.x)),
                                p[D] || (p[D] = {});
                                for (let t = v.y - f; t <= v.y + f; t++)
                                    t < 0 || t >= i || (M = Math.floor(1e3 * Math.abs(t - m.y)),
                                    p[D][M] || (p[D][M] = h(Math.sqrt(Math.pow(D * d, 2) + Math.pow(M * u, 2)) / 1e3)),
                                    b = p[D][M],
                                    b > 0 && (w = 4 * (t * e + _),
                                    C += b,
                                    S += b * n[w],
                                    T += b * n[w + 1],
                                    O += b * n[w + 2],
                                    k += b * n[w + 3]))
                            }
                        w = 4 * (x * s + y),
                        a[w] = S / C,
                        a[w + 1] = T / C,
                        a[w + 2] = O / C,
                        a[w + 3] = k / C
                    }
                    return ++y < s ? t(y) : o
                }(0)
            }
            bilinearFiltering(t, e, i, s, r) {
                let n, o, a, h, c, l, d, u, g, f, p, m, v, y = 0;
                const x = this.rcpScaleX
                  , _ = this.rcpScaleY
                  , b = 4 * (e - 1)
                  , w = t.imageData.data
                  , C = t.ctx.createImageData(s, r)
                  , S = C.data;
                for (d = 0; d < r; d++)
                    for (u = 0; u < s; u++)
                        for (c = Math.floor(x * u),
                        l = Math.floor(_ * d),
                        g = x * u - c,
                        f = _ * d - l,
                        v = 4 * (l * e + c),
                        p = 0; p < 4; p++)
                            n = w[v + p],
                            o = w[v + 4 + p],
                            a = w[v + b + p],
                            h = w[v + b + 4 + p],
                            m = n * (1 - g) * (1 - f) + o * g * (1 - f) + a * f * (1 - g) + h * g * f,
                            S[y++] = m;
                return C
            }
            hermiteFastResize(t, e, i, s, r) {
                const n = this.rcpScaleX
                  , o = this.rcpScaleY
                  , a = Math.ceil(n / 2)
                  , h = Math.ceil(o / 2)
                  , c = t.imageData.data
                  , l = t.ctx.createImageData(s, r)
                  , d = l.data;
                for (let t = 0; t < r; t++)
                    for (let i = 0; i < s; i++) {
                        const r = 4 * (i + t * s);
                        let l = 0
                          , u = 0
                          , g = 0
                          , f = 0
                          , p = 0
                          , m = 0
                          , v = 0;
                        const y = (t + .5) * o;
                        for (let s = Math.floor(t * o); s < (t + 1) * o; s++) {
                            const t = Math.abs(y - (s + .5)) / h
                              , r = (i + .5) * n
                              , o = t * t;
                            for (let t = Math.floor(i * n); t < (i + 1) * n; t++) {
                                let i = Math.abs(r - (t + .5)) / a;
                                const n = Math.sqrt(o + i * i);
                                n > 1 && n < -1 || (l = 2 * n * n * n - 3 * n * n + 1,
                                l > 0 && (i = 4 * (t + s * e),
                                v += l * c[i + 3],
                                g += l,
                                c[i + 3] < 255 && (l = l * c[i + 3] / 250),
                                f += l * c[i],
                                p += l * c[i + 1],
                                m += l * c[i + 2],
                                u += l))
                            }
                        }
                        d[r] = f / u,
                        d[r + 1] = p / u,
                        d[r + 2] = m / u,
                        d[r + 3] = v / g
                    }
                return l
            }
            toObject() {
                return {
                    type: this.type,
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    resizeType: this.resizeType,
                    lanczosLobes: this.lanczosLobes
                }
            }
        }
        s(go, "type", "Resize"),
        s(go, "defaults", {
            resizeType: "hermite",
            scaleX: 1,
            scaleY: 1,
            lanczosLobes: 3,
            fragmentSourceTOP: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n  "
        }),
        I.setClass(go);
        class fo extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                if (0 === this.saturation)
                    return;
                const i = -this.saturation;
                for (let t = 0; t < e.length; t += 4) {
                    const s = Math.max(e[t], e[t + 1], e[t + 2]);
                    e[t] += s !== e[t] ? (s - e[t]) * i : 0,
                    e[t + 1] += s !== e[t + 1] ? (s - e[t + 1]) * i : 0,
                    e[t + 2] += s !== e[t + 2] ? (s - e[t + 2]) * i : 0
                }
            }
            getUniformLocations(t, e) {
                return {
                    uSaturation: t.getUniformLocation(e, "uSaturation")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uSaturation, -this.saturation)
            }
        }
        s(fo, "type", "Saturation"),
        s(fo, "defaults", {
            saturation: 0,
            mainParameter: "saturation"
        }),
        I.setClass(fo);
        class po extends Xn {
            getFragmentSource() {
                return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n"
            }
            applyTo2d(t) {
                let {imageData: {data: e}} = t;
                if (0 === this.vibrance)
                    return;
                const i = -this.vibrance;
                for (let t = 0; t < e.length; t += 4) {
                    const s = Math.max(e[t], e[t + 1], e[t + 2])
                      , r = (e[t] + e[t + 1] + e[t + 2]) / 3
                      , n = 2 * Math.abs(s - r) / 255 * i;
                    e[t] += s !== e[t] ? (s - e[t]) * n : 0,
                    e[t + 1] += s !== e[t + 1] ? (s - e[t + 1]) * n : 0,
                    e[t + 2] += s !== e[t + 2] ? (s - e[t + 2]) * n : 0
                }
            }
            getUniformLocations(t, e) {
                return {
                    uVibrance: t.getUniformLocation(e, "uVibrance")
                }
            }
            sendUniformData(t, e) {
                t.uniform1f(e.uVibrance, -this.vibrance)
            }
        }
        var mo, vo, yo, xo, _o;
        s(po, "type", "Vibrance"),
        s(po, "defaults", {
            vibrance: 0,
            mainParameter: "vibrance"
        }),
        I.setClass(po);
        class bo extends Ln {
            constructor(t, e) {
                super(t, Object.assign({
                    label: "Image"
                }, e))
            }
            toObject(t=[]) {
                return super.toObject(t.concat(["label", "selectable"]))
            }
        }
        I.setClass(bo);
        class wo extends Pr {
            set type(t) {}
            constructor(t, e) {
                super(t, Object.assign({
                    label: "Path"
                }, e))
            }
            toObject(t=[]) {
                return super.toObject(t.concat(["label", "selectable"]))
            }
        }
        I.setClass(wo);
        class Co extends fs {
            constructor(t) {
                super(Object.assign({
                    fill: "#000000",
                    strokeWidth: 0,
                    stroke: "#000000",
                    label: "Rect"
                }, t)),
                this.onScaled = ()=>{
                    const t = this.width * this.scaleX
                      , e = this.height * this.scaleY;
                    this.set({
                        width: t,
                        height: e,
                        scaleX: 1,
                        scaleY: 1
                    })
                }
                ,
                this.on("scaling", this.onScaled)
            }
            toObject(t=[]) {
                return super.toObject(t.concat(["label", "selectable"]))
            }
        }
        I.setClass(Co),
        (yo = mo || (mo = {}))[yo.top = 1] = "top",
        yo[yo.middle = 2] = "middle",
        yo[yo.bottom = 3] = "bottom",
        function(t) {
            t[t.none = 0] = "none",
            t[t.behind = 1] = "behind"
        }(vo || (vo = {}));
        class So extends Tn {
            constructor(t, e) {
                super(t, Object.assign({
                    label: "Textbox",
                    fill: "#000000",
                    fontSize: 30,
                    fontFamily: "serif",
                    verticalAlign: mo.top,
                    textBackground: vo.none,
                    textBackgroundFill: "#ff0000",
                    stroke: "#ff0000",
                    strokeWidth: 0,
                    paintFirst: "stroke"
                }, e)),
                this.onScaled = ()=>{
                    const t = this.width * this.scaleX
                      , e = this.maxHeight * this.scaleY;
                    this.set({
                        width: t,
                        maxHeight: e,
                        scaleX: 1,
                        scaleY: 1
                    })
                }
                ,
                this.on("scaling", this.onScaled)
            }
            setText(t) {
                this.set({
                    text: t
                })
            }
            calcTextHeight() {
                return this.maxHeight
            }
            _getTopOffset() {
                const t = -this.maxHeight / 2;
                if (this.verticalAlign === mo.top)
                    return t;
                const e = this.getHeightOfLine(0) * this.textLines.length
                  , i = Math.max(this.maxHeight - e, 0);
                if (this.verticalAlign === mo.middle)
                    return t + i / 2;
                if (this.verticalAlign === mo.bottom)
                    return t + i;
                throw new Error("Unsupported vertical align")
            }
            _renderTextCommon(t, e) {
                t.save();
                const i = this._getLeftOffset()
                  , s = this._getTopOffset();
                this.textBackground === vo.behind && (t.fillStyle = this.textBackgroundFill);
                let r = 0;
                for (let n = 0, o = this._textLines.length; n < o; n++) {
                    const o = this.getHeightOfLine(n);
                    if (r + o > this.maxHeight)
                        break;
                    const a = o / this.lineHeight
                      , h = this._getLineLeftOffset(n);
                    if (this.textBackground === vo.behind) {
                        const e = this.__charBounds[n][0]
                          , o = this.__charBounds[n][this.__charBounds[n].length - 1];
                        t.fillRect(i + h, s + r, o.left - e.left + o.width, a)
                    }
                    this._renderTextLine(e, t, this._textLines[n], i + h, s + r + a, n),
                    r += o
                }
                t.restore()
            }
            toObject(t=[]) {
                return super.toObject(t.concat(["label", "selectable", "verticalAlign", "maxHeight", "verticalAlign", "textBackground", "textBackgroundFill"]))
            }
        }
        function To(t, e, i, s) {
            return new (i || (i = Promise))((function(r, n) {
                function o(t) {
                    try {
                        h(s.next(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function a(t) {
                    try {
                        h(s.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function h(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof i ? e : new i((function(t) {
                        t(e)
                    }
                    ))).then(o, a)
                }
                h((s = s.apply(t, e || [])).next())
            }
            ))
        }
        So.cacheProperties = [...Tn.cacheProperties, "verticalAlign", "textBackground", "textBackgroundFill"],
        I.setClass(So),
        "function" == typeof SuppressedError && SuppressedError;
        class Oo {
            static create(t) {
                const e = t.getObjects();
                return new Oo(t,e)
            }
            constructor(t, e) {
                this.canvas = t,
                this.objects = e
            }
            getText(t) {
                return this.objects[t.realIndex].text
            }
            replaceText(t, e) {
                const i = this.objects[t.realIndex];
                i.visible && i.setText(e)
            }
            replaceRectToImage(t, e, i) {
                return To(this, void 0, void 0, (function*() {
                    const s = this.objects[t.realIndex];
                    if (!s.visible)
                        return;
                    var r;
                    let n;
                    switch ("string" == typeof e && (e = yield(r = e,
                    new Promise(((t,e)=>{
                        const i = v().document.createElement("img");
                        i.onload = ()=>t(i),
                        i.onerror = ()=>{
                            const t = r.length > 20 ? r.substring(0, 20) + "..." : r;
                            e(new Error(`Failed to load image: ${t}`))
                        }
                        ,
                        i.src = r
                    }
                    )))),
                    i) {
                    case "stretch":
                        n = function(t, e) {
                            const i = t.width / e.width
                              , s = t.height / e.height;
                            return new bo(e,{
                                angle: t.angle,
                                left: t.left,
                                top: t.top,
                                width: e.width,
                                height: e.height,
                                scaleX: i,
                                scaleY: s
                            })
                        }(s, e);
                        break;
                    case "fit":
                        n = function(t, e) {
                            const i = Math.max(t.getScaledWidth() / e.width, t.getScaledHeight() / e.height)
                              , s = t.getScaledWidth() / i
                              , r = t.getScaledHeight() / i
                              , n = (e.height - t.getScaledHeight() / i) / 2
                              , o = (e.width - t.getScaledWidth() / i) / 2;
                            return new bo(e,{
                                angle: t.angle,
                                left: t.left,
                                top: t.top,
                                width: s,
                                height: r,
                                scaleX: i,
                                scaleY: i,
                                cropY: n,
                                cropX: o
                            })
                        }(s, e);
                        break;
                    default:
                        throw new Error(`Unknown mode: ${i}`)
                    }
                    this.canvas.remove(s),
                    this.canvas.insertAt(t.realIndex, n)
                }
                ))
            }
        }
        function ko() {
            const t = document.createElement("canvas");
            t.width = 10,
            t.height = 10;
            const e = t.getContext("2d");
            return e.fillStyle = "#ffffff",
            e.fillRect(0, 0, 10, 10),
            e.fillStyle = "#f0f0f0",
            e.fillRect(0, 0, 5, 5),
            e.fillRect(5, 5, 5, 5),
            t
        }
        class Do {
            constructor(t) {
                this.canvas = t,
                this.getWorkspaceObjects = ()=>this.canvas.getObjects().filter((t=>t !== this.canvas.workspaceBackground)),
                this.getLayers = ()=>{
                    var t;
                    const e = this.canvas.getObjects()
                      , i = [];
                    for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        r !== this.canvas.workspaceBackground && i.push({
                            index: i.length,
                            realIndex: s,
                            name: null !== (t = r.get("label")) && void 0 !== t ? t : r.type,
                            type: r.type
                        })
                    }
                    return i
                }
            }
        }
        class Mo extends ur {
            static createBlank(t, e, i, s) {
                const r = new Co({
                    left: 0,
                    top: 0,
                    width: t,
                    height: e,
                    fill: new Dr({
                        repeat: "repeat",
                        source: ko()
                    }),
                    selectable: !1
                })
                  , n = new Mo(t,e,i,Object.assign({
                    clipPath: r
                }, s));
                return n.add(r),
                n.workspaceBackground = r,
                n
            }
            static createFromJSON(t, e, i) {
                return To(this, void 0, void 0, (function*() {
                    const s = new Mo(t.width,t.height,e,i);
                    yield s.loadFromJSON(t.data);
                    const r = s.getObjects();
                    if (s.workspaceBackground = r[0],
                    !s.workspaceBackground)
                        throw new Error("JSON does not contain a workspace background");
                    return s.clipPath = s.workspaceBackground,
                    s
                }
                ))
            }
            constructor(t, e, i, s) {
                super(i, s),
                this.workspaceWidth = t,
                this.workspaceHeight = e,
                this.common = new Do(this),
                this.getWorkspaceObjects = this.common.getWorkspaceObjects,
                this.getLayers = this.common.getLayers
            }
            toImageJSON() {
                return {
                    width: this.workspaceWidth,
                    height: this.workspaceHeight,
                    data: this.toJSON()
                }
            }
        }
        class Eo extends Nt {
            static createFromJSON(t) {
                return To(this, void 0, void 0, (function*() {
                    const e = new Eo(t.width,t.height,{
                        width: t.width,
                        height: t.height
                    });
                    if (yield e.loadFromJSON(t.data),
                    e.workspaceBackground = e.getObjects()[0],
                    !e.workspaceBackground)
                        throw new Error("JSON does not contain a workspace background");
                    return e
                }
                ))
            }
            constructor(t, e, i) {
                super(null, i),
                this.workspaceWidth = t,
                this.workspaceHeight = e,
                this.common = new Do(this),
                this.getWorkspaceObjects = this.common.getWorkspaceObjects,
                this.getLayers = this.common.getLayers
            }
            getReplacer() {
                return Oo.create(this)
            }
            exportToDataURL(t, e=1) {
                return this.workspaceBackground.visible = !1,
                this.toDataURL({
                    width: this.workspaceWidth,
                    height: this.workspaceHeight,
                    multiplier: 1,
                    format: t,
                    quality: e
                })
            }
        }
        function jo(t, e, i, s) {
            return new (i || (i = Promise))((function(r, n) {
                function o(t) {
                    try {
                        h(s.next(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function a(t) {
                    try {
                        h(s.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function h(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof i ? e : new i((function(t) {
                        t(e)
                    }
                    ))).then(o, a)
                }
                h((s = s.apply(t, e || [])).next())
            }
            ))
        }
        (_o = xo || (xo = {})).select = "select",
        _o.rect = "rect",
        _o.brush = "brush",
        _o.textbox = "textbox",
        "function" == typeof SuppressedError && SuppressedError;
        class Po {
            static attrs(t, e) {
                Object.keys(e).forEach((i=>{
                    const s = e[i];
                    t.setAttribute(i, "string" == typeof s ? s : s.toString())
                }
                ))
            }
            static element(t, e) {
                const i = document.createElement(t);
                return e && Po.attrs(i, e),
                i
            }
            static div(t) {
                return Po.element("div", t)
            }
        }
        const Ao = "http://www.w3.org/2000/svg";
        class Lo {
            static createSvg(t, e) {
                const i = document.createElementNS(Ao, "svg");
                i.setAttribute("viewBox", "0 -960 960 960"),
                i.classList.add(e);
                const s = document.createElementNS(Ao, "path");
                return s.setAttribute("d", t),
                i.appendChild(s),
                i
            }
        }
        Lo.cursor = "m320-410 79-110h170L320-716v306ZM551-80 406-392 240-160v-720l560 440H516l144 309-109 51ZM399-520Z",
        Lo.rect = "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Z",
        Lo.eye = "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z",
        Lo.eyeOff = "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z",
        Lo.locked = "M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z",
        Lo.close = "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
        Lo.text = "M420-160v-520H200v-120h560v120H540v520H420Z",
        Lo.image = "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z",
        Lo.brush = "M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 23-5.5 42T220-202q5 2 10 2h10Zm230-160L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Zm-190 80Z",
        Lo.erase = "M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z",
        Lo.arrowUp = "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z",
        Lo.arrowDown = "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z",
        Lo.menu = "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";
        class Fo {
            constructor() {
                this.listeners = [],
                this.forward = t=>{
                    this.listeners.length > 0 && this.listeners.forEach((e=>e(t)))
                }
            }
            subscribe(t) {
                this.listeners.push(t)
            }
            unsubscribe(t) {
                const e = this.listeners.indexOf(t);
                if (!(e >= 0))
                    throw new Error("Unknown listener");
                this.listeners.splice(e, 1)
            }
            count() {
                return this.listeners.length
            }
        }
        function Bo(t, e, i) {
            const s = new Fo
              , r = Po.element("span", {
                class: `mce-icon-button mce-icon-button-${i}`,
                title: e
            })
              , n = Lo.createSvg(t, "mce-icon-button-icon")
              , o = n.querySelector("path");
            return r.appendChild(n),
            r.addEventListener("click", (t=>{
                t.preventDefault(),
                t.stopPropagation(),
                s.forward()
            }
            ), !1),
            {
                view: r,
                onClicked: s,
                setIcon(t) {
                    o.setAttribute("d", t)
                }
            }
        }
        class Ro {
            static create(t, e, i, s) {
                var r;
                const n = document.createElement("div");
                n.className = "mce-layers-panel-item";
                const o = Bo(Io(e), "Toggle visibility", "sm")
                  , a = Bo(Lo.close, "Delete layer", "sm");
                let h, c;
                const l = Po.div({
                    class: "mce-layers-panel-item-label"
                })
                  , d = Po.element("input", {
                    class: "mce-layers-panel-item-label-input"
                });
                d.readOnly = !0,
                d.value = null !== (r = e.get("label")) && void 0 !== r ? r : e.type,
                l.appendChild(d),
                n.appendChild(o.view),
                n.appendChild(l),
                s || (h = Bo(Lo.arrowUp, "Move layer up", "sm"),
                n.appendChild(h.view)),
                i || (c = Bo(Lo.arrowDown, "Move layer down", "sm"),
                n.appendChild(c.view)),
                n.appendChild(a.view);
                const u = new Ro(n,t,e,d,o);
                return n.addEventListener("click", u.onItemClicked, !1),
                d.addEventListener("input", u.onLabelChanged, !1),
                o.onClicked.subscribe(u.onVisibilityClicked),
                null == h || h.onClicked.subscribe(u.onMoveUpClicked),
                null == c || c.onClicked.subscribe(u.onMoveDownClicked),
                a.onClicked.subscribe(u.onDeleteClicked),
                u
            }
            constructor(t, e, i, s, r) {
                this.view = t,
                this.state = e,
                this.object = i,
                this.labelInput = s,
                this.visibilityButton = r,
                this.isSelected = !1,
                this.onItemClicked = t=>{
                    t.preventDefault(),
                    t.stopPropagation(),
                    this.state.selectObject(this.object)
                }
                ,
                this.onVisibilityClicked = ()=>{
                    this.object.selectable && this.object.visible ? (this.object.visible = !0,
                    this.object.selectable = !1,
                    this.state.canvas.getActiveObject() === this.object && this.state.canvas.discardActiveObject()) : this.object.visible && !this.object.selectable ? (this.object.visible = !1,
                    this.object.selectable = !0) : (this.object.visible = !0,
                    this.object.selectable = !0),
                    this.visibilityButton.setIcon(Io(this.object)),
                    this.state.canvas.requestRenderAll(),
                    this.state.onPropertiesChanged.forward(this.object)
                }
                ,
                this.onMoveUpClicked = ()=>{
                    this.state.canvas.bringObjectForward(this.object),
                    this.state.onLayerOrderChanged.forward()
                }
                ,
                this.onMoveDownClicked = ()=>{
                    this.state.canvas.sendObjectBackwards(this.object),
                    this.state.onLayerOrderChanged.forward()
                }
                ,
                this.onDeleteClicked = ()=>{
                    this.state.canvas.remove(this.object)
                }
                ,
                this.onLabelChanged = ()=>{
                    this.object.set("label", this.labelInput.value),
                    this.state.onPropertiesChanged.forward(this.object)
                }
            }
            setIsSelected(t) {
                this.isSelected = t,
                this.labelInput.readOnly = !t,
                this.view.classList.toggle("mce-selected", t)
            }
        }
        function Io(t) {
            if (!t.selectable) {
                if (!t.visible)
                    throw new Error("Unsupported state");
                return Lo.locked
            }
            return t.visible ? Lo.eye : Lo.eyeOff
        }
        function Wo(t, e) {
            const i = Po.div({
                class: "mce-panel"
            })
              , s = Po.div({
                class: "mce-panel-tabs"
            })
              , r = Po.div({
                class: "mce-panel-tab"
            });
            r.innerText = t,
            s.appendChild(r);
            const n = Po.div({
                class: "mce-panel-body"
            });
            return n.className = "mce-panel-body",
            n.appendChild(e),
            i.appendChild(s),
            i.appendChild(n),
            {
                view: i
            }
        }
        class Xo {
            static create(t) {
                const e = document.createElement("div");
                e.className = "mce-layers-list";
                const i = Wo("Layers", e)
                  , s = new Xo(i.view,t,e);
                return t.canvas.on("object:added", s.reloadList),
                t.canvas.on("object:removed", s.reloadList),
                t.canvas.on("selection:cleared", s.reloadSelection),
                t.canvas.on("selection:created", s.reloadSelection),
                t.canvas.on("selection:updated", s.reloadSelection),
                t.onLayerOrderChanged.subscribe(s.reloadList),
                s.reloadList(),
                s
            }
            constructor(t, e, i) {
                this.view = t,
                this.state = e,
                this.list = i,
                this.layers = [],
                this.reloadList = ()=>{
                    for (; this.list.firstChild; )
                        this.list.removeChild(this.list.firstChild);
                    this.state.forEachObject(((t,e,i)=>{
                        const s = 0 === e
                          , r = Ro.create(this.state, t, s, i);
                        this.layers.push(r),
                        this.list.firstChild ? this.list.insertBefore(r.view, this.list.firstChild) : this.list.appendChild(r.view)
                    }
                    )),
                    this.reloadSelection()
                }
                ,
                this.reloadSelection = ()=>{
                    const t = this.state.canvas.getActiveObjects();
                    for (const e of this.layers)
                        e.setIsSelected(t.includes(e.object))
                }
            }
        }
        class Yo {
            static create(t, e, i) {
                const s = new Yo(t,i,e);
                for (const t of e)
                    i.on(t, s.onExternalChanged);
                return s
            }
            constructor(t, e, i) {
                this.state = t,
                this.object = e,
                this.events = i,
                this.accessors = [],
                this.onChanged = new Fo,
                this.onExternalChanged = ()=>{
                    for (const t of this.accessors) {
                        const e = t.getValue();
                        e !== t.lastValue && t.onExternalChanged.forward(e)
                    }
                }
            }
            bind(t, e) {
                const i = {
                    onExternalChanged: new Fo,
                    lastValue: t(this.object),
                    getValue: ()=>t(this.object),
                    setValue: t=>{
                        e(this.object, t),
                        i.lastValue = t,
                        this.state.canvas.requestRenderAll(),
                        this.onChanged.forward()
                    }
                };
                return this.accessors.push(i),
                i
            }
            destroy() {
                for (const t of this.events)
                    this.object.off(t, this.onExternalChanged)
            }
        }
        function Ho(t, e) {
            const i = Po.div({
                class: "mce-prop-simple"
            })
              , s = Po.div({
                class: "mce-prop-simple-label"
            });
            s.innerText = t;
            const r = Po.div({
                class: "mce-prop-simple-body"
            });
            return i.appendChild(s),
            i.appendChild(r),
            r.appendChild(e),
            {
                view: i
            }
        }
        function Vo(t, e, i) {
            var s;
            const r = null !== (s = null == i ? void 0 : i.decimals) && void 0 !== s ? s : 1
              , n = Po.element("input", {
                class: "mce-prop-number-input",
                type: "number",
                value: e.getValue().toFixed(r)
            });
            return i && (i.step && (n.step = i.step.toString()),
            "number" == typeof i.min && n.setAttribute("min", String(i.min)),
            "number" == typeof i.max && n.setAttribute("max", String(i.max))),
            n.addEventListener("input", (function() {
                const t = Number(n.value);
                e.setValue(t)
            }
            ), !1),
            e.onExternalChanged.subscribe((function(t) {
                n.value = t.toFixed(r)
            }
            )),
            {
                view: Ho(t, n).view,
                destroy: function() {}
            }
        }
        function zo(t) {
            const e = Po.div({
                class: "mce-prop-row"
            });
            for (const i of t) {
                const t = Po.div({
                    class: "mce-prop-col"
                });
                t.appendChild(i.view),
                e.appendChild(t)
            }
            return {
                view: e,
                destroy: function() {
                    t.forEach((t=>t.destroy()))
                }
            }
        }
        function Go(t) {
            const e = Po.div({
                class: "mce-prop-rows"
            });
            for (const i of t)
                e.appendChild(i.view);
            return {
                view: e,
                destroy: function() {
                    t.forEach((t=>t.destroy()))
                }
            }
        }
        function Uo(t, e) {
            const i = [...e, zo([Vo("X", t.bind((t=>t.left), ((t,e)=>t.set("left", e)))), Vo("Y", t.bind((t=>t.top), ((t,e)=>t.set("top", e))))]), zo([Vo("Angle", t.bind((t=>t.angle), ((t,e)=>t.set("angle", e))))]), zo([Vo("Opacity", t.bind((t=>Math.round(100 * t.opacity)), ((t,e)=>t.set("opacity", Math.min(100, Math.max(e, 0)) / 100))), {
                step: 2,
                decimals: 0,
                min: 0,
                max: 100
            })])];
            return {
                view: Go(i).view,
                destroy: function() {
                    i.forEach((t=>t.destroy()))
                }
            }
        }
        function No(t, e, i) {
            const s = i.getValue()
              , r = Po.element("select", {
                class: "mce-prop-choice"
            });
            r.addEventListener("change", (function() {
                const t = n[r.selectedIndex];
                i.setValue(t)
            }
            ), !1);
            const n = Object.values(e)
              , o = Object.keys(e).map((t=>{
                const i = Po.element("option", {
                    value: t
                });
                return i.text = t,
                e[t] === s && (i.selected = !0),
                r.appendChild(i),
                i
            }
            ));
            return i.onExternalChanged.subscribe((function(t) {
                const e = n.indexOf(t);
                if (e >= 0)
                    for (let t = 0; t < o.length; t++)
                        o[t].selected = t === e
            }
            )),
            {
                view: Ho(t, r).view,
                destroy: function() {}
            }
        }
        function qo(t, e) {
            const i = Po.element("input", {
                class: "mce-prop-color-input",
                type: "color",
                value: e.getValue() || "#000"
            });
            return i.addEventListener("input", (function() {
                e.setValue(i.value)
            }
            ), !1),
            e.onExternalChanged.subscribe((function(t) {
                i.value = t
            }
            )),
            {
                view: Ho(t, i).view,
                destroy: function() {}
            }
        }
        class Zo {
            static create(t, e) {
                switch (t) {
                case "rect":
                    return function(t) {
                        const e = zo([Vo("W", t.bind((t=>t.getScaledWidth()), ((t,e)=>{
                            t.set("width", e),
                            t.set("scaleX", 1)
                        }
                        ))), Vo("H", t.bind((t=>t.getScaledHeight()), ((t,e)=>{
                            t.set("height", e),
                            t.set("scaleY", 1)
                        }
                        )))])
                          , i = zo([Vo("Radius", t.bind((t=>t.rx), ((t,e)=>{
                            t.set("rx", e),
                            t.set("ry", e)
                        }
                        )))])
                          , s = zo([qo("Fill", t.bind((t=>t.fill), ((t,e)=>t.set("fill", e))))])
                          , r = zo([Vo("SW", t.bind((t=>t.strokeWidth), ((t,e)=>t.set("strokeWidth", e)))), qo("SC", t.bind((t=>t.stroke), ((t,e)=>t.set("stroke", e))))]);
                        return Uo(t, [e, i, s, r])
                    }(e);
                case "circle":
                default:
                    return function(t) {
                        return Uo(t, [])
                    }(e);
                case "textbox":
                    return function(t) {
                        const e = zo([Vo("Font size", t.bind((t=>t.fontSize), ((t,e)=>t.set("fontSize", e))))])
                          , i = zo([Vo("Line height", t.bind((t=>t.lineHeight), ((t,e)=>t.set("lineHeight", e))), {
                            step: .05,
                            decimals: 2
                        })])
                          , s = zo([qo("Color", t.bind((t=>t.fill), ((t,e)=>t.set("fill", e))))])
                          , r = zo([No("Text align", {
                            Left: "left",
                            Center: "center",
                            Right: "right",
                            Justify: "justify"
                        }, t.bind((t=>t.textAlign), ((t,e)=>t.set("textAlign", e))))])
                          , n = zo([No("Vertical align", {
                            Top: mo.top,
                            Middle: mo.middle,
                            Bottom: mo.bottom
                        }, t.bind((t=>t.verticalAlign), ((t,e)=>t.set("verticalAlign", e))))])
                          , o = zo([No("Font", {
                            Arial: "arial",
                            Verdana: "verdana",
                            Tahoma: "tahoma",
                            Georgia: "georgia",
                            "Courier New": "courier new",
                            Serif: "serif"
                        }, t.bind((t=>t.fontFamily), ((t,e)=>t.set("fontFamily", e))))])
                          , a = zo([No("Weight", {
                            Bold: "bold",
                            Normal: "normal"
                        }, t.bind((t=>t.fontWeight), ((t,e)=>t.set("fontWeight", e))))])
                          , h = zo([No("Bg", {
                            Off: vo.none,
                            Behind: vo.behind
                        }, t.bind((t=>t.textBackground), ((t,e)=>t.set("textBackground", e)))), qo("Color", t.bind((t=>t.textBackgroundFill), ((t,e)=>t.set("textBackgroundFill", e))))])
                          , c = zo([Vo("SW", t.bind((t=>t.strokeWidth), ((t,e)=>t.set("strokeWidth", e))), {
                            min: 0
                        }), qo("SC", t.bind((t=>t.stroke), ((t,e)=>t.set("stroke", e))))]);
                        return Uo(t, [e, i, s, r, n, o, a, h, c])
                    }(e);
                case "image":
                    return function(t) {
                        const e = zo([Vo("W", t.bind((t=>t.getScaledWidth()), ((t,e)=>{
                            const i = e / t.getOriginalSize().width;
                            t.set("scaleX", i)
                        }
                        ))), Vo("H", t.bind((t=>t.getScaledHeight()), ((t,e)=>{
                            const i = e / t.getOriginalSize().height;
                            t.set("scaleY", i)
                        }
                        )))]);
                        return Uo(t, [e])
                    }(e)
                }
            }
        }
        class Ko {
            static create(t, e) {
                const i = Po.div({
                    class: "mce-properties-editor"
                })
                  , s = Yo.create(t, ["modified", "scaling"], e);
                s.onChanged.subscribe((()=>t.onPropertiesChanged.forward(e)));
                const r = Zo.create(e.type, s);
                return i.appendChild(r.view),
                new Ko(i,s,r)
            }
            constructor(t, e, i) {
                this.view = t,
                this.manager = e,
                this.editor = i
            }
            destroy() {
                this.manager.destroy(),
                this.editor.destroy()
            }
        }
        class Jo {
            static create(t) {
                const e = Yo.create(t, [], t.canvas);
                e.onChanged.subscribe((()=>t.onPropertiesChanged.forward(t.canvas)));
                const i = Po.div({
                    class: "mce-properties-editor"
                })
                  , s = Go([zo([Vo("Width", e.bind((t=>t.workspaceWidth), ((t,e)=>{
                    t.workspaceBackground.set("width", e),
                    t.workspaceWidth = e
                }
                )), {
                    decimals: 0
                })]), zo([Vo("Height", e.bind((t=>t.workspaceHeight), ((t,e)=>{
                    t.workspaceBackground.set("height", e),
                    t.workspaceHeight = e
                }
                )), {
                    decimals: 0
                })])]);
                return i.appendChild(s.view),
                new Jo(i)
            }
            constructor(t) {
                this.view = t
            }
            destroy() {}
        }
        class $o {
            static create(t) {
                const e = document.createElement("div")
                  , i = Wo("Properties", e)
                  , s = new $o(i.view,t,e);
                return t.canvas.on("selection:cleared", s.onSelectionUpdated),
                t.canvas.on("selection:updated", s.onSelectionUpdated),
                t.canvas.on("selection:created", s.onSelectionUpdated),
                s.refresh(),
                s
            }
            constructor(t, e, i) {
                this.view = t,
                this.state = e,
                this.container = i,
                this.onSelectionUpdated = ()=>{
                    this.refresh()
                }
            }
            refresh() {
                const t = this.state.canvas.getActiveObjects();
                if (this.component && this.container.removeChild(this.component.view),
                1 === t.length) {
                    const e = t[0];
                    this.component = Ko.create(this.state, e)
                } else
                    this.component = Jo.create(this.state);
                this.container.appendChild(this.component.view)
            }
        }
        class Qo {
            static create(t, e) {
                const i = Po.div({
                    class: "mce-sidebar"
                })
                  , s = Po.div({
                    class: "mce-sidebar-switch"
                });
                s.appendChild(Lo.createSvg(Lo.menu, "mce-sidebar-switch-icon"));
                const r = Po.div({
                    class: "mce-sidebar-body"
                });
                if (!1 !== e.properties) {
                    const e = $o.create(t);
                    r.appendChild(e.view)
                }
                if (!1 !== e.layers) {
                    const e = Xo.create(t);
                    r.appendChild(e.view)
                }
                i.appendChild(s),
                i.appendChild(r);
                const n = new Qo(i);
                return s.addEventListener("click", n.onSwitchClicked, !1),
                n
            }
            constructor(t) {
                this.view = t,
                this.onSwitchClicked = ()=>{
                    this.view.classList.toggle("mce-visible")
                }
            }
        }
        class ta {
            constructor(t, e, i, s) {
                this.canvas = t,
                this.mode = e,
                this.configuration = i,
                this.container = s,
                this.onModeChanged = new Fo,
                this.onZoomChanged = new Fo,
                this.onLayerOrderChanged = new Fo,
                this.onPropertiesChanged = new Fo,
                this.onBrushConfigurationChanged = new Fo,
                this.brush = Object.assign({
                    brushSize: 10,
                    brushColor: "#ff0000"
                }, this.configuration.brush || {}),
                this.rect = Object.assign({
                    fillColor: "#ff0000"
                }, this.configuration.rect || {})
            }
            center() {
                const t = Math.min(1, this.container.clientWidth / this.canvas.workspaceWidth, this.container.clientHeight / this.canvas.workspaceHeight)
                  , e = this.canvas.workspaceWidth * t
                  , i = this.canvas.workspaceHeight * t
                  , s = this.container.clientWidth / 2 - e / 2
                  , r = this.container.clientHeight / 2 - i / 2;
                this.canvas.setZoom(t),
                this.canvas.absolutePan(new G(-s,-r)),
                this.onZoomChanged.forward()
            }
            add(t) {
                this.canvas.add(t),
                this.canvas.requestRenderAll()
            }
            selectObject(t) {
                this.canvas.discardActiveObject(),
                this.canvas.setActiveObject(t),
                this.canvas.renderAll()
            }
            forEachObject(t) {
                const e = this.canvas.getWorkspaceObjects();
                for (let i = 0; i < e.length; i++)
                    t(e[i], i, i + 1 === e.length)
            }
            disableSelection() {
                this.canvas.selection = !1;
                const t = new Map;
                return this.forEachObject((e=>{
                    t.set(e, e.selectable),
                    e.selectable && e.set("selectable", !1)
                }
                )),
                new ea(t)
            }
            setMode(t) {
                this.mode = t,
                this.onModeChanged.forward(t)
            }
        }
        class ea {
            constructor(t) {
                this.map = t
            }
            revert() {
                this.map.forEach(((t,e)=>e.set("selectable", t)))
            }
        }
        class ia {
            constructor(t) {
                this.state = t
            }
            init() {
                this.state.canvas.setCursor("move"),
                this.state.canvas.selection = !0
            }
            destroy() {}
        }
        class sa {
            static create(t, e) {
                const i = t.disableSelection()
                  , s = new sa(t,i,e);
                return t.canvas.on("mouse:down", s.onDown),
                t.canvas.on("mouse:move", s.onMove),
                t.canvas.on("mouse:up", s.onUp),
                t.canvas.setCursor("crosshair"),
                s
            }
            constructor(t, e, i) {
                this.state = t,
                this.selectionReverter = e,
                this.objectFactory = i,
                this.object = null,
                this.origX = 0,
                this.origY = 0,
                this.onFinished = new Fo,
                this.onDown = t=>{
                    t.e.preventDefault(),
                    t.e.stopPropagation(),
                    this.state.canvas.discardActiveObject();
                    const e = this.state.canvas.getPointer(t.e);
                    this.origX = Math.floor(e.x),
                    this.origY = Math.floor(e.y),
                    this.object = this.objectFactory(),
                    this.object.set("left", this.origX),
                    this.object.set("top", this.origX),
                    this.state.add(this.object)
                }
                ,
                this.onMove = t=>{
                    if (!this.object)
                        return;
                    const e = this.state.canvas.getPointer(t.e)
                      , i = Math.floor(e.x - this.origX)
                      , s = Math.floor(e.y - this.origY)
                      , r = Math.abs(i)
                      , n = Math.abs(s);
                    this.object.set({
                        left: i > 0 ? this.origX : this.origX + i,
                        top: s > 0 ? this.origY : this.origY + s,
                        width: r,
                        height: n
                    }),
                    this.state.canvas.renderAll()
                }
                ,
                this.onUp = ()=>{
                    this.object && (this.onFinished.forward(this.object),
                    this.object = null)
                }
            }
            destroy() {
                this.state.canvas.off("mouse:down", this.onDown),
                this.state.canvas.off("mouse:move", this.onMove),
                this.state.canvas.off("mouse:up", this.onUp),
                this.selectionReverter.revert()
            }
        }
        class ra {
            constructor(t) {
                this.state = t
            }
            init() {
                this.painter = sa.create(this.state, (()=>new Co({
                    fill: this.state.rect.fillColor,
                    stroke: this.state.rect.fillColor,
                    strokeWidth: 0
                }))),
                this.painter.onFinished.subscribe((t=>{
                    this.state.canvas.setActiveObject(t),
                    this.state.setMode(xo.select)
                }
                ))
            }
            destroy() {
                this.painter && (this.painter.destroy(),
                this.painter = void 0)
            }
        }
        class na {
            constructor(t) {
                this.state = t
            }
            init() {
                this.painter = sa.create(this.state, (()=>new fs({
                    fill: "transparent",
                    stroke: "#26aa5a",
                    strokeWidth: 1
                }))),
                this.painter.onFinished.subscribe((t=>{
                    const e = Math.max(t.getScaledHeight(), 10)
                      , i = Math.min(e, 20)
                      , s = new So("Text",{
                        left: t.left,
                        top: t.top,
                        width: t.getScaledWidth(),
                        maxHeight: e,
                        fontSize: i,
                        fill: "#000000"
                    });
                    this.state.canvas.remove(t),
                    this.state.add(s),
                    this.state.canvas.setActiveObject(s),
                    this.state.setMode(xo.select)
                }
                ))
            }
            destroy() {
                this.painter && (this.painter.destroy(),
                this.painter = void 0)
            }
        }
        class oa {
            constructor(t) {
                this.state = t,
                this.brush = new Ar(this.state.canvas),
                this.reloadBrush = ()=>{
                    this.brush.width = this.state.brush.brushSize,
                    this.brush.color = this.state.brush.brushColor
                }
            }
            init() {
                this.reloadBrush(),
                this.state.canvas.freeDrawingBrush = this.brush,
                this.state.canvas.isDrawingMode = !0,
                this.state.canvas.on("path:created", (t=>{
                    const e = t.path;
                    this.state.canvas.remove(e);
                    const i = new wo(e.path,e);
                    this.state.canvas.add(i)
                }
                )),
                this.state.onBrushConfigurationChanged.subscribe(this.reloadBrush)
            }
            destroy() {
                this.state.canvas.freeDrawingBrush = void 0,
                this.state.canvas.isDrawingMode = !1,
                this.state.onBrushConfigurationChanged.unsubscribe(this.reloadBrush)
            }
        }
        class aa {
            static get(t, e) {
                switch (t) {
                case xo.select:
                    return new ia(e);
                case xo.rect:
                    return new ra(e);
                case xo.brush:
                    return new oa(e);
                case xo.textbox:
                    return new na(e)
                }
            }
        }
        function ha() {
            const t = Po.div({
                class: "mce-workspace"
            })
              , e = document.createElement("canvas");
            return e.width = 1,
            e.height = 1,
            t.appendChild(e),
            {
                view: t,
                nativeCanvas: e
            }
        }
        const ca = {
            imageSmoothingEnabled: !0,
            preserveObjectStacking: !0,
            controlsAboveOverlay: !0,
            enableRetinaScaling: !0,
            skipOffscreen: !0
        };
        class la {
            static createBlank(t, e, i) {
                const {view: s, nativeCanvas: r} = ha()
                  , n = Mo.createBlank(t, e, r, ca);
                return la.create(s, n, i)
            }
            static createFromJSON(t, e) {
                return jo(this, void 0, void 0, (function*() {
                    const {view: i, nativeCanvas: s} = ha()
                      , r = yield Mo.createFromJSON(t, s, ca);
                    return la.create(i, r, e)
                }
                ))
            }
            static create(t, e, i) {
                const s = i.initialMode || xo.select
                  , r = new ta(e,s,i,t)
                  , n = new la(t,e,r);
                return e.on("mouse:wheel", n.onWheel),
                r.onModeChanged.subscribe(n.reloadMode),
                n.reloadMode(),
                n
            }
            constructor(t, e, i) {
                this.view = t,
                this.canvas = e,
                this.state = i,
                this.reloadLayout = ()=>{
                    if (!this.view.parentElement)
                        throw new Error("Workspace is not attached to the DOM");
                    this.canvas.setWidth(this.view.clientWidth),
                    this.canvas.setHeight(this.view.clientHeight)
                }
                ,
                this.onWheel = t=>{
                    t.e.preventDefault(),
                    t.e.stopPropagation();
                    const e = t.e.deltaY;
                    let i = this.canvas.getZoom();
                    i *= Math.pow(.999, e),
                    i > 20 && (i = 20),
                    i < .01 && (i = .01),
                    this.canvas.zoomToPoint(new G(t.e.offsetX,t.e.offsetY), i),
                    this.state.onZoomChanged.forward()
                }
                ,
                this.reloadMode = ()=>{
                    this.currentMode && this.currentMode.destroy(),
                    this.currentMode = aa.get(this.state.mode, this.state),
                    this.currentMode.init()
                }
            }
            startAutoLayout(t) {
                setTimeout((()=>{
                    this.reloadLayout(),
                    t && this.state.center()
                }
                )),
                window.addEventListener("resize", this.reloadLayout, !1)
            }
            destroy() {
                return jo(this, void 0, void 0, (function*() {
                    this.currentMode && this.currentMode.destroy(),
                    window.removeEventListener("resize", this.reloadLayout, !1),
                    yield this.canvas.dispose()
                }
                ))
            }
        }
        class da {
            static create(t, e, i) {
                const s = Po.div({
                    class: "mce-toolbox-item",
                    title: e
                });
                s.appendChild(Lo.createSvg(t, "mce-toolbox-item-icon"));
                const r = new da(s,i);
                return s.addEventListener("click", (t=>{
                    t.preventDefault(),
                    r.onClicked.forward(r)
                }
                ), !1),
                r
            }
            constructor(t, e) {
                this.view = t,
                this.mode = e,
                this.onClicked = new Fo
            }
            setIsSelected(t) {
                this.view.classList.toggle("mce-selected", t)
            }
        }
        class ua {
            static create(t) {
                const e = Po.div({
                    class: "mce-toolbox-item",
                    title: "Zoom / Center"
                })
                  , i = Po.div({
                    class: "mce-toolbox-item-zoom"
                });
                e.appendChild(i);
                const s = new ua(e,i,t);
                return e.addEventListener("click", s.onClick, !1),
                s.reloadZoom(),
                t.onZoomChanged.subscribe(s.reloadZoom),
                s
            }
            constructor(t, e, i) {
                this.view = t,
                this.text = e,
                this.state = i,
                this.reloadZoom = ()=>{
                    const t = Math.round(100 * this.state.canvas.getZoom());
                    this.text.innerText = `${t}%`
                }
                ,
                this.onClick = ()=>{
                    this.state.center(),
                    this.reloadZoom()
                }
            }
        }
        class ga {
            static create(t, e) {
                const i = Po.div({
                    class: "mce-toolbox"
                })
                  , s = Po.div({
                    class: "mce-toolbox-top"
                })
                  , r = Po.div({
                    class: "mce-toolbox-bottom"
                });
                i.appendChild(s),
                i.appendChild(r);
                let n = null;
                const o = [da.create(Lo.cursor, "Select", xo.select), !1 !== e.rect && da.create(Lo.rect, "Rect", xo.rect), !1 !== e.textbox && da.create(Lo.text, "Textbox", xo.textbox), !1 !== e.brush && da.create(Lo.brush, "Brush", xo.brush), !1 !== e.image && (n = da.create(Lo.image, "Image", null))].filter(Boolean)
                  , a = new ga(i,t,o);
                for (const t of o)
                    s.appendChild(t.view),
                    t.mode && t.onClicked.subscribe(a.onItemClicked);
                n && n.onClicked.subscribe(a.onOpenImageClicked);
                const h = ua.create(t);
                return r.appendChild(h.view),
                a.reloadSelection(),
                t.onModeChanged.subscribe(a.reloadSelection),
                a
            }
            constructor(t, e, i) {
                this.view = t,
                this.state = e,
                this.items = i,
                this.onItemClicked = t=>{
                    t.mode && this.state.setMode(t.mode)
                }
                ,
                this.onOpenImageClicked = ()=>jo(this, void 0, void 0, (function*() {
                    !function(t) {
                        jo(this, void 0, void 0, (function*() {
                            const e = yield new Promise((t=>{
                                const e = document.createElement("input");
                                e.type = "file",
                                e.accept = "image/*",
                                e.addEventListener("change", (()=>{
                                    if (e.files && e.files.length > 0) {
                                        const i = e.files[0]
                                          , s = new FileReader;
                                        s.onload = ()=>{
                                            const e = new Image;
                                            e.onload = ()=>{
                                                t(e)
                                            }
                                            ,
                                            e.src = s.result
                                        }
                                        ,
                                        s.readAsDataURL(i)
                                    } else
                                        t(null)
                                }
                                )),
                                e.click()
                            }
                            ));
                            if (e) {
                                const i = Math.max(e.width / t.canvas.workspaceWidth, e.height / t.canvas.workspaceHeight)
                                  , s = new bo(e,{
                                    left: 0,
                                    top: 0,
                                    width: e.width,
                                    height: e.height,
                                    scaleX: 1 / i,
                                    scaleY: 1 / i
                                });
                                t.add(s)
                            }
                        }
                        ))
                    }(this.state)
                }
                )),
                this.reloadSelection = ()=>{
                    this.items.forEach((t=>{
                        t.setIsSelected(t.mode === this.state.mode)
                    }
                    ))
                }
            }
        }
        class fa {
            static create(t) {
                const e = new fa(t);
                return window.addEventListener("resize", e.reload, !1),
                e.reload(),
                e
            }
            constructor(t) {
                this.root = t,
                this.reload = ()=>{
                    this.root.clientWidth < 400 ? this.root.classList.add("mce-mobile") : this.root.classList.remove("mce-mobile")
                }
            }
            destroy() {
                window.removeEventListener("resize", this.reload, !1)
            }
        }
        function pa(t, e) {
            const i = new Fo
              , s = Po.element("span", {
                class: "mce-toolbar-label"
            });
            s.textContent = t;
            const r = Po.element("input", {
                class: "mce-toolbar-color-input",
                type: "color",
                value: e
            });
            r.addEventListener("change", (function() {
                i.forward(r.value)
            }
            ), !1);
            const n = Po.div({
                class: "mce-toolbar-item"
            });
            return n.appendChild(s),
            n.appendChild(r),
            {
                view: n,
                onChanged: i
            }
        }
        class ma {
            static create(t) {
                const e = Po.div({
                    class: "mce-toolbar-brush"
                })
                  , i = pa("Fill", t.rect.fillColor);
                e.appendChild(i.view);
                const s = new ma(e,t);
                return i.onChanged.subscribe(s.onFillColorChanged),
                s
            }
            constructor(t, e) {
                this.view = t,
                this.state = e,
                this.onFillColorChanged = t=>{
                    this.state.brush.brushColor = t,
                    this.state.onBrushConfigurationChanged.forward()
                }
            }
            destroy() {}
        }
        class va {
            static create(t) {
                const e = Po.div({
                    class: "mce-toolbar-brush"
                })
                  , i = function(t, e) {
                    const i = new Fo
                      , s = Po.element("span", {
                        class: "mce-toolbar-label"
                    });
                    s.textContent = "Size";
                    const r = Po.element("input", {
                        class: "mce-toolbar-number-input",
                        type: "number",
                        min: "0.5",
                        step: "0.5",
                        value: String(e)
                    });
                    r.addEventListener("change", (function() {
                        const t = Number(r.value);
                        i.forward(t)
                    }
                    ), !1);
                    const n = Po.div({
                        class: "mce-toolbar-item"
                    });
                    return n.appendChild(s),
                    n.appendChild(r),
                    {
                        view: n,
                        onChanged: i
                    }
                }(0, t.brush.brushSize)
                  , s = pa("Color", t.brush.brushColor);
                e.appendChild(i.view),
                e.appendChild(s.view);
                const r = new va(e,t);
                return i.onChanged.subscribe(r.onBrushSizeChanged),
                s.onChanged.subscribe(r.onBrushColorChanged),
                r
            }
            constructor(t, e) {
                this.view = t,
                this.state = e,
                this.onBrushSizeChanged = t=>{
                    this.state.brush.brushSize = t,
                    this.state.onBrushConfigurationChanged.forward()
                }
                ,
                this.onBrushColorChanged = t=>{
                    this.state.brush.brushColor = t,
                    this.state.onBrushConfigurationChanged.forward()
                }
            }
            destroy() {}
        }
        class ya {
            static create(t, e) {
                switch (t) {
                case xo.rect:
                    return ma.create(e);
                case xo.brush:
                    return va.create(e)
                }
                return null
            }
        }
        class xa {
            static create(t) {
                const e = Po.div({
                    class: "mce-toolbar"
                })
                  , i = new xa(e,t);
                return t.onModeChanged.subscribe(i.reload),
                i.reload(),
                i
            }
            constructor(t, e) {
                this.view = t,
                this.state = e,
                this.current = null,
                this.reload = ()=>{
                    this.current && (this.view.removeChild(this.current.view),
                    this.current = null);
                    const t = ya.create(this.state.mode, this.state);
                    t ? (this.current = t,
                    this.view.appendChild(this.current.view),
                    this.view.classList.remove("mce-hidden")) : this.view.classList.add("mce-hidden")
                }
            }
            destroy() {
                this.current && this.current.destroy()
            }
        }
        class _a {
            static createBlank(t, e, i, s) {
                const r = la.createBlank(e, i, s);
                return _a.create(t, r, s)
            }
            static createFromImage(t, e, i, s) {
                var r, n, o;
                const a = null !== (r = i.workspaceWidth) && void 0 !== r ? r : e.width
                  , h = null !== (n = i.workspaceHeight) && void 0 !== n ? n : e.height
                  , c = _a.createBlank(t, a, h, s)
                  , l = {
                    width: e.width,
                    height: e.height,
                    selectable: null === (o = i.selectable) || void 0 === o || o
                };
                if (i.fitToWorkspace) {
                    const t = Math.max(a / e.width, h / e.height);
                    l.left = (a - e.width * t) / 2,
                    l.top = (h - e.height * t) / 2,
                    l.scaleX = t,
                    l.scaleY = t
                }
                const d = new bo(e,l);
                if (c.add(d),
                !1 === i.selectable && i.select)
                    throw new Error("Cannot select an image that is not selectable");
                return !1 !== i.selectable && i.select && c.state.canvas.setActiveObject(d),
                c
            }
            static createFromJSON(t, e, i) {
                return jo(this, void 0, void 0, (function*() {
                    const s = yield la.createFromJSON(t, i);
                    return _a.create(e, s, i)
                }
                ))
            }
            static create(t, e, i) {
                const s = Po.div({
                    class: "mce-editor"
                })
                  , r = e.state
                  , n = ga.create(r, i)
                  , o = xa.create(r);
                if (s.appendChild(n.view),
                s.appendChild(o.view),
                s.appendChild(e.view),
                !1 !== i.sidebar) {
                    const t = Qo.create(r, "object" == typeof i.sidebar ? i.sidebar : {});
                    s.appendChild(t.view)
                }
                t.appendChild(s),
                e.startAutoLayout(!0);
                const a = fa.create(s)
                  , h = new _a(s,e,r,a);
                return r.canvas.on("object:added", h.onAnyChange),
                r.canvas.on("object:modified", h.onAnyChange),
                r.canvas.on("object:moving", h.onAnyChange),
                r.canvas.on("object:removed", h.onAnyChange),
                r.canvas.on("object:resizing", h.onAnyChange),
                r.canvas.on("object:rotating", h.onAnyChange),
                r.canvas.on("object:scaling", h.onAnyChange),
                r.canvas.on("object:skewing", h.onAnyChange),
                r.canvas.on("text:changed", h.onAnyChange),
                r.canvas.on("text:editing:exited", h.onAnyChange),
                r.canvas.on("selection:cleared", h.onAnyChange),
                r.canvas.on("selection:created", h.onAnyChange),
                r.canvas.on("selection:updated", h.onAnyChange),
                r.onLayerOrderChanged.subscribe(h.onAnyChange),
                r.onPropertiesChanged.subscribe(h.onAnyChange),
                h
            }
            constructor(t, e, i, s) {
                this.view = t,
                this.workspace = e,
                this.state = i,
                this.layoutController = s,
                this.onChanged = new Fo,
                this.onAnyChange = ()=>{
                    this.onChanged.forward()
                }
            }
            getWidth() {
                return this.state.canvas.workspaceWidth
            }
            getHeight() {
                return this.state.canvas.workspaceHeight
            }
            getWorkspaceObjects() {
                return this.state.canvas.getWorkspaceObjects()
            }
            add(t) {
                this.state.add(t)
            }
            toJSON() {
                return this.state.canvas.toImageJSON()
            }
            cloneToStaticCanvas() {
                return Eo.createFromJSON(this.toJSON())
            }
            render() {
                const t = this.state.canvas.getZoom()
                  , e = this.state.canvas.width
                  , i = this.state.canvas.height
                  , s = this.state.canvas.viewportTransform
                  , r = this.state.canvas.getActiveObjects().map((t=>{
                    const e = t.controls
                      , i = t.hasBorders;
                    return t.controls = {},
                    t.hasBorders = !1,
                    {
                        object: t,
                        controls: e,
                        hasBorders: i
                    }
                }
                ));
                this.state.canvas.setWidth(this.state.canvas.workspaceWidth),
                this.state.canvas.setHeight(this.state.canvas.workspaceHeight),
                this.state.canvas.setZoom(1),
                this.state.canvas.absolutePan(new G(0,0)),
                this.state.canvas.workspaceBackground.visible = !1;
                const n = this.state.canvas.toCanvasElement(1, {
                    left: 0,
                    top: 0,
                    width: this.state.canvas.workspaceWidth,
                    height: this.state.canvas.workspaceHeight
                });
                return this.state.canvas.setZoom(t),
                this.state.canvas.setWidth(e),
                this.state.canvas.setHeight(i),
                this.state.canvas.setViewportTransform(s),
                this.state.canvas.workspaceBackground.visible = !0,
                r.forEach((({object: t, controls: e, hasBorders: i})=>{
                    t.controls = e,
                    t.hasBorders = i
                }
                )),
                n
            }
            destroy() {
                var t;
                return jo(this, void 0, void 0, (function*() {
                    yield this.workspace.destroy(),
                    this.layoutController.destroy(),
                    null === (t = this.view.parentElement) || void 0 === t || t.removeChild(this.view)
                }
                ))
            }
        }
        var ba = i(624)
          , wa = i.n(ba)
          , Ca = i(440)
          , Sa = i.n(Ca)
          , Ta = i(201)
          , Oa = i.n(Ta)
          , ka = i(210)
          , Da = i.n(ka)
          , Ma = i(180)
          , Ea = i.n(Ma)
          , ja = i(686)
          , Pa = i.n(ja)
          , Aa = i(785)
          , La = {};
        La.styleTagTransform = Pa(),
        La.setAttributes = Da(),
        La.insert = Oa().bind(null, "head"),
        La.domAPI = Sa(),
        La.insertStyleElement = Ea(),
        wa()(Aa.Z, La),
        Aa.Z && Aa.Z.locals && Aa.Z.locals;
        class Fa {
            static preload() {
                const t = new Image;
                const resource = document.getElementById("preview");
                if (resource) {
                    t.src = resource.src;
                } else  t.src = "/template/canvas-editor/2/cat.jpg";
                t.onload = ()=>{
                    Fa.create(t)
                }
            }
            static create(t) {
                const e = document.getElementById("placeholder")
                  , i = document.getElementById("preview")
                  , s = document.getElementById("previewMaskImage")
                  , r = _a.createFromImage(e, t, {
                    selectable: !1
                }, {
                    initialMode: xo.brush,
                    brush: {
                        brushColor: "#ff0000",
                        brushSize: 20
                    },
                    rect: !1,
                    image: !0,
                    textbox: !0
                })
                  , n = new Fa(r,i,s);
                return r.onChanged.subscribe(n.reloadPreview),
                n.reloadPreview(),
                n
            }
            constructor(t, e, i) {-0
                this.editor = t,
                this.previewImage = e,
                this.previewMaskImage = i,
                this.reloadPreview = ()=>function(t, e, i, s) {
                    return new (i || (i = Promise))((function(r, n) {
                        function o(t) {
                            try {
                                h(s.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }
                        function a(t) {
                            try {
                                h(s.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }
                        function h(t) {
                            var e;
                            t.done ? r(t.value) : (e = t.value,
                            e instanceof i ? e : new i((function(t) {
                                t(e)
                            }
                            ))).then(o, a)
                        }
                        h((s = s.apply(t, e || [])).next())
                    }
                    ))
                }(this, void 0, void 0, (function*() {
                    const t = this.editor.getWorkspaceObjects()
                      , e = t.find((t=>t instanceof bo));
                    if (!e || !e.visible)
                        return this.previewImage.src = "",
                        void (this.previewMaskImage.src = "");
                    const [i,s] = Ba(this.editor.getWidth(), this.editor.getHeight());
                    t.forEach((t=>{
                        t !== e && t.render(s)
                    }
                    ));
                    const [r,n] = Ba(this.editor.getWidth(), this.editor.getHeight());
                    e.render(n),
                    function(t, e, i, s) {
                        const r = i.getImageData(0, 0, t, e)
                          , n = s.getImageData(0, 0, t, e);
                        for (let t = 0; t < r.data.length; t += 4)
                            r.data[t + 3] = 255 - n.data[t + 3];
                        i.putImageData(r, 0, 0)
                    }(this.editor.getWidth(), this.editor.getHeight(), n, s),
                    this.previewImage.src = r.toDataURL(),
                    this.previewMaskImage.src = i.toDataURL()
                }
                ))
            }
        }
        function Ba(t, e) {
            const i = document.createElement("canvas");
            i.width = t,
            i.height = e;
            const s = i.getContext("2d");
            return s.fillStyle = "#ffffff00",
            s.fillRect(0, 0, t, e),
            [i, s]
        }

        document.addEventListener("DOMContentLoaded", () => {
            const startButton = document.getElementById("resetTemplateButton");
            if (startButton) {
                console.log('startButton clicked');
                startButton.addEventListener("click", Fa.preload);
            }
        }, false);
    }
    )()
}
)();
