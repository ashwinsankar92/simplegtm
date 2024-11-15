(function(sttc) {
    'use strict';
    var q, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ka = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if (da && typeof Object.setPrototypeOf == "function") la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                ma = pa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = la;

    function ra(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Mh = b.prototype
    }
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ia("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ia("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ia("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ea.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function sa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = t, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ta(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function xa(a) {
        var b = ta(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function ya(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ea(a, b, c) {
        Ea = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ca : Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ha(a) {
        return a
    }

    function Ia(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Mh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.yo = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var Ja = {
        vn: 0,
        un: 1,
        sn: 2
    };
    var Ka;

    function La(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ma(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Na(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Oa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Pa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Qa(a, b, c) {
        let d = c;
        Ma(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ra(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Sa(a, b) {
        return La(a, b) >= 0
    }

    function Ta(a, b) {
        b = La(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Ua(a, b) {
        let c = 0;
        Na(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function Va(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Wa(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xa(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (xa(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Ya(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Za(a, b, c) {
        c = c || $a;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function ab(a, b) {
        if (!xa(a) || !xa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = bb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function $a(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function bb(a, b) {
        return a === b
    }

    function cb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = cb.apply(null, Ya(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function db(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var eb = {
        Ek: "google_adtest",
        Ik: "google_ad_client",
        Rk: "google_ad_intent_query",
        Qk: "google_ad_intent_qetid",
        Pk: "google_ad_intent_eids",
        Jk: "google_ad_format",
        Lk: "google_ad_height",
        el: "google_ad_width",
        Sk: "google_ad_layout",
        Tk: "google_ad_layout_key",
        Vk: "google_ad_output",
        Wk: "google_ad_region",
        Zk: "google_ad_slot",
        bl: "google_ad_type",
        dl: "google_ad_url",
        Tl: "google_gl",
        im: "google_enable_ose",
        sm: "google_full_width_responsive",
        yn: "google_rl_filtering",
        xn: "google_rl_mode",
        zn: "google_rt",
        wn: "google_rl_dest_url",
        Zm: "google_max_radlink_len",
        fn: "google_num_radlinks",
        gn: "google_num_radlinks_per_unit",
        Hk: "google_ad_channel",
        Ym: "google_max_num_ads",
        bn: "google_max_responsive_height",
        Fl: "google_color_border",
        hm: "google_enable_content_recommendations",
        Ql: "google_content_recommendation_ui_type",
        Pl: "google_source_type",
        Ol: "google_content_recommendation_rows_num",
        Nl: "google_content_recommendation_columns_num",
        Ml: "google_content_recommendation_ad_positions",
        Rl: "google_content_recommendation_use_square_imgs",
        Hl: "google_color_link",
        Gl: "google_color_line",
        Jl: "google_color_url",
        Fk: "google_ad_block",
        Yk: "google_ad_section",
        Gk: "google_ad_callback",
        Cl: "google_captcha_token",
        Il: "google_color_text",
        wl: "google_alternate_ad_url",
        Ok: "google_ad_host_tier_id",
        Dl: "google_city",
        Mk: "google_ad_host",
        Nk: "google_ad_host_channel",
        xl: "google_alternate_color",
        El: "google_color_bg",
        jm: "google_encoding",
        qm: "google_font_face",
        um: "google_hints",
        Km: "google_image_size",
        cn: "google_mtl",
        ao: "google_cpm",
        Ll: "google_contents",
        dn: "google_native_settings_key",
        Sl: "google_country",
        Tn: "google_targeting",
        rm: "google_font_size",
        Yl: "google_disable_video_autoplay",
        ro: "google_video_product_type",
        qo: "google_video_doc_id",
        po: "google_cust_gender",
        Nn: "google_cust_lh",
        Mn: "google_cust_l",
        Zn: "google_tfs",
        Rm: "google_kw",
        Qn: "google_tag_for_child_directed_treatment",
        Rn: "google_tag_for_under_age_of_consent",
        Bn: "google_region",
        Vl: "google_cust_criteria",
        Xk: "google_safe",
        Ul: "google_ctr_threshold",
        Dn: "google_resizing_allowed",
        Fn: "google_resizing_width",
        En: "google_resizing_height",
        oo: "google_cust_age",
        Um: "google_language",
        Sm: "google_kw_type",
        on: "google_pucrd",
        mn: "google_page_url",
        Sn: "google_tag_partner",
        Jn: "google_restrict_data_processing",
        Ak: "google_adbreak_test",
        Kk: "google_ad_frequency_hint",
        Ck: "google_admob_interstitial_slot",
        Dk: "google_admob_rewarded_slot",
        Bk: "google_admob_ads_only",
        al: "google_ad_start_delay_hint",
        Xm: "google_max_ad_content_rating",
        rn: "google_ad_public_floor",
        qn: "google_ad_private_floor",
        mo: "google_traffic_source",
        jn: "google_overlays",
        nn: "google_privacy_treatments",
        On: "google_special_category_data",
        so: "google_wrap_fullscreen_ad",
        Uk: "google_ad_loaded_callback"
    };

    function fb() {
        return !1
    }

    function gb() {
        return !0
    }

    function hb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function ib(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function jb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function kb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function lb(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function mb(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var nb = {
            passive: !0
        },
        ob = jb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function pb(a) {
        return a ? a.passive && ob() ? a : a.capture || !1 : !1
    }

    function rb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, pb(d)), !0) : !1
    }

    function sb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, pb(d)), !0) : !1
    };
    var tb = sa(610401301, !1),
        ub = sa(653718497, sa(1, !0));

    function vb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function wb(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function xb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var yb;
    const Bb = t.navigator;
    yb = Bb ? Bb.userAgentData || null : null;

    function Cb(a) {
        return tb ? yb ? yb.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        return xb().indexOf(a) != -1
    };

    function Db() {
        return tb ? !!yb && yb.brands.length > 0 : !1
    }

    function Eb() {
        return Db() ? !1 : u("Opera")
    }

    function Fb() {
        return Db() ? !1 : u("Trident") || u("MSIE")
    }

    function Gb() {
        return u("Firefox") || u("FxiOS")
    }

    function Hb() {
        return u("Safari") && !(Ib() || (Db() ? 0 : u("Coast")) || Eb() || (Db() ? 0 : u("Edge")) || (Db() ? Cb("Microsoft Edge") : u("Edg/")) || (Db() ? Cb("Opera") : u("OPR")) || Gb() || u("Silk") || u("Android"))
    }

    function Ib() {
        return Db() ? Cb("Chromium") : (u("Chrome") || u("CriOS")) && !(Db() ? 0 : u("Edge")) || u("Silk")
    }

    function Jb() {
        return u("Android") && !(Ib() || Gb() || Eb() || u("Silk"))
    };

    function Kb() {
        return tb && yb ? yb.mobile : !Lb() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function Lb() {
        return tb && yb ? !yb.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };

    function Mb(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Nb(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ob(a) {
        return Nb.apply(null, arguments) / arguments.length
    };

    function Qb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Rb(a) {
        var b = Sb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Tb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Ub(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Wb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Vb.length; f++) c = Vb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Xb(a) {
        Xb[" "](a);
        return a
    }
    Xb[" "] = function() {};

    function Yb(a, b) {
        try {
            return Xb(a[b]), !0
        } catch (c) {}
        return !1
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let Zb = globalThis.trustedTypes,
        $b;

    function ac() {
        let a = null;
        if (!Zb) return a;
        try {
            const b = c => c;
            a = Zb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }

    function bc() {
        $b === void 0 && ($b = ac());
        return $b
    };
    var cc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function dc(a) {
        const b = bc();
        return new cc(b ? b.createScriptURL(a) : a)
    }

    function ec(a) {
        if (a instanceof cc) return a.g;
        throw Error("");
    };
    var fc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        gc = new fc("about:invalid#zClosurez");

    function hc(a) {
        if (a instanceof fc) return a.g;
        throw Error("");
    };
    class ic {
        constructor(a) {
            this.Fj = a
        }
    }

    function jc(a) {
        return new ic(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const kc = [jc("data"), jc("http"), jc("https"), jc("mailto"), jc("ftp"), new ic(a => /^[^:]*([/?#]|$)/.test(a))];

    function lc(a, b = kc) {
        if (a instanceof fc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof ic && d.Fj(a)) return new fc(a)
        }
    }
    var mc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function nc(a) {
        if (mc.test(a)) return a
    }

    function oc(a) {
        return a instanceof fc ? hc(a) : nc(a)
    };

    function pc(a) {
        var b = lc("#", kc) || gc;
        b = oc(b);
        b !== void 0 && (a.href = b)
    };
    var qc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };
    var rc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function sc(a) {
        const b = bc();
        return new rc(b ? b.createHTML(a) : a)
    }

    function tc(a) {
        if (a instanceof rc) return a.g;
        throw Error("");
    };

    function uc(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = tc(b)
    }

    function vc(a, b, c) {
        var d = [wc `width`, wc `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof qc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function xc(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const yc = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function zc(a = document) {
        a = ("document" in a ? a.document : a).querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function Ac(a, b) {
        a.src = ec(b);
        (b = zc(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };
    var Bc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Cc(a) {
        if (a instanceof Bc) return a.g;
        throw Error("");
    };

    function Dc(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Ec(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Fc, function(e, f) {
            let g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (uc(d, sc(e + " ")), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Fc = /&([^;\s<&]+);?/g;

    function Gc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Hc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Ic(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Jc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    var Kc = Fb(),
        Lc = u("Edge") || Kc,
        Mc = u("Gecko") && !(wb(xb(), "WebKit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Nc = wb(xb(), "WebKit") && !u("Edge");

    function wc(a) {
        return new qc(a[0].toLowerCase())
    };

    function Oc(a) {
        return new Bc(a[0])
    };

    function Pc(a) {
        return a instanceof rc ? a : sc(Qc(String(a)))
    }

    function Qc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Rc(a) {
        const b = Pc("");
        return sc(a.map(c => tc(Pc(c))).join(tc(b).toString()))
    }
    const Sc = /^[a-z][a-z\d-]*$/i,
        Tc = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var Uc = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const Vc = ["action", "formaction", "href"];

    function Wc(a) {
        if (!Sc.test(a)) throw Error("");
        if (Tc.indexOf(a.toUpperCase()) !== -1) throw Error("");
    }

    function Xc(a, b, c) {
        Wc(a);
        let d = `<${a}`;
        b && (d += Yc(b));
        Array.isArray(c) || (c = c === void 0 ? [] : [c]);
        Uc.indexOf(a.toUpperCase()) !== -1 ? d += ">" : (b = Rc(c.map(e => e instanceof rc ? e : Pc(String(e)))), d += ">" + b.toString() + "</" + a + ">");
        return sc(d)
    }

    function Yc(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Sc.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on./i.test(d)) throw Error("");
                Vc.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof fc ? e.toString() : nc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Pc(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Zc(a, ...b) {
        if (b.length === 0) return dc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return dc(c)
    }

    function $c(a, b) {
        a = ec(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return ad(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function ad(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return dc(a + b + c)
    };

    function bd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return c
    };

    function cd(a) {
        try {
            return !!a && a.location.href != null && Yb(a, "foo")
        } catch {
            return !1
        }
    }

    function dd(a, b = t) {
        b = ed(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = ed(b)
    }

    function ed(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function fd(a) {
        return cd(a.top) ? a.top : null
    }

    function gd(a, b) {
        const c = hd("SCRIPT", a);
        Ac(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function id(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function jd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function kd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ld(a) {
        const b = [];
        kd(a, function(c) {
            b.push(c)
        });
        return b
    }

    function md(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var od = jb(() => Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], nd) || Math.random() < 1E-4);
    const nd = a => xb().indexOf(a) != -1;
    var pd = /^([0-9.]+)px$/,
        qd = /^(-?[0-9.]{1,30})$/;

    function rd(a) {
        if (!qd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function sd(a) {
        return (a = pd.exec(a)) ? +a[1] : null
    }
    var td = {
        fl: "allow-forms",
        gl: "allow-modals",
        il: "allow-orientation-lock",
        jl: "allow-pointer-lock",
        kl: "allow-popups",
        ll: "allow-popups-to-escape-sandbox",
        ml: "allow-presentation",
        ql: "allow-same-origin",
        rl: "allow-scripts",
        ul: "allow-top-navigation",
        vl: "allow-top-navigation-by-user-activation"
    };
    const ud = jb(() => ld(td));

    function vd() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = ud();
        return a.length ? Oa(b, c => !Sa(a, c)) : b
    }

    function wd() {
        const a = hd("IFRAME"),
            b = {};
        Ma(ud(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var xd = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        yd = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (xd(a, b)) return a;
                if (!(a = ed(a))) break
            }
            return null
        },
        zd = jb(() => Kb() ? 2 : Lb() ? 1 : 0),
        v = (a, b) => {
            kd(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Bd = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Ad(a.style.cssText), kd(a, b)
        },
        Ad = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ma((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Cd = a => {
            const b = /!\s*important/i;
            Bd(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Dd = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Ed = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Fd = /.*domain\.test$/,
        Gd = /\.prod\.google\.com(:\d+)?$/;
    var Hd = a => Dd[a] || Ed.test(a) || Fd.test(a) || Gd.test(a);
    let Id = [];
    const Kd = () => {
        const a = Id;
        Id = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Ld = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Md = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ld(),
                    configurable: !1
                })
            } catch (c) {
                b && b.aa(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.aa(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        Nd = (a, b) => {
            a.document.readyState === "complete" ? (Id.push(b), Id.length == 1 && (window.Promise ? Promise.resolve().then(Kd) : window.setImmediate ? setImmediate(Kd) : setTimeout(Kd, 0))) : a.addEventListener("load", b)
        },
        Od = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function hd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Pd = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, cd(a) && (b = a);
            return b
        },
        Rd = a => Ib() && Kb() ? Qd(a) : 1,
        Qd = a => {
            var b = fd(a);
            if (!b) return 1;
            a = zd() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };
    let Sd;

    function Td(a) {
        return (Sd || (Sd = new TextEncoder)).encode(a)
    };

    function Ud(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };
    Jb();
    Ib();
    Hb();
    var Vd = {},
        Wd = null;

    function Xd(a) {
        var b = 3;
        b === void 0 && (b = 0);
        Yd();
        b = Vd[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Zd(a) {
        const b = [];
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Xd(b)
    }

    function $d(a) {
        const b = [];
        ae(a, function(c) {
            b.push(c)
        });
        return b
    }

    function ae(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = Wd[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        Yd();
        let d = 0;
        for (;;) {
            const e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function Yd() {
        if (!Wd) {
            Wd = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                Vd[c] = d;
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    Wd[f] === void 0 && (Wd[f] = e)
                }
            }
        }
    };

    function be(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const ce = /[-_.]/g,
        de = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function ee(a) {
        return de[a] || ""
    }

    function fe(a) {
        return a != null && a instanceof Uint8Array
    }
    var ge = {},
        he = typeof structuredClone != "undefined";

    function ie() {
        return je || (je = new ke(null, ge))
    }
    var ke = class {
        isEmpty() {
            return this.g == null
        }
        constructor(a, b) {
            le(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    let je;

    function le(a) {
        if (a !== ge) throw Error("illegal external caller");
    };

    function me(a, b) {
        const c = ne;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function oe(a) {
        a.Eo = !0;
        return a
    }
    let ne = void 0;
    const pe = oe(a => a !== null && a !== void 0);
    var qe = oe(a => typeof a === "number"),
        re = oe(a => typeof a === "string"),
        se = oe(a => a === void 0);

    function te() {
        var a = ue;
        return oe(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    }
    var ve = oe(a => !!a && (typeof a === "object" || typeof a === "function"));

    function we(a) {
        a.Dj = !0;
        return a
    };

    function xe(a) {
        if (re(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (qe(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var Ae = oe(a => a >= ye && a <= ze);
    const ye = BigInt(Number.MIN_SAFE_INTEGER),
        ze = BigInt(Number.MAX_SAFE_INTEGER);
    let Be = 0,
        Ce = 0,
        De;

    function Ee(a) {
        const b = a >>> 0;
        Be = b;
        Ce = (a - b) / 4294967296 >>> 0
    }

    function Fe(a) {
        if (a < 0) {
            Ee(-a);
            a = Be;
            var b = Ce;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Be = c >>> 0;
            Ce = d >>> 0
        } else Ee(a)
    }

    function Ge(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function He() {
        var a = Be,
            b = Ce,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Ge(a, b);
        return c
    }

    function Ie(a) {
        a.length < 16 ? Fe(Number(a)) : (a = BigInt(a), Be = Number(a & BigInt(4294967295)) >>> 0, Ce = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Je(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Ke = Symbol(),
        Le = Symbol(),
        Me = Symbol(),
        Ne = Symbol();

    function Oe(a) {
        return !!((a[x] | 0) & 2)
    }

    function Pe(a) {
        a[x] |= 34;
        return a
    }

    function Qe(a) {
        a[x] |= 32;
        return a
    }

    function Re(a, b) {
        b[x] = (a | 0) & -30975
    }

    function Se(a, b) {
        b[x] = (a | 34) & -30941
    };
    var Te = {},
        Ue = {};

    function Ve(a) {
        return !(!a || typeof a !== "object" || a.Jj !== Ue)
    }

    function We(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Xe(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function Ye(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new ke(a, ge) : ie();
            else if (a.constructor !== ke)
            if (fe(a)) a = a.length ? new ke(c ? a : new Uint8Array(a), ge) : ie();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function Ze(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var $e;
    const af = [];
    af[x] = 55;
    $e = Object.freeze(af);

    function bf(a) {
        if (a & 2) throw Error();
    }

    function cf(a, b) {
        if (typeof b !== "number" || b < 0 || b > a.length) throw Error();
    }
    class df {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new df(this.g, this.i, this.l)
        }
    }
    var ef = Object.freeze({}),
        ff = Object.freeze({}),
        gf = Object.freeze({});
    let hf, jf;

    function kf(a) {
        if (jf) throw Error("");
        jf = b => {
            t.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function lf(a) {
        if (jf) try {
            jf(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function mf() {
        const a = Error();
        Dc(a, "incident");
        jf ? lf(a) : Ud(a)
    }

    function nf(a) {
        a = Error(a);
        Dc(a, "warning");
        lf(a);
        return a
    };

    function of (a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function pf(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function qf(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${ta(a)}: ${a}`);
        return a
    }

    function rf(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const uf = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function vf(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : uf.test(a)
    }

    function wf(a) {
        if (!Number.isFinite(a)) throw nf("enum");
        return a | 0
    }

    function xf(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function yf(a) {
        if (typeof a !== "number") throw nf("int32");
        if (!Number.isFinite(a)) throw nf("int32");
        return a | 0
    }

    function zf(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Af(a) {
        if (typeof a !== "number") throw nf("uint32");
        if (!Number.isFinite(a)) throw nf("uint32");
        return a >>> 0
    }

    function Bf(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Cf(a, b = 0) {
        if (!vf(a)) throw nf("int64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Df(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return Ef(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return Ff(a);
                    case "bigint":
                        return xe(BigInt.asIntN(64, a));
                    default:
                        return Gf(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return Df(a);
                    case "bigint":
                        return xe(BigInt.asIntN(64, a));
                    default:
                        return Hf(a)
                }
            default:
                return xc(b, "Unknown format requested type for int64")
        }
    }

    function If(a) {
        return a == null ? a : Cf(a, 0)
    }

    function Jf(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Kf(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Lf(a) {
        if (a < 0) {
            Fe(a);
            const b = Ge(Be, Ce);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Jf(String(a))) return a;
        Fe(a);
        return Ce * 4294967296 + (Be >>> 0)
    }

    function Hf(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Fe(a);
            var b = Be,
                c = Ce;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Mf(a) {
        a = Math.trunc(a);
        return a >= 0 && Number.isSafeInteger(a) ? a : Lf(a)
    }

    function Ef(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Kf(b) ? a = b : (Fe(a), a = He())
            }
        }
        return a
    }

    function Nf(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Jf(b) ? a = b : (Fe(a), a = Ge(Be, Ce))
            }
        }
        return a
    }

    function Df(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Kf(a) || (Ie(a), a = He());
        return a
    }

    function Ff(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return xe(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return xe(BigInt.asIntN(64, BigInt(a)))
    }

    function Gf(a) {
        return Number.isSafeInteger(a) ? xe(Hf(a)) : xe(Ef(a))
    }

    function Of(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Jf(a) || (Ie(a), a = Ge(Be, Ce));
        return a
    }

    function Pf(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return Ae(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Ae(a) ? Number(a) : String(a)), a;
        if (vf(a)) return typeof a === "number" ? Hf(a) : Df(a)
    }

    function Qf(a, b = 0) {
        if (!vf(a)) throw nf("uint64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Of(a);
                    case "bigint":
                        return String(BigInt.asUintN(64, a));
                    default:
                        return Nf(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = xe(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = xe(BigInt.asUintN(64, BigInt(a)))), a;
                    case "bigint":
                        return xe(BigInt.asUintN(64, a));
                    default:
                        return Number.isSafeInteger(a) ? xe(Mf(a)) : xe(Nf(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Of(a);
                    case "bigint":
                        return xe(BigInt.asUintN(64, a));
                    default:
                        return Mf(a)
                }
            default:
                return xc(b, "Unknown format requested type for int64")
        }
    }

    function Rf(a) {
        return a == null ? a : Qf(a, 0)
    }

    function Sf(a) {
        const b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (vf(a)) return b === "string" ? Of(a) : Nf(a)
    }

    function Tf(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String(BigInt.asIntN(64, a));
        if (vf(a)) {
            if (b === "string") return Df(a);
            if (b === "number") return Hf(a)
        }
    }

    function Uf(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (vf(a)) {
            if (b === "string") return Of(a);
            if (b === "number") return Mf(a)
        }
    }

    function Vf(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Wf(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Xf(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Yf(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Ld === Te) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Zf(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function Zf(a) {
        var b = a[Ke];
        if (b) return b;
        b = new a;
        Pe(b.P);
        return a[Ke] = b
    }

    function $f(a, b, c) {
        return b ? Vf(a) : Xf(a) ? ? (c ? "" : void 0)
    };

    function ag(a) {
        bg === void 0 && (bg = typeof Proxy === "function" ? cg(Proxy) : null);
        if (!bg || !dg()) return a;
        let b = eg ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        fg(a);
        b = new bg(a, {
            set(c, d, e) {
                gg();
                c[d] = e;
                return !0
            }
        });
        hg(a, b);
        return b
    }

    function gg() {
        mf()
    }
    let eg = void 0,
        ig = void 0;

    function hg(a, b) {
        (eg || (eg = new jg)).set(a, b);
        (ig || (ig = new jg)).set(b, a)
    }
    let bg = void 0,
        jg = void 0;

    function dg() {
        jg === void 0 && (jg = typeof WeakMap === "function" ? cg(WeakMap) : null);
        return jg
    }

    function cg(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch {
            return null
        }
    }
    let kg = void 0;

    function fg(a) {
        if (kg === void 0) {
            const b = new bg([], {});
            kg = Array.prototype.concat.call([], b).length === 1
        }
        kg && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function lg(a, b, c) {
        if (dg()) {
            if (mg ? .get(b) ? .get(a)) {
                if (c) return
            } else if (Math.random() > .01) return;
            var d = a.length;
            c = {
                length: d
            };
            for (var e = 0; e < Math.min(d, 10); e++) {
                if (d <= 10) var f = e;
                else {
                    f = d / 10;
                    const g = Math.floor(e * f);
                    f = g + Math.floor(Math.random() * (Math.floor((e + 1) * f) - g))
                }
                c[f] = a[f]
            }
            ng(a, c) ? (d = mg || (mg = new jg), e = d.get(b), e || (e = new jg, d.set(b, e)), e.set(a, c)) : (mf(), og(a, b))
        }
    }

    function pg(a, b) {
        const c = mg ? .get(b) ? .get(a);
        c && !ng(a, c) && (qg(), og(a, b))
    }

    function ng(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Xe(b, e) && Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function rg(a) {
        if (a && mg ? .has(a)) {
            var b = a.P;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && We(d))
                        for (const e in d) {
                            if (!Xe(d, e)) continue;
                            const f = d[e];
                            Array.isArray(f) && pg(f, a)
                        } else Array.isArray(d) && pg(d, a)
                }
        }
    }

    function qg() {
        mf()
    }
    let mg = void 0;

    function og(a, b) {
        mg ? .get(b) ? .delete(a)
    };
    let sg;

    function tg(a, b) {
        sg = b;
        a = new a(b);
        sg = void 0;
        return a
    }
    let ug, vg;

    function wg(a) {
        switch (typeof a) {
            case "boolean":
                return ug || (ug = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? vg || (vg = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function xg(a, b, c) {
        a = yg(a, b[0], b[1], c ? 1 : 2);
        b !== ug && c && (a[x] |= 16384);
        return a
    }

    function yg(a, b, c, d) {
        d = d ? ? 0;
        a == null && (a = sg);
        sg = void 0;
        if (a == null) {
            var e = 96;
            c ? (a = [c], e |= 512) : a = [];
            b && (e = e & -33521665 | (b & 1023) << 15)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = a[x] | 0;
            if (e & 2048) throw Error("farr");
            if (e & 64) return a;
            d === 1 || d === 2 || (e |= 64);
            if (c && (e |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                if (d = c.length) {
                    const f = d - 1;
                    if (We(c[f])) {
                        e |= 256;
                        b = f - (+!!(e & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        e = e & -33521665 | (b & 1023) << 15;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, d - (+!!(e & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    e = e & -33521665 | (b & 1023) << 15
                }
            }
        }
        a[x] = e;
        return a
    };
    const zg = {},
        Ag = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Bg(a) {
        return a
    }

    function Cg(a) {
        if (a.Wb & 2) throw Error("Cannot mutate an immutable Map");
    }
    var Gg = class extends Ag {
        constructor(a, b, c = Bg, d = Bg) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.Wb = a[x] = e;
            this.ge = b;
            this.yc = c;
            this.cg = this.ge ? Dg : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        Zf(a = Eg) {
            if (this.size !== 0) return this.Yf(a)
        }
        Yf(a = Eg) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            Cg(this);
            super.clear()
        }
        delete(a) {
            Cg(this);
            return super.delete(this.yc(a, !0, !1))
        }
        entries() {
            var a = this.Yg();
            return new df(a, Fg, this)
        }
        keys() {
            return this.Gj()
        }
        values() {
            var a = this.Yg();
            return new df(a, Gg.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Cg(this);
            a = this.yc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.cg(b, !0, !0, this.ge, !1, this.Wb))
        }
        has(a) {
            return super.has(this.yc(a, !1, !1))
        }
        get(a) {
            a = this.yc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.ge;
                return c ? (c = this.cg(b, !1, !0, c, this.Ei,
                    this.Wb), c !== b && super.set(a, c), c) : b
            }
        }
        Yg() {
            return Array.from(super.keys())
        }
        Gj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    Gg.prototype.toJSON = void 0;
    Gg.prototype.Jj = Ue;

    function Dg(a, b, c, d, e, f) {
        a = Yf(a, d, c, f);
        e && (a = Hg(a));
        return a
    }

    function Eg(a) {
        return a
    }

    function Fg(a) {
        return [a, this.get(a)]
    }
    let Ig;

    function Jg() {
        return Ig || (Ig = new Gg(Pe([]), void 0, void 0, void 0, zg))
    };

    function Kg(a, b) {
        return Lg(b)
    }

    function Lg(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Ae(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Ze(a)) return
                    } else {
                        if (fe(a)) return be(a);
                        if (a instanceof ke) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = be(b)
                        }
                        if (a instanceof Gg) return a.Zf()
                    }
        }
        return a
    };

    function Mg(a, b, c) {
        a = Je(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Xe(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Ng(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Ze(a) ? void 0 : e && (a[x] | 0) & 2 ? a : Og(a, b, c, d !== void 0, e);
            else if (We(a)) {
                const f = {};
                for (let g in a) Xe(a, g) && (f[g] = Ng(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Og(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Je(a);
        for (let g = 0; g < a.length; g++) a[g] = Ng(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Pg(a) {
        return Ng(a, Qg, void 0, void 0, !1)
    }

    function Qg(a) {
        a.Ld === Te ? a = a.toJSON() : a instanceof ke ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = fe(a) ? new Uint8Array(a) : a instanceof Gg ? a.Zf(Pg) : a;
        return a
    }

    function Rg(a) {
        return Ng(a, Sg, void 0, void 0, !1)
    }

    function Sg(a) {
        return a.Ld === Te ? a.toJSON() : a instanceof Gg ? a.Zf(Rg) : Lg(a)
    }
    var Tg = he ? structuredClone : a => Og(a, Qg, void 0, void 0, !1);

    function Ug(a, b, c = Se) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : Og(a, Ug, d & 4 ? Se : c, !0, !0)
            }
            a.Ld === Te ? (c = a.P, d = c[x], a = d & 2 ? a : Vg(a, c, d, !0)) : a instanceof Gg && !(a.Wb & 2) && (c = Pe(a.Yf(Ug)), a = new Gg(c, a.ge, a.yc, a.cg));
            return a
        }
    }

    function Wg(a) {
        const b = a.P;
        return Vg(a, b, b[x], !1)
    }

    function Vg(a, b, c, d) {
        rg(a);
        return tg(a.constructor, Xg(b, c, d))
    }

    function Xg(a, b, c) {
        const d = c || b & 2 ? Se : Re,
            e = !!(b & 32);
        a = Mg(a, b, f => Ug(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Hg(a) {
        const b = a.P,
            c = b[x];
        return c & 2 ? Vg(a, b, c, !1) : a
    };
    const Yg = xe(0);

    function Zg(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Ne] = (a.constructor[Ne] | 0) + 1) < 5 && mf();
        return c === 0 ? !1 : !(c & b)
    }

    function $g(a, b) {
        a = a.P;
        return ah(a, a[x], b)
    }

    function bh(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function ah(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (bh(a, b, e, c) && Le != null && (a = hf ? ? (hf = {}), b = a[Le] || 0, b >= 4 || (a[Le] = b + 1, mf())), d) : bh(a, b, e, c)
        }
    }

    function ch(a, b, c) {
        const d = a.P;
        let e = d[x];
        bf(e);
        dh(d, e, b, c);
        return a
    }

    function dh(a, b, c, d) {
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            let f, g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return g;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[x] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function eh(a, b, c) {
        return fh(a, b, c, !1) !== void 0
    }

    function gh(a, b, c, d) {
        return fh(a, b, hh(a, d, c)) !== void 0
    }

    function ih(a, b) {
        a = a.P;
        let c = a[x];
        const d = ah(a, c, b),
            e = pf(d);
        e != null && e !== d && dh(a, c, b, e);
        return e
    }

    function y(a) {
        return a === ef ? 2 : 5
    }

    function jh(a, b, c, d, e, f, g) {
        const h = a.P;
        let k = h[x];
        d = 2 & k ? 1 : d;
        f = !!f;
        e = kh(h, k, b, e);
        var l = e[x] | 0,
            m = e;
        pg(m, a);
        d !== 2 && d !== 1 || og(m, a);
        if (Zg(a, l, g, f)) {
            4 & l && (e = Je(e), l = lh(l, k), k = dh(h, k, b, e));
            let p = m = 0;
            for (; m < e.length; m++) {
                const r = c(e[m]);
                r != null && (e[p++] = r)
            }
            p < m && (e.length = p);
            l = mh(l, k);
            l = (l | 20) & -4097;
            l &= -8193;
            g && (l |= g);
            e[x] = l;
            2 & l && Object.freeze(e)
        }
        let n;
        d === 1 || d === 4 && 32 & l ? nh(l) || (a = l, l |= 2, l !== a && (e[x] = l), Object.freeze(e)) : (g = d !== 5 ? !1 : !!(32 & l) || nh(l) || !!eg ? .get(e), (d === 2 || g) && nh(l) && (e = Je(e), l = lh(l, k), l = oh(l,
            k, f), e[x] = l, k = dh(h, k, b, e)), nh(l) || (b = l, l = oh(l, k, f), l !== b && (e[x] = l)), g ? (n = ag(e), lg(e, a, !0)) : d !== 2 || f || eg ? .delete(e));
        return n || e
    }

    function kh(a, b, c, d) {
        a = ah(a, b, c, d);
        return Array.isArray(a) ? a : $e
    }

    function mh(a, b) {
        a === 0 && (a = lh(a, b));
        return a | 1
    }

    function nh(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ph(a) {
        var b = qh,
            c = a.P;
        const d = c[x];
        var e = ah(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                g = d & 2;e = !1;
            if (f == null) {
                if (g) {
                    c = Jg();
                    break a
                }
                f = []
            } else if (f.constructor === Gg) {
                if ((f.Wb & 2) == 0 || g) {
                    c = f;
                    break a
                }
                f = f.Yf()
            } else Array.isArray(f) ? e = Oe(f) : f = [];
            if (g) {
                if (!f.length) {
                    c = Jg();
                    break a
                }
                e || (e = !0, Pe(f))
            } else if (e) {
                e = !1;
                g = Je(f);
                for (f = 0; f < g.length; f++) {
                    const h = g[f] = Je(g[f]);
                    Array.isArray(h[1]) && (h[1] = Pe(h[1]))
                }
                f = g
            }
            e || ((f[x] | 0) & 64 ? f[x] &= -33 : 32 & d && Qe(f));e = new Gg(f, b, $f, void 0);dh(c, d, 14, e);c = e
        }!a && b && (c.Ei = !0);
        return c
    }

    function rh(a, b, c, d) {
        const e = a.P;
        let f = e[x];
        bf(f);
        if (c == null) return dh(e, f, b), a;
        c = ig ? .get(c) || c;
        let g = c[x] | 0,
            h = g;
        const k = !!(2 & g) || Object.isFrozen(c);
        var l;
        if (l = !k)(l = void 0 === gf) || (l = (ub || !1) && void 0 !== ff);
        if (Zg(a, g)) {
            g = 21;
            k && (c = Je(c), h = 0, g = lh(g, f), g = oh(g, f, !0));
            for (let m = 0; m < c.length; m++) c[m] = d(c[m])
        }
        l ? (c = Je(c), h = 0, g = lh(g, f), g = oh(g, f, !0)) : k || lg(c, a);
        g !== h && (c[x] = g);
        dh(e, f, b, c);
        return a
    }

    function sh(a, b, c, d) {
        const e = a.P;
        let f = e[x];
        bf(f);
        dh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function th(a, b, c, d) {
        const e = a.P;
        var f = e[x];
        bf(f);
        if (d == null) {
            var g = uh(e);
            if (vh(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = uh(e);
            const h = vh(g, e, f, c);
            h !== b && (h && (f = dh(e, f, h)), g.set(c, b))
        }
        dh(e, f, b, d);
        return a
    }

    function hh(a, b, c) {
        return wh(a, b) === c ? c : -1
    }

    function wh(a, b) {
        a = a.P;
        return vh(uh(a), a, a[x], b)
    }

    function uh(a) {
        return a[Me] ? ? (a[Me] = new Map)
    }

    function vh(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            ah(b, c, g) != null && (e !== 0 && (c = dh(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function xh(a) {
        var b = yh;
        a = a.P;
        let c = a[x];
        bf(c);
        const d = ah(a, c, 26);
        b = Hg(Yf(d, b, !0, c));
        d !== b && dh(a, c, 26, b);
        return b
    }

    function fh(a, b, c, d) {
        a = a.P;
        let e = a[x];
        d = ah(a, e, c, d);
        b = Yf(d, b, !1, e);
        b !== d && b != null && dh(a, e, c, b);
        return b
    }

    function zh(a, b) {
        return (a = fh(a, b, 1, !1)) ? a : Zf(b)
    }

    function z(a, b, c) {
        b = fh(a, b, c, !1);
        if (b == null) return b;
        a = a.P;
        let d = a[x];
        if (!(d & 2)) {
            const e = Hg(b);
            e !== b && (b = e, dh(a, d, c, b))
        }
        return b
    }

    function Ah(a, b, c, d, e, f, g, h) {
        const k = a.P;
        var l = !!(2 & b);
        e = l ? 1 : e;
        g = !!g;
        h && (h = !l);
        f = kh(k, b, d, f);
        var m = f[x] | 0;
        l = f;
        pg(l, a);
        e !== 2 && e !== 1 || og(l, a);
        l = !!(4 & m);
        if (!l) {
            m = mh(m, b);
            var n = f,
                p = b;
            const w = !!(2 & m);
            w && (p |= 2);
            let D = !w,
                B = !0,
                G = 0,
                E = 0;
            for (; G < n.length; G++) {
                const A = Yf(n[G], c, !1, p);
                if (A instanceof c) {
                    if (!w) {
                        const F = Oe(A.P);
                        D && (D = !F);
                        B && (B = F)
                    }
                    n[E++] = A
                }
            }
            E < G && (n.length = E);
            m |= 4;
            m = B ? m | 16 : m & -17;
            m = D ? m | 8 : m & -9;
            n[x] = m;
            w && Object.freeze(n)
        }
        if (h && !(8 & m || !f.length && (e === 1 || e === 4 && 32 & m))) {
            nh(m) ? (f = Je(f), m = lh(m, b), b = dh(k, b,
                d, f)) : og(f, a);
            c = f;
            h = m;
            for (n = 0; n < c.length; n++) m = c[n], p = Hg(m), m !== p && (c[n] = p);
            h |= 8;
            h = c.length ? h & -17 : h | 16;
            m = c[x] = h
        }
        let r;
        e === 1 || e === 4 && 32 & m ? nh(m) || (a = m, m |= !f.length || 16 & m && (!l || 32 & m) ? 2 : 2048, m !== a && (f[x] = m), Object.freeze(f)) : (l = e !== 5 ? !1 : !!(32 & m) || nh(m) || !!eg ? .get(f), (e === 2 || l) && nh(m) && (f = Je(f), m = lh(m, b), m = oh(m, b, g), f[x] = m, b = dh(k, b, d, f)), nh(m) || (d = m, m = oh(m, b, g), m !== d && (f[x] = m)), l ? (r = ag(f), lg(f, a, !0)) : e !== 2 || g || eg ? .delete(f));
        return r || f
    }

    function Bh(a, b, c, d) {
        const e = a.P[x];
        return Ah(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function C(a, b, c) {
        c == null && (c = void 0);
        return ch(a, b, c)
    }

    function H(a, b, c, d) {
        d == null && (d = void 0);
        return th(a, b, c, d)
    }

    function Ch(a, b, c) {
        const d = a.P;
        let e = d[x];
        bf(e);
        if (c == null) return dh(d, e, b), a;
        c = ig ? .get(c) || c;
        let f = c[x] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === gf || (ub || !1) && void 0 !== ff);
        let m = !0,
            n = !0;
        for (let r = 0; r < c.length; r++) {
            var p = c[r];
            h || (p = Oe(p.P), m && (m = !p), n && (n = p))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        l || k && f !== g ? (c = Je(c), g = 0, f = lh(f, e), f = oh(f, e, !0)) : k || lg(c, a);
        f !== g && (c[x] = f);
        dh(d, e, b, c);
        return a
    }

    function lh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function oh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Dh(a, b, c, d, e, f, g) {
        bf(a.P[x]);
        b = e(a, b, 2, void 0, !0);
        e = b[x] | 0;
        e = (4 & e ? 4096 & e ? 4096 : 8192 & e ? 8192 : 0 : void 0) ? ? 0;
        if (g)
            if (Array.isArray(d))
                for (d = ig ? .get(d) || d, f = d.length, g = 0; g < f; g++) b.push(c(d[g], e));
            else
                for (const h of d) b.push(c(h, e));
        else f && cf(b), b.push(c(d, e));
        return a
    }

    function Eh(a, b, c, d, e, f, g, h) {
        const k = a.P[x];
        bf(k);
        a = Ah(a, k, c, b, 2, f, !0);
        if (g && h) {
            e ? ? (e = a.length - 1);
            if (typeof e !== "number" || e < 0 || e >= a.length) throw Error();
            a.splice(e, g)
        } else g ? cf(a, e) : d = d != null ? d : new c, e != void 0 ? a.splice(e, g, d) : a.push(d), a[x] = Oe(d.P) ? a[x] & -9 : a[x] & -17
    }

    function Fh(a, b, c, d) {
        Eh(a, b, c, d);
        return a
    }

    function Gh(a, b) {
        return Pf($g(a, b))
    }

    function Hh(a, b, c, d, e) {
        return jh(a, b, Pf, c, d, e, 0)
    }

    function Ih(a, b) {
        return a ? ? b
    }

    function Jh(a, b) {
        return rf($g(a, b))
    }

    function Kh(a, b) {
        return zf($g(a, b))
    }

    function I(a, b) {
        return Xf($g(a, b))
    }

    function Lh(a, b) {
        return xf($g(a, b))
    }

    function J(a, b, c = !1) {
        return Ih(Jh(a, b), c)
    }

    function Mh(a, b) {
        return Ih(Kh(a, b), 0)
    }

    function Nh(a, b) {
        return Ih(Gh(a, b), 0)
    }

    function Oh(a, b) {
        a = $g(a, b);
        b = typeof a;
        a = a == null ? a : b === "bigint" ? xe(BigInt.asIntN(64, a)) : vf(a) ? b === "string" ? Ff(a) : Gf(a) : void 0;
        return a ? ? Yg
    }

    function Ph(a, b, c = 0) {
        return Ih(ih(a, b), c)
    }

    function K(a, b) {
        return Ih(I(a, b), "")
    }

    function Qh(a, b) {
        return Ih(Lh(a, b), 0)
    }

    function Rh(a, b) {
        return jh(a, b, zf, y())
    }

    function Sh(a, b, c, d, e) {
        return jh(a, b, Xf, c, d, e)
    }

    function Th(a, b, c, d, e) {
        return jh(a, b, xf, c, d, e)
    }

    function Uh(a, b, c, d) {
        return z(a, b, hh(a, d, c))
    }

    function Vh(a, b) {
        a = Jh(a, b);
        return a == null ? void 0 : a
    }

    function Wh(a, b) {
        a = Kh(a, b);
        return a == null ? void 0 : a
    }

    function Xh(a) {
        a = ih(a, 4);
        return a == null ? void 0 : a
    }

    function Yh(a, b) {
        a = I(a, b);
        return a == null ? void 0 : a
    }

    function Zh(a, b) {
        a = Lh(a, b);
        return a == null ? void 0 : a
    }

    function $h(a, b, c) {
        return ch(a, b, c == null ? c : qf(c))
    }

    function M(a, b, c) {
        return sh(a, b, c == null ? c : qf(c), !1)
    }

    function ai(a, b, c) {
        return ch(a, b, c == null ? c : yf(c))
    }

    function bi(a, b, c) {
        return sh(a, b, c == null ? c : yf(c), 0)
    }

    function ci(a, b, c) {
        return ch(a, b, If(c))
    }

    function di(a, b, c) {
        return sh(a, b, If(c), "0")
    }

    function ei(a, b, c) {
        return ch(a, b, Wf(c))
    }

    function fi(a, b, c) {
        return sh(a, b, Wf(c), "")
    }

    function gi(a, b, c) {
        return ch(a, b, c == null ? c : wf(c))
    }

    function N(a, b, c) {
        return sh(a, b, c == null ? c : wf(c), 0)
    }

    function hi(a, b) {
        return Jh(a, b) != null
    };
    let ii;

    function ji(a) {
        try {
            return ii = !0, JSON.stringify(ki(a), Kg)
        } finally {
            ii = !1
        }
    }
    var O = class {
        constructor(a) {
            this.P = yg(a)
        }
        toJSON() {
            return ki(this)
        }
        i() {
            const a = this.P,
                b = a[x];
            return b & 2 ? this : Vg(this, a, b, !0)
        }
    };
    O.prototype.Ld = Te;

    function ki(a) {
        rg(a);
        a = ii ? a.P : Og(a.P, Sg, void 0, void 0, !1); {
            var b = !ii;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = We(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let m in f) Xe(f, m) && (isNaN(+m) ? (g ? ? (g = {}))[m] = f[m] : (d = f[m], Array.isArray(d) && (Ze(d) || Ve(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null && ((g ? ? (g = {}))[m] = d)));h || (g = f);
                        if (g)
                            for (let m in g) {
                                h = g;
                                break b
                            }
                        h = null
                    }
                    f = h == null ? c != null : h !== c
                }
                for (; l > 0; l--) {
                    g = e[l - 1];
                    if (!(g == null || Ze(g) || Ve(g) && g.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e =
                        Array.prototype.slice.call(e, 0, l);
                    else if (k || f || h) e.length = l;
                    h && e.push(h)
                }
                k = e
            } else k = a
        }
        return k
    }

    function li(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return tg(a, Qe(b))
    };

    function mi(a) {
        a = BigInt.asUintN(64, a);
        return new ni(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function oi(a) {
        if (!a) return pi || (pi = new ni(0, 0));
        if (!/^\d+$/.test(a)) return null;
        Ie(a);
        return new ni(Be, Ce)
    }
    var ni = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let pi;

    function qi(a) {
        a = BigInt.asUintN(64, a);
        return new ri(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function si(a) {
        if (!a) return ti || (ti = new ri(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Ie(a);
        return new ri(Be, Ce)
    }
    var ri = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let ti;

    function ui(a, b, c) {
        for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }

    function vi(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function wi(a, b) {
        if (b >= 0) vi(a, b);
        else {
            for (let c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    }

    function xi(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    }
    var yi = class {
        constructor() {
            this.g = []
        }
        length() {
            return this.g.length
        }
        end() {
            const a = this.g;
            this.g = [];
            return a
        }
    };

    function zi(a, b) {
        b.length !== 0 && (a.j.push(b), a.i += b.length)
    }

    function Ai(a, b) {
        zi(a, a.g.end());
        zi(a, b)
    }

    function Bi(a, b, c) {
        vi(a.g, b * 8 + c)
    }

    function Ci(a, b) {
        Bi(a, b, 2);
        b = a.g.end();
        zi(a, b);
        b.push(a.i);
        return b
    }

    function Di(a, b) {
        var c = b.pop();
        for (c = a.i + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.i++;
        b.push(c);
        a.i++
    }

    function Ei(a) {
        zi(a, a.g.end());
        const b = new Uint8Array(a.i),
            c = a.j,
            d = c.length;
        let e = 0;
        for (let f = 0; f < d; f++) {
            const g = c[f];
            b.set(g, e);
            e += g.length
        }
        a.j = [b];
        return b
    }

    function Fi(a, b, c, d) {
        c != null && (b = Ci(a, b), d(c, a), Di(a, b))
    }

    function Gi(a, b, c) {
        var d = Hi;
        if (c != null)
            for (let e = 0; e < c.length; e++) {
                const f = Ci(a, b);
                d(c[e], a);
                Di(a, f)
            }
    }
    var Ii = class {
        constructor() {
            this.j = [];
            this.i = 0;
            this.g = new yi
        }
    };

    function Ji() {
        const a = class {
            constructor() {
                throw Error();
            }
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Ki = Ji(),
        Li = Ji(),
        Mi = Ji(),
        Ni = Ji(),
        Oi = Ji(),
        Pi = Ji(),
        Qi = Ji(),
        Ri = Ji();
    var Si = class {
        constructor(a, b) {
            this.g = a;
            a = Ha(Ki);
            this.i = !!a && b === a || !1
        }
    };

    function Ti(a, b, c, d, e) {
        Fi(a, c, Ui(b, d), e)
    }
    const Vi = new Si(Ti, Ki),
        Wi = new Si(Ti, Ki);
    var Xi = Symbol(),
        Yi = Symbol();
    let Zi, $i;

    function aj(a) {
        var b = bj,
            c = cj,
            d = a[Xi];
        if (d) return d;
        d = {};
        d.eh = wg(a[0]);
        var e = a[1];
        let f = 1;
        e && e.constructor === Object && (d.ej = e, e = a[++f], typeof e === "function" && (d.Cj = !0, Zi ? ? (Zi = e), $i ? ? ($i = a[f + 1]), e = a[f += 2]));
        const g = {};
        for (; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
            for (var h = 0; h < e.length; h++) g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0;) {
            typeof e === "number" && (h += e, e = a[++f]);
            let m;
            var k = void 0;
            e instanceof Si ? m = e : (m = Vi, f--);
            if (m ? .i) {
                e = a[++f];
                k = a;
                var l = f;
                typeof e === "function" && (e = e(), k[l] =
                    e);
                k = e
            }
            e = a[++f];
            l = h + 1;
            typeof e === "number" && e < 0 && (l -= e, e = a[++f]);
            for (; h < l; h++) {
                const n = g[h];
                k ? c(d, h, m, k, n) : b(d, h, m, n)
            }
        }
        return a[Xi] = d
    }

    function Ui(a, b) {
        if (a instanceof O) return rg(a), a.P;
        if (Array.isArray(a)) return xg(a, b, !1)
    };

    function bj(a, b, c) {
        a[b] = c.g
    }

    function cj(a, b, c, d) {
        let e, f;
        const g = c.g;
        a[b] = (h, k, l) => g(h, k, l, f || (f = aj(d).eh), e || (e = dj(d)))
    }

    function dj(a) {
        let b = a[Yi];
        if (!b) {
            const c = aj(a);
            b = (d, e) => ej(d, e, c);
            a[Yi] = b
        }
        return b
    }

    function ej(a, b, c) {
        var d = a[x] | 0,
            e = +!!(d & 512) - 1,
            f = a.length,
            g = d & 512 ? 1 : 0;
        const h = f + (d & 256 ? -1 : 0);
        for (; g < h; g++) {
            const k = a[g];
            if (k == null) continue;
            const l = g - e,
                m = fj(c, l);
            m && m(b, k, l)
        }
        if (d & 256) {
            a = a[f - 1];
            for (const k in a) Xe(a, k) && (d = +k, Number.isNaN(d) || (e = a[d], e != null && (f = fj(c, d)) && f(b, e, d)))
        }
    }

    function fj(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.ej)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof Si ? c : [Wi, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    const e = dj(c),
                        f = aj(c).eh;
                    c = a.Cj ? $i(f, e) : (g, h, k) => d(g, h, k, f, e)
                } else c = d;
                return a[b] = c
            }
    };

    function gj(a, b, c) {
        if (Array.isArray(b)) {
            var d = b[x] | 0;
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                const g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (b[x] = (d | 5) & -12289, d & 2 && Object.freeze(b));
            return b
        }
    }

    function hj(a, b) {
        return new Si(a, b)
    }

    function ij(a, b) {
        return new Si(a, b)
    }
    var jj = new Si(function(a, b, c, d, e) {
        if (b instanceof Gg) b.forEach((f, g) => {
            Fi(a, c, xg([g, f], d, !1), e)
        });
        else if (Array.isArray(b))
            for (let f = 0; f < b.length; f++) {
                const g = b[f];
                Array.isArray(g) && Fi(a, c, xg(g, d, !1), e)
            }
    }, Ki);

    function kj(a, b, c) {
        b = pf(b);
        b != null && (Bi(a, c, 1), a = a.g, c = De || (De = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Be = c.getUint32(0, !0), Ce = c.getUint32(4, !0), xi(a, Be), xi(a, Ce))
    }

    function lj(a, b, c) {
        b = Tf(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    si(b)
            }
            if (b != null) switch (Bi(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Fe(b);
                    ui(a, Be, Ce);
                    break;
                case "bigint":
                    c = qi(b);
                    ui(a.g, c.i, c.g);
                    break;
                default:
                    c = si(b), ui(a.g, c.i, c.g)
            }
        }
    }

    function mj(a, b, c) {
        b = gj(Tf, b, !1);
        if (b != null && b.length) {
            c = Ci(a, c);
            for (let e = 0; e < b.length; e++) {
                const f = b[e];
                switch (typeof f) {
                    case "number":
                        var d = a.g;
                        Fe(f);
                        ui(d, Be, Ce);
                        break;
                    case "bigint":
                        d = qi(f);
                        ui(a.g, d.i, d.g);
                        break;
                    default:
                        d = si(f), ui(a.g, d.i, d.g)
                }
            }
            Di(a, c)
        }
    }

    function nj(a, b, c) {
        b = Uf(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    oi(b)
            }
            if (b != null) switch (Bi(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Fe(b);
                    ui(a, Be, Ce);
                    break;
                case "bigint":
                    c = mi(b);
                    ui(a.g, c.i, c.g);
                    break;
                default:
                    c = oi(b), ui(a.g, c.i, c.g)
            }
        }
    }

    function oj(a, b, c) {
        b = zf(b);
        b != null && b != null && (Bi(a, c, 0), wi(a.g, b))
    }

    function pj(a, b, c) {
        b = rf(b);
        b != null && (Bi(a, c, 0), a.g.g.push(b ? 1 : 0))
    }

    function qj(a, b, c) {
        b = Xf(b);
        b != null && (b = Td(b), Bi(a, c, 2), vi(a.g, b.length), Ai(a, b))
    }

    function rj(a, b, c, d, e) {
        Fi(a, c, Ui(b, d), e)
    }

    function sj(a, b, c) {
        b = zf(b);
        b != null && (b = parseInt(b, 10), Bi(a, c, 0), wi(a.g, b))
    }
    var tj = hj(kj, Qi),
        uj = hj(kj, Qi),
        vj = hj(function(a, b, c) {
            b = pf(b);
            b != null && (Bi(a, c, 5), a = a.g, c = De || (De = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Ce = 0, Be = c.getUint32(0, !0), xi(a, Be))
        }, Ji()),
        wj = ij(mj, Oi),
        xj = hj(lj, Oi),
        yj = ij(mj, Oi),
        zj = hj(lj, Oi),
        Aj = hj(lj, Oi),
        Bj = hj(nj, Pi),
        Cj = ij(function(a, b, c) {
            b = gj(Uf, b, !1);
            if (b != null && b.length) {
                c = Ci(a, c);
                for (let f = 0; f < b.length; f++) {
                    var d = b[f];
                    switch (typeof d) {
                        case "number":
                            var e = a.g;
                            Fe(d);
                            ui(e, Be, Ce);
                            break;
                        case "bigint":
                            e = Number(d);
                            Number.isSafeInteger(e) ? (d = a.g,
                                Fe(e), ui(d, Be, Ce)) : (d = mi(d), ui(a.g, d.i, d.g));
                            break;
                        default:
                            d = oi(d), ui(a.g, d.i, d.g)
                    }
                }
                Di(a, c)
            }
        }, Pi),
        Dj = hj(nj, Pi),
        Ej = hj(oj, Ni),
        Fj = ij(function(a, b, c) {
            b = gj(zf, b, !0);
            if (b != null && b.length) {
                c = Ci(a, c);
                for (let d = 0; d < b.length; d++) wi(a.g, b[d]);
                Di(a, c)
            }
        }, Ni),
        Gj = hj(oj, Ni),
        Hj = hj(function(a, b, c) {
            b = Bf(b);
            b != null && (Bi(a, c, 5), xi(a.g, b))
        }, Ji()),
        Ij = hj(pj, Li),
        Jj = hj(pj, Li),
        Kj = hj(pj, Li),
        Lj = hj(qj, Mi),
        Mj = ij(function(a, b, c) {
            b = gj(Xf, b, !0);
            if (b != null)
                for (let g = 0; g < b.length; g++) {
                    var d = a,
                        e = c,
                        f = b[g];
                    f != null && (f = Td(f), Bi(d, e, 2),
                        vi(d.g, f.length), Ai(d, f))
                }
        }, Mi),
        Nj = hj(qj, Mi),
        Oj = hj(qj, Mi),
        Pj = function(a, b, c = Ki) {
            return new Si(b, c)
        }(function(a, b, c, d, e) {
            if (a.g() !== 2) return !1;
            var f = a.i;
            d = xg(void 0, d, !0);
            var g = b[x];
            bf(g);
            var h = g;
            const k = h & 2;
            g = ah(b, h, c);
            Array.isArray(g) || (g = $e);
            var l = g[x] | 0;
            l === 0 && h & 32 && !k ? (l |= 33, g[x] = l) : l & 1 || (l |= 1, g[x] = l);
            k && (h = !1, l & 2 || (Pe(g), h = !!(4 & l)), h && Object.freeze(g));
            l = g;
            g = b[x];
            (l[x] | 0) & 4 && (l = Je(l), l[x] = (l[x] | 1) & -2079, dh(b, g, c, l));
            l.push(d);
            f.call(a, d, e);
            return !0
        }, function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (let f =
                        0; f < b.length; f++) rj(a, b[f], c, d, e)
        }),
        P = new Si(rj, Ki),
        Tj = hj(function(a, b, c) {
            b = Bf(b);
            b != null && b != null && (Bi(a, c, 0), vi(a.g, b))
        }, Ji()),
        Uj = hj(sj, Ri),
        Vj = ij(function(a, b, c) {
            b = gj(zf, b, !0);
            if (b != null && b.length) {
                c = Ci(a, c);
                for (let d = 0; d < b.length; d++) wi(a.g, b[d]);
                Di(a, c)
            }
        }, Ri),
        Wj = hj(sj, Ri);

    function Xj(a) {
        return () => Zf(a)
    }

    function Yj(a) {
        return b => {
            rg(b);
            const c = new Ii;
            ej(b.P, c, aj(a));
            return Ei(c)
        }
    }

    function Zj(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = tg(a, Qe(b))
            }
            return b
        }
    };
    Zc `https://www.google.com/recaptcha/api2/aframe`;

    function ak(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Ac(f, a);
            b.document.readyState !== "complete" ? rb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function bk(a) {
        var b = `${a.Qa?"https://ep1.adtrafficquality.google/getconfig/sodar":"https://pagead2.googlesyndication.com/getconfig/sodar"}?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Sb}`;
        let c = void 0;
        try {
            c = await ck(b)
        } catch (g) {}
        if (c) {
            b = a.xc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                zi: c.bg_hash_basename,
                yi: c.bg_binary,
                Hj: a.g + "_" + a.i,
                xc: b,
                Sb: a.Sb,
                Bd: d,
                ce: e,
                yd: f,
                Qa: a.Qa
            }
        }
    }
    let ck = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function dk(a) {
        if (a = await bk(a)) {
            var b = window,
                c = b.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = b.GoogleGcLKhOms = []);
            c.push({
                _ctx_: a.context,
                _bgv_: a.zi,
                _bgp_: a.yi,
                _li_: a.Hj,
                _jk_: a.xc,
                _st_: a.Sb,
                _rc_: a.Bd,
                _dl_: a.ce,
                _g2_: a.yd,
                _atqg_: a.Qa === void 0 ? "0" : a.Qa ? "1" : "0"
            });
            if (c = b.GoogleDX5YKUSk) b.GoogleDX5YKUSk = void 0, c[1]();
            a = a.Qa ? Zc `https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js` : Zc `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            ak(a)
        }
    };

    function ek(a, b) {
        return fi(a, 1, b)
    }
    var fk = class extends O {
        g() {
            return K(this, 1)
        }
    };

    function gk(a, b) {
        return C(a, 5, b)
    }

    function hk(a, b) {
        return fi(a, 3, b)
    }

    function ik(a, b) {
        return M(a, 6, b)
    }
    var jk = class extends O {
        constructor() {
            super()
        }
    };

    function kk(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var lk = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.xc = a.xc;
                this.win = a.da();
                this.Sb = a.Sb;
                this.Bd = a.Bd;
                this.ce = a.ce;
                this.yd = a.yd;
                this.j = a.g;
                this.Qa = a.Qa
            }
        },
        mk = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Sb = "env";
                this.Bd = "n";
                this.ce = "0";
                this.yd = "1";
                this.g = !0;
                this.Qa = !1
            }
            da() {
                return this.win
            }
            build() {
                return new lk(this)
            }
        };

    function nk(a) {
        var b = new ok;
        return ei(b, 1, a)
    }
    var ok = class extends O {
        getValue() {
            return K(this, 1)
        }
        getVersion() {
            return Qh(this, 5)
        }
    };
    var pk = class extends O {
        removeCookies(a) {
            Eh(this, 4, ok, void 0, a, void 0, 1, !0);
            return this
        }
    };
    var qk = class extends O {};

    function rk(a, b, c = null, d = !1, e = !1) {
        sk(a, b, c, d, e)
    }

    function sk(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = hd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Ta(a.google_image_requests, f);
                sb(f, "load", g);
                sb(f, "error", g)
            };
            rb(f, "load", g);
            rb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var uk = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            kd(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            tk(c)
        },
        tk = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : rk(b, a, void 0, !1, !1)
        };
    let vk = null;
    var wk = window;
    var xk = class extends O {
        constructor() {
            super()
        }
    };
    var yk = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return Oh(this, 1)
        }
        setCorrelator(a) {
            return di(this, 1, a)
        }
    };
    var zk = class extends O {
        constructor() {
            super()
        }
        setParameters(a) {
            return C(this, 1, a)
        }
    };
    let Ak = null,
        Bk = null;

    function Ck() {
        if (Ak != null) return Ak;
        Ak = !1;
        try {
            const a = fd(t);
            a && a.location.hash.indexOf("google_logging") !== -1 && (Ak = !0)
        } catch (a) {}
        return Ak
    }

    function Dk() {
        if (Bk != null) return Bk;
        Bk = !1;
        try {
            const a = fd(t);
            a && a.location.hash.indexOf("auto_ads_logging") !== -1 && (Bk = !0)
        } catch (a) {}
        return Bk
    }
    var Ek = (a, b = []) => {
        let c = !1;
        t.google_logging_queue || (c = !0, t.google_logging_queue = []);
        t.google_logging_queue.push([a, b]);
        c && Ck() && gd(t.document, Zc `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Fk(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    Fk.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Fk.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Fk.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Fk.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function Gk(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = Gk.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Hk(a) {
        return new Gk(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof Gk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Ik(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    q.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Jk(a, b) {
        this.width = a;
        this.height = b
    }

    function Kk(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = Jk.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    q.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Lk(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Mk(a, b) {
        const c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            const e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Lk(c, e, d - c, a - e)
        }
        return null
    }

    function Nk(a, b) {
        var c = Mk(a, b);
        if (!c || !c.height || !c.width) return [new Lk(a.left, a.top, a.width, a.height)];
        c = [];
        let d = a.top,
            e = a.height;
        const f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Lk(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Lk(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Lk(a.left, d, b.left - a.left, e));
        h < f && c.push(new Lk(h, d, f - h, e));
        return c
    }
    q = Lk.prototype;
    q.contains = function(a) {
        return a instanceof Fk ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    q.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    q.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const Ok = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Pk(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Qk(a = Pk()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Rk(a = Pk()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Ok[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Sk() {
        var a = Pk();
        return a && a.initialIntersection
    }

    function Tk() {
        const a = Sk();
        return a && ya(a.rootBounds) ? new Jk(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Uk(a = Pk()) {
        return a ? cd(a.master) ? a.master : null : null
    }

    function Vk(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ta(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || gd(a.document, g ? Zc `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : Zc `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, rb(a, "message", f), d = () => {
            sb(a, "message", f)
        });
        return e
    };

    function Wk(a) {
        return a ? new Xk(Yk(a)) : Ka || (Ka = new Xk)
    }

    function Zk(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new Jk(a.clientWidth, a.clientHeight)
    }

    function $k(a) {
        const b = a.scrollingElement ? a.scrollingElement : Nc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new Fk(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function al(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function bl(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Yk(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var cl = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        dl = {
            IMG: " ",
            BR: "\n"
        };

    function el(a) {
        const b = [];
        fl(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function fl(a, b, c) {
        if (!(a.nodeName in cl))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in dl) b.push(dl[a.nodeName]);
        else
            for (a = a.firstChild; a;) fl(a, b, c), a = a.nextSibling
    }

    function gl(a, b, c) {
        if (!b && !c) return null;
        const d = b ? String(b).toUpperCase() : null;
        return hl(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && Sa(e.className.split(/\s+/), c))
        })
    }

    function hl(a, b) {
        let c = 0;
        for (; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Xk(a) {
        this.g = a || t.document || document
    }
    q = Xk.prototype;
    q.Xh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    q.zk = Xk.prototype.Xh;

    function il(a, b) {
        return al(a.g, b)
    }

    function jl(a, b) {
        var c = a.g;
        a = al(c, "DIV");
        uc(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    q.da = function() {
        return this.g.defaultView
    };
    q.getChildren = function(a) {
        return a.children
    };
    q.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    q.gj = function(a) {
        let b;
        const c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        const d = [];
        let e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (let h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function kl(a, b, c) {
        if (typeof b === "string")(b = ll(a, b)) && (a.style[b] = c);
        else
            for (const e in b) {
                c = a;
                var d = b[e];
                const f = ll(c, e);
                f && (c.style[f] = d)
            }
    }
    var ml = {};

    function ll(a, b) {
        let c = ml[b];
        if (!c) {
            var d = Hc(b);
            c = d;
            a.style[d] === void 0 && (d = (Nc ? "Webkit" : Mc ? "Moz" : Kc ? "ms" : null) + Ic(d), a.style[d] !== void 0 && (c = d));
            ml[b] = c
        }
        return c
    }

    function nl(a, b) {
        const c = a.style[Hc(b)];
        return typeof c !== "undefined" ? c : a.style[ll(a, b)] || ""
    }

    function ol(a, b) {
        const c = Yk(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function pl(a, b) {
        return ol(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function ql(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function rl(a) {
        var b = Yk(a);
        const c = new Fk(0, 0);
        if (a == (b ? Yk(b) : document).documentElement) return c;
        a = ql(a);
        b = $k(Wk(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function sl(a) {
        var b = tl;
        if (pl(a, "display") != "none") return b(a);
        const c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function tl(a) {
        const b = a.offsetWidth,
            c = a.offsetHeight,
            d = Nc && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = ql(a), new Jk(a.right - a.left, a.bottom - a.top)) : new Jk(b, c)
    };
    var ul = a => typeof a === "number" && a > 0,
        wl = (a, b) => {
            a = vl(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        vl = a => Object.entries(xl(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        xl = a => {
            const b = {};
            kd(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        yl = a => {
            a = Uk(Pk(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        zl = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Al = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName &&
                    a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Bl = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        Cl = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f =
                                e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h > 0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    var Dl = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function El(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Fl(a.stack, b));
        return b
    }

    function Fl(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    };
    const Gl = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Hl = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Il = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Vg = !!c;
                this.depth = null
            }
        };
    let Jl = null;

    function Kl() {
        if (Jl === null) {
            Jl = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Jl = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Jl
    };

    function Ll() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ml() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    var Nl = class {
        constructor(a, b) {
            var c = Ml() || Ll();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Ol = t.performance,
        Pl = !!(Ol && Ol.mark && Ol.measure && Ol.clearMarks),
        Ql = jb(() => {
            var a;
            if (a = Pl) a = Kl(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Rl(a) {
        a && Ol && Ql() && (Ol.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ol.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Sl(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Rl(c), e;
        }
        a.end(c);
        return d
    }
    class Tl {
        constructor(a) {
            this.events = [];
            this.i = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Ql() || (b != null ? b : Math.random() < 1)
        }
        disable() {
            this.g = !1;
            this.events != this.i.google_js_reporting_queue && (Ql() && Ma(this.events, Rl), this.events.length = 0)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Nl(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ol && Ql() && Ol.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value ===
                "number") {
                a.duration = (Ml() || Ll()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ol && Ql() && Ol.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    };

    function Ul(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Vl(a, b, c, d, e) {
        const f = [];
        kd(a, (g, h) => {
            (g = Wl(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function Wl(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Wl(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Vl(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Xl(a) {
        let b = 1;
        for (const c in a.i) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function Yl(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Xl(a) - b.length;
        if (d < 0) return "";
        a.g.sort((f, g) => f - g);
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Vl(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = `${e}${"trn"}=${b}`);
        return c + a
    }
    var Zl = class {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function $l(a, b) {
        a.g = b
    }
    var bm = class {
        constructor(a, b, c = null) {
            this.G = a;
            this.l = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.A = this.aa
        }
        tb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.l;
                try {
                    Rl(e), b = this.A(a, new Dl(f, {
                        message: El(f)
                    }), void 0, c)
                } catch (g) {
                    this.aa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Ca(a, b, c, d) {
            return (...e) => this.tb(a, () => b.apply(c, e), d)
        }
        aa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const F = new Zl;
                var g = F;
                g.g.push(1);
                g.i[1] = Ul("context",
                    a);
                b.error && b.meta && b.id || (b = new Dl(b, {
                    message: El(b)
                }));
                if (b.msg) {
                    g = F;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Ul("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (na) {}
                if (d) try {
                    d(b)
                } catch (na) {}
                d = F;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = t;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (cd(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Il(m || "", l));
                    try {
                        d = l.parent
                    } catch (na) {
                        d = null
                    }
                } while (d && l != d);
                for (let na = 0, va = k.length - 1; na <= va; ++na) k[na].depth = va - na;
                l = t;
                if (l.location &&
                    l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Vg = !0)
                    }
                var p = k;
                let L = new Il(t.location.href, t, !1);
                l = null;
                const ja = p.length - 1;
                for (n = ja; n >= 0; --n) {
                    var r = p[n];
                    !l && Gl.test(r.url) && (l = r);
                    if (r.url && !r.Vg) {
                        L = r;
                        break
                    }
                }
                r = null;
                const qb = p.length && p[ja].url;
                L.depth != 0 && qb && (r = p[ja]);
                f = new Hl(L, r);
                if (f.i) {
                    p = F;
                    var w = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = Ul("top", w)
                }
                var D = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    const na =
                        f.g.url.match(Jc);
                    var B = na[1],
                        G = na[3],
                        E = na[4];
                    w = "";
                    B && (w += B + ":");
                    G && (w += "//", w += G, E && (w += ":" + E));
                    var A = w
                } else A = "";
                B = F;
                D = [D, {
                    url: A
                }];
                B.g.push(5);
                B.i[5] = D;
                am(this.G, e, F, this.j, c)
            } catch (F) {
                try {
                    am(this.G, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: El(F),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (L) {}
            }
            return this.l
        }
        la(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.aa(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var cm = class extends O {
        constructor() {
            super()
        }
    };
    var dm = Yj([0, Wj, Nj]);

    function em(a, b) {
        try {
            const c = d => [{
                [d.Pa]: d.Kd
            }];
            return JSON.stringify([a.filter(d => d.Ia).map(c), ki(b), a.filter(d => !d.Ia).map(c)])
        } catch (c) {
            return fm(c, b), ""
        }
    }

    function gm(a, b) {
        const c = new Ii;
        try {
            const d = a.filter(f => f.Ia).map(hm);
            Gi(c, 1, d);
            Fi(c, 2, dm(b), Hi);
            const e = a.filter(f => !f.Ia).map(hm);
            Gi(c, 3, e)
        } catch (d) {
            fm(d, b)
        }
        return Ei(c)
    }

    function fm(a, b) {
        try {
            uk({
                m: El(a instanceof Error ? a : Error(String(a))),
                b: Qh(b, 1) || null,
                v: K(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }

    function hm(a) {
        const b = new Ii;
        Fi(b, a.Pa, a.be, Hi);
        return Ei(b)
    }

    function Hi(a, b) {
        Ai(b, a.subarray(0, a.length))
    }
    var im = class {
        constructor(a, b) {
            var c = new cm;
            a = N(c, 1, a);
            this.i = fi(a, 2, b).i()
        }
    };

    function jm(a) {
        return Math.round(a)
    };

    function km(a, b) {
        return th(a, 1, lm, Wf(b))
    }

    function mm(a, b) {
        return th(a, 2, lm, If(b))
    }

    function nm(a, b) {
        return th(a, 3, lm, b == null ? b : qf(b))
    }
    var Q = class extends O {},
        lm = [1, 2, 3];

    function om(a, b) {
        return th(a, 2, pm, If(b))
    }

    function qm(a, b) {
        return th(a, 4, pm, of (b))
    }
    var rm = class extends O {
            constructor() {
                super()
            }
        },
        pm = [2, 4];

    function sm(a) {
        var b = new tm;
        return fi(b, 1, a)
    }

    function um(a, b) {
        return C(a, 3, b)
    }

    function R(a, b) {
        return Fh(a, 4, Q, b)
    }
    var tm = class extends O {
        constructor() {
            super()
        }
    };
    var vm = Yj([0, Nj, 1, [0, pm, 1, Aj, 1, uj], Pj, [0, lm, Oj, Aj, Kj]]);
    var wm = class extends O {
        j() {
            return K(this, 2)
        }
        getWidth() {
            return K(this, 3)
        }
        getHeight() {
            return K(this, 4)
        }
        setHeight(a) {
            return ei(this, 4, a)
        }
    };
    var xm = class extends O {};
    var ym = class extends O {};
    var zm = class extends O {};
    var Am = class extends O {},
        Bm = [5, 6];
    var Cm = [0, xj, -1];
    var Dm = [0, Pj, [0, Vj, [0, Ej, -3]], Cm, -1];
    var Em = class extends O {
        getValue() {
            return Qh(this, 1)
        }
    };

    function Fm(a) {
        var b = new Gm;
        return gi(b, 1, a)
    }
    var Gm = class extends O {
        getValue() {
            return Qh(this, 1)
        }
    };
    var Hm = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return Qh(this, 1)
        }
    };

    function Im(a, b) {
        return di(a, 1, b)
    }

    function Jm(a, b) {
        return di(a, 2, b)
    }

    function Km(a, b) {
        return di(a, 3, b)
    }

    function Lm(a, b) {
        return di(a, 4, b)
    }

    function Mm(a, b) {
        return di(a, 5, b)
    }

    function Nm(a, b) {
        return sh(a, 8, of (b), 0)
    }

    function Om(a, b) {
        return sh(a, 9, of (b), 0)
    }
    var Pm = class extends O {
        constructor() {
            super()
        }
    };

    function Qm(a, b) {
        return di(a, 1, b)
    }

    function Rm(a, b) {
        return di(a, 2, b)
    }
    var Sm = class extends O {};

    function Tm(a, b) {
        Fh(a, 1, Sm, b)
    }
    var qh = class extends O {
        Fh(a) {
            Eh(this, 1, Sm, void 0, a, !1, 1);
            return this
        }
    };
    var Um = class extends O {
        constructor() {
            super()
        }
    };

    function Vm(a, b) {
        return rh(a, 1, b, Vf)
    }

    function Wm(a, b) {
        return rh(a, 12, b, Qf)
    }

    function Xm() {
        var a = new Ym;
        return Dh(a, 2, Vf, "irr", Sh)
    }

    function Zm(a, b) {
        return M(a, 3, b)
    }

    function $m(a, b) {
        return M(a, 4, b)
    }

    function an(a, b) {
        return M(a, 5, b)
    }

    function bn(a, b) {
        return M(a, 7, b)
    }

    function cn(a, b) {
        return M(a, 8, b)
    }

    function dn(a, b) {
        return di(a, 9, b)
    }

    function en(a, b) {
        return Ch(a, 10, b)
    }

    function fn(a, b) {
        return rh(a, 11, b, Cf)
    }
    var Ym = class extends O {
        constructor() {
            super()
        }
    };

    function gn(a) {
        var b = hn();
        C(a, 1, b)
    }

    function jn(a, b) {
        return di(a, 2, b)
    }

    function kn(a, b) {
        return Ch(a, 3, b)
    }

    function ln(a, b) {
        return Ch(a, 4, b)
    }

    function mn(a, b) {
        return Fh(a, 4, Gm, b)
    }

    function nn(a, b) {
        return Ch(a, 5, b)
    }

    function on(a, b) {
        return rh(a, 6, b, Vf)
    }

    function pn(a, b) {
        return di(a, 7, b)
    }

    function qn(a, b) {
        C(a, 9, b)
    }

    function rn(a, b) {
        return M(a, 10, b)
    }

    function sn(a, b) {
        return M(a, 11, b)
    }

    function tn(a, b) {
        return M(a, 12, b)
    }
    var un = class extends O {
        constructor() {
            super()
        }
        H(a) {
            Eh(this, 3, Em, void 0, a, !1, 1);
            return this
        }
        I(a) {
            return di(this, 8, a)
        }
    };
    var vn = class extends O {
        constructor() {
            super()
        }
    };
    var wn = class extends O {};

    function xn(a) {
        var b = new yn;
        return N(b, 1, a)
    }
    var yn = class extends O {
        constructor() {
            super()
        }
    };
    var zn = class extends O {
        constructor() {
            super()
        }
    };
    var An = class extends O {
        constructor() {
            super()
        }
    };
    var Bn = class extends O {
        constructor() {
            super()
        }
    };
    var Cn = class extends O {
            constructor() {
                super()
            }
        },
        Dn = [1, 2];
    var En = class extends O {
        constructor() {
            super()
        }
    };
    var Fn = class extends O {
            constructor() {
                super()
            }
        },
        Gn = [1];

    function Hn(a) {
        var b = new In;
        return N(b, 1, a)
    }
    var In = class extends O {
        constructor() {
            super()
        }
    };
    var Jn = class extends O {
        constructor() {
            super()
        }
    };
    var Kn = class extends O {
        constructor() {
            super()
        }
    };
    var Ln = class extends O {
        constructor() {
            super()
        }
    };
    var Mn = class extends O {
        constructor() {
            super()
        }
    };
    var Nn = class extends O {
        constructor() {
            super()
        }
    };
    var On = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return K(this, 1)
        }
    };
    var Pn = class extends O {
        constructor() {
            super()
        }
    };

    function Qn(a) {
        var b = new Rn;
        return rh(b, 1, a, wf)
    }
    var Rn = class extends O {
        constructor() {
            super()
        }
    };
    var Sn = class extends O {
        constructor() {
            super()
        }
    };

    function Tn() {
        var a = new Un,
            b = new Sn;
        return H(a, 1, Vn, b)
    }

    function Wn() {
        var a = new Un,
            b = new Sn;
        return H(a, 3, Vn, b)
    }

    function Xn() {
        var a = new Un,
            b = new Sn;
        return H(a, 13, Vn, b)
    }

    function Yn(a, b) {
        return H(a, 14, Vn, b)
    }
    var Un = class extends O {},
        Vn = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var Zn = class extends O {};
    var $n = class extends O {
        constructor() {
            super()
        }
    };
    var eo = class extends O {
        constructor() {
            super()
        }
    };
    var fo = class extends O {
        constructor() {
            super()
        }
        getFont() {
            return K(this, 1)
        }
        setFont(a) {
            return fi(this, 1, a)
        }
        clearFont() {
            return ch(this, 1)
        }
    };

    function go(a, b) {
        return sh(a, 10, Rf(b), "0")
    }

    function ho(a, b) {
        return N(a, 1, b)
    }
    var io = class extends O {};
    var jo = class extends O {};
    var ko = class extends O {
        constructor() {
            super()
        }
    };
    var mo = class extends O {
            constructor() {
                super()
            }
            j() {
                return Uh(this, jo, 4, lo)
            }
            g() {
                return gh(this, jo, 4, lo)
            }
        },
        lo = [4, 5];

    function no(a) {
        var b = new oo;
        return fi(b, 4, a)
    }

    function po(a, b) {
        return ch(a, 6, Rf(b))
    }
    var oo = class extends O {
        constructor() {
            super()
        }
    };
    var qo = class extends O {
        constructor() {
            super()
        }
    };
    var ro = class extends O {
        constructor() {
            super()
        }
        j() {
            return z(this, jo, 1)
        }
        g() {
            return eh(this, jo, 1)
        }
    };
    var so = class extends O {
        constructor() {
            super()
        }
    };
    var to = class extends O {
        constructor() {
            super()
        }
    };
    var uo = class extends O {};
    var vo = class extends O {};
    var wo = class extends O {
            constructor() {
                super()
            }
        },
        xo = [2, 3];
    var yo = class extends O {
            constructor() {
                super()
            }
        },
        zo = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];
    var Ao = class extends O {
        constructor() {
            super()
        }
    };

    function Bo(a, b) {
        return ci(a, 1, b)
    }
    var Co = class extends O {
        constructor() {
            super()
        }
        getWidth() {
            return Oh(this, 1)
        }
        getHeight() {
            return Oh(this, 2)
        }
        setHeight(a) {
            return ci(this, 2, a)
        }
    };
    var Do = class extends O {
        constructor() {
            super()
        }
    };

    function Eo(a, b) {
        return C(a, 1, b)
    }
    var Fo = class extends O {
        constructor() {
            super()
        }
    };
    var Go = class extends O {
        constructor() {
            super()
        }
    };
    var Ho = class extends O {
        constructor() {
            super()
        }
    };

    function Io(a, b) {
        return H(a, 3, Jo, b)
    }
    var Ko = class extends O {
            constructor() {
                super()
            }
        },
        Jo = [1, 2, 3, 4];

    function Lo(a, b) {
        return di(a, 3, b)
    }
    var Mo = class extends O {
            constructor() {
                super()
            }
            Mc(a) {
                return fi(this, 2, a)
            }
        },
        No = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var Oo = [0];
    var Po = [0, Jj, Pj, [0, Wj, Nj, -2, Gj, -2, [0, Nj, 2, Gj, -1, Nj, [0, Gj, -2, vj], -1], Pj, [0, Nj, Mj], Dj, Lj, Ej], zj, [0, Jj, zj, Jj, -2]];
    var Qo = [0, xj, -1];
    var Ro = Yj([0, No, zj, Nj, zj, P, [0, Cm, -1, [0, Uj], Nj, Jj], P, [0, [0, Mj, -1, Jj, -5, zj, Pj, [0, Nj, zj, Jj, -1], yj, Cj, Dj], zj, Pj, [0, Uj], Pj, [0, Uj], Pj, [0, Uj], Mj, zj, -1, [0, zj, -4, 2, tj, -1], Jj, -2, 1, jj, [!0, Lj, [0, Pj, [0, zj, -1]]], Pj, [0, Nj, -2]], P, [0, zo, zj, -1, P, [0, lo, [0, Nj, -1, Jj, xj],
            [0, Mj, Nj, -1], zj, P, Po, P, [0, Pj, [0, Vn, P, Oo, -2, 1, P, Oo, -1, P, [0, zj], P, Oo, -5, P, [0, Vj]]],
            [0, Ej, -1, Tj, -2, Ej]
        ], P, [0, zj, Dj], P, [0, zj], P, [0, xj, Bj, Lj, Nj, Jj, Ej], P, [0, zj], P, [0, xj, -2, Nj, Ij, Bj, xj], P, [0, xo, zj, P, [0], P, [0]],
        [0, zj, Gj, yj], P, [0, Wj], P, [0, zj, Nj, Dj], P, [0], P, [0,
            Po, zj
        ], Ij, P, [0, Dj], P, [0, zj]
    ], zj, P, [0, Nj, [0, Gj, -1, [0, tj, -5, Jj]], zj, Dm], P, [0, Wj, Fj], P, [0, Wj, -1, Nj, -1], P, [0, Gn, P, [0, Ij, -1]], P, [0, Wj, Jj, -9], P, [0, Dn, P, [0, [0, Wj, Nj, -1]], P, [0, Gj, -1, Nj, [0, Gj, -1], -1, Jj, Vj, Gj, -1]], P, [0, Jo, P, [0, [0, xj, -1], Qo], P, [0], P, [0, Qo], P, [0]], P, [0, [3, 4, 5, 6, 7, 8], xj, [0, wj], P, [0], P, [0], P, [0], P, [0], P, [0], P, [0, [1, 2, 3, 4, 5], P, [0], -4]], P, [0, Bm, xj, -2, [0, Lj, -2, Ij, [0, Lj, -3]], P, [0], P, [0]], P, Dm]);

    function So(a, b) {
        return di(a, 1, b)
    }

    function To(a, b) {
        return di(a, 2, b)
    }
    var Uo = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Oh(this, 1)
        }
    };
    var Vo = Yj([0, zj, -1, Wj]);
    var Wo = class extends O {
        constructor() {
            super()
        }
    };
    var Xo = [0, [0, xj, Hj, -1], Nj];
    var Yo = class extends O {
        constructor() {
            super()
        }
    };
    var Zo = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Oh(this, 1)
        }
    };
    var $o = class extends O {
            constructor() {
                super()
            }
        },
        ap = [1, 7],
        bp = [4, 6, 8];
    var cp = Yj([0, ap, bp, P, [0, Wj, Nj, -1, Mj, -1, Xo],
        [0, zj, Fj, Nj], 1, P, [0, Nj, Gj, Mj], zj, P, [0, Nj, -1, Lj, [0, Fj]], P, [0, Nj, -1, Mj, -1, Xo], P, [0, [1], P, [0, [0, Nj, -2, Wj, Nj]],
            [0, zj, -1]
        ]
    ]);
    class dp {
        constructor(a) {
            this.G = a;
            this.ee = new ep(this.G)
        }
    }
    class ep {
        constructor(a) {
            this.G = a;
            this.Tc = new fp(this.G)
        }
    }
    class fp {
        constructor(a) {
            this.G = a;
            this.g = new gp(this.G);
            this.Gh = new hp(this.G)
        }
    }
    class gp {
        constructor(a) {
            this.G = a;
            this.i = new ip(this.G);
            this.g = new jp(this.G)
        }
    }
    class ip {
        constructor(a) {
            this.G = a
        }
        Hc(a) {
            this.G.g(um(R(sm("xR0Czf"), km(new Q, a.status)), qm(new rm, a.Kc)))
        }
    }
    class jp {
        constructor(a) {
            this.G = a
        }
        Hc(a) {
            this.G.g(um(R(sm("jM4CPd"), mm(new Q, jm(a.tk))), qm(new rm, a.Kc)))
        }
    }
    class hp {
        constructor(a) {
            this.G = a;
            this.fi = new kp(this.G);
            this.gi = new lp(this.G);
            this.ye = new mp(this.G);
            this.hi = new np(this.G);
            this.ii = new op(this.G);
            this.ji = new pp(this.G);
            this.ki = new qp(this.G);
            this.Ae = new rp(this.G);
            this.Gi = new sp(this.G);
            this.Si = new tp(this.G);
            this.ij = new up(this.G);
            this.ck = new vp(this.G)
        }
    }
    class kp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(sm("VEDP7d"), km(new Q, a.language)), mm(new Q, a.browser)), om(new rm, jm(a.ha))))
        }
    }
    class lp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(sm("igjuhc"), km(new Q, a.language)), mm(new Q, a.browser)), om(new rm, jm(a.ha))))
        }
    }
    class mp {
        constructor(a) {
            this.G = a
        }
        Hc(a) {
            this.G.g(um(R(R(R(R(R(sm("i3zJEd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.outcome)), nm(new Q, a.wc)), nm(new Q, a.ff)), qm(new rm, a.Kc)))
        }
    }
    class np {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(R(R(sm("JN0hVd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.outcome)), nm(new Q, a.wc)), nm(new Q, a.ff)), om(new rm, jm(a.ha))))
        }
    }
    class op {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("rmHfOd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.reason)), om(new rm, jm(a.ha))))
        }
    }
    class pp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("VEyQic"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class qp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("QFcNxc"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class rp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(R(sm("SIhp4"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), nm(new Q, a.wc)), om(new rm, jm(a.ha))))
        }
    }
    class sp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("Eeiun"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class tp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("SmbJl"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.type)), om(new rm, jm(a.ha))))
        }
    }
    class up {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("qleBg"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class vp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("pYLGPe"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.type)), om(new rm, jm(a.ha))))
        }
    }
    class wp extends im {
        constructor() {
            super(...arguments);
            this.Md = new dp(this)
        }
    }
    var xp = class extends wp {
            I(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 3,
                    Kd: ki(b)
                })))
            }
            Za(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 7,
                    Kd: ki(b)
                })))
            }
            F(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 16,
                    Kd: ki(b)
                })))
            }
            g(...a) {
                this.A(...a.map(b => ({
                    Ia: !1,
                    Pa: 1,
                    Kd: ki(b)
                })))
            }
        },
        zp = class extends wp {
            I(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 3,
                    be: cp(b)
                })))
            }
            Za(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 7,
                    be: Ro(b)
                })))
            }
            F(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 16,
                    be: Vo(b)
                })))
            }
            g(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !1,
                    Pa: 1,
                    be: vm(b)
                })))
            }
        };
    var Ap = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        Bp = class extends xp {
            constructor(a) {
                super(2, a);
                this.j = Ap
            }
            A(...a) {
                try {
                    const b = em(a, this.i);
                    this.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    fm(b, this.i)
                }
            }
        },
        Cp = class extends Bp {};

    function Dp(a) {
        a.l !== null && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = em(a.j, a.i);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Fp = class extends xp {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.H = Ap;
                this.W = b;
                this.L = c;
                this.R = d;
                this.C = e;
                this.j = [];
                this.l = null;
                this.B = !1
            }
            A(...a) {
                try {
                    this.R && em(this.j.concat(a), this.i).length >= 65536 && Dp(this), this.C && !this.B && (this.B = !0, Ep(this.C, () => {
                        Dp(this)
                    })), this.j.push(...a), this.j.length >= this.L && Dp(this), this.j.length && this.l === null && (this.l = setTimeout(() => {
                        Dp(this)
                    }, this.W))
                } catch (b) {
                    fm(b, this.i)
                }
            }
        },
        Gp = class extends Fp {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var Hp = a => {
        var b = "pf";
        if (a.pf && a.hasOwnProperty(b)) return a.pf;
        b = new a;
        return a.pf = b
    };

    function Ip(a, b, c) {
        return b[a] || c
    };

    function Jp(a, b) {
        a.i = (c, d) => Ip(2, b, () => [])(c, 1, d);
        a.g = () => Ip(3, b, () => [])(1)
    }
    class Kp {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Lp(a, b) {
        return Hp(Kp).i(a, b)
    };

    function am(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Zl ? f = c : (f = new Zl, kd(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = Ul(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Yl(f, "/pagead/gen_204?id=" + b + "&");
            g && rk(t, g)
        } catch (f) {}
    }

    function Mp(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Np {
        constructor() {
            this.g = Math.random()
        }
    };
    let Op, Pp;
    const Qp = new Tl(window);
    (a => {
        Op = a ? ? new Np;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Mp(Op, window.google_srt);
        Pp = new bm(Op, !0, Qp);
        $l(Pp, () => {});
        Pp.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || Qp.disable() : Qp.g && rb(window, "load", () => {
            window.google_measure_js_timing || Qp.disable()
        })
    })();
    let Rp = (new Date).getTime();
    var Sp = {
        Fm: 0,
        Em: 1,
        Bm: 2,
        wm: 3,
        Cm: 4,
        xm: 5,
        Dm: 6,
        zm: 7,
        Am: 8,
        vm: 9,
        ym: 10,
        Gm: 11
    };
    var Tp = {
        Im: 0,
        Jm: 1,
        Hm: 2
    };

    function Up(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Vp(a) {
        a = Pa(a, b => new Gk(b.top, b.right, b.bottom, b.left));
        a = Wp(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Wp(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Qa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Hk(a[0]))
    };
    var Sb = {
        An: 0,
        km: 1,
        nm: 2,
        lm: 3,
        mm: 4,
        tm: 8,
        Kn: 9,
        Vm: 10,
        Wm: 11,
        In: 16,
        Xl: 17,
        Wl: 24,
        Tm: 25,
        zl: 26,
        yl: 27,
        Zh: 30,
        Mm: 32,
        Qm: 40,
        Pn: 41,
        Ln: 42
    };
    var Xp = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Yp = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Zp = 728 * 1.38;

    function $p(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = aq(a, !0, !0),
                    d = bq(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function cq(a, b = 420, c = !1, d = !1) {
        return (a = aq(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function dq(a) {
        return Math.max(0, eq(a, !0) - bq(a))
    }

    function fq(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function bq(a, b = !1) {
        const c = fq(a).clientHeight;
        return b ? c * Rd(a) : c
    }

    function aq(a, b = !1, c = !1) {
        c = fq(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * Rd(a) : c
    }

    function eq(a, b) {
        const c = fq(a);
        return b ? (a = bq(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function gq(a, b) {
        return hq(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function iq(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function jq(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function kq(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function lq(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function mq(a, b, c, d) {
        am(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function nq(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ma(Object.keys(b), c => {
            nl(a, c) || kl(a, c, b[c])
        });
        Cd(a)
    }

    function hq(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function oq() {}
    oq.prototype.next = function() {
        return pq
    };
    var pq = {
        done: !0,
        value: void 0
    };
    oq.prototype.Sa = function() {
        return this
    };

    function qq(a) {
        if (a instanceof oq) return a;
        if (typeof a.Sa == "function") return a.Sa(!1);
        if (xa(a)) {
            let b = 0;
            const c = new oq;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) return pq;
                    if (b in a) return {
                        value: a[b++],
                        done: !1
                    };
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function rq(a, b) {
        if (xa(a)) Ma(a, b);
        else
            for (a = qq(a);;) {
                const {
                    done: c,
                    value: d
                } = a.next();
                if (c) break;
                b.call(void 0, d, void 0, a)
            }
    };
    class sq {
        constructor(a, b) {
            this.g = a[t.Symbol.iterator]();
            this.i = b
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.i.call(void 0, a.value),
                done: a.done
            }
        }
    }

    function tq(a, b) {
        return new sq(a, b)
    };

    function uq(a) {
        if (a instanceof vq || a instanceof wq || a instanceof xq) return a;
        if (typeof a.next == "function") return new vq(() => a);
        if (typeof a[Symbol.iterator] == "function") return new vq(() => a[Symbol.iterator]());
        if (typeof a.Sa == "function") return new vq(() => a.Sa());
        throw Error("Not an iterator or iterable.");
    }
    class vq {
        constructor(a) {
            this.g = a
        }
        Sa() {
            return new wq(this.g())
        }[Symbol.iterator]() {
            return new xq(this.g())
        }
        i() {
            return new xq(this.g())
        }
    }
    class wq extends oq {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }[Symbol.iterator]() {
            return new xq(this.g)
        }
        i() {
            return new xq(this.g)
        }
    }
    class xq extends vq {
        constructor(a) {
            super(() => a);
            this.j = a
        }
        next() {
            return this.j.next()
        }
    };

    function yq(a, b) {
        this.i = {};
        this.g = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof yq)
                for (c = zq(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    q = yq.prototype;
    q.ob = function() {
        return this.size
    };

    function zq(a) {
        Aq(a);
        return a.g.concat()
    }
    q.has = function(a) {
        return Bq(this.i, a)
    };
    q.isEmpty = function() {
        return this.size == 0
    };
    q.clear = function() {
        this.i = {};
        this.j = this.size = this.g.length = 0
    };
    q.remove = function(a) {
        return this.delete(a)
    };
    q.delete = function(a) {
        return Bq(this.i, a) ? (delete this.i[a], --this.size, this.j++, this.g.length > 2 * this.size && Aq(this), !0) : !1
    };

    function Aq(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Bq(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length;) {
                const e = a.g[c];
                Bq(b, e) || (a.g[d++] = e, b[e] = 1);
                c++
            }
            a.g.length = d
        }
    }
    q.get = function(a, b) {
        return Bq(this.i, a) ? this.i[a] : b
    };
    q.set = function(a, b) {
        Bq(this.i, a) || (this.size += 1, this.g.push(a), this.j++);
        this.i[a] = b
    };
    q.forEach = function(a, b) {
        const c = zq(this);
        for (let d = 0; d < c.length; d++) {
            const e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    q.keys = function() {
        return uq(this.Sa(!0)).i()
    };
    q.values = function() {
        return uq(this.Sa(!1)).i()
    };
    q.entries = function() {
        const a = this;
        return tq(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    q.Sa = function(a) {
        Aq(this);
        let b = 0;
        const c = this.j,
            d = this,
            e = new oq;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return pq;
            const f = d.g[b++];
            return {
                value: a ? f : d.i[f],
                done: !1
            }
        };
        return e
    };

    function Bq(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Cq(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function S() {
        this.C = this.C;
        this.I = this.I
    }
    S.prototype.C = !1;
    S.prototype.dispose = function() {
        this.C || (this.C = !0, this.g())
    };
    S.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Dq(a, b) {
        Eq(a, Fa(Cq, b))
    }

    function Eq(a, b) {
        a.C ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    S.prototype.g = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Fq(a, b) {
        S.call(this);
        this.j = null;
        this.A = b;
        this.l = [];
        if (a > this.A) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (b = 0; b < a; b++) this.l.push(this.i())
    }
    Ia(Fq, S);

    function Gq(a, b) {
        a.j = b
    }
    Fq.prototype.i = function() {
        return this.j ? this.j() : {}
    };
    Fq.prototype.g = function() {
        Fq.Mh.g.call(this);
        const a = this.l;
        for (; a.length;) {
            var b = a.pop();
            if (ya(b))
                if (typeof b.dispose === "function") b.dispose();
                else
                    for (const c in b) delete b[c]
        }
        delete this.l
    };

    function Hq() {
        this.g = [];
        this.i = new yq;
        this.j = new yq;
        this.C = 1;
        this.l = new Fq(0, 4E3);
        this.l.i = function() {
            return new Iq
        };
        this.B = new Fq(0, 50);
        this.B.i = function() {
            return new Jq
        };
        const a = this;
        this.A = new Fq(0, 2E3);
        Gq(this.A, function() {
            return a.C++
        })
    }

    function Jq() {
        this.time = this.count = 0
    }
    Jq.prototype.toString = function() {
        const a = [];
        a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
        return a.join("")
    };

    function Iq() {}

    function Kq(a, b, c) {
        const d = [];
        b == -1 ? d.push("    ") : d.push(Lq(a.eventTime - b));
        d.push(" ", Mq(a.eventTime));
        a.eventType == 0 ? d.push(" Start        ") : a.eventType == 1 ? (d.push(" Done "), d.push(Lq(a.g - a.startTime), " ms ")) : d.push(" Comment      ");
        d.push(c, a);
        return d.join("")
    }
    Iq.prototype.toString = function() {
        return this.type == null ? this.comment : "[" + this.type + "] " + this.comment
    };
    Hq.prototype.toString = function() {
        const a = [];
        var b = -1,
            c = [];
        for (var d = 0; d < this.g.length; d++) {
            const e = this.g[d];
            e.eventType == 1 && c.pop();
            a.push(" ", Kq(e, b, c.join("")));
            b = e.eventTime;
            a.push("\n");
            e.eventType == 0 && c.push("|  ")
        }
        if (this.i.ob() != 0) {
            const e = Date.now();
            a.push(" Unstopped timers:\n");
            rq(this.i, function(f) {
                a.push("  ", f, " (", e - f.startTime, " ms, started at ", Mq(f.startTime), ")\n")
            })
        }
        b = zq(this.j);
        for (c = 0; c < b.length; c++) d = this.j.get(b[c]), d.count > 1 && a.push(" TOTAL ", d, "\n");
        a.push("Total tracers created ",
            0, "\n", "Total comments created ", 0, "\n", "Overhead start: ", 0, " ms\n", "Overhead end: ", 0, " ms\n", "Overhead comment: ", 0, " ms\n");
        return a.join("")
    };

    function Lq(a) {
        a = Math.round(a);
        let b = "";
        a < 1E3 && (b = " ");
        a < 100 && (b = "  ");
        a < 10 && (b = "   ");
        return b + a
    }

    function Mq(a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    }
    new Hq;

    function Nq(a, b) {
        Oq(a).forEach(b, void 0)
    }

    function Oq(a) {
        const b = [],
            c = a.length;
        for (let d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Pq(a, b) {
        return a.g[Qq(b)] !== void 0
    }

    function Rq(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function Sq(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const Tq = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Qq(a);
            this.g[c] = b;
            this.i[c] = a
        }
        remove(a) {
            a = Qq(a);
            this.g[a] = void 0;
            this.i[a] = void 0
        }
        get(a, b) {
            a = Qq(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        ob() {
            return Rq(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function Qq(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };
    const Uq = class {
        constructor(a) {
            this.g = new Tq;
            if (a)
                for (let b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        remove(a) {
            this.g.remove(a)
        }
        removeAll() {
            this.g.clear()
        }
        contains(a) {
            return Pq(this.g, a)
        }
    };
    const Vq = new Uq("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Wq(a, {
        gb: b,
        Va: c,
        zb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? Xq(a, {
            gb: b,
            Va: c,
            zb: !0
        }) : null
    }

    function Xq(a, {
        gb: b,
        Va: c,
        zb: d = !1
    }) {
        const e = Yq({
                gb: b,
                Va: c,
                zb: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = Wq(a, {
            gb: b,
            Va: c,
            zb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Zq = class {
        constructor() {
            this.g = new Map
        }
    };

    function Yq({
        gb: a,
        Va: b,
        zb: c
    }) {
        a = za(a);
        b = za(b);
        return `${a}:${b}:${c}`
    };

    function $q(a) {
        Xb(a.document.body.offsetHeight)
    };

    function ar(a) {
        a.i.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function br(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.i.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.i.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var cr = class extends S {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.i = b
        }
        g() {
            ar(this);
            super.g()
        }
    };

    function dr(a) {
        const b = new T(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function er(a, b) {
        const c = new T({
            first: a.O,
            second: b.O
        });
        a.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        b.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        return c
    }

    function fr(...a) {
        const b = [...a],
            c = () => b.every(f => f.O),
            d = new T(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return gr(d)
    }

    function hr(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.O) !== -1,
            d = new T(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return gr(d)
    }

    function gr(a, b = ir) {
        var c = a.O;
        const d = new T(a.O);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function jr(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function kr(a, b, c) {
        if (a.O === b) return c(), () => {};
        const d = {
            Yb: null
        };
        d.Yb = jr(a, b, () => {
            d.Yb && (d.Yb(), d.Yb = null);
            c()
        });
        return d.Yb
    }

    function lr(a, b, c) {
        gr(a).listen(d => {
            d === b && c()
        })
    }

    function mr(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function nr(a, b, c, d) {
        const e = new T(!1);
        var f = null;
        a = a.map(d);
        jr(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        jr(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return gr(e)
    }

    function or(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.O
        }
    }
    class T {
        constructor(a) {
            this.O = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.O);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.O
        }
        g(a) {
            this.O = a;
            this.j.forEach(b => {
                b(this.O)
            })
        }
        map(a) {
            const b = new T(a(this.O));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function ir(a, b) {
        return a == b
    };

    function pr(a) {
        return new qr(a)
    }

    function rr(a, b) {
        Ma(a.g, c => {
            c(b)
        })
    }
    var sr = class {
        constructor() {
            this.g = []
        }
    };
    class qr {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new sr;
            this.listen(c => rr(b, a(c)));
            return pr(b)
        }
        delay(a, b) {
            const c = new sr;
            this.listen(d => {
                a.setTimeout(() => {
                    rr(c, d)
                }, b)
            });
            return pr(c)
        }
    }

    function tr(...a) {
        const b = new sr;
        a.forEach(c => {
            c.listen(d => {
                rr(b, d)
            })
        });
        return pr(b)
    };

    function ur(a) {
        return gr(er(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : vr(c, b)
        }))
    }
    var xr = class {
        constructor(a) {
            this.i = a;
            this.g = new T(null);
            this.j = new T(null);
            this.l = new sr;
            this.B = b => {
                this.g.O == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.O;
                c != null && (b = wr(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), rr(this.l, vr(c, b))))
            };
            this.C = b => {
                var c = this.g.O;
                c != null && (c = wr(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function vr(a, b) {
        return {
            Th: b.pageX - a.pageX,
            Uh: b.pageY - a.pageY
        }
    }

    function wr(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function yr(a) {
        return gr(er(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : zr(c, b)
        }))
    }
    var Ar = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new T(null);
            this.i = new T(null);
            this.j = new sr;
            this.I = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.O;
                d != null && (this.g.g(null), this.i.g(null), rr(this.j, zr(d, c)))
            };
            this.B = c => {
                this.g.O != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function zr(a, b) {
        return {
            Th: b.screenX - a.screenX,
            Uh: b.screenY - a.screenY
        }
    };
    var Dr = (a, b, c) => {
        const d = new Br(a, b, c);
        return () => Cr(d)
    };

    function Cr(a) {
        if (a.g) return !1;
        if (a.i == null) return Er(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return Er(a), !0;
        Fr(a, b);
        return !0
    }

    function Er(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function Fr(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            Er(a)
        }, b)
    }
    class Br {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function Gr(a) {
        return Hr(yr(a.g), ur(a.i))
    }

    function Ir(a) {
        return tr(pr(a.g.j), pr(a.i.l))
    }
    var Jr = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function Hr(a, b) {
        return er(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var Kr = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function Lr(a) {
        a.A == null && (a.A = new T(a.B.getBoundingClientRect()));
        return a.A
    }
    class Mr extends S {
        constructor(a, b) {
            super();
            this.i = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                Lr(this).g(this.B.getBoundingClientRect())
            }
        }
        j() {
            this.F || (this.F = !0, this.i.addEventListener("resize", this.l), this.i.addEventListener("scroll", this.l));
            return Lr(this)
        }
        g() {
            this.i.removeEventListener("resize", this.l);
            this.i.removeEventListener("scroll", this.l);
            super.g()
        }
    };

    function Nr(a, b) {
        return new Or(a, b)
    }

    function Pr(a) {
        a.i || (a.i = !0, a.l.observe(a.element));
        return gr(a.j, Kk)
    }
    var Or = class extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.i = !1;
            this.j = new T(new Jk(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                this.update()
            })
        }
        update() {
            this.win.requestAnimationFrame(() => {
                this.C || this.j.g(new Jk(this.element.offsetWidth, this.element.offsetHeight))
            })
        }
        g() {
            this.l.disconnect();
            super.g()
        }
    };

    function Qr(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class Rr {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function Sr(a, b) {
        a = a.getBoundingClientRect();
        return new Tr(a.top + jq(b), a.bottom - a.top)
    }

    function Ur(a) {
        return new Tr(Math.round(a.g), Math.round(a.i))
    }
    class Tr {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var Wr = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new Uq(c);
        b = b.filter(e => !d.contains(e));
        b.length && (Vr(a, b), Xa(c, b))
    };

    function Vr(a, b) {
        for (const d of b) {
            const e = hd("LINK", a.document);
            e.type = "text/css";
            b = e;
            var c = Zc `//fonts.googleapis.com/css?family=${d}`;
            b.href = ec(c).toString();
            b.rel = "stylesheet";
            a.document.head.appendChild(e)
        }
    };

    function Xr(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class Yr extends S {
        constructor(a) {
            super();
            this.i = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = Dr(a, 1E3, () => {
                if (this.B != null) {
                    var b = eq(this.i, !0) - this.B;
                    b > 1E3 && Xr(this, b)
                }
            });
            this.A = null
        }
        M(a, b) {
            a == null ? (this.B = a = eq(this.i, !0), this.i.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.i.setTimeout(() => {
                this.M(void 0, b)
            }, a)
        }
        g() {
            this.A != null && this.i.clearTimeout(this.A);
            this.i.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.g()
        }
        addListener(a) {
            this.F ? a(this.l) : this.j.push(a)
        }
    };
    var Zr = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class $r {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            const a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function as(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new bs(d)
    }

    function cs(a) {
        return a.g.slice(0)
    }

    function ds(a, b = 1) {
        a = cs(a);
        const c = new $r(b);
        db(a, () => c.next());
        return new bs(a)
    }
    const bs = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new bs(Oa(this.g, a))
        }
        apply(a) {
            return new bs(a(cs(this)))
        }
        sort(a) {
            return new bs(cs(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = cs(this);
            b.push(a);
            return new bs(b)
        }
        count() {
            return this.g.length
        }
    };
    class es {
        constructor(a) {
            this.g = new Uq(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function fs(a) {
        return new gs({
            value: a
        }, null)
    }

    function hs(a) {
        return new gs(null, Error(a))
    }

    function is(a) {
        try {
            return fs(a())
        } catch (b) {
            return new gs(null, b)
        }
    }

    function js(a) {
        return a.g != null ? a.getValue() : null
    }

    function ks(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function ls(a, b) {
        return a.isError() ? new gs(null, b(a.i)) : a
    }

    function ms(a, b) {
        return ls(a, c => Error(`${b}${c.message}`))
    }

    function ns(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class gs {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        isError() {
            return this.g == null
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof gs ? a : fs(a)) : this
        }
    };
    class os {
        constructor() {
            this.g = new Tq
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Uq, this.g.set(a, c));
            c.add(b)
        }
    };

    function ps(a) {
        return !a
    }

    function qs(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function rs(a) {
        return a !== null
    };
    var ss = class extends O {
        getId() {
            return I(this, 3)
        }
    };
    class ts {
        constructor(a, {
            mg: b,
            di: c,
            vj: d,
            Ah: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new bs(b || []);
            this.i = e;
            this.g = d
        }
    };
    var us = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new Tq;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        ws = a => {
            var b = vs(a);
            a = [];
            for (let c of b) b = String(c.hc), a.push(c.shortName + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const vs = a => {
            const b = [],
                c = a.l;
            c && c.count() && b.push({
                shortName: "a",
                hc: xs(c)
            });
            a.j != null && b.push({
                shortName: "as",
                hc: a.j
            });
            a.g != null && b.push({
                shortName: "i",
                hc: String(a.g)
            });
            a.i != null && b.push({
                shortName: "rp",
                hc: String(a.i)
            });
            b.sort(function(d, e) {
                return d.shortName.localeCompare(e.shortName)
            });
            b.unshift({
                shortName: "t",
                hc: ys(a.A)
            });
            return b
        },
        ys = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        xs = a => {
            a = cs(a).map(zs);
            a = JSON.stringify(a);
            return md(a)
        },
        zs = a => {
            const b = {};
            I(a, 7) != null && (b.q = I(a, 7));
            Kh(a, 2) != null && (b.o = Kh(a, 2));
            Kh(a, 5) != null && (b.p = Kh(a, 5));
            return b
        };

    function As() {
        var a = new Bs;
        return gi(a, 2, 1)
    }
    var Bs = class extends O {
        setLocation(a) {
            return gi(this, 1, a)
        }
        g() {
            return Zh(this, 1)
        }
    };

    function Cs(a) {
        const b = [].slice.call(arguments).filter(ib(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.qg || []);
            d = Object.assign(d, e.uc())
        });
        return new Ds(c, d)
    }

    function Es(a) {
        switch (a) {
            case 1:
                return new Ds(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Ds(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Ds(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Ds(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Fs(a) {
        return a == null ? null : new Ds(null, {
            google_ml_rank: a
        })
    }

    function Gs(a) {
        return a == null ? null : new Ds(null, {
            google_placement_id: ws(a)
        })
    }

    function Hs({
        Ni: a,
        dj: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new Ds(null, a)
    }
    class Ds {
        constructor(a, b) {
            this.qg = a;
            this.g = b
        }
        uc() {
            return this.g
        }
    };
    var Is = class extends O {};
    var Js = class extends O {};
    var Ks = class extends O {
        C() {
            return I(this, 2)
        }
        A() {
            return I(this, 5)
        }
        g() {
            return Bh(this, Js, 3, y())
        }
        j() {
            return Kh(this, 4)
        }
        l() {
            return ih(this, 6)
        }
        B() {
            return eh(this, Is, 7)
        }
    };
    var Ls = class extends O {};
    var Ms = class extends O {
        l() {
            return J(this, 12, !1)
        }
        j() {
            return Gh(this, 13)
        }
        g() {
            return Vh(this, 23)
        }
    };
    var Ns = class extends O {
        constructor() {
            super()
        }
    };
    var Os = class extends O {
        g() {
            return Lh(this, 3)
        }
        j() {
            return Jh(this, 6)
        }
    };
    var Ps = class extends O {};
    var Qs = class extends O {};
    var Rs = class extends O {
        ia() {
            return z(this, ss, 1)
        }
        j() {
            return Lh(this, 2)
        }
    };
    var Ss = class extends O {};
    var Ts = class extends O {};
    var Us = class extends O {
            getName() {
                return I(this, 4)
            }
        },
        Vs = [1, 2, 3];
    var Ws = class extends O {
        g() {
            return z(this, Os, 10)
        }
    };
    var Xs = class extends O {
        g() {
            return Jh(this, 2)
        }
        j() {
            return Jh(this, 3)
        }
    };
    var Ys = class extends O {
        g() {
            return Gh(this, 1)
        }
    };
    var Zs = class extends O {};
    var $s = class extends O {
        g() {
            return Nh(this, 1)
        }
    };
    var at = class extends O {
        g() {
            return K(this, 1)
        }
        j() {
            return K(this, 2)
        }
    };
    var bt = class extends O {};
    var ct = class extends O {
        l() {
            return J(this, 1)
        }
        A() {
            return J(this, 3)
        }
        C() {
            return J(this, 7)
        }
        g() {
            return J(this, 4)
        }
        j() {
            return J(this, 5)
        }
    };
    var dt = class extends O {
        g() {
            return z(this, $s, 6)
        }
        j() {
            return z(this, ct, 12)
        }
    };
    var et = class extends O {};
    var ft = class extends O {
        g() {
            return z(this, et, 1)
        }
    };
    var gt = class extends O {};
    var ht = class extends O {};
    var it = class extends O {
        g() {
            return Bh(this, ht, 1, y())
        }
    };
    var jt = class extends O {
        setProperty(a) {
            return ei(this, 1, a)
        }
        getValue() {
            return I(this, 2)
        }
    };
    var kt = class extends O {};
    var lt = class extends O {};
    var mt = class extends O {
        ia() {
            return z(this, ss, 1)
        }
        j() {
            return Lh(this, 2)
        }
    };
    var nt = class extends O {};
    var ot = class extends O {};
    var pt = class extends O {
        g() {
            return Sh(this, 6, y())
        }
    };
    var qt = class extends O {
        gf() {
            return eh(this, ot, 2)
        }
    };
    var rt = class extends O {
        g() {
            return Nh(this, 1)
        }
    };
    var st = class extends O {};
    var ut = class extends O {
            g() {
                return Uh(this, st, 2, tt)
            }
        },
        tt = [1, 2];
    var vt = class extends O {
        g() {
            return z(this, ut, 3)
        }
    };
    var wt = class extends O {};
    var xt = class extends O {
        g() {
            return Bh(this, wt, 1, y())
        }
    };
    var yt = class extends O {
        g() {
            return Sh(this, 1, y())
        }
        j() {
            return z(this, vt, 3)
        }
    };
    var zt = Zj(class extends O {
        getMetadata() {
            return z(this, it, 6)
        }
        g() {
            return z(this, Ms, 15)
        }
    });
    var At = class extends O {},
        Bt = Zj(At);

    function Ct(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Bt(b) : null
        } catch (b) {
            return null
        }
    }

    function Dt(a, b) {
        if (a.Te !== void 0) {
            var c = Ct(b);
            c || (c = new At);
            a.Te !== void 0 && $h(c, 2, a.Te);
            a = Date.now() + 864E5;
            Number.isFinite(a) && ci(c, 1, Math.round(a));
            c = ji(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = Ct(b)) && Gh(c, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var Et = {
            Eb: "ama_success",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Ft = {
            Eb: "ama_failure",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Gt = {
            Eb: "ama_coverage",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Ht = {
            Eb: "ama_opt",
            Ya: .1,
            pb: !0,
            Hb: !1
        },
        It = {
            Eb: "ama_auto_rs",
            Ya: 1,
            pb: !0,
            Hb: !1
        },
        Jt = {
            Eb: "ama_constraints",
            Ya: 0,
            pb: !0,
            Hb: !0
        };

    function Kt(a, b) {
        Lt(a.i, It, { ...b,
            evt: "place",
            vh: bq(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: z(a.g, at, 5) ? .g() || ""
        })
    }

    function Mt(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Fl(c.stack, "") || "");
        Kt(a, b)
    }
    var Nt = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const Ot = ["-webkit-text-fill-color"];

    function Pt(a) {
        if (Lc) {
            {
                const c = id(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Qt(a)
                } else a = Rt()
            }
        } else a = Rt();
        return a
    }
    var Rt = () => {
        const a = {
            all: "initial"
        };
        Ma(Ot, b => {
            a[b] = "unset"
        });
        return a
    };

    function Qt(a) {
        Ma(Ot, b => {
            delete a[b]
        });
        return a
    };
    var St = class {
        constructor(a) {
            this.g = a
        }
        getContent(a) {
            const b = a.document.createElement("div");
            v(b, Pt(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            v(c, Pt(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function Tt(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];
            var c = a.className ? a.className.split(/\s+/) : [];a = {};
            for (let d = 0; d < c.length; ++d) a[c[d]] = !0;
            for (c = 0; c < b.length; ++c)
                if (!a[b[c]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Ut(a) {
        return Oq(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Vt(a, b) {
        a = il(new Xk(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Wt(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Tt(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Xt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Tt(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var U = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        V = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Yt = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        Zt = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        $t = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var au = new V(619278254, 10),
        bu = new U(687716473),
        cu = new U(687747818),
        du = new U(1377),
        eu = new U(676894296, !0),
        fu = new U(1371, !0),
        gu = new U(682658313),
        hu = new V(1130, 100),
        iu = new V(1339, .3),
        ju = new V(1032, 200),
        ku = new Yt(14),
        lu = new U(1370, !0),
        mu = new V(1224, .01),
        nu = new U(654220660, !0),
        ou = new V(1346, 6),
        pu = new V(1347, 3),
        qu = new U(1367),
        ru = new U(1260),
        su = new U(316),
        tu = new U(1290),
        uu = new U(334),
        vu = new V(1263, -1),
        wu = new V(54),
        xu = new V(1323, -1),
        yu = new V(1265, -1),
        zu = new V(1264, -1),
        Au = new U(1291),
        Bu = new U(1267, !0),
        Cu =
        new U(1266),
        Du = new U(313),
        Eu = new V(66, -1),
        Fu = new V(65, -1),
        Gu = new U(1256),
        Hu = new U(369),
        Iu = new U(1241, !0),
        Ju = new U(368),
        Ku = new U(1300, !0),
        Lu = new Zt(1273, ["en", "de", "fr", "es", "ja"]),
        Mu = new Zt(1261, ["44786015", "44786016"]),
        Nu = new U(1309),
        Ou = new U(1361),
        Pu = new U(1349),
        Qu = new U(1372),
        Ru = new U(290),
        Su = new U(1368, !0),
        Tu = new U(1222),
        Uu = new U(1354),
        Vu = new U(1341),
        Wu = new V(1366),
        Xu = new V(1365),
        Yu = new V(1364, 300),
        Zu = new U(1350),
        $u = new U(1356),
        av = new U(626390500),
        bv = new U(686013513),
        cv = new $t(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        dv = new V(643258048),
        ev = new V(643258049),
        fv = new U(682250248),
        gv = new Yt(622128249, "#FFFFFF"),
        hv = new Yt(622128250, "#1A73E8"),
        iv = new $t(641845510, ["33", "38"]),
        jv = new U(686023322),
        kv = new U(566279275),
        lv = new U(622128248),
        mv = new U(566279276),
        nv = new U(681379804, !0),
        ov = new U(676863674, !0),
        pv = new Yt(589752731, "#FFFFFF"),
        qv = new Yt(589752730, "#1A73E8"),
        rv = new $t(635821288, ["29_18", "30_19"]),
        sv = new $t(631402549),
        tv = new $t(636146137, ["29_5", "30_6"]),
        uv = new U(636570127, !0),
        vv = new $t(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        wv = new V(652486359, 1),
        xv = new V(626062006, 670),
        yv = new V(688905693),
        zv = new V(666400580, 22),
        Av = new V(687270738),
        Bv = new U(626062008),
        Cv = new U(679043940, !0),
        Dv = new $t(683929765),
        Ev = new U(643258050),
        Fv = new U(686891043),
        Gv = new U(683614711),
        Hv = new U(688113706),
        Iv = new U(506914611),
        Jv = new U(655991266, !0),
        Kv = new U(597181299),
        Lv = new U(626062007),
        Mv = new U(686111728),
        Nv = new U(689318127),
        Ov = new $t(630330362),
        Pv = new V(618163195, 15E3),
        Qv = new V(624950166, 15E3),
        Rv = new V(623405755, 300),
        Sv = new V(508040914, 500),
        Tv = new V(547455356,
            49),
        Uv = new V(650548030, 2),
        Vv = new V(650548032, 300),
        Wv = new V(650548031, 1),
        Xv = new V(655966487, 300),
        Yv = new V(655966486, 250),
        Zv = new V(469675170, 6E4),
        $v = new U(562896595),
        aw = new U(675298507),
        bw = new U(644381219),
        cw = new U(644381220),
        dw = new U(676460084),
        ew = new U(680702595),
        fw = new U(45650663),
        gw = new V(684147713, -1),
        hw = new U(678806782, !0),
        iw = new U(570863962, !0),
        jw = new Yt(570879859, "control_1\\.\\d"),
        kw = new V(570863961, 50),
        lw = new U(570879858, !0),
        mw = new V(63, 30),
        nw = new U(1134),
        ow = new U(562874197),
        pw = new U(562874196),
        qw = new U(555237685, !0),
        rw = new U(45460956),
        sw = new U(45414947, !0),
        tw = new V(472785970, 500),
        uw = new V(550718588, 250),
        vw = new V(624290870, 50),
        ww = new U(506738118),
        xw = new U(77),
        yw = new U(78),
        zw = new U(83),
        Aw = new U(80),
        Bw = new U(76),
        Cw = new U(84),
        Dw = new U(1973),
        Ew = new U(188),
        Fw = new U(485990406);
    var Gw = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function W(a) {
        return Hp(Gw).j(a.g, a.defaultValue)
    }

    function X(a) {
        return Hp(Gw).A(a.g, a.defaultValue)
    }

    function Hw(a) {
        return Hp(Gw).C(a.g, a.defaultValue)
    }

    function Iw(a) {
        return Hp(Gw).l(a.g, a.defaultValue)
    };
    var Kw = (a, b, c, d = 0) => {
            var e = Jw(b, c, d);
            if (e.M) {
                for (c = b = e.M; c = e.vd(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Td
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Wt(a, e.anchor, e.position)
        },
        Lw = (a, b, c, d = 0) => {
            W(Du) ? Kw(a, b, c, d) : Wt(a, b, c)
        };

    function Jw(a, b, c) {
        const d = f => {
                f = Mw(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = Mw(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    M: Nw(a.previousSibling, d),
                    vd: f => Nw(f.previousSibling, d),
                    Td: 0
                };
            case 2:
                return {
                    M: Nw(a.lastChild, d),
                    vd: f => Nw(f.previousSibling, d),
                    Td: 0
                };
            case 3:
                return {
                    M: Nw(a.nextSibling, e),
                    vd: f => Nw(f.nextSibling, e),
                    Td: 3
                };
            case 1:
                return {
                    M: Nw(a.firstChild, e),
                    vd: f => Nw(f.nextSibling, e),
                    Td: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Mw(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Nw(a, b) {
        return a && b(a) ? a : null
    };

    function Ow(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Pw(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function Qw(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Rw(a, b, c) {
        a = Ow(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Sw(a, b) {
        b = b.parentElement;
        return b ? (a = id(b, a)) ? a.direction : "" : ""
    }

    function Tw(a, b, c) {
        if (Rw(a, b, c) !== 0) {
            Qw(b, c, "0px");
            var d = Rw(a, b, c);
            Qw(b, c, `${-1*d}px`);
            a = Rw(a, b, c);
            a !== 0 && a !== d && Qw(b, c, `${d/(a-d)*d}px`)
        }
    };
    const Uw = RegExp("(^| )adsbygoogle($| )");

    function Vw(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Hc(d.property);
            a[e] = d.value
        }
    }

    function Ww(a, b, c, d, e, f) {
        a = Xw(a, e);
        a.ta.setAttribute("data-ad-format", d ? d : "auto");
        Yw(a, b, c, f);
        return a
    }

    function Zw(a, b, c = null) {
        a = Xw(a, {});
        Yw(a, b, null, c);
        return a
    }

    function Yw(a, b, c, d) {
        var e = [];
        if (d = d && d.qg) a.mb.className = d.join(" ");
        a = a.ta;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Xw(a, b) {
        const c = Vt(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Sd && Vw(d, b.Sd);
        a = il(new Xk(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.ag && (d.marginTop = b.ag);
        b.De && (d.marginBottom = b.De);
        b.Ub && Vw(d, b.Ub);
        c.appendChild(a);
        return {
            mb: c,
            ta: a
        }
    }

    function $w(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.uc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function ax(a) {
        const b = Ut(a.document);
        Ma(b, function(c) {
            const d = bx(a, c);
            var e;
            if (e = d) {
                e = (e = Ow(c, a)) ? e.y : 0;
                const f = bq(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), $w(a, c))
        })
    }

    function bx(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in eb) a[eb[c]] && (b[eb[c]] = a[eb[c]]);
        return b
    };
    var dx = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (cx(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const cx = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? Ec(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && Vq.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (cx(a, b[c])) return !0
        }
        return !1
    };
    var ex = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const fx = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return Ww(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return ex(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function gx(a) {
        var b = [];
        Nq(a.getElementsByTagName("p"), function(c) {
            hx(c) >= 100 && b.push(c)
        });
        return b
    }

    function hx(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        Nq(a.childNodes, function(c) {
            b += hx(c)
        });
        return b
    }

    function ix(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function jx(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const kx = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = Wa(b);
            a = jx(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = gx(a[c]),
                        e = this.j;
                    e < 0 && (e += d.length);
                    e >= 0 && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    var lx = class {
        constructor() {
            this.g = Zc `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        aa(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            b.error && b.meta && b.id || (b = new Dl(b, {
                context: a,
                id: d
            }));
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (gd(t.document, this.g), t.error_rep_loaded = !0);
            return !1
        }
        tb(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.aa(a, c, .01, "jserror")) throw c;
            }
        }
        Ca(a, b, c) {
            return (...d) => this.tb(a, () => b.apply(c, d))
        }
        la(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.aa(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };
    const mx = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var nx = (a, b, c, d) => {
            const e = d || window,
                f = typeof queueMicrotask !== "undefined";
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Ml();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && mx({
                        label: a.toString(),
                        value: g,
                        duration: (Ml() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        ox = (a, b) => nx(754,
            a, (c, d) => {
                (new lx).aa(c, d)
            }, b);

    function px(a, b, c) {
        return nx(a, b, void 0, c).apply()
    }

    function qx(a, b) {
        return ox(a, b).apply()
    }

    function rx(a) {
        if (!a) return null;
        var b = I(a, 7);
        if (I(a, 1) || a.getId() || Sh(a, 4, y()).length > 0) {
            var c = I(a, 3),
                d = I(a, 1),
                e = Sh(a, 4, y(ef));
            b = Kh(a, 2);
            var f = Kh(a, 5);
            a = sx(Lh(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + ix(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + ix(e[c]);
            b = (e = g) ? new kx(e, b, f, a) : null
        } else b = b ? new kx(b, Kh(a, 2), Kh(a, 5), sx(Lh(a, 6))) : null;
        return b
    }
    var tx = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function sx(a) {
        return a == null ? a : tx[a]
    }

    function ux(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = I(a[c], 1),
                e = I(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function vx(a, b) {
        var c = {};
        a && (c.ag = I(a, 1), c.De = I(a, 2), c.clearBoth = !!Jh(a, 3));
        b && (c.Sd = ux(Bh(b, jt, 3, y(ef))), a = Bh(b, jt, 4, y(ef)), c.Ub = ux(a));
        return c
    }
    var wx = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        xx = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const yx = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return Ww(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class zx {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = ex(a);
            return new Ds(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Ax = class {
        constructor(a, b) {
            this.l = a;
            this.i = b
        }
        g() {
            return this.l
        }
        j() {
            return this.i
        }
    };
    const Bx = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = Bh(this.g, kt, 9, y()).length > 0 ? Bh(this.g, kt, 9, y())[0] : null,
                f = vx(z(this.g, lt, 3), e);
            if (!e) return null;
            if (e = I(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = il(new Xk(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Sd && Vw(c.style, f.Sd);
                d = il(new Xk(d), "INS");
                f.Ub && Vw(d.style, f.Ub);
                c.appendChild(d);
                f = {
                    mb: c,
                    ta: d
                };
                f.ta.setAttribute("data-ad-type", "text");
                f.ta.setAttribute("data-native-settings-key",
                    e);
                Yw(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = Bh(this.g, kt, 9, y()).length > 0 ? Bh(this.g, kt, 9, y())[0] : null;
            if (!a) return null;
            a = Bh(a, jt, 3, y());
            for (let b = 0; b < a.length; b++) {
                const c = a[b];
                if (I(c, 1) == "height" && parseInt(I(c, 2), 10) > 0) return parseInt(I(c, 2), 10)
            }
            return null
        }
    };
    const Cx = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Ub: g
                }
            } else c = {};
            a = Ww(d.document, a, f, e, c, b);
            a.ta.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        uc() {
            return this.g
        }
    };
    class Dx {
        constructor(a) {
            this.i = a
        }
        g() {
            return new Ds([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Ex = class {
        constructor(a, b) {
            this.l = a;
            this.i = b
        }
        j() {
            return this.i
        }
        g(a) {
            a = this.l.query(a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function Fx(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.ia();
            if (k) {
                var l = rx(k);
                if (l) {
                    var m = Lh(e, 2);
                    m = wx[m];
                    var n = m === void 0 ? null : m;
                    if (n === null) e = null;
                    else {
                        m = (m = z(e, lt, 3)) ? Jh(m, 3) : null;
                        l = new Ex(l, n);
                        n = Th(e, 10, y()).slice(0);
                        Kh(k, 5) != null && n.push(1);
                        var p = h ? h : {};
                        h = Kh(e, 12);
                        k = eh(e, Bs, 4) ? z(e, Bs, 4) : null;
                        Lh(e, 8) == 1 ? (p = p.wi || null, e = new Gx(l, new yx(vx(z(e, lt, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = Lh(e, 8) == 2 ? new Gx(l, new Bx(e), p.wj || new Dx("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            e !== null && d.push(e)
        }
        return d
    }

    function Hx(a) {
        return a.l
    }

    function Ix(a) {
        return a.sa
    }

    function Mx(a) {
        return a.C instanceof Cx ? a.C.uc() : null
    }

    function Nx(a, b, c) {
        Pq(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function Ox(a) {
        return Vt(a.g.document, a.F || !1)
    }

    function Px(a) {
        return a.C.j(a.g)
    }

    function Qx(a, b = null, c = null) {
        return new Gx(a.I, b || a.C, c || a.R, a.F, a.Ib, a.zc, a.ae, a.g, a.na, a.B, a.i, a.A, a.W)
    }
    class Gx {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.I = a;
            this.C = b;
            this.R = c;
            this.F = d;
            this.Ib = e;
            this.zc = f;
            this.ae = g ? g : new Bs;
            this.g = h;
            this.na = k;
            this.B = l;
            this.i = m;
            (a = !m) || (a = !(m.ia() && Kh(m.ia(), 5) != null));
            this.sa = !a;
            this.A = n;
            this.W = p;
            this.H = [];
            this.l = !1;
            this.L = new Tq
        }
        da() {
            return this.g
        }
        j() {
            return this.I.j()
        }
    };

    function Rx(a, b, c, d, e, f) {
        const g = As();
        return new Gx(new Ax(c, e), new fx, new zx(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Sx(a, b, c, d, e) {
        const f = As();
        return new Gx(new Ax(b, d), new yx({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Tx = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return Rx(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return Sx(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const Ux = {
        TABLE: {
            lc: new es([1, 2])
        },
        THEAD: {
            lc: new es([0, 3, 1, 2])
        },
        TBODY: {
            lc: new es([0, 3, 1, 2])
        },
        TR: {
            lc: new es([0, 3, 1, 2])
        },
        TD: {
            lc: new es([0, 3])
        }
    };

    function Vx(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = La(e, f), c < 0 || b.push(new Wx(a, [f], c, f, 3, el(f).trim(), d));
        return b
    }

    function Xx(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType == 1 || l.nodeType == 3) {
                if (l.nodeType != 1) var m = null;
                else l.tagName == "BR" ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = m == "inline" || m == "inline-block" ? null : l);
                m ? (d.length && k && e.push(new Wx(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = el(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Wx(a, d, h, b, 2, k, c));
        return e
    }

    function Yx(a, b) {
        return a.g - b.g
    }
    class Wx {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.ed = b.slice(0);
            this.g = c;
            this.he = d;
            this.ie = e;
            this.C = f;
            this.i = g
        }
        da() {
            return this.i
        }
        A(a) {
            return Rx(a, this.l, this.he, this.i, this.ie, this.g)
        }
        j() {
            return Sx(this.l, this.he, this.i, this.ie, this.g)
        }
    };

    function Zx(a) {
        return Va(a.C ? Xx(a.g, a.j, a.i) : [], a.A ? Vx(a.g, a.A, a.j, a.i) : []).filter(b => {
            var c = b.he.tagName;
            c ? (c = Ux[c.toUpperCase()], b = c != null && c.lc.contains(b.ie)) : b = !1;
            return !b
        })
    }
    class $x {
        constructor(a, b, c) {
            this.j = a;
            this.A = b.bd;
            this.C = b.Fg;
            this.g = b.articleStructure;
            this.i = c;
            this.l = b.lg
        }
    };

    function ay(a, b) {
        if (!b) return !1;
        const c = za(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = ay(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function by(a, b) {
        return Ra(b.ed, c => ay(a, c))
    }
    class cy {
        constructor(a) {
            this.g = new Tq;
            this.i = a
        }
    };
    class dy {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var fy = (a, {
            Rg: b = !1,
            Rf: c = !1,
            fh: d = c ? 2 : 3,
            Qf: e = null
        } = {}) => {
            a = Zx(a);
            return ey(a, {
                Rg: b,
                Rf: c,
                fh: d,
                Qf: e
            })
        },
        ey = (a, {
            Rg: b = !1,
            Rf: c = !1,
            fh: d = c ? 2 : 3,
            Qf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(Yx);
            a = [];
            b = new dy(b, e);
            for (const g of f) {
                e = {
                    Ud: g,
                    xd: g.C.length < 51 ? !1 : b.j != null ? !by(b.j, g) : !0
                };
                if (b.l || e.xd) b.g.length ? (f = b.g[b.g.length - 1].Ud, f = dx(f.da(), f.ed[f.ed.length - 1], e.Ud.ed[0])) : f = !0, f ? (b.g.push(e), e.xd && b.i.push(e.Ud)) : (b.g = [e], b.i = e.xd ? [e.Ud] : []);
                if (b.i.length >=
                    d) {
                    e = b;
                    f = c ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].xd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var hy = (a, b, c = !1) => {
            a = gy(a, b);
            const d = new cy(b);
            return Zr(a, e => fy(e, {
                Rf: c,
                Qf: d
            }))
        },
        iy = (a, b) => {
            a = gy(a, b);
            const c = new cy(b);
            return Zr(a, d => {
                if (d.l) {
                    var e = d.g;
                    var f = d.i;
                    d = d.j.querySelectorAll(d.l);
                    var g = [];
                    for (var h of d) g.push(new Tx(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !ay(c, f.element) && dx(m.da(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        gy = (a, b) => {
            const c = new Tq;
            a.forEach(d => {
                var e = rx(z(d, ss, 1));
                if (e) {
                    var f = e.toString();
                    Pq(c, f) || c.set(f, {
                        articleStructure: d,
                        ni: e,
                        bd: null,
                        Fg: !1,
                        lg: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, ss, 2)) ? I(f, 7) : null) ? e.bd = e.bd ? e.bd + "," + f : f: e.Fg = !0;
                    d = z(d, ss, 4);
                    e.lg = d ? I(d, 7) : null
                }
            });
            return Sq(c).map(d => {
                const e = d.ni.query(b.document);
                return e.length ? new $x(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var jy = a => a ? .google_ad_slot ? fs(new ts(1, {
            di: a.google_ad_slot
        })) : hs("Missing dimension when creating placement id"),
        ly = a => {
            switch (a.Ib) {
                case 0:
                case 1:
                    var b = a.i;
                    b == null ? a = null : (a = b.ia(), a == null ? a = null : (b = Lh(b, 2), a = b == null ? null : new ts(0, {
                        mg: [a],
                        Ah: b
                    })));
                    return a != null ? fs(a) : hs("Missing dimension when creating placement id");
                case 2:
                    return a = ky(a), a != null ? fs(a) : hs("Missing dimension when creating placement id");
                default:
                    return hs("Invalid type: " + a.Ib)
            }
        };
    const ky = a => {
        if (a == null || a.A == null) return null;
        const b = z(a.A, ss, 1),
            c = z(a.A, ss, 2);
        if (b == null || c == null) return null;
        const d = a.W;
        if (d == null) return null;
        a = a.j();
        return a == null ? null : new ts(0, {
            mg: [b, c],
            vj: d,
            Ah: xx[a]
        })
    };

    function my(a) {
        const b = Mx(a.ea);
        return (b ? jy(b) : ly(a.ea)).map(c => ws(c))
    }

    function ny(a) {
        a.g = a.g || my(a);
        return a.g
    }

    function oy(a, b) {
        if (a.ea.l) throw Error("AMA:AP:AP");
        Lw(b, a.ia(), a.ea.j());
        a = a.ea;
        a.l = !0;
        b != null && a.H.push(b)
    }
    const py = class {
        constructor(a, b, c) {
            this.ea = a;
            this.i = b;
            this.ma = c;
            this.g = null
        }
        ia() {
            return this.i
        }
        fill(a, b) {
            var c = this.ea;
            (a = c.C.i(a, b, this.i, c.g)) && oy(this, a.mb);
            return a
        }
    };

    function qy(a, b) {
        return qx(() => {
            const c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.I.g(g.g);
                    h && e.push({
                        sh: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var k = f.push; {
                        var l = e[g];
                        const B = l.anchorElement,
                            G = l.sh;
                        var m = G.F,
                            n = G.g.document.createElement("div");
                        n.className = "google-auto-placed";
                        var p = n.style;
                        p.textAlign = "center";
                        p.width = "100%";
                        p.height = "0px";
                        p.clear = m ? "both" : "none";
                        h = n;
                        try {
                            Lw(h, B, G.j());
                            var r = h
                        } catch (E) {
                            throw Xt(h), E;
                        }
                    }
                    k.call(f, r)
                }
                const w = jq(b),
                    D = kq(b);
                for (k = 0; k < d.length; k++) {
                    const B =
                        d[k].getBoundingClientRect(),
                        G = e[k];
                    c.push(new py(G.sh, G.anchorElement, new Rr(B.left + D, B.top + w, B.right - B.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Xt(d[e])
            }
            return c
        }, b)
    };
    const ry = {
            1: "0.5vp",
            2: "300px"
        },
        sy = {
            1: 700,
            2: 1200
        },
        ty = {
            [1]: {
                Jh: "3vp",
                Sf: "1vp",
                Ih: "0.3vp"
            },
            [2]: {
                Jh: "900px",
                Sf: "300px",
                Ih: "90px"
            }
        };

    function uy(a, b, c) {
        var d = vy(a),
            e = bq(a) || sy[d],
            f = void 0;
        c && (f = (c = (c = wy(Bh(c, Ks, 2, y()), d)) ? z(c, Is, 7) : void 0) ? xy(c, e) : void 0);
        c = f;
        f = vy(a);
        a = bq(a) || sy[f];
        const g = yy(ty[f].Sf, a);
        a = g === null ? zy(f, a) : new Ay(g, g, By(g, 8), 8, .3, c);
        c = yy(ty[d].Jh, e);
        f = yy(ty[d].Sf, e);
        d = yy(ty[d].Ih, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Ay(e, e, By(e, a.i), a.i, a.l, a.g)
    }

    function Cy(a, b) {
        const c = Gh(a, 4);
        a = ih(a, 5);
        return c == null || a == null ? b : new Ay(a, 0, [], c, 1)
    }

    function Dy(a, b) {
        const c = vy(a);
        a = bq(a) || sy[c];
        if (!b) return zy(c, a);
        if (b = wy(Bh(b, Ks, 2, y()), c))
            if (b = Ey(b, a)) return b;
        return zy(c, a)
    }

    function Fy(a) {
        const b = vy(a);
        a = bq(a) || sy[b];
        return zy(b, a)
    }

    function Gy() {
        return W(tu) ? new Ay(0, null, [], 8, .3) : new Ay(0, null, [], 3, null)
    }

    function Hy(a, b) {
        let c = {
            Gc: a.j,
            rb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Oc);
        return c
    }

    function Iy(a, b, c) {
        var d = Jh(b, 2);
        b = z(b, Ks, 1);
        var e = vy(c);
        var f = bq(c) || sy[e];
        c = yy(b ? .C(), f) ? ? a.j;
        e = yy(b ? .A(), f) ? ? a.C;
        d = d ? [] : Jy(b ? .g(), f) ? ? a.A;
        const g = b ? .j() ? ? a.i,
            h = b ? .l() ? ? a.l;
        a = (b ? .B() ? xy(z(b, Is, 7), f) : null) ? ? a.g;
        return new Ay(c, e, d, g, h, a)
    }

    function Ky(a, b) {
        var c = vy(b);
        const d = new Ls,
            e = new Ks;
        let f = !1;
        var g = X(vu);
        g >= 0 && (ai(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = X(zu), c >= 0 && (g = c + "vp")) : (c = X(yu), c >= 0 && (g = c + "px"));
        c = X(xu);
        c >= 0 && (g = c + "px");
        g !== null && (ei(e, 2, g), f = !0);
        c = W(Bu) ? "0px" : null;
        c !== null && (ei(e, 5, c), f = !0);
        if (W(Cu)) $h(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new Js;
                l = ai(l, 1, n.adCount);
                l = ei(l, 3, c ? ? n.Oc.rb + "px");
                l = ei(l, 2, g ? ? n.Oc.Gc + "px");
                k.call(h, l)
            }
            Ch(e, 3, m)
        }
        return f ? (C(d, 1, e), Iy(a, d, b)) : a
    }
    class Ay {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function wy(a, b) {
        for (let c of a)
            if (Lh(c, 1) == b) return c;
        return null
    }

    function Jy(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = Kh(d, 1);
            const e = yy(I(d, 2), b),
                f = yy(I(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Oc: {
                    Gc: e,
                    rb: f
                }
            })
        }
        return c
    }

    function Ey(a, b) {
        const c = yy(I(a, 2), b),
            d = yy(I(a, 5), b);
        if (c === null) return null;
        const e = Kh(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = Jy(f, b);
        if (f === null) return null;
        const g = z(a, Is, 7);
        b = g ? xy(g, b) : void 0;
        return new Ay(c, d, f, e, ih(a, 6), b)
    }

    function zy(a, b) {
        a = yy(ry[a], b);
        return W(tu) ? new Ay(a === null ? Infinity : a, null, [], 8, .3) : new Ay(a === null ? Infinity : a, null, [], 3, null)
    }

    function yy(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function vy(a) {
        a = aq(a) >= 900;
        return Kb() && !a ? 1 : 2
    }

    function By(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Oc: {
                Gc: a * 2,
                rb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Oc: {
                Gc: a * 3,
                rb: a * 3
            }
        }]
    }

    function xy(a, b) {
        const c = yy(I(a, 2), b) || 0,
            d = Kh(a, 3) || 1;
        a = yy(I(a, 1), b) || 0;
        return {
            gh: c,
            ah: d,
            dc: a
        }
    };

    function Ly(a, b, c) {
        return Up({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function My(a) {
        if (!a.length) return null;
        const b = Vp(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new Ny(b, a)
    }
    class Ny {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    var Oy = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Oy) : this.stack = Error().stack || ""
        }
    };
    let Py, Y;
    const Qy = new Tl(t);
    ((a, b = !0) => {
        Py = a || new Np;
        typeof t.google_srt !== "number" && (t.google_srt = Math.random());
        Mp(Py, t.google_srt);
        Y = new bm(Py, b, Qy);
        Y.j = !0;
        t.document.readyState == "complete" ? t.google_measure_js_timing || Qy.disable() : Qy.g && rb(t, "load", () => {
            t.google_measure_js_timing || Qy.disable()
        })
    })();
    var Ry = (a, b) => Y.tb(a, b),
        Sy = (a, b) => Y.Ca(a, b),
        Ty = (a, b, c) => {
            const d = Hp(Kp).g();
            !b.eid && d.length && (b.eid = d.toString());
            am(Py, a, b, !0, c)
        },
        Uy = (a, b, c) => {
            Y.la(a, b, c)
        };

    function Vy(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var $y = (a, b) => {
        var c = Wa(b.document.querySelectorAll(".google-auto-placed"));
        const d = Wa(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = Wy(b),
            f = Xy(b),
            g = Yy(b),
            h = Wa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Wa(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Wa(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Wa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Wa(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.wd, c],
                [a.Gb, d],
                [a.tj, e],
                [a.lf, f],
                [a.mf, g],
                [a.rj, h],
                [a.sj, k],
                [a.uj, l]
            ]) n === !1 ? b = b.concat(p) : m = m.concat(p);
        a = Zy(m);
        c = Zy(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const az = a => {
            const b = Vy(a);
            return b ? Oa(Pa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        Wy = a => Wa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Xy = a => (az(a) || Wa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Wa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Yy = a => Wa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Zy = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var bz = Y.Ca(453, $y),
        cz;
    cz = Y.Ca(454, (a, b) => {
        const c = Wa(b.document.querySelectorAll(".google-auto-placed")),
            d = Wa(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = Wy(b),
            f = Xy(b),
            g = Yy(b),
            h = Wa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Wa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Wa(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Zy([].concat(a.wd === !0 ? c : [], a.Gb === !0 ? d : [], a.tj === !0 ? e : [], a.lf === !0 ? f : [], a.mf === !0 ? g : [], a.rj === !0 ? h : [], a.sj === !0 ? k : [], a.uj ===
            !0 ? b : []))
    });

    function dz(a, b, c) {
        const d = ez(a);
        b = fz(d, b, c);
        return new gz(a, d, b)
    }

    function hz(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function iz(a) {
        return a.g.map(b => b.box)
    }

    function jz(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class gz {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function ez(a) {
        const b = bz({
                Gb: !1
            }, a),
            c = kq(a),
            d = jq(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || hz(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                uo: e ? 1 : 0
            } : null
        }).filter(ib(e => e === null))
    }

    function fz(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? kz(a, b) : Pa(a, d => new Ny(d.box, 1))
    }

    function kz(a, b) {
        a = Pa(a, d => new Ny(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Ly(d, a[f], b)) {
                        d = My([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function lz(a, b, c) {
        const d = Qr(c, b);
        return !Ra(a, e => Up(e, d))
    }

    function mz(a, b, c, d, e) {
        e = e.ma;
        const f = Qr(e, b),
            g = Qr(e, c),
            h = Qr(e, d);
        return !Ra(a, k => Up(k, g) || Up(k, f) && !Up(k, h))
    }

    function nz(a, b, c, d) {
        const e = iz(a);
        if (lz(e, b, d.ma)) return !0;
        if (!mz(e, b, c.gh, c.dc, d)) return !1;
        const f = new Ny(Qr(d.ma, 0), 1);
        a = Oa(a.l, g => Ly(g, f, c.dc));
        b = Qa(a, (g, h) => g + h.i, 1);
        return a.length === 0 || b > c.ah ? !1 : !0
    };
    var oz = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function pz(a, b) {
        const c = new os,
            d = new Uq;
        b.forEach(e => {
            if (Uh(e, Ss, 1, Vs)) {
                e = Uh(e, Ss, 1, Vs);
                if (z(e, Rs, 1) && z(e, Rs, 1).ia() && z(e, Rs, 2) && z(e, Rs, 2).ia()) {
                    const g = qz(a, z(e, Rs, 1).ia()),
                        h = qz(a, z(e, Rs, 2).ia());
                    if (g && h)
                        for (var f of oz({
                                anchor: g,
                                position: Lh(z(e, Rs, 1), 2)
                            }, {
                                anchor: h,
                                position: Lh(z(e, Rs, 2), 2)
                            })) c.set(za(f.anchor), f.position)
                }
                z(e, Rs, 3) && z(e, Rs, 3).ia() && (f = qz(a, z(e, Rs, 3).ia())) && c.set(za(f), Lh(z(e, Rs, 3), 2))
            } else Uh(e, Ts, 2, Vs) ? rz(a, Uh(e, Ts, 2, Vs), c) : Uh(e, Qs, 3, Vs) && sz(a, Uh(e, Qs, 3, Vs), d)
        });
        return new tz(c,
            d)
    }
    class tz {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const rz = (a, b, c) => {
            z(b, Rs, 2) ? (b = z(b, Rs, 2), (a = qz(a, b.ia())) && c.set(za(a), Lh(b, 2))) : z(b, ss, 1) && (a = uz(a, z(b, ss, 1))) && a.forEach(d => {
                d = za(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        sz = (a, b, c) => {
            z(b, ss, 1) && (a = uz(a, z(b, ss, 1))) && a.forEach(d => {
                c.add(za(d))
            })
        },
        qz = (a, b) => (a = uz(a, b)) && a.length > 0 ? a[0] : null,
        uz = (a, b) => (b = rx(b)) ? b.query(a) : null;
    var vz = class {
        constructor() {
            this.g = Ld();
            this.i = 0
        }
    };

    function wz(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (xz(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function yz(a) {
        a = zz(a);
        return a.has("all") || a.has("after")
    }

    function Az(a) {
        a = zz(a);
        return a.has("all") || a.has("before")
    }

    function zz(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function xz(a) {
        const b = zz(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Bz = class {
        constructor() {
            this.g = new Set;
            this.i = new vz
        }
    };

    function Cz(a) {
        return function(b) {
            return qy(b, a)
        }
    }

    function Dz(a) {
        const b = bq(a);
        return b ? Fa(Ez, b + jq(a)) : fb
    }

    function Fz(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return fb;
        const d = iz(c || dz(b));
        return e => lz(d, a, e.ma)
    }

    function Gz(a, b, c, d) {
        if (a < 0 || b.gh < 0 || b.ah < 0 || b.dc < 0) throw Error("ama::ead:nd");
        return a === Infinity ? fb : e => nz(d || dz(c, b.dc), a, b, e)
    }

    function Hz(a) {
        if (!a.length) return fb;
        const b = new es(a);
        return c => b.contains(c.Ib)
    }

    function Iz(a) {
        return function(b) {
            for (let c of b.zc)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Jz(a) {
        return a.length ? function(b) {
            const c = b.zc;
            return a.some(d => c.indexOf(d) > -1)
        } : gb
    }

    function Kz(a, b) {
        if (a <= 0) return gb;
        const c = fq(b).scrollHeight - a;
        return function(d) {
            return d.ma.g <= c
        }
    }

    function Lz(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[Lh(c.ae, 2) || 0]
        }
    }

    function Mz(a) {
        return a.length ? b => a.includes(Lh(b.ae, 1) || 0) : gb
    }

    function Nz(a, b) {
        const c = pz(a, b);
        return function(d) {
            var e = d.ia();
            d = xx[d.ea.j()];
            var f = c.i,
                g = za(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(za(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(za(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Oz() {
        const a = new Bz;
        return function(b) {
            var c = b.ia(),
                d = xx[b.ea.j()];
            a: switch (d) {
                case 1:
                    b = yz(c.previousElementSibling) || Az(c);
                    break a;
                case 4:
                    b = yz(c) || Az(c.nextElementSibling);
                    break a;
                case 2:
                    b = Az(c.firstElementChild);
                    break a;
                case 3:
                    b = yz(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = wz(a, c, d);
            d = a.i;
            Ty("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: zd()
            }, .1);
            return !(b || c)
        }
    }
    const Ez = (a, b) => b.ma.g >= a,
        Pz = (a, b, c) => {
            c = c.ma.i;
            return a <= c && c <= b
        };

    function Qz(a, b, c, d, e) {
        var f = Rz(Sz(a, b), a);
        if (f.length === 0) {
            var g = !!b.getMetadata() ? .g() ? .length;
            f = z(b, dt, 28) ? .j() ? .j() && g ? Rz(Tz(a, b), a) : f
        }
        if (f.length === 0) return Mt(d, "pfno"), [];
        b = f;
        a = e.md ? Uz(a, b, c) : {
            jb: b,
            od: null
        };
        const {
            jb: h,
            od: k
        } = a;
        f = h;
        return f.length === 0 && k ? (Mt(d, k), []) : [f[e.vk ? 0 : e.uk ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function Uz(a, b, c) {
        c = c ? Bh(c, Us, 5, y()) : [];
        const d = Nz(a.document, c),
            e = Oz();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            jb: [],
            od: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            jb: [],
            od: "pfet"
        } : {
            jb: b,
            od: null
        }
    }

    function Vz(a, b) {
        return a.ma.g - b.ma.g
    }

    function Sz(a, b) {
        const c = b.getMetadata();
        if (!c) return [];
        b = z(b, dt, 28) ? .j();
        return (b ? .g() ? iy(c.g(), a) : hy(c.g(), a, !!b ? .l())).map(d => d.j())
    }

    function Tz(a, b) {
        b = Bh(b, mt, 1, y()) || [];
        return Fx(b, a, {}).filter(c => !c.zc.includes(6))
    }

    function Rz(a, b) {
        a = qy(a, b);
        const c = Dz(b);
        a = a.filter(d => c(d));
        return a.sort(Vz)
    };
    var Wz = {},
        Xz = {},
        Yz = {},
        Zz = {},
        $z = {};

    function aA() {
        throw Error("Do not instantiate directly");
    }
    aA.prototype.sg = null;
    aA.prototype.getContent = function() {
        return this.content
    };
    aA.prototype.toString = function() {
        return this.content
    };

    function bA(a) {
        if (a.tg !== Wz) throw Error("Sanitized content was not of kind HTML.");
        return sc(a.toString())
    }

    function cA() {
        aA.call(this)
    }
    Ia(cA, aA);
    cA.prototype.tg = Wz;

    function dA(a) {
        if (a != null) switch (a.sg) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function eA(a) {
        return fA(a, Wz) ? a : a instanceof rc ? gA(tc(a).toString()) : gA(String(String(a)).replace(hA, iA), dA(a))
    }
    var gA = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.sg = d);
            return c
        }
    }(cA);

    function jA(a) {
        return kA(String(a), () => "").replace(lA, "&lt;")
    }
    const mA = RegExp.prototype.hasOwnProperty("sticky"),
        nA = new RegExp((mA ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", mA ? "gy" : "g");

    function kA(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, mA ? (nA.lastIndex = k, l = nA.exec(a)) : (nA.lastIndex = 0, l = nA.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function oA(a, b) {
        a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
        return b ? a.replace(/{/g, " \\{").replace(/}/g, " \\}").replace(/\/\*/g, "/ *").replace(/\\$/, "\\ ") : a
    }

    function pA(a) {
        return fA(a, Wz) ? String(jA(a.getContent())).replace(qA, iA) : String(a).replace(hA, iA)
    }

    function rA(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && h <= "Z" ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0;
            (c = a.indexOf("<", c)) != -1;) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function sA(a) {
        if (a == null) return " null ";
        if (fA(a, Xz)) return a.getContent();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(tA, uA) + "'"
        }
    }
    const vA = /['()]/g;

    function wA(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function Z(a) {
        return fA(a, $z) ? oA(a.getContent(), !1) : a == null ? "" : a instanceof Bc ? oA(Cc(a), !1) : oA(String(a), !0)
    }

    function fA(a, b) {
        return a != null && a.tg === b
    }
    const xA = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function iA(a) {
        return xA[a]
    }
    const yA = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function uA(a) {
        return yA[a]
    }
    const zA = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function AA(a) {
        return zA[a]
    }
    const hA = /[\x00\x22\x26\x27\x3c\x3e]/g,
        qA = /[\x00\x22\x27\x3c\x3e]/g,
        tA = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        BA = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        CA = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        lA = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const DA = Math.floor;
    var EA = /^xn--/,
        FA = /[\x2E\u3002\uFF0E\uFF61]/g;
    const GA = {
        hn: "Overflow: input needs wider integers to process",
        en: "Illegal input >= 0x80 (not a basic code point)",
        Pm: "Invalid input"
    };

    function HA(a) {
        throw RangeError(GA[a]);
    }

    function IA(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(FA, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function JA(a) {
        return IA(a, b => {
            if (EA.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && HA("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && HA("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > DA((2147483647 - l) / n)) && HA("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > DA(2147483647 / f) && HA("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = e == 0 ? DA(c / 700) : c >> 1;
                    for (c += DA(c / f); c > 455; g += 36) c = DA(c / 35);
                    c = DA(g + 36 * c / (c + 38));
                    DA(l / f) > 2147483647 - m && HA("Overflow: input needs wider integers to process");
                    m += DA(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };

    function KA(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var LA = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n = !1, p = !1, r = !1, w = "") {
            this.Na = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.R = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = g;
            this.I = h;
            this.g = k;
            this.H = n;
            this.C = l;
            this.F = m;
            this.L = p;
            this.A = r;
            this.i = w
        }
        M() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = bd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = a;
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = lc(a, kc) || gc;
            var c = JA(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.R;
            const f = this.host;
            c = this.I.replace("${website}", c);
            const g = this.L;
            var h = gA,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(tA, uA) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            fA(b, Yz) || fA(b, Zz) ? b = String(b).replace(BA, AA) : b instanceof fc ? b = String(hc(b)).replace(BA, AA) : b instanceof cc ? b = String(ec(b).toString()).replace(BA, AA) : (b = String(b), b = CA.test(b) ? b.replace(BA, AA) : "about:invalid#zSoyz");
            a = h(k + pA(b) + '" alt="' + pA(f) + ' icon"><p class="cse-header"><strong>' +
                eA(c) + '</strong></p><div class="gcse-search" data-gname="' + pA(a) + '" data-adclient="' + pA(d) + '" data-adchannel="' + pA(e) + '" data-as_sitesearch="' + pA(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = bA(a);
            this.C ? (a = this.Na, d = Zc `https://www.gstatic.com/prose/protected/${this.F||"558153351"}/iframe.html?cx=${this.l}&host=${this.host}&hl=${this.language}&lrh=${this.I}&client=${this.j}&origin=${this.origin}`, a.src = ec(d).toString()) : (d = new Map([
                ["cx", this.l],
                ["language", this.language]
            ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), d = $c(Zc `https://cse.google.com/cse.js`, d), d = ec(d).toString(), d = sc(`<script src="${Qc(d)}"` + ">\x3c/script>"), a = Xc("body", {
                style: bd `margin:${0};`
            }, [a, d]), this.Na.srcdoc = tc(a))
        }
    };

    function MA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new NA;
        return a.google_reactive_ads_global_state
    }
    class NA {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new OA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g =
                null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var OA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function PA(a, b) {
        return new QA(a, b)
    }

    function RA(a) {
        const b = SA(a);
        Ma(a.g.maxZIndexListeners, c => c(b))
    }

    function SA(a) {
        a = ld(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class TA {
        constructor(a) {
            this.g = MA(a).floatingAdsStacking
        }
        addListener(a) {
            this.g.maxZIndexListeners.push(a);
            a(SA(this))
        }
        removeListener(a) {
            Ua(this.g.maxZIndexListeners, b => b === a)
        }
    }

    function UA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            RA(b);
            a.g = d
        }
    }

    function VA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            RA(b);
            a.g = null
        }
    }
    class QA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function WA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? WA(b) || a : a
    }

    function XA(a, b) {
        return YA(b, a.document.body).flatMap(c => ZA(c))
    }

    function YA(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function ZA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function $A(a) {
        a.state !== null && (a.state.aj.forEach(b => {
            b.inert = !1
        }), a.state.bk ? .focus(), a.state = null)
    }

    function aB(a, b) {
        $A(a);
        const c = WA(a.win.document);
        b = XA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.state = {
            bk: c,
            aj: b
        }
    }
    var bB = class {
        constructor(a) {
            this.win = a;
            this.state = null
        }
        fe() {
            $A(this)
        }
    };

    function cB(a) {
        return new dB(a, new cr(a, a.document.body), new cr(a, a.document.documentElement), new cr(a, a.document.documentElement))
    }

    function eB(a) {
        br(a.j, "scroll-behavior", "auto");
        const b = fB(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        br(a.g, "position", "fixed");
        br(a.g, "top", `${-b.previousWindowScroll}px`);
        br(a.g, "width", "100%");
        fB(a.win).overrideBodyHeightOnPreventScrolling && (br(a.g, "height", "auto"), br(a.g, "max-height", "none"));
        br(a.g, "overflow-x", "hidden");
        br(a.g, "overflow-y", "hidden");
        br(a.i, "overflow-x", "hidden");
        br(a.i, "overflow-y", "hidden")
    }

    function gB(a) {
        ar(a.g);
        ar(a.i);
        const b = fB(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        ar(a.j)
    }
    var dB = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function fB(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set,
            overrideBodyHeightOnPreventScrolling: !1
        }
    }

    function hB(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function iB(a, b) {
        return jB(`#${a}`, b)
    }

    function kB(a, b) {
        return jB(`.${a}`, b)
    }

    function jB(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function lB(a, b) {
        const c = a.document.createElement("div");
        v(c, Pt(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            bb: c,
            shadowRoot: a
        }
    };

    function mB(a, b) {
        b = lB(a, b);
        a.document.body.appendChild(b.bb);
        return b
    }

    function nB(a, b) {
        const c = new T(b.O);
        lr(b, !0, () => void c.g(!0));
        lr(b, !1, () => {
            a.setTimeout(() => {
                b.O || c.g(!1)
            }, 700)
        });
        return gr(c)
    };

    function oB(a) {
        const b = a.qd;
        var c = a.Nf,
            d = a.nd;
        const e = a.dd,
            f = a.og,
            g = a.xe,
            h = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            Z(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += Z(c) + "px; transition: transform " + Z(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + Z(c) + "px; border-bottom-right-radius: " + Z(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + Z(c) + "px; border-bottom-left-radius: " + Z(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            pA(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + pA(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + pA(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + pA(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return gA(a)
    };

    function pB(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new qB(a, b);
        b.M();
        return b ? a.googNavStack = b : null
    }

    function rB(a, b) {
        return b ? b.googNavStackId === a.i ? b : null : null
    }

    function sB(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].lk({
                isFinal: d
            }))
        }
    }

    function tB(a, b) {
        b = Za(a.stack, b, (c, d) => c - d.Ng.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class qB extends S {
        constructor(a, b) {
            super();
            this.K = a;
            this.history = b;
            this.stack = [];
            this.i = Math.random() * 1E9 >>> 0;
            this.l = 0;
            this.j = c => {
                (c = rB(this, c.state)) ? sB(this, tB(this, c.googNavStackStateId + .5)): sB(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.i,
                    googNavStackStateId: this.l++
                },
                b = new Promise(c => {
                    this.stack.push({
                        lk: c,
                        Ng: a
                    })
                });
            this.history.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = tB(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length >
                        0) {
                        d = c[0].Ng;
                        const e = rB(this, this.history.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.history.go(-c.length);
                    sB(this, c)
                }
            }
        }
        M() {
            this.K.addEventListener("popstate", this.j)
        }
        g() {
            this.K.removeEventListener("popstate", this.j);
            super.g()
        }
    };

    function uB(a) {
        return (a = pB(a)) ? new vB(a) : null
    }

    function wB(a) {
        if (!a.i) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.i = c;
            b.then(() => {
                a.i && !a.C && (a.i = null, rr(a.j))
            })
        }
    }
    var vB = class extends S {
        constructor(a) {
            super();
            this.l = a;
            this.j = new sr;
            this.i = null
        }
    };

    function xB(a, b, c) {
        var d = c.Qe ? null : new bB(a);
        const e = PA(new TA(a), c.zIndex - 1);
        b = yB(a, b, c);
        d = new zB(a, b, d, c.sc, cB(a), e);
        d.M();
        (c.Ag || c.Ag === void 0) && AB(d);
        c.nc && ((a = uB(a)) ? BB(d, a, c.Af) : c.Af ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function AB(a) {
        a.A = b => {
            b.key === "Escape" && a.i.O && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function BB(a, b, c) {
        lr(a.i, !0, () => {
            try {
                wB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        lr(a.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        pr(b.j).listen(() => void a.collapse());
        Dq(a, b)
    }

    function CB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function DB(a) {
        a.win.setTimeout(() => {
            a.i.O && CB(a).Ga.focus()
        }, 500)
    }

    function EB(a) {
        const {
            zf: b,
            Hi: c
        } = CB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function FB(a) {
        lr(a.j, !1, () => {
            CB(a).Ga.classList.add("hd-hidden")
        })
    }
    var zB = class extends S {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.sc = d;
            this.i = new T(!1);
            this.j = nB(a, this.i);
            lr(this.j, !0, () => {
                eB(e);
                UA(f)
            });
            lr(this.j, !1, () => {
                gB(e);
                VA(f)
            })
        }
        show({
            xg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            CB(this).Ga.classList.remove("hd-hidden");
            $q(this.win);
            CB(this).Ga.classList.add("hd-revealed");
            this.i.g(!0);
            this.l && (aB(this.l, CB(this).eb.bb), this.sc && DB(this));
            a && lr(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            CB(this).Ga.classList.remove("hd-revealed");
            this.i.g(!1);
            this.l ? .fe()
        }
        isVisible() {
            return this.j
        }
        M() {
            EB(this);
            FB(this)
        }
        g() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.eb.bb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .fe();
            super.g()
        }
    };

    function yB(a, b, c) {
        const d = mB(a, c.Re),
            e = d.shadowRoot;
        e.appendChild(jl(new Xk(a.document), bA(oB({
            qd: c.qd,
            Nf: c.Nf ? ? !0,
            nd: c.nd || !1,
            dd: c.dd,
            og: c.og || "",
            zIndex: c.zIndex,
            xe: .5,
            Ma: c.Ma || !1
        }))));
        const f = iB("hd-drawer-container", e);
        c.Ye ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = iB("hd-content-container", e);
        c.appendChild(b);
        $q(a);
        return {
            Ga: f,
            zf: iB("hd-modal-background", e),
            Le: c,
            Hi: iB("hd-close-button", e),
            xo: iB("hd-back-arrow-button", e),
            eb: d
        }
    };

    function GB(a) {
        const b = a.Xj,
            c = a.kj;
        var d = a.xe;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            Z(c) + "%; transition: transform " + Z(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += Z(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            Z(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + Z((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            Z(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + Z(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + Z(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            Z(d) + "px " + Z(d) + "px 0 0; background: white; display: flex; height: " + Z(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            HB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + HB("ved-fixed-handle") + "</div></div></div>";
        return gA(a)
    }

    function HB(a) {
        return gA('<div class="ved-handle" id="' + pA(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function IB(a) {
        return Gr(a.g).map(b => b ? JB(a, b) : 0)
    }

    function JB(a, b) {
        switch (a.direction) {
            case 0:
                return KB(-b.Uh);
            case 1:
                return KB(-b.Th);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function LB(a) {
        return Ir(a.g).map(b => JB(a, b))
    }
    var MB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function KB(a) {
        return a === 0 ? 0 : a
    };

    function NB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function OB(a) {
        a.win.setTimeout(() => {
            a.i.O && NB(a).Ga.focus()
        }, 500)
    }

    function PB(a) {
        NB(a).Ga.classList.remove("ved-hidden");
        $q(a.win);
        const {
            qa: b,
            Wa: c
        } = NB(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || QB(a);
        NB(a).Ga.classList.add("ved-revealed");
        a.i.g(!0);
        a.j && (aB(a.j, NB(a).eb.bb), a.sc && OB(a))
    }

    function RB(a) {
        return nB(a.win, a.i)
    }

    function SB(a, b) {
        const c = new T(b());
        pr(a.H).listen(() => void c.g(b()));
        return gr(c)
    }

    function TB(a) {
        const {
            qa: b,
            Rd: c
        } = NB(a);
        return SB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function UB(a) {
        const {
            qa: b,
            Rd: c
        } = NB(a);
        return SB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function VB(a) {
        const {
            qa: b
        } = NB(a);
        return SB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function WB(a) {
        return hr(TB(a), VB(a))
    }

    function XB(a) {
        const {
            qa: b,
            Wa: c
        } = NB(a);
        return SB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function QB(a) {
        NB(a).Wa.classList.add("ved-snap-point-top");
        var b = YB(a, NB(a).Wa);
        NB(a).qa.scrollTop = b;
        ZB(a)
    }

    function $B(a) {
        jr(TB(a), !0, () => {
            const {
                Hg: b,
                Lc: c
            } = NB(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        jr(TB(a), !1, () => {
            const {
                Hg: b,
                Lc: c
            } = NB(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function aC(a) {
        const b = Nr(a.win, NB(a).Le);
        Pr(b).i(() => void bC(a));
        Dq(a, b)
    }

    function cC(a) {
        jr(dC(a), !0, () => {
            NB(a).lh.classList.remove("ved-hidden")
        });
        jr(dC(a), !1, () => {
            NB(a).lh.classList.add("ved-hidden")
        })
    }

    function eC(a) {
        const b = () => void rr(a.F),
            {
                zf: c,
                Wa: d,
                jj: e
            } = NB(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        lr(fC(a), !0, b)
    }

    function gC(a) {
        lr(RB(a), !1, () => {
            QB(a);
            NB(a).Ga.classList.add("ved-hidden")
        })
    }

    function ZB(a) {
        kr(a.l, !1, () => void rr(a.H))
    }

    function bC(a) {
        if (!a.l.O) {
            var {
                ug: b,
                Le: c
            } = NB(a), d = c.getBoundingClientRect().height;
            d = Math.max(hC(a), d);
            a.l.g(!0);
            var e = iC(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function dC(a) {
        const {
            qa: b,
            Wa: c
        } = NB(a);
        return SB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function fC(a) {
        return fr(a.A.map(ps), jC(a))
    }

    function jC(a) {
        return SB(a, () => NB(a).qa.scrollTop === 0)
    }

    function YB(a, b) {
        ({
            Lc: a
        } = NB(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function kC(a, b) {
        a.A.g(!0);
        const {
            Lc: c,
            qa: d
        } = NB(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void lC(a, b)
    }

    function lC(a, b) {
        const {
            Lc: c,
            qa: d
        } = NB(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        NB(a).qa.scrollTop = b;
        ZB(a);
        a.A.g(!1)
    }

    function iC(a) {
        const b = NB(a).qa.scrollTop;
        kC(a, b);
        return () => void lC(a, b)
    }

    function hC(a) {
        const {
            qa: b,
            Rd: c,
            ug: d,
            Wa: e
        } = NB(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var mC = class extends S {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.L = c;
            this.j = d;
            this.sc = e;
            this.F = new sr;
            this.H = new sr;
            this.i = new T(!1);
            this.A = new T(!1);
            this.l = new T(!1)
        }
        M() {
            QB(this);
            $B(this);
            aC(this);
            cC(this);
            eC(this);
            gC(this);
            NB(this).qa.addEventListener("scroll", () => void ZB(this))
        }
        g() {
            const a = this.B.eb.bb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .fe();
            super.g()
        }
    };

    function nC(a, b, c) {
        const d = mB(a, c.Re),
            e = d.shadowRoot;
        e.appendChild(jl(new Xk(a.document), bA(GB({
            Xj: c.qh * 100,
            kj: c.Ig * 100,
            zIndex: c.zIndex,
            xe: .5,
            Ma: c.Ma || !1
        }))));
        const f = iB("ved-drawer-container", e);
        c.Ye ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = iB("ved-content-container", e);
        c.appendChild(b);
        $q(a);
        return {
            Ga: f,
            zf: iB("ved-modal-background", e),
            Ph: iB("ved-ui-revealer", e),
            qa: iB("ved-scroller", e),
            Lc: iB("ved-scrolled-stack", e),
            jj: iB("ved-fully-closed-anchor", e),
            Wa: iB("ved-partially-extended-anchor", e),
            ug: iB("ved-content-sizer",
                e),
            Le: c,
            Fo: iB("ved-moving-handle", e),
            Rd: iB("ved-moving-handle-holder", e),
            hj: iB("ved-fixed-handle", e),
            Hg: iB("ved-fixed-handle-holder", e),
            lh: iB("ved-over-scroll-block", e),
            eb: d
        }
    };

    function oC(a, b, c) {
        var d = PA(new TA(a), c.zIndex - 1);
        b = nC(a, b, c);
        const e = c.Qe ? null : new bB(a);
        var f = b.hj;
        f = new Jr(new Ar(a, f), new xr(f));
        var g = f.g;
        g.A.addEventListener("mousedown", g.I);
        g.l.addEventListener("mouseup", g.C);
        g.l.addEventListener("mousemove", g.B, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.B);
        g.i.addEventListener("touchend", g.A);
        g.i.addEventListener("touchmove", g.C, {
            passive: !1
        });
        b = new mC(a, b, new MB(f), e, c.sc);
        b.M();
        d = new pC(a, b, cB(a), d);
        Dq(d, b);
        d.M();
        c.nc && ((a = uB(a)) ? qC(d, a, c.Af) :
            c.Af ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function qC(a, b, c) {
        lr(a.i.i, !0, () => {
            try {
                wB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        lr(a.i.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        pr(b.j).listen(() => void a.collapse());
        Dq(a, b)
    }

    function rC(a) {
        lr(fr(WB(a.i), XB(a.i)), !0, () => {
            NB(a.i).Wa.classList.remove("ved-snap-point-top")
        });
        jr(UB(a.i), !0, () => {
            NB(a.i).qa.classList.add("ved-no-snap")
        });
        jr(UB(a.i), !1, () => {
            NB(a.i).qa.classList.remove("ved-no-snap")
        });
        lr(UB(a.i), !1, () => {
            var b = a.i;
            var c = NB(b).Rd;
            c = kC(b, YB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function sC(a) {
        const b = a.i.L;
        IB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    Ph: d
                } = NB(a.i);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Ph: c
            } = NB(a.i)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        LB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var pC = class extends S {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.i = b;
            lr(RB(b), !0, () => {
                eB(c);
                UA(d)
            });
            lr(RB(b), !1, () => {
                gB(c);
                VA(d)
            })
        }
        show({
            xg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            PB(this.i);
            a && lr(RB(this.i), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.i;
            NB(a).Ga.classList.remove("ved-revealed");
            a.i.g(!1);
            a.j ? .fe()
        }
        isVisible() {
            return RB(this.i)
        }
        M() {
            pr(this.i.F).listen(() => {
                this.collapse()
            });
            rC(this);
            sC(this);
            $q(this.win)
        }
    };

    function tC(a, b) {
        return zd() === 2 ? oC(a.win, b, {
            qh: .95,
            Ig: .95,
            zIndex: 2147483645,
            nc: !0,
            Ma: !0
        }) : xB(a.win, b, {
            qd: "min(65vw, 768px)",
            dd: "",
            nd: !1,
            zIndex: 2147483645,
            nc: !0,
            Nf: !1,
            Ma: !0
        })
    }

    function uC(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.R.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.F,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.l,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Rc.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.H
            };
        a.sa && (c.adLoadedCallback = a.yb.bind(a));
        a.i && a.j instanceof
        Array && (c.fexp = a.j.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function vC(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.A.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var wC = class extends S {
        constructor(a, b, c, d, e, f, g, h, k = () => {}) {
            super();
            this.win = a;
            this.R = b;
            this.L = e;
            this.l = f;
            this.Ra = h;
            this.Qc = k;
            this.language = d ? .g() || "en";
            this.Pc = d ? .j() || "Search results from ${website}";
            this.sa = W(Iu);
            this.F = c.replace("ca", "partner");
            this.W = new Xk(a.document);
            this.A = il(this.W, "IFRAME");
            this.H = g.i ? g.g : "9d449ff4a772956c6";
            this.j = (this.i = W(Nu)) ? Hp(Kp).g().concat(this.l) : this.l;
            this.B = new LA(this.A, this.H, "auto-rs-prose", this.F, "AutoRsVariant", a.location, this.language, this.Pc, this.j, !0,
                this.Ra, this.i);
            this.na = tC(this, this.A);
            Dq(this, this.na)
        }
        M() {
            this.R.length !== 0 && (this.sa || px(1075, () => {
                this.B.M()
            }, this.win), px(1076, () => {
                const a = il(this.W, "SCRIPT");
                Ac(a, Zc `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), uC(this), Kt(this.L, {
                sts: "ok"
            }), vC(this))
        }
        yb(a, b) {
            b ? px(1075, () => {
                this.B.M()
            }, this.win) : (this.Qc(), Mt(this.L, "pfns"))
        }
        Rc(a, b) {
            KA(this.B, a, b);
            (() => {
                this.na.show()
            })()
        }
    };
    var xC = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function yC(a) {
        const b = Ox(a.i.ea),
            c = a.C.getContent(a.A, () => a.remove());
        b.appendChild(c);
        a.l && (b.className = a.l);
        return {
            Xi: b,
            Li: c
        }
    }
    class zC {
        constructor(a, b, c) {
            this.A = a;
            this.i = b;
            this.C = c;
            this.l = "autors-widget";
            this.g = null;
            this.j = new T(null)
        }
        M() {
            const a = yC(this);
            this.g = a.Xi;
            oy(this.i, this.g);
            this.j.g(a.Li)
        }
        remove() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
    };
    async function AC(a) {
        await new Promise(b => {
            setTimeout(() => {
                a.run();
                b()
            })
        })
    }

    function BC(a) {
        if ((!a.md || !CC(a.config, a.ca, a.i)) && DC(z(a.g, at, 5), a.i)) {
            var b = a.g.j();
            b = Qz(a.win, a.config, a.ca, a.i, {
                vk: !!b ? .A(),
                md: a.md,
                Go: !!b ? .g(),
                uk: !!b ? .C()
            });
            b = EC(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g.g() ? .g() || 0,
                f = FC(a.g),
                g = String(K(a.g, 13));
            if (!z(a.config, Xs, 25) ? .g()) {
                var h = () => {
                    d.forEach(k => {
                        k.remove()
                    })
                };
                px(1074, () => {
                    (new wC(a.win, c, a.webPropertyCode, z(a.g, at, 5), a.i, e, f, g, h)).M()
                }, a.win)
            }
        }
    }
    var GC = class {
        constructor(a, b, c, d, e) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.ca = e;
            this.md = !0;
            this.g = z(this.config, dt, 28);
            this.i = new Nt(a, b, this.g)
        }
        run() {
            try {
                BC(this)
            } catch (a) {
                Mt(this.i, "pfere", a)
            }
        }
    };

    function CC(a, b, c) {
        a = z(a, dt, 28) ? .g() ? .g() || 0;
        const d = Hp(Gw).g(Mu.g, Mu.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Th(b, 2, y()) : []).length === 0 ? (Mt(c, "pfeu"), !0) : !1
    }

    function DC(a, b) {
        const c = Hp(Gw).g(Lu.g, Lu.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (Mt(b, "pflna"), !1) : !0
    }

    function EC(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new zC(b, d, new St(g));
            d.M();
            c[f] = d
        }
        return c
    }

    function FC(a) {
        const b = J(a, 11) || !1;
        a = K(a, 8) || "";
        return new xC(b, a)
    };
    var HC = (a, b) => {
        const c = [];
        z(a, nt, 18) && c.push(2);
        b.ca && c.push(0);
        z(a, dt, 28) && Qh(z(a, dt, 28), 1) == 1 && c.push(1);
        z(a, bt, 31) && Qh(z(a, bt, 31), 1) == 1 && c.push(5);
        z(a, Zs, 32) && c.push(6);
        z(a, qt, 34) && J(z(a, qt, 34), 3) && c.push(7);
        return c
    };
    var IC = a => a.googlefc = a.googlefc || {},
        JC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        KC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new et;
                b = ei(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = ei(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = ei(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function LC(a, b) {
        b = b.filter(c => z(c, Bs, 4) ? .g() === 5 && Zh(c, 8) === 1);
        b = Fx(b, a);
        a = qy(b, a);
        a.sort((c, d) => d.ma.g - c.ma.g);
        return a[0] || null
    };

    function MC({
        Tf: a,
        af: b,
        Bf: c,
        Uf: d,
        bf: e,
        Cf: f
    }) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function NC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function OC(a, b) {
        var c = MC({
            Tf: b.left,
            af: b.right,
            Bf: 10,
            Uf: b.top,
            bf: b.bottom,
            Cf: 10
        });
        b = new Set;
        for (const d of c)(c = PC(a, d)) && b.add(c);
        return b
    }

    function QC(a, b) {
        for (const c of b)
            if (b = PC(a, c)) return b;
        return null
    }

    function RC(a, b, c) {
        if (pl(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || sl(b).width <= 1 && sl(b).height <= 1 || a.settings.Yi && !a.settings.Yi(b) ? !0 : !1;
        a.settings.Gg && a.settings.Gg(b, c, d);
        return d ? null : b
    }

    function PC(a, b) {
        var c = NC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = RC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = RC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var SC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.settings = b
        }
    };
    var TC = class {
        constructor(a, b, c) {
            this.position = a;
            this.xb = b;
            this.hf = c
        }
    };

    function UC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function VC(a, b, c) {
        var d = bq(a);
        d = new TC(b.Qb.hh(b.lb), b.xb + 2 * b.lb, Math.min(d, b.Gd) - b.Qb.ud() + 2 * b.lb);
        d = d.position.vg(a, d.xb, d.hf);
        var e = aq(a),
            f = bq(a);
        c = WC(a, new Gk(Mb(d.top, 0, f - 1), Mb(d.right, 0, e - 1), Mb(d.bottom, 0, f - 1), Mb(d.left, 0, e - 1)), c);
        f = XC(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new UC(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new UC(g, d.bottom));
        a = bq(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new UC(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.lb, a >
                    b.Qb.ud() + b.uf ? a = null : (d = Math.min(h.end - b.lb, b.Gd) - a, a = d < b.yf ? null : {
                        position: b.Qb.Sh(a),
                        Dc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            Ce: b,
            wo: c
        }
    }

    function WC(a, b, c) {
        const d = OC(new SC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function XC(a) {
        return Array.from(a).map(YC).sort((b, c) => b.start - c.start)
    }

    function YC(a) {
        a = a.getBoundingClientRect();
        return new UC(a.top, a.bottom)
    };

    function ZC({
        ga: a,
        Ba: b
    }) {
        return new $C(a, b)
    }
    var $C = class {
        constructor(a, b) {
            this.ga = a;
            this.Ba = b
        }
        hh(a) {
            return new $C(this.ga - a, this.Ba - a)
        }
        vg(a, b, c) {
            a = bq(a) - this.ga - c;
            return new Gk(a, this.Ba + b, a + c, this.Ba)
        }
        ng(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.Ba}px`;
            a.right = ""
        }
        Jg() {
            return 0
        }
        ud() {
            return this.ga
        }
        Sh(a) {
            return new $C(a, this.Ba)
        }
    };

    function aD({
        ga: a,
        Ja: b
    }) {
        return new bD(a, b)
    }
    var bD = class {
        constructor(a, b) {
            this.ga = a;
            this.Ja = b
        }
        hh(a) {
            return new bD(this.ga - a, this.Ja - a)
        }
        vg(a, b, c) {
            var d = aq(a);
            a = bq(a) - this.ga - c;
            d = d - this.Ja - b;
            return new Gk(a, d + b, a + c, d)
        }
        ng(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ja}px`;
            a.left = ""
        }
        Jg() {
            return 1
        }
        ud() {
            return this.ga
        }
        Sh(a) {
            return new bD(a, this.Ja)
        }
    };

    function cD(a) {
        const b = a.cj,
            c = a.Ji,
            d = a.Bi,
            e = a.qk,
            f = a.Ci;
        a = a.Ai;
        return gA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text_old:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + Z(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            Z(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + Z(a) + "px; border-radius: " + Z(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + Z(a) + "px; margin: 0; border-radius: " + Z(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            Z(d) + "px; height: " + Z(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + Z(d) + "px; margin-bottom: " + Z(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + Z(d) + "px; width: " + Z(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            Z(d - 6) + "px; width: " + Z(d - 6) + "px; border-radius: " + Z(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            Z(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + Z(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            Z(16) + "px; max-width: calc(90vw - " + Z(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + Z(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + Z(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            Z(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            pA(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + pA(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function dD(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss,
            d = a.iconColorCss;
        return gA('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + pA(a.ariaLabel) + '" style="background-color: ' + pA(Z(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + pA(Z(d)) + '" aria-hidden="true">' + eA(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const eD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function fD(a, b) {
        a = new gD(a, b, hD(a, b));
        a.M();
        return a
    }

    function iD() {
        ({
            ec: a
        } = {
            ec: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function jD(a, b, c) {
        kD(a) === 0 && b.classList.remove("ft-collapsed");
        lD(b, c);
        $q(a.win);
        b.classList.remove("ft-collapsed");
        mD(a);
        return () => void nD(a, b, c)
    }

    function oD(a) {
        pD(a.i.ja.Fc).length === 0 ? (a.j.O ? .fk(), a.j.g(null), a.i.ja.gf.g(!1), a.i.ja.Ug.g(!1), a.i.ja.qf.g(!1)) : (a.i.ja.gf.g(!0), qD(a))
    }

    function rD(a, {
        ei: b = 0,
        vo: c = 0
    }) {
        b = Math.max(pD(a.i.Bb).length + b, 0);
        c = Math.max(pD(a.i.kb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.settings.ec && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function kD(a) {
        const b = a.i.kb;
        return pD(a.i.Bb).length + pD(b).length
    }

    function mD(a) {
        const b = a.i.kb,
            c = a.i.separator;
        pD(a.i.Bb).length > 0 && pD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        kD(a) >= a.settings.ec ? a.i.Tg.g(!0) : a.i.Tg.g(!1);
        kD(a) > 1 ? a.i.Mg.g(!0) : a.i.Mg.g(!1);
        kD(a) > 0 ? a.i.isVisible.g(!0) : a.i.isVisible.g(!1);
        sD(a);
        tD(a)
    }

    function nD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), mD(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function sD(a) {
        const b = pD(a.i.Bb).concat(pD(a.i.kb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        kD(a) >= a.settings.ec || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function tD(a) {
        const b = pD(a.i.Bb).concat(pD(a.i.kb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.B.g(b.length > 0)
    }

    function uD(a) {
        Nq(a.i.ja.Fc.children, b => {
            const c = a.i.ja.Ic;
            nD(a, b, a.i.ja.Fc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        oD(a)
    }

    function qD(a) {
        if (!a.j.O) {
            var b = vD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: K(a.settings.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.i.ja.Ug.g(!a.i.ja.isVisible.O);
                    for (const [, c] of a.i.ja.Ic) c.Xg = !0;
                    a.i.ja.qf.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Xc.classList.add("ft-reg-button");
            jD(a, b.Xc, a.i.kb);
            mr(b.Bj, a.i.ja.isVisible);
            a.j.g({
                zo: b,
                fk: () => void nD(a, b.Xc, a.i.kb)
            })
        }
    }

    function wD(a) {
        var b = a.i.ja.qf,
            c = b.g;
        a: {
            for ([, d] of a.i.ja.Ic)
                if (a = d, a.showUnlessUserInControl && !a.Xg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function xD(a) {
        a.i.ja.Ii.listen(() => {
            uD(a)
        })
    }
    var gD = class extends S {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.settings = b;
            this.i = c;
            this.j = new T(null);
            this.B = new T(!1)
        }
        addButton(a) {
            a = vD(this.win, a);
            return jD(this, a.Xc, this.i.Bb)
        }
        addRegulatoryMessage(a) {
            const b = this.i.ja.Fc,
                c = yD(this.win, a);
            lD(c.xf, b);
            this.i.ja.Ic.set(c.xf, c);
            oD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    wD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    wD(this)
                },
                isDismissed: or(c.isDismissed),
                removeCallback: () => {
                    var d = c.xf;
                    const e =
                        this.i.ja.Fc;
                    d.parentNode === e && e.removeChild(d);
                    this.i.ja.Ic.delete(d);
                    oD(this)
                }
            }
        }
        F() {
            return gr(this.j.map(a => a != null))
        }
        A() {
            return gr(this.B)
        }
        l() {
            return [this.i.container]
        }
        g() {
            const a = this.i.eb.bb;
            a.parentNode ? .removeChild(a);
            super.g()
        }
        M() {
            Wr(this.win, eD);
            mr(this.i.yk, this.settings.Ec);
            this.win.document.body.appendChild(this.i.eb.bb);
            xD(this)
        }
    };

    function hD(a, b) {
        const c = lB(a),
            d = c.shadowRoot;
        d.appendChild(jl(new Xk(a.document), bA(cD({
            cj: K(b.Oa, 1),
            Ji: K(b.Oa, 3),
            Bi: 50,
            qk: 11,
            Ci: 10,
            Ai: 5
        }))));
        const e = kB("ft-container", d),
            f = kB("ft-expand-toggle", d),
            g = kB("ft-expand-toggle-container", d),
            h = new T(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new T(!0);
        jr(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        jr(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.O)
            });
        const l = new T(!1);
        jr(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        jr(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new T(!1);
        jr(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        jr(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.ng(e.style);
                p = p.Jg();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                $q(a)
            }
        });
        const n = new T(!1);
        b = fr(zD(a, d), n, b.position.map(p => p !== null));
        jr(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        jr(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = AD(a, kB("ft-reg-bubble", d));
        return {
            container: e,
            Bb: kB("ft-button-holder", d),
            kb: kB("ft-bottom-button-holder", d),
            separator: kB("ft-separator", d),
            eb: c,
            yk: h,
            Do: k,
            Tg: l,
            Mg: m,
            isVisible: n,
            ja: b
        }
    }

    function AD(a, b) {
        const c = new T(!1),
            d = new T(!1),
            e = hr(c, d);
        jr(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        jr(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new T(!1);
        jr(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        jr(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = kB("ft-reg-bubble-close", b),
            h = new sr;
        g.addEventListener("click", () => {
            rr(h)
        });
        const k = kB("ft-reg-message-holder", b);
        Pr(Nr(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Fc: k,
            Ug: c,
            qf: d,
            isVisible: e,
            gf: f,
            Ic: new Map,
            Ii: pr(h)
        }
    }

    function vD(a, b) {
        const c = jl(new Xk(a.document), bA(dD({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        })));
        b.buttonExtension ? .styleSheet && c.appendChild(b.buttonExtension.styleSheet);
        if (b.cornerNumber !== void 0) {
            const d = Mb(Math.round(b.cornerNumber), 0, 99);
            kB("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick &&
            jB("BUTTON", c).addEventListener("click", b.onClick);
        a = new T(!1);
        jr(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        jr(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Xc: c,
            Bj: a
        }
    }

    function yD(a, b) {
        a = new Xk(a.document);
        var c = gA('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = jl(a, bA(c));
        c = kB("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = kB("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            xf: a,
            showUnlessUserInControl: !1,
            Xg: !1,
            isDismissed: new T(!1)
        }
    }

    function lD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function pD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function zD(a, b) {
        const c = new T(!1),
            d = kB("ft-symbol-font-load-test", b);
        b = kB("ft-symbol-reference", d);
        const e = kB("ft-text-reference", d),
            f = Nr(a, b);
        kr(Pr(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function BD(a) {
        const b = new sr,
            c = Dr(a, 2500, () => void rr(b));
        return new CD(a, () => void DD(a, () => void c()), pr(b))
    }

    function ED(a) {
        const b = new MutationObserver(() => {
            a.i()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Eq(a, () => void b.disconnect())
    }

    function FD(a) {
        a.win.addEventListener("resize", a.i);
        Eq(a, () => void a.win.removeEventListener("resize", a.i))
    }
    var CD = class extends S {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.i = b;
            this.l = c;
            this.j = !1
        }
    };

    function DD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function GD(a) {
        return a.g[a.g.length - 1]
    }
    var ID = class {
        constructor() {
            this.i = HD;
            this.g = [];
            this.items = new Set
        }
        add(a) {
            if (this.items.has(a)) return !1;
            const b = Za(this.g, a, this.i);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.items.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.items.has(a)
        }
        delete(a) {
            Ua(this.g, b => b === a);
            return this.items.delete(a)
        }
        clear() {
            this.items.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function JD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.bg = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function KD(a, b) {
        b.bg && b.bg();
        b.bg = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var LD = class {
        constructor(a, b) {
            this.Dc = a;
            this.j = b;
            this.g = new ID;
            this.i = new ID;
            this.l = 0;
            this.Dc.listen(() => void this.update())
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                dg: this.l++,
                isInToolbar: new T(!1)
            };
            this.g.add(b);
            this.update();
            return {
                isInToolbar: or(gr(b.isInToolbar)),
                removeCallback: () => {
                    KD(this, b);
                    this.g.delete(b);
                    this.update()
                }
            }
        }
        update() {
            var a = this.Dc.O;
            let b;
            for (; this.j.Mi() > a && (b = this.i.first());) {
                var c = b;
                KD(this, c);
                this.g.add(c)
            }
            for (;
                (c = GD(this.g)) && this.j.pj() <= a;) JD(this,
                c);
            for (;
                (c = GD(this.g)) && (b = this.i.first()) && c.priority > b.priority;) a = b, KD(this, a), this.g.add(a), JD(this, c)
        }
    };

    function HD(a, b) {
        return a.priority === b.priority ? b.dg - a.dg : a.priority - b.priority
    };

    function MD(a) {
        if (!hB(a.win)) {
            if (a.j.O) {
                const b = jq(a.win);
                if (b > a.i + 100 || b < a.i - 100) a.j.g(!1), a.i = dq(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void ND(a), 200)
        }
    }

    function ND(a) {
        if (!hB(a.win)) {
            var b = dq(a.win);
            a.i && a.i > b && (a.i = b);
            b = jq(a.win);
            b >= a.i - 100 && (a.i = Math.max(a.i, b), a.j.g(!0))
        }
    }
    var OD = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = 0;
            this.l = null;
            this.A = () => void MD(this)
        }
        M() {
            this.win.addEventListener("scroll", this.A);
            this.i = dq(this.win);
            ND(this)
        }
        g() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.g()
        }
    };

    function PD(a) {
        if (!a.i) {
            var b = new OD(a.win);
            b.M();
            a.i = gr(b.j);
            Dq(a, b)
        }
        return a.i
    }

    function QD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || RD(a, d, c);
        kr(c, !0, () => {
            d.removeCallback()
        })
    }

    function RD(a, b, c) {
        a = PD(a);
        const d = jr(a, !0, () => void b.showUnlessUserInControl()),
            e = jr(a, !1, () => void b.hideUnlessUserInControl());
        jr(dr(b.isDismissed), !0, () => {
            d();
            e()
        });
        kr(c, !0, () => {
            d();
            e()
        })
    }
    var SD = class extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null
        }
        addRegulatoryMessage(a) {
            const b = new T(!1),
                c = kr(PD(this), !0, () => {
                    QD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function TD(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new UD(a, b));
        return a.googFloatingToolbarManager
    }

    function VD(a) {
        a.i || (a.i = WD(a.win, a.j, a.Ec), Dq(a, a.i.Db), Dq(a, a.i.zh), XD(a), YD(a, a.i.Db));
        return a.i
    }

    function ZD(a) {
        a.Ec.O === null && a.i ? .position.g($D(a))
    }

    function aE(a) {
        a.win.requestAnimationFrame(() => void ZD(a))
    }

    function $D(a) {
        var b = [];
        a.i ? .Db ? .A().A() ? (b.push(() => bE(a)), b.push(() => cE(a))) : (b.push(() => cE(a)), b.push(() => bE(a)));
        a.i ? .Db ? .F() ? .A() && b.push(() => {
            const c = bq(a.win);
            return {
                position: ZC({
                    ga: Math.floor(c / 3),
                    Ba: 10
                }),
                Dc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function XD(a) {
        a.win.googFloatingToolbarManagerAsyncPositionUpdate ? aE(a) : ZD(a)
    }

    function YD(a, b) {
        const c = BD(a.win);
        c.j || (ED(c), FD(c), c.j = !0);
        c.l.listen(() => void XD(a));
        Dq(a, c);
        b.F().listen(() => void XD(a));
        b.A().listen(() => void XD(a));
        a.Ec.listen(() => void XD(a))
    }

    function bE(a) {
        var b = a.win;
        const c = bq(a.win);
        return VC(b, {
            Qb: aD({
                ga: 50,
                Ja: 10
            }),
            uf: Math.floor(c / 3),
            xb: 60,
            yf: iD(),
            Gd: Math.floor(c / 2),
            lb: 20
        }, [...(a.i ? .Db.l() ? ? []), a.win.document.body]).Ce
    }

    function cE(a) {
        var b = a.win;
        const c = bq(a.win);
        return VC(b, {
            Qb: ZC({
                ga: 50,
                Ba: 10
            }),
            uf: Math.floor(c / 3),
            xb: 60,
            yf: iD(),
            Gd: Math.floor(c / 2),
            lb: 40
        }, [...(a.i ? .Db.l() ? ? []), a.win.document.body]).Ce
    }
    class UD extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null;
            this.Ec = dE(this.win, this)
        }
        addButton(a) {
            return VD(this).Sj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return VD(this).zh.addRegulatoryMessage(a)
        }
    }

    function WD(a, b, c) {
        const d = new T(null),
            e = fD(a, {
                ec: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Ec: c
            });
        b = new LD(d.map(f => f ? .Dc || 0), {
            addButton: f => e.addButton(f),
            Mi: () => rD(e, {}),
            pj: () => rD(e, {
                ei: 1
            })
        });
        a = new SD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Db: e,
            position: d,
            Sj: b,
            zh: a
        }
    }

    function dE(a, b) {
        const c = new TA(a),
            d = new T(null),
            e = f => void d.g(f);
        Eq(b, () => {
            c.removeListener(e)
        });
        c.addListener(e);
        return d
    };
    const eE = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function fE(a, b, c, d, e) {
        a = new gE(a, b, c, d, e);
        if (a.l) {
            Wr(a.win, eE);
            var f = a.win;
            b = a.message;
            c = lB(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Xk(f.document);
            var g = gA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text_old:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                jl(f, bA(g)));
            d = kB("ipr-container", e);
            e = kB("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = kB("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.i = c.bb;
            oy(a.l, a.i);
            a.j && a.j(Hn(1));
            hE(a)
        } else iE(a);
        return a
    }

    function hE(a) {
        const b = new Yr(a.win);
        b.M(2E3);
        Dq(a, b);
        b.addListener(() => {
            jE(a);
            iE(a);
            b.dispose()
        })
    }

    function iE(a) {
        const b = TD(a.win, a.A).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        Eq(a, () => void b.removeCallback());
        a.j && a.j(Hn(2))
    }

    function jE(a) {
        a.i && (a.i.parentNode ? .removeChild(a.i), a.i = null)
    }
    var gE = class extends S {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.A = d;
            this.j = e;
            this.i = null
        }
        g() {
            jE(this);
            super.g()
        }
    };
    var lE = (a, b, c, d) => kE(a, b, c, d);

    function kE(a, b, c, d) {
        const e = fE(a, LC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, mE(a));
        return () => e.dispose()
    }

    function mE(a) {
        if (a = KC(a)) return a;
        Y.aa(1234, Error("No messages"), void 0, void 0);
        return (new et).i()
    };

    function nE(a, b) {
        b && (a.g = lE(a.i, b.localizedDnsText, () => oE(a, b), a.l))
    }

    function pE(a) {
        const b = IC(a.i);
        b.callbackQueue = b.callbackQueue || [];
        JC(a.i).overrideDnsLink = !0;
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => nE(a, c)
        })
    }

    function oE(a, b) {
        UA(a.j);
        b.openConfirmationDialog(c => {
            c && a.g && (a.g(), a.g = null);
            VA(a.j)
        })
    }
    class qE {
        constructor(a, b, c) {
            this.i = a;
            this.j = PA(b, 2147483643);
            this.l = c;
            this.g = null
        }
    };

    function rE(a) {
        sE(a.j, b => {
            var c = a.i,
                d = b.mk,
                e = b.ri,
                f = b.showRevocationMessage;
            b = LC(c, a.l);
            d = {
                actionButton: {
                    buttonText: c.document.createTextNode(d),
                    onClick: f
                },
                informationText: c.document.createTextNode(e)
            };
            e = KC(c);
            e || (Y.aa(1233, Error("No messages"), void 0, void 0), e = (new et).i());
            fE(c, b, d, e)
        }, () => {
            VA(a.g);
            tE(a)
        })
    }

    function uE(a) {
        UA(a.g);
        rE(a)
    }

    function tE(a) {
        a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? UA(a.g) : VA(a.g)
        }) : Y.aa(1250, Error("No TCF API function"), void 0, void 0)
    }
    class vE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = PA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var wE = a => {
            if (!a || Lh(a, 1) == null) return !1;
            a = Lh(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        xE = a => {
            if (!a || Lh(a, 3) == null) return !1;
            a = Lh(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        yE = a => a ? Jh(a, 5) === !0 : !1,
        zE = a => a ? Jh(a, 6) === !0 : !1;

    function AE() {
        return "m202410310101"
    };

    function BE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            sf: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            sf: c
        }
    };

    function CE(a, b) {
        kd(a, (c, d) => {
            b[d] = c
        })
    }

    function DE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && cd(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function EE() {
        if (FE) return FE;
        const a = Uk() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? FE = b : a.google_persistent_state_async = FE = new GE
    }

    function HE(a, b, c) {
        b = IE[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function JE(a, b, c) {
        return HE(a, b, () => c)
    }

    function KE(a, b, c) {
        return a.S[IE[b] || `google_ps_${b}`] = c
    }

    function LE(a, b) {
        return KE(a, b, JE(a, b, 0) + 1)
    }

    function ME() {
        var a = EE();
        return JE(a, 20, {})
    }

    function NE() {
        var a = EE();
        const b = JE(a, 31, !1);
        b || KE(a, 31, !0);
        return !b
    }

    function OE() {
        var a = EE();
        const b = JE(a, 41, !1);
        b || KE(a, 41, !0);
        return !b
    }

    function PE() {
        var a = EE();
        return JE(a, 26)
    }

    function QE() {
        var a = EE();
        return JE(a, 28, [])
    }

    function RE() {
        var a = EE();
        return HE(a, 39, SE)
    }
    var GE = class {
            constructor() {
                this.S = {}
            }
        },
        FE = null;
    const IE = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function TE(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function UE(a, b) {
        a = TE(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function Ep(a, b) {
        a.i.size > 0 || VE(a);
        const c = a.i.get(0);
        c ? c.push(b) : a.i.set(0, [b])
    }

    function WE(a, b, c, d) {
        rb(b, c, d);
        Eq(a, () => sb(b, c, d))
    }

    function XE(a, b) {
        a.state !== 1 && (a.state = 1, a.i.size > 0 && YE(a, b))
    }

    function VE(a) {
        a.win.document.visibilityState ? WE(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && XE(a, b);
            a.win.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.win ? (WE(a, a.win, "pagehide", b => {
            XE(a, b)
        }), WE(a, a.win, "pageshow", () => {
            a.state = 0
        })) : WE(a, a.win, "beforeunload", b => {
            XE(a, b)
        })
    }

    function YE(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var ZE = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.state = 0;
            this.i = new Map
        }
    };
    async function $E(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function aF() {
        return Hp(bF)
    }

    function cF(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = Md(a.win)
    }

    function dF(a) {
        var b = a.state.wpc;
        if (b === null || b === "") b = a.state, a = a.win, a = a.google_ad_client ? String(a.google_ad_client) : TE(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }

    function eF(a, b) {
        var c = new Mo;
        var d = cF(a);
        c = di(c, 1, d);
        c = Lo(c.Mc(dF(a)), a.state.sd);
        return di(c, 7, Math.round(b || a.win.performance.now()))
    }

    function fF(a, b, c) {
        b(a.G.Md.ee.Tc).Ha(c)
    }

    function gF(a, b, c) {
        b(a.G.Md.ee.Tc).Hc(c)
    }
    async function hF(a) {
        await $E(a.win, () => !(!cF(a) || !dF(a)))
    }

    function iF() {
        var a = aF();
        a.g && (a.state.tar += 1)
    }

    function jF(a) {
        var b = aF();
        if (b.g) {
            var c = b.j;
            a(c);
            b.state.cc = ki(c)
        }
    }
    async function kF(a, b, c) {
        if (a.g && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await hF(a);
            var e = a.G,
                f = e.Za;
            a = eF(a, d);
            d = new vn;
            b = N(d, 1, b);
            c = rh(b, 2, c, yf);
            c = H(a, 9, No, c);
            f.call(e, c)
        }
    }
    async function lF(a, b) {
        await hF(a);
        var c = eF(a);
        b = H(c, 5, No, b);
        a.g && !a.state.le.includes(2) && (a.state.le.push(2), a.G.Za(b))
    }
    async function mF(a, b, c) {
        await hF(a);
        var d = a.G,
            e = d.Za;
        a = Lo(eF(a, c), 1);
        b = H(a, 6, No, b);
        e.call(d, b)
    }
    async function nF(a, b, c) {
        await hF(a);
        fF(a, d => b(d.Gh), c)
    }
    async function oF(a, b, c) {
        await hF(a);
        gF(a, d => b(d.Gh), c)
    }
    async function pF(a, b) {
        await hF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(eF(a), 1);
        b = H(a, 13, No, b);
        d.call(c, b)
    }
    async function qF(a, b) {
        if (a.g) {
            await hF(a);
            var c = a.G,
                d = c.Za;
            a = eF(a);
            b = H(a, 11, No, b);
            d.call(c, b)
        }
    }
    async function rF(a, b) {
        await hF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(eF(a), 1);
        b = H(a, 14, No, b);
        d.call(c, b)
    }
    async function sF(a, b) {
        await hF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(eF(a), 1);
        b = H(a, 16, No, b);
        d.call(c, b)
    }
    var bF = class {
        constructor(a, b) {
            this.win = Uk() || window;
            this.i = b ? ? new ZE(this.win);
            this.G = a ? ? new Gp(AE(), 100, 100, !0, this.i);
            this.state = HE(EE(), 33, () => {
                const c = X(hu);
                return {
                    sd: c,
                    ssp: c > 0 && jd() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get g() {
            return this.state.ssp
        }
        get gd() {
            return this.state.cu
        }
        set gd(a) {
            this.state.cu = a
        }
        get j() {
            return Ry(1227, () => li(wn, Tg(this.state.cc || []))) || new wn
        }
    };

    function tF(a) {
        var b = new uF;
        return $h(b, 1, a)
    }
    var uF = class extends O {
        constructor() {
            super()
        }
    };
    class vF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
        run() {
            if (this.i.adsbygoogle_ama_fc_has_run !== !0) {
                var a = wE(this.g),
                    b = xE(this.g),
                    c = !1;
                a && (uE(new vE(this.i, this.A, this.l || Bh(this.g, mt, 4, y(ef)), this.j)), c = !0);
                b && (pE(new qE(this.i, this.A, this.l || Bh(this.g, mt, 4, y(ef)))), c = !0);
                jF(f => {
                    f = M(f, 9, !0);
                    f = M(f, 10, a);
                    M(f, 11, b)
                });
                var d = yE(this.g),
                    e = zE(this.g);
                d && (c = !0);
                c && (c = tF(d && e), this.j.start(!0, c), this.i.adsbygoogle_ama_fc_has_run = !0)
            }
        }
    };

    function wF(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = hd("SCRIPT", g);
            h.async = !0;
            Ac(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                c > 0 ? wF(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function xF(a, b, c = () => {}, d = () => {}) {
        wF(Wk(a), b, 0, !1, c, d)
    };

    function yF(a = null) {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Tb(Sp).map(a => Number(a));
    Tb(Tp).map(a => Number(a));
    const zF = t.URL;

    function AF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function BF(a) {
        var b = (new zF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function CF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new zF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function DF(a) {
        var b = new zF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + AF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new zF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function EF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = hd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var FF = class extends O {};
    var GF = Zj(class extends O {
        getStatus() {
            return z(this, FF, 2)
        }
    });

    function HF(a) {
        if (a.i) return a.i;
        a.L && a.L(a.j) ? a.i = a.j : a.i = yd(a.j, a.R);
        return a.i ? ? null
    }

    function IF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.Gf,
                        e = a.F.get(d);
                    e && (e.persistent || a.F.delete(d), e.Nb ? .(e.Pi, c.payload))
                }
            } catch (f) {}
        }, rb(a.j, "message", a.l))
    }

    function JF(a, b, c) {
        if (HF(a))
            if (a.i === a.j)(b = a.B.get(b)) && b(a.i, c);
            else {
                var d = a.A.get(b);
                if (d && d.Bc) {
                    IF(a);
                    var e = ++a.W;
                    a.F.set(e, {
                        Nb: d.Nb,
                        Pi: d.Dd(c),
                        persistent: b === "addEventListener"
                    });
                    a.i.postMessage(d.Bc(c, e), "*")
                }
            }
    }
    var KF = class extends S {
        constructor(a, b, c, d) {
            super();
            this.R = b;
            this.L = c;
            this.H = d;
            this.B = new Map;
            this.W = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        g() {
            delete this.i;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (sb(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.g()
        }
    };
    const LF = (a, b) => {
            const c = {
                cb: d => {
                    d = GF(d);
                    b.La({
                        ic: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        MF = {
            Dd: a => a.La,
            Bc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Nb: (a, b) => {
                a({
                    ic: b
                })
            }
        };

    function NF(a) {
        a = GF(a.data.__fciReturn);
        return {
            payload: a,
            Gf: Nh(a, 1)
        }
    }

    function OF(a, b = !1) {
        if (b) return !1;
        a.j || (a.i = !!HF(a.caller), a.j = !0);
        return a.i
    }

    function PF(a) {
        return new Promise(b => {
            OF(a) && JF(a.caller, "getDataWithCallback", {
                command: "loaded",
                La: c => {
                    b(c.ic)
                }
            })
        })
    }

    function QF(a, b) {
        OF(a) && JF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: ji(b),
            La: () => {}
        })
    }
    var RF = class extends S {
        constructor(a) {
            super();
            this.i = this.j = !1;
            this.caller = new KF(a, "googlefcPresent", void 0, NF);
            this.caller.B.set("getDataWithCallback", LF);
            this.caller.A.set("getDataWithCallback", MF)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };
    const SF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function TF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = SF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (uk({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function UF(a, b = {}) {
        return TF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.Co) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? VF(a, "1", 0) : !0 : !1
    }

    function VF(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = WF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && WF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? WF(a.purpose.legitimateInterests, b) && WF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function WF(a, b) {
        return !(!a || !a[b])
    }

    function XF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => VF(a, d, c))
    }

    function YF(a) {
        if (a.i) return a.i;
        a.i = yd(a.j, "__tcfapiLocator");
        return a.i
    }

    function ZF(a) {
        return typeof a.j.__tcfapi === "function" || YF(a) != null
    }

    function $F(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (YF(a)) {
            aG(a);
            const e = ++a.H;
            a.B[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function bG(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = kb(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        $F(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = SF(c), c.internalBlockOnErrors = a.A, TF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), $F(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function aG(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, rb(a.j, "message", a.l))
    }
    class cG extends S {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.i = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.xi ? ? !1;
            this.l = null
        }
        g() {
            this.B = {};
            this.l && (sb(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.i;
            super.g()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = kb(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = SF(b),
                    b.internalBlockOnErrors = this.A, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                $F(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && $F(this, "removeEventListener", null, a.listenerId)
        }
    };

    function sE(a, b, c) {
        const d = yF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = yF(a.win),
                    f = new cG(a.win);
                ZF(f) && bG(f, g => {
                    g.cmpId === 300 && g.tcString && g.tcString !== "tcunavailable" && b({
                        mk: (0, e.getDefaultConsentRevocationText)(),
                        Ao: (0, e.getDefaultConsentRevocationCloseText)(),
                        ri: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function dG(a, b = !1, c) {
        const d = {};
        try {
            const f = BF(a.win),
                g = CF(a.win);
            d.fc = f;
            d.fctype = g
        } catch (f) {}
        let e;
        try {
            e = DF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = eG(a.g, d);
        xF(a.win, b, () => {}, () => {});
        c && QF(new RF(a.win), c)
    }
    var fG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                EF(this.win, "googlefcPresent"), dG(this, a, b)
            } catch (c) {}
        }
    };

    function eG(a, b) {
        a = Zc `https://fundingchoicesmessages.google.com/i/${a}`;
        return $c(a, { ...b,
            ers: 2
        })
    };
    const gG = new Set(["ARTICLE", "SECTION"]);
    var hG = class {
        constructor(a) {
            this.g = a
        }
    };

    function iG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function jG(a) {
        return a.classList.length > 0
    }

    function kG(a) {
        return gG.has(a.tagName)
    };
    var lG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function mG(a) {
        return ya(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? mG(a) : null
    };
    var nG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = mG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new lG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var oG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        deleteAll(a) {
            return this.map.delete(a)
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function() {
                return function*() {
                    for (const b of a.values()) yield* b
                }()
            }()
        }[Symbol.iterator]() {
            const a =
                this.map;
            return function() {
                return function*() {
                    for (const [b, c] of a) {
                        const d = b,
                            e = c;
                        for (const f of e) yield [d, f]
                    }
                }()
            }()
        }
    };

    function pG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function qG(a) {
        return Array.from(rG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function sG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new UC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && Xq(a.j, {
                gb: c.g,
                Va: tG,
                zb: !0
            }) === null
        })
    }

    function uG(a) {
        return qG(a).sort(vG).find(b => sG(a, b)) || []
    }

    function rG(a) {
        return wG(Array.from(a.win.document.getElementsByTagName("IMG")).map(nG).filter(rs), b => {
            var c = [...iG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? iG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? iG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = Xq(a.i.g, {
                gb: b.g,
                Va: jG
            })) ? iG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(Xq(a.i.g, {
                gb: b.g,
                Va: kG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var xG = class {
        constructor(a, b, c, d, e) {
            var f = new Kr;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function wG(a, b) {
        const c = new oG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function tG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function vG(a, b) {
        return b.length - a.length
    };

    function yG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = zG(a.j),
            d = AG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.j().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            Math.abs(h) < 1 && Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), v(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function BG(a) {
        a.i || (a.i = yG(a));
        return a.i
    }
    var CG = class extends S {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.i = null
        }
        g() {
            if (this.i) {
                var a = this.i;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.i = null
            }
            super.g()
        }
    };

    function AG(a) {
        const b = a.document.createElement("div");
        v(b, Pt(a));
        v(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function zG(a) {
        const b = a.document.createElement("div");
        v(b, Pt(a));
        v(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function DG(a) {
        const b = new T(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return gr(b)
    };
    const EG = ["Google Material Icons", "Roboto"];

    function FG({
        win: a,
        wa: b,
        qj: c,
        webPropertyCode: d,
        Oa: e,
        V: f
    }) {
        const g = new Mr(a, c);
        c = new CG(a, c, g);
        Dq(c, g);
        a = new GG(a, d, e, b, c, f);
        Dq(a, c);
        a.M()
    }
    var GG = class extends S {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.wa = d;
            this.j = e;
            this.V = f;
            this.i = new T(!1)
        }
        M() {
            const a = HG(this.win, this.webPropertyCode, this.Oa);
            BG(this.j).appendChild(a.Zi);
            $w(this.win, a.ta);
            DG(a.ta).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.i.g(!0);
                            break;
                        default:
                            this.V ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.V ? .ik(this.wa, b)
                }
            });
            kr(this.i, !0, () => void a.yj.g(!0));
            a.Ui.listen(() =>
                void this.dispose());
            a.Ti.listen(() => void this.V ? .gk(this.wa))
        }
    };

    function HG(a, b, c) {
        const d = new T(!1),
            e = a.document.createElement("div");
        v(e, Pt(a));
        v(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        jr(d, !0, () => void v(e, {
            opacity: "1"
        }));
        jr(d, !1, () => void v(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        v(f, Pt(a));
        v(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            ci: g,
            xj: h
        } = IG(a, b);
        f.appendChild(g);
        e.appendChild(JG(a, K(c, 1)));
        b = KG(a, K(c, 2));
        e.appendChild(b.Di);
        b.Ke.listen(() => void d.g(!1));
        return {
            yj: d,
            Zi: e,
            ta: h,
            Ti: b.Ke,
            Ui: b.Ke.delay(a, 450)
        }
    }

    function JG(a, b) {
        const c = a.document.createElement("div");
        v(c, Pt(a));
        v(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function KG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        v(c, Pt(a));
        v(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new sr;
        c.addEventListener("click", () => void rr(d));
        return {
            Di: c,
            Ke: pr(d)
        }
    }

    function IG(a, b) {
        a = Ww(a.document, b, null, null, {});
        return {
            ci: a.mb,
            xj: a.ta
        }
    };

    function LG({
        target: a,
        threshold: b = 0
    }) {
        const c = new MG;
        c.M(a, b);
        return c
    }
    var MG = class extends S {
        constructor() {
            super();
            this.i = new T(!1)
        }
        M(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.i.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Eq(this, () => void c.disconnect())
        }
    };

    function NG(a) {
        const b = OG(a.win, Wh(a.settings, 2) ? ? 250, Wh(a.settings, 3) ? ? 300);
        let c = 1;
        return uG(a.j).map(d => ({
            wa: c++,
            image: d,
            hb: b(d)
        }))
    }

    function PG(a, b) {
        const c = LG({
            target: b.image.g,
            threshold: Xh(a.settings) ? ? .8
        });
        a.i.push(c);
        kr(nr(c.i, a.win, Wh(a.settings, 5) ? ? 3E3, d => d), !0, () => {
            if (a.g < (Wh(a.settings, 1) ? ? 1)) {
                FG({
                    win: a.win,
                    wa: b.wa,
                    qj: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    V: a.V
                });
                a.g++;
                if (!(a.g < (Wh(a.settings, 1) ? ? 1)))
                    for (; a.i.length;) a.i.pop() ? .dispose();
                a.V ? .hk(b.wa)
            }
        })
    }
    var RG = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.settings = c;
            this.Oa = d;
            this.j = e;
            this.V = f;
            this.i = [];
            this.g = 0
        }
        run() {
            const a = NG(this);
            a.filter(QG).forEach(b => void PG(this, b));
            this.V ? .jk(a.map(b => ({
                wa: b.wa,
                hb: b.hb
            })))
        }
    };

    function QG(a) {
        return a.hb.rejectionReasons.length === 0
    }

    function OG(a, b, c) {
        const d = bq(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                xb: e.width,
                hf: e.height,
                Vi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function SG(a, b) {
        a.wa = b;
        return a
    }
    var TG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.wa = this.g = null
        }
    };

    function UG(a, b) {
        return new TG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function VG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = Ll(), a = 0) : a = Ll() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            g = b.hostname,
            h = b.j,
            k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].wa;
                l[`${p}_s_w`] = b.g[n].hb.xb;
                l[`${p}_s_h`] = b.g[n].hb.hf;
                l[`${p}_s_dbf`] = b.g[n].hb.Vi;
                b.g[n].hb.rejectionReasons.length > 0 && (l[`${p}_s_rej`] = b.g[n].hb.rejectionReasons.join(","))
            }
        } else l = null;
        Ty("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(b.wa === null ? {} : {
                imid: b.wa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var WG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        jk(a) {
            var b = UG(this, "fndi");
            b.g = a;
            VG(this, b, a.length > 0 ? 1 : .1)
        }
        hk(a) {
            a = SG(UG(this, "adpl"), a);
            VG(this, a, 1)
        }
        ik(a, b) {
            a = SG(UG(this, "adst"), a);
            a.i = b;
            VG(this, a, 1)
        }
        gk(a) {
            a = SG(UG(this, "adis"), a);
            VG(this, a, 1)
        }
        reportError(a) {
            var b = UG(this, "err");
            b.errorMessage = a;
            VG(this, b, .1)
        }
    };

    function XG(a, b, c) {
        return (a = a.g()) && Jh(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var YG = class extends O {
        getHeight() {
            return Mh(this, 2)
        }
        setHeight(a) {
            return ai(this, 2, a)
        }
    };

    function ZG(a, b) {
        return ai(a, 1, b)
    }

    function $G(a, b) {
        return Ch(a, 2, b)
    }
    var aH = class extends O {};
    var bH = class extends O {
        constructor() {
            super()
        }
    };
    var cH = class extends O {
            constructor() {
                super()
            }
        },
        dH = [1, 2];
    const eH = new Set([7, 1]);
    var fH = class {
        constructor() {
            this.j = new oG;
            this.l = []
        }
        g(a, b) {
            eH.has(b) || ns(ks(ny(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function gH(a) {
        return new Ds(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class hH {
        g(a) {
            return gH(Math.floor(a.i))
        }
    };
    var iH = class extends O {
        constructor() {
            super()
        }
    };

    function jH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.je = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        ya(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        ul(a.l) && ul(a.i) || Ty("rctnosize", b);
        return !0
    }
    var kH = class {
        constructor() {
            this.C = this.D = this.j = this.je = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function lH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function mH(a, b = []) {
        const c = Date.now();
        return Oa(b, d => c - d < a * 1E3)
    }

    function nH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Ra(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = mH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function oH(a, b, c) {
        return b <= 0 || a == null || !lH(a) ? null : nH(a, b, c)
    };
    var pH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= $p(a);
            const h = aq(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= cq(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = oH(c, 3600, "__lsv__") ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var qH = class extends kH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = zt(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const rH = {};

    function sH(a, b, c) {
        let d = tH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Xa && d.Xa.length;) {
            const f = d.Xa.shift(),
                g = Px(f.ea);
            if (g && !(g <= d.Wc)) c.C ? .g(f, 18);
            else if (uH(c, f, {
                    Ed: d.Wc
                })) {
                if (d.Sc.g.length + 1 >= e) return c.C ? .i(d.Xa, 19), !0;
                d = tH(a, c, b);
                if (!d) return !0
            }
        }
        return c.j
    }
    const tH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = dz(b.da(), f.g ? f.g.dc : void 0, d);
        if (f.g.length >= d) return b.C ? .i(vH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = fq(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - jz(f)) : e = void 0;
        const g = (d = e == null || e >= 50) ? vH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(vH(b, f, {
            types: a
        }, c), 18);
        return {
            Sc: f,
            Wc: e,
            Xa: g
        }
    };
    rH[2] = Fa(function(a, b) {
        a = vH(b, dz(b.da()), {
            types: a,
            ib: Fy(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (uH(b, a[c])) return !0;
        return b.j ? (b.l.push(11), !0) : !1
    }, [0]);
    rH[5] = Fa(sH, [0], 5);
    rH[10] = Fa(function(a, b) {
        a = [];
        const c = b.yb;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && a.push(1);
        return sH(a, 10, b)
    }, 10);
    rH[3] = function(a) {
        if (!a.j) return !1;
        var b = vH(a, dz(a.da()), {
            types: [0],
            ib: Fy(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (uH(a, b[c])) return !0;
        a.l.push(11);
        return !0
    };
    const xH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            wH(a, gH(b))
        },
        zH = (a, b) => {
            var c = {
                types: [0],
                ib: Gy(),
                kk: [5]
            };
            c = vH(a, dz(a.da()), c, 8);
            yH(a, c.reverse(), b)
        },
        yH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.ma), uH(a, d, {
                        ke: b
                    })) return !0;
            return !1
        };
    rH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => rH[8](a), {
            once: !0
        }), !0;
        if (!a.j) return !1;
        if (!a.zd()) return !0;
        b = {
            types: [0],
            ib: Gy(),
            Lf: [2, 4, 5]
        };
        b = vH(a, dz(a.da()), b, 8);
        const c = new hH;
        if (yH(a, b, c)) return !0;
        if (a.A.Bg) switch (a.A.rh || 0) {
            case 1:
                zH(a, c);
                break;
            default:
                xH(a)
        }
        return !0
    };
    rH[6] = Fa(sH, [2], 6);
    rH[7] = Fa(sH, [1], 7);
    rH[9] = function(a) {
        const b = tH([0, 2], a, 9);
        if (!b || !b.Xa) return a.l.push(17), a.j;
        for (var c of b.Xa) {
            var d = a.A.df || null;
            d == null ? d = null : (d = Qx(c.ea, new AH, new BH(d, a.da())), d = new py(d, c.ia(), c.ma));
            if (d && !(Px(d.ea) > b.Wc) && uH(a, d, {
                    Ed: b.Wc,
                    Ge: !0
                })) return a = d.ea.H, c = c.ea, a = a.length > 0 ? a[0] : null, c.l = !0, a != null && c.H.push(a), !0
        }
        a.l.push(17);
        return a.j
    };
    class AH {
        i(a, b, c, d) {
            return Zw(d.document, a, b)
        }
        j(a) {
            return bq(a) || 0
        }
    };
    var CH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Sc = c
        }
        Aa(a) {
            return this.g ? Gz(this.i, this.g, a, this.Sc) : Fz(this.i, a, this.Sc)
        }
        va() {
            return this.g ? 16 : 9
        }
    };
    var DH = class {
        constructor(a) {
            this.me = a
        }
        Aa(a) {
            return Nz(a.document, this.me)
        }
        va() {
            return 11
        }
    };
    var EH = class {
        constructor(a) {
            this.rb = a
        }
        Aa(a) {
            return Kz(this.rb, a)
        }
        va() {
            return 13
        }
    };
    var FH = class {
        Aa(a) {
            return Dz(a)
        }
        va() {
            return 12
        }
    };
    var GH = class {
        constructor(a) {
            this.qc = a
        }
        Aa() {
            return Iz(this.qc)
        }
        va() {
            return 2
        }
    };
    var HH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Lz(this.g)
        }
        va() {
            return 3
        }
    };
    var IH = class {
        Aa() {
            return Oz()
        }
        va() {
            return 17
        }
    };
    var JH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Hz(this.g)
        }
        va() {
            return 1
        }
    };
    var KH = class {
        Aa() {
            return ib(Hx)
        }
        va() {
            return 7
        }
    };
    var LH = class {
        constructor(a) {
            this.Lf = a
        }
        Aa() {
            return Jz(this.Lf)
        }
        va() {
            return 6
        }
    };
    var MH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Mz(this.g)
        }
        va() {
            return 5
        }
    };
    var NH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Aa() {
            return Fa(Pz, this.minWidth, this.maxWidth)
        }
        va() {
            return 10
        }
    };
    var OH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function PH(a) {
        var b = new QH;
        b.A = a;
        b.i.push(new JH(a));
        return b
    }

    function RH(a, b) {
        a.i.push(new LH(b));
        return a
    }

    function SH(a, b) {
        a.i.push(new GH(b));
        return a
    }

    function TH(a, b) {
        a.i.push(new MH(b));
        return a
    }

    function UH(a, b) {
        a.i.push(new HH(b));
        return a
    }

    function VH(a) {
        a.i.push(new KH);
        return a
    }

    function WH(a) {
        a.g.push(new FH);
        return a
    }

    function XH(a, b = 0, c, d) {
        a.g.push(new CH(b, c, d));
        return a
    }

    function YH(a, b = 0, c = Infinity) {
        a.g.push(new NH(b, c));
        return a
    }

    function ZH(a) {
        a.g.push(new IH);
        return a
    }

    function $H(a, b = 0) {
        a.g.push(new EH(b));
        return a
    }
    var QH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        orderBy(a) {
            this.j = a;
            return this
        }
        build() {
            return new OH(this)
        }
    };
    class BH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.je;
            c.google_ad_height = bq(b) || 0;
            c.google_ad_width = aq(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new iH;
            b = $h(b, 1, a.A);
            a.g && C(b, 2, a.g);
            c.google_rasc = ji(b);
            a.j && (c.google_adtest = "on");
            return new Ds(["fsi_container"], c)
        }
    };
    var aI = ws(new ts(0, {})),
        bI = ws(new ts(1, {})),
        cI = a => a === aI || a === bI;

    function dI(a, b, c) {
        Pq(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class eI {
        constructor() {
            this.g = new Tq
        }
    };

    function fI(a, b) {
        for (let c = 0; c < b.length; c++) a.xa(b[c]);
        return a
    }

    function gI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class hI {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Mc(a) {
            this.B.wpc = a;
            return this
        }
        xa(a) {
            for (let b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            const b = Ub(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Fl(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function iI(a, b) {
        b && (a.g.apv = I(b, 4), eh(b, Ys, 23) && (a.g.sat = "" + Gh(z(b, Ys, 23), 1)));
        return a
    }

    function jI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var kI = class extends hI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        I(a) {
            a != null && (this.g.allp = a);
            return this
        }
        Fh(a) {
            if (a) {
                const b = [];
                for (const c of Rq(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.jb, d.Qh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Wb(a, this.g);
            return a
        }
    };

    function lI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function mI(a, b, c, d = 30) {
        c.length <= d ? a[b] = nI(c) : (a[b] = nI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function nI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ha(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function oI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function pI(a, b) {
        a.i.op = oI(b)
    }

    function qI(a, b, c) {
        mI(a.i, "fap", b);
        a.i.fad = oI(c)
    }

    function rI(a, b, c) {
        mI(a.i, "fmp", b);
        a.i.fmd = oI(c)
    }

    function sI(a, b, c) {
        mI(a.i, "vap", b);
        a.i.vad = oI(c)
    }

    function tI(a, b, c) {
        mI(a.i, "vmp", b);
        a.i.vmd = oI(c)
    }

    function uI(a, b, c) {
        mI(a.i, "pap", b);
        a.i.pad = oI(c)
    }

    function vI(a, b, c) {
        mI(a.i, "pmp", b);
        a.i.pmd = oI(c)
    }

    function wI(a, b) {
        mI(a.i, "psq", b)
    }
    var xI = class extends kI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = nI(this.errors));
            return a
        }
    };

    function yI(a, b, c) {
        const d = b.ea;
        Pq(a.g, d) || a.g.set(d, new zI(js(ny(b)) ? ? ""));
        c(a.g.get(d))
    }

    function AI(a, b) {
        yI(a, b, c => {
            c.isAvailable = !0
        })
    }

    function BI(a, b) {
        yI(a, b, c => {
            c.g = !0
        })
    }

    function CI(a, b) {
        yI(a, b, c => {
            c.i = !0
        });
        a.L.push(b.ea)
    }

    function DI(a, b, c) {
        yI(a, b, d => {
            d.Jb = c
        })
    }

    function EI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) cI(f.Jb ? ? "") ? ++e : (b = a.i.get(f.Jb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Kb: e
        }
    }

    function FI(a, b) {
        pI(b, a.i.ob());
        var c = Sq(a.g).filter(f => (f.vb.startsWith(aI) ? 0 : 1) === 0),
            d = Sq(a.g).filter(f => (f.vb.startsWith(aI) ? 0 : 1) === 1),
            e = EI(a, f => f.isAvailable, c);
        qI(b, e.list, e.Kb);
        e = EI(a, f => f.isAvailable, d);
        rI(b, e.list, e.Kb);
        e = EI(a, f => f.g, c);
        sI(b, e.list, e.Kb);
        e = EI(a, f => f.g, d);
        tI(b, e.list, e.Kb);
        c = EI(a, f => f.i, c);
        uI(b, c.list, c.Kb);
        d = EI(a, f => f.i, d);
        vI(b, d.list, d.Kb);
        wI(b, a.L.map(f => a.g.get(f) ? .Jb).map(f => a.i.get(f) ? ? null))
    }

    function hn() {
        var a = Hp(GI);
        if (!a.A) return Xm();
        const b = fn(en(dn(cn(bn(an($m(Zm(Wm(Vm(new Ym, a.A ? ? []), a.H ? ? []), a.C), a.I), a.F), a.R), a.W), a.B ? ? 0), Sq(a.g).map(c => {
            var d = new Um;
            d = fi(d, 1, c.vb);
            var e = a.i.get(c.Jb ? ? "", -1);
            d = di(d, 2, e);
            d = M(d, 3, c.isAvailable);
            return M(d, 4, c.g)
        })), a.L.map(c => a.g.get(c) ? .Jb).map(c => a.i.get(c) ? ? -1));
        a.j != null && M(b, 6, a.j);
        a.l != null && sh(b, 13, Rf(a.l), "0");
        return b
    }
    var GI = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.I = !1;
            this.j = null;
            this.W = this.C = this.R = !1;
            this.B = null;
            this.i = new Tq;
            this.g = new Tq;
            this.L = []
        }
    };
    class zI {
        constructor(a) {
            this.i = this.g = this.isAvailable = !1;
            this.Jb = null;
            this.vb = a
        }
    };
    class HI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function II(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function JI(a, b) {
        const c = a.H.filter(d => Rq(d.jd).every(e => d.jd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.jd.ob() > e.jd.ob() ? d : e, c[0])
    }

    function KI(a, b) {
        b = ny(b);
        if (b.isError()) return a.i.push(18), null;
        b = b.getValue();
        if (Pq(a.j, b)) return a.j.get(b);
        var c = us(b);
        c = JI(a, c);
        a.j.set(b, c);
        return c
    }
    var LI = class {
        constructor(a) {
            this.g = a;
            this.j = new Tq;
            this.H = (z(a, xt, 2) ? .g() || []).map(b => {
                const c = us(K(b, 1)),
                    d = Nh(b, 2);
                return {
                    jd: c,
                    wh: d,
                    vb: K(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = Hp(GI);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new Tq;
            for (const c of z(this.g, xt, 2) ? .g() ? ? []) b.set(K(c, 1), Nh(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...Hh(this.g, 4, y())]
        }
        A() {
            return z(this.g, rt, 5) ? .g() ? ? null
        }
        I(a) {
            const b = KI(this, a);
            b ? .vb != null &&
                DI(Hp(GI), a, b.vb)
        }
        L(a) {
            return a.length == 0 ? !0 : .75 <= (new bs(a)).filter(b => {
                b = KI(this, b) ? .vb || "";
                return b != "" && !(b === aI || b === bI)
            }).count() / a.length
        }
    };

    function MI(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => (KI(a.g, c) ? .wh ? ? Number.MAX_VALUE) - (KI(a.g, d) ? .wh ? ? Number.MAX_VALUE))
    }

    function NI(a, b) {
        var c = b.ma.g,
            d = Math,
            e = d.min;
        const f = b.ia(),
            g = b.ea.j();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? II(f.parentElement) : II(f));
        a = a.i;
        a.g < 0 && (a.g = fq(a.i).scrollHeight || 0);
        a = a.g - b.ma.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ia();
        return a
    }

    function OI(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => NI(a, c) - NI(a, d))
    }

    function PI(a, b) {
        return b.sort((c, d) => {
            const e = c.ea.B,
                f = d.ea.B;
            var g;
            e == null || f == null ? g = e == null && f == null ? NI(a, c) - NI(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    class QI {
        constructor(a, b = null) {
            this.i = new HI(a);
            this.g = b && new LI(b)
        }
    };

    function RI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = as(e, f.Aa(a.j), SI(f.va(), c));
        f = e = e.apply(Cz(a.j));
        for (const g of b.i) f = as(f, g.Aa(a.j), qs([TI(g.va(), c), h => {
            d ? .g(h, g.va())
        }]));
        switch (b.j) {
            case 1:
                f = OI(a.g, f);
                break;
            case 2:
                f = PI(a.g, f);
                break;
            case 3:
                const g = Hp(GI);
                f = MI(a.g, f);
                e.forEach(h => {
                    AI(g, h);
                    a.g.g ? .I(h)
                });
                f.forEach(h => BI(g, h))
        }
        b.A && (f = ds(f, Gc(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && dI(a.l, b.g[0], {
            jb: e.count(),
            Qh: f.count()
        });
        return cs(f)
    }
    class UI {
        constructor(a, b, c = null) {
            this.i = new bs(a);
            this.g = new QI(b, c);
            this.j = b;
            this.l = new eI
        }
        count() {
            return this.i.count()
        }
    }
    const SI = (a, b) => c => Nx(c, b, a),
        TI = (a, b) => c => Nx(c.ea, b, a);

    function VI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = WI(XI(c), a);
                    break a;
                case 3:
                    a = WI(c, a);
                    break a;
                case 2:
                    const e = c.lastChild;
                    a = WI(e ? e.nodeType == 1 ? e : XI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !YI(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !Tt(b) && b.offsetWidth <= 0);
        return d
    }

    function WI(a, b) {
        if (!a) return !1;
        a = id(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function XI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function YI(a) {
        return !!a.nextSibling || !!a.parentNode && YI(a.parentNode)
    };
    var ZI = !Kc && !Hb();

    function $I(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (ZI && a.dataset) {
            if (Jb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var aJ = (a, b, c) => {
            if (!b) return null;
            const d = al(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if (a.getComputedStyle(g).display != "none") {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = bq(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && g > 0 && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        bJ = a => {
            const b = a.document.body;
            var c = aJ(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    h.depth > 0 && g > e && (e = g, f = k);
                    if (h.depth < 5)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? aJ(a, c.parentNode || b, c) : null
        },
        dJ = a => {
            let b = 0;
            try {
                b |= $p(a), Kb() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), cJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        cJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ($I(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function eJ(a) {
        const b = eq(a, !0),
            c = fq(a).scrollWidth,
            d = fq(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = jq(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            w = 0,
            D = Infinity,
            B = Infinity,
            G = null;
        var E = $y({
            Gb: !1
        }, a);
        for (var A of E) {
            E = A.getBoundingClientRect();
            const ja = b - (E.bottom + f);
            var F = void 0,
                L = void 0;
            if (A.className && A.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                F = A.getAttribute("google_element_uid");
                L = a.google_sv_map;
                if (!F ||
                    !L || !L[F]) continue;
                F = (L = Cl(L[F])) ? L.height : 0;
                L = L ? L.width : 0
            } else if (F = E.bottom - E.top, L = E.right - E.left, F <= 1 || L <= 1) continue;
            g.push(F);
            k.push(L);
            l.push(F * L);
            A.className && A.className.indexOf("google-auto-placed") != -1 ? (w += 1, A.className && A.className.indexOf("pedestal_container") != -1 && (G = F)) : (D = Math.min(D, ja), n.push(E), r += 1, h.push(F), m.push(F * L));
            B = Math.min(B, ja);
            p.push(E)
        }
        D = D === Infinity ? null : D;
        B = B === Infinity ? null : B;
        f = fJ(n);
        p = fJ(p);
        h = gJ(b, h);
        n = gJ(b, g);
        m = gJ(b * c, m);
        A = gJ(b * c, l);
        return new hJ(a, {
            Wi: e,
            Ff: b,
            Wj: c,
            Vj: d,
            Ij: r,
            si: w,
            ui: iJ(g),
            vi: iJ(k),
            ti: iJ(l),
            Qj: f,
            Pj: p,
            Oj: D,
            Nj: B,
            Pe: h,
            Oe: n,
            mi: m,
            li: A,
            Yj: G
        })
    }

    function jJ(a, b, c, d) {
        const e = Kb() && !(aq(a.i) >= 900);
        d = Oa(d, f => Sa(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.Wi,
            pg_h: kJ(a.g.Ff),
            pg_w: kJ(a.g.Wj),
            pg_hs: kJ(a.g.Vj),
            c: kJ(a.g.Ij),
            aa_c: kJ(a.g.si),
            av_h: kJ(a.g.ui),
            av_w: kJ(a.g.vi),
            av_a: kJ(a.g.ti),
            s: kJ(a.g.Qj),
            all_s: kJ(a.g.Pj),
            b: kJ(a.g.Oj),
            all_b: kJ(a.g.Nj),
            d: kJ(a.g.Pe),
            all_d: kJ(a.g.Oe),
            ard: kJ(a.g.mi),
            all_ard: kJ(a.g.li),
            pd_h: kJ(a.g.Yj),
            dt: e ? "m" : "d"
        }
    }
    class hJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function iJ(a) {
        return Ob.apply(null, Oa(a, b => b > 0)) || null
    }

    function gJ(a, b) {
        return a <= 0 ? null : Nb.apply(null, b) / a
    }

    function fJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function kJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function lJ(a) {
        var b = bz({
            Gb: !1,
            wd: !1
        }, a);
        a = (bq(a) || 0) - jq(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            hz(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function mJ(a) {
        const b = {};
        var c = bz({
            Gb: !1,
            wd: !1,
            lf: !1,
            mf: !1
        }, a).map(d => d.getBoundingClientRect()).filter(hz);
        b.eg = c.length;
        c = cz({
            lf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(hz);
        b.zg = c.length;
        c = cz({
            mf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(hz);
        b.ih = c.length;
        c = cz({
            wd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(hz);
        b.jg = c.length;
        c = (bq(a) || 0) - jq(a);
        c = bz({
            Gb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(hz).filter(Ea(nJ, null, c));
        b.fg = c.length;
        a = eJ(a);
        c = a.g.Pe != null ? a.g.Pe : null;
        c !=
            null && (b.Zg = c);
        a = a.g.Oe != null ? a.g.Oe : null;
        a != null && (b.gg = a);
        return b
    }

    function uH(a, b, {
        Ed: c,
        ke: d,
        Ge: e
    } = {}) {
        return px(997, () => oJ(a, b, {
            Ed: c,
            ke: d,
            Ge: e
        }), a.g)
    }

    function vH(a, b, c, d) {
        var e = c.ib ? c.ib : a.B;
        const f = Hy(e, b.g.length);
        e = a.A.hg ? e.g : void 0;
        const g = ZH($H(WH(YH(XH(VH(TH(UH(RH(SH(PH(c.types), a.sa), c.Lf || []), a.na), c.kk || [])), f.Gc || void 0, e, b), c.minWidth, c.maxWidth)), f.rb || void 0));
        a.W && g.g.push(new DH(a.W));
        b = 1;
        a.qb() && (b = 3);
        g.orderBy(b);
        a.A.Hh && (g.l = !0);
        return px(995, () => RI(a.i, g.build(), d, a.C || void 0), a.g)
    }

    function wH(a, b) {
        const c = bJ(a.g);
        if (c) {
            const d = Cs(a.L, b),
                e = Ww(a.g.document, a.I, null, null, {}, d);
            e && (Lw(e.mb, c, 2, 256), px(996, () => pJ(a, e, d), a.g))
        }
    }

    function qJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function oJ(a, b, {
        Ed: c,
        ke: d,
        Ge: e
    } = {}) {
        const f = b.ea;
        if (f.l) return !1;
        var g = b.ia(),
            h = f.j();
        if (!VI(a.g, h, g, a.j)) return !1;
        h = null;
        f.zc ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new Ds(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new Ds(null, {
            google_max_responsive_height: c
        });
        c = Es(Lh(f.ae, 2) || 0);
        g = Fs(f.B);
        const k = rJ(a, f),
            l = sJ(a),
            m = Cs(a.L, f.R ? f.R.g(b.ma) : null, h, d || null, c, g, k, l),
            n = b.fill(a.I, m);
        if (e && !tJ(a, n, m) || !px(996,
                () => pJ(a, n, m), a.g)) return !1;
        Ek(9, [f.B, f.Ib]);
        a.qb() && CI(Hp(GI), b);
        return !0
    }

    function rJ(a, b) {
        return js(ns(ly(b).map(Gs), () => {
            a.l.push(18)
        }))
    }

    function sJ(a) {
        if (!a.qb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return Hs({
            Ni: b,
            dj: a
        })
    }

    function tJ(a, b, c) {
        if (!b) return !1;
        var d = b.ta,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.ta;
        c = c && c.uc() || {};
        var g = X(iu);
        if (d !== d.top) g = fd(d) ? 3 : 16;
        else if (aq(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var h = aq(d);
                if (!h || (h - f) / h > g) g = 6;
                else {
                    if (g = c.google_full_width_responsive !== "true") b: {
                        h = e.parentElement;
                        for (g = aq(d); h; h = h.parentElement) {
                            const k = id(h, d);
                            if (!k) continue;
                            const l = sd(k.width);
                            if (l && !(l >= g) && k.overflow !== "visible") {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
            } else g = 5;
        else g =
            4;
        if (g !== !0) f = g;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = id(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = aq(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.ta;
            if (d = Sw(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", Qw(b, d, "0px"), f.width = `${aq(a)}px`, Tw(a, b, d), f.zIndex = "30";
            return !0
        }
        Xt(b.mb);
        return !1
    }

    function pJ(a, b, c) {
        if (!b) return !1;
        try {
            $w(a.g, b.ta, c)
        } catch (d) {
            return Xt(b.mb), a.l.push(6), !1
        }
        return !0
    }
    class uJ {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.I = b;
            this.g = c;
            this.B = d.ib;
            this.sa = d.qc || [];
            this.L = d.fj || null;
            this.na = d.Ri || [];
            this.W = d.me || [];
            this.A = e;
            this.j = !1;
            this.R = [];
            this.l = [];
            this.H = this.F = void 0;
            this.yb = f;
            this.C = g ? new fH : null
        }
        da() {
            return this.g
        }
        xa(a) {
            this.R.push(a)
        }
        qb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if (this.H === void 0) {
                const a = WH(VH(PH([0, 1, 2]))).orderBy(1).build(),
                    b = px(995, () => RI(this.i, a), this.g);
                this.H = this.i.g.g ? .L(b) || !1
            }
            return this.H
        }
        rf() {
            return !!this.A.Ch
        }
        zd() {
            return !cJ(this.g)
        }
        Ra() {
            return this.C
        }
    }
    const nJ = (a, b) => b.top <= a;

    function vJ(a, b, c, d, e, f = 0, g = 0) {
        this.Ta = a;
        this.Wd = f;
        this.Vd = g;
        this.errors = b;
        this.wb = c;
        this.g = d;
        this.i = e
    };
    var wJ = (a, {
        zd: b = !1,
        rf: c = !1,
        nk: d = !1,
        qb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function xJ(a, b, c) {
        a = wJ(a, {
            zd: b.zd(),
            rf: b.rf(),
            nk: !!b.A.df,
            qb: b.qb()
        });
        return new yJ(a, b, c)
    }

    function zJ(a, b) {
        const c = rH[b];
        return c ? px(998, () => c(a.g), a.A) : (a.g.xa(12), !0)
    }

    function AJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(zJ(a, b))
            })
        })
    }

    function BJ(a) {
        a.g.j = !0;
        return Promise.all(a.i.map(b => AJ(a, b))).then(b => {
            b.includes(!1) && a.g.xa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class yJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = Ta(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const CJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function DJ(a) {
        return BJ(a).then(() => {
            var b = a.g.i.i.filter(Hx).count();
            var c = a.g.R.slice(0);
            var d = a.g;
            d = [...d.l, ...(d.i.g.g ? .B() || [])];
            b = new vJ(b, c, d, a.g.i.count(), a.g.i.l.g, a.g.i.i.filter(Hx).filter(Ix).count(), a.g.i.i.filter(Ix).count());
            return new CJ(b)
        })
    };
    class EJ {
        g() {
            return new Ds([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class FJ {
        g() {
            return new Ds(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function GJ(a) {
        return Ut(a.g.document).map(b => {
            const c = new Ax(b, 3);
            b = new Cx(bx(a.g, b));
            return new Gx(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class HJ {
        constructor(a) {
            var b = new FJ;
            this.g = a;
            this.i = b || null
        }
    };
    const IJ = {
        ag: "10px",
        De: "10px"
    };

    function JJ(a) {
        return Oq(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Gx(new Ax(b, 1), new yx(IJ), a.i, !1, 0, [], null, a.g, null))
    }
    class KJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function LJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ha(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        mI(a.i, "cnstr", c, 80)
    }
    var MJ = class extends hI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function NJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function OJ(a, b, c) {
        const d = NJ(c.rd, "gapsMeasurementWindow") || NJ(c.tc, "gapsPerMeasurementWindow") || NJ(c.Cc, "maxGapsToReport");
        return d != null ? hs(d) : c.ig || c.tc != -1 || c.Cc != -1 ? fs(new PJ(a, b, c)) : hs("ShouldHaveLimits")
    }

    function QJ(a) {
        return qJ(a.j) && qJ(a.j).placed || []
    }

    function RJ(a) {
        return QJ(a).map(b => Ur(Sr(b.element, a.g)))
    }

    function SJ(a) {
        return QJ(a).map(b => b.index)
    }

    function TJ(a, b) {
        const c = b.ea;
        return !a.C && c.i && Lh(c.i, 8) != null && Lh(c.i, 8) == 1 ? [] : c.l ? (c.H || []).map(d => Ur(Sr(d, a.g))) : [Ur(new Tr(b.ma.g, 0))]
    }

    function UJ(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Tr(c, f - c)), c = d)
        }
        return b
    }

    function VJ(a, b) {
        b = b.map(c => {
            var d = new YG;
            return ai(d, 1, c.g).setHeight(c.getHeight())
        });
        return $G(ZG(new aH, a), b)
    }

    function WJ(a) {
        const b = Bh(a, YG, 2, y()).map(c => `G${Mh(c,1)}~${c.getHeight()}`);
        return `W${Mh(a,1)}${b.join("")}`
    }

    function XJ(a, b) {
        const c = [];
        let d = 0;
        for (const e of Rq(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(VJ(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function YJ(a) {
        const b = Bh(a, aH, 5, y()).map(c => WJ(c));
        return `M${Mh(a,1)}H${Mh(a,2)}C${Mh(a,3)}B${Number(!!J(a,4))}${b.join("")}`
    }

    function ZJ(a) {
        var b = qy(cs(a.j.i.i), a.g),
            c = RJ(a),
            d = new Uq(SJ(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = TJ(a, b[e]);
                c.push(...f)
            }
        c.push(new Tr(0, 0));
        c.push(Ur(new Tr(fq(a.g).scrollHeight, 0)));
        b = UJ(c);
        c = new Tq;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.I ? 0 : Math.floor(e.g / a.l), Pq(c, f) || c.set(f, []), c.get(f).push(e);
        b = XJ(a, c);
        c = new bH;
        c = ai(c, 1, a.i);
        c = ai(c, 2, a.l);
        c = ai(c, 3, a.A);
        a = $h(c, 4, a.C);
        return Ch(a, 5, b)
    }

    function $J(a) {
        a = ZJ(a);
        return YJ(a)
    }
    var PJ = class {
        constructor(a, b, c) {
            this.I = c.rd == -1;
            this.l = c.rd;
            this.F = c.tc == -1;
            this.A = c.tc;
            this.B = c.Cc == -1;
            this.i = c.Cc;
            this.C = c.Qg;
            this.j = b;
            this.g = a
        }
    };

    function Lt(a, b, c) {
        let d = b.Ya;
        b.Hb && W(Gu) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.pb || "pvc" in c || (c.pvc = Md(a.g)), Ty(b.Eb, c, d))
    }

    function aK(a, b, c) {
        c = c.l(a.g);
        b.pb && (c.pvc = Md(a.g));
        0 <= b.Ya && (c.r = b.Ya, Lt(a, b, c))
    }
    var bK = class {
        constructor(a) {
            this.g = a
        }
    };
    const cK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function dK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Ty("ama", b, .01)
    }

    function eK(a) {
        const b = {};
        kd(cK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function fK(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function gK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function hK(a, b) {
        a = Th(a, 2, y());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function iK(a, b) {
        a = gK(fK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = md(a),
            d = jK(a);
        return b.find(e => {
            const f = eh(e, Ps, 7) ? Bf($g(z(e, Ps, 7), 1)) : Bf($g(e, 1));
            e = eh(e, Ps, 7) ? Lh(z(e, Ps, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function jK(a) {
        const b = {};
        for (;;) {
            b[md(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function kK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            dK(a, {
                lserr: 1
            })
        }
    };
    var mK = (a, b, c, d, e, f, g = null, h = null) => {
            lK(a, new bK(a), b, c, d, e, f, g, h)
        },
        lK = (a, b, c, d, e, f, g, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = HC(d, e);
                    try {
                        const m = new nK(a, b, c, d, e, l, f, g, h, k);
                        px(990, () => oK(m), a)
                    } catch (m) {
                        Dk() && Ek(15, [m]), aK(b, Ft, gI(jI(iI((new kI(0)).Mc(c), d), l).xa(1), m)), lF(aF(), mn(new un, Fm(1)))
                    }
                } else aK(b, Ft, (new kI(0)).Mc(c).xa(8)), lF(aF(), mn(new un, Fm(8)));
            else aK(b, Ft, (new kI(0)).xa(9)), lF(aF(), mn(new un, Fm(9)))
        };

    function oK(a) {
        a.H.forEach(b => {
            switch (b) {
                case 0:
                    px(991, () => pK(a), a.g);
                    break;
                case 1:
                    px(1073, () => {
                        AC(new GC(a.g, a.C, a.j, a.A, a.i.ca))
                    }, a.g);
                    break;
                case 2:
                    qK(a);
                    break;
                case 7:
                    px(1203, () => {
                        var c = z(a.j, qt, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var g = z(f, pt, 1) ? .g() ? ? [];
                            c = new WG(e, c, Md(t), g);
                            if (g = z(f, pt, 1))
                                if (f = z(f, ot, 2)) {
                                    Wr(d, EG);
                                    const l = new Zq;
                                    var h = d.innerWidth;
                                    var k = .375 * h;
                                    h = new UC(k, h - k);
                                    k = d.innerWidth;
                                    k = aq(d) >= 900 ? .2 * k : .5 * k;
                                    (new RG(d, e, g, f, new xG(d, h, k, l, new hG(l)), c)).run()
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g);
                    break;
                case 6:
                    px(1270, () => a.runAutoGames(), a.g)
            }
        })
    }

    function pK(a) {
        var b = W(tu) ? void 0 : a.i.ak;
        let c = null;
        c = W(tu) ? Fy(a.g) : Dy(a.g, b);
        if (a.i.ca && eh(a.i.ca, Os, 10)) {
            var d = ih(a.i.ca.g(), 1);
            d !== null && d !== void 0 && (c = uy(a.g, d, b));
            W(Ku) && a.i.ca.g() ? .g() === 2 && (c = Cy(a.i.ca.g(), c))
        }
        eh(a.j, Ls, 26) && (c = Iy(c, z(a.j, Ls, 26), a.g));
        c = Ky(c, a.g);
        b = a.i.ca ? Th(a.i.ca, 6, y(ef)) : [];
        d = a.i.ca ? Bh(a.i.ca, Us, 5, y(ef)) : [];
        const e = a.i.ca ? Th(a.i.ca, 2, y(ef)) : [],
            f = px(993, () => {
                var g = a.j,
                    h = Bh(g, mt, 1, y(ef)),
                    k = a.i.ca && hK(a.i.ca, 1) ? "text_image" : "text",
                    l = new EJ,
                    m = Fx(h, a.g, {
                        wi: l,
                        wj: new Dx(k)
                    });
                h.length !=
                    m.length && a.F.push(13);
                m = m.concat(JJ(new KJ(a.g, l)));
                h = W(Hu);
                l = z(g, yt, 24) ? .j() ? .g() ? .g() || !1;
                if (h || l) h = GJ(new HJ(a.g)), l = Hp(GI), m = m.concat(h), l.R = !0, l.B = h.length, a.I === "n" && (a.I = z(g, yt, 24) ? .g() ? .length ? "o" : "p");
                h = W(Ku) && a.i.ca.g() ? .g() === 2 && a.i.ca.g() ? .j();
                h = W(ru) || h;
                a: {
                    if (l = g.getMetadata())
                        for (n of l.g())
                            if (eh(n, ss, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.g, (l = g.getMetadata()) ? (h = iy(l.g(), h), k = XG(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.g, (l = g.getMetadata()) ? (h = hy(l.g(), h), k = XG(g, k, h)) :
                    k = [], k = n.call(m, k));
                m = k;
                g = z(g, yt, 24);
                return new UI(m, a.g, g)
            }, a.g);
        a.l = new uJ(f, a.A, a.g, {
            ib: c,
            fj: a.R,
            qc: a.i.qc,
            Ri: b,
            me: d
        }, rK(a), e, W(Gu));
        qJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.qb() && (ax(a.g), Hp(GI).C = !0, a.I = "f");
        a.B = xJ(e, a.l, a.g);
        px(992, () => DJ(a.B), a.g).then(px(994, () => a.sa.bind(a), a.g), a.na.bind(a))
    }

    function qK(a) {
        const b = z(a.j, nt, 18);
        b && (new vF(a.g, new fG(a.g, a.A), b, new TA(a.g), Bh(a.j, mt, 1, y(ef)))).run()
    }

    function rK(a) {
        const b = W(Ju);
        if (!a.j.g()) return {
            Hh: b,
            Bg: !1,
            Ch: !1,
            Zj: 0,
            rh: 0,
            hg: sK(a),
            df: a.L
        };
        const c = a.j.g();
        return {
            Hh: b || J(c, 14, !1),
            Bg: J(c, 5, !1),
            Ch: J(c, 6, !1),
            Zj: Ph(c, 8, 0),
            rh: Lh(c, 10),
            hg: sK(a),
            df: a.L
        }
    }

    function sK(a) {
        return W(Au) || W(Ku) && a.i.ca ? .g() ? .g() === 2 ? !1 : a.i.ca && eh(a.i.ca, Os, 10) ? (ih(a.i.ca.g(), 1) || 0) >= .5 : !0
    }

    function tK(a, b) {
        var c = fI(fI(new kI(b.Ta), b.errors), a.F),
            d = b.wb;
        for (let g = 0; g < d.length; g++) a: {
            var e = c,
                f = d[g];
            for (let h = 0; h < e.C.length; h++)
                if (e.C[h] == f) break a;e.C.push(f)
        }
        c.g.pp = b.Vd;
        c.g.ppp = b.Wd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.jc;
        c.g.eatfAbg = b.kc;
        c.g.reatf = b.Fb;
        c = jI(iI(c.H(a.B.l.slice(0)), a.j), a.H).Mc(a.A);
        if (d = b.Fa) c.g.as_count = d.eg, c.g.d_count = d.zg, c.g.ng_count = d.ih, c.g.am_count = d.jg, c.g.atf_count = d.fg, c.g.mdns = lI(d.Zg), c.g.alldns = lI(d.gg);
        c = c.I(b.Ob).Fh(b.pd);
        d = b.Ff;
        d != null && (c.g.pgh =
            d);
        c.g.abl = b.Lg;
        c.g.rr = a.I;
        b.exception !== void 0 && gI(c, b.exception).xa(1);
        return c
    }

    function uK(a, b) {
        var c = tK(a, b);
        aK(a.C, b.errors.length > 0 || a.F.length > 0 || b.exception !== void 0 ? Ft : Et, c);
        if (z(a.j, yt, 24)) {
            a.l.i.g.g ? .F();
            b = qJ(a.l);
            const d = Hp(GI);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.I = !0);
            d.W = !!b ? .optimization ? .availableAbg;
            b = Hp(GI);
            c = new xI(c);
            b.A ? (c.i.sl = nI(b.A ? ? []), c.i.daaos = nI(b.H ? ? []), c.i.ab = oI(b.I), c.i.rr = oI(b.R), c.i.oab = oI(b.F), b.j != null && (c.i.sab = oI(b.j)), b.C && (c.i.fb = oI(b.C)), c.i.ls = oI(b.W), pI(c, b.i.ob()), b.B != null && (c.i.rp = oI(b.B)),
                b.l != null && (c.i.expl = oI(b.l)), FI(b, c)) : c.errors.push("irr");
            aK(a.C, Ht, c)
        }
        c = a.l ? .Ra();
        W(Gu) && c != null && (c = new Map([...c.j.map.entries()].map(pG)), b = new MJ, LJ(b, c), aK(a.C, Jt, b))
    }

    function vK(a, b) {
        const c = aF();
        if (c.g) {
            var d = new un,
                e = b.wb.filter(g => g !== null),
                f = a.F.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            qn(on(tn(sn(rn(pn(jn(ln(nn(kn(d, a.B.l.slice(0).map(g => {
                var h = new Em;
                return gi(h, 1, g)
            })), e.map(g => {
                var h = new Hm;
                return gi(h, 1, g)
            })), f.map(g => Fm(g))), z(a.j, Ys, 23) ? .g()), b.Ta).I(b.Ob), b.Fb), b.jc), b.kc), a.H.map(g => g.toString())), Om(Nm(Mm(Lm(Km(Jm(Im(new Pm, b.Fa ? .eg), b.Fa ? .zg), b.Fa ? .ih), b.Fa ? .jg), b.Fa ? .fg), b.Fa ? .Zg), b.Fa ? .gg));
            if (b.pd)
                for (let g of Rq(b.pd)) {
                    e = new qh;
                    for (let h of b.pd.get(g)) Tm(e, Rm(Qm(new Sm, h.jb), h.Qh));
                    ph(d).set(g.toString(), e)
                }
            z(a.j, yt, 24) && gn(d);
            lF(c, d)
        }
    }

    function wK(a, b, c) {
        {
            var d = qJ(a.l),
                e = b.g;
            const f = e.g,
                g = e.Vd;
            let h = e.Ta,
                k = e.Wd,
                l = e.errors.slice(),
                m = e.wb.slice(),
                n = b.exception;
            const p = TE(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.B.j && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Ta: h,
                Vd: g,
                Wd: k,
                Ob: f,
                errors: e.errors.slice(),
                wb: m,
                exception: n,
                Fb: c,
                jc: !!d.eatf,
                kc: !!d.eatfAbg,
                Lg: p
            }) : (m.push(12), a.B.j && m.push(13), c = {
                Ta: h,
                Vd: g,
                Wd: k,
                Ob: f,
                errors: l,
                wb: m,
                exception: n,
                Fb: c,
                jc: !1,
                kc: !1,
                Lg: p
            })
        }
        c.Fa = mJ(a.l.g);
        if (b = b.g.i) c.pd = b;
        c.Ff = fq(a.g).scrollHeight;
        if (Dk() || z(a.j, Xs, 25) ? .j()) {
            d = cs(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Rq(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.I.g(f.g),
                    position: f.j(),
                    clearBoth: f.F,
                    locationType: f.Ib,
                    placed: f.l,
                    placementProto: f.i ? ki(f.i) : null,
                    articleStructure: f.A ? ki(f.A) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Ek(14, [{
                placementIdentifiers: b
            }, a.l.I, c.Fa])
        }
        return c
    }

    function xK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Ob;
        c.numAutoAdsPlaced = b.Ta;
        c.hasAtfAd = b.Fb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = OJ(a.g, a.l, {
            rd: -1,
            tc: -1,
            Cc: -1,
            Qg: !0,
            ig: !0
        }), a.g != null ? (c.placementPositionDiffs = $J(a.getValue()), b = ZJ(a.getValue()), a = new cH, a = H(a, 2, dH, b), c.placementPositionDiffsReport = ji(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new cH, a = th(a, 1, dH, Wf(b)), c.placementPositionDiffsReport = ji(a)))
    }

    function yK(a, b) {
        uK(a, {
            Ta: 0,
            Ob: void 0,
            errors: [],
            wb: [],
            exception: b,
            Fb: void 0,
            jc: void 0,
            kc: void 0,
            Fa: void 0
        });
        vK(a, {
            Ta: 0,
            Ob: void 0,
            errors: [],
            wb: [],
            exception: b,
            Fb: void 0,
            jc: void 0,
            kc: void 0,
            Fa: void 0
        })
    }
    class nK {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.H = f;
            this.R = k || null;
            this.F = [];
            this.L = l;
            this.Ra = g;
            this.W = h;
            this.I = "n"
        }
        runAutoGames() {
            const a = z(this.j, Zs, 32);
            a && this.W.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                config: a.i(),
                floatingToolbarManager: TD(this.g, z(this.j, ft, 33) ? .g() ? .i() ? ? null),
                oi: this.j.getMetadata() ? .g() ? ? [],
                Xa: Bh(this.j, mt, 1, y()) ? ? [],
                storage: this.Ra ? ? void 0
            })
        }
        sa(a) {
            try {
                const b = lJ(this.l.g) || void 0;
                Dt({
                    Te: b
                }, this.g);
                const c = wK(this, a, lJ(this.l.g));
                eh(this.j, Xs, 25) && Jh(z(this.j, Xs, 25), 1) && xK(this, c);
                uK(this, c);
                vK(this, c);
                Sy(753, () => {
                    if (W(uu) && this.l != null) {
                        var d = OJ(this.g, this.l, {
                                rd: X(Fu),
                                tc: X(Eu),
                                Cc: X(wu),
                                Qg: !0,
                                ig: !1
                            }),
                            e = Ub(c);
                        d.g != null ? (d = $J(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = tK(this, e);
                        aK(this.C, Gt, e)
                    }
                })()
            } catch (b) {
                yK(this, b)
            }
        }
        na(a) {
            yK(this, a)
        }
    };
    var zK = class extends O {},
        AK = Zj(zK);

    function BK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? is(() => AK(c)) : fs(null)
    };

    function CK(a) {
        this.g = a || {
            cookie: ""
        }
    }
    q = CK.prototype;
    q.isEnabled = function() {
        if (!t.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60
        });
        if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    q.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.sameSite, g = c.secure || !1, f = c.domain || void 0, e = c.path || void 0, d = c.maxAge);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h :
            "")
    };
    q.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = vb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        const d = this.get(a) !== void 0;
        this.set(a, "", {
            maxAge: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.g.cookie
    };
    q.ob = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = vb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
    };

    function DK(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }
    let EK;

    function FK(a) {
        return EK ? EK : a.origin === "null" ? EK = !1 : EK = GK(a)
    }

    function GK(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new CK(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60,
            sameSite: a.isSecureContext ? "none" : void 0,
            secure: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }

    function HK(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new CK({
            cookie: b
        })).get(a) || ""
    }

    function IK(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            sameSite: "none",
            secure: !0
        }), (new CK(d.document)).set(a, b, c))
    };

    function JK(a, b) {
        return $h(a, 5, b)
    }

    function KK(a, b) {
        return $h(a, 8, b)
    }

    function LK(a, b) {
        return $h(a, 12, b)
    }
    var MK = class extends O {
        constructor() {
            super()
        }
        l() {
            return I(this, 1) != null
        }
        j() {
            return I(this, 2) != null
        }
        A() {
            return J(this, 3)
        }
        g() {
            return J(this, 5)
        }
    };
    var PK = ({
        win: a,
        Ka: b,
        Og: c = !1,
        Pg: d = !1
    }) => NK({
        win: a,
        Ka: b,
        Og: c,
        Pg: d
    }) ? (b = JE(EE(), 24)) ? OK(a, JK(new MK, UF(b))) : new gs(null, Error("tcunav")) : OK(a, JK(new MK, !0));

    function NK({
        win: a,
        Ka: b,
        Og: c,
        Pg: d
    }) {
        if (!(d = !d && ZF(new cG(a)))) {
            if (c = !c) {
                if (b) {
                    a = BK(a);
                    if (a.isError()) Y.aa(806, a.i, void 0, void 0), a = !1;
                    else if ((a = a.getValue()) && Lh(a, 1) != null) b: switch (a = Lh(a, 1), a) {
                        case 1:
                            a = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                    } else a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function OK(a, b) {
        return (a = DK(b, a)) ? fs(a) : new gs(null, Error("unav"))
    };
    var QK = class extends O {};
    class RK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
        run() {
            const a = z(this.C, nt, 1);
            if (this.i) {
                var b = this.g;
                if (this.j && !wE(a)) {
                    var c = new zK;
                    c = gi(c, 1, 1)
                } else c = null;
                if (c) {
                    c = ji(c);
                    try {
                        b.localStorage.setItem("google_auto_fc_cmp_setting", c)
                    } catch (d) {}
                }
            }
            b = wE(a) && (this.j || this.A);
            a && b && (new vF(this.g, new fG(this.g, this.l), a, new TA(this.g))).run()
        }
    };
    var SK = class extends O {
        constructor() {
            super()
        }
        getName() {
            return Qh(this, 1)
        }
        getVersion() {
            return K(this, 3)
        }
    };
    var TK = [0, Uj, -1, Lj];
    var UK = class extends O {
        constructor() {
            super()
        }
        lj() {
            return Qh(this, 3)
        }
    };
    const VK = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var WK = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return Mh(this, 2)
        }
    };

    function XK(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function YK(a) {
        return $d(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function ZK(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function $K(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function aL(a, b) {
        a = YK(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function bL(a) {
        var b = YK(a),
            c = ZK(b.slice(0, 6));
        a = ZK(b.slice(6, 12));
        var d = new WK;
        c = bi(d, 1, c);
        a = bi(c, 2, a);
        b = b.slice(12);
        c = ZK(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = ZK(e[0]) === 0;
            e = e.slice(1);
            var g = cL(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = $K(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = cL(e, b);
                g = $K(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return rh(a, 3, d, yf)
    }

    function cL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var dL = class extends O {
        constructor() {
            super()
        }
    };
    var eL = class extends O {
        constructor() {
            super()
        }
    };
    var fL = class extends O {
        getVersion() {
            return Mh(this, 1)
        }
    };
    var gL = class extends O {
        constructor() {
            super()
        }
    };

    function hL(a) {
        var b = new iL;
        return C(b, 1, a)
    }
    var iL = class extends O {
        constructor() {
            super()
        }
    };
    const jL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        kL = 6 + jL.reduce((a, b) => a + b);

    function lL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USCA section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 1 sub-section but got ${b.length-1} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = aL(a, kL),
            d = ZK(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < jL.length; f++) {
            const g =
                jL[f];
            a.push(ZK(c.slice(e, e + g)));
            e += g
        }
        c = new fL;
        d = bi(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new eL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        e = a.shift();
        c = N(c, 9, e);
        d = C(d, 7, c);
        c = new dL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        d = C(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        c = a.shift();
        d = N(d, 11, c);
        a = a.shift();
        a = N(d, 12, a);
        if (b.length === 1) b = hL(a);
        else {
            a = hL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = aL(b, 3);
            b = ZK(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = ZK(d.charAt(2));
            c = new gL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = C(a, 2, b)
        }
        return b
    };
    var mL = class extends O {
        constructor() {
            super()
        }
    };
    var nL = class extends O {
        getVersion() {
            return Mh(this, 1)
        }
    };
    var oL = class extends O {
        constructor() {
            super()
        }
    };

    function pL(a) {
        var b = new qL;
        return C(b, 1, a)
    }
    var qL = class extends O {
        constructor() {
            super()
        }
    };
    const rL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        sL = 6 + rL.reduce((a, b) => a + b);

    function tL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USCO section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = aL(a, sL),
            d = ZK(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < rL.length; f++) {
            const g =
                rL[f];
            a.push(ZK(c.slice(e, e + g)));
            e += g
        }
        c = new nL;
        d = bi(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new mL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        d = C(d, 7, c);
        c = a.shift();
        d = N(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        a = a.shift();
        a = N(d, 11, a);
        if (b.length === 1) b = pL(a);
        else {
            a = pL(a);
            b = b[1];
            if (b.length ===
                0) throw Error("Cannot decode empty GPC segment string.");
            d = aL(b, 3);
            b = ZK(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = ZK(d.charAt(2));
            c = new oL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = C(a, 2, b)
        }
        return b
    };
    var uL = class extends O {
        constructor() {
            super()
        }
    };
    var vL = class extends O {
        constructor() {
            super()
        }
    };
    var wL = class extends O {
        getVersion() {
            return Mh(this, 1)
        }
    };
    var xL = class extends O {
        constructor() {
            super()
        }
    };

    function yL(a) {
        var b = new zL;
        return C(b, 1, a)
    }
    var zL = class extends O {
        constructor() {
            super()
        }
    };
    const AL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        BL = 6 + AL.reduce((a, b) => a + b);

    function CL(a) {
        if (a.length === 0) throw Error("Cannot decode empty usct section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = aL(a, BL),
            d = ZK(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < AL.length; f++) {
            const g =
                AL[f];
            a.push(ZK(c.slice(e, e + g)));
            e += g
        }
        c = new wL;
        d = bi(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new vL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        d = C(d, 7, c);
        c = new uL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        d = C(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        a = a.shift();
        a = N(d, 11, a);
        if (b.length === 1) b = yL(a);
        else {
            a = yL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = aL(b, 3);
            b = ZK(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = ZK(d.charAt(2));
            c = new xL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = C(a, 2, b)
        }
        return b
    };
    var DL = class extends O {
        constructor() {
            super()
        }
    };
    var EL = class extends O {
        constructor() {
            super()
        }
    };
    var FL = class extends O {
        getVersion() {
            return Mh(this, 1)
        }
    };
    var GL = class extends O {
        constructor() {
            super()
        }
    };

    function HL(a) {
        var b = new IL;
        return C(b, 1, a)
    }
    var IL = class extends O {
        constructor() {
            super()
        }
    };
    const JL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        KL = 6 + JL.reduce((a, b) => a + b);

    function LL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USNat section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = aL(a, KL),
            d = ZK(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < JL.length; f++) {
            const g =
                JL[f];
            a.push(ZK(c.slice(e, e + g)));
            e += g
        }
        c = new FL;
        d = bi(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = a.shift();
        d = N(d, 7, c);
        c = a.shift();
        d = N(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        c = new EL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        e = a.shift();
        c = N(c, 9, e);
        e = a.shift();
        c = N(c,
            10, e);
        e = a.shift();
        c = N(c, 11, e);
        e = a.shift();
        c = N(c, 12, e);
        d = C(d, 11, c);
        c = new DL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        d = C(d, 12, c);
        c = a.shift();
        d = N(d, 13, c);
        c = a.shift();
        d = N(d, 14, c);
        c = a.shift();
        d = N(d, 15, c);
        a = a.shift();
        a = N(d, 16, a);
        if (b.length === 1) b = HL(a);
        else {
            a = HL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = aL(b, 3);
            b = ZK(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = ZK(d.charAt(2));
            c = new GL;
            b = N(c,
                2, b);
            b = M(b, 1, !!d);
            b = C(a, 2, b)
        }
        return b
    };
    var ML = class extends O {
        constructor() {
            super()
        }
    };
    var NL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return Mh(this, 1)
        }
    };
    const OL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        PL = 6 + OL.reduce((a, b) => a + b);

    function QL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USVA section string.");
        var b = aL(a, PL),
            c = ZK(b.slice(0, 6));
        b = b.slice(6);
        if (c !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${c} - only version 1 is supported.`);
        var d = 0;
        a = [];
        for (let e = 0; e < OL.length; e++) {
            const f = OL[e];
            a.push(ZK(b.slice(d, d + f)));
            d += f
        }
        b = new NL;
        c = bi(b, 1, c);
        b = a.shift();
        c = N(c, 2, b);
        b = a.shift();
        c = N(c, 3, b);
        b = a.shift();
        c = N(c, 4, b);
        b = a.shift();
        c = N(c, 5, b);
        b = a.shift();
        c = N(c, 6, b);
        b = new ML;
        d = a.shift();
        b = N(b, 1, d);
        d = a.shift();
        b = N(b, 2, d);
        d = a.shift();
        b = N(b, 3, d);
        d = a.shift();
        b = N(b, 4, d);
        d = a.shift();
        b = N(b, 5, d);
        d = a.shift();
        b = N(b, 6, d);
        d = a.shift();
        b = N(b, 7, d);
        d = a.shift();
        b = N(b, 8, d);
        c = C(c, 7, b);
        b = a.shift();
        c = N(c, 8, b);
        b = a.shift();
        c = N(c, 9, b);
        b = a.shift();
        c = N(c, 10, b);
        a = a.shift();
        return N(c, 11, a)
    };
    var RL = class extends O {};

    function SL(a, b) {
        return rh(a, 1, b, wf)
    }

    function TL(a, b) {
        return rh(a, 2, b, wf)
    }

    function UL(a, b) {
        return rh(a, 3, b, yf)
    }

    function VL(a, b) {
        rh(a, 4, b, yf)
    }
    var WL = class extends O {};

    function XL(a, b) {
        return di(a, 1, b)
    }

    function YL(a) {
        var b = Number; {
            var c = $g(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : vf(c) ? d === "string" ? Df(c) : Ef(c) : void 0
        }
        b = b(c ? ? "0");
        a = Mh(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var ZL = class extends O {};

    function $L(a, b) {
        return bi(a, 1, b)
    }

    function aM(a, b) {
        return C(a, 2, b)
    }

    function bM(a, b) {
        return C(a, 3, b)
    }

    function cM(a, b) {
        return bi(a, 4, b)
    }

    function dM(a, b) {
        return bi(a, 5, b)
    }

    function eM(a, b) {
        return bi(a, 6, b)
    }

    function fM(a, b) {
        return fi(a, 7, b)
    }

    function gM(a, b) {
        return bi(a, 8, b)
    }

    function hM(a, b) {
        return bi(a, 9, b)
    }

    function iM(a, b) {
        return M(a, 10, b)
    }

    function jM(a, b) {
        return M(a, 11, b)
    }

    function kM(a, b) {
        return rh(a, 12, b, wf)
    }

    function lM(a, b) {
        return rh(a, 13, b, wf)
    }

    function mM(a, b) {
        return rh(a, 14, b, wf)
    }

    function nM(a, b) {
        return M(a, 15, b)
    }

    function oM(a, b) {
        return fi(a, 16, b)
    }

    function pM(a, b) {
        return rh(a, 17, b, yf)
    }

    function qM(a, b) {
        return rh(a, 18, b, yf)
    }

    function rM(a, b) {
        return Ch(a, 19, b)
    }
    var sM = class extends O {
        getVersion() {
            return Mh(this, 1)
        }
    };
    var tM = class extends O {
        constructor() {
            super()
        }
    };
    var uM = "a".charCodeAt(),
        vM = Tb(Sp),
        wM = Tb(Tp);

    function xM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function yM(a) {
        a = xM(a, 36);
        var b = XL(new ZL, Math.floor(a / 10));
        return bi(b, 2, a % 10 * 1E8)
    }

    function zM(a) {
        return String.fromCharCode(uM + xM(a, 6)) + String.fromCharCode(uM + xM(a, 6))
    }

    function AM(a) {
        let b = xM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!xM(a, 1) === !0,
                e = xM(a, 16);
            if (d)
                for (d = xM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function BM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (xM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function CM(a) {
        const b = xM(a, 16);
        return !!xM(a, 1) === !0 ? (a = AM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : BM(a, b)
    }

    function DM(a) {
        const b = [];
        let c = xM(a, 12);
        for (; c--;) {
            const k = xM(a, 6);
            var d = xM(a, 2),
                e = AM(a),
                f = b,
                g = f.push;
            var h = new RL;
            h = N(h, 1, k);
            d = N(h, 2, d);
            e = rh(d, 3, e, yf);
            g.call(f, e)
        }
        return b
    }
    class EM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var FM = a => {
        try {
            const b = $d(a).map(f => f.toString(2).padStart(8, "0")).join(""),
                c = new EM(b);
            if (xM(c, 3) !== 3) return null;
            const d = TL(SL(new WL, BM(c, 24, vM)), BM(c, 24, vM)),
                e = xM(c, 6);
            e !== 0 && VL(UL(d, BM(c, e)), BM(c, e));
            return d
        } catch (b) {
            return null
        }
    };
    var GM = a => {
        try {
            const b = $d(a).map(d => d.toString(2).padStart(8, "0")).join(""),
                c = new EM(b);
            return rM(qM(pM(oM(nM(mM(lM(kM(jM(iM(hM(gM(fM(eM(dM(cM(bM(aM($L(new sM, xM(c, 6)), yM(c)), yM(c)), xM(c, 12)), xM(c, 12)), xM(c, 6)), zM(c)), xM(c, 12)), xM(c, 6)), !!xM(c, 1)), !!xM(c, 1)), BM(c, 12, wM)), BM(c, 24, vM)), BM(c, 24, vM)), !!xM(c, 1)), zM(c)), CM(c)), CM(c)), DM(c))
        } catch (b) {
            return null
        }
    };
    var IM = a => {
        if (!a) return null;
        a = a.split(".");
        if (a.length > 4) return null;
        var b = GM(a[0]);
        if (!b) return null;
        var c = new tM;
        b = C(c, 1, b);
        a.shift();
        for (const d of a) switch (HM(d)) {
            case 1:
            case 2:
                break;
            case 3:
                a = FM(d);
                if (!a) return null;
                C(b, 2, a);
                break;
            default:
                return null
        }
        return b
    };
    const HM = a => {
        try {
            const b = $d(a).map(c => c.toString(2).padStart(8, "0")).join("");
            return xM(new EM(b), 3)
        } catch (b) {
            return -1
        }
    };
    const JM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var LM = (a, b) => {
        try {
            var c = $d(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new EM(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = b;
            d.skip(78);
            c.cmpId = xM(d, 12);
            c.cmpVersion = xM(d, 12);
            d.skip(30);
            c.tcfPolicyVersion = xM(d, 6);
            c.isServiceSpecific = !!xM(d, 1);
            c.useNonStandardStacks = !!xM(d, 1);
            c.specialFeatureOptins = KM(BM(d, 12, wM), wM);
            c.purpose = {
                consents: KM(BM(d, 24, vM), vM),
                legitimateInterests: KM(BM(d, 24, vM), vM)
            };
            c.purposeOneTreatment = !!xM(d, 1);
            c.publisherCC = zM(d);
            c.vendor = {
                consents: KM(CM(d), null),
                legitimateInterests: KM(CM(d), null)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const KM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function yp(a, ...b) {
        try {
            const c = encodeURIComponent(Xd(gm(b, a.i)));
            a.j(`${"https://pagead2.googlesyndication.com/pagead/ping"}?e=${4}&d=${c}`)
        } catch (c) {
            fm(c, a.i)
        }
    }
    var MM = class extends zp {
        constructor(a) {
            super(7, AE());
            this.j = a
        }
    };
    var NM = class extends O {
        g() {
            return I(this, 2) != null
        }
    };
    var OM = class extends O {
        l() {
            return I(this, 2) != null
        }
    };
    var PM = class extends O {
        j() {
            return I(this, 1) != null
        }
    };
    var QM = Zj(class extends O {});

    function RM(a) {
        a = SM(a);
        try {
            var b = a ? QM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, PM, 4) || null : null
    }

    function SM(a) {
        a = (new CK(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function TM(a) {
        a.__tcfapiPostMessageReady || UM(new VM(a))
    }

    function UM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var VM = class {
        constructor(a) {
            this.win = a
        }
    };

    function WM(a) {
        a.__uspapiPostMessageReady || XM(new YM(a))
    }

    function XM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var YM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var ZM = class extends O {};
    var $M = Zj(class extends O {
        g() {
            return I(this, 1) != null
        }
    });

    function aN(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 4));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + r + p + "N"
        }

        function g(p) {
            if (p.length < 18) return null;
            var r = k(p.slice(0, 8));
            r = l(r);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + r + p + "N"
        }

        function h(p) {
            if (p.length <
                10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function k(p) {
            const r = [];
            let w = 0;
            for (let D = 0; D < p.length / 2; D++) r.push(ZK(p.slice(w, w + 2))), w += 2;
            return r
        }

        function l(p) {
            return p.every(r => r === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = YK(a[0]);
        const n = ZK(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function bN(a) {
        !a.l || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", EF(a.win, "__uspapiLocator"), Ga("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = a.i && !J(a.j, 3), d({
                version: 1,
                uspString: b ? "1---" : a.l
            }, !0))
        }, a.win), WM(a.win))
    }

    function cN(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", EF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], Ga("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else {
                    var f = a.win.__tcfapiEventListeners;
                    c = a.i && !J(a.j, 1);
                    switch (b) {
                        case "ping":
                            d({
                                gdprApplies: !c,
                                cmpLoaded: !0,
                                cmpStatus: "loaded",
                                displayStatus: "disabled",
                                apiVersion: "2.2",
                                cmpVersion: 2,
                                cmpId: 300
                            });
                            break;
                        case "addEventListener":
                            e =
                                f.push(d);
                            b = !c;
                            --e;
                            a.tcString ? (b = LM(a.tcString, b), b.addtlConsent = a.g != null ? a.g : void 0, b.cmpStatus = "loaded", b.eventStatus = "tcloaded", e != null && (b.listenerId = e)) : b = null;
                            d(b, !0);
                            break;
                        case "removeEventListener":
                            e !== void 0 && f[e] ? (f[e] = null, d(!0)) : d(!1);
                            break;
                        case "getInAppTCData":
                        case "getVendorList":
                            d(null, !1);
                            break;
                        case "getTCData":
                            d(null, !1)
                    }
                }
        }, a.win), TM(a.win))
    }

    function dN(a, b) {
        if (!b ? .g() || K(b, 1).length === 0 || Bh(b, ZM, 2, y()).length === 0) return null;
        const c = K(b, 1);
        let d;
        try {
            var e = bL(c.split("~")[0]);
            d = XK(c)
        } catch (f) {
            return null
        }
        b = Bh(b, ZM, 2, y()).reduce((f, g) => Nh(eN(f), 1) > Nh(eN(g), 1) ? f : g);
        e = Rh(e, 3).indexOf(Mh(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: aN(d[e], Mh(b, 1), a.A),
            Ne: YL(eN(b))
        }
    }

    function fN(a) {
        a = a.find(b => b && Qh(b, 1) === 13);
        if (a ? .g()) try {
            return $M(K(a, 2))
        } catch (b) {}
        return null
    }

    function eN(a) {
        return eh(a, ZL, 2) ? z(a, ZL, 2) : XL(new ZL, 0)
    }
    var gN = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.A = c;
            this.i = d;
            b = SM(this.win.document);
            try {
                var e = b ? QM(b) : null
            } catch (f) {
                e = null
            }(b = e) ? (e = z(b, OM, 5) || null, b = Bh(b, NM, 7, y()), b = fN(b ? ? []), e = {
                pg: e,
                Kg: b
            }) : e = {
                pg: null,
                Kg: null
            };
            b = e;
            e = dN(this, b.Kg);
            b = b.pg;
            b ? .l() && K(b, 2).length !== 0 ? (c = eh(b, ZL, 1) ? z(b, ZL, 1) : XL(new ZL, 0), b = {
                uspString: K(b, 2),
                Ne: YL(c)
            }) : b = null;
            this.l = b && e ? e.Ne > b.Ne ? e.uspString : b.uspString : b ? b.uspString : e ? e.uspString : null;
            this.tcString = (e = RM(a.document)) && e.j() ? K(e, 1) : null;
            this.g = (a = RM(a.document)) &&
                I(a, 2) != null ? K(a, 2) : null
        }
    };

    function hN() {
        const a = xb();
        return a ? Ra("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => wb(a, b)) || wb(a, "OMI/") && !wb(a, "XiaoMi/") ? !0 : wb(a, "Presto") && wb(a, "Linux") && !wb(a, "X11") && !wb(a, "Android") && !wb(a, "Mobi") : !1
    };

    function iN(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var jN = (a, b) => {
        a = iN(a);
        b = iN(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var kN = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            rb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = sb(a, "message", e));
                return g
            }
        },
        lN = (a, b, c, d = null) => {
            const e = kN(a, b, hb(c, () => e()), d);
            return e
        },
        mN = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && mN(a[f], b, c, d, --e)
        };

    function nN(a, b, c, d) {
        return kN(a, "fullscreen", d.Ca(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class oN {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    async function pN(a) {
        return a.l.promise
    }
    async function qN(a) {
        return a.i.promise
    }
    async function rN(a) {
        return a.j.promise
    }

    function sN(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.A.rk;
        b.version = a.A.version;
        am(a.G, "fullscreen_tag", b, !1, .25)
    }
    class tN extends S {
        constructor(a, b, c) {
            var d = Y,
                e = Py,
                f = {
                    rk: 2,
                    version: AE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.Me = c;
            this.za = d;
            this.G = e;
            this.A = f;
            this.state = 1;
            this.qem = null;
            this.l = new oN;
            this.i = new oN;
            this.j = new oN
        }
        M() {
            const a = nN(this.pubWin, this.Me, b => {
                if (b.eventType === "adError") this.j.resolve(), this.state = 4;
                else if (b.eventType === "adReady" && this.state === 1) this.qem = b.qem, b.slotType !== this.slotType && (sN(this, {
                        cur_st: this.state,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }), this.state = 4), this.l.resolve(), this.state =
                    2;
                else if (b.eventType === "adClosed" && this.state === 2) this.i.resolve(b.result), this.state = 3;
                else if (b.eventType !== "adClosed" || this.state !== 3) sN(this, {
                    cur_st: this.state,
                    evt: b.eventType
                }), this.state = 4
            }, this.za);
            Eq(this, a)
        }
    };
    var uN = Promise;
    class vN {
        constructor(a) {
            this.i = a
        }
        send(a, b, c) {
            this.i.then(d => {
                d.send(a, b, c)
            })
        }
        g(a, b) {
            return this.i.then(c => c.g(a, b))
        }
    };
    class wN {
        constructor(a) {
            this.data = a
        }
    };

    function xN(a, b) {
        yN(a, b);
        return new zN(a)
    }
    class zN {
        constructor(a) {
            this.i = a
        }
        send(a, b, c = []) {
            const d = new MessageChannel;
            yN(d.port1, b);
            this.i.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new uN(c => {
                this.send(a, c, b)
            })
        }
    }

    function yN(a, b) {
        b && (a.onmessage = c => {
            b(new wN(c.data, xN(c.ports[0])))
        })
    };
    var AN = class {
        constructor(a) {
            this.g = a
        }
    };
    const BN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var DN = ({
        destination: a,
        Na: b,
        origin: c,
        Fe: d = "ZNWN1d",
        onMessage: e,
        kh: f
    }) => CN({
        destination: a,
        mj: () => b.contentWindow,
        Tj: c instanceof AN ? c : typeof c === "function" ? new AN(c) : new AN(BN(c)),
        Fe: d,
        onMessage: e,
        kh: f
    });
    const CN = ({
        destination: a,
        mj: b,
        Tj: c,
        token: d,
        Fe: e,
        onMessage: f,
        kh: g
    }) => new vN(new uN((h, k) => {
        const l = m => {
            m.source && m.source === b() && c.g(m.origin) && (m.data.n || m.data) === e && (a.removeEventListener("message", l, !1), d && m.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${m.data.t}.`)) : (h(xN(m.ports[0], f)), g && g(m)))
        };
        a.addEventListener("message", l, !1)
    }));
    var EN = Xj(xm);
    var FN = Xj(ym);
    var GN = Xj(Am);
    var HN = Xj(wm);
    var IN = Xj(zm);

    function JN() {
        const {
            promise: a,
            resolve: b
        } = new oN;
        return {
            promise: a,
            resolve: b
        }
    };

    function KN(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = JN();
        b[a] = d;
        c();
        return d
    }

    function LN(a, b, c) {
        return KN(a, b, () => {
            gd(b.document, c)
        }).promise
    };
    var MN = class {
        constructor(a) {
            this.Xb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            config: c,
            floatingToolbarManager: d,
            oi: e,
            Xa: f,
            storage: g
        }) {
            Uy(1116, LN(12, a, this.Xb).then(h => {
                h.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedConfig: ji(c),
                    floatingToolbarManager: d,
                    serializedArticleStructures: e.map(k => ji(k)),
                    serializedPlacements: f.map(k => ji(k)),
                    storage: g
                })
            }))
        }
    };
    var NN = {
            Al: "google_ads_preview",
            Zl: "google_mc_lab",
            pm: "google_anchor_debug",
            om: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Lm: "google_scr_debug",
            Om: "google_ia_debug_allow_onclick",
            ln: "googleads",
            Zh: "google_pedestal_debug",
            Hn: "google_responsive_slot_preview",
            Gn: "google_responsive_dummy_ad"
        },
        ON = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var PN = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function QN(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = RN(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function RN(a) {
        let b = "";
        kd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function SN() {
        var a = t.location;
        let b = !1;
        kd(NN, c => {
            QN(a, c) && (b = !0)
        });
        return b
    }

    function TN(a, b) {
        switch (a) {
            case 1:
                return QN(b, "google_ia_debug");
            case 2:
                return QN(b, "google_bottom_anchor_debug");
            case 3:
                return QN(b, "google_anchor_debug") || QN(b, "googleads")
        }
    };

    function UN(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function VN(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.i = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var WN = class {
            constructor() {
                this.j = new Date(Date.now());
                this.i = this.g = null;
                this.properties = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.properties[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.j,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? md(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.properties[4] = {
                    [15]: () => {
                        var a = Number(this.i || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        XN;
    var YN = class extends O {
        g() {
            return J(this, 10)
        }
    };
    var ZN = class extends O {
        g() {
            return Sh(this, 1, y())
        }
        j() {
            return K(this, 4)
        }
    };
    var yh = class extends O {};
    var $N = class extends O {},
        aO = [13, 14];
    let bO = void 0;

    function cO() {
        me(bO, pe);
        return bO
    };

    function dO(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Qb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function eO(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function fO(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function gO(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function hO(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    }

    function iO(a, b, c = b.document) {
        return !!(a && "sharedStorage" in b && b.sharedStorage && gO("shared-storage", c))
    };

    function jO(a = jd()) {
        return b => md(`${b} + ${a}`) % 1E3
    };

    function kO(a, b) {
        a.g = Ip(14, b, () => {})
    }
    class lO {
        constructor() {
            this.g = () => {}
        }
    }

    function mO(a) {
        Hp(lO).g(a)
    };

    function nO(a = eO()) {
        Jp(Hp(Kp), a);
        oO(a);
        kO(Hp(lO), a);
        Hp(Gw).i()
    }

    function oO(a) {
        const b = Hp(Gw);
        b.j = (c, d) => Ip(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => Ip(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => Ip(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Ip(8, a, () => [])(c, d, 1);
        b.l = (c, d) => Ip(17, a, () => [])(c, d, 1);
        b.i = () => {
            Ip(15, a, () => {})(1)
        }
    };

    function pO(a, b, c) {
        c ? (a = a.win, b = c.g() ? HK(b, a) : null) : b = null;
        return b
    }

    function qO(a, b, c, d) {
        if (d) {
            var e = Nh(c, 2) - Date.now() / 1E3;
            e = {
                maxAge: Math.max(e, 0),
                path: K(c, 3),
                domain: K(c, 4),
                secure: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && IK(b, c, e, a)
        }
    }

    function rO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && HK(b, d)));
        if (!d)
            for (const f of sO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && (new CK(e.document)).remove(d, "/", f)
            }
    }
    var tO = class {
        constructor(a) {
            this.win = a
        }
        isSupported(a) {
            return FK(this.win) ? !!a.g() : !1
        }
    };

    function sO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function uO(a, b, c) {
        var d = {
            [0]: jO(Md(b).toString())
        };
        if (c) {
            c = pO(new tO(b), "__gads", c) || "";
            XN || (XN = new WN);
            b = XN;
            VN(b, c);
            mO(b.properties);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? jO(e)(f) : void 0
        }
        d = Lp(a, d);
        Pp.la(1085, kF(aF(), a, d))
    }

    function vO(a, b) {
        uO(20, a, b);
        uO(17, a, b)
    }

    function wO(a) {
        const b = Hp(Kp).g();
        a = UN(a);
        return b.concat(a).join(",")
    }

    function xO(a) {
        const b = Kl();
        b && (a.debug_experiment_id = b)
    };

    function yO(a, b) {
        if (a && !TE(a).ads_density_stats_processed && !Pk(a) && (TE(a).ads_density_stats_processed = !0, W(Ru) || jd() < .01)) {
            const c = () => {
                if (a) {
                    var d = jJ(eJ(a), b.google_ad_client, a.location.hostname, wO(b).split(","));
                    Ty("ama_stats", d, 1)
                }
            };
            Nd(a, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };

    function zO(a, b, c, d, e, f, g = null) {
        if (e) {
            if (W(su)) var h = null;
            else try {
                h = e.getItem("google_ama_config")
            } catch (m) {
                h = null
            }
            try {
                var k = h ? zt(h) : null
            } catch (m) {
                k = null
            }
        } else k = null;
        a: {
            if (d) try {
                var l = zt(d);
                break a
            } catch (m) {
                dK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            l = null
        }
        if (d = l) {
            if (e) {
                l = new Ns;
                C(d, 3, l);
                k = d ? .g() ? .j() || 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && ci(l, 1, Math.round(k));
                l = Wg(d);
                d.g() && (k = new Ms, h = d ? .g() ? .g(), k = $h(k, 23, h), h = d ? .g() ? .l(), k = $h(k, 12, h), C(l, 15, k));
                k = Bh(l, mt, 1, y());
                for (h = 0; h < k.length; h++) ch(k[h], 11);
                ch(l, 22);
                if (W(su)) kK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", ji(l))
                } catch (m) {
                    dK(a, {
                        lserr: 1
                    })
                }
            }
            l = iK(a, Bh(d, Ws, 7, y()));
            k = {};
            W(tu) || (k.ak = z(d, gt, 8) || new gt);
            l && (k.ca = l);
            l && hK(l, 3) && (k.qc = [1]);
            l = k;
            UE(a, 2) && (Ek(5, [ki(d)]), c = eK(c), f = new MN(f), k = (k = l.ca) && I(k, 4) || "", c.google_package = k, mK(a, b, d, l, e, f, new Ds(["google-auto-placed"], c), g));
            return !0
        }
        k && (dK(a, {
            cfg: 1,
            cl: 1
        }), e != null && kK(a, e));
        return !1
    };

    function AO(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Zk(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = BO(a, b, c, a.g.g.elementsFromPoint(Mb(c.left + c.width / 2, c.left, c.right - 1), Mb(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = BO(a, b, c, a.g.g.elementsFromPoint(Mb(c.left + c.width / 2, c.left, c.right - 1), Mb(c.top + 2, c.top, c.bottom - 1)), 2, e.nb),
            g = BO(a, b, c, a.g.g.elementsFromPoint(Mb(c.left + 2, c.left, c.right - 1), Mb(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.nb, ...f.nb]);
        const h = BO(a, b, c, a.g.g.elementsFromPoint(Mb(c.right - 1 - 2, c.left, c.right - 1), Mb(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.nb, ...f.nb, ...g.nb]);
        var k = CO(a, b, c),
            l = n => Sa(a.j, n.sb) && Sa(a.l, n.mh) && Sa(a.i, n.oh);
        e = Oa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Oa(k, l);
        k = [...e, ...l];
        f = c.left < -2 || c.right > d.width + 2;
        f = k.length > 0 || f;
        g = $k(a.g.g);
        const m = new Lk(c.left, c.top, c.width, c.height);
        e = [...Pa(e, n => new Lk(n.mc.left, n.mc.top, n.mc.width, n.mc.height)), ...cb(Pa(l,
            n => Nk(m, n.mc))), ...Oa(Nk(m, new Lk(0, 0, d.width, d.height)), n => n.top >= 0 && n.top + n.height <= d.height)];
        return {
            entries: k,
            Wg: f,
            Dh: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            Tb: c,
            Rh: {
                width: d.width,
                height: d.height
            },
            Uj: e.length < 20 ? DO(m, e) : EO(c, e)
        }
    }

    function FO(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Tl,
                                        m = Sl(l, () => AO(a, k));
                                    m && (l.events.length && (m.bj = Math.round(Number(l.events[0].duration))), h.disconnect(), e(m))
                                }, GO);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function BO(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            nb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Sa(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(HO(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(HO(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const D = k.g.gj(l, n);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    Ea: B,
                    condition: G
                } = IO(k, l, D, n) || {},
                {
                    Ea: E,
                    condition: A
                } = IO(k, n, D, l) || {};k = B && G && E && A ? G <= A ? {
                    Ea: B,
                    sb: JO[G]
                } : {
                    Ea: E,
                    sb: KO[A]
                } : B && G ? {
                    Ea: B,
                    sb: JO[G]
                } : E && A ? {
                    Ea: E,
                    sb: KO[A]
                } : null
            }
            const {
                Ea: r,
                sb: w
            } = k || {};
            r && w ? g.push(HO(a, c, n, p, w, e, r)) : g.push(HO(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            nb: h
        }
    }

    function CO(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = id(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(HO(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(HO(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(HO(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function DO(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Mk(e, b[g]), e)); g++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function EO(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function HO(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            mc: d,
            sb: e,
            oh: f
        };
        if (Sa(a.j, e) && Sa(a.i, f)) {
            b = new Gk(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = LO(a, c)) && Ik(b, a)) c = 4;
            else {
                a = MO(c, d);
                e = ol(c, "paddingLeft");
                f = ol(c, "paddingRight");
                const k = ol(c, "paddingTop"),
                    l = ol(c, "paddingBottom");
                e = new Gk(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Ik(b, new Gk(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = MO(c, d), c = Ik(b, c) ? 2 : 1)
            }
            h.mh = c
        }
        g && (h.Ea = g);
        return h
    }

    function IO(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = id(h, c);
            if (g) {
                if (g.position === "fixed") return {
                    Ea: h,
                    condition: 1
                };
                if (g.position === "sticky" && a.g.contains(h.parentElement, d)) return {
                    Ea: h,
                    condition: 2
                };
                if (g.position === "absolute") return {
                    Ea: h,
                    condition: 3
                };
                if (g.cssFloat !== "none") {
                    g = h === e[0];
                    const k = NO(a, e.slice(0, f), h);
                    if (g || k) return {
                        Ea: h,
                        condition: 4
                    }
                }
            }
        }
        return (a = NO(a, e, b)) ? {
            Ea: a,
            condition: 5
        } : null
    }

    function NO(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = id(f, a.g.da());
            if (h && d.bottom > g.bottom + 2 && h.overflowY === "visible") return f
        }
        return null
    }

    function LO(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Gk(a.top, a.right, a.bottom, a.left)
    }

    function MO(a, b) {
        var c = ol(a, "borderLeftWidth");
        const d = ol(a, "borderRightWidth"),
            e = ol(a, "borderTopWidth");
        a = ol(a, "borderBottomWidth");
        c = new Gk(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Gk(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class OO {
        constructor(a) {
            var b = PO;
            this.g = Wk(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const JO = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        KO = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Oa(ld({
        fm: 1,
        gm: 2,
        Vn: 3,
        Wn: 4,
        Yn: 5,
        bm: 6,
        cm: 7,
        em: 8,
        OTHER: 9,
        Xn: 10,
        dm: 11,
        Un: 12,
        am: 13
    }), a => !Sa([1, 2], a));
    ld({
        Bl: 1,
        kn: 2,
        Kl: 3,
        TEXT: 4
    });
    const PO = ld({
            BOTTOM: 1,
            TOP: 2,
            LEFT: 3,
            RIGHT: 4
        }),
        GO = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function QO(a) {
        a.i != null || a.C || (a.i = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) ya(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && rr(b.j, d))
        }), a.i.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var RO = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new sr;
            this.i = null;
            Eq(this, () => {
                this.i ? .disconnect();
                this.i = null
            })
        }
    };

    function SO(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? fs(xn(4)) : d.startsWith("#") ? fs(xn(5)) : TO(d, c) : hs("Empty href");
            if (c.isError()) a.i(c.i);
            else {
                d = c.getValue();
                c = a.V;
                var e = new zn;
                d = C(e, 1, d);
                c.call(a, d)
            }
        })
    }
    var VO = class {
        constructor(a, b, c) {
            var d = UO();
            this.win = a;
            this.g = b;
            this.V = c;
            this.i = d
        }
        M() {
            const a = new RO(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                SO(this, b)
            });
            QO(a);
            pr(a.j).listen(b => {
                SO(this, b)
            })
        }
    };

    function TO(a, b) {
        return WO(a, b).map(c => WO(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = xn(2);
                e = fi(e, 2, `${c.host}${c.pathname}`);
                d = fi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? xn(3) : xn(1);
            return d
        }))
    }

    function WO(a, b) {
        return ls(is(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function XO(a) {
        if (a < 0 || !Number.isInteger(a)) return hs(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return fs(b.reverse().join(""))
    };
    class YO {
        constructor() {
            this.Yh = 5E3
        }
        Ki() {
            return 5E3
        }
    }

    function ZO(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.Yh : b
    }

    function $O(a, b) {
        b = b.map(c => ZO(a, c));
        return aP(b, a.i === void 0 ? void 0 : ZO(a, a.i)).map(c => {
            a: {
                var d = bP;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.isError()) {
                        d = new gs(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = fs(e)
            }
            return d
        }).map(c => c.join(".")).map(c => cP(c, a.g ? .Ki()))
    }
    var dP = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function bP(a) {
        const b = XO(a.value);
        if (b.isError()) return b;
        const c = b.getValue();
        return a.Zd === 1 ? fs(`${c}`) : a.Zd === 2 ? fs(`${c}${"~"}`) : ns(XO(a.Zd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function aP(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return hs("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Zd: 1
            }) : c[c.length - 1].Zd++
        }
        return fs(c)
    }

    function cP(a, b) {
        return a === "" ? fs("") : eP(b).map(c => `${c}${a}`)
    }

    function eP(a) {
        return a === void 0 || a === 1 ? fs("") : ms(XO(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var fP = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        M() {
            this.win.addEventListener("focus", this.i);
            this.win.addEventListener("blur", this.i);
            Eq(this, () => void this.win.removeEventListener("focus", this.i));
            Eq(this, () => void this.win.removeEventListener("blur", this.i));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function gP(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var hP = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = () => void gP(this)
        }
        M() {
            this.win.addEventListener("visibilitychange", this.i);
            Eq(this, () => void this.win.removeEventListener("visibilitychange", this.i));
            gP(this)
        }
    };

    function iP(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var kP = class {
        constructor(a) {
            this.win = a;
            this.i = 0;
            this.g = null;
            this.j = jP(this.win)
        }
        start() {
            this.g === null && (this.g = this.j())
        }
        pause() {
            this.g !== null && (this.i += this.j() - this.g);
            this.g = null
        }
    };

    function jP(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function lP(a) {
        a = new mP(a);
        a.M();
        return a
    }

    function nP(a) {
        const b = Dr(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function oP(a) {
        const b = pP(a.win),
            c = () => {
                const d = pP(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function qP(a) {
        a.l = !a.g.O;
        kr(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function rP(a) {
        jr(a.g, !0, () => void a.j.start());
        jr(a.g, !1, () => void a.j.pause());
        a.I.start()
    }

    function sP(a) {
        var b = a.win.scrollY;
        var c = bq(a.win);
        b = {
            de: Math.floor(b / 100),
            ld: Math.floor((b + c) / 100),
            Oh: a.win.performance.now()
        };
        if (b.de < 0 || b.ld < 0 || b.de > 1E3 || b.ld > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new UC(c.de, c.ld),
                    e = new UC(b.de, b.ld);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new UC(f, d) : null)
                    for (c = b.Oh - c.Oh, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.O ? b : null
        }
    }
    var mP = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            this.F = this.l = this.B = !1;
            this.i = null;
            a = this.win;
            var b = new fP(a);
            b.M();
            b = gr(b.j);
            a = new hP(a);
            a.M();
            this.A = this.g = fr(b, gr(a.j));
            this.j = new kP(this.win);
            this.I = new kP(this.win);
            this.H = new dP((new dP(new YO)).g, 0)
        }
        M() {
            nP(this);
            oP(this);
            qP(this);
            rP(this);
            this.A.listen(() => void sP(this));
            t.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.O && sP(this)
        }
    };

    function pP(a) {
        return new Jk(aq(a), bq(a))
    };

    function tP(a, {
        Ka: b
    }) {
        a = new uP(a, b);
        if (!a.Ka && W(Zu)) {
            b = a.win;
            var c = vP(wP(a));
            (new VO(b, b.document.baseURI, c)).M()
        }
        xP(a)
    }

    function xP(a) {
        if (W($u)) {
            var b = lP(a.win);
            Ep(new ZE(a.win), yP(() => {
                var c = wP(a),
                    d = new Cn,
                    e = $O(b.H, b.C);
                if (e.isError()) throw ms(e, "PVDC: ").i;
                var f = new Bn;
                f = bi(f, 2, 5E3);
                f = bi(f, 1, 100);
                e = e.getValue();
                e = fi(f, 3, e);
                f = pP(b.win);
                var g = new An;
                g = bi(g, 1, f.width);
                f = bi(g, 2, f.height);
                e = C(e, 4, f);
                f = new An;
                f = bi(f, 1, fq(b.win).scrollWidth);
                f = bi(f, 2, fq(b.win).scrollHeight);
                e = C(e, 5, f);
                e = M(e, 6, b.l);
                f = Math.round(iP(b.I) / 1E3);
                e = bi(e, 8, f);
                f = Math.round(iP(b.j) / 1E3);
                e = bi(e, 9, f);
                b.B && Dh(e, 7, wf, 1, Th);
                b.F && Dh(e, 7, wf, 2, Th);
                d = H(d,
                    2, Dn, e);
                c(d)
            }))
        }
    }

    function wP(a) {
        if (!a.V) {
            const b = aF();
            a.V = c => {
                pF(b, c)
            }
        }
        return a.V
    }
    var uP = class {
        constructor(a, b) {
            this.win = a;
            this.Ka = b;
            this.V = null
        }
    };

    function vP(a) {
        return b => {
            var c = new Cn;
            b = H(c, 1, Dn, b);
            return void a(b)
        }
    }

    function UO() {
        return a => {
            Y.aa(1243, a, void 0, zP("LCC"))
        }
    }

    function yP(a) {
        return () => void Y.tb(1243, a, zP("PVC"))
    }

    function zP(a) {
        return b => {
            b.errSrc = a
        }
    };
    var AP = class extends S {
        constructor(a, b) {
            super();
            this.value = a;
            Eq(this, b)
        }
    };

    function BP(a, b) {
        const c = CP(a.getBoundingClientRect()),
            d = new T(c),
            e = DP(a, b, f => {
                d.g(CP(f.boundingClientRect))
            });
        return new AP(gr(d), () => void e.disconnect())
    }

    function DP(a, b, c) {
        b = new IntersectionObserver(d => {
            d.filter(e => e.target === a).forEach(c)
        }, {
            root: b
        });
        b.observe(a);
        return b
    }

    function CP(a) {
        return a.height > 0 || a.width > 0
    };
    var EP = {
        Nm: 0,
        no: 1,
        Cn: 2,
        0: "INITIAL_RENDER",
        1: "UNRENDER",
        2: "RENDER_BACK"
    };

    function FP(a, b, c) {
        var d = [1, 2];
        const e = BP(b, c),
            f = e.value,
            g = new sr;
        kr(f, !0, () => void GP(a, f, g, d));
        return new AP(pr(g), () => void e.dispose())
    }

    function GP(a, b, c, d) {
        const e = new kP(a);
        let f = new kP(a);
        e.start();
        f.start();
        let g = 0;
        const h = k => {
            k = {
                type: k,
                jh: ++g,
                Mj: iP(f),
                Lj: iP(e)
            };
            f = new kP(a);
            f.start();
            return k
        };
        d && !d.includes(0) || rr(c, h(0));
        b.listen(k => {
            k = k ? 2 : 1;
            d && !d.includes(k) || rr(c, h(k))
        })
    };

    function HP(a, b) {
        var c = aF();
        Ry(1282, () => void IP(a, b, c))
    }

    function IP(a, b, c) {
        const d = JP(a);
        if (!d) throw Error("No adsbygoogle INS found");
        const e = FP(a.pubWin, b, d);
        e.value.listen(f => {
            KP(f, d, c, () => void e.dispose())
        })
    }

    function JP(a) {
        return (a = a.Z.parentElement) && Uw.test(a.className) ? a : null
    }

    function KP(a, b, c, d) {
        if (a.jh > 5) d();
        else {
            var e = a.type === 1;
            d = a.type === 2;
            if (!e && !d) throw Error(`Unsupported event type: ${EP[a.type]}`);
            var f = Hg(GN());
            f = ci(f, 1, a.Mj);
            f = ci(f, 2, a.Lj);
            a = ci(f, 3, a.jh);
            f = b.dataset.vignetteLoaded;
            var g = Hg(EN());
            g = ei(g, 1, b.dataset.adStatus);
            g = ei(g, 2, b.dataset.sideRailStatus);
            g = ei(g, 3, b.dataset.anchorStatus);
            f = $h(g, 4, f !== void 0 ? f === "true" : void 0);
            b = getComputedStyle(b);
            g = HN();
            g = Hg(g);
            g = ei(g, 1, b.display);
            g = ei(g, 2, b.position);
            b = ei(g, 3, b.width).setHeight(b.height).i();
            b = C(f, 5, b).i();
            a = C(a, 4, b);
            e = e ? IN() : void 0;
            e = H(a, 5, Bm, e);
            d = d ? FN() : void 0;
            d = H(e, 6, Bm, d);
            d = Hg(d.i()).i();
            sF(c, d)
        }
    };
    var MP = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!wk.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = LP(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = LP(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = LP(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = LP(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = LP(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = LP(a, b.google_color_line, c))
    };

    function LP(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const NP = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    Zc `https://securepubads.g.doubleclick.net/pagead/js/car.js`;
    Zc `https://securepubads.g.doubleclick.net/pagead/js/cocar.js`;
    var OP = Zc `https://ep3.adtrafficquality.google/ivt/worklet/caw.js`;

    function PP(a) {
        const b = [];
        for (let c = 0; c < 8; ++c) {
            const d = new MM(f => {
                    b.push({
                        url: f
                    })
                }),
                e = N(To(So(new Uo, a), c), 3, 6);
            d.F(e)
        }
        return b
    }
    async function QP(a) {
        var b = window;
        if (b.sharedStorage && (a = await (await b.sharedStorage.createWorklet(OP.toString(), {
                dataOrigin: "script-origin"
            })).selectURL("ps_caus", PP(a), {
                resolveToConfig: !0
            }))) {
            b = b.document.body;
            const c = document.createElement("fencedframe");
            c.id = "ps_caff";
            c.name = "ps_caff";
            c.mode = "opaque-ads";
            c.config = a;
            kl(c, "border", "0");
            b.appendChild(c)
        }
    };

    function RP(a, b) {
        const c = iO(a.isSecureContext, a, a.document),
            d = !!a.sharedStorage ? .createWorklet;
        b && c && d && !JE(EE(), 34, !1) && (KE(EE(), 34, !0), a = QP(Md(a)), Y.la(1279, a))
    };
    const SP = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        TP = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        UP = {
            Dd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Nb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        VP = {
            Dd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Nb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function WP(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Gf: b.__gppReturn.callId
        }
    }

    function XP(a, b) {
        if (!a) return !1;
        var c = bL(a.split("~")[0]);
        a = XK(a);
        c = Rh(c, 3);
        for (let d = 0; d < c.length; ++d) {
            const e = c[d];
            if (!b.includes(e)) continue;
            const f = a[d];
            switch (e) {
                case 7:
                    if (YP(LL(f))) return !0;
                    break;
                case 8:
                    if (ZP(lL(f))) return !0;
                    break;
                case 9:
                    if ($P(QL(f))) return !0;
                    break;
                case 10:
                    if (aQ(tL(f))) return !0;
                    break;
                case 12:
                    if (bQ(CL(f))) return !0
            }
        }
        return !1
    }
    var fQ = class extends S {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new KF(a, "__gppLocator", d => typeof d.__gpp === "function", WP);
            this.caller.B.set("addEventListener", SP);
            this.caller.A.set("addEventListener", UP);
            this.caller.B.set("removeEventListener", TP);
            this.caller.A.set("removeEventListener", VP);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        g() {
            this.caller.dispose();
            super.g()
        }
        addEventListener(a) {
            const b = kb(() => {
                    a(cQ, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            JF(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(dQ, !0);
                            return
                        }
                        a(eQ, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            JF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const eQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        cQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        dQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function YP(a) {
        a = z(a, FL, 1);
        return Qh(a, 8) === 1 || Qh(a, 9) === 1 || Qh(a, 10) === 1 ? !0 : !1
    }

    function ZP(a) {
        a = z(a, fL, 1);
        return Qh(a, 5) === 1 || Qh(a, 6) === 1 ? !0 : !1
    }

    function $P(a) {
        return Qh(a, 5) === 1 || Qh(a, 6) === 1 ? !0 : !1
    }

    function aQ(a) {
        a = z(a, nL, 1);
        return Qh(a, 5) === 1 || Qh(a, 6) === 1 ? !0 : !1
    }

    function bQ(a) {
        a = z(a, wL, 1);
        return Qh(a, 5) === 1 || Qh(a, 6) === 1 ? !0 : !1
    }

    function gQ(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function hQ(a) {
        a = new fQ(a);
        if (!HF(a.caller)) return Promise.resolve(null);
        const b = EE(),
            c = JE(b, 35);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = JE(b, 36, []);
            f.push(e);
            KE(b, 36, f)
        });
        c || c === null || (KE(b, 35, null), a.addEventListener(e => {
            if (e.pingData.signalStatus === "ready" || gQ(e.pingData.applicableSections)) {
                e = e.pingData;
                KE(b, 35, e);
                for (const f of JE(b, 36, [])) f.resolve(e);
                KE(b, 36, [])
            }
        }));
        return d
    };

    function iQ(a) {
        a = new cG(a, {
            timeoutMs: -1,
            xi: !0
        });
        if (!ZF(a)) return Promise.resolve(null);
        const b = EE(),
            c = JE(b, 24);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = JE(b, 25, []);
            f.push(e);
            KE(b, 25, f)
        });
        c || c === null || (KE(b, 24, null), a.addEventListener(e => {
            if (TF(e)) {
                KE(b, 24, e);
                for (const f of JE(b, 25, [])) f.resolve(e);
                KE(b, 25, [])
            } else KE(b, 24, null)
        }));
        return d
    };
    const jQ = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.La({
                    ic: c ? ? void 0,
                    Eg: d ? void 0 : 2
                })
            })
        },
        kQ = {
            Dd: a => a.La,
            Bc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Nb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    ic: b.returnValue ? ? void 0,
                    Eg: b.success ? void 0 : 2
                })
            }
        };

    function lQ(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Gf: b.__uspapiReturn.callId
        }
    }

    function mQ(a, b) {
        let c = {};
        if (HF(a.caller)) {
            var d = kb(() => {
                b(c)
            });
            JF(a.caller, "getDataWithCallback", {
                La: e => {
                    e.Eg || (c = e.ic);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var nQ = class extends S {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new KF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", lQ);
            this.caller.B.set("getDataWithCallback", jQ);
            this.caller.A.set("getDataWithCallback", kQ)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };

    function oQ(a) {
        const b = new nQ(a);
        return new Promise(c => {
            mQ(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function pQ(a, {
        sk: b,
        wk: c,
        oj: d
    }) {
        var e = new MK;
        var f = W(dw) ? hi(d, 5) ? d.g() : hi(b, 5) ? b.g() : a.g() : hi(b, 5) ? b.g() : a.g();
        e = JK(e, f);
        f = W(dw) ? hi(d, 8) ? J(d, 8) : hi(b, 8) ? J(b, 8) : void 0 : Vh(b, 8);
        e = KK(e, f);
        a = Vh(a, 14);
        a = $h(e, 14, a);
        f = Vh(b, 3);
        a = $h(a, 3, f);
        f = Yh(b, 2);
        a = ei(a, 2, f);
        f = Yh(b, 4);
        a = ei(a, 4, f);
        f = Zh(b, 7);
        a = gi(a, 7, f);
        b = Vh(b, 9);
        b = $h(a, 9, b);
        a = Yh(c, 1);
        b = ei(b, 1, a);
        c = Vh(c, 13);
        c = $h(b, 13, c);
        b = Yh(d, 11);
        c = ei(c, 11, b);
        b = Hh(d, 10, y());
        c = rh(c, 10, b, Cf);
        LK(c, Vh(d, 12));
        return e
    }
    async function qQ(a, {
        Ka: b,
        Aj: c
    }) {
        const [d, e, f] = await Promise.all([iQ(a.pubWin), oQ(a.pubWin), hQ(a.pubWin)]), g = !!b && !hN();
        var h = JK(new MK, !g);
        c = $h(h, 14, c && navigator.globalPrivacyControl);
        h = new MK;
        if (d) {
            b = W(ew) ? g : b ? ? !1;
            b = JK(h, UF(d, {
                idpcApplies: b
            }));
            b = ei(b, 2, d.tcString);
            b = ei(b, 4, d.addtlConsent || "");
            b = gi(b, 7, d.internalErrorState);
            var k = !XF(d, ["3", "4"], 0);
            b = $h(b, 9, k);
            KK(b, !XF(d, ["2", "7", "9", "10"], 3));
            d.gdprApplies != null && $h(h, 3, d.gdprApplies)
        }
        b = new MK;
        if (e) {
            k = ei(b, 1, e);
            var l = e.toUpperCase();
            if (l.length ==
                4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" && VK.hasOwnProperty(l[1]) && VK.hasOwnProperty(l[2]) && VK.hasOwnProperty(l[3])) {
                var m = new UK;
                m = bi(m, 1, parseInt(l[0], 10));
                m = N(m, 2, VK[l[1]]);
                m = N(m, 3, VK[l[2]]);
                l = N(m, 4, VK[l[3]])
            } else l = null;
            l = l ? .lj() === 2;
            $h(k, 13, l)
        }
        k = new MK;
        if (f)
            if (f.internalErrorState) ei(k, 11, f.gppString);
            else if (gQ(f.applicableSections)) LK(rh(k, 10, f.applicableSections, Cf), !1), W(dw) && JK(k, !0);
        else if (l = rh(k, 10, f.applicableSections, Cf), ei(l, 11, f.gppString), W(dw)) try {
            var n =
                f.gppString,
                p = f.applicableSections;
            l = {
                idpcApplies: g,
                supportTcfeu: !0
            };
            let sf = !(p.includes(2) && l ? .idpcApplies),
                Jx = m = !1;
            if (n && !n.startsWith("GPP_ERROR_STRING_")) {
                var r = bL(n.split("~")[0]);
                const zT = XK(n),
                    Kx = Rh(r, 3);
                for (n = 0; n < Kx.length; ++n) {
                    const Lx = Kx[n];
                    if (!p.includes(Lx)) continue;
                    const Jd = zT[n];
                    switch (Lx) {
                        case 2:
                            if (l ? .supportTcfeu) {
                                a: {
                                    var w = r = void 0,
                                        D = void 0,
                                        B = void 0,
                                        G = void 0,
                                        E = void 0,
                                        A = void 0,
                                        F = void 0,
                                        L = void 0,
                                        ja = void 0;
                                    const ao = IM(Jd);
                                    if (!ao || !Jd) {
                                        var qb = null;
                                        break a
                                    }
                                    const Pb = z(ao, sM, 1),
                                        Qj = z(ao, WL,
                                            2) || new WL;
                                    var na = Mh(Pb, 9),
                                        va = Mh(Pb, 4),
                                        wa = Mh(Pb, 5),
                                        zb = J(Pb, 10),
                                        Ab = J(Pb, 11),
                                        Rj = K(Pb, 16),
                                        ua = J(Pb, 15);ja = Th(Pb, 13, y());
                                    var tf = JM(ja, vM);L = Th(Pb, 14, y());
                                    var AT = {
                                        consents: tf,
                                        legitimateInterests: JM(L, vM)
                                    };F = Rh(Pb, 17);
                                    var BT = JM(F);A = Rh(Pb, 18);
                                    var CT = {
                                        consents: BT,
                                        legitimateInterests: JM(A)
                                    };E = Th(Pb, 12, y());
                                    var DT = JM(E, wM);G = Bh(Pb, RL, 19, y());E = {};
                                    for (const bo of G) {
                                        const co = Qh(bo, 1);
                                        E[co] = E[co] || {};
                                        for (const ET of Rh(bo, 3)) E[co][ET] = Qh(bo, 2)
                                    }
                                    B = Th(Qj, 1, y());
                                    var FT = JM(B, vM);D = Th(Qj, 2, y());
                                    var GT = JM(D, vM);w = Rh(Qj,
                                        3);
                                    var HT = JM(w);r = Rh(Qj, 4);qb = {
                                        tcString: Jd,
                                        tcfPolicyVersion: na,
                                        gdprApplies: !0,
                                        cmpId: va,
                                        cmpVersion: wa,
                                        isServiceSpecific: zb,
                                        useNonStandardStacks: Ab,
                                        publisherCC: Rj,
                                        purposeOneTreatment: ua,
                                        purpose: AT,
                                        vendor: CT,
                                        specialFeatureOptins: DT,
                                        publisher: {
                                            restrictions: E,
                                            consents: FT,
                                            legitimateInterests: GT,
                                            customPurposes: {
                                                consents: HT,
                                                legitimateInterests: JM(r)
                                            }
                                        }
                                    }
                                }
                                r = qb;
                                if (!r) throw Error("Cannot decode TCF V2 section string.");sf = UF(r);!XF(r, ["3", "4"], 0) && (m = !0);!XF(r, ["2", "7", "9", "10"], 3) && (Jx = !0)
                            }
                            break;
                        case 7:
                            YP(LL(Jd)) &&
                                (m = !0);
                            break;
                        case 8:
                            ZP(lL(Jd)) && (m = !0);
                            break;
                        case 9:
                            $P(QL(Jd)) && (m = !0);
                            break;
                        case 10:
                            aQ(tL(Jd)) && (m = !0);
                            break;
                        case 12:
                            bQ(CL(Jd)) && (m = !0)
                    }
                }
            }
            var Sj = sf;
            var IT = m;
            var JT = Jx;
            KK(LK(JK(k, Sj), IT), JT)
        } catch (sf) {
            Y.aa(1182, sf, void 0, void 0), KK(LK(JK(k, !g), !1), !1)
        } else {
            Sj = !1;
            try {
                Sj = XP(f.gppString, f.applicableSections)
            } catch (sf) {
                Y.aa(1182, sf, void 0, void 0)
            }
            LK(k, Sj)
        }
        a.g = pQ(c, {
            sk: h,
            wk: b,
            oj: k
        })
    };
    async function rQ(a) {
        const b = Ll(),
            c = a.ra,
            d = a.pageState.g();
        jF(g => {
            if (Qh(g, 1) === 0) {
                var h = !(d.j() ? !J(d, 4) : !J(c, 6));
                g = M(g, 2, h);
                h = !(hi(d, 5) ? !J(d, 5) : !J(c, 20));
                g = M(g, 6, h);
                N(g, 1, 1)
            }
        });
        sQ(a.pubWin, xh(c));
        tQ(a.D.google_ad_client);
        jF(g => {
            Qh(g, 1) === 1 && N(g, 1, 2)
        });
        const e = new RF(a.pubWin);
        await uQ(e, K(d, 8) || K(c, 8));
        jF(g => {
            Qh(g, 1) === 2 && (g = M(g, 3, !0), N(g, 1, 3))
        });
        await qQ(a, {
            Ka: d.j() ? J(d, 4) : J(c, 6),
            Aj: hi(d, 7) ? J(d, 7) : J(c, 25)
        });
        const f = Ll();
        jF(g => {
            if (Qh(g, 1) === 3) {
                g = M(g, 3, f - b > 500);
                var h = !!a.g ? .A();
                g = M(g, 4, h);
                h = !!a.g ? .g();
                g = M(g, 5, h);
                h = !!a.g ? .j();
                g = M(g, 7, h);
                h = !!a.g ? .l();
                g = M(g, 8, h);
                N(g, 1, 4)
            }
        })
    }

    function sQ(a, b) {
        var c = W(fu),
            d = W(fw);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new gN(a, b, c, d), bN(a), cN(a))
    }

    function tQ(a) {
        var b = xd(t.top, "googlefcPresent");
        t.googlefc && !b && Ty("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function uQ(a, b) {
        return OF(a, b === ".google.cn") ? PF(a) : Promise.resolve(null)
    };
    var vQ = (a, b = !1) => {
        try {
            return b ? (new Jk(a.innerWidth, a.innerHeight)).round() : Zk(a || window).round()
        } catch (c) {
            return new Jk(-12245933, -12245933)
        }
    };

    function wQ(a = t) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function xQ(a, b = t) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new Fk(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function yQ(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function zQ(a, b) {
        var c = Y,
            d;
        var e;
        d = (e = (e = Pk()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Lk(d.left, d.top, d.width, d.height) : null) ? new Fk(e.left, e.top) : (d = Sk()) && ya(d.rootBounds) ? new Fk(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            {
                const k = new Fk(0, 0);
                var f = Yk(b);
                let l = f ? f.defaultView : window;
                if (Yb(l, "parent")) {
                    do {
                        if (l == a) var g = rl(b);
                        else {
                            const m =
                                ql(b);
                            g = new Fk(m.left, m.top)
                        }
                        f = g;
                        k.x += f.x;
                        k.y += f.y
                    } while (l && l != a && l != l.parent && (b = l.frameElement) && (l = l.parent))
                }
                var h = k
            }
            return h
        } catch (k) {
            return c.aa(888, k), new Fk(-12245933, -12245933)
        }
    }

    function AQ(a, b, c, d = !1) {
        a = zQ(a, c);
        c = Tk() || vQ(b.top);
        if (!a || a.y === -12245933 || c.width === -12245933 || c.height === -12245933 || !c.height) return 0;
        let e = 0;
        try {
            const f = b.top;
            e = xQ(f.document, f).y
        } catch (f) {
            return 0
        }
        b = e + c.height;
        return a.y < e ? d ? 0 : (e - a.y) / c.height : a.y > b ? (a.y - b) / c.height : 0
    };

    function BQ(a, b, c) {
        var d = pO(a, "__gpi_opt_out", b);
        d && (d = ei(ci(nk(d), 2, 2147483647), 3, "/"), c = ei(d, 4, c), qO(a, "__gpi_opt_out", c, b))
    }

    function CQ(a, b, c, d) {
        const e = kN(a, "gpi-uoo", (f, g) => {
            if (g.source === c) {
                g = ei(ci(nk(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                g = ei(g, 4, a.location.hostname);
                var h = new tO(a);
                qO(h, "__gpi_opt_out", g, b);
                if (f.userOptOut || f.clearAdsData) rO(h, "__gads", b), rO(h, "__gpi", b)
            }
        });
        d.push(e)
    };

    function DQ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = ME();
        let f = null;
        const g = kN(c, "pvt", (h, k) => {
            typeof h.token === "string" && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(g);
        return () => {
            f && Array.isArray(e[d]) && (Ta(e[d], f), e[d].length || delete e[d], f = null)
        }
    };

    function EQ(a) {
        return a.length ? a.join("~") : void 0
    };

    function FQ({
        K: a,
        Rj: b,
        Kj: c,
        Fi: d,
        Jo: e,
        Ko: f,
        G: g
    }) {
        let h = 0;
        try {
            h |= $p(a, f);
            const m = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= m ? m < 320 ? 8192 : 0 : 2048;
            h |= a.navigator && GQ(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = h;
                const n = a.innerHeight;
                var k = Rd(a) * n >= b;
                var l = f | (k ? 0 : 1024)
            } else l = h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h = l;
            h |= cq(a, c, !0, e)
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                HQ(a, g) && (h |= 16777216);
                break;
            case 1:
                IQ(a, g) && (h |= 16777216)
        }
        return h
    }

    function GQ(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var HQ = (a, b = null) => {
            const c = MC({
                Tf: 0,
                af: a.innerWidth,
                Bf: 3,
                Uf: 0,
                bf: Math.min(Math.round(a.innerWidth / 320 * 50), JQ) + 15,
                Cf: 3
            });
            return QC(KQ(a, b), c) != null
        },
        IQ = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), JQ) + 15,
                f = MC({
                    Tf: 0,
                    af: c,
                    Bf: 3,
                    Uf: d - e,
                    bf: d,
                    Cf: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return QC(KQ(a, b), f) != null
        };

    function KQ(a, b = null) {
        return new SC(a, {
            Gg: LQ(a, b)
        })
    }

    function LQ(a, b = null) {
        if (b) return (c, d, e) => {
            am(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const JQ = 90 * 1.38;

    function MQ(a, b) {
        return FQ({
            K: a,
            Kj: 3E3,
            Rj: W(cu) ? -1 : a.innerWidth > Zp ? 650 : 0,
            G: Py,
            Fi: b
        })
    };

    function NQ(a) {
        let b = 0;
        try {
            b |= $p(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function OQ(a) {
        let b = 0;
        try {
            b |= $p(a), b |= cq(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var PQ = class extends O {
        g() {
            return K(this, 3)
        }
        j() {
            return hi(this, 4)
        }
    };
    var QQ = class extends O {
            g() {
                return zh(this, PQ)
            }
        },
        RQ = Zj(QQ);

    function SQ() {
        var a = t.adsbygoogle;
        try {
            const b = a.pageState;
            me(b, re);
            return RQ(b)
        } catch (b) {
            return new QQ
        }
    };

    function TQ() {
        const a = {};
        Hw(ku) && (a.bust = Hw(ku));
        return a
    };

    function UQ(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function VQ(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function WQ(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function XQ(a, b) {
        if (UQ(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                sb(b, "prerenderingchange", d);
                a()
            };
            rb(b, "prerenderingchange", d)
        }
    };
    var YQ = (a, b = !1) => {
        let c = 0;
        try {
            c |= $p(a);
            var d;
            if (!(d = !a.navigator)) {
                var e = a.navigator;
                d = "brave" in e && "isBrave" in e.brave || !1
            }
            c |= d || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            c |= cq(a, b ? Number.MAX_SAFE_INTEGER : 2500, !0)
        } catch (f) {
            c |= 32
        }
        return c
    };
    const ZQ = "body div footer header html main section".split(" ");

    function $Q(a, b = null, c = !1, d = !1, e = !1) {
        let f = $p(a);
        GQ(a.navigator ? .userAgent) && (f |= 1048576);
        const g = a.innerWidth;
        g < 1200 && (f |= 65536);
        const h = a.innerHeight;
        h < 650 && (f |= 2097152);
        b && f === 0 && (b = b === 3 ? "left" : "right", (c = aR({
            K: a,
            Ej: !1,
            pk: 1,
            position: b,
            T: g,
            X: h,
            Cb: new Set,
            minWidth: 120,
            minHeight: 500,
            kf: c,
            Ef: d,
            Df: e
        })) ? MA(a).sideRailPlasParam.set(b, `${c.width}x${c.height}_${String(b).charAt(0)}`) : f |= 16);
        return f
    }

    function bR(a) {
        a = MA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function cR(a, b) {
        return hl(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function dR(a, b) {
        return hl(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function eR(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function fR(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function gR(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function hR(a) {
        return `${a.position}-${gR(a.T)}x${gR(a.X)}-${gR(a.scrollY+a.Pb)}Y`
    }

    function iR(a) {
        return `f-${hR({position:a.position,Pb:a.Pb,scrollY:0,T:a.T,X:a.X})}`
    }

    function jR(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function kR(a, b, c) {
        const d = MA(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.X),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.T);
                for (var k = c.T * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = iR({
                            position: "left",
                            Pb: f,
                            T: c.T,
                            X: c.X
                        });
                        b.set(l, jR(b.get(l), h))
                    }
                    if (h < c.T && e > c.T - k) {
                        l = iR({
                            position: "right",
                            Pb: f,
                            T: c.T,
                            X: c.X
                        });
                        const m = c.T - e;
                        b.set(l, jR(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function lR(a, b) {
        const c = b.K,
            d = b.kf,
            e = b.Df;
        var f = `f-${gR(b.T)}x${gR(b.X)}`;
        a.has(f) || (a.set(f, 0), f = eR(c), d || e ? (mR(a, b, f.filter(g => fR(c, g))), nR(c, f.filter(g => !fR(c, g)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : mR(a, b, f))
    }

    function mR(a, b, c) {
        var d = b.Cb;
        const e = b.K;
        MA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) cR(f, d) || kR(f, a, b)
    }

    function oR(a) {
        if (a.T < 1200 || a.X < 650) return null;
        var b = MA(a.K).sideRailAvailableSpace;
        a.Ej || lR(b, {
            K: a.K,
            T: a.T,
            X: a.X,
            Cb: a.Cb,
            kf: a.kf,
            Df: a.Df
        });
        const c = [];
        var d = a.X * .9,
            e = jq(a.K),
            f = (a.X - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    w = {
                        K: a.K,
                        T: a.T,
                        X: a.X,
                        Cb: a.Cb,
                        Ef: a.Ef
                    };
                const E = iR({
                        position: p,
                        Pb: n,
                        T: w.T,
                        X: w.X
                    }),
                    A = hR({
                        position: p,
                        Pb: n,
                        scrollY: e,
                        T: w.T,
                        X: w.X
                    });
                if (r.has(A)) {
                    n = jR(r.get(E), r.get(A));
                    break a
                }
                const F = p === "left" ? 20 : w.T - 20;
                let L = F;p = w.T * .3 / 5 * (p === "left" ? 1 : -1);
                for (let ja = 0; ja < 6; ja++) {
                    var D = NC(w.K.document, {
                            x: Math.round(L),
                            y: Math.round(n)
                        }),
                        B = cR(D, w.Cb),
                        G = dR(D, w.K);
                    if (!B && G !== null) {
                        kR(G, r, w);
                        r.delete(A);
                        break
                    }
                    B || (B = w, D.getAttribute("google-side-rail-overlap") === "true" ? B = !0 : D.getAttribute("google-side-rail-overlap") === "false" || B.Ef && !ZQ.includes(D.tagName.toLowerCase()) ? B = !1 : (G = D.offsetHeight >= B.X * .25, B = D.offsetWidth >= B.T * .9 && G));
                    if (B) r.set(A, Math.round(Math.abs(L - F) + 20));
                    else if (L !== F) L -= p, p /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    L += p
                }
                n = jR(r.get(E), r.get(A))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.pk;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    offsetY: f + h[k] * d
                }, r = n.width >= g && n.height >= a, b === 0 && r) {
                m = n;
                break
            } else b === 1 && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function nR(a, b) {
        const c = MA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    pR(a);
                    for (const e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function pR(a) {
        ({
            sideRailAvailableSpace: a
        } = MA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function aR(a) {
        if (a.za) return a.za.tb(1228, () => oR(a)) || null;
        try {
            return oR(a)
        } catch {}
        return null
    };
    const qR = {
        [27]: 512,
        [26]: 128
    };
    var rR = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return MQ(a, c) === 0;
                case 3:
                case 4:
                    return $Q(a, c, !0, W(Vu), W(nu)) === 0;
                case 8:
                    return YQ(a, W(bu)) === 0;
                case 9:
                    return b = !(b.google_adtest === "on" || QN(a.location, "google_scr_debug")), !pH(a, b, d);
                case 30:
                    return dJ(a) == 0;
                case 26:
                    return OQ(a) === 0;
                case 27:
                    return NQ(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        sR = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return MQ(a, c);
                case 3:
                case 4:
                    return $Q(a, c, !1, W(Vu));
                case 8:
                    return YQ(a, W(bu));
                case 9:
                    return pH(a, !(b.google_adtest === "on" || QN(a.location, "google_scr_debug")), d);
                case 16:
                    return Pw(b, a) ? 0 : 8388608;
                case 30:
                    return dJ(a);
                case 26:
                    return OQ(a);
                case 27:
                    return NQ(a);
                default:
                    return 32
            }
        },
        tR = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Rb(d)) return !1;
            a = fd(a);
            if (!a || !rR(a, b, d, c)) return !1;
            b = MA(a);
            if (gq(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        vR = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && uR(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        wR = a => {
            if (!a.hash) return null;
            let b = null;
            kd(NN, c => {
                !b && QN(a, c) && (b = ON[c] || null)
            });
            return b
        },
        yR = (a, b) => {
            const c = MA(a).tagSpecificState[1] || null;
            c !== null && c.debugCard == null && kd(PN, d => {
                !c.debugCardRequested && typeof d === "number" && TN(d, a.location) && (c.debugCardRequested = !0, xR(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        AR = (a, b, c) => {
            if (!b) return null;
            const d = MA(b);
            let e = 0;
            kd(Sb, f => {
                const g = qR[f];
                g && zR(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? `${e}` :
                null
        },
        BR = (a, b, c) => {
            const d = [];
            kd(Sb, e => {
                const f = zR(b, a, e, c);
                f !== 0 && d.push(`${e}:${f}`)
            });
            return d.join(",") || null
        },
        CR = a => {
            const b = [],
                c = {};
            kd(a, (d, e) => {
                if ((e = Xp[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(`${e}:${d}`)
                }
            });
            return b.join(",")
        },
        DR = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        zR = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = MA(b),
                g = gq(f, c);
            if (a.google_reactive_ad_format === c || g) e |= 64;
            let h = !1;
            kd(f.reactiveTypeDisabledByPublisher,
                (k, l) => {
                    String(c) === String(l) && (h = !0)
                });
            return h && wR(b.location) !== c && (e |= 128, c === 2 || c === 1 || c === 3 || c === 4 || c === 8) ? e : e | sR(b, a, c, d)
        },
        ER = (a, b) => {
            if (a) {
                var c = MA(a),
                    d = {};
                kd(b, (e, f) => {
                    (f = Xp[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                kd(Sb, e => {
                    d[Yp[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        FR = (a, b, c) => {
            b = Y.Ca(b, c);
            c = { ...TQ()
            };
            const d = X(gw);
            [0, 1].includes(d) && (c.osttc = `${d}`);
            return LN(1, window, $c(a, new Map(Object.entries(c)))).then(b)
        },
        xR = (a, b, c) => {
            c = Y.Ca(212, c);
            LN(3, a, b).then(c)
        },
        GR = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [], gd(c.document, Zc `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        HR = a => {
            a = a.google_reactive_ad_format;
            return Rb(a) ? `${a}` : null
        },
        uR = a => !!HR(a) || a.google_pgb_reactive != null,
        IR = a => {
            a = Number(HR(a));
            return a === 26 || a === 27 || a === 30 || a === 16 || a === 40 || a === 41
        };

    function JR(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function KR(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = BR(d, e, c);
        e.google_reactive_plat = f;
        (f = CR(a)) && (e.google_reactive_plaf = f);
        (f = DR(a)) && (e.google_reactive_fba = f);
        (f = bR(d)) && (e.google_plas = f);
        LR(a, e);
        f = wR(b.pubWin.location);
        MR(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.asro = W(Iv);
        e.aihb = W(av);
        e.ailel = EQ(Iw(vv));
        e.aiael = EQ(Iw(cv));
        e.aifxl = EQ(Iw(rv));
        e.aiixl = EQ(Iw(tv));
        W(lv) || (e.aiict = !0, e.aicel = EQ(Iw(iv)));
        W(Bv) && (e.aipaq = !0);
        W(Lv) && (e.aigda = !0);
        X(dv) && (e.aiapm = X(dv));
        X(ev) &&
            (e.aiapmi = X(ev));
        W(Ev) && (e.aiombap = !0);
        W(ov) && (e.aief = !0);
        W(Cv) && (e.aiopts = !0);
        e.aiof = EQ(Iw(Dv));
        e.fsapi = !0;
        f !== 8 && (c && lH(c) ? (f = oH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = oH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= X(au) && (e.dap = 3);
        Tk() || vQ(b.pubWin.top);
        f = lN(b.pubWin, "rsrai", Sy(429, (g, h) => NR(b, d, e.google_ad_client, a, g, h, c)), Sy(430, (g, h) => mq(b.pubWin, "431", Py, h)));
        b.j.push(f);
        MA(d).wasReactiveTagRequestSent = !0;
        OR(b, a, c)
    }

    function OR(a, b, c) {
        const d = a.D,
            e = ya(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = lN(a.pubWin, "apcnf", Sy(353, (f, g) => {
            const h = $c(a.ua.Xb, new Map(Object.entries(TQ())));
            var k = a.pubWin,
                l = d.google_ad_client;
            return Hd(g.origin) ? zO(k, l, e, f.config, c, h, null) : !1
        }), Sy(353, (f, g) => mq(a.pubWin, "353", Py, g)));
        a.j.push(b)
    }

    function NR(a, b, c, d, e, f, g) {
        if (!Hd(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!UE(b, 1)) return !0;
        f && Ek(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = MA(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                r = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (r === 9 && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, PR(d, p));
                    const w = new qH;
                    if (jH(w, p) && w.B(p)) {
                        m = w;
                        continue
                    }
                }
                h.push(p);
                k.push(r)
            }
        }
        h.length && FR(a.ua.xh,
            522, n => {
                QR(h, b, n, d, g)
            });
        e && zO(b, c, d, e, g, $c(a.ua.Xb, new Map(Object.entries(TQ()))), m);
        return !0
    }

    function PR(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        ya(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function QR(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = PR(d, h), delete h.google_reactive_sra_index, f.push(k), Ry(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function LR(a, b) {
        const c = [];
        let d = !1;
        kd(Xp, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function MR(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Xb("script");
    var RR = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function SR(a, b) {
        if (!Pw(b, a)) return () => {};
        a = TR(b, a);
        if (!a) return () => {};
        const c = QE();
        b = Ub(b);
        const d = {
            ub: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ta(c, d)
    }

    function TR(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Uw.test(a.className);) a = a.parentElement;
        return a
    }

    function UR(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = sd(c[d[k]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function VR(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function WR(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.i != c) {
            a.i = c;
            a = QE();
            for (const d of a)
                if (d.ub.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.ub.offsetWidth, Ry(467, () => {
                    var e = d.ub,
                        f = d.D;
                    const g = UR(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = UR(e, f);
                    !h && g && e.childNodes.length == 1 ? (VR(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", GR(e, f, b)) : h && g && h != g && (VR(g, !1), VR(h, !0))
                })
        }
    }
    var YR = class extends S {
        constructor() {
            super(...arguments);
            this.i = null
        }
        M(a) {
            const b = EE();
            if (!JE(b, 27, !1)) {
                KE(b, 27, !0);
                this.i = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    WR(this, a)
                };
                rb(a, "resize", c);
                Eq(this, () => {
                    sb(a, "resize", c)
                })
            }
        }
    };
    var ZR = class {
        constructor(a, b) {
            this.K = a;
            this.ub = b;
            this.g = null;
            this.j = 0
        }
        run() {
            this.g = t.setInterval(Ea(this.i, this), 500);
            this.i()
        }
        i() {
            ++this.j >= 10 && t.clearInterval(this.g);
            var a = Sw(this.K, this.ub);
            Tw(this.K, this.ub, a);
            a = Ow(this.ub, this.K);
            a != null && a.x === 0 || t.clearInterval(this.g)
        }
    };
    var $R = class {
        constructor(a) {
            this.i = 0;
            this.g = this.L = null;
            this.H = 0;
            this.j = [];
            this.oc = this.I = "";
            this.A = this.F = null;
            this.B = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ra = a.ra;
            this.ua = a.ua;
            this.Ua = a.Ua;
            this.Z = a.Z;
            this.pageState = a.pageState
        }
    };

    function aS(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var ue = {
        lo: 0,
        fo: 1,
        ho: 9,
        bo: 2,
        co: 3,
        ko: 5,
        jo: 7,
        eo: 10
    };
    var bS = class extends O {},
        cS = Zj(bS),
        dS = [1, 3];
    const eS = Zc `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function fS(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.g(h).then(({
                    data: k
                }) => k)
            }
            const e = hd("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = ec(eS).toString();
            const f = (new URL(eS.toString())).origin,
                g = DN({
                    destination: a,
                    Na: e,
                    origin: f,
                    Fe: "goog:gRpYw:doubleclick"
                });
            g.g("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                h === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function gS(a, b, c) {
        var d = Y,
            e = W(sw);
        const {
            Zc: f,
            Yc: g
        } = hS(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && ab(h, f)));
            else if (te()(h)) k || (k = h !== f);
            else return d.aa(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new bS;
                var m = ci(l, 2, Ll());
                h instanceof Uint8Array ? th(m, 1, dS, Ye(h, !1, !1)) : th(m, 3, dS, h == null ? h : wf(h));
                c.setItem("goog:cached:topics",
                    ji(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function hS(a) {
        if (!a) return {
            Zc: null,
            Yc: !0
        };
        try {
            const l = a.getItem("goog:cached:topics");
            if (!l) return {
                Zc: null,
                Yc: !0
            };
            const m = cS(l);
            let n;
            const p = wh(m, dS);
            switch (p) {
                case 0:
                    n = null;
                    break;
                case 1:
                    a = m;
                    var b = hh(m, dS, 1);
                    const w = a.P;
                    let D = w[x];
                    const B = ah(w, D, b),
                        G = Ye(B, !0, !!(D & 34));
                    G != null && G !== B && dh(w, D, b, G);
                    var c = G;
                    var d = c == null ? ie() : c;
                    b = Uint8Array;
                    le(ge);
                    var e = d.g;
                    if (e == null || fe(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            ce.test(e) && (e = e.replace(ce, ee));
                            let E;
                            E = atob(e);
                            const A = new Uint8Array(E.length);
                            for (e =
                                0; e < E.length; e++) A[e] = E.charCodeAt(e);
                            var g = A
                        } else g = null;
                        f = g
                    }
                    var h = f;
                    var k = h == null ? h : d.g = h;
                    n = new b(k || 0);
                    break;
                case 3:
                    n = Qh(m, hh(m, dS, 3));
                    break;
                default:
                    xc(p, void 0)
            }
            const r = Nh(m, 2) + 6048E5 < Ll();
            return {
                Zc: n,
                Yc: r
            }
        } catch {
            return {
                Zc: null,
                Yc: !0
            }
        }
    };

    function iS(a) {
        return W(lw) && a ? !!a.match(Hw(jw)) : !1
    }

    function jS(a, b) {
        if (!W(qw) && b.g()) {
            b = gO("shared-storage", a.document);
            const c = gO("browsing-topics", a.document);
            if (b || c) try {
                return fS(a)
            } catch (d) {
                Y.aa(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function kS(a, b, c, d, e, f) {
        if (gO("browsing-topics", b.document) && e && !W(pw) && !iS(f ? .label))
            if (lS(c, d)) {
                a.A = 1;
                const g = DK(c, b);
                c = e.then(async h => {
                    await gS(h, b, g).then(k => {
                        a.A = k
                    })
                });
                W(rw) && (d = X(tw), d > 0 ? await Promise.race([c, Od(d)]) : await c)
            } else a.A = 5
    }

    function lS(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !PE() && !J(a, 9) && !J(a, 13) && !J(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !J(a, 14)
    };
    var nS = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => mS(d));
        return lN(a, "adpnt", (e, f) => {
            if (iq(f, c.contentWindow)) {
                e = lq(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function mS(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function oS(a, b, {
        If: c,
        Jf: d
    }) {
        if (a.isEnabled(b, {
                If: c,
                Jf: d
            })) return HK("__eoi", a.g) ? ? void 0
    }
    var pS = class {
        constructor(a) {
            this.g = a
        }
        isEnabled(a, {
            If: b,
            Jf: c
        }) {
            return !FK(this.g) || J(a, 8) || (b || !a.g()) && c ? !1 : !0
        }
    };

    function qS(a, b, c) {
        try {
            if (!Hd(c.origin) || !iq(c, a.i.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.Ra[d]) && a.za.tb(168, () => {
            e.call(a, b, c)
        })
    }
    class rS extends S {
        constructor(a, b) {
            var c = Y,
                d = Py;
            super();
            this.j = a;
            this.i = b;
            this.za = c;
            this.G = d;
            this.Ra = {};
            this.yb = this.za.Ca(168, (e, f) => void qS(this, e, f));
            this.Rc = this.za.Ca(169, (e, f) => mq(this.j, "ras::xsf", this.G, f));
            this.na = [];
            this.W(this.Ra);
            this.na.push(kN(this.j, "sth", this.yb, this.Rc))
        }
        g() {
            for (const a of this.na) a();
            this.na.length = 0;
            super.g()
        }
    };
    var sS = class extends rS {};

    function tS(a, b, c = null) {
        return new uS(a, b, c)
    }
    var uS = class extends sS {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = aF();
            this.l = () => {};
            rb(this.i, "load", this.l)
        }
        g() {
            sb(this.i, "load", this.l);
            super.g()
        }
        W(a) {
            a["adsense-labs"] = b => {
                if (b = lq(b).settings)
                    if (b = li(pk, JSON.parse(b)), I(b, 1) != null) {
                        if (Ah(b, b.P[x], ok, 4, 3, !1, !0).length > 0) {
                            var c = Bh(b, ok, 4, y(ef)),
                                d = c,
                                e = this.B;
                            const h = new En;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    $h(h, 1, !0);
                                    break;
                                case 2:
                                    $h(h, 2, !0)
                            }
                            f = new Fn;
                            f = H(f, 1, Gn, h);
                            qF(e, f);
                            e = this.j;
                            f = this.A;
                            if (!JE(EE(), 37, !1)) {
                                e = new tO(e);
                                for (var g of c) switch (g.getVersion()) {
                                    case 1:
                                        qO(e,
                                            "__gads", g, f);
                                        break;
                                    case 2:
                                        qO(e, "__gpi", g, f)
                                }
                                KE(EE(), 37, !0)
                            }
                            ch(b, 4)
                        }
                        if (g = z(b, ok, 5)) c = this.j, JE(EE(), 40, !1) || (c = new pS(c), e = Nh(g, 2) - Date.now() / 1E3, e = {
                            maxAge: Math.max(e, 0),
                            path: K(g, 3),
                            domain: K(g, 4),
                            secure: !1
                        }, IK("__eoi", g.getValue(), e, c.g), KE(EE(), 40, !0));
                        ch(b, 5);
                        g = this.j;
                        c = K(b, 1) || "";
                        if (PK({
                                win: g,
                                Ka: cO()
                            }).g != null) {
                            e = PK({
                                win: g,
                                Ka: cO()
                            });
                            e = e.g != null ? dO(e.getValue()) : {};
                            b !== null && (e[c] = ki(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (h) {}
                        }
                    }
            }
        }
    };

    function vS(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.i.style.transition = "height 500ms";
        wS(a)
    }

    function xS(a, b) {
        a.i.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function wS(a) {
        const b = `rect(0px, ${a.i.width}px, ${a.A}px, 0px)`;
        a.i.style.clip = b;
        a.l.style.clip = b;
        a.i.setAttribute("height", a.A);
        a.i.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function yS(a, b) {
        b = rd(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.L = rl(a.F).y;
        a.H = jq(a.j);
        if (a.L + a.A < a.H) return "2";
        if (a.L > eq(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.i.setAttribute("height", a.B);
        a.i.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.i.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.L, a.A);
        kl(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.i.width}px, ${b}px, 0px)`;
        kl(a.i, {
            clip: b
        });
        kl(a.l, {
            clip: b
        });
        return "0"
    }
    class zS extends sS {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.Z;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Pc = this.Qc = !1;
            this.sa = this.H = this.B = 0;
            this.bi = this.A / 5;
            this.L = rl(this.F).y;
            this.ai = mb(Sy(651, () => {
                this.L = rl(this.F).y;
                var c = this.H;
                this.H = jq(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.sa += c, this.sa >= this.bi ? (vS(this), xS(this, this.B)) : (this.A = Math.min(this.B, this.A + c), xS(this, c), wS(this)))) :
                    sb(this.j, "scroll", this.R)
            }), this);
            this.R = () => {
                var c = this.ai;
                wk.requestAnimationFrame ? wk.requestAnimationFrame(c) : c()
            }
        }
        W(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = lq(b);
                this.Qc || (this.Qc = !0, b = yS(this, b), b === "0" && rb(this.j, "scroll", this.R, nb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Pc || (this.Pc = !0, vS(this), sb(this.j, "scroll", this.R))
            }
        }
        g() {
            this.R && sb(this.j, "scroll", this.R, nb);
            super.g()
        }
    };

    function AS(a) {
        const b = a.L.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class BS extends S {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.L = c;
            this.B = 0;
            this.l = AS(this);
            this.H = lb(this.F, this);
            this.i = Sy(433, () => {
                var d = this.H;
                wk.requestAnimationFrame ? wk.requestAnimationFrame(d) : d()
            });
            rb(this.j, "scroll", this.i, nb)
        }
        F() {
            const a = AS(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (mN(c, "ig", b, "*", 2), ++this.B >= 10 && this.i && sb(this.j, "scroll", this.i, nb))
            }
            this.l = a
        }
    };

    function CS(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        kl(a, "transition", b.join(","))
    }
    var DS = jb(function() {
        const a = al(document, "DIV"),
            b = Nc ? "-webkit" : Mc ? "-moz" : Kc ? "-ms" : null;
        let c = "transition:opacity 1s linear;";
        b && (c += b + "-transition:opacity 1s linear;");
        uc(a, Xc("div", {
            style: c
        }));
        return nl(a.firstChild, "transition") != ""
    });

    function ES(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function FS(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function GS(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(HS, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function IS(a) {
        var b = GS(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var JS = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        xa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function KS(a) {
        let b = a.W;
        a.I = () => {};
        LS(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : id(c, b)
            } catch (g) {
                a.g.xa("c")
            }
            const f = MS(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.R = !0);
            if (d && !f && NS(e)) {
                FS(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && OS(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !cd(b)) {
                        FS(a.g, "c");
                        break
                    }
                } catch (g) {
                    FS(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && PS(a);
        return a.g
    }

    function QS(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) kl(k, m[n], "0px")
        }

        function c() {
            RS(d, g, h);
            !k || l || h || (b(SS), b(TS))
        }
        const d = a.C;
        d.style.overflow = a.Uc ? "visible" : "hidden";
        a.B && (a.F ? (CS(d, US()), CS(a.F, US())) : CS(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.L !== null && (d.style.opacity = String(a.L));
        const e = a.width != null && a.j != null && (a.Yd || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Yd || a.i > a.height) ? a.i : null;
        if (a.H) {
            const m =
                a.H.length;
            for (let n = 0; n < m; n++) RS(a.H[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.F,
            l = a.R;
        a.B ? t.setTimeout(c, 1E3) : c()
    }

    function VS(a) {
        if (a.A && !a.na || a.j == null && a.i == null && a.L == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        KS(a);
        a.A = b;
        if (!b || a.check != null && !GS(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        QS(a);
        return KS(a)
    }

    function OS(a, b) {
        let c = !1;
        b.display == "none" && (FS(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || FS(a.g, "v");
        b.overflow == "hidden" && FS(a.g, "o");
        b.position == "absolute" ? (FS(a.g, "a"), c = !0) : b.position == "fixed" && (FS(a.g, "f"), c = !0);
        return c
    }

    function LS(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = WS(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && ES(a.g, 0, "o"), d & 4 && ES(a.g, 1, "o"));
        return !(d & 1)
    }

    function MS(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (D) {
            a.g.xa("s")
        }
        var f = c.getAttribute("width"),
            g = rd(f),
            h = c.getAttribute("height"),
            k = rd(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = LS(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            w = sd(m) == a.width && sd(n) == a.height;
        m = w ? m : p;
        r = w ? n : r;
        p = sd(m);
        w = sd(r);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        w = a.height !== null && (w !== null && a.height >= w || k !== null && a.height >= k);
        k = !b && NS(d);
        w = b || w || k || !(f ||
            m || d && (!XS(String(d.minWidth)) || !YS(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!XS(String(d.minHeight)) || !YS(String(d.maxHeight))));
        ZS(a, 0, w, c, "width", f, a.width, a.j);
        $S(a, 0, "d", w, e, d, "width", m, a.width, a.j);
        $S(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        $S(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.Mf ? (c = /^html|body$/i.test(c.nodeName), f = sd(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.i != null && d && f && Math.round(f) !== a.i && !h && d.minHeight !== "100%", a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !XS(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !YS(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (ZS(a, 1, l, c, "height", h, a.height, a.i), $S(a, 1, "d", l, e, d, "height", r, a.height, a.i), $S(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), $S(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function PS(a) {
        function b() {
            if (c > 0) {
                var l = id(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = sd(l.width);
                l = sd(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.C,
            f = a.j,
            g = a.i,
            h = a.I;
        let k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function WS(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = id(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function ZS(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = rd(f);
                f == null && (a.g.xa("n"), ES(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.I;
                            a.I = (m, n) => {
                                m == b && vc(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else vc(d, e, String(h))
                } else ES(a.g, b, "d")
        }
    }

    function $S(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            typeof f != "string" || (c == "m" ? XS(f) : YS(f)) || (f = sd(f), f == null ? FS(a.g, "p") : k != null && FS(a.g, f == k ? "E" : "e"));
            if (typeof h == "string") {
                if (c == "m" ? XS(h) : YS(h)) return;
                h = sd(h);
                h == null && (a.g.xa("p"), ES(a.g, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.I;
                            a.I = (p, r) => {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = l + "px"
                } else ES(a.g, b, c)
        }
    }
    var eT = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new aT(this.C);
            this.F = this.I = null;
            this.R = !1;
            this.W = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new aT(this.C);
            this.A = g;
            this.na = bT(this.l, d.Wf, d.height, d.Jc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = cT(d.width);
            this.i = cT(d.height);
            this.L = this.A ? cT(d.opacity) : null;
            this.check = d.check;
            this.Jc = !!d.Jc;
            this.B = d.Wf == "animate" && !dT(this.l, this.i, this.Jc) && DS();
            this.Uc = !!d.Uc;
            this.g = new JS;
            dT(this.l, this.i, this.Jc) && FS(this.g, "r");
            e = this.l;
            e.g && e.i >= e.X && FS(this.g, "b");
            this.Yd = !!d.Yd;
            this.Mf = !!d.Mf
        }
    };

    function dT(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, cT(a.getHeight())), a = a.g && b >= a.X) : a = a.g && a.i >= a.X, d = a);
        return d
    }
    var aT = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && fd(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || t;
            this.X = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && UQ(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function bT(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return dT(a, c, d)
        }
    }

    function NS(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function fT(a, b, c, d) {
        return VS(new eT(a, b, d, c, null, null, !0))
    }
    var gT = new JS("s", ""),
        HS = RegExp("[lonvafrbpEe]", "g");

    function YS(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function XS(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function RS(a, b, c) {
        b !== null && rd(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && rd(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var SS = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        TS = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function US() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = SS;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = TS;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function cT(a) {
        return typeof a === "string" ? rd(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var hT = class extends sS {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        W(a) {
            a["resize-me"] = (b, c) => {
                b = lq(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = rd(b.r_nw),
                        f = rd(b.r_nh),
                        g = rd(b.r_no);
                    g != null || e !== 0 && f !== 0 || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const r = window;
                        if (r)
                            if (h === "no_rsz") b.err = "7", e = !0;
                            else {
                                var n = new aT(this.i);
                                if (n.g) {
                                    var p = n.getWidth();
                                    p != null && (b.w = p);
                                    p = n.getHeight();
                                    p != null && (b.h = p);
                                    bT(n, h, f, m) ? (n = this.l, d = fT(r, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        Wf: h,
                                        Uc: k,
                                        Yd: l,
                                        Jc: m
                                    }, [this.i]), b.r_cui && /^true$/.test(b.r_cui.toString()) && v(n, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = IS(d), b.frsz = (h === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.i.dataset.googleQueryId || this.i.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const iT = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function jT(a, b) {
        return new IntersectionObserver(b, a)
    }

    function kT(a, b, c) {
        rb(a, b, c);
        return () => sb(a, b, c)
    }
    let lT = null;

    function mT() {
        lT = Ll()
    }

    function nT(a, b) {
        return b ? lT === null ? (rb(a, "mousemove", mT, {
            passive: !0
        }), rb(a, "scroll", mT, {
            passive: !0
        }), mT(), !1) : Ll() - lT >= b * 1E3 : !1
    }

    function oT({
        win: a,
        element: b,
        Nh: c,
        Lh: d,
        Kh: e = 0,
        La: f,
        Dg: g,
        options: h = {},
        bh: k = !0,
        Sg: l = jT
    }) {
        let m, n = !1,
            p = !1;
        const r = [],
            w = l(h, (D, B) => {
                try {
                    const G = () => {
                        r.length || (d && (r.push(kT(b, "mouseenter", () => {
                            n = !0;
                            G()
                        })), r.push(kT(b, "mouseleave", () => {
                            n = !1;
                            G()
                        }))), r.push(kT(a.document, "visibilitychange", () => G())));
                        const E = nT(a, e),
                            A = WQ(a.document);
                        if (p && !n && !E && !A) m = m || a.setTimeout(() => {
                            nT(a, e) ? G() : (f(), B.disconnect())
                        }, c * 1E3);
                        else if (k || n || E || A) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = D[D.length - 1]);
                    G()
                } catch (G) {
                    g &&
                        g(G)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const D of r) D();
            m != null && a.clearTimeout(m)
        }
    };

    function pT(a, b, c, d = null) {
        return d ? (d = DK(d, a)) ? new qT(a, b, c, d) : null : null
    }

    function rT(a, b) {
        b = lq(b);
        rF(a.l, Io(new Ko, Eo(new Fo, Bo(new Co, rd(b.s_w) ? ? 0).setHeight(rd(b.s_h) ? ? 0).i()).i()).i());
        a.A = oT({
            win: a.j,
            element: a.Z,
            Nh: 1,
            Lh: !Kb(),
            Kh: 0,
            La: () => {
                var c = a.l;
                var d = new Ko;
                var e = (new Ho).i();
                d = H(d, 4, Jo, e);
                return void rF(c, d.i())
            },
            Dg: c => Y.aa(1268, c, void 0, void 0),
            options: {
                threshold: .5
            },
            bh: !0,
            Sg: void 0
        })
    }
    var qT = class extends sS {
        constructor(a, b, c, d) {
            super(a, b);
            this.Z = c;
            this.storage = d;
            this.l = aF();
            this.A = null
        }
        W(a) {
            a["survey-submitted"] = () => {
                var b = Ll() + X(Xu) * 1E3;
                this.storage.setItem("google_survey_fcap", String(b));
                b = this.l;
                var c = new Ko;
                var d = (new Go).i();
                c = H(c, 2, Jo, d);
                rF(b, c.i())
            };
            a["survey-rendered"] = b => void rT(this, b)
        }
        g() {
            this.A ? .();
            super.g()
        }
    };

    function sT(a, b, c, d, e) {
        return new tT(a, b, c, d, e)
    }

    function uT(a, b, c) {
        const d = a.i,
            e = a.F;
        if (e != null && d != null && iq(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new qk(f)
            } catch (g) {
                return
            }
            a.dispose();
            f = Mh(a.l, 1);
            f <= 0 || (a.B = oT({
                win: a.j,
                element: e,
                Nh: f - .2,
                Lh: !Kb(),
                Kh: Mh(a.l, 3),
                La: () => void vT(a, e),
                Dg: g => Pp.aa(1223, g, void 0, void 0),
                options: {
                    threshold: Ph(a.l, 2, 1)
                },
                bh: !0,
                Sg: void 0
            }))
        }
    }

    function vT(a, b) {
        a.H();
        setTimeout(Pp.Ca(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = b.parentElement || null;
            c && Uw.test(c.className) || (c = al(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            W(Ou) ? (wT(a, c, b), a.A.no_resize = !0, kr(DG(c), "filled", () => {
                bl(b)
            })) : bl(b);
            GR(c, a.A, a.j)
        }), 200)
    }

    function wT(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var tT = class extends sS {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.na.push(kN(b, "sth", this.yb, this.Rc))
        }
        W(a) {
            a.av_ref = (b, c) => uT(this, b, c)
        }
        g() {
            super.g();
            this.F = null;
            this.B && this.B()
        }
    };

    function xT(a) {
        if (W(Pu)) {
            var b = a.Z.parentElement || null;
            b && Uw.test(b.className) && kr(DG(b), "unfilled", () => {
                var c;
                if (c = W(Pu))
                    if (c = !JE(EE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= X(Yu) && (a.g ? (new tO(a.pubWin)).isSupported(a.g) : !1)) c = (c = a.g ? DK(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= Ll() : !1;
                        if (c) a: if (W(qu) || Hb() || Gb()) c = !0;
                            else {
                                if (Ib() && a.l && a.l.label) switch (a.l.label) {
                                    case "treatment_1.1":
                                    case "treatment_1.2":
                                    case "treatment_1.3":
                                    case "control_2":
                                        c = !0;
                                        break a
                                }
                                c = !1
                            }
                        c && (c = (c = bq(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    var e = {};
                    for (f of iT) d[f] && (e[f] = d[f]);
                    e.sso = !0;
                    GR(c, e, a.pubWin);
                    var f = c;
                    KE(EE(), 42, !0);
                    if (d = a.g ? DK(a.g, a.pubWin) : null) c = Ll() +
                        X(Wu) * 1E3, d.setItem("google_survey_fcap", String(c));
                    e = kq(a.pubWin);
                    var g = jq(a.pubWin);
                    const k = f.getBoundingClientRect();
                    f = aF();
                    c = new Ko;
                    d = new Do;
                    var h = new Ao;
                    g = ci(h, 1, Math.round(k.top + g));
                    e = ci(g, 2, Math.round(k.left + e)).i();
                    d = C(d, 1, e);
                    e = Bo(new Co, Math.round(a.D.google_ad_width ? ? 0)).setHeight(Math.round(a.D.google_ad_height ? ? 0)).i();
                    d = C(d, 2, e).i();
                    c = H(c, 1, Jo, d);
                    rF(f, c.i())
                }
            })
        }
    };
    const yT = /^blogger$/,
        KT = /^wordpress(.|\s|$)/i,
        LT = /^joomla!/i,
        MT = /^drupal/i,
        NT = /\/wp-content\//,
        OT = /\/wp-content\/plugins\/advanced-ads/,
        PT = /\/wp-content\/themes\/genesis/,
        QT = /\/wp-content\/plugins\/genesis/;

    function RT(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (OT.test(e)) return 5;
                if (QT.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", PT.test(e) || QT.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (yT.test(f)) return 1;
                if (KT.test(f)) return 2;
                if (LT.test(f)) return 3;
                if (MT.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", NT.test(d))) return 2;
        return 0
    };
    var ST = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        aihb: "aihb",
        aiof: "aiof",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap",
        aipecl: "aipecl",
        aiopts: "aiopts",
        aief: "aief"
    };

    function TT(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var UT = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function VT() {
        const a = new UT;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        const b = wd();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return TT(a)
    };
    var WT = Yj(TK);

    function XT(a = document) {
        const b = [],
            c = [];
        for (const f of Array.from(a.querySelectorAll("meta[name=generator][content]"))) {
            if (!f) continue;
            var d = f.getAttribute("content") ? ? "";
            const [, g, h] = /^([^0-9]+)(?:\s([0-9]+(?:\.[0-9]+){0,2})[.0-9]*)?[^0-9]*$/.exec(d) ? ? [], k = g, l = h;
            a = new SK;
            l && ei(a, 3, l.substring(0, 20));
            let m, n;
            if (k) {
                for (const [p, r] of (new Map([
                        [1, "WordPress"],
                        [2, "Drupal"],
                        [3, "MediaWiki"],
                        [4, "Blogger"],
                        [5, "SEOmatic"],
                        [7, "Flutter"],
                        [8, "Joomla! - Open Source Content Management"]
                    ])).entries()) {
                    var e = p;
                    if (r ===
                        k.trim()) {
                        m = e;
                        break
                    }
                }
                for (const [p, r] of (new Map([
                        [1, "All in One SEO (AIOSEO)"],
                        [2, "All in One SEO Pro (AIOSEO)"],
                        [3, "AMP for WP"],
                        [4, "Site Kit by Google"],
                        [5, "Elementor"],
                        [6, "Powered by WPBakery Page Builder - drag and drop page builder for WordPress."]
                    ])).entries())
                    if (e = p, r === k.trim()) {
                        n = e;
                        break
                    }
            }
            n ? (d = gi(a, 1, 1), gi(d, 2, n)) : m ? gi(a, 1, m) : (e = gi(a, 1, 0), ch(e, 3), c.push({
                content: d,
                name: k,
                version: l
            }));
            b.push(a)
        }
        return {
            labels: b,
            Io: c
        }
    };
    const YT = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        ZT = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function $T(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return YT.get(b.type) ? ? null
        } catch {}
        return ZT.get(a.performance ? .navigation ? .type) ? ? null
    };
    var aU = class extends O {
        constructor() {
            super()
        }
    };
    var bU = class extends O {
        constructor() {
            super()
        }
    };

    function cU(a, b) {
        if (Ib()) {
            var c = a.document.documentElement.lang;
            dU(a) ? eU(b, Md(a), !0, "", c) : (new MutationObserver((d, e) => {
                dU(a) && (eU(b, Md(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function dU(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function eU(a, b, c, d, e) {
        uk({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function fU(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const gU = /[+, ]/;

    function hU(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            g = Pd(d),
            h = !1,
            k = "",
            l = 1;
        a: {
            l = c.google_ad_width || d.google_ad_width;
            var m = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) h = !1;
            else {
                h = d.document;
                k = h.documentElement;
                if (l && m) {
                    var n = 1;
                    let r = 1;
                    d.innerHeight ? (n = d.innerWidth, r = d.innerHeight) : k && k.clientHeight ? (n = k.clientWidth, r = k.clientHeight) : h.body && (n = h.body.clientWidth, r = h.body.clientHeight);
                    if (r > 2 * m || n > 2 * l) {
                        h = !1;
                        break a
                    }
                }
                h = !0
            }
        }
        k = h;
        l = BE(g).sf;
        m = d.top == d ? 0 : cd(d.top) ? 1 : 2;
        n = 4;
        k || m !== 1 ? k ||
            m !== 2 ? k && m === 1 ? n = 7 : k && m === 2 && (n = 8) : n = 6 : n = 5;
        l && (n |= 16);
        k = String(n);
        l = DE(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        l !== 0 && (e.google_iframing_environment = l);
        if (!m && f.domain === "ad.yieldmanager.com") {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); k.indexOf("%") > -1;) try {
                k = decodeURIComponent(k)
            } catch (r) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && cd(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var p = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            p = null
        } else p = null;
        e.google_last_modified_time = p;
        d = g === g.top ? g.document.referrer : (d = Pk()) && d.referrer || "";
        e.google_referrer_url = d;
        CE(e, c);
        b.g() ? (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7, e.length) : e.indexOf("https://") == 0 && (e = e.substring(8,
            e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in NP), e.length >= 2 && (d = d || e[e.length - 2] in NP), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net") : e = "pagead2.googlesyndication.com";
        b = iU(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && jU.test(f) && (g = "/pagead/lopri?");
        e = `https://${e}${g}`;
        a = (hi(a.pageState.g(), 6) ? J(a.pageState.g(), 6) : J(a.ra, 9)) && c.google_debug_params ?
            c.google_debug_params : "";
        a = wl(b, e + a);
        return c.google_ad_url = a
    }

    function kU(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? a.defaultView : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && cd(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function lU(a, b) {
        var c = wO(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function mU(a, b) {
        a = (a = fd(a.pubWin)) && a.document ? xQ(a.document, a) : new Fk(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function nU(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function oU(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            g = Pd(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Pk(e)) && ya(h.data) && typeof h.data.type === "string" ? (h = h.data.type.toLowerCase(), h = h == "doubleclick" || h == "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = BE(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.sf || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.oc && (b.etu = a.oc);
        c = f ? DK(c, f) : null;
        (c = AR(d, f, c)) && (b.fc = c);
        if (!Bl(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = il(new Xk(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const ua = h.contentWindow.document;
                    ua.open();
                    var k = sc("<!DOCTYPE html>");
                    ua.write(tc(k));
                    ua.close();
                    g += ua.documentMode
                } catch (ua) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, r, w, D, B, G, E;
        try {
            l = e.screenX, m = e.screenY
        } catch (ua) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (ua) {}
        try {
            r = e.innerWidth, w = e.innerHeight
        } catch (ua) {}
        try {
            D = e.screenLeft, B = e.screenTop
        } catch (ua) {}
        try {
            r =
                e.innerWidth, w = e.innerHeight
        } catch (ua) {}
        try {
            G = e.screen.availWidth, E = e.screen.availTop
        } catch (ua) {}
        b.brdim = [D, B, l, m, G, E, n, p, r, w].join();
        k = 0;
        t.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = UQ(e.document);
        k = a.Z;
        e = uR(d) ? gT : VS(new eT(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = IS(e);
        if (!uR(d) && (e = Cl(d), e != null)) {
            k = 0;
            a: {
                try {
                    {
                        var A = d.google_async_iframe_id;
                        const ua = window.document;
                        if (A) var F = ua.getElementById(A);
                        else {
                            var L = ua.getElementsByTagName("script"),
                                ja = L[L.length - 1];
                            F = ja && ja.parentNode || null
                        }
                    }
                    if (A = F) {
                        F = [];
                        L = 0;
                        for (var qb = Date.now(); ++L <= 100 && Date.now() - qb < 50 && (A = kU(A));) A.nodeType === 1 && F.push(A);
                        var na = F;
                        b: {
                            for (qb = 0; qb < na.length; qb++) {
                                c: {
                                    var va = na[qb];
                                    try {
                                        if (va.parentNode && va.offsetWidth > 0 && va.offsetHeight > 0 && va.style && va.style.display !== "none" && va.style.visibility !== "hidden" && (!va.style.opacity || Number(va.style.opacity) !== 0)) {
                                            const ua = va.getBoundingClientRect();
                                            var wa = ua.right > 0 && ua.bottom > 0;
                                            break c
                                        }
                                    } catch (ua) {}
                                    wa = !1
                                }
                                if (!wa) {
                                    var zb = !1;
                                    break b
                                }
                            }
                            zb = !0
                        }
                        if (zb) {
                            b: {
                                const ua = Date.now();zb = /^html|body$/i;wa = /^fixed/i;
                                for (va = 0; va < na.length && Date.now() - ua < 50; va++) {
                                    const tf = na[va];
                                    if (!zb.test(tf.tagName) && wa.test(tf.style.position || pl(tf, "position"))) {
                                        var Ab = tf;
                                        break b
                                    }
                                }
                                Ab = null
                            }
                            break a
                        }
                    }
                } catch {}
                Ab = null
            }
            Ab && Ab.offsetWidth * Ab.offsetHeight <= e.width * e.height * 4 && (k = 1);
            b.pfx = k
        }
        a: {
            if (Math.random() < .05 && f) try {
                const ua = f.document.getElementsByTagName("head")[0];
                var Rj = ua ? RT(ua) : 0;
                break a
            } catch (ua) {}
            Rj = 0
        }
        f = Rj;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Ua && (b.alvm = d.google_lrv ||
            "none")
    }

    function pU(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : dd(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function qU(a, b) {
        const c = JE(b, 8, {});
        b = JE(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function rU(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Rp;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (m) {}
            g = null
        }(e = (e = g) ? aS(e, t.Date.now() - Rp, 1E6) : null) && (b.bdt = e);
        b.idt = aS(a.H, Rp);
        e = a.D;
        b.shv = a.pageState.g().g() || K(a.ra, 2);
        a.Ua && (b.mjsv = a.Ua);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) &&
            (b.saldr = e.google_loader_used);
        if (e = Pk(a.pubWin)) b.is_amp = 1, b.amp_v = Qk(e), (e = Rk(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new tO(a.pubWin);
        (g = pO(e, "__gads", c)) ? b.cookie = g: e.isSupported(c) && (b.cookie_enabled = "1");
        (g = pO(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        pO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new pS(a.pubWin);
        g = {
            If: !1,
            Jf: !a.B
        };
        (f = oS(e, c, g)) ? b.eo_id_str = f: e.isEnabled(c, g) && (b.eoidce = "1");
        c = EE();
        g = JE(c, 8, {});
        e = d.google_ad_section;
        g[e] && (b.prev_fmts = g[e]);
        g = JE(c, 9, {});
        g[e] && (b.prev_slotnames =
            g[e].toLowerCase());
        qU(d, c);
        e = JE(c, 15, 0);
        e > 0 && (b.nras = String(e));
        (g = Pk(window)) ? (g ? (e = g.pageViewId, g = g.clientId, typeof g === "string" && (e += g.replace(/\D/g, "").substr(0, 6))) : e = null, e = +e) : (e = Pd(window), g = e.google_global_correlator, g || (e.google_global_correlator = g = 1 + Math.floor(Math.random() * 8796093022208)), e = g);
        b.correlator = JE(c, 7, e);
        W(zw) && (b.rume = 1);
        if (d.google_ad_channel) {
            e = JE(c, 10, {});
            g = "";
            f = d.google_ad_channel.split(gU);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                e[k] ? g += k + "+" : e[k] = !0
            }
            b.pv_ch = g
        }
        if (d.google_ad_host_channel) {
            e =
                d.google_ad_host_channel;
            g = JE(c, 11, []);
            f = e.split("|");
            c = -1;
            e = [];
            for (h = 0; h < f.length; h++) {
                k = f[h].split(gU);
                g[h] || (g[h] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    const p = k[n];
                    p !== "" && (g[h][p] ? m += "+" + p : g[h][p] = !0)
                }
                m = m.slice(1);
                e[h] = m;
                m !== "" && (c = h)
            }
            g = "";
            if (c > -1) {
                for (f = 0; f < c; f++) g += e[f] + "|";
                g += e[c]
            }
            b.pv_h_ch = g
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            c = d.google_ad_client;
            try {
                const m = Pd(window);
                let n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (c in n) {
                    var l = 1;
                    break a
                }
                n[c] = !0;
                l = 2;
                break a
            } catch {
                l = 0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        a.K && W(Tu) && (l = a.K, l = Ib() && dU(l) ? l.document.documentElement.lang : void 0, l && (b.tl = l));
        W(Uu) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        pU(a.pubWin, b);
        (a = d.google_ad_layout) && RR[a] >= 0 && (b.rplot = RR[a])
    }

    function sU(a, b) {
        a = a.g;
        PE() && (b.npa = 1);
        if (a) {
            hi(a, 3) && (b.gdpr = a.A() ? "1" : "0");
            var c = I(a, 1);
            c && (b.us_privacy = c);
            (c = I(a, 2)) && (b.gdpr_consent = c);
            (c = I(a, 4)) && (b.addtl_consent = c);
            (c = Lh(a, 7)) && (b.tcfe = c);
            (c = K(a, 11)) && (b.gpp = c);
            (a = Hh(a, 10, y())) && a.length > 0 && (b.gpp_sid = a.join(","))
        }
    }

    function tU(a, b) {
        const c = a.D;
        sU(a, b);
        kd(ST, (d, e) => {
            b[d] = c[e]
        });
        uR(c) && (a = HR(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = jy(c), a.g != null && (a = ws(a.getValue()), b.pi = a))
    }

    function uU(a, b) {
        var c = Tk() || vQ(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = vQ(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function vU(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = vQ(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = md(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function wU(a, b) {
        (a = ME()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function xU(a, b) {
        (a = Mh(a.pageState.g(), 2)) && a >= 0 && (b.tmod = a)
    }

    function yU(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Zd(a))
    }

    function zU(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function AU(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function BU(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ja).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function CU(a, b) {
        var c;
        if (c = !W(Fw)) c = a.l ? .label, c = !(W(lw) && c && c.match(Hw(jw)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && gO("run-ad-auction", a.pubWin.document) && (c = new UT, c.set(1, hO(a.pubWin.navigator)), b.tdf = TT(c)))
    }

    function DU(a, b) {
        if (W(hw) && navigator.deprecatedRunAdAuctionEnforcesKAnonymity) {
            var c = new bU;
            var d = new aU;
            d = fi(d, 4, "deprecated_kanon");
            c = C(c, 2, d)
        }
        a.l != null && Ib() && (c ? ? (c = new bU), d = fi(c, 3, a.l.label), N(d, 4, a.l.status));
        c && (b.psd = Zd(ji(c)))
    }

    function EU(a, b) {
        W(ww) || gO("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function FU(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function GU(a, b) {
        if (a.C) {
            a.C.zj && (b.xatf = 1);
            try {
                a.C.jf ? .disconnect(), a.C.jf = void 0
            } catch {}
        }
    }

    function HU(a, b = document) {
        if (W(gu)) try {
            const {
                labels: c
            } = XT(b);
            c.length && (a.pgls = c.map(d => Xd(WT(d))).join("~"))
        } catch (c) {
            Y.aa(1278, c)
        }
    }

    function iU(a, b) {
        const c = {};
        tU(a, c);
        yU(a, c);
        rU(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        try {
            var d = wk.history.length
        } catch (e) {
            d = 0
        }
        c.u_his = d;
        c.u_h = wk.screen ? .height;
        c.u_w = wk.screen ? .width;
        c.u_ah = wk.screen ? .availHeight;
        c.u_aw = wk.screen ? .availWidth;
        c.u_cd = wk.screen ? .colorDepth;
        c.u_sd = wQ(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        Ry(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = zQ(a.K, a.Z);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                yQ(a.Z) || (c.adx = -12245933, c.ady = -12245933, a.i |= 32768)
            }
        });
        uU(a, c);
        vU(a, c);
        mU(a, c);
        lU(a, c);
        c.oid = 2;
        wU(a, c);
        c.pvsid = Md(a.pubWin, Y);
        xU(a, c);
        zU(a, c);
        c.uas = fU(a.pubWin);
        (d = $T(a.pubWin)) && (c.nvt = d);
        a.I && (c.scar = a.I);
        a.A instanceof Uint8Array ? c.topics = Xd(a.A) : a.A && (c.topics = a.A, c.tps = a.A);
        GU(a, c);
        oU(a, c, b);
        c.fu = a.i;
        c.bc = VT();
        if (hi(a.pageState.g(), 6) ? J(a.pageState.g(), 6) : J(a.ra, 9))
            if (xO(c), c.creatives = nU(/\b(?:creatives)=([\d,]+)/), c.adgroups = nU(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0;
        Ck() && (c.atl = !0);
        c.bz = Qd(a.pubWin);
        AU(a, c);
        BU(a, c);
        CU(a, c);
        DU(a, c);
        EU(a, c);
        FU(a, c);
        String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        HU(c, a.pubWin.document);
        return c
    }
    const jU = /YtLoPri/;
    var IU = class extends O {};

    function JU(a) {
        return Bh(a, IU, 15, y())
    }
    var KU = class extends O {},
        LU = Zj(KU);

    function MU() {
        var a = new NU;
        var b = new mt;
        b = gi(b, 2, 4);
        b = gi(b, 8, 1);
        var c = new ss;
        c = ei(c, 7, "#dpId");
        b = C(b, 1, c);
        return Fh(a, 3, mt, b)
    }
    var NU = class extends O {},
        OU = Zj(NU);

    function PU(a, b) {
        return K(a, 10).replace("TERM", b)
    };
    var QU = class {
        constructor(a) {
            this.Mb = a.Mb ? ? [];
            this.Ue = !!a.Ue;
            this.We = !!a.We;
            this.Pd = a.Pd ? ? 250;
            this.Od = a.Od ? ? 300;
            this.te = a.te ? ? 15E3;
            this.qe = a.qe ? ? "#FFFFFF";
            this.Ab = a.Ab ? ? "#1A73E8";
            this.se = a.se ? ? 15E3;
            this.ue = a.ue ? ? 0;
            this.Ve = a.Ve ? ? !0;
            this.He = a.He || "#0B57D0";
            this.cd = a.cd || "#FFFFFF";
            this.Jd = a.Jd ? ? 670;
            this.Nc = !!a.Nc;
            this.ef = a.ef ? ? [];
            this.nf = !!a.nf;
            this.Id = a.Id ? ? 0;
            this.Kf = a.Kf ? ? !0;
            this.pe = !!a.pe;
            this.Fd = a.Fd ? ? 0;
            this.Ze = !!a.Ze;
            this.Zb = !!a.Zb;
            this.Hf = !!a.Hf;
            this.uh = !!a.uh;
            this.Se = !!a.Se;
            this.Vf = !!a.Vf;
            this.Nd =
                a.Nd ? ? 0;
            this.Lb = a.Lb ? ? 0
        }
    };

    function RU(a, b, c, d, e, f, g, h, k) {
        const l = k(999, a.top, m => {
            m.data.action === "init" && m.data.adChannel === "ShoppingVariant" && SU(a, b, d, c, e, f, g, h)
        });
        g(() => {
            a.top.removeEventListener("message", l)
        })
    }

    function SU(a, b, c, d, e, f, g, h) {
        J(f, 13) || KA(c, d, e);
        const k = b.contentDocument.documentElement,
            l = new ResizeObserver(() => {
                b.height = `${Math.ceil(k.offsetHeight+26)}px`
            });
        l.observe(k);
        const m = h(1066, a, () => {
            const n = k.offsetHeight;
            n && (b.height = `${n+26}px`)
        }, 1E3);
        g(() => {
            l.disconnect();
            a.clearInterval(m)
        })
    }
    var TU = class {
        constructor(a) {
            this.g = a
        }
        Ee(a) {
            const b = a.win.document.createElement("iframe"),
                c = a.U,
                d = new LA(b, K(c, 16), "anno-cse", this.g.replace("ca", "partner"), "ShoppingVariant", a.win.location, K(c, 7), PU(c, a.Da), a.J.Mb.filter(e => e !== 42), !1, void 0, !0, void 0, !0, this.g);
            d.M();
            RU(a.win, b, a.Da, d, a.Bh, c, a.yh, a.Rb, a.Vb);
            return b
        }
    };
    var UU = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        Ee(a) {
            var b = a.win;
            b = a.pa ? .95 * b.innerHeight - 30 : b.innerHeight;
            var c = a.Da;
            var d = a.Cg || "",
                e = this.g,
                f = a.yg,
                g = a.ba,
                h = !!J(a.U, 13),
                k = a.J.ef.join(",");
            const l = a.J.Kf,
                m = this.i ? ? -1;
            var n = gA;
            g = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (g ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + eA(c) + "</div>" + (m !== -1 ? "<script>window[" +
                rA(sA("goog_pvsid")) + "] = " + rA(sA(m)) + ";\x3c/script>" : "");
            h ? d = "" : (d = '<script data-ad-intent-query="' + pA(c) + '" data-ad-intent-qetid="' + pA(d) + '" data-ad-intent-eids="' + pA(k) + '" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', k = encodeURIComponent(String(e)), vA.lastIndex = 0, k = vA.test(k) ? k.replace(vA, wA) : k, d = d + k + '" crossorigin="anonymous">\x3c/script>');
            c = n(g + d + '<ins class="adsbygoogle" style="display:inline-block;width:' + pA(Z(f)) + "px;height:" + pA(Z(b - 30)) + 'px" data-ad-client="' +
                pA(e) + '"></ins>' + (l ? "<script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>" : "") + (h ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " + String(c).replace(tA, uA) + ' and " + "property code = ' + String(e).replace(tA, uA) + '";\x3c/script>' : ""));
            c = Xc("body", {
                dir: a.ba ? "rtl" : "ltr",
                lang: K(a.U, 7),
                style: "margin:0px;height:100%;padding-top: 0px;overflow: hidden;"
            }, bA(c));
            a = a.win.document.createElement("IFRAME");
            v(a, {
                border: "0",
                width: "100%",
                height: b + "px"
            });
            a.srcdoc = tc(c);
            return a
        }
    };

    function VU(a, b) {
        a = qy(Fx([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.ma.g > d.ma.g ? c : d)
    };

    function WU(a, b, c, d, e, f, g, h) {
        var k = new mo,
            l = new On;
        c = fi(l, 1, c);
        d = fi(c, 2, d);
        b = M(d, 3, b);
        k = C(k, 1, b);
        b = new Pn;
        b = fi(b, 2, a.language);
        e = fi(b, 3, e);
        e = C(k, 2, e);
        g = di(e, 3, Math.round(g));
        c = JU(f);
        f = e = k = b = d = 0;
        for (m of c) d += XU(K(m, 6) !== "") + XU(K(m, 7) !== "") + XU(K(m, 5) !== ""), b += XU(K(m, 6) !== "") + XU(K(m, 7) !== "") + XU(K(m, 5) !== ""), k += XU(K(m, 6) !== ""), e += XU(K(m, 7) !== ""), f += XU(K(m, 5) !== "");
        var m = new ko;
        m = ai(m, 1, c.length);
        m = ai(m, 2, d);
        m = ch(m, 3, b == null ? b : Af(b));
        m = ch(m, 4, k == null ? k : Af(k));
        m = ch(m, 5, e == null ? e : Af(e));
        m = ai(m, 6, f);
        m = C(g,
            6, m);
        if (h.length) {
            var n = new Zn;
            n = Ch(n, 1, h);
            H(m, 5, lo, n)
        } else {
            a.g = a.entries.length;
            h = new jo;
            e = a.entries;
            a = h.P[x];
            bf(a);
            a = Ah(h, a, io, 2, 2, !1, !0);
            g = f = 0;
            if (Array.isArray(e))
                for (e = ig ? .get(e) || e, n = e.length, k = 0; k < n; k++) b = e[k], a.push(b), (b = Oe(b.P)) && !f++ && (a[x] &= -9), b || g++ || (a[x] &= -17);
            else
                for (n of e) e = n, a.push(e), (e = Oe(e.P)) && !f++ && (a[x] &= -9), e || g++ || (a[x] &= -17);
            H(m, 4, lo, h)
        }
        return m
    }

    function YU(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new ro,
            e = new jo;
        a = Ch(e, 2, a.entries.slice(c));
        d = C(d, 1, a);
        b !== 0 && di(d, 2, Math.round(b));
        return d
    }
    var ZU = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function XU(a) {
        return a ? 1 : 0
    };
    async function $U(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.ka(b) + a.j
    }
    var aV = class {
        constructor(a, b) {
            var c = X(Tv);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.ka(2) + c
        }
    };
    var bV = class {
            constructor(a) {
                this.performance = a
            }
            ka() {
                return this.performance.now()
            }
        },
        cV = class {
            ka() {
                return Date.now()
            }
        };
    const dV = [255, 255, 255];

    function eV(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function fV(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = eV(b.backgroundColor);
        var c = gV(b);
        if (c) return c;
        a = (a = a.parentElement) ? fV(a) : dV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function gV(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function hV(a) {
        return a.Hd > 0 && a.i.j >= a.Hd
    }
    var jV = class {
        constructor(a, b, c, d) {
            this.Of = b;
            this.Be = c;
            this.Hd = d;
            this.g = 0;
            this.i = new iV(a)
        }
    };

    function kV(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function lV(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class iV {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function mV(a) {
        v(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }

    function nV(a, b) {
        b = a.document.createElement(b);
        v(b, Pt(a));
        v(b, {
            color: "inherit",
            direction: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-weight": "inherit",
            "text-align": "inherit",
            "text-orientation": "inherit",
            "writing-mode": "inherit"
        });
        return b
    }

    function oV(a) {
        a.dataset.googleVignette = "false";
        a.dataset.googleInterstitial = "false"
    };

    function pV(a, b) {
        a = qV(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        v(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function rV(a, b, c) {
        a = sV(a, "20px", b.Ab, c);
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function tV(a, b, c) {
        a = qV(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        v(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: b.Ab
        });
        a.role = "button";
        a.ariaLabel = c;
        a.tabIndex = 0;
        return a
    }
    const uV = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function sV(a, b, c, d) {
        a = qV(a, "0 -960 960 960", b, b, uV[d]);
        v(a, {
            fill: c,
            cursor: "inherit"
        });
        return a
    }

    function qV(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        v(e, Pt(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        mV(e);
        e.appendChild(f);
        return e
    };

    function vV(a, b, c, d) {
        const e = b.J.Zb ? nV(a, "div") : a.document.createElement("DIV");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild;
        var g = b.J;
        var h = b.g.get(c) || 0;
        g = sV(a, d, g.cd, h);
        v(g, {
            position: "relative",
            top: "3px"
        });
        h = b.J.Zb ? nV(a, "span") : document.createElement("SPAN");
        v(h, {
            display: "inline-block",
            "padding-left": b.ba() ? "" : "3px",
            "padding-right": b.ba() ? "3px" : ""
        });
        h.appendChild(g);
        f.call(e, h);
        f = e.appendChild;
        g = b.J.Zb ? nV(a, "span") : a.document.createElement("SPAN");
        g.appendChild(a.document.createTextNode(c));
        v(g, {
            position: "relative",
            left: b.ba() ? "" : "3px",
            right: b.ba() ? "3px" : "",
            "padding-left": b.ba() ? "6px" : "",
            "padding-right": b.ba() ? "" : "6px"
        });
        f.call(e, g);
        v(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.ba() ? "7px" : "6px",
            "padding-right": b.ba() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.J.cd,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.J.He,
            cursor: "pointer",
            "margin-top": "-3px"
        });
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        return e
    };
    const wV = [{
        Pf: "1907259590",
        Qd: 480,
        ne: 220
    }, {
        Pf: "2837189651",
        Qd: 400,
        ne: 180
    }, {
        Pf: "9211025045",
        Qd: 360,
        ne: 160
    }, {
        Pf: "6584860439",
        Qd: -Infinity,
        ne: 150
    }];

    function xV(a) {
        wV.find(b => b.Qd <= a)
    };
    const yV = new class {
        constructor() {
            this.g = []
        }
    };
    let zV = !1;

    function AV(a) {
        BV(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new wo;
                b = di(b, 1, a.i);
                var c = new vo;
                b = H(b, 2, xo, c);
                a.config.V.Xd(b)
            }
        }, 1E4)
    }
    class CV {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function DV(a) {
        yV.g.push(a)
    }

    function EV(a, b, c, d, e, f = null) {
        xV(a.document.body.clientWidth);
        d = b.pa ? FV(a, b, d, e, f) : GV(a, b, d, e, f);
        lr(d.isVisible(), !1, () => {
            zV = !1;
            for (const h of yV.g) h();
            yV.g.length = 0
        });
        d.show({
            xg: !0
        });
        zV = !0;
        const g = new CV(a, b, c);
        AV(g);
        yV.g.push(() => {
            var h = b.V,
                k = h.Xd;
            var l = new wo;
            l = di(l, 1, c);
            var m = new uo;
            l = H(l, 3, xo, m);
            k.call(h, l);
            g.g = !0
        })
    }

    function FV(a, b, c, d, e) {
        d = b.kd.Ee({
            win: a,
            Da: c,
            Bh: d,
            J: b.J,
            pa: b.pa,
            ba: b.ba(),
            U: b.U,
            Cg: e,
            yg: b.pa ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Jd),
            Vb: b.Vb.bind(b),
            Rb: b.Rb.bind(b),
            yh: DV
        });
        return oC(a, d, {
            qh: .95,
            Ig: .95,
            zIndex: 2147483647,
            nc: !0,
            Re: "adpub-drawer-root",
            Qe: !1,
            Ma: !0,
            Ye: new T(PU(b.U, c))
        })
    }

    function GV(a, b, c, d, e) {
        const f = b.pa ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Jd);
        d = b.kd.Ee({
            win: a,
            Da: c,
            Bh: d,
            J: b.J,
            pa: b.pa,
            ba: b.ba(),
            U: b.U,
            Cg: e,
            yg: f,
            Vb: b.Vb.bind(b),
            Rb: b.Rb.bind(b),
            yh: DV
        });
        return xB(a, d, {
            qd: `${f}px`,
            nd: b.ba(),
            dd: K(b.U, 14),
            zIndex: 2147483647,
            nc: !0,
            Ag: !0,
            Re: "adpub-drawer-root",
            Qe: !1,
            Ma: !0,
            Ye: new T(PU(b.U, c))
        })
    };
    const HV = ["BTN", "BUTTON"];

    function IV(a, b) {
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "A":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1
        }
        return !((a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB")) && a.offsetHeight <=
            50) && (!b.Se || !JV(a))
    }

    function JV(a) {
        return HV.some(b => a.className.toUpperCase ? .() ? .includes(b) || a.id.toUpperCase ? .() ? .includes(b))
    };

    function KV(a, b, c) {
        b = b.getBoundingClientRect();
        a = ho(go(new io, a), 3);
        c = fi(a, 4, c);
        c = bi(c, 6, Math.round(b.x));
        return bi(c, 7, Math.round(b.y))
    }

    function LV(a) {
        a = eV(a);
        var b = new eo;
        b = bi(b, 1, a[0]);
        b = bi(b, 2, a[1]);
        b = bi(b, 3, a[2]);
        return sh(b, 4, of (a[3]), 0)
    };
    const MV = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function NV(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || MV.test(a)
        }
    };

    function OV(a, b) {
        const c = new PV(b);
        for (const d of a) K(d, 5) && Sh(d, 3, y()).forEach(e => {
            QV(c, e, e)
        });
        RV(c);
        return new SV(c)
    }

    function TV(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.g, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var SV = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function QV(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new UV), a.g[a.size].parentId = c, a.g[a.size].C = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].A = d;
        a.g[c].B = a.j.length;
        a.j.push(b.length)
    }

    function RV(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.parentId === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].parentId].g;
                for (var e = c.g[f].C;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const g of a.g[f].sa) b.push(g)
        }
    }
    class PV {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new UV];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let h = b;
                for (;;) {
                    h = this.g[h].i;
                    if (h === 0) break;
                    const k = g + 1 - this.j[this.g[h].B],
                        l = g;
                    d = a;
                    e = l;
                    var f = this.C;
                    NV(d.charAt(k - 1), f) && NV(d.charAt(e + 1), f) && c.push(new VV(k, l, this.A.get(this.g[h].A)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class UV {
        constructor() {
            this.j = new Map;
            this.H = !1;
            this.na = this.F = this.I = this.W = this.L = this.R = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set parentId(a) {
            this.R = a
        }
        get parentId() {
            return this.R
        }
        set C(a) {
            this.L = a
        }
        get C() {
            return this.L
        }
        set l(a) {
            this.H = a
        }
        get l() {
            return this.H
        }
        set A(a) {
            this.F = a
        }
        get A() {
            return this.F
        }
        set g(a) {
            this.W = a
        }
        get g() {
            return this.W
        }
        set i(a) {
            this.I = a
        }
        get i() {
            return this.I
        }
        set B(a) {
            this.na = a
        }
        get B() {
            return this.na
        }
        get sa() {
            return this.j.values()
        }
    }
    var VV = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.A = c
        }
        get g() {
            return this.j
        }
        get l() {
            return this.i
        }
        get Da() {
            return this.A
        }
        get length() {
            return this.i - this.j
        }
    };
    async function WV(a, b, c, d, e) {
        const f = OV(JU(b.U), b.i);
        if (!f.isEmpty()) {
            var g = new Map;
            for (const h of JU(b.U).filter(k => K(k, 5))) Sh(h, 3, y()).forEach(k => {
                g.set(k, K(h, 1))
            });
            await XV(a, a.document.body, b, f, g, new Set, c, d, b.J.Id ? new jV(0, 0, 0, b.J.Id) : null, b.J.Nd ? new YV(b.J.Nd) : null, e)
        }
    }
    async function XV(a, b, c, d, e, f, g, h, k, l, m) {
        g.g.ka(9) >= g.i && await $U(g, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !(b.classList ? .contains("google-anno-skip") || c.J.Ze && !IV(b, c.J)))
            if (c.J.nf && f.size && b.nodeType === Node.ELEMENT_NODE && ZV(a, b) && b.parentElement && !$V(a, c, b.parentElement) && aW(a, l, b.getBoundingClientRect().top) && bW(a, f, c, h, b.parentElement, b, k, l), b.nodeType === Node.TEXT_NODE && b.textContent) TV(d, b.textContent).map(n => e.get(n.Da)).filter(n => !!n).forEach(n => void f.add(n));
            else {
                for (const n of b.childNodes) await XV(a,
                    n, c, d, e, f, g, h, k, l, m);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) && !$V(a, c, b) && aW(a, l, b.getBoundingClientRect().bottom) && bW(a, f, c, h, b, null, k, l)
            }
    }

    function bW(a, b, c, d, e, f, g, h) {
        for (const [l, m] of [...b].entries()) {
            var k = l;
            const n = m;
            if (g && hV(g) || c.J.Lb && k === c.J.Lb) return;
            c.J.Lb && b.delete(n);
            const p = KV(c.V.Vc(), f ? ? e, n);
            d.entries.push(Wg(p));
            g && lV(g.i, n, g.g);
            if (J(c.U, 17)) continue;
            k = vV(a, c, n, e);
            const r = cW(k, c, Ih(Sf($g(p, 10)), "0"));
            oV(k);
            dW(c, 999, k, w => {
                try {
                    var D = c.V,
                        B = D.ac,
                        G = po(no(n), Ih(Sf($g(p, 10)), "0"));
                    var E = ci(G, 7, r.i);
                    const A = B.call(D, E);
                    EV(a, c, A, n, c.A.get(n) || "");
                    return !1
                } finally {
                    w.preventDefault(), c.J.Vf && w.stopImmediatePropagation()
                }
            });
            e.insertBefore(k,
                f);
            h && eW(h, k.getBoundingClientRect().bottom + window.scrollY)
        }
        c.J.Lb || b.clear()
    }

    function ZV(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }

    function $V(a, b, c) {
        if (!b.J.Fd) return !1;
        a = sd(a.getComputedStyle(c).fontSize);
        return a !== null && a > b.J.Fd
    }

    function aW(a, b, c) {
        return b ? b.g === void 0 || c + a.scrollY - b.g > b.i : !0
    }
    class fW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function cW(a, b, c) {
        const d = new fW;
        gW(b, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = c;
                    e = b.V;
                    var g = e.Je,
                        h = new Kn;
                    f = sh(h, 1, Rf(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = b.V, g = e.Ie, f = new Jn, f = di(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(a);
        return d
    }

    function eW(a, b) {
        a.g = b
    }
    class YV {
        constructor(a) {
            this.i = a;
            this.g = void 0
        }
    };

    function hW(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(pV(b, "12px"));
            g.appendChild(b.document.createTextNode(d));
            fE(b, c || null, {
                informationText: g
            }, e, f ? h => {
                f.Xe(h)
            } : f);
            a.g = !0
        }
    }
    var iW = class {
        constructor() {
            this.g = !1
        }
    };

    function jW(a, b) {
        const c = b.pa === b.ba;
        var d = kW(a, b, c);
        if (!d) return null;
        d = d.position.ud();
        a = lW(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.T - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.T;
        return {
            Ba: c ? e - a : 16,
            Ja: c ? 16 : e - a,
            ga: d
        }
    }

    function mW(a, b) {
        const c = aq(a),
            d = bq(a);
        return OC(new SC(a), new Gk(d - b.ga - 50, c - b.Ja, d - b.ga, b.Ba)).size > 0
    }

    function kW(a, b, c) {
        b = Math.floor(b.X * .3);
        return b < 66 ? null : VC(a, {
            Qb: c ? aD({
                ga: 16,
                Ja: 16
            }) : ZC({
                ga: 16,
                Ba: 16
            }),
            uf: b - 66,
            xb: 200,
            yf: 50,
            Gd: b,
            lb: 16
        }, [a.document.body]).Ce
    }

    function lW(a, b, c, d) {
        a = c.pa ? nW(a, b, c) : oW(a, b, c);
        b = c.T;
        let e = c.pa ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function nW(a, b, c) {
        const d = c.X;
        return OC(new SC(a), new Gk(d - b - 50, c.T - 16, d - b, 16))
    }

    function oW(a, b, c) {
        const d = c.X,
            e = c.T;
        c = c.ba;
        return OC(new SC(a), new Gk(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function pW(a, b, c) {
        const d = a.ba;
        return {
            Ba: d ? qW(a, b, c) : c,
            Ja: d ? c : qW(a, b, c),
            ga: 16
        }
    }

    function qW(a, b, c) {
        const d = a.T;
        return a.pa ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function rW(a, b) {
        const c = b.ba,
            d = b.T;
        a = b.pa ? nW(a, 16, b) : oW(a, 16, b);
        return Array.from(a).map(e => new UC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function sW(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, Pt(a));
        e.id = "gda";
        e.appendChild(tV(a, b.J, K(b.U, 18)));
        oV(e);
        dW(b, 1064, e, f => {
            d ? .();
            bl(c);
            f.preventDefault();
            f.stopImmediatePropagation();
            return !1
        });
        return e
    }

    function tW(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, Pt(a));
        mV(e);
        v(e, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.ba(), "50px"),
            right: b.ba() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: b.J.Ab,
            cursor: "pointer",
            transition: "width 5s"
        });
        b.pa || v(e, {
            "justify-content": ""
        });
        const f = rV(a, b.J, b.g.get(d.ya) || 0),
            g = document.createElement("SPAN");
        v(g, {
            display: "inline-block",
            cursor: "inherit"
        });
        v(g, {
            "margin-left": b.ba() ? "6px" : "4px",
            "margin-right": b.ba() ? "4px" : "6px",
            "margin-top": "12px"
        });
        e.appendChild(g);
        g.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        c.tabIndex = 0;
        c.role = "link";
        c.ariaLive = "polite";
        uW(c, d.ya, K(b.U, 19));
        v(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.J.Ab
        });
        oV(e);
        dW(b, 999, e, h => {
            h.preventDefault();
            if ((d.kg ? ? 0) + 800 <= b.ka(26)) {
                h =
                    d.ya;
                const n = b.l.get(h) || "";
                var k = b.V,
                    l = k.ac;
                var m = po(no(h), d.Ac);
                m = ci(m, 3, d.Cd);
                k = l.call(k, m);
                EV(a, b, k, h, n, b.J.Nc ? b.j.get(h) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function vW(a, b, c, d, e) {
        const f = document.createElement("div");
        v(f, Pt(a));
        f.id = "google-anno-sa";
        f.dir = b.ba() ? "rtl" : "ltr";
        f.tabIndex = 0;
        v(f, {
            background: b.J.qe,
            "border-style": "solid",
            bottom: d.ga + "px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d.Ba + "px",
            right: d.Ja + "px",
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        });
        v(f, {
            fill: "white"
        });
        d = document.createElement("SPAN");
        v(d, Pt(a));
        v(d, {
            cursor: "inherit"
        });
        f.appendChild(tW(a, b, d, c));
        f.appendChild(sW(a, b, f, e));
        return f
    }

    function wW(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = rV(b, d.J, d.g.get(a.ya) || 0);
            for (const g of c.getElementsByClassName("google-anno-sa-intent-icon")) g.replaceWith(b)
        }
        uW(f, a.ya, K(d.U, 19));
        c = d.V;
        d = c.we;
        f = new Nn;
        f = ch(f, 2, Rf(a.Ac));
        f = fi(f, 4, a.ya);
        a = ei(f, 3, a.g);
        return d.call(c, a)
    }

    function xW(a, b, c, d) {
        if (mW(b, d)) return null;
        a.kg = c.ka(25);
        d = vW(b, c, a, d, () => {
            a.collapsed = !0;
            var f = c.V,
                g = f.re;
            var h = new Ln;
            h = sh(h, 3, Rf(a.Ac), "0");
            h = fi(h, 2, a.ya);
            g.call(f, h)
        });
        const e = wW(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function yW(a, b, c, d, e, f, g, h) {
        if (!(a.collapsed || a.ya === e && a.Ac === d && a.i === g)) {
            if (a.Cd !== null) {
                var k = a.Cd,
                    l = c.V,
                    m = l.ve,
                    n = new Mn;
                k = di(n, 1, k);
                m.call(l, k)
            }
            l = a.ya;
            a.ya = e;
            a.g = f;
            a.Ac = d;
            a.i = g;
            J(c.U, 17) || (d = b.document.getElementById("google-anno-sa"), a.Cd = d ? wW(a, b, d, c, l) : xW(a, b, c, h))
        }
    }
    var zW = class {
        constructor() {
            this.ya = "";
            this.g = void 0;
            this.Ac = null;
            this.i = "";
            this.Cd = null;
            this.collapsed = !1;
            this.kg = null
        }
    };

    function uW(a, b, c) {
        a.ariaLabel = c.replace("TERM", b)
    };

    function AW(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (zV) yV.g.push(() => void AW(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            yW(a.A, a.win, a.config, c.i, c.Da, c.g, c.j, a.l);
            BV(a.config, 898, a.win, () => void AW(a, b), a.Xf)
        }
    }
    var BW = class {
        constructor(a, b, c) {
            var d = new zW;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.Xf = b.params.Xf
        }
    };
    class CW {
        constructor(a, b, c, d) {
            this.i = a;
            this.Da = b;
            this.g = c;
            this.j = d
        }
    };
    const DW = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function EW(a, b, c, d, e) {
        d.g.ka(5) >= d.i && await $U(d, 6);
        c.J.Ue || FW(a, b, c, e, JU(c.U));
        c.J.Ve && !GW(a) || await c.la(898, WV(a, c, d, e, b));
        c.J.We || await HW(a, c, () => new iW, d, e)
    }

    function GW(a) {
        try {
            const b = a.location ? .href ? .match(/goog_fac=1/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }
    async function HW(a, b, c, d, e) {
        var f = JU(b.U);
        var g = new PV(b.i);
        for (const h of f) K(h, 6) !== "" && (f = K(h, 1), QV(g, f, f));
        RV(g);
        g = new SV(g);
        g.isEmpty() || await b.la(898, IW(a, b, d, e, g, new jV(b.params.xk, b.params.Of, b.params.Be, b.params.Hd), c()))
    }
    async function IW(a, b, c, d, e, f, g) {
        var h = a.document.body;
        if (J(b.U, 17) || z(b.U, et, 21))
            for (; h;) {
                c.g.ka(7) >= c.i && await $U(c, 8);
                if (h.nodeType === Node.TEXT_NODE && h.textContent !== "" && h.parentElement) {
                    var k = h.parentElement;
                    a: {
                        var l = a;
                        var m = b,
                            n = k,
                            p = h.textContent,
                            r = d,
                            w = e,
                            D = f;
                        const zb = [];b: {
                            var B = p;
                            switch (m.i) {
                                case 1:
                                    var G = Array(B.length),
                                        E = 0;
                                    for (var A = 0; A < B.length; A++) MV.test(B[A]) || E++, G[A] = E;
                                    B = G;
                                    break b;
                                default:
                                    G = Array(B.length);
                                    for (A = E = 0; A < B.length;) {
                                        for (;
                                            /\s/.test(B[A]);) G[A] = E, A++;
                                        for (var F = !1; A < B.length &&
                                            !/\s/.test(B[A]);) F = !0, G[A] = E, A++;
                                        F && (E++, G[A - 1] = E)
                                    }
                                    B = G
                            }
                        }
                        w = p.includes("\u00bb") ? [] : TV(w, p);E = -1;
                        for (const Ab of w)
                            if (w = Ab.g, G = Ab.l, !(w < E)) {
                                A = D;
                                var L = Ab.Da;
                                kV(A.i, A.g + B[w]);
                                F = A;
                                var ja = F.i;
                                if ((ja.g.has(L) ? ja.g.get(L).length : 0) < F.Of && A.i.j < A.Be) {
                                    A = l.getComputedStyle(n);
                                    F = A.fontSize.match(/\d+/);
                                    if (!(F && Number(F[0]) >= 12 && Number(F[0]) <= 22 && Sa(DW, A.display))) {
                                        D.g += B[B.length - 1];
                                        l = [];
                                        break a
                                    }
                                    E += 1;
                                    E < w && zb.push(l.document.createTextNode(p.substring(E, w)));
                                    E = p.substring(w, G + 1);
                                    A = p;
                                    F = w;
                                    ja = G + 1;
                                    ja = A.substring(Math.max(F -
                                        30, 0), F) + "~~" + A.substring(ja, Math.min(ja + 30, A.length));
                                    F = l;
                                    var qb = m.V.Vc();
                                    A = n;
                                    var na = E,
                                        va = ja,
                                        wa = Ab.Da;
                                    L = B[w];
                                    ja = A.getBoundingClientRect();
                                    qb = ho(go(new io, qb), 2);
                                    na = fi(qb, 2, na);
                                    na = fi(na, 3, va);
                                    wa = fi(na, 4, wa);
                                    L = bi(wa, 5, L);
                                    L = bi(L, 6, Math.round(ja.x));
                                    ja = bi(L, 7, Math.round(ja.y));
                                    F = F.getComputedStyle(A);
                                    L = (new fo).setFont(F.fontFamily);
                                    wa = LV(F.color);
                                    L = C(L, 7, wa);
                                    wa = LV(F.backgroundColor);
                                    L = C(L, 8, wa);
                                    wa = F.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    L = bi(L, 4, wa ? Math.round(Number(wa[1])) : 0);
                                    wa = Math.round(Number(F.fontWeight));
                                    isNaN(wa) || wa === 400 || bi(L, 5, wa);
                                    F.textDecorationLine !== "none" && fi(L, 6, F.textDecorationLine);
                                    F = C(ja, 8, L);
                                    ja = [];
                                    for (na = A; na && ja.length < 20;) {
                                        A = ja;
                                        L = A.push;
                                        wa = na;
                                        va = new $n;
                                        va = fi(va, 1, wa.tagName);
                                        wa.className !== "" && rh(va, 2, wa.className.split(" "), Vf);
                                        L.call(A, va);
                                        if (na.tagName === "BODY") break;
                                        na = na.parentElement
                                    }
                                    A = ja.reverse();
                                    A = Ch(F, 9, A);
                                    r.entries.push(Wg(A));
                                    zb.push(JW(l, m, Ih(Sf($g(A, 10)), "0"), Ab.Da, E, n));
                                    lV(D.i, Ab.Da, D.g + B[w]);
                                    E = G;
                                    if (hV(D)) break
                                }
                            }
                        m = E + 1;m !== 0 && m < p.length && zb.push(l.document.createTextNode(p.substring(m)));
                        D.g += B[B.length - 1];l = zb
                    }
                    if (l.length && !J(b.U, 17)) {
                        !b.J.Nc && hW(g, a, b.params.wg ? VU(a, b.params.wg) : void 0, K(b.U, 3), z(b.U, et, 21).i(), b.V);
                        for (const zb of l) k.insertBefore(zb, h), KW(zb);
                        k.removeChild(h);
                        for (h = l[l.length - 1]; h.lastChild;) h = h.lastChild;
                        if (hV(f)) break
                    }
                }
                a: {
                    k = a;p = f;l = b.i;D = b.J;
                    if (h.firstChild && (h.nodeType !== Node.ELEMENT_NODE ? 0 : !h.classList ? .contains("google-anno-skip") && (h.offsetHeight || k.getComputedStyle(h).display === "contents"))) {
                        if (IV(h, D)) {
                            h = h.firstChild;
                            break a
                        }
                        if (h.textContent ? .length) {
                            k =
                                p;
                            b: switch (p = h.textContent, l) {
                                case 1:
                                    l = p;
                                    p = 0;
                                    for (D = l.length - 1; D >= 0; D--) MV.test(l[D]) || p++;
                                    l = p;
                                    break b;
                                default:
                                    l = p.trim(), l = l === "" ? 0 : l.split(/\s+/).length
                            }
                            kV(k.i, k.g + l)
                        }
                    }
                    for (;;) {
                        if (h.nextSibling) {
                            h = h.nextSibling;
                            break a
                        }
                        if (!h.parentNode) {
                            h = null;
                            break a
                        }
                        h = h.parentNode
                    }
                    h = void 0
                }
            }
    }

    function LW(a, b) {
        b = {
            ba: b.ba(),
            pa: b.pa,
            T: aq(a),
            X: bq(a)
        };
        if (b.X >= 400) {
            var c;
            if ((c = jW(a, b)) != null) var d = c;
            else a: {
                c = b.T;
                var e = rW(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = pW(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? pW(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function FW(a, b, c, d, e) {
        function f() {
            return h ? ? (h = c.Rb(898, a, () => {
                if (!g) {
                    var l = c.ka(12);
                    a.clearInterval(h);
                    g = !0;
                    var m = LW(a, c);
                    m && MW(a, b, c, d, l, e, m)
                }
            }, c.J.te))
        }
        if (e.filter(l => K(l, 7).length).length) {
            var g = !1,
                h = void 0,
                k = NW(c, a, () => {
                    if (!(a.scrollY <= c.J.ue || g)) {
                        var l = c.ka(12),
                            m = LW(a, c);
                        m ? (g = !0, a.removeEventListener("scroll", k), MW(a, b, c, d, l, e, m)) : h = f()
                    }
                });
            BV(c, 898, a, () => {
                if (!g) {
                    var l = c.ka(12),
                        m = LW(a, c);
                    m ? (g = !0, MW(a, b, c, d, l, e, m)) : h = f()
                }
            }, c.J.se)
        }
    }

    function MW(a, b, c, d, e, f, g) {
        const h = new BW(a, c, g);
        f.filter(k => K(k, 7).length).forEach(k => {
            var l = c.V.Vc(),
                m = K(k, 1),
                n = Yh(k, 2);
            var p = Wh(k, 4);
            l = ho(go(new io, l), 1);
            m = fi(l, 4, m);
            n = ei(m, 11, n);
            p = ai(n, 12, p);
            d.entries.push(Wg(p));
            p = Ih(Sf($g(p, 10)), "0");
            n = K(k, 1);
            m = Yh(k, 2);
            k = K(k, 1);
            h.i.push(new CW(p, n, m, k));
            h.j && AW(h, b)
        });
        c.V.tf(YU(d, c.ka(13) - e))
    }

    function KW(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = gV(eV(getComputedStyle(a.parentElement).color)),
                    c = gV(eV(getComputedStyle(a).color));
                var d = fV(a);
                if (d = b && c && d ? jN(c, d) < Math.min(jN(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    v(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) KW(a.children[b])
        }
    }
    class OW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function JW(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        g.className = "google-anno-t";
        mV(g);
        v(g, {
            "text-decoration": "underline"
        });
        v(g, {
            "text-decoration-style": "dotted"
        });
        v(g, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        v(g, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        mV(e);
        v(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        pc(e);
        e.className = "google-anno";
        oV(e);
        e.appendChild(pV(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(g);
        const h = PW(b, c, e);
        dW(b, 999, e, k => {
            try {
                var l = b.V,
                    m = l.ac,
                    n = po(no(d), c);
                var p = ci(n, 2, h.i);
                const r = m.call(l, p);
                EV(a, b, r, d, b.C.get(d) || "", b.J.Nc ? b.j.get(d) || "" : null);
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function PW(a, b, c) {
        const d = new OW;
        gW(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.V;
                    var g = e.wf,
                        h = new to;
                    f = sh(h, 2, Rf(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = a.V, g = e.vf, f = new so, f = di(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(c);
        return d
    };

    function QW(a, b, c) {
        RW(a);
        var d = new Map;
        for (const e of b) b = SW(e), d.set(b, (d.get(b) ? ? 0) + 1);
        for (const [e, f] of d) d = e, TW(a, f, d, c), UW(a, d)
    }

    function VW(a, b, c, d) {
        a.i.forEach(e => {
            WW(e, { ...a.g,
                outcome: b,
                wc: c,
                ff: d
            })
        })
    }

    function XW(a, b, c, d, e) {
        a.i.forEach(f => {
            f.ye(b, { ...a.g,
                outcome: c,
                wc: d,
                ff: e
            })
        })
    }

    function RW(a) {
        a.l || (a.l = !0, a.i.forEach(b => {
            YW(b, a.g)
        }))
    }

    function TW(a, b, c, d) {
        a.i.forEach(e => {
            e.Ae(b, { ...a.g,
                format: c,
                wc: d
            })
        })
    }

    function UW(a, b) {
        a.A.has(b) || (a.A.add(b), a.i.forEach(c => {
            ZW(c, { ...a.g,
                format: b
            })
        }))
    }

    function $W(a, b) {
        a.i.forEach(c => {
            aX(c, { ...a.g,
                reason: bX(b)
            })
        })
    }
    var iX = class {
        constructor(a, b) {
            this.language = a;
            this.C = this.j = 1;
            this.l = !1;
            this.g = {
                language: this.language,
                browser: Jb() ? 1 : Ib() ? 2 : (Db() ? 0 : u("Edge")) ? 3 : Gb() ? 4 : Fb() ? 5 : !u("iPad") && !u("iPhone") || Hb() || Ib() || (Db() ? 0 : u("Coast")) || Gb() || !u("AppleWebKit") ? Eb() ? 6 : Hb() ? 7 : u("Silk") ? 8 : 0 : 9
            };
            this.A = new Set;
            this.i = [...b]
        }
        Vc() {
            return this.C++
        }
        ze(a) {
            a: switch (wh(a, lo)) {
                case 4:
                    var b = 1;
                    break a;
                case 5:
                    b = 2;
                    break a;
                default:
                    b = 0
            }
            const c = cX(a);
            var d = Nh(a, 3),
                e = c.length > 0;VW(this, b, !1, e);XW(this, d, b, !1, e);a.g() && c.length > 0 && QW(this,
                c, !1);
            if (gh(a, Zn, 5, lo)) {
                a = Uh(a, Zn, 5, lo);
                for (const f of Bh(a, Un, 1, y())) $W(this, f)
            }
            this.j++
        }
        tf(a) {
            const b = a.g() ? 1 : 0,
                c = cX(a);
            var d = Nh(a, 2),
                e = c.length > 0;
            VW(this, b, !0, e);
            XW(this, d, b, !0, e);
            a.g() && c.length > 0 && QW(this, c, !0);
            this.j++
        }
        wf() {
            this.i.forEach(a => {
                dX(a, { ...this.g,
                    format: 2
                })
            });
            return this.j++
        }
        vf() {
            this.i.forEach(a => {
                eX(a, { ...this.g,
                    format: 2
                })
            });
            this.j++
        }
        we() {
            this.i.forEach(a => {
                dX(a, { ...this.g,
                    format: 1
                })
            });
            return this.j++
        }
        ve() {
            this.i.forEach(a => {
                eX(a, { ...this.g,
                    format: 1
                })
            });
            this.j++
        }
        Je() {
            this.i.forEach(a => {
                dX(a, { ...this.g,
                    format: 3
                })
            });
            return this.j++
        }
        Ie() {
            this.i.forEach(a => {
                eX(a, { ...this.g,
                    format: 3
                })
            });
            this.j++
        }
        ac(a) {
            let b = 0;
            Gh(a, 2) != null ? b = 2 : Gh(a, 3) != null ? b = 1 : Gh(a, 7) != null && (b = 3);
            this.i.forEach(c => {
                c.click({ ...this.g,
                    format: b
                })
            });
            return this.j++
        }
        Xd(a) {
            let b = 0;
            gh(a, vo, 2, xo) ? b = 1 : gh(a, uo, 3, xo) && (b = 2);
            this.i.forEach(c => {
                fX(c, { ...this.g,
                    type: b
                })
            });
            this.j++
        }
        Xe(a) {
            a: switch (Qh(a, 1)) {
                case 1:
                    a = 1;
                    break a;
                case 2:
                    a = 2;
                    break a;
                default:
                    a = 0
            }
            const b = a;this.i.forEach(c => {
                gX(c, { ...this.g,
                    type: b
                })
            });this.j++
        }
        re() {
            this.i.forEach(a => {
                hX(a, this.g)
            });
            this.j++
        }
    };

    function cX(a) {
        a.g() ? (a = a.j(), a = [...Bh(a, io, 2, y())]) : a = [];
        return a
    }

    function bX(a) {
        switch (wh(a, Vn)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 9:
                return 4;
            case 11:
                return 5;
            case 12:
                return 6;
            case 13:
                return 7;
            default:
                return 0
        }
    }

    function SW(a) {
        switch (Qh(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    };

    function jX(a, b) {
        var c = new yo;
        var d = a.j++;
        c = di(c, 1, d);
        b = di(c, 2, Math.round(a.l.ka(b) - a.C));
        b = C(b, 10, a.B);
        return $h(b, 15, a.I ? !0 : void 0)
    }
    var kX = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = b;
            this.C = c;
            this.B = d;
            this.I = e;
            this.i = this.j = 1;
            this.A = [...f];
            this.g = g.length ? new iX(a, g) : null
        }
        Vc() {
            return this.i++
        }
        ze(a) {
            this.g ? .ze(a);
            var b = this.handle,
                c = jX(this, 11);
            a = H(c, 3, zo, a);
            b.call(this, a)
        }
        tf(a) {
            this.g ? .tf(a);
            var b = this.handle,
                c = jX(this, 11);
            a = H(c, 14, zo, a);
            b.call(this, a)
        }
        wf(a) {
            this.g ? .wf(a);
            var b = this.handle,
                c = jX(this, 15);
            a = H(c, 4, zo, a);
            return b.call(this, a)
        }
        vf(a) {
            this.g ? .vf(a);
            var b = this.handle,
                c = jX(this, 16);
            a = H(c, 5, zo, a);
            b.call(this, a)
        }
        we(a) {
            this.g ? .we(a);
            var b = this.handle,
                c = jX(this, 17);
            a = H(c, 6, zo, a);
            return b.call(this, a)
        }
        ve(a) {
            this.g ? .ve(a);
            var b = this.handle,
                c = jX(this, 18);
            a = H(c, 7, zo, a);
            b.call(this, a)
        }
        Je(a) {
            this.g ? .Je(a);
            var b = this.handle,
                c = jX(this, 19);
            a = H(c, 16, zo, a);
            return b.call(this, a)
        }
        Ie(a) {
            this.g ? .Ie(a);
            var b = this.handle,
                c = jX(this, 20);
            a = H(c, 17, zo, a);
            b.call(this, a)
        }
        ac(a) {
            this.g ? .ac(a);
            var b = this.handle,
                c = jX(this, 14);
            a = H(c, 8, zo, a);
            return b.call(this, a)
        }
        Xd(a) {
            this.g ? .Xd(a);
            var b = this.handle,
                c = jX(this, 21);
            a = H(c, 9, zo, a);
            b.call(this, a)
        }
        Xe(a) {
            this.g ? .Xe(a);
            var b = this.handle,
                c = jX(this, 22);
            a = H(c, 11, zo, a);
            b.call(this, a)
        }
        re(a) {
            this.g ? .re(a);
            var b = this.handle,
                c = jX(this, 24);
            a = H(c, 12, zo, a);
            b.call(this, a)
        }
        handle(a) {
            for (const b of this.A) b(a);
            return Nh(a, 1)
        }
    };

    function BV(a, b, c, d, e) {
        c.setTimeout(lX(a, b, d), e)
    }

    function dW(a, b, c, d) {
        c.addEventListener("click", lX(a, b, d))
    }

    function gW(a, b) {
        return new IntersectionObserver(lX(a, 1065, b), {
            threshold: .98
        })
    }

    function NW(a, b, c) {
        a = lX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function lX(a, b, c) {
        return a.za.Ca(b, c, void 0, d => {
            d.es = a.J.Mb.join(",")
        })
    }
    var nX = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.pa = a;
            this.U = b;
            this.za = c;
            this.V = d;
            this.B = e;
            this.params = f;
            this.J = g;
            this.kd = h;
            this.C = new Map;
            this.l = new Map;
            this.A = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = Sa(mX, K(b, 7)) ? 1 : 0;
            for (const k of JU(this.U)) I(k, 6) != null && this.C.set(K(k, 1), K(k, 6)), I(k, 7) != null && this.l.set(K(k, 1), K(k, 7)), I(k, 5) != null && this.A.set(K(k, 1), K(k, 5)), Lh(k, 10) != null && this.g.set(K(k, 1), Qh(k, 10)), I(k, 11) != null && this.j.set(K(k, 1), K(k, 11))
        }
        Vb(a, b, c) {
            a = lX(this, a, c);
            b.addEventListener("message",
                a);
            return a
        }
        Rb(a, b, c, d) {
            return b.setInterval(lX(this, a, c), d)
        }
        la(a, b) {
            this.za.la(a, b, c => {
                c.es = this.J.Mb.join(",")
            });
            return b
        }
        ka(a) {
            return this.B.ka(a)
        }
        ba() {
            return Qh(this.U, 12) === 2
        }
    };
    const mX = ["ja", "zh_CN", "zh_TW"];
    const oX = new Map([
        [1, 1],
        [2, 2]
    ]);
    async function pX(a, b, c, d, e, f, g, h) {
        var k = Y,
            l = ((h = pO(new tO(a), "__gads", h)) ? md(h + "t2Z7mVic") % 20 : null) ? ? Math.floor(jd() * 20);
        h = f.ka(0);
        const m = aq(a) < 488,
            n = c.U;
        var p;
        p = (p = K(n, 7)) ? (p = p.match(/^[a-z]{2,3}/i)) ? p[0].toLowerCase() : "" : "";
        var r = c.J,
            w = new qo;
        l = bi(w, 2, l);
        l = Dh(l, 3, Cf, r.Mb, Hh, void 0, !0);
        d = new kX(p, f, h, l, J(n, 17), d, e);
        e = new nX(m, n, k, d, f, c.params, c.J, c.kd);
        k = new ZU;
        k.language = p;
        b = await qX(a, b, e, g, k);
        d.ze(WU(k, m, c.gd, a.location.hostname, c.nj, n, f.ka(11) - h, b))
    }
    async function qX(a, b, c, d, e) {
        var f = a.document.body;
        if (!f || !rX(f)) return [Tn()];
        d.g.ka(3) >= d.i && await $U(d, 4);
        f = [];
        !c.J.pe && a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && f.push(Wn());
        (c.J.Pd && aq(a) < c.J.Pd || c.J.Od && bq(a) < c.J.Od) && f.push(Tn());
        if (Th(c.U, 1, y()).length) {
            const g = Th(c.U, 1, y()).map(h => oX.get(h) ? ? 0);
            f.push(Yn(new Un, Qn(g)))
        }
        od() && f.push(Xn());
        f.length || (await EW(a, b, c, d, e), c.J.Hf && e.entries.length && !J(c.U, 17) && sX(a, c));
        return f
    }

    function rX(a) {
        try {
            (new ResizeObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function sX(a, b) {
        if (b.params.th)
            for (const c of b.params.th) {
                b = a.document.createElement("link");
                if (c instanceof cc) b.href = ec(c).toString(), b.rel = "prefetch";
                else {
                    if (yc.indexOf("prefetch") === -1) throw Error('TrustedResourceUrl href attribute required with rel="prefetch"');
                    const d = oc(c);
                    d !== void 0 && (b.href = d, b.rel = "prefetch")
                }
                b.as = "script";
                b.g = "low";
                a.document.head.appendChild(b)
            }
    };
    async function tX(a, b, c, d, e, f, g) {
        W(Kv) || (a = await uX(a, b, c, d, e, f, g), a.cf.length && (b = WU(new ZU, !!b && aq(b) < 488, vX(c), b ? .location ? .hostname ? ? "", g, a.hd ? ? new KU, 0, a.cf), g = Math.floor(jd() * 20), c = new yo, c = di(c, 1, 1), c = di(c, 2, 0), d = new qo, g = bi(d, 2, g), d = wX(a.hd), g = Dh(g, 3, Cf, d, Hh, void 0, !0), c = C(c, 10, g), b = H(c, 3, zo, b), xX(aF(), b, Date.now(), a.hd)))
    }
    async function uX(a, b, c, d, e, f, g) {
        const h = a.performance ? .now ? new bV(a.performance) : new cV,
            k = new aV(a, h);
        if (typeof e !== "string") throw Error(`Invalid config string ${e}`);
        const l = OU(e);
        e = zh(l, KU);
        if (!b) return b = new Un, d = new Sn, b = H(b, 9, Vn, d), {
            hd: e,
            cf: [b]
        };
        var m = c.google_ad_client;
        if (typeof m !== "string") throw new Oy(`Invalid property code ${m}`);
        const n = (W(Nv) ? Qh(l, 4) === 2 : W(Lv)) ? new UU(m, W(Hv) ? Md(a) : null) : new TU(m);
        a = aF();
        c = vX(c);
        var p = wX(e);
        a: {
            try {
                const D = b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!D) {
                    var r = null;
                    break a
                }
                var w = decodeURIComponent(D[1]);
                r = LU(w);
                break a
            } catch (D) {
                r = null;
                break a
            }
            r = void 0
        }
        r = r || zh(l, KU);
        w = Ah(l, l.P[x], mt, 3, 1);
        m = W(Fv) ? (W(Nv) ? Qh(l, 4) === 2 : W(Lv)) ? [Zc `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${m}`] : [] : void 0;
        m = {
            xk: X(Sv),
            Of: X(Wv),
            Be: X(Uv),
            Hd: X(Vv),
            wg: w,
            Xf: X(Zv),
            th: m
        };
        g = {
            U: r,
            gd: c,
            nj: g,
            params: m,
            J: new QU({
                Mb: p,
                Ue: W(kv),
                We: W(mv),
                Pd: X(Yv),
                Od: X(Xv),
                te: X(Qv),
                qe: Hw(pv),
                Ab: Hw(qv),
                se: X(Pv),
                ue: X(Rv),
                Ve: W(lv),
                He: Hw(gv),
                cd: Hw(hv),
                Jd: X(xv),
                Nc: W(Nv) ? Qh(l,
                    4) === 2 : W(Lv),
                ef: Iw(sv),
                nf: W(uv),
                Id: X(wv),
                Kf: W(Jv),
                pe: W(bv),
                Fd: X(zv),
                Ze: W(nv),
                Hf: W(Fv),
                Zb: W(fv),
                uh: W(Gv),
                Se: W(jv),
                Vf: W(Mv),
                Nd: X(Av),
                Lb: X(yv)
            }),
            kd: n
        };
        await yX(b, d, a, g, h, k, f);
        return {
            hd: e,
            cf: []
        }
    }

    function wX(a) {
        const b = Hp(Kp).g();
        a && b.push(...Rh(a, 24));
        b.push(...Iw(Ov).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }
    async function yX(a, b, c, d, e, f, g) {
        const h = MA(a);
        h.wasReactiveAdConfigReceived[42] || (h.wasReactiveAdConfigReceived[42] = !0, await pX(a, b, d, [k => {
            xX(c, k, e.ka(23), d.U)
        }], [new zX(c, d.U)], e, f, g))
    }

    function xX(a, b, c, d) {
        a && Y.la(1214, mF(a, b, c), e => void AX(e, d))
    }

    function YW(a, b) {
        BX(a, c => c.gi, {
            ha: 1,
            ...b
        })
    }

    function ZW(a, b) {
        BX(a, c => c.ij, {
            ha: 1,
            ...b
        })
    }

    function WW(a, b) {
        BX(a, c => c.hi, {
            ha: 1,
            ...b
        })
    }

    function aX(a, b) {
        BX(a, c => c.ii, {
            ha: 1,
            ...b
        })
    }

    function dX(a, b) {
        BX(a, c => c.ki, {
            ha: 1,
            ...b
        })
    }

    function eX(a, b) {
        BX(a, c => c.ji, {
            ha: 1,
            ...b
        })
    }

    function fX(a, b) {
        BX(a, c => c.ck, {
            ha: 1,
            ...b
        })
    }

    function gX(a, b) {
        BX(a, c => c.Si, {
            ha: 1,
            ...b
        })
    }

    function hX(a, b) {
        BX(a, c => c.fi, {
            ha: 1,
            ...b
        })
    }

    function BX(a, b, c) {
        a.g && a.za.la(1214, nF(a.g, b, c), d => void AX(d, a.i))
    }

    function CX(a, b, c) {
        a.g && a.za.la(1214, oF(a.g, b, c), d => void AX(d, a.i))
    }
    class zX {
        constructor(a, b) {
            var c = Y;
            this.g = a;
            this.za = c;
            this.i = b
        }
        ye(a, b) {
            CX(this, c => c.ye, {
                Kc: a,
                ...b
            })
        }
        Ae(a, b) {
            BX(this, c => c.Ae, {
                ha: a,
                ...b
            })
        }
        click(a) {
            BX(this, b => b.Gi, {
                ha: 1,
                ...a
            })
        }
    }

    function AX(a, b) {
        a.es = wX(b).join(",")
    }

    function vX(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };

    function DX(a, b) {
        const c = hd("STYLE", a);
        c.textContent = Cc(Oc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    }

    function EX(a, b, c) {
        if (!a.body) return null;
        const d = new FX;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && DX(b.document, e);
            kl(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    }
    class FX {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = jq(b);
            kl(a.body, "top", `${-this.i}px`)
        }
    };

    function GX(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.i.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var HX = class extends S {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.R = b;
            this.B = c;
            this.j = null;
            Eq(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function IX(a, b) {
        const c = a.B;
        c && (b ? (UA(a.F), v(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = EX(a.A, a.R, a.W)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (VA(a.F), v(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function JX(a) {
        IX(a, !1);
        const b = a.B;
        if (b) {
            var c = KX(a.L);
            GX(a, d => {
                v(d, c);
                nq(d)
            });
            a.i.setAttribute("width", "");
            a.i.setAttribute("height", "");
            kl(a.i, c);
            kl(a.i, LX);
            kl(b, MX);
            kl(b, {
                background: "transparent"
            });
            v(b, {
                display: "none",
                position: "fixed"
            });
            nq(b);
            nq(a.i);
            Rd(a.L) <= 1 || (kl(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Cd(b))
        }
    }
    class NX extends HX {
        constructor(a, b, c) {
            var d = X(uw);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.W = d;
            this.F = PA(new TA(b), 2147483646);
            this.L = b
        }
        hide() {
            IX(this, !1)
        }
    }

    function KX(a) {
        a = Rd(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var MX = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        LX = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var OX = class extends NX {
        constructor(a, b, c) {
            super(b, a, c);
            JX(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : Sa(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const PX = {
        [1]: "closed",
        [2]: "viewed",
        [3]: "dismissed"
    };
    async function QX(a, b, c, d) {
        a = new RX(a, b, c, d);
        await a.M();
        return a
    }

    function SX(a) {
        return setTimeout(Sy(728, () => {
            TX(() => {
                a.A.reject()
            });
            a.dispose()
        }), X(mw) * 1E3)
    }

    function UX(a, b) {
        var c = pN(a.i).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        Y.la(1005, c);
        c = qN(a.i).then(d => {
            a.hide(PX[d.status], d.payload)
        });
        Y.la(1006, c);
        c = rN(a.i).then(() => {
            a.hide("error")
        });
        Y.la(1004, c)
    }

    function VX(a) {
        if (W(nw)) {
            a.win.location.hash !== "" && Ty("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = Sy(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? a.hide("closed") : a.i.Me.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            Eq(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function TX(a) {
        try {
            a()
        } catch (b) {}
    }
    var RX = class extends S {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new OX(a, c, b);
            a = new tN(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.M();
            this.i = a;
            this.A = new oN;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async M() {
            const a = SX(this);
            UX(this, a);
            Eq(this, () => {
                this.i.dispose();
                clearTimeout(a);
                bl(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, IX(this.F, !0), t.IntersectionObserver || this.i.Me.postMessage(JSON.stringify({
                    eventType: "visible",
                    googMsgType: "fullscreen"
                }),
                "*"), VX(this))
        }
        disposeAd() {
            this.dispose()
        }
        hide(a, b) {
            this.F.hide();
            this.j && (W(lu) && b && (a === "granted" || a === "viewed") ? TX(() => {
                this.j({
                    status: a,
                    reward: b
                })
            }) : TX(() => {
                this.j({
                    status: a
                })
            }));
            this.dispose()
        }
    };

    function WX({
        rg: a,
        Eh: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function XX(a) {
        $l(Y, b => {
            b.shv = String(a);
            b.mjsv = WX({
                rg: AE(),
                Eh: a
            });
            b.eid = wO(t)
        })
    }

    function YX(a, b) {
        const c = b ? .g();
        b = c ? .g() || K(a, 2);
        a = c ? .j() ? J(c, 4) : J(a, 6);
        XX(b);
        me(bO, se);
        bO = a
    };
    var ZX = typeof sttc === "undefined" ? void 0 : sttc;

    function $X(a) {
        var b = Y;
        try {
            return me(a, re), new $N(JSON.parse(a))
        } catch (c) {
            b.aa(838, c instanceof Error ? c : Error(String(c)))
        }
        return new $N
    };

    function aY(a, b, c, d) {
        const e = new oN;
        let f = "";
        const g = k => {
            try {
                const l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (sb(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return rb(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(jd() * 2147483647)), rb(a, "message", g), b(c, f), e.promise) : null
    }

    function bY(a) {
        return aY(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return oe(b => {
            if (!ve(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.Dj === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: re,
        pn: re,
        eid: re,
        vnm: function(a) {
            return we(oe((b, c) => b === void 0 ? !0 : a(b, c)))
        }(re),
        js: re
    }, "RawGmaSdkStaticSignalObject");
    const cY = (a, b) => {
        try {
            const l = J(b, 6) === void 0 ? !0 : J(b, 6);
            var c = kk(Qh(b, 2)),
                d = K(b, 3);
            a: switch (Qh(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new mk(c, d, e),
                g = z(b, fk, 5) ? .g() ? ? "";
            f.xc = g;
            f.g = l;
            var h = !!J(b, 7);
            f.Qa = h;
            f.win = a;
            var k = f.build();
            dk(k)
        } catch {}
    };

    function dY(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? cY(a, b) : rb(a, "load", () => void cY(a, b)))
    };

    function eY(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function fY(a) {
        if (a === a.top || cd(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && eY(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new oN;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                oc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function SE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), Od(X(kw), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function gY(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function hY({
        ra: a,
        ua: b,
        Ua: c,
        slot: d,
        pageState: e
    }) {
        const f = d.vars,
            g = fd(d.pubWin),
            h = gY(d),
            k = new $R({
                K: g,
                pubWin: d.pubWin,
                D: f,
                ra: a,
                ua: b,
                Ua: c,
                Z: h,
                pageState: e
            });
        k.H = Date.now();
        Ek(1, [k.D]);
        Ry(1032, () => {
            if (g && W(Dw)) {
                var l = k.D;
                JE(EE(), 32, !1) || (KE(EE(), 32, !0), cU(g, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await iY(k)
        } catch (l) {
            if (!Y.aa(159, l, void 0, void 0)) throw l;
        }
        Ry(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                gl(m, "INS", "adsbygoogle") : null) ? ((new ZR(l, m)).run(), l = !0) : l = !1 : l = !1;
            return l
        });
        g ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? Uy(1008, jY(d.pubWin, g, f, k.j, ji(MU()), k.g, K(e.g(), 8) || K(a, 8)), l => void AX(l, null)) : lN(k.pubWin, "affa", l => {
            Uy(1008, jY(d.pubWin, g, f, k.j, l.config, k.g, K(e.g(), 8) || K(a, 8)), m => void AX(m, null));
            return !0
        });
        kY(k);
        return k
    }
    async function jY(a, b, c, d, e, f, g) {
        await tX(a, b, c, d, e, f, g)
    }

    function iY(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        uO(13, b);
        uO(11, b);
        a.B = Uh(a.ra, YN, 13, aO) ? .g() ? ? !0;
        b = EE();
        var c = JE(b, 23, !1);
        c || KE(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ra;
            b = gh(c, YN, 13, aO) ? z(Uh(c, YN, 13, aO), QK, 2) : gh(c, ZN, 14, aO) && Uh(c, ZN, 14, aO) ? .j() === b || ab(Uh(c, ZN, 14, aO) ? .g() ? ? [], [b]) ? z(z(Uh(c, ZN, 14, aO), YN, 2), QK, 2) : new QK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = J(a.ra, 6),
                f = J(a.ra, 20);
            b = new RK(c, d, b, e, f);
            b.i = !0;
            b.run()
        }
        W(Su) && (fB(a.pubWin).overrideBodyHeightOnPreventScrolling = !0, a.K && a.K !== a.pubWin && (fB(a.K).overrideBodyHeightOnPreventScrolling = !0));
        W(Qu) && (a.pubWin.googFloatingToolbarManagerAsyncPositionUpdate = !0, a.K && a.K !== a.pubWin && (a.K.googFloatingToolbarManagerAsyncPositionUpdate = !0));
        b = !Pk() && !Eb();
        return !b || b && !lY(a) ? mY(a) : Promise.resolve()
    }

    function lY(a) {
        return nY(a) || oY(a)
    }

    function nY(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                Ty("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = Sy(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!lY(a)) {
                    const e = mY(a);
                    Y.la(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function oY(a) {
        const b = a.pubWin.document,
            c = a.Z;
        if (UQ(b) === 3) return XQ(Sy(332, () => {
            if (!pY(a, qY().visible, c)) {
                const g = mY(a);
                Y.la(1222, g)
            }
        }), b), !0;
        const d = qY();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = VQ(b);
        if (!e) return !1;
        if (!WQ(b)) return pY(a, d.visible, c);
        if (AQ(a.K, a.pubWin, c) <= d.hidden) return !1;
        let f = Sy(332, () => {
            if (!WQ(b) && f) {
                sb(b, e, f);
                if (!pY(a, d.visible, c)) {
                    const g = mY(a);
                    Y.la(1222, g)
                }
                f = null
            }
        });
        return rb(b, e, f)
    }

    function qY() {
        var a = X(ou);
        const b = X(pu);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, t.IntersectionObserver || (a.visible = -1), Kb() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: t.IntersectionObserver ? Kb() ? a : b : -1
        }
    }

    function pY(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!hq(d.google_reactive_ad_format) && (uR(d) || d.google_reactive_ads_config) || !yQ(c) || AQ(a.K, a.pubWin, c) <= b) return !1;
        var e = EE(),
            f = JE(e, 8, {});
        e = JE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Ma(l, n => {
                    n.intersectionRatio <= 0 || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.L = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event", () => {
                h(void 0)
            })
        });
        ha(Promise, "any").call(Promise, [f, e]).then(() => {
            Ry(294, () => {
                const h = mY(a);
                Y.la(1222, h)
            })
        });
        return !0
    }

    function mY(a) {
        Ry(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ra,
                f = a.pageState,
                g = a.ua;
            if (zl(a.D) === 1) {
                var h = W(Ew);
                if ((h || W(Cw)) && c === d) {
                    var k = new yk;
                    d = new zk;
                    var l = k.setCorrelator(Md(c));
                    var m = wO(c);
                    l = fi(l, 5, m);
                    N(l, 2, 1);
                    k = d.setParameters(k);
                    l = new xk;
                    l = M(l, 10, !0);
                    m = W(xw);
                    l = M(l, 8, m);
                    m = W(yw);
                    l = M(l, 12, m);
                    m = W(Bw);
                    l = M(l, 7, m);
                    m = W(Aw);
                    l = M(l, 13, m);
                    C(k, 2, l);
                    c.google_rum_config = ki(d);
                    e = (hi(f.g(), 6) ? J(f.g(), 6) : J(e, 9)) && h ? g.dk : g.ek;
                    gd(c.document, e)
                } else Qy.disable()
            }
        });
        a.D.google_ad_channel = rY(a, a.D.google_ad_channel);
        a.D.google_tag_partner = sY(a, a.D.google_tag_partner);
        yO(a.K, a.D);
        const b = a.D.google_start_time;
        typeof b === "number" && (Rp = b, a.D.google_start_time = null);
        MP(a);
        a.K && yR(a.K, $c(a.ua.Oi, new Map(Object.entries(TQ()))));
        NE() && $c(a.ua.Xb, new Map(Object.entries(TQ())));
        uR(a.D) && (SN() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return tY(a)
    }

    function rY(a, b) {
        return (b ? [b] : []).concat(TE(a.pubWin).ad_channels || []).join("+")
    }

    function sY(a, b) {
        return (b ? [b] : []).concat(TE(a.pubWin).tag_partners || []).join("+")
    }

    function uY(a) {
        const b = hd("IFRAME");
        kd(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function vY(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && gl(a.Z, null, "fsi_container") ? (a.Z.appendChild(b), Promise.resolve(b)) : FR(a.ua.xh, 525, d => {
            a.Z.appendChild(b);
            const e = DK(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.Z.parentElement, e);
            return b
        })
    }

    function wY(a, b, c, d) {
        iF();
        aF().gd = a.D.google_page_url;
        d = ik(hk(N(N(gk(new jk, ek(new fk, String(Md(a.pubWin)))), 4, 1), 2, 1), a.pageState.g().g() || K(a.ra, 2)), d.g());
        W(eu) && M(d, 7, !0);
        dY(a.pubWin, d);
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                QX(a.pubWin, a.Z.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        rb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? TE(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp ||
                h) && e && e === a.pubWin && xY(e, a, a.Z, b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = DQ(a, b);
        CQ(a.pubWin, a.g, b.contentWindow, a.j);
        !e || uR(a.D) && !IR(a.D) || (a.D.no_resize || d(new hT(e, b, a.Z)), d(new zS(a, b)), d(e.IntersectionObserver ? null : new BS(e, b, a.Z)), e.IntersectionObserver && d(sT(e, b, a.D, a.Z, Sy(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        if (e) {
            d(tS(e, b, a.g));
            if (W(Pu)) {
                var g = pT(e, b, a.Z, a.g);
                g && d(g)
            }
            a.j.push(SR(e, a.D));
            Hp(YR).M(e);
            a.j.push(nS(e, a.Z, b))
        }
        b && b.setAttribute("data-google-container-id",
            c);
        c = a.D.iaaso;
        c != null && (d = a.Z, g = d.parentElement, (g && Uw.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c));
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        yY(a);
        xT(a);
        W(du) && HP(a, b)
    }

    function yY(a) {
        const b = Pk(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                rb(a.pubWin, "message", Y.Ca(616, c));
                a.j.push(() => {
                    sb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function xY(a, b, c, d) {
        FO(new OO(a), c).then(e => {
            Ek(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Uw.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.Wg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.bj || "",
                h = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                k = Number(e.Wg),
                l = Pa(e.entries, B => `${B.sb}:${B.mh}:${B.oh}`),
                m = Number(e.Uj.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.Tb.width * e.Tb.height,
                r = `${e.Dh.scrollX},${e.Dh.scrollY}`,
                w = Al(e.target),
                D = [e.Tb.left, e.Tb.top, e.Tb.right,
                    e.Tb.bottom
                ].join();
            e = `${e.Rh.width}x${e.Rh.height}`;
            Ty("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: wO(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: w,
                tr: D,
                url: b.D.google_page_url,
                vp: e,
                pvc: Md(a)
            }, 1)
        }).catch(e => {
            Ek(8, ["Error:", e.message, c]);
            Ty("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function zY(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function AY(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            g = d.google_ad_height,
            h = JR(d);
        e = {
            id: e,
            name: e
        };
        var k = a.D,
            l = a.l;
        gO("browsing-topics", a.pubWin.document) && lS(c, k) && !W(ow) && !iS(l ? .label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        k = wd();
        if (k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"]) {
            if (!h)
                if (k = b, b =
                    "fsb=" + encodeURIComponent("1")) {
                    l = k.indexOf("#");
                    l < 0 && (l = k.length);
                    let m = k.indexOf("?"),
                        n;
                    m < 0 || m > l ? (m = l, n = "") : n = k.substring(m + 1, l);
                    k = [k.slice(0, m), n, k.slice(l)];
                    l = k[1];
                    k[1] = b ? l ? l + "&" + b : b : l;
                    b = k[0] + (k[1] ? "?" + k[1] : "") + k[2]
                } else b = k;
            e.sandbox = vd().join(" ")
        }
        d.google_video_play_muted === !1 && zY("autoplay", e);
        k = b;
        k.length > 61440 && (k = k.substring(0, 61432), k = k.replace(/%\w?$/, ""), k = k.replace(/&[^=]*=?$/, ""), k += "&trunc=1");
        k !== b && (l = b.lastIndexOf("&", 61432), l === -1 && (l = b.lastIndexOf("?", 61432)), Ty("trn", {
            ol: b.length,
            tr: l === -1 ? "" : b.substring(l + 1),
            url: b
        }, .01));
        b = k;
        f != null && (e.width = String(f));
        g != null && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency = "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        fO("attribution-reporting", a.pubWin.document) && zY("attribution-reporting", e);
        fO("run-ad-auction", a.pubWin.document) && zY("run-ad-auction", e);
        W(bw) && (d = a.pubWin, d.credentialless !== void 0 && (W(cw) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (h) e.src = b, e = uY(e), a = vY(a, e, c);
        else {
            c = {};
            c.dtd = aS((new Date).getTime(), Rp);
            c = wl(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = uY(e);
            c && a.j.push(Vk(a.pubWin, e));
            a.Z.style.visibility = "visible";
            for (a = a.Z; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function BY(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        CY(a);
        d.g() && BQ(new tO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = DK(d, a.pubWin);
        if (!d.g() && !a.B) return Ty("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: (a.pageState.g().j() ? J(a.pageState.g(), 4) : J(a.ra, 6)).toString()
        }, X(mu)), Promise.resolve();
        var f = DY(a.ua, d);
        f && document.documentElement.appendChild(f);
        W(iw) && d.g() && (a.l = await RE());
        a.F = jS(a.pubWin, d);
        vO(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            ER(a.K, f);
            const g = DK(d);
            KR(f,
                a, g);
            f = f.page_level_pubvars;
            ya(f) && Wb(a.D, f)
        }
        f = gO("shared-storage", a.pubWin.document);
        W(aw) ? RP(a.pubWin, a.B) : a.F && d.g() && f && !W($v) && !JE(EE(), 34, !1) && (KE(EE(), 34, !0), f = a.F.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: Md(a.pubWin)
            })
        }), Y.la(1069, f));
        await kS(a, a.pubWin, d, a.D, a.F, a.l);
        await a.C ? .Qi;
        f = "";
        JR(b) ? (f = (d.g() ? a.ua.Wh : a.ua.Vh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + vl({
                adk: b.google_ad_unit_key,
                client: b.google_ad_client,
                fa: b.google_reactive_ad_format
            })),
            qU(b, EE()), EY(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config || !vR(b) || tR(c, b, e)) && EY(b) && (f = hU(a, d));
        Ek(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || yl(c);
        e = zl(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = AQ(a.K, a.pubWin, a.Z, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = EE(), e.btvi = JE(c, 21, 1), LE(c, 21));
        f = wl(e, f);
        c = AY(a, f, d);
        a.D.rpe && fT(a.pubWin,
            a.Z, {
                height: a.D.google_ad_height,
                Wf: "force",
                Uc: !0,
                Mf: !0,
                je: a.D.google_ad_client
            });
        c = await c;
        try {
            wY(a, c, b, d)
        } catch (g) {
            Y.aa(223, g, void 0, void 0)
        }
    }

    function FY(a) {
        const b = X(ju);
        if (b <= 0) return null;
        const c = Ll(),
            d = bY(a.pubWin);
        if (!d) return null;
        a.I = "0";
        return Promise.race([d, Od(b, "0")]).then(e => {
            Ty("adsense_paw", {
                time: Ll() - c
            });
            e ? .length > 1E4 ? Y.aa(809, Error(`ML:${e.length}`), void 0, void 0) : a.I = e
        }).catch(e => {
            Y.aa(809, e, void 0, void 0)
        })
    }

    function CY(a) {
        var b = a.pubWin;
        const c = a.Z;
        var d = a.D;
        const e = a.Ua,
            f = X(vw);
        d = !hq(d.google_reactive_ad_format) && (uR(d) || d.google_reactive_ads_config);
        if (!(a.C ? .jf || f <= 0 || fd(b) || !t.IntersectionObserver || d)) {
            a.C = {};
            var g = new Cp(e),
                h = Ll();
            b = new Promise(k => {
                let l = 0;
                const m = a.C,
                    n = new t.IntersectionObserver(Sy(1236, p => {
                        if (p = p.find(r => r.target === c)) g.Md.ee.Tc.g.g.Hc({
                            Kc: Ll() - h,
                            tk: ++l
                        }), m.zj = p.isIntersecting && p.intersectionRatio >= .8, k()
                    }), {
                        threshold: [.8]
                    });
                n.observe(c);
                m.jf = n
            });
            a.C.Qi = Promise.race([b, Od(f, null)]).then(k => {
                g.Md.ee.Tc.g.i.Hc({
                    Kc: Ll() - h,
                    status: k === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function GY(a) {
        const b = Ll();
        return Promise.race([Ry(832, () => fY(a)), Od(200)]).then(c => {
            Ty("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Ll() - b,
                tms: 200
            });
            return c ? .oc
        })
    }
    async function HY(a) {
        const b = FY(a),
            c = Ry(868, () => GY(a.pubWin));
        await rQ(a);
        await b;
        a.oc = await c || "";
        await BY(a)
    }

    function tY(a) {
        Pd(a.pubWin) !== a.pubWin && (a.i |= 4);
        UQ(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = aq(b);
            b = !(fq(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return HY(a)
    }

    function EY(a) {
        const b = EE(),
            c = a.google_ad_section;
        uR(a) && LE(b, 15);
        if (Bl(a)) {
            if (LE(b, 5) > 100) return !1
        } else if (LE(b, 6) - JE(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function DY(a, b) {
        a: {
            var c = [t.top];
            var d = [];
            let f = 0,
                g;
            for (; g = c[f++];) {
                d.push(g);
                try {
                    if (g.frames)
                        for (let h = 0; h < g.frames.length && c.length < 1024; ++h) c.push(g.frames[h])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    vk = e;
                    break a
                }
            } catch (h) {}
            vk = null
        }
        if (vk) return null;e = hd("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.Wh : a.Vh;e.src = ec(a).toString();e.style.display = "none";
        return e
    }

    function kY(a) {
        OE() && t.setTimeout(Sy(1244, () => void tP(a.K || a.pubWin, {
            Ka: a.pageState.g().j() ? J(a.pageState.g(), 4) : J(a.ra, 6)
        })), 1E3)
    };
    (function(a, b, c) {
        Ry(843, () => {
            if (!t.google_sa_impl) {
                var d = new Gp(b);
                try {
                    kf(l => {
                        var m = new $o;
                        var n = new Zo;
                        try {
                            var p = Md(window);
                            di(n, 1, p)
                        } catch (B) {}
                        try {
                            var r = Hp(Kp).g();
                            rh(n, 2, r, yf)
                        } catch (B) {}
                        try {
                            fi(n, 3, window.document.URL)
                        } catch (B) {}
                        m = C(m, 2, n);
                        n = new Yo;
                        n = N(n, 1, 1192);
                        try {
                            var w = re(l ? .name) ? l.name : "Unknown error";
                            fi(n, 2, w)
                        } catch (B) {}
                        try {
                            var D = re(l ? .message) ? l.message : `Caught ${l}`;
                            fi(n, 3, D)
                        } catch (B) {}
                        try {
                            const B = re(l ? .stack) ? l.stack : Error().stack;
                            B && rh(n, 4, B.split(/\n\s*/), Vf)
                        } catch (B) {}
                        l = H(m, 1, ap, n);
                        w = new Wo;
                        try {
                            fi(w, 1, AE())
                        } catch {}
                        H(l, 6, bp, w);
                        di(l, 5, 1);
                        d.I(l)
                    })
                } catch (l) {}
                var e = SQ(),
                    f = e.g(),
                    g = $X(a);
                YX(g, e);
                Ek(16, [3, ki(g)]);
                var h = WX({
                        rg: b,
                        Eh: f.g() || K(g, 2)
                    }),
                    k = c(h, g, Mh(f, 1), f.g(), K(f, 9));
                t.google_sa_impl = l => hY({
                    ra: g,
                    ua: k,
                    Ua: h,
                    slot: l,
                    pageState: e
                });
                nO(eO(t));
                t.google_process_slots ? .();
                f = (t.Prototype || {}).Version;
                f != null && Ty("prtpjs", {
                    version: f
                })
            }
        })
    })(ZX, AE(), function(a, b, c, d, e) {
        c = c > 2012 ? `_fy${c}` : "";
        e || (e = K(b, 3));
        d || (d = K(b, 2));
        return {
            ek: Zc `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum${c}.js`,
            dk: Zc `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum_debug${c}.js`,
            xh: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Oi: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Ho: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Bo: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            Xb: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`,
            Wh: Zc `https://googleads.g.doubleclick.net/pagead/html/${d}/${e}/zrt_lookup${c}.html`,
            Vh: Zc `https://pagead2.googlesyndication.com/pagead/html/${d}/${e}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20241106\",\"r20110914\",null,null,null,null,\".google.co.in\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[0,0,0]]");