var kd = e => {
    throw TypeError(e)
}
    ;
var qa = (e, t, n) => t.has(e) || kd("Cannot " + n);
var P = (e, t, n) => (qa(e, t, "read from private field"),
    n ? n.call(e) : t.get(e))
    , ie = (e, t, n) => t.has(e) ? kd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
    , Y = (e, t, n, r) => (qa(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n)
    , Fe = (e, t, n) => (qa(e, t, "access private method"),
        n);
var Ls = (e, t, n, r) => ({
    set _(o) {
        Y(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function Ky(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
            o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
            s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function zp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var $p = {
    exports: {}
}
    , fa = {}
    , Bp = {
        exports: {}
    }
    , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks = Symbol.for("react.element")
    , Qy = Symbol.for("react.portal")
    , Yy = Symbol.for("react.fragment")
    , Gy = Symbol.for("react.strict_mode")
    , Xy = Symbol.for("react.profiler")
    , qy = Symbol.for("react.provider")
    , Zy = Symbol.for("react.context")
    , Jy = Symbol.for("react.forward_ref")
    , e0 = Symbol.for("react.suspense")
    , t0 = Symbol.for("react.memo")
    , n0 = Symbol.for("react.lazy")
    , jd = Symbol.iterator;
function r0(e) {
    return e === null || typeof e != "object" ? null : (e = jd && e[jd] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var Up = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , Hp = Object.assign
    , Vp = {};
function xo(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Vp,
        this.updater = n || Up
}
xo.prototype.isReactComponent = {};
xo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
xo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function Wp() { }
Wp.prototype = xo.prototype;
function ru(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Vp,
        this.updater = n || Up
}
var ou = ru.prototype = new Wp;
ou.constructor = ru;
Hp(ou, xo.prototype);
ou.isPureReactComponent = !0;
var Pd = Array.isArray
    , Kp = Object.prototype.hasOwnProperty
    , su = {
        current: null
    }
    , Qp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function Yp(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
            t.key !== void 0 && (s = "" + t.key),
            t)
            Kp.call(t, r) && !Qp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var c = Array(a), u = 0; u < a; u++)
            c[u] = arguments[u + 2];
        o.children = c
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ks,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: su.current
    }
}
function o0(e, t) {
    return {
        $$typeof: ks,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function iu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ks
}
function s0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Td = /\/+/g;
function Za(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? s0("" + e.key) : t.toString(36)
}
function ci(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case ks:
                    case Qy:
                        i = !0
                }
        }
    if (i)
        return i = e,
            o = o(i),
            e = r === "" ? "." + Za(i, 0) : r,
            Pd(o) ? (n = "",
                e != null && (n = e.replace(Td, "$&/") + "/"),
                ci(o, t, n, "", function (u) {
                    return u
                })) : o != null && (iu(o) && (o = o0(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Td, "$&/") + "/") + e)),
                    t.push(o)),
            1;
    if (i = 0,
        r = r === "" ? "." : r + ":",
        Pd(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var c = r + Za(s, a);
            i += ci(s, t, n, c, o)
        }
    else if (c = r0(e),
        typeof c == "function")
        for (e = c.call(e),
            a = 0; !(s = e.next()).done;)
            s = s.value,
                c = r + Za(s, a++),
                i += ci(s, t, n, c, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ds(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , o = 0;
    return ci(e, r, "", "", function (s) {
        return t.call(n, s, o++)
    }),
        r
}
function i0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ze = {
    current: null
}
    , ui = {
        transition: null
    }
    , a0 = {
        ReactCurrentDispatcher: Ze,
        ReactCurrentBatchConfig: ui,
        ReactCurrentOwner: su
    };
function Gp() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: Ds,
    forEach: function (e, t, n) {
        Ds(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Ds(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return Ds(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!iu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = xo;
X.Fragment = Yy;
X.Profiler = Xy;
X.PureComponent = ru;
X.StrictMode = Gy;
X.Suspense = e0;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a0;
X.act = Gp;
X.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Hp({}, e.props)
        , o = e.key
        , s = e.ref
        , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
            i = su.current),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (c in t)
            Kp.call(t, c) && !Qp.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        a = Array(c);
        for (var u = 0; u < c; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ks,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
    ;
X.createContext = function (e) {
    return e = {
        $$typeof: Zy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: qy,
            _context: e
        },
        e.Consumer = e
}
    ;
X.createElement = Yp;
X.createFactory = function (e) {
    var t = Yp.bind(null, e);
    return t.type = e,
        t
}
    ;
X.createRef = function () {
    return {
        current: null
    }
}
    ;
X.forwardRef = function (e) {
    return {
        $$typeof: Jy,
        render: e
    }
}
    ;
X.isValidElement = iu;
X.lazy = function (e) {
    return {
        $$typeof: n0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: i0
    }
}
    ;
X.memo = function (e, t) {
    return {
        $$typeof: t0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
X.startTransition = function (e) {
    var t = ui.transition;
    ui.transition = {};
    try {
        e()
    } finally {
        ui.transition = t
    }
}
    ;
X.unstable_act = Gp;
X.useCallback = function (e, t) {
    return Ze.current.useCallback(e, t)
}
    ;
X.useContext = function (e) {
    return Ze.current.useContext(e)
}
    ;
X.useDebugValue = function () { }
    ;
X.useDeferredValue = function (e) {
    return Ze.current.useDeferredValue(e)
}
    ;
X.useEffect = function (e, t) {
    return Ze.current.useEffect(e, t)
}
    ;
X.useId = function () {
    return Ze.current.useId()
}
    ;
X.useImperativeHandle = function (e, t, n) {
    return Ze.current.useImperativeHandle(e, t, n)
}
    ;
X.useInsertionEffect = function (e, t) {
    return Ze.current.useInsertionEffect(e, t)
}
    ;
X.useLayoutEffect = function (e, t) {
    return Ze.current.useLayoutEffect(e, t)
}
    ;
X.useMemo = function (e, t) {
    return Ze.current.useMemo(e, t)
}
    ;
X.useReducer = function (e, t, n) {
    return Ze.current.useReducer(e, t, n)
}
    ;
X.useRef = function (e) {
    return Ze.current.useRef(e)
}
    ;
X.useState = function (e) {
    return Ze.current.useState(e)
}
    ;
X.useSyncExternalStore = function (e, t, n) {
    return Ze.current.useSyncExternalStore(e, t, n)
}
    ;
X.useTransition = function () {
    return Ze.current.useTransition()
}
    ;
X.version = "18.3.1";
Bp.exports = X;
var v = Bp.exports;
const M = zp(v)
    , Xp = Ky({
        __proto__: null,
        default: M
    }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l0 = v
    , c0 = Symbol.for("react.element")
    , u0 = Symbol.for("react.fragment")
    , d0 = Object.prototype.hasOwnProperty
    , f0 = l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , p0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function qp(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
        t.key !== void 0 && (s = "" + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t)
        d0.call(t, r) && !p0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: c0,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: f0.current
    }
}
fa.Fragment = u0;
fa.jsx = qp;
fa.jsxs = qp;
$p.exports = fa;
var l = $p.exports
    , Zp = {
        exports: {}
    }
    , vt = {}
    , Jp = {
        exports: {}
    }
    , eh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(N, R) {
        var z = N.length;
        N.push(R);
        e: for (; 0 < z;) {
            var I = z - 1 >>> 1
                , B = N[I];
            if (0 < o(B, R))
                N[I] = R,
                    N[z] = B,
                    z = I;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var R = N[0]
            , z = N.pop();
        if (z !== R) {
            N[0] = z;
            e: for (var I = 0, B = N.length, G = B >>> 1; I < G;) {
                var oe = 2 * (I + 1) - 1
                    , Me = N[oe]
                    , Z = oe + 1
                    , U = N[Z];
                if (0 > o(Me, z))
                    Z < B && 0 > o(U, Me) ? (N[I] = U,
                        N[Z] = z,
                        I = Z) : (N[I] = Me,
                            N[oe] = z,
                            I = oe);
                else if (Z < B && 0 > o(U, z))
                    N[I] = U,
                        N[Z] = z,
                        I = Z;
                else
                    break e
            }
        }
        return R
    }
    function o(N, R) {
        var z = N.sortIndex - R.sortIndex;
        return z !== 0 ? z : N.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now()
        }
    } else {
        var i = Date
            , a = i.now();
        e.unstable_now = function () {
            return i.now() - a
        }
    }
    var c = []
        , u = []
        , h = 1
        , p = null
        , d = 3
        , w = !1
        , x = !1
        , m = !1
        , S = typeof setTimeout == "function" ? setTimeout : null
        , g = typeof clearTimeout == "function" ? clearTimeout : null
        , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= N)
                r(u),
                    R.sortIndex = R.expirationTime,
                    t(c, R);
            else
                break;
            R = n(u)
        }
    }
    function C(N) {
        if (m = !1,
            y(N),
            !x)
            if (n(c) !== null)
                x = !0,
                    F(b);
            else {
                var R = n(u);
                R !== null && V(C, R.startTime - N)
            }
    }
    function b(N, R) {
        x = !1,
            m && (m = !1,
                g(j),
                j = -1),
            w = !0;
        var z = d;
        try {
            for (y(R),
                p = n(c); p !== null && (!(p.expirationTime > R) || N && !$());) {
                var I = p.callback;
                if (typeof I == "function") {
                    p.callback = null,
                        d = p.priorityLevel;
                    var B = I(p.expirationTime <= R);
                    R = e.unstable_now(),
                        typeof B == "function" ? p.callback = B : p === n(c) && r(c),
                        y(R)
                } else
                    r(c);
                p = n(c)
            }
            if (p !== null)
                var G = !0;
            else {
                var oe = n(u);
                oe !== null && V(C, oe.startTime - R),
                    G = !1
            }
            return G
        } finally {
            p = null,
                d = z,
                w = !1
        }
    }
    var k = !1
        , E = null
        , j = -1
        , _ = 5
        , A = -1;
    function $() {
        return !(e.unstable_now() - A < _)
    }
    function L() {
        if (E !== null) {
            var N = e.unstable_now();
            A = N;
            var R = !0;
            try {
                R = E(!0, N)
            } finally {
                R ? H() : (k = !1,
                    E = null)
            }
        } else
            k = !1
    }
    var H;
    if (typeof f == "function")
        H = function () {
            f(L)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
            , W = O.port2;
        O.port1.onmessage = L,
            H = function () {
                W.postMessage(null)
            }
    } else
        H = function () {
            S(L, 0)
        }
            ;
    function F(N) {
        E = N,
            k || (k = !0,
                H())
    }
    function V(N, R) {
        j = S(function () {
            N(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (N) {
            N.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            x || w || (x = !0,
                F(b))
        }
        ,
        e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return d
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(c)
        }
        ,
        e.unstable_next = function (N) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = d
            }
            var z = d;
            d = R;
            try {
                return N()
            } finally {
                d = z
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (N, R) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3
            }
            var z = d;
            d = N;
            try {
                return R()
            } finally {
                d = z
            }
        }
        ,
        e.unstable_scheduleCallback = function (N, R, z) {
            var I = e.unstable_now();
            switch (typeof z == "object" && z !== null ? (z = z.delay,
                z = typeof z == "number" && 0 < z ? I + z : I) : z = I,
            N) {
                case 1:
                    var B = -1;
                    break;
                case 2:
                    B = 250;
                    break;
                case 5:
                    B = 1073741823;
                    break;
                case 4:
                    B = 1e4;
                    break;
                default:
                    B = 5e3
            }
            return B = z + B,
                N = {
                    id: h++,
                    callback: R,
                    priorityLevel: N,
                    startTime: z,
                    expirationTime: B,
                    sortIndex: -1
                },
                z > I ? (N.sortIndex = z,
                    t(u, N),
                    n(c) === null && N === n(u) && (m ? (g(j),
                        j = -1) : m = !0,
                        V(C, z - I))) : (N.sortIndex = B,
                            t(c, N),
                            x || w || (x = !0,
                                F(b))),
                N
        }
        ,
        e.unstable_shouldYield = $,
        e.unstable_wrapCallback = function (N) {
            var R = d;
            return function () {
                var z = d;
                d = R;
                try {
                    return N.apply(this, arguments)
                } finally {
                    d = z
                }
            }
        }
}
)(eh);
Jp.exports = eh;
var h0 = Jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m0 = v
    , ht = h0;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var th = new Set
    , Jo = {};
function wr(e, t) {
    ao(e, t),
        ao(e + "Capture", t)
}
function ao(e, t) {
    for (Jo[e] = t,
        e = 0; e < t.length; e++)
        th.add(t[e])
}
var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Fl = Object.prototype.hasOwnProperty
    , v0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Rd = {}
    , Md = {};
function g0(e) {
    return Fl.call(Md, e) ? !0 : Fl.call(Rd, e) ? !1 : v0.test(e) ? Md[e] = !0 : (Rd[e] = !0,
        !1)
}
function y0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function x0(e, t, n, r) {
    if (t === null || typeof t > "u" || y0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Je(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = s,
        this.removeEmptyString = i
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    De[e] = new Je(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    De[t] = new Je(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    De[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    De[e] = new Je(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    De[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    De[e] = new Je(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    De[e] = new Je(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    De[e] = new Je(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    De[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var au = /[\-:]([a-z])/g;
function lu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(au, lu);
    De[t] = new Je(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(au, lu);
    De[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(au, lu);
    De[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    De[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
De.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    De[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function cu(e, t, n, r) {
    var o = De.hasOwnProperty(t) ? De[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x0(t, n, o, r) && (n = null),
        r || o === null ? g0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
            r = o.attributeNamespace,
            n === null ? e.removeAttribute(t) : (o = o.type,
                n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var hn = m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Fs = Symbol.for("react.element")
    , Rr = Symbol.for("react.portal")
    , Mr = Symbol.for("react.fragment")
    , uu = Symbol.for("react.strict_mode")
    , zl = Symbol.for("react.profiler")
    , nh = Symbol.for("react.provider")
    , rh = Symbol.for("react.context")
    , du = Symbol.for("react.forward_ref")
    , $l = Symbol.for("react.suspense")
    , Bl = Symbol.for("react.suspense_list")
    , fu = Symbol.for("react.memo")
    , Cn = Symbol.for("react.lazy")
    , oh = Symbol.for("react.offscreen")
    , Od = Symbol.iterator;
function ko(e) {
    return e === null || typeof e != "object" ? null : (e = Od && e[Od] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var xe = Object.assign, Ja;
function Do(e) {
    if (Ja === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ja = t && t[1] || ""
        }
    return `
` + Ja + e
}
var el = !1;
function tl(e, t) {
    if (!e || el)
        return "";
    el = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a];)
                a--;
            for (; 1 <= i && 0 <= a; i--,
                a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                                a--,
                                0 > a || o[i] !== s[a]) {
                                var c = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                    c
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        el = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Do(e) : ""
}
function w0(e) {
    switch (e.tag) {
        case 5:
            return Do(e.type);
        case 16:
            return Do("Lazy");
        case 13:
            return Do("Suspense");
        case 19:
            return Do("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = tl(e.type, !1),
                e;
        case 11:
            return e = tl(e.type.render, !1),
                e;
        case 1:
            return e = tl(e.type, !0),
                e;
        default:
            return ""
    }
}
function Ul(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case Mr:
            return "Fragment";
        case Rr:
            return "Portal";
        case zl:
            return "Profiler";
        case uu:
            return "StrictMode";
        case $l:
            return "Suspense";
        case Bl:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case rh:
                return (e.displayName || "Context") + ".Consumer";
            case nh:
                return (e._context.displayName || "Context") + ".Provider";
            case du:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case fu:
                return t = e.displayName || null,
                    t !== null ? t : Ul(e.type) || "Memo";
            case Cn:
                t = e._payload,
                    e = e._init;
                try {
                    return Ul(e(t))
                } catch { }
        }
    return null
}
function S0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ul(t);
        case 8:
            return t === uu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function Un(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function sh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function C0(e) {
    var t = sh(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
            , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (i) {
                r = "" + i,
                    s.call(this, i)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (i) {
                r = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function zs(e) {
    e._valueTracker || (e._valueTracker = C0(e))
}
function ih(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = sh(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function ji(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Hl(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ad(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Un(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function ah(e, t) {
    t = t.checked,
        t != null && cu(e, "checked", t, !1)
}
function Vl(e, t) {
    ah(e, t);
    var n = Un(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wl(e, t.type, Un(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function _d(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function Wl(e, t, n) {
    (t !== "number" || ji(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Fo = Array.isArray;
function Ur(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Un(n),
            t = null,
            o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Kl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Id(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(T(92));
            if (Fo(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: Un(n)
    }
}
function lh(e, t) {
    var n = Un(t.value)
        , r = Un(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Ld(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ch(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ch(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var $s, uh = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for ($s = $s || document.createElement("div"),
            $s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = $s.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , b0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function (e) {
    b0.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Ho[t] = Ho[e]
    })
});
function dh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ho.hasOwnProperty(e) && Ho[e] ? ("" + t).trim() : t + "px"
}
function fh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , o = dh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : e[n] = o
        }
}
var N0 = xe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Yl(e, t) {
    if (t) {
        if (N0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function Gl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Xl = null;
function pu(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var ql = null
    , Hr = null
    , Vr = null;
function Dd(e) {
    if (e = Ts(e)) {
        if (typeof ql != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = ga(t),
            ql(e.stateNode, e.type, t))
    }
}
function ph(e) {
    Hr ? Vr ? Vr.push(e) : Vr = [e] : Hr = e
}
function hh() {
    if (Hr) {
        var e = Hr
            , t = Vr;
        if (Vr = Hr = null,
            Dd(e),
            t)
            for (e = 0; e < t.length; e++)
                Dd(t[e])
    }
}
function mh(e, t) {
    return e(t)
}
function vh() { }
var nl = !1;
function gh(e, t, n) {
    if (nl)
        return e(t, n);
    nl = !0;
    try {
        return mh(e, t, n)
    } finally {
        nl = !1,
            (Hr !== null || Vr !== null) && (vh(),
                hh())
    }
}
function ts(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ga(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var Zl = !1;
if (ln)
    try {
        var jo = {};
        Object.defineProperty(jo, "passive", {
            get: function () {
                Zl = !0
            }
        }),
            window.addEventListener("test", jo, jo),
            window.removeEventListener("test", jo, jo)
    } catch {
        Zl = !1
    }
function E0(e, t, n, r, o, s, i, a, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (h) {
        this.onError(h)
    }
}
var Vo = !1
    , Pi = null
    , Ti = !1
    , Jl = null
    , k0 = {
        onError: function (e) {
            Vo = !0,
                Pi = e
        }
    };
function j0(e, t, n, r, o, s, i, a, c) {
    Vo = !1,
        Pi = null,
        E0.apply(k0, arguments)
}
function P0(e, t, n, r, o, s, i, a, c) {
    if (j0.apply(this, arguments),
        Vo) {
        if (Vo) {
            var u = Pi;
            Vo = !1,
                Pi = null
        } else
            throw Error(T(198));
        Ti || (Ti = !0,
            Jl = u)
    }
}
function Sr(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function yh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Fd(e) {
    if (Sr(e) !== e)
        throw Error(T(188))
}
function T0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Sr(e),
            t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s;) {
                if (s === n)
                    return Fd(o),
                        e;
                if (s === r)
                    return Fd(o),
                        t;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = o,
                r = s;
        else {
            for (var i = !1, a = o.child; a;) {
                if (a === n) {
                    i = !0,
                        n = o,
                        r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                        r = o,
                        n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a;) {
                    if (a === n) {
                        i = !0,
                            n = s,
                            r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                            r = s,
                            n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function xh(e) {
    return e = T0(e),
        e !== null ? wh(e) : null
}
function wh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = wh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Sh = ht.unstable_scheduleCallback
    , zd = ht.unstable_cancelCallback
    , R0 = ht.unstable_shouldYield
    , M0 = ht.unstable_requestPaint
    , Ee = ht.unstable_now
    , O0 = ht.unstable_getCurrentPriorityLevel
    , hu = ht.unstable_ImmediatePriority
    , Ch = ht.unstable_UserBlockingPriority
    , Ri = ht.unstable_NormalPriority
    , A0 = ht.unstable_LowPriority
    , bh = ht.unstable_IdlePriority
    , pa = null
    , Yt = null;
function _0(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function")
        try {
            Yt.onCommitFiberRoot(pa, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var At = Math.clz32 ? Math.clz32 : D0
    , I0 = Math.log
    , L0 = Math.LN2;
function D0(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (I0(e) / L0 | 0) | 0
}
var Bs = 64
    , Us = 4194304;
function zo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function Mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , o = e.suspendedLanes
        , s = e.pingedLanes
        , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = zo(a) : (s &= i,
            s !== 0 && (r = zo(s)))
    } else
        i = n & ~o,
            i !== 0 ? r = zo(i) : s !== 0 && (r = zo(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
        s = t & -t,
        o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - At(t),
                o = 1 << n,
                r |= e[n],
                t &= ~o;
    return r
}
function F0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function z0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var i = 31 - At(s)
            , a = 1 << i
            , c = o[i];
        c === -1 ? (!(a & n) || a & r) && (o[i] = F0(a, t)) : c <= t && (e.expiredLanes |= a),
            s &= ~a
    }
}
function ec(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Nh() {
    var e = Bs;
    return Bs <<= 1,
        !(Bs & 4194240) && (Bs = 64),
        e
}
function rl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function js(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - At(t),
        e[t] = n
}
function $0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - At(n)
            , s = 1 << o;
        t[o] = 0,
            r[o] = -1,
            e[o] = -1,
            n &= ~s
    }
}
function mu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - At(n)
            , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
            n &= ~o
    }
}
var le = 0;
function Eh(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var kh, vu, jh, Ph, Th, tc = !1, Hs = [], _n = null, In = null, Ln = null, ns = new Map, rs = new Map, Nn = [], B0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $d(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            _n = null;
            break;
        case "dragenter":
        case "dragleave":
            In = null;
            break;
        case "mouseover":
        case "mouseout":
            Ln = null;
            break;
        case "pointerover":
        case "pointerout":
            ns.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rs.delete(t.pointerId)
    }
}
function Po(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
        t !== null && (t = Ts(t),
            t !== null && vu(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            o !== null && t.indexOf(o) === -1 && t.push(o),
            e)
}
function U0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return _n = Po(_n, e, t, n, r, o),
                !0;
        case "dragenter":
            return In = Po(In, e, t, n, r, o),
                !0;
        case "mouseover":
            return Ln = Po(Ln, e, t, n, r, o),
                !0;
        case "pointerover":
            var s = o.pointerId;
            return ns.set(s, Po(ns.get(s) || null, e, t, n, r, o)),
                !0;
        case "gotpointercapture":
            return s = o.pointerId,
                rs.set(s, Po(rs.get(s) || null, e, t, n, r, o)),
                !0
    }
    return !1
}
function Rh(e) {
    var t = nr(e.target);
    if (t !== null) {
        var n = Sr(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = yh(n),
                    t !== null) {
                    e.blockedOn = t,
                        Th(e.priority, function () {
                            jh(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function di(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Xl = r,
                n.target.dispatchEvent(r),
                Xl = null
        } else
            return t = Ts(n),
                t !== null && vu(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function Bd(e, t, n) {
    di(e) && n.delete(t)
}
function H0() {
    tc = !1,
        _n !== null && di(_n) && (_n = null),
        In !== null && di(In) && (In = null),
        Ln !== null && di(Ln) && (Ln = null),
        ns.forEach(Bd),
        rs.forEach(Bd)
}
function To(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        tc || (tc = !0,
            ht.unstable_scheduleCallback(ht.unstable_NormalPriority, H0)))
}
function os(e) {
    function t(o) {
        return To(o, e)
    }
    if (0 < Hs.length) {
        To(Hs[0], e);
        for (var n = 1; n < Hs.length; n++) {
            var r = Hs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (_n !== null && To(_n, e),
        In !== null && To(In, e),
        Ln !== null && To(Ln, e),
        ns.forEach(t),
        rs.forEach(t),
        n = 0; n < Nn.length; n++)
        r = Nn[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Nn.length && (n = Nn[0],
        n.blockedOn === null);)
        Rh(n),
            n.blockedOn === null && Nn.shift()
}
var Wr = hn.ReactCurrentBatchConfig
    , Oi = !0;
function V0(e, t, n, r) {
    var o = le
        , s = Wr.transition;
    Wr.transition = null;
    try {
        le = 1,
            gu(e, t, n, r)
    } finally {
        le = o,
            Wr.transition = s
    }
}
function W0(e, t, n, r) {
    var o = le
        , s = Wr.transition;
    Wr.transition = null;
    try {
        le = 4,
            gu(e, t, n, r)
    } finally {
        le = o,
            Wr.transition = s
    }
}
function gu(e, t, n, r) {
    if (Oi) {
        var o = nc(e, t, n, r);
        if (o === null)
            pl(e, t, r, Ai, n),
                $d(e, r);
        else if (U0(o, e, t, n, r))
            r.stopPropagation();
        else if ($d(e, r),
            t & 4 && -1 < B0.indexOf(e)) {
            for (; o !== null;) {
                var s = Ts(o);
                if (s !== null && kh(s),
                    s = nc(e, t, n, r),
                    s === null && pl(e, t, r, Ai, n),
                    s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            pl(e, t, r, null, n)
    }
}
var Ai = null;
function nc(e, t, n, r) {
    if (Ai = null,
        e = pu(r),
        e = nr(e),
        e !== null)
        if (t = Sr(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = yh(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ai = e,
        null
}
function Mh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (O0()) {
                case hu:
                    return 1;
                case Ch:
                    return 4;
                case Ri:
                case A0:
                    return 16;
                case bh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Mn = null
    , yu = null
    , fi = null;
function Oh() {
    if (fi)
        return fi;
    var e, t = yu, n = t.length, r, o = "value" in Mn ? Mn.value : Mn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return fi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function Vs() {
    return !0
}
function Ud() {
    return !1
}
function gt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = s,
            this.target = i,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Vs : Ud,
            this.isPropagationStopped = Ud,
            this
    }
    return xe(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Vs)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Vs)
        },
        persist: function () { },
        isPersistent: Vs
    }),
        t
}
var wo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, xu = gt(wo), Ps = xe({}, wo, {
    view: 0,
    detail: 0
}), K0 = gt(Ps), ol, sl, Ro, ha = xe({}, Ps, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== Ro && (Ro && e.type === "mousemove" ? (ol = e.screenX - Ro.screenX,
            sl = e.screenY - Ro.screenY) : sl = ol = 0,
            Ro = e),
            ol)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : sl
    }
}), Hd = gt(ha), Q0 = xe({}, ha, {
    dataTransfer: 0
}), Y0 = gt(Q0), G0 = xe({}, Ps, {
    relatedTarget: 0
}), il = gt(G0), X0 = xe({}, wo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), q0 = gt(X0), Z0 = xe({}, wo, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), J0 = gt(Z0), ex = xe({}, wo, {
    data: 0
}), Vd = gt(ex), tx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, nx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, rx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ox(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rx[e]) ? !!t[e] : !1
}
function wu() {
    return ox
}
var sx = xe({}, Ps, {
    key: function (e) {
        if (e.key) {
            var t = tx[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = pi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nx[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wu,
    charCode: function (e) {
        return e.type === "keypress" ? pi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , ix = gt(sx)
    , ax = xe({}, ha, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , Wd = gt(ax)
    , lx = xe({}, Ps, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: wu
    })
    , cx = gt(lx)
    , ux = xe({}, wo, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , dx = gt(ux)
    , fx = xe({}, ha, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , px = gt(fx)
    , hx = [9, 13, 27, 32]
    , Su = ln && "CompositionEvent" in window
    , Wo = null;
ln && "documentMode" in document && (Wo = document.documentMode);
var mx = ln && "TextEvent" in window && !Wo
    , Ah = ln && (!Su || Wo && 8 < Wo && 11 >= Wo)
    , Kd = " "
    , Qd = !1;
function _h(e, t) {
    switch (e) {
        case "keyup":
            return hx.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Ih(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var Or = !1;
function vx(e, t) {
    switch (e) {
        case "compositionend":
            return Ih(t);
        case "keypress":
            return t.which !== 32 ? null : (Qd = !0,
                Kd);
        case "textInput":
            return e = t.data,
                e === Kd && Qd ? null : e;
        default:
            return null
    }
}
function gx(e, t) {
    if (Or)
        return e === "compositionend" || !Su && _h(e, t) ? (e = Oh(),
            fi = yu = Mn = null,
            Or = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ah && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var yx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Yd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yx[e.type] : t === "textarea"
}
function Lh(e, t, n, r) {
    ph(r),
        t = _i(t, "onChange"),
        0 < t.length && (n = new xu("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Ko = null
    , ss = null;
function xx(e) {
    Qh(e, 0)
}
function ma(e) {
    var t = Ir(e);
    if (ih(t))
        return e
}
function wx(e, t) {
    if (e === "change")
        return t
}
var Dh = !1;
if (ln) {
    var al;
    if (ln) {
        var ll = "oninput" in document;
        if (!ll) {
            var Gd = document.createElement("div");
            Gd.setAttribute("oninput", "return;"),
                ll = typeof Gd.oninput == "function"
        }
        al = ll
    } else
        al = !1;
    Dh = al && (!document.documentMode || 9 < document.documentMode)
}
function Xd() {
    Ko && (Ko.detachEvent("onpropertychange", Fh),
        ss = Ko = null)
}
function Fh(e) {
    if (e.propertyName === "value" && ma(ss)) {
        var t = [];
        Lh(t, ss, e, pu(e)),
            gh(xx, t)
    }
}
function Sx(e, t, n) {
    e === "focusin" ? (Xd(),
        Ko = t,
        ss = n,
        Ko.attachEvent("onpropertychange", Fh)) : e === "focusout" && Xd()
}
function Cx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ma(ss)
}
function bx(e, t) {
    if (e === "click")
        return ma(t)
}
function Nx(e, t) {
    if (e === "input" || e === "change")
        return ma(t)
}
function Ex(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var It = typeof Object.is == "function" ? Object.is : Ex;
function is(e, t) {
    if (It(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Fl.call(t, o) || !It(e[o], t[o]))
            return !1
    }
    return !0
}
function qd(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Zd(e, t) {
    var n = qd(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = qd(n)
    }
}
function zh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function $h() {
    for (var e = window, t = ji(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ji(e.document)
    }
    return t
}
function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kx(e) {
    var t = $h()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && zh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Cu(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                    , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                    !e.extend && s > r && (o = r,
                        r = s,
                        s = o),
                    o = Zd(n, s);
                var i = Zd(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t),
                        e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var jx = ln && "documentMode" in document && 11 >= document.documentMode
    , Ar = null
    , rc = null
    , Qo = null
    , oc = !1;
function Jd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oc || Ar == null || Ar !== ji(r) || (r = Ar,
        "selectionStart" in r && Cu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        Qo && is(Qo, r) || (Qo = r,
            r = _i(rc, "onSelect"),
            0 < r.length && (t = new xu("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = Ar)))
}
function Ws(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var _r = {
    animationend: Ws("Animation", "AnimationEnd"),
    animationiteration: Ws("Animation", "AnimationIteration"),
    animationstart: Ws("Animation", "AnimationStart"),
    transitionend: Ws("Transition", "TransitionEnd")
}
    , cl = {}
    , Bh = {};
ln && (Bh = document.createElement("div").style,
    "AnimationEvent" in window || (delete _r.animationend.animation,
        delete _r.animationiteration.animation,
        delete _r.animationstart.animation),
    "TransitionEvent" in window || delete _r.transitionend.transition);
function va(e) {
    if (cl[e])
        return cl[e];
    if (!_r[e])
        return e;
    var t = _r[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Bh)
            return cl[e] = t[n];
    return e
}
var Uh = va("animationend")
    , Hh = va("animationiteration")
    , Vh = va("animationstart")
    , Wh = va("transitionend")
    , Kh = new Map
    , ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Yn(e, t) {
    Kh.set(e, t),
        wr(t, [e])
}
for (var ul = 0; ul < ef.length; ul++) {
    var dl = ef[ul]
        , Px = dl.toLowerCase()
        , Tx = dl[0].toUpperCase() + dl.slice(1);
    Yn(Px, "on" + Tx)
}
Yn(Uh, "onAnimationEnd");
Yn(Hh, "onAnimationIteration");
Yn(Vh, "onAnimationStart");
Yn("dblclick", "onDoubleClick");
Yn("focusin", "onFocus");
Yn("focusout", "onBlur");
Yn(Wh, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , Rx = new Set("cancel close invalid load scroll toggle".split(" ").concat($o));
function tf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        P0(r, t, void 0, e),
        e.currentTarget = null
}
function Qh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                        , c = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        c !== s && o.isPropagationStopped())
                        break e;
                    tf(o, a, u),
                        s = c
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                        c = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        c !== s && o.isPropagationStopped())
                        break e;
                    tf(o, a, u),
                        s = c
                }
        }
    }
    if (Ti)
        throw e = Jl,
        Ti = !1,
        Jl = null,
        e
}
function he(e, t) {
    var n = t[cc];
    n === void 0 && (n = t[cc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Yh(t, e, 2, !1),
        n.add(r))
}
function fl(e, t, n) {
    var r = 0;
    t && (r |= 4),
        Yh(n, e, r, t)
}
var Ks = "_reactListening" + Math.random().toString(36).slice(2);
function as(e) {
    if (!e[Ks]) {
        e[Ks] = !0,
            th.forEach(function (n) {
                n !== "selectionchange" && (Rx.has(n) || fl(n, !1, e),
                    fl(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ks] || (t[Ks] = !0,
            fl("selectionchange", !1, t))
    }
}
function Yh(e, t, n, r) {
    switch (Mh(t)) {
        case 1:
            var o = V0;
            break;
        case 4:
            o = W0;
            break;
        default:
            o = gu
    }
    n = o.bind(null, t, n, e),
        o = void 0,
        !Zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
}
function pl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null;) {
                        var c = i.tag;
                        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo,
                            c === o || c.nodeType === 8 && c.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null;) {
                    if (i = nr(a),
                        i === null)
                        return;
                    if (c = i.tag,
                        c === 5 || c === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    gh(function () {
        var u = s
            , h = pu(n)
            , p = [];
        e: {
            var d = Kh.get(e);
            if (d !== void 0) {
                var w = xu
                    , x = e;
                switch (e) {
                    case "keypress":
                        if (pi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        w = ix;
                        break;
                    case "focusin":
                        x = "focus",
                            w = il;
                        break;
                    case "focusout":
                        x = "blur",
                            w = il;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = il;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = Hd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = Y0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = cx;
                        break;
                    case Uh:
                    case Hh:
                    case Vh:
                        w = q0;
                        break;
                    case Wh:
                        w = dx;
                        break;
                    case "scroll":
                        w = K0;
                        break;
                    case "wheel":
                        w = px;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = J0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = Wd
                }
                var m = (t & 4) !== 0
                    , S = !m && e === "scroll"
                    , g = m ? d !== null ? d + "Capture" : null : d;
                m = [];
                for (var f = u, y; f !== null;) {
                    y = f;
                    var C = y.stateNode;
                    if (y.tag === 5 && C !== null && (y = C,
                        g !== null && (C = ts(f, g),
                            C != null && m.push(ls(f, C, y)))),
                        S)
                        break;
                    f = f.return
                }
                0 < m.length && (d = new w(d, x, null, n, h),
                    p.push({
                        event: d,
                        listeners: m
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                    w = e === "mouseout" || e === "pointerout",
                    d && n !== Xl && (x = n.relatedTarget || n.fromElement) && (nr(x) || x[cn]))
                    break e;
                if ((w || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window,
                    w ? (x = n.relatedTarget || n.toElement,
                        w = u,
                        x = x ? nr(x) : null,
                        x !== null && (S = Sr(x),
                            x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null,
                                x = u),
                    w !== x)) {
                    if (m = Hd,
                        C = "onMouseLeave",
                        g = "onMouseEnter",
                        f = "mouse",
                        (e === "pointerout" || e === "pointerover") && (m = Wd,
                            C = "onPointerLeave",
                            g = "onPointerEnter",
                            f = "pointer"),
                        S = w == null ? d : Ir(w),
                        y = x == null ? d : Ir(x),
                        d = new m(C, f + "leave", w, n, h),
                        d.target = S,
                        d.relatedTarget = y,
                        C = null,
                        nr(h) === u && (m = new m(g, f + "enter", x, n, h),
                            m.target = y,
                            m.relatedTarget = S,
                            C = m),
                        S = C,
                        w && x)
                        t: {
                            for (m = w,
                                g = x,
                                f = 0,
                                y = m; y; y = kr(y))
                                f++;
                            for (y = 0,
                                C = g; C; C = kr(C))
                                y++;
                            for (; 0 < f - y;)
                                m = kr(m),
                                    f--;
                            for (; 0 < y - f;)
                                g = kr(g),
                                    y--;
                            for (; f--;) {
                                if (m === g || g !== null && m === g.alternate)
                                    break t;
                                m = kr(m),
                                    g = kr(g)
                            }
                            m = null
                        }
                    else
                        m = null;
                    w !== null && nf(p, d, w, m, !1),
                        x !== null && S !== null && nf(p, S, x, m, !0)
                }
            }
            e: {
                if (d = u ? Ir(u) : window,
                    w = d.nodeName && d.nodeName.toLowerCase(),
                    w === "select" || w === "input" && d.type === "file")
                    var b = wx;
                else if (Yd(d))
                    if (Dh)
                        b = Nx;
                    else {
                        b = Cx;
                        var k = Sx
                    }
                else
                    (w = d.nodeName) && w.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (b = bx);
                if (b && (b = b(e, u))) {
                    Lh(p, b, n, h);
                    break e
                }
                k && k(e, d, u),
                    e === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && Wl(d, "number", d.value)
            }
            switch (k = u ? Ir(u) : window,
            e) {
                case "focusin":
                    (Yd(k) || k.contentEditable === "true") && (Ar = k,
                        rc = u,
                        Qo = null);
                    break;
                case "focusout":
                    Qo = rc = Ar = null;
                    break;
                case "mousedown":
                    oc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    oc = !1,
                        Jd(p, n, h);
                    break;
                case "selectionchange":
                    if (jx)
                        break;
                case "keydown":
                case "keyup":
                    Jd(p, n, h)
            }
            var E;
            if (Su)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var j = "onCompositionStart";
                            break e;
                        case "compositionend":
                            j = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            j = "onCompositionUpdate";
                            break e
                    }
                    j = void 0
                }
            else
                Or ? _h(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Ah && n.locale !== "ko" && (Or || j !== "onCompositionStart" ? j === "onCompositionEnd" && Or && (E = Oh()) : (Mn = h,
                yu = "value" in Mn ? Mn.value : Mn.textContent,
                Or = !0)),
                k = _i(u, j),
                0 < k.length && (j = new Vd(j, e, null, n, h),
                    p.push({
                        event: j,
                        listeners: k
                    }),
                    E ? j.data = E : (E = Ih(n),
                        E !== null && (j.data = E)))),
                (E = mx ? vx(e, n) : gx(e, n)) && (u = _i(u, "onBeforeInput"),
                    0 < u.length && (h = new Vd("onBeforeInput", "beforeinput", null, n, h),
                        p.push({
                            event: h,
                            listeners: u
                        }),
                        h.data = E))
        }
        Qh(p, t)
    })
}
function ls(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function _i(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e
            , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
            s = ts(e, n),
            s != null && r.unshift(ls(e, s, o)),
            s = ts(e, t),
            s != null && r.push(ls(e, s, o))),
            e = e.return
    }
    return r
}
function kr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function nf(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r;) {
        var a = n
            , c = a.alternate
            , u = a.stateNode;
        if (c !== null && c === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            o ? (c = ts(n, s),
                c != null && i.unshift(ls(n, c, a))) : o || (c = ts(n, s),
                    c != null && i.push(ls(n, c, a)))),
            n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Mx = /\r\n?/g
    , Ox = /\u0000|\uFFFD/g;
function rf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mx, `
`).replace(Ox, "")
}
function Qs(e, t, n) {
    if (t = rf(t),
        rf(e) !== t && n)
        throw Error(T(425))
}
function Ii() { }
var sc = null
    , ic = null;
function ac(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var lc = typeof setTimeout == "function" ? setTimeout : void 0
    , Ax = typeof clearTimeout == "function" ? clearTimeout : void 0
    , of = typeof Promise == "function" ? Promise : void 0
    , _x = typeof queueMicrotask == "function" ? queueMicrotask : typeof of < "u" ? function (e) {
        return of.resolve(null).then(e).catch(Ix)
    }
        : lc;
function Ix(e) {
    setTimeout(function () {
        throw e
    })
}
function hl(e, t) {
    var n = t
        , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
            o && o.nodeType === 8)
            if (n = o.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                        os(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    os(t)
}
function Dn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function sf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var So = Math.random().toString(36).slice(2)
    , Kt = "__reactFiber$" + So
    , cs = "__reactProps$" + So
    , cn = "__reactContainer$" + So
    , cc = "__reactEvents$" + So
    , Lx = "__reactListeners$" + So
    , Dx = "__reactHandles$" + So;
function nr(e) {
    var t = e[Kt];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[cn] || n[Kt]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = sf(e); e !== null;) {
                    if (n = e[Kt])
                        return n;
                    e = sf(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function Ts(e) {
    return e = e[Kt] || e[cn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ir(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function ga(e) {
    return e[cs] || null
}
var uc = []
    , Lr = -1;
function Gn(e) {
    return {
        current: e
    }
}
function me(e) {
    0 > Lr || (e.current = uc[Lr],
        uc[Lr] = null,
        Lr--)
}
function de(e, t) {
    Lr++,
        uc[Lr] = e.current,
        e.current = t
}
var Hn = {}
    , We = Gn(Hn)
    , nt = Gn(!1)
    , pr = Hn;
function lo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
}
function rt(e) {
    return e = e.childContextTypes,
        e != null
}
function Li() {
    me(nt),
        me(We)
}
function af(e, t, n) {
    if (We.current !== Hn)
        throw Error(T(168));
    de(We, t),
        de(nt, n)
}
function Gh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(T(108, S0(e) || "Unknown", o));
    return xe({}, n, r)
}
function Di(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hn,
        pr = We.current,
        de(We, e),
        de(nt, nt.current),
        !0
}
function lf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = Gh(e, t, pr),
        r.__reactInternalMemoizedMergedChildContext = e,
        me(nt),
        me(We),
        de(We, e)) : me(nt),
        de(nt, n)
}
var nn = null
    , ya = !1
    , ml = !1;
function Xh(e) {
    nn === null ? nn = [e] : nn.push(e)
}
function Fx(e) {
    ya = !0,
        Xh(e)
}
function Xn() {
    if (!ml && nn !== null) {
        ml = !0;
        var e = 0
            , t = le;
        try {
            var n = nn;
            for (le = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            nn = null,
                ya = !1
        } catch (o) {
            throw nn !== null && (nn = nn.slice(e + 1)),
            Sh(hu, Xn),
            o
        } finally {
            le = t,
                ml = !1
        }
    }
    return null
}
var Dr = []
    , Fr = 0
    , Fi = null
    , zi = 0
    , wt = []
    , St = 0
    , hr = null
    , on = 1
    , sn = "";
function er(e, t) {
    Dr[Fr++] = zi,
        Dr[Fr++] = Fi,
        Fi = e,
        zi = t
}
function qh(e, t, n) {
    wt[St++] = on,
        wt[St++] = sn,
        wt[St++] = hr,
        hr = e;
    var r = on;
    e = sn;
    var o = 32 - At(r) - 1;
    r &= ~(1 << o),
        n += 1;
    var s = 32 - At(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
            r >>= i,
            o -= i,
            on = 1 << 32 - At(t) + o | n << o | r,
            sn = s + e
    } else
        on = 1 << s | n << o | r,
            sn = e
}
function bu(e) {
    e.return !== null && (er(e, 1),
        qh(e, 1, 0))
}
function Nu(e) {
    for (; e === Fi;)
        Fi = Dr[--Fr],
            Dr[Fr] = null,
            zi = Dr[--Fr],
            Dr[Fr] = null;
    for (; e === hr;)
        hr = wt[--St],
            wt[St] = null,
            sn = wt[--St],
            wt[St] = null,
            on = wt[--St],
            wt[St] = null
}
var ft = null
    , dt = null
    , ve = !1
    , Ot = null;
function Zh(e, t) {
    var n = Ct(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function cf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    ft = e,
                    dt = Dn(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    ft = e,
                    dt = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = hr !== null ? {
                    id: on,
                    overflow: sn
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Ct(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    ft = e,
                    dt = null,
                    !0) : !1;
        default:
            return !1
    }
}
function dc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fc(e) {
    if (ve) {
        var t = dt;
        if (t) {
            var n = t;
            if (!cf(e, t)) {
                if (dc(e))
                    throw Error(T(418));
                t = Dn(n.nextSibling);
                var r = ft;
                t && cf(e, t) ? Zh(r, n) : (e.flags = e.flags & -4097 | 2,
                    ve = !1,
                    ft = e)
            }
        } else {
            if (dc(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
                ve = !1,
                ft = e
        }
    }
}
function uf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    ft = e
}
function Ys(e) {
    if (e !== ft)
        return !1;
    if (!ve)
        return uf(e),
            ve = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ac(e.type, e.memoizedProps)),
        t && (t = dt)) {
        if (dc(e))
            throw Jh(),
            Error(T(418));
        for (; t;)
            Zh(e, t),
                t = Dn(t.nextSibling)
    }
    if (uf(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            dt = Dn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            dt = null
        }
    } else
        dt = ft ? Dn(e.stateNode.nextSibling) : null;
    return !0
}
function Jh() {
    for (var e = dt; e;)
        e = Dn(e.nextSibling)
}
function co() {
    dt = ft = null,
        ve = !1
}
function Eu(e) {
    Ot === null ? Ot = [e] : Ot.push(e)
}
var zx = hn.ReactCurrentBatchConfig;
function Mo(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var o = r
                , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
                ,
                t._stringRef = s,
                t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function Gs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function df(e) {
    var t = e._init;
    return t(e._payload)
}
function em(e) {
    function t(g, f) {
        if (e) {
            var y = g.deletions;
            y === null ? (g.deletions = [f],
                g.flags |= 16) : y.push(f)
        }
    }
    function n(g, f) {
        if (!e)
            return null;
        for (; f !== null;)
            t(g, f),
                f = f.sibling;
        return null
    }
    function r(g, f) {
        for (g = new Map; f !== null;)
            f.key !== null ? g.set(f.key, f) : g.set(f.index, f),
                f = f.sibling;
        return g
    }
    function o(g, f) {
        return g = Bn(g, f),
            g.index = 0,
            g.sibling = null,
            g
    }
    function s(g, f, y) {
        return g.index = y,
            e ? (y = g.alternate,
                y !== null ? (y = y.index,
                    y < f ? (g.flags |= 2,
                        f) : y) : (g.flags |= 2,
                            f)) : (g.flags |= 1048576,
                                f)
    }
    function i(g) {
        return e && g.alternate === null && (g.flags |= 2),
            g
    }
    function a(g, f, y, C) {
        return f === null || f.tag !== 6 ? (f = Cl(y, g.mode, C),
            f.return = g,
            f) : (f = o(f, y),
                f.return = g,
                f)
    }
    function c(g, f, y, C) {
        var b = y.type;
        return b === Mr ? h(g, f, y.props.children, C, y.key) : f !== null && (f.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Cn && df(b) === f.type) ? (C = o(f, y.props),
            C.ref = Mo(g, f, y),
            C.return = g,
            C) : (C = wi(y.type, y.key, y.props, null, g.mode, C),
                C.ref = Mo(g, f, y),
                C.return = g,
                C)
    }
    function u(g, f, y, C) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== y.containerInfo || f.stateNode.implementation !== y.implementation ? (f = bl(y, g.mode, C),
            f.return = g,
            f) : (f = o(f, y.children || []),
                f.return = g,
                f)
    }
    function h(g, f, y, C, b) {
        return f === null || f.tag !== 7 ? (f = dr(y, g.mode, C, b),
            f.return = g,
            f) : (f = o(f, y),
                f.return = g,
                f)
    }
    function p(g, f, y) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Cl("" + f, g.mode, y),
                f.return = g,
                f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Fs:
                    return y = wi(f.type, f.key, f.props, null, g.mode, y),
                        y.ref = Mo(g, null, f),
                        y.return = g,
                        y;
                case Rr:
                    return f = bl(f, g.mode, y),
                        f.return = g,
                        f;
                case Cn:
                    var C = f._init;
                    return p(g, C(f._payload), y)
            }
            if (Fo(f) || ko(f))
                return f = dr(f, g.mode, y, null),
                    f.return = g,
                    f;
            Gs(g, f)
        }
        return null
    }
    function d(g, f, y, C) {
        var b = f !== null ? f.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return b !== null ? null : a(g, f, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Fs:
                    return y.key === b ? c(g, f, y, C) : null;
                case Rr:
                    return y.key === b ? u(g, f, y, C) : null;
                case Cn:
                    return b = y._init,
                        d(g, f, b(y._payload), C)
            }
            if (Fo(y) || ko(y))
                return b !== null ? null : h(g, f, y, C, null);
            Gs(g, y)
        }
        return null
    }
    function w(g, f, y, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return g = g.get(y) || null,
                a(f, g, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case Fs:
                    return g = g.get(C.key === null ? y : C.key) || null,
                        c(f, g, C, b);
                case Rr:
                    return g = g.get(C.key === null ? y : C.key) || null,
                        u(f, g, C, b);
                case Cn:
                    var k = C._init;
                    return w(g, f, y, k(C._payload), b)
            }
            if (Fo(C) || ko(C))
                return g = g.get(y) || null,
                    h(f, g, C, b, null);
            Gs(f, C)
        }
        return null
    }
    function x(g, f, y, C) {
        for (var b = null, k = null, E = f, j = f = 0, _ = null; E !== null && j < y.length; j++) {
            E.index > j ? (_ = E,
                E = null) : _ = E.sibling;
            var A = d(g, E, y[j], C);
            if (A === null) {
                E === null && (E = _);
                break
            }
            e && E && A.alternate === null && t(g, E),
                f = s(A, f, j),
                k === null ? b = A : k.sibling = A,
                k = A,
                E = _
        }
        if (j === y.length)
            return n(g, E),
                ve && er(g, j),
                b;
        if (E === null) {
            for (; j < y.length; j++)
                E = p(g, y[j], C),
                    E !== null && (f = s(E, f, j),
                        k === null ? b = E : k.sibling = E,
                        k = E);
            return ve && er(g, j),
                b
        }
        for (E = r(g, E); j < y.length; j++)
            _ = w(E, g, j, y[j], C),
                _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? j : _.key),
                    f = s(_, f, j),
                    k === null ? b = _ : k.sibling = _,
                    k = _);
        return e && E.forEach(function ($) {
            return t(g, $)
        }),
            ve && er(g, j),
            b
    }
    function m(g, f, y, C) {
        var b = ko(y);
        if (typeof b != "function")
            throw Error(T(150));
        if (y = b.call(y),
            y == null)
            throw Error(T(151));
        for (var k = b = null, E = f, j = f = 0, _ = null, A = y.next(); E !== null && !A.done; j++,
            A = y.next()) {
            E.index > j ? (_ = E,
                E = null) : _ = E.sibling;
            var $ = d(g, E, A.value, C);
            if ($ === null) {
                E === null && (E = _);
                break
            }
            e && E && $.alternate === null && t(g, E),
                f = s($, f, j),
                k === null ? b = $ : k.sibling = $,
                k = $,
                E = _
        }
        if (A.done)
            return n(g, E),
                ve && er(g, j),
                b;
        if (E === null) {
            for (; !A.done; j++,
                A = y.next())
                A = p(g, A.value, C),
                    A !== null && (f = s(A, f, j),
                        k === null ? b = A : k.sibling = A,
                        k = A);
            return ve && er(g, j),
                b
        }
        for (E = r(g, E); !A.done; j++,
            A = y.next())
            A = w(E, g, j, A.value, C),
                A !== null && (e && A.alternate !== null && E.delete(A.key === null ? j : A.key),
                    f = s(A, f, j),
                    k === null ? b = A : k.sibling = A,
                    k = A);
        return e && E.forEach(function (L) {
            return t(g, L)
        }),
            ve && er(g, j),
            b
    }
    function S(g, f, y, C) {
        if (typeof y == "object" && y !== null && y.type === Mr && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Fs:
                    e: {
                        for (var b = y.key, k = f; k !== null;) {
                            if (k.key === b) {
                                if (b = y.type,
                                    b === Mr) {
                                    if (k.tag === 7) {
                                        n(g, k.sibling),
                                            f = o(k, y.props.children),
                                            f.return = g,
                                            g = f;
                                        break e
                                    }
                                } else if (k.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Cn && df(b) === k.type) {
                                    n(g, k.sibling),
                                        f = o(k, y.props),
                                        f.ref = Mo(g, k, y),
                                        f.return = g,
                                        g = f;
                                    break e
                                }
                                n(g, k);
                                break
                            } else
                                t(g, k);
                            k = k.sibling
                        }
                        y.type === Mr ? (f = dr(y.props.children, g.mode, C, y.key),
                            f.return = g,
                            g = f) : (C = wi(y.type, y.key, y.props, null, g.mode, C),
                                C.ref = Mo(g, f, y),
                                C.return = g,
                                g = C)
                    }
                    return i(g);
                case Rr:
                    e: {
                        for (k = y.key; f !== null;) {
                            if (f.key === k)
                                if (f.tag === 4 && f.stateNode.containerInfo === y.containerInfo && f.stateNode.implementation === y.implementation) {
                                    n(g, f.sibling),
                                        f = o(f, y.children || []),
                                        f.return = g,
                                        g = f;
                                    break e
                                } else {
                                    n(g, f);
                                    break
                                }
                            else
                                t(g, f);
                            f = f.sibling
                        }
                        f = bl(y, g.mode, C),
                            f.return = g,
                            g = f
                    }
                    return i(g);
                case Cn:
                    return k = y._init,
                        S(g, f, k(y._payload), C)
            }
            if (Fo(y))
                return x(g, f, y, C);
            if (ko(y))
                return m(g, f, y, C);
            Gs(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
            f !== null && f.tag === 6 ? (n(g, f.sibling),
                f = o(f, y),
                f.return = g,
                g = f) : (n(g, f),
                    f = Cl(y, g.mode, C),
                    f.return = g,
                    g = f),
            i(g)) : n(g, f)
    }
    return S
}
var uo = em(!0)
    , tm = em(!1)
    , $i = Gn(null)
    , Bi = null
    , zr = null
    , ku = null;
function ju() {
    ku = zr = Bi = null
}
function Pu(e) {
    var t = $i.current;
    me($i),
        e._currentValue = t
}
function pc(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Kr(e, t) {
    Bi = e,
        ku = zr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0),
            e.firstContext = null)
}
function Nt(e) {
    var t = e._currentValue;
    if (ku !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            zr === null) {
            if (Bi === null)
                throw Error(T(308));
            zr = e,
                Bi.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            zr = zr.next = e;
    return t
}
var rr = null;
function Tu(e) {
    rr === null ? rr = [e] : rr.push(e)
}
function nm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
        Tu(t)) : (n.next = o.next,
            o.next = n),
        t.interleaved = n,
        un(e, r)
}
function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var bn = !1;
function Ru(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function rm(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function an(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        J & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            un(e, n)
    }
    return o = r.interleaved,
        o === null ? (t.next = t,
            Tu(r)) : (t.next = o.next,
                o.next = t),
        r.interleaved = t,
        un(e, n)
}
function hi(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            mu(e, n)
    }
}
function ff(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var o = null
            , s = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                    n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Ui(e, t, n, r) {
    var o = e.updateQueue;
    bn = !1;
    var s = o.firstBaseUpdate
        , i = o.lastBaseUpdate
        , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var c = a
            , u = c.next;
        c.next = null,
            i === null ? s = u : i.next = u,
            i = c;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
            a = h.lastBaseUpdate,
            a !== i && (a === null ? h.firstBaseUpdate = u : a.next = u,
                h.lastBaseUpdate = c))
    }
    if (s !== null) {
        var p = o.baseState;
        i = 0,
            h = u = c = null,
            a = s;
        do {
            var d = a.lane
                , w = a.eventTime;
            if ((r & d) === d) {
                h !== null && (h = h.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                        , m = a;
                    switch (d = t,
                    w = n,
                    m.tag) {
                        case 1:
                            if (x = m.payload,
                                typeof x == "function") {
                                p = x.call(w, p, d);
                                break e
                            }
                            p = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = m.payload,
                                d = typeof x == "function" ? x.call(w, p, d) : x,
                                d == null)
                                break e;
                            p = xe({}, p, d);
                            break e;
                        case 2:
                            bn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    d = o.effects,
                    d === null ? o.effects = [a] : d.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    h === null ? (u = h = w,
                        c = p) : h = h.next = w,
                    i |= d;
            if (a = a.next,
                a === null) {
                if (a = o.shared.pending,
                    a === null)
                    break;
                d = a,
                    a = d.next,
                    d.next = null,
                    o.lastBaseUpdate = d,
                    o.shared.pending = null
            }
        } while (!0);
        if (h === null && (c = p),
            o.baseState = c,
            o.firstBaseUpdate = u,
            o.lastBaseUpdate = h,
            t = o.shared.interleaved,
            t !== null) {
            o = t;
            do
                i |= o.lane,
                    o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        vr |= i,
            e.lanes = i,
            e.memoizedState = p
    }
}
function pf(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                    r = n,
                    typeof o != "function")
                    throw Error(T(191, o));
                o.call(r)
            }
        }
}
var Rs = {}
    , Gt = Gn(Rs)
    , us = Gn(Rs)
    , ds = Gn(Rs);
function or(e) {
    if (e === Rs)
        throw Error(T(174));
    return e
}
function Mu(e, t) {
    switch (de(ds, t),
    de(us, e),
    de(Gt, Rs),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = Ql(t, e)
    }
    me(Gt),
        de(Gt, t)
}
function fo() {
    me(Gt),
        me(us),
        me(ds)
}
function om(e) {
    or(ds.current);
    var t = or(Gt.current)
        , n = Ql(t, e.type);
    t !== n && (de(us, e),
        de(Gt, n))
}
function Ou(e) {
    us.current === e && (me(Gt),
        me(us))
}
var ge = Gn(0);
function Hi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var vl = [];
function Au() {
    for (var e = 0; e < vl.length; e++)
        vl[e]._workInProgressVersionPrimary = null;
    vl.length = 0
}
var mi = hn.ReactCurrentDispatcher
    , gl = hn.ReactCurrentBatchConfig
    , mr = 0
    , ye = null
    , je = null
    , Oe = null
    , Vi = !1
    , Yo = !1
    , fs = 0
    , $x = 0;
function ze() {
    throw Error(T(321))
}
function _u(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!It(e[n], t[n]))
            return !1;
    return !0
}
function Iu(e, t, n, r, o, s) {
    if (mr = s,
        ye = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        mi.current = e === null || e.memoizedState === null ? Vx : Wx,
        e = n(r, o),
        Yo) {
        s = 0;
        do {
            if (Yo = !1,
                fs = 0,
                25 <= s)
                throw Error(T(301));
            s += 1,
                Oe = je = null,
                t.updateQueue = null,
                mi.current = Kx,
                e = n(r, o)
        } while (Yo)
    }
    if (mi.current = Wi,
        t = je !== null && je.next !== null,
        mr = 0,
        Oe = je = ye = null,
        Vi = !1,
        t)
        throw Error(T(300));
    return e
}
function Lu() {
    var e = fs !== 0;
    return fs = 0,
        e
}
function Bt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Oe === null ? ye.memoizedState = Oe = e : Oe = Oe.next = e,
        Oe
}
function Et() {
    if (je === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = je.next;
    var t = Oe === null ? ye.memoizedState : Oe.next;
    if (t !== null)
        Oe = t,
            je = e;
    else {
        if (e === null)
            throw Error(T(310));
        je = e,
            e = {
                memoizedState: je.memoizedState,
                baseState: je.baseState,
                baseQueue: je.baseQueue,
                queue: je.queue,
                next: null
            },
            Oe === null ? ye.memoizedState = Oe = e : Oe = Oe.next = e
    }
    return Oe
}
function ps(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yl(e) {
    var t = Et()
        , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = je
        , o = r.baseQueue
        , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
                s.next = i
        }
        r.baseQueue = o = s,
            n.pending = null
    }
    if (o !== null) {
        s = o.next,
            r = r.baseState;
        var a = i = null
            , c = null
            , u = s;
        do {
            var h = u.lane;
            if ((mr & h) === h)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: h,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (a = c = p,
                    i = r) : c = c.next = p,
                    ye.lanes |= h,
                    vr |= h
            }
            u = u.next
        } while (u !== null && u !== s);
        c === null ? i = r : c.next = a,
            It(r, t.memoizedState) || (tt = !0),
            t.memoizedState = r,
            t.baseState = i,
            t.baseQueue = c,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        o = e;
        do
            s = o.lane,
                ye.lanes |= s,
                vr |= s,
                o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function xl(e) {
    var t = Et()
        , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , o = n.pending
        , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
                i = i.next;
        while (i !== o);
        It(s, t.memoizedState) || (tt = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            n.lastRenderedState = s
    }
    return [s, r]
}
function sm() { }
function im(e, t) {
    var n = ye
        , r = Et()
        , o = t()
        , s = !It(r.memoizedState, o);
    if (s && (r.memoizedState = o,
        tt = !0),
        r = r.queue,
        Du(cm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || Oe !== null && Oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            hs(9, lm.bind(null, n, r, o, t), void 0, null),
            Ae === null)
            throw Error(T(349));
        mr & 30 || am(n, t, o)
    }
    return o
}
function am(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = ye.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ye.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function lm(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        um(t) && dm(e)
}
function cm(e, t, n) {
    return n(function () {
        um(t) && dm(e)
    })
}
function um(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !It(e, n)
    } catch {
        return !0
    }
}
function dm(e) {
    var t = un(e, 1);
    t !== null && _t(t, e, 1, -1)
}
function hf(e) {
    var t = Bt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ps,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Hx.bind(null, ye, e),
        [t.memoizedState, e]
}
function hs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = ye.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ye.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function fm() {
    return Et().memoizedState
}
function vi(e, t, n, r) {
    var o = Bt();
    ye.flags |= e,
        o.memoizedState = hs(1 | t, n, void 0, r === void 0 ? null : r)
}
function xa(e, t, n, r) {
    var o = Et();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (je !== null) {
        var i = je.memoizedState;
        if (s = i.destroy,
            r !== null && _u(r, i.deps)) {
            o.memoizedState = hs(t, n, s, r);
            return
        }
    }
    ye.flags |= e,
        o.memoizedState = hs(1 | t, n, s, r)
}
function mf(e, t) {
    return vi(8390656, 8, e, t)
}
function Du(e, t) {
    return xa(2048, 8, e, t)
}
function pm(e, t) {
    return xa(4, 2, e, t)
}
function hm(e, t) {
    return xa(4, 4, e, t)
}
function mm(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function vm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        xa(4, 4, mm.bind(null, t, e), n)
}
function Fu() { }
function gm(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _u(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function ym(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _u(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function xm(e, t, n) {
    return mr & 21 ? (It(n, t) || (n = Nh(),
        ye.lanes |= n,
        vr |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            tt = !0),
            e.memoizedState = n)
}
function Bx(e, t) {
    var n = le;
    le = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = gl.transition;
    gl.transition = {};
    try {
        e(!1),
            t()
    } finally {
        le = n,
            gl.transition = r
    }
}
function wm() {
    return Et().memoizedState
}
function Ux(e, t, n) {
    var r = $n(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Sm(e))
        Cm(t, n);
    else if (n = nm(e, t, n, r),
        n !== null) {
        var o = qe();
        _t(n, e, r, o),
            bm(n, t, r)
    }
}
function Hx(e, t, n) {
    var r = $n(e)
        , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Sm(e))
        Cm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
            try {
                var i = t.lastRenderedState
                    , a = s(i, n);
                if (o.hasEagerState = !0,
                    o.eagerState = a,
                    It(a, i)) {
                    var c = t.interleaved;
                    c === null ? (o.next = o,
                        Tu(t)) : (o.next = c.next,
                            c.next = o),
                        t.interleaved = o;
                    return
                }
            } catch { } finally { }
        n = nm(e, t, o, r),
            n !== null && (o = qe(),
                _t(n, e, r, o),
                bm(n, t, r))
    }
}
function Sm(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye
}
function Cm(e, t) {
    Yo = Vi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function bm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            mu(e, n)
    }
}
var Wi = {
    readContext: Nt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1
}
    , Vx = {
        readContext: Nt,
        useCallback: function (e, t) {
            return Bt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Nt,
        useEffect: mf,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                vi(4194308, 4, mm.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return vi(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return vi(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Bt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = Bt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = Ux.bind(null, ye, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Bt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: hf,
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            return Bt().memoizedState = e
        },
        useTransition: function () {
            var e = hf(!1)
                , t = e[0];
            return e = Bx.bind(null, e[1]),
                Bt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = ye
                , o = Bt();
            if (ve) {
                if (n === void 0)
                    throw Error(T(407));
                n = n()
            } else {
                if (n = t(),
                    Ae === null)
                    throw Error(T(349));
                mr & 30 || am(r, t, n)
            }
            o.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return o.queue = s,
                mf(cm.bind(null, r, s, e), [e]),
                r.flags |= 2048,
                hs(9, lm.bind(null, r, s, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = Bt()
                , t = Ae.identifierPrefix;
            if (ve) {
                var n = sn
                    , r = on;
                n = (r & ~(1 << 32 - At(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = fs++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = $x++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , Wx = {
        readContext: Nt,
        useCallback: gm,
        useContext: Nt,
        useEffect: Du,
        useImperativeHandle: vm,
        useInsertionEffect: pm,
        useLayoutEffect: hm,
        useMemo: ym,
        useReducer: yl,
        useRef: fm,
        useState: function () {
            return yl(ps)
        },
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            var t = Et();
            return xm(t, je.memoizedState, e)
        },
        useTransition: function () {
            var e = yl(ps)[0]
                , t = Et().memoizedState;
            return [e, t]
        },
        useMutableSource: sm,
        useSyncExternalStore: im,
        useId: wm,
        unstable_isNewReconciler: !1
    }
    , Kx = {
        readContext: Nt,
        useCallback: gm,
        useContext: Nt,
        useEffect: Du,
        useImperativeHandle: vm,
        useInsertionEffect: pm,
        useLayoutEffect: hm,
        useMemo: ym,
        useReducer: xl,
        useRef: fm,
        useState: function () {
            return xl(ps)
        },
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            var t = Et();
            return je === null ? t.memoizedState = e : xm(t, je.memoizedState, e)
        },
        useTransition: function () {
            var e = xl(ps)[0]
                , t = Et().memoizedState;
            return [e, t]
        },
        useMutableSource: sm,
        useSyncExternalStore: im,
        useId: wm,
        unstable_isNewReconciler: !1
    };
function Pt(e, t) {
    if (e && e.defaultProps) {
        t = xe({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function hc(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : xe({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var wa = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Sr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = qe()
            , o = $n(e)
            , s = an(r, o);
        s.payload = t,
            n != null && (s.callback = n),
            t = Fn(e, s, o),
            t !== null && (_t(t, e, o, r),
                hi(t, e, o))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = qe()
            , o = $n(e)
            , s = an(r, o);
        s.tag = 1,
            s.payload = t,
            n != null && (s.callback = n),
            t = Fn(e, s, o),
            t !== null && (_t(t, e, o, r),
                hi(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = qe()
            , r = $n(e)
            , o = an(n, r);
        o.tag = 2,
            t != null && (o.callback = t),
            t = Fn(e, o, r),
            t !== null && (_t(t, e, r, n),
                hi(t, e, r))
    }
};
function vf(e, t, n, r, o, s, i) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !is(n, r) || !is(o, s) : !0
}
function Nm(e, t, n) {
    var r = !1
        , o = Hn
        , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Nt(s) : (o = rt(t) ? pr : We.current,
        r = t.contextTypes,
        s = (r = r != null) ? lo(e, o) : Hn),
        t = new t(n, s),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = wa,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = o,
            e.__reactInternalMemoizedMaskedChildContext = s),
        t
}
function gf(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && wa.enqueueReplaceState(t, t.state, null)
}
function mc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
        o.state = e.memoizedState,
        o.refs = {},
        Ru(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = Nt(s) : (s = rt(t) ? pr : We.current,
        o.context = lo(e, s)),
        o.state = e.memoizedState,
        s = t.getDerivedStateFromProps,
        typeof s == "function" && (hc(e, t, s, n),
            o.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && wa.enqueueReplaceState(o, o.state, null),
            Ui(e, n, o, r),
            o.state = e.memoizedState),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function po(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += w0(r),
                r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function wl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function vc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Qx = typeof WeakMap == "function" ? WeakMap : Map;
function Em(e, t, n) {
    n = an(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Qi || (Qi = !0,
            kc = r),
            vc(e, t)
    }
        ,
        n
}
function km(e, t, n) {
    n = an(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }
            ,
            n.callback = function () {
                vc(e, t)
            }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        vc(e, t),
            typeof r != "function" && (zn === null ? zn = new Set([this]) : zn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
        n
}
function yf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Qx;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
            o === void 0 && (o = new Set,
                r.set(t, o));
    o.has(n) || (o.add(n),
        e = aw.bind(null, e, t, n),
        t.then(e, e))
}
function xf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function wf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = o,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1),
                t.tag = 2,
                Fn(n, t, 1))),
            n.lanes |= 1),
            e)
}
var Yx = hn.ReactCurrentOwner
    , tt = !1;
function Ge(e, t, n, r) {
    t.child = e === null ? tm(t, null, n, r) : uo(t, e.child, n, r)
}
function Sf(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Kr(t, o),
        r = Iu(e, t, n, r, s, o),
        n = Lu(),
        e !== null && !tt ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            dn(e, t, o)) : (ve && n && bu(t),
                t.flags |= 1,
                Ge(e, t, r, o),
                t.child)
}
function Cf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ku(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = s,
            jm(e, t, s, r, o)) : (e = wi(n.type, null, r, t, t.mode, o),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (s = e.child,
        !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : is,
            n(i, r) && e.ref === t.ref)
            return dn(e, t, o)
    }
    return t.flags |= 1,
        e = Bn(s, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function jm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (is(s, r) && e.ref === t.ref)
            if (tt = !1,
                t.pendingProps = r = s,
                (e.lanes & o) !== 0)
                e.flags & 131072 && (tt = !0);
            else
                return t.lanes = e.lanes,
                    dn(e, t, o)
    }
    return gc(e, t, n, r, o)
}
function Pm(e, t, n) {
    var r = t.pendingProps
        , o = r.children
        , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                de(Br, ct),
                ct |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    de(Br, ct),
                    ct |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = s !== null ? s.baseLanes : n,
                de(Br, ct),
                ct |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
            t.memoizedState = null) : r = n,
            de(Br, ct),
            ct |= r;
    return Ge(e, t, o, n),
        t.child
}
function Tm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function gc(e, t, n, r, o) {
    var s = rt(n) ? pr : We.current;
    return s = lo(t, s),
        Kr(t, o),
        n = Iu(e, t, n, r, s, o),
        r = Lu(),
        e !== null && !tt ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~o,
            dn(e, t, o)) : (ve && r && bu(t),
                t.flags |= 1,
                Ge(e, t, n, o),
                t.child)
}
function bf(e, t, n, r, o) {
    if (rt(n)) {
        var s = !0;
        Di(t)
    } else
        s = !1;
    if (Kr(t, o),
        t.stateNode === null)
        gi(e, t),
            Nm(t, n, r),
            mc(t, n, r, o),
            r = !0;
    else if (e === null) {
        var i = t.stateNode
            , a = t.memoizedProps;
        i.props = a;
        var c = i.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = Nt(u) : (u = rt(n) ? pr : We.current,
            u = lo(t, u));
        var h = n.getDerivedStateFromProps
            , p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || c !== u) && gf(t, i, r, u),
            bn = !1;
        var d = t.memoizedState;
        i.state = d,
            Ui(t, r, i, o),
            c = t.memoizedState,
            a !== r || d !== c || nt.current || bn ? (typeof h == "function" && (hc(t, n, h, r),
                c = t.memoizedState),
                (a = bn || vf(t, n, a, r, d, c, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                    typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = c),
                i.props = r,
                i.state = c,
                i.context = u,
                r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        i = t.stateNode,
            rm(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : Pt(t.type, a),
            i.props = u,
            p = t.pendingProps,
            d = i.context,
            c = n.contextType,
            typeof c == "object" && c !== null ? c = Nt(c) : (c = rt(n) ? pr : We.current,
                c = lo(t, c));
        var w = n.getDerivedStateFromProps;
        (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== p || d !== c) && gf(t, i, r, c),
            bn = !1,
            d = t.memoizedState,
            i.state = d,
            Ui(t, r, i, o);
        var x = t.memoizedState;
        a !== p || d !== x || nt.current || bn ? (typeof w == "function" && (hc(t, n, w, r),
            x = t.memoizedState),
            (u = bn || vf(t, n, u, r, d, x, c) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, c),
                typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, c)),
                typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = x),
            i.props = r,
            i.state = x,
            i.context = c,
            r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return yc(e, t, n, r, s, o)
}
function yc(e, t, n, r, o, s) {
    Tm(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && lf(t, n, !1),
            dn(e, t, s);
    r = t.stateNode,
        Yx.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && i ? (t.child = uo(t, e.child, null, s),
            t.child = uo(t, null, a, s)) : Ge(e, t, a, s),
        t.memoizedState = r.state,
        o && lf(t, n, !0),
        t.child
}
function Rm(e) {
    var t = e.stateNode;
    t.pendingContext ? af(e, t.pendingContext, t.pendingContext !== t.context) : t.context && af(e, t.context, !1),
        Mu(e, t.containerInfo)
}
function Nf(e, t, n, r, o) {
    return co(),
        Eu(o),
        t.flags |= 256,
        Ge(e, t, n, r),
        t.child
}
var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function wc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Mm(e, t, n) {
    var r = t.pendingProps, o = ge.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a ? (s = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
        de(ge, o & 1),
        e === null)
        return fc(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (i = r.children,
                        e = r.fallback,
                        s ? (r = t.mode,
                            s = t.child,
                            i = {
                                mode: "hidden",
                                children: i
                            },
                            !(r & 1) && s !== null ? (s.childLanes = 0,
                                s.pendingProps = i) : s = ba(i, r, 0, null),
                            e = dr(e, r, n, null),
                            s.return = t,
                            e.return = t,
                            s.sibling = e,
                            t.child = s,
                            t.child.memoizedState = wc(n),
                            t.memoizedState = xc,
                            e) : zu(t, i));
    if (o = e.memoizedState,
        o !== null && (a = o.dehydrated,
            a !== null))
        return Gx(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
            i = t.mode,
            o = e.child,
            a = o.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = c,
            t.deletions = null) : (r = Bn(o, c),
                r.subtreeFlags = o.subtreeFlags & 14680064),
            a !== null ? s = Bn(a, s) : (s = dr(s, i, n, null),
                s.flags |= 2),
            s.return = t,
            r.return = t,
            r.sibling = s,
            t.child = r,
            r = s,
            s = t.child,
            i = e.child.memoizedState,
            i = i === null ? wc(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            },
            s.memoizedState = i,
            s.childLanes = e.childLanes & ~n,
            t.memoizedState = xc,
            r
    }
    return s = e.child,
        e = s.sibling,
        r = Bn(s, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function zu(e, t) {
    return t = ba({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function Xs(e, t, n, r) {
    return r !== null && Eu(r),
        uo(t, e.child, null, n),
        e = zu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function Gx(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = wl(Error(T(422))),
            Xs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (s = r.fallback,
                    o = t.mode,
                    r = ba({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null),
                    s = dr(s, o, i, null),
                    s.flags |= 2,
                    r.return = t,
                    s.return = t,
                    r.sibling = s,
                    t.child = r,
                    t.mode & 1 && uo(t, e.child, null, i),
                    t.child.memoizedState = wc(i),
                    t.memoizedState = xc,
                    s);
    if (!(t.mode & 1))
        return Xs(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            s = Error(T(419)),
            r = wl(s, r, void 0),
            Xs(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
        tt || a) {
        if (r = Ae,
            r !== null) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
                o !== 0 && o !== s.retryLane && (s.retryLane = o,
                    un(e, o),
                    _t(r, e, o, -1))
        }
        return Wu(),
            r = wl(Error(T(421))),
            Xs(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = lw.bind(null, e),
        o._reactRetry = t,
        null) : (e = s.treeContext,
            dt = Dn(o.nextSibling),
            ft = t,
            ve = !0,
            Ot = null,
            e !== null && (wt[St++] = on,
                wt[St++] = sn,
                wt[St++] = hr,
                on = e.id,
                sn = e.overflow,
                hr = t),
            t = zu(t, r.children),
            t.flags |= 4096,
            t)
}
function Ef(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        pc(e.return, t, n)
}
function Sl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
        s.rendering = null,
        s.renderingStartTime = 0,
        s.last = r,
        s.tail = n,
        s.tailMode = o)
}
function Om(e, t, n) {
    var r = t.pendingProps
        , o = r.revealOrder
        , s = r.tail;
    if (Ge(e, t, r.children, n),
        r = ge.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ef(e, n, t);
                else if (e.tag === 19)
                    Ef(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (de(ge, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child,
                    o = null; n !== null;)
                    e = n.alternate,
                        e !== null && Hi(e) === null && (o = n),
                        n = n.sibling;
                n = o,
                    n === null ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                            n.sibling = null),
                    Sl(t, !1, o, n, s);
                break;
            case "backwards":
                for (n = null,
                    o = t.child,
                    t.child = null; o !== null;) {
                    if (e = o.alternate,
                        e !== null && Hi(e) === null) {
                        t.child = o;
                        break
                    }
                    e = o.sibling,
                        o.sibling = n,
                        n = o,
                        o = e
                }
                Sl(t, !0, n, null, s);
                break;
            case "together":
                Sl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function gi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function dn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        vr |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
            n = Bn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = Bn(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function Xx(e, t, n) {
    switch (t.tag) {
        case 3:
            Rm(t),
                co();
            break;
        case 5:
            om(t);
            break;
        case 1:
            rt(t.type) && Di(t);
            break;
        case 4:
            Mu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , o = t.memoizedProps.value;
            de($i, r._currentValue),
                r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (de(ge, ge.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Mm(e, t, n) : (de(ge, ge.current & 1),
                        e = dn(e, t, n),
                        e !== null ? e.sibling : null);
            de(ge, ge.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Om(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState,
                o !== null && (o.rendering = null,
                    o.tail = null,
                    o.lastEffect = null),
                de(ge, ge.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Pm(e, t, n)
    }
    return dn(e, t, n)
}
var Am, Sc, _m, Im;
Am = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Sc = function () { }
    ;
_m = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
            or(Gt.current);
        var s = null;
        switch (n) {
            case "input":
                o = Hl(e, o),
                    r = Hl(e, r),
                    s = [];
                break;
            case "select":
                o = xe({}, o, {
                    value: void 0
                }),
                    r = xe({}, r, {
                        value: void 0
                    }),
                    s = [];
                break;
            case "textarea":
                o = Kl(e, o),
                    r = Kl(e, r),
                    s = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ii)
        }
        Yl(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                            n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Jo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (a = o != null ? o[u] : void 0,
                r.hasOwnProperty(u) && c !== a && (c != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}),
                                n[i] = "");
                        for (i in c)
                            c.hasOwnProperty(i) && a[i] !== c[i] && (n || (n = {}),
                                n[i] = c[i])
                    } else
                        n || (s || (s = []),
                            s.push(u, n)),
                            n = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                        a = a ? a.__html : void 0,
                        c != null && a !== c && (s = s || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (s = s || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Jo.hasOwnProperty(u) ? (c != null && u === "onScroll" && he("scroll", e),
                            s || a === c || (s = [])) : (s = s || []).push(u, c))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
Im = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function Oo(e, t) {
    if (!ve)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 14680064,
                r |= o.flags & 14680064,
                o.return = e,
                o = o.sibling;
    else
        for (o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function qx(e, t, n) {
    var r = t.pendingProps;
    switch (Nu(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return $e(t),
                null;
        case 1:
            return rt(t.type) && Li(),
                $e(t),
                null;
        case 3:
            return r = t.stateNode,
                fo(),
                me(nt),
                me(We),
                Au(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (Ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    Ot !== null && (Tc(Ot),
                        Ot = null))),
                Sc(e, t),
                $e(t),
                null;
        case 5:
            Ou(t);
            var o = or(ds.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                _m(e, t, n, r, o),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(T(166));
                    return $e(t),
                        null
                }
                if (e = or(Gt.current),
                    Ys(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var s = t.memoizedProps;
                    switch (r[Kt] = t,
                    r[cs] = s,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            he("cancel", r),
                                he("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            he("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < $o.length; o++)
                                he($o[o], r);
                            break;
                        case "source":
                            he("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            he("error", r),
                                he("load", r);
                            break;
                        case "details":
                            he("toggle", r);
                            break;
                        case "input":
                            Ad(r, s),
                                he("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            },
                                he("invalid", r);
                            break;
                        case "textarea":
                            Id(r, s),
                                he("invalid", r)
                    }
                    Yl(n, s),
                        o = null;
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Qs(r.textContent, a, e),
                                o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Qs(r.textContent, a, e),
                                    o = ["children", "" + a]) : Jo.hasOwnProperty(i) && a != null && i === "onScroll" && he("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            zs(r),
                                _d(r, s, !0);
                            break;
                        case "textarea":
                            zs(r),
                                Ld(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = Ii)
                    }
                    r = o,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    i = o.nodeType === 9 ? o : o.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = ch(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                                is: r.is
                            }) : (e = i.createElement(n),
                                n === "select" && (i = e,
                                    r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                        e[Kt] = t,
                        e[cs] = r,
                        Am(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (i = Gl(n, r),
                        n) {
                            case "dialog":
                                he("cancel", e),
                                    he("close", e),
                                    o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                he("load", e),
                                    o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < $o.length; o++)
                                    he($o[o], e);
                                o = r;
                                break;
                            case "source":
                                he("error", e),
                                    o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                he("error", e),
                                    he("load", e),
                                    o = r;
                                break;
                            case "details":
                                he("toggle", e),
                                    o = r;
                                break;
                            case "input":
                                Ad(e, r),
                                    o = Hl(e, r),
                                    he("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    o = xe({}, r, {
                                        value: void 0
                                    }),
                                    he("invalid", e);
                                break;
                            case "textarea":
                                Id(e, r),
                                    o = Kl(e, r),
                                    he("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Yl(n, o),
                            a = o;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var c = a[s];
                                s === "style" ? fh(e, c) : s === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                                    c != null && uh(e, c)) : s === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && es(e, c) : typeof c == "number" && es(e, "" + c) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Jo.hasOwnProperty(s) ? c != null && s === "onScroll" && he("scroll", e) : c != null && cu(e, s, c, i))
                            }
                        switch (n) {
                            case "input":
                                zs(e),
                                    _d(e, r, !1);
                                break;
                            case "textarea":
                                zs(e),
                                    Ld(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Un(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    s = r.value,
                                    s != null ? Ur(e, !!r.multiple, s, !1) : r.defaultValue != null && Ur(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Ii)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return $e(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Im(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(T(166));
                if (n = or(ds.current),
                    or(Gt.current),
                    Ys(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Kt] = t,
                        (s = r.nodeValue !== n) && (e = ft,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Qs(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Qs(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    s && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[Kt] = t,
                        t.stateNode = r
            }
            return $e(t),
                null;
        case 13:
            if (me(ge),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ve && dt !== null && t.mode & 1 && !(t.flags & 128))
                    Jh(),
                        co(),
                        t.flags |= 98560,
                        s = !1;
                else if (s = Ys(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(T(318));
                        if (s = t.memoizedState,
                            s = s !== null ? s.dehydrated : null,
                            !s)
                            throw Error(T(317));
                        s[Kt] = t
                    } else
                        co(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    $e(t),
                        s = !1
                } else
                    Ot !== null && (Tc(Ot),
                        Ot = null),
                        s = !0;
                if (!s)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || ge.current & 1 ? Re === 0 && (Re = 3) : Wu())),
                    t.updateQueue !== null && (t.flags |= 4),
                    $e(t),
                    null);
        case 4:
            return fo(),
                Sc(e, t),
                e === null && as(t.stateNode.containerInfo),
                $e(t),
                null;
        case 10:
            return Pu(t.type._context),
                $e(t),
                null;
        case 17:
            return rt(t.type) && Li(),
                $e(t),
                null;
        case 19:
            if (me(ge),
                s = t.memoizedState,
                s === null)
                return $e(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                i = s.rendering,
                i === null)
                if (r)
                    Oo(s, !1);
                else {
                    if (Re !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Hi(e),
                                i !== null) {
                                for (t.flags |= 128,
                                    Oo(s, !1),
                                    r = i.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    s = n,
                                        e = r,
                                        s.flags &= 14680066,
                                        i = s.alternate,
                                        i === null ? (s.childLanes = 0,
                                            s.lanes = e,
                                            s.child = null,
                                            s.subtreeFlags = 0,
                                            s.memoizedProps = null,
                                            s.memoizedState = null,
                                            s.updateQueue = null,
                                            s.dependencies = null,
                                            s.stateNode = null) : (s.childLanes = i.childLanes,
                                                s.lanes = i.lanes,
                                                s.child = i.child,
                                                s.subtreeFlags = 0,
                                                s.deletions = null,
                                                s.memoizedProps = i.memoizedProps,
                                                s.memoizedState = i.memoizedState,
                                                s.updateQueue = i.updateQueue,
                                                s.type = i.type,
                                                e = i.dependencies,
                                                s.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return de(ge, ge.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && Ee() > ho && (t.flags |= 128,
                        r = !0,
                        Oo(s, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Hi(i),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            Oo(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !i.alternate && !ve)
                            return $e(t),
                                null
                    } else
                        2 * Ee() - s.renderingStartTime > ho && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            Oo(s, !1),
                            t.lanes = 4194304);
                s.isBackwards ? (i.sibling = t.child,
                    t.child = i) : (n = s.last,
                        n !== null ? n.sibling = i : t.child = i,
                        s.last = i)
            }
            return s.tail !== null ? (t = s.tail,
                s.rendering = t,
                s.tail = t.sibling,
                s.renderingStartTime = Ee(),
                t.sibling = null,
                n = ge.current,
                de(ge, r ? n & 1 | 2 : n & 1),
                t) : ($e(t),
                    null);
        case 22:
        case 23:
            return Vu(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? ct & 1073741824 && ($e(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, t.tag))
}
function Zx(e, t) {
    switch (Nu(t),
    t.tag) {
        case 1:
            return rt(t.type) && Li(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return fo(),
                me(nt),
                me(We),
                Au(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return Ou(t),
                null;
        case 13:
            if (me(ge),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(T(340));
                co()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return me(ge),
                null;
        case 4:
            return fo(),
                null;
        case 10:
            return Pu(t.type._context),
                null;
        case 22:
        case 23:
            return Vu(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var qs = !1
    , Ue = !1
    , Jx = typeof WeakSet == "function" ? WeakSet : Set
    , D = null;
function $r(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Ce(e, t, r)
            }
        else
            n.current = null
}
function Cc(e, t, n) {
    try {
        n()
    } catch (r) {
        Ce(e, t, r)
    }
}
var kf = !1;
function ew(e, t) {
    if (sc = Oi,
        e = $h(),
        Cu(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                        , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                        , a = -1
                        , c = -1
                        , u = 0
                        , h = 0
                        , p = e
                        , d = null;
                    t: for (; ;) {
                        for (var w; p !== n || o !== 0 && p.nodeType !== 3 || (a = i + o),
                            p !== s || r !== 0 && p.nodeType !== 3 || (c = i + r),
                            p.nodeType === 3 && (i += p.nodeValue.length),
                            (w = p.firstChild) !== null;)
                            d = p,
                                p = w;
                        for (; ;) {
                            if (p === e)
                                break t;
                            if (d === n && ++u === o && (a = i),
                                d === s && ++h === r && (c = i),
                                (w = p.nextSibling) !== null)
                                break;
                            p = d,
                                d = p.parentNode
                        }
                        p = w
                    }
                    n = a === -1 || c === -1 ? null : {
                        start: a,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ic = {
        focusedElem: e,
        selectionRange: n
    },
        Oi = !1,
        D = t; D !== null;)
        if (t = D,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                D = e;
        else
            for (; D !== null;) {
                t = D;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (x !== null) {
                                    var m = x.memoizedProps
                                        , S = x.memoizedState
                                        , g = t.stateNode
                                        , f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Pt(t.type, m), S);
                                    g.__reactInternalSnapshotBeforeUpdate = f
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(T(163))
                        }
                } catch (C) {
                    Ce(t, t.return, C)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        D = e;
                    break
                }
                D = t.return
            }
    return x = kf,
        kf = !1,
        x
}
function Go(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                    s !== void 0 && Cc(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Sa(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function bc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Lm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Lm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[Kt],
                delete t[cs],
                delete t[cc],
                delete t[Lx],
                delete t[Dx])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Dm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function jf(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Dm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Nc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = Ii));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Nc(e, t, n),
            e = e.sibling; e !== null;)
            Nc(e, t, n),
                e = e.sibling
}
function Ec(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Ec(e, t, n),
            e = e.sibling; e !== null;)
            Ec(e, t, n),
                e = e.sibling
}
var Ie = null
    , Mt = !1;
function gn(e, t, n) {
    for (n = n.child; n !== null;)
        Fm(e, t, n),
            n = n.sibling
}
function Fm(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
        try {
            Yt.onCommitFiberUnmount(pa, n)
        } catch { }
    switch (n.tag) {
        case 5:
            Ue || $r(n, t);
        case 6:
            var r = Ie
                , o = Mt;
            Ie = null,
                gn(e, t, n),
                Ie = r,
                Mt = o,
                Ie !== null && (Mt ? (e = Ie,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
            break;
        case 18:
            Ie !== null && (Mt ? (e = Ie,
                n = n.stateNode,
                e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n),
                os(e)) : hl(Ie, n.stateNode));
            break;
        case 4:
            r = Ie,
                o = Mt,
                Ie = n.stateNode.containerInfo,
                Mt = !0,
                gn(e, t, n),
                Ie = r,
                Mt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ue && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                o = r = r.next;
                do {
                    var s = o
                        , i = s.destroy;
                    s = s.tag,
                        i !== void 0 && (s & 2 || s & 4) && Cc(n, t, i),
                        o = o.next
                } while (o !== r)
            }
            gn(e, t, n);
            break;
        case 1:
            if (!Ue && ($r(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    Ce(n, t, a)
                }
            gn(e, t, n);
            break;
        case 21:
            gn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null,
                gn(e, t, n),
                Ue = r) : gn(e, t, n);
            break;
        default:
            gn(e, t, n)
    }
}
function Pf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Jx),
            t.forEach(function (r) {
                var o = cw.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(o, o))
            })
    }
}
function kt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                    , i = t
                    , a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Ie = a.stateNode,
                                Mt = !1;
                            break e;
                        case 3:
                            Ie = a.stateNode.containerInfo,
                                Mt = !0;
                            break e;
                        case 4:
                            Ie = a.stateNode.containerInfo,
                                Mt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Ie === null)
                    throw Error(T(160));
                Fm(s, i, o),
                    Ie = null,
                    Mt = !1;
                var c = o.alternate;
                c !== null && (c.return = null),
                    o.return = null
            } catch (u) {
                Ce(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            zm(t, e),
                t = t.sibling
}
function zm(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (kt(t, e),
                $t(e),
                r & 4) {
                try {
                    Go(3, e, e.return),
                        Sa(3, e)
                } catch (m) {
                    Ce(e, e.return, m)
                }
                try {
                    Go(5, e, e.return)
                } catch (m) {
                    Ce(e, e.return, m)
                }
            }
            break;
        case 1:
            kt(t, e),
                $t(e),
                r & 512 && n !== null && $r(n, n.return);
            break;
        case 5:
            if (kt(t, e),
                $t(e),
                r & 512 && n !== null && $r(n, n.return),
                e.flags & 32) {
                var o = e.stateNode;
                try {
                    es(o, "")
                } catch (m) {
                    Ce(e, e.return, m)
                }
            }
            if (r & 4 && (o = e.stateNode,
                o != null)) {
                var s = e.memoizedProps
                    , i = n !== null ? n.memoizedProps : s
                    , a = e.type
                    , c = e.updateQueue;
                if (e.updateQueue = null,
                    c !== null)
                    try {
                        a === "input" && s.type === "radio" && s.name != null && ah(o, s),
                            Gl(a, i);
                        var u = Gl(a, s);
                        for (i = 0; i < c.length; i += 2) {
                            var h = c[i]
                                , p = c[i + 1];
                            h === "style" ? fh(o, p) : h === "dangerouslySetInnerHTML" ? uh(o, p) : h === "children" ? es(o, p) : cu(o, h, p, u)
                        }
                        switch (a) {
                            case "input":
                                Vl(o, s);
                                break;
                            case "textarea":
                                lh(o, s);
                                break;
                            case "select":
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!s.multiple;
                                var w = s.value;
                                w != null ? Ur(o, !!s.multiple, w, !1) : d !== !!s.multiple && (s.defaultValue != null ? Ur(o, !!s.multiple, s.defaultValue, !0) : Ur(o, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        o[cs] = s
                    } catch (m) {
                        Ce(e, e.return, m)
                    }
            }
            break;
        case 6:
            if (kt(t, e),
                $t(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(T(162));
                o = e.stateNode,
                    s = e.memoizedProps;
                try {
                    o.nodeValue = s
                } catch (m) {
                    Ce(e, e.return, m)
                }
            }
            break;
        case 3:
            if (kt(t, e),
                $t(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    os(t.containerInfo)
                } catch (m) {
                    Ce(e, e.return, m)
                }
            break;
        case 4:
            kt(t, e),
                $t(e);
            break;
        case 13:
            kt(t, e),
                $t(e),
                o = e.child,
                o.flags & 8192 && (s = o.memoizedState !== null,
                    o.stateNode.isHidden = s,
                    !s || o.alternate !== null && o.alternate.memoizedState !== null || (Uu = Ee())),
                r & 4 && Pf(e);
            break;
        case 22:
            if (h = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (Ue = (u = Ue) || h,
                    kt(t, e),
                    Ue = u) : kt(t, e),
                $t(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !h && e.mode & 1)
                    for (D = e,
                        h = e.child; h !== null;) {
                        for (p = D = h; D !== null;) {
                            switch (d = D,
                            w = d.child,
                            d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Go(4, d, d.return);
                                    break;
                                case 1:
                                    $r(d, d.return);
                                    var x = d.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = d,
                                            n = d.return;
                                        try {
                                            t = r,
                                                x.props = t.memoizedProps,
                                                x.state = t.memoizedState,
                                                x.componentWillUnmount()
                                        } catch (m) {
                                            Ce(r, n, m)
                                        }
                                    }
                                    break;
                                case 5:
                                    $r(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Rf(p);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = d,
                                D = w) : Rf(p)
                        }
                        h = h.sibling
                    }
                e: for (h = null,
                    p = e; ;) {
                    if (p.tag === 5) {
                        if (h === null) {
                            h = p;
                            try {
                                o = p.stateNode,
                                    u ? (s = o.style,
                                        typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = p.stateNode,
                                            c = p.memoizedProps.style,
                                            i = c != null && c.hasOwnProperty("display") ? c.display : null,
                                            a.style.display = dh("display", i))
                            } catch (m) {
                                Ce(e, e.return, m)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (h === null)
                            try {
                                p.stateNode.nodeValue = u ? "" : p.memoizedProps
                            } catch (m) {
                                Ce(e, e.return, m)
                            }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p,
                            p = p.child;
                        continue
                    }
                    if (p === e)
                        break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e)
                            break e;
                        h === p && (h = null),
                            p = p.return
                    }
                    h === p && (h = null),
                        p.sibling.return = p.return,
                        p = p.sibling
                }
            }
            break;
        case 19:
            kt(t, e),
                $t(e),
                r & 4 && Pf(e);
            break;
        case 21:
            break;
        default:
            kt(t, e),
                $t(e)
    }
}
function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Dm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (es(o, ""),
                        r.flags &= -33);
                    var s = jf(e);
                    Ec(e, s, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo
                        , a = jf(e);
                    Nc(e, a, i);
                    break;
                default:
                    throw Error(T(161))
            }
        } catch (c) {
            Ce(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function tw(e, t, n) {
    D = e,
        $m(e)
}
function $m(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null;) {
        var o = D
            , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || qs;
            if (!i) {
                var a = o.alternate
                    , c = a !== null && a.memoizedState !== null || Ue;
                a = qs;
                var u = Ue;
                if (qs = i,
                    (Ue = c) && !u)
                    for (D = o; D !== null;)
                        i = D,
                            c = i.child,
                            i.tag === 22 && i.memoizedState !== null ? Mf(o) : c !== null ? (c.return = i,
                                D = c) : Mf(o);
                for (; s !== null;)
                    D = s,
                        $m(s),
                        s = s.sibling;
                D = o,
                    qs = a,
                    Ue = u
            }
            Tf(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
                D = s) : Tf(e)
    }
}
function Tf(e) {
    for (; D !== null;) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ue || Sa(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ue)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var s = t.updateQueue;
                            s !== null && pf(t, s, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                pf(t, i, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var c = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        c.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        c.src && (n.src = c.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var h = u.memoizedState;
                                    if (h !== null) {
                                        var p = h.dehydrated;
                                        p !== null && os(p)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(T(163))
                    }
                Ue || t.flags & 512 && bc(t)
            } catch (d) {
                Ce(t, t.return, d)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                D = n;
            break
        }
        D = t.return
    }
}
function Rf(e) {
    for (; D !== null;) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                D = n;
            break
        }
        D = t.return
    }
}
function Mf(e) {
    for (; D !== null;) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Sa(4, t)
                    } catch (c) {
                        Ce(t, n, c)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (c) {
                            Ce(t, o, c)
                        }
                    }
                    var s = t.return;
                    try {
                        bc(t)
                    } catch (c) {
                        Ce(t, s, c)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        bc(t)
                    } catch (c) {
                        Ce(t, i, c)
                    }
            }
        } catch (c) {
            Ce(t, t.return, c)
        }
        if (t === e) {
            D = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                D = a;
            break
        }
        D = t.return
    }
}
var nw = Math.ceil
    , Ki = hn.ReactCurrentDispatcher
    , $u = hn.ReactCurrentOwner
    , bt = hn.ReactCurrentBatchConfig
    , J = 0
    , Ae = null
    , ke = null
    , Le = 0
    , ct = 0
    , Br = Gn(0)
    , Re = 0
    , ms = null
    , vr = 0
    , Ca = 0
    , Bu = 0
    , Xo = null
    , et = null
    , Uu = 0
    , ho = 1 / 0
    , tn = null
    , Qi = !1
    , kc = null
    , zn = null
    , Zs = !1
    , On = null
    , Yi = 0
    , qo = 0
    , jc = null
    , yi = -1
    , xi = 0;
function qe() {
    return J & 6 ? Ee() : yi !== -1 ? yi : yi = Ee()
}
function $n(e) {
    return e.mode & 1 ? J & 2 && Le !== 0 ? Le & -Le : zx.transition !== null ? (xi === 0 && (xi = Nh()),
        xi) : (e = le,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Mh(e.type)),
            e) : 1
}
function _t(e, t, n, r) {
    if (50 < qo)
        throw qo = 0,
        jc = null,
        Error(T(185));
    js(e, n, r),
        (!(J & 2) || e !== Ae) && (e === Ae && (!(J & 2) && (Ca |= n),
            Re === 4 && En(e, Le)),
            ot(e, r),
            n === 1 && J === 0 && !(t.mode & 1) && (ho = Ee() + 500,
                ya && Xn()))
}
function ot(e, t) {
    var n = e.callbackNode;
    z0(e, t);
    var r = Mi(e, e === Ae ? Le : 0);
    if (r === 0)
        n !== null && zd(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && zd(n),
            t === 1)
            e.tag === 0 ? Fx(Of.bind(null, e)) : Xh(Of.bind(null, e)),
                _x(function () {
                    !(J & 6) && Xn()
                }),
                n = null;
        else {
            switch (Eh(r)) {
                case 1:
                    n = hu;
                    break;
                case 4:
                    n = Ch;
                    break;
                case 16:
                    n = Ri;
                    break;
                case 536870912:
                    n = bh;
                    break;
                default:
                    n = Ri
            }
            n = Ym(n, Bm.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function Bm(e, t) {
    if (yi = -1,
        xi = 0,
        J & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (Qr() && e.callbackNode !== n)
        return null;
    var r = Mi(e, e === Ae ? Le : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Gi(e, r);
    else {
        t = r;
        var o = J;
        J |= 2;
        var s = Hm();
        (Ae !== e || Le !== t) && (tn = null,
            ho = Ee() + 500,
            ur(e, t));
        do
            try {
                sw();
                break
            } catch (a) {
                Um(e, a)
            }
        while (!0);
        ju(),
            Ki.current = s,
            J = o,
            ke !== null ? t = 0 : (Ae = null,
                Le = 0,
                t = Re)
    }
    if (t !== 0) {
        if (t === 2 && (o = ec(e),
            o !== 0 && (r = o,
                t = Pc(e, o))),
            t === 1)
            throw n = ms,
            ur(e, 0),
            En(e, r),
            ot(e, Ee()),
            n;
        if (t === 6)
            En(e, r);
        else {
            if (o = e.current.alternate,
                !(r & 30) && !rw(o) && (t = Gi(e, r),
                    t === 2 && (s = ec(e),
                        s !== 0 && (r = s,
                            t = Pc(e, s))),
                    t === 1))
                throw n = ms,
                ur(e, 0),
                En(e, r),
                ot(e, Ee()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    tr(e, et, tn);
                    break;
                case 3:
                    if (En(e, r),
                        (r & 130023424) === r && (t = Uu + 500 - Ee(),
                            10 < t)) {
                        if (Mi(e, 0) !== 0)
                            break;
                        if (o = e.suspendedLanes,
                            (o & r) !== r) {
                            qe(),
                                e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = lc(tr.bind(null, e, et, tn), t);
                        break
                    }
                    tr(e, et, tn);
                    break;
                case 4:
                    if (En(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        o = -1; 0 < r;) {
                        var i = 31 - At(r);
                        s = 1 << i,
                            i = t[i],
                            i > o && (o = i),
                            r &= ~s
                    }
                    if (r = o,
                        r = Ee() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nw(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = lc(tr.bind(null, e, et, tn), r);
                        break
                    }
                    tr(e, et, tn);
                    break;
                case 5:
                    tr(e, et, tn);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return ot(e, Ee()),
        e.callbackNode === n ? Bm.bind(null, e) : null
}
function Pc(e, t) {
    var n = Xo;
    return e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
        e = Gi(e, t),
        e !== 2 && (t = et,
            et = n,
            t !== null && Tc(t)),
        e
}
function Tc(e) {
    et === null ? et = e : et.push.apply(et, e)
}
function rw(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                        , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!It(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function En(e, t) {
    for (t &= ~Bu,
        t &= ~Ca,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - At(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Of(e) {
    if (J & 6)
        throw Error(T(327));
    Qr();
    var t = Mi(e, 0);
    if (!(t & 1))
        return ot(e, Ee()),
            null;
    var n = Gi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ec(e);
        r !== 0 && (t = r,
            n = Pc(e, r))
    }
    if (n === 1)
        throw n = ms,
        ur(e, 0),
        En(e, t),
        ot(e, Ee()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        tr(e, et, tn),
        ot(e, Ee()),
        null
}
function Hu(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
            J === 0 && (ho = Ee() + 500,
                ya && Xn())
    }
}
function gr(e) {
    On !== null && On.tag === 0 && !(J & 6) && Qr();
    var t = J;
    J |= 1;
    var n = bt.transition
        , r = le;
    try {
        if (bt.transition = null,
            le = 1,
            e)
            return e()
    } finally {
        le = r,
            bt.transition = n,
            J = t,
            !(J & 6) && Xn()
    }
}
function Vu() {
    ct = Br.current,
        me(Br)
}
function ur(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Ax(n)),
        ke !== null)
        for (n = ke.return; n !== null;) {
            var r = n;
            switch (Nu(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && Li();
                    break;
                case 3:
                    fo(),
                        me(nt),
                        me(We),
                        Au();
                    break;
                case 5:
                    Ou(r);
                    break;
                case 4:
                    fo();
                    break;
                case 13:
                    me(ge);
                    break;
                case 19:
                    me(ge);
                    break;
                case 10:
                    Pu(r.type._context);
                    break;
                case 22:
                case 23:
                    Vu()
            }
            n = n.return
        }
    if (Ae = e,
        ke = e = Bn(e.current, null),
        Le = ct = t,
        Re = 0,
        ms = null,
        Bu = Ca = vr = 0,
        et = Xo = null,
        rr !== null) {
        for (t = 0; t < rr.length; t++)
            if (n = rr[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var o = r.next
                    , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                        r.next = i
                }
                n.pending = r
            }
        rr = null
    }
    return e
}
function Um(e, t) {
    do {
        var n = ke;
        try {
            if (ju(),
                mi.current = Wi,
                Vi) {
                for (var r = ye.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                        r = r.next
                }
                Vi = !1
            }
            if (mr = 0,
                Oe = je = ye = null,
                Yo = !1,
                fs = 0,
                $u.current = null,
                n === null || n.return === null) {
                Re = 1,
                    ms = t,
                    ke = null;
                break
            }
            e: {
                var s = e
                    , i = n.return
                    , a = n
                    , c = t;
                if (t = Le,
                    a.flags |= 32768,
                    c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                        , h = a
                        , p = h.tag;
                    if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var d = h.alternate;
                        d ? (h.updateQueue = d.updateQueue,
                            h.memoizedState = d.memoizedState,
                            h.lanes = d.lanes) : (h.updateQueue = null,
                                h.memoizedState = null)
                    }
                    var w = xf(i);
                    if (w !== null) {
                        w.flags &= -257,
                            wf(w, i, a, s, t),
                            w.mode & 1 && yf(s, u, t),
                            t = w,
                            c = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var m = new Set;
                            m.add(c),
                                t.updateQueue = m
                        } else
                            x.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            yf(s, u, t),
                                Wu();
                            break e
                        }
                        c = Error(T(426))
                    }
                } else if (ve && a.mode & 1) {
                    var S = xf(i);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            wf(S, i, a, s, t),
                            Eu(po(c, a));
                        break e
                    }
                }
                s = c = po(c, a),
                    Re !== 4 && (Re = 2),
                    Xo === null ? Xo = [s] : Xo.push(s),
                    s = i;
                do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536,
                                t &= -t,
                                s.lanes |= t;
                            var g = Em(s, c, t);
                            ff(s, g);
                            break e;
                        case 1:
                            a = c;
                            var f = s.type
                                , y = s.stateNode;
                            if (!(s.flags & 128) && (typeof f.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (zn === null || !zn.has(y)))) {
                                s.flags |= 65536,
                                    t &= -t,
                                    s.lanes |= t;
                                var C = km(s, a, t);
                                ff(s, C);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            Wm(n)
        } catch (b) {
            t = b,
                ke === n && n !== null && (ke = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Hm() {
    var e = Ki.current;
    return Ki.current = Wi,
        e === null ? Wi : e
}
function Wu() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
        Ae === null || !(vr & 268435455) && !(Ca & 268435455) || En(Ae, Le)
}
function Gi(e, t) {
    var n = J;
    J |= 2;
    var r = Hm();
    (Ae !== e || Le !== t) && (tn = null,
        ur(e, t));
    do
        try {
            ow();
            break
        } catch (o) {
            Um(e, o)
        }
    while (!0);
    if (ju(),
        J = n,
        Ki.current = r,
        ke !== null)
        throw Error(T(261));
    return Ae = null,
        Le = 0,
        Re
}
function ow() {
    for (; ke !== null;)
        Vm(ke)
}
function sw() {
    for (; ke !== null && !R0();)
        Vm(ke)
}
function Vm(e) {
    var t = Qm(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps,
        t === null ? Wm(e) : ke = t,
        $u.current = null
}
function Wm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = Zx(n, t),
                n !== null) {
                n.flags &= 32767,
                    ke = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                Re = 6,
                    ke = null;
                return
            }
        } else if (n = qx(n, t, ct),
            n !== null) {
            ke = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            ke = t;
            return
        }
        ke = t = e
    } while (t !== null);
    Re === 0 && (Re = 5)
}
function tr(e, t, n) {
    var r = le
        , o = bt.transition;
    try {
        bt.transition = null,
            le = 1,
            iw(e, t, n, r)
    } finally {
        bt.transition = o,
            le = r
    }
    return null
}
function iw(e, t, n, r) {
    do
        Qr();
    while (On !== null);
    if (J & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if ($0(e, s),
        e === Ae && (ke = Ae = null,
            Le = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zs || (Zs = !0,
            Ym(Ri, function () {
                return Qr(),
                    null
            })),
        s = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || s) {
        s = bt.transition,
            bt.transition = null;
        var i = le;
        le = 1;
        var a = J;
        J |= 4,
            $u.current = null,
            ew(e, n),
            zm(n, e),
            kx(ic),
            Oi = !!sc,
            ic = sc = null,
            e.current = n,
            tw(n),
            M0(),
            J = a,
            le = i,
            bt.transition = s
    } else
        e.current = n;
    if (Zs && (Zs = !1,
        On = e,
        Yi = o),
        s = e.pendingLanes,
        s === 0 && (zn = null),
        _0(n.stateNode),
        ot(e, Ee()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            o = t[n],
                r(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
    if (Qi)
        throw Qi = !1,
        e = kc,
        kc = null,
        e;
    return Yi & 1 && e.tag !== 0 && Qr(),
        s = e.pendingLanes,
        s & 1 ? e === jc ? qo++ : (qo = 0,
            jc = e) : qo = 0,
        Xn(),
        null
}
function Qr() {
    if (On !== null) {
        var e = Eh(Yi)
            , t = bt.transition
            , n = le;
        try {
            if (bt.transition = null,
                le = 16 > e ? 16 : e,
                On === null)
                var r = !1;
            else {
                if (e = On,
                    On = null,
                    Yi = 0,
                    J & 6)
                    throw Error(T(331));
                var o = J;
                for (J |= 4,
                    D = e.current; D !== null;) {
                    var s = D
                        , i = s.child;
                    if (D.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var c = 0; c < a.length; c++) {
                                var u = a[c];
                                for (D = u; D !== null;) {
                                    var h = D;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Go(8, h, s)
                                    }
                                    var p = h.child;
                                    if (p !== null)
                                        p.return = h,
                                            D = p;
                                    else
                                        for (; D !== null;) {
                                            h = D;
                                            var d = h.sibling
                                                , w = h.return;
                                            if (Lm(h),
                                                h === u) {
                                                D = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = w,
                                                    D = d;
                                                break
                                            }
                                            D = w
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var m = x.child;
                                if (m !== null) {
                                    x.child = null;
                                    do {
                                        var S = m.sibling;
                                        m.sibling = null,
                                            m = S
                                    } while (m !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                            D = i;
                    else
                        e: for (; D !== null;) {
                            if (s = D,
                                s.flags & 2048)
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Go(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                    D = g;
                                break e
                            }
                            D = s.return
                        }
                }
                var f = e.current;
                for (D = f; D !== null;) {
                    i = D;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null)
                        y.return = i,
                            D = y;
                    else
                        e: for (i = f; D !== null;) {
                            if (a = D,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Sa(9, a)
                                    }
                                } catch (b) {
                                    Ce(a, a.return, b)
                                }
                            if (a === i) {
                                D = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                    D = C;
                                break e
                            }
                            D = a.return
                        }
                }
                if (J = o,
                    Xn(),
                    Yt && typeof Yt.onPostCommitFiberRoot == "function")
                    try {
                        Yt.onPostCommitFiberRoot(pa, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            le = n,
                bt.transition = t
        }
    }
    return !1
}
function Af(e, t, n) {
    t = po(n, t),
        t = Em(e, t, 1),
        e = Fn(e, t, 1),
        t = qe(),
        e !== null && (js(e, 1, t),
            ot(e, t))
}
function Ce(e, t, n) {
    if (e.tag === 3)
        Af(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Af(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r))) {
                    e = po(n, e),
                        e = km(t, e, 1),
                        t = Fn(t, e, 1),
                        e = qe(),
                        t !== null && (js(t, 1, e),
                            ot(t, e));
                    break
                }
            }
            t = t.return
        }
}
function aw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = qe(),
        e.pingedLanes |= e.suspendedLanes & n,
        Ae === e && (Le & n) === n && (Re === 4 || Re === 3 && (Le & 130023424) === Le && 500 > Ee() - Uu ? ur(e, 0) : Bu |= n),
        ot(e, t)
}
function Km(e, t) {
    t === 0 && (e.mode & 1 ? (t = Us,
        Us <<= 1,
        !(Us & 130023424) && (Us = 4194304)) : t = 1);
    var n = qe();
    e = un(e, t),
        e !== null && (js(e, t, n),
            ot(e, n))
}
function lw(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        Km(e, n)
}
function cw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    r !== null && r.delete(t),
        Km(e, n)
}
var Qm;
Qm = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || nt.current)
            tt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return tt = !1,
                    Xx(e, t, n);
            tt = !!(e.flags & 131072)
        }
    else
        tt = !1,
            ve && t.flags & 1048576 && qh(t, zi, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            gi(e, t),
                e = t.pendingProps;
            var o = lo(t, We.current);
            Kr(t, n),
                o = Iu(null, t, r, e, o, n);
            var s = Lu();
            return t.flags |= 1,
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    rt(r) ? (s = !0,
                        Di(t)) : s = !1,
                    t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
                    Ru(t),
                    o.updater = wa,
                    t.stateNode = o,
                    o._reactInternals = t,
                    mc(t, r, e, n),
                    t = yc(null, t, r, !0, s, n)) : (t.tag = 0,
                        ve && s && bu(t),
                        Ge(null, t, o, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (gi(e, t),
                e = t.pendingProps,
                o = r._init,
                r = o(r._payload),
                t.type = r,
                o = t.tag = dw(r),
                e = Pt(r, e),
                o) {
                    case 0:
                        t = gc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = bf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Sf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Cf(null, t, r, Pt(r.type, e), n);
                        break e
                }
                throw Error(T(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : Pt(r, o),
                gc(e, t, r, o, n);
        case 1:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : Pt(r, o),
                bf(e, t, r, o, n);
        case 3:
            e: {
                if (Rm(t),
                    e === null)
                    throw Error(T(387));
                r = t.pendingProps,
                    s = t.memoizedState,
                    o = s.element,
                    rm(e, t),
                    Ui(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element,
                    s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    },
                        t.updateQueue.baseState = s,
                        t.memoizedState = s,
                        t.flags & 256) {
                        o = po(Error(T(423)), t),
                            t = Nf(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                        o = po(Error(T(424)), t),
                            t = Nf(e, t, r, n, o);
                        break e
                    } else
                        for (dt = Dn(t.stateNode.containerInfo.firstChild),
                            ft = t,
                            ve = !0,
                            Ot = null,
                            n = tm(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (co(),
                        r === o) {
                        t = dn(e, t, n);
                        break e
                    }
                    Ge(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return om(t),
                e === null && fc(t),
                r = t.type,
                o = t.pendingProps,
                s = e !== null ? e.memoizedProps : null,
                i = o.children,
                ac(r, o) ? i = null : s !== null && ac(r, s) && (t.flags |= 32),
                Tm(e, t),
                Ge(e, t, i, n),
                t.child;
        case 6:
            return e === null && fc(t),
                null;
        case 13:
            return Mm(e, t, n);
        case 4:
            return Mu(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = uo(t, null, r, n) : Ge(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : Pt(r, o),
                Sf(e, t, r, o, n);
        case 7:
            return Ge(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return Ge(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return Ge(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    o = t.pendingProps,
                    s = t.memoizedProps,
                    i = o.value,
                    de($i, r._currentValue),
                    r._currentValue = i,
                    s !== null)
                    if (It(s.value, i)) {
                        if (s.children === o.children && !nt.current) {
                            t = dn(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child,
                            s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                i = s.child;
                                for (var c = a.firstContext; c !== null;) {
                                    if (c.context === r) {
                                        if (s.tag === 1) {
                                            c = an(-1, n & -n),
                                                c.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var h = u.pending;
                                                h === null ? c.next = c : (c.next = h.next,
                                                    h.next = c),
                                                    u.pending = c
                                            }
                                        }
                                        s.lanes |= n,
                                            c = s.alternate,
                                            c !== null && (c.lanes |= n),
                                            pc(s.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    c = c.next
                                }
                            } else if (s.tag === 10)
                                i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (i = s.return,
                                    i === null)
                                    throw Error(T(341));
                                i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    pc(i, n, t),
                                    i = s.sibling
                            } else
                                i = s.child;
                            if (i !== null)
                                i.return = s;
                            else
                                for (i = s; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (s = i.sibling,
                                        s !== null) {
                                        s.return = i.return,
                                            i = s;
                                        break
                                    }
                                    i = i.return
                                }
                            s = i
                        }
                Ge(e, t, o.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return o = t.type,
                r = t.pendingProps.children,
                Kr(t, n),
                o = Nt(o),
                r = r(o),
                t.flags |= 1,
                Ge(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                o = Pt(r, t.pendingProps),
                o = Pt(r.type, o),
                Cf(e, t, r, o, n);
        case 15:
            return jm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                o = t.pendingProps,
                o = t.elementType === r ? o : Pt(r, o),
                gi(e, t),
                t.tag = 1,
                rt(r) ? (e = !0,
                    Di(t)) : e = !1,
                Kr(t, n),
                Nm(t, r, o),
                mc(t, r, o, n),
                yc(null, t, r, !0, e, n);
        case 19:
            return Om(e, t, n);
        case 22:
            return Pm(e, t, n)
    }
    throw Error(T(156, t.tag))
}
    ;
function Ym(e, t) {
    return Sh(e, t)
}
function uw(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Ct(e, t, n, r) {
    return new uw(e, t, n, r)
}
function Ku(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function dw(e) {
    if (typeof e == "function")
        return Ku(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === du)
            return 11;
        if (e === fu)
            return 14
    }
    return 2
}
function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ct(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function wi(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
        typeof e == "function")
        Ku(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
            case Mr:
                return dr(n.children, o, s, t);
            case uu:
                i = 8,
                    o |= 8;
                break;
            case zl:
                return e = Ct(12, n, t, o | 2),
                    e.elementType = zl,
                    e.lanes = s,
                    e;
            case $l:
                return e = Ct(13, n, t, o),
                    e.elementType = $l,
                    e.lanes = s,
                    e;
            case Bl:
                return e = Ct(19, n, t, o),
                    e.elementType = Bl,
                    e.lanes = s,
                    e;
            case oh:
                return ba(n, o, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case nh:
                            i = 10;
                            break e;
                        case rh:
                            i = 9;
                            break e;
                        case du:
                            i = 11;
                            break e;
                        case fu:
                            i = 14;
                            break e;
                        case Cn:
                            i = 16,
                                r = null;
                            break e
                    }
                throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = Ct(i, n, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = s,
        t
}
function dr(e, t, n, r) {
    return e = Ct(7, e, r, t),
        e.lanes = n,
        e
}
function ba(e, t, n, r) {
    return e = Ct(22, e, r, t),
        e.elementType = oh,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Cl(e, t, n) {
    return e = Ct(6, e, null, t),
        e.lanes = n,
        e
}
function bl(e, t, n) {
    return t = Ct(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function fw(e, t, n, r, o) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = rl(0),
        this.expirationTimes = rl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = rl(0),
        this.identifierPrefix = r,
        this.onRecoverableError = o,
        this.mutableSourceEagerHydrationData = null
}
function Qu(e, t, n, r, o, s, i, a, c) {
    return e = new fw(e, t, n, a, c),
        t === 1 ? (t = 1,
            s === !0 && (t |= 8)) : t = 0,
        s = Ct(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Ru(s),
        e
}
function pw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Gm(e) {
    if (!e)
        return Hn;
    e = e._reactInternals;
    e: {
        if (Sr(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (rt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (rt(n))
            return Gh(e, n, t)
    }
    return t
}
function Xm(e, t, n, r, o, s, i, a, c) {
    return e = Qu(n, r, !0, e, o, s, i, a, c),
        e.context = Gm(null),
        n = e.current,
        r = qe(),
        o = $n(n),
        s = an(r, o),
        s.callback = t ?? null,
        Fn(n, s, o),
        e.current.lanes = o,
        js(e, o, r),
        ot(e, r),
        e
}
function Na(e, t, n, r) {
    var o = t.current
        , s = qe()
        , i = $n(o);
    return n = Gm(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = an(s, i),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Fn(o, t, i),
        e !== null && (_t(e, o, i, s),
            hi(e, o, i)),
        i
}
function Xi(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function _f(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Yu(e, t) {
    _f(e, t),
        (e = e.alternate) && _f(e, t)
}
function hw() {
    return null
}
var qm = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function Gu(e) {
    this._internalRoot = e
}
Ea.prototype.render = Gu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    Na(e, t, null, null)
}
    ;
Ea.prototype.unmount = Gu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gr(function () {
            Na(null, e, null, null)
        }),
            t[cn] = null
    }
}
    ;
function Ea(e) {
    this._internalRoot = e
}
Ea.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ph();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++)
            ;
        Nn.splice(n, 0, e),
            n === 0 && Rh(e)
    }
}
    ;
function Xu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function If() { }
function mw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var u = Xi(i);
                s.call(u)
            }
        }
        var i = Xm(t, r, e, 0, null, !1, !1, "", If);
        return e._reactRootContainer = i,
            e[cn] = i.current,
            as(e.nodeType === 8 ? e.parentNode : e),
            gr(),
            i
    }
    for (; o = e.lastChild;)
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Xi(c);
            a.call(u)
        }
    }
    var c = Qu(e, 0, !1, null, null, !1, !1, "", If);
    return e._reactRootContainer = c,
        e[cn] = c.current,
        as(e.nodeType === 8 ? e.parentNode : e),
        gr(function () {
            Na(t, c, n, r)
        }),
        c
}
function ja(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var c = Xi(i);
                a.call(c)
            }
        }
        Na(t, i, e, o)
    } else
        i = mw(n, t, e, o, r);
    return Xi(i)
}
kh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = zo(t.pendingLanes);
                n !== 0 && (mu(t, n | 1),
                    ot(t, Ee()),
                    !(J & 6) && (ho = Ee() + 500,
                        Xn()))
            }
            break;
        case 13:
            gr(function () {
                var r = un(e, 1);
                if (r !== null) {
                    var o = qe();
                    _t(r, e, 1, o)
                }
            }),
                Yu(e, 1)
    }
}
    ;
vu = function (e) {
    if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
            var n = qe();
            _t(t, e, 134217728, n)
        }
        Yu(e, 134217728)
    }
}
    ;
jh = function (e) {
    if (e.tag === 13) {
        var t = $n(e)
            , n = un(e, t);
        if (n !== null) {
            var r = qe();
            _t(n, e, t, r)
        }
        Yu(e, t)
    }
}
    ;
Ph = function () {
    return le
}
    ;
Th = function (e, t) {
    var n = le;
    try {
        return le = e,
            t()
    } finally {
        le = n
    }
}
    ;
ql = function (e, t, n) {
    switch (t) {
        case "input":
            if (Vl(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ga(r);
                        if (!o)
                            throw Error(T(90));
                        ih(r),
                            Vl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            lh(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Ur(e, !!n.multiple, t, !1)
    }
}
    ;
mh = Hu;
vh = gr;
var vw = {
    usingClientEntryPoint: !1,
    Events: [Ts, Ir, ga, ph, hh, Hu]
}
    , Ao = {
        findFiberByHostInstance: nr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , gw = {
        bundleType: Ao.bundleType,
        version: Ao.version,
        rendererPackageName: Ao.rendererPackageName,
        rendererConfig: Ao.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: hn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = xh(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ao.findFiberByHostInstance || hw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
        try {
            pa = Js.inject(gw),
                Yt = Js
        } catch { }
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vw;
vt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xu(t))
        throw Error(T(200));
    return pw(e, t, null, n)
}
    ;
vt.createRoot = function (e, t) {
    if (!Xu(e))
        throw Error(T(299));
    var n = !1
        , r = ""
        , o = qm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        t = Qu(e, 1, !1, null, null, n, !1, r, o),
        e[cn] = t.current,
        as(e.nodeType === 8 ? e.parentNode : e),
        new Gu(t)
}
    ;
vt.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
            Error(T(268, e)));
    return e = xh(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
vt.flushSync = function (e) {
    return gr(e)
}
    ;
vt.hydrate = function (e, t, n) {
    if (!ka(t))
        throw Error(T(200));
    return ja(null, e, t, !0, n)
}
    ;
vt.hydrateRoot = function (e, t, n) {
    if (!Xu(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
        , o = !1
        , s = ""
        , i = qm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        t = Xm(t, null, e, 1, n ?? null, o, !1, s, i),
        e[cn] = t.current,
        as(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                o = n._getVersion,
                o = o(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ea(t)
}
    ;
vt.render = function (e, t, n) {
    if (!ka(t))
        throw Error(T(200));
    return ja(null, e, t, !1, n)
}
    ;
vt.unmountComponentAtNode = function (e) {
    if (!ka(e))
        throw Error(T(40));
    return e._reactRootContainer ? (gr(function () {
        ja(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[cn] = null
        })
    }),
        !0) : !1
}
    ;
vt.unstable_batchedUpdates = Hu;
vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ka(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return ja(e, t, n, !1, r)
}
    ;
vt.version = "18.3.1-next-f1338f8080-20240426";
function Zm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm)
        } catch (e) {
            console.error(e)
        }
}
Zm(),
    Zp.exports = vt;
var Cr = Zp.exports;
const Jm = zp(Cr);
var ev, Lf = Cr;
ev = Lf.createRoot,
    Lf.hydrateRoot;
const yw = 1
    , xw = 1e6;
let Nl = 0;
function ww() {
    return Nl = (Nl + 1) % Number.MAX_SAFE_INTEGER,
        Nl.toString()
}
const El = new Map
    , Df = e => {
        if (El.has(e))
            return;
        const t = setTimeout(() => {
            El.delete(e),
                Zo({
                    type: "REMOVE_TOAST",
                    toastId: e
                })
        }
            , xw);
        El.set(e, t)
    }
    , Sw = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, yw)
                };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? {
                        ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const { toastId: n } = t;
                    return n ? Df(n) : e.toasts.forEach(r => {
                        Df(r.id)
                    }
                    ),
                    {
                        ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                            ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    }
    , Si = [];
let Ci = {
    toasts: []
};
function Zo(e) {
    Ci = Sw(Ci, e),
        Si.forEach(t => {
            t(Ci)
        }
        )
}
function Cw({ ...e }) {
    const t = ww()
        , n = o => Zo({
            type: "UPDATE_TOAST",
            toast: {
                ...o,
                id: t
            }
        })
        , r = () => Zo({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Zo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Pa() {
    const [e, t] = v.useState(Ci);
    return v.useEffect(() => (Si.push(t),
        () => {
            const n = Si.indexOf(t);
            n > -1 && Si.splice(n, 1)
        }
    ), [e]),
    {
        ...e,
        toast: Cw,
        dismiss: n => Zo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if (e == null || e(o),
            n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function bw(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function tv(...e) {
    return t => e.forEach(n => bw(n, t))
}
function be(...e) {
    return v.useCallback(tv(...e), e)
}
function Nw(e, t = []) {
    let n = [];
    function r(s, i) {
        const a = v.createContext(i)
            , c = n.length;
        n = [...n, i];
        function u(p) {
            const { scope: d, children: w, ...x } = p
                , m = (d == null ? void 0 : d[e][c]) || a
                , S = v.useMemo(() => x, Object.values(x));
            return l.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        function h(p, d) {
            const w = (d == null ? void 0 : d[e][c]) || a
                , x = v.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
            [u, h]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function (a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    }
        ;
    return o.scopeName = e,
        [r, Ew(o, ...t)]
}
function Ew(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (s) {
            const i = r.reduce((a, { useScope: c, scopeName: u }) => {
                const p = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...p
                }
            }
                , {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
var mo = v.forwardRef((e, t) => {
    const { children: n, ...r } = e
        , o = v.Children.toArray(n)
        , s = o.find(kw);
    if (s) {
        const i = s.props.children
            , a = o.map(c => c === s ? v.Children.count(i) > 1 ? v.Children.only(null) : v.isValidElement(i) ? i.props.children : null : c);
        return l.jsx(Rc, {
            ...r,
            ref: t,
            children: v.isValidElement(i) ? v.cloneElement(i, void 0, a) : null
        })
    }
    return l.jsx(Rc, {
        ...r,
        ref: t,
        children: n
    })
}
);
mo.displayName = "Slot";
var Rc = v.forwardRef((e, t) => {
    const { children: n, ...r } = e;
    if (v.isValidElement(n)) {
        const o = Pw(n);
        return v.cloneElement(n, {
            ...jw(r, n.props),
            ref: t ? tv(t, o) : o
        })
    }
    return v.Children.count(n) > 1 ? v.Children.only(null) : null
}
);
Rc.displayName = "SlotClone";
var nv = ({ children: e }) => l.jsx(l.Fragment, {
    children: e
});
function kw(e) {
    return v.isValidElement(e) && e.type === nv
}
function jw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
            , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            s(...a),
                o(...a)
        }
            : o && (n[r] = o) : r === "style" ? n[r] = {
                ...o,
                ...s
            } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Pw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
function rv(e) {
    const t = e + "CollectionProvider"
        , [n, r] = Nw(t)
        , [o, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        })
        , i = w => {
            const { scope: x, children: m } = w
                , S = M.useRef(null)
                , g = M.useRef(new Map).current;
            return l.jsx(o, {
                scope: x,
                itemMap: g,
                collectionRef: S,
                children: m
            })
        }
        ;
    i.displayName = t;
    const a = e + "CollectionSlot"
        , c = M.forwardRef((w, x) => {
            const { scope: m, children: S } = w
                , g = s(a, m)
                , f = be(x, g.collectionRef);
            return l.jsx(mo, {
                ref: f,
                children: S
            })
        }
        );
    c.displayName = a;
    const u = e + "CollectionItemSlot"
        , h = "data-radix-collection-item"
        , p = M.forwardRef((w, x) => {
            const { scope: m, children: S, ...g } = w
                , f = M.useRef(null)
                , y = be(x, f)
                , C = s(u, m);
            return M.useEffect(() => (C.itemMap.set(f, {
                ref: f,
                ...g
            }),
                () => void C.itemMap.delete(f))),
                l.jsx(mo, {
                    [h]: "",
                    ref: y,
                    children: S
                })
        }
        );
    p.displayName = u;
    function d(w) {
        const x = s(e + "CollectionConsumer", w);
        return M.useCallback(() => {
            const S = x.collectionRef.current;
            if (!S)
                return [];
            const g = Array.from(S.querySelectorAll(`[${h}]`));
            return Array.from(x.itemMap.values()).sort((C, b) => g.indexOf(C.ref.current) - g.indexOf(b.ref.current))
        }
            , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: i,
        Slot: c,
        ItemSlot: p
    }, d, r]
}
function qu(e, t = []) {
    let n = [];
    function r(s, i) {
        const a = v.createContext(i)
            , c = n.length;
        n = [...n, i];
        const u = p => {
            var g;
            const { scope: d, children: w, ...x } = p
                , m = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[c]) || a
                , S = v.useMemo(() => x, Object.values(x));
            return l.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
            ;
        u.displayName = s + "Provider";
        function h(p, d) {
            var m;
            const w = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[c]) || a
                , x = v.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [u, h]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function (a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    }
        ;
    return o.scopeName = e,
        [r, Tw(o, ...t)]
}
function Tw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (s) {
            const i = r.reduce((a, { useScope: c, scopeName: u }) => {
                const p = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...p
                }
            }
                , {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
var Rw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
    , re = Rw.reduce((e, t) => {
        const n = v.forwardRef((r, o) => {
            const { asChild: s, ...i } = r
                , a = s ? mo : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
                l.jsx(a, {
                    ...i,
                    ref: o
                })
        }
        );
        return n.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: n
        }
    }
        , {});
function ov(e, t) {
    e && Cr.flushSync(() => e.dispatchEvent(t))
}
function mt(e) {
    const t = v.useRef(e);
    return v.useEffect(() => {
        t.current = e
    }
    ),
        v.useMemo(() => (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n)
        }
            , [])
}
function Mw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = mt(e);
    v.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
            ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
            () => t.removeEventListener("keydown", r, {
                capture: !0
            })
    }
        , [n, t])
}
var Ow = "DismissableLayer", Mc = "dismissableLayer.update", Aw = "dismissableLayer.pointerDownOutside", _w = "dismissableLayer.focusOutside", Ff, sv = v.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ta = v.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...c } = e
        , u = v.useContext(sv)
        , [h, p] = v.useState(null)
        , d = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
        , [, w] = v.useState({})
        , x = be(t, E => p(E))
        , m = Array.from(u.layers)
        , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
        , g = m.indexOf(S)
        , f = h ? m.indexOf(h) : -1
        , y = u.layersWithOutsidePointerEventsDisabled.size > 0
        , C = f >= g
        , b = Lw(E => {
            const j = E.target
                , _ = [...u.branches].some(A => A.contains(j));
            !C || _ || (o == null || o(E),
                i == null || i(E),
                E.defaultPrevented || a == null || a())
        }
            , d)
        , k = Dw(E => {
            const j = E.target;
            [...u.branches].some(A => A.contains(j)) || (s == null || s(E),
                i == null || i(E),
                E.defaultPrevented || a == null || a())
        }
            , d);
    return Mw(E => {
        f === u.layers.size - 1 && (r == null || r(E),
            !E.defaultPrevented && a && (E.preventDefault(),
                a()))
    }
        , d),
        v.useEffect(() => {
            if (h)
                return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ff = d.body.style.pointerEvents,
                    d.body.style.pointerEvents = "none"),
                    u.layersWithOutsidePointerEventsDisabled.add(h)),
                    u.layers.add(h),
                    zf(),
                    () => {
                        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Ff)
                    }
        }
            , [h, d, n, u]),
        v.useEffect(() => () => {
            h && (u.layers.delete(h),
                u.layersWithOutsidePointerEventsDisabled.delete(h),
                zf())
        }
            , [h, u]),
        v.useEffect(() => {
            const E = () => w({});
            return document.addEventListener(Mc, E),
                () => document.removeEventListener(Mc, E)
        }
            , []),
        l.jsx(re.div, {
            ...c,
            ref: x,
            style: {
                pointerEvents: y ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: q(e.onFocusCapture, k.onFocusCapture),
            onBlurCapture: q(e.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: q(e.onPointerDownCapture, b.onPointerDownCapture)
        })
}
);
Ta.displayName = Ow;
var Iw = "DismissableLayerBranch"
    , iv = v.forwardRef((e, t) => {
        const n = v.useContext(sv)
            , r = v.useRef(null)
            , o = be(t, r);
        return v.useEffect(() => {
            const s = r.current;
            if (s)
                return n.branches.add(s),
                    () => {
                        n.branches.delete(s)
                    }
        }
            , [n.branches]),
            l.jsx(re.div, {
                ...e,
                ref: o
            })
    }
    );
iv.displayName = Iw;
function Lw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = mt(e)
        , r = v.useRef(!1)
        , o = v.useRef(() => { }
        );
    return v.useEffect(() => {
        const s = a => {
            if (a.target && !r.current) {
                let c = function () {
                    av(Aw, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                    o.current = c,
                    t.addEventListener("click", o.current, {
                        once: !0
                    })) : c()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
            , i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }
                , 0);
        return () => {
            window.clearTimeout(i),
                t.removeEventListener("pointerdown", s),
                t.removeEventListener("click", o.current)
        }
    }
        , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Dw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = mt(e)
        , r = v.useRef(!1);
    return v.useEffect(() => {
        const o = s => {
            s.target && !r.current && av(_w, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
            ;
        return t.addEventListener("focusin", o),
            () => t.removeEventListener("focusin", o)
    }
        , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function zf() {
    const e = new CustomEvent(Mc);
    document.dispatchEvent(e)
}
function av(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target
        , s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? ov(o, s) : o.dispatchEvent(s)
}
var Fw = Ta
    , zw = iv
    , Ke = globalThis != null && globalThis.document ? v.useLayoutEffect : () => { }
    , $w = "Portal"
    , Zu = v.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e
            , [o, s] = v.useState(!1);
        Ke(() => s(!0), []);
        const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return i ? Jm.createPortal(l.jsx(re.div, {
            ...r,
            ref: t
        }), i) : null
    }
    );
Zu.displayName = $w;
function Bw(e, t) {
    return v.useReducer((n, r) => t[n][r] ?? n, e)
}
var Ju = e => {
    const { present: t, children: n } = e
        , r = Uw(t)
        , o = typeof n == "function" ? n({
            present: r.isPresent
        }) : v.Children.only(n)
        , s = be(r.ref, Hw(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: s
    }) : null
}
    ;
Ju.displayName = "Presence";
function Uw(e) {
    const [t, n] = v.useState()
        , r = v.useRef({})
        , o = v.useRef(e)
        , s = v.useRef("none")
        , i = e ? "mounted" : "unmounted"
        , [a, c] = Bw(i, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
    return v.useEffect(() => {
        const u = ei(r.current);
        s.current = a === "mounted" ? u : "none"
    }
        , [a]),
        Ke(() => {
            const u = r.current
                , h = o.current;
            if (h !== e) {
                const d = s.current
                    , w = ei(u);
                e ? c("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(h && d !== w ? "ANIMATION_OUT" : "UNMOUNT"),
                    o.current = e
            }
        }
            , [e, c]),
        Ke(() => {
            if (t) {
                let u;
                const h = t.ownerDocument.defaultView ?? window
                    , p = w => {
                        const m = ei(r.current).includes(w.animationName);
                        if (w.target === t && m && (c("ANIMATION_END"),
                            !o.current)) {
                            const S = t.style.animationFillMode;
                            t.style.animationFillMode = "forwards",
                                u = h.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                                }
                                )
                        }
                    }
                    , d = w => {
                        w.target === t && (s.current = ei(r.current))
                    }
                    ;
                return t.addEventListener("animationstart", d),
                    t.addEventListener("animationcancel", p),
                    t.addEventListener("animationend", p),
                    () => {
                        h.clearTimeout(u),
                            t.removeEventListener("animationstart", d),
                            t.removeEventListener("animationcancel", p),
                            t.removeEventListener("animationend", p)
                    }
            } else
                c("ANIMATION_END")
        }
            , [t, c]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: v.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
                n(u)
        }
            , [])
    }
}
function ei(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Hw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
function Oc({ prop: e, defaultProp: t, onChange: n = () => { }
}) {
    const [r, o] = Vw({
        defaultProp: t,
        onChange: n
    })
        , s = e !== void 0
        , i = s ? e : r
        , a = mt(n)
        , c = v.useCallback(u => {
            if (s) {
                const p = typeof u == "function" ? u(e) : u;
                p !== e && a(p)
            } else
                o(u)
        }
            , [s, e, o, a]);
    return [i, c]
}
function Vw({ defaultProp: e, onChange: t }) {
    const n = v.useState(e)
        , [r] = n
        , o = v.useRef(r)
        , s = mt(t);
    return v.useEffect(() => {
        o.current !== r && (s(r),
            o.current = r)
    }
        , [r, o, s]),
        n
}
var Ww = "VisuallyHidden"
    , Ms = v.forwardRef((e, t) => l.jsx(re.span, {
        ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
Ms.displayName = Ww;
var Kw = Ms
    , ed = "ToastProvider"
    , [td, Qw, Yw] = rv("Toast")
    , [lv, SE] = qu("Toast", [Yw])
    , [Gw, Ra] = lv(ed)
    , cv = e => {
        const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: s = 50, children: i } = e
            , [a, c] = v.useState(null)
            , [u, h] = v.useState(0)
            , p = v.useRef(!1)
            , d = v.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ed}\`. Expected non-empty \`string\`.`),
            l.jsx(td.Provider, {
                scope: t,
                children: l.jsx(Gw, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: s,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: c,
                    onToastAdd: v.useCallback(() => h(w => w + 1), []),
                    onToastRemove: v.useCallback(() => h(w => w - 1), []),
                    isFocusedToastEscapeKeyDownRef: p,
                    isClosePausedRef: d,
                    children: i
                })
            })
    }
    ;
cv.displayName = ed;
var uv = "ToastViewport"
    , Xw = ["F8"]
    , Ac = "toast.viewportPause"
    , _c = "toast.viewportResume"
    , dv = v.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = Xw, label: o = "Notifications ({hotkey})", ...s } = e
            , i = Ra(uv, n)
            , a = Qw(n)
            , c = v.useRef(null)
            , u = v.useRef(null)
            , h = v.useRef(null)
            , p = v.useRef(null)
            , d = be(t, p, i.onViewportChange)
            , w = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
            , x = i.toastCount > 0;
        v.useEffect(() => {
            const S = g => {
                var y;
                r.length !== 0 && r.every(C => g[C] || g.code === C) && ((y = p.current) == null || y.focus())
            }
                ;
            return document.addEventListener("keydown", S),
                () => document.removeEventListener("keydown", S)
        }
            , [r]),
            v.useEffect(() => {
                const S = c.current
                    , g = p.current;
                if (x && S && g) {
                    const f = () => {
                        if (!i.isClosePausedRef.current) {
                            const k = new CustomEvent(Ac);
                            g.dispatchEvent(k),
                                i.isClosePausedRef.current = !0
                        }
                    }
                        , y = () => {
                            if (i.isClosePausedRef.current) {
                                const k = new CustomEvent(_c);
                                g.dispatchEvent(k),
                                    i.isClosePausedRef.current = !1
                            }
                        }
                        , C = k => {
                            !S.contains(k.relatedTarget) && y()
                        }
                        , b = () => {
                            S.contains(document.activeElement) || y()
                        }
                        ;
                    return S.addEventListener("focusin", f),
                        S.addEventListener("focusout", C),
                        S.addEventListener("pointermove", f),
                        S.addEventListener("pointerleave", b),
                        window.addEventListener("blur", f),
                        window.addEventListener("focus", y),
                        () => {
                            S.removeEventListener("focusin", f),
                                S.removeEventListener("focusout", C),
                                S.removeEventListener("pointermove", f),
                                S.removeEventListener("pointerleave", b),
                                window.removeEventListener("blur", f),
                                window.removeEventListener("focus", y)
                        }
                }
            }
                , [x, i.isClosePausedRef]);
        const m = v.useCallback(({ tabbingDirection: S }) => {
            const f = a().map(y => {
                const C = y.ref.current
                    , b = [C, ...c1(C)];
                return S === "forwards" ? b : b.reverse()
            }
            );
            return (S === "forwards" ? f.reverse() : f).flat()
        }
            , [a]);
        return v.useEffect(() => {
            const S = p.current;
            if (S) {
                const g = f => {
                    var b, k, E;
                    const y = f.altKey || f.ctrlKey || f.metaKey;
                    if (f.key === "Tab" && !y) {
                        const j = document.activeElement
                            , _ = f.shiftKey;
                        if (f.target === S && _) {
                            (b = u.current) == null || b.focus();
                            return
                        }
                        const L = m({
                            tabbingDirection: _ ? "backwards" : "forwards"
                        })
                            , H = L.findIndex(O => O === j);
                        kl(L.slice(H + 1)) ? f.preventDefault() : _ ? (k = u.current) == null || k.focus() : (E = h.current) == null || E.focus()
                    }
                }
                    ;
                return S.addEventListener("keydown", g),
                    () => S.removeEventListener("keydown", g)
            }
        }
            , [a, m]),
            l.jsxs(zw, {
                ref: c,
                role: "region",
                "aria-label": o.replace("{hotkey}", w),
                tabIndex: -1,
                style: {
                    pointerEvents: x ? void 0 : "none"
                },
                children: [x && l.jsx(Ic, {
                    ref: u,
                    onFocusFromOutsideViewport: () => {
                        const S = m({
                            tabbingDirection: "forwards"
                        });
                        kl(S)
                    }
                }), l.jsx(td.Slot, {
                    scope: n,
                    children: l.jsx(re.ol, {
                        tabIndex: -1,
                        ...s,
                        ref: d
                    })
                }), x && l.jsx(Ic, {
                    ref: h,
                    onFocusFromOutsideViewport: () => {
                        const S = m({
                            tabbingDirection: "backwards"
                        });
                        kl(S)
                    }
                })]
            })
    }
    );
dv.displayName = uv;
var fv = "ToastFocusProxy"
    , Ic = v.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e
            , s = Ra(fv, n);
        return l.jsx(Ms, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: i => {
                var u;
                const a = i.relatedTarget;
                !((u = s.viewport) != null && u.contains(a)) && r()
            }
        })
    }
    );
Ic.displayName = fv;
var Ma = "Toast"
    , qw = "toast.swipeStart"
    , Zw = "toast.swipeMove"
    , Jw = "toast.swipeCancel"
    , e1 = "toast.swipeEnd"
    , pv = v.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e
            , [a = !0, c] = Oc({
                prop: r,
                defaultProp: o,
                onChange: s
            });
        return l.jsx(Ju, {
            present: n || a,
            children: l.jsx(r1, {
                open: a,
                ...i,
                ref: t,
                onClose: () => c(!1),
                onPause: mt(e.onPause),
                onResume: mt(e.onResume),
                onSwipeStart: q(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }
                ),
                onSwipeMove: q(e.onSwipeMove, u => {
                    const { x: h, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${h}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
                }
                ),
                onSwipeCancel: q(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }
                ),
                onSwipeEnd: q(e.onSwipeEnd, u => {
                    const { x: h, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${h}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                        c(!1)
                }
                )
            })
        })
    }
    );
pv.displayName = Ma;
var [t1, n1] = lv(Ma, {
    onClose() { }
})
    , r1 = v.forwardRef((e, t) => {
        const { __scopeToast: n, type: r = "foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: c, onResume: u, onSwipeStart: h, onSwipeMove: p, onSwipeCancel: d, onSwipeEnd: w, ...x } = e
            , m = Ra(Ma, n)
            , [S, g] = v.useState(null)
            , f = be(t, O => g(O))
            , y = v.useRef(null)
            , C = v.useRef(null)
            , b = o || m.duration
            , k = v.useRef(0)
            , E = v.useRef(b)
            , j = v.useRef(0)
            , { onToastAdd: _, onToastRemove: A } = m
            , $ = mt(() => {
                var W;
                (S == null ? void 0 : S.contains(document.activeElement)) && ((W = m.viewport) == null || W.focus()),
                    i()
            }
            )
            , L = v.useCallback(O => {
                !O || O === 1 / 0 || (window.clearTimeout(j.current),
                    k.current = new Date().getTime(),
                    j.current = window.setTimeout($, O))
            }
                , [$]);
        v.useEffect(() => {
            const O = m.viewport;
            if (O) {
                const W = () => {
                    L(E.current),
                        u == null || u()
                }
                    , F = () => {
                        const V = new Date().getTime() - k.current;
                        E.current = E.current - V,
                            window.clearTimeout(j.current),
                            c == null || c()
                    }
                    ;
                return O.addEventListener(Ac, F),
                    O.addEventListener(_c, W),
                    () => {
                        O.removeEventListener(Ac, F),
                            O.removeEventListener(_c, W)
                    }
            }
        }
            , [m.viewport, b, c, u, L]),
            v.useEffect(() => {
                s && !m.isClosePausedRef.current && L(b)
            }
                , [s, b, m.isClosePausedRef, L]),
            v.useEffect(() => (_(),
                () => A()), [_, A]);
        const H = v.useMemo(() => S ? wv(S) : null, [S]);
        return m.viewport ? l.jsxs(l.Fragment, {
            children: [H && l.jsx(o1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: H
            }), l.jsx(t1, {
                scope: n,
                onClose: $,
                children: Cr.createPortal(l.jsx(td.ItemSlot, {
                    scope: n,
                    children: l.jsx(Fw, {
                        asChild: !0,
                        onEscapeKeyDown: q(a, () => {
                            m.isFocusedToastEscapeKeyDownRef.current || $(),
                                m.isFocusedToastEscapeKeyDownRef.current = !1
                        }
                        ),
                        children: l.jsx(re.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": s ? "open" : "closed",
                            "data-swipe-direction": m.swipeDirection,
                            ...x,
                            ref: f,
                            style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...e.style
                            },
                            onKeyDown: q(e.onKeyDown, O => {
                                O.key === "Escape" && (a == null || a(O.nativeEvent),
                                    O.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                                        $()))
                            }
                            ),
                            onPointerDown: q(e.onPointerDown, O => {
                                O.button === 0 && (y.current = {
                                    x: O.clientX,
                                    y: O.clientY
                                })
                            }
                            ),
                            onPointerMove: q(e.onPointerMove, O => {
                                if (!y.current)
                                    return;
                                const W = O.clientX - y.current.x
                                    , F = O.clientY - y.current.y
                                    , V = !!C.current
                                    , N = ["left", "right"].includes(m.swipeDirection)
                                    , R = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                                    , z = N ? R(0, W) : 0
                                    , I = N ? 0 : R(0, F)
                                    , B = O.pointerType === "touch" ? 10 : 2
                                    , G = {
                                        x: z,
                                        y: I
                                    }
                                    , oe = {
                                        originalEvent: O,
                                        delta: G
                                    };
                                V ? (C.current = G,
                                    ti(Zw, p, oe, {
                                        discrete: !1
                                    })) : $f(G, m.swipeDirection, B) ? (C.current = G,
                                        ti(qw, h, oe, {
                                            discrete: !1
                                        }),
                                        O.target.setPointerCapture(O.pointerId)) : (Math.abs(W) > B || Math.abs(F) > B) && (y.current = null)
                            }
                            ),
                            onPointerUp: q(e.onPointerUp, O => {
                                const W = C.current
                                    , F = O.target;
                                if (F.hasPointerCapture(O.pointerId) && F.releasePointerCapture(O.pointerId),
                                    C.current = null,
                                    y.current = null,
                                    W) {
                                    const V = O.currentTarget
                                        , N = {
                                            originalEvent: O,
                                            delta: W
                                        };
                                    $f(W, m.swipeDirection, m.swipeThreshold) ? ti(e1, w, N, {
                                        discrete: !0
                                    }) : ti(Jw, d, N, {
                                        discrete: !0
                                    }),
                                        V.addEventListener("click", R => R.preventDefault(), {
                                            once: !0
                                        })
                                }
                            }
                            )
                        })
                    })
                }), m.viewport)
            })]
        }) : null
    }
    )
    , o1 = e => {
        const { __scopeToast: t, children: n, ...r } = e
            , o = Ra(Ma, t)
            , [s, i] = v.useState(!1)
            , [a, c] = v.useState(!1);
        return a1(() => i(!0)),
            v.useEffect(() => {
                const u = window.setTimeout(() => c(!0), 1e3);
                return () => window.clearTimeout(u)
            }
                , []),
            a ? null : l.jsx(Zu, {
                asChild: !0,
                children: l.jsx(Ms, {
                    ...r,
                    children: s && l.jsxs(l.Fragment, {
                        children: [o.label, " ", n]
                    })
                })
            })
    }
    , s1 = "ToastTitle"
    , hv = v.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return l.jsx(re.div, {
            ...r,
            ref: t
        })
    }
    );
hv.displayName = s1;
var i1 = "ToastDescription"
    , mv = v.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return l.jsx(re.div, {
            ...r,
            ref: t
        })
    }
    );
mv.displayName = i1;
var vv = "ToastAction"
    , gv = v.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim() ? l.jsx(xv, {
            altText: n,
            asChild: !0,
            children: l.jsx(nd, {
                ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${vv}\`. Expected non-empty \`string\`.`),
            null)
    }
    );
gv.displayName = vv;
var yv = "ToastClose"
    , nd = v.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e
            , o = n1(yv, n);
        return l.jsx(xv, {
            asChild: !0,
            children: l.jsx(re.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: q(e.onClick, o.onClose)
            })
        })
    }
    );
nd.displayName = yv;
var xv = v.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return l.jsx(re.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function wv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
            l1(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
                , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...wv(r))
        }
    }
    ),
        t
}
function ti(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget
        , s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }),
        r ? ov(o, s) : o.dispatchEvent(s)
}
var $f = (e, t, n = 0) => {
    const r = Math.abs(e.x)
        , o = Math.abs(e.y)
        , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
    ;
function a1(e = () => { }
) {
    const t = mt(e);
    Ke(() => {
        let n = 0
            , r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)),
            () => {
                window.cancelAnimationFrame(n),
                    window.cancelAnimationFrame(r)
            }
    }
        , [t])
}
function l1(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function c1(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function kl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
        document.activeElement !== t))
}
var u1 = cv
    , Sv = dv
    , Cv = pv
    , bv = hv
    , Nv = mv
    , Ev = gv
    , kv = nd;
function jv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = jv(e[t])) && (r && (r += " "),
                    r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                    r += n);
    return r
}
function Pv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = jv(e)) && (r && (r += " "),
            r += t);
    return r
}
const Bf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
    , Uf = Pv
    , Oa = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Uf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: s } = t
            , i = Object.keys(o).map(u => {
                const h = n == null ? void 0 : n[u]
                    , p = s == null ? void 0 : s[u];
                if (h === null)
                    return null;
                const d = Bf(h) || Bf(p);
                return o[u][d]
            }
            )
            , a = n && Object.entries(n).reduce((u, h) => {
                let [p, d] = h;
                return d === void 0 || (u[p] = d),
                    u
            }
                , {})
            , c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, h) => {
                let { class: p, className: d, ...w } = h;
                return Object.entries(w).every(x => {
                    let [m, S] = x;
                    return Array.isArray(S) ? S.includes({
                        ...s,
                        ...a
                    }[m]) : {
                        ...s,
                        ...a
                    }[m] === S
                }
                ) ? [...u, p, d] : u
            }
                , []);
        return Uf(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    }
    ;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    , Tv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var f1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = v.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: s, iconNode: i, ...a }, c) => v.createElement("svg", {
    ref: c,
    ...f1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Tv("lucide", o),
    ...a
}, [...i.map(([u, h]) => v.createElement(u, h)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (e, t) => {
    const n = v.forwardRef(({ className: r, ...o }, s) => v.createElement(p1, {
        ref: s,
        iconNode: t,
        className: Tv(`lucide-${d1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
        n
}
    ;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = ae("Activity", [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = ae("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = ae("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = ae("Calculator", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    key: "1nb95v"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "6",
    y2: "6",
    key: "x4nwl0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "14",
    y2: "18",
    key: "wjye3r"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}], ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = ae("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = ae("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = ae("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = ae("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = ae("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = ae("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = ae("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = ae("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = ae("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = ae("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = ae("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = ae("Hospital", [["path", {
    d: "M12 6v4",
    key: "16clxf"
}], ["path", {
    d: "M14 14h-4",
    key: "esezmu"
}], ["path", {
    d: "M14 18h-4",
    key: "16mqa2"
}], ["path", {
    d: "M14 8h-4",
    key: "z8ypaz"
}], ["path", {
    d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
    key: "b1k337"
}], ["path", {
    d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",
    key: "16g51d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = ae("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = ae("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = ae("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = ae("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = ae("Route", [["circle", {
    cx: "6",
    cy: "19",
    r: "3",
    key: "1kj8tv"
}], ["path", {
    d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
    key: "1d8sl"
}], ["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = ae("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = ae("Share", [["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["polyline", {
    points: "16 6 12 2 8 6",
    key: "m901s6"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "15",
    key: "1p0rca"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = ae("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = ae("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = ae("Stethoscope", [["path", {
    d: "M11 2v2",
    key: "1539x4"
}], ["path", {
    d: "M5 2v2",
    key: "1yf1q8"
}], ["path", {
    d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
    key: "rb5t3r"
}], ["path", {
    d: "M8 15a6 6 0 0 0 12 0v-3",
    key: "x18d4x"
}], ["circle", {
    cx: "20",
    cy: "10",
    r: "2",
    key: "ts1r5v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = ae("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = ae("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = ae("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = ae("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
    , od = "-"
    , P1 = e => {
        const t = R1(e)
            , { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: i => {
                const a = i.split(od);
                return a[0] === "" && a.length !== 1 && a.shift(),
                    _v(a, t) || T1(i)
            }
            ,
            getConflictingClassGroupIds: (i, a) => {
                const c = n[i] || [];
                return a && r[i] ? [...c, ...r[i]] : c
            }
        }
    }
    , _v = (e, t) => {
        var i;
        if (e.length === 0)
            return t.classGroupId;
        const n = e[0]
            , r = t.nextPart.get(n)
            , o = r ? _v(e.slice(1), r) : void 0;
        if (o)
            return o;
        if (t.validators.length === 0)
            return;
        const s = e.join(od);
        return (i = t.validators.find(({ validator: a }) => a(s))) == null ? void 0 : i.classGroupId
    }
    , Hf = /^\[(.+)\]$/
    , T1 = e => {
        if (Hf.test(e)) {
            const t = Hf.exec(e)[1]
                , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n)
                return "arbitrary.." + n
        }
    }
    , R1 = e => {
        const { theme: t, prefix: n } = e
            , r = {
                nextPart: new Map,
                validators: []
            };
        return O1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
            zc(i, r, s, t)
        }
        ),
            r
    }
    , zc = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const s = o === "" ? t : Vf(t, o);
                s.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (M1(o)) {
                    zc(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([s, i]) => {
                zc(i, Vf(t, s), n, r)
            }
            )
        }
        )
    }
    , Vf = (e, t) => {
        let n = e;
        return t.split(od).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }),
                n = n.nextPart.get(r)
        }
        ),
            n
    }
    , M1 = e => e.isThemeGetter
    , O1 = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
        return [n, o]
    }
    ) : e
    , A1 = e => {
        if (e < 1)
            return {
                get: () => { }
                ,
                set: () => { }
            };
        let t = 0
            , n = new Map
            , r = new Map;
        const o = (s, i) => {
            n.set(s, i),
                t++,
                t > e && (t = 0,
                    r = n,
                    n = new Map)
        }
            ;
        return {
            get(s) {
                let i = n.get(s);
                if (i !== void 0)
                    return i;
                if ((i = r.get(s)) !== void 0)
                    return o(s, i),
                        i
            },
            set(s, i) {
                n.has(s) ? n.set(s, i) : o(s, i)
            }
        }
    }
    , Iv = "!"
    , _1 = e => {
        const { separator: t, experimentalParseClassName: n } = e
            , r = t.length === 1
            , o = t[0]
            , s = t.length
            , i = a => {
                const c = [];
                let u = 0, h = 0, p;
                for (let S = 0; S < a.length; S++) {
                    let g = a[S];
                    if (u === 0) {
                        if (g === o && (r || a.slice(S, S + s) === t)) {
                            c.push(a.slice(h, S)),
                                h = S + s;
                            continue
                        }
                        if (g === "/") {
                            p = S;
                            continue
                        }
                    }
                    g === "[" ? u++ : g === "]" && u--
                }
                const d = c.length === 0 ? a : a.substring(h)
                    , w = d.startsWith(Iv)
                    , x = w ? d.substring(1) : d
                    , m = p && p > h ? p - h : void 0;
                return {
                    modifiers: c,
                    hasImportantModifier: w,
                    baseClassName: x,
                    maybePostfixModifierPosition: m
                }
            }
            ;
        return n ? a => n({
            className: a,
            parseClassName: i
        }) : i
    }
    , I1 = e => {
        if (e.length <= 1)
            return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r),
                n = []) : n.push(r)
        }
        ),
            t.push(...n.sort()),
            t
    }
    , L1 = e => ({
        cache: A1(e.cacheSize),
        parseClassName: _1(e),
        ...P1(e)
    })
    , D1 = /\s+/
    , F1 = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t
            , s = []
            , i = e.trim().split(D1);
        let a = "";
        for (let c = i.length - 1; c >= 0; c -= 1) {
            const u = i[c]
                , { modifiers: h, hasImportantModifier: p, baseClassName: d, maybePostfixModifierPosition: w } = n(u);
            let x = !!w
                , m = r(x ? d.substring(0, w) : d);
            if (!m) {
                if (!x) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (m = r(d),
                    !m) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                x = !1
            }
            const S = I1(h).join(":")
                , g = p ? S + Iv : S
                , f = g + m;
            if (s.includes(f))
                continue;
            s.push(f);
            const y = o(m, x);
            for (let C = 0; C < y.length; ++C) {
                const b = y[C];
                s.push(g + b)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    }
    ;
function z1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length;)
        (t = arguments[e++]) && (n = Lv(t)) && (r && (r += " "),
            r += n);
    return r
}
const Lv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Lv(e[r])) && (n && (n += " "),
            n += t);
    return n
}
    ;
function $1(e, ...t) {
    let n, r, o, s = i;
    function i(c) {
        const u = t.reduce((h, p) => p(h), e());
        return n = L1(u),
            r = n.cache.get,
            o = n.cache.set,
            s = a,
            a(c)
    }
    function a(c) {
        const u = r(c);
        if (u)
            return u;
        const h = F1(c, n);
        return o(c, h),
            h
    }
    return function () {
        return s(z1.apply(null, arguments))
    }
}
const pe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
        t
}
    , Dv = /^\[(?:([a-z-]+):)?(.+)\]$/i
    , B1 = /^\d+\/\d+$/
    , U1 = new Set(["px", "full", "screen"])
    , H1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
    , V1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
    , W1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
    , K1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
    , Q1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
    , Jt = e => Yr(e) || U1.has(e) || B1.test(e)
    , yn = e => Co(e, "length", tS)
    , Yr = e => !!e && !Number.isNaN(Number(e))
    , jl = e => Co(e, "number", Yr)
    , Io = e => !!e && Number.isInteger(Number(e))
    , Y1 = e => e.endsWith("%") && Yr(e.slice(0, -1))
    , Q = e => Dv.test(e)
    , xn = e => H1.test(e)
    , G1 = new Set(["length", "size", "percentage"])
    , X1 = e => Co(e, G1, Fv)
    , q1 = e => Co(e, "position", Fv)
    , Z1 = new Set(["image", "url"])
    , J1 = e => Co(e, Z1, rS)
    , eS = e => Co(e, "", nS)
    , Lo = () => !0
    , Co = (e, t, n) => {
        const r = Dv.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    }
    , tS = e => V1.test(e) && !W1.test(e)
    , Fv = () => !1
    , nS = e => K1.test(e)
    , rS = e => Q1.test(e)
    , oS = () => {
        const e = pe("colors")
            , t = pe("spacing")
            , n = pe("blur")
            , r = pe("brightness")
            , o = pe("borderColor")
            , s = pe("borderRadius")
            , i = pe("borderSpacing")
            , a = pe("borderWidth")
            , c = pe("contrast")
            , u = pe("grayscale")
            , h = pe("hueRotate")
            , p = pe("invert")
            , d = pe("gap")
            , w = pe("gradientColorStops")
            , x = pe("gradientColorStopPositions")
            , m = pe("inset")
            , S = pe("margin")
            , g = pe("opacity")
            , f = pe("padding")
            , y = pe("saturate")
            , C = pe("scale")
            , b = pe("sepia")
            , k = pe("skew")
            , E = pe("space")
            , j = pe("translate")
            , _ = () => ["auto", "contain", "none"]
            , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
            , $ = () => ["auto", Q, t]
            , L = () => [Q, t]
            , H = () => ["", Jt, yn]
            , O = () => ["auto", Yr, Q]
            , W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            , F = () => ["solid", "dashed", "dotted", "double", "none"]
            , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
            , R = () => ["", "0", Q]
            , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            , I = () => [Yr, Q];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Lo],
                spacing: [Jt, yn],
                blur: ["none", "", xn, Q],
                brightness: I(),
                borderColor: [e],
                borderRadius: ["none", "", "full", xn, Q],
                borderSpacing: L(),
                borderWidth: H(),
                contrast: I(),
                grayscale: R(),
                hueRotate: I(),
                invert: R(),
                gap: L(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Y1, yn],
                inset: $(),
                margin: $(),
                opacity: I(),
                padding: L(),
                saturate: I(),
                scale: I(),
                sepia: R(),
                skew: I(),
                space: L(),
                translate: L()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", Q]
                }],
                container: ["container"],
                columns: [{
                    columns: [xn]
                }],
                "break-after": [{
                    "break-after": z()
                }],
                "break-before": [{
                    "break-before": z()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...W(), Q]
                }],
                overflow: [{
                    overflow: A()
                }],
                "overflow-x": [{
                    "overflow-x": A()
                }],
                "overflow-y": [{
                    "overflow-y": A()
                }],
                overscroll: [{
                    overscroll: _()
                }],
                "overscroll-x": [{
                    "overscroll-x": _()
                }],
                "overscroll-y": [{
                    "overscroll-y": _()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [m]
                }],
                "inset-x": [{
                    "inset-x": [m]
                }],
                "inset-y": [{
                    "inset-y": [m]
                }],
                start: [{
                    start: [m]
                }],
                end: [{
                    end: [m]
                }],
                top: [{
                    top: [m]
                }],
                right: [{
                    right: [m]
                }],
                bottom: [{
                    bottom: [m]
                }],
                left: [{
                    left: [m]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Io, Q]
                }],
                basis: [{
                    basis: $()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", Q]
                }],
                grow: [{
                    grow: R()
                }],
                shrink: [{
                    shrink: R()
                }],
                order: [{
                    order: ["first", "last", "none", Io, Q]
                }],
                "grid-cols": [{
                    "grid-cols": [Lo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Io, Q]
                    }, Q]
                }],
                "col-start": [{
                    "col-start": O()
                }],
                "col-end": [{
                    "col-end": O()
                }],
                "grid-rows": [{
                    "grid-rows": [Lo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Io, Q]
                    }, Q]
                }],
                "row-start": [{
                    "row-start": O()
                }],
                "row-end": [{
                    "row-end": O()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", Q]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", Q]
                }],
                gap: [{
                    gap: [d]
                }],
                "gap-x": [{
                    "gap-x": [d]
                }],
                "gap-y": [{
                    "gap-y": [d]
                }],
                "justify-content": [{
                    justify: ["normal", ...N()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...N(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...N(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [f]
                }],
                px: [{
                    px: [f]
                }],
                py: [{
                    py: [f]
                }],
                ps: [{
                    ps: [f]
                }],
                pe: [{
                    pe: [f]
                }],
                pt: [{
                    pt: [f]
                }],
                pr: [{
                    pr: [f]
                }],
                pb: [{
                    pb: [f]
                }],
                pl: [{
                    pl: [f]
                }],
                m: [{
                    m: [S]
                }],
                mx: [{
                    mx: [S]
                }],
                my: [{
                    my: [S]
                }],
                ms: [{
                    ms: [S]
                }],
                me: [{
                    me: [S]
                }],
                mt: [{
                    mt: [S]
                }],
                mr: [{
                    mr: [S]
                }],
                mb: [{
                    mb: [S]
                }],
                ml: [{
                    ml: [S]
                }],
                "space-x": [{
                    "space-x": [E]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [E]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
                }],
                "min-w": [{
                    "min-w": [Q, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [xn]
                    }, xn]
                }],
                h: [{
                    h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [Q, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", xn, yn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", jl]
                }],
                "font-family": [{
                    font: [Lo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Yr, jl]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Jt, Q]
                }],
                "list-image": [{
                    "list-image": ["none", Q]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", Q]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [g]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [g]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...F(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Jt, yn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Jt, Q]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: L()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", Q]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [g]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...W(), q1]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", X1]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, J1]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [x]
                }],
                "gradient-via-pos": [{
                    via: [x]
                }],
                "gradient-to-pos": [{
                    to: [x]
                }],
                "gradient-from": [{
                    from: [w]
                }],
                "gradient-via": [{
                    via: [w]
                }],
                "gradient-to": [{
                    to: [w]
                }],
                rounded: [{
                    rounded: [s]
                }],
                "rounded-s": [{
                    "rounded-s": [s]
                }],
                "rounded-e": [{
                    "rounded-e": [s]
                }],
                "rounded-t": [{
                    "rounded-t": [s]
                }],
                "rounded-r": [{
                    "rounded-r": [s]
                }],
                "rounded-b": [{
                    "rounded-b": [s]
                }],
                "rounded-l": [{
                    "rounded-l": [s]
                }],
                "rounded-ss": [{
                    "rounded-ss": [s]
                }],
                "rounded-se": [{
                    "rounded-se": [s]
                }],
                "rounded-ee": [{
                    "rounded-ee": [s]
                }],
                "rounded-es": [{
                    "rounded-es": [s]
                }],
                "rounded-tl": [{
                    "rounded-tl": [s]
                }],
                "rounded-tr": [{
                    "rounded-tr": [s]
                }],
                "rounded-br": [{
                    "rounded-br": [s]
                }],
                "rounded-bl": [{
                    "rounded-bl": [s]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [g]
                }],
                "border-style": [{
                    border: [...F(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [g]
                }],
                "divide-style": [{
                    divide: F()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...F()]
                }],
                "outline-offset": [{
                    "outline-offset": [Jt, Q]
                }],
                "outline-w": [{
                    outline: [Jt, yn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: H()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [g]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Jt, yn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", xn, eS]
                }],
                "shadow-color": [{
                    shadow: [Lo]
                }],
                opacity: [{
                    opacity: [g]
                }],
                "mix-blend": [{
                    "mix-blend": [...V(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": V()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [c]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", xn, Q]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [h]
                }],
                invert: [{
                    invert: [p]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [b]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [c]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [h]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [p]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [g]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [b]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
                }],
                duration: [{
                    duration: I()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", Q]
                }],
                delay: [{
                    delay: I()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", Q]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [C]
                }],
                "scale-x": [{
                    "scale-x": [C]
                }],
                "scale-y": [{
                    "scale-y": [C]
                }],
                rotate: [{
                    rotate: [Io, Q]
                }],
                "translate-x": [{
                    "translate-x": [j]
                }],
                "translate-y": [{
                    "translate-y": [j]
                }],
                "skew-x": [{
                    "skew-x": [k]
                }],
                "skew-y": [{
                    "skew-y": [k]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": L()
                }],
                "scroll-mx": [{
                    "scroll-mx": L()
                }],
                "scroll-my": [{
                    "scroll-my": L()
                }],
                "scroll-ms": [{
                    "scroll-ms": L()
                }],
                "scroll-me": [{
                    "scroll-me": L()
                }],
                "scroll-mt": [{
                    "scroll-mt": L()
                }],
                "scroll-mr": [{
                    "scroll-mr": L()
                }],
                "scroll-mb": [{
                    "scroll-mb": L()
                }],
                "scroll-ml": [{
                    "scroll-ml": L()
                }],
                "scroll-p": [{
                    "scroll-p": L()
                }],
                "scroll-px": [{
                    "scroll-px": L()
                }],
                "scroll-py": [{
                    "scroll-py": L()
                }],
                "scroll-ps": [{
                    "scroll-ps": L()
                }],
                "scroll-pe": [{
                    "scroll-pe": L()
                }],
                "scroll-pt": [{
                    "scroll-pt": L()
                }],
                "scroll-pr": [{
                    "scroll-pr": L()
                }],
                "scroll-pb": [{
                    "scroll-pb": L()
                }],
                "scroll-pl": [{
                    "scroll-pl": L()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", Q]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Jt, yn, jl]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    }
    , sS = $1(oS);
function ce(...e) {
    return sS(Pv(e))
}
const iS = u1
    , zv = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Sv, {
        ref: n,
        className: ce("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
zv.displayName = Sv.displayName;
const aS = Oa("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
    , $v = v.forwardRef(({ className: e, variant: t, ...n }, r) => l.jsx(Cv, {
        ref: r,
        className: ce(aS({
            variant: t
        }), e),
        ...n
    }));
$v.displayName = Cv.displayName;
const lS = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Ev, {
    ref: n,
    className: ce("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
lS.displayName = Ev.displayName;
const Bv = v.forwardRef(({ className: e, ...t }, n) => l.jsx(kv, {
    ref: n,
    className: ce("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: l.jsx(j1, {
        className: "h-4 w-4"
    })
}));
Bv.displayName = kv.displayName;
const Uv = v.forwardRef(({ className: e, ...t }, n) => l.jsx(bv, {
    ref: n,
    className: ce("text-sm font-semibold", e),
    ...t
}));
Uv.displayName = bv.displayName;
const Hv = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Nv, {
    ref: n,
    className: ce("text-sm opacity-90", e),
    ...t
}));
Hv.displayName = Nv.displayName;
function cS() {
    const { toasts: e } = Pa();
    return l.jsxs(iS, {
        children: [e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
            return l.jsxs($v, {
                ...s,
                children: [l.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && l.jsx(Uv, {
                        children: n
                    }), r && l.jsx(Hv, {
                        children: r
                    })]
                }), o, l.jsx(Bv, {})]
            }, t)
        }), l.jsx(zv, {})]
    })
}
var Wf = ["light", "dark"]
    , uS = "(prefers-color-scheme: dark)"
    , dS = v.createContext(void 0)
    , fS = {
        setTheme: e => { }
        ,
        themes: []
    }
    , pS = () => {
        var e;
        return (e = v.useContext(dS)) != null ? e : fS
    }
    ;
v.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: a, nonce: c }) => {
    let u = s === "system"
        , h = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
        , p = o ? Wf.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
        , d = (x, m = !1, S = !0) => {
            let g = i ? i[x] : x
                , f = m ? x + "|| ''" : `'${g}'`
                , y = "";
            return o && S && !m && Wf.includes(x) && (y += `d.style.colorScheme = '${x}';`),
                n === "class" ? m || g ? y += `c.add(${f})` : y += "null" : g && (y += `d[s](n,${f})`),
                y
        }
        , w = e ? `!function(){${h}${d(e)}}()` : r ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${uS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(s, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}else{${d(s, !1, !1)};}${p}}catch(t){}}();`;
    return v.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: {
            __html: w
        }
    })
}
);
var hS = e => {
    switch (e) {
        case "success":
            return gS;
        case "info":
            return xS;
        case "warning":
            return yS;
        case "error":
            return wS;
        default:
            return null
    }
}
    , mS = Array(12).fill(0)
    , vS = ({ visible: e }) => M.createElement("div", {
        className: "sonner-loading-wrapper",
        "data-visible": e
    }, M.createElement("div", {
        className: "sonner-spinner"
    }, mS.map((t, n) => M.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    }))))
    , gS = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    }))
    , yS = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    }))
    , xS = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    }))
    , wS = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    }))
    , SS = () => {
        let [e, t] = M.useState(document.hidden);
        return M.useEffect(() => {
            let n = () => {
                t(document.hidden)
            }
                ;
            return document.addEventListener("visibilitychange", n),
                () => window.removeEventListener("visibilitychange", n)
        }
            , []),
            e
    }
    , $c = 1
    , CS = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1)
                }
            ),
                this.publish = e => {
                    this.subscribers.forEach(t => t(e))
                }
                ,
                this.addToast = e => {
                    this.publish(e),
                        this.toasts = [...this.toasts, e]
                }
                ,
                this.create = e => {
                    var t;
                    let { message: n, ...r } = e
                        , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : $c++
                        , s = this.toasts.find(a => a.id === o)
                        , i = e.dismissible === void 0 ? !0 : e.dismissible;
                    return s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                        ...a,
                        ...e,
                        id: o,
                        title: n
                    }),
                    {
                        ...a,
                        ...e,
                        id: o,
                        dismissible: i,
                        title: n
                    }) : a) : this.addToast({
                        title: n,
                        ...r,
                        dismissible: i,
                        id: o
                    }),
                        o
                }
                ,
                this.dismiss = e => (e || this.toasts.forEach(t => {
                    this.subscribers.forEach(n => n({
                        id: t.id,
                        dismiss: !0
                    }))
                }
                ),
                    this.subscribers.forEach(t => t({
                        id: e,
                        dismiss: !0
                    })),
                    e),
                this.message = (e, t) => this.create({
                    ...t,
                    message: e
                }),
                this.error = (e, t) => this.create({
                    ...t,
                    message: e,
                    type: "error"
                }),
                this.success = (e, t) => this.create({
                    ...t,
                    type: "success",
                    message: e
                }),
                this.info = (e, t) => this.create({
                    ...t,
                    type: "info",
                    message: e
                }),
                this.warning = (e, t) => this.create({
                    ...t,
                    type: "warning",
                    message: e
                }),
                this.loading = (e, t) => this.create({
                    ...t,
                    type: "loading",
                    message: e
                }),
                this.promise = (e, t) => {
                    if (!t)
                        return;
                    let n;
                    t.loading !== void 0 && (n = this.create({
                        ...t,
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: typeof t.description != "function" ? t.description : void 0
                    }));
                    let r = e instanceof Promise ? e : e()
                        , o = n !== void 0;
                    return r.then(async s => {
                        if (NS(s) && !s.ok) {
                            o = !1;
                            let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${s.status}`) : t.error
                                , a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${s.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: i,
                                description: a
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let i = typeof t.success == "function" ? await t.success(s) : t.success
                                , a = typeof t.description == "function" ? await t.description(s) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: i,
                                description: a
                            })
                        }
                    }
                    ).catch(async s => {
                        if (t.error !== void 0) {
                            o = !1;
                            let i = typeof t.error == "function" ? await t.error(s) : t.error
                                , a = typeof t.description == "function" ? await t.description(s) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: i,
                                description: a
                            })
                        }
                    }
                    ).finally(() => {
                        var s;
                        o && (this.dismiss(n),
                            n = void 0),
                            (s = t.finally) == null || s.call(t)
                    }
                    ),
                        n
                }
                ,
                this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || $c++;
                    return this.create({
                        jsx: e(n),
                        id: n,
                        ...t
                    }),
                        n
                }
                ,
                this.subscribers = [],
                this.toasts = []
        }
    }
    , lt = new CS
    , bS = (e, t) => {
        let n = (t == null ? void 0 : t.id) || $c++;
        return lt.addToast({
            title: e,
            ...t,
            id: n
        }),
            n
    }
    , NS = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number"
    , ES = bS
    , kS = () => lt.toasts;
Object.assign(ES, {
    success: lt.success,
    info: lt.info,
    warning: lt.warning,
    error: lt.error,
    custom: lt.custom,
    message: lt.message,
    promise: lt.promise,
    dismiss: lt.dismiss,
    loading: lt.loading
}, {
    getHistory: kS
});
function jS(e, { insertAt: t } = {}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
        , r = document.createElement("style");
    r.type = "text/css",
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
jS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ni(e) {
    return e.label !== void 0
}
var PS = 3
    , TS = "32px"
    , RS = 4e3
    , MS = 356
    , OS = 14
    , AS = 20
    , _S = 200;
function IS(...e) {
    return e.filter(Boolean).join(" ")
}
var LS = e => {
    var t, n, r, o, s, i, a, c, u, h;
    let { invert: p, toast: d, unstyled: w, interacting: x, setHeights: m, visibleToasts: S, heights: g, index: f, toasts: y, expanded: C, removeToast: b, defaultRichColors: k, closeButton: E, style: j, cancelButtonStyle: _, actionButtonStyle: A, className: $ = "", descriptionClassName: L = "", duration: H, position: O, gap: W, loadingIcon: F, expandByDefault: V, classNames: N, icons: R, closeButtonAriaLabel: z = "Close toast", pauseWhenPageIsHidden: I, cn: B } = e
        , [G, oe] = M.useState(!1)
        , [Me, Z] = M.useState(!1)
        , [U, ne] = M.useState(!1)
        , [we, ee] = M.useState(!1)
        , [se, te] = M.useState(0)
        , [Qe, it] = M.useState(0)
        , mn = M.useRef(null)
        , yt = M.useRef(null)
        , Jn = f === 0
        , Ya = f + 1 <= S
        , _e = d.type
        , br = d.dismissible !== !1
        , zy = d.className || ""
        , $y = d.descriptionClassName || ""
        , _s = M.useMemo(() => g.findIndex(K => K.toastId === d.id) || 0, [g, d.id])
        , By = M.useMemo(() => {
            var K;
            return (K = d.closeButton) != null ? K : E
        }
            , [d.closeButton, E])
        , Sd = M.useMemo(() => d.duration || H || RS, [d.duration, H])
        , Ga = M.useRef(0)
        , Nr = M.useRef(0)
        , Cd = M.useRef(0)
        , Er = M.useRef(null)
        , [bd, Uy] = O.split("-")
        , Nd = M.useMemo(() => g.reduce((K, fe, ue) => ue >= _s ? K : K + fe.height, 0), [g, _s])
        , Ed = SS()
        , Hy = d.invert || p
        , Xa = _e === "loading";
    Nr.current = M.useMemo(() => _s * W + Nd, [_s, Nd]),
        M.useEffect(() => {
            oe(!0)
        }
            , []),
        M.useLayoutEffect(() => {
            if (!G)
                return;
            let K = yt.current
                , fe = K.style.height;
            K.style.height = "auto";
            let ue = K.getBoundingClientRect().height;
            K.style.height = fe,
                it(ue),
                m(Ft => Ft.find(zt => zt.toastId === d.id) ? Ft.map(zt => zt.toastId === d.id ? {
                    ...zt,
                    height: ue
                } : zt) : [{
                    toastId: d.id,
                    height: ue,
                    position: d.position
                }, ...Ft])
        }
            , [G, d.title, d.description, m, d.id]);
    let vn = M.useCallback(() => {
        Z(!0),
            te(Nr.current),
            m(K => K.filter(fe => fe.toastId !== d.id)),
            setTimeout(() => {
                b(d)
            }
                , _S)
    }
        , [d, b, m, Nr]);
    M.useEffect(() => {
        if (d.promise && _e === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let K, fe = Sd;
        return C || x || I && Ed ? (() => {
            if (Cd.current < Ga.current) {
                let ue = new Date().getTime() - Ga.current;
                fe = fe - ue
            }
            Cd.current = new Date().getTime()
        }
        )() : fe !== 1 / 0 && (Ga.current = new Date().getTime(),
            K = setTimeout(() => {
                var ue;
                (ue = d.onAutoClose) == null || ue.call(d, d),
                    vn()
            }
                , fe)),
            () => clearTimeout(K)
    }
        , [C, x, V, d, Sd, vn, d.promise, _e, I, Ed]),
        M.useEffect(() => {
            let K = yt.current;
            if (K) {
                let fe = K.getBoundingClientRect().height;
                return it(fe),
                    m(ue => [{
                        toastId: d.id,
                        height: fe,
                        position: d.position
                    }, ...ue]),
                    () => m(ue => ue.filter(Ft => Ft.toastId !== d.id))
            }
        }
            , [m, d.id]),
        M.useEffect(() => {
            d.delete && vn()
        }
            , [vn, d.delete]);
    function Vy() {
        return R != null && R.loading ? M.createElement("div", {
            className: "sonner-loader",
            "data-visible": _e === "loading"
        }, R.loading) : F ? M.createElement("div", {
            className: "sonner-loader",
            "data-visible": _e === "loading"
        }, F) : M.createElement(vS, {
            visible: _e === "loading"
        })
    }
    return M.createElement("li", {
        "aria-live": d.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: yt,
        className: B($, zy, N == null ? void 0 : N.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[_e], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[_e]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : k,
        "data-styled": !(d.jsx || d.unstyled || w),
        "data-mounted": G,
        "data-promise": !!d.promise,
        "data-removed": Me,
        "data-visible": Ya,
        "data-y-position": bd,
        "data-x-position": Uy,
        "data-index": f,
        "data-front": Jn,
        "data-swiping": U,
        "data-dismissible": br,
        "data-type": _e,
        "data-invert": Hy,
        "data-swipe-out": we,
        "data-expanded": !!(C || V && G),
        style: {
            "--index": f,
            "--toasts-before": f,
            "--z-index": y.length - f,
            "--offset": `${Me ? se : Nr.current}px`,
            "--initial-height": V ? "auto" : `${Qe}px`,
            ...j,
            ...d.style
        },
        onPointerDown: K => {
            Xa || !br || (mn.current = new Date,
                te(Nr.current),
                K.target.setPointerCapture(K.pointerId),
                K.target.tagName !== "BUTTON" && (ne(!0),
                    Er.current = {
                        x: K.clientX,
                        y: K.clientY
                    }))
        }
        ,
        onPointerUp: () => {
            var K, fe, ue, Ft;
            if (we || !br)
                return;
            Er.current = null;
            let zt = Number(((K = yt.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
                , Is = new Date().getTime() - ((fe = mn.current) == null ? void 0 : fe.getTime())
                , Wy = Math.abs(zt) / Is;
            if (Math.abs(zt) >= AS || Wy > .11) {
                te(Nr.current),
                    (ue = d.onDismiss) == null || ue.call(d, d),
                    vn(),
                    ee(!0);
                return
            }
            (Ft = yt.current) == null || Ft.style.setProperty("--swipe-amount", "0px"),
                ne(!1)
        }
        ,
        onPointerMove: K => {
            var fe;
            if (!Er.current || !br)
                return;
            let ue = K.clientY - Er.current.y
                , Ft = K.clientX - Er.current.x
                , zt = (bd === "top" ? Math.min : Math.max)(0, ue)
                , Is = K.pointerType === "touch" ? 10 : 2;
            Math.abs(zt) > Is ? (fe = yt.current) == null || fe.style.setProperty("--swipe-amount", `${ue}px`) : Math.abs(Ft) > Is && (Er.current = null)
        }
    }, By && !d.jsx ? M.createElement("button", {
        "aria-label": z,
        "data-disabled": Xa,
        "data-close-button": !0,
        onClick: Xa || !br ? () => { }
            : () => {
                var K;
                vn(),
                    (K = d.onDismiss) == null || K.call(d, d)
            }
        ,
        className: B(N == null ? void 0 : N.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, M.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), M.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, d.jsx || M.isValidElement(d.title) ? d.jsx || d.title : M.createElement(M.Fragment, null, _e || d.icon || d.promise ? M.createElement("div", {
        "data-icon": "",
        className: B(N == null ? void 0 : N.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Vy() : null, d.type !== "loading" ? d.icon || (R == null ? void 0 : R[_e]) || hS(_e) : null) : null, M.createElement("div", {
        "data-content": "",
        className: B(N == null ? void 0 : N.content, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.content)
    }, M.createElement("div", {
        "data-title": "",
        className: B(N == null ? void 0 : N.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title)
    }, d.title), d.description ? M.createElement("div", {
        "data-description": "",
        className: B(L, $y, N == null ? void 0 : N.description, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.description)
    }, d.description) : null), M.isValidElement(d.cancel) ? d.cancel : d.cancel && ni(d.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || _,
        onClick: K => {
            var fe, ue;
            ni(d.cancel) && br && ((ue = (fe = d.cancel).onClick) == null || ue.call(fe, K),
                vn())
        }
        ,
        className: B(N == null ? void 0 : N.cancelButton, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.cancelButton)
    }, d.cancel.label) : null, M.isValidElement(d.action) ? d.action : d.action && ni(d.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || A,
        onClick: K => {
            var fe, ue;
            ni(d.action) && (K.defaultPrevented || ((ue = (fe = d.action).onClick) == null || ue.call(fe, K),
                vn()))
        }
        ,
        className: B(N == null ? void 0 : N.actionButton, (h = d == null ? void 0 : d.classNames) == null ? void 0 : h.actionButton)
    }, d.action.label) : null))
}
    ;
function Kf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var DS = e => {
    let { invert: t, position: n = "bottom-right", hotkey: r = ["altKey", "KeyT"], expand: o, closeButton: s, className: i, offset: a, theme: c = "light", richColors: u, duration: h, style: p, visibleToasts: d = PS, toastOptions: w, dir: x = Kf(), gap: m = OS, loadingIcon: S, icons: g, containerAriaLabel: f = "Notifications", pauseWhenPageIsHidden: y, cn: C = IS } = e
        , [b, k] = M.useState([])
        , E = M.useMemo(() => Array.from(new Set([n].concat(b.filter(I => I.position).map(I => I.position)))), [b, n])
        , [j, _] = M.useState([])
        , [A, $] = M.useState(!1)
        , [L, H] = M.useState(!1)
        , [O, W] = M.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        , F = M.useRef(null)
        , V = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
        , N = M.useRef(null)
        , R = M.useRef(!1)
        , z = M.useCallback(I => {
            var B;
            (B = b.find(G => G.id === I.id)) != null && B.delete || lt.dismiss(I.id),
                k(G => G.filter(({ id: oe }) => oe !== I.id))
        }
            , [b]);
    return M.useEffect(() => lt.subscribe(I => {
        if (I.dismiss) {
            k(B => B.map(G => G.id === I.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout(() => {
            Jm.flushSync(() => {
                k(B => {
                    let G = B.findIndex(oe => oe.id === I.id);
                    return G !== -1 ? [...B.slice(0, G), {
                        ...B[G],
                        ...I
                    }, ...B.slice(G + 1)] : [I, ...B]
                }
                )
            }
            )
        }
        )
    }
    ), []),
        M.useEffect(() => {
            if (c !== "system") {
                W(c);
                return
            }
            c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")),
                typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: I }) => {
                    W(I ? "dark" : "light")
                }
                )
        }
            , [c]),
        M.useEffect(() => {
            b.length <= 1 && $(!1)
        }
            , [b]),
        M.useEffect(() => {
            let I = B => {
                var G, oe;
                r.every(Me => B[Me] || B.code === Me) && ($(!0),
                    (G = F.current) == null || G.focus()),
                    B.code === "Escape" && (document.activeElement === F.current || (oe = F.current) != null && oe.contains(document.activeElement)) && $(!1)
            }
                ;
            return document.addEventListener("keydown", I),
                () => document.removeEventListener("keydown", I)
        }
            , [r]),
        M.useEffect(() => {
            if (F.current)
                return () => {
                    N.current && (N.current.focus({
                        preventScroll: !0
                    }),
                        N.current = null,
                        R.current = !1)
                }
        }
            , [F.current]),
        b.length ? M.createElement("section", {
            "aria-label": `${f} ${V}`,
            tabIndex: -1
        }, E.map((I, B) => {
            var G;
            let [oe, Me] = I.split("-");
            return M.createElement("ol", {
                key: I,
                dir: x === "auto" ? Kf() : x,
                tabIndex: -1,
                ref: F,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": O,
                "data-y-position": oe,
                "data-x-position": Me,
                style: {
                    "--front-toast-height": `${((G = j[0]) == null ? void 0 : G.height) || 0}px`,
                    "--offset": typeof a == "number" ? `${a}px` : a || TS,
                    "--width": `${MS}px`,
                    "--gap": `${m}px`,
                    ...p
                },
                onBlur: Z => {
                    R.current && !Z.currentTarget.contains(Z.relatedTarget) && (R.current = !1,
                        N.current && (N.current.focus({
                            preventScroll: !0
                        }),
                            N.current = null))
                }
                ,
                onFocus: Z => {
                    Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || R.current || (R.current = !0,
                        N.current = Z.relatedTarget)
                }
                ,
                onMouseEnter: () => $(!0),
                onMouseMove: () => $(!0),
                onMouseLeave: () => {
                    L || $(!1)
                }
                ,
                onPointerDown: Z => {
                    Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || H(!0)
                }
                ,
                onPointerUp: () => H(!1)
            }, b.filter(Z => !Z.position && B === 0 || Z.position === I).map((Z, U) => {
                var ne, we;
                return M.createElement(LS, {
                    key: Z.id,
                    icons: g,
                    index: U,
                    toast: Z,
                    defaultRichColors: u,
                    duration: (ne = w == null ? void 0 : w.duration) != null ? ne : h,
                    className: w == null ? void 0 : w.className,
                    descriptionClassName: w == null ? void 0 : w.descriptionClassName,
                    invert: t,
                    visibleToasts: d,
                    closeButton: (we = w == null ? void 0 : w.closeButton) != null ? we : s,
                    interacting: L,
                    position: I,
                    style: w == null ? void 0 : w.style,
                    unstyled: w == null ? void 0 : w.unstyled,
                    classNames: w == null ? void 0 : w.classNames,
                    cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
                    actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
                    removeToast: z,
                    toasts: b.filter(ee => ee.position == Z.position),
                    heights: j.filter(ee => ee.position == Z.position),
                    setHeights: _,
                    expandByDefault: o,
                    gap: m,
                    loadingIcon: S,
                    expanded: A,
                    pauseWhenPageIsHidden: y,
                    cn: C
                })
            }
            ))
        }
        )) : null
}
    ;
const FS = ({ ...e }) => {
    const { theme: t = "system" } = pS();
    return l.jsx(DS, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
    ;
var zS = Xp.useId || (() => { }
)
    , $S = 0;
function sd(e) {
    const [t, n] = v.useState(zS());
    return Ke(() => {
        n(r => r ?? String($S++))
    }
        , [e]),
        t ? `radix-${t}` : ""
}
const BS = ["top", "right", "bottom", "left"]
    , Vn = Math.min
    , ut = Math.max
    , ta = Math.round
    , ri = Math.floor
    , Wn = e => ({
        x: e,
        y: e
    })
    , US = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
    , HS = {
        start: "end",
        end: "start"
    };
function Bc(e, t, n) {
    return ut(e, Vn(t, n))
}
function fn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function pn(e) {
    return e.split("-")[0]
}
function bo(e) {
    return e.split("-")[1]
}
function id(e) {
    return e === "x" ? "y" : "x"
}
function ad(e) {
    return e === "y" ? "height" : "width"
}
function Kn(e) {
    return ["top", "bottom"].includes(pn(e)) ? "y" : "x"
}
function ld(e) {
    return id(Kn(e))
}
function VS(e, t, n) {
    n === void 0 && (n = !1);
    const r = bo(e)
        , o = ld(e)
        , s = ad(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = na(i)),
        [i, na(i)]
}
function WS(e) {
    const t = na(e);
    return [Uc(e), t, Uc(t)]
}
function Uc(e) {
    return e.replace(/start|end/g, t => HS[t])
}
function KS(e, t, n) {
    const r = ["left", "right"]
        , o = ["right", "left"]
        , s = ["top", "bottom"]
        , i = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? s : i;
        default:
            return []
    }
}
function QS(e, t, n, r) {
    const o = bo(e);
    let s = KS(pn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
        t && (s = s.concat(s.map(Uc)))),
        s
}
function na(e) {
    return e.replace(/left|right|bottom|top/g, t => US[t])
}
function YS(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Vv(e) {
    return typeof e != "number" ? YS(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ra(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Qf(e, t, n) {
    let { reference: r, floating: o } = e;
    const s = Kn(t)
        , i = ld(t)
        , a = ad(i)
        , c = pn(t)
        , u = s === "y"
        , h = r.x + r.width / 2 - o.width / 2
        , p = r.y + r.height / 2 - o.height / 2
        , d = r[a] / 2 - o[a] / 2;
    let w;
    switch (c) {
        case "top":
            w = {
                x: h,
                y: r.y - o.height
            };
            break;
        case "bottom":
            w = {
                x: h,
                y: r.y + r.height
            };
            break;
        case "right":
            w = {
                x: r.x + r.width,
                y: p
            };
            break;
        case "left":
            w = {
                x: r.x - o.width,
                y: p
            };
            break;
        default:
            w = {
                x: r.x,
                y: r.y
            }
    }
    switch (bo(t)) {
        case "start":
            w[i] -= d * (n && u ? -1 : 1);
            break;
        case "end":
            w[i] += d * (n && u ? -1 : 1);
            break
    }
    return w
}
const GS = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n
        , a = s.filter(Boolean)
        , c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
        , { x: h, y: p } = Qf(u, r, c)
        , d = r
        , w = {}
        , x = 0;
    for (let m = 0; m < a.length; m++) {
        const { name: S, fn: g } = a[m]
            , { x: f, y, data: C, reset: b } = await g({
                x: h,
                y: p,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: w,
                rects: u,
                platform: i,
                elements: {
                    reference: e,
                    floating: t
                }
            });
        h = f ?? h,
            p = y ?? p,
            w = {
                ...w,
                [S]: {
                    ...w[S],
                    ...C
                }
            },
            b && x <= 50 && (x++,
                typeof b == "object" && (b.placement && (d = b.placement),
                    b.rects && (u = b.rects === !0 ? await i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects),
                    { x: h, y: p } = Qf(u, d, c)),
                m = -1)
    }
    return {
        x: h,
        y: p,
        placement: d,
        strategy: o,
        middlewareData: w
    }
}
    ;
async function gs(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: i, elements: a, strategy: c } = e
        , { boundary: u = "clippingAncestors", rootBoundary: h = "viewport", elementContext: p = "floating", altBoundary: d = !1, padding: w = 0 } = fn(t, e)
        , x = Vv(w)
        , S = a[d ? p === "floating" ? "reference" : "floating" : p]
        , g = ra(await s.getClippingRect({
            element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
            boundary: u,
            rootBoundary: h,
            strategy: c
        }))
        , f = p === "floating" ? {
            x: r,
            y: o,
            width: i.floating.width,
            height: i.floating.height
        } : i.reference
        , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
        , C = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
            x: 1,
            y: 1
        } : {
            x: 1,
            y: 1
        }
        , b = ra(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: f,
            offsetParent: y,
            strategy: c
        }) : f);
    return {
        top: (g.top - b.top + x.top) / C.y,
        bottom: (b.bottom - g.bottom + x.bottom) / C.y,
        left: (g.left - b.left + x.left) / C.x,
        right: (b.right - g.right + x.right) / C.x
    }
}
const XS = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const { x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: c } = t
            , { element: u, padding: h = 0 } = fn(e, t) || {};
        if (u == null)
            return {};
        const p = Vv(h)
            , d = {
                x: n,
                y: r
            }
            , w = ld(o)
            , x = ad(w)
            , m = await i.getDimensions(u)
            , S = w === "y"
            , g = S ? "top" : "left"
            , f = S ? "bottom" : "right"
            , y = S ? "clientHeight" : "clientWidth"
            , C = s.reference[x] + s.reference[w] - d[w] - s.floating[x]
            , b = d[w] - s.reference[w]
            , k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let E = k ? k[y] : 0;
        (!E || !await (i.isElement == null ? void 0 : i.isElement(k))) && (E = a.floating[y] || s.floating[x]);
        const j = C / 2 - b / 2
            , _ = E / 2 - m[x] / 2 - 1
            , A = Vn(p[g], _)
            , $ = Vn(p[f], _)
            , L = A
            , H = E - m[x] - $
            , O = E / 2 - m[x] / 2 + j
            , W = Bc(L, O, H)
            , F = !c.arrow && bo(o) != null && O !== W && s.reference[x] / 2 - (O < L ? A : $) - m[x] / 2 < 0
            , V = F ? O < L ? O - L : O - H : 0;
        return {
            [w]: d[w] + V,
            data: {
                [w]: W,
                centerOffset: O - W - V,
                ...F && {
                    alignmentOffset: V
                }
            },
            reset: F
        }
    }
})
    , qS = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const { placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: c, elements: u } = t
                    , { mainAxis: h = !0, crossAxis: p = !0, fallbackPlacements: d, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: x = "none", flipAlignment: m = !0, ...S } = fn(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset)
                    return {};
                const g = pn(o)
                    , f = Kn(a)
                    , y = pn(a) === a
                    , C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating))
                    , b = d || (y || !m ? [na(a)] : WS(a))
                    , k = x !== "none";
                !d && k && b.push(...QS(a, m, x, C));
                const E = [a, ...b]
                    , j = await gs(t, S)
                    , _ = [];
                let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                if (h && _.push(j[g]),
                    p) {
                    const O = VS(o, i, C);
                    _.push(j[O[0]], j[O[1]])
                }
                if (A = [...A, {
                    placement: o,
                    overflows: _
                }],
                    !_.every(O => O <= 0)) {
                    var $, L;
                    const O = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                        , W = E[O];
                    if (W)
                        return {
                            data: {
                                index: O,
                                overflows: A
                            },
                            reset: {
                                placement: W
                            }
                        };
                    let F = (L = A.filter(V => V.overflows[0] <= 0).sort((V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : L.placement;
                    if (!F)
                        switch (w) {
                            case "bestFit":
                                {
                                    var H;
                                    const V = (H = A.filter(N => {
                                        if (k) {
                                            const R = Kn(N.placement);
                                            return R === f || R === "y"
                                        }
                                        return !0
                                    }
                                    ).map(N => [N.placement, N.overflows.filter(R => R > 0).reduce((R, z) => R + z, 0)]).sort((N, R) => N[1] - R[1])[0]) == null ? void 0 : H[0];
                                    V && (F = V);
                                    break
                                }
                            case "initialPlacement":
                                F = a;
                                break
                        }
                    if (o !== F)
                        return {
                            reset: {
                                placement: F
                            }
                        }
                }
                return {}
            }
        }
    };
function Yf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Gf(e) {
    return BS.some(t => e[t] >= 0)
}
const ZS = function (e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const { rects: n } = t
                , { strategy: r = "referenceHidden", ...o } = fn(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const s = await gs(t, {
                            ...o,
                            elementContext: "reference"
                        })
                            , i = Yf(s, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: i,
                                referenceHidden: Gf(i)
                            }
                        }
                    }
                case "escaped":
                    {
                        const s = await gs(t, {
                            ...o,
                            altBoundary: !0
                        })
                            , i = Yf(s, n.floating);
                        return {
                            data: {
                                escapedOffsets: i,
                                escaped: Gf(i)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function JS(e, t) {
    const { placement: n, platform: r, elements: o } = e
        , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
        , i = pn(n)
        , a = bo(n)
        , c = Kn(n) === "y"
        , u = ["left", "top"].includes(i) ? -1 : 1
        , h = s && c ? -1 : 1
        , p = fn(t, e);
    let { mainAxis: d, crossAxis: w, alignmentAxis: x } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return a && typeof x == "number" && (w = a === "end" ? x * -1 : x),
        c ? {
            x: w * h,
            y: d * u
        } : {
            x: d * u,
            y: w * h
        }
}
const eC = function (e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const { x: o, y: s, placement: i, middlewareData: a } = t
                , c = await JS(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + c.x,
                y: s + c.y,
                data: {
                    ...c,
                    placement: i
                }
            }
        }
    }
}
    , tC = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "shift",
            options: e,
            async fn(t) {
                const { x: n, y: r, placement: o } = t
                    , { mainAxis: s = !0, crossAxis: i = !1, limiter: a = {
                        fn: S => {
                            let { x: g, y: f } = S;
                            return {
                                x: g,
                                y: f
                            }
                        }
                    }, ...c } = fn(e, t)
                    , u = {
                        x: n,
                        y: r
                    }
                    , h = await gs(t, c)
                    , p = Kn(pn(o))
                    , d = id(p);
                let w = u[d]
                    , x = u[p];
                if (s) {
                    const S = d === "y" ? "top" : "left"
                        , g = d === "y" ? "bottom" : "right"
                        , f = w + h[S]
                        , y = w - h[g];
                    w = Bc(f, w, y)
                }
                if (i) {
                    const S = p === "y" ? "top" : "left"
                        , g = p === "y" ? "bottom" : "right"
                        , f = x + h[S]
                        , y = x - h[g];
                    x = Bc(f, x, y)
                }
                const m = a.fn({
                    ...t,
                    [d]: w,
                    [p]: x
                });
                return {
                    ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - r,
                        enabled: {
                            [d]: s,
                            [p]: i
                        }
                    }
                }
            }
        }
    }
    , nC = function (e) {
        return e === void 0 && (e = {}),
        {
            options: e,
            fn(t) {
                const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t
                    , { offset: a = 0, mainAxis: c = !0, crossAxis: u = !0 } = fn(e, t)
                    , h = {
                        x: n,
                        y: r
                    }
                    , p = Kn(o)
                    , d = id(p);
                let w = h[d]
                    , x = h[p];
                const m = fn(a, t)
                    , S = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (c) {
                    const y = d === "y" ? "height" : "width"
                        , C = s.reference[d] - s.floating[y] + S.mainAxis
                        , b = s.reference[d] + s.reference[y] - S.mainAxis;
                    w < C ? w = C : w > b && (w = b)
                }
                if (u) {
                    var g, f;
                    const y = d === "y" ? "width" : "height"
                        , C = ["top", "left"].includes(pn(o))
                        , b = s.reference[p] - s.floating[y] + (C && ((g = i.offset) == null ? void 0 : g[p]) || 0) + (C ? 0 : S.crossAxis)
                        , k = s.reference[p] + s.reference[y] + (C ? 0 : ((f = i.offset) == null ? void 0 : f[p]) || 0) - (C ? S.crossAxis : 0);
                    x < b ? x = b : x > k && (x = k)
                }
                return {
                    [d]: w,
                    [p]: x
                }
            }
        }
    }
    , rC = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const { placement: o, rects: s, platform: i, elements: a } = t
                    , { apply: c = () => { }
                        , ...u } = fn(e, t)
                    , h = await gs(t, u)
                    , p = pn(o)
                    , d = bo(o)
                    , w = Kn(o) === "y"
                    , { width: x, height: m } = s.floating;
                let S, g;
                p === "top" || p === "bottom" ? (S = p,
                    g = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = p,
                        S = d === "end" ? "top" : "bottom");
                const f = m - h.top - h.bottom
                    , y = x - h.left - h.right
                    , C = Vn(m - h[S], f)
                    , b = Vn(x - h[g], y)
                    , k = !t.middlewareData.shift;
                let E = C
                    , j = b;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
                    (r = t.middlewareData.shift) != null && r.enabled.y && (E = f),
                    k && !d) {
                    const A = ut(h.left, 0)
                        , $ = ut(h.right, 0)
                        , L = ut(h.top, 0)
                        , H = ut(h.bottom, 0);
                    w ? j = x - 2 * (A !== 0 || $ !== 0 ? A + $ : ut(h.left, h.right)) : E = m - 2 * (L !== 0 || H !== 0 ? L + H : ut(h.top, h.bottom))
                }
                await c({
                    ...t,
                    availableWidth: j,
                    availableHeight: E
                });
                const _ = await i.getDimensions(a.floating);
                return x !== _.width || m !== _.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };
function Aa() {
    return typeof window < "u"
}
function No(e) {
    return Wv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function pt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Zt(e) {
    var t;
    return (t = (Wv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Wv(e) {
    return Aa() ? e instanceof Node || e instanceof pt(e).Node : !1
}
function Lt(e) {
    return Aa() ? e instanceof Element || e instanceof pt(e).Element : !1
}
function qt(e) {
    return Aa() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1
}
function Xf(e) {
    return !Aa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot
}
function Os(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Dt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function oC(e) {
    return ["table", "td", "th"].includes(No(e))
}
function _a(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function cd(e) {
    const t = ud()
        , n = Lt(e) ? Dt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function sC(e) {
    let t = Qn(e);
    for (; qt(t) && !go(t);) {
        if (cd(t))
            return t;
        if (_a(t))
            return null;
        t = Qn(t)
    }
    return null
}
function ud() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function go(e) {
    return ["html", "body", "#document"].includes(No(e))
}
function Dt(e) {
    return pt(e).getComputedStyle(e)
}
function Ia(e) {
    return Lt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Qn(e) {
    if (No(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Xf(e) && e.host || Zt(e);
    return Xf(t) ? t.host : t
}
function Kv(e) {
    const t = Qn(e);
    return go(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qt(t) && Os(t) ? t : Kv(t)
}
function ys(e, t, n) {
    var r;
    t === void 0 && (t = []),
        n === void 0 && (n = !0);
    const o = Kv(e)
        , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
        , i = pt(o);
    if (s) {
        const a = Hc(i);
        return t.concat(i, i.visualViewport || [], Os(o) ? o : [], a && n ? ys(a) : [])
    }
    return t.concat(o, ys(o, [], n))
}
function Hc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Qv(e) {
    const t = Dt(e);
    let n = parseFloat(t.width) || 0
        , r = parseFloat(t.height) || 0;
    const o = qt(e)
        , s = o ? e.offsetWidth : n
        , i = o ? e.offsetHeight : r
        , a = ta(n) !== s || ta(r) !== i;
    return a && (n = s,
        r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function dd(e) {
    return Lt(e) ? e : e.contextElement
}
function Gr(e) {
    const t = dd(e);
    if (!qt(t))
        return Wn(1);
    const n = t.getBoundingClientRect()
        , { width: r, height: o, $: s } = Qv(t);
    let i = (s ? ta(n.width) : n.width) / r
        , a = (s ? ta(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
        (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const iC = Wn(0);
function Yv(e) {
    const t = pt(e);
    return !ud() || !t.visualViewport ? iC : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function aC(e, t, n) {
    return t === void 0 && (t = !1),
        !n || t && n !== pt(e) ? !1 : t
}
function yr(e, t, n, r) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
        , s = dd(e);
    let i = Wn(1);
    t && (r ? Lt(r) && (i = Gr(r)) : i = Gr(e));
    const a = aC(s, n, r) ? Yv(s) : Wn(0);
    let c = (o.left + a.x) / i.x
        , u = (o.top + a.y) / i.y
        , h = o.width / i.x
        , p = o.height / i.y;
    if (s) {
        const d = pt(s)
            , w = r && Lt(r) ? pt(r) : r;
        let x = d
            , m = Hc(x);
        for (; m && r && w !== x;) {
            const S = Gr(m)
                , g = m.getBoundingClientRect()
                , f = Dt(m)
                , y = g.left + (m.clientLeft + parseFloat(f.paddingLeft)) * S.x
                , C = g.top + (m.clientTop + parseFloat(f.paddingTop)) * S.y;
            c *= S.x,
                u *= S.y,
                h *= S.x,
                p *= S.y,
                c += y,
                u += C,
                x = pt(m),
                m = Hc(x)
        }
    }
    return ra({
        width: h,
        height: p,
        x: c,
        y: u
    })
}
function lC(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const s = o === "fixed"
        , i = Zt(r)
        , a = t ? _a(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
        , u = Wn(1);
    const h = Wn(0)
        , p = qt(r);
    if ((p || !p && !s) && ((No(r) !== "body" || Os(i)) && (c = Ia(r)),
        qt(r))) {
        const d = yr(r);
        u = Gr(r),
            h.x = d.x + r.clientLeft,
            h.y = d.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + h.x,
        y: n.y * u.y - c.scrollTop * u.y + h.y
    }
}
function cC(e) {
    return Array.from(e.getClientRects())
}
function Vc(e, t) {
    const n = Ia(e).scrollLeft;
    return t ? t.left + n : yr(Zt(e)).left + n
}
function uC(e) {
    const t = Zt(e)
        , n = Ia(e)
        , r = e.ownerDocument.body
        , o = ut(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
        , s = ut(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Vc(e);
    const a = -n.scrollTop;
    return Dt(r).direction === "rtl" && (i += ut(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function dC(e, t) {
    const n = pt(e)
        , r = Zt(e)
        , o = n.visualViewport;
    let s = r.clientWidth
        , i = r.clientHeight
        , a = 0
        , c = 0;
    if (o) {
        s = o.width,
            i = o.height;
        const u = ud();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
            c = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: c
    }
}
function fC(e, t) {
    const n = yr(e, !0, t === "fixed")
        , r = n.top + e.clientTop
        , o = n.left + e.clientLeft
        , s = qt(e) ? Gr(e) : Wn(1)
        , i = e.clientWidth * s.x
        , a = e.clientHeight * s.y
        , c = o * s.x
        , u = r * s.y;
    return {
        width: i,
        height: a,
        x: c,
        y: u
    }
}
function qf(e, t, n) {
    let r;
    if (t === "viewport")
        r = dC(e, n);
    else if (t === "document")
        r = uC(Zt(e));
    else if (Lt(t))
        r = fC(t, n);
    else {
        const o = Yv(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ra(r)
}
function Gv(e, t) {
    const n = Qn(e);
    return n === t || !Lt(n) || go(n) ? !1 : Dt(n).position === "fixed" || Gv(n, t)
}
function pC(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = ys(e, [], !1).filter(a => Lt(a) && No(a) !== "body")
        , o = null;
    const s = Dt(e).position === "fixed";
    let i = s ? Qn(e) : e;
    for (; Lt(i) && !go(i);) {
        const a = Dt(i)
            , c = cd(i);
        !c && a.position === "fixed" && (o = null),
            (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Os(i) && !c && Gv(e, i)) ? r = r.filter(h => h !== i) : o = a,
            i = Qn(i)
    }
    return t.set(e, r),
        r
}
function hC(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [...n === "clippingAncestors" ? _a(t) ? [] : pC(t, this._c) : [].concat(n), r]
        , a = i[0]
        , c = i.reduce((u, h) => {
            const p = qf(t, h, o);
            return u.top = ut(p.top, u.top),
                u.right = Vn(p.right, u.right),
                u.bottom = Vn(p.bottom, u.bottom),
                u.left = ut(p.left, u.left),
                u
        }
            , qf(t, a, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}
function mC(e) {
    const { width: t, height: n } = Qv(e);
    return {
        width: t,
        height: n
    }
}
function vC(e, t, n) {
    const r = qt(t)
        , o = Zt(t)
        , s = n === "fixed"
        , i = yr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = Wn(0);
    if (r || !r && !s)
        if ((No(t) !== "body" || Os(o)) && (a = Ia(t)),
            r) {
            const w = yr(t, !0, s, t);
            c.x = w.x + t.clientLeft,
                c.y = w.y + t.clientTop
        } else
            o && (c.x = Vc(o));
    let u = 0
        , h = 0;
    if (o && !r && !s) {
        const w = o.getBoundingClientRect();
        h = w.top + a.scrollTop,
            u = w.left + a.scrollLeft - Vc(o, w)
    }
    const p = i.left + a.scrollLeft - c.x - u
        , d = i.top + a.scrollTop - c.y - h;
    return {
        x: p,
        y: d,
        width: i.width,
        height: i.height
    }
}
function Pl(e) {
    return Dt(e).position === "static"
}
function Zf(e, t) {
    if (!qt(e) || Dt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Zt(e) === n && (n = n.ownerDocument.body),
        n
}
function Xv(e, t) {
    const n = pt(e);
    if (_a(e))
        return n;
    if (!qt(e)) {
        let o = Qn(e);
        for (; o && !go(o);) {
            if (Lt(o) && !Pl(o))
                return o;
            o = Qn(o)
        }
        return n
    }
    let r = Zf(e, t);
    for (; r && oC(r) && Pl(r);)
        r = Zf(r, t);
    return r && go(r) && Pl(r) && !cd(r) ? n : r || sC(e) || n
}
const gC = async function (e) {
    const t = this.getOffsetParent || Xv
        , n = this.getDimensions
        , r = await n(e.floating);
    return {
        reference: vC(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function yC(e) {
    return Dt(e).direction === "rtl"
}
const xC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: lC,
    getDocumentElement: Zt,
    getClippingRect: hC,
    getOffsetParent: Xv,
    getElementRects: gC,
    getClientRects: cC,
    getDimensions: mC,
    getScale: Gr,
    isElement: Lt,
    isRTL: yC
};
function wC(e, t) {
    let n = null, r;
    const o = Zt(e);
    function s() {
        var a;
        clearTimeout(r),
            (a = n) == null || a.disconnect(),
            n = null
    }
    function i(a, c) {
        a === void 0 && (a = !1),
            c === void 0 && (c = 1),
            s();
        const { left: u, top: h, width: p, height: d } = e.getBoundingClientRect();
        if (a || t(),
            !p || !d)
            return;
        const w = ri(h)
            , x = ri(o.clientWidth - (u + p))
            , m = ri(o.clientHeight - (h + d))
            , S = ri(u)
            , f = {
                rootMargin: -w + "px " + -x + "px " + -m + "px " + -S + "px",
                threshold: ut(0, Vn(1, c)) || 1
            };
        let y = !0;
        function C(b) {
            const k = b[0].intersectionRatio;
            if (k !== c) {
                if (!y)
                    return i();
                k ? i(!1, k) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }
                    , 1e3)
            }
            y = !1
        }
        try {
            n = new IntersectionObserver(C, {
                ...f,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, f)
        }
        n.observe(e)
    }
    return i(!0),
        s
}
function SC(e, t, n, r) {
    r === void 0 && (r = {});
    const { ancestorScroll: o = !0, ancestorResize: s = !0, elementResize: i = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r
        , u = dd(e)
        , h = o || s ? [...u ? ys(u) : [], ...ys(t)] : [];
    h.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
            s && g.addEventListener("resize", n)
    }
    );
    const p = u && a ? wC(u, n) : null;
    let d = -1
        , w = null;
    i && (w = new ResizeObserver(g => {
        let [f] = g;
        f && f.target === u && w && (w.unobserve(t),
            cancelAnimationFrame(d),
            d = requestAnimationFrame(() => {
                var y;
                (y = w) == null || y.observe(t)
            }
            )),
            n()
    }
    ),
        u && !c && w.observe(u),
        w.observe(t));
    let x, m = c ? yr(e) : null;
    c && S();
    function S() {
        const g = yr(e);
        m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(),
            m = g,
            x = requestAnimationFrame(S)
    }
    return n(),
        () => {
            var g;
            h.forEach(f => {
                o && f.removeEventListener("scroll", n),
                    s && f.removeEventListener("resize", n)
            }
            ),
                p == null || p(),
                (g = w) == null || g.disconnect(),
                w = null,
                c && cancelAnimationFrame(x)
        }
}
const CC = eC
    , bC = tC
    , NC = qS
    , EC = rC
    , kC = ZS
    , Jf = XS
    , jC = nC
    , PC = (e, t, n) => {
        const r = new Map
            , o = {
                platform: xC,
                ...n
            }
            , s = {
                ...o.platform,
                _c: r
            };
        return GS(e, t, {
            ...o,
            platform: s
        })
    }
    ;
var bi = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function oa(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
                n !== t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (!oa(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
            n = o.length,
            n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !oa(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function qv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ep(e, t) {
    const n = qv(e);
    return Math.round(t * n) / n
}
function Tl(e) {
    const t = v.useRef(e);
    return bi(() => {
        t.current = e
    }
    ),
        t
}
function TC(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: s, floating: i } = {}, transform: a = !0, whileElementsMounted: c, open: u } = e
        , [h, p] = v.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        })
        , [d, w] = v.useState(r);
    oa(d, r) || w(r);
    const [x, m] = v.useState(null)
        , [S, g] = v.useState(null)
        , f = v.useCallback(N => {
            N !== k.current && (k.current = N,
                m(N))
        }
            , [])
        , y = v.useCallback(N => {
            N !== E.current && (E.current = N,
                g(N))
        }
            , [])
        , C = s || x
        , b = i || S
        , k = v.useRef(null)
        , E = v.useRef(null)
        , j = v.useRef(h)
        , _ = c != null
        , A = Tl(c)
        , $ = Tl(o)
        , L = Tl(u)
        , H = v.useCallback(() => {
            if (!k.current || !E.current)
                return;
            const N = {
                placement: t,
                strategy: n,
                middleware: d
            };
            $.current && (N.platform = $.current),
                PC(k.current, E.current, N).then(R => {
                    const z = {
                        ...R,
                        isPositioned: L.current !== !1
                    };
                    O.current && !oa(j.current, z) && (j.current = z,
                        Cr.flushSync(() => {
                            p(z)
                        }
                        ))
                }
                )
        }
            , [d, t, n, $, L]);
    bi(() => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
            p(N => ({
                ...N,
                isPositioned: !1
            })))
    }
        , [u]);
    const O = v.useRef(!1);
    bi(() => (O.current = !0,
        () => {
            O.current = !1
        }
    ), []),
        bi(() => {
            if (C && (k.current = C),
                b && (E.current = b),
                C && b) {
                if (A.current)
                    return A.current(C, b, H);
                H()
            }
        }
            , [C, b, H, A, _]);
    const W = v.useMemo(() => ({
        reference: k,
        floating: E,
        setReference: f,
        setFloating: y
    }), [f, y])
        , F = v.useMemo(() => ({
            reference: C,
            floating: b
        }), [C, b])
        , V = v.useMemo(() => {
            const N = {
                position: n,
                left: 0,
                top: 0
            };
            if (!F.floating)
                return N;
            const R = ep(F.floating, h.x)
                , z = ep(F.floating, h.y);
            return a ? {
                ...N,
                transform: "translate(" + R + "px, " + z + "px)",
                ...qv(F.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: R,
                top: z
            }
        }
            , [n, a, F.floating, h.x, h.y]);
    return v.useMemo(() => ({
        ...h,
        update: H,
        refs: W,
        elements: F,
        floatingStyles: V
    }), [h, H, W, F, V])
}
const RC = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Jf({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Jf({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
    , MC = (e, t) => ({
        ...CC(e),
        options: [e, t]
    })
    , OC = (e, t) => ({
        ...bC(e),
        options: [e, t]
    })
    , AC = (e, t) => ({
        ...jC(e),
        options: [e, t]
    })
    , _C = (e, t) => ({
        ...NC(e),
        options: [e, t]
    })
    , IC = (e, t) => ({
        ...EC(e),
        options: [e, t]
    })
    , LC = (e, t) => ({
        ...kC(e),
        options: [e, t]
    })
    , DC = (e, t) => ({
        ...RC(e),
        options: [e, t]
    });
var FC = "Arrow"
    , Zv = v.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...s } = e;
        return l.jsx(re.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : l.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    }
    );
Zv.displayName = FC;
var zC = Zv;
function $C(e, t = []) {
    let n = [];
    function r(s, i) {
        const a = v.createContext(i)
            , c = n.length;
        n = [...n, i];
        function u(p) {
            const { scope: d, children: w, ...x } = p
                , m = (d == null ? void 0 : d[e][c]) || a
                , S = v.useMemo(() => x, Object.values(x));
            return l.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        function h(p, d) {
            const w = (d == null ? void 0 : d[e][c]) || a
                , x = v.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
            [u, h]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function (a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    }
        ;
    return o.scopeName = e,
        [r, BC(o, ...t)]
}
function BC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (s) {
            const i = r.reduce((a, { useScope: c, scopeName: u }) => {
                const p = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...p
                }
            }
                , {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
function UC(e) {
    const [t, n] = v.useState(void 0);
    return Ke(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize" in s) {
                    const c = s.borderBoxSize
                        , u = Array.isArray(c) ? c[0] : c;
                    i = u.inlineSize,
                        a = u.blockSize
                } else
                    i = e.offsetWidth,
                        a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
                () => r.unobserve(e)
        } else
            n(void 0)
    }
        , [e]),
        t
}
var fd = "Popper"
    , [Jv, La] = $C(fd)
    , [HC, eg] = Jv(fd)
    , tg = e => {
        const { __scopePopper: t, children: n } = e
            , [r, o] = v.useState(null);
        return l.jsx(HC, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    }
    ;
tg.displayName = fd;
var ng = "PopperAnchor"
    , rg = v.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e
            , s = eg(ng, n)
            , i = v.useRef(null)
            , a = be(t, i);
        return v.useEffect(() => {
            s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }
        ),
            r ? null : l.jsx(re.div, {
                ...o,
                ref: a
            })
    }
    );
rg.displayName = ng;
var pd = "PopperContent"
    , [VC, WC] = Jv(pd)
    , og = v.forwardRef((e, t) => {
        var U, ne, we, ee, se, te;
        const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: i = 0, arrowPadding: a = 0, avoidCollisions: c = !0, collisionBoundary: u = [], collisionPadding: h = 0, sticky: p = "partial", hideWhenDetached: d = !1, updatePositionStrategy: w = "optimized", onPlaced: x, ...m } = e
            , S = eg(pd, n)
            , [g, f] = v.useState(null)
            , y = be(t, Qe => f(Qe))
            , [C, b] = v.useState(null)
            , k = UC(C)
            , E = (k == null ? void 0 : k.width) ?? 0
            , j = (k == null ? void 0 : k.height) ?? 0
            , _ = r + (s !== "center" ? "-" + s : "")
            , A = typeof h == "number" ? h : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...h
            }
            , $ = Array.isArray(u) ? u : [u]
            , L = $.length > 0
            , H = {
                padding: A,
                boundary: $.filter(QC),
                altBoundary: L
            }
            , { refs: O, floatingStyles: W, placement: F, isPositioned: V, middlewareData: N } = TC({
                strategy: "fixed",
                placement: _,
                whileElementsMounted: (...Qe) => SC(...Qe, {
                    animationFrame: w === "always"
                }),
                elements: {
                    reference: S.anchor
                },
                middleware: [MC({
                    mainAxis: o + j,
                    alignmentAxis: i
                }), c && OC({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: p === "partial" ? AC() : void 0,
                    ...H
                }), c && _C({
                    ...H
                }), IC({
                    ...H,
                    apply: ({ elements: Qe, rects: it, availableWidth: mn, availableHeight: yt }) => {
                        const { width: Jn, height: Ya } = it.reference
                            , _e = Qe.floating.style;
                        _e.setProperty("--radix-popper-available-width", `${mn}px`),
                            _e.setProperty("--radix-popper-available-height", `${yt}px`),
                            _e.setProperty("--radix-popper-anchor-width", `${Jn}px`),
                            _e.setProperty("--radix-popper-anchor-height", `${Ya}px`)
                    }
                }), C && DC({
                    element: C,
                    padding: a
                }), YC({
                    arrowWidth: E,
                    arrowHeight: j
                }), d && LC({
                    strategy: "referenceHidden",
                    ...H
                })]
            })
            , [R, z] = ag(F)
            , I = mt(x);
        Ke(() => {
            V && (I == null || I())
        }
            , [V, I]);
        const B = (U = N.arrow) == null ? void 0 : U.x
            , G = (ne = N.arrow) == null ? void 0 : ne.y
            , oe = ((we = N.arrow) == null ? void 0 : we.centerOffset) !== 0
            , [Me, Z] = v.useState();
        return Ke(() => {
            g && Z(window.getComputedStyle(g).zIndex)
        }
            , [g]),
            l.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...W,
                    transform: V ? W.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: Me,
                    "--radix-popper-transform-origin": [(ee = N.transformOrigin) == null ? void 0 : ee.x, (se = N.transformOrigin) == null ? void 0 : se.y].join(" "),
                    ...((te = N.hide) == null ? void 0 : te.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: l.jsx(VC, {
                    scope: n,
                    placedSide: R,
                    onArrowChange: b,
                    arrowX: B,
                    arrowY: G,
                    shouldHideArrow: oe,
                    children: l.jsx(re.div, {
                        "data-side": R,
                        "data-align": z,
                        ...m,
                        ref: y,
                        style: {
                            ...m.style,
                            animation: V ? void 0 : "none"
                        }
                    })
                })
            })
    }
    );
og.displayName = pd;
var sg = "PopperArrow"
    , KC = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    }
    , ig = v.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t
            , s = WC(sg, r)
            , i = KC[s.placedSide];
        return l.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: l.jsx(zC, {
                ...o,
                ref: n,
                style: {
                    ...o.style,
                    display: "block"
                }
            })
        })
    });
ig.displayName = sg;
function QC(e) {
    return e !== null
}
var YC = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, g, f;
        const { placement: n, rects: r, middlewareData: o } = t
            , i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0
            , a = i ? 0 : e.arrowWidth
            , c = i ? 0 : e.arrowHeight
            , [u, h] = ag(n)
            , p = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[h]
            , d = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
            , w = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + c / 2;
        let x = ""
            , m = "";
        return u === "bottom" ? (x = i ? p : `${d}px`,
            m = `${-c}px`) : u === "top" ? (x = i ? p : `${d}px`,
                m = `${r.floating.height + c}px`) : u === "right" ? (x = `${-c}px`,
                    m = i ? p : `${w}px`) : u === "left" && (x = `${r.floating.width + c}px`,
                        m = i ? p : `${w}px`),
        {
            data: {
                x,
                y: m
            }
        }
    }
});
function ag(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var GC = tg
    , lg = rg
    , cg = og
    , ug = ig
    , [Da, CE] = qu("Tooltip", [La])
    , hd = La()
    , dg = "TooltipProvider"
    , XC = 700
    , tp = "tooltip.open"
    , [qC, fg] = Da(dg)
    , pg = e => {
        const { __scopeTooltip: t, delayDuration: n = XC, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: s } = e
            , [i, a] = v.useState(!0)
            , c = v.useRef(!1)
            , u = v.useRef(0);
        return v.useEffect(() => {
            const h = u.current;
            return () => window.clearTimeout(h)
        }
            , []),
            l.jsx(qC, {
                scope: t,
                isOpenDelayed: i,
                delayDuration: n,
                onOpen: v.useCallback(() => {
                    window.clearTimeout(u.current),
                        a(!1)
                }
                    , []),
                onClose: v.useCallback(() => {
                    window.clearTimeout(u.current),
                        u.current = window.setTimeout(() => a(!0), r)
                }
                    , [r]),
                isPointerInTransitRef: c,
                onPointerInTransitChange: v.useCallback(h => {
                    c.current = h
                }
                    , []),
                disableHoverableContent: o,
                children: s
            })
    }
    ;
pg.displayName = dg;
var hg = "Tooltip"
    , [bE, Fa] = Da(hg)
    , Wc = "TooltipTrigger"
    , ZC = v.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e
            , o = Fa(Wc, n)
            , s = fg(Wc, n)
            , i = hd(n)
            , a = v.useRef(null)
            , c = be(t, a, o.onTriggerChange)
            , u = v.useRef(!1)
            , h = v.useRef(!1)
            , p = v.useCallback(() => u.current = !1, []);
        return v.useEffect(() => () => document.removeEventListener("pointerup", p), [p]),
            l.jsx(lg, {
                asChild: !0,
                ...i,
                children: l.jsx(re.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: c,
                    onPointerMove: q(e.onPointerMove, d => {
                        d.pointerType !== "touch" && !h.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                            h.current = !0)
                    }
                    ),
                    onPointerLeave: q(e.onPointerLeave, () => {
                        o.onTriggerLeave(),
                            h.current = !1
                    }
                    ),
                    onPointerDown: q(e.onPointerDown, () => {
                        u.current = !0,
                            document.addEventListener("pointerup", p, {
                                once: !0
                            })
                    }
                    ),
                    onFocus: q(e.onFocus, () => {
                        u.current || o.onOpen()
                    }
                    ),
                    onBlur: q(e.onBlur, o.onClose),
                    onClick: q(e.onClick, o.onClose)
                })
            })
    }
    );
ZC.displayName = Wc;
var JC = "TooltipPortal"
    , [NE, eb] = Da(JC, {
        forceMount: void 0
    })
    , yo = "TooltipContent"
    , mg = v.forwardRef((e, t) => {
        const n = eb(yo, e.__scopeTooltip)
            , { forceMount: r = n.forceMount, side: o = "top", ...s } = e
            , i = Fa(yo, e.__scopeTooltip);
        return l.jsx(Ju, {
            present: r || i.open,
            children: i.disableHoverableContent ? l.jsx(vg, {
                side: o,
                ...s,
                ref: t
            }) : l.jsx(tb, {
                side: o,
                ...s,
                ref: t
            })
        })
    }
    )
    , tb = v.forwardRef((e, t) => {
        const n = Fa(yo, e.__scopeTooltip)
            , r = fg(yo, e.__scopeTooltip)
            , o = v.useRef(null)
            , s = be(t, o)
            , [i, a] = v.useState(null)
            , { trigger: c, onClose: u } = n
            , h = o.current
            , { onPointerInTransitChange: p } = r
            , d = v.useCallback(() => {
                a(null),
                    p(!1)
            }
                , [p])
            , w = v.useCallback((x, m) => {
                const S = x.currentTarget
                    , g = {
                        x: x.clientX,
                        y: x.clientY
                    }
                    , f = sb(g, S.getBoundingClientRect())
                    , y = ib(g, f)
                    , C = ab(m.getBoundingClientRect())
                    , b = cb([...y, ...C]);
                a(b),
                    p(!0)
            }
                , [p]);
        return v.useEffect(() => () => d(), [d]),
            v.useEffect(() => {
                if (c && h) {
                    const x = S => w(S, h)
                        , m = S => w(S, c);
                    return c.addEventListener("pointerleave", x),
                        h.addEventListener("pointerleave", m),
                        () => {
                            c.removeEventListener("pointerleave", x),
                                h.removeEventListener("pointerleave", m)
                        }
                }
            }
                , [c, h, w, d]),
            v.useEffect(() => {
                if (i) {
                    const x = m => {
                        const S = m.target
                            , g = {
                                x: m.clientX,
                                y: m.clientY
                            }
                            , f = (c == null ? void 0 : c.contains(S)) || (h == null ? void 0 : h.contains(S))
                            , y = !lb(g, i);
                        f ? d() : y && (d(),
                            u())
                    }
                        ;
                    return document.addEventListener("pointermove", x),
                        () => document.removeEventListener("pointermove", x)
                }
            }
                , [c, h, i, u, d]),
            l.jsx(vg, {
                ...e,
                ref: s
            })
    }
    )
    , [nb, rb] = Da(hg, {
        isInside: !1
    })
    , vg = v.forwardRef((e, t) => {
        const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...a } = e
            , c = Fa(yo, n)
            , u = hd(n)
            , { onClose: h } = c;
        return v.useEffect(() => (document.addEventListener(tp, h),
            () => document.removeEventListener(tp, h)), [h]),
            v.useEffect(() => {
                if (c.trigger) {
                    const p = d => {
                        const w = d.target;
                        w != null && w.contains(c.trigger) && h()
                    }
                        ;
                    return window.addEventListener("scroll", p, {
                        capture: !0
                    }),
                        () => window.removeEventListener("scroll", p, {
                            capture: !0
                        })
                }
            }
                , [c.trigger, h]),
            l.jsx(Ta, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: p => p.preventDefault(),
                onDismiss: h,
                children: l.jsxs(cg, {
                    "data-state": c.stateAttribute,
                    ...u,
                    ...a,
                    ref: t,
                    style: {
                        ...a.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    },
                    children: [l.jsx(nv, {
                        children: r
                    }), l.jsx(nb, {
                        scope: n,
                        isInside: !0,
                        children: l.jsx(Kw, {
                            id: c.contentId,
                            role: "tooltip",
                            children: o || r
                        })
                    })]
                })
            })
    }
    );
mg.displayName = yo;
var gg = "TooltipArrow"
    , ob = v.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e
            , o = hd(n);
        return rb(gg, n).isInside ? null : l.jsx(ug, {
            ...o,
            ...r,
            ref: t
        })
    }
    );
ob.displayName = gg;
function sb(e, t) {
    const n = Math.abs(t.top - e.y)
        , r = Math.abs(t.bottom - e.y)
        , o = Math.abs(t.right - e.x)
        , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}
function ib(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}
function ab(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function lb(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s].x
            , c = t[s].y
            , u = t[i].x
            , h = t[i].y;
        c > r != h > r && n < (u - a) * (r - c) / (h - c) + a && (o = !o)
    }
    return o
}
function cb(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
        ub(t)
}
function ub(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const s = t[t.length - 1]
                , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const s = n[n.length - 1]
                , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
        t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var db = pg
    , yg = mg;
const fb = db
    , pb = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => l.jsx(yg, {
        ref: r,
        sideOffset: t,
        className: ce("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
pb.displayName = yg.displayName;
var za = class {
    constructor() {
        this.listeners = new Set,
            this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
            this.onSubscribe(),
            () => {
                this.listeners.delete(e),
                    this.onUnsubscribe()
            }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() { }
    onUnsubscribe() { }
}
    , $a = typeof window > "u" || "Deno" in globalThis;
function Tt() { }
function hb(e, t) {
    return typeof e == "function" ? e(t) : e
}
function mb(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function vb(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function np(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gb(e, t) {
    return typeof e == "function" ? e(t) : e
}
function rp(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== md(i, t.options))
                return !1
        } else if (!ws(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const c = t.isActive();
        if (n === "active" && !c || n === "inactive" && c)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function op(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: s } = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (xs(t.options.mutationKey) !== xs(s))
                return !1
        } else if (!ws(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function md(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || xs)(e)
}
function xs(e) {
    return JSON.stringify(e, (t, n) => Kc(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o],
        r), {}) : n)
}
function ws(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !ws(e[n], t[n])) : !1
}
function xg(e, t) {
    if (e === t)
        return e;
    const n = sp(e) && sp(t);
    if (n || Kc(e) && Kc(t)) {
        const r = n ? e : Object.keys(e)
            , o = r.length
            , s = n ? t : Object.keys(t)
            , i = s.length
            , a = n ? [] : {};
        let c = 0;
        for (let u = 0; u < i; u++) {
            const h = n ? u : s[u];
            (!n && r.includes(h) || n) && e[h] === void 0 && t[h] === void 0 ? (a[h] = void 0,
                c++) : (a[h] = xg(e[h], t[h]),
                    a[h] === e[h] && e[h] !== void 0 && c++)
        }
        return o === i && c === o ? e : a
    }
    return t
}
function sp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Kc(e) {
    if (!ip(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!ip(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function ip(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function yb(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function xb(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? xg(e, t) : t
}
function wb(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Sb(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var vd = Symbol();
function wg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === vd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var ir, kn, Zr, Mp, Cb = (Mp = class extends za {
    constructor() {
        super();
        ie(this, ir);
        ie(this, kn);
        ie(this, Zr);
        Y(this, Zr, t => {
            if (!$a && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                    () => {
                        window.removeEventListener("visibilitychange", n)
                    }
            }
        }
        )
    }
    onSubscribe() {
        P(this, kn) || this.setEventListener(P(this, Zr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, kn)) == null || t.call(this),
            Y(this, kn, void 0))
    }
    setEventListener(t) {
        var n;
        Y(this, Zr, t),
            (n = P(this, kn)) == null || n.call(this),
            Y(this, kn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }
            ))
    }
    setFocused(t) {
        P(this, ir) !== t && (Y(this, ir, t),
            this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, ir) == "boolean" ? P(this, ir) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
    ,
    ir = new WeakMap,
    kn = new WeakMap,
    Zr = new WeakMap,
    Mp), Sg = new Cb, Jr, jn, eo, Op, bb = (Op = class extends za {
        constructor() {
            super();
            ie(this, Jr, !0);
            ie(this, jn);
            ie(this, eo);
            Y(this, eo, t => {
                if (!$a && window.addEventListener) {
                    const n = () => t(!0)
                        , r = () => t(!1);
                    return window.addEventListener("online", n, !1),
                        window.addEventListener("offline", r, !1),
                        () => {
                            window.removeEventListener("online", n),
                                window.removeEventListener("offline", r)
                        }
                }
            }
            )
        }
        onSubscribe() {
            P(this, jn) || this.setEventListener(P(this, eo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = P(this, jn)) == null || t.call(this),
                Y(this, jn, void 0))
        }
        setEventListener(t) {
            var n;
            Y(this, eo, t),
                (n = P(this, jn)) == null || n.call(this),
                Y(this, jn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            P(this, Jr) !== t && (Y(this, Jr, t),
                this.listeners.forEach(r => {
                    r(t)
                }
                ))
        }
        isOnline() {
            return P(this, Jr)
        }
    }
        ,
        Jr = new WeakMap,
        jn = new WeakMap,
        eo = new WeakMap,
        Op), sa = new bb;
function Nb() {
    let e, t;
    const n = new Promise((o, s) => {
        e = o,
            t = s
    }
    );
    n.status = "pending",
        n.catch(() => { }
        );
    function r(o) {
        Object.assign(n, o),
            delete n.resolve,
            delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
            e(o)
    }
        ,
        n.reject = o => {
            r({
                status: "rejected",
                reason: o
            }),
                t(o)
        }
        ,
        n
}
function Eb(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Cg(e) {
    return (e ?? "online") === "online" ? sa.isOnline() : !0
}
var bg = class extends Error {
    constructor(e) {
        super("CancelledError"),
            this.revert = e == null ? void 0 : e.revert,
            this.silent = e == null ? void 0 : e.silent
    }
}
    ;
function Rl(e) {
    return e instanceof bg
}
function Ng(e) {
    let t = !1, n = 0, r = !1, o;
    const s = Nb()
        , i = m => {
            var S;
            r || (d(new bg(m)),
                (S = e.abort) == null || S.call(e))
        }
        , a = () => {
            t = !0
        }
        , c = () => {
            t = !1
        }
        , u = () => Sg.isFocused() && (e.networkMode === "always" || sa.isOnline()) && e.canRun()
        , h = () => Cg(e.networkMode) && e.canRun()
        , p = m => {
            var S;
            r || (r = !0,
                (S = e.onSuccess) == null || S.call(e, m),
                o == null || o(),
                s.resolve(m))
        }
        , d = m => {
            var S;
            r || (r = !0,
                (S = e.onError) == null || S.call(e, m),
                o == null || o(),
                s.reject(m))
        }
        , w = () => new Promise(m => {
            var S;
            o = g => {
                (r || u()) && m(g)
            }
                ,
                (S = e.onPause) == null || S.call(e)
        }
        ).then(() => {
            var m;
            o = void 0,
                r || (m = e.onContinue) == null || m.call(e)
        }
        )
        , x = () => {
            if (r)
                return;
            let m;
            const S = n === 0 ? e.initialPromise : void 0;
            try {
                m = S ?? e.fn()
            } catch (g) {
                m = Promise.reject(g)
            }
            Promise.resolve(m).then(p).catch(g => {
                var k;
                if (r)
                    return;
                const f = e.retry ?? ($a ? 0 : 3)
                    , y = e.retryDelay ?? Eb
                    , C = typeof y == "function" ? y(n, g) : y
                    , b = f === !0 || typeof f == "number" && n < f || typeof f == "function" && f(n, g);
                if (t || !b) {
                    d(g);
                    return
                }
                n++,
                    (k = e.onFail) == null || k.call(e, n, g),
                    yb(C).then(() => u() ? void 0 : w()).then(() => {
                        t ? d(g) : x()
                    }
                    )
            }
            )
        }
        ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
            s),
        cancelRetry: a,
        continueRetry: c,
        canStart: h,
        start: () => (h() ? x() : w().then(x),
            s)
    }
}
function kb() {
    let e = []
        , t = 0
        , n = a => {
            a()
        }
        , r = a => {
            a()
        }
        , o = a => setTimeout(a, 0);
    const s = a => {
        t ? e.push(a) : o(() => {
            n(a)
        }
        )
    }
        , i = () => {
            const a = e;
            e = [],
                a.length && o(() => {
                    r(() => {
                        a.forEach(c => {
                            n(c)
                        }
                        )
                    }
                    )
                }
                )
        }
        ;
    return {
        batch: a => {
            let c;
            t++;
            try {
                c = a()
            } finally {
                t--,
                    t || i()
            }
            return c
        }
        ,
        batchCalls: a => (...c) => {
            s(() => {
                a(...c)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var Xe = kb(), ar, Ap, Eg = (Ap = class {
    constructor() {
        ie(this, ar)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
            mb(this.gcTime) && Y(this, ar, setTimeout(() => {
                this.optionalRemove()
            }
                , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? ($a ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, ar) && (clearTimeout(P(this, ar)),
            Y(this, ar, void 0))
    }
}
    ,
    ar = new WeakMap,
    Ap), to, no, xt, Be, Ns, lr, Rt, en, _p, jb = (_p = class extends Eg {
        constructor(t) {
            super();
            ie(this, Rt);
            ie(this, to);
            ie(this, no);
            ie(this, xt);
            ie(this, Be);
            ie(this, Ns);
            ie(this, lr);
            Y(this, lr, !1),
                Y(this, Ns, t.defaultOptions),
                this.setOptions(t.options),
                this.observers = [],
                Y(this, xt, t.cache),
                this.queryKey = t.queryKey,
                this.queryHash = t.queryHash,
                Y(this, to, Tb(this.options)),
                this.state = t.state ?? P(this, to),
                this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = P(this, Be)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = {
                ...P(this, Ns),
                ...t
            },
                this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && P(this, xt).remove(this)
        }
        setData(t, n) {
            const r = xb(this.state.data, t, this.options);
            return Fe(this, Rt, en).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }),
                r
        }
        setState(t, n) {
            Fe(this, Rt, en).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = P(this, Be)) == null ? void 0 : r.promise;
            return (o = P(this, Be)) == null || o.cancel(t),
                n ? n.then(Tt).catch(Tt) : Promise.resolve()
        }
        destroy() {
            super.destroy(),
                this.cancel({
                    silent: !0
                })
        }
        reset() {
            this.destroy(),
                this.setState(P(this, to))
        }
        isActive() {
            return this.observers.some(t => gb(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === vd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !vb(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
                (n = P(this, Be)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
                (n = P(this, Be)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t),
                this.clearGcTimeout(),
                P(this, xt).notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
                this.observers.length || (P(this, Be) && (P(this, lr) ? P(this, Be).cancel({
                    revert: !0
                }) : P(this, Be).cancelRetry()),
                    this.scheduleGc()),
                P(this, xt).notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Fe(this, Rt, en).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var c, u, h;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                    this.cancel({
                        silent: !0
                    });
                else if (P(this, Be))
                    return P(this, Be).continueRetry(),
                        P(this, Be).promise
            }
            if (t && this.setOptions(t),
                !this.options.queryFn) {
                const p = this.observers.find(d => d.options.queryFn);
                p && this.setOptions(p.options)
            }
            const r = new AbortController
                , o = p => {
                    Object.defineProperty(p, "signal", {
                        enumerable: !0,
                        get: () => (Y(this, lr, !0),
                            r.signal)
                    })
                }
                , s = () => {
                    const p = wg(this.options, n)
                        , d = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(d),
                        Y(this, lr, !1),
                        this.options.persister ? this.options.persister(p, d, this) : p(d)
                }
                , i = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: s
                };
            o(i),
                (c = this.options.behavior) == null || c.onFetch(i, this),
                Y(this, no, this.state),
                (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && Fe(this, Rt, en).call(this, {
                    type: "fetch",
                    meta: (h = i.fetchOptions) == null ? void 0 : h.meta
                });
            const a = p => {
                var d, w, x, m;
                Rl(p) && p.silent || Fe(this, Rt, en).call(this, {
                    type: "error",
                    error: p
                }),
                    Rl(p) || ((w = (d = P(this, xt).config).onError) == null || w.call(d, p, this),
                        (m = (x = P(this, xt).config).onSettled) == null || m.call(x, this.state.data, p, this)),
                    this.scheduleGc()
            }
                ;
            return Y(this, Be, Ng({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: i.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: p => {
                    var d, w, x, m;
                    if (p === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(p)
                    } catch (S) {
                        a(S);
                        return
                    }
                    (w = (d = P(this, xt).config).onSuccess) == null || w.call(d, p, this),
                        (m = (x = P(this, xt).config).onSettled) == null || m.call(x, p, this.state.error, this),
                        this.scheduleGc()
                }
                ,
                onError: a,
                onFail: (p, d) => {
                    Fe(this, Rt, en).call(this, {
                        type: "failed",
                        failureCount: p,
                        error: d
                    })
                }
                ,
                onPause: () => {
                    Fe(this, Rt, en).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: () => {
                    Fe(this, Rt, en).call(this, {
                        type: "continue"
                    })
                }
                ,
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0
            })),
                P(this, Be).start()
        }
    }
        ,
        to = new WeakMap,
        no = new WeakMap,
        xt = new WeakMap,
        Be = new WeakMap,
        Ns = new WeakMap,
        lr = new WeakMap,
        Rt = new WeakSet,
        en = function (t) {
            const n = r => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...r,
                            fetchFailureCount: t.failureCount,
                            fetchFailureReason: t.error
                        };
                    case "pause":
                        return {
                            ...r,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...r,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...r,
                            ...Pb(r.data, this.options),
                            fetchMeta: t.meta ?? null
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            dataUpdateCount: r.dataUpdateCount + 1,
                            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!t.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        const o = t.error;
                        return Rl(o) && o.revert && P(this, no) ? {
                            ...P(this, no),
                            fetchStatus: "idle"
                        } : {
                            ...r,
                            error: o,
                            errorUpdateCount: r.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: r.fetchFailureCount + 1,
                            fetchFailureReason: o,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...r,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...r,
                            ...t.state
                        }
                }
            }
                ;
            this.state = n(this.state),
                Xe.batch(() => {
                    this.observers.forEach(r => {
                        r.onQueryUpdate()
                    }
                    ),
                        P(this, xt).notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                }
                )
        }
        ,
        _p);
function Pb(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Cg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Tb(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
        , n = t !== void 0
        , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ht, Ip, Rb = (Ip = class extends za {
    constructor(t = {}) {
        super();
        ie(this, Ht);
        this.config = t,
            Y(this, Ht, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
            , s = n.queryHash ?? md(o, n);
        let i = this.get(s);
        return i || (i = new jb({
            cache: this,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
            this.add(i)),
            i
    }
    add(t) {
        P(this, Ht).has(t.queryHash) || (P(this, Ht).set(t.queryHash, t),
            this.notify({
                type: "added",
                query: t
            }))
    }
    remove(t) {
        const n = P(this, Ht).get(t.queryHash);
        n && (t.destroy(),
            n === t && P(this, Ht).delete(t.queryHash),
            this.notify({
                type: "removed",
                query: t
            }))
    }
    clear() {
        Xe.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, Ht).get(t)
    }
    getAll() {
        return [...P(this, Ht).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => rp(n, r))
    }
    findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => rp(t, r)) : n
    }
    notify(t) {
        Xe.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Xe.batch(() => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Xe.batch(() => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
    ,
    Ht = new WeakMap,
    Ip), Vt, Ye, cr, Wt, wn, Lp, Mb = (Lp = class extends Eg {
        constructor(t) {
            super();
            ie(this, Wt);
            ie(this, Vt);
            ie(this, Ye);
            ie(this, cr);
            this.mutationId = t.mutationId,
                Y(this, Ye, t.mutationCache),
                Y(this, Vt, []),
                this.state = t.state || Ob(),
                this.setOptions(t.options),
                this.scheduleGc()
        }
        setOptions(t) {
            this.options = t,
                this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            P(this, Vt).includes(t) || (P(this, Vt).push(t),
                this.clearGcTimeout(),
                P(this, Ye).notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: t
                }))
        }
        removeObserver(t) {
            Y(this, Vt, P(this, Vt).filter(n => n !== t)),
                this.scheduleGc(),
                P(this, Ye).notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: t
                })
        }
        optionalRemove() {
            P(this, Vt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Ye).remove(this))
        }
        continue() {
            var t;
            return ((t = P(this, cr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, s, i, a, c, u, h, p, d, w, x, m, S, g, f, y, C, b, k, E;
            Y(this, cr, Ng({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (j, _) => {
                    Fe(this, Wt, wn).call(this, {
                        type: "failed",
                        failureCount: j,
                        error: _
                    })
                }
                ,
                onPause: () => {
                    Fe(this, Wt, wn).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: () => {
                    Fe(this, Wt, wn).call(this, {
                        type: "continue"
                    })
                }
                ,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => P(this, Ye).canRun(this)
            }));
            const n = this.state.status === "pending"
                , r = !P(this, cr).canStart();
            try {
                if (!n) {
                    Fe(this, Wt, wn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }),
                        await ((s = (o = P(this, Ye).config).onMutate) == null ? void 0 : s.call(o, t, this));
                    const _ = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
                    _ !== this.state.context && Fe(this, Wt, wn).call(this, {
                        type: "pending",
                        context: _,
                        variables: t,
                        isPaused: r
                    })
                }
                const j = await P(this, cr).start();
                return await ((u = (c = P(this, Ye).config).onSuccess) == null ? void 0 : u.call(c, j, t, this.state.context, this)),
                    await ((p = (h = this.options).onSuccess) == null ? void 0 : p.call(h, j, t, this.state.context)),
                    await ((w = (d = P(this, Ye).config).onSettled) == null ? void 0 : w.call(d, j, null, this.state.variables, this.state.context, this)),
                    await ((m = (x = this.options).onSettled) == null ? void 0 : m.call(x, j, null, t, this.state.context)),
                    Fe(this, Wt, wn).call(this, {
                        type: "success",
                        data: j
                    }),
                    j
            } catch (j) {
                try {
                    throw await ((g = (S = P(this, Ye).config).onError) == null ? void 0 : g.call(S, j, t, this.state.context, this)),
                    await ((y = (f = this.options).onError) == null ? void 0 : y.call(f, j, t, this.state.context)),
                    await ((b = (C = P(this, Ye).config).onSettled) == null ? void 0 : b.call(C, void 0, j, this.state.variables, this.state.context, this)),
                    await ((E = (k = this.options).onSettled) == null ? void 0 : E.call(k, void 0, j, t, this.state.context)),
                    j
                } finally {
                    Fe(this, Wt, wn).call(this, {
                        type: "error",
                        error: j
                    })
                }
            } finally {
                P(this, Ye).runNext(this)
            }
        }
    }
        ,
        Vt = new WeakMap,
        Ye = new WeakMap,
        cr = new WeakMap,
        Wt = new WeakSet,
        wn = function (t) {
            const n = r => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...r,
                            failureCount: t.failureCount,
                            failureReason: t.error
                        };
                    case "pause":
                        return {
                            ...r,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...r,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            }
                ;
            this.state = n(this.state),
                Xe.batch(() => {
                    P(this, Vt).forEach(r => {
                        r.onMutationUpdate(t)
                    }
                    ),
                        P(this, Ye).notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                }
                )
        }
        ,
        Lp);
function Ob() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var at, Es, Dp, Ab = (Dp = class extends za {
    constructor(t = {}) {
        super();
        ie(this, at);
        ie(this, Es);
        this.config = t,
            Y(this, at, new Map),
            Y(this, Es, Date.now())
    }
    build(t, n, r) {
        const o = new Mb({
            mutationCache: this,
            mutationId: ++Ls(this, Es)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
            o
    }
    add(t) {
        const n = oi(t)
            , r = P(this, at).get(n) ?? [];
        r.push(t),
            P(this, at).set(n, r),
            this.notify({
                type: "added",
                mutation: t
            })
    }
    remove(t) {
        var r;
        const n = oi(t);
        if (P(this, at).has(n)) {
            const o = (r = P(this, at).get(n)) == null ? void 0 : r.filter(s => s !== t);
            o && (o.length === 0 ? P(this, at).delete(n) : P(this, at).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = P(this, at).get(oi(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = P(this, at).get(oi(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Xe.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...P(this, at).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => op(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => op(t, n))
    }
    notify(t) {
        Xe.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Xe.batch(() => Promise.all(t.map(n => n.continue().catch(Tt))))
    }
}
    ,
    at = new WeakMap,
    Es = new WeakMap,
    Dp);
function oi(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function ap(e) {
    return {
        onFetch: (t, n) => {
            var h, p, d, w, x;
            const r = t.options
                , o = (d = (p = (h = t.fetchOptions) == null ? void 0 : h.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : d.direction
                , s = ((w = t.state.data) == null ? void 0 : w.pages) || []
                , i = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
                , c = 0;
            const u = async () => {
                let m = !1;
                const S = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                            t.signal)
                    })
                }
                    , g = wg(t.options, t.fetchOptions)
                    , f = async (y, C, b) => {
                        if (m)
                            return Promise.reject();
                        if (C == null && y.pages.length)
                            return Promise.resolve(y);
                        const k = {
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        S(k);
                        const E = await g(k)
                            , { maxPages: j } = t.options
                            , _ = b ? Sb : wb;
                        return {
                            pages: _(y.pages, E, j),
                            pageParams: _(y.pageParams, C, j)
                        }
                    }
                    ;
                if (o && s.length) {
                    const y = o === "backward"
                        , C = y ? _b : lp
                        , b = {
                            pages: s,
                            pageParams: i
                        }
                        , k = C(r, b);
                    a = await f(b, k, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const C = c === 0 ? i[0] ?? r.initialPageParam : lp(r, a);
                        if (c > 0 && C == null)
                            break;
                        a = await f(a, C),
                            c++
                    } while (c < y)
                }
                return a
            }
                ;
            t.options.persister ? t.fetchFn = () => {
                var m, S;
                return (S = (m = t.options).persister) == null ? void 0 : S.call(m, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
                : t.fetchFn = u
        }
    }
}
function lp(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function _b(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Se, Pn, Tn, ro, oo, Rn, so, io, Fp, Ib = (Fp = class {
    constructor(e = {}) {
        ie(this, Se);
        ie(this, Pn);
        ie(this, Tn);
        ie(this, ro);
        ie(this, oo);
        ie(this, Rn);
        ie(this, so);
        ie(this, io);
        Y(this, Se, e.queryCache || new Rb),
            Y(this, Pn, e.mutationCache || new Ab),
            Y(this, Tn, e.defaultOptions || {}),
            Y(this, ro, new Map),
            Y(this, oo, new Map),
            Y(this, Rn, 0)
    }
    mount() {
        Ls(this, Rn)._++,
            P(this, Rn) === 1 && (Y(this, so, Sg.subscribe(async e => {
                e && (await this.resumePausedMutations(),
                    P(this, Se).onFocus())
            }
            )),
                Y(this, io, sa.subscribe(async e => {
                    e && (await this.resumePausedMutations(),
                        P(this, Se).onOnline())
                }
                )))
    }
    unmount() {
        var e, t;
        Ls(this, Rn)._--,
            P(this, Rn) === 0 && ((e = P(this, so)) == null || e.call(this),
                Y(this, so, void 0),
                (t = P(this, io)) == null || t.call(this),
                Y(this, io, void 0))
    }
    isFetching(e) {
        return P(this, Se).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, Pn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, Se).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
                , r = P(this, Se).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(np(n.staleTime, r)) && this.prefetchQuery(n),
                Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return P(this, Se).findAll(e).map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
            , o = P(this, Se).get(r.queryHash)
            , s = o == null ? void 0 : o.state.data
            , i = hb(t, s);
        if (i !== void 0)
            return P(this, Se).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Xe.batch(() => P(this, Se).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, Se).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, Se);
        Xe.batch(() => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, Se)
            , r = {
                type: "active",
                ...e
            };
        return Xe.batch(() => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
            this.refetchQueries(r, t)))
    }
    cancelQueries(e = {}, t = {}) {
        const n = {
            revert: !0,
            ...t
        }
            , r = Xe.batch(() => P(this, Se).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Tt).catch(Tt)
    }
    invalidateQueries(e = {}, t = {}) {
        return Xe.batch(() => {
            if (P(this, Se).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
                e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
            , r = Xe.batch(() => P(this, Se).findAll(e).filter(o => !o.isDisabled()).map(o => {
                let s = o.fetch(void 0, n);
                return n.throwOnError || (s = s.catch(Tt)),
                    o.state.fetchStatus === "paused" ? Promise.resolve() : s
            }
            ));
        return Promise.all(r).then(Tt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Se).build(this, t);
        return n.isStaleByTime(np(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = ap(e.pages),
            this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Tt).catch(Tt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = ap(e.pages),
            this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return sa.isOnline() ? P(this, Pn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, Se)
    }
    getMutationCache() {
        return P(this, Pn)
    }
    getDefaultOptions() {
        return P(this, Tn)
    }
    setDefaultOptions(e) {
        Y(this, Tn, e)
    }
    setQueryDefaults(e, t) {
        P(this, ro).set(xs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, ro).values()];
        let n = {};
        return t.forEach(r => {
            ws(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
            n
    }
    setMutationDefaults(e, t) {
        P(this, oo).set(xs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, oo).values()];
        let n = {};
        return t.forEach(r => {
            ws(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
            n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, Tn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = md(t.queryKey, t)),
            t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.enabled !== !0 && t.queryFn === vd && (t.enabled = !1),
            t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, Tn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, Se).clear(),
            P(this, Pn).clear()
    }
}
    ,
    Se = new WeakMap,
    Pn = new WeakMap,
    Tn = new WeakMap,
    ro = new WeakMap,
    oo = new WeakMap,
    Rn = new WeakMap,
    so = new WeakMap,
    io = new WeakMap,
    Fp), Lb = v.createContext(void 0), Db = ({ client: e, children: t }) => (v.useEffect(() => (e.mount(),
        () => {
            e.unmount()
        }
    ), [e]),
        l.jsx(Lb.Provider, {
            value: e,
            children: t
        }));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ia() {
    return ia = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ia.apply(this, arguments)
}
var An;
(function (e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(An || (An = {}));
const cp = "popstate";
function Fb(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: s, search: i, hash: a } = r.location;
        return Qc("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : jg(o)
    }
    return $b(t, n, null, e)
}
function st(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function kg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function zb() {
    return Math.random().toString(36).substr(2, 8)
}
function up(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Qc(e, t, n, r) {
    return n === void 0 && (n = null),
        ia({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Ba(t) : t, {
            state: n,
            key: t && t.key || r || zb()
        })
}
function jg(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function Ba(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function $b(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = r
        , i = o.history
        , a = An.Pop
        , c = null
        , u = h();
    u == null && (u = 0,
        i.replaceState(ia({}, i.state, {
            idx: u
        }), ""));
    function h() {
        return (i.state || {
            idx: null
        }).idx
    }
    function p() {
        a = An.Pop;
        let S = h()
            , g = S == null ? null : S - u;
        u = S,
            c && c({
                action: a,
                location: m.location,
                delta: g
            })
    }
    function d(S, g) {
        a = An.Push;
        let f = Qc(m.location, S, g);
        u = h() + 1;
        let y = up(f, u)
            , C = m.createHref(f);
        try {
            i.pushState(y, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            o.location.assign(C)
        }
        s && c && c({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function w(S, g) {
        a = An.Replace;
        let f = Qc(m.location, S, g);
        u = h();
        let y = up(f, u)
            , C = m.createHref(f);
        i.replaceState(y, "", C),
            s && c && c({
                action: a,
                location: m.location,
                delta: 0
            })
    }
    function x(S) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
            , f = typeof S == "string" ? S : jg(S);
        return f = f.replace(/ $/, "%20"),
            st(g, "No window.location.(origin|href) available to create URL for href: " + f),
            new URL(f, g)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(S) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(cp, p),
                c = S,
                () => {
                    o.removeEventListener(cp, p),
                        c = null
                }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: x,
        encodeLocation(S) {
            let g = x(S);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: d,
        replace: w,
        go(S) {
            return i.go(S)
        }
    };
    return m
}
var dp;
(function (e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(dp || (dp = {}));
function Bb(e, t, n) {
    return n === void 0 && (n = "/"),
        Ub(e, t, n, !1)
}
function Ub(e, t, n, r) {
    let o = typeof t == "string" ? Ba(t) : t
        , s = Rg(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = Pg(e);
    Hb(i);
    let a = null;
    for (let c = 0; a == null && c < i.length; ++c) {
        let u = eN(s);
        a = Zb(i[c], u, r)
    }
    return a
}
function Pg(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let o = (s, i, a) => {
        let c = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        c.relativePath.startsWith("/") && (st(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            c.relativePath = c.relativePath.slice(r.length));
        let u = Xr([r, c.relativePath])
            , h = n.concat(c);
        s.children && s.children.length > 0 && (st(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
            Pg(s.children, t, h, u)),
            !(s.path == null && !s.index) && t.push({
                path: u,
                score: Xb(u, s.index),
                routesMeta: h
            })
    }
        ;
    return e.forEach((s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            o(s, i);
        else
            for (let c of Tg(s.path))
                o(s, i, c)
    }
    ),
        t
}
function Tg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , o = n.endsWith("?")
        , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = Tg(r.join("/"))
        , a = [];
    return a.push(...i.map(c => c === "" ? s : [s, c].join("/"))),
        o && a.push(...i),
        a.map(c => e.startsWith("/") && c === "" ? "/" : c)
}
function Hb(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : qb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Vb = /^:[\w-]+$/
    , Wb = 3
    , Kb = 2
    , Qb = 1
    , Yb = 10
    , Gb = -2
    , fp = e => e === "*";
function Xb(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(fp) && (r += Gb),
        t && (r += Kb),
        n.filter(o => !fp(o)).reduce((o, s) => o + (Vb.test(s) ? Wb : s === "" ? Qb : Yb), r)
}
function qb(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Zb(e, t, n) {
    let { routesMeta: r } = e
        , o = {}
        , s = "/"
        , i = [];
    for (let a = 0; a < r.length; ++a) {
        let c = r[a]
            , u = a === r.length - 1
            , h = s === "/" ? t : t.slice(s.length) || "/"
            , p = pp({
                path: c.relativePath,
                caseSensitive: c.caseSensitive,
                end: u
            }, h)
            , d = c.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = pp({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: !1
        }, h)),
            !p)
            return null;
        Object.assign(o, p.params),
            i.push({
                params: o,
                pathname: Xr([s, p.pathname]),
                pathnameBase: tN(Xr([s, p.pathnameBase])),
                route: d
            }),
            p.pathnameBase !== "/" && (s = Xr([s, p.pathnameBase]))
    }
    return i
}
function pp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Jb(e.path, e.caseSensitive, e.end)
        , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
        , i = s.replace(/(.)\/+$/, "$1")
        , a = o.slice(1);
    return {
        params: r.reduce((u, h, p) => {
            let { paramName: d, isOptional: w } = h;
            if (d === "*") {
                let m = a[p] || "";
                i = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[p];
            return w && !x ? u[d] = void 0 : u[d] = (x || "").replace(/%2F/g, "/"),
                u
        }
            , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function Jb(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        kg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, c) => (r.push({
            paramName: a,
            isOptional: c != null
        }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
}
function eN(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return kg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function Rg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Xr = e => e.join("/").replace(/\/\/+/g, "/")
    , tN = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function nN(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Mg = ["post", "put", "patch", "delete"];
new Set(Mg);
const rN = ["get", ...Mg];
new Set(rN);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function aa() {
    return aa = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        aa.apply(this, arguments)
}
const oN = v.createContext(null)
    , sN = v.createContext(null)
    , Og = v.createContext(null)
    , Ua = v.createContext(null)
    , Ha = v.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , Ag = v.createContext(null);
function gd() {
    return v.useContext(Ua) != null
}
function _g() {
    return gd() || st(!1),
        v.useContext(Ua).location
}
function iN(e, t) {
    return aN(e, t)
}
function aN(e, t, n, r) {
    gd() || st(!1);
    let { navigator: o } = v.useContext(Og)
        , { matches: s } = v.useContext(Ha)
        , i = s[s.length - 1]
        , a = i ? i.params : {};
    i && i.pathname;
    let c = i ? i.pathnameBase : "/";
    i && i.route;
    let u = _g(), h;
    if (t) {
        var p;
        let S = typeof t == "string" ? Ba(t) : t;
        c === "/" || (p = S.pathname) != null && p.startsWith(c) || st(!1),
            h = S
    } else
        h = u;
    let d = h.pathname || "/"
        , w = d;
    if (c !== "/") {
        let S = c.replace(/^\//, "").split("/");
        w = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = Bb(e, {
        pathname: w
    })
        , m = fN(x && x.map(S => Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Xr([c, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? c : Xr([c, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), s, n, r);
    return t && m ? v.createElement(Ua.Provider, {
        value: {
            location: aa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: An.Pop
        }
    }, m) : m
}
function lN() {
    let e = vN()
        , t = nN(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? v.createElement("pre", {
        style: o
    }, n) : null, null)
}
const cN = v.createElement(lN, null);
class uN extends v.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? v.createElement(Ha.Provider, {
            value: this.props.routeContext
        }, v.createElement(Ag.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function dN(e) {
    let { routeContext: t, match: n, children: r } = e
        , o = v.useContext(oN);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        v.createElement(Ha.Provider, {
            value: t
        }, r)
}
function fN(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
        , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let h = i.findIndex(p => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
        h >= 0 || st(!1),
            i = i.slice(0, Math.min(i.length, h + 1))
    }
    let c = !1
        , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let h = 0; h < i.length; h++) {
            let p = i[h];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = h),
                p.route.id) {
                let { loaderData: d, errors: w } = n
                    , x = p.route.loader && d[p.route.id] === void 0 && (!w || w[p.route.id] === void 0);
                if (p.route.lazy || x) {
                    c = !0,
                        u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((h, p, d) => {
        let w, x = !1, m = null, S = null;
        n && (w = a && p.route.id ? a[p.route.id] : void 0,
            m = p.route.errorElement || cN,
            c && (u < 0 && d === 0 ? (x = !0,
                S = null) : u === d && (x = !0,
                    S = p.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, d + 1))
            , f = () => {
                let y;
                return w ? y = m : x ? y = S : p.route.Component ? y = v.createElement(p.route.Component, null) : p.route.element ? y = p.route.element : y = h,
                    v.createElement(dN, {
                        match: p,
                        routeContext: {
                            outlet: h,
                            matches: g,
                            isDataRoute: n != null
                        },
                        children: y
                    })
            }
            ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || d === 0) ? v.createElement(uN, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: w,
            children: f(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : f()
    }
        , null)
}
var Yc = function (e) {
    return e.UseBlocker = "useBlocker",
        e.UseLoaderData = "useLoaderData",
        e.UseActionData = "useActionData",
        e.UseRouteError = "useRouteError",
        e.UseNavigation = "useNavigation",
        e.UseRouteLoaderData = "useRouteLoaderData",
        e.UseMatches = "useMatches",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e.UseRouteId = "useRouteId",
        e
}(Yc || {});
function pN(e) {
    let t = v.useContext(sN);
    return t || st(!1),
        t
}
function hN(e) {
    let t = v.useContext(Ha);
    return t || st(!1),
        t
}
function mN(e) {
    let t = hN()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || st(!1),
        n.route.id
}
function vN() {
    var e;
    let t = v.useContext(Ag)
        , n = pN(Yc.UseRouteError)
        , r = mN(Yc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Gc(e) {
    st(!1)
}
function gN(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: o = An.Pop, navigator: s, static: i = !1, future: a } = e;
    gd() && st(!1);
    let c = t.replace(/^\/*/, "/")
        , u = v.useMemo(() => ({
            basename: c,
            navigator: s,
            static: i,
            future: aa({
                v7_relativeSplatPath: !1
            }, a)
        }), [c, a, s, i]);
    typeof r == "string" && (r = Ba(r));
    let { pathname: h = "/", search: p = "", hash: d = "", state: w = null, key: x = "default" } = r
        , m = v.useMemo(() => {
            let S = Rg(h, c);
            return S == null ? null : {
                location: {
                    pathname: S,
                    search: p,
                    hash: d,
                    state: w,
                    key: x
                },
                navigationType: o
            }
        }
            , [c, h, p, d, w, x, o]);
    return m == null ? null : v.createElement(Og.Provider, {
        value: u
    }, v.createElement(Ua.Provider, {
        children: n,
        value: m
    }))
}
function yN(e) {
    let { children: t, location: n } = e;
    return iN(Xc(t), n)
}
new Promise(() => { }
);
function Xc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return v.Children.forEach(e, (r, o) => {
        if (!v.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === v.Fragment) {
            n.push.apply(n, Xc(r.props.children, s));
            return
        }
        r.type !== Gc && st(!1),
            !r.props.index || !r.props.children || st(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Xc(r.props.children, s)),
            n.push(i)
    }
    ),
        n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const xN = "6";
try {
    window.__reactRouterVersion = xN
} catch { }
const wN = "startTransition"
    , hp = Xp[wN];
function SN(e) {
    let { basename: t, children: n, future: r, window: o } = e
        , s = v.useRef();
    s.current == null && (s.current = Fb({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
        , [a, c] = v.useState({
            action: i.action,
            location: i.location
        })
        , { v7_startTransition: u } = r || {}
        , h = v.useCallback(p => {
            u && hp ? hp(() => c(p)) : c(p)
        }
            , [c, u]);
    return v.useLayoutEffect(() => i.listen(h), [i, h]),
        v.createElement(gN, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: i,
            future: r
        })
}
var mp;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(mp || (mp = {}));
var vp;
(function (e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(vp || (vp = {}));
const CN = Oa("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-105",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            medical: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-xl hover:scale-105 border-0",
            healthcare: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg hover:scale-105"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
    , Ne = v.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
        const i = r ? mo : "button";
        return l.jsx(i, {
            className: ce(CN({
                variant: t,
                size: n,
                className: e
            })),
            ref: s,
            ...o
        })
    }
    );
Ne.displayName = "Button";
const sr = v.forwardRef(({ className: e, type: t, ...n }, r) => l.jsx("input", {
    type: t,
    className: ce("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
sr.displayName = "Input";
var bN = "Label"
    , Ig = v.forwardRef((e, t) => l.jsx(re.label, {
        ...e,
        ref: t,
        onMouseDown: n => {
            var o;
            n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
                !n.defaultPrevented && n.detail > 1 && n.preventDefault())
        }
    }));
Ig.displayName = bN;
var Lg = Ig;
const NN = Oa("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
    , rn = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Lg, {
        ref: n,
        className: ce(NN(), e),
        ...t
    }));
rn.displayName = Lg.displayName;
const Pe = v.forwardRef(({ className: e, ...t }, n) => l.jsx("div", {
    ref: n,
    className: ce("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Pe.displayName = "Card";
const He = v.forwardRef(({ className: e, ...t }, n) => l.jsx("div", {
    ref: n,
    className: ce("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
He.displayName = "CardHeader";
const Ve = v.forwardRef(({ className: e, ...t }, n) => l.jsx("h3", {
    ref: n,
    className: ce("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
Ve.displayName = "CardTitle";
const Xt = v.forwardRef(({ className: e, ...t }, n) => l.jsx("p", {
    ref: n,
    className: ce("text-sm text-muted-foreground", e),
    ...t
}));
Xt.displayName = "CardDescription";
const Te = v.forwardRef(({ className: e, ...t }, n) => l.jsx("div", {
    ref: n,
    className: ce("p-6 pt-0", e),
    ...t
}));
Te.displayName = "CardContent";
const EN = v.forwardRef(({ className: e, ...t }, n) => l.jsx("div", {
    ref: n,
    className: ce("flex items-center p-6 pt-0", e),
    ...t
}));
EN.displayName = "CardFooter";
function gp(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}
var kN = v.createContext(void 0);
function jN(e) {
    const t = v.useContext(kN);
    return e || t || "ltr"
}
var Ml = 0;
function PN() {
    v.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? yp()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? yp()),
            Ml++,
            () => {
                Ml === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
                    Ml--
            }
    }
        , [])
}
function yp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
        e.tabIndex = 0,
        e.style.outline = "none",
        e.style.opacity = "0",
        e.style.position = "fixed",
        e.style.pointerEvents = "none",
        e
}
var Ol = "focusScope.autoFocusOnMount"
    , Al = "focusScope.autoFocusOnUnmount"
    , xp = {
        bubbles: !1,
        cancelable: !0
    }
    , TN = "FocusScope"
    , Dg = v.forwardRef((e, t) => {
        const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i } = e
            , [a, c] = v.useState(null)
            , u = mt(o)
            , h = mt(s)
            , p = v.useRef(null)
            , d = be(t, m => c(m))
            , w = v.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
        v.useEffect(() => {
            if (r) {
                let m = function (y) {
                    if (w.paused || !a)
                        return;
                    const C = y.target;
                    a.contains(C) ? p.current = C : Sn(p.current, {
                        select: !0
                    })
                }
                    , S = function (y) {
                        if (w.paused || !a)
                            return;
                        const C = y.relatedTarget;
                        C !== null && (a.contains(C) || Sn(p.current, {
                            select: !0
                        }))
                    }
                    , g = function (y) {
                        if (document.activeElement === document.body)
                            for (const b of y)
                                b.removedNodes.length > 0 && Sn(a)
                    };
                document.addEventListener("focusin", m),
                    document.addEventListener("focusout", S);
                const f = new MutationObserver(g);
                return a && f.observe(a, {
                    childList: !0,
                    subtree: !0
                }),
                    () => {
                        document.removeEventListener("focusin", m),
                            document.removeEventListener("focusout", S),
                            f.disconnect()
                    }
            }
        }
            , [r, a, w.paused]),
            v.useEffect(() => {
                if (a) {
                    Sp.add(w);
                    const m = document.activeElement;
                    if (!a.contains(m)) {
                        const g = new CustomEvent(Ol, xp);
                        a.addEventListener(Ol, u),
                            a.dispatchEvent(g),
                            g.defaultPrevented || (RN(IN(Fg(a)), {
                                select: !0
                            }),
                                document.activeElement === m && Sn(a))
                    }
                    return () => {
                        a.removeEventListener(Ol, u),
                            setTimeout(() => {
                                const g = new CustomEvent(Al, xp);
                                a.addEventListener(Al, h),
                                    a.dispatchEvent(g),
                                    g.defaultPrevented || Sn(m ?? document.body, {
                                        select: !0
                                    }),
                                    a.removeEventListener(Al, h),
                                    Sp.remove(w)
                            }
                                , 0)
                    }
                }
            }
                , [a, u, h, w]);
        const x = v.useCallback(m => {
            if (!n && !r || w.paused)
                return;
            const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
                , g = document.activeElement;
            if (S && g) {
                const f = m.currentTarget
                    , [y, C] = MN(f);
                y && C ? !m.shiftKey && g === C ? (m.preventDefault(),
                    n && Sn(y, {
                        select: !0
                    })) : m.shiftKey && g === y && (m.preventDefault(),
                        n && Sn(C, {
                            select: !0
                        })) : g === f && m.preventDefault()
            }
        }
            , [n, r, w.paused]);
        return l.jsx(re.div, {
            tabIndex: -1,
            ...i,
            ref: d,
            onKeyDown: x
        })
    }
    );
Dg.displayName = TN;
function RN(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (Sn(r, {
            select: t
        }),
            document.activeElement !== n)
            return
}
function MN(e) {
    const t = Fg(e)
        , n = wp(t, e)
        , r = wp(t.reverse(), e);
    return [n, r]
}
function Fg(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function wp(e, t) {
    for (const n of e)
        if (!ON(n, {
            upTo: t
        }))
            return n
}
function ON(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e;) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function AN(e) {
    return e instanceof HTMLInputElement && "select" in e
}
function Sn(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
            e !== n && AN(e) && t && e.select()
    }
}
var Sp = _N();
function _N() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
                e = Cp(e, t),
                e.unshift(t)
        },
        remove(t) {
            var n;
            e = Cp(e, t),
                (n = e[0]) == null || n.resume()
        }
    }
}
function Cp(e, t) {
    const n = [...e]
        , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
        n
}
function IN(e) {
    return e.filter(t => t.tagName !== "A")
}
function LN(e) {
    const t = v.useRef({
        value: e,
        previous: e
    });
    return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value,
        t.current.value = e),
        t.current.previous), [e])
}
var DN = function (e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
    , jr = new WeakMap
    , si = new WeakMap
    , ii = {}
    , _l = 0
    , zg = function (e) {
        return e && (e.host || zg(e.parentNode))
    }
    , FN = function (e, t) {
        return t.map(function (n) {
            if (e.contains(n))
                return n;
            var r = zg(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
                null)
        }).filter(function (n) {
            return !!n
        })
    }
    , zN = function (e, t, n, r) {
        var o = FN(t, Array.isArray(e) ? e : [e]);
        ii[n] || (ii[n] = new WeakMap);
        var s = ii[n]
            , i = []
            , a = new Set
            , c = new Set(o)
            , u = function (p) {
                !p || a.has(p) || (a.add(p),
                    u(p.parentNode))
            };
        o.forEach(u);
        var h = function (p) {
            !p || c.has(p) || Array.prototype.forEach.call(p.children, function (d) {
                if (a.has(d))
                    h(d);
                else
                    try {
                        var w = d.getAttribute(r)
                            , x = w !== null && w !== "false"
                            , m = (jr.get(d) || 0) + 1
                            , S = (s.get(d) || 0) + 1;
                        jr.set(d, m),
                            s.set(d, S),
                            i.push(d),
                            m === 1 && x && si.set(d, !0),
                            S === 1 && d.setAttribute(n, "true"),
                            x || d.setAttribute(r, "true")
                    } catch (g) {
                        console.error("aria-hidden: cannot operate on ", d, g)
                    }
            })
        };
        return h(t),
            a.clear(),
            _l++,
            function () {
                i.forEach(function (p) {
                    var d = jr.get(p) - 1
                        , w = s.get(p) - 1;
                    jr.set(p, d),
                        s.set(p, w),
                        d || (si.has(p) || p.removeAttribute(r),
                            si.delete(p)),
                        w || p.removeAttribute(n)
                }),
                    _l--,
                    _l || (jr = new WeakMap,
                        jr = new WeakMap,
                        si = new WeakMap,
                        ii = {})
            }
    }
    , $N = function (e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e])
            , o = DN(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            zN(r, o, n, "aria-hidden")) : function () {
                return null
            }
    }
    , Qt = function () {
        return Qt = Object.assign || function (t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
            }
            return t
        }
            ,
            Qt.apply(this, arguments)
    };
function $g(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function BN(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
                s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Ni = "right-scroll-bar-position"
    , Ei = "width-before-scroll-bar"
    , UN = "with-scroll-bars-hidden"
    , HN = "--removed-body-scroll-bar-size";
function Il(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
        e
}
function VN(e, t) {
    var n = v.useState(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                        n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
        n.facade
}
var WN = typeof window < "u" ? v.useLayoutEffect : v.useEffect
    , bp = new WeakMap;
function KN(e, t) {
    var n = VN(null, function (r) {
        return e.forEach(function (o) {
            return Il(o, r)
        })
    });
    return WN(function () {
        var r = bp.get(n);
        if (r) {
            var o = new Set(r)
                , s = new Set(e)
                , i = n.current;
            o.forEach(function (a) {
                s.has(a) || Il(a, null)
            }),
                s.forEach(function (a) {
                    o.has(a) || Il(a, i)
                })
        }
        bp.set(n, e)
    }, [e]),
        n
}
function QN(e) {
    return e
}
function YN(e, t) {
    t === void 0 && (t = QN);
    var n = []
        , r = !1
        , o = {
            read: function () {
                if (r)
                    throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function (s) {
                var i = t(s, r);
                return n.push(i),
                    function () {
                        n = n.filter(function (a) {
                            return a !== i
                        })
                    }
            },
            assignSyncMedium: function (s) {
                for (r = !0; n.length;) {
                    var i = n;
                    n = [],
                        i.forEach(s)
                }
                n = {
                    push: function (a) {
                        return s(a)
                    },
                    filter: function () {
                        return n
                    }
                }
            },
            assignMedium: function (s) {
                r = !0;
                var i = [];
                if (n.length) {
                    var a = n;
                    n = [],
                        a.forEach(s),
                        i = n
                }
                var c = function () {
                    var h = i;
                    i = [],
                        h.forEach(s)
                }
                    , u = function () {
                        return Promise.resolve().then(c)
                    };
                u(),
                    n = {
                        push: function (h) {
                            i.push(h),
                                u()
                        },
                        filter: function (h) {
                            return i = i.filter(h),
                                n
                        }
                    }
            }
        };
    return o
}
function GN(e) {
    e === void 0 && (e = {});
    var t = YN(null);
    return t.options = Qt({
        async: !0,
        ssr: !1
    }, e),
        t
}
var Bg = function (e) {
    var t = e.sideCar
        , n = $g(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return v.createElement(r, Qt({}, n))
};
Bg.isSideCarExport = !0;
function XN(e, t) {
    return e.useMedium(t),
        Bg
}
var Ug = GN()
    , Ll = function () { }
    , Va = v.forwardRef(function (e, t) {
        var n = v.useRef(null)
            , r = v.useState({
                onScrollCapture: Ll,
                onWheelCapture: Ll,
                onTouchMoveCapture: Ll
            })
            , o = r[0]
            , s = r[1]
            , i = e.forwardProps
            , a = e.children
            , c = e.className
            , u = e.removeScrollBar
            , h = e.enabled
            , p = e.shards
            , d = e.sideCar
            , w = e.noIsolation
            , x = e.inert
            , m = e.allowPinchZoom
            , S = e.as
            , g = S === void 0 ? "div" : S
            , f = e.gapMode
            , y = $g(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
            , C = d
            , b = KN([n, t])
            , k = Qt(Qt({}, y), o);
        return v.createElement(v.Fragment, null, h && v.createElement(C, {
            sideCar: Ug,
            removeScrollBar: u,
            shards: p,
            noIsolation: w,
            inert: x,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: f
        }), i ? v.cloneElement(v.Children.only(a), Qt(Qt({}, k), {
            ref: b
        })) : v.createElement(g, Qt({}, k, {
            className: c,
            ref: b
        }), a))
    });
Va.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Va.classNames = {
    fullWidth: Ei,
    zeroRight: Ni
};
var qN = function () {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function ZN() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = qN();
    return t && e.setAttribute("nonce", t),
        e
}
function JN(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function e2(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var t2 = function () {
    var e = 0
        , t = null;
    return {
        add: function (n) {
            e == 0 && (t = ZN()) && (JN(t, n),
                e2(t)),
                e++
        },
        remove: function () {
            e--,
                !e && t && (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
        }
    }
}
    , n2 = function () {
        var e = t2();
        return function (t, n) {
            v.useEffect(function () {
                return e.add(t),
                    function () {
                        e.remove()
                    }
            }, [t && n])
        }
    }
    , Hg = function () {
        var e = n2()
            , t = function (n) {
                var r = n.styles
                    , o = n.dynamic;
                return e(r, o),
                    null
            };
        return t
    }
    , r2 = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    }
    , Dl = function (e) {
        return parseInt(e || "", 10) || 0
    }
    , o2 = function (e) {
        var t = window.getComputedStyle(document.body)
            , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
            , r = t[e === "padding" ? "paddingTop" : "marginTop"]
            , o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Dl(n), Dl(r), Dl(o)]
    }
    , s2 = function (e) {
        if (e === void 0 && (e = "margin"),
            typeof window > "u")
            return r2;
        var t = o2(e)
            , n = document.documentElement.clientWidth
            , r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    }
    , i2 = Hg()
    , qr = "data-scroll-locked"
    , a2 = function (e, t, n, r) {
        var o = e.left
            , s = e.top
            , i = e.right
            , a = e.gap;
        return n === void 0 && (n = "margin"),
            `
  .`.concat(UN, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(qr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ni, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ei, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ni, " .").concat(Ni, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ei, " .").concat(Ei, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qr, `] {
    `).concat(HN, ": ").concat(a, `px;
  }
`)
    }
    , Np = function () {
        var e = parseInt(document.body.getAttribute(qr) || "0", 10);
        return isFinite(e) ? e : 0
    }
    , l2 = function () {
        v.useEffect(function () {
            return document.body.setAttribute(qr, (Np() + 1).toString()),
                function () {
                    var e = Np() - 1;
                    e <= 0 ? document.body.removeAttribute(qr) : document.body.setAttribute(qr, e.toString())
                }
        }, [])
    }
    , c2 = function (e) {
        var t = e.noRelative
            , n = e.noImportant
            , r = e.gapMode
            , o = r === void 0 ? "margin" : r;
        l2();
        var s = v.useMemo(function () {
            return s2(o)
        }, [o]);
        return v.createElement(i2, {
            styles: a2(s, !t, o, n ? "" : "!important")
        })
    }
    , qc = !1;
if (typeof window < "u")
    try {
        var ai = Object.defineProperty({}, "passive", {
            get: function () {
                return qc = !0,
                    !0
            }
        });
        window.addEventListener("test", ai, ai),
            window.removeEventListener("test", ai, ai)
    } catch {
        qc = !1
    }
var Pr = qc ? {
    passive: !1
} : !1
    , u2 = function (e) {
        return e.tagName === "TEXTAREA"
    }
    , Vg = function (e, t) {
        if (!(e instanceof Element))
            return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !u2(e) && n[t] === "visible")
    }
    , d2 = function (e) {
        return Vg(e, "overflowY")
    }
    , f2 = function (e) {
        return Vg(e, "overflowX")
    }
    , Ep = function (e, t) {
        var n = t.ownerDocument
            , r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Wg(e, r);
            if (o) {
                var s = Kg(e, r)
                    , i = s[1]
                    , a = s[2];
                if (i > a)
                    return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    }
    , p2 = function (e) {
        var t = e.scrollTop
            , n = e.scrollHeight
            , r = e.clientHeight;
        return [t, n, r]
    }
    , h2 = function (e) {
        var t = e.scrollLeft
            , n = e.scrollWidth
            , r = e.clientWidth;
        return [t, n, r]
    }
    , Wg = function (e, t) {
        return e === "v" ? d2(t) : f2(t)
    }
    , Kg = function (e, t) {
        return e === "v" ? p2(t) : h2(t)
    }
    , m2 = function (e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    }
    , v2 = function (e, t, n, r, o) {
        var s = m2(e, window.getComputedStyle(t).direction)
            , i = s * r
            , a = n.target
            , c = t.contains(a)
            , u = !1
            , h = i > 0
            , p = 0
            , d = 0;
        do {
            var w = Kg(e, a)
                , x = w[0]
                , m = w[1]
                , S = w[2]
                , g = m - S - s * x;
            (x || g) && Wg(e, a) && (p += g,
                d += x),
                a instanceof ShadowRoot ? a = a.host : a = a.parentNode
        } while (!c && a !== document.body || c && (t.contains(a) || t === a));
        return (h && (Math.abs(p) < 1 || !o) || !h && (Math.abs(d) < 1 || !o)) && (u = !0),
            u
    }
    , li = function (e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    }
    , kp = function (e) {
        return [e.deltaX, e.deltaY]
    }
    , jp = function (e) {
        return e && "current" in e ? e.current : e
    }
    , g2 = function (e, t) {
        return e[0] === t[0] && e[1] === t[1]
    }
    , y2 = function (e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    }
    , x2 = 0
    , Tr = [];
function w2(e) {
    var t = v.useRef([])
        , n = v.useRef([0, 0])
        , r = v.useRef()
        , o = v.useState(x2++)[0]
        , s = v.useState(Hg)[0]
        , i = v.useRef(e);
    v.useEffect(function () {
        i.current = e
    }, [e]),
        v.useEffect(function () {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var m = BN([e.lockRef.current], (e.shards || []).map(jp), !0).filter(Boolean);
                return m.forEach(function (S) {
                    return S.classList.add("allow-interactivity-".concat(o))
                }),
                    function () {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                            m.forEach(function (S) {
                                return S.classList.remove("allow-interactivity-".concat(o))
                            })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
    var a = v.useCallback(function (m, S) {
        if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !i.current.allowPinchZoom;
        var g = li(m), f = n.current, y = "deltaX" in m ? m.deltaX : f[0] - g[0], C = "deltaY" in m ? m.deltaY : f[1] - g[1], b, k = m.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
        if ("touches" in m && E === "h" && k.type === "range")
            return !1;
        var j = Ep(E, k);
        if (!j)
            return !0;
        if (j ? b = E : (b = E === "v" ? "h" : "v",
            j = Ep(E, k)),
            !j)
            return !1;
        if (!r.current && "changedTouches" in m && (y || C) && (r.current = b),
            !b)
            return !0;
        var _ = r.current || b;
        return v2(_, S, m, _ === "h" ? y : C, !0)
    }, [])
        , c = v.useCallback(function (m) {
            var S = m;
            if (!(!Tr.length || Tr[Tr.length - 1] !== s)) {
                var g = "deltaY" in S ? kp(S) : li(S)
                    , f = t.current.filter(function (b) {
                        return b.name === S.type && (b.target === S.target || S.target === b.shadowParent) && g2(b.delta, g)
                    })[0];
                if (f && f.should) {
                    S.cancelable && S.preventDefault();
                    return
                }
                if (!f) {
                    var y = (i.current.shards || []).map(jp).filter(Boolean).filter(function (b) {
                        return b.contains(S.target)
                    })
                        , C = y.length > 0 ? a(S, y[0]) : !i.current.noIsolation;
                    C && S.cancelable && S.preventDefault()
                }
            }
        }, [])
        , u = v.useCallback(function (m, S, g, f) {
            var y = {
                name: m,
                delta: S,
                target: g,
                should: f,
                shadowParent: S2(g)
            };
            t.current.push(y),
                setTimeout(function () {
                    t.current = t.current.filter(function (C) {
                        return C !== y
                    })
                }, 1)
        }, [])
        , h = v.useCallback(function (m) {
            n.current = li(m),
                r.current = void 0
        }, [])
        , p = v.useCallback(function (m) {
            u(m.type, kp(m), m.target, a(m, e.lockRef.current))
        }, [])
        , d = v.useCallback(function (m) {
            u(m.type, li(m), m.target, a(m, e.lockRef.current))
        }, []);
    v.useEffect(function () {
        return Tr.push(s),
            e.setCallbacks({
                onScrollCapture: p,
                onWheelCapture: p,
                onTouchMoveCapture: d
            }),
            document.addEventListener("wheel", c, Pr),
            document.addEventListener("touchmove", c, Pr),
            document.addEventListener("touchstart", h, Pr),
            function () {
                Tr = Tr.filter(function (m) {
                    return m !== s
                }),
                    document.removeEventListener("wheel", c, Pr),
                    document.removeEventListener("touchmove", c, Pr),
                    document.removeEventListener("touchstart", h, Pr)
            }
    }, []);
    var w = e.removeScrollBar
        , x = e.inert;
    return v.createElement(v.Fragment, null, x ? v.createElement(s, {
        styles: y2(o)
    }) : null, w ? v.createElement(c2, {
        gapMode: e.gapMode
    }) : null)
}
function S2(e) {
    for (var t = null; e !== null;)
        e instanceof ShadowRoot && (t = e.host,
            e = e.host),
            e = e.parentNode;
    return t
}
const C2 = XN(Ug, w2);
var Qg = v.forwardRef(function (e, t) {
    return v.createElement(Va, Qt({}, e, {
        ref: t,
        sideCar: C2
    }))
});
Qg.classNames = Va.classNames;
var b2 = [" ", "Enter", "ArrowUp", "ArrowDown"]
    , N2 = [" ", "Enter"]
    , As = "Select"
    , [Wa, Ka, E2] = rv(As)
    , [Eo, EE] = qu(As, [E2, La])
    , Qa = La()
    , [k2, qn] = Eo(As)
    , [j2, P2] = Eo(As)
    , Yg = e => {
        const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: i, defaultValue: a, onValueChange: c, dir: u, name: h, autoComplete: p, disabled: d, required: w, form: x } = e
            , m = Qa(t)
            , [S, g] = v.useState(null)
            , [f, y] = v.useState(null)
            , [C, b] = v.useState(!1)
            , k = jN(u)
            , [E = !1, j] = Oc({
                prop: r,
                defaultProp: o,
                onChange: s
            })
            , [_, A] = Oc({
                prop: i,
                defaultProp: a,
                onChange: c
            })
            , $ = v.useRef(null)
            , L = S ? x || !!S.closest("form") : !0
            , [H, O] = v.useState(new Set)
            , W = Array.from(H).map(F => F.props.value).join(";");
        return l.jsx(GC, {
            ...m,
            children: l.jsxs(k2, {
                required: w,
                scope: t,
                trigger: S,
                onTriggerChange: g,
                valueNode: f,
                onValueNodeChange: y,
                valueNodeHasChildren: C,
                onValueNodeHasChildrenChange: b,
                contentId: sd(),
                value: _,
                onValueChange: A,
                open: E,
                onOpenChange: j,
                dir: k,
                triggerPointerDownPosRef: $,
                disabled: d,
                children: [l.jsx(Wa.Provider, {
                    scope: t,
                    children: l.jsx(j2, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: v.useCallback(F => {
                            O(V => new Set(V).add(F))
                        }
                            , []),
                        onNativeOptionRemove: v.useCallback(F => {
                            O(V => {
                                const N = new Set(V);
                                return N.delete(F),
                                    N
                            }
                            )
                        }
                            , []),
                        children: n
                    })
                }), L ? l.jsxs(xy, {
                    "aria-hidden": !0,
                    required: w,
                    tabIndex: -1,
                    name: h,
                    autoComplete: p,
                    value: _,
                    onChange: F => A(F.target.value),
                    disabled: d,
                    form: x,
                    children: [_ === void 0 ? l.jsx("option", {
                        value: ""
                    }) : null, Array.from(H)]
                }, W) : null]
            })
        })
    }
    ;
Yg.displayName = As;
var Gg = "SelectTrigger"
    , Xg = v.forwardRef((e, t) => {
        const { __scopeSelect: n, disabled: r = !1, ...o } = e
            , s = Qa(n)
            , i = qn(Gg, n)
            , a = i.disabled || r
            , c = be(t, i.onTriggerChange)
            , u = Ka(n)
            , h = v.useRef("touch")
            , [p, d, w] = wy(m => {
                const S = u().filter(y => !y.disabled)
                    , g = S.find(y => y.value === i.value)
                    , f = Sy(S, m, g);
                f !== void 0 && i.onValueChange(f.value)
            }
            )
            , x = m => {
                a || (i.onOpenChange(!0),
                    w()),
                    m && (i.triggerPointerDownPosRef.current = {
                        x: Math.round(m.pageX),
                        y: Math.round(m.pageY)
                    })
            }
            ;
        return l.jsx(lg, {
            asChild: !0,
            ...s,
            children: l.jsx(re.button, {
                type: "button",
                role: "combobox",
                "aria-controls": i.contentId,
                "aria-expanded": i.open,
                "aria-required": i.required,
                "aria-autocomplete": "none",
                dir: i.dir,
                "data-state": i.open ? "open" : "closed",
                disabled: a,
                "data-disabled": a ? "" : void 0,
                "data-placeholder": yy(i.value) ? "" : void 0,
                ...o,
                ref: c,
                onClick: q(o.onClick, m => {
                    m.currentTarget.focus(),
                        h.current !== "mouse" && x(m)
                }
                ),
                onPointerDown: q(o.onPointerDown, m => {
                    h.current = m.pointerType;
                    const S = m.target;
                    S.hasPointerCapture(m.pointerId) && S.releasePointerCapture(m.pointerId),
                        m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (x(m),
                            m.preventDefault())
                }
                ),
                onKeyDown: q(o.onKeyDown, m => {
                    const S = p.current !== "";
                    !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && d(m.key),
                        !(S && m.key === " ") && b2.includes(m.key) && (x(),
                            m.preventDefault())
                }
                )
            })
        })
    }
    );
Xg.displayName = Gg;
var qg = "SelectValue"
    , Zg = v.forwardRef((e, t) => {
        const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e
            , c = qn(qg, n)
            , { onValueNodeHasChildrenChange: u } = c
            , h = s !== void 0
            , p = be(t, c.onValueNodeChange);
        return Ke(() => {
            u(h)
        }
            , [u, h]),
            l.jsx(re.span, {
                ...a,
                ref: p,
                style: {
                    pointerEvents: "none"
                },
                children: yy(c.value) ? l.jsx(l.Fragment, {
                    children: i
                }) : s
            })
    }
    );
Zg.displayName = qg;
var T2 = "SelectIcon"
    , Jg = v.forwardRef((e, t) => {
        const { __scopeSelect: n, children: r, ...o } = e;
        return l.jsx(re.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: r || "▼"
        })
    }
    );
Jg.displayName = T2;
var R2 = "SelectPortal"
    , ey = e => l.jsx(Zu, {
        asChild: !0,
        ...e
    });
ey.displayName = R2;
var xr = "SelectContent"
    , ty = v.forwardRef((e, t) => {
        const n = qn(xr, e.__scopeSelect)
            , [r, o] = v.useState();
        if (Ke(() => {
            o(new DocumentFragment)
        }
            , []),
            !n.open) {
            const s = r;
            return s ? Cr.createPortal(l.jsx(ny, {
                scope: e.__scopeSelect,
                children: l.jsx(Wa.Slot, {
                    scope: e.__scopeSelect,
                    children: l.jsx("div", {
                        children: e.children
                    })
                })
            }), s) : null
        }
        return l.jsx(ry, {
            ...e,
            ref: t
        })
    }
    );
ty.displayName = xr;
var jt = 10
    , [ny, Zn] = Eo(xr)
    , M2 = "SelectContentImpl"
    , ry = v.forwardRef((e, t) => {
        const { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: i, side: a, sideOffset: c, align: u, alignOffset: h, arrowPadding: p, collisionBoundary: d, collisionPadding: w, sticky: x, hideWhenDetached: m, avoidCollisions: S, ...g } = e
            , f = qn(xr, n)
            , [y, C] = v.useState(null)
            , [b, k] = v.useState(null)
            , E = be(t, U => C(U))
            , [j, _] = v.useState(null)
            , [A, $] = v.useState(null)
            , L = Ka(n)
            , [H, O] = v.useState(!1)
            , W = v.useRef(!1);
        v.useEffect(() => {
            if (y)
                return $N(y)
        }
            , [y]),
            PN();
        const F = v.useCallback(U => {
            const [ne, ...we] = L().map(te => te.ref.current)
                , [ee] = we.slice(-1)
                , se = document.activeElement;
            for (const te of U)
                if (te === se || (te == null || te.scrollIntoView({
                    block: "nearest"
                }),
                    te === ne && b && (b.scrollTop = 0),
                    te === ee && b && (b.scrollTop = b.scrollHeight),
                    te == null || te.focus(),
                    document.activeElement !== se))
                    return
        }
            , [L, b])
            , V = v.useCallback(() => F([j, y]), [F, j, y]);
        v.useEffect(() => {
            H && V()
        }
            , [H, V]);
        const { onOpenChange: N, triggerPointerDownPosRef: R } = f;
        v.useEffect(() => {
            if (y) {
                let U = {
                    x: 0,
                    y: 0
                };
                const ne = ee => {
                    var se, te;
                    U = {
                        x: Math.abs(Math.round(ee.pageX) - (((se = R.current) == null ? void 0 : se.x) ?? 0)),
                        y: Math.abs(Math.round(ee.pageY) - (((te = R.current) == null ? void 0 : te.y) ?? 0))
                    }
                }
                    , we = ee => {
                        U.x <= 10 && U.y <= 10 ? ee.preventDefault() : y.contains(ee.target) || N(!1),
                            document.removeEventListener("pointermove", ne),
                            R.current = null
                    }
                    ;
                return R.current !== null && (document.addEventListener("pointermove", ne),
                    document.addEventListener("pointerup", we, {
                        capture: !0,
                        once: !0
                    })),
                    () => {
                        document.removeEventListener("pointermove", ne),
                            document.removeEventListener("pointerup", we, {
                                capture: !0
                            })
                    }
            }
        }
            , [y, N, R]),
            v.useEffect(() => {
                const U = () => N(!1);
                return window.addEventListener("blur", U),
                    window.addEventListener("resize", U),
                    () => {
                        window.removeEventListener("blur", U),
                            window.removeEventListener("resize", U)
                    }
            }
                , [N]);
        const [z, I] = wy(U => {
            const ne = L().filter(se => !se.disabled)
                , we = ne.find(se => se.ref.current === document.activeElement)
                , ee = Sy(ne, U, we);
            ee && setTimeout(() => ee.ref.current.focus())
        }
        )
            , B = v.useCallback((U, ne, we) => {
                const ee = !W.current && !we;
                (f.value !== void 0 && f.value === ne || ee) && (_(U),
                    ee && (W.current = !0))
            }
                , [f.value])
            , G = v.useCallback(() => y == null ? void 0 : y.focus(), [y])
            , oe = v.useCallback((U, ne, we) => {
                const ee = !W.current && !we;
                (f.value !== void 0 && f.value === ne || ee) && $(U)
            }
                , [f.value])
            , Me = r === "popper" ? Zc : oy
            , Z = Me === Zc ? {
                side: a,
                sideOffset: c,
                align: u,
                alignOffset: h,
                arrowPadding: p,
                collisionBoundary: d,
                collisionPadding: w,
                sticky: x,
                hideWhenDetached: m,
                avoidCollisions: S
            } : {};
        return l.jsx(ny, {
            scope: n,
            content: y,
            viewport: b,
            onViewportChange: k,
            itemRefCallback: B,
            selectedItem: j,
            onItemLeave: G,
            itemTextRefCallback: oe,
            focusSelectedItem: V,
            selectedItemText: A,
            position: r,
            isPositioned: H,
            searchRef: z,
            children: l.jsx(Qg, {
                as: mo,
                allowPinchZoom: !0,
                children: l.jsx(Dg, {
                    asChild: !0,
                    trapped: f.open,
                    onMountAutoFocus: U => {
                        U.preventDefault()
                    }
                    ,
                    onUnmountAutoFocus: q(o, U => {
                        var ne;
                        (ne = f.trigger) == null || ne.focus({
                            preventScroll: !0
                        }),
                            U.preventDefault()
                    }
                    ),
                    children: l.jsx(Ta, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: i,
                        onFocusOutside: U => U.preventDefault(),
                        onDismiss: () => f.onOpenChange(!1),
                        children: l.jsx(Me, {
                            role: "listbox",
                            id: f.contentId,
                            "data-state": f.open ? "open" : "closed",
                            dir: f.dir,
                            onContextMenu: U => U.preventDefault(),
                            ...g,
                            ...Z,
                            onPlaced: () => O(!0),
                            ref: E,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...g.style
                            },
                            onKeyDown: q(g.onKeyDown, U => {
                                const ne = U.ctrlKey || U.altKey || U.metaKey;
                                if (U.key === "Tab" && U.preventDefault(),
                                    !ne && U.key.length === 1 && I(U.key),
                                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key)) {
                                    let ee = L().filter(se => !se.disabled).map(se => se.ref.current);
                                    if (["ArrowUp", "End"].includes(U.key) && (ee = ee.slice().reverse()),
                                        ["ArrowUp", "ArrowDown"].includes(U.key)) {
                                        const se = U.target
                                            , te = ee.indexOf(se);
                                        ee = ee.slice(te + 1)
                                    }
                                    setTimeout(() => F(ee)),
                                        U.preventDefault()
                                }
                            }
                            )
                        })
                    })
                })
            })
        })
    }
    );
ry.displayName = M2;
var O2 = "SelectItemAlignedPosition"
    , oy = v.forwardRef((e, t) => {
        const { __scopeSelect: n, onPlaced: r, ...o } = e
            , s = qn(xr, n)
            , i = Zn(xr, n)
            , [a, c] = v.useState(null)
            , [u, h] = v.useState(null)
            , p = be(t, E => h(E))
            , d = Ka(n)
            , w = v.useRef(!1)
            , x = v.useRef(!0)
            , { viewport: m, selectedItem: S, selectedItemText: g, focusSelectedItem: f } = i
            , y = v.useCallback(() => {
                if (s.trigger && s.valueNode && a && u && m && S && g) {
                    const E = s.trigger.getBoundingClientRect()
                        , j = u.getBoundingClientRect()
                        , _ = s.valueNode.getBoundingClientRect()
                        , A = g.getBoundingClientRect();
                    if (s.dir !== "rtl") {
                        const se = A.left - j.left
                            , te = _.left - se
                            , Qe = E.left - te
                            , it = E.width + Qe
                            , mn = Math.max(it, j.width)
                            , yt = window.innerWidth - jt
                            , Jn = gp(te, [jt, Math.max(jt, yt - mn)]);
                        a.style.minWidth = it + "px",
                            a.style.left = Jn + "px"
                    } else {
                        const se = j.right - A.right
                            , te = window.innerWidth - _.right - se
                            , Qe = window.innerWidth - E.right - te
                            , it = E.width + Qe
                            , mn = Math.max(it, j.width)
                            , yt = window.innerWidth - jt
                            , Jn = gp(te, [jt, Math.max(jt, yt - mn)]);
                        a.style.minWidth = it + "px",
                            a.style.right = Jn + "px"
                    }
                    const $ = d()
                        , L = window.innerHeight - jt * 2
                        , H = m.scrollHeight
                        , O = window.getComputedStyle(u)
                        , W = parseInt(O.borderTopWidth, 10)
                        , F = parseInt(O.paddingTop, 10)
                        , V = parseInt(O.borderBottomWidth, 10)
                        , N = parseInt(O.paddingBottom, 10)
                        , R = W + F + H + N + V
                        , z = Math.min(S.offsetHeight * 5, R)
                        , I = window.getComputedStyle(m)
                        , B = parseInt(I.paddingTop, 10)
                        , G = parseInt(I.paddingBottom, 10)
                        , oe = E.top + E.height / 2 - jt
                        , Me = L - oe
                        , Z = S.offsetHeight / 2
                        , U = S.offsetTop + Z
                        , ne = W + F + U
                        , we = R - ne;
                    if (ne <= oe) {
                        const se = $.length > 0 && S === $[$.length - 1].ref.current;
                        a.style.bottom = "0px";
                        const te = u.clientHeight - m.offsetTop - m.offsetHeight
                            , Qe = Math.max(Me, Z + (se ? G : 0) + te + V)
                            , it = ne + Qe;
                        a.style.height = it + "px"
                    } else {
                        const se = $.length > 0 && S === $[0].ref.current;
                        a.style.top = "0px";
                        const Qe = Math.max(oe, W + m.offsetTop + (se ? B : 0) + Z) + we;
                        a.style.height = Qe + "px",
                            m.scrollTop = ne - oe + m.offsetTop
                    }
                    a.style.margin = `${jt}px 0`,
                        a.style.minHeight = z + "px",
                        a.style.maxHeight = L + "px",
                        r == null || r(),
                        requestAnimationFrame(() => w.current = !0)
                }
            }
                , [d, s.trigger, s.valueNode, a, u, m, S, g, s.dir, r]);
        Ke(() => y(), [y]);
        const [C, b] = v.useState();
        Ke(() => {
            u && b(window.getComputedStyle(u).zIndex)
        }
            , [u]);
        const k = v.useCallback(E => {
            E && x.current === !0 && (y(),
                f == null || f(),
                x.current = !1)
        }
            , [y, f]);
        return l.jsx(_2, {
            scope: n,
            contentWrapper: a,
            shouldExpandOnScrollRef: w,
            onScrollButtonChange: k,
            children: l.jsx("div", {
                ref: c,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: C
                },
                children: l.jsx(re.div, {
                    ...o,
                    ref: p,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...o.style
                    }
                })
            })
        })
    }
    );
oy.displayName = O2;
var A2 = "SelectPopperPosition"
    , Zc = v.forwardRef((e, t) => {
        const { __scopeSelect: n, align: r = "start", collisionPadding: o = jt, ...s } = e
            , i = Qa(n);
        return l.jsx(cg, {
            ...i,
            ...s,
            ref: t,
            align: r,
            collisionPadding: o,
            style: {
                boxSizing: "border-box",
                ...s.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    }
    );
Zc.displayName = A2;
var [_2, yd] = Eo(xr, {})
    , Jc = "SelectViewport"
    , sy = v.forwardRef((e, t) => {
        const { __scopeSelect: n, nonce: r, ...o } = e
            , s = Zn(Jc, n)
            , i = yd(Jc, n)
            , a = be(t, s.onViewportChange)
            , c = v.useRef(0);
        return l.jsxs(l.Fragment, {
            children: [l.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                },
                nonce: r
            }), l.jsx(Wa.Slot, {
                scope: n,
                children: l.jsx(re.div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...o,
                    ref: a,
                    style: {
                        position: "relative",
                        flex: 1,
                        overflow: "hidden auto",
                        ...o.style
                    },
                    onScroll: q(o.onScroll, u => {
                        const h = u.currentTarget
                            , { contentWrapper: p, shouldExpandOnScrollRef: d } = i;
                        if (d != null && d.current && p) {
                            const w = Math.abs(c.current - h.scrollTop);
                            if (w > 0) {
                                const x = window.innerHeight - jt * 2
                                    , m = parseFloat(p.style.minHeight)
                                    , S = parseFloat(p.style.height)
                                    , g = Math.max(m, S);
                                if (g < x) {
                                    const f = g + w
                                        , y = Math.min(x, f)
                                        , C = f - y;
                                    p.style.height = y + "px",
                                        p.style.bottom === "0px" && (h.scrollTop = C > 0 ? C : 0,
                                            p.style.justifyContent = "flex-end")
                                }
                            }
                        }
                        c.current = h.scrollTop
                    }
                    )
                })
            })]
        })
    }
    );
sy.displayName = Jc;
var iy = "SelectGroup"
    , [I2, L2] = Eo(iy)
    , D2 = v.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e
            , o = sd();
        return l.jsx(I2, {
            scope: n,
            id: o,
            children: l.jsx(re.div, {
                role: "group",
                "aria-labelledby": o,
                ...r,
                ref: t
            })
        })
    }
    );
D2.displayName = iy;
var ay = "SelectLabel"
    , ly = v.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e
            , o = L2(ay, n);
        return l.jsx(re.div, {
            id: o.id,
            ...r,
            ref: t
        })
    }
    );
ly.displayName = ay;
var la = "SelectItem"
    , [F2, cy] = Eo(la)
    , uy = v.forwardRef((e, t) => {
        const { __scopeSelect: n, value: r, disabled: o = !1, textValue: s, ...i } = e
            , a = qn(la, n)
            , c = Zn(la, n)
            , u = a.value === r
            , [h, p] = v.useState(s ?? "")
            , [d, w] = v.useState(!1)
            , x = be(t, f => {
                var y;
                return (y = c.itemRefCallback) == null ? void 0 : y.call(c, f, r, o)
            }
            )
            , m = sd()
            , S = v.useRef("touch")
            , g = () => {
                o || (a.onValueChange(r),
                    a.onOpenChange(!1))
            }
            ;
        if (r === "")
            throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return l.jsx(F2, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: v.useCallback(f => {
                p(y => y || ((f == null ? void 0 : f.textContent) ?? "").trim())
            }
                , []),
            children: l.jsx(Wa.ItemSlot, {
                scope: n,
                value: r,
                disabled: o,
                textValue: h,
                children: l.jsx(re.div, {
                    role: "option",
                    "aria-labelledby": m,
                    "data-highlighted": d ? "" : void 0,
                    "aria-selected": u && d,
                    "data-state": u ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                    ...i,
                    ref: x,
                    onFocus: q(i.onFocus, () => w(!0)),
                    onBlur: q(i.onBlur, () => w(!1)),
                    onClick: q(i.onClick, () => {
                        S.current !== "mouse" && g()
                    }
                    ),
                    onPointerUp: q(i.onPointerUp, () => {
                        S.current === "mouse" && g()
                    }
                    ),
                    onPointerDown: q(i.onPointerDown, f => {
                        S.current = f.pointerType
                    }
                    ),
                    onPointerMove: q(i.onPointerMove, f => {
                        var y;
                        S.current = f.pointerType,
                            o ? (y = c.onItemLeave) == null || y.call(c) : S.current === "mouse" && f.currentTarget.focus({
                                preventScroll: !0
                            })
                    }
                    ),
                    onPointerLeave: q(i.onPointerLeave, f => {
                        var y;
                        f.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c))
                    }
                    ),
                    onKeyDown: q(i.onKeyDown, f => {
                        var C;
                        ((C = c.searchRef) == null ? void 0 : C.current) !== "" && f.key === " " || (N2.includes(f.key) && g(),
                            f.key === " " && f.preventDefault())
                    }
                    )
                })
            })
        })
    }
    );
uy.displayName = la;
var Uo = "SelectItemText"
    , dy = v.forwardRef((e, t) => {
        const { __scopeSelect: n, className: r, style: o, ...s } = e
            , i = qn(Uo, n)
            , a = Zn(Uo, n)
            , c = cy(Uo, n)
            , u = P2(Uo, n)
            , [h, p] = v.useState(null)
            , d = be(t, g => p(g), c.onItemTextChange, g => {
                var f;
                return (f = a.itemTextRefCallback) == null ? void 0 : f.call(a, g, c.value, c.disabled)
            }
            )
            , w = h == null ? void 0 : h.textContent
            , x = v.useMemo(() => l.jsx("option", {
                value: c.value,
                disabled: c.disabled,
                children: w
            }, c.value), [c.disabled, c.value, w])
            , { onNativeOptionAdd: m, onNativeOptionRemove: S } = u;
        return Ke(() => (m(x),
            () => S(x)), [m, S, x]),
            l.jsxs(l.Fragment, {
                children: [l.jsx(re.span, {
                    id: c.textId,
                    ...s,
                    ref: d
                }), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Cr.createPortal(s.children, i.valueNode) : null]
            })
    }
    );
dy.displayName = Uo;
var fy = "SelectItemIndicator"
    , py = v.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e;
        return cy(fy, n).isSelected ? l.jsx(re.span, {
            "aria-hidden": !0,
            ...r,
            ref: t
        }) : null
    }
    );
py.displayName = fy;
var eu = "SelectScrollUpButton"
    , hy = v.forwardRef((e, t) => {
        const n = Zn(eu, e.__scopeSelect)
            , r = yd(eu, e.__scopeSelect)
            , [o, s] = v.useState(!1)
            , i = be(t, r.onScrollButtonChange);
        return Ke(() => {
            if (n.viewport && n.isPositioned) {
                let a = function () {
                    const u = c.scrollTop > 0;
                    s(u)
                };
                const c = n.viewport;
                return a(),
                    c.addEventListener("scroll", a),
                    () => c.removeEventListener("scroll", a)
            }
        }
            , [n.viewport, n.isPositioned]),
            o ? l.jsx(vy, {
                ...e,
                ref: i,
                onAutoScroll: () => {
                    const { viewport: a, selectedItem: c } = n;
                    a && c && (a.scrollTop = a.scrollTop - c.offsetHeight)
                }
            }) : null
    }
    );
hy.displayName = eu;
var tu = "SelectScrollDownButton"
    , my = v.forwardRef((e, t) => {
        const n = Zn(tu, e.__scopeSelect)
            , r = yd(tu, e.__scopeSelect)
            , [o, s] = v.useState(!1)
            , i = be(t, r.onScrollButtonChange);
        return Ke(() => {
            if (n.viewport && n.isPositioned) {
                let a = function () {
                    const u = c.scrollHeight - c.clientHeight
                        , h = Math.ceil(c.scrollTop) < u;
                    s(h)
                };
                const c = n.viewport;
                return a(),
                    c.addEventListener("scroll", a),
                    () => c.removeEventListener("scroll", a)
            }
        }
            , [n.viewport, n.isPositioned]),
            o ? l.jsx(vy, {
                ...e,
                ref: i,
                onAutoScroll: () => {
                    const { viewport: a, selectedItem: c } = n;
                    a && c && (a.scrollTop = a.scrollTop + c.offsetHeight)
                }
            }) : null
    }
    );
my.displayName = tu;
var vy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e
        , s = Zn("SelectScrollButton", n)
        , i = v.useRef(null)
        , a = Ka(n)
        , c = v.useCallback(() => {
            i.current !== null && (window.clearInterval(i.current),
                i.current = null)
        }
            , []);
    return v.useEffect(() => () => c(), [c]),
        Ke(() => {
            var h;
            const u = a().find(p => p.ref.current === document.activeElement);
            (h = u == null ? void 0 : u.ref.current) == null || h.scrollIntoView({
                block: "nearest"
            })
        }
            , [a]),
        l.jsx(re.div, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            style: {
                flexShrink: 0,
                ...o.style
            },
            onPointerDown: q(o.onPointerDown, () => {
                i.current === null && (i.current = window.setInterval(r, 50))
            }
            ),
            onPointerMove: q(o.onPointerMove, () => {
                var u;
                (u = s.onItemLeave) == null || u.call(s),
                    i.current === null && (i.current = window.setInterval(r, 50))
            }
            ),
            onPointerLeave: q(o.onPointerLeave, () => {
                c()
            }
            )
        })
}
)
    , z2 = "SelectSeparator"
    , gy = v.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e;
        return l.jsx(re.div, {
            "aria-hidden": !0,
            ...r,
            ref: t
        })
    }
    );
gy.displayName = z2;
var nu = "SelectArrow"
    , $2 = v.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e
            , o = Qa(n)
            , s = qn(nu, n)
            , i = Zn(nu, n);
        return s.open && i.position === "popper" ? l.jsx(ug, {
            ...o,
            ...r,
            ref: t
        }) : null
    }
    );
$2.displayName = nu;
function yy(e) {
    return e === "" || e === void 0
}
var xy = v.forwardRef((e, t) => {
    const { value: n, ...r } = e
        , o = v.useRef(null)
        , s = be(t, o)
        , i = LN(n);
    return v.useEffect(() => {
        const a = o.current
            , c = window.HTMLSelectElement.prototype
            , h = Object.getOwnPropertyDescriptor(c, "value").set;
        if (i !== n && h) {
            const p = new Event("change", {
                bubbles: !0
            });
            h.call(a, n),
                a.dispatchEvent(p)
        }
    }
        , [i, n]),
        l.jsx(Ms, {
            asChild: !0,
            children: l.jsx("select", {
                ...r,
                ref: s,
                defaultValue: n
            })
        })
}
);
xy.displayName = "BubbleSelect";
function wy(e) {
    const t = mt(e)
        , n = v.useRef("")
        , r = v.useRef(0)
        , o = v.useCallback(i => {
            const a = n.current + i;
            t(a),
                function c(u) {
                    n.current = u,
                        window.clearTimeout(r.current),
                        u !== "" && (r.current = window.setTimeout(() => c(""), 1e3))
                }(a)
        }
            , [t])
        , s = v.useCallback(() => {
            n.current = "",
                window.clearTimeout(r.current)
        }
            , []);
    return v.useEffect(() => () => window.clearTimeout(r.current), []),
        [n, o, s]
}
function Sy(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
        , s = n ? e.indexOf(n) : -1;
    let i = B2(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const c = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return c !== n ? c : void 0
}
function B2(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var U2 = Yg
    , Cy = Xg
    , H2 = Zg
    , V2 = Jg
    , W2 = ey
    , by = ty
    , K2 = sy
    , Ny = ly
    , Ey = uy
    , Q2 = dy
    , Y2 = py
    , ky = hy
    , jy = my
    , Py = gy;
const ca = U2
    , ua = H2
    , Ss = v.forwardRef(({ className: e, children: t, ...n }, r) => l.jsxs(Cy, {
        ref: r,
        className: ce("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
        ...n,
        children: [t, l.jsx(V2, {
            asChild: !0,
            children: l.jsx(Mv, {
                className: "h-4 w-4 opacity-50"
            })
        })]
    }));
Ss.displayName = Cy.displayName;
const Ty = v.forwardRef(({ className: e, ...t }, n) => l.jsx(ky, {
    ref: n,
    className: ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: l.jsx(g1, {
        className: "h-4 w-4"
    })
}));
Ty.displayName = ky.displayName;
const Ry = v.forwardRef(({ className: e, ...t }, n) => l.jsx(jy, {
    ref: n,
    className: ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: l.jsx(Mv, {
        className: "h-4 w-4"
    })
}));
Ry.displayName = jy.displayName;
const Cs = v.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => l.jsx(W2, {
    children: l.jsxs(by, {
        ref: o,
        className: ce("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [l.jsx(Ty, {}), l.jsx(K2, {
            className: ce("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), l.jsx(Ry, {})]
    })
}));
Cs.displayName = by.displayName;
const G2 = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Ny, {
    ref: n,
    className: ce("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
G2.displayName = Ny.displayName;
const Ut = v.forwardRef(({ className: e, children: t, ...n }, r) => l.jsxs(Ey, {
    ref: r,
    className: ce("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [l.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: l.jsx(Y2, {
            children: l.jsx(v1, {
                className: "h-4 w-4"
            })
        })
    }), l.jsx(Q2, {
        children: t
    })]
}));
Ut.displayName = Ey.displayName;
const X2 = v.forwardRef(({ className: e, ...t }, n) => l.jsx(Py, {
    ref: n,
    className: ce("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
X2.displayName = Py.displayName;
const My = v.forwardRef(({ className: e, ...t }, n) => l.jsx("textarea", {
    className: ce("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
My.displayName = "Textarea";
const q2 = ({ onComplete: e }) => {
    const { toast: t } = Pa()
        , [n, r] = v.useState({
            name: "",
            address: "",
            contactNumber: "",
            chronicIllness: "",
            procedure: "",
            customProcedure: ""
        })
        , o = ["Annual Physical Exam", "Blood Test (CBC)", "X-Ray", "Ultrasound", "CT Scan", "MRI", "Dental Cleaning", "Eye Exam", "Vaccination", "Other (specify below)"]
        , s = i => {
            if (i.preventDefault(),
                !n.name || !n.address || !n.contactNumber) {
                t({
                    title: "Incomplete Information",
                    description: "Please fill in all required fields.",
                    variant: "destructive"
                });
                return
            }
            const a = n.procedure === "Other (specify below)" ? n.customProcedure : n.procedure
                , c = {
                    ...n,
                    procedure: a,
                    setupComplete: !0
                };
            localStorage.setItem("memberData", JSON.stringify(c)),
                t({
                    title: "Profile Created Successfully",
                    description: "Welcome to AICo! Your health profile has been set up."
                }),
                e(c)
        }
        ;
    return l.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4",
        children: l.jsxs("div", {
            className: "max-w-2xl mx-auto pt-8",
            children: [l.jsxs("div", {
                className: "text-center mb-8",
                children: [l.jsxs("h1", {
                    className: "text-4xl font-bold text-foreground mb-4",
                    children: ["Welcome to ", l.jsx("span", {
                        className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
                        children: "AICo"
                    })]
                }), l.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    children: "Your intelligent health benefits companion for Philippine healthcare"
                })]
            }), l.jsxs(Pe, {
                className: "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                children: [l.jsxs(He, {
                    className: "text-center pb-6",
                    children: [l.jsxs(Ve, {
                        className: "text-2xl text-primary flex items-center justify-center gap-2",
                        children: [l.jsx(ea, {
                            className: "w-6 h-6"
                        }), "Member Setup"]
                    }), l.jsx(Xt, {
                        className: "text-base",
                        children: "Set up your health profile to get personalized recommendations"
                    })]
                }), l.jsx(Te, {
                    children: l.jsxs("form", {
                        onSubmit: s,
                        className: "space-y-6",
                        children: [l.jsxs("div", {
                            className: "grid gap-4",
                            children: [l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsxs(rn, {
                                    htmlFor: "name",
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(ea, {
                                        className: "w-4 h-4"
                                    }), "Full Name *"]
                                }), l.jsx(sr, {
                                    id: "name",
                                    value: n.name,
                                    onChange: i => r({
                                        ...n,
                                        name: i.target.value
                                    }),
                                    placeholder: "Enter your full name",
                                    className: "h-12",
                                    required: !0
                                })]
                            }), l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsxs(rn, {
                                    htmlFor: "address",
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(vo, {
                                        className: "w-4 h-4"
                                    }), "Address *"]
                                }), l.jsx(My, {
                                    id: "address",
                                    value: n.address,
                                    onChange: i => r({
                                        ...n,
                                        address: i.target.value
                                    }),
                                    placeholder: "Enter your complete address (City, Province)",
                                    className: "min-h-[80px]",
                                    required: !0
                                })]
                            }), l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsxs(rn, {
                                    htmlFor: "contact",
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(Av, {
                                        className: "w-4 h-4"
                                    }), "Contact Number *"]
                                }), l.jsx(sr, {
                                    id: "contact",
                                    value: n.contactNumber,
                                    onChange: i => r({
                                        ...n,
                                        contactNumber: i.target.value
                                    }),
                                    placeholder: "+63 9XX XXX XXXX",
                                    className: "h-12",
                                    required: !0
                                })]
                            }), l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsxs(rn, {
                                    htmlFor: "illness",
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(Rv, {
                                        className: "w-4 h-4"
                                    }), "Chronic Illness (Optional)"]
                                }), l.jsx(sr, {
                                    id: "illness",
                                    value: n.chronicIllness,
                                    onChange: i => r({
                                        ...n,
                                        chronicIllness: i.target.value
                                    }),
                                    placeholder: "e.g., Diabetes, Hypertension",
                                    className: "h-12"
                                })]
                            }), l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsxs(rn, {
                                    htmlFor: "procedure",
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(Dc, {
                                        className: "w-4 h-4"
                                    }), "Current Procedure Interest (Optional)"]
                                }), l.jsxs(ca, {
                                    value: n.procedure,
                                    onValueChange: i => r({
                                        ...n,
                                        procedure: i
                                    }),
                                    children: [l.jsx(Ss, {
                                        className: "h-12",
                                        children: l.jsx(ua, {
                                            placeholder: "Select a procedure"
                                        })
                                    }), l.jsx(Cs, {
                                        children: o.map(i => l.jsx(Ut, {
                                            value: i,
                                            children: i
                                        }, i))
                                    })]
                                })]
                            }), n.procedure === "Other (specify below)" && l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsx(rn, {
                                    htmlFor: "customProcedure",
                                    className: "text-sm font-medium",
                                    children: "Specify Procedure"
                                }), l.jsx(sr, {
                                    id: "customProcedure",
                                    value: n.customProcedure,
                                    onChange: i => r({
                                        ...n,
                                        customProcedure: i.target.value
                                    }),
                                    placeholder: "Enter specific procedure",
                                    className: "h-12"
                                })]
                            })]
                        }), l.jsx(Ne, {
                            type: "submit",
                            variant: "medical",
                            size: "lg",
                            className: "w-full mt-8",
                            children: "Complete Setup & Continue"
                        })]
                    })
                })]
            })]
        })
    })
}
    , Z2 = Oa("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });
function fr({ className: e, variant: t, ...n }) {
    return l.jsx("div", {
        className: ce(Z2({
            variant: t
        }), e),
        ...n
    })
}
function J2(e, t = []) {
    let n = [];
    function r(s, i) {
        const a = v.createContext(i)
            , c = n.length;
        n = [...n, i];
        function u(p) {
            const { scope: d, children: w, ...x } = p
                , m = (d == null ? void 0 : d[e][c]) || a
                , S = v.useMemo(() => x, Object.values(x));
            return l.jsx(m.Provider, {
                value: S,
                children: w
            })
        }
        function h(p, d) {
            const w = (d == null ? void 0 : d[e][c]) || a
                , x = v.useContext(w);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
            [u, h]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function (a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    }
        ;
    return o.scopeName = e,
        [r, eE(o, ...t)]
}
function eE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function (s) {
            const i = r.reduce((a, { useScope: c, scopeName: u }) => {
                const p = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...p
                }
            }
                , {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
var xd = "Progress"
    , wd = 100
    , [tE, kE] = J2(xd)
    , [nE, rE] = tE(xd)
    , Oy = v.forwardRef((e, t) => {
        const { __scopeProgress: n, value: r = null, max: o, getValueLabel: s = oE, ...i } = e;
        (o || o === 0) && !Pp(o) && console.error(sE(`${o}`, "Progress"));
        const a = Pp(o) ? o : wd;
        r !== null && !Tp(r, a) && console.error(iE(`${r}`, "Progress"));
        const c = Tp(r, a) ? r : null
            , u = da(c) ? s(c, a) : void 0;
        return l.jsx(nE, {
            scope: n,
            value: c,
            max: a,
            children: l.jsx(re.div, {
                "aria-valuemax": a,
                "aria-valuemin": 0,
                "aria-valuenow": da(c) ? c : void 0,
                "aria-valuetext": u,
                role: "progressbar",
                "data-state": Iy(c, a),
                "data-value": c ?? void 0,
                "data-max": a,
                ...i,
                ref: t
            })
        })
    }
    );
Oy.displayName = xd;
var Ay = "ProgressIndicator"
    , _y = v.forwardRef((e, t) => {
        const { __scopeProgress: n, ...r } = e
            , o = rE(Ay, n);
        return l.jsx(re.div, {
            "data-state": Iy(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t
        })
    }
    );
_y.displayName = Ay;
function oE(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function Iy(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function da(e) {
    return typeof e == "number"
}
function Pp(e) {
    return da(e) && !isNaN(e) && e > 0
}
function Tp(e, t) {
    return da(e) && !isNaN(e) && e <= t && e >= 0
}
function sE(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${wd}\`.`
}
function iE(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${wd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var Ly = Oy
    , aE = _y;
const bs = v.forwardRef(({ className: e, value: t, ...n }, r) => l.jsx(Ly, {
    ref: r,
    className: ce("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: l.jsx(aE, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
bs.displayName = Ly.displayName;
const lE = "/assets/healthcare-hero-CHYFoWIb.jpg"
    , cE = ({ memberData: e, onNavigate: t }) => {
        const n = {
            planName: "Maxicare EReady Plus",
            originalCoverage: 15e4,
            currentCoverage: 127500,
            usedAmount: 22500
        }
            , r = n.currentCoverage / n.originalCoverage * 100
            , o = e.chronicIllness ? [{
                type: "Lab Test Required",
                description: "CBC and HBA1c recommended every 3 months",
                dueDate: "Next week",
                urgency: "medium"
            }, {
                type: "Checkup Reminder",
                description: "Annual cardiology consultation due",
                dueDate: "This month",
                urgency: "low"
            }] : [{
                type: "Annual Physical",
                description: "Schedule your yearly checkup",
                dueDate: "Due in 2 months",
                urgency: "low"
            }];
        return l.jsxs("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10",
            children: [l.jsxs("div", {
                className: "relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-cover bg-center opacity-20",
                    style: {
                        backgroundImage: `url(${lE})`
                    }
                }), l.jsx("div", {
                    className: "relative px-6 py-12",
                    children: l.jsx("div", {
                        className: "max-w-6xl mx-auto",
                        children: l.jsxs("div", {
                            className: "flex items-center gap-4 mb-4",
                            children: [l.jsx("div", {
                                className: "w-12 h-12 bg-white/20 rounded-full flex items-center justify-center",
                                children: l.jsx(ea, {
                                    className: "w-6 h-6 text-white"
                                })
                            }), l.jsxs("div", {
                                children: [l.jsxs("h1", {
                                    className: "text-3xl font-bold text-white mb-1",
                                    children: ["Welcome, ", e.name]
                                }), l.jsx("p", {
                                    className: "text-white/80 text-lg",
                                    children: "Your intelligent health companion is ready"
                                })]
                            })]
                        })
                    })
                })]
            }), l.jsxs("div", {
                className: "max-w-6xl mx-auto px-6 py-8",
                children: [l.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                    children: [l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsx(He, {
                            className: "pb-3",
                            children: l.jsxs(Ve, {
                                className: "text-lg flex items-center gap-2",
                                children: [l.jsx(vs, {
                                    className: "w-5 h-5 text-primary"
                                }), "Plan Coverage"]
                            })
                        }), l.jsx(Te, {
                            children: l.jsxs("div", {
                                className: "space-y-3",
                                children: [l.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [l.jsx("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Available"
                                    }), l.jsxs("span", {
                                        className: "font-bold text-primary",
                                        children: ["₱", n.currentCoverage.toLocaleString()]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [l.jsx("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Original"
                                    }), l.jsxs("span", {
                                        className: "text-sm",
                                        children: ["₱", n.originalCoverage.toLocaleString()]
                                    })]
                                }), l.jsx(bs, {
                                    value: r,
                                    className: "h-2"
                                }), l.jsxs("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [r.toFixed(1), "% remaining"]
                                })]
                            })
                        })]
                    }), l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsx(He, {
                            className: "pb-3",
                            children: l.jsxs(Ve, {
                                className: "text-lg flex items-center gap-2",
                                children: [l.jsx(Ji, {
                                    className: "w-5 h-5 text-accent"
                                }), "Used This Year"]
                            })
                        }), l.jsxs(Te, {
                            children: [l.jsxs("div", {
                                className: "text-2xl font-bold text-accent mb-2",
                                children: ["₱", n.usedAmount.toLocaleString()]
                            }), l.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Recent: Dental cleaning (₱3,500)"
                            })]
                        })]
                    }), l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsx(He, {
                            className: "pb-3",
                            children: l.jsxs(Ve, {
                                className: "text-lg flex items-center gap-2",
                                children: [l.jsx(w1, {
                                    className: "w-5 h-5 text-red-500"
                                }), "Health Status"]
                            })
                        }), l.jsxs(Te, {
                            children: [l.jsxs("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [l.jsx(fr, {
                                    variant: "secondary",
                                    className: "bg-accent/20 text-accent",
                                    children: "Active"
                                }), e.chronicIllness && l.jsx(fr, {
                                    variant: "outline",
                                    children: e.chronicIllness
                                })]
                            }), l.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Last checkup: 3 months ago"
                            })]
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsxs(He, {
                            children: [l.jsxs(Ve, {
                                className: "flex items-center gap-2",
                                children: [l.jsx(vs, {
                                    className: "w-5 h-5 text-primary"
                                }), n.planName]
                            }), l.jsx(Xt, {
                                children: "Your Maxicare health plan details and benefits"
                            })]
                        }), l.jsxs(Te, {
                            className: "space-y-4",
                            children: [l.jsxs("div", {
                                className: "bg-primary/5 p-4 rounded-lg",
                                children: [l.jsx("h4", {
                                    className: "font-semibold mb-2",
                                    children: "Coverage Benefits"
                                }), l.jsxs("ul", {
                                    className: "text-sm space-y-1 text-muted-foreground",
                                    children: [l.jsx("li", {
                                        children: "• In-patient hospitalization"
                                    }), l.jsx("li", {
                                        children: "• Out-patient consultations"
                                    }), l.jsx("li", {
                                        children: "• Emergency care coverage"
                                    }), l.jsx("li", {
                                        children: "• Diagnostic tests and procedures"
                                    })]
                                })]
                            }), l.jsxs(Ne, {
                                variant: "medical",
                                onClick: () => t("providers"),
                                className: "w-full",
                                children: [l.jsx(vo, {
                                    className: "w-4 h-4 mr-2"
                                }), "Find Healthcare Providers"]
                            })]
                        })]
                    }), l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsxs(He, {
                            children: [l.jsxs(Ve, {
                                className: "flex items-center gap-2",
                                children: [l.jsx(h1, {
                                    className: "w-5 h-5 text-accent"
                                }), "Health Monitoring"]
                            }), l.jsx(Xt, {
                                children: "Recommended check-ups and health reminders"
                            })]
                        }), l.jsxs(Te, {
                            className: "space-y-4",
                            children: [o.map((s, i) => l.jsx("div", {
                                className: `p-4 rounded-lg border-l-4 ${s.urgency === "medium" ? "border-orange-400 bg-orange-50" : "border-blue-400 bg-blue-50"}`,
                                children: l.jsxs("div", {
                                    className: "flex items-start justify-between",
                                    children: [l.jsxs("div", {
                                        children: [l.jsx("h4", {
                                            className: "font-semibold text-sm mb-1",
                                            children: s.type
                                        }), l.jsx("p", {
                                            className: "text-sm text-muted-foreground mb-2",
                                            children: s.description
                                        }), l.jsxs("div", {
                                            className: "flex items-center gap-1 text-xs text-muted-foreground",
                                            children: [l.jsx(Bo, {
                                                className: "w-3 h-3"
                                            }), s.dueDate]
                                        })]
                                    }), l.jsx(fr, {
                                        variant: s.urgency === "medium" ? "destructive" : "secondary",
                                        className: "text-xs",
                                        children: s.urgency
                                    })]
                                })
                            }, i)), l.jsxs(Ne, {
                                variant: "healthcare",
                                onClick: () => t("recommendations"),
                                className: "w-full",
                                children: [l.jsx(Rv, {
                                    className: "w-4 h-4 mr-2"
                                }), "Get AI Recommendations"]
                            })]
                        })]
                    })]
                }), l.jsxs(Pe, {
                    className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm mt-8",
                    children: [l.jsx(He, {
                        children: l.jsxs(Ve, {
                            className: "flex items-center gap-2",
                            children: [l.jsx(ea, {
                                className: "w-5 h-5 text-primary"
                            }), "Member Information"]
                        })
                    }), l.jsx(Te, {
                        children: l.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [l.jsxs("div", {
                                className: "space-y-3",
                                children: [l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "Location"
                                    }), l.jsx("p", {
                                        className: "text-sm",
                                        children: e.address
                                    })]
                                }), l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "Contact"
                                    }), l.jsx("p", {
                                        className: "text-sm",
                                        children: e.contactNumber
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "space-y-3",
                                children: [e.chronicIllness && l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "Chronic Conditions"
                                    }), l.jsx("p", {
                                        className: "text-sm",
                                        children: e.chronicIllness
                                    })]
                                }), e.procedure && l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "Current Interest"
                                    }), l.jsx("p", {
                                        className: "text-sm",
                                        children: e.procedure
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    , uE = ({ memberData: e, onNavigate: t }) => {
        const [n, r] = v.useState("")
            , [o, s] = v.useState("all")
            , [i, a] = v.useState("all")
            , [c, u] = v.useState(null)
            , { toast: h } = Pa()
            , d = [{
                id: 1,
                name: "St. Luke's Medical Center - Global City",
                type: "Hospital",
                network: "in-network",
                rating: 4.8,
                distance: "2.5 km",
                address: "279 E Rodriguez Sr Ave, Quezon City",
                phone: "+63 2 8723 0101",
                specialties: ["Cardiology", "Oncology", "Emergency"],
                copay: "₱500",
                waitTime: "15-30 mins",
                accreditation: "DOH Level 3"
            }, {
                id: 2,
                name: "Makati Medical Center",
                type: "Hospital",
                network: "in-network",
                rating: 4.7,
                distance: "5.1 km",
                address: "2 Amorsolo Street, Legaspi Village, Makati",
                phone: "+63 2 8888 8999",
                specialties: ["Surgery", "Internal Medicine", "Pediatrics"],
                copay: "₱300",
                waitTime: "20-45 mins",
                accreditation: "DOH Level 3"
            }, {
                id: 3,
                name: "Philippine Heart Center",
                type: "Specialty Hospital",
                network: "in-network",
                rating: 4.9,
                distance: "8.2 km",
                address: "East Avenue, Diliman, Quezon City",
                phone: "+63 2 8925 2401",
                specialties: ["Cardiology", "Cardiac Surgery"],
                copay: "₱200",
                waitTime: "30-60 mins",
                accreditation: "DOH Level 3"
            }, {
                id: 4,
                name: "Hi-Precision Diagnostics",
                type: "Laboratory",
                network: "in-network",
                rating: 4.5,
                distance: "1.8 km",
                address: "Multiple locations across Metro Manila",
                phone: "+63 2 8441 7442",
                specialties: ["Laboratory", "Radiology", "Executive Checkup"],
                copay: "₱150",
                waitTime: "10-20 mins",
                accreditation: "DOH Certified"
            }, {
                id: 5,
                name: "Asian Hospital and Medical Center",
                type: "Hospital",
                network: "out-of-network",
                rating: 4.6,
                distance: "12.3 km",
                address: "2205 Civic Drive, Filinvest City, Alabang",
                phone: "+63 2 8771 9000",
                specialties: ["Rehabilitation", "Orthopedics", "Neurology"],
                copay: "₱800",
                waitTime: "25-40 mins",
                accreditation: "JCI Accredited"
            }].filter(x => {
                const m = x.name.toLowerCase().includes(n.toLowerCase()) || x.specialties.some(f => f.toLowerCase().includes(n.toLowerCase()))
                    , S = o === "all" || x.network === o
                    , g = i === "all" || x.type === i;
                return m && S && g
            }
            )
            , w = async x => {
                u(x.id);
                try {
                    await new Promise(m => setTimeout(m, 1500)),
                        h({
                            title: "Notification Sent! ✉️",
                            description: `${x.name} has been notified of your interest. They will contact you at ${e.phone || e.email || "your registered contact"} within 24 hours.`,
                            duration: 5e3
                        })
                } catch {
                    h({
                        title: "Notification Failed",
                        description: "Unable to send notification. Please try again or contact the provider directly.",
                        variant: "destructive"
                    })
                } finally {
                    u(null)
                }
            }
            ;
        return l.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-6",
            children: l.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [l.jsxs("div", {
                    className: "mb-8",
                    children: [l.jsx(Ne, {
                        variant: "ghost",
                        onClick: () => t("dashboard"),
                        className: "mb-4",
                        children: "← Back to Dashboard"
                    }), l.jsx("h1", {
                        className: "text-3xl font-bold text-foreground mb-2",
                        children: "Find Healthcare Providers"
                    }), l.jsxs("p", {
                        className: "text-muted-foreground",
                        children: ["Discover in-network providers near ", e.address]
                    })]
                }), l.jsx(Pe, {
                    className: "mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                    children: l.jsx(Te, {
                        className: "pt-6",
                        children: l.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                            children: [l.jsx("div", {
                                className: "md:col-span-2",
                                children: l.jsxs("div", {
                                    className: "relative",
                                    children: [l.jsx(b1, {
                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
                                    }), l.jsx(sr, {
                                        placeholder: "Search providers, specialties...",
                                        value: n,
                                        onChange: x => r(x.target.value),
                                        className: "pl-10 h-12"
                                    })]
                                })
                            }), l.jsxs(ca, {
                                value: o,
                                onValueChange: s,
                                children: [l.jsxs(Ss, {
                                    className: "h-12",
                                    children: [l.jsx(x1, {
                                        className: "w-4 h-4 mr-2"
                                    }), l.jsx(ua, {
                                        placeholder: "Network"
                                    })]
                                }), l.jsxs(Cs, {
                                    children: [l.jsx(Ut, {
                                        value: "all",
                                        children: "All Networks"
                                    }), l.jsx(Ut, {
                                        value: "in-network",
                                        children: "In-Network"
                                    }), l.jsx(Ut, {
                                        value: "out-of-network",
                                        children: "Out-of-Network"
                                    })]
                                })]
                            }), l.jsxs(ca, {
                                value: i,
                                onValueChange: a,
                                children: [l.jsx(Ss, {
                                    className: "h-12",
                                    children: l.jsx(ua, {
                                        placeholder: "Provider Type"
                                    })
                                }), l.jsxs(Cs, {
                                    children: [l.jsx(Ut, {
                                        value: "all",
                                        children: "All Types"
                                    }), l.jsx(Ut, {
                                        value: "Hospital",
                                        children: "Hospitals"
                                    }), l.jsx(Ut, {
                                        value: "Specialty Hospital",
                                        children: "Specialty Centers"
                                    }), l.jsx(Ut, {
                                        value: "Laboratory",
                                        children: "Laboratories"
                                    })]
                                })]
                            })]
                        })
                    })
                }), l.jsxs("div", {
                    className: "space-y-4",
                    children: [l.jsxs("p", {
                        className: "text-sm text-muted-foreground mb-4",
                        children: ["Found ", d.length, " providers matching your criteria"]
                    }), d.map(x => l.jsx(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300",
                        children: l.jsx(Te, {
                            className: "p-6",
                            children: l.jsxs("div", {
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                children: [l.jsx("div", {
                                    className: "lg:col-span-2",
                                    children: l.jsx("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: l.jsxs("div", {
                                            children: [l.jsxs("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [l.jsx("div", {
                                                    className: "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",
                                                    children: x.type === "Laboratory" ? l.jsx(E1, {
                                                        className: "w-5 h-5 text-primary"
                                                    }) : l.jsx(Zi, {
                                                        className: "w-5 h-5 text-primary"
                                                    })
                                                }), l.jsxs("div", {
                                                    children: [l.jsx("h3", {
                                                        className: "text-lg font-semibold text-foreground",
                                                        children: x.name
                                                    }), l.jsx("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: x.type
                                                    })]
                                                })]
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-4 mb-3",
                                                children: [l.jsxs("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [l.jsx(Fc, {
                                                        className: "w-4 h-4 text-yellow-500 fill-current"
                                                    }), l.jsx("span", {
                                                        className: "font-medium",
                                                        children: x.rating
                                                    })]
                                                }), l.jsx(fr, {
                                                    variant: x.network === "in-network" ? "default" : "secondary",
                                                    className: x.network === "in-network" ? "bg-accent text-accent-foreground" : "",
                                                    children: x.network === "in-network" ? "In-Network" : "Out-of-Network"
                                                }), l.jsx(fr, {
                                                    variant: "outline",
                                                    children: x.accreditation
                                                })]
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-1 text-sm text-muted-foreground mb-2",
                                                children: [l.jsx(vo, {
                                                    className: "w-4 h-4"
                                                }), x.address, " • ", x.distance]
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-1 text-sm text-muted-foreground mb-3",
                                                children: [l.jsx(Av, {
                                                    className: "w-4 h-4"
                                                }), x.phone]
                                            }), l.jsx("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: x.specialties.map((m, S) => l.jsx(fr, {
                                                    variant: "secondary",
                                                    className: "text-xs",
                                                    children: m
                                                }, S))
                                            })]
                                        })
                                    })
                                }), l.jsxs("div", {
                                    className: "space-y-4",
                                    children: [l.jsxs("div", {
                                        className: "bg-primary/5 p-4 rounded-lg space-y-3",
                                        children: [l.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [l.jsx("span", {
                                                className: "text-sm font-medium",
                                                children: "Co-pay:"
                                            }), l.jsx("span", {
                                                className: "font-bold text-primary",
                                                children: x.copay
                                            })]
                                        }), l.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [l.jsx("span", {
                                                className: "text-sm font-medium",
                                                children: "Wait Time:"
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [l.jsx(rd, {
                                                    className: "w-3 h-3"
                                                }), l.jsx("span", {
                                                    className: "text-sm",
                                                    children: x.waitTime
                                                })]
                                            })]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "space-y-2",
                                        children: [l.jsxs(Ne, {
                                            variant: "medical",
                                            className: "w-full",
                                            children: [l.jsx(vs, {
                                                className: "w-4 h-4 mr-2"
                                            }), "Check Coverage"]
                                        }), l.jsx(Ne, {
                                            variant: "secondary",
                                            className: "w-full",
                                            onClick: () => w(x),
                                            disabled: c === x.id,
                                            children: c === x.id ? l.jsxs(l.Fragment, {
                                                children: [l.jsx("div", {
                                                    className: "w-4 h-4 mr-2 animate-spin rounded-full border-2 border-muted border-t-current"
                                                }), "Sending..."]
                                            }) : l.jsxs(l.Fragment, {
                                                children: [l.jsx(Ov, {
                                                    className: "w-4 h-4 mr-2"
                                                }), "Notify Provider"]
                                            })
                                        }), l.jsxs(Ne, {
                                            variant: "outline",
                                            className: "w-full",
                                            children: [l.jsx(vo, {
                                                className: "w-4 h-4 mr-2"
                                            }), "Get Directions"]
                                        })]
                                    })]
                                })]
                            })
                        })
                    }, x.id))]
                }), d.length === 0 && l.jsx(Pe, {
                    className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                    children: l.jsxs(Te, {
                        className: "text-center py-12",
                        children: [l.jsx(Zi, {
                            className: "w-12 h-12 text-muted-foreground mx-auto mb-4"
                        }), l.jsx("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "No providers found"
                        }), l.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Try adjusting your search criteria or filters"
                        })]
                    })
                })]
            })
        })
    }
    , dE = ({ memberData: e, onNavigate: t }) => {
        const [n, r] = v.useState("")
            , [o, s] = v.useState("")
            , [i, a] = v.useState(!1)
            , [c, u] = v.useState(!1)
            , [h, p] = v.useState(!1)
            , { toast: d } = Pa()
            , w = ["Knee Surgery", "Cataract Surgery", "Appendectomy", "Gallbladder Surgery", "Heart Bypass Surgery", "Hip Replacement", "Colonoscopy", "MRI Scan", "CT Scan", "Blood Test Panel", "Dental Crown", "Other (specify below)"]
            , x = async () => {
                u(!0),
                    await new Promise(f => setTimeout(f, 2e3)),
                    u(!1),
                    a(!0)
            }
            , m = async (f, y) => {
                p(!0);
                try {
                    await new Promise(C => setTimeout(C, 1500)),
                        d({
                            title: "Notification Sent! ✉️",
                            description: `${f} has been notified about your interest in ${y.toLowerCase()}. They will contact you within 24 hours.`,
                            duration: 5e3
                        })
                } catch {
                    d({
                        title: "Notification Failed",
                        description: "Unable to send notification. Please try again or contact the hospital directly.",
                        variant: "destructive"
                    })
                } finally {
                    p(!1)
                }
            }
            , g = {
                procedure: n === "Other (specify below)" ? o : n,
                recommendedProvider: {
                    name: "Makati Medical Center",
                    rating: 4.7,
                    distance: "5.1 km",
                    network: "in-network",
                    address: "2 Amorsolo Street, Legaspi Village, Makati"
                },
                costAnalysis: {
                    currentOutOfPocket: 8200,
                    nextMonthCost: 12700,
                    coverageUsed: 65,
                    deductibleResetDate: "January 1, 2025"
                },
                alternatives: [{
                    name: "St. Luke's Medical Center",
                    rating: 4.8,
                    distance: "8.3 km",
                    cost: 9500,
                    waitTime: "2-3 weeks"
                }, {
                    name: "Philippine Heart Center",
                    rating: 4.9,
                    distance: "12.1 km",
                    cost: 7800,
                    waitTime: "4-6 weeks"
                }],
                insights: ["Your current coverage provides optimal savings this month", "Scheduling now saves ₱4,500 vs. waiting until next year", "Recommended provider has excellent outcomes for this procedure", "Travel time is within your preferred 15-minute radius"]
            };
        return l.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-6",
            children: l.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [l.jsxs("div", {
                    className: "mb-8",
                    children: [l.jsx(Ne, {
                        variant: "ghost",
                        onClick: () => t("dashboard"),
                        className: "mb-4",
                        children: "← Back to Dashboard"
                    }), l.jsxs("div", {
                        className: "text-center mb-6",
                        children: [l.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4",
                            children: l.jsx(_o, {
                                className: "w-8 h-8 text-white"
                            })
                        }), l.jsx("h1", {
                            className: "text-3xl font-bold text-foreground mb-2",
                            children: "AI-Powered Recommendations"
                        }), l.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Get personalized healthcare recommendations based on your plan and preferences"
                        })]
                    })]
                }), i ? l.jsxs("div", {
                    className: "space-y-6",
                    children: [l.jsxs(Pe, {
                        className: "border-0 shadow-xl bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm",
                        children: [l.jsx(He, {
                            children: l.jsxs("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [l.jsx("div", {
                                    className: "w-10 h-10 bg-accent rounded-full flex items-center justify-center",
                                    children: l.jsx(qi, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }), l.jsxs("div", {
                                    children: [l.jsxs(Ve, {
                                        className: "text-xl text-primary",
                                        children: ["🤖 AI Recommendation for ", g.procedure]
                                    }), l.jsx(Xt, {
                                        className: "text-base",
                                        children: "Optimized for your plan, location, and preferences"
                                    })]
                                })]
                            })
                        }), l.jsxs(Te, {
                            children: [l.jsx("div", {
                                className: "bg-white/60 backdrop-blur-sm p-6 rounded-lg mb-6",
                                children: l.jsxs("p", {
                                    className: "text-lg leading-relaxed",
                                    children: [l.jsxs("strong", {
                                        children: ["Based on your plan and preferences, we recommend ", g.recommendedProvider.name, " for your ", g.procedure.toLowerCase(), "."]
                                    }), " Your estimated out-of-pocket cost is ", l.jsxs("span", {
                                        className: "font-bold text-primary",
                                        children: ["₱", g.costAnalysis.currentOutOfPocket.toLocaleString()]
                                    }), ". If you wait until next month, your deductible resets and the cost increases to ", l.jsxs("span", {
                                        className: "font-bold text-destructive",
                                        children: ["₱", g.costAnalysis.nextMonthCost.toLocaleString()]
                                    }), ". ", g.recommendedProvider.name, " is in-network, has a ", l.jsxs("span", {
                                        className: "font-bold text-accent",
                                        children: [g.recommendedProvider.rating, "-star rating"]
                                    }), ", and is ", l.jsx("span", {
                                        className: "font-bold",
                                        children: g.recommendedProvider.distance
                                    }), " from your location."]
                                })
                            }), l.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                                children: [l.jsxs("div", {
                                    className: "space-y-3",
                                    children: [l.jsxs("h4", {
                                        className: "font-semibold flex items-center gap-2",
                                        children: [l.jsx(Ji, {
                                            className: "w-4 h-4 text-accent"
                                        }), "Cost Analysis"]
                                    }), l.jsxs("div", {
                                        className: "bg-white/40 p-4 rounded-lg space-y-2",
                                        children: [l.jsxs("div", {
                                            className: "flex justify-between",
                                            children: [l.jsx("span", {
                                                children: "Current out-of-pocket:"
                                            }), l.jsxs("span", {
                                                className: "font-bold text-primary",
                                                children: ["₱", g.costAnalysis.currentOutOfPocket.toLocaleString()]
                                            })]
                                        }), l.jsxs("div", {
                                            className: "flex justify-between",
                                            children: [l.jsx("span", {
                                                children: "If waiting until reset:"
                                            }), l.jsxs("span", {
                                                className: "font-bold text-destructive",
                                                children: ["₱", g.costAnalysis.nextMonthCost.toLocaleString()]
                                            })]
                                        }), l.jsxs("div", {
                                            className: "flex justify-between text-accent font-medium",
                                            children: [l.jsx("span", {
                                                children: "Savings by scheduling now:"
                                            }), l.jsxs("span", {
                                                children: ["₱", (g.costAnalysis.nextMonthCost - g.costAnalysis.currentOutOfPocket).toLocaleString()]
                                            })]
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "space-y-3",
                                    children: [l.jsxs("h4", {
                                        className: "font-semibold flex items-center gap-2",
                                        children: [l.jsx(Zi, {
                                            className: "w-4 h-4 text-primary"
                                        }), "Provider Details"]
                                    }), l.jsxs("div", {
                                        className: "bg-white/40 p-4 rounded-lg space-y-2",
                                        children: [l.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [l.jsx(Fc, {
                                                className: "w-4 h-4 text-yellow-500 fill-current"
                                            }), l.jsxs("span", {
                                                children: [g.recommendedProvider.rating, " rating"]
                                            })]
                                        }), l.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [l.jsx(vo, {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }), l.jsxs("span", {
                                                children: [g.recommendedProvider.distance, " away"]
                                            })]
                                        }), l.jsx("div", {
                                            className: "flex items-center gap-2",
                                            children: l.jsx(fr, {
                                                variant: "default",
                                                className: "bg-accent text-accent-foreground",
                                                children: "In-Network"
                                            })
                                        })]
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "bg-accent/10 p-4 rounded-lg",
                                children: [l.jsxs("h4", {
                                    className: "font-semibold mb-3 flex items-center gap-2",
                                    children: [l.jsx(_o, {
                                        className: "w-4 h-4 text-accent"
                                    }), "AI Insights"]
                                }), l.jsx("ul", {
                                    className: "space-y-2",
                                    children: g.insights.map((f, y) => l.jsxs("li", {
                                        className: "flex items-start gap-2 text-sm",
                                        children: [l.jsx(qi, {
                                            className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                                        }), f]
                                    }, y))
                                })]
                            })]
                        })]
                    }), l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsxs(He, {
                            children: [l.jsxs(Ve, {
                                className: "flex items-center gap-2",
                                children: [l.jsx(C1, {
                                    className: "w-5 h-5 text-primary"
                                }), "Alternative Options"]
                            }), l.jsx(Xt, {
                                children: "Other highly-rated providers for comparison"
                            })]
                        }), l.jsx(Te, {
                            children: l.jsx("div", {
                                className: "space-y-4",
                                children: g.alternatives.map((f, y) => l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-muted/30 rounded-lg",
                                    children: [l.jsxs("div", {
                                        children: [l.jsx("h4", {
                                            className: "font-medium",
                                            children: f.name
                                        }), l.jsxs("div", {
                                            className: "flex items-center gap-4 mt-1 text-sm text-muted-foreground",
                                            children: [l.jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [l.jsx(Fc, {
                                                    className: "w-3 h-3 text-yellow-500 fill-current"
                                                }), f.rating]
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [l.jsx(vo, {
                                                    className: "w-3 h-3"
                                                }), f.distance]
                                            }), l.jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [l.jsx(rd, {
                                                    className: "w-3 h-3"
                                                }), f.waitTime]
                                            })]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "text-right",
                                        children: [l.jsxs("div", {
                                            className: "font-bold text-primary",
                                            children: ["₱", f.cost.toLocaleString()]
                                        }), l.jsx("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: "estimated cost"
                                        })]
                                    })]
                                }, y))
                            })
                        })]
                    }), l.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [l.jsxs(Ne, {
                            variant: "medical",
                            size: "lg",
                            onClick: () => t("cost-estimator"),
                            children: [l.jsx(Lc, {
                                className: "w-4 h-4 mr-2"
                            }), "View Detailed Costs"]
                        }), l.jsxs(Ne, {
                            variant: "healthcare",
                            size: "lg",
                            onClick: () => t("providers"),
                            children: [l.jsx(Zi, {
                                className: "w-4 h-4 mr-2"
                            }), "View Provider Details"]
                        }), l.jsx(Ne, {
                            variant: "secondary",
                            size: "lg",
                            onClick: () => m(g.recommendedProvider.name, g.procedure),
                            disabled: h,
                            children: h ? l.jsxs(l.Fragment, {
                                children: [l.jsx("div", {
                                    className: "w-4 h-4 mr-2 animate-spin rounded-full border-2 border-muted border-t-current"
                                }), "Sending..."]
                            }) : l.jsxs(l.Fragment, {
                                children: [l.jsx(Ov, {
                                    className: "w-4 h-4 mr-2"
                                }), "Notify Hospital"]
                            })
                        }), l.jsx(Ne, {
                            variant: "outline",
                            size: "lg",
                            onClick: () => a(!1),
                            children: "Try Different Procedure"
                        })]
                    })]
                }) : l.jsxs(Pe, {
                    className: "border-0 shadow-xl bg-white/80 backdrop-blur-sm",
                    children: [l.jsxs(He, {
                        className: "text-center",
                        children: [l.jsx(Ve, {
                            className: "text-xl",
                            children: "What procedure are you considering?"
                        }), l.jsx(Xt, {
                            children: "Our AI will analyze your plan, location, and preferences to provide the best recommendations"
                        })]
                    }), l.jsxs(Te, {
                        className: "space-y-6",
                        children: [l.jsxs("div", {
                            className: "space-y-4",
                            children: [l.jsx(rn, {
                                htmlFor: "procedure",
                                className: "text-base font-medium",
                                children: "Select Procedure"
                            }), l.jsxs(ca, {
                                value: n,
                                onValueChange: r,
                                children: [l.jsx(Ss, {
                                    className: "h-12",
                                    children: l.jsx(ua, {
                                        placeholder: "Choose a procedure"
                                    })
                                }), l.jsx(Cs, {
                                    children: w.map(f => l.jsx(Ut, {
                                        value: f,
                                        children: f
                                    }, f))
                                })]
                            }), n === "Other (specify below)" && l.jsxs("div", {
                                className: "space-y-2",
                                children: [l.jsx(rn, {
                                    htmlFor: "customProcedure",
                                    children: "Specify Procedure"
                                }), l.jsx(sr, {
                                    id: "customProcedure",
                                    value: o,
                                    onChange: f => s(f.target.value),
                                    placeholder: "Enter the specific procedure",
                                    className: "h-12"
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "bg-primary/5 p-4 rounded-lg",
                            children: [l.jsxs("h4", {
                                className: "font-semibold mb-2 flex items-center gap-2",
                                children: [l.jsx(_o, {
                                    className: "w-4 h-4"
                                }), "AI Analysis Includes:"]
                            }), l.jsxs("ul", {
                                className: "text-sm space-y-1 text-muted-foreground",
                                children: [l.jsx("li", {
                                    children: "• Your current plan coverage and deductibles"
                                }), l.jsx("li", {
                                    children: "• Provider network status and ratings"
                                }), l.jsxs("li", {
                                    children: ["• Distance from your location (", e.address, ")"]
                                }), l.jsx("li", {
                                    children: "• Cost optimization and timing recommendations"
                                }), l.jsx("li", {
                                    children: "• Quality metrics and patient outcomes"
                                })]
                            })]
                        }), c ? l.jsxs("div", {
                            className: "text-center py-8",
                            children: [l.jsx("div", {
                                className: "w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse",
                                children: l.jsx(_o, {
                                    className: "w-6 h-6 text-primary animate-spin"
                                })
                            }), l.jsx("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: "Analyzing Your Options..."
                            }), l.jsx("p", {
                                className: "text-sm text-muted-foreground mb-4",
                                children: "Our AI is processing your plan details, location, and provider network"
                            }), l.jsx(bs, {
                                value: 75,
                                className: "w-48 mx-auto"
                            })]
                        }) : l.jsxs(Ne, {
                            variant: "medical",
                            size: "lg",
                            className: "w-full",
                            onClick: x,
                            disabled: !n || n === "Other (specify below)" && !o,
                            children: [l.jsx(_o, {
                                className: "w-5 h-5 mr-2"
                            }), "Get AI Recommendations"]
                        })]
                    })]
                })]
            })
        })
    }
    ;
var fE = "Separator"
    , Rp = "horizontal"
    , pE = ["horizontal", "vertical"]
    , Dy = v.forwardRef((e, t) => {
        const { decorative: n, orientation: r = Rp, ...o } = e
            , s = hE(r) ? r : Rp
            , a = n ? {
                role: "none"
            } : {
                "aria-orientation": s === "vertical" ? s : void 0,
                role: "separator"
            };
        return l.jsx(re.div, {
            "data-orientation": s,
            ...a,
            ...o,
            ref: t
        })
    }
    );
Dy.displayName = fE;
function hE(e) {
    return pE.includes(e)
}
var Fy = Dy;
const ki = v.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => l.jsx(Fy, {
    ref: o,
    decorative: n,
    orientation: t,
    className: ce("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
}));
ki.displayName = Fy.displayName;
const mE = ({ memberData: e, selectedProcedure: t = "Knee Surgery", selectedProvider: n = "Makati Medical Center", onNavigate: r }) => {
    const [o, s] = v.useState("current")
        , i = {
            procedure: t,
            provider: n,
            estimates: {
                current: {
                    procedureCost: 45e3,
                    doctorFees: 15e3,
                    hospitalStay: 25e3,
                    medications: 8e3,
                    diagnostics: 7e3,
                    totalCost: 1e5,
                    planCoverage: 91800,
                    outOfPocket: 8200,
                    deductible: 5e3,
                    coinsurance: 3200,
                    copay: 0
                },
                nextMonth: {
                    procedureCost: 45e3,
                    doctorFees: 15e3,
                    hospitalStay: 25e3,
                    medications: 8e3,
                    diagnostics: 7e3,
                    totalCost: 1e5,
                    planCoverage: 87300,
                    outOfPocket: 12700,
                    deductible: 1e4,
                    coinsurance: 2700,
                    copay: 0
                }
            },
            planDetails: {
                planName: "Maxicare EReady Plus",
                yearlyMaximum: 15e4,
                usedThisYear: 22500,
                remainingCoverage: 127500,
                deductibleTotal: 1e4,
                deductibleMet: 5e3,
                coinsuranceRate: "10%",
                resetDate: "January 1, 2025"
            },
            timeline: {
                preAuth: "5-7 business days",
                scheduling: "2-3 weeks",
                procedure: "1 day",
                recovery: "4-6 weeks",
                finalBilling: "30-60 days"
            }
        }
        , a = i.estimates[o]
        , c = i.estimates.nextMonth.outOfPocket - i.estimates.current.outOfPocket;
    return l.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-6",
        children: l.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [l.jsxs("div", {
                className: "mb-8",
                children: [l.jsx(Ne, {
                    variant: "ghost",
                    onClick: () => r("recommendations"),
                    className: "mb-4",
                    children: "← Back to Recommendations"
                }), l.jsxs("div", {
                    className: "text-center mb-6",
                    children: [l.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4",
                        children: l.jsx(m1, {
                            className: "w-8 h-8 text-white"
                        })
                    }), l.jsx("h1", {
                        className: "text-3xl font-bold text-foreground mb-2",
                        children: "Procedure Cost Estimator"
                    }), l.jsxs("p", {
                        className: "text-muted-foreground",
                        children: ["Detailed cost breakdown for ", i.procedure, " at ", i.provider]
                    })]
                })]
            }), l.jsxs(Pe, {
                className: "mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                children: [l.jsxs(He, {
                    children: [l.jsxs(Ve, {
                        className: "flex items-center gap-2",
                        children: [l.jsx(Bo, {
                            className: "w-5 h-5 text-primary"
                        }), "Timing Comparison"]
                    }), l.jsx(Xt, {
                        children: "Compare costs based on when you schedule the procedure"
                    })]
                }), l.jsxs(Te, {
                    children: [l.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [l.jsxs(Ne, {
                            variant: o === "current" ? "medical" : "outline",
                            onClick: () => s("current"),
                            className: "h-20 flex-col justify-center",
                            children: [l.jsx("div", {
                                className: "font-semibold",
                                children: "Schedule Now"
                            }), l.jsxs("div", {
                                className: "text-sm",
                                children: ["Out-of-pocket: ₱", i.estimates.current.outOfPocket.toLocaleString()]
                            })]
                        }), l.jsxs(Ne, {
                            variant: o === "nextMonth" ? "medical" : "outline",
                            onClick: () => s("nextMonth"),
                            className: "h-20 flex-col justify-center",
                            children: [l.jsxs("div", {
                                className: "font-semibold",
                                children: ["Wait Until ", i.planDetails.resetDate]
                            }), l.jsxs("div", {
                                className: "text-sm",
                                children: ["Out-of-pocket: ₱", i.estimates.nextMonth.outOfPocket.toLocaleString()]
                            })]
                        })]
                    }), o === "current" && c > 0 && l.jsx("div", {
                        className: "mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20",
                        children: l.jsxs("div", {
                            className: "flex items-center gap-2 text-accent font-medium",
                            children: [l.jsx(Ji, {
                                className: "w-4 h-4"
                            }), "You save ₱", c.toLocaleString(), " by scheduling now!"]
                        })
                    })]
                })]
            }), l.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [l.jsxs(Pe, {
                    className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                    children: [l.jsxs(He, {
                        children: [l.jsxs(Ve, {
                            className: "flex items-center gap-2",
                            children: [l.jsx(Lc, {
                                className: "w-5 h-5 text-primary"
                            }), "Cost Breakdown"]
                        }), l.jsxs(Xt, {
                            children: ["Detailed estimate for ", o === "current" ? "current scheduling" : "future scheduling"]
                        })]
                    }), l.jsxs(Te, {
                        className: "space-y-4",
                        children: [l.jsxs("div", {
                            className: "space-y-3",
                            children: [l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Procedure Cost"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.procedureCost.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Doctor's Fees"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.doctorFees.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Hospital Stay"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.hospitalStay.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Medications"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.medications.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Diagnostics & Tests"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.diagnostics.toLocaleString()]
                                })]
                            }), l.jsx(ki, {}), l.jsxs("div", {
                                className: "flex justify-between items-center text-lg font-semibold",
                                children: [l.jsx("span", {
                                    children: "Total Procedure Cost"
                                }), l.jsxs("span", {
                                    children: ["₱", a.totalCost.toLocaleString()]
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "bg-primary/5 p-4 rounded-lg space-y-3",
                            children: [l.jsx("h4", {
                                className: "font-semibold text-primary",
                                children: "Your Coverage"
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Plan Coverage"
                                }), l.jsxs("span", {
                                    className: "font-medium text-primary",
                                    children: ["₱", a.planCoverage.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsx("span", {
                                    className: "text-sm",
                                    children: "Deductible"
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.deductible.toLocaleString()]
                                })]
                            }), l.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [l.jsxs("span", {
                                    className: "text-sm",
                                    children: ["Coinsurance (", i.planDetails.coinsuranceRate, ")"]
                                }), l.jsxs("span", {
                                    className: "font-medium",
                                    children: ["₱", a.coinsurance.toLocaleString()]
                                })]
                            }), l.jsx(ki, {}), l.jsxs("div", {
                                className: "flex justify-between items-center text-lg font-bold",
                                children: [l.jsx("span", {
                                    children: "Your Out-of-Pocket"
                                }), l.jsxs("span", {
                                    className: "text-primary",
                                    children: ["₱", a.outOfPocket.toLocaleString()]
                                })]
                            })]
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "space-y-6",
                    children: [l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsx(He, {
                            children: l.jsxs(Ve, {
                                className: "flex items-center gap-2",
                                children: [l.jsx(vs, {
                                    className: "w-5 h-5 text-primary"
                                }), "Your Plan Details"]
                            })
                        }), l.jsxs(Te, {
                            className: "space-y-4",
                            children: [l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold mb-2",
                                    children: i.planDetails.planName
                                }), l.jsxs("div", {
                                    className: "space-y-2 text-sm",
                                    children: [l.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [l.jsx("span", {
                                            children: "Yearly Maximum:"
                                        }), l.jsxs("span", {
                                            children: ["₱", i.planDetails.yearlyMaximum.toLocaleString()]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [l.jsx("span", {
                                            children: "Used This Year:"
                                        }), l.jsxs("span", {
                                            children: ["₱", i.planDetails.usedThisYear.toLocaleString()]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between font-medium",
                                        children: [l.jsx("span", {
                                            children: "Remaining Coverage:"
                                        }), l.jsxs("span", {
                                            className: "text-primary",
                                            children: ["₱", i.planDetails.remainingCoverage.toLocaleString()]
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "mt-4",
                                    children: [l.jsxs("div", {
                                        className: "flex justify-between text-xs mb-2",
                                        children: [l.jsx("span", {
                                            children: "Coverage Used"
                                        }), l.jsxs("span", {
                                            children: [Math.round(i.planDetails.usedThisYear / i.planDetails.yearlyMaximum * 100), "%"]
                                        })]
                                    }), l.jsx(bs, {
                                        value: i.planDetails.usedThisYear / i.planDetails.yearlyMaximum * 100,
                                        className: "h-2"
                                    })]
                                })]
                            }), l.jsx(ki, {}), l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold mb-2",
                                    children: "Deductible Status"
                                }), l.jsxs("div", {
                                    className: "space-y-2 text-sm",
                                    children: [l.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [l.jsx("span", {
                                            children: "Annual Deductible:"
                                        }), l.jsxs("span", {
                                            children: ["₱", i.planDetails.deductibleTotal.toLocaleString()]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [l.jsx("span", {
                                            children: "Met This Year:"
                                        }), l.jsxs("span", {
                                            children: ["₱", i.planDetails.deductibleMet.toLocaleString()]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between text-accent font-medium",
                                        children: [l.jsx("span", {
                                            children: "Remaining:"
                                        }), l.jsxs("span", {
                                            children: ["₱", (i.planDetails.deductibleTotal - i.planDetails.deductibleMet).toLocaleString()]
                                        })]
                                    })]
                                }), l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx(bs, {
                                        value: i.planDetails.deductibleMet / i.planDetails.deductibleTotal * 100,
                                        className: "h-2"
                                    })
                                })]
                            })]
                        })]
                    }), l.jsxs(Pe, {
                        className: "border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                        children: [l.jsxs(He, {
                            children: [l.jsxs(Ve, {
                                className: "flex items-center gap-2",
                                children: [l.jsx(rd, {
                                    className: "w-5 h-5 text-primary"
                                }), "Process Timeline"]
                            }), l.jsx(Xt, {
                                children: "Expected timeline from approval to completion"
                            })]
                        }), l.jsx(Te, {
                            children: l.jsxs("div", {
                                className: "space-y-4",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx("div", {
                                        className: "w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center",
                                        children: l.jsx(Dc, {
                                            className: "w-4 h-4 text-primary"
                                        })
                                    }), l.jsxs("div", {
                                        children: [l.jsx("div", {
                                            className: "font-medium",
                                            children: "Pre-authorization"
                                        }), l.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.timeline.preAuth
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx("div", {
                                        className: "w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center",
                                        children: l.jsx(Bo, {
                                            className: "w-4 h-4 text-accent"
                                        })
                                    }), l.jsxs("div", {
                                        children: [l.jsx("div", {
                                            className: "font-medium",
                                            children: "Scheduling"
                                        }), l.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.timeline.scheduling
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx("div", {
                                        className: "w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center",
                                        children: l.jsx(qi, {
                                            className: "w-4 h-4 text-primary"
                                        })
                                    }), l.jsxs("div", {
                                        children: [l.jsx("div", {
                                            className: "font-medium",
                                            children: "Procedure Day"
                                        }), l.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.timeline.procedure
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx("div", {
                                        className: "w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center",
                                        children: l.jsx(Ji, {
                                            className: "w-4 h-4 text-accent"
                                        })
                                    }), l.jsxs("div", {
                                        children: [l.jsx("div", {
                                            className: "font-medium",
                                            children: "Recovery Period"
                                        }), l.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.timeline.recovery
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx("div", {
                                        className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center",
                                        children: l.jsx(Lc, {
                                            className: "w-4 h-4 text-muted-foreground"
                                        })
                                    }), l.jsxs("div", {
                                        children: [l.jsx("div", {
                                            className: "font-medium",
                                            children: "Final Billing"
                                        }), l.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.timeline.finalBilling
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                })]
            }), l.jsxs(Pe, {
                className: "mt-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm",
                children: [l.jsx(He, {
                    children: l.jsxs(Ve, {
                        className: "flex items-center gap-2",
                        children: [l.jsx(S1, {
                            className: "w-5 h-5 text-primary"
                        }), "Important Notes"]
                    })
                }), l.jsx(Te, {
                    children: l.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [l.jsxs("div", {
                            className: "space-y-3",
                            children: [l.jsxs("div", {
                                className: "flex items-start gap-2",
                                children: [l.jsx(k1, {
                                    className: "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "Estimates Only"
                                    }), l.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Final costs may vary based on actual services provided and complications"
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-start gap-2",
                                children: [l.jsx(qi, {
                                    className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "Pre-authorization Required"
                                    }), l.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "This procedure requires approval from Maxicare before scheduling"
                                    })]
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "space-y-3",
                            children: [l.jsxs("div", {
                                className: "flex items-start gap-2",
                                children: [l.jsx(vs, {
                                    className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "In-Network Benefits"
                                    }), l.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Costs shown are for in-network providers. Out-of-network costs will be higher"
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-start gap-2",
                                children: [l.jsx(Bo, {
                                    className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "Plan Year Reset"
                                    }), l.jsxs("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: ["Deductibles and maximums reset on ", i.planDetails.resetDate]
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            }), l.jsxs("div", {
                className: "mt-8 flex flex-wrap gap-4",
                children: [l.jsxs(Ne, {
                    variant: "medical",
                    size: "lg",
                    className: "flex-1 min-w-[200px]",
                    children: [l.jsx(Dc, {
                        className: "w-4 h-4 mr-2"
                    }), "Request Pre-authorization"]
                }), l.jsxs(Ne, {
                    variant: "healthcare",
                    size: "lg",
                    className: "flex-1 min-w-[200px]",
                    children: [l.jsx(Bo, {
                        className: "w-4 h-4 mr-2"
                    }), "Schedule Consultation"]
                }), l.jsxs(Ne, {
                    variant: "outline",
                    size: "lg",
                    children: [l.jsx(y1, {
                        className: "w-4 h-4 mr-2"
                    }), "Export Estimate"]
                }), l.jsxs(Ne, {
                    variant: "outline",
                    size: "lg",
                    children: [l.jsx(N1, {
                        className: "w-4 h-4 mr-2"
                    }), "Share with Family"]
                })]
            })]
        })
    })
}
    , vE = () => {
        const [e, t] = v.useState("setup")
            , [n, r] = v.useState(null);
        v.useEffect(() => {
            const i = localStorage.getItem("memberData");
            if (i) {
                const a = JSON.parse(i);
                r(a),
                    t("dashboard")
            }
        }
            , []);
        const o = i => {
            r(i),
                t("dashboard")
        }
            , s = i => {
                t(i)
            }
            ;
        return e === "setup" ? l.jsx(q2, {
            onComplete: o
        }) : e === "dashboard" ? l.jsx(cE, {
            memberData: n,
            onNavigate: s
        }) : e === "providers" ? l.jsx(uE, {
            memberData: n,
            onNavigate: s
        }) : e === "recommendations" ? l.jsx(dE, {
            memberData: n,
            onNavigate: s
        }) : e === "cost-estimator" ? l.jsx(mE, {
            memberData: n,
            onNavigate: s
        }) : l.jsx("div", {
            children: "Page not found"
        })
    }
    , gE = () => {
        const e = _g();
        return v.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }
            , [e.pathname]),
            l.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-100",
                children: l.jsxs("div", {
                    className: "text-center",
                    children: [l.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "404"
                    }), l.jsx("p", {
                        className: "text-xl text-gray-600 mb-4",
                        children: "Oops! Page not found"
                    }), l.jsx("a", {
                        href: "/",
                        className: "text-blue-500 hover:text-blue-700 underline",
                        children: "Return to Home"
                    })]
                })
            })
    }
    , yE = new Ib
    , xE = () => l.jsx(Db, {
        client: yE,
        children: l.jsxs(fb, {
            children: [l.jsx(cS, {}), l.jsx(FS, {}), l.jsx(SN, {
                children: l.jsxs(yN, {
                    children: [l.jsx(Gc, {
                        path: "/",
                        element: l.jsx(vE, {})
                    }), l.jsx(Gc, {
                        path: "*",
                        element: l.jsx(gE, {})
                    })]
                })
            })]
        })
    });
ev(document.getElementById("root")).render(l.jsx(xE, {}));
