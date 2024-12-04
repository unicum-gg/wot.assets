var e = Object.defineProperty,
    t = (t, n, r) =>
        ((t, n, r) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r)))(
            t,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var r = { exports: {} },
    a = {},
    l = { exports: {} },
    o = {},
    i = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    y = Symbol.iterator;
var b = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    w = Object.assign,
    k = {};
function S(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || b);
}
function x() {}
function E(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || b);
}
(S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            );
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (S.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (x.prototype = S.prototype);
var _ = (E.prototype = new x());
(_.constructor = E), w(_, S.prototype), (_.isPureReactComponent = !0);
var C = Array.isArray,
    P = Object.prototype.hasOwnProperty,
    N = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
function T(e, t, n) {
    var r,
        a = {},
        l = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (l = '' + t.key), t))
            P.call(t, r) && !z.hasOwnProperty(r) && (a[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) a.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
    return { $$typeof: i, type: e, key: l, ref: o, props: a, _owner: N.current };
}
function O(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === i;
}
var R = /\/+/g;
function L(e, t) {
    return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                      return t[e];
                  })
              );
          })('' + e.key)
        : t.toString(36);
}
function F(e, t, n, r, a) {
    var l = typeof e;
    ('undefined' !== l && 'boolean' !== l) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
        switch (l) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case i:
                    case u:
                        o = !0;
                }
        }
    if (o)
        return (
            (a = a((o = e))),
            (e = '' === r ? '.' + L(o, 0) : r),
            C(a)
                ? ((n = ''),
                  null != e && (n = e.replace(R, '$&/') + '/'),
                  F(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a &&
                  (O(a) &&
                      (a = (function (e, t) {
                          return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(a, n + (!a.key || (o && o.key === a.key) ? '' : ('' + a.key).replace(R, '$&/') + '/') + e)),
                  t.push(a)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), C(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + L((l = e[s]), s);
            o += F(l, t, n, c, a);
        }
    else if (
        ((c = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (y && e[y]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof c)
    )
        for (e = c.call(e), s = 0; !(l = e.next()).done; ) o += F((l = l.value), t, n, (c = r + L(l, s++)), a);
    else if ('object' === l)
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            ))
        );
    return o;
}
function M(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        F(e, r, '', '', function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function I(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
            },
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var A = { current: null },
    D = { transition: null },
    j = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: D, ReactCurrentOwner: N };
function U() {
    throw Error('act(...) is not supported in production builds of React.');
}
(o.Children = {
    map: M,
    forEach: function (e, t, n) {
        M(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            M(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            M(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!O(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (o.Component = S),
    (o.Fragment = s),
    (o.Profiler = f),
    (o.PureComponent = E),
    (o.StrictMode = c),
    (o.Suspense = m),
    (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
    (o.act = U),
    (o.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            a = e.key,
            l = e.ref,
            o = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((l = t.ref), (o = N.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (s in t) P.call(t, s) && !z.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
            r.children = u;
        }
        return { $$typeof: i, type: e.type, key: a, ref: l, props: r, _owner: o };
    }),
    (o.createContext = function (e) {
        return (
            ((e = {
                $$typeof: p,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
            }).Provider = { $$typeof: d, _context: e }),
            (e.Consumer = e)
        );
    }),
    (o.createElement = T),
    (o.createFactory = function (e) {
        var t = T.bind(null, e);
        return (t.type = e), t;
    }),
    (o.createRef = function () {
        return { current: null };
    }),
    (o.forwardRef = function (e) {
        return { $$typeof: h, render: e };
    }),
    (o.isValidElement = O),
    (o.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: I };
    }),
    (o.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (o.startTransition = function (e) {
        var t = D.transition;
        D.transition = {};
        try {
            e();
        } finally {
            D.transition = t;
        }
    }),
    (o.unstable_act = U),
    (o.useCallback = function (e, t) {
        return A.current.useCallback(e, t);
    }),
    (o.useContext = function (e) {
        return A.current.useContext(e);
    }),
    (o.useDebugValue = function () {}),
    (o.useDeferredValue = function (e) {
        return A.current.useDeferredValue(e);
    }),
    (o.useEffect = function (e, t) {
        return A.current.useEffect(e, t);
    }),
    (o.useId = function () {
        return A.current.useId();
    }),
    (o.useImperativeHandle = function (e, t, n) {
        return A.current.useImperativeHandle(e, t, n);
    }),
    (o.useInsertionEffect = function (e, t) {
        return A.current.useInsertionEffect(e, t);
    }),
    (o.useLayoutEffect = function (e, t) {
        return A.current.useLayoutEffect(e, t);
    }),
    (o.useMemo = function (e, t) {
        return A.current.useMemo(e, t);
    }),
    (o.useReducer = function (e, t, n) {
        return A.current.useReducer(e, t, n);
    }),
    (o.useRef = function (e) {
        return A.current.useRef(e);
    }),
    (o.useState = function (e) {
        return A.current.useState(e);
    }),
    (o.useSyncExternalStore = function (e, t, n) {
        return A.current.useSyncExternalStore(e, t, n);
    }),
    (o.useTransition = function () {
        return A.current.useTransition();
    }),
    (o.version = '18.3.1'),
    (l.exports = o);
var $ = l.exports;
const V = n($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B = $,
    H = Symbol.for('react.element'),
    W = Symbol.for('react.fragment'),
    Q = Object.prototype.hasOwnProperty,
    q = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
    var r,
        a = {},
        l = null,
        o = null;
    for (r in (void 0 !== n && (l = '' + n), void 0 !== t.key && (l = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        Q.call(t, r) && !K.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: H, type: e, key: l, ref: o, props: a, _owner: q.current };
}
(a.Fragment = W), (a.jsx = Y), (a.jsxs = Y), (r.exports = a);
var X = r.exports,
    G = function (e, t) {
        return (G =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function Z(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    G(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var J = function () {
    return (
        (J =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }),
        J.apply(this, arguments)
    );
};
function ee(e, t) {
    var n,
        r,
        a,
        l,
        o = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (l = { next: i(0), throw: i(1), return: i(2) }),
        'function' == typeof Symbol &&
            (l[Symbol.iterator] = function () {
                return this;
            }),
        l
    );
    function i(i) {
        return function (u) {
            return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; l && ((l = 0), i[0] && (o = 0)), o; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (a =
                                    2 & i[0]
                                        ? r.return
                                        : i[0]
                                          ? r.throw || ((a = r.return) && a.call(r), 0)
                                          : r.next) &&
                                !(a = a.call(r, i[1])).done)
                        )
                            return a;
                        switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, { value: i[1], done: !1 };
                            case 5:
                                o.label++, (r = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = o.ops.pop()), o.trys.pop();
                                continue;
                            default:
                                if (
                                    !((a = o.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                                ) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    o.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    (o.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && o.label < a[2]) {
                                    (o.label = a[2]), o.ops.push(i);
                                    break;
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        i = t.call(e, o);
                    } catch (u) {
                        (i = [6, u]), (r = 0);
                    } finally {
                        n = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, u]);
        };
    }
}
function te(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, a = 0, l = t.length; a < l; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var ne = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return Z(t, e), t;
    })(
        (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return (
                    Object.defineProperty(n, 'message', { enumerable: !1, value: t }),
                    Object.defineProperty(n, 'name', { enumerable: !1, value: n.constructor.name }),
                    'captureStackTrace' in Error
                        ? Error.captureStackTrace(n, n.constructor)
                        : Object.defineProperty(n, 'stack', {
                              enumerable: !1,
                              value: Error(t).stack,
                              writable: !0,
                              configurable: !0,
                          }),
                    n
                );
            }
            return Z(t, e), t;
        })(Error),
    ),
    re = (function (e) {
        function t(t, n, r, a) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(a, '.')) ||
                this
            );
        }
        return (
            Z(t, e),
            (t.assert = function (e, n, r, a, l) {
                if (!e) throw new t(n, r, a, l);
                return e;
            }),
            t
        );
    })(ne),
    ae = (function (e) {
        function t(t, n, r) {
            var a = t.toString(),
                l = n.map(function (e) {
                    return e.name.toString();
                });
            l.push(a);
            var o = l.join(' -> '),
                i = "Could not resolve '".concat(a, "'.");
            return (
                r && (i += ' '.concat(r)), (i += '\n\n'), (i += 'Resolution path: '.concat(o)), e.call(this, i) || this
            );
        }
        return Z(t, e), t;
    })(ne),
    le = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                a = "Could not register '".concat(r, "'.");
            return n && (a += ' '.concat(n)), e.call(this, a) || this;
        }
        return Z(t, e), t;
    })(ne),
    oe = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ie = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ue(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        a = '',
        l = 0,
        o = 0,
        i = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return (l = e), u(), d();
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function u() {
        for (a = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            var u = e.charAt(n);
            if (se(u)) n++;
            else
                switch (u) {
                    case '(':
                        return n++, o++, (r = u);
                    case ')':
                        return n++, i++, (r = u);
                    case '*':
                    case ',':
                        return n++, (r = u);
                    case '=':
                        return (
                            n++,
                            0 == (1 & l) &&
                                c(function (e) {
                                    var t = o === i + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (i++, !t)));
                                }),
                            (r = u)
                        );
                    case '/':
                        n++;
                        var f = e.charAt(n);
                        '/' === f &&
                            (c(function (e) {
                                return '\n' === e;
                            }, !0),
                            n++),
                            '*' === f &&
                                (c(function (t) {
                                    var r = e.charAt(n + 1);
                                    return '*' === t && '/' === r;
                                }, !0),
                                n++);
                        continue;
                    default:
                        if (pe(u)) return s(), r;
                        n++;
                }
        }
    }
    function s() {
        for (var t, l = e.charAt(n), o = ++n; (t = e.charAt(n)), de.test(t); ) n++;
        return (
            (a = '' + l + e.substring(o, n)),
            'ident' !== (r = 'function' === a || 'class' === a ? a : 'ident') && (a = ''),
            a
        );
    }
    function c(t, r) {
        for (void 0 === r && (r = !1); n < e.length; ) {
            var a = e.charAt(n);
            if (t(a)) return;
            if (!r) {
                if (se(a)) {
                    n++;
                    continue;
                }
                if (ce(a)) {
                    f();
                    continue;
                }
            }
            n++;
        }
    }
    function f() {
        var t = e.charAt(n);
        for (n++; n < e.length; ) {
            var r = e.charAt(n),
                a = e.charAt(n - 1);
            if (r === t && '\\' !== a) return void n++;
            if ('`' === t)
                if ('$' === e.charAt(n + 1))
                    '{' === e.charAt(n + 2) &&
                        ((n += 2),
                        c(function (e) {
                            return '}' === e;
                        }));
            n++;
        }
    }
    function d() {
        return a ? { value: a, type: r } : { type: r };
    }
}
function se(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function ce(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
var fe = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    de = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function pe(e) {
    return fe.test(e);
}
function he(e) {
    if ('function' != typeof e) return !1;
    var t = ue(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function me(e) {
    return 'function' == typeof e;
}
var ge = Symbol('Awilix Resolver Config');
function ve(e, t) {
    if (!me(e)) throw new re('asFunction', 'fn', 'function', e);
    t = Se({ lifetime: ie.TRANSIENT }, t, e[ge]);
    var n = _e(e);
    return we(be(J({ resolve: n }, t)));
}
function ye(e, t) {
    if (!me(e)) throw new re('asClass', 'Type', 'class', e);
    t = Se({ lifetime: ie.TRANSIENT }, t, e[ge]);
    var n = _e(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return we(be(J(J({}, t), { resolve: n })));
}
function be(e) {
    function t(e) {
        return be(J(J({}, this), { lifetime: e }));
    }
    function n(e) {
        return be(J(J({}, this), { injectionMode: e }));
    }
    return xe(e, {
        setLifetime: t,
        inject: function (e) {
            return be(J(J({}, this), { injector: e }));
        },
        transient: ke(t, ie.TRANSIENT),
        scoped: ke(t, ie.SCOPED),
        singleton: ke(t, ie.SINGLETON),
        setInjectionMode: n,
        proxy: ke(n, oe.PROXY),
        classic: ke(n, oe.CLASSIC),
    });
}
function we(e) {
    return xe(e, {
        disposer: function (e) {
            return we(J(J({}, this), { dispose: e }));
        },
    });
}
function ke(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function Se(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, te([{}, e], t, !1));
}
function xe(e, t) {
    return J(J({}, e), t);
}
function Ee(e, t) {
    var n,
        r = t(e),
        a = ((n = te(te([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, a, l, o, i, u, s;
                          return ee(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (a in ((t = e.cradle), (n = []), t)) n.push(a);
                                      (l = 0), (c.label = 1);
                                  case 1:
                                      return l < n.length ? ((a = n[l]) in t ? [4, a] : [3, 3]) : [3, 4];
                                  case 2:
                                      c.sent(), (c.label = 3);
                                  case 3:
                                      return l++, [3, 1];
                                  case 4:
                                      for (u in ((i = []), (o = r))) i.push(u);
                                      (s = 0), (c.label = 5);
                                  case 5:
                                      return s < i.length ? ((u = i[s]) in o ? [4, u] : [3, 7]) : [3, 8];
                                  case 6:
                                      c.sent(), (c.label = 7);
                                  case 7:
                                      return s++, [3, 5];
                                  case 8:
                                      return [2];
                              }
                          });
                      }
                    : n in r
                      ? r[n]
                      : e.resolve(n);
            },
            ownKeys: function () {
                return a;
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (a.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
            },
        },
    );
}
function _e(e, t) {
    t || (t = e);
    var n = Ce(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || oe.PROXY) !== oe.CLASSIC) {
            var r = this.injector ? Ee(t, this.injector) : t.cradle;
            return e(r);
        }
        if (n.length > 0) {
            var a = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                l = n.map(function (e) {
                    return a(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, l);
        }
        return e();
    };
}
function Ce(e) {
    var t = (function (e) {
        var t = ue(e),
            n = t.next,
            r = t.done,
            a = [],
            l = null;
        for (f(); !r(); )
            switch (l.type) {
                case 'class':
                    if ((s(), !c())) return null;
                    f();
                    break;
                case 'function':
                    ('ident' !== (o = f()).type && '*' !== o.type) || f();
                    break;
                case '(':
                    u();
                    break;
                case ')':
                    return a;
                case 'ident':
                    var o,
                        i = { name: l.value, optional: !1 };
                    if ('async' === l.value && (o = f()) && '=' !== o.type) break;
                    return a.push(i), a;
                default:
                    throw d();
            }
        return a;
        function u() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((f(), l.type)) {
                    case 'ident':
                        e.name = l.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        a.push(e), (e = { name: '', optional: !1 });
                        break;
                    case ')':
                        return void (e.name && a.push(e));
                    default:
                        throw d();
                }
        }
        function s() {
            for (; !c() && !r(); ) f(1);
        }
        function c() {
            return 'ident' === l.type && 'constructor' === l.value;
        }
        function f(e) {
            return void 0 === e && (e = 0), (l = n(e));
        }
        function d() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(l.type, ' token')
                    .concat(l.value ? ' ('.concat(l.value, ')') : ''),
            );
        }
    })(e.toString());
    if (!t) {
        var n = Object.getPrototypeOf(e);
        return 'function' == typeof n && n !== Function.prototype ? Ce(n) : [];
    }
    return t;
}
var Pe = Symbol('familyTree'),
    Ne = Symbol('rollUpRegistrations'),
    ze = 'AwilixContainerCradle';
function Te(e) {
    return void 0 === e && (e = {}), Oe(e);
}
function Oe(e, t, n) {
    var r;
    e = J({ injectionMode: oe.PROXY, strict: !1 }, e);
    var a = null != n ? n : [],
        l = {},
        o = new Proxy(
            {},
            {
                get: function (e, t) {
                    return m(t);
                },
                set: function (e, t) {
                    throw new Error(
                        'Attempted setting property "'.concat(t, '" on container cradle - this is not allowed.'),
                    );
                },
                ownKeys: function () {
                    return Array.from(o);
                },
                getOwnPropertyDescriptor: function (e, t) {
                    var n = f();
                    if (Object.getOwnPropertyDescriptor(n, t)) return { enumerable: !0, configurable: !0 };
                },
            },
        ),
        i =
            (((r = {
                options: e,
                cradle: o,
                inspect: function () {
                    return '[AwilixContainer ('
                        .concat(t ? 'scoped, ' : '', 'registrations: ')
                        .concat(Object.keys(i.registrations).length, ')]');
                },
                cache: new Map(),
                loadModules: function () {
                    throw new Error('loadModules is not supported in the browser.');
                },
                createScope: function () {
                    return Oe(e, i, a);
                },
                register: function (n, r) {
                    for (
                        var a = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            o = te(te([], Object.keys(a), !0), Object.getOwnPropertySymbols(a), !0),
                            u = 0,
                            s = o;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            f = a[c];
                        if (e.strict && f.lifetime === ie.SINGLETON && t)
                            throw new le(c, 'Cannot register a singleton on a scoped container.');
                        l[c] = f;
                    }
                    return i;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(i);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        re.assert(e, n, r, 'a registration, function or class', e),
                        re.assert('function' == typeof e, n, r, 'a function or class', e),
                        (he(e) ? ye(e, t) : ve(e, t)).resolve(i)
                    );
                },
                resolve: m,
                hasRegistration: function (e) {
                    return !!h(e);
                },
                dispose: function () {
                    var e = Array.from(i.cache.entries());
                    return (
                        i.cache.clear(),
                        Promise.all(
                            e.map(function (e) {
                                var t = e[1],
                                    n = t.resolver,
                                    r = t.value,
                                    a = n;
                                return a.dispose
                                    ? Promise.resolve().then(function () {
                                          return a.dispose(r);
                                      })
                                    : Promise.resolve();
                            }),
                        ).then(function () {})
                    );
                },
                getRegistration: h,
            })[Ne] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [i].concat(t[Pe]) : [i];
    i[Pe] = u;
    var s,
        c = (s = u)[s.length - 1];
    return i;
    function f() {
        return J(J({}, t && t[Ne]()), l);
    }
    function d() {
        var e, t, n, r, a;
        return ee(this, function (l) {
            switch (l.label) {
                case 0:
                    for (r in ((e = f()), (n = []), (t = e))) n.push(r);
                    (a = 0), (l.label = 1);
                case 1:
                    return a < n.length ? ((r = n[a]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    l.sent(), (l.label = 3);
                case 3:
                    return a++, [3, 1];
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(o);
    }
    function h(e) {
        var n = l[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function m(t, n) {
        n = n || {};
        try {
            var r = h(t);
            if (
                a.some(function (e) {
                    return e.name === t;
                })
            )
                throw new ae(t, a, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Te;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return ze;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new ae(t, a);
            }
            var l = r.lifetime || ie.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = a.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = l),
                        ((t = r) === ie.SINGLETON && n !== ie.SINGLETON) || (t === ie.SCOPED && n === ie.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ae(
                        t,
                        a,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(a[o].name.toString(), "'"),
                    );
            }
            a.push({ name: t, lifetime: l });
            var u = void 0,
                s = void 0;
            switch (l) {
                case ie.TRANSIENT:
                    s = r.resolve(i);
                    break;
                case ie.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : i)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ie.SCOPED:
                    if (void 0 !== (u = i.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    (s = r.resolve(i)), i.cache.set(t, { resolver: r, value: s });
                    break;
                default:
                    throw new ae(t, a, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return a.pop(), s;
        } catch (f) {
            throw ((a.length = 0), f);
        }
    }
}
const Re = Te();
function Le(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function Fe(e, t) {
    switch (t) {
        case 'error':
            console.error(e);
            break;
        case 'warn':
            console.warn(e);
            break;
        case 'info':
            console.info(e);
            break;
        case 'debug':
            console.debug(e);
            break;
        default:
            console.warn('Unknown severity log type:', t);
    }
}
class Me {
    constructor(e, t) {
        (this.root = e), (this.prefix = t);
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Le(this.prefix, e),
            a = (function (e, t) {
                const n = t.split('.');
                if (window.R && window.R.images) {
                    const t = n[n.length - 1];
                    if (!t) return;
                    const r = n.slice(0, -1).reduce((e, t) => {
                        if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                    }, e);
                    if (!r) return;
                    return 'function' == typeof r[t] ? r[t]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, r);
        return void 0 === a ? ('silent' !== n && Fe(`Resource not found: ${r}`, n), t()) : a;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = this.read(e);
        if (void 0 === t) throw new Error(`Resource not found: ${this.prefix} ${e}`);
        return t;
    }
    has(e) {
        return void 0 !== this.read(e);
    }
}
var Ie,
    Ae = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (Ie = Ae),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var a = arguments[r];
                if (a) {
                    var l = typeof a;
                    if ('string' === l || 'number' === l) n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var o = t.apply(null, a);
                            o && n.push(o);
                        }
                    } else if ('object' === l) {
                        if (
                            a.toString !== Object.prototype.toString &&
                            !a.toString.toString().includes('[native code]')
                        ) {
                            n.push(a.toString());
                            continue;
                        }
                        for (var i in a) e.call(a, i) && a[i] && n.push(i);
                    }
                }
            }
            return n.join(' ');
        }
        Ie.exports ? ((t.default = t), (Ie.exports = t)) : (window.classNames = t);
    })();
const De = n(Ae.exports);
function je(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function Ue(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const $e = je('clientResized'),
    Ve = je('self.onScaleUpdated'),
    Be = { down: je('mousedown'), up: je('mouseup'), move: je('mousemove') };
function He(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && Ue(!1);
    }
    function n() {
        e.enabled && Ue(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : Ue(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const a = `mouse${t}`,
                        l = Be[t]((e) => n([e, 'outside']));
                    function o(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(a, o),
                        r(),
                        () => {
                            l(), window.removeEventListener(a, o), (e.listeners -= 1), r();
                        }
                    );
                };
            })(n)),
            t
        ),
        {},
    );
})();
const We = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    Qe = {
        ...Object.keys(We).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(We[t])),
                e
            ),
            {},
        ),
        sound: (e) => {
            engine.call('PlaySound', e);
        },
    },
    qe = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    Ke = {
        onTextureFrozen: je('self.onTextureFrozen'),
        onTextureReady: je('self.onTextureReady'),
        onDomBuilt: je('self.onDomBuilt'),
        onLoaded: je('self.onLoaded'),
        onHitTest: (() => {
            const e = new Set(),
                t = (t, n) => {
                    for (const r of e.values())
                        if (r(t)) {
                            n.value = !1;
                            break;
                        }
                };
            return (n) => (
                e.add(n),
                1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
                () => {
                    e.delete(n), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t));
                }
            );
        })(),
        onDisplayChanged: je('self.onShowingStatusChanged'),
        onFocusUpdated: je('self.onFocusChanged'),
        children: {
            onAdded: je('children.onAdded'),
            onLoaded: je('children.onLoaded'),
            onRemoved: je('children.onRemoved'),
            onAttached: je('children.onAttached'),
            onTextureReady: je('children.onTextureReady'),
            onRequestPosition: je('children.requestPosition'),
        },
    };
function Ye() {
    return !1;
}
Object.keys(qe).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === qe[t]), e), {});
const Xe = -1;
class Ge {
    constructor() {
        t(this, 'items', []);
    }
    get length() {
        return this.items.length;
    }
    push(e) {
        this.items.push(e);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    clear() {
        this.items = [];
    }
    includes(e) {
        return this.items.includes(e);
    }
    some(e) {
        return this.items.some(e);
    }
    remove(e) {
        const t = this.items.indexOf(e);
        return -1 !== t && (this.items.splice(t, 1), !0);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    toArray() {
        return this.items.slice();
    }
}
class Ze {
    play(e) {
        const t = window.R.sounds[e];
        'function' == typeof t ? Qe.sound(t.apply(window.R.sounds)) : Fe(`Sound not found: ${e}`, 'warn');
    }
}
function Je(e) {
    const t = e.split('.');
    if (window.R && window.R.strings) {
        const e = t[t.length - 1];
        if (!e) return;
        const n = window.R.strings,
            r = t.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, n);
        if (!r) return;
        return 'function' == typeof r[e] ? r[e]() : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class et {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Le(this.prefix, e),
            a = Je(r);
        return void 0 === a ? ('silent' !== n && Fe(`Resource not found: ${r}`, n), t()) : a;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = Le(this.prefix, e),
            n = Je(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
}
class tt {
    constructor(e = window.R.videos) {
        this.root = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = (function (e, t) {
            const n = t.split('.');
            if (window.R && window.R.videos) {
                const t = n[n.length - 1];
                if (!t) return;
                const r = n.slice(0, -1).reduce((e, t) => {
                    if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                }, e);
                if (!r) return;
                return 'function' == typeof r[t] ? r[t]() : void 0;
            }
            throw new Error('R class with videos field is not defined');
        })(this.root, e);
        return void 0 === r ? ('silent' !== n && Fe(`Resource not found: ${e}`, n), t()) : r;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = this.read(e);
        if (void 0 === t) throw new Error(`Resource not found: ${e}`);
        return t;
    }
    has(e) {
        return void 0 !== this.read(e);
    }
}
class nt {
    read(e) {
        return e(window.R.views);
    }
}
var rt = {},
    at = { exports: {} },
    lt = {},
    ot = { exports: {} },
    it = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
                l = e[r];
            if (!(0 < a(l, t))) break e;
            (e[r] = t), (e[n] = l), (n = r);
        }
    }
    function n(e) {
        return 0 === e.length ? null : e[0];
    }
    function r(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
                var i = 2 * (r + 1) - 1,
                    u = e[i],
                    s = i + 1,
                    c = e[s];
                if (0 > a(u, n))
                    s < l && 0 > a(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[i] = n), (r = i));
                else {
                    if (!(s < l && 0 > a(c, n))) break e;
                    (e[r] = c), (e[s] = n), (r = s);
                }
            }
        }
        return t;
    }
    function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
    }
    if ('object' == typeof performance && 'function' == typeof performance.now) {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var o = Date,
            i = o.now();
        e.unstable_now = function () {
            return o.now() - i;
        };
    }
    var u = [],
        s = [],
        c = 1,
        f = null,
        d = 3,
        p = !1,
        h = !1,
        m = !1,
        g = 'function' == typeof setTimeout ? setTimeout : null,
        v = 'function' == typeof clearTimeout ? clearTimeout : null,
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
    function b(e) {
        for (var a = n(s); null !== a; ) {
            if (null === a.callback) r(s);
            else {
                if (!(a.startTime <= e)) break;
                r(s), (a.sortIndex = a.expirationTime), t(u, a);
            }
            a = n(s);
        }
    }
    function w(e) {
        if (((m = !1), b(e), !h))
            if (null !== n(u)) (h = !0), R(k);
            else {
                var t = n(s);
                null !== t && L(w, t.startTime - e);
            }
    }
    function k(t, a) {
        (h = !1), m && ((m = !1), v(_), (_ = -1)), (p = !0);
        var l = d;
        try {
            for (b(a), f = n(u); null !== f && (!(f.expirationTime > a) || (t && !N())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    (f.callback = null), (d = f.priorityLevel);
                    var i = o(f.expirationTime <= a);
                    (a = e.unstable_now()), 'function' == typeof i ? (f.callback = i) : f === n(u) && r(u), b(a);
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var g = n(s);
                null !== g && L(w, g.startTime - a), (c = !1);
            }
            return c;
        } finally {
            (f = null), (d = l), (p = !1);
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
        x = !1,
        E = null,
        _ = -1,
        C = 5,
        P = -1;
    function N() {
        return !(e.unstable_now() - P < C);
    }
    function z() {
        if (null !== E) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = E(!0, t);
            } finally {
                n ? S() : ((x = !1), (E = null));
            }
        } else x = !1;
    }
    if ('function' == typeof y)
        S = function () {
            y(z);
        };
    else if ('undefined' != typeof MessageChannel) {
        var T = new MessageChannel(),
            O = T.port2;
        (T.port1.onmessage = z),
            (S = function () {
                O.postMessage(null);
            });
    } else
        S = function () {
            g(z, 0);
        };
    function R(e) {
        (E = e), x || ((x = !0), S());
    }
    function L(t, n) {
        _ = g(function () {
            t(e.unstable_now());
        }, n);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
            e.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            h || p || ((h = !0), R(k));
        }),
        (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (C = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (e) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = d;
            }
            var n = d;
            d = t;
            try {
                return e();
            } finally {
                d = n;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var n = d;
            d = e;
            try {
                return t();
            } finally {
                d = n;
            }
        }),
        (e.unstable_scheduleCallback = function (r, a, l) {
            var o = e.unstable_now();
            switch (
                ('object' == typeof l && null !== l
                    ? (l = 'number' == typeof (l = l.delay) && 0 < l ? o + l : o)
                    : (l = o),
                r)
            ) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3;
            }
            return (
                (r = {
                    id: c++,
                    callback: a,
                    priorityLevel: r,
                    startTime: l,
                    expirationTime: (i = l + i),
                    sortIndex: -1,
                }),
                l > o
                    ? ((r.sortIndex = l),
                      t(s, r),
                      null === n(u) && r === n(s) && (m ? (v(_), (_ = -1)) : (m = !0), L(w, l - o)))
                    : ((r.sortIndex = i), t(u, r), h || p || ((h = !0), R(k))),
                r
            );
        }),
        (e.unstable_shouldYield = N),
        (e.unstable_wrapCallback = function (e) {
            var t = d;
            return function () {
                var n = d;
                d = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    d = n;
                }
            };
        });
})(it),
    (ot.exports = it);
var ut = ot.exports,
    st = $,
    ct = ut;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function ft(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var dt = new Set(),
    pt = {};
function ht(e, t) {
    mt(e, t), mt(e + 'Capture', t);
}
function mt(e, t) {
    for (pt[e] = t, e = 0; e < t.length; e++) dt.add(t[e]);
}
var gt = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    vt = Object.prototype.hasOwnProperty,
    yt =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    bt = {},
    wt = {};
function kt(e, t, n, r, a, l, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
}
var St = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        St[e] = new kt(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        St[t] = new kt(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        St[e] = new kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        St[e] = new kt(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            St[e] = new kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        St[e] = new kt(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        St[e] = new kt(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        St[e] = new kt(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        St[e] = new kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
var xt = /[\-:]([a-z])/g;
function Et(e) {
    return e[1].toUpperCase();
}
function _t(e, t, n, r) {
    var a = St.hasOwnProperty(t) ? St[t] : null;
    (null !== a
        ? 0 !== a.type
        : r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
            if (
                null == t ||
                (function (e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case 'function':
                        case 'symbol':
                            return !0;
                        case 'boolean':
                            return (
                                !r &&
                                (null !== n
                                    ? !n.acceptsBooleans
                                    : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                            );
                        default:
                            return !1;
                    }
                })(e, t, n, r)
            )
                return !0;
            if (r) return !1;
            if (null !== n)
                switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t;
                }
            return !1;
        })(t, n, a, r) && (n = null),
        r || null === a
            ? (function (e) {
                  return !!vt.call(wt, e) || (!vt.call(bt, e) && (yt.test(e) ? (wt[e] = !0) : ((bt[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xt, Et);
        St[t] = new kt(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(xt, Et);
        St[t] = new kt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(xt, Et);
        St[t] = new kt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        St[e] = new kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (St.xlinkHref = new kt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        St[e] = new kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
var Ct = st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pt = Symbol.for('react.element'),
    Nt = Symbol.for('react.portal'),
    zt = Symbol.for('react.fragment'),
    Tt = Symbol.for('react.strict_mode'),
    Ot = Symbol.for('react.profiler'),
    Rt = Symbol.for('react.provider'),
    Lt = Symbol.for('react.context'),
    Ft = Symbol.for('react.forward_ref'),
    Mt = Symbol.for('react.suspense'),
    It = Symbol.for('react.suspense_list'),
    At = Symbol.for('react.memo'),
    Dt = Symbol.for('react.lazy'),
    jt = Symbol.for('react.offscreen'),
    Ut = Symbol.iterator;
function $t(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (Ut && e[Ut]) || e['@@iterator'])
          ? e
          : null;
}
var Vt,
    Bt = Object.assign;
function Ht(e) {
    if (void 0 === Vt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Vt = (t && t[1]) || '';
        }
    return '\n' + Vt + e;
}
var Wt = !1;
function Qt(e, t) {
    if (!e || Wt) return '';
    Wt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                'object' == typeof Reflect && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && 'string' == typeof s.stack) {
            for (
                var a = s.stack.split('\n'), l = r.stack.split('\n'), o = a.length - 1, i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

            )
                i--;
            for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                    if (1 !== o || 1 !== i)
                        do {
                            if ((o--, 0 > --i || a[o] !== l[i])) {
                                var u = '\n' + a[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        u.includes('<anonymous>') &&
                                        (u = u.replace('<anonymous>', e.displayName)),
                                    u
                                );
                            }
                        } while (1 <= o && 0 <= i);
                    break;
                }
        }
    } finally {
        (Wt = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Ht(e) : '';
}
function qt(e) {
    switch (e.tag) {
        case 5:
            return Ht(e.type);
        case 16:
            return Ht('Lazy');
        case 13:
            return Ht('Suspense');
        case 19:
            return Ht('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Qt(e.type, !1));
        case 11:
            return (e = Qt(e.type.render, !1));
        case 1:
            return (e = Qt(e.type, !0));
        default:
            return '';
    }
}
function Kt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case zt:
            return 'Fragment';
        case Nt:
            return 'Portal';
        case Ot:
            return 'Profiler';
        case Tt:
            return 'StrictMode';
        case Mt:
            return 'Suspense';
        case It:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case Lt:
                return (e.displayName || 'Context') + '.Consumer';
            case Rt:
                return (e._context.displayName || 'Context') + '.Provider';
            case Ft:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case At:
                return null !== (t = e.displayName || null) ? t : Kt(e.type) || 'Memo';
            case Dt:
                (t = e._payload), (e = e._init);
                try {
                    return Kt(e(t));
                } catch (n) {}
        }
    return null;
}
function Yt(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Kt(t);
        case 8:
            return t === Tt ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ('function' == typeof t) return t.displayName || t.name || null;
            if ('string' == typeof t) return t;
    }
    return null;
}
function Xt(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
            return e;
        default:
            return '';
    }
}
function Gt(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Zt(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Gt(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var a = n.get,
                    l = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return a.call(this);
                        },
                        set: function (e) {
                            (r = '' + e), l.call(this, e);
                        },
                    }),
                    Object.defineProperty(e, t, { enumerable: n.enumerable }),
                    {
                        getValue: function () {
                            return r;
                        },
                        setValue: function (e) {
                            r = '' + e;
                        },
                        stopTracking: function () {
                            (e._valueTracker = null), delete e[t];
                        },
                    }
                );
            }
        })(e));
}
function Jt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return e && (r = Gt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function en(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function tn(e, t) {
    var n = t.checked;
    return Bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function nn(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Xt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        });
}
function rn(e, t) {
    null != (t = t.checked) && _t(e, 'checked', t, !1);
}
function an(e, t) {
    rn(e, t);
    var n = Xt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    t.hasOwnProperty('value')
        ? on(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && on(e, t.type, Xt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function ln(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
}
function on(e, t, n) {
    ('number' === t && en(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var un = Array.isArray;
function sn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + Xt(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function cn(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ft(91));
    return Bt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function fn(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(ft(92));
            if (un(n)) {
                if (1 < n.length) throw Error(ft(93));
                n = n[0];
            }
            t = n;
        }
        null == t && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Xt(n) };
}
function dn(e, t) {
    var n = Xt(t.value),
        r = Xt(t.defaultValue);
    null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
}
function pn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function hn(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function mn(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? hn(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var gn,
    vn,
    yn =
        ((vn = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (gn = gn || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = gn.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return vn(e, t);
                  });
              }
            : vn);
function bn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var wn = {
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
        strokeWidth: !0,
    },
    kn = ['Webkit', 'ms', 'Moz', 'O'];
function Sn(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (wn.hasOwnProperty(e) && wn[e])
          ? ('' + t).trim()
          : t + 'px';
}
function xn(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = Sn(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
        }
}
Object.keys(wn).forEach(function (e) {
    kn.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wn[t] = wn[e]);
    });
});
var En = Bt(
    { menuitem: !0 },
    {
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
        wbr: !0,
    },
);
function _n(e, t) {
    if (t) {
        if (En[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ft(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(ft(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(ft(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(ft(62));
    }
}
function Cn(e, t) {
    if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var Pn = null;
function Nn(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var zn = null,
    Tn = null,
    On = null;
function Rn(e) {
    if ((e = Co(e))) {
        if ('function' != typeof zn) throw Error(ft(280));
        var t = e.stateNode;
        t && ((t = No(t)), zn(e.stateNode, e.type, t));
    }
}
function Ln(e) {
    Tn ? (On ? On.push(e) : (On = [e])) : (Tn = e);
}
function Fn() {
    if (Tn) {
        var e = Tn,
            t = On;
        if (((On = Tn = null), Rn(e), t)) for (e = 0; e < t.length; e++) Rn(t[e]);
    }
}
function Mn(e, t) {
    return e(t);
}
function In() {}
var An = !1;
function Dn(e, t, n) {
    if (An) return e(t, n);
    An = !0;
    try {
        return Mn(e, t, n);
    } finally {
        (An = !1), (null !== Tn || null !== On) && (In(), Fn());
    }
}
function jn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = No(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && 'function' != typeof n) throw Error(ft(231, t, typeof n));
    return n;
}
var Un = !1;
if (gt)
    try {
        var $n = {};
        Object.defineProperty($n, 'passive', {
            get: function () {
                Un = !0;
            },
        }),
            window.addEventListener('test', $n, $n),
            window.removeEventListener('test', $n, $n);
    } catch (vn) {
        Un = !1;
    }
function Vn(e, t, n, r, a, l, o, i, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var Bn = !1,
    Hn = null,
    Wn = !1,
    Qn = null,
    qn = {
        onError: function (e) {
            (Bn = !0), (Hn = e);
        },
    };
function Kn(e, t, n, r, a, l, o, i, u) {
    (Bn = !1), (Hn = null), Vn.apply(qn, arguments);
}
function Yn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do {
            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
    }
    return 3 === t.tag ? n : null;
}
function Xn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function Gn(e) {
    if (Yn(e) !== e) throw Error(ft(188));
}
function Zn(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Yn(e))) throw Error(ft(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                    if (null !== (r = a.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (a.child === l.child) {
                    for (l = a.child; l; ) {
                        if (l === n) return Gn(a), e;
                        if (l === r) return Gn(a), t;
                        l = l.sibling;
                    }
                    throw Error(ft(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                    for (var o = !1, i = a.child; i; ) {
                        if (i === n) {
                            (o = !0), (n = a), (r = l);
                            break;
                        }
                        if (i === r) {
                            (o = !0), (r = a), (n = l);
                            break;
                        }
                        i = i.sibling;
                    }
                    if (!o) {
                        for (i = l.child; i; ) {
                            if (i === n) {
                                (o = !0), (n = l), (r = a);
                                break;
                            }
                            if (i === r) {
                                (o = !0), (r = l), (n = a);
                                break;
                            }
                            i = i.sibling;
                        }
                        if (!o) throw Error(ft(189));
                    }
                }
                if (n.alternate !== r) throw Error(ft(190));
            }
            if (3 !== n.tag) throw Error(ft(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Jn(e)
        : null;
}
function Jn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Jn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var er = ct.unstable_scheduleCallback,
    tr = ct.unstable_cancelCallback,
    nr = ct.unstable_shouldYield,
    rr = ct.unstable_requestPaint,
    ar = ct.unstable_now,
    lr = ct.unstable_getCurrentPriorityLevel,
    or = ct.unstable_ImmediatePriority,
    ir = ct.unstable_UserBlockingPriority,
    ur = ct.unstable_NormalPriority,
    sr = ct.unstable_LowPriority,
    cr = ct.unstable_IdlePriority,
    fr = null,
    dr = null;
var pr = Math.clz32
        ? Math.clz32
        : function (e) {
              return (e >>>= 0), 0 === e ? 32 : (31 - ((hr(e) / mr) | 0)) | 0;
          },
    hr = Math.log,
    mr = Math.LN2;
var gr = 64,
    vr = 4194304;
function yr(e) {
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
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function br(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var i = o & ~a;
        0 !== i ? (r = yr(i)) : 0 !== (l &= o) && (r = yr(l));
    } else 0 !== (o = n & ~a) ? (r = yr(o)) : 0 !== l && (r = yr(l));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - pr(t))), (r |= e[n]), (t &= ~a);
    return r;
}
function wr(e, t) {
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
        default:
            return -1;
    }
}
function kr(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Sr() {
    var e = gr;
    return 0 == (4194240 & (gr <<= 1)) && (gr = 64), e;
}
function xr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Er(e, t, n) {
    (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - pr(t))] = n);
}
function _r(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - pr(n),
            a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
}
var Cr = 0;
function Pr(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var Nr,
    zr,
    Tr,
    Or,
    Rr,
    Lr = !1,
    Fr = [],
    Mr = null,
    Ir = null,
    Ar = null,
    Dr = new Map(),
    jr = new Map(),
    Ur = [],
    $r =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function Vr(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Mr = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Ir = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Ar = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Dr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            jr.delete(t.pointerId);
    }
}
function Br(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }),
          null !== t && null !== (t = Co(t)) && zr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function Hr(e) {
    var t = _o(e.target);
    if (null !== t) {
        var n = Yn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Xn(n)))
                    return (
                        (e.blockedOn = t),
                        void Rr(e.priority, function () {
                            Tr(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Wr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Co(n)) && zr(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (Pn = r), n.target.dispatchEvent(r), (Pn = null), t.shift();
    }
    return !0;
}
function Qr(e, t, n) {
    Wr(e) && n.delete(t);
}
function qr() {
    (Lr = !1),
        null !== Mr && Wr(Mr) && (Mr = null),
        null !== Ir && Wr(Ir) && (Ir = null),
        null !== Ar && Wr(Ar) && (Ar = null),
        Dr.forEach(Qr),
        jr.forEach(Qr);
}
function Kr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Lr || ((Lr = !0), ct.unstable_scheduleCallback(ct.unstable_NormalPriority, qr)));
}
function Yr(e) {
    function t(t) {
        return Kr(t, e);
    }
    if (0 < Fr.length) {
        Kr(Fr[0], e);
        for (var n = 1; n < Fr.length; n++) {
            var r = Fr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== Mr && Kr(Mr, e),
            null !== Ir && Kr(Ir, e),
            null !== Ar && Kr(Ar, e),
            Dr.forEach(t),
            jr.forEach(t),
            n = 0;
        n < Ur.length;
        n++
    )
        (r = Ur[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ur.length && null === (n = Ur[0]).blockedOn; ) Hr(n), null === n.blockedOn && Ur.shift();
}
var Xr = Ct.ReactCurrentBatchConfig,
    Gr = !0;
function Zr(e, t, n, r) {
    var a = Cr,
        l = Xr.transition;
    Xr.transition = null;
    try {
        (Cr = 1), ea(e, t, n, r);
    } finally {
        (Cr = a), (Xr.transition = l);
    }
}
function Jr(e, t, n, r) {
    var a = Cr,
        l = Xr.transition;
    Xr.transition = null;
    try {
        (Cr = 4), ea(e, t, n, r);
    } finally {
        (Cr = a), (Xr.transition = l);
    }
}
function ea(e, t, n, r) {
    if (Gr) {
        var a = na(e, t, n, r);
        if (null === a) Xl(e, t, r, ta, n), Vr(e, r);
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return (Mr = Br(Mr, e, t, n, r, a)), !0;
                    case 'dragenter':
                        return (Ir = Br(Ir, e, t, n, r, a)), !0;
                    case 'mouseover':
                        return (Ar = Br(Ar, e, t, n, r, a)), !0;
                    case 'pointerover':
                        var l = a.pointerId;
                        return Dr.set(l, Br(Dr.get(l) || null, e, t, n, r, a)), !0;
                    case 'gotpointercapture':
                        return (l = a.pointerId), jr.set(l, Br(jr.get(l) || null, e, t, n, r, a)), !0;
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((Vr(e, r), 4 & t && -1 < $r.indexOf(e))) {
            for (; null !== a; ) {
                var l = Co(a);
                if ((null !== l && Nr(l), null === (l = na(e, t, n, r)) && Xl(e, t, r, ta, n), l === a)) break;
                a = l;
            }
            null !== a && r.stopPropagation();
        } else Xl(e, t, r, null, n);
    }
}
var ta = null;
function na(e, t, n, r) {
    if (((ta = null), null !== (e = _o((e = Nn(r))))))
        if (null === (t = Yn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Xn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ta = e), null;
}
function ra(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (lr()) {
                case or:
                    return 1;
                case ir:
                    return 4;
                case ur:
                case sr:
                    return 16;
                case cr:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var aa = null,
    la = null,
    oa = null;
function ia() {
    if (oa) return oa;
    var e,
        t,
        n = la,
        r = n.length,
        a = 'value' in aa ? aa.value : aa.textContent,
        l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (oa = a.slice(e, 1 < t ? 1 - t : void 0));
}
function ua(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function sa() {
    return !0;
}
function ca() {
    return !1;
}
function fa(e) {
    function t(t, n, r, a, l) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = l),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
        return (
            (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? sa
                : ca),
            (this.isPropagationStopped = ca),
            this
        );
    }
    return (
        Bt(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = sa));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = sa));
            },
            persist: function () {},
            isPersistent: sa,
        }),
        t
    );
}
var da,
    pa,
    ha,
    ma = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ga = fa(ma),
    va = Bt({}, ma, { view: 0, detail: 0 }),
    ya = fa(va),
    ba = Bt({}, va, {
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
        getModifierState: Oa,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== ha &&
                      (ha && 'mousemove' === e.type
                          ? ((da = e.screenX - ha.screenX), (pa = e.screenY - ha.screenY))
                          : (pa = da = 0),
                      (ha = e)),
                  da);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : pa;
        },
    }),
    wa = fa(ba),
    ka = fa(Bt({}, ba, { dataTransfer: 0 })),
    Sa = fa(Bt({}, va, { relatedTarget: 0 })),
    xa = fa(Bt({}, ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Ea = Bt({}, ma, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    _a = fa(Ea),
    Ca = fa(Bt({}, ma, { data: 0 })),
    Pa = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    Na = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    za = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Ta(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = za[e]) && !!t[e];
}
function Oa() {
    return Ta;
}
var Ra = Bt({}, va, {
        key: function (e) {
            if (e.key) {
                var t = Pa[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = ua(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? Na[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Oa,
        charCode: function (e) {
            return 'keypress' === e.type ? ua(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? ua(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    La = fa(Ra),
    Fa = fa(
        Bt({}, ba, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
    ),
    Ma = fa(
        Bt({}, va, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Oa,
        }),
    ),
    Ia = fa(Bt({}, ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Aa = Bt({}, ba, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Da = fa(Aa),
    ja = [9, 13, 27, 32],
    Ua = gt && 'CompositionEvent' in window,
    $a = null;
gt && 'documentMode' in document && ($a = document.documentMode);
var Va = gt && 'TextEvent' in window && !$a,
    Ba = gt && (!Ua || ($a && 8 < $a && 11 >= $a)),
    Ha = String.fromCharCode(32),
    Wa = !1;
function Qa(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== ja.indexOf(t.keyCode);
        case 'keydown':
            return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function qa(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Ka = !1;
var Ya = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
};
function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Ya[e.type] : 'textarea' === t;
}
function Ga(e, t, n, r) {
    Ln(r),
        0 < (t = Zl(t, 'onChange')).length &&
            ((n = new ga('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Za = null,
    Ja = null;
function el(e) {
    Hl(e, 0);
}
function tl(e) {
    if (Jt(Po(e))) return e;
}
function nl(e, t) {
    if ('change' === e) return t;
}
var rl = !1;
if (gt) {
    var al;
    if (gt) {
        var ll = 'oninput' in document;
        if (!ll) {
            var ol = document.createElement('div');
            ol.setAttribute('oninput', 'return;'), (ll = 'function' == typeof ol.oninput);
        }
        al = ll;
    } else al = !1;
    rl = al && (!document.documentMode || 9 < document.documentMode);
}
function il() {
    Za && (Za.detachEvent('onpropertychange', ul), (Ja = Za = null));
}
function ul(e) {
    if ('value' === e.propertyName && tl(Ja)) {
        var t = [];
        Ga(t, Ja, e, Nn(e)), Dn(el, t);
    }
}
function sl(e, t, n) {
    'focusin' === e ? (il(), (Ja = n), (Za = t).attachEvent('onpropertychange', ul)) : 'focusout' === e && il();
}
function cl(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return tl(Ja);
}
function fl(e, t) {
    if ('click' === e) return tl(t);
}
function dl(e, t) {
    if ('input' === e || 'change' === e) return tl(t);
}
var pl =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function hl(e, t) {
    if (pl(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!vt.call(t, a) || !pl(e[a], t[a])) return !1;
    }
    return !0;
}
function ml(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function gl(e, t) {
    var n,
        r = ml(e);
    for (e = 0; r; ) {
        if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                }
                r = r.parentNode;
            }
            r = void 0;
        }
        r = ml(r);
    }
}
function vl(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? vl(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function yl() {
    for (var e = window, t = en(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = en((e = t.contentWindow).document);
    }
    return t;
}
function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        (('input' === t &&
            ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
    );
}
function wl(e) {
    var t = yl(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vl(n.ownerDocument.documentElement, n)) {
        if (null !== r && bl(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                    !e.extend && l > r && ((a = r), (r = l), (l = a)),
                    (a = gl(n, l));
                var o = gl(n, r);
                a &&
                    o &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== a.node ||
                        e.anchorOffset !== a.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()).setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var kl = gt && 'documentMode' in document && 11 >= document.documentMode,
    Sl = null,
    xl = null,
    El = null,
    _l = !1;
function Cl(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    _l ||
        null == Sl ||
        Sl !== en(r) ||
        ('selectionStart' in (r = Sl) && bl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (El && hl(El, r)) ||
            ((El = r),
            0 < (r = Zl(xl, 'onSelect')).length &&
                ((t = new ga('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Sl))));
}
function Pl(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Nl = {
        animationend: Pl('Animation', 'AnimationEnd'),
        animationiteration: Pl('Animation', 'AnimationIteration'),
        animationstart: Pl('Animation', 'AnimationStart'),
        transitionend: Pl('Transition', 'TransitionEnd'),
    },
    zl = {},
    Tl = {};
function Ol(e) {
    if (zl[e]) return zl[e];
    if (!Nl[e]) return e;
    var t,
        n = Nl[e];
    for (t in n) if (n.hasOwnProperty(t) && t in Tl) return (zl[e] = n[t]);
    return e;
}
gt &&
    ((Tl = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Nl.animationend.animation, delete Nl.animationiteration.animation, delete Nl.animationstart.animation),
    'TransitionEvent' in window || delete Nl.transitionend.transition);
var Rl = Ol('animationend'),
    Ll = Ol('animationiteration'),
    Fl = Ol('animationstart'),
    Ml = Ol('transitionend'),
    Il = new Map(),
    Al =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function Dl(e, t) {
    Il.set(e, t), ht(t, [e]);
}
for (var jl = 0; jl < Al.length; jl++) {
    var Ul = Al[jl];
    Dl(Ul.toLowerCase(), 'on' + (Ul[0].toUpperCase() + Ul.slice(1)));
}
Dl(Rl, 'onAnimationEnd'),
    Dl(Ll, 'onAnimationIteration'),
    Dl(Fl, 'onAnimationStart'),
    Dl('dblclick', 'onDoubleClick'),
    Dl('focusin', 'onFocus'),
    Dl('focusout', 'onBlur'),
    Dl(Ml, 'onTransitionEnd'),
    mt('onMouseEnter', ['mouseout', 'mouseover']),
    mt('onMouseLeave', ['mouseout', 'mouseover']),
    mt('onPointerEnter', ['pointerout', 'pointerover']),
    mt('onPointerLeave', ['pointerout', 'pointerover']),
    ht('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ht('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    ht('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ht('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ht('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    ht('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var $l =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Vl = new Set('cancel close invalid load scroll toggle'.split(' ').concat($l));
function Bl(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n),
        (function (e, t, n, r, a, l, o, i, u) {
            if ((Kn.apply(this, arguments), Bn)) {
                if (!Bn) throw Error(ft(198));
                var s = Hn;
                (Bn = !1), (Hn = null), Wn || ((Wn = !0), (Qn = s));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null);
}
function Hl(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            a = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var i = r[o],
                        u = i.instance,
                        s = i.currentTarget;
                    if (((i = i.listener), u !== l && a.isPropagationStopped())) break e;
                    Bl(a, i, s), (l = u);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = (i = r[o]).instance),
                        (s = i.currentTarget),
                        (i = i.listener),
                        u !== l && a.isPropagationStopped())
                    )
                        break e;
                    Bl(a, i, s), (l = u);
                }
        }
    }
    if (Wn) throw ((e = Qn), (Wn = !1), (Qn = null), e);
}
function Wl(e, t) {
    var n = t[So];
    void 0 === n && (n = t[So] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Yl(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
    var r = 0;
    t && (r |= 4), Yl(n, e, r, t);
}
var ql = '_reactListening' + Math.random().toString(36).slice(2);
function Kl(e) {
    if (!e[ql]) {
        (e[ql] = !0),
            dt.forEach(function (t) {
                'selectionchange' !== t && (Vl.has(t) || Ql(t, !1, e), Ql(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ql] || ((t[ql] = !0), Ql('selectionchange', !1, t));
    }
}
function Yl(e, t, n, r) {
    switch (ra(t)) {
        case 1:
            var a = Zr;
            break;
        case 4:
            a = Jr;
            break;
        default:
            a = ea;
    }
    (n = a.bind(null, t, n, e)),
        (a = void 0),
        !Un || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, a) {
    var l = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var u = o.tag;
                        if (
                            (3 === u || 4 === u) &&
                            ((u = o.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== i; ) {
                    if (null === (o = _o(i))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = l = o;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    Dn(function () {
        var r = l,
            a = Nn(n),
            o = [];
        e: {
            var i = Il.get(e);
            if (void 0 !== i) {
                var u = ga,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === ua(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = La;
                        break;
                    case 'focusin':
                        (s = 'focus'), (u = Sa);
                        break;
                    case 'focusout':
                        (s = 'blur'), (u = Sa);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = Sa;
                        break;
                    case 'click':
                        if (2 === n.button) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        u = wa;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = ka;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = Ma;
                        break;
                    case Rl:
                    case Ll:
                    case Fl:
                        u = xa;
                        break;
                    case Ml:
                        u = Ia;
                        break;
                    case 'scroll':
                        u = ya;
                        break;
                    case 'wheel':
                        u = Da;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = _a;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = Fa;
                }
                var c = 0 != (4 & t),
                    f = !c && 'scroll' === e,
                    d = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                    var m = (p = h).stateNode;
                    if (
                        (5 === p.tag &&
                            null !== m &&
                            ((p = m), null !== d && null != (m = jn(h, d)) && c.push(Gl(h, m, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((i = new u(i, s, null, n, a)), o.push({ event: i, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                    n === Pn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!_o(s) && !s[ko])) &&
                    (u || i) &&
                    ((i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? _o(s) : null) &&
                              (s !== (f = Yn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = wa),
                    (m = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = Fa), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? i : Po(u)),
                    (p = null == s ? i : Po(s)),
                    ((i = new c(m, h + 'leave', u, n, a)).target = f),
                    (i.relatedTarget = p),
                    (m = null),
                    _o(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (m = c)),
                    (f = m),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Jl(p)) h++;
                        for (p = 0, m = d; m; m = Jl(m)) p++;
                        for (; 0 < h - p; ) (c = Jl(c)), h--;
                        for (; 0 < p - h; ) (d = Jl(d)), p--;
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            (c = Jl(c)), (d = Jl(d));
                        }
                        c = null;
                    }
                else c = null;
                null !== u && eo(o, i, u, c, !1), null !== s && null !== f && eo(o, f, s, c, !0);
            }
            if (
                'select' === (u = (i = r ? Po(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
            )
                var g = nl;
            else if (Xa(i))
                if (rl) g = dl;
                else {
                    g = cl;
                    var v = sl;
                }
            else
                (u = i.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === i.type || 'radio' === i.type) &&
                    (g = fl);
            switch (
                (g && (g = g(e, r))
                    ? Ga(o, g, n, a)
                    : (v && v(e, i, r),
                      'focusout' === e &&
                          (v = i._wrapperState) &&
                          v.controlled &&
                          'number' === i.type &&
                          on(i, 'number', i.value)),
                (v = r ? Po(r) : window),
                e)
            ) {
                case 'focusin':
                    (Xa(v) || 'true' === v.contentEditable) && ((Sl = v), (xl = r), (El = null));
                    break;
                case 'focusout':
                    El = xl = Sl = null;
                    break;
                case 'mousedown':
                    _l = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (_l = !1), Cl(o, n, a);
                    break;
                case 'selectionchange':
                    if (kl) break;
                case 'keydown':
                case 'keyup':
                    Cl(o, n, a);
            }
            var y;
            if (Ua)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var b = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            b = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            b = 'onCompositionUpdate';
                            break e;
                    }
                    b = void 0;
                }
            else
                Ka
                    ? Qa(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
                (Ba &&
                    'ko' !== n.locale &&
                    (Ka || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Ka && (y = ia())
                        : ((la = 'value' in (aa = a) ? aa.value : aa.textContent), (Ka = !0))),
                0 < (v = Zl(r, b)).length &&
                    ((b = new Ca(b, e, null, n, a)),
                    o.push({ event: b, listeners: v }),
                    y ? (b.data = y) : null !== (y = qa(n)) && (b.data = y))),
                (y = Va
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return qa(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Wa = !0), Ha);
                              case 'textInput':
                                  return (e = t.data) === Ha && Wa ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Ka)
                              return 'compositionend' === e || (!Ua && Qa(e, t))
                                  ? ((e = ia()), (oa = la = aa = null), (Ka = !1), e)
                                  : null;
                          switch (e) {
                              case 'paste':
                              default:
                                  return null;
                              case 'keypress':
                                  if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                      if (t.char && 1 < t.char.length) return t.char;
                                      if (t.which) return String.fromCharCode(t.which);
                                  }
                                  return null;
                              case 'compositionend':
                                  return Ba && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Zl(r, 'onBeforeInput')).length &&
                    ((a = new Ca('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y));
        }
        Hl(o, t);
    });
}
function Gl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Zl(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            l = a.stateNode;
        5 === a.tag &&
            null !== l &&
            ((a = l), null != (l = jn(e, n)) && r.unshift(Gl(e, l, a)), null != (l = jn(e, t)) && r.push(Gl(e, l, a))),
            (e = e.return);
    }
    return r;
}
function Jl(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function eo(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
            u = i.alternate,
            s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
            null !== s &&
            ((i = s),
            a
                ? null != (u = jn(n, l)) && o.unshift(Gl(n, u, i))
                : a || (null != (u = jn(n, l)) && o.push(Gl(n, u, i)))),
            (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var to = /\r\n?/g,
    no = /\u0000|\uFFFD/g;
function ro(e) {
    return ('string' == typeof e ? e : '' + e).replace(to, '\n').replace(no, '');
}
function ao(e, t, n) {
    if (((t = ro(t)), ro(e) !== t && n)) throw Error(ft(425));
}
function lo() {}
var oo = null,
    io = null;
function uo(e, t) {
    return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
    );
}
var so = 'function' == typeof setTimeout ? setTimeout : void 0,
    co = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    fo = 'function' == typeof Promise ? Promise : void 0,
    po =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== fo
              ? function (e) {
                    return fo.resolve(null).then(e).catch(ho);
                }
              : so;
function ho(e) {
    setTimeout(function () {
        throw e;
    });
}
function mo(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Yr(t);
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Yr(t);
}
function go(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
            if ('/$' === t) return null;
        }
    }
    return e;
}
function vo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
            } else '/$' === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var yo = Math.random().toString(36).slice(2),
    bo = '__reactFiber$' + yo,
    wo = '__reactProps$' + yo,
    ko = '__reactContainer$' + yo,
    So = '__reactEvents$' + yo,
    xo = '__reactListeners$' + yo,
    Eo = '__reactHandles$' + yo;
function _o(e) {
    var t = e[bo];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ko] || n[bo])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = vo(e); null !== e; ) {
                    if ((n = e[bo])) return n;
                    e = vo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function Co(e) {
    return !(e = e[bo] || e[ko]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function Po(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ft(33));
}
function No(e) {
    return e[wo] || null;
}
var zo = [],
    To = -1;
function Oo(e) {
    return { current: e };
}
function Ro(e) {
    0 > To || ((e.current = zo[To]), (zo[To] = null), To--);
}
function Lo(e, t) {
    To++, (zo[To] = e.current), (e.current = t);
}
var Fo = {},
    Mo = Oo(Fo),
    Io = Oo(!1),
    Ao = Fo;
function Do(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Fo;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a,
        l = {};
    for (a in n) l[a] = t[a];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function jo(e) {
    return null != (e = e.childContextTypes);
}
function Uo() {
    Ro(Io), Ro(Mo);
}
function $o(e, t, n) {
    if (Mo.current !== Fo) throw Error(ft(168));
    Lo(Mo, t), Lo(Io, n);
}
function Vo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(ft(108, Yt(e) || 'Unknown', a));
    return Bt({}, n, r);
}
function Bo(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fo),
        (Ao = Mo.current),
        Lo(Mo, e),
        Lo(Io, Io.current),
        !0
    );
}
function Ho(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ft(169));
    n ? ((e = Vo(e, t, Ao)), (r.__reactInternalMemoizedMergedChildContext = e), Ro(Io), Ro(Mo), Lo(Mo, e)) : Ro(Io),
        Lo(Io, n);
}
var Wo = null,
    Qo = !1,
    qo = !1;
function Ko(e) {
    null === Wo ? (Wo = [e]) : Wo.push(e);
}
function Yo() {
    if (!qo && null !== Wo) {
        qo = !0;
        var e = 0,
            t = Cr;
        try {
            var n = Wo;
            for (Cr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            (Wo = null), (Qo = !1);
        } catch (a) {
            throw (null !== Wo && (Wo = Wo.slice(e + 1)), er(or, Yo), a);
        } finally {
            (Cr = t), (qo = !1);
        }
    }
    return null;
}
var Xo = [],
    Go = 0,
    Zo = null,
    Jo = 0,
    ei = [],
    ti = 0,
    ni = null,
    ri = 1,
    ai = '';
function li(e, t) {
    (Xo[Go++] = Jo), (Xo[Go++] = Zo), (Zo = e), (Jo = t);
}
function oi(e, t, n) {
    (ei[ti++] = ri), (ei[ti++] = ai), (ei[ti++] = ni), (ni = e);
    var r = ri;
    e = ai;
    var a = 32 - pr(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var l = 32 - pr(t) + a;
    if (30 < l) {
        var o = a - (a % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (ri = (1 << (32 - pr(t) + a)) | (n << a) | r),
            (ai = l + e);
    } else (ri = (1 << l) | (n << a) | r), (ai = e);
}
function ii(e) {
    null !== e.return && (li(e, 1), oi(e, 1, 0));
}
function ui(e) {
    for (; e === Zo; ) (Zo = Xo[--Go]), (Xo[Go] = null), (Jo = Xo[--Go]), (Xo[Go] = null);
    for (; e === ni; )
        (ni = ei[--ti]), (ei[ti] = null), (ai = ei[--ti]), (ei[ti] = null), (ri = ei[--ti]), (ei[ti] = null);
}
var si = null,
    ci = null,
    fi = !1,
    di = null;
function pi(e, t) {
    var n = Df(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hi(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (si = e), (ci = go(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (si = e), (ci = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== ni ? { id: ri, overflow: ai } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (si = e),
                (ci = null),
                !0)
            );
        default:
            return !1;
    }
}
function mi(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function gi(e) {
    if (fi) {
        var t = ci;
        if (t) {
            var n = t;
            if (!hi(e, t)) {
                if (mi(e)) throw Error(ft(418));
                t = go(n.nextSibling);
                var r = si;
                t && hi(e, t) ? pi(r, n) : ((e.flags = (-4097 & e.flags) | 2), (fi = !1), (si = e));
            }
        } else {
            if (mi(e)) throw Error(ft(418));
            (e.flags = (-4097 & e.flags) | 2), (fi = !1), (si = e);
        }
    }
}
function vi(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    si = e;
}
function yi(e) {
    if (e !== si) return !1;
    if (!fi) return vi(e), (fi = !0), !1;
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !uo(e.type, e.memoizedProps)),
        t && (t = ci))
    ) {
        if (mi(e)) throw (bi(), Error(ft(418)));
        for (; t; ) pi(e, t), (t = go(t.nextSibling));
    }
    if ((vi(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ft(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            ci = go(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            ci = null;
        }
    } else ci = si ? go(e.stateNode.nextSibling) : null;
    return !0;
}
function bi() {
    for (var e = ci; e; ) e = go(e.nextSibling);
}
function wi() {
    (ci = si = null), (fi = !1);
}
function ki(e) {
    null === di ? (di = [e]) : di.push(e);
}
var Si = Ct.ReactCurrentBatchConfig;
function xi(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(ft(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(ft(147, e));
            var a = r,
                l = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === l
                ? t.ref
                : (((t = function (e) {
                      var t = a.refs;
                      null === e ? delete t[l] : (t[l] = e);
                  })._stringRef = l),
                  t);
        }
        if ('string' != typeof e) throw Error(ft(284));
        if (!n._owner) throw Error(ft(290, e));
    }
    return e;
}
function Ei(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(ft(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
}
function _i(e) {
    return (0, e._init)(e._payload);
}
function Ci(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
    }
    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
    }
    function r(e, t) {
        for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
    }
    function a(e, t) {
        return ((e = Uf(e, t)).index = 0), (e.sibling = null), e;
    }
    function l(t, n, r) {
        return (
            (t.index = r),
            e
                ? null !== (r = t.alternate)
                    ? (r = r.index) < n
                        ? ((t.flags |= 2), n)
                        : r
                    : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
        );
    }
    function o(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
    }
    function i(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = Hf(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var l = n.type;
        return l === zt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === l || ('object' == typeof l && null !== l && l.$$typeof === Dt && _i(l) === t.type))
              ? (((r = a(t, n.props)).ref = xi(e, t, n)), (r.return = e), r)
              : (((r = $f(n.type, n.key, n.props, null, e.mode, r)).ref = xi(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Wf(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, l) {
        return null === t || 7 !== t.tag
            ? (((t = Vf(n, e.mode, r, l)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return ((t = Hf('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case Pt:
                    return ((n = $f(t.type, t.key, t.props, null, e.mode, n)).ref = xi(e, null, t)), (n.return = e), n;
                case Nt:
                    return ((t = Wf(t, e.mode, n)).return = e), t;
                case Dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (un(t) || $t(t)) return ((t = Vf(t, e.mode, n, null)).return = e), t;
            Ei(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : i(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case Pt:
                    return n.key === a ? u(e, t, n, r) : null;
                case Nt:
                    return n.key === a ? s(e, t, n, r) : null;
                case Dt:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (un(n) || $t(n)) return null !== a ? null : c(e, t, n, r, null);
            Ei(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return i(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case Pt:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case Nt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case Dt:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (un(r) || $t(r)) return c(t, (e = e.get(n) || null), r, a, null);
            Ei(t, r);
        }
        return null;
    }
    return function i(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === zt && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case Pt:
                    e: {
                        for (var m = c.key, g = s; null !== g; ) {
                            if (g.key === m) {
                                if ((m = c.type) === zt) {
                                    if (7 === g.tag) {
                                        n(u, g.sibling), ((s = a(g, c.props.children)).return = u), (u = s);
                                        break e;
                                    }
                                } else if (
                                    g.elementType === m ||
                                    ('object' == typeof m && null !== m && m.$$typeof === Dt && _i(m) === g.type)
                                ) {
                                    n(u, g.sibling), ((s = a(g, c.props)).ref = xi(u, g, c)), (s.return = u), (u = s);
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            t(u, g), (g = g.sibling);
                        }
                        c.type === zt
                            ? (((s = Vf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = $f(c.type, c.key, c.props, null, u.mode, h)).ref = xi(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case Nt:
                    e: {
                        for (g = c.key; null !== s; ) {
                            if (s.key === g) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    n(u, s.sibling), ((s = a(s, c.children || [])).return = u), (u = s);
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            t(u, s), (s = s.sibling);
                        }
                        ((s = Wf(c, u.mode, h)).return = u), (u = s);
                    }
                    return o(u);
                case Dt:
                    return i(u, s, (g = c._init)(c._payload), h);
            }
            if (un(c))
                return (function (a, o, i, u) {
                    for (var s = null, c = null, h = o, m = (o = 0), g = null; null !== h && m < i.length; m++) {
                        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                        var v = d(a, h, i[m], u);
                        if (null === v) {
                            null === h && (h = g);
                            break;
                        }
                        e && h && null === v.alternate && t(a, h),
                            (o = l(v, o, m)),
                            null === c ? (s = v) : (c.sibling = v),
                            (c = v),
                            (h = g);
                    }
                    if (m === i.length) return n(a, h), fi && li(a, m), s;
                    if (null === h) {
                        for (; m < i.length; m++)
                            null !== (h = f(a, i[m], u)) &&
                                ((o = l(h, o, m)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return fi && li(a, m), s;
                    }
                    for (h = r(a, h); m < i.length; m++)
                        null !== (g = p(h, a, m, i[m], u)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
                            (o = l(g, o, m)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        fi && li(a, m),
                        s
                    );
                })(u, s, c, h);
            if ($t(c))
                return (function (a, o, i, u) {
                    var s = $t(i);
                    if ('function' != typeof s) throw Error(ft(150));
                    if (null == (i = s.call(i))) throw Error(ft(151));
                    for (
                        var c = (s = null), h = o, m = (o = 0), g = null, v = i.next();
                        null !== h && !v.done;
                        m++, v = i.next()
                    ) {
                        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                        var y = d(a, h, v.value, u);
                        if (null === y) {
                            null === h && (h = g);
                            break;
                        }
                        e && h && null === y.alternate && t(a, h),
                            (o = l(y, o, m)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (h = g);
                    }
                    if (v.done) return n(a, h), fi && li(a, m), s;
                    if (null === h) {
                        for (; !v.done; m++, v = i.next())
                            null !== (v = f(a, v.value, u)) &&
                                ((o = l(v, o, m)), null === c ? (s = v) : (c.sibling = v), (c = v));
                        return fi && li(a, m), s;
                    }
                    for (h = r(a, h); !v.done; m++, v = i.next())
                        null !== (v = p(h, a, m, v.value, u)) &&
                            (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
                            (o = l(v, o, m)),
                            null === c ? (s = v) : (c.sibling = v),
                            (c = v));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        fi && li(a, m),
                        s
                    );
                })(u, s, c, h);
            Ei(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = Hf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var Pi = Ci(!0),
    Ni = Ci(!1),
    zi = Oo(null),
    Ti = null,
    Oi = null,
    Ri = null;
function Li() {
    Ri = Oi = Ti = null;
}
function Fi(e) {
    var t = zi.current;
    Ro(zi), (e._currentValue = t);
}
function Mi(e, t, n) {
    for (; null !== e; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Ii(e, t) {
    (Ti = e),
        (Ri = Oi = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (_s = !0), (e.firstContext = null));
}
function Ai(e) {
    var t = e._currentValue;
    if (Ri !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === Oi)) {
            if (null === Ti) throw Error(ft(308));
            (Oi = e), (Ti.dependencies = { lanes: 0, firstContext: e });
        } else Oi = Oi.next = e;
    return t;
}
var Di = null;
function ji(e) {
    null === Di ? (Di = [e]) : Di.push(e);
}
function Ui(e, t, n, r) {
    var a = t.interleaved;
    return null === a ? ((n.next = n), ji(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), $i(e, r);
}
function $i(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
}
var Vi = !1;
function Bi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Hi(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Wi(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qi(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & Fc))) {
        var a = r.pending;
        return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), $i(e, n);
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), ji(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        $i(e, n)
    );
}
function qi(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), _r(e, n);
    }
}
function Ki(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
            l = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
            } while (null !== n);
            null === l ? (a = l = t) : (l = l.next = t);
        } else a = l = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
            }),
            void (e.updateQueue = n)
        );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Yi(e, t, n, r) {
    var a = e.updateQueue;
    Vi = !1;
    var l = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        i = a.shared.pending;
    if (null !== i) {
        a.shared.pending = null;
        var u = i,
            s = u.next;
        (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
        var c = e.alternate;
        null !== c &&
            (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
    }
    if (null !== l) {
        var f = a.baseState;
        for (o = 0, c = s = u = null, i = l; ; ) {
            var d = i.lane,
                p = i.eventTime;
            if ((r & d) === d) {
                null !== c &&
                    (c = c.next =
                        { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                e: {
                    var h = e,
                        m = i;
                    switch (((d = t), (p = n), m.tag)) {
                        case 1:
                            if ('function' == typeof (h = m.payload)) {
                                f = h.call(p, f, d);
                                break e;
                            }
                            f = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (d = 'function' == typeof (h = m.payload) ? h.call(p, f, d) : h)) break e;
                            f = Bt({}, f, d);
                            break e;
                        case 2:
                            Vi = !0;
                    }
                }
                null !== i.callback &&
                    0 !== i.lane &&
                    ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
            } else
                (p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
                    null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                    (o |= d);
            if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null);
            }
        }
        if (
            (null === c && (u = f),
            (a.baseState = u),
            (a.firstBaseUpdate = s),
            (a.lastBaseUpdate = c),
            null !== (t = a.shared.interleaved))
        ) {
            a = t;
            do {
                (o |= a.lane), (a = a.next);
            } while (a !== t);
        } else null === l && (a.shared.lanes = 0);
        (Vc |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function Xi(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(ft(191, a));
                a.call(r);
            }
        }
}
var Gi = {},
    Zi = Oo(Gi),
    Ji = Oo(Gi),
    eu = Oo(Gi);
function tu(e) {
    if (e === Gi) throw Error(ft(174));
    return e;
}
function nu(e, t) {
    switch ((Lo(eu, t), Lo(Ji, e), Lo(Zi, Gi), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : mn(null, '');
            break;
        default:
            t = mn((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    Ro(Zi), Lo(Zi, t);
}
function ru() {
    Ro(Zi), Ro(Ji), Ro(eu);
}
function au(e) {
    tu(eu.current);
    var t = tu(Zi.current),
        n = mn(t, e.type);
    t !== n && (Lo(Ji, e), Lo(Zi, n));
}
function lu(e) {
    Ji.current === e && (Ro(Zi), Ro(Ji));
}
var ou = Oo(0);
function iu(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var uu = [];
function su() {
    for (var e = 0; e < uu.length; e++) uu[e]._workInProgressVersionPrimary = null;
    uu.length = 0;
}
var cu = Ct.ReactCurrentDispatcher,
    fu = Ct.ReactCurrentBatchConfig,
    du = 0,
    pu = null,
    hu = null,
    mu = null,
    gu = !1,
    vu = !1,
    yu = 0,
    bu = 0;
function wu() {
    throw Error(ft(321));
}
function ku(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pl(e[n], t[n])) return !1;
    return !0;
}
function Su(e, t, n, r, a, l) {
    if (
        ((du = l),
        (pu = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (cu.current = null === e || null === e.memoizedState ? ls : os),
        (e = n(r, a)),
        vu)
    ) {
        l = 0;
        do {
            if (((vu = !1), (yu = 0), 25 <= l)) throw Error(ft(301));
            (l += 1), (mu = hu = null), (t.updateQueue = null), (cu.current = is), (e = n(r, a));
        } while (vu);
    }
    if (((cu.current = as), (t = null !== hu && null !== hu.next), (du = 0), (mu = hu = pu = null), (gu = !1), t))
        throw Error(ft(300));
    return e;
}
function xu() {
    var e = 0 !== yu;
    return (yu = 0), e;
}
function Eu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === mu ? (pu.memoizedState = mu = e) : (mu = mu.next = e), mu;
}
function _u() {
    if (null === hu) {
        var e = pu.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = hu.next;
    var t = null === mu ? pu.memoizedState : mu.next;
    if (null !== t) (mu = t), (hu = e);
    else {
        if (null === e) throw Error(ft(310));
        (e = {
            memoizedState: (hu = e).memoizedState,
            baseState: hu.baseState,
            baseQueue: hu.baseQueue,
            queue: hu.queue,
            next: null,
        }),
            null === mu ? (pu.memoizedState = mu = e) : (mu = mu.next = e);
    }
    return mu;
}
function Cu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function Pu(e) {
    var t = _u(),
        n = t.queue;
    if (null === n) throw Error(ft(311));
    n.lastRenderedReducer = e;
    var r = hu,
        a = r.baseQueue,
        l = n.pending;
    if (null !== l) {
        if (null !== a) {
            var o = a.next;
            (a.next = l.next), (l.next = o);
        }
        (r.baseQueue = a = l), (n.pending = null);
    }
    if (null !== a) {
        (l = a.next), (r = r.baseState);
        var i = (o = null),
            u = null,
            s = l;
        do {
            var c = s.lane;
            if ((du & c) === c)
                null !== u &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var f = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (pu.lanes |= c), (Vc |= c);
            }
            s = s.next;
        } while (null !== s && s !== l);
        null === u ? (o = r) : (u.next = i),
            pl(r, t.memoizedState) || (_s = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            (l = a.lane), (pu.lanes |= l), (Vc |= l), (a = a.next);
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Nu(e) {
    var t = _u(),
        n = t.queue;
    if (null === n) throw Error(ft(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        a = n.pending,
        l = t.memoizedState;
    if (null !== a) {
        n.pending = null;
        var o = (a = a.next);
        do {
            (l = e(l, o.action)), (o = o.next);
        } while (o !== a);
        pl(l, t.memoizedState) || (_s = !0),
            (t.memoizedState = l),
            null === t.baseQueue && (t.baseState = l),
            (n.lastRenderedState = l);
    }
    return [l, r];
}
function zu() {}
function Tu(e, t) {
    var n = pu,
        r = _u(),
        a = t(),
        l = !pl(r.memoizedState, a);
    if (
        (l && ((r.memoizedState = a), (_s = !0)),
        (r = r.queue),
        Vu(Lu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (null !== mu && 1 & mu.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), Au(9, Ru.bind(null, n, r, a, t), void 0, null), null === Mc)) throw Error(ft(349));
        0 != (30 & du) || Ou(n, t, a);
    }
    return a;
}
function Ou(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = pu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (pu.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function Ru(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Fu(t) && Mu(e);
}
function Lu(e, t, n) {
    return n(function () {
        Fu(t) && Mu(e);
    });
}
function Fu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !pl(e, n);
    } catch (r) {
        return !0;
    }
}
function Mu(e) {
    var t = $i(e, 1);
    null !== t && sf(t, e, 1, -1);
}
function Iu(e) {
    var t = Eu();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Cu,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = es.bind(null, pu, e)),
        [t.memoizedState, e]
    );
}
function Au(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = pu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (pu.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function Du() {
    return _u().memoizedState;
}
function ju(e, t, n, r) {
    var a = Eu();
    (pu.flags |= e), (a.memoizedState = Au(1 | t, n, void 0, void 0 === r ? null : r));
}
function Uu(e, t, n, r) {
    var a = _u();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== hu) {
        var o = hu.memoizedState;
        if (((l = o.destroy), null !== r && ku(r, o.deps))) return void (a.memoizedState = Au(t, n, l, r));
    }
    (pu.flags |= e), (a.memoizedState = Au(1 | t, n, l, r));
}
function $u(e, t) {
    return ju(8390656, 8, e, t);
}
function Vu(e, t) {
    return Uu(2048, 8, e, t);
}
function Bu(e, t) {
    return Uu(4, 2, e, t);
}
function Hu(e, t) {
    return Uu(4, 4, e, t);
}
function Wu(e, t) {
    return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
              t(null);
          })
        : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
                t.current = null;
            })
          : void 0;
}
function Qu(e, t, n) {
    return (n = null != n ? n.concat([e]) : null), Uu(4, 4, Wu.bind(null, t, e), n);
}
function qu() {}
function Ku(e, t) {
    var n = _u();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && ku(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Yu(e, t) {
    var n = _u();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && ku(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xu(e, t, n) {
    return 0 == (21 & du)
        ? (e.baseState && ((e.baseState = !1), (_s = !0)), (e.memoizedState = n))
        : (pl(n, t) || ((n = Sr()), (pu.lanes |= n), (Vc |= n), (e.baseState = !0)), t);
}
function Gu(e, t) {
    var n = Cr;
    (Cr = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = fu.transition;
    fu.transition = {};
    try {
        e(!1), t();
    } finally {
        (Cr = n), (fu.transition = r);
    }
}
function Zu() {
    return _u().memoizedState;
}
function Ju(e, t, n) {
    var r = uf(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ts(e))) ns(t, n);
    else if (null !== (n = Ui(e, t, n, r))) {
        sf(n, e, r, of()), rs(n, t, r);
    }
}
function es(e, t, n) {
    var r = uf(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ts(e)) ns(t, a);
    else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), pl(i, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), ji(t)) : ((a.next = u.next), (u.next = a)), void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = Ui(e, t, a, r)) && (sf(n, e, r, (a = of())), rs(n, t, r));
    }
}
function ts(e) {
    var t = e.alternate;
    return e === pu || (null !== t && t === pu);
}
function ns(e, t) {
    vu = gu = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function rs(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), _r(e, n);
    }
}
var as = {
        readContext: Ai,
        useCallback: wu,
        useContext: wu,
        useEffect: wu,
        useImperativeHandle: wu,
        useInsertionEffect: wu,
        useLayoutEffect: wu,
        useMemo: wu,
        useReducer: wu,
        useRef: wu,
        useState: wu,
        useDebugValue: wu,
        useDeferredValue: wu,
        useTransition: wu,
        useMutableSource: wu,
        useSyncExternalStore: wu,
        useId: wu,
        unstable_isNewReconciler: !1,
    },
    ls = {
        readContext: Ai,
        useCallback: function (e, t) {
            return (Eu().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: Ai,
        useEffect: $u,
        useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), ju(4194308, 4, Wu.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return ju(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ju(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Eu();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Eu();
            return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ju.bind(null, pu, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (e = { current: e }), (Eu().memoizedState = e);
        },
        useState: Iu,
        useDebugValue: qu,
        useDeferredValue: function (e) {
            return (Eu().memoizedState = e);
        },
        useTransition: function () {
            var e = Iu(!1),
                t = e[0];
            return (e = Gu.bind(null, e[1])), (Eu().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = pu,
                a = Eu();
            if (fi) {
                if (void 0 === n) throw Error(ft(407));
                n = n();
            } else {
                if (((n = t()), null === Mc)) throw Error(ft(349));
                0 != (30 & du) || Ou(r, t, n);
            }
            a.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
                (a.queue = l),
                $u(Lu.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Au(9, Ru.bind(null, r, l, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Eu(),
                t = Mc.identifierPrefix;
            if (fi) {
                var n = ai;
                (t = ':' + t + 'R' + (n = (ri & ~(1 << (32 - pr(ri) - 1))).toString(32) + n)),
                    0 < (n = yu++) && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else t = ':' + t + 'r' + (n = bu++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    os = {
        readContext: Ai,
        useCallback: Ku,
        useContext: Ai,
        useEffect: Vu,
        useImperativeHandle: Qu,
        useInsertionEffect: Bu,
        useLayoutEffect: Hu,
        useMemo: Yu,
        useReducer: Pu,
        useRef: Du,
        useState: function () {
            return Pu(Cu);
        },
        useDebugValue: qu,
        useDeferredValue: function (e) {
            return Xu(_u(), hu.memoizedState, e);
        },
        useTransition: function () {
            return [Pu(Cu)[0], _u().memoizedState];
        },
        useMutableSource: zu,
        useSyncExternalStore: Tu,
        useId: Zu,
        unstable_isNewReconciler: !1,
    },
    is = {
        readContext: Ai,
        useCallback: Ku,
        useContext: Ai,
        useEffect: Vu,
        useImperativeHandle: Qu,
        useInsertionEffect: Bu,
        useLayoutEffect: Hu,
        useMemo: Yu,
        useReducer: Nu,
        useRef: Du,
        useState: function () {
            return Nu(Cu);
        },
        useDebugValue: qu,
        useDeferredValue: function (e) {
            var t = _u();
            return null === hu ? (t.memoizedState = e) : Xu(t, hu.memoizedState, e);
        },
        useTransition: function () {
            return [Nu(Cu)[0], _u().memoizedState];
        },
        useMutableSource: zu,
        useSyncExternalStore: Tu,
        useId: Zu,
        unstable_isNewReconciler: !1,
    };
function us(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = Bt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function ss(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Bt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var cs = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Yn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = of(),
            a = uf(e),
            l = Wi(r, a);
        (l.payload = t), null != n && (l.callback = n), null !== (t = Qi(e, l, a)) && (sf(t, e, a, r), qi(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = of(),
            a = uf(e),
            l = Wi(r, a);
        (l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            null !== (t = Qi(e, l, a)) && (sf(t, e, a, r), qi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = of(),
            r = uf(e),
            a = Wi(n, r);
        (a.tag = 2), null != t && (a.callback = t), null !== (t = Qi(e, a, r)) && (sf(t, e, r, n), qi(t, e, r));
    },
};
function fs(e, t, n, r, a, l, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !hl(n, r) || !hl(a, l);
}
function ds(e, t, n) {
    var r = !1,
        a = Fo,
        l = t.contextType;
    return (
        'object' == typeof l && null !== l
            ? (l = Ai(l))
            : ((a = jo(t) ? Ao : Mo.current), (l = (r = null != (r = t.contextTypes)) ? Do(e, a) : Fo)),
        (t = new t(n, l)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = cs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function ps(e, t, n, r) {
    (e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && cs.enqueueReplaceState(t, t.state, null);
}
function hs(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Bi(e);
    var l = t.contextType;
    'object' == typeof l && null !== l ? (a.context = Ai(l)) : ((l = jo(t) ? Ao : Mo.current), (a.context = Do(e, l))),
        (a.state = e.memoizedState),
        'function' == typeof (l = t.getDerivedStateFromProps) && (ss(e, t, l, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && cs.enqueueReplaceState(a, a.state, null),
            Yi(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
}
function ms(e, t) {
    try {
        var n = '',
            r = t;
        do {
            (n += qt(r)), (r = r.return);
        } while (r);
        var a = n;
    } catch (l) {
        a = '\nError generating stack: ' + l.message + '\n' + l.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function gs(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function vs(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var ys = 'function' == typeof WeakMap ? WeakMap : Map;
function bs(e, t, n) {
    ((n = Wi(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Xc || ((Xc = !0), (Gc = r)), vs(0, t);
        }),
        n
    );
}
function ws(e, t, n) {
    (n = Wi(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        (n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                vs(0, t);
            });
    }
    var l = e.stateNode;
    return (
        null !== l &&
            'function' == typeof l.componentDidCatch &&
            (n.callback = function () {
                vs(0, t), 'function' != typeof r && (null === Zc ? (Zc = new Set([this])) : Zc.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function ks(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new ys();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = Rf.bind(null, e, t, n)), t.then(e, e));
}
function Ss(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function xs(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Wi(-1, 1)).tag = 2), Qi(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var Es = Ct.ReactCurrentOwner,
    _s = !1;
function Cs(e, t, n, r) {
    t.child = null === e ? Ni(t, null, n, r) : Pi(t, e.child, n, r);
}
function Ps(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
        Ii(t, a),
        (r = Su(e, t, n, r, l, a)),
        (n = xu()),
        null === e || _s
            ? (fi && n && ii(t), (t.flags |= 1), Cs(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xs(e, t, a))
    );
}
function Ns(e, t, n, r, a) {
    if (null === e) {
        var l = n.type;
        return 'function' != typeof l ||
            jf(l) ||
            void 0 !== l.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = $f(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = l), zs(e, t, l, r, a));
    }
    if (((l = e.child), 0 == (e.lanes & a))) {
        var o = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : hl)(o, r) && e.ref === t.ref) return Xs(e, t, a);
    }
    return (t.flags |= 1), ((e = Uf(l, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function zs(e, t, n, r, a) {
    if (null !== e) {
        var l = e.memoizedProps;
        if (hl(l, r) && e.ref === t.ref) {
            if (((_s = !1), (t.pendingProps = r = l), 0 == (e.lanes & a))) return (t.lanes = e.lanes), Xs(e, t, a);
            0 != (131072 & e.flags) && (_s = !0);
        }
    }
    return Rs(e, t, n, r, a);
}
function Ts(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Lo(jc, Dc), (Dc |= n);
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== l ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    Lo(jc, Dc),
                    (Dc |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== l ? l.baseLanes : n),
                Lo(jc, Dc),
                (Dc |= r);
        }
    else null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Lo(jc, Dc), (Dc |= r);
    return Cs(e, t, a, n), t.child;
}
function Os(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Rs(e, t, n, r, a) {
    var l = jo(n) ? Ao : Mo.current;
    return (
        (l = Do(t, l)),
        Ii(t, a),
        (n = Su(e, t, n, r, l, a)),
        (r = xu()),
        null === e || _s
            ? (fi && r && ii(t), (t.flags |= 1), Cs(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xs(e, t, a))
    );
}
function Ls(e, t, n, r, a) {
    if (jo(n)) {
        var l = !0;
        Bo(t);
    } else l = !1;
    if ((Ii(t, a), null === t.stateNode)) Ys(e, t), ds(t, n, r), hs(t, n, r, a), (r = !0);
    else if (null === e) {
        var o = t.stateNode,
            i = t.memoizedProps;
        o.props = i;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = Ai(s)) : (s = Do(t, (s = jo(n) ? Ao : Mo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== r || u !== s) && ps(t, o, r, s)),
            (Vi = !1);
        var d = t.memoizedState;
        (o.state = d),
            Yi(t, r, o, a),
            (u = t.memoizedState),
            i !== r || d !== u || Io.current || Vi
                ? ('function' == typeof c && (ss(t, n, c, r), (u = t.memoizedState)),
                  (i = Vi || fs(t, n, i, r, d, u, s))
                      ? (f ||
                            ('function' != typeof o.UNSAFE_componentWillMount &&
                                'function' != typeof o.componentWillMount) ||
                            ('function' == typeof o.componentWillMount && o.componentWillMount(),
                            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                        'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
    } else {
        (o = t.stateNode),
            Hi(e, t),
            (i = t.memoizedProps),
            (s = t.type === t.elementType ? i : us(t.type, i)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = Ai(u))
                : (u = Do(t, (u = jo(n) ? Ao : Mo.current)));
        var p = n.getDerivedStateFromProps;
        (c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== f || d !== u) && ps(t, o, r, u)),
            (Vi = !1),
            (d = t.memoizedState),
            (o.state = d),
            Yi(t, r, o, a);
        var h = t.memoizedState;
        i !== f || d !== h || Io.current || Vi
            ? ('function' == typeof p && (ss(t, n, p, r), (h = t.memoizedState)),
              (s = Vi || fs(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof o.componentDidUpdate ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof o.getSnapshotBeforeUpdate ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (o.props = r),
              (o.state = h),
              (o.context = u),
              (r = s))
            : ('function' != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Fs(e, t, n, r, l, a);
}
function Fs(e, t, n, r, a, l) {
    Os(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return a && Ho(t, n, !1), Xs(e, t, l);
    (r = t.stateNode), (Es.current = t);
    var i = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = Pi(t, e.child, null, l)), (t.child = Pi(t, null, i, l))) : Cs(e, t, i, l),
        (t.memoizedState = r.state),
        a && Ho(t, n, !0),
        t.child
    );
}
function Ms(e) {
    var t = e.stateNode;
    t.pendingContext ? $o(0, t.pendingContext, t.pendingContext !== t.context) : t.context && $o(0, t.context, !1),
        nu(e, t.containerInfo);
}
function Is(e, t, n, r, a) {
    return wi(), ki(a), (t.flags |= 256), Cs(e, t, n, r), t.child;
}
var As,
    Ds,
    js,
    Us,
    $s = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Bs(e, t, n) {
    var r,
        a = t.pendingProps,
        l = ou.current,
        o = !1,
        i = 0 != (128 & t.flags);
    if (
        ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (l |= 1),
        Lo(ou, 1 & l),
        null === e)
    )
        return (
            gi(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((i = a.children),
                  (e = a.fallback),
                  o
                      ? ((a = t.mode),
                        (o = t.child),
                        (i = { mode: 'hidden', children: i }),
                        0 == (1 & a) && null !== o
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = Bf(i, a, 0, null)),
                        (e = Vf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Vs(n)),
                        (t.memoizedState = $s),
                        e)
                      : Hs(t, i))
        );
    if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, t, n, r, a, l, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Ws(e, t, o, (r = gs(Error(ft(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((l = r.fallback),
                        (a = t.mode),
                        (r = Bf({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((l = Vf(l, a, o, null)).flags |= 2),
                        (r.return = t),
                        (l.return = t),
                        (r.sibling = l),
                        (t.child = r),
                        0 != (1 & t.mode) && Pi(t, e.child, null, o),
                        (t.child.memoizedState = Vs(o)),
                        (t.memoizedState = $s),
                        l);
            if (0 == (1 & t.mode)) return Ws(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
                return (r = i), Ws(e, t, o, (r = gs((l = Error(ft(419))), r, void 0)));
            }
            if (((i = 0 != (o & e.childLanes)), _s || i)) {
                if (null !== (r = Mc)) {
                    switch (o & -o) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
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
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default:
                            a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                        a !== l.retryLane &&
                        ((l.retryLane = a), $i(e, a), sf(r, e, a, -1));
                }
                return Sf(), Ws(e, t, o, (r = gs(Error(ft(421)))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = Ff.bind(null, e)), (a._reactRetry = t), null)
                : ((e = l.treeContext),
                  (ci = go(a.nextSibling)),
                  (si = t),
                  (fi = !0),
                  (di = null),
                  null !== e &&
                      ((ei[ti++] = ri), (ei[ti++] = ai), (ei[ti++] = ni), (ri = e.id), (ai = e.overflow), (ni = t)),
                  (t = Hs(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, i, a, r, l, n);
    if (o) {
        (o = a.fallback), (i = t.mode), (r = (l = e.child).sibling);
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & i) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = Uf(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
            null !== r ? (o = Uf(r, o)) : ((o = Vf(o, i, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (i =
                null === (i = e.child.memoizedState)
                    ? Vs(n)
                    : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = $s),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = Uf(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function Hs(e, t) {
    return ((t = Bf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
}
function Ws(e, t, n, r) {
    return (
        null !== r && ki(r),
        Pi(t, e.child, null, n),
        ((e = Hs(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), Mi(e.return, t, n);
}
function qs(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = a));
}
function Ks(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
    if ((Cs(e, t, r.children, n), 0 != (2 & (r = ou.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Qs(e, n, t);
                else if (19 === e.tag) Qs(e, n, t);
                else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Lo(ou, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    null !== (e = n.alternate) && null === iu(e) && (a = n), (n = n.sibling);
                null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    qs(t, !1, a, n, l);
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === iu(e)) {
                        t.child = a;
                        break;
                    }
                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                qs(t, !0, n, null, l);
                break;
            case 'together':
                qs(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ys(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (Vc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(ft(153));
    if (null !== t.child) {
        for (n = Uf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = Uf(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function Gs(e, t) {
    if (!fi)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Zs(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
    else
        for (a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Js(e, t, n) {
    var r = t.pendingProps;
    switch ((ui(t), t.tag)) {
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
            return Zs(t), null;
        case 1:
        case 17:
            return jo(t.type) && Uo(), Zs(t), null;
        case 3:
            return (
                (r = t.stateNode),
                ru(),
                Ro(Io),
                Ro(Mo),
                su(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (yi(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== di && (pf(di), (di = null)))),
                Ds(e, t),
                Zs(t),
                null
            );
        case 5:
            lu(t);
            var a = tu(eu.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                js(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(ft(166));
                    return Zs(t), null;
                }
                if (((e = tu(Zi.current)), yi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[bo] = t), (r[wo] = l), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            Wl('cancel', r), Wl('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Wl('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < $l.length; a++) Wl($l[a], r);
                            break;
                        case 'source':
                            Wl('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            Wl('error', r), Wl('load', r);
                            break;
                        case 'details':
                            Wl('toggle', r);
                            break;
                        case 'input':
                            nn(r, l), Wl('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!l.multiple }), Wl('invalid', r);
                            break;
                        case 'textarea':
                            fn(r, l), Wl('invalid', r);
                    }
                    for (var o in (_n(n, l), (a = null), l))
                        if (l.hasOwnProperty(o)) {
                            var i = l[o];
                            'children' === o
                                ? 'string' == typeof i
                                    ? r.textContent !== i &&
                                      (!0 !== l.suppressHydrationWarning && ao(r.textContent, i, e),
                                      (a = ['children', i]))
                                    : 'number' == typeof i &&
                                      r.textContent !== '' + i &&
                                      (!0 !== l.suppressHydrationWarning && ao(r.textContent, i, e),
                                      (a = ['children', '' + i]))
                                : pt.hasOwnProperty(o) && null != i && 'onScroll' === o && Wl('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            Zt(r), ln(r, l, !0);
                            break;
                        case 'textarea':
                            Zt(r), pn(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof l.onClick && (r.onclick = lo);
                    }
                    (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                    (o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = hn(n)),
                        'http://www.w3.org/1999/xhtml' === e
                            ? 'script' === n
                                ? (((e = o.createElement('div')).innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : 'string' == typeof r.is
                                  ? (e = o.createElement(n, { is: r.is }))
                                  : ((e = o.createElement(n)),
                                    'select' === n &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[bo] = t),
                        (e[wo] = r),
                        As(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Cn(n, r)), n)) {
                            case 'dialog':
                                Wl('cancel', e), Wl('close', e), (a = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                Wl('load', e), (a = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < $l.length; a++) Wl($l[a], e);
                                a = r;
                                break;
                            case 'source':
                                Wl('error', e), (a = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                Wl('error', e), Wl('load', e), (a = r);
                                break;
                            case 'details':
                                Wl('toggle', e), (a = r);
                                break;
                            case 'input':
                                nn(e, r), (a = tn(e, r)), Wl('invalid', e);
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = Bt({}, r, { value: void 0 })),
                                    Wl('invalid', e);
                                break;
                            case 'textarea':
                                fn(e, r), (a = cn(e, r)), Wl('invalid', e);
                        }
                        for (l in (_n(n, a), (i = a)))
                            if (i.hasOwnProperty(l)) {
                                var u = i[l];
                                'style' === l
                                    ? xn(e, u)
                                    : 'dangerouslySetInnerHTML' === l
                                      ? null != (u = u ? u.__html : void 0) && yn(e, u)
                                      : 'children' === l
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && bn(e, u)
                                            : 'number' == typeof u && bn(e, '' + u)
                                        : 'suppressContentEditableWarning' !== l &&
                                          'suppressHydrationWarning' !== l &&
                                          'autoFocus' !== l &&
                                          (pt.hasOwnProperty(l)
                                              ? null != u && 'onScroll' === l && Wl('scroll', e)
                                              : null != u && _t(e, l, u, o));
                            }
                        switch (n) {
                            case 'input':
                                Zt(e), ln(e, r, !1);
                                break;
                            case 'textarea':
                                Zt(e), pn(e);
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Xt(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    null != (l = r.value)
                                        ? sn(e, !!r.multiple, l, !1)
                                        : null != r.defaultValue && sn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = lo);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Zs(t), null;
        case 6:
            if (e && null != t.stateNode) Us(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(ft(166));
                if (((n = tu(eu.current)), tu(Zi.current), yi(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[bo] = t),
                        (l = r.nodeValue !== n) && null !== (e = si))
                    )
                        switch (e.tag) {
                            case 3:
                                ao(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    ao(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    l && (t.flags |= 4);
                } else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[bo] = t), (t.stateNode = r);
            }
            return Zs(t), null;
        case 13:
            if (
                (Ro(ou),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (fi && null !== ci && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    bi(), wi(), (t.flags |= 98560), (l = !1);
                else if (((l = yi(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!l) throw Error(ft(318));
                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(ft(317));
                        l[bo] = t;
                    } else wi(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    Zs(t), (l = !1);
                } else null !== di && (pf(di), (di = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & ou.current) ? 0 === Uc && (Uc = 3) : Sf())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Zs(t),
                  null);
        case 4:
            return ru(), Ds(e, t), null === e && Kl(t.stateNode.containerInfo), Zs(t), null;
        case 10:
            return Fi(t.type._context), Zs(t), null;
        case 19:
            if ((Ro(ou), null === (l = t.memoizedState))) return Zs(t), null;
            if (((r = 0 != (128 & t.flags)), null === (o = l.rendering)))
                if (r) Gs(l, !1);
                else {
                    if (0 !== Uc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = iu(e))) {
                                for (
                                    t.flags |= 128,
                                        Gs(l, !1),
                                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;

                                )
                                    (e = r),
                                        ((l = n).flags &= 14680066),
                                        null === (o = l.alternate)
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = o.memoizedProps),
                                              (l.memoizedState = o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return Lo(ou, (1 & ou.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== l.tail && ar() > Kc && ((t.flags |= 128), (r = !0), Gs(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = iu(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Gs(l, !0),
                            null === l.tail && 'hidden' === l.tailMode && !o.alternate && !fi)
                        )
                            return Zs(t), null;
                    } else
                        2 * ar() - l.renderingStartTime > Kc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Gs(l, !1), (t.lanes = 4194304));
                l.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o), (l.last = o));
            }
            return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = ar()),
                  (t.sibling = null),
                  (n = ou.current),
                  Lo(ou, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Zs(t), null);
        case 22:
        case 23:
            return (
                yf(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & Dc) && (Zs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Zs(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(ft(156, t.tag));
}
function ec(e, t) {
    switch ((ui(t), t.tag)) {
        case 1:
            return jo(t.type) && Uo(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                ru(),
                Ro(Io),
                Ro(Mo),
                su(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return lu(t), null;
        case 13:
            if ((Ro(ou), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(ft(340));
                wi();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return Ro(ou), null;
        case 4:
            return ru(), null;
        case 10:
            return Fi(t.type._context), null;
        case 22:
        case 23:
            return yf(), null;
        default:
            return null;
    }
}
(As = function (e, t) {
    for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
}),
    (Ds = function () {}),
    (js = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            (e = t.stateNode), tu(Zi.current);
            var l,
                o = null;
            switch (n) {
                case 'input':
                    (a = tn(e, a)), (r = tn(e, r)), (o = []);
                    break;
                case 'select':
                    (a = Bt({}, a, { value: void 0 })), (r = Bt({}, r, { value: void 0 })), (o = []);
                    break;
                case 'textarea':
                    (a = cn(e, a)), (r = cn(e, r)), (o = []);
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = lo);
            }
            for (s in (_n(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                    if ('style' === s) {
                        var i = a[s];
                        for (l in i) i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (pt.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var u = r[s];
                if (((i = null != a ? a[s] : void 0), r.hasOwnProperty(s) && u !== i && (null != u || null != i)))
                    if ('style' === s)
                        if (i) {
                            for (l in i)
                                !i.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
                            for (l in u) u.hasOwnProperty(l) && i[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
                        } else n || (o || (o = []), o.push(s, n)), (n = u);
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((u = u ? u.__html : void 0),
                              (i = i ? i.__html : void 0),
                              null != u && i !== u && (o = o || []).push(s, u))
                            : 'children' === s
                              ? ('string' != typeof u && 'number' != typeof u) || (o = o || []).push(s, '' + u)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (pt.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && Wl('scroll', e), o || i === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (Us = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    });
var tc = !1,
    nc = !1,
    rc = 'function' == typeof WeakSet ? WeakSet : Set,
    ac = null;
function lc(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                Of(e, t, r);
            }
        else n.current = null;
}
function oc(e, t, n) {
    try {
        n();
    } catch (r) {
        Of(e, t, r);
    }
}
var ic = !1;
function uc(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && oc(t, n, l);
            }
            a = a.next;
        } while (a !== r);
    }
}
function sc(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function cc(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
    }
}
function fc(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), fc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[bo], delete t[wo], delete t[So], delete t[xo], delete t[Eo]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function dc(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function pc(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || dc(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function hc(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = lo));
    else if (4 !== r && null !== (e = e.child))
        for (hc(e, t, n), e = e.sibling; null !== e; ) hc(e, t, n), (e = e.sibling);
}
function mc(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (mc(e, t, n), e = e.sibling; null !== e; ) mc(e, t, n), (e = e.sibling);
}
var gc = null,
    vc = !1;
function yc(e, t, n) {
    for (n = n.child; null !== n; ) bc(e, t, n), (n = n.sibling);
}
function bc(e, t, n) {
    if (dr && 'function' == typeof dr.onCommitFiberUnmount)
        try {
            dr.onCommitFiberUnmount(fr, n);
        } catch (i) {}
    switch (n.tag) {
        case 5:
            nc || lc(n, t);
        case 6:
            var r = gc,
                a = vc;
            (gc = null),
                yc(e, t, n),
                (vc = a),
                null !== (gc = r) &&
                    (vc
                        ? ((e = gc),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : gc.removeChild(n.stateNode));
            break;
        case 18:
            null !== gc &&
                (vc
                    ? ((e = gc),
                      (n = n.stateNode),
                      8 === e.nodeType ? mo(e.parentNode, n) : 1 === e.nodeType && mo(e, n),
                      Yr(e))
                    : mo(gc, n.stateNode));
            break;
        case 4:
            (r = gc), (a = vc), (gc = n.stateNode.containerInfo), (vc = !0), yc(e, t, n), (gc = r), (vc = a);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!nc && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var l = a,
                        o = l.destroy;
                    (l = l.tag), void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && oc(n, t, o), (a = a.next);
                } while (a !== r);
            }
            yc(e, t, n);
            break;
        case 1:
            if (!nc && (lc(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (i) {
                    Of(n, t, i);
                }
            yc(e, t, n);
            break;
        case 21:
            yc(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((nc = (r = nc) || null !== n.memoizedState), yc(e, t, n), (nc = r)) : yc(e, t, n);
            break;
        default:
            yc(e, t, n);
    }
}
function wc(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new rc()),
            t.forEach(function (t) {
                var r = Mf.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            });
    }
}
function kc(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var l = e,
                    o = t,
                    i = o;
                e: for (; null !== i; ) {
                    switch (i.tag) {
                        case 5:
                            (gc = i.stateNode), (vc = !1);
                            break e;
                        case 3:
                        case 4:
                            (gc = i.stateNode.containerInfo), (vc = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (null === gc) throw Error(ft(160));
                bc(l, o, a), (gc = null), (vc = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
            } catch (s) {
                Of(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) Sc(t, e), (t = t.sibling);
}
function Sc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((kc(t, e), xc(e), 4 & r)) {
                try {
                    uc(3, e, e.return), sc(3, e);
                } catch (m) {
                    Of(e, e.return, m);
                }
                try {
                    uc(5, e, e.return);
                } catch (m) {
                    Of(e, e.return, m);
                }
            }
            break;
        case 1:
            kc(t, e), xc(e), 512 & r && null !== n && lc(n, n.return);
            break;
        case 5:
            if ((kc(t, e), xc(e), 512 & r && null !== n && lc(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    bn(a, '');
                } catch (m) {
                    Of(e, e.return, m);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : l,
                    i = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        'input' === i && 'radio' === l.type && null != l.name && rn(a, l), Cn(i, o);
                        var s = Cn(i, l);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? xn(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? yn(a, f)
                                  : 'children' === c
                                    ? bn(a, f)
                                    : _t(a, c, f, s);
                        }
                        switch (i) {
                            case 'input':
                                an(a, l);
                                break;
                            case 'textarea':
                                dn(a, l);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!l.multiple;
                                var p = l.value;
                                null != p
                                    ? sn(a, !!l.multiple, p, !1)
                                    : d !== !!l.multiple &&
                                      (null != l.defaultValue
                                          ? sn(a, !!l.multiple, l.defaultValue, !0)
                                          : sn(a, !!l.multiple, l.multiple ? [] : '', !1));
                        }
                        a[wo] = l;
                    } catch (m) {
                        Of(e, e.return, m);
                    }
            }
            break;
        case 6:
            if ((kc(t, e), xc(e), 4 & r)) {
                if (null === e.stateNode) throw Error(ft(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                    a.nodeValue = l;
                } catch (m) {
                    Of(e, e.return, m);
                }
            }
            break;
        case 3:
            if ((kc(t, e), xc(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Yr(t.containerInfo);
                } catch (m) {
                    Of(e, e.return, m);
                }
            break;
        case 4:
        default:
            kc(t, e), xc(e);
            break;
        case 13:
            kc(t, e),
                xc(e),
                8192 & (a = e.child).flags &&
                    ((l = null !== a.memoizedState),
                    (a.stateNode.isHidden = l),
                    !l || (null !== a.alternate && null !== a.alternate.memoizedState) || (qc = ar())),
                4 & r && wc(e);
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((nc = (s = nc) || c), kc(t, e), (nc = s)) : kc(t, e),
                xc(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (ac = e, c = e.child; null !== c; ) {
                        for (f = ac = c; null !== ac; ) {
                            switch (((p = (d = ac).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    uc(4, d, d.return);
                                    break;
                                case 1:
                                    lc(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount();
                                        } catch (m) {
                                            Of(r, n, m);
                                        }
                                    }
                                    break;
                                case 5:
                                    lc(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        Pc(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (ac = p)) : Pc(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                (a = f.stateNode),
                                    s
                                        ? 'function' == typeof (l = a.style).setProperty
                                            ? l.setProperty('display', 'none', 'important')
                                            : (l.display = 'none')
                                        : ((i = f.stateNode),
                                          (o =
                                              null != (u = f.memoizedProps.style) && u.hasOwnProperty('display')
                                                  ? u.display
                                                  : null),
                                          (i.style.display = Sn('display', o)));
                            } catch (m) {
                                Of(e, e.return, m);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (m) {
                                Of(e, e.return, m);
                            }
                    } else if (
                        ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                        null !== f.child
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; null === f.sibling; ) {
                        if (null === f.return || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            kc(t, e), xc(e), 4 & r && wc(e);
        case 21:
    }
}
function xc(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (dc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(ft(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    32 & r.flags && (bn(a, ''), (r.flags &= -33)), mc(e, pc(e), a);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo;
                    hc(e, pc(e), l);
                    break;
                default:
                    throw Error(ft(161));
            }
        } catch (o) {
            Of(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Ec(e, t, n) {
    (ac = e), _c(e);
}
function _c(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== ac; ) {
        var a = ac,
            l = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || tc;
            if (!o) {
                var i = a.alternate,
                    u = (null !== i && null !== i.memoizedState) || nc;
                i = tc;
                var s = nc;
                if (((tc = o), (nc = u) && !s))
                    for (ac = a; null !== ac; )
                        (u = (o = ac).child),
                            22 === o.tag && null !== o.memoizedState
                                ? Nc(a)
                                : null !== u
                                  ? ((u.return = o), (ac = u))
                                  : Nc(a);
                for (; null !== l; ) (ac = l), _c(l), (l = l.sibling);
                (ac = a), (tc = i), (nc = s);
            }
            Cc(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== l ? ((l.return = a), (ac = l)) : Cc(e);
    }
}
function Cc(e) {
    for (; null !== ac; ) {
        var t = ac;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            nc || sc(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !nc)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : us(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = t.updateQueue;
                            null !== l && Xi(t, l, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (null !== o) {
                                if (((n = null), null !== t.child))
                                    switch (t.child.tag) {
                                        case 5:
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Xi(t, o, n);
                            }
                            break;
                        case 5:
                            var i = t.stateNode;
                            if (null === n && 4 & t.flags) {
                                n = i;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        u.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        case 13:
                            if (null === t.memoizedState) {
                                var s = t.alternate;
                                if (null !== s) {
                                    var c = s.memoizedState;
                                    if (null !== c) {
                                        var f = c.dehydrated;
                                        null !== f && Yr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(ft(163));
                    }
                nc || (512 & t.flags && cc(t));
            } catch (d) {
                Of(t, t.return, d);
            }
        }
        if (t === e) {
            ac = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            (n.return = t.return), (ac = n);
            break;
        }
        ac = t.return;
    }
}
function Pc(e) {
    for (; null !== ac; ) {
        var t = ac;
        if (t === e) {
            ac = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            (n.return = t.return), (ac = n);
            break;
        }
        ac = t.return;
    }
}
function Nc(e) {
    for (; null !== ac; ) {
        var t = ac;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        sc(4, t);
                    } catch (u) {
                        Of(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            Of(t, a, u);
                        }
                    }
                    var l = t.return;
                    try {
                        cc(t);
                    } catch (u) {
                        Of(t, l, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        cc(t);
                    } catch (u) {
                        Of(t, o, u);
                    }
            }
        } catch (u) {
            Of(t, t.return, u);
        }
        if (t === e) {
            ac = null;
            break;
        }
        var i = t.sibling;
        if (null !== i) {
            (i.return = t.return), (ac = i);
            break;
        }
        ac = t.return;
    }
}
var zc,
    Tc = Math.ceil,
    Oc = Ct.ReactCurrentDispatcher,
    Rc = Ct.ReactCurrentOwner,
    Lc = Ct.ReactCurrentBatchConfig,
    Fc = 0,
    Mc = null,
    Ic = null,
    Ac = 0,
    Dc = 0,
    jc = Oo(0),
    Uc = 0,
    $c = null,
    Vc = 0,
    Bc = 0,
    Hc = 0,
    Wc = null,
    Qc = null,
    qc = 0,
    Kc = 1 / 0,
    Yc = null,
    Xc = !1,
    Gc = null,
    Zc = null,
    Jc = !1,
    ef = null,
    tf = 0,
    nf = 0,
    rf = null,
    af = -1,
    lf = 0;
function of() {
    return 0 != (6 & Fc) ? ar() : -1 !== af ? af : (af = ar());
}
function uf(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Fc) && 0 !== Ac
          ? Ac & -Ac
          : null !== Si.transition
            ? (0 === lf && (lf = Sr()), lf)
            : 0 !== (e = Cr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : ra(e.type));
}
function sf(e, t, n, r) {
    if (50 < nf) throw ((nf = 0), (rf = null), Error(ft(185)));
    Er(e, n, r),
        (0 != (2 & Fc) && e === Mc) ||
            (e === Mc && (0 == (2 & Fc) && (Bc |= n), 4 === Uc && hf(e, Ac)),
            cf(e, r),
            1 === n && 0 === Fc && 0 == (1 & t.mode) && ((Kc = ar() + 500), Qo && Yo()));
}
function cf(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
            var o = 31 - pr(l),
                i = 1 << o,
                u = a[o];
            -1 === u ? (0 != (i & n) && 0 == (i & r)) || (a[o] = wr(i, t)) : u <= t && (e.expiredLanes |= i), (l &= ~i);
        }
    })(e, t);
    var r = br(e, e === Mc ? Ac : 0);
    if (0 === r) null !== n && tr(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && tr(n), 1 === t))
            0 === e.tag
                ? (function (e) {
                      (Qo = !0), Ko(e);
                  })(mf.bind(null, e))
                : Ko(mf.bind(null, e)),
                po(function () {
                    0 == (6 & Fc) && Yo();
                }),
                (n = null);
        else {
            switch (Pr(r)) {
                case 1:
                    n = or;
                    break;
                case 4:
                    n = ir;
                    break;
                case 16:
                default:
                    n = ur;
                    break;
                case 536870912:
                    n = cr;
            }
            n = If(n, ff.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function ff(e, t) {
    if (((af = -1), (lf = 0), 0 != (6 & Fc))) throw Error(ft(327));
    var n = e.callbackNode;
    if (zf() && e.callbackNode !== n) return null;
    var r = br(e, e === Mc ? Ac : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = xf(e, r);
    else {
        t = r;
        var a = Fc;
        Fc |= 2;
        var l = kf();
        for ((Mc === e && Ac === t) || ((Yc = null), (Kc = ar() + 500), bf(e, t)); ; )
            try {
                _f();
                break;
            } catch (i) {
                wf(e, i);
            }
        Li(), (Oc.current = l), (Fc = a), null !== Ic ? (t = 0) : ((Mc = null), (Ac = 0), (t = Uc));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = kr(e)) && ((r = a), (t = df(e, a))), 1 === t))
            throw ((n = $c), bf(e, 0), hf(e, r), cf(e, ar()), n);
        if (6 === t) hf(e, r);
        else {
            if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                    !(function (e) {
                        for (var t = e; ; ) {
                            if (16384 & t.flags) {
                                var n = t.updateQueue;
                                if (null !== n && null !== (n = n.stores))
                                    for (var r = 0; r < n.length; r++) {
                                        var a = n[r],
                                            l = a.getSnapshot;
                                        a = a.value;
                                        try {
                                            if (!pl(l(), a)) return !1;
                                        } catch (o) {
                                            return !1;
                                        }
                                    }
                            }
                            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                            else {
                                if (t === e) break;
                                for (; null === t.sibling; ) {
                                    if (null === t.return || t.return === e) return !0;
                                    t = t.return;
                                }
                                (t.sibling.return = t.return), (t = t.sibling);
                            }
                        }
                        return !0;
                    })(a) &&
                    (2 === (t = xf(e, r)) && 0 !== (l = kr(e)) && ((r = l), (t = df(e, l))), 1 === t))
            )
                throw ((n = $c), bf(e, 0), hf(e, r), cf(e, ar()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(ft(345));
                case 2:
                case 5:
                    Nf(e, Qc, Yc);
                    break;
                case 3:
                    if ((hf(e, r), (130023424 & r) === r && 10 < (t = qc + 500 - ar()))) {
                        if (0 !== br(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            of(), (e.pingedLanes |= e.suspendedLanes & a);
                            break;
                        }
                        e.timeoutHandle = so(Nf.bind(null, e, Qc, Yc), t);
                        break;
                    }
                    Nf(e, Qc, Yc);
                    break;
                case 4:
                    if ((hf(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - pr(r);
                        (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = ar() - r)
                                    ? 120
                                    : 480 > r
                                      ? 480
                                      : 1080 > r
                                        ? 1080
                                        : 1920 > r
                                          ? 1920
                                          : 3e3 > r
                                            ? 3e3
                                            : 4320 > r
                                              ? 4320
                                              : 1960 * Tc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = so(Nf.bind(null, e, Qc, Yc), r);
                        break;
                    }
                    Nf(e, Qc, Yc);
                    break;
                default:
                    throw Error(ft(329));
            }
        }
    }
    return cf(e, ar()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function df(e, t) {
    var n = Wc;
    return (
        e.current.memoizedState.isDehydrated && (bf(e, t).flags |= 256),
        2 !== (e = xf(e, t)) && ((t = Qc), (Qc = n), null !== t && pf(t)),
        e
    );
}
function pf(e) {
    null === Qc ? (Qc = e) : Qc.push.apply(Qc, e);
}
function hf(e, t) {
    for (t &= ~Hc, t &= ~Bc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - pr(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function mf(e) {
    if (0 != (6 & Fc)) throw Error(ft(327));
    zf();
    var t = br(e, 0);
    if (0 == (1 & t)) return cf(e, ar()), null;
    var n = xf(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = kr(e);
        0 !== r && ((t = r), (n = df(e, r)));
    }
    if (1 === n) throw ((n = $c), bf(e, 0), hf(e, t), cf(e, ar()), n);
    if (6 === n) throw Error(ft(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Nf(e, Qc, Yc), cf(e, ar()), null;
}
function gf(e, t) {
    var n = Fc;
    Fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (Fc = n) && ((Kc = ar() + 500), Qo && Yo());
    }
}
function vf(e) {
    null !== ef && 0 === ef.tag && 0 == (6 & Fc) && zf();
    var t = Fc;
    Fc |= 1;
    var n = Lc.transition,
        r = Cr;
    try {
        if (((Lc.transition = null), (Cr = 1), e)) return e();
    } finally {
        (Cr = r), (Lc.transition = n), 0 == (6 & (Fc = t)) && Yo();
    }
}
function yf() {
    (Dc = jc.current), Ro(jc);
}
function bf(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), co(n)), null !== Ic))
        for (n = Ic.return; null !== n; ) {
            var r = n;
            switch ((ui(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && Uo();
                    break;
                case 3:
                    ru(), Ro(Io), Ro(Mo), su();
                    break;
                case 5:
                    lu(r);
                    break;
                case 4:
                    ru();
                    break;
                case 13:
                case 19:
                    Ro(ou);
                    break;
                case 10:
                    Fi(r.type._context);
                    break;
                case 22:
                case 23:
                    yf();
            }
            n = n.return;
        }
    if (
        ((Mc = e),
        (Ic = e = Uf(e.current, null)),
        (Ac = Dc = t),
        (Uc = 0),
        ($c = null),
        (Hc = Bc = Vc = 0),
        (Qc = Wc = null),
        null !== Di)
    ) {
        for (t = 0; t < Di.length; t++)
            if (null !== (r = (n = Di[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    l = n.pending;
                if (null !== l) {
                    var o = l.next;
                    (l.next = a), (r.next = o);
                }
                n.pending = r;
            }
        Di = null;
    }
    return e;
}
function wf(e, t) {
    for (;;) {
        var n = Ic;
        try {
            if ((Li(), (cu.current = as), gu)) {
                for (var r = pu.memoizedState; null !== r; ) {
                    var a = r.queue;
                    null !== a && (a.pending = null), (r = r.next);
                }
                gu = !1;
            }
            if (
                ((du = 0),
                (mu = hu = pu = null),
                (vu = !1),
                (yu = 0),
                (Rc.current = null),
                null === n || null === n.return)
            ) {
                (Uc = 1), ($c = t), (Ic = null);
                break;
            }
            e: {
                var l = e,
                    o = n.return,
                    i = n,
                    u = t;
                if (((t = Ac), (i.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
                    var s = u,
                        c = i,
                        f = c.tag;
                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = Ss(o);
                    if (null !== p) {
                        (p.flags &= -257), xs(p, o, i, 0, t), 1 & p.mode && ks(l, s, t), (u = s);
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var m = new Set();
                            m.add(u), (t.updateQueue = m);
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        ks(l, s, t), Sf();
                        break e;
                    }
                    u = Error(ft(426));
                } else if (fi && 1 & i.mode) {
                    var g = Ss(o);
                    if (null !== g) {
                        0 == (65536 & g.flags) && (g.flags |= 256), xs(g, o, i, 0, t), ki(ms(u, i));
                        break e;
                    }
                }
                (l = u = ms(u, i)), 4 !== Uc && (Uc = 2), null === Wc ? (Wc = [l]) : Wc.push(l), (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t), Ki(l, bs(0, u, t));
                            break e;
                        case 1:
                            i = u;
                            var v = l.type,
                                y = l.stateNode;
                            if (
                                0 == (128 & l.flags) &&
                                ('function' == typeof v.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Zc || !Zc.has(y))))
                            ) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t), Ki(l, ws(l, i, t));
                                break e;
                            }
                    }
                    l = l.return;
                } while (null !== l);
            }
            Pf(n);
        } catch (b) {
            (t = b), Ic === n && null !== n && (Ic = n = n.return);
            continue;
        }
        break;
    }
}
function kf() {
    var e = Oc.current;
    return (Oc.current = as), null === e ? as : e;
}
function Sf() {
    (0 !== Uc && 3 !== Uc && 2 !== Uc) || (Uc = 4),
        null === Mc || (0 == (268435455 & Vc) && 0 == (268435455 & Bc)) || hf(Mc, Ac);
}
function xf(e, t) {
    var n = Fc;
    Fc |= 2;
    var r = kf();
    for ((Mc === e && Ac === t) || ((Yc = null), bf(e, t)); ; )
        try {
            Ef();
            break;
        } catch (a) {
            wf(e, a);
        }
    if ((Li(), (Fc = n), (Oc.current = r), null !== Ic)) throw Error(ft(261));
    return (Mc = null), (Ac = 0), Uc;
}
function Ef() {
    for (; null !== Ic; ) Cf(Ic);
}
function _f() {
    for (; null !== Ic && !nr(); ) Cf(Ic);
}
function Cf(e) {
    var t = zc(e.alternate, e, Dc);
    (e.memoizedProps = e.pendingProps), null === t ? Pf(e) : (Ic = t), (Rc.current = null);
}
function Pf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Js(n, t, Dc))) return void (Ic = n);
        } else {
            if (null !== (n = ec(n, t))) return (n.flags &= 32767), void (Ic = n);
            if (null === e) return (Uc = 6), void (Ic = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (t = t.sibling)) return void (Ic = t);
        Ic = t = e;
    } while (null !== t);
    0 === Uc && (Uc = 5);
}
function Nf(e, t, n) {
    var r = Cr,
        a = Lc.transition;
    try {
        (Lc.transition = null),
            (Cr = 1),
            (function (e, t, n, r) {
                do {
                    zf();
                } while (null !== ef);
                if (0 != (6 & Fc)) throw Error(ft(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ft(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                    ((function (e, t) {
                        var n = e.pendingLanes & ~t;
                        (e.pendingLanes = t),
                            (e.suspendedLanes = 0),
                            (e.pingedLanes = 0),
                            (e.expiredLanes &= t),
                            (e.mutableReadLanes &= t),
                            (e.entangledLanes &= t),
                            (t = e.entanglements);
                        var r = e.eventTimes;
                        for (e = e.expirationTimes; 0 < n; ) {
                            var a = 31 - pr(n),
                                l = 1 << a;
                            (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                        }
                    })(e, l),
                    e === Mc && ((Ic = Mc = null), (Ac = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Jc ||
                        ((Jc = !0),
                        If(ur, function () {
                            return zf(), null;
                        })),
                    (l = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || l)
                ) {
                    (l = Lc.transition), (Lc.transition = null);
                    var o = Cr;
                    Cr = 1;
                    var i = Fc;
                    (Fc |= 4),
                        (Rc.current = null),
                        (function (e, t) {
                            if (((oo = Gr), bl((e = yl())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset,
                                                l = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, l.nodeType;
                                            } catch (w) {
                                                n = null;
                                                break e;
                                            }
                                            var o = 0,
                                                i = -1,
                                                u = -1,
                                                s = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== a && 3 !== f.nodeType) || (i = o + a),
                                                        f !== l || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (p = f.firstChild);

                                                )
                                                    (d = f), (f = p);
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++s === a && (i = o),
                                                        d === l && ++c === r && (u = o),
                                                        null !== (p = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = p;
                                            }
                                            n = -1 === i || -1 === u ? null : { start: i, end: u };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (io = { focusedElem: e, selectionRange: n }, Gr = !1, ac = t; null !== ac; )
                                if (((e = (t = ac).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    (e.return = t), (ac = e);
                                else
                                    for (; null !== ac; ) {
                                        t = ac;
                                        try {
                                            var h = t.alternate;
                                            if (0 != (1024 & t.flags))
                                                switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== h) {
                                                            var m = h.memoizedProps,
                                                                g = h.memoizedState,
                                                                v = t.stateNode,
                                                                y = v.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? m : us(t.type, m),
                                                                    g,
                                                                );
                                                            v.__reactInternalSnapshotBeforeUpdate = y;
                                                        }
                                                        break;
                                                    case 3:
                                                        var b = t.stateNode.containerInfo;
                                                        1 === b.nodeType
                                                            ? (b.textContent = '')
                                                            : 9 === b.nodeType &&
                                                              b.documentElement &&
                                                              b.removeChild(b.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(ft(163));
                                                }
                                        } catch (w) {
                                            Of(t, t.return, w);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            (e.return = t.return), (ac = e);
                                            break;
                                        }
                                        ac = t.return;
                                    }
                            (h = ic), (ic = !1);
                        })(e, n),
                        Sc(n, e),
                        wl(io),
                        (Gr = !!oo),
                        (io = oo = null),
                        (e.current = n),
                        Ec(n),
                        rr(),
                        (Fc = i),
                        (Cr = o),
                        (Lc.transition = l);
                } else e.current = n;
                if (
                    (Jc && ((Jc = !1), (ef = e), (tf = a)),
                    (l = e.pendingLanes),
                    0 === l && (Zc = null),
                    (function (e) {
                        if (dr && 'function' == typeof dr.onCommitFiberRoot)
                            try {
                                dr.onCommitFiberRoot(fr, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    cf(e, ar()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Xc) throw ((Xc = !1), (e = Gc), (Gc = null), e);
                0 != (1 & tf) && 0 !== e.tag && zf(),
                    (l = e.pendingLanes),
                    0 != (1 & l) ? (e === rf ? nf++ : ((nf = 0), (rf = e))) : (nf = 0),
                    Yo();
            })(e, t, n, r);
    } finally {
        (Lc.transition = a), (Cr = r);
    }
    return null;
}
function zf() {
    if (null !== ef) {
        var e = Pr(tf),
            t = Lc.transition,
            n = Cr;
        try {
            if (((Lc.transition = null), (Cr = 16 > e ? 16 : e), null === ef)) var r = !1;
            else {
                if (((e = ef), (ef = null), (tf = 0), 0 != (6 & Fc))) throw Error(ft(331));
                var a = Fc;
                for (Fc |= 4, ac = e.current; null !== ac; ) {
                    var l = ac,
                        o = l.child;
                    if (0 != (16 & ac.flags)) {
                        var i = l.deletions;
                        if (null !== i) {
                            for (var u = 0; u < i.length; u++) {
                                var s = i[u];
                                for (ac = s; null !== ac; ) {
                                    var c = ac;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            uc(8, c, l);
                                    }
                                    var f = c.child;
                                    if (null !== f) (f.return = c), (ac = f);
                                    else
                                        for (; null !== ac; ) {
                                            var d = (c = ac).sibling,
                                                p = c.return;
                                            if ((fc(c), c === s)) {
                                                ac = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                (d.return = p), (ac = d);
                                                break;
                                            }
                                            ac = p;
                                        }
                                }
                            }
                            var h = l.alternate;
                            if (null !== h) {
                                var m = h.child;
                                if (null !== m) {
                                    h.child = null;
                                    do {
                                        var g = m.sibling;
                                        (m.sibling = null), (m = g);
                                    } while (null !== m);
                                }
                            }
                            ac = l;
                        }
                    }
                    if (0 != (2064 & l.subtreeFlags) && null !== o) (o.return = l), (ac = o);
                    else
                        e: for (; null !== ac; ) {
                            if (0 != (2048 & (l = ac).flags))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        uc(9, l, l.return);
                                }
                            var v = l.sibling;
                            if (null !== v) {
                                (v.return = l.return), (ac = v);
                                break e;
                            }
                            ac = l.return;
                        }
                }
                var y = e.current;
                for (ac = y; null !== ac; ) {
                    var b = (o = ac).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) (b.return = o), (ac = b);
                    else
                        e: for (o = y; null !== ac; ) {
                            if (0 != (2048 & (i = ac).flags))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            sc(9, i);
                                    }
                                } catch (k) {
                                    Of(i, i.return, k);
                                }
                            if (i === o) {
                                ac = null;
                                break e;
                            }
                            var w = i.sibling;
                            if (null !== w) {
                                (w.return = i.return), (ac = w);
                                break e;
                            }
                            ac = i.return;
                        }
                }
                if (((Fc = a), Yo(), dr && 'function' == typeof dr.onPostCommitFiberRoot))
                    try {
                        dr.onPostCommitFiberRoot(fr, e);
                    } catch (k) {}
                r = !0;
            }
            return r;
        } finally {
            (Cr = n), (Lc.transition = t);
        }
    }
    return !1;
}
function Tf(e, t, n) {
    (e = Qi(e, (t = bs(0, (t = ms(n, t)), 1)), 1)), (t = of()), null !== e && (Er(e, 1, t), cf(e, t));
}
function Of(e, t, n) {
    if (3 === e.tag) Tf(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                Tf(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Zc || !Zc.has(r)))
                ) {
                    (t = Qi(t, (e = ws(t, (e = ms(n, e)), 1)), 1)), (e = of()), null !== t && (Er(t, 1, e), cf(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Rf(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (t = of()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Mc === e &&
            (Ac & n) === n &&
            (4 === Uc || (3 === Uc && (130023424 & Ac) === Ac && 500 > ar() - qc) ? bf(e, 0) : (Hc |= n)),
        cf(e, t);
}
function Lf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = vr), 0 == (130023424 & (vr <<= 1)) && (vr = 4194304)));
    var n = of();
    null !== (e = $i(e, t)) && (Er(e, t, n), cf(e, n));
}
function Ff(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), Lf(e, n);
}
function Mf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(ft(314));
    }
    null !== r && r.delete(t), Lf(e, n);
}
function If(e, t) {
    return er(e, t);
}
function Af(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Df(e, t, n, r) {
    return new Af(e, t, n, r);
}
function jf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function Uf(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = Df(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function $f(e, t, n, r, a, l) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) jf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case zt:
                return Vf(n.children, a, l, t);
            case Tt:
                (o = 8), (a |= 8);
                break;
            case Ot:
                return ((e = Df(12, n, t, 2 | a)).elementType = Ot), (e.lanes = l), e;
            case Mt:
                return ((e = Df(13, n, t, a)).elementType = Mt), (e.lanes = l), e;
            case It:
                return ((e = Df(19, n, t, a)).elementType = It), (e.lanes = l), e;
            case jt:
                return Bf(n, a, l, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case Rt:
                            o = 10;
                            break e;
                        case Lt:
                            o = 9;
                            break e;
                        case Ft:
                            o = 11;
                            break e;
                        case At:
                            o = 14;
                            break e;
                        case Dt:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(ft(130, null == e ? e : typeof e, ''));
        }
    return ((t = Df(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
}
function Vf(e, t, n, r) {
    return ((e = Df(7, e, r, t)).lanes = n), e;
}
function Bf(e, t, n, r) {
    return ((e = Df(22, e, r, t)).elementType = jt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Hf(e, t, n) {
    return ((e = Df(6, e, null, t)).lanes = n), e;
}
function Wf(e, t, n) {
    return (
        ((t = Df(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Qf(e, t, n, r, a) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = xr(0)),
        (this.expirationTimes = xr(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = xr(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
}
function qf(e, t, n, r, a, l, o, i, u) {
    return (
        (e = new Qf(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
        (l = Df(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Bi(l),
        e
    );
}
function Kf(e) {
    if (!e) return Fo;
    e: {
        if (Yn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ft(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (jo(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(ft(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (jo(n)) return Vo(e, n, t);
    }
    return t;
}
function Yf(e, t, n, r, a, l, o, i, u) {
    return (
        ((e = qf(n, r, !0, e, 0, l, 0, i, u)).context = Kf(null)),
        (n = e.current),
        ((l = Wi((r = of()), (a = uf(n)))).callback = null != t ? t : null),
        Qi(n, l, a),
        (e.current.lanes = a),
        Er(e, a, r),
        cf(e, r),
        e
    );
}
function Xf(e, t, n, r) {
    var a = t.current,
        l = of(),
        o = uf(a);
    return (
        (n = Kf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Wi(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Qi(a, t, o)) && (sf(e, a, o, l), qi(e, a, o)),
        o
    );
}
function Gf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Zf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Jf(e, t) {
    Zf(e, t), (e = e.alternate) && Zf(e, t);
}
zc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Io.current) _s = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (_s = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Ms(t), wi();
                                break;
                            case 5:
                                au(t);
                                break;
                            case 1:
                                jo(t.type) && Bo(t);
                                break;
                            case 4:
                                nu(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                Lo(zi, r._currentValue), (r._currentValue = a);
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (Lo(ou, 1 & ou.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? Bs(e, t, n)
                                          : (Lo(ou, 1 & ou.current), null !== (e = Xs(e, t, n)) ? e.sibling : null);
                                Lo(ou, 1 & ou.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ks(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    Lo(ou, ou.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return (t.lanes = 0), Ts(e, t, n);
                        }
                        return Xs(e, t, n);
                    })(e, t, n)
                );
            _s = 0 != (131072 & e.flags);
        }
    else (_s = !1), fi && 0 != (1048576 & t.flags) && oi(t, Jo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ys(e, t), (e = t.pendingProps);
            var a = Do(t, Mo.current);
            Ii(t, n), (a = Su(null, t, r, e, a, n));
            var l = xu();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      jo(r) ? ((l = !0), Bo(t)) : (l = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      Bi(t),
                      (a.updater = cs),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      hs(t, r, e, n),
                      (t = Fs(null, t, r, !0, l, n)))
                    : ((t.tag = 0), fi && l && ii(t), Cs(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ys(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return jf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === Ft) return 11;
                                if (e === At) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = us(r, e)),
                    a)
                ) {
                    case 0:
                        t = Rs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ls(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ps(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ns(null, t, r, us(r.type, e), n);
                        break e;
                }
                throw Error(ft(306, r, ''));
            }
            return t;
        case 0:
            return (r = t.type), (a = t.pendingProps), Rs(e, t, r, (a = t.elementType === r ? a : us(r, a)), n);
        case 1:
            return (r = t.type), (a = t.pendingProps), Ls(e, t, r, (a = t.elementType === r ? a : us(r, a)), n);
        case 3:
            e: {
                if ((Ms(t), null === e)) throw Error(ft(387));
                (r = t.pendingProps), (a = (l = t.memoizedState).element), Hi(e, t), Yi(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated)) {
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        256 & t.flags)
                    ) {
                        t = Is(e, t, r, n, (a = ms(Error(ft(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = Is(e, t, r, n, (a = ms(Error(ft(424)), t)));
                        break e;
                    }
                    for (
                        ci = go(t.stateNode.containerInfo.firstChild),
                            si = t,
                            fi = !0,
                            di = null,
                            n = Ni(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                    if ((wi(), r === a)) {
                        t = Xs(e, t, n);
                        break e;
                    }
                    Cs(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                au(t),
                null === e && gi(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (o = a.children),
                uo(r, a) ? (o = null) : null !== l && uo(r, l) && (t.flags |= 32),
                Os(e, t),
                Cs(e, t, o, n),
                t.child
            );
        case 6:
            return null === e && gi(t), null;
        case 13:
            return Bs(e, t, n);
        case 4:
            return (
                nu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Pi(t, null, r, n)) : Cs(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (a = t.pendingProps), Ps(e, t, r, (a = t.elementType === r ? a : us(r, a)), n);
        case 7:
            return Cs(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return Cs(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (l = t.memoizedProps),
                    (o = a.value),
                    Lo(zi, r._currentValue),
                    (r._currentValue = o),
                    null !== l)
                )
                    if (pl(l.value, o)) {
                        if (l.children === a.children && !Io.current) {
                            t = Xs(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                            var i = l.dependencies;
                            if (null !== i) {
                                o = l.child;
                                for (var u = i.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === l.tag) {
                                            (u = Wi(-1, n & -n)).tag = 2;
                                            var s = l.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (l.lanes |= n),
                                            null !== (u = l.alternate) && (u.lanes |= n),
                                            Mi(l.return, n, t),
                                            (i.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === l.tag) o = l.type === t.type ? null : l.child;
                            else if (18 === l.tag) {
                                if (null === (o = l.return)) throw Error(ft(341));
                                (o.lanes |= n),
                                    null !== (i = o.alternate) && (i.lanes |= n),
                                    Mi(o, n, t),
                                    (o = l.sibling);
                            } else o = l.child;
                            if (null !== o) o.return = l;
                            else
                                for (o = l; null !== o; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (null !== (l = o.sibling)) {
                                        (l.return = o.return), (o = l);
                                        break;
                                    }
                                    o = o.return;
                                }
                            l = o;
                        }
                Cs(e, t, a.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ii(t, n),
                (r = r((a = Ai(a)))),
                (t.flags |= 1),
                Cs(e, t, r, n),
                t.child
            );
        case 14:
            return (a = us((r = t.type), t.pendingProps)), Ns(e, t, r, (a = us(r.type, a)), n);
        case 15:
            return zs(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : us(r, a)),
                Ys(e, t),
                (t.tag = 1),
                jo(r) ? ((e = !0), Bo(t)) : (e = !1),
                Ii(t, n),
                ds(t, r, a),
                hs(t, r, a, n),
                Fs(null, t, r, !0, e, n)
            );
        case 19:
            return Ks(e, t, n);
        case 22:
            return Ts(e, t, n);
    }
    throw Error(ft(156, t.tag));
};
var ed =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function td(e) {
    this._internalRoot = e;
}
function nd(e) {
    this._internalRoot = e;
}
function rd(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function ad(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function ld() {}
function od(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if ('function' == typeof a) {
            var i = a;
            a = function () {
                var e = Gf(o);
                i.call(e);
            };
        }
        Xf(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var l = r;
                    r = function () {
                        var e = Gf(o);
                        l.call(e);
                    };
                }
                var o = Yf(t, r, e, 0, null, !1, 0, '', ld);
                return (
                    (e._reactRootContainer = o), (e[ko] = o.current), Kl(8 === e.nodeType ? e.parentNode : e), vf(), o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var i = r;
                r = function () {
                    var e = Gf(u);
                    i.call(e);
                };
            }
            var u = qf(e, 0, !1, null, 0, !1, 0, '', ld);
            return (
                (e._reactRootContainer = u),
                (e[ko] = u.current),
                Kl(8 === e.nodeType ? e.parentNode : e),
                vf(function () {
                    Xf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Gf(o);
}
(nd.prototype.render = td.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(ft(409));
        Xf(e, t, null, null);
    }),
    (nd.prototype.unmount = td.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                vf(function () {
                    Xf(null, e, null, null);
                }),
                    (t[ko] = null);
            }
        }),
    (nd.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Or();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Ur.length && 0 !== t && t < Ur[n].priority; n++);
            Ur.splice(n, 0, e), 0 === n && Hr(e);
        }
    }),
    (Nr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = yr(t.pendingLanes);
                    0 !== n && (_r(t, 1 | n), cf(t, ar()), 0 == (6 & Fc) && ((Kc = ar() + 500), Yo()));
                }
                break;
            case 13:
                vf(function () {
                    var t = $i(e, 1);
                    if (null !== t) {
                        var n = of();
                        sf(t, e, 1, n);
                    }
                }),
                    Jf(e, 1);
        }
    }),
    (zr = function (e) {
        if (13 === e.tag) {
            var t = $i(e, 134217728);
            if (null !== t) sf(t, e, 134217728, of());
            Jf(e, 134217728);
        }
    }),
    (Tr = function (e) {
        if (13 === e.tag) {
            var t = uf(e),
                n = $i(e, t);
            if (null !== n) sf(n, e, t, of());
            Jf(e, t);
        }
    }),
    (Or = function () {
        return Cr;
    }),
    (Rr = function (e, t) {
        var n = Cr;
        try {
            return (Cr = e), t();
        } finally {
            Cr = n;
        }
    }),
    (zn = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((an(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = No(r);
                            if (!a) throw Error(ft(90));
                            Jt(r), an(r, a);
                        }
                    }
                }
                break;
            case 'textarea':
                dn(e, n);
                break;
            case 'select':
                null != (t = n.value) && sn(e, !!n.multiple, t, !1);
        }
    }),
    (Mn = gf),
    (In = vf);
var id = { usingClientEntryPoint: !1, Events: [Co, Po, No, Ln, Fn, gf] },
    ud = { findFiberByHostInstance: _o, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    sd = {
        bundleType: ud.bundleType,
        version: ud.version,
        rendererPackageName: ud.rendererPackageName,
        rendererConfig: ud.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ct.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Zn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            ud.findFiberByHostInstance ||
            function () {
                return null;
            },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var cd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cd.isDisabled && cd.supportsFiber)
        try {
            (fr = cd.inject(sd)), (dr = cd);
        } catch (vn) {}
}
(lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = id),
    (lt.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!rd(t)) throw Error(ft(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: Nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (lt.createRoot = function (e, t) {
        if (!rd(e)) throw Error(ft(299));
        var n = !1,
            r = '',
            a = ed;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = qf(e, 1, !1, null, 0, n, 0, r, a)),
            (e[ko] = t.current),
            Kl(8 === e.nodeType ? e.parentNode : e),
            new td(t)
        );
    }),
    (lt.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(ft(188));
            throw ((e = Object.keys(e).join(',')), Error(ft(268, e)));
        }
        return (e = null === (e = Zn(t)) ? null : e.stateNode);
    }),
    (lt.flushSync = function (e) {
        return vf(e);
    }),
    (lt.hydrate = function (e, t, n) {
        if (!ad(t)) throw Error(ft(200));
        return od(null, e, t, !0, n);
    }),
    (lt.hydrateRoot = function (e, t, n) {
        if (!rd(e)) throw Error(ft(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            l = '',
            o = ed;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Yf(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
            (e[ko] = t.current),
            Kl(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a);
        return new nd(t);
    }),
    (lt.render = function (e, t, n) {
        if (!ad(t)) throw Error(ft(200));
        return od(null, e, t, !1, n);
    }),
    (lt.unmountComponentAtNode = function (e) {
        if (!ad(e)) throw Error(ft(40));
        return (
            !!e._reactRootContainer &&
            (vf(function () {
                od(null, null, e, !1, function () {
                    (e._reactRootContainer = null), (e[ko] = null);
                });
            }),
            !0)
        );
    }),
    (lt.unstable_batchedUpdates = gf),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!ad(n)) throw Error(ft(200));
        if (null == e || void 0 === e._reactInternals) throw Error(ft(38));
        return od(e, t, n, !1, r);
    }),
    (lt.version = '18.3.1-next-f1338f8080-20240426'),
    (function e() {
        if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
                console.error(t);
            }
    })(),
    (at.exports = lt);
var fd = at.exports,
    dd = fd;
(rt.createRoot = dd.createRoot), (rt.hydrateRoot = dd.hydrateRoot);
const pd = $.createContext(void 0);
function hd({ children: e }) {
    const [t, n] = $.useState(() => He('rem'));
    return (
        $.useEffect(() => {
            function e() {
                n(He('rem'));
            }
            const t = $e(e),
                r = Ve(e);
            return () => {
                t(), r();
            };
        }, []),
        X.jsx(pd.Provider, { value: t, children: e })
    );
}
const md = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    gd = [
        { weight: 1, name: md.small, className: 'mediaSmall', width: 1366, height: 610 },
        { weight: 2, name: md.medium, className: 'mediaMedium', width: 1600, height: 740 },
        { weight: 3, name: md.large, className: 'mediaLarge', width: 1920, height: 920 },
        { weight: 4, name: md.extraLarge, className: 'mediaExtraLarge', width: 2200, height: 1070 },
        { weight: 5, name: md.xxl, className: 'mediaXXL', width: 2560, height: 1310 },
    ];
function vd() {
    const { width: e, height: t } = (function () {
            const e = $.useContext(pd);
            if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
            return e;
        })(),
        n = $.useMemo(
            () =>
                (function (e, t) {
                    const n = gd.reduce(
                            (n, r) => (
                                r.width <= e &&
                                    (n.width.classes.push(r.className),
                                    n.width.names.push(r.name),
                                    (n.width.weight += 1)),
                                r.height <= t &&
                                    (n.height.classes.push(r.className),
                                    n.height.names.push(r.name),
                                    (n.height.weight += 1)),
                                n
                            ),
                            {
                                width: { classes: [], names: [], weight: 0 },
                                height: { classes: [], names: [], weight: 0 },
                            },
                        ),
                        r = n[n.width.weight <= n.height.weight ? 'width' : 'height'],
                        a = r.names[r.names.length - 1] ?? md.extraSmall;
                    return {
                        className: r.classes.join(' '),
                        breakpoint: { name: a, weight: r.weight },
                        breaks: r.names,
                    };
                })(e, t),
            [e, t],
        );
    return {
        mediaClass: n.className,
        breakpoint: n.breakpoint,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: n.breaks,
    };
}
function yd({ children: e, className: t, ...n }) {
    const { mediaClass: r } = vd();
    return X.jsx('div', { className: De(t, 'media-wrapper', r), ...n, children: e });
}
function bd({ children: e, ...t }) {
    return X.jsx(hd, { children: X.jsx(yd, { ...t, children: e }) });
}
const wd = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new Ge();
            return e.set(t, r), r;
        }
        function n(t, n) {
            const r = e.get(t);
            return !!r && r.remove(n);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, r) {
                if (e === Xe) return Ye;
                const a = t(e);
                return a.includes(r) || a.push(r), () => n(e, r);
            },
            unregister: n,
            takeCurrent: function (t) {
                const n = e.get(t);
                if (!n) return;
                const r = n.peek();
                return r || void 0;
            },
        };
    },
    kd = $.createContext(void 0);
function Sd(e) {
    const t = $.useMemo(wd, []);
    $.useEffect(() => {
        function e(e) {
            const n = t.takeCurrent(e.keyCode);
            n && n(e);
        }
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    });
    const n = $.useMemo(() => ({ keydown: { register: t.register, unregister: t.unregister } }), [t]);
    return X.jsx(kd.Provider, { value: n, children: e.children });
}
$.createContext({ mode: 'real' });
var xd = jd(),
    Ed = (e) => Md(e, xd),
    _d = jd();
Ed.write = (e) => Md(e, _d);
var Cd = jd();
Ed.onStart = (e) => Md(e, Cd);
var Pd = jd();
Ed.onFrame = (e) => Md(e, Pd);
var Nd = jd();
Ed.onFinish = (e) => Md(e, Nd);
var zd = [];
Ed.setTimeout = (e, t) => {
    const n = Ed.now() + t,
        r = () => {
            const e = zd.findIndex((e) => e.cancel == r);
            ~e && zd.splice(e, 1), (Ld -= ~e ? 1 : 0);
        },
        a = { time: n, handler: e, cancel: r };
    return zd.splice(Td(n), 0, a), (Ld += 1), Id(), a;
};
var Td = (e) => ~(~zd.findIndex((t) => t.time > e) || ~zd.length);
(Ed.cancel = (e) => {
    Cd.delete(e), Pd.delete(e), Nd.delete(e), xd.delete(e), _d.delete(e);
}),
    (Ed.sync = (e) => {
        (Fd = !0), Ed.batchedUpdates(e), (Fd = !1);
    }),
    (Ed.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            (t = e), Ed.onStart(n);
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                Cd.delete(n), (t = null);
            }),
            r
        );
    });
var Od = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
(Ed.use = (e) => (Od = e)),
    (Ed.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Ed.batchedUpdates = (e) => e()),
    (Ed.catch = console.error),
    (Ed.frameLoop = 'always'),
    (Ed.advance = () => {
        'demand' !== Ed.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Dd();
    });
var Rd = -1,
    Ld = 0,
    Fd = !1;
function Md(e, t) {
    Fd ? (t.delete(e), e(0)) : (t.add(e), Id());
}
function Id() {
    Rd < 0 && ((Rd = 0), 'demand' !== Ed.frameLoop && Od(Ad));
}
function Ad() {
    ~Rd && (Od(Ad), Ed.batchedUpdates(Dd));
}
function Dd() {
    const e = Rd;
    Rd = Ed.now();
    const t = Td(Rd);
    t && (Ud(zd.splice(0, t), (e) => e.handler()), (Ld -= t)),
        Ld ? (Cd.flush(), xd.flush(e ? Math.min(64, Rd - e) : 16.667), Pd.flush(), _d.flush(), Nd.flush()) : (Rd = -1);
}
function jd() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            (Ld += t != e || e.has(n) ? 0 : 1), e.add(n);
        },
        delete: (n) => ((Ld -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Ld -= t.size), Ud(t, (t) => t(n) && e.add(t)), (Ld += e.size), (t = e));
        },
    };
}
function Ud(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Ed.catch(n);
        }
    });
}
var $d = Object.defineProperty,
    Vd = {};
((e, t) => {
    for (var n in t) $d(e, n, { get: t[n], enumerable: !0 });
})(Vd, {
    assign: () => Jd,
    colors: () => Xd,
    createStringInterpolator: () => Qd,
    skipAnimation: () => Gd,
    to: () => qd,
    willAdvance: () => Zd,
});
var Bd = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Hd = (e, t) => e.forEach(t);
function Wd(e, t, n) {
    if (Bd.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Qd,
    qd,
    Kd = (e) => (Bd.und(e) ? [] : Bd.arr(e) ? e : [e]),
    Yd = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Xd = null,
    Gd = !1,
    Zd = function () {},
    Jd = (e) => {
        e.to && (qd = e.to),
            e.now && (Ed.now = e.now),
            void 0 !== e.colors && (Xd = e.colors),
            null != e.skipAnimation && (Gd = e.skipAnimation),
            e.createStringInterpolator && (Qd = e.createStringInterpolator),
            e.requestAnimationFrame && Ed.use(e.requestAnimationFrame),
            e.batchedUpdates && (Ed.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Zd = e.willAdvance),
            e.frameLoop && (Ed.frameLoop = e.frameLoop);
    },
    ep = new Set(),
    tp = [],
    np = [],
    rp = 0,
    ap = {
        get idle() {
            return !ep.size && !tp.length;
        },
        start(e) {
            rp > e.priority ? (ep.add(e), Ed.onStart(lp)) : (op(e), Ed(up));
        },
        advance: up,
        sort(e) {
            if (rp) Ed.onFrame(() => ap.sort(e));
            else {
                const t = tp.indexOf(e);
                ~t && (tp.splice(t, 1), ip(e));
            }
        },
        clear() {
            (tp = []), ep.clear();
        },
    };
function lp() {
    ep.forEach(op), ep.clear(), Ed(up);
}
function op(e) {
    tp.includes(e) || ip(e);
}
function ip(e) {
    tp.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(tp, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function up(e) {
    const t = np;
    for (let n = 0; n < tp.length; n++) {
        const r = tp[n];
        (rp = r.priority), r.idle || (Zd(r), r.advance(e), r.idle || t.push(r));
    }
    return (rp = 0), ((np = tp).length = 0), (tp = t).length > 0;
}
var sp = '[-+]?\\d*\\.?\\d+',
    cp = sp + '%';
function fp(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var dp = new RegExp('rgb' + fp(sp, sp, sp)),
    pp = new RegExp('rgba' + fp(sp, sp, sp, sp)),
    hp = new RegExp('hsl' + fp(sp, cp, cp)),
    mp = new RegExp('hsla' + fp(sp, cp, cp, sp)),
    gp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    vp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    yp = /^#([0-9a-fA-F]{6})$/,
    bp = /^#([0-9a-fA-F]{8})$/;
function wp(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function kp(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        l = wp(a, r, e + 1 / 3),
        o = wp(a, r, e),
        i = wp(a, r, e - 1 / 3);
    return (Math.round(255 * l) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * i) << 8);
}
function Sp(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function xp(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Ep(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function _p(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Cp(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = yp.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Xd && void 0 !== Xd[e]
                ? Xd[e]
                : (t = dp.exec(e))
                  ? ((Sp(t[1]) << 24) | (Sp(t[2]) << 16) | (Sp(t[3]) << 8) | 255) >>> 0
                  : (t = pp.exec(e))
                    ? ((Sp(t[1]) << 24) | (Sp(t[2]) << 16) | (Sp(t[3]) << 8) | Ep(t[4])) >>> 0
                    : (t = gp.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = bp.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = vp.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = hp.exec(e))
                            ? (255 | kp(xp(t[1]), _p(t[2]), _p(t[3]))) >>> 0
                            : (t = mp.exec(e))
                              ? (kp(xp(t[1]), _p(t[2]), _p(t[3])) | Ep(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Pp = (e, t, n) => {
    if (Bd.fun(e)) return e;
    if (Bd.arr(e)) return Pp({ range: e, output: t, extrapolate: n });
    if (Bd.str(e.output[0])) return Qd(e);
    const r = e,
        a = r.output,
        l = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        i = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, l);
        return (function (e, t, n, r, a, l, o, i, u) {
            let s = u ? u(e) : e;
            if (s < t) {
                if ('identity' === o) return s;
                'clamp' === o && (s = t);
            }
            if (s > n) {
                if ('identity' === i) return s;
                'clamp' === i && (s = n);
            }
            if (r === a) return r;
            if (t === n) return e <= t ? r : a;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            (s = l(s)), r === -1 / 0 ? (s = -s) : a === 1 / 0 ? (s += r) : (s = s * (a - r) + r);
            return s;
        })(e, l[t], l[t + 1], a[t], a[t + 1], u, o, i, r.map);
    };
};
var Np = Symbol.for('FluidValue.get'),
    zp = Symbol.for('FluidValue.observers'),
    Tp = (e) => Boolean(e && e[Np]),
    Op = (e) => (e && e[Np] ? e[Np]() : e);
function Rp(e, t) {
    const n = e[zp];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Lp = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Fp(this, e);
        }
    },
    Fp = (e, t) => Dp(e, Np, t);
function Mp(e, t) {
    if (e[Np]) {
        let n = e[zp];
        n || Dp(e, zp, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
    }
    return t;
}
function Ip(e, t) {
    const n = e[zp];
    if (n && n.has(t)) {
        const r = n.size - 1;
        r ? n.delete(t) : (e[zp] = null), e.observerRemoved && e.observerRemoved(r, t);
    }
}
var Ap,
    Dp = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    jp = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Up = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    $p = new RegExp(`(${jp.source})(%|[a-z]+)`, 'i'),
    Vp = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Bp = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Hp = (e) => {
        const [t, n] = Wp(e);
        if (!t || Yd()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Bp.test(n) ? Hp(n) : n || e;
    },
    Wp = (e) => {
        const t = Bp.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Qp = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    qp = (e) => {
        Ap || (Ap = Xd ? new RegExp(`(${Object.keys(Xd).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Op(e).replace(Bp, Hp).replace(Up, Cp).replace(Ap, Cp)),
            n = t.map((e) => e.match(jp).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Pp({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !$p.test(t[0]) && (null == (n = t.find((e) => $p.test(e))) ? void 0 : n.replace(jp, ''));
            let l = 0;
            return t[0].replace(jp, () => `${r[l++](e)}${a || ''}`).replace(Vp, Qp);
        };
    },
    Kp = 'react-spring: ',
    Yp = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Kp}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Xp = Yp(console.warn);
function Gp(e) {
    return Bd.str(e) && ('#' == e[0] || /\d/.test(e) || (!Yd() && Bp.test(e)) || e in (Xd || {}));
}
Yp(console.warn);
var Zp = Yd() ? $.useEffect : $.useLayoutEffect;
function Jp() {
    const e = $.useState()[1],
        t = (() => {
            const e = $.useRef(!1);
            return (
                Zp(
                    () => (
                        (e.current = !0),
                        () => {
                            e.current = !1;
                        }
                    ),
                    [],
                ),
                e
            );
        })();
    return () => {
        t.current && e(Math.random());
    };
}
var eh = [],
    th = Symbol.for('Animated:node'),
    nh = (e) => e && e[th],
    rh = (e, t) => {
        return (n = e), (r = th), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 });
        var n, r, a;
    },
    ah = (e) => e && e[th] && e[th].getPayload(),
    lh = class {
        constructor() {
            rh(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    oh = class extends lh {
        constructor(e) {
            super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Bd.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
            return new oh(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Bd.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            (this.done = !1),
                Bd.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null));
        }
    },
    ih = class extends oh {
        constructor(e) {
            super(0), (this._string = null), (this._toString = Pp({ output: [e, e] }));
        }
        static create(e) {
            return new ih(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Bd.str(e)) {
                if (e == this._string) return !1;
                (this._string = e), (this._value = 1);
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            e && (this._toString = Pp({ output: [this.getValue(), e] })), (this._value = 0), super.reset();
        }
    },
    uh = { dependencies: null },
    sh = class extends lh {
        constructor(e) {
            super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
            const t = {};
            return (
                Wd(this.source, (n, r) => {
                    var a;
                    (a = n) && a[th] === a ? (t[r] = n.getValue(e)) : Tp(n) ? (t[r] = Op(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
            this.payload && Hd(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return Wd(e, this._addToPayload, t), Array.from(t);
            }
        }
        _addToPayload(e) {
            uh.dependencies && Tp(e) && uh.dependencies.add(e);
            const t = ah(e);
            t && Hd(t, (e) => this.add(e));
        }
    },
    ch = class extends sh {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new ch(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(fh)), !0);
        }
    };
function fh(e) {
    return (Gp(e) ? ih : oh).create(e);
}
var dh = (e, t) => {
        const n = !Bd.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return $.forwardRef((r, a) => {
            const l = $.useRef(null),
                o =
                    n &&
                    $.useCallback(
                        (e) => {
                            l.current = (function (e, t) {
                                e && (Bd.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [i, u] = (function (e, t) {
                    const n = new Set();
                    (uh.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) });
                    return (e = new sh(e)), (uh.dependencies = null), [e, n];
                })(r, t),
                s = Jp(),
                c = () => {
                    const e = l.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && s();
                },
                f = new ph(c, u),
                d = $.useRef();
            var p;
            Zp(
                () => (
                    (d.current = f),
                    Hd(u, (e) => Mp(e, f)),
                    () => {
                        d.current && (Hd(d.current.deps, (e) => Ip(e, d.current)), Ed.cancel(d.current.update));
                    }
                ),
            ),
                $.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    Hd(e.deps, (t) => Ip(t, e));
                }),
                $.useEffect(p, eh);
            const h = t.getComponentProps(i.getValue());
            return $.createElement(e, { ...h, ref: o });
        });
    },
    ph = class {
        constructor(e, t) {
            (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
            'change' == e.type && Ed.write(this.update);
        }
    };
var hh,
    mh,
    gh = Symbol.for('AnimatedComponent'),
    vh = (e) => (Bd.str(e) ? e : e && Bd.str(e.displayName) ? e.displayName : (Bd.fun(e) && e.name) || null),
    yh = (e) => e instanceof wh,
    bh = 1,
    wh = class extends Lp {
        constructor() {
            super(...arguments), (this.id = bh++), (this._priority = 0);
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = nh(this);
            return e && e.getValue();
        }
        to(...e) {
            return Vd.to(this, e);
        }
        interpolate(...e) {
            return Xp(`${Kp}The "interpolate" function is deprecated in v9 (use "to" instead)`), Vd.to(this, e);
        }
        toJSON() {
            return this.get();
        }
        observerAdded(e) {
            1 == e && this._attach();
        }
        observerRemoved(e) {
            0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
            Rp(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            this.idle || ap.sort(this), Rp(this, { type: 'priority', parent: this, priority: e });
        }
    },
    kh = ({ children: e, ...t }) => {
        const n = $.useContext(Sh),
            r = t.pause || !!n.pause,
            a = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = $.useState(() => ({ inputs: t, result: e() })),
                r = $.useRef(),
                a = r.current;
            let l = a;
            l
                ? Boolean(
                      t &&
                          l.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, l.inputs),
                  ) || (l = { inputs: t, result: e() })
                : (l = n);
            return (
                $.useEffect(() => {
                    (r.current = l), a == n && (n.inputs = n.result = void 0);
                }, [l]),
                l.result
            );
        })(() => ({ pause: r, immediate: a }), [r, a]);
        const { Provider: l } = Sh;
        return $.createElement(l, { value: t }, e);
    },
    Sh =
        ((hh = kh),
        (mh = {}),
        Object.assign(hh, $.createContext(mh)),
        (hh.Provider._context = hh),
        (hh.Consumer._context = hh),
        hh);
(kh.Provider = Sh.Provider), (kh.Consumer = Sh.Consumer);
var xh = class extends wh {
    constructor(e, t) {
        super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Pp(...t));
        const n = this._get(),
            r = (function (e) {
                const t = nh(e);
                return t ? t.constructor : Bd.arr(e) ? ch : Gp(e) ? ih : oh;
            })(n);
        rh(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (function (e, t) {
            if (Bd.arr(e)) {
                if (!Bd.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (nh(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && _h(this._active) && Ch(this);
    }
    _get() {
        const e = Bd.arr(this.source) ? this.source.map(Op) : Kd(Op(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !_h(this._active) &&
            ((this.idle = !1),
            Hd(ah(this), (e) => {
                e.done = !1;
            }),
            Vd.skipAnimation ? (Ed.batchedUpdates(() => this.advance()), Ch(this)) : ap.start(this));
    }
    _attach() {
        let e = 1;
        Hd(Kd(this.source), (t) => {
            Tp(t) && Mp(t, this), yh(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
        }),
            (this.priority = e),
            this._start();
    }
    _detach() {
        Hd(Kd(this.source), (e) => {
            Tp(e) && Ip(e, this);
        }),
            this._active.clear(),
            Ch(this);
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Kd(this.source).reduce((e, t) => Math.max(e, (yh(t) ? t.priority : 0) + 1), 0));
    }
};
function Eh(e) {
    return !1 !== e.idle;
}
function _h(e) {
    return !e.size || Array.from(e).every(Eh);
}
function Ch(e) {
    e.idle ||
        ((e.idle = !0),
        Hd(ah(e), (e) => {
            e.done = !0;
        }),
        Rp(e, { type: 'idle', parent: e }));
}
Vd.assign({ createStringInterpolator: qp, to: (e, t) => new xh(e, t) });
var Ph = /^--/;
function Nh(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Ph.test(e) || (Th.hasOwnProperty(e) && Th[e])
          ? ('' + t).trim()
          : t + 'px';
}
var zh = {};
var Th = {
        animationIterationCount: !0,
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
        strokeWidth: !0,
    },
    Oh = ['Webkit', 'Ms', 'Moz', 'O'];
Th = Object.keys(Th).reduce(
    (e, t) => (Oh.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Th,
);
var Rh = /^(matrix|translate|scale|rotate|skew)/,
    Lh = /^(translate)/,
    Fh = /^(rotate|skew)/,
    Mh = (e, t) => (Bd.num(e) && 0 !== e ? e + t : e),
    Ih = (e, t) => (Bd.arr(e) ? e.every((e) => Ih(e, t)) : Bd.num(e) ? e === t : parseFloat(e) === t),
    Ah = class extends sh {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                l = [];
            (e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                l.push((e) => [`translate3d(${e.map((e) => Mh(e, 'px')).join(',')})`, Ih(e, 0)])),
                Wd(r, (e, t) => {
                    if ('transform' === t) a.push([e || '']), l.push((e) => [e, '' === e]);
                    else if (Rh.test(t)) {
                        if ((delete r[t], Bd.und(e))) return;
                        const n = Lh.test(t) ? 'px' : Fh.test(t) ? 'deg' : '';
                        a.push(Kd(e)),
                            l.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${Mh(a, n)})`, Ih(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Mh(e, n)).join(',')})`,
                                          Ih(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            );
                    }
                }),
                a.length && (r.transform = new Dh(a, l)),
                super(r);
        }
    },
    Dh = class extends Lp {
        constructor(e, t) {
            super(), (this.inputs = e), (this.transforms = t), (this._value = null);
        }
        get() {
            return this._value || (this._value = this._get());
        }
        _get() {
            let e = '',
                t = !0;
            return (
                Hd(this.inputs, (n, r) => {
                    const a = Op(n[0]),
                        [l, o] = this.transforms[r](Bd.arr(a) ? a : n.map(Op));
                    (e += ' ' + l), (t = t && o);
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Hd(this.inputs, (e) => Hd(e, (e) => Tp(e) && Mp(e, this)));
        }
        observerRemoved(e) {
            0 == e && Hd(this.inputs, (e) => Hd(e, (e) => Tp(e) && Ip(e, this)));
        }
        eventObserved(e) {
            'change' == e.type && (this._value = null), Rp(this, e);
        }
    };
Vd.assign({
    batchedUpdates: fd.unstable_batchedUpdates,
    createStringInterpolator: qp,
    colors: {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199,
    },
}),
    ((
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new sh(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            l = (e) => {
                const t = vh(e) || 'Anonymous';
                return (
                    ((e = Bd.str(e) ? l[e] || (l[e] = dh(e, a)) : e[gh] || (e[gh] = dh(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Wd(e, (t, n) => {
            Bd.arr(e) && (n = vh(t)), (l[n] = l(t));
        });
    })(
        [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
        ],
        {
            applyAnimatedValues: function (e, t) {
                if (!e.nodeType || !e.setAttribute) return !1;
                const n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
                    { style: r, children: a, scrollTop: l, scrollLeft: o, viewBox: i, ...u } = t,
                    s = Object.values(u),
                    c = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : zh[t] || (zh[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = Nh(f, r[f]);
                        Ph.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== l && (e.scrollTop = l),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== i && e.setAttribute('viewBox', i);
            },
            createAnimatedStyle: (e) => new Ah(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    );
$.forwardRef(function (e, t) {
    const n = $.useRef(null);
    return (
        $.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return Ke.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        X.jsx('div', {
            ...e,
            ref:
                ((r = [t, n]),
                (e) => {
                    r.forEach((t) =>
                        ((e, t) => {
                            e && ('function' == typeof e ? e(t) : (e.current = t));
                        })(t, e),
                    );
                }),
        })
    );
    var r;
}),
    Re.register({
        strings: ve(() => new et()).singleton(),
        images: ve(() => new Me(window.R.images.gui.maps.icons)).singleton(),
        atlases: ve(() => new Me(window.R.atlases)).singleton(),
        videos: ye(tt).singleton(),
        views: ye(nt).singleton(),
        sounds: ye(Ze).singleton(),
    });
const jh = { root: '_root_1f7gl_1', card: '_card_1f7gl_7', 'read-the-docs': '_read-the-docs_1f7gl_11' };
function Uh() {
    const [e, t] = $.useState(0);
    return X.jsxs('div', {
        className: jh.base,
        children: [
            X.jsx('div', { children: 'Template' }),
            X.jsxs('button', { onClick: () => t((e) => e + 1), children: ['count is ', e, '!'] }),
        ],
    });
}
!(function (e, { root: t = document.getElementById('root'), withMedia: n = !0 } = {}) {
    var r;
    const a = (null == (r = null == window ? void 0 : window.engine) ? void 0 : r.whenReady) ?? Promise.resolve();
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
            var a;
            if (n < 0)
                return (
                    console.warn(
                        'Depth limit has been reached.\n                You can change the limit with second argument.\n                Use _showModel(model, { depth = <number> }) for this. 16 is default.',
                    ),
                    'Depth limit has been reached'
                );
            if (null === t) return null;
            switch (typeof t) {
                case 'number':
                case 'string':
                case 'boolean':
                case 'bigint':
                case 'undefined':
                    return t;
                case 'function':
                    return 'function';
                case 'object': {
                    const l = { depth: n - 1, convertArrays: r },
                        o = (null == (a = t.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case o.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(l.convertArrays ? t.value : t, l));
                        case 'UNKNOWN' === o:
                            return 'UNKNOWN_TYPE';
                        case o.includes('ViewModel'):
                        default: {
                            const n = {};
                            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r], l));
                            return n;
                        }
                    }
                }
                default:
                    return `Unknown: ${String(t)}`;
            }
        };
        window._showModel = e;
    })();
    const l = n ? bd : V.Fragment;
    a.then(() => {
        rt.createRoot(t).render(X.jsx(l, { children: X.jsx(Sd, { children: e }) }));
    });
})(X.jsx(Uh, {}));
