(function(sttc) {
    'use strict';
    var aa, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        fa = {},
        ha = {};

    function ia(a, b, c) {
        if (!c || a != null) {
            c = ha[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ha[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ha[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var p = this || self;

    function ka(a, b) {
        var c = la("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }

    function la(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], b == null) return null;
        return b
    }

    function ma(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function na(a) {
        return Object.prototype.hasOwnProperty.call(a, oa) && a[oa] || (a[oa] = ++pa)
    }
    var oa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        pa = 0;

    function qa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ra(a, b, c) {
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

    function sa(a, b, c) {
        sa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? qa : ra;
        return sa.apply(null, arguments)
    }

    function ua(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    let va = (new Date).getTime();

    function wa(a) {
        p.setTimeout(() => {
            throw a;
        }, 0)
    };

    function xa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function za(a, b) {
        let c = 0;
        a = xa(String(a)).split(".");
        b = xa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; c == 0 && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (e[0].length == 0 && f[0].length == 0) break;
                c = Aa(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || Aa(e[2].length == 0, f[2].length == 0) || Aa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (c == 0)
        }
        return c
    }

    function Aa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ba = ka(610401301, !1),
        Ca = ka(653718497, ka(1, !0));

    function Da() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ea;
    const Fa = p.navigator;
    Ea = Fa ? Fa.userAgentData || null : null;

    function Ga(a) {
        return Ba ? Ea ? Ea.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function q(a) {
        return Da().indexOf(a) != -1
    };

    function Ha() {
        return Ba ? !!Ea && Ea.brands.length > 0 : !1
    }

    function Ia() {
        return Ha() ? !1 : q("Trident") || q("MSIE")
    }

    function Ja() {
        return Ha() ? Ga("Microsoft Edge") : q("Edg/")
    }

    function Ka() {
        !q("Safari") || La() || (Ha() ? 0 : q("Coast")) || (Ha() ? 0 : q("Opera")) || (Ha() ? 0 : q("Edge")) || Ja() || Ha() && Ga("Opera")
    }

    function La() {
        return Ha() ? Ga("Chromium") : (q("Chrome") || q("CriOS")) && !(Ha() ? 0 : q("Edge")) || q("Silk")
    }

    function Ma(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Na() {
        var a = Da();
        if (Ia()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ma(b);
        return (Ha() ? 0 : q("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ha() ? 0 : q("Edge")) ? a(["Edge"]) : Ja() ? a(["Edg"]) : q("Silk") ? a(["Silk"]) : La() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Pa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Qa(a, b) {
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

    function Ra(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Sa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ta(a, b) {
        a: {
            var c = a.length;
            const d = typeof a === "string" ? a.split("") : a;
            for (--c; c >= 0; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        return Pa(a, b) >= 0
    }

    function t(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Va(a) {
        Va[" "](a);
        return a
    }
    Va[" "] = function() {};
    var Wa = Ia();
    !q("Android") || La();
    La();
    Ka();
    var Xa = null;

    function Za(a) {
        const b = [];
        $a(a, function(c) {
            b.push(c)
        });
        return b
    }

    function $a(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = Xa[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        ab();
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

    function ab() {
        if (!Xa) {
            Xa = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    Xa[f] === void 0 && (Xa[f] = e)
                }
            }
        }
    };

    function bb(a, b) {
        const c = cb;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function db(a) {
        a.rc = !0;
        return a
    }
    let cb = void 0;
    const eb = db(a => a !== null && a !== void 0);
    var fb = db(a => typeof a === "number"),
        gb = db(a => typeof a === "string"),
        hb = db(a => a === void 0);

    function ib(a) {
        if (gb(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (fb(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var lb = db(a => a >= jb && a <= kb);
    const jb = BigInt(Number.MIN_SAFE_INTEGER),
        kb = BigInt(Number.MAX_SAFE_INTEGER);
    let mb = 0,
        nb = 0;

    function ob(a) {
        const b = a >>> 0;
        mb = b;
        nb = (a - b) / 4294967296 >>> 0
    }

    function pb(a) {
        if (a < 0) {
            ob(-a);
            a = mb;
            var b = nb;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            mb = c >>> 0;
            nb = d >>> 0
        } else ob(a)
    }

    function qb() {
        var a = mb,
            b = nb;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function rb(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        sb = Symbol(),
        tb = Symbol(),
        ub = Symbol(),
        vb = Symbol();

    function wb(a) {
        a[x] |= 32;
        return a
    }

    function xb(a, b) {
        b[x] = (a | 0) & -30975
    }

    function yb(a, b) {
        b[x] = (a | 34) & -30941
    };
    var zb = {},
        Ab = {};

    function Bb(a) {
        return !(!a || typeof a !== "object" || a.g !== Ab)
    }

    function Cb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Db(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var Eb;
    const Fb = [];
    Fb[x] = 55;
    Eb = Object.freeze(Fb);

    function Gb(a) {
        if (a & 2) throw Error();
    }
    var Hb = Object.freeze({}),
        Ib = Object.freeze({}),
        Jb = Object.freeze({});

    function Kb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Lb, Mb;

    function Nb(a) {
        if (Mb) throw Error("");
        Mb = b => {
            p.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Ob(a) {
        if (Mb) try {
            Mb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Pb() {
        const a = Error();
        Kb(a, "incident");
        Mb ? Ob(a) : wa(a)
    }

    function Qb(a) {
        a = Error(a);
        Kb(a, "warning");
        Ob(a);
        return a
    };

    function Rb(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Sb(a) {
        if (a != null && typeof a !== "boolean") {
            var b = typeof a;
            throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const Tb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Ub(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Tb.test(a)
    }

    function Vb(a) {
        if (!Number.isFinite(a)) throw Qb("enum");
        return a | 0
    }

    function y(a) {
        return a == null ? a : Vb(a)
    }

    function Wb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Xb(a) {
        if (typeof a !== "number") throw Qb("int32");
        if (!Number.isFinite(a)) throw Qb("int32");
        return a | 0
    }

    function Yb(a) {
        return a == null ? a : Xb(a)
    }

    function Zb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function $b(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function ac(a) {
        if (!Ub(a)) throw Qb("int64");
        switch (typeof a) {
            case "string":
                return bc(a);
            case "bigint":
                return ib(BigInt.asIntN(64, a));
            default:
                return cc(a)
        }
    }

    function dc(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function cc(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            pb(a);
            var b = mb,
                c = nb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function ec(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                dc(b) ? a = b : (pb(a), a = qb())
            }
        }
        return a
    }

    function bc(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        dc(a) || (a.length < 16 ? pb(Number(a)) : (a = BigInt(a), mb = Number(a & BigInt(4294967295)) >>> 0, nb = Number(a >> BigInt(32) & BigInt(4294967295))), a = qb());
        return a
    }

    function fc(a) {
        var b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return ib(BigInt.asIntN(64, a));
        if (Ub(a)) return b === "string" ? (b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = ib(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = ib(BigInt.asIntN(64, BigInt(a))))) : a = Number.isSafeInteger(a) ? ib(cc(a)) : ib(ec(a)), a
    }

    function gc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function z(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function hc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function ic(a, b, c, d) {
        if (a != null && typeof a === "object" && a.na === zb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? jc(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function jc(a) {
        var b = a[sb];
        if (b) return b;
        b = new a;
        var c = b.B;
        c[x] |= 34;
        return a[sb] = b
    };

    function kc(a) {
        lc === void 0 && (lc = typeof Proxy === "function" ? mc(Proxy) : null);
        if (!lc || !nc()) return a;
        let b = oc ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        pc(a);
        b = new lc(a, {
            set(c, d, e) {
                qc();
                c[d] = e;
                return !0
            }
        });
        rc(a, b);
        return b
    }

    function qc() {
        Pb()
    }
    let oc = void 0,
        sc = void 0;

    function rc(a, b) {
        (oc || (oc = new tc)).set(a, b);
        (sc || (sc = new tc)).set(b, a)
    }
    let lc = void 0,
        tc = void 0;

    function nc() {
        tc === void 0 && (tc = typeof WeakMap === "function" ? mc(WeakMap) : null);
        return tc
    }

    function mc(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch {
            return null
        }
    }
    let uc = void 0;

    function pc(a) {
        if (uc === void 0) {
            const b = new lc([], {});
            uc = Array.prototype.concat.call([], b).length === 1
        }
        uc && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function vc(a, b, c) {
        if (nc()) {
            if (wc ? .get(b) ? .get(a)) {
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
            xc(a, c) ? (d = wc || (wc = new tc), e = d.get(b), e || (e = new tc, d.set(b, e)), e.set(a, c)) : (Pb(), yc(a, b))
        }
    }

    function zc(a, b) {
        const c = wc ? .get(b) ? .get(a);
        c && !xc(a, c) && (Ac(), yc(a, b))
    }

    function xc(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Object.prototype.hasOwnProperty.call(b, e) && Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function Bc(a) {
        if (a && wc ? .has(a)) {
            var b = a.B;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && Cb(d))
                        for (const e in d) {
                            if (!Object.prototype.hasOwnProperty.call(d, e)) continue;
                            const f = d[e];
                            Array.isArray(f) && zc(f, a)
                        } else Array.isArray(d) && zc(d, a)
                }
        }
    }

    function Ac() {
        Pb()
    }
    let wc = void 0;

    function yc(a, b) {
        wc ? .get(b) ? .delete(a)
    };
    let Cc;

    function Dc(a, b) {
        Cc = b;
        a = new a(b);
        Cc = void 0;
        return a
    };

    function Ec(a, b) {
        return Fc(b)
    }

    function Fc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return lb(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Db(a)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Gc(a, b, c) {
        a = rb(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Hc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Db(a) ? void 0 : e && (a[x] | 0) & 2 ? a : Ic(a, b, c, d !== void 0, e);
            else if (Cb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Hc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Ic(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = rb(a);
        for (let g = 0; g < a.length; g++) a[g] = Hc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Jc(a) {
        return a.na === zb ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Kc(a) {
        return a.na === zb ? a.toJSON() : Fc(a)
    }
    var Lc = typeof structuredClone != "undefined" ? structuredClone : a => Ic(a, Jc, void 0, void 0, !1);

    function Mc(a, b, c = yb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : Ic(a, Mc, d & 4 ? yb : c, !0, !0)
            }
            a.na === zb && (c = a.B, d = c[x], a = d & 2 ? a : Nc(a, c, d, !0));
            return a
        }
    }

    function Nc(a, b, c, d) {
        Bc(a);
        return Dc(a.constructor, Oc(b, c, d))
    }

    function Oc(a, b, c) {
        const d = c || b & 2 ? yb : xb,
            e = !!(b & 32);
        a = Gc(a, b, f => Mc(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Pc(a) {
        const b = a.B,
            c = b[x];
        return c & 2 ? Nc(a, b, c, !1) : a
    }

    function Qc(a) {
        const b = a.B,
            c = b[x];
        return c & 2 ? a : Nc(a, b, c, !0)
    };
    const Rc = ib(0);

    function Sc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[vb] = (a.constructor[vb] | 0) + 1) < 5 && Pb();
        return c === 0 ? !1 : !(c & b)
    }

    function Tc(a, b) {
        a = a.B;
        return Uc(a, a[x], b)
    }

    function Vc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Uc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Vc(a, b, e, c) && tb != null && (a = Lb ? ? (Lb = {}), b = a[tb] || 0, b >= 4 || (a[tb] = b + 1, Pb())), d) : Vc(a, b, e, c)
        }
    }

    function A(a, b, c) {
        const d = a.B;
        let e = d[x];
        Gb(e);
        B(d, e, b, c);
        return a
    }

    function B(a, b, c, d) {
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

    function Wc(a, b, c) {
        return Xc(a, b, c, !1) !== void 0
    }

    function C(a) {
        return a === Hb ? 2 : 5
    }

    function Yc(a, b, c, d, e, f) {
        const g = a.B;
        let h = g[x];
        d = 2 & h ? 1 : d;
        f = !!f;
        e = Zc(g, h, b, e);
        var k = e[x] | 0,
            l = e;
        zc(l, a);
        d !== 2 && d !== 1 || yc(l, a);
        if (Sc(a, k, void 0, f)) {
            4 & k && (e = rb(e), k = $c(k, h), h = B(g, h, b, e));
            let v = l = 0;
            for (; l < e.length; l++) {
                const n = c(e[l]);
                n != null && (e[v++] = n)
            }
            v < l && (e.length = v);
            k = ad(k, h);
            k = (k | 20) & -4097;
            k &= -8193;
            e[x] = k;
            2 & k && Object.freeze(e)
        }
        let m;
        d === 1 || d === 4 && 32 & k ? bd(k) || (a = k, k |= 2, k !== a && (e[x] = k), Object.freeze(e)) : (c = d !== 5 ? !1 : !!(32 & k) || bd(k) || !!oc ? .get(e), (d === 2 || c) && bd(k) && (e = rb(e), k = $c(k, h), k = cd(k, h, f), e[x] =
            k, h = B(g, h, b, e)), bd(k) || (b = k, k = cd(k, h, f), k !== b && (e[x] = k)), c ? (m = kc(e), vc(e, a, !0)) : d !== 2 || f || oc ? .delete(e));
        return m || e
    }

    function Zc(a, b, c, d) {
        a = Uc(a, b, c, d);
        return Array.isArray(a) ? a : Eb
    }

    function ad(a, b) {
        a === 0 && (a = $c(a, b));
        return a | 1
    }

    function bd(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function dd(a, b, c, d) {
        const e = a.B;
        let f = e[x];
        Gb(f);
        if (c == null) return B(e, f, b), a;
        c = sc ? .get(c) || c;
        let g = c[x] | 0,
            h = g;
        const k = !!(2 & g) || Object.isFrozen(c);
        var l;
        if (l = !k)(l = void 0 === Jb) || (l = (Ca || !1) && void 0 !== Ib);
        if (Sc(a, g)) {
            g = 21;
            k && (c = rb(c), h = 0, g = $c(g, f), g = cd(g, f, !0));
            for (let m = 0; m < c.length; m++) c[m] = d(c[m])
        }
        l ? (c = rb(c), h = 0, g = $c(g, f), g = cd(g, f, !0)) : k || vc(c, a);
        g !== h && (c[x] = g);
        B(e, f, b, c);
        return a
    }

    function D(a, b, c, d) {
        const e = a.B;
        let f = e[x];
        Gb(f);
        B(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function fd(a, b, c, d) {
        const e = a.B;
        var f = e[x];
        Gb(f);
        if (d == null) {
            var g = gd(e);
            if (hd(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = gd(e);
            const h = hd(g, e, f, c);
            h !== b && (h && (f = B(e, f, h)), g.set(c, b))
        }
        B(e, f, b, d);
        return a
    }

    function id(a, b, c) {
        return jd(a, b) === c ? c : -1
    }

    function jd(a, b) {
        a = a.B;
        return hd(gd(a), a, a[x], b)
    }

    function gd(a) {
        return a[ub] ? ? (a[ub] = new Map)
    }

    function hd(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Uc(b, c, g) != null && (e !== 0 && (c = B(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function kd(a, b, c) {
        a = a.B;
        let d = a[x];
        Gb(d);
        const e = Uc(a, d, c);
        b = Pc(ic(e, b, !0, d));
        e !== b && B(a, d, c, b);
        return b
    }

    function Xc(a, b, c, d) {
        a = a.B;
        let e = a[x];
        d = Uc(a, e, c, d);
        b = ic(d, b, !1, e);
        b !== d && b != null && B(a, e, c, b);
        return b
    }

    function ld(a, b, c) {
        return (a = Xc(a, b, c, !1)) ? a : jc(b)
    }

    function E(a, b, c) {
        b = Xc(a, b, c, !1);
        if (b == null) return b;
        a = a.B;
        let d = a[x];
        if (!(d & 2)) {
            const e = Pc(b);
            e !== b && (b = e, B(a, d, c, b))
        }
        return b
    }

    function md(a, b, c, d, e, f, g) {
        const h = a.B;
        var k = !!(2 & b);
        e = k ? 1 : e;
        f = !!f;
        g && (g = !k);
        k = Zc(h, b, d);
        var l = k[x] | 0,
            m = k;
        zc(m, a);
        e !== 2 && e !== 1 || yc(m, a);
        m = !!(4 & l);
        if (!m) {
            l = ad(l, b);
            var v = k,
                n = b;
            const u = !!(2 & l);
            u && (n |= 2);
            let w = !u,
                N = !0,
                G = 0,
                Ya = 0;
            for (; G < v.length; G++) {
                const Oa = ic(v[G], c, !1, n);
                if (Oa instanceof c) {
                    if (!u) {
                        const ta = !!((Oa.B[x] | 0) & 2);
                        w && (w = !ta);
                        N && (N = ta)
                    }
                    v[Ya++] = Oa
                }
            }
            Ya < G && (v.length = Ya);
            l |= 4;
            l = N ? l | 16 : l & -17;
            l = w ? l | 8 : l & -9;
            v[x] = l;
            u && Object.freeze(v)
        }
        if (g && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            bd(l) ? (k = rb(k), l =
                $c(l, b), b = B(h, b, d, k)) : yc(k, a);
            c = k;
            g = l;
            for (v = 0; v < c.length; v++) l = c[v], n = Pc(l), l !== n && (c[v] = n);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            l = c[x] = g
        }
        let r;
        e === 1 || e === 4 && 32 & l ? bd(l) || (a = l, l |= !k.length || 16 & l && (!m || 32 & l) ? 2 : 2048, l !== a && (k[x] = l), Object.freeze(k)) : (m = e !== 5 ? !1 : !!(32 & l) || bd(l) || !!oc ? .get(k), (e === 2 || m) && bd(l) && (k = rb(k), l = $c(l, b), l = cd(l, b, f), k[x] = l, b = B(h, b, d, k)), bd(l) || (d = l, l = cd(l, b, f), l !== d && (k[x] = l)), m ? (r = kc(k), vc(k, a, !0)) : e !== 2 || f || oc ? .delete(k));
        return r || k
    }

    function F(a, b, c, d) {
        const e = a.B[x];
        return md(a, e, b, c, d, !1, !(2 & e))
    }

    function nd(a, b, c) {
        c == null && (c = void 0);
        return A(a, b, c)
    }

    function od(a, b, c, d) {
        d == null && (d = void 0);
        return fd(a, b, c, d)
    }

    function pd(a, b, c) {
        const d = a.B;
        let e = d[x];
        Gb(e);
        if (c == null) return B(d, e, b), a;
        c = sc ? .get(c) || c;
        let f = c[x] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === Jb || (Ca || !1) && void 0 !== Ib);
        let m = !0,
            v = !0;
        for (let r = 0; r < c.length; r++) {
            var n = c[r];
            h || (n = !!((n.B[x] | 0) & 2), m && (m = !n), v && (v = n))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = v ? f | 16 : f & -17);
        l || k && f !== g ? (c = rb(c), g = 0, f = $c(f, e), f = cd(f, e, !0)) : k || vc(c, a);
        f !== g && (c[x] = f);
        B(d, e, b, c);
        return a
    }

    function $c(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function cd(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function qd(a, b) {
        var c = rd;
        Gb(a.B[x]);
        a = c(a, 4, 2, void 0, !0);
        c = a[x] | 0;
        c = (4 & c ? 4096 & c ? 4096 : 8192 & c ? 8192 : 0 : void 0) ? ? 0;
        if (Array.isArray(b)) {
            b = sc ? .get(b) || b;
            var d = b.length;
            for (let e = 0; e < d; e++) a.push(gc(b[e], c))
        } else
            for (d of b) a.push(gc(d, c))
    }

    function sd(a, b) {
        a = Tc(a, b);
        a != null && (typeof a === "bigint" ? lb(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = lb(a) ? Number(a) : String(a)) : a = Ub(a) ? typeof a === "number" ? cc(a) : bc(a) : void 0);
        return a
    }

    function td(a, b) {
        return a ? ? b
    }

    function ud(a, b) {
        a = Tc(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function vd(a, b) {
        return Zb(Tc(a, b))
    }

    function H(a, b) {
        return hc(Tc(a, b))
    }

    function I(a, b) {
        return Wb(Tc(a, b))
    }

    function J(a, b, c = !1) {
        return td(ud(a, b), c)
    }

    function wd(a, b) {
        return td(vd(a, b), 0)
    }

    function xd(a, b) {
        return td(sd(a, b), 0)
    }

    function yd(a, b) {
        a = a.B;
        let c = a[x];
        const d = Uc(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && B(a, c, b, e);
        return e ? ? 0
    }

    function K(a, b) {
        return td(H(a, b), "")
    }

    function L(a, b) {
        return td(I(a, b), 0)
    }

    function rd(a, b, c, d, e) {
        return Yc(a, b, hc, c, d, e)
    }

    function zd(a, b, c) {
        return L(a, id(a, c, b))
    }

    function Ad(a, b, c, d) {
        return E(a, b, id(a, d, c))
    }

    function Bd(a) {
        a = H(a, 4);
        return a == null ? void 0 : a
    }

    function Cd(a, b, c) {
        return D(a, b, c == null ? c : ac(c), "0")
    }

    function Dd(a, b) {
        var c = performance.now();
        if (c != null && typeof c !== "number") throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        D(a, b, c, 0)
    };
    let Ed;

    function Fd(a) {
        try {
            return Ed = !0, JSON.stringify(Gd(a), Ec)
        } finally {
            Ed = !1
        }
    }
    var M = class {
        constructor(a) {
            a: {
                var b = b ? ? 0;a == null && (a = Cc);Cc = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[x] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, Cb(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[x] = c
            }
            this.B = a
        }
        toJSON() {
            return Gd(this)
        }
    };
    M.prototype.na = zb;

    function Gd(a) {
        Bc(a);
        a = Ed ? a.B : Ic(a.B, Kc, void 0, void 0, !1); {
            var b = !Ed;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Cb(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let m in f) Object.prototype.hasOwnProperty.call(f, m) && (isNaN(+m) ? (g ? ? (g = {}))[m] = f[m] : (d = f[m], Array.isArray(d) && (Db(d) || Bb(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null && ((g ? ? (g = {}))[m] = d)));h || (g = f);
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
                    if (!(g == null || Db(g) || Bb(g) && g.size ===
                            0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e = Array.prototype.slice.call(e, 0, l);
                    else if (k || f || h) e.length = l;
                    h && e.push(h)
                }
                k = e
            } else k = a
        }
        return k
    }

    function Hd(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return Dc(a, wb(b))
    };

    function Id(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Dc(a, wb(b))
            }
            return b
        }
    };
    var Jd = class extends M {};
    var Kd = class extends M {
        getValue() {
            return K(this, 1)
        }
        getVersion() {
            return L(this, 5)
        }
    };
    var Ld = class extends M {
        removeCookies(a) {
            var b = this.B[x];
            Gb(b);
            b = md(this, b, Kd, 4, 2, !0);
            a ? ? (a = b.length - 1);
            if (typeof a !== "number" || a < 0 || a >= b.length) throw Error();
            b.splice(a, 1);
            return this
        }
    };

    function Md(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Nd(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Od(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function Pd(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Qd(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function Rd() {
        return Ba && Ea ? Ea.mobile : !Sd() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"))
    }

    function Sd() {
        return Ba && Ea ? !Ea.mobile && (q("iPad") || q("Android") || q("Silk")) : q("iPad") || q("Android") && !q("Mobile") || q("Silk")
    };

    function Td(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ud(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Vd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Wd(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let Xd = globalThis.trustedTypes,
        Yd;

    function Zd() {
        let a = null;
        if (!Xd) return a;
        try {
            const b = c => c;
            a = Xd.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    };
    var $d = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function ae(a) {
        Yd === void 0 && (Yd = Zd());
        var b = Yd;
        return new $d(b ? b.createScriptURL(a) : a)
    }

    function be(a) {
        if (a instanceof $d) return a.g;
        throw Error("");
    };

    function ce(a = document) {
        a = ("document" in a ? a.document : a).querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function de(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    var ee = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        fe = /#|$/;

    function ge(a, b) {
        const c = a.search(fe);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function he(a, ...b) {
        if (b.length === 0) return ae(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return ae(c)
    }

    function ie(a, b) {
        a = be(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return je(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function je(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return ae(a + b + c)
    };

    function ke(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Va(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function le(a) {
        return ke(a.top) ? a.top : null
    }

    function me(a, b) {
        const c = ne("SCRIPT", a);
        c.src = be(b);
        (b = ce(c.ownerDocument && c.ownerDocument.defaultView || window)) && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function oe(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function pe() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function qe(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function re(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var se = /^([0-9.]+)px$/,
        te = /^(-?[0-9.]{1,30})$/;

    function ue(a) {
        if (!te.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function ve(a) {
        return (a = se.exec(a)) ? +a[1] : null
    }
    var we = Nd(() => Rd() ? 2 : Sd() ? 1 : 0),
        ye = a => {
            qe({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let ze = [];
    const Ae = () => {
        const a = ze;
        ze = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function Be() {
        var a = O(Ce).A(De.g, De.defaultValue),
            b = P.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = ne("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var Ee = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Fe = a => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ee(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        He = a => {
            var b = Ge;
            b.readyState === "complete" || b.readyState === "interactive" ? (ze.push(a), ze.length == 1 && (window.Promise ? Promise.resolve().then(Ae) : window.setImmediate ? setImmediate(Ae) : setTimeout(Ae, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function ne(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Ie(a, b, c = null, d = !1, e = !1) {
        Je(a, b, c, d, e)
    }

    function Je(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ne("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Pa(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                Qd(f, "load", g);
                Qd(f, "error", g)
            };
            Pd(f, "load", g);
            Pd(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Le = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            qe(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Ke(c)
        },
        Ke = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ie(b, a, void 0, !1, !1)
        };
    var Ge = document,
        P = window;
    let Me = null;
    var Ne = (a, b = []) => {
        let c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (Me == null) {
                Me = !1;
                try {
                    const d = le(p);
                    d && d.location.hash.indexOf("google_logging") !== -1 && (Me = !0)
                } catch (d) {}
            }
            a = Me
        }
        a && me(p.document, he `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Oe(a, b) {
        this.width = a;
        this.height = b
    }
    aa = Oe.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Pe(a = p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Qe(a = Pe()) {
        return a ? ke(a.master) ? a.master : null : null
    };

    function Re(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Se(a) {
        this.g = a || p.document || document
    }
    Se.prototype.getChildren = function(a) {
        return a.children
    };
    Se.prototype.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    var Te = a => {
            a = Qe(Pe(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Ue = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Ve = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    var We = class {
            constructor(a, b) {
                this.error = a;
                this.context = b.context;
                this.msg = b.message || "";
                this.id = b.id || "jserror";
                this.meta = {}
            }
        },
        Xe = a => !!(a.error && a.meta && a.id);

    function Ye(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    };
    const Ze = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var $e = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        af = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.Ya = !!c;
                this.depth = null
            }
        };
    let bf = null;

    function cf() {
        if (bf === null) {
            bf = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    bf = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return bf
    };

    function df() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ef() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    var ff = class {
        constructor(a, b) {
            var c = ef() || df();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const gf = p.performance,
        hf = !!(gf && gf.mark && gf.measure && gf.clearMarks),
        jf = Nd(() => {
            var a;
            if (a = hf) a = cf(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function kf(a) {
        a && gf && jf() && (gf.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), gf.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class lf {
        constructor(a) {
            this.events = [];
            this.i = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = jf() || (b != null ? b : Math.random() < 1)
        }
        disable() {
            this.g = !1;
            if (this.events != this.i.google_js_reporting_queue) {
                if (jf()) {
                    var a = this.events;
                    const b = a.length;
                    a = typeof a === "string" ? a.split("") : a;
                    for (let c = 0; c < b; c++) c in a && kf.call(void 0, a[c])
                }
                this.events.length = 0
            }
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ff(a,
                b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            gf && jf() && gf.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (ef() || df()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                gf && jf() && gf.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    };

    function mf(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function nf(a, b, c, d, e) {
        const f = [];
        qe(a, (g, h) => {
            (g = of (g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function of (a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push( of (a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(nf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function pf(a) {
        let b = 1;
        for (const c in a.i) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function qf(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = pf(a) - b.length;
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
                let l = nf(h[k], a.j, ",$");
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
    var rf = class {
        constructor() {
            this.j = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function sf(a, b) {
        a.g = b
    }
    var uf = class {
        constructor(a, b, c = null) {
            this.u = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.Va = this.P
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    kf(e), b = this.Va(a, new We(f, {
                        message: Ye(f)
                    }), void 0, c)
                } catch (g) {
                    this.P(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        pa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        P(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const ta = new rf;
                var g = ta;
                g.g.push(1);
                g.i[1] = mf("context",
                    a);
                Xe(b) || (b = new We(b, {
                    message: Ye(b)
                }));
                if (b.msg) {
                    g = ta;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = mf("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (ya) {}
                if (d) try {
                    d(b)
                } catch (ya) {}
                d = ta;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (ke(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new af(m || "", l));
                    try {
                        d = l.parent
                    } catch (ya) {
                        d = null
                    }
                } while (d && l != d);
                for (let ya = 0, Wg = k.length - 1; ya <= Wg; ++ya) k[ya].depth = Wg - ya;
                l = p;
                if (l.location && l.location.ancestorOrigins &&
                    l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var v = k[m];
                        v.url || (v.url = l.location.ancestorOrigins[m - 1] || "", v.Ya = !0)
                    }
                var n = k;
                let ed = new af(p.location.href, p, !1);
                l = null;
                const xe = n.length - 1;
                for (v = xe; v >= 0; --v) {
                    var r = n[v];
                    !l && Ze.test(r.url) && (l = r);
                    if (r.url && !r.Ya) {
                        ed = r;
                        break
                    }
                }
                r = null;
                const Pk = n.length && n[xe].url;
                ed.depth != 0 && Pk && (r = n[xe]);
                f = new $e(ed, r);
                if (f.i) {
                    n = ta;
                    var u = f.i.url || "";
                    n.g.push(4);
                    n.i[4] = mf("top", u)
                }
                var w = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    const ya = f.g.url.match(ee);
                    var N =
                        ya[1],
                        G = ya[3],
                        Ya = ya[4];
                    u = "";
                    N && (u += N + ":");
                    G && (u += "//", u += G, Ya && (u += ":" + Ya));
                    var Oa = u
                } else Oa = "";
                N = ta;
                w = [w, {
                    url: Oa
                }];
                N.g.push(5);
                N.i[5] = w;
                tf(this.u, e, ta, this.j, c)
            } catch (ta) {
                try {
                    tf(this.u, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ye(ta),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ed) {}
            }
            return this.A
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.P(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var vf = class extends M {
            constructor() {
                super()
            }
        },
        wf = [2, 3, 4];
    var xf = class extends M {},
        yf = [3, 4, 5],
        zf = [6, 7];
    var Af = class extends M {
            constructor() {
                super()
            }
        },
        Bf = [4, 5];

    function Cf(a, b) {
        var c = F(a, xf, 2, C());
        if (!c.length) return Df(a, b);
        a = L(a, 1);
        if (a === 1) return c = Cf(c[0], b), c.success ? {
            success: !0,
            value: !c.value
        } : c;
        c = Ra(c, d => Cf(d, b));
        switch (a) {
            case 2:
                return c.find(d => d.success && !d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !0
                };
            case 3:
                return c.find(d => d.success && d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    errorType: 3
                }
        }
    }

    function Df(a, b) {
        var c = jd(a, yf);
        a: {
            switch (c) {
                case 3:
                    var d = zd(a, 3, yf);
                    break a;
                case 4:
                    d = zd(a, 4, yf);
                    break a;
                case 5:
                    d = zd(a, 5, yf);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            errorType: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            property: d,
            da: c,
            errorType: 1
        };
        let e;
        try {
            var f = rd(a, 8, C());
            e = b(...f)
        } catch (g) {
            return {
                success: !1,
                property: d,
                da: c,
                errorType: 2
            }
        }
        f = L(a, 1);
        if (f === 4) return {
            success: !0,
            value: !!e
        };
        if (f === 5) return {
            success: !0,
            value: e != null
        };
        if (f === 12) a = K(a, id(a, zf, 7));
        else a: {
            switch (c) {
                case 4:
                    a = yd(a, id(a, zf, 6));
                    break a;
                case 5:
                    a = K(a, id(a, zf, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            property: d,
            da: c,
            errorType: 3
        };
        if (f === 6) return {
            success: !0,
            value: e === a
        };
        if (f === 9) return {
            success: !0,
            value: e != null && za(String(e), a) === 0
        };
        if (e == null) return {
            success: !1,
            property: d,
            da: c,
            errorType: 4
        };
        switch (f) {
            case 7:
                c = e < a;
                break;
            case 8:
                c = e > a;
                break;
            case 12:
                c = gb(a) && gb(e) && (new RegExp(a)).test(e);
                break;
            case 10:
                c = e != null && za(String(e), a) === -1;
                break;
            case 11:
                c = e != null && za(String(e), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    errorType: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function Ef(a, b) {
        return a ? b ? Cf(a, b) : {
            success: !1,
            errorType: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Ff = class extends M {};
    var Gf = class extends M {
        getValue() {
            return E(this, Ff, 2)
        }
    };
    var Hf = class extends M {},
        If = Id(Hf),
        Jf = [1, 2, 3, 6, 7, 8];
    var Kf = class extends M {
        constructor() {
            super()
        }
    };

    function Lf(a, b) {
        try {
            const c = d => [{
                [d.Da]: d.Ba
            }];
            return JSON.stringify([a.filter(d => d.ma).map(c), Gd(b), a.filter(d => !d.ma).map(c)])
        } catch (c) {
            return Mf(c, b), ""
        }
    }

    function Mf(a, b) {
        try {
            Le({
                m: Ye(a instanceof Error ? a : Error(String(a))),
                b: L(b, 1) || null,
                v: K(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Nf = class {
        constructor(a, b) {
            var c = new Kf;
            a = D(c, 1, y(a), 0);
            b = D(a, 2, z(b), "");
            this.j = Qc(b)
        }
    };
    var Of = class extends M {
        getWidth() {
            return wd(this, 3)
        }
        getHeight() {
            return wd(this, 4)
        }
        setHeight(a) {
            return A(this, 4, Yb(a))
        }
    };
    var Pf = class extends M {
        constructor() {
            super()
        }
    };

    function Qf(a, b) {
        return A(a, 1, b == null ? b : ac(b))
    }
    var Rf = class extends M {
        constructor() {
            super()
        }
        getWidth() {
            return td(fc(Tc(this, 1)), Rc)
        }
        getHeight() {
            return td(fc(Tc(this, 2)), Rc)
        }
        setHeight(a) {
            return A(this, 2, a == null ? a : ac(a))
        }
    };
    var Sf = class extends M {
        constructor() {
            super()
        }
        setPage(a) {
            return nd(this, 3, a)
        }
    };
    var Tf = class extends M {
        constructor() {
            super()
        }
    };
    var Uf = class extends M {
        constructor() {
            super()
        }
        getValue() {
            return L(this, 1)
        }
    };
    var Vf = class extends M {
        constructor() {
            super()
        }
        setPage(a) {
            return nd(this, 2, a)
        }
        getContentUrl() {
            return K(this, 4)
        }
    };
    var Wf = class extends M {};

    function Xf(a) {
        return kd(a, Wf, 3)
    }
    var Yf = class extends M {};
    var Zf = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return K(this, 1)
        }
    };
    var $f = class extends M {};

    function ag(a) {
        var b = new bg;
        return D(b, 1, y(a), 0)
    }
    var bg = class extends M {
        constructor() {
            super()
        }
    };
    var cg = class extends M {
            constructor() {
                super()
            }
        },
        dg = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var eg = class extends M {
        constructor() {
            super()
        }
    };

    function fg(a, b) {
        return D(a, 1, y(b), 0)
    }

    function gg(a, b) {
        return D(a, 2, y(b), 0)
    }
    var hg = class extends M {
        constructor() {
            super()
        }
    };
    var ig = class extends M {
            constructor() {
                super()
            }
        },
        jg = [1, 2];

    function kg(a, b) {
        return nd(a, 1, b)
    }

    function lg(a, b) {
        return pd(a, 2, b)
    }

    function mg(a, b) {
        return dd(a, 4, b, Xb)
    }

    function ng(a, b) {
        return pd(a, 5, b)
    }

    function og(a, b) {
        return D(a, 6, y(b), 0)
    }
    var pg = class extends M {
        constructor() {
            super()
        }
    };
    var qg = class extends M {
            constructor() {
                super()
            }
        },
        rg = [1, 2, 3, 4, 6];
    var sg = class extends M {
        constructor() {
            super()
        }
    };

    function tg(a) {
        var b = new ug;
        return od(b, 4, vg, a)
    }
    var ug = class extends M {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return td(fc(Tc(this, 2)), Rc)
            }
        },
        vg = [4, 5, 7, 8, 9];
    var wg = class extends M {
        constructor() {
            super()
        }
    };
    var xg = class extends M {
        constructor() {
            super()
        }
    };
    var yg = class extends M {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return td(fc(Tc(this, 1)), Rc)
        }
    };
    var zg = class extends M {
            constructor() {
                super()
            }
        },
        Ag = [1, 7],
        Bg = [4, 6, 8];
    class Cg extends Nf {
        constructor() {
            super(...arguments)
        }
    }

    function Dg(a, ...b) {
        Eg(a, ...b.map(c => ({
            ma: !0,
            Da: 3,
            Ba: Gd(c)
        })))
    }

    function Fg(a, ...b) {
        Eg(a, ...b.map(c => ({
            ma: !0,
            Da: 4,
            Ba: Gd(c)
        })))
    }

    function Gg(a, ...b) {
        Eg(a, ...b.map(c => ({
            ma: !0,
            Da: 7,
            Ba: Gd(c)
        })))
    }
    var Hg = class extends Cg {};
    var Ig = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Eg(a, ...b) {
        try {
            a.D && Lf(a.g.concat(b), a.j).length >= 65536 && Jg(a), a.u && !a.A && (a.A = !0, Kg(a.u, () => {
                Jg(a)
            })), a.g.push(...b), a.g.length >= a.C && Jg(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
                Jg(a)
            }, a.I))
        } catch (c) {
            Mf(c, a.j)
        }
    }

    function Jg(a) {
        a.i !== null && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = Lf(a.g, a.j);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Lg = class extends Hg {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.H = Ig;
                this.I = c;
                this.C = d;
                this.D = e;
                this.u = f;
                this.g = [];
                this.i = null;
                this.A = !1
            }
        },
        Mg = class extends Lg {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function Ng(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = Cd(b, 1, c);
        c = Fe(window);
        b = Cd(b, 2, c);
        return Cd(b, 6, a.A)
    }

    function Og(a, b, c, d, e, f) {
        if (a.j) {
            var g = gg(fg(new hg, b), c);
            b = og(lg(kg(ng(mg(new pg, d), e), g), a.g.slice()), f);
            b = tg(b);
            Fg(a.i, Ng(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(h => L(h, 1) === L(g, 1) && L(h, 2) === c)) a.g.push(g), a.g.length > 100 && a.g.shift()
        }
    }

    function Pg(a, b, c, d) {
        if (a.j) {
            var e = new eg;
            b = A(e, 1, Yb(b));
            c = A(b, 2, Yb(c));
            d = A(c, 3, y(d));
            c = new ug;
            d = od(c, 8, vg, d);
            Fg(a.i, Ng(a, d))
        }
    }

    function Qg(a, b, c, d, e) {
        if (a.j) {
            var f = new Af;
            b = nd(f, 1, b);
            c = A(b, 2, y(c));
            d = A(c, 3, Yb(d));
            if (e.da === void 0) fd(d, 4, Bf, y(e.errorType));
            else switch (e.da) {
                case 3:
                    c = new vf;
                    c = fd(c, 2, wf, y(e.property));
                    e = A(c, 1, y(e.errorType));
                    od(d, 5, Bf, e);
                    break;
                case 4:
                    c = new vf;
                    c = fd(c, 3, wf, y(e.property));
                    e = A(c, 1, y(e.errorType));
                    od(d, 5, Bf, e);
                    break;
                case 5:
                    c = new vf, c = fd(c, 4, wf, y(e.property)), e = A(c, 1, y(e.errorType)), od(d, 5, Bf, e)
            }
            e = new ug;
            e = od(e, 9, vg, d);
            Fg(a.i, Ng(a, e))
        }
    }
    var Rg = class {
        constructor(a, b, c, d = new Mg(6, "unknown", b)) {
            this.A = a;
            this.u = c;
            this.i = d;
            this.g = [];
            this.j = a > 0 && pe() < 1 / a
        }
    };
    var O = a => {
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b)) return a.Aa;
        b = new a;
        return a.Aa = b
    };
    var Sg = class {
        constructor() {
            this.M = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var Tg = /^true$/.test("false");

    function Ug(a, b) {
        switch (b) {
            case 1:
                return zd(a, 1, Jf);
            case 2:
                return zd(a, 2, Jf);
            case 3:
                return zd(a, 3, Jf);
            case 6:
                return zd(a, 6, Jf);
            case 8:
                return zd(a, 8, Jf);
            default:
                return null
        }
    }

    function Vg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return J(a, 1);
            case 7:
                return K(a, 3);
            case 2:
                return yd(a, 2);
            case 3:
                return K(a, 3);
            case 6:
                return rd(a, 4, C());
            case 8:
                return rd(a, 4, C());
            default:
                return null
        }
    }
    const Xg = Nd(() => {
        if (!Tg) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage.getItem("GGDFSSK")
            } catch {
                b = null
            }
            if (b) return JSON.parse(b)
        } catch {}
        return {}
    });

    function Yg(a, b, c, d = 0) {
        O(Zg).j[d] = O(Zg).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = Xg();
        if (e[b] != null) return e[b];
        b = $g(d)[b];
        if (!b) return c;
        b = If(JSON.stringify(b));
        b = ah(b);
        a = Vg(b, a);
        return a != null ? a : c
    }

    function ah(a) {
        const b = O(Sg).M;
        if (b && jd(a, Jf) !== 8) {
            const c = Ta(F(a, Gf, 5, C()), d => {
                d = Ef(E(d, xf, 1), b);
                return d.success && d.value
            });
            if (c) return c.getValue() ? ? null
        }
        return E(a, Ff, 4) ? ? null
    }
    class Zg {
        constructor() {
            this.i = {};
            this.u = [];
            this.j = {};
            this.g = new Map
        }
    }

    function bh(a, b = !1, c) {
        return !!Yg(1, a, b, c)
    }

    function ch(a, b = 0, c) {
        a = Number(Yg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function dh(a, b = "", c) {
        a = Yg(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function eh(a, b = [], c) {
        a = Yg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function fh(a, b = [], c) {
        a = Yg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function $g(a) {
        return O(Zg).i[a] || (O(Zg).i[a] = {})
    }

    function gh(a, b) {
        const c = $g(b);
        qe(a, (d, e) => {
            if (c[e]) {
                const g = If(JSON.stringify(d));
                if (I(g, id(g, Jf, 8)) != null) {
                    var f = If(JSON.stringify(c[e]));
                    d = kd(g, Ff, 4);
                    f = rd(ld(f, Ff, 4), 4, C());
                    qd(d, f)
                }
                c[e] = Gd(g)
            } else c[e] = d
        })
    }

    function hh(a, b, c, d, e = !1) {
        var f = [],
            g = [];
        for (const v of b) {
            b = $g(v);
            for (const n of a) {
                var h = jd(n, Jf);
                const r = Ug(n, h);
                if (r) {
                    a: {
                        var k = r;
                        var l = h,
                            m = O(Zg).g.get(v) ? .get(r) ? .slice(0) ? ? [];
                        const u = new qg;
                        switch (l) {
                            case 1:
                                fd(u, 1, rg, y(k));
                                break;
                            case 2:
                                fd(u, 2, rg, y(k));
                                break;
                            case 3:
                                fd(u, 3, rg, y(k));
                                break;
                            case 6:
                                fd(u, 4, rg, y(k));
                                break;
                            case 8:
                                fd(u, 6, rg, y(k));
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        dd(u, 5, m, Xb);k = u
                    }
                    k && O(Zg).j[v] ? .has(r) && f.push(k);h === 8 && b[r] ? (k = If(JSON.stringify(b[r])), h = kd(n, Ff, 4), k = rd(ld(k, Ff, 4), 4, C()), qd(h,
                        k)) : k && O(Zg).g.get(v) ? .has(r) && g.push(k);e || (h = r, k = v, l = d, m = O(Zg), m.g.has(k) || m.g.set(k, new Map), m.g.get(k).has(h) || m.g.get(k).set(h, []), l && m.g.get(k).get(h).push(l));b[r] = Gd(n)
                }
            }
        }
        if (f.length || g.length) a = d ? ? void 0, c.j && c.u && (d = new sg, f = pd(d, 2, f), g = pd(f, 3, g), a && D(g, 1, Yb(a), 0), f = new ug, g = od(f, 7, vg, g), Fg(c.i, Ng(c, g)))
    }

    function ih(a, b) {
        b = $g(b);
        for (const c of a) {
            a = If(JSON.stringify(c));
            const d = jd(a, Jf);
            (a = Ug(a, d)) && (b[a] || (b[a] = c))
        }
    }

    function jh() {
        return Object.keys(O(Zg).i).map(a => Number(a))
    }

    function kh(a) {
        O(Zg).u.includes(a) || gh($g(4), a)
    };

    function Q(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function lh(a, b, c) {
        return b[a] || c
    }

    function mh(a) {
        Q(5, bh, a);
        Q(6, ch, a);
        Q(7, dh, a);
        Q(8, eh, a);
        Q(17, fh, a);
        Q(13, ih, a);
        Q(15, kh, a)
    }

    function nh(a) {
        Q(4, b => {
            O(Sg).M = b
        }, a);
        Q(9, (b, c) => {
            var d = O(Sg);
            d.M[3][b] == null && (d.M[3][b] = c)
        }, a);
        Q(10, (b, c) => {
            var d = O(Sg);
            d.M[4][b] == null && (d.M[4][b] = c)
        }, a);
        Q(11, (b, c) => {
            var d = O(Sg);
            d.M[5][b] == null && (d.M[5][b] = c)
        }, a);
        Q(14, b => {
            var c = O(Sg);
            for (const d of [3, 4, 5]) Object.assign(c.M[d], b[d])
        }, a)
    }

    function oh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function ph(a, b, c) {
        a.j = lh(1, b, () => {});
        a.u = (d, e) => lh(2, b, () => [])(d, c, e);
        a.g = () => lh(3, b, () => [])(c);
        a.i = d => {
            lh(16, b, () => {})(d, c)
        }
    }
    class qh {
        j() {}
        i() {}
        u() {
            return []
        }
        g() {
            return []
        }
    };

    function tf(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof rf ? f = c : (f = new rf, qe(c, (h, k) => {
                var l = f;
                const m = l.u++;
                h = mf(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = qf(f, "/pagead/gen_204?id=" + b + "&");
            g && Ie(p, g)
        } catch (f) {}
    }

    function rh(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class sh {
        constructor() {
            this.g = Math.random()
        }
    };
    let th, uh;
    const vh = new lf(window);
    (a => {
        th = a ? ? new sh;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        rh(th, window.google_srt);
        uh = new uf(th, !0, vh);
        sf(uh, () => {});
        uh.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || vh.disable() : vh.g && Pd(window, "load", () => {
            window.google_measure_js_timing || vh.disable()
        })
    })();
    var wh = {
        Vb: 0,
        Ub: 1,
        Rb: 2,
        Mb: 3,
        Sb: 4,
        Nb: 5,
        Tb: 6,
        Pb: 7,
        Qb: 8,
        Lb: 9,
        Ob: 10,
        Wb: 11
    };
    var xh = {
        Yb: 0,
        Zb: 1,
        Xb: 2
    };

    function yh(a) {
        if (a.g != 0) throw Error("Already resolved/rejected.");
    }
    var Bh = class {
        constructor() {
            this.i = new zh(this);
            this.g = 0
        }
        resolve(a) {
            yh(this);
            this.g = 1;
            this.u = a;
            Ah(this.i)
        }
        reject(a) {
            yh(this);
            this.g = 2;
            this.j = a;
            Ah(this.i)
        }
    };

    function Ah(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.g.u);
                break;
            case 2:
                a.j && a.j(a.g.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var zh = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            Ah(this)
        }
    };
    const Ch = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Ch(Qa(this.g, a))
        }
        apply(a) {
            return new Ch(a(this.g.slice(0)))
        }
        sort(a) {
            return new Ch(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Ch(b)
        }
    };

    function Dh(a, b) {
        const c = [],
            d = a.length;
        for (let e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const Fh = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Eh(a);
            this.g[c] = b;
            this.i[c] = a
        }
        remove(a) {
            a = Eh(a);
            this.g[a] = void 0;
            this.i[a] = void 0
        }
        get(a, b) {
            a = Eh(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function Eh(a) {
        return a instanceof Object ? String(na(a)) : a + ""
    };

    function Gh(a) {
        return new Hh({
            value: a
        }, null)
    }

    function Ih(a) {
        return new Hh(null, a)
    }

    function Jh(a) {
        try {
            return Gh(a())
        } catch (b) {
            return Ih(b)
        }
    }

    function Kh(a) {
        return a.g != null ? a.getValue() : null
    }

    function Lh(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Mh(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Hh {
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
            return this.g != null ? (a = a(this.getValue()), a instanceof Hh ? a : Gh(a)) : this
        }
    };
    const Nh = class {
        constructor(a) {
            this.g = new Fh;
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
            return this.g.g[Eh(a)] !== void 0
        }
    };
    class Oh {
        constructor() {
            this.g = new Fh
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Nh, this.g.set(a, c));
            c.add(b)
        }
    };
    var Ph = class extends M {
        getId() {
            return H(this, 3)
        }
    };
    class Qh {
        constructor({
            nb: a,
            bc: b,
            qc: c,
            Cb: d
        }) {
            this.g = b;
            this.u = new Ch(a || []);
            this.j = d;
            this.i = c
        }
    };
    const Sh = a => {
            const b = [],
                c = a.u;
            c && c.g.length && b.push({
                shortName: "a",
                ca: Rh(c)
            });
            a.g != null && b.push({
                shortName: "as",
                ca: a.g
            });
            a.i != null && b.push({
                shortName: "i",
                ca: String(a.i)
            });
            a.j != null && b.push({
                shortName: "rp",
                ca: String(a.j)
            });
            b.sort(function(d, e) {
                return d.shortName.localeCompare(e.shortName)
            });
            b.unshift({
                shortName: "t",
                ca: "aa"
            });
            return b
        },
        Rh = a => {
            a = a.g.slice(0).map(Th);
            a = JSON.stringify(a);
            return re(a)
        },
        Th = a => {
            const b = {};
            H(a, 7) != null && (b.q = H(a, 7));
            vd(a, 2) != null && (b.o = vd(a, 2));
            vd(a, 5) != null && (b.p = vd(a, 5));
            return b
        };
    var Uh = class extends M {
        setLocation(a) {
            return A(this, 1, y(a))
        }
    };

    function Vh(a) {
        const b = [].slice.call(arguments).filter(Md(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ua || []);
            d = Object.assign(d, e.fb)
        });
        return new Wh(c, d)
    }

    function Xh(a) {
        switch (a) {
            case 1:
                return new Wh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Wh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Wh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Wh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Yh(a) {
        if (a == null) var b = null;
        else {
            var c = Sh(a);
            a = [];
            for (b of c) c = String(b.ca), a.push(b.shortName + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
            b = new Wh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Wh {
        constructor(a, b) {
            this.Ua = a;
            this.fb = b
        }
    };
    const Zh = new Wh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var $h = Id(class extends M {});
    var ai = class extends M {};
    var bi = class extends M {};
    var ci = class extends M {};
    var di = class extends M {};
    var ei = class extends M {};

    function fi(a) {
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
    };

    function gi(a, b, c) {
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
        fi(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };
    var R = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        hi = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        ii = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var ji = new R(1333),
        ki = new hi(1359),
        li = new hi(1358),
        mi = new R(1360),
        ni = new hi(1357),
        oi = new R(1345),
        pi = new R(1371, !0),
        qi = new R(1332),
        ri = new R(1379),
        si = new hi(1130, 100),
        ti = new hi(1340, .2),
        ui = new hi(1338, .3),
        vi = new hi(1336, 1.2),
        wi = new hi(1339, .3),
        xi = new R(1337),
        yi = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        zi = new R(1370, !0),
        Ai = new R(1342),
        Bi = new R(1344),
        Ci = new hi(1343, 300),
        Di = new R(316),
        Ei = new R(313),
        Fi = new R(369),
        Gi = new R(1318, !0),
        Hi = new R(13775),
        Ii = new R(1378),
        Ji = new R(626390500),
        Ki = new ii(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        Li = new hi(643258048),
        Mi = new hi(643258049),
        Ni = new ii(641845510, ["33", "38"]),
        Oi = new R(622128248),
        Pi = new R(676863674, !0),
        Qi = new ii(635821288, ["29_18", "30_19"]),
        Ri = new ii(636146137, ["29_5", "30_6"]),
        Si = new ii(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        Ti = new R(626062008),
        Ui = new R(679043940, !0),
        Vi = new ii(683929765),
        Wi = new R(643258050),
        Xi = new R(506914611),
        Yi = new R(626062007),
        Zi = new R(45650663),
        $i = new hi(684147711, -1),
        aj = new hi(684147712, -1),
        bj = new R(662101537),
        cj = new R(10017, !0),
        dj = new hi(1079, 5),
        ej = new R(10013),
        De = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        fj = new R(84);
    var Ce = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.C = () => {}
        }
    };

    function S(a) {
        return O(Ce).i(a.g, a.defaultValue)
    }

    function T(a) {
        return O(Ce).u(a.g, a.defaultValue)
    }

    function gj(a) {
        return O(Ce).j(a.g, a.defaultValue)
    };

    function hj(a, b) {
        const c = e => {
                e = ij(e);
                return e == null ? !1 : 0 < e
            },
            d = e => {
                e = ij(e);
                return e == null ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: jj(a.previousSibling, c),
                    ia: e => jj(e.previousSibling, c),
                    oa: 0
                };
            case 2:
                return {
                    init: jj(a.lastChild, c),
                    ia: e => jj(e.previousSibling, c),
                    oa: 0
                };
            case 3:
                return {
                    init: jj(a.nextSibling, d),
                    ia: e => jj(e.nextSibling, d),
                    oa: 3
                };
            case 1:
                return {
                    init: jj(a.firstChild, d),
                    ia: e => jj(e.nextSibling, d),
                    oa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function ij(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function jj(a, b) {
        return a && b(a) ? a : null
    };
    var kj = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var lj = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function mj(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function U(a) {
        return mj(a).clientWidth ? ? void 0
    };

    function nj(a, b) {
        do {
            const c = oe(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function oj(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = ve(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function pj(a, b) {
        return !((te.test(b.google_ad_width) || se.test(a.style.width)) && (te.test(b.google_ad_height) || se.test(a.style.height)))
    }

    function qj(a, b) {
        return (a = rj(a, b)) ? a.y : 0
    }

    function rj(a, b) {
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

    function sj(a, b, c, d, e) {
        if (a !== a.top) return le(a) ? 3 : 16;
        if (!(U(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = U(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = U(a); c; c = c.parentElement)
                    if ((d = oe(c, a)) && (e = ve(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function tj(a, b, c, d) {
        const e = sj(b, c, a, T(wi), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || nj(c, b) ? (b = U(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function uj(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function vj(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = oe(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function wj(a, b, c) {
        a = rj(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function xj(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = oe(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            uj(b, c, "0px");
            d.width = `${U(a)}px`;
            if (wj(a, b, c) !== 0) {
                uj(b, c, "0px");
                var e = wj(a, b, c);
                uj(b, c, `${-1*e}px`);
                a = wj(a, b, c);
                a !== 0 && a !== e && uj(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var yj = class {
        constructor(a, b) {
            this.Y = a;
            this.j = b
        }
        height() {
            return this.j
        }
        g(a) {
            return a > T(Ci) && this.j > 300 ? this.Y : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var zj = (a, b, c) => {
            let d;
            return a.style && !!a.style[c] && ve(a.style[c]) || (d = oe(a, b)) && !!d[c] && ve(d[c]) || null
        },
        Aj = (a, b) => {
            let c;
            return a.style && a.style.zIndex || (c = oe(a, b)) && c.zIndex || null
        },
        Bj = a => b => b.Y <= a,
        Ej = (a, b, c, d) => {
            const e = a && Cj(c, b),
                f = Dj(b, d);
            return g => !(e && g.height() >= f)
        },
        Fj = a => b => b.height() <= a,
        Cj = (a, b) => qj(a, b) < mj(b).clientHeight - 100,
        Gj = (a, b) => {
            var c = zj(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = zj(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style &&
                ve(b.style.height)) && (c = Math.min(c, d)), (d = zj(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
            return c
        };
    const Dj = (a, b) => {
        const c = Ue(a) === 0;
        return b && c ? Math.max(250, 2 * mj(a).clientHeight / 3) : 250
    };
    var Hj = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_special_category_data: !0,
        google_ad_intent_query: !0,
        google_ad_intent_qetid: !0,
        google_ad_intent_eids: !0
    };
    const Ij = RegExp("(^| )adsbygoogle($| )");

    function Jj(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = de(d.property);
            a[e] = d.value
        }
    };
    var Kj = class extends M {
        g() {
            return ud(this, 23)
        }
    };
    var Lj = class extends M {
        g() {
            return sd(this, 1)
        }
    };
    var Mj = class extends M {};
    var Nj = class extends M {};
    var Oj = class extends M {};
    var Pj = class extends M {};
    var Qj = class extends M {
            getName() {
                return H(this, 4)
            }
        },
        Rj = [1, 2, 3];
    var Sj = class extends M {};
    var Tj = class extends M {};
    var Vj = class extends M {
            g() {
                return Ad(this, Tj, 2, Uj)
            }
        },
        Uj = [1, 2];
    var Wj = class extends M {
        g() {
            return E(this, Vj, 3)
        }
    };
    var Xj = class extends M {
            getMetadata() {
                return E(this, ei, 6)
            }
        },
        Yj = Id(Xj);

    function Zj(a) {
        var b = [];
        Dh(a.getElementsByTagName("p"), function(c) {
            ak(c) >= 100 && b.push(c)
        });
        return b
    }

    function ak(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        Dh(a.childNodes, function(c) {
            b += ak(c)
        });
        return b
    }

    function bk(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function ck(a, b) {
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
    const dk = class {
        constructor(a, b, c, d) {
            this.u = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.u)
            } catch (f) {}
            if (!b.length) return [];
            a = t(b);
            a = ck(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Zj(a[c]),
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
                nativeQuery: this.u,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    var ek = class {
        constructor() {
            this.g = he `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        P(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            Xe(b) || (b = new We(b, {
                context: a,
                id: d
            }));
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (me(p.document, this.g), p.error_rep_loaded = !0);
            return !1
        }
        ea(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.P(a, c, .01, "jserror")) throw c;
            }
        }
        pa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.P(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };
    const fk = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var gk = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = ef();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && fk({
                        label: a.toString(),
                        value: h,
                        duration: (ef() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        hk = (a, b) => gk(a, b, (c, d) => {
            (new ek).P(c, d)
        }, void 0, !1);

    function ik(a, b, c) {
        return gk(a, b, void 0, c, !0).apply()
    }

    function jk(a) {
        if (!a) return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || rd(a, 4, C()).length > 0) {
            var c = H(a, 3),
                d = H(a, 1),
                e = rd(a, 4, C(Hb));
            b = vd(a, 2);
            var f = vd(a, 5);
            a = kk(I(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + bk(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + bk(e[c]);
            b = (e = g) ? new dk(e, b, f, a) : null
        } else b = b ? new dk(b, vd(a, 2), vd(a, 5), kk(I(a, 6))) : null;
        return b
    }
    var lk = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function kk(a) {
        return a == null ? a : lk[a]
    }
    var mk = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function nk(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function ok(a) {
        a = nk(a);
        return a.optimization = a.optimization || {}
    };
    var pk = a => {
        switch (I(a, 8)) {
            case 1:
            case 2:
                if (a == null) var b = null;
                else b = E(a, Ph, 1), b == null ? b = null : (a = I(a, 2), b = a == null ? null : new Qh({
                    nb: [b],
                    Cb: a
                }));
                return b != null ? Gh(b) : Ih(Error("Missing dimension when creating placement id"));
            case 3:
                return Ih(Error("Missing dimension when creating placement id"));
            default:
                return Ih(Error("Invalid type: " + I(a, 8)))
        }
    };
    var qk = (a, b) => {
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

    function rk(a, b) {
        const c = new Oh,
            d = new Nh;
        b.forEach(e => {
            if (Ad(e, Oj, 1, Rj)) {
                e = Ad(e, Oj, 1, Rj);
                if (E(e, ai, 1) && E(E(e, ai, 1), Ph, 1) && E(e, ai, 2) && E(E(e, ai, 2), Ph, 1)) {
                    const g = sk(a, E(E(e, ai, 1), Ph, 1)),
                        h = sk(a, E(E(e, ai, 2), Ph, 1));
                    if (g && h)
                        for (var f of qk({
                                anchor: g,
                                position: I(E(e, ai, 1), 2)
                            }, {
                                anchor: h,
                                position: I(E(e, ai, 2), 2)
                            })) c.set(na(f.anchor), f.position)
                }
                E(e, ai, 3) && E(E(e, ai, 3), Ph, 1) && (f = sk(a, E(E(e, ai, 3), Ph, 1))) && c.set(na(f), I(E(e, ai, 3), 2))
            } else Ad(e, Pj, 2, Rj) ? tk(a, Ad(e, Pj, 2, Rj), c) : Ad(e, Nj, 3, Rj) && uk(a, Ad(e, Nj, 3, Rj), d)
        });
        return new vk(c, d)
    }
    class vk {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const tk = (a, b, c) => {
            E(b, ai, 2) ? (b = E(b, ai, 2), (a = sk(a, E(b, Ph, 1))) && c.set(na(a), I(b, 2))) : E(b, Ph, 1) && (a = wk(a, E(b, Ph, 1))) && a.forEach(d => {
                d = na(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        uk = (a, b, c) => {
            E(b, Ph, 1) && (a = wk(a, E(b, Ph, 1))) && a.forEach(d => {
                c.add(na(d))
            })
        },
        sk = (a, b) => (a = wk(a, b)) && a.length > 0 ? a[0] : null,
        wk = (a, b) => (b = jk(b)) ? b.query(a) : null;
    var V = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let xk, W;
    const yk = new lf(p);
    var zk = a => {
        a != null && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || yk.disable()
    };
    ((a, b = !0) => {
        xk = a || new sh;
        typeof p.google_srt !== "number" && (p.google_srt = Math.random());
        rh(xk, p.google_srt);
        W = new uf(xk, b, yk);
        W.j = !0;
        p.document.readyState == "complete" ? zk() : yk.g && Pd(p, "load", () => {
            zk()
        })
    })();
    var Ak = (a, b, c) => W.ea(a, b, c),
        Bk = (a, b, c) => {
            const d = O(qh).g();
            !b.eid && d.length && (b.eid = d.toString());
            tf(xk, a, b, !0, c)
        },
        Ck = (a, b) => {
            W.aa(a, b)
        },
        Dk = (a, b, c, d) => (Xe(b) ? b.msg || Ye(b.error) : Ye(b)).indexOf("TagError") === 0 ? ((Xe(b) ? b.error : b).pbr = !0, !1) : W.P(a, b, c, d);
    var Ek = class {
        constructor() {
            this.g = Ee();
            this.i = 0
        }
    };

    function Fk(a, b, c) {
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
            if (Gk(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Hk(a) {
        a = Ik(a);
        return a.has("all") || a.has("after")
    }

    function Jk(a) {
        a = Ik(a);
        return a.has("all") || a.has("before")
    }

    function Ik(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Gk(a) {
        const b = Ik(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Kk = class {
        constructor() {
            this.g = new Set;
            this.i = new Ek
        }
    };

    function Lk(a, b) {
        if (!a) return !1;
        a = oe(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function Mk(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function Nk(a) {
        return !!a.nextSibling || !!a.parentNode && Nk(a.parentNode)
    };

    function Ok(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var Vk = a => ({
        ac: t(a.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
        dc: t(a.document.querySelectorAll("body ins.adsbygoogle")),
        kb: Qk(a),
        lb: t(a.document.querySelectorAll(".google-auto-placed")),
        mb: t(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
        tb: Rk(a),
        ic: Sk(a),
        sc: Tk(a),
        Ab: Uk(a),
        hc: t(a.document.querySelectorAll("div.googlepublisherpluginad")),
        Jb: t(a.document.querySelectorAll("html > ins.adsbygoogle"))
    });
    const Sk = a => Wk(a) || t(a.document.querySelectorAll("div[id^=div-gpt-ad]")),
        Wk = a => {
            const b = Ok(a);
            return b ? Qa(Ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        Qk = a => t(a.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")),
        Tk = a => t(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Rk = a => Sk(a).concat(t(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Uk = a => t(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Xk = a => {
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

    function Yk(a, b) {
        if (a.u) return !0;
        a.u = !0;
        const c = F(a.j, ci, 1, C());
        a.i = 0;
        const d = Zk(a.H);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? $h(f) : null
        } catch (v) {
            g = null
        }
        f = g !== null && J(g, 2, !1);
        g = nk(e);
        f && (g.eatf = !0, Ne(7, [!0, 0, !1]));
        b: {
            var h = {
                    wb: !1,
                    xb: !1
                },
                k = t(e.document.querySelectorAll(".google-auto-placed")),
                l = t(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"));
            const v = Tk(e),
                n = Rk(e),
                r = Uk(e),
                u = t(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                w =
                t(e.document.querySelectorAll("div.googlepublisherpluginad")),
                N = t(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let G = [].concat(Qk(e), t(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [Ya, Oa] of [
                    [h.kc, k],
                    [h.wb, l],
                    [h.nc, v],
                    [h.lc, n],
                    [h.oc, r],
                    [h.jc, u],
                    [h.mc, w],
                    [h.xb, N]
                ]) Ya === !1 ? f = f.concat(Oa) : G = G.concat(Oa);h = Xk(G);f = Xk(f);h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
            var m = h;e = mj(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top >
                        e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new Nh([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            k = b;
            if (E(h, Uh, 4) && e.contains(I(E(h, Uh, 4), 1)) && I(h, 8) === 1 && $k(h, d)) {
                m.i++;
                if (k = al(m, h, k, d)) l = nk(m.g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), E(h, Ph, 1) && vd(E(h, Ph, 1), 5) != null && (l.numPostPlacementsPlaced ? l.numPostPlacementsPlaced++ : l.numPostPlacementsPlaced = 1), l.placed == null && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: f,
                    element: k.ga
                }), Ne(7, [!1, m.i, !0]);
                m = k
            } else m = null;
            if (m) return !0
        }
        Ne(7, [!1, a.i, !1]);
        return !1
    }

    function al(a, b, c, d) {
        if (!$k(b, d) || I(b, 8) != 1) return null;
        d = E(b, Ph, 1);
        if (!d) return null;
        d = jk(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (d.length == 0) return null;
        d = d[0];
        var e = I(b, 2);
        e = mk[e];
        e = e === void 0 ? null : e;
        var f;
        if (!(f = e == null)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = Lk(Mk(d), f);
                        break a;
                    case 3:
                        f = Lk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Lk(g ? g.nodeType == 1 ? g : Mk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && e == 2 && !Nk(d))) c = e == 1 || e == 2 ? d : d.parentNode,
            c = !(c && !fi(c) && c.offsetWidth <= 0);f = !c
        }
        if (!(c = f)) {
            c = a.C;
            f = I(b, 2);
            g = c.i;
            var h = na(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(na(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(na(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.D;
            g = I(b, 2);
            a: switch (g) {
                case 1:
                    f = Hk(d.previousElementSibling) || Jk(d);
                    break a;
                case 4:
                    f = Hk(d) || Jk(d.nextElementSibling);
                    break a;
                case 2:
                    f = Jk(d.firstElementChild);
                    break a;
                case 3:
                    f = Hk(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = Fk(c, d, g);
            c = c.i;
            Bk("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.i++,
                dvc: we()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = E(b, bi, 3);
        c = {};
        f && (c.ib = H(f, 1), c.Sa = H(f, 2), c.rb = !!ud(f, 3));
        f = E(b, Uh, 4) && I(E(b, Uh, 4), 2) ? I(E(b, Uh, 4), 2) : null;
        f = Xh(f);
        g = vd(b, 12) != null ? vd(b, 12) : null;
        g = g == null ? null : new Wh(null, {
            google_ml_rank: g
        });
        b = bl(a, b);
        b = Vh(a.A, f, g, b);
        f = a.g;
        a = a.I;
        h = f.document;
        var k = c.rb || !1;
        g = Re((new Se(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Bb && Jj(k, c.Bb);
        h = Re((new Se(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.ib && (k.marginTop = c.ib);
        c.Sa && (k.marginBottom = c.Sa);
        c.jb && Jj(k, c.jb);
        g.appendChild(h);
        c = {
            ya: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ua) c.ya.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.ya;
                if (S(Ei)) {
                    {
                        const w = hj(d, e);
                        if (w.init) {
                            var v =
                                w.init;
                            for (d = v; d = w.ia(d);) v = d;
                            var n = {
                                anchor: v,
                                position: w.oa
                            }
                        } else n = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    gi(m, n.anchor, n.position)
                } else gi(m, d, e);
                b: {
                    var r = c.ga;r.dataset.adsbygoogleStatus = "reserved";r.className += " adsbygoogle-noablate";m = {
                        element: r
                    };
                    var u = b && b.fb;
                    if (r.hasAttribute("data-pub-vars")) {
                        try {
                            u = JSON.parse(r.getAttribute("data-pub-vars"))
                        } catch (w) {
                            break b
                        }
                        r.removeAttribute("data-pub-vars")
                    }
                    u && (m.params = u);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (w) {
                (r = c.ya) && r.parentNode &&
                    (u = r.parentNode, u.removeChild(r), fi(u) && (u.style.display = u.getAttribute("data-init-display") || "none"));
                r = !1;
                break a
            }
            r = !0
        }
        return r ? c : null
    }

    function bl(a, b) {
        return Kh(Mh(pk(b).map(Yh), c => {
            nk(a.g).exception = c
        }))
    }
    const cl = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.I = b;
            this.j = c;
            this.A = e || null;
            (this.H = d) ? (a = a.document, d = F(d, Qj, 5, C(Hb)), d = rk(a, d)) : d = rk(a.document, []);
            this.C = d;
            this.D = new Kk;
            this.i = 0;
            this.u = !1
        }
    };

    function Zk(a) {
        const b = {};
        a && Yc(a, 6, Wb, C()).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function $k(a, b) {
        return a && Wc(a, Uh, 4) && b[I(E(a, Uh, 4), 2)] ? !1 : !0
    };
    var dl = Id(class extends M {});

    function el(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Jh(() => dl(c)) : Gh(null)
    };

    function fl() {
        if (gl) return gl;
        var a = Qe() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? gl = b : a.google_persistent_state_async = gl = new hl
    }

    function il(a) {
        return jl[a] || `google_ps_${a}`
    }

    function kl(a, b, c) {
        b = il(b);
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function ll(a, b, c) {
        return kl(a, b, () => c)
    }
    var hl = class {
            constructor() {
                this.S = {}
            }
        },
        gl = null;
    const jl = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function ml(a) {
        this.g = a || {
            cookie: ""
        }
    }
    aa = ml.prototype;
    aa.isEnabled = function() {
        if (!p.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60
        });
        if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    aa.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.sameSite, g = c.secure || !1, f = c.domain || void 0, e = c.path || void 0, d = c.maxAge);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h :
            "")
    };
    aa.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = xa(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    aa.remove = function(a, b, c) {
        const d = this.get(a) !== void 0;
        this.set(a, "", {
            maxAge: 0,
            path: b,
            domain: c
        });
        return d
    };
    aa.isEmpty = function() {
        return !this.g.cookie
    };
    aa.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = xa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
    };

    function nl(a, b = window) {
        if (J(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function ol(a) {
        var b = new pl;
        return A(b, 5, Sb(a))
    }
    var pl = class extends M {
        constructor() {
            super()
        }
    };

    function ql() {
        this.A = this.A;
        this.i = this.i
    }
    ql.prototype.A = !1;
    ql.prototype.dispose = function() {
        this.A || (this.A = !0, this.D())
    };
    ql.prototype[ia(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function rl(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    ql.prototype.D = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    const sl = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function tl(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = sl(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Le({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function ul(a) {
        if (a.g) return a.g;
        a: {
            let d = a.j;
            for (let e = 0; e < 50; ++e) {
                try {
                    var b = !(!d.frames || !d.frames.__tcfapiLocator)
                } catch {
                    b = !1
                }
                if (b) {
                    b = d;
                    break a
                }
                b: {
                    try {
                        const f = d.parent;
                        if (f && f != d) {
                            var c = f;
                            break b
                        }
                    } catch {}
                    c = null
                }
                if (!(d = c)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }

    function vl(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (ul(a)) {
            wl(a);
            const e = ++a.V;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function wl(a) {
        a.u || (a.u = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Pd(a.j, "message", a.u))
    }
    class xl extends ql {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.g = null;
            this.C = {};
            this.V = 0;
            this.I = b.hb ? ? 500;
            this.H = b.ec ? ? !1;
            this.u = null
        }
        D() {
            this.C = {};
            this.u && (Qd(this.j, "message", this.u), delete this.u);
            delete this.C;
            delete this.j;
            delete this.g;
            super.D()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.H
            };
            const c = Od(() => a(b));
            let d = 0;
            this.I !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.I));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = sl(b),
                    b.internalBlockOnErrors = this.H, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                vl(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && vl(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Cl = ({
            l: a,
            W: b,
            hb: c,
            qb: d,
            ja: e = !1,
            ka: f = !1
        }) => {
            b = yl({
                l: a,
                W: b,
                ja: e,
                ka: f
            });
            b.isError() && b.i.message == "tcunav" ? zl(a, c).then(g => g.map(Al)).then(g => g.map(h => Bl(a, h))).then(d) : d(b)
        },
        yl = ({
            l: a,
            W: b,
            ja: c = !1,
            ka: d = !1
        }) => {
            if (!Dl({
                    l: a,
                    W: b,
                    ja: c,
                    ka: d
                })) return Bl(a, ol(!0));
            b = fl();
            return (b = ll(b, 24)) ? Bl(a, Al(b)) : Ih(Error("tcunav"))
        };

    function Dl({
        l: a,
        W: b,
        ja: c,
        ka: d
    }) {
        if (d = !d) d = new xl(a), d = typeof d.j.__tcfapi === "function" || ul(d) != null;
        if (!d) {
            if (c = !c) {
                if (b) {
                    a = el(a);
                    if (a.isError()) W.P(806, a.i, void 0, void 0), a = !1;
                    else if ((a = a.getValue()) && I(a, 1) != null) b: switch (a = I(a, 1), a) {
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

    function zl(a, b) {
        return Promise.race([El(), Fl(a, b)])
    }

    function El() {
        return (new Promise(a => {
            var b = fl();
            a = {
                resolve: a
            };
            const c = ll(b, 25, []);
            c.push(a);
            b.S[il(25)] = c
        })).then(Gl)
    }

    function Fl(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Ih(Error("tcto")))
        })
    }

    function Gl(a) {
        return a ? Gh(a) : Ih(Error("tcnull"))
    }

    function Al(a) {
        var b = {};
        if (tl(a))
            if (a.gdprApplies === !1) a = !0;
            else if (a.tcString === "tcunavailable") a = !b.Xa;
        else if ((b.Xa || a.gdprApplies !== void 0 || b.fc) && (b.Xa || typeof a.tcString === "string" && a.tcString.length)) {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== void 0)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !0;
        else a = !1;
        return ol(a)
    }

    function Bl(a, b) {
        return (a = nl(b, a)) ? Gh(a) : Ih(Error("unav"))
    };

    function Hl(a) {
        return F(a, di, 3, C())
    }
    var Il = class extends M {};
    var Jl = class extends M {};
    var Kl = class extends M {
        g() {
            return E(this, Il, 2)
        }
        i() {
            return E(this, Jl, 3)
        }
    };
    const Ll = class {
        constructor(a) {
            this.exception = a
        }
    };

    function Ml(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.g;
            nk(e.g);
            F(e.j, ci, 1, C());
            d.call(c, new Ll(b))
        } catch (f) {
            a.i.reject(f)
        }
    }
    var Nl = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        start() {
            this.u()
        }
        u() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        Yk(this.g, !0);
                        Ml(this);
                        break;
                    default:
                        Yk(this.g, !1) ? Ml(this) : this.j.setTimeout(sa(this.u, this), 100)
                }
            } catch (a) {
                Ml(this, a)
            }
        }
    };
    var Ol = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return wd(this, 2)
        }
    };

    function Pl(a) {
        return Za(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function Ql(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function Rl(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Sl(a) {
        var b = Pl(a),
            c = Ql(b.slice(0, 6));
        a = Ql(b.slice(6, 12));
        var d = new Ol;
        c = D(d, 1, Yb(c), 0);
        a = D(c, 2, Yb(a), 0);
        b = b.slice(12);
        c = Ql(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = Ql(e[0]) === 0;
            e = e.slice(1);
            var g = Tl(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = Rl(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = Tl(e, b);
                g = Rl(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return dd(a, 3, d, Xb)
    }

    function Tl(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var Ul = "a".charCodeAt(),
        Vl = Vd(wh),
        Wl = Vd(xh);

    function Xl() {
        var a = new Yl;
        return Cd(a, 1, 0)
    }

    function Zl(a) {
        var b = Number; {
            var c = Tc(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : Ub(c) ? d === "string" ? bc(c) : ec(c) : void 0
        }
        b = b(c ? ? "0");
        a = wd(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var Yl = class extends M {};

    function $l(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function am(a) {
        let b = $l(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!$l(a, 1) === !0,
                e = $l(a, 16);
            if (d)
                for (d = $l(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function bm(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if ($l(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function cm(a) {
        const b = $l(a, 16);
        return !!$l(a, 1) === !0 ? (a = am(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : bm(a, b)
    }
    class dm {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var fm = (a, b) => {
        try {
            var c = Za(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new dm(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = b;
            d.skip(78);
            c.cmpId = $l(d, 12);
            c.cmpVersion = $l(d, 12);
            d.skip(30);
            c.tcfPolicyVersion = $l(d, 6);
            c.isServiceSpecific = !!$l(d, 1);
            c.useNonStandardStacks = !!$l(d, 1);
            c.specialFeatureOptins = em(bm(d, 12, Wl), Wl);
            c.purpose = {
                consents: em(bm(d, 24, Vl), Vl),
                legitimateInterests: em(bm(d, 24, Vl), Vl)
            };
            c.purposeOneTreatment = !!$l(d, 1);
            c.publisherCC = String.fromCharCode(Ul + $l(d, 6)) + String.fromCharCode(Ul +
                $l(d, 6));
            c.vendor = {
                consents: em(cm(d), null),
                legitimateInterests: em(cm(d), null)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const em = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function gm() {
        return "m202410310101"
    };
    var hm = class extends M {
        g() {
            return H(this, 2) != null
        }
    };
    var im = class extends M {
        g() {
            return H(this, 2) != null
        }
    };
    var jm = class extends M {};
    var km = Id(class extends M {});

    function lm(a) {
        a = mm(a);
        try {
            var b = a ? km(a) : null
        } catch (c) {
            b = null
        }
        return b ? E(b, jm, 4) || null : null
    }

    function mm(a) {
        a = (new ml(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    Vd(wh).map(a => Number(a));
    Vd(xh).map(a => Number(a));

    function nm(a) {
        a.__tcfapiPostMessageReady || om(new pm(a))
    }

    function om(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.l.__tcfapi)(e.command, e.version, (f, g) => {
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
        a.l.addEventListener("message", a.g);
        a.l.__tcfapiPostMessageReady = !0
    }
    var pm = class {
        constructor(a) {
            this.l = a
        }
    };

    function qm(a) {
        a.__uspapiPostMessageReady || rm(new sm(a))
    }

    function rm(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f, g) => {
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
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var sm = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    var tm = class extends M {};
    var um = Id(class extends M {
        g() {
            return H(this, 1) != null
        }
    });

    function vm(a, b, c) {
        function d(n) {
            if (n.length < 10) return null;
            var r = k(n.slice(0, 4));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function e(n) {
            if (n.length < 10) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function f(n) {
            if (n.length < 12) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(8, 12));
            n = m(n);
            return "1" + r + n + "N"
        }

        function g(n) {
            if (n.length < 18) return null;
            var r = k(n.slice(0, 8));
            r = l(r);
            n = k(n.slice(12, 18));
            n = m(n);
            return "1" + r + n + "N"
        }

        function h(n) {
            if (n.length <
                10) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function k(n) {
            const r = [];
            let u = 0;
            for (let w = 0; w < n.length / 2; w++) r.push(Ql(n.slice(u, u + 2))), u += 2;
            return r
        }

        function l(n) {
            return n.every(r => r === 1) ? "Y" : "N"
        }

        function m(n) {
            return n.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = Pl(a[0]);
        const v = Ql(a.slice(0, 6));
        a = a.slice(6);
        if (v !== 1) return null;
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

    function wm(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = ne("IFRAME", c);
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

    function xm(a) {
        var b = S(pi),
            c = S(Zi);
        P !== P.top || P.__uspapi || P.frames.__uspapiLocator || (a = new ym(a, b, c), zm(a), Am(a))
    }

    function zm(a) {
        !a.u || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc", wm(a.l, "__uspapiLocator"), ua("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = a.i && !J(a.j, 3), d({
                version: 1,
                uspString: b ? "1---" : a.u
            }, !0))
        }, a.l), qm(a.l))
    }

    function Am(a) {
        !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc", wm(a.l, "__tcfapiLocator"), a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [], ua("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else {
                    var f = a.l.__tcfapiEventListeners;
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
                            e = f.push(d);
                            b = !c;
                            --e;
                            a.tcString ? (b = fm(a.tcString, b), b.addtlConsent = a.g != null ? a.g : void 0, b.cmpStatus = "loaded", b.eventStatus = "tcloaded", e != null && (b.listenerId = e)) : b = null;
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
        }, a.l), nm(a.l))
    }

    function Bm(a, b) {
        if (!b ? .g() || K(b, 1).length === 0 || F(b, tm, 2, C()).length === 0) return null;
        const c = K(b, 1);
        let d;
        try {
            var e = Sl(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = F(b, tm, 2, C()).reduce((f, g) => xd(Cm(f), 1) > xd(Cm(g), 1) ? f : g);
        e = Yc(e, 3, Zb, C()).indexOf(wd(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: vm(d[e], wd(b, 1), a.A),
            xa: Zl(Cm(b))
        }
    }

    function Dm(a) {
        a = a.find(b => b && L(b, 1) === 13);
        if (a ? .g()) try {
            return um(K(a, 2))
        } catch (b) {}
        return null
    }

    function Cm(a) {
        return Wc(a, Yl, 2) ? E(a, Yl, 2) : Xl()
    }
    var ym = class {
        constructor(a, b, c) {
            var d = P;
            this.l = d;
            this.j = a;
            this.A = b;
            this.i = c;
            a = mm(this.l.document);
            try {
                var e = a ? km(a) : null
            } catch (f) {
                e = null
            }(a = e) ? (e = E(a, im, 5) || null, a = F(a, hm, 7, C()), a = Dm(a ? ? []), e = {
                Ta: e,
                Wa: a
            }) : e = {
                Ta: null,
                Wa: null
            };
            a = e;
            e = Bm(this, a.Wa);
            a = a.Ta;
            a ? .g() && K(a, 2).length !== 0 ? (b = Wc(a, Yl, 1) ? E(a, Yl, 1) : Xl(), a = {
                uspString: K(a, 2),
                xa: Zl(b)
            }) : a = null;
            this.u = a && e ? e.xa > a.xa ? e.uspString : a.uspString : a ? a.uspString : e ? e.uspString : null;
            this.tcString = (e = lm(d.document)) && H(e, 1) != null ? K(e, 1) : null;
            this.g = (d = lm(d.document)) &&
                H(d, 2) != null ? K(d, 2) : null
        }
    };
    const Em = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function Fm(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Bk("ama", b, .01)
    }

    function Gm(a) {
        const b = {};
        qe(Em, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Hm(a) {
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

    function Im(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Jm(a) {
        a = Yc(a, 2, Wb, C());
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (a[b] == 1) return !0;
        return !1
    }

    function Km(a, b) {
        a = Im(Hm(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = re(a),
            d = Lm(a);
        return b.find(e => {
            if (Wc(e, Mj, 7)) {
                var f = E(e, Mj, 7);
                f = $b(Tc(f, 1))
            } else f = $b(Tc(e, 1));
            e = Wc(e, Mj, 7) ? I(E(e, Mj, 7), 2) : 2;
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

    function Lm(a) {
        const b = {};
        for (;;) {
            b[re(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Mm = class extends M {
        g() {
            return E(this, Kl, 2)
        }
        i() {
            return J(this, 3)
        }
    };
    var Nm = class extends M {
        g() {
            return K(this, 1)
        }
        i() {
            return L(this, 2)
        }
    };
    var Om = class extends M {
        g() {
            return E(this, Nm, 2)
        }
    };
    var Pm = class extends M {
        g() {
            return rd(this, 1, C())
        }
        i() {
            return E(this, Mm, 2)
        }
        j() {
            return K(this, 4)
        }
        u() {
            return L(this, 5)
        }
    };
    var Qm = class extends M {
        getId() {
            return wd(this, 1)
        }
    };

    function Rm(a) {
        return F(a, Qm, 2, C())
    }
    var Sm = class extends M {};
    var Tm = class extends M {};
    var Um = class extends M {
        g() {
            return xd(this, 2)
        }
        i() {
            return xd(this, 4)
        }
        j() {
            return J(this, 3)
        }
    };
    var Vm = class extends M {};
    var Wm = class extends M {};
    var Ym = class extends M {
            j() {
                return Ad(this, Mm, 13, Xm)
            }
            u() {
                return Xc(this, Mm, id(this, Xm, 13)) !== void 0
            }
            g() {
                return Ad(this, Pm, 14, Xm)
            }
            i() {
                return Xc(this, Pm, id(this, Xm, 14)) !== void 0
            }
        },
        Xm = [13, 14],
        Zm = [27, 28];
    let $m = void 0;

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function an(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ra: !0,
            Hb: b,
            va: a.ablation_viewport_offset
        } : null
    }

    function bn(a) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = 1
    }

    function cn(a) {
        X(P).allow_second_reactive_tag = a
    }

    function dn() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function en(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? fn(a)
    }

    function fn(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const gn = [2, 7, 1];
    var kn = (a, b, c = "", d = null) => b === 1 && hn(c, d) ? !0 : jn(a, c, e => Sa(F(e, Jd, 2, C()), f => I(f, 1) === b)),
        hn = (a, b) => b ? b.u() ? J(b.j(), 1) : b.i() && a !== "" && b.g().j() === a || b.i() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? J(b.g().i(), 1) : !1 : !1,
        mn = a => {
            const b = le(P) || P;
            return ln(b, a) ? !0 : jn(P, "", c => Sa(Yc(c, 3, Wb, C()), d => d === a))
        };

    function ln(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function jn(a, b, c) {
        a = le(a) || a;
        const d = nn(a);
        b && (b = Ve(String(b)));
        return Ud(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function nn(a) {
        a = on(a);
        const b = {};
        qe(a, (c, d) => {
            try {
                const e = new Ld(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var on = a => {
        bb($m, eb);
        a = yl({
            l: a,
            W: $m
        });
        return a.g != null ? pn(a.getValue()) : {}
    };

    function pn(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Td(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function qn(a) {
        Bk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    var rn = (a, b, c) => {
        if (c ? .u()) return (a = c ? .j() ? .g() ? .g()) && (F(a, ci, 1, C()).length > 0 || Hl(a).length > 0) ? (qn(!1), a) : null;
        if (c ? .i()) {
            var d = c ? .g() ? .i() ? .g() ? .g();
            if (c ? .g().j() === b && d && (F(d, ci, 1, C()).length > 0 || Hl(d).length > 0) && K(c, 17) === a.location.host) return qn(!0), d
        }
        if (c ? .i()) {
            d = c ? .g() ? .g();
            const e = c ? .g() ? .i() ? .g() ? .g();
            if (d && d.length === 1 && d[0] === b && e && (F(e, ci, 1, C()).length > 0 || Hl(e).length > 0) && K(c, 17) === a.location.host) return qn(!0), e
        }
        return null
    };
    const sn = (a, b) => {
        if (en(p)) return gn;
        if (b ? .u()) {
            var c = K(b.j(), 9);
            b = b ? .j() ? .g() ? .i();
            return a && c == a && b ? Yc(b, 3, Wb, C(Hb)) : gn
        }
        if (b ? .i()) {
            if (b ? .g() ? .j() === a && K(b, 17) == p.location.host) return (a = b ? .g() ? .i() ? .g() ? .i()) ? Yc(a, 3, Wb, C(Hb)) : gn;
            c = b ? .g() ? .g();
            return c && c.length === 1 && a && c[0] === a && K(b, 17) == p.location.host ? (a = b ? .g() ? .i() ? .g() ? .i()) ? Yc(a, 3, Wb, C(Hb)) : gn : gn
        }
        return gn
    };
    var tn = (a, b) => {
        const c = [];
        a = sn(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function un(a, b, c, d) {
        vn(new wn(a, b, c, d))
    }

    function vn(a) {
        Mh(Lh(yl({
            l: a.l,
            W: J(a.g, 6)
        }), b => {
            xn(a, b, !0)
        }), () => {
            yn(a)
        })
    }

    function xn(a, b, c) {
        Mh(Lh(zn(b), d => {
            An("ok");
            a.i(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Fm(d, {
                    lserr: 1
                })
            }
            c ? yn(a) : a.i(null, null)
        })
    }

    function yn(a) {
        Mh(Lh(Bn(a), b => {
            a.i(b, {
                fromPABGSettings: !0
            })
        }), () => {
            Cn(a)
        })
    }

    function zn(a) {
        if (S(Di)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Yj(b) : null
        } catch (d) {
            c = null
        }
        return (a = (a = c) ? (E(a, Lj, 3) ? .g() ? ? 0) > Date.now() ? a : null : null) ? Gh(a) : Ih(Error("invlocst"))
    }

    function Bn(a) {
        if (en(a.l) && !J(a.g, 22)) return Ih(Error("invtag"));
        if (a = rn(a.l, a.j, a.g)) {
            var b = new Xj;
            var c = F(a, ci, 1, C());
            b = pd(b, 1, c);
            c = F(a, Sj, 2, C());
            b = pd(b, 7, c);
            Hl(a).length > 0 && (c = new ei, a = Hl(a), a = pd(c, 1, a), nd(b, 6, a));
            a = Gh(b)
        } else a = Ih(Error("invtag"));
        return a
    }

    function Cn(a) {
        Cl({
            l: a.l,
            W: J(a.g, 6),
            hb: 50,
            qb: b => {
                Dn(a, b)
            }
        })
    }

    function Dn(a, b) {
        Mh(Lh(b, c => {
            xn(a, c, !1)
        }), c => {
            An(c.message);
            a.i(null, null)
        })
    }

    function An(a) {
        Bk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class wn {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.j = c;
            this.i = d
        }
    };
    var En = (a, b, c, d) => {
        try {
            const e = Km(a, F(c, Sj, 7, C()));
            if (e && Jm(e)) {
                if (Bd(e)) {
                    const g = new Wh(null, {
                        google_package: Bd(e)
                    });
                    d = Vh(d, g)
                }
                const f = new cl(a, b, c, e, d);
                ik(1E3, () => {
                    const g = new Bh;
                    (new Nl(a, f, g)).start();
                    return g.i
                }, a).then(() => {
                    Fm(a, {
                        atf: 1
                    })
                }, g => {
                    (a.google_ama_state = a.google_ama_state || {}).exception = g;
                    Fm(a, {
                        atf: 0
                    })
                })
            }
        } catch (e) {
            Fm(a, {
                atf: -1
            })
        }
    };

    function Fn(a) {
        return a.length ? a.join("~") : void 0
    };

    function Gn(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = Hn(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function Hn(a) {
        let b = "";
        qe(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    var In = class extends M {
        g() {
            return K(this, 3)
        }
        i() {
            return ud(this, 4) != null
        }
    };
    var Jn = class extends M {
        constructor() {
            super()
        }
        g() {
            return ld(this, In, 1)
        }
    };

    function Kn(a) {
        const b = new Jn;
        var c = new In;
        var d = wd(a, 1);
        c = A(c, 1, Yb(d));
        d = wd(a, 18);
        c = A(c, 2, Yb(d));
        d = K(a, 2);
        c = A(c, 3, z(d));
        d = J(a, 6);
        c = A(c, 4, Sb(d));
        d = J(a, 20);
        c = A(c, 5, Sb(d));
        d = J(a, 9);
        c = A(c, 6, Sb(d));
        d = J(a, 25);
        c = A(c, 7, Sb(d));
        d = K(a, 8);
        c = A(c, 8, z(d));
        a = K(a, 3);
        a = A(c, 9, z(a));
        nd(b, 1, a);
        return b
    };
    Wa || Ka();

    function Ln() {
        const a = {};
        O(Ce).g(yi.g, yi.defaultValue) && (a.bust = O(Ce).g(yi.g, yi.defaultValue));
        return a
    };
    class Mn {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function Nn() {
        const {
            promise: a,
            resolve: b
        } = new Mn;
        return {
            promise: a,
            resolve: b
        }
    };

    function On(a = () => {}) {
        p.google_llp || (p.google_llp = {});
        const b = p.google_llp;
        let c = b[7];
        if (c) return c;
        c = Nn();
        b[7] = c;
        a();
        return c
    }

    function Pn(a) {
        return On(() => {
            me(p.document, a)
        }).promise
    };

    function Qn(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new Rn;
        return a.google_reactive_ads_global_state
    }
    class Rn {
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
            this.floatingAdsStacking = new Sn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var Sn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Tn = a => {
        if (p.google_apltlad || a.google_ad_intent_query) return null;
        var b = a.google_loader_used !== "sd" && S(Gi) && (p.top == p ? 0 : ke(p.top) ? 1 : 2) === 1;
        if (p !== p.top && !b || !a.google_ad_client) return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        qe(a, (d, e) => {
            Hj[e] && e !== "google_ad_client" && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.asro = S(Xi);
        c.aihb = S(Ji);
        c.ailel = Fn(gj(Si));
        c.aiael = Fn(gj(Ki));
        c.aifxl = Fn(gj(Qi));
        c.aiixl = Fn(gj(Ri));
        S(Oi) ||
            (c.aiict = !0, c.aicel = Fn(gj(Ni)));
        S(Ti) && (c.aipaq = !0);
        S(Yi) && (c.aigda = !0);
        T(Li) && (c.aiapm = T(Li));
        T(Mi) && (c.aiapmi = T(Mi));
        S(Wi) && (c.aiombap = !0);
        S(Pi) && (c.aief = !0);
        S(Ui) && (c.aiopts = !0);
        c.aiof = Fn(gj(Vi));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function Un(a, b) {
        X(P).ama_ran_on_page || ik(1001, () => {
            Vn(new Wn(a, b))
        }, p)
    }

    function Vn(a) {
        un(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(P).ama_ran_on_page || b && Xn(d, e, b, c)
        })
    }
    class Wn {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.i = b
        }
    }

    function Xn(a, b, c, d) {
        d && (nk(a).configSourceInAbg = d);
        Wc(c, Wj, 24) && (d = ok(a), d.availableAbg = !0, d.ablationFromStorage = !!E(c, Wj, 24) ? .g() ? .g());
        if (ma(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
            if (!Km(a, F(c, Sj, 7, C()))) {
                Bk("amaait", {
                    value: "true"
                });
                return
            }
            Bk("amaait", {
                value: "false"
            })
        }
        X(P).ama_ran_on_page = !0;
        E(c, Kj, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        E(c, Wj, 24) ? .g() ? .g() && (ok(a).ablatingThisPageview = !0, bn(a));
        Ne(3, [Gd(c)]);
        const e = b.google_ad_client || "";
        b = Gm(ma(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const f = Vh(Zh, new Wh(null, b));
        Ak(782, () => {
            En(a, e, c, f)
        })
    };

    function Yn(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            vb: a,
            Kb: d
        }
    };

    function Zn({
        wa: a,
        Ca: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function $n(a) {
        return a.google_ad_client ? String(a.google_ad_client) : X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? ""
    };
    var ao = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function bo(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };
    var co = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return K(this, 2)
        }
    };

    function eo(a, b) {
        return A(a, 2, z(b))
    }

    function fo(a, b) {
        return A(a, 3, z(b))
    }

    function go(a, b) {
        return A(a, 4, z(b))
    }

    function ho(a, b) {
        return A(a, 5, z(b))
    }

    function io(a, b) {
        return A(a, 9, z(b))
    }

    function jo(a, b) {
        return pd(a, 10, b)
    }

    function ko(a, b) {
        return A(a, 11, Sb(b))
    }

    function lo(a, b) {
        return A(a, 1, z(b))
    }

    function mo(a, b) {
        return A(a, 7, Sb(b))
    }
    var no = class extends M {
        constructor() {
            super()
        }
    };
    const oo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function po() {
        var a = P;
        if (typeof a.navigator ? .userAgentData ? .getHighEntropyValues !== "function") return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(oo).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function qo(a) {
        return ko(jo(ho(eo(lo(go(mo(io(fo(new no, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new co;
            c = A(c, 1, z(b.brand));
            return A(c, 2, z(b.version))
        }) || []), a.wow64 || !1)
    }

    function ro() {
        return po() ? .then(a => qo(a)) ? ? null
    };

    function so(a, b) {
        b.google_ad_host || (a = fn(a)) && (b.google_ad_host = a)
    }

    function to(a, b, c = "") {
        P.google_sa_queue || (P.google_sa_queue = [], P.google_process_slots = W.pa(215, () => {
            uo(P.google_sa_queue)
        }), a = vo(c, a, b), me(P.document, a))
    }

    function uo(a) {
        const b = a.shift();
        typeof b === "function" && W.ea(216, b);
        a.length && p.setTimeout(W.pa(215, () => {
            uo(a)
        }), 0)
    }

    function wo(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function vo(a, b, c) {
        var d = P;
        b = J(c, 4) ? b.Db : b.Eb;
        a: {
            if (J(c, 4)) {
                if (a = a || $n(d)) {
                    a = Ve(a);
                    if (S(Hi)) b: {
                        try {
                            for (; d;) {
                                if (d.location ? .hostname) {
                                    var e = d.location.hostname;
                                    break b
                                }
                                d = d.parent
                            }
                        } catch (f) {}
                        e = ""
                    }
                    else e = d.location.hostname;
                    e = {
                        client: a,
                        plah: e
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            e = {}
        }
        e = { ...e,
            ...Ln()
        };
        d = T($i);
        !J(c, 4) && [0, 1].includes(d) && (e.osttc = `${d}`);
        return ie(b, new Map(Object.entries(e)))
    }

    function xo(a, b, c, d) {
        const {
            vb: e,
            Kb: f
        } = Yn(a, b);
        c.appendChild(f);
        yo(a, c, b);
        c = b.google_start_time ? ? va;
        const g = (new Date).getTime();
        b.google_lrv = Zn({
            wa: gm(),
            Ca: K(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        wo(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), h == null) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.aa(911,
                h)
        })
    }

    function yo(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || d !== "html" && d != null || (e = `${f}x${g}`);
        S(ej) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
        d = !c.google_ad_slot || c.google_override_format || !ao[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
            e = [c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && f < 25; g = g.parentNode, ++f) g.nodeType === 9 ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = re(e.join(":")).toString();
            e = [];
            for (d = 0; b && d < 25; ++d) {
                f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m =
                                h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && d < 25; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = re(b + e.join()).toString()
        }
    }

    function zo() {
        var a = le(p);
        a && (a = Qn(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Ao() {
        const a = ro();
        a != null && a.then(b => {
            P.google_user_agent_client_hint = Fd(b)
        });
        Be()
    };

    function Bo(a) {
        return b => !!(b.fa & a)
    }
    class Y extends yj {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.u = d
        }
        qa() {
            return this.fa
        }
        i(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const Co = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        Do = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        Eo = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Fo(a) {
        var b = 0;
        a.N && b++;
        a.J && b++;
        a.K && b++;
        if (b < 3) return {
            U: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.N.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            U: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            U: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                U: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                U: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            ab: b
        }
    }

    function Go(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function Ho(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * Co[d] + Do[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function Io(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * Co.mobile_banner_image_sidebyside + Do.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const Jo = Va("script");
    class Ko {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, v = null) {
            this.C = a;
            this.ba = b;
            this.fa = c;
            this.g = d;
            this.V = e;
            this.i = f;
            this.j = g;
            this.D = h;
            this.H = k;
            this.u = l;
            this.A = m;
            this.I = v
        }
        size() {
            return this.ba
        }
    };
    const Lo = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var Mo = class extends yj {
        g(a) {
            return Math.min(1200, Math.max(this.Y, Math.round(a)))
        }
    };

    function No(a, b) {
        Oo(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new Ko(9, new Mo(a, Math.floor(a * b.google_phwr)));
        if (S(mi)) {
            var c = Rd();
            var d = T(ni);
            var e = T(li),
                f = T(ki);
            a < 468 ? c ? (a = Io(a, d), d = {
                T: a.width,
                R: a.height,
                J: 1,
                K: d,
                N: "mobile_banner_image_sidebyside"
            }) : (a = Ho(a, 1, d, "image_sidebyside"), d = {
                T: a.width,
                R: a.height,
                J: 1,
                K: d,
                N: "image_sidebyside"
            }) : (d = Go(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                T: d.width,
                R: d.height,
                J: f,
                K: e,
                N: "image_stacked"
            })
        } else d = Rd(), a < 468 ? d ? (d = Io(a, 12), d = {
            T: d.width,
            R: d.height,
            J: 1,
            K: 12,
            N: "mobile_banner_image_sidebyside"
        }) : (d = Go(a), d = {
            T: d.width,
            R: d.height,
            J: 1,
            K: 13,
            N: "image_sidebyside"
        }) : (d = Go(a), d = {
            T: d.width,
            R: d.height,
            J: 4,
            K: 2,
            N: "image_stacked"
        });
        Po(b, d);
        return new Ko(9, new Mo(d.T, d.R))
    }

    function Qo(a, b) {
        Oo(a, b); {
            const f = Fo({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                N: b.google_content_recommendation_ui_type
            });
            if (f.U) a = {
                T: 0,
                R: 0,
                J: 0,
                K: 0,
                N: "image_stacked",
                U: f.U
            };
            else {
                var c = f.ab.length === 2 && a >= 468 ? 1 : 0;
                var d = f.ab[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Eo[d];
                let g = f.J[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.K[c];
                a = Ho(a, e, c, d);
                a = {
                    T: a.width,
                    R: a.height,
                    J: e,
                    K: c,
                    N: d
                }
            }
        }
        if (a.U) throw new V(a.U);
        Po(b, a);
        return new Ko(9, new Mo(a.T, a.R))
    }

    function Oo(a, b) {
        if (a <= 0) throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function Po(a, b) {
        a.google_content_recommendation_ui_type = b.N;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    var Ro = class extends yj {
        g() {
            return this.Y
        }
        i(a, b, c) {
            xj(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const So = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var To = class extends yj {
        g() {
            return Math.min(1200, this.Y)
        }
    };

    function Uo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = sj(b, c, g, T(ti), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = U(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && vj(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    xj(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new V("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new Ko(11, new yj(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [], e = 0; e < d; e++) b.push(parseInt(c[e], 36) / 1E3);
            else b = null;
            if (!b) throw new V(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new V(`Invalid height: height=${f}`);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new V("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new Ko(11, new yj(a, f))
        }
        d = So[f];
        if (!d) throw new V("Invalid data-ad-layout value: " + f);
        c = Cj(c, b);
        b = U(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new Ko(11,
            f === "in-article" ? new To(a, b) : new yj(a, b))
    };

    function Vo(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Wo(a, b) {
        var c = Xo.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Xo = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function Yo(a, b, c, d, e) {
        e.google_full_width_responsive == "false" ? c = {
            F: a,
            G: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || Zo(b) || e.google_ad_resize ? (b = tj(a, c, d, e), c = b !== !0 ? {
            F: a,
            G: b
        } : {
            F: U(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {
            F: f,
            G: g
        } = c;
        return g !== !0 ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }

    function $o(a, b, c, d, e) {
        const {
            F: f,
            G: g
        } = Ak(247, () => Yo(a, b, c, d, e));
        var h = g === !0;
        const k = ve(d.style.width),
            l = ve(d.style.height),
            {
                Z: m,
                X: v,
                qa: n,
                Za: r
            } = ap(f, b, c, d, e, h);
        h = bp(b, n);
        var u;
        const w = (u = zj(d, c, "marginLeft")) ? `${u}px` : "",
            N = (u = zj(d, c, "marginRight")) ? `${u}px` : "";
        u = Aj(d, c) || "";
        return new Ko(h, m, n, null, r, g, v, w, N, l, k, u)
    }

    function Zo(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ap(a, b, c, d, e, f) {
        b = cp(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = U(c) < 488;
        if (l) {
            g = nj(d, c);
            var m = Cj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [Bj(a), Bo(b)];
        S(Ai) || m.push(Ej(l, c, d, k));
        e.google_max_responsive_height != null && m.push(Fj(e.google_max_responsive_height));
        l = [u => !u.u];
        if (h || k) h = Gj(c, d), l.push(Fj(h));
        const v = Wo(Vo(m), Vo(l));
        if (!v) throw new V(`No slot size for availableWidth=${a}`);
        const {
            Z: n,
            X: r
        } = Ak(248, () => {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = ve(e.gfwrnh))) {
                    u = {
                        Z: new Ro(a, u),
                        X: !0
                    };
                    break a
                }
                u = T(vi);
                u = u > 0 ? a / u : a / 1.2;
                if (e.google_resizing_allowed ||
                    e.google_full_width_responsive == "true") var w = Infinity;
                else {
                    w = d;
                    let G = Infinity;
                    do {
                        var N = zj(w, c, "height");
                        N && (G = Math.min(G, N));
                        (N = zj(w, c, "maxHeight")) && (G = Math.min(G, N))
                    } while (w.parentElement && (w = w.parentElement) && w.tagName !== "HTML");
                    w = G
                }!(S(xi) && w <= u * 2) && (w = Math.min(u, w), w < u * .5 || w < 100) && (w = u);
                u = {
                    Z: new Ro(a, Math.floor(w)),
                    X: w < u ? 102 : !0
                }
            } else u = {
                Z: v,
                X: 100
            };
            return u
        });
        return e.google_ad_layout === "in-article" && dp(c) ? {
            Z: ep(a, c, d, n, e),
            X: !1,
            qa: b,
            Za: g
        } : {
            Z: n,
            X: r,
            qa: b,
            Za: g
        }
    }

    function bp(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function cp(a, b, c) {
        if (c === "auto") c = Math.min(1200, U(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in kj) c.indexOf(d) !== -1 && (b |= kj[d])
        }
        return b
    }

    function ep(a, b, c, d, e) {
        const f = e.google_ad_height || zj(c, b, "height");
        b = Uo(a, b, c, f, e).size();
        return b.Y * b.height() > a * d.height() ? new Y(b.Y, b.height(), 1) : d
    }

    function dp(a) {
        return S(ji) || a.location && a.location.hash === "#hffwroe2etoq"
    };

    function fp(a, b, c, d, e) {
        var f;
        (f = U(b)) ? U(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, xj(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        const {
            F: g,
            G: h
        } = f;
        if (h !== !0 || a === g) return new Ko(12, new yj(a, d), null, null, !0, h, 100);
        const {
            Z: k,
            X: l,
            qa: m
        } = ap(g, "auto", b, c, e, !0);
        return new Ko(1, k, m, 2, !0, h, l)
    };
    var hp = (a, b) => {
            var c = b.google_ad_format;
            if (c === "autorelaxed") {
                a: {
                    if (b.google_content_recommendation_ui_type !== "pedestal")
                        for (const d of Lo)
                            if (b[d] != null) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (Zo(c)) return 1;
            if (c === "link") return 4;
            if (c === "fluid") {
                if (c = b.google_ad_layout === "in-article") c = S(qi) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
                return c ? (gp(b), 1) : 8
            }
            if (b.google_reactive_ad_format === 27) return gp(b), 1
        },
        jp = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize ||
                e) && zj(b, d, "width") || c.google_ad_width || 0;
            a === 4 && (c.google_ad_format = "auto", a = 1);
            e = (e = ip(a, f, b, c, d)) ? e : $o(f, c.google_ad_format, d, b, c);
            e.size().i(d, c, b);
            e.fa != null && (c.google_responsive_formats = e.fa);
            e.V != null && (c.google_safe_for_responsive_override = e.V);
            e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.i));
            e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
            d = e.A || c.google_ad_width;
            d != null && (c.google_resizing_width = d);
            d = e.u || c.google_ad_height;
            d != null && (c.google_resizing_height = d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.C;
            e.g != null && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            e.i === !0 && (c.gfwrnh = e.size().height() + "px");
            e.D != null && (c.gfwroml = e.D);
            e.H != null && (c.gfwromr = e.H);
            e.u != null && (c.gfwroh = e.u);
            e.A != null && (c.gfwrow = e.A);
            e.I != null && (c.gfwroz = e.I);
            f = le(window) || window;
            Gn(f.location, "google_responsive_dummy_ad") && (Ua([1, 2, 3, 4, 5, 6, 7, 8], e.C) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${Jo}>window.top.postMessage('${f}', '*'); 
          </${Jo}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            a != 1 && (a = e.size().height(), b.style.height = a + "px")
        };
    const ip = (a, b, c, d, e) => {
            const f = d.google_ad_height || zj(c, e, "height");
            switch (a) {
                case 5:
                    const {
                        F: g,
                        G: h
                    } = Ak(247, () => Yo(b, d.google_ad_format, e, c, d));
                    h === !0 && b != g && xj(e, c);
                    h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return No(g, d);
                case 9:
                    return Qo(b, d);
                case 8:
                    return Uo(b, e, c, f, d);
                case 10:
                    return fp(b, e, c, f, d)
            }
        },
        gp = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function kp(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function lp(a, b) {
        var c = le(b);
        if (c) {
            c = U(c);
            const d = oe(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function mp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function np(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = ge(c, "client");
            d && (b.google_ad_client = mp("google_ad_client", d));
            (c = ge(c, "host")) && (b.google_ad_host = mp("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = xa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = mp(f, e.value), e !== null && (b[f] = e))
            }
        }
    }

    function op(a) {
        if (a = Pe(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function pp(a, b, c, d) {
        np(a, b);
        if (c.document && c.document.body && !hp(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = lp(a, c);
            if (f > 0 && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!ao[e + "x" + g];
                let h = f;
                if (e) {
                    const k = bo(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                kp(b, 4)
            }
        }
        if (S(oi) ||
            U(c) < 488) {
            f = le(c) || c;
            g = a.offsetWidth || zj(a, c, "width") || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = Gn(f.location, "google_responsive_slot_preview") || kn(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || hp(c, b) || pj(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = oe(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ua(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    if (!S(Bi) && (d = T(ui), d = sj(c, a, g, d, b), d !== !0)) {
                        b.gfwrnwer = d;
                        d = !1;
                        break b
                    }
                    d = c === c.top ? !0 : !1
                }
            d ? (kp(b, 1), d = !0) : d = !1
        } else d = !1;
        if (g = hp(c, b)) jp(g, a, b, c, d);
        else {
            if (pj(a, b)) {
                if (d = oe(a, c)) a.style.width = d.width, a.style.height = d.height, oj(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = op(c)
            } else oj(a.style, b);
            c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? jp(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format ===
                12 && (a = tj(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), a !== !0 ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function qp(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && ke(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function rp(a, b, c) {
        for (const f of b) a: {
            b = a;
            var d = f,
                e = c;
            for (let g = 0; g < b.g.length; g++) {
                if (b.g[g].element.contains(d)) {
                    b.g[g].labels.add(e);
                    break a
                }
                if (d.contains(b.g[g].element)) {
                    b.g[g].element = d;
                    b.g[g].labels.add(e);
                    break a
                }
            }
            b.g.push({
                element: d,
                labels: new Set([e])
            })
        }
    }
    class sp {
        constructor() {
            this.g = []
        }
        getSlots() {
            return this.g
        }
    }

    function tp(a) {
        const b = Vk(a),
            c = new sp;
        rp(c, b.kb, 1);
        rp(c, b.lb, 2);
        rp(c, b.tb, 3);
        rp(c, b.Jb, 4);
        rp(c, b.mb, 5);
        rp(c, b.Ab, 6);
        return c.getSlots().map(d => {
            var e = new Pf;
            var f = [...d.labels];
            e = dd(e, 1, f, Vb);
            d = d.element.getBoundingClientRect();
            f = new Of;
            f = A(f, 1, Yb(d.left + a.scrollX));
            f = A(f, 2, Yb(d.top + a.scrollY));
            f = A(f, 3, Yb(d.width));
            d = Qc(f.setHeight(d.height));
            e = nd(e, 2, d);
            return Qc(e)
        }).sort((d, e) => wd(E(d, Of, 2), 2) - wd(E(e, Of, 2), 2))
    };

    function Kg(a, b, c = 0) {
        a.g.size > 0 || up(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function vp(a, b, c, d) {
        Pd(b, c, d);
        rl(a, () => Qd(b, c, d))
    }

    function wp(a, b) {
        a.state !== 1 && (a.state = 1, a.g.size > 0 && xp(a, b))
    }

    function up(a) {
        a.l.document.visibilityState ? vp(a, a.l.document, "visibilitychange", b => {
            a.l.document.visibilityState === "hidden" && wp(a, b);
            a.l.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.l ? (vp(a, a.l, "pagehide", b => {
            wp(a, b)
        }), vp(a, a.l, "pageshow", () => {
            a.state = 0
        })) : vp(a, a.l, "beforeunload", b => {
            wp(a, b)
        })
    }

    function xp(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var yp = class extends ql {
        constructor(a) {
            super();
            this.l = a;
            this.state = 0;
            this.g = new Map
        }
    };
    async function zp(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Ap(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = Fe(a.l)
    }

    function Bp(a) {
        const b = a.state.wpc;
        return b !== null && b !== "" ? b : a.state.wpc = $n(a.l)
    }

    function Cp(a, b) {
        var c = new cg;
        var d = Ap(a);
        c = Cd(c, 1, d);
        d = Bp(a);
        c = D(c, 2, z(d), "");
        c = Cd(c, 3, a.state.sd);
        return Cd(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function Dp(a) {
        await zp(a.l, () => !(!Ap(a) || !Bp(a)))
    }

    function Ep(a) {
        var b = O(Fp);
        if (b.i) {
            var c = b.u;
            a(c);
            b.state.psi = Gd(c)
        }
    }

    function Gp(a) {
        Kg(a.j, () => {
            var b = Cp(a);
            b = od(b, 12, dg, a.A);
            a.i && !a.state.le.includes(3) && (a.state.le.push(3), Gg(a.g, b))
        }, 9)
    }

    function Hp(a) {
        const b = new Zf;
        Kg(a.j, () => {
            nd(b, 2, a.u);
            Cd(b, 3, a.state.tar);
            if (S(ri)) {
                var c = a.l;
                var d = new Sf;
                var e = tp(c);
                d = pd(d, 1, e);
                e = Qc(Qf(new Rf, U(c)).setHeight(mj(c).clientHeight));
                d = nd(d, 2, e);
                e = d.setPage;
                c = Qc(Qf(new Rf, mj(c).scrollWidth).setHeight(mj(c).scrollHeight));
                c = Qc(e.call(d, c));
                nd(b, 4, c)
            }
            c = a.g;
            d = Cp(a);
            d = od(d, 8, dg, b);
            Gg(c, d)
        }, 9)
    }
    async function Ip(a) {
        var b = O(Fp);
        if (b.i && !b.state.le.includes(1)) {
            b.state.le.push(1);
            var c = b.l.performance.now();
            await Dp(b);
            var d = new Vf;
            a = D(d, 5, Sb(a), !1).setPage(Qf(new Rf, mj(b.l).scrollWidth).setHeight(mj(b.l).scrollHeight));
            d = Qf(new Rf, U(b.l)).setHeight(mj(b.l).clientHeight);
            a = nd(a, 1, d);
            for (var e = d = b.l; d && d != d.parent;) d = d.parent, ke(d) && (e = d);
            a = D(a, 4, z(e.location.href), "");
            d = qp(b.l);
            d !== 0 && (e = new Uf, d = A(e, 1, y(d)), nd(a, 3, d));
            d = b.g;
            c = Cp(b, c);
            c = od(c, 4, dg, a);
            Gg(d, c);
            Gp(b);
            Hp(b)
        }
    }
    async function Jp(a, b, c) {
        if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await Dp(a);
            var e = a.g;
            a = Cp(a, d);
            d = new Tf;
            b = D(d, 1, y(b), 0);
            c = dd(b, 2, c, Xb);
            c = od(a, 9, dg, c);
            Gg(e, c)
        }
    }
    async function Kp(a, b) {
        await Dp(a);
        var c = a.g;
        a = Cp(a);
        a = Cd(a, 3, 1);
        b = od(a, 10, dg, b);
        Gg(c, b)
    }
    var Fp = class {
        constructor(a, b) {
            this.l = Qe() || window;
            this.j = b ? ? new yp(this.l);
            this.g = a ? ? new Mg(2, gm(), 100, 100, !0, this.j);
            this.state = kl(fl(), 33, () => {
                const c = T(si);
                return {
                    sd: c,
                    ssp: c > 0 && pe() < 1 / c,
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
        get i() {
            return this.state.ssp
        }
        get u() {
            return Ak(1178, () => Hd(Yf, Lc(this.state.psi || []))) || new Yf
        }
        get A() {
            return Ak(1227, () => Hd($f, Lc(this.state.cc || []))) || new $f
        }
    };

    function Lp() {
        var a = window;
        return p.google_adtest === "on" || p.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    };

    function Mp(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Np(a) {
        var b = P.document;
        if (b.currentScript) return Mp(b.currentScript, a);
        for (const c of b.scripts)
            if (Mp(c, a) === 0) return 0;
        return 1
    };

    function Op(a, b) {
        return {
            [3]: {
                [55]: () => a === 0,
                [23]: c => kn(P, Number(c)),
                [24]: c => mn(Number(c)),
                [61]: () => J(b, 6),
                [63]: () => J(b, 6) || K(b, 8) === ".google.ch"
            },
            [4]: {},
            [5]: {
                [6]: () => K(b, 15)
            }
        }
    };

    function Pp(a = p) {
        return a.ggeac || (a.ggeac = {})
    };

    function Qp(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function Rp(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function Sp(a, b = navigator) {
        try {
            return !!b.protectedAudience ? .queryFeatureSupport ? .(a)
        } catch (c) {
            return !1
        }
    };

    function Tp(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0,
                f;
            for (; a != null && e < d.length; e++) f = a, a = a[d[e]], typeof a === "function" && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var Up = {
        [3]: {
            [8]: a => {
                try {
                    return la(a) != null
                } catch {}
            },
            [9]: a => {
                try {
                    var b = la(a)
                } catch {
                    return
                }
                if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ua(O(qh).g(), Number(a)),
            [27]: a => {
                a = Tp(a, "boolean");
                return a !== void 0 ? a : void 0
            },
            [60]: a => {
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            },
            [80]: a => {
                try {
                    return !!p.matchMedia(a).matches
                } catch {}
            },
            [69]: a => Qp(a, p.document),
            [70]: a => Rp(a, p.document),
            [79]: a => Sp(a,
                p.navigator)
        },
        [4]: {
            [3]: () => we(),
            [6]: a => {
                a = Tp(a, "number");
                return a !== void 0 ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = Tp(a, "string");
                return a !== void 0 ? a : void 0
            },
            [12]: a => {
                try {
                    const b = Tp(a, "string");
                    if (b !== void 0) return atob(b)
                } catch (b) {}
            }
        }
    };

    function Vp(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                gb: h,
                bb: k,
                eb: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of F(f, Sm, 2, C()))
                if (Rm(g).length !== 0) {
                    b = td($b(Tc(g, 8)), 0);
                    !L(g, 4) || L(g, 13) || L(g, 14) || (b = c.get(L(g, 4)) ? ? 0, d = td($b(Tc(g, 1)), 0) * Rm(g).length, c.set(L(g, 4), b + d));
                    d = [];
                    for (e = 0; e < Rm(g).length; e++) {
                        const h = {
                            gb: b,
                            bb: td($b(Tc(g, 1)), 0),
                            eb: Rm(g).length,
                            zb: e,
                            ha: L(f, 1),
                            ra: g,
                            O: Rm(g)[e]
                        };
                        d.push(h)
                    }
                    Wp(a[2], L(g, 10), d) || Wp(a[1], L(g, 4), d) || Wp(a[0], Rm(g)[0].getId(),
                        d)
                }
        return a
    }

    function Wp(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function Xp(a = pe()) {
        return b => re(`${b} + ${a}`) % 1E3
    };
    const Yp = [12, 13, 20];

    function Zp(a, b) {
        var c = O(Sg).M;
        const d = Ef(E(b.ra, xf, 3), c);
        if (!d.success) return Qg(a.L, E(b.ra, xf, 3), b.ha, b.O.getId(), d), !1;
        if (!d.value) return !1;
        c = Ef(E(b.O, xf, 3), c);
        return c.success ? c.value ? !0 : !1 : (Qg(a.L, E(b.O, xf, 3), b.ha, b.O.getId(), c), !1)
    }

    function $p(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function aq(a, b, c, d) {
        const e = [];
        var f;
        if (f = b !== 9) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return Og(a.L, b, c, e, [], 4), e;
        f = Yp.includes(b);
        const g = [],
            h = [];
        for (const v of [0, 1, 2])
            for (const [n, r] of a.la[v].entries()) {
                var k = n,
                    l = r;
                const u = new ig;
                var m = l.filter(w => w.ha === b && a.i[w.O.getId()] && Zp(a, w));
                if (m.length)
                    for (const w of m) h.push(w.O);
                else if (!a.za && (v === 2 ? (m = d[1], fd(u, 2, jg, y(k))) : m = d[0], k = m ? .(String(k)) ? ? (v === 2 && L(l[0].ra, 11) === 1 ? void 0 : d[0](String(k))), k !== void 0)) {
                    for (const w of l) {
                        if (w.ha !== b) continue;
                        l =
                            k - w.gb;
                        m = w.bb;
                        const N = w.eb,
                            G = w.zb;
                        l < 0 || l >= m * N || l % N !== G || !Zp(a, w) || (l = L(w.ra, 13), l !== 0 && l !== void 0 && (m = a.j[String(l)], m !== void 0 && m !== w.O.getId() ? Pg(a.L, a.j[String(l)], w.O.getId(), l) : a.j[String(l)] = w.O.getId()), h.push(w.O))
                    }
                    jd(u, jg) !== 0 && (D(u, 3, Yb(k), 0), g.push(u))
                }
            }
        for (const v of h) d = v.getId(), e.push(d), $p(a, d, f ? 4 : c), hh(F(v, Hf, 2, C()), f ? jh() : [c], a.L, d);
        Og(a.L, b, c, e, g, 1);
        return e
    }

    function bq(a, b) {
        b = b.map(c => new Tm(c)).filter(c => !Yp.includes(L(c, 1)));
        a.la = Vp(a.la, b)
    }

    function cq(a, b) {
        Q(1, c => {
            a.i[c] = !0
        }, b);
        Q(2, (c, d, e) => aq(a, c, d, e), b);
        Q(3, c => (a.g[c] || []).concat(a.g[4]), b);
        Q(12, c => void bq(a, c), b);
        Q(16, (c, d) => void $p(a, c, d), b)
    }
    var dq = class {
        constructor(a, b, c, {
            za: d = !1,
            tc: e = []
        } = {}) {
            this.la = a;
            this.L = c;
            this.u = {};
            this.za = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            this.j = {};
            if (a = cf()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.i[a] = !0)
            }
            for (const f of e) this.i[f] = !0
        }
    };

    function eq(a, b) {
        a.g = lh(14, b, () => {})
    }
    class fq {
        constructor() {
            this.g = () => {}
        }
    }

    function gq(a) {
        O(fq).g(a)
    };

    function hq({
        ub: a,
        M: b,
        config: c,
        ob: d = Pp(),
        pb: e = 0,
        L: f = new Rg(E(a, Um, 5) ? .g() ? ? 0, E(a, Um, 5) ? .i() ? ? 0, E(a, Um, 5) ? .j() ? ? !1),
        la: g = Vp({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, F(a, Tm, 2, C(Hb)))
    }) {
        d.hasOwnProperty("init-done") ? (lh(12, d, () => {})(F(a, Tm, 2, C()).map(h => Gd(h))), lh(13, d, () => {})(F(a, Hf, 1, C()).map(h => Gd(h)), e), b && lh(14, d, () => {})(b), iq(e, d)) : (cq(new dq(g, e, f, c), d), mh(d), nh(d), oh(d), iq(e, d), hh(F(a, Hf, 1, C(Hb)), [e], f, void 0, !0), Tg = Tg || !(!c || !c.yb), gq(Up), b && gq(b))
    }

    function iq(a, b = Pp()) {
        ph(O(qh), b, a);
        jq(b, a);
        eq(O(fq), b);
        O(Ce).C()
    }

    function jq(a, b) {
        const c = O(Ce);
        c.i = (d, e) => lh(5, a, () => !1)(d, e, b);
        c.u = (d, e) => lh(6, a, () => 0)(d, e, b);
        c.g = (d, e) => lh(7, a, () => "")(d, e, b);
        c.A = (d, e) => lh(8, a, () => [])(d, e, b);
        c.j = (d, e) => lh(17, a, () => [])(d, e, b);
        c.C = () => {
            lh(15, a, () => {})(b)
        }
    };

    function kq(a, b) {
        b = {
            [0]: Xp(Fe(b).toString())
        };
        b = O(qh).u(a, b);
        uh.aa(1085, Jp(O(Fp), a, b))
    }

    function lq(a, b, c) {
        var d = X(a);
        if (d.plle) iq(1, Pp(a));
        else {
            d.plle = !0;
            d = E(b, Vm, 12);
            var e = J(b, 9);
            hq({
                ub: d,
                M: Op(c, b),
                config: {
                    za: e && !!a.google_disable_experiments,
                    yb: e
                },
                ob: Pp(a),
                pb: 1
            });
            if (c = K(b, 15)) c = Number(c), O(qh).j(c);
            for (const f of Yc(b, 19, Zb, C())) O(qh).i(f);
            kq(12, a);
            kq(10, a);
            a = le(a) || a;
            Gn(a.location, "google_mc_lab") && O(qh).i(44738307)
        }
    };

    function mq(a) {
        sf(W, b => {
            b.shv = String(a);
            b.mjsv = Zn({
                wa: gm(),
                Ca: a
            });
            const c = O(qh).g(),
                d = Lp();
            b.eid = c.concat(d).join(",")
        })
    }

    function nq(a, b) {
        const c = b ? .g();
        b = c ? .g() || K(a, 2);
        a = c ? .i() ? J(c, 4) : J(a, 6);
        mq(b);
        bb($m, hb);
        $m = a
    };
    var oq = {
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    };

    function pq(a) {
        var b = W;
        try {
            return bb(a, gb), new Ym(JSON.parse(a))
        } catch (c) {
            b.P(838, c instanceof Error ? c : Error(String(c)))
        }
        return new Ym
    };

    function qq(a, b) {
        if (J(b, 22)) return 7;
        if (J(b, 16)) return 6;
        var c = S(Ii) ? Ad(b, Om, 27, Zm) ? .g() ? .g() : b.g() ? .j();
        const d = (S(Ii) ? Ad(b, Om, 27, Zm) ? .g() ? .i() : b.g() ? .u()) ? ? 0;
        c = c === a;
        switch (d) {
            case 1:
                return c ? 9 : 8;
            case 2:
                return c ? 11 : 10;
            case 3:
                return c ? 13 : 12
        }
        b = b.g() ? .g() ? ? [];
        return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
    }

    function rq(a, b, c) {
        b.google_loader_used !== "sd" && (b.abgtt = qq(a, c))
    };
    var sq = a => {
        Pd(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "sc-cnf" || a(c, b)
        })
    };

    function tq(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function uq(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function vq() {
        const a = new Set,
            b = Ok();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function wq(a) {
        a = a.id;
        return a != null && (vq().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function xq(a, b, c) {
        if (!a.sources) return !1;
        switch (yq(a)) {
            case 2:
                const d = zq(a);
                if (d) return c.some(f => Aq(d, f));
                break;
            case 1:
                const e = Bq(a);
                if (e) return b.some(f => Aq(e, f))
        }
        return !1
    }

    function yq(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Bq(a) {
        return Cq(a, b => b.currentRect)
    }

    function zq(a) {
        return Cq(a, b => b.previousRect)
    }

    function Cq(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Aq(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : c * a * 100 / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function Dq() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(wq),
            b = [...vq()].map(c => document.getElementById(c)).filter(c => c !== null);
        Eq = window.scrollX;
        Fq = window.scrollY;
        return Gq = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Hq() {
        var a = new Iq;
        if (S(bj)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.options.sb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, c === "event" && (b.durationThreshold = 40), Jq(a).observe(b);
                Kq(a)
            }
        }
    }

    function Lq(a, b) {
        const c = Eq !== window.scrollX || Fq !== window.scrollY ? [] : Gq,
            d = Dq();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                Mq(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ja = Math.floor(b.renderTime || b.loadTime);
                a.Ia = b.size;
                break;
            case "first-input":
                b = e;
                a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ga = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || Nq(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.C +=
                    b;
                a.I = Math.max(a.I, b);
                a.ta += 1;
                break;
            case "event":
                Nq(a, e);
                break;
            default:
                Rb(b, void 0)
        }
    }

    function Jq(a) {
        a.L || (a.L = new PerformanceObserver(hk(640, b => {
            Lq(a, b)
        })));
        return a.L
    }

    function Kq(a) {
        const b = hk(641, () => {
                var d = document;
                (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && Oq(a)
            }),
            c = hk(641, () => void Oq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ea = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            Jq(a).disconnect()
        }
    }

    function Oq(a) {
        if (!a.Ma) {
            a.Ma = !0;
            Jq(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += uq("cls", a.D), b += uq("mls", a.V), b += tq("nls", a.sa), window.LayoutShiftAttribution && (b += uq("cas", a.A), b += tq("nas", a.La), b += uq("was", a.Qa)), b += uq("wls", a.ua), b += uq("tls", a.Pa));
            window.LargestContentfulPaint && (b += tq("lcp", a.Ja), b += tq("lcps", a.Ia));
            window.PerformanceEventTiming && a.Ga && (b += tq("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += tq("cbt", a.C),
                b += tq("mbt", a.I), b += tq("nlt", a.ta));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) wq(c) && d++;
            b += tq("nif", d);
            b += tq("ifi", Ue(window));
            c = O(qh).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p===p.top?1:0}`;
            b += a.Oa ? `&${"qqid"}=${encodeURIComponent(a.Oa)}` : tq("pvsid", Fe(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.L ? a.Ha : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += tq("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ea()
        }
    }

    function Mq(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.D += Number(b.value);
            Number(b.value) > a.V && (a.V = Number(b.value));
            a.sa += 1;
            if (c = xq(b, c, d)) a.A += b.value, a.La++;
            if (b.startTime - a.Ka > 5E3 || b.startTime - a.Na > 1E3) a.Ka = b.startTime, a.i = 0, a.j = 0;
            a.Na = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ua && (a.ua = a.i, a.Qa = a.j, a.Pa = b.startTime + b.duration)
        }
    }

    function Nq(a, b) {
        Pq(a, b);
        const c = a.g[a.g.length - 1],
            d = a.H[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.H[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.H[e.id]
        })
    }

    function Pq(a, b) {
        b.interactionId && (a.ba = Math.min(a.ba, b.interactionId), a.u = Math.max(a.u, b.interactionId), a.Ha = a.u ? (a.u - a.ba) / 7 + 1 : 0)
    }
    var Iq = class {
            constructor() {
                this.j = this.i = this.sa = this.V = this.D = 0;
                this.Na = this.Ka = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.H = {};
                this.Ha = 0;
                this.ba = Infinity;
                this.Fa = this.Ia = this.Ja = this.La = this.Qa = this.A = this.Pa = this.ua = this.u = 0;
                this.Ga = !1;
                this.ta = this.I = this.C = 0;
                this.L = null;
                this.Ma = !1;
                this.Ea = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Oa = a ? a.getAttribute("data-google-query-id") : null;
                this.options = {
                    sb: !0
                }
            }
        },
        Eq, Fq, Gq = [];
    let Qq = null;
    const Rq = [],
        Sq = new Map;
    let Tq = -1;

    function Uq(a) {
        return Ij.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
    }

    function Vq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Wq(a, b, c)
    }

    function Wq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = pp);
        var e = b.google_reactive_ads_config;
        e || pp(a, b, d, c);
        so(d, b);
        if (!Xq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(P).page_contains_reactive_tag && !X(P).allow_second_reactive_tag) {
                    if (e.pltais) {
                        cn(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(P).page_contains_reactive_tag = !0;
                cn(e.google_pgb_reactive === 7)
            }
            b.google_unique_id = Te(d);
            qe(oq, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used !== "sd" && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = (X(P).first_tag_on_page || 0) === 1;
            Ak(164, () => {
                xo(d, b, a, c)
            })
        }
    }

    function Xq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = an(c);
        if (f && f.Ra && b.google_adtest !== "on" && !e) {
            e = qj(a, c);
            const g = mj(c).clientHeight;
            e = g === 0 ? null : e / g;
            if (!f.va || f.va && (e || 0) >= f.va) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = na(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), f.Hb === "slot" && (ue(a.getAttribute("width")) !==
                null && a.setAttribute("width", "0"), ue(a.getAttribute("height")) !== null && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = oe(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
        return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !==
            8 || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Yq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Uq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) return e
        }
        return null
    }

    function Zq(a, b, c) {
        if (a && "shift" in a) {
            Ep(e => {
                yd(Xf(e), 2) || (e = Xf(e), Dd(e, 2))
            });
            for (var d = 20; a.length > 0 && d > 0;) {
                try {
                    $q(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function ar() {
        const a = ne("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        ye(a);
        return a
    }

    function br(a, b) {
        const c = {},
            d = tn(a.google_ad_client, b);
        qe(lj, (g, h) => {
            a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ma(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = ar();
        Ge.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(P).pause_ad_requests;
        rq(cr(a) || $n(P), f, b);
        Vq(e, f, b);
        Ep(g => {
            yd(Xf(g), 6) || (g = Xf(g), Dd(g, 6))
        })
    }

    function dr(a, b) {
        Qn(p).wasPlaTagProcessed = !0;
        const c = () => {
                br(a, b)
            },
            d = p.document;
        if (d.body || d.readyState === "complete" || d.readyState === "interactive") br(a, b);
        else {
            const e = Od(W.pa(191, c));
            Pd(d, "DOMContentLoaded", e);
            p.MutationObserver != null && (new p.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function $q(a, b, c) {
        const d = {};
        Ak(165, () => {
            er(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function fr(a) {
        delete a.google_checked_head;
        qe(a, (b, c) => {
            Hj[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function gr(a, b) {
        var c = P.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || P.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) hr(c);
            else {
                Ep(g => {
                    g = Xf(g);
                    D(g, 7, Sb(!0), !1)
                });
                var e = {};
                np(c, e);
                fr(e);
                var f = Wd(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                    (c.enable_ad_intent_display_ads = !0);
                e.google_overlays === "bottom" && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                P.adsbygoogle || (P.adsbygoogle = []);
                d = P.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.j() ? .i() ? ir(f, a) : sq(() => {
                    ir(f, a)
                })
            }
        }
    }

    function hr(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = ge(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function jr(a) {
        if (typeof a === "object" && a != null) {
            if (typeof a.type === "string") return 2;
            if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string" || S(cj) && typeof a.h5AdsConfig === "object") return 3
        }
        return 0
    }

    function er(a, b, c, d) {
        if (a == null) throw new V("push() called with no parameters.");
        Ep(f => {
            yd(Xf(f), 3) || (f = Xf(f), Dd(f, 3))
        });
        d.i() && kr(a, d.g().g(), K(d, 2));
        var e = jr(a);
        if (e !== 0)
            if (d = dn(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = va), Qq == null) lr(a), Rq.push(a);
            else if (e === 3) {
            const f = Qq;
            Ak(787, () => {
                f.handleAdConfig(a)
            })
        } else Ck(730, Qq.handleAdBreak(a));
        else {
            va = (new Date).getTime();
            to(c, d, cr(a));
            mr();
            a: {
                if (!a.enable_ad_intent_display_ads &&
                    a.enable_page_level_ads != void 0) {
                    if (typeof a.google_ad_client === "string") {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Ep(f => {
                yd(Xf(f), 4) || (f = Xf(f), Dd(f, 4))
            }), nr(a, d);
            else if ((e = a.params) && qe(e, (f, g) => {
                    b[g] = f
                }), b.google_ad_output === "js") console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                rq(cr(a) || $n(P), b, d);
                e = or(b, a);
                np(e, b);
                c = X(p).head_tag_slot_vars || {};
                qe(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = (X(P).first_tag_on_page || 0) === 0 && Tn(b)) Ep(f => {
                    yd(Xf(f), 5) || (f = Xf(f), Dd(f, 5))
                }), pr(c);
                (X(P).first_tag_on_page || 0) === 0 && (X(P).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(P).pause_ad_requests;
                Vq(e, b, d)
            }
        }
    }
    let qr = !1;

    function kr(a, b, c) {
        qr || (qr = !0, a = cr(a) || $n(P), Bk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function cr(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function mr() {
        if (S(Fi)) {
            const a = an(P);
            a && a.Ra || bn(P)
        }
    }

    function pr(a) {
        He(() => {
            Qn(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        })
    }

    function nr(a, b) {
        (X(P).first_tag_on_page || 0) === 0 && (X(P).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        Un(a, b);
        dr(a, b)
    }

    function or(a, b) {
        if (S(zi) && a.google_ad_format === "rewarded") {
            if (a.google_ad_slot == null) throw new V("Rewarded format does not have valid ad slot");
            if (a.google_ad_loaded_callback == null) throw new V("Rewarded format does not have ad loaded callback");
            a.google_reactive_ad_format = 11;
            a.google_wrap_fullscreen_ad = !0;
            a.google_video_play_muted = !1;
            a.google_acr = a.google_ad_loaded_callback;
            delete a.google_ad_loaded_callback;
            delete a.google_ad_format
        }
        var c = !!a.google_wrap_fullscreen_ad;
        if (c) b = ar(), b.dataset.adsbygoogleStatus =
            "reserved", Ge.documentElement.appendChild(b);
        else if (b = b.element) {
            if (!Uq(b) && (b.id ? b = Yq(b.id) : b = null, !b)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in b)) throw new V("'element' is not a good DOM element.");
        } else if (b = Yq(), !b) throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        if (c) {
            c = P;
            try {
                const e = (c || window).document,
                    f = e.compatMode == "CSS1Compat" ? e.documentElement : e.body;
                var d = (new Oe(f.clientWidth, f.clientHeight)).round()
            } catch (e) {
                d =
                    new Oe(-12245933, -12245933)
            }
            a.google_ad_height = d.height;
            a.google_ad_width = d.width;
            a.fsapi = !0
        }
        return b
    }

    function rr(a) {
        a = {
            value: `${J(a,16)}`,
            host_v: `${J(a,22)}`,
            frequency: .01
        };
        Bk("new_abg_tag", a, .01)
    }

    function sr(a) {
        fl().S[il(26)] = !!Number(a)
    }

    function tr(a) {
        Number(a) ? X(P).pause_ad_requests = !0 : (X(P).pause_ad_requests = !1, a = () => {
            if (!X(P).pause_ad_requests) {
                var b = {};
                let c;
                typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                P.dispatchEvent(c)
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function ur(a) {
        a && a.call && typeof a === "function" && window.setTimeout(a, 0)
    }

    function ir(a, b) {
        const c = { ...Ln()
            },
            d = T(aj);
        [0, 1].includes(d) && (c.osttc = `${d}`);
        b = Pn(ie(b.Gb, new Map(Object.entries(c)))).then(e => {
            Qq == null && (e.init(a), Qq = e, vr(e))
        });
        W.aa(723, b);
        b.finally(() => {
            Rq.length = 0;
            Bk("slotcar", {
                event: "api_ld",
                time: Date.now() - va,
                time_pr: Date.now() - Tq
            });
            Kp(O(Fp), ag(23))
        })
    }

    function vr(a) {
        for (const [c, d] of Sq) {
            var b = c;
            const e = d;
            e !== -1 && (p.clearTimeout(e), Sq.delete(b))
        }
        for (b = 0; b < Rq.length; b++) {
            if (Sq.has(b)) continue;
            const c = Rq[b],
                d = jr(c);
            Ak(723, () => {
                if (d === 3) a.handleAdConfig(c);
                else if (d === 2) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.aa(730, e)
                }
            })
        }
    }

    function lr(a) {
        var b = Rq.length;
        if (jr(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
            var c = a.adBreakDone;
            Tq === -1 && (Tq = Date.now());
            var d = p.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Sq.set(b, -1), Bk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), Kp(O(Fp), ag(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, T(dj) * 1E3);
            Sq.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        W.Va = Dk;
        Ak(166, () => {
            const e = new Mg(2, a);
            try {
                Nb(m => {
                    var v = new zg;
                    var n = new yg;
                    try {
                        var r = Fe(window);
                        Cd(n, 1, r)
                    } catch (G) {}
                    try {
                        var u = O(qh).g();
                        dd(n, 2, u, Xb)
                    } catch (G) {}
                    try {
                        D(n, 3, z(window.document.URL), "")
                    } catch (G) {}
                    v = nd(v, 2, n);
                    n = new xg;
                    n = D(n, 1, y(1191), 0);
                    try {
                        var w = gb(m ? .name) ? m.name : "Unknown error";
                        D(n, 2, z(w), "")
                    } catch (G) {}
                    try {
                        var N = gb(m ? .message) ? m.message : `Caught ${m}`;
                        D(n, 3, z(N), "")
                    } catch (G) {}
                    try {
                        const G = gb(m ? .stack) ? m.stack : Error().stack;
                        G && dd(n, 4, G.split(/\n\s*/), gc)
                    } catch (G) {}
                    m =
                        od(v, 1, Ag, n);
                    w = new wg;
                    try {
                        D(w, 1, z(gm()), "")
                    } catch {}
                    od(m, 6, Bg, w);
                    Cd(m, 5, 1);
                    Dg(e, m)
                })
            } catch (m) {}
            const f = pq(b);
            var g = Kn(f);
            nq(f, g);
            d();
            Ne(16, [1, Gd(f)]);
            var h = Qe(Pe(P)) || P,
                k = Zn({
                    wa: a,
                    Ca: K(f, 2)
                });
            const l = c(k, f);
            k = P.document.currentScript === null ? 1 : Np(l.Ib);
            lq(h, f, k);
            Ep(m => {
                var v = wd(m, 1) + 1;
                D(m, 1, Yb(v), 0);
                P.top === P && (v = wd(m, 2) + 1, D(m, 2, Yb(v), 0));
                yd(Xf(m), 1) || (m = Xf(m), Dd(m, 1))
            });
            Ck(1086, Ip(k === 0));
            if (!Ia() || za(Na(), 11) >= 0) {
                zk(S(fj));
                Ao();
                xm(kd(f, Wm, 26));
                try {
                    Hq()
                } catch {}
                zo();
                gr(l, f);
                h = window;
                k = h.adsbygoogle;
                if (!k || !k.loaded) {
                    rr(f);
                    g = {
                        push: m => {
                            $q(m, l, f)
                        },
                        loaded: !0,
                        pageState: Fd(g)
                    };
                    try {
                        Object.defineProperty(g, "requestNonPersonalizedAds", {
                            set: sr
                        }), Object.defineProperty(g, "pauseAdRequests", {
                            set: tr
                        }), Object.defineProperty(g, "onload", {
                            set: ur
                        })
                    } catch {}
                    if (k)
                        for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"]) k[m] !== void 0 && (g[m] = k[m]);
                    Zq(k, l, f);
                    h.adsbygoogle = g;
                    k && (g.onload = k.onload)
                }
            }
        })
    })(gm(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
        b = wd(b, 1) > 2012 ? `_fy${wd(b,1)}` : "";
        he `data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Gb: he `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
            Eb: he `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${b}.js`,
            Db: he `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${b}.js`,
            Ib: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20241106\",\"r20190131\",null,null,null,null,\".google.co.in\",null,null,null,[[[684125059,null,null,[1]],[null,619278254,null,[null,10]],[677914771,null,null,[1]],[676894296,null,null,[1]],[1371,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1370,null,null,[1]],[null,1224,null,[null,0.01]],[654220660,null,null,[1]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\",\"es\",\"ja\"]],null,1273],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[1368,null,null,[1]],[13775,null,null,[1]],[null,1364,null,[null,300]],[686013513,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094447],[null,null,622128249,[null,null,\"#FFFFFF\"]],[null,null,622128250,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"33\",\"38\"]],null,null,null,641845510],[686023322,null,null,[1]],[622128248,null,null,[]],[681379804,null,null,[1]],[676863674,null,null,[1]],[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"29_18\",\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\",\"30_6\"]],null,null,null,636146137],[636570127,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094446],[null,652486359,null,[null,1]],[null,626062006,null,[null,670]],[null,666400580,null,[null,22]],[679043940,null,null,[1]],[688113706,null,null,[1]],[655991266,null,null,[1]],[686111728,null,null,[1]],[null,618163195,null,[null,15000]],[null,624950166,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,500]],[null,547455356,null,[null,49]],[null,650548030,null,[null,2]],[null,650548032,null,[null,300]],[null,650548031,null,[null,1]],[null,655966487,null,[null,300]],[null,655966486,null,[null,250]],[null,469675170,null,[null,60000]],[null,684147713,null,[null,-1]],[null,684147711,null,[null,-1]],[null,684147712,null,[null,-1]],[678806782,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10017,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[10015,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[null,550718588,null,[null,250]],[null,624290870,null,[null,50]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[50,[[31087700],[31087701,[[680702595,null,null,[1]]]]]],[10,[[31088038],[31088039,[[675298507,null,null,[1]]]]]],[50,[[31088128],[31088129,[[682658313,null,null,[1]]]]]],[10,[[31088483],[31088484,[[null,684147713,null,[]],[null,684147711,null,[]],[null,684147712,null,[]]]],[31088485,[[null,684147713,null,[null,1]],[null,684147711,null,[null,1]],[null,684147712,null,[null,1]]]]]],[50,[[31088580],[31088581,[[687716473,null,null,[1]]]]]],[1000,[[31088653,[[null,null,14,[null,null,\"31088653\"]]],[6,null,null,null,6,null,\"31088653\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088654,[[null,null,14,[null,null,\"31088654\"]]],[6,null,null,null,6,null,\"31088654\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[50,[[31088669],[31088670,[[687747818,null,null,[1]]]]]],[200,[[31088671],[31088672,[[1309,null,null,[1]]]]]],[1000,[[31088698,[[null,null,14,[null,null,\"31088698\"]]],[6,null,null,null,6,null,\"31088698\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088699,[[null,null,14,[null,null,\"31088699\"]]],[6,null,null,null,6,null,\"31088699\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[50,[[31088715],[31088716,[[689318127,null,null,[1]]]]]],[200,[[31088723],[31088724,[[1379,null,null,[1]]]]]],[1000,[[31088764,[[null,null,14,[null,null,\"31088764\"]]],[6,null,null,null,6,null,\"31088764\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088765,[[null,null,14,[null,null,\"31088765\"]]],[6,null,null,null,6,null,\"31088765\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31088770],[31088771,[[679043940,null,null,[]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|diggfun\\\\.co\/|games2kings\\\\.com\/|indiaimagine\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[90,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95344244,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95344245\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95344244\",\"95344245\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95345106,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95345107\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95345106\",\"95345107\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346174,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346175\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346174\",\"95346175\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346189,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346190\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346189\",\"95346190\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346271,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346272\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346271\",\"95346272\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95347169,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346175\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95347169\",\"95346175\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95347580,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95347533\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95347580\",\"95347533\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95337195],[95337196,[[1354,null,null,[1]]]]],null,126],[10,[[95337197,null,[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]],[95337198,[[1354,null,null,[1]]],[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]]],null,126],[10,[[95341243],[95341244,[[45650867,null,null,[1]]]]],null,130,null,null,null,null,null,null,null,null,null,7],[100,[[95343681],[95343682,[[1372,null,null,[1]]]]]],[250,[[95344187,[[null,null,null,[null,null,null,[\"95344191\"]],null,null,null,630330362]]],[95344188,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344192\"]],null,null,null,630330362]]],[95344189,[[null,643258048,null,[null,0.20295]],[null,643258049,null,[null,0.24446]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344193\"]],null,null,null,630330362]]],[95344190,[[null,643258048,null,[null,0.3221]],[null,643258049,null,[null,0.33938]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344194\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95344787,[[null,null,null,[null,null,null,[\"95344792\"]],null,null,null,630330362]]],[95344788,[[566279275,null,null,[1]],[622128248,null,null,[1]],[null,null,null,[null,null,null,[\"95344793\"]],null,null,null,630330362]]],[95344789,[[622128248,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344794\"]],null,null,null,630330362]]],[95344790,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344795\"]],null,null,null,630330362]]],[95344791,[[566279275,null,null,[1]],[622128248,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344796\"]],null,null,null,630330362]]]],[4,null,55]],[1,[[95345037],[95345038,[[1377,null,null,[1]]]]],[4,null,55]],[100,[[95346759,[[null,null,null,[null,null,null,[\"95346761\"]],null,null,null,630330362]]],[95346760,[[null,null,null,[null,null,null,[\"4\"]],null,null,null,683929765],[null,null,null,[null,null,null,[\"95346762\"]],null,null,null,630330362]]]],[4,null,55]],[1,[[95347444,[[null,null,null,[null,null,null,[\"95347446\"]],null,null,null,630330362]]],[95347445,[[null,null,null,[null,null,null,[\"3\"]],null,null,null,683929765],[null,null,null,[null,null,null,[\"95347447\"]],null,null,null,630330362]]]],[4,null,55]]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[100,[[31088457],[31088458]],null,null,null,null,39,null,null,189,1],[200,[[95345471,[[null,null,null,[null,null,null,[\"95345473\"]],null,null,null,630330362]]],[95345472,[[682250248,null,null,[1]],[null,null,null,[null,null,null,[\"95345474\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,187],[500,[[95345966,[[null,null,null,[null,null,null,[\"95345968\"]],null,null,null,630330362]]],[95345967,[[686891043,null,null,[1]],[null,null,null,[null,null,null,[\"95345969\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,186],[10,[[95347173,[[null,null,null,[null,null,null,[\"95347178\"]],null,null,null,630330362]]],[95347174,[[null,652486359,null,[null,2]],[null,687270738,null,[null,200]],[null,null,null,[null,null,null,[\"95347179\"]],null,null,null,630330362]]],[95347175,[[null,652486359,null,[null,2]],[null,687270738,null,[null,500]],[null,null,null,[null,null,null,[\"95347180\"]],null,null,null,630330362]]],[95347176,[[null,652486359,null,[null,3]],[null,687270738,null,[null,500]],[null,null,null,[null,null,null,[\"95347181\"]],null,null,null,630330362]]],[95347177,[[null,652486359,null,[null,3]],[null,688905693,null,[null,2]],[null,687270738,null,[null,500]],[null,null,null,[null,null,null,[\"95347182\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,188,1],[10,[[95347432,[[null,null,null,[null,null,null,[\"95347434\"]],null,null,null,630330362]]],[95347433,[[636570127,null,null,[]],[null,null,null,[null,null,null,[\"95347435\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,190,1]]],[11,[[1000,[[31087702,null,[4,null,6,null,null,null,null,[\"31087700\"]]]],[4,null,61],132,null,null,null,null,null,null,null,null,29],[1000,[[31087703,null,[4,null,6,null,null,null,null,[\"31087701\"]]]],[4,null,61],132,null,null,null,null,null,null,null,null,29],[50,[[31088249],[31088250]],null,122,null,null,null,null,null,null,null,null,null,4]]]],null,null,[null,1000,1,1000]],null,[null,[1,[null,[[[[null,0,null,null,null,null,\"DIV#main\\u003eDIV\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1]],[[null,[1,3,2],null,\"2497596789\",null,null,[0,2]]]],[null,null,[1]]]],null,\"ca-pub-9173866185064071\",3],\"31088654\",null,\"demo.automationtesting.in\",1282779858,[44759875,44759926],null,null,null,null,null,null,[0,0,0]]");