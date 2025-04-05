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
var L = /\/+/g;
function F(e, t) {
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
function M(e, t, n, r, a) {
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
            (e = '' === r ? '.' + F(o, 0) : r),
            C(a)
                ? ((n = ''),
                  null != e && (n = e.replace(L, '$&/') + '/'),
                  M(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a &&
                  (O(a) &&
                      (a = (function (e, t) {
                          return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(a, n + (!a.key || (o && o.key === a.key) ? '' : ('' + a.key).replace(L, '$&/') + '/') + e)),
                  t.push(a)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), C(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + F((l = e[s]), s);
            o += M(l, t, n, c, a);
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
        for (e = c.call(e), s = 0; !(l = e.next()).done; ) o += M((l = l.value), t, n, (c = r + F(l, s++)), a);
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
function I(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        M(e, r, '', '', function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function A(e) {
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
var D = { current: null },
    j = { transition: null },
    U = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: j, ReactCurrentOwner: N };
function $() {
    throw Error('act(...) is not supported in production builds of React.');
}
(o.Children = {
    map: I,
    forEach: function (e, t, n) {
        I(
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
            I(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            I(e, function (e) {
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
    (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (o.act = $),
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
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: A };
    }),
    (o.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (o.startTransition = function (e) {
        var t = j.transition;
        j.transition = {};
        try {
            e();
        } finally {
            j.transition = t;
        }
    }),
    (o.unstable_act = $),
    (o.useCallback = function (e, t) {
        return D.current.useCallback(e, t);
    }),
    (o.useContext = function (e) {
        return D.current.useContext(e);
    }),
    (o.useDebugValue = function () {}),
    (o.useDeferredValue = function (e) {
        return D.current.useDeferredValue(e);
    }),
    (o.useEffect = function (e, t) {
        return D.current.useEffect(e, t);
    }),
    (o.useId = function () {
        return D.current.useId();
    }),
    (o.useImperativeHandle = function (e, t, n) {
        return D.current.useImperativeHandle(e, t, n);
    }),
    (o.useInsertionEffect = function (e, t) {
        return D.current.useInsertionEffect(e, t);
    }),
    (o.useLayoutEffect = function (e, t) {
        return D.current.useLayoutEffect(e, t);
    }),
    (o.useMemo = function (e, t) {
        return D.current.useMemo(e, t);
    }),
    (o.useReducer = function (e, t, n) {
        return D.current.useReducer(e, t, n);
    }),
    (o.useRef = function (e) {
        return D.current.useRef(e);
    }),
    (o.useState = function (e) {
        return D.current.useState(e);
    }),
    (o.useSyncExternalStore = function (e, t, n) {
        return D.current.useSyncExternalStore(e, t, n);
    }),
    (o.useTransition = function () {
        return D.current.useTransition();
    }),
    (o.version = '18.3.1'),
    (l.exports = o);
var V = l.exports;
const B = n(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H = V,
    W = Symbol.for('react.element'),
    Q = Symbol.for('react.fragment'),
    q = Object.prototype.hasOwnProperty,
    K = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Y = { key: !0, ref: !0, __self: !0, __source: !0 };
function G(e, t, n) {
    var r,
        a = {},
        l = null,
        o = null;
    for (r in (void 0 !== n && (l = '' + n), void 0 !== t.key && (l = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        q.call(t, r) && !Y.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: W, type: e, key: l, ref: o, props: a, _owner: K.current };
}
(a.Fragment = Q), (a.jsx = G), (a.jsxs = G), (r.exports = a);
var X = r.exports,
    Z = function (e, t) {
        return (Z =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function J(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    Z(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var ee = function () {
    return (
        (ee =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }),
        ee.apply(this, arguments)
    );
};
function te(e, t) {
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
function ne(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, a = 0, l = t.length; a < l; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var re = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return J(t, e), t;
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
            return J(t, e), t;
        })(Error),
    ),
    ae = (function (e) {
        function t(t, n, r, a) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(a, '.')) ||
                this
            );
        }
        return (
            J(t, e),
            (t.assert = function (e, n, r, a, l) {
                if (!e) throw new t(n, r, a, l);
                return e;
            }),
            t
        );
    })(re),
    le = (function (e) {
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
        return J(t, e), t;
    })(re),
    oe = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                a = "Could not register '".concat(r, "'.");
            return n && (a += ' '.concat(n)), e.call(this, a) || this;
        }
        return J(t, e), t;
    })(re),
    ie = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ue = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function se(e) {
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
            if (ce(u)) n++;
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
                        if (he(u)) return s(), r;
                        n++;
                }
        }
    }
    function s() {
        for (var t, l = e.charAt(n), o = ++n; (t = e.charAt(n)), pe.test(t); ) n++;
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
                if (ce(a)) {
                    n++;
                    continue;
                }
                if (fe(a)) {
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
function ce(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function fe(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
var de = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    pe = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function he(e) {
    return de.test(e);
}
function me(e) {
    if ('function' != typeof e) return !1;
    var t = se(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function ge(e) {
    return 'function' == typeof e;
}
var ve = Symbol('Awilix Resolver Config');
function ye(e, t) {
    if (!ge(e)) throw new ae('asFunction', 'fn', 'function', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ve]);
    var n = Ce(e);
    return ke(we(ee({ resolve: n }, t)));
}
function be(e, t) {
    if (!ge(e)) throw new ae('asClass', 'Type', 'class', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ve]);
    var n = Ce(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return ke(we(ee(ee({}, t), { resolve: n })));
}
function we(e) {
    function t(e) {
        return we(ee(ee({}, this), { lifetime: e }));
    }
    function n(e) {
        return we(ee(ee({}, this), { injectionMode: e }));
    }
    return Ee(e, {
        setLifetime: t,
        inject: function (e) {
            return we(ee(ee({}, this), { injector: e }));
        },
        transient: Se(t, ue.TRANSIENT),
        scoped: Se(t, ue.SCOPED),
        singleton: Se(t, ue.SINGLETON),
        setInjectionMode: n,
        proxy: Se(n, ie.PROXY),
        classic: Se(n, ie.CLASSIC),
    });
}
function ke(e) {
    return Ee(e, {
        disposer: function (e) {
            return ke(ee(ee({}, this), { dispose: e }));
        },
    });
}
function Se(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function xe(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, ne([{}, e], t, !1));
}
function Ee(e, t) {
    return ee(ee({}, e), t);
}
function _e(e, t) {
    var n,
        r = t(e),
        a = ((n = ne(ne([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, a, l, o, i, u, s;
                          return te(this, function (c) {
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
function Ce(e, t) {
    t || (t = e);
    var n = Pe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ie.PROXY) !== ie.CLASSIC) {
            var r = this.injector ? _e(t, this.injector) : t.cradle;
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
function Pe(e) {
    var t = (function (e) {
        var t = se(e),
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
        return 'function' == typeof n && n !== Function.prototype ? Pe(n) : [];
    }
    return t;
}
var Ne = Symbol('familyTree'),
    ze = Symbol('rollUpRegistrations'),
    Te = 'AwilixContainerCradle';
function Oe(e) {
    return void 0 === e && (e = {}), Re(e);
}
function Re(e, t, n) {
    var r;
    e = ee({ injectionMode: ie.PROXY, strict: !1 }, e);
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
                    return Re(e, i, a);
                },
                register: function (n, r) {
                    for (
                        var a = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            o = ne(ne([], Object.keys(a), !0), Object.getOwnPropertySymbols(a), !0),
                            u = 0,
                            s = o;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            f = a[c];
                        if (e.strict && f.lifetime === ue.SINGLETON && t)
                            throw new oe(c, 'Cannot register a singleton on a scoped container.');
                        l[c] = f;
                    }
                    return i;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(i);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        ae.assert(e, n, r, 'a registration, function or class', e),
                        ae.assert('function' == typeof e, n, r, 'a function or class', e),
                        (me(e) ? be(e, t) : ye(e, t)).resolve(i)
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
            })[ze] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [i].concat(t[Ne]) : [i];
    i[Ne] = u;
    var s,
        c = (s = u)[s.length - 1];
    return i;
    function f() {
        return ee(ee({}, t && t[ze]()), l);
    }
    function d() {
        var e, t, n, r, a;
        return te(this, function (l) {
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
                throw new le(t, a, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Oe;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Te;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new le(t, a);
            }
            var l = r.lifetime || ue.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = a.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = l),
                        ((t = r) === ue.SINGLETON && n !== ue.SINGLETON) || (t === ue.SCOPED && n === ue.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new le(
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
                case ue.TRANSIENT:
                    s = r.resolve(i);
                    break;
                case ue.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : i)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ue.SCOPED:
                    if (void 0 !== (u = i.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    (s = r.resolve(i)), i.cache.set(t, { resolver: r, value: s });
                    break;
                default:
                    throw new le(t, a, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return a.pop(), s;
        } catch (f) {
            throw ((a.length = 0), f);
        }
    }
}
const Le = Oe();
function Fe(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function Me(e, t) {
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
class Ie {
    constructor(e, t) {
        (this.root = e), (this.prefix = t);
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Fe(this.prefix, e),
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
        return void 0 === a ? ('silent' !== n && Me(`Resource not found: ${r}`, n), t()) : a;
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
var Ae,
    De = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (Ae = De),
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
        Ae.exports ? ((t.default = t), (Ae.exports = t)) : (window.classNames = t);
    })();
const je = n(De.exports);
function Ue(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function $e(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const Ve = Ue('clientResized'),
    Be = Ue('self.onScaleUpdated'),
    He = { down: Ue('mousedown'), up: Ue('mouseup'), move: Ue('mousemove') };
function We(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && $e(!1);
    }
    function n() {
        e.enabled && $e(!0);
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
            : $e(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const a = `mouse${t}`,
                        l = He[t]((e) => n([e, 'outside']));
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
const Qe = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    qe = {
        ...Object.keys(Qe).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(Qe[t])),
                e
            ),
            {},
        ),
        sound: (e) => {
            engine.call('PlaySound', e);
        },
    },
    Ke = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    Ye = {
        onTextureFrozen: Ue('self.onTextureFrozen'),
        onTextureReady: Ue('self.onTextureReady'),
        onDomBuilt: Ue('self.onDomBuilt'),
        onLoaded: Ue('self.onLoaded'),
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
        onDisplayChanged: Ue('self.onShowingStatusChanged'),
        onFocusUpdated: Ue('self.onFocusChanged'),
        children: {
            onAdded: Ue('children.onAdded'),
            onLoaded: Ue('children.onLoaded'),
            onRemoved: Ue('children.onRemoved'),
            onAttached: Ue('children.onAttached'),
            onTextureReady: Ue('children.onTextureReady'),
            onRequestPosition: Ue('children.requestPosition'),
        },
    };
function Ge() {
    return !1;
}
Object.keys(Ke).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === Ke[t]), e), {});
const Xe = -1;
['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
class Ze {
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
class Je {
    play(e) {
        const t = window.R.sounds[e];
        'function' == typeof t ? qe.sound(t.apply(window.R.sounds)) : Me(`Sound not found: ${e}`, 'warn');
    }
}
function et(e) {
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
class tt {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Fe(this.prefix, e),
            a = et(r);
        return void 0 === a ? ('silent' !== n && Me(`Resource not found: ${r}`, n), t()) : a;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = Fe(this.prefix, e),
            n = et(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
}
class nt {
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
        return void 0 === r ? ('silent' !== n && Me(`Resource not found: ${e}`, n), t()) : r;
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
class rt {
    read(e) {
        return e(window.R.views);
    }
}
var at = {},
    lt = { exports: {} },
    ot = {},
    it = { exports: {} },
    ut = {};
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
})(ut),
    (it.exports = ut);
var st = it.exports,
    ct = V,
    ft = st;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function dt(e) {
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
var pt = new Set(),
    ht = {};
function mt(e, t) {
    gt(e, t), gt(e + 'Capture', t);
}
function gt(e, t) {
    for (ht[e] = t, e = 0; e < t.length; e++) pt.add(t[e]);
}
var vt = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    yt = Object.prototype.hasOwnProperty,
    bt =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    wt = {},
    kt = {};
function St(e, t, n, r, a, l, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
}
var xt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        xt[e] = new St(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        xt[t] = new St(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        xt[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        xt[e] = new St(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            xt[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        xt[e] = new St(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        xt[e] = new St(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        xt[e] = new St(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        xt[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
var Et = /[\-:]([a-z])/g;
function _t(e) {
    return e[1].toUpperCase();
}
function Ct(e, t, n, r) {
    var a = xt.hasOwnProperty(t) ? xt[t] : null;
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
                  return !!yt.call(kt, e) || (!yt.call(wt, e) && (bt.test(e) ? (kt[e] = !0) : ((wt[e] = !0), !1)));
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
        var t = e.replace(Et, _t);
        xt[t] = new St(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Et, _t);
        xt[t] = new St(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Et, _t);
        xt[t] = new St(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        xt[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (xt.xlinkHref = new St('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        xt[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
var Pt = ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Nt = Symbol.for('react.element'),
    zt = Symbol.for('react.portal'),
    Tt = Symbol.for('react.fragment'),
    Ot = Symbol.for('react.strict_mode'),
    Rt = Symbol.for('react.profiler'),
    Lt = Symbol.for('react.provider'),
    Ft = Symbol.for('react.context'),
    Mt = Symbol.for('react.forward_ref'),
    It = Symbol.for('react.suspense'),
    At = Symbol.for('react.suspense_list'),
    Dt = Symbol.for('react.memo'),
    jt = Symbol.for('react.lazy'),
    Ut = Symbol.for('react.offscreen'),
    $t = Symbol.iterator;
function Vt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = ($t && e[$t]) || e['@@iterator'])
          ? e
          : null;
}
var Bt,
    Ht = Object.assign;
function Wt(e) {
    if (void 0 === Bt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Bt = (t && t[1]) || '';
        }
    return '\n' + Bt + e;
}
var Qt = !1;
function qt(e, t) {
    if (!e || Qt) return '';
    Qt = !0;
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
        (Qt = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Wt(e) : '';
}
function Kt(e) {
    switch (e.tag) {
        case 5:
            return Wt(e.type);
        case 16:
            return Wt('Lazy');
        case 13:
            return Wt('Suspense');
        case 19:
            return Wt('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = qt(e.type, !1));
        case 11:
            return (e = qt(e.type.render, !1));
        case 1:
            return (e = qt(e.type, !0));
        default:
            return '';
    }
}
function Yt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case Tt:
            return 'Fragment';
        case zt:
            return 'Portal';
        case Rt:
            return 'Profiler';
        case Ot:
            return 'StrictMode';
        case It:
            return 'Suspense';
        case At:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case Ft:
                return (e.displayName || 'Context') + '.Consumer';
            case Lt:
                return (e._context.displayName || 'Context') + '.Provider';
            case Mt:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case Dt:
                return null !== (t = e.displayName || null) ? t : Yt(e.type) || 'Memo';
            case jt:
                (t = e._payload), (e = e._init);
                try {
                    return Yt(e(t));
                } catch (n) {}
        }
    return null;
}
function Gt(e) {
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
            return Yt(t);
        case 8:
            return t === Ot ? 'StrictMode' : 'Mode';
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
function Zt(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Jt(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Zt(e) ? 'checked' : 'value',
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
function en(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return e && (r = Zt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function tn(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function nn(e, t) {
    var n = t.checked;
    return Ht({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function rn(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Xt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        });
}
function an(e, t) {
    null != (t = t.checked) && Ct(e, 'checked', t, !1);
}
function ln(e, t) {
    an(e, t);
    var n = Xt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    t.hasOwnProperty('value')
        ? un(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && un(e, t.type, Xt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function on(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
}
function un(e, t, n) {
    ('number' === t && tn(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var sn = Array.isArray;
function cn(e, t, n, r) {
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
function fn(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(dt(91));
    return Ht({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function dn(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(dt(92));
            if (sn(n)) {
                if (1 < n.length) throw Error(dt(93));
                n = n[0];
            }
            t = n;
        }
        null == t && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Xt(n) };
}
function pn(e, t) {
    var n = Xt(t.value),
        r = Xt(t.defaultValue);
    null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
}
function hn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function mn(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function gn(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? mn(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var vn,
    yn,
    bn =
        ((yn = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (vn = vn || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = vn.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return yn(e, t);
                  });
              }
            : yn);
function wn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var kn = {
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
    Sn = ['Webkit', 'ms', 'Moz', 'O'];
function xn(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (kn.hasOwnProperty(e) && kn[e])
          ? ('' + t).trim()
          : t + 'px';
}
function En(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = xn(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
        }
}
Object.keys(kn).forEach(function (e) {
    Sn.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
    });
});
var _n = Ht(
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
function Cn(e, t) {
    if (t) {
        if (_n[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(dt(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(dt(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(dt(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(dt(62));
    }
}
function Pn(e, t) {
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
var Nn = null;
function zn(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var Tn = null,
    On = null,
    Rn = null;
function Ln(e) {
    if ((e = Po(e))) {
        if ('function' != typeof Tn) throw Error(dt(280));
        var t = e.stateNode;
        t && ((t = zo(t)), Tn(e.stateNode, e.type, t));
    }
}
function Fn(e) {
    On ? (Rn ? Rn.push(e) : (Rn = [e])) : (On = e);
}
function Mn() {
    if (On) {
        var e = On,
            t = Rn;
        if (((Rn = On = null), Ln(e), t)) for (e = 0; e < t.length; e++) Ln(t[e]);
    }
}
function In(e, t) {
    return e(t);
}
function An() {}
var Dn = !1;
function jn(e, t, n) {
    if (Dn) return e(t, n);
    Dn = !0;
    try {
        return In(e, t, n);
    } finally {
        (Dn = !1), (null !== On || null !== Rn) && (An(), Mn());
    }
}
function Un(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = zo(n);
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
    if (n && 'function' != typeof n) throw Error(dt(231, t, typeof n));
    return n;
}
var $n = !1;
if (vt)
    try {
        var Vn = {};
        Object.defineProperty(Vn, 'passive', {
            get: function () {
                $n = !0;
            },
        }),
            window.addEventListener('test', Vn, Vn),
            window.removeEventListener('test', Vn, Vn);
    } catch (yn) {
        $n = !1;
    }
function Bn(e, t, n, r, a, l, o, i, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var Hn = !1,
    Wn = null,
    Qn = !1,
    qn = null,
    Kn = {
        onError: function (e) {
            (Hn = !0), (Wn = e);
        },
    };
function Yn(e, t, n, r, a, l, o, i, u) {
    (Hn = !1), (Wn = null), Bn.apply(Kn, arguments);
}
function Gn(e) {
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
function Zn(e) {
    if (Gn(e) !== e) throw Error(dt(188));
}
function Jn(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Gn(e))) throw Error(dt(188));
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
                        if (l === n) return Zn(a), e;
                        if (l === r) return Zn(a), t;
                        l = l.sibling;
                    }
                    throw Error(dt(188));
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
                        if (!o) throw Error(dt(189));
                    }
                }
                if (n.alternate !== r) throw Error(dt(190));
            }
            if (3 !== n.tag) throw Error(dt(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? er(e)
        : null;
}
function er(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = er(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var tr = ft.unstable_scheduleCallback,
    nr = ft.unstable_cancelCallback,
    rr = ft.unstable_shouldYield,
    ar = ft.unstable_requestPaint,
    lr = ft.unstable_now,
    or = ft.unstable_getCurrentPriorityLevel,
    ir = ft.unstable_ImmediatePriority,
    ur = ft.unstable_UserBlockingPriority,
    sr = ft.unstable_NormalPriority,
    cr = ft.unstable_LowPriority,
    fr = ft.unstable_IdlePriority,
    dr = null,
    pr = null;
var hr = Math.clz32
        ? Math.clz32
        : function (e) {
              return (e >>>= 0), 0 === e ? 32 : (31 - ((mr(e) / gr) | 0)) | 0;
          },
    mr = Math.log,
    gr = Math.LN2;
var vr = 64,
    yr = 4194304;
function br(e) {
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
function wr(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var i = o & ~a;
        0 !== i ? (r = br(i)) : 0 !== (l &= o) && (r = br(l));
    } else 0 !== (o = n & ~a) ? (r = br(o)) : 0 !== l && (r = br(l));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - hr(t))), (r |= e[n]), (t &= ~a);
    return r;
}
function kr(e, t) {
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
function Sr(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function xr() {
    var e = vr;
    return 0 == (4194240 & (vr <<= 1)) && (vr = 64), e;
}
function Er(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function _r(e, t, n) {
    (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - hr(t))] = n);
}
function Cr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - hr(n),
            a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
}
var Pr = 0;
function Nr(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var zr,
    Tr,
    Or,
    Rr,
    Lr,
    Fr = !1,
    Mr = [],
    Ir = null,
    Ar = null,
    Dr = null,
    jr = new Map(),
    Ur = new Map(),
    $r = [],
    Vr =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function Br(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Ir = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Ar = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Dr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            jr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Ur.delete(t.pointerId);
    }
}
function Hr(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }),
          null !== t && null !== (t = Po(t)) && Tr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function Wr(e) {
    var t = Co(e.target);
    if (null !== t) {
        var n = Gn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Xn(n)))
                    return (
                        (e.blockedOn = t),
                        void Lr(e.priority, function () {
                            Or(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Qr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Po(n)) && Tr(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (Nn = r), n.target.dispatchEvent(r), (Nn = null), t.shift();
    }
    return !0;
}
function qr(e, t, n) {
    Qr(e) && n.delete(t);
}
function Kr() {
    (Fr = !1),
        null !== Ir && Qr(Ir) && (Ir = null),
        null !== Ar && Qr(Ar) && (Ar = null),
        null !== Dr && Qr(Dr) && (Dr = null),
        jr.forEach(qr),
        Ur.forEach(qr);
}
function Yr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Fr || ((Fr = !0), ft.unstable_scheduleCallback(ft.unstable_NormalPriority, Kr)));
}
function Gr(e) {
    function t(t) {
        return Yr(t, e);
    }
    if (0 < Mr.length) {
        Yr(Mr[0], e);
        for (var n = 1; n < Mr.length; n++) {
            var r = Mr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== Ir && Yr(Ir, e),
            null !== Ar && Yr(Ar, e),
            null !== Dr && Yr(Dr, e),
            jr.forEach(t),
            Ur.forEach(t),
            n = 0;
        n < $r.length;
        n++
    )
        (r = $r[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < $r.length && null === (n = $r[0]).blockedOn; ) Wr(n), null === n.blockedOn && $r.shift();
}
var Xr = Pt.ReactCurrentBatchConfig,
    Zr = !0;
function Jr(e, t, n, r) {
    var a = Pr,
        l = Xr.transition;
    Xr.transition = null;
    try {
        (Pr = 1), ta(e, t, n, r);
    } finally {
        (Pr = a), (Xr.transition = l);
    }
}
function ea(e, t, n, r) {
    var a = Pr,
        l = Xr.transition;
    Xr.transition = null;
    try {
        (Pr = 4), ta(e, t, n, r);
    } finally {
        (Pr = a), (Xr.transition = l);
    }
}
function ta(e, t, n, r) {
    if (Zr) {
        var a = ra(e, t, n, r);
        if (null === a) Xl(e, t, r, na, n), Br(e, r);
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return (Ir = Hr(Ir, e, t, n, r, a)), !0;
                    case 'dragenter':
                        return (Ar = Hr(Ar, e, t, n, r, a)), !0;
                    case 'mouseover':
                        return (Dr = Hr(Dr, e, t, n, r, a)), !0;
                    case 'pointerover':
                        var l = a.pointerId;
                        return jr.set(l, Hr(jr.get(l) || null, e, t, n, r, a)), !0;
                    case 'gotpointercapture':
                        return (l = a.pointerId), Ur.set(l, Hr(Ur.get(l) || null, e, t, n, r, a)), !0;
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((Br(e, r), 4 & t && -1 < Vr.indexOf(e))) {
            for (; null !== a; ) {
                var l = Po(a);
                if ((null !== l && zr(l), null === (l = ra(e, t, n, r)) && Xl(e, t, r, na, n), l === a)) break;
                a = l;
            }
            null !== a && r.stopPropagation();
        } else Xl(e, t, r, null, n);
    }
}
var na = null;
function ra(e, t, n, r) {
    if (((na = null), null !== (e = Co((e = zn(r))))))
        if (null === (t = Gn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Xn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (na = e), null;
}
function aa(e) {
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
            switch (or()) {
                case ir:
                    return 1;
                case ur:
                    return 4;
                case sr:
                case cr:
                    return 16;
                case fr:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var la = null,
    oa = null,
    ia = null;
function ua() {
    if (ia) return ia;
    var e,
        t,
        n = oa,
        r = n.length,
        a = 'value' in la ? la.value : la.textContent,
        l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (ia = a.slice(e, 1 < t ? 1 - t : void 0));
}
function sa(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function ca() {
    return !0;
}
function fa() {
    return !1;
}
function da(e) {
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
                ? ca
                : fa),
            (this.isPropagationStopped = fa),
            this
        );
    }
    return (
        Ht(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = ca));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = ca));
            },
            persist: function () {},
            isPersistent: ca,
        }),
        t
    );
}
var pa,
    ha,
    ma,
    ga = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    va = da(ga),
    ya = Ht({}, ga, { view: 0, detail: 0 }),
    ba = da(ya),
    wa = Ht({}, ya, {
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
        getModifierState: Ra,
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
                : (e !== ma &&
                      (ma && 'mousemove' === e.type
                          ? ((pa = e.screenX - ma.screenX), (ha = e.screenY - ma.screenY))
                          : (ha = pa = 0),
                      (ma = e)),
                  pa);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : ha;
        },
    }),
    ka = da(wa),
    Sa = da(Ht({}, wa, { dataTransfer: 0 })),
    xa = da(Ht({}, ya, { relatedTarget: 0 })),
    Ea = da(Ht({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    _a = Ht({}, ga, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Ca = da(_a),
    Pa = da(Ht({}, ga, { data: 0 })),
    Na = {
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
    za = {
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
    Ta = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Oa(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Ta[e]) && !!t[e];
}
function Ra() {
    return Oa;
}
var La = Ht({}, ya, {
        key: function (e) {
            if (e.key) {
                var t = Na[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = sa(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? za[e.keyCode] || 'Unidentified'
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
        getModifierState: Ra,
        charCode: function (e) {
            return 'keypress' === e.type ? sa(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? sa(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    Fa = da(La),
    Ma = da(
        Ht({}, wa, {
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
    Ia = da(
        Ht({}, ya, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ra,
        }),
    ),
    Aa = da(Ht({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Da = Ht({}, wa, {
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
    ja = da(Da),
    Ua = [9, 13, 27, 32],
    $a = vt && 'CompositionEvent' in window,
    Va = null;
vt && 'documentMode' in document && (Va = document.documentMode);
var Ba = vt && 'TextEvent' in window && !Va,
    Ha = vt && (!$a || (Va && 8 < Va && 11 >= Va)),
    Wa = String.fromCharCode(32),
    Qa = !1;
function qa(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== Ua.indexOf(t.keyCode);
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
function Ka(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Ya = !1;
var Ga = {
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
    return 'input' === t ? !!Ga[e.type] : 'textarea' === t;
}
function Za(e, t, n, r) {
    Fn(r),
        0 < (t = Jl(t, 'onChange')).length &&
            ((n = new va('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Ja = null,
    el = null;
function tl(e) {
    Wl(e, 0);
}
function nl(e) {
    if (en(No(e))) return e;
}
function rl(e, t) {
    if ('change' === e) return t;
}
var al = !1;
if (vt) {
    var ll;
    if (vt) {
        var ol = 'oninput' in document;
        if (!ol) {
            var il = document.createElement('div');
            il.setAttribute('oninput', 'return;'), (ol = 'function' == typeof il.oninput);
        }
        ll = ol;
    } else ll = !1;
    al = ll && (!document.documentMode || 9 < document.documentMode);
}
function ul() {
    Ja && (Ja.detachEvent('onpropertychange', sl), (el = Ja = null));
}
function sl(e) {
    if ('value' === e.propertyName && nl(el)) {
        var t = [];
        Za(t, el, e, zn(e)), jn(tl, t);
    }
}
function cl(e, t, n) {
    'focusin' === e ? (ul(), (el = n), (Ja = t).attachEvent('onpropertychange', sl)) : 'focusout' === e && ul();
}
function fl(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return nl(el);
}
function dl(e, t) {
    if ('click' === e) return nl(t);
}
function pl(e, t) {
    if ('input' === e || 'change' === e) return nl(t);
}
var hl =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function ml(e, t) {
    if (hl(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!yt.call(t, a) || !hl(e[a], t[a])) return !1;
    }
    return !0;
}
function gl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function vl(e, t) {
    var n,
        r = gl(e);
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
        r = gl(r);
    }
}
function yl(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? yl(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function bl() {
    for (var e = window, t = tn(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = tn((e = t.contentWindow).document);
    }
    return t;
}
function wl(e) {
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
function kl(e) {
    var t = bl(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yl(n.ownerDocument.documentElement, n)) {
        if (null !== r && wl(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                    !e.extend && l > r && ((a = r), (r = l), (l = a)),
                    (a = vl(n, l));
                var o = vl(n, r);
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
var Sl = vt && 'documentMode' in document && 11 >= document.documentMode,
    xl = null,
    El = null,
    _l = null,
    Cl = !1;
function Pl(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Cl ||
        null == xl ||
        xl !== tn(r) ||
        ('selectionStart' in (r = xl) && wl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (_l && ml(_l, r)) ||
            ((_l = r),
            0 < (r = Jl(El, 'onSelect')).length &&
                ((t = new va('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = xl))));
}
function Nl(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var zl = {
        animationend: Nl('Animation', 'AnimationEnd'),
        animationiteration: Nl('Animation', 'AnimationIteration'),
        animationstart: Nl('Animation', 'AnimationStart'),
        transitionend: Nl('Transition', 'TransitionEnd'),
    },
    Tl = {},
    Ol = {};
function Rl(e) {
    if (Tl[e]) return Tl[e];
    if (!zl[e]) return e;
    var t,
        n = zl[e];
    for (t in n) if (n.hasOwnProperty(t) && t in Ol) return (Tl[e] = n[t]);
    return e;
}
vt &&
    ((Ol = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete zl.animationend.animation, delete zl.animationiteration.animation, delete zl.animationstart.animation),
    'TransitionEvent' in window || delete zl.transitionend.transition);
var Ll = Rl('animationend'),
    Fl = Rl('animationiteration'),
    Ml = Rl('animationstart'),
    Il = Rl('transitionend'),
    Al = new Map(),
    Dl =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function jl(e, t) {
    Al.set(e, t), mt(t, [e]);
}
for (var Ul = 0; Ul < Dl.length; Ul++) {
    var $l = Dl[Ul];
    jl($l.toLowerCase(), 'on' + ($l[0].toUpperCase() + $l.slice(1)));
}
jl(Ll, 'onAnimationEnd'),
    jl(Fl, 'onAnimationIteration'),
    jl(Ml, 'onAnimationStart'),
    jl('dblclick', 'onDoubleClick'),
    jl('focusin', 'onFocus'),
    jl('focusout', 'onBlur'),
    jl(Il, 'onTransitionEnd'),
    gt('onMouseEnter', ['mouseout', 'mouseover']),
    gt('onMouseLeave', ['mouseout', 'mouseover']),
    gt('onPointerEnter', ['pointerout', 'pointerover']),
    gt('onPointerLeave', ['pointerout', 'pointerover']),
    mt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    mt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    mt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    mt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    mt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Vl =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Bl = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Vl));
function Hl(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n),
        (function (e, t, n, r, a, l, o, i, u) {
            if ((Yn.apply(this, arguments), Hn)) {
                if (!Hn) throw Error(dt(198));
                var s = Wn;
                (Hn = !1), (Wn = null), Qn || ((Qn = !0), (qn = s));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null);
}
function Wl(e, t) {
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
                    Hl(a, i, s), (l = u);
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
                    Hl(a, i, s), (l = u);
                }
        }
    }
    if (Qn) throw ((e = qn), (Qn = !1), (qn = null), e);
}
function Ql(e, t) {
    var n = t[xo];
    void 0 === n && (n = t[xo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Gl(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
    var r = 0;
    t && (r |= 4), Gl(n, e, r, t);
}
var Kl = '_reactListening' + Math.random().toString(36).slice(2);
function Yl(e) {
    if (!e[Kl]) {
        (e[Kl] = !0),
            pt.forEach(function (t) {
                'selectionchange' !== t && (Bl.has(t) || ql(t, !1, e), ql(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Kl] || ((t[Kl] = !0), ql('selectionchange', !1, t));
    }
}
function Gl(e, t, n, r) {
    switch (aa(t)) {
        case 1:
            var a = Jr;
            break;
        case 4:
            a = ea;
            break;
        default:
            a = ta;
    }
    (n = a.bind(null, t, n, e)),
        (a = void 0),
        !$n || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
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
                    if (null === (o = Co(i))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = l = o;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    jn(function () {
        var r = l,
            a = zn(n),
            o = [];
        e: {
            var i = Al.get(e);
            if (void 0 !== i) {
                var u = va,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === sa(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = Fa;
                        break;
                    case 'focusin':
                        (s = 'focus'), (u = xa);
                        break;
                    case 'focusout':
                        (s = 'blur'), (u = xa);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = xa;
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
                        u = ka;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = Sa;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = Ia;
                        break;
                    case Ll:
                    case Fl:
                    case Ml:
                        u = Ea;
                        break;
                    case Il:
                        u = Aa;
                        break;
                    case 'scroll':
                        u = ba;
                        break;
                    case 'wheel':
                        u = ja;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = Ca;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = Ma;
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
                            ((p = m), null !== d && null != (m = Un(h, d)) && c.push(Zl(h, m, p))),
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
                    n === Nn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!Co(s) && !s[So])) &&
                    (u || i) &&
                    ((i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? Co(s) : null) &&
                              (s !== (f = Gn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = ka),
                    (m = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = Ma), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? i : No(u)),
                    (p = null == s ? i : No(s)),
                    ((i = new c(m, h + 'leave', u, n, a)).target = f),
                    (i.relatedTarget = p),
                    (m = null),
                    Co(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (m = c)),
                    (f = m),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = eo(p)) h++;
                        for (p = 0, m = d; m; m = eo(m)) p++;
                        for (; 0 < h - p; ) (c = eo(c)), h--;
                        for (; 0 < p - h; ) (d = eo(d)), p--;
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            (c = eo(c)), (d = eo(d));
                        }
                        c = null;
                    }
                else c = null;
                null !== u && to(o, i, u, c, !1), null !== s && null !== f && to(o, f, s, c, !0);
            }
            if (
                'select' === (u = (i = r ? No(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
            )
                var g = rl;
            else if (Xa(i))
                if (al) g = pl;
                else {
                    g = fl;
                    var v = cl;
                }
            else
                (u = i.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === i.type || 'radio' === i.type) &&
                    (g = dl);
            switch (
                (g && (g = g(e, r))
                    ? Za(o, g, n, a)
                    : (v && v(e, i, r),
                      'focusout' === e &&
                          (v = i._wrapperState) &&
                          v.controlled &&
                          'number' === i.type &&
                          un(i, 'number', i.value)),
                (v = r ? No(r) : window),
                e)
            ) {
                case 'focusin':
                    (Xa(v) || 'true' === v.contentEditable) && ((xl = v), (El = r), (_l = null));
                    break;
                case 'focusout':
                    _l = El = xl = null;
                    break;
                case 'mousedown':
                    Cl = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Cl = !1), Pl(o, n, a);
                    break;
                case 'selectionchange':
                    if (Sl) break;
                case 'keydown':
                case 'keyup':
                    Pl(o, n, a);
            }
            var y;
            if ($a)
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
                Ya
                    ? qa(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
                (Ha &&
                    'ko' !== n.locale &&
                    (Ya || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Ya && (y = ua())
                        : ((oa = 'value' in (la = a) ? la.value : la.textContent), (Ya = !0))),
                0 < (v = Jl(r, b)).length &&
                    ((b = new Pa(b, e, null, n, a)),
                    o.push({ event: b, listeners: v }),
                    y ? (b.data = y) : null !== (y = Ka(n)) && (b.data = y))),
                (y = Ba
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return Ka(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Qa = !0), Wa);
                              case 'textInput':
                                  return (e = t.data) === Wa && Qa ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Ya)
                              return 'compositionend' === e || (!$a && qa(e, t))
                                  ? ((e = ua()), (ia = oa = la = null), (Ya = !1), e)
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
                                  return Ha && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Jl(r, 'onBeforeInput')).length &&
                    ((a = new Pa('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y));
        }
        Wl(o, t);
    });
}
function Zl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            l = a.stateNode;
        5 === a.tag &&
            null !== l &&
            ((a = l), null != (l = Un(e, n)) && r.unshift(Zl(e, l, a)), null != (l = Un(e, t)) && r.push(Zl(e, l, a))),
            (e = e.return);
    }
    return r;
}
function eo(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function to(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
            u = i.alternate,
            s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
            null !== s &&
            ((i = s),
            a
                ? null != (u = Un(n, l)) && o.unshift(Zl(n, u, i))
                : a || (null != (u = Un(n, l)) && o.push(Zl(n, u, i)))),
            (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var no = /\r\n?/g,
    ro = /\u0000|\uFFFD/g;
function ao(e) {
    return ('string' == typeof e ? e : '' + e).replace(no, '\n').replace(ro, '');
}
function lo(e, t, n) {
    if (((t = ao(t)), ao(e) !== t && n)) throw Error(dt(425));
}
function oo() {}
var io = null,
    uo = null;
function so(e, t) {
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
var co = 'function' == typeof setTimeout ? setTimeout : void 0,
    fo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    po = 'function' == typeof Promise ? Promise : void 0,
    ho =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== po
              ? function (e) {
                    return po.resolve(null).then(e).catch(mo);
                }
              : co;
function mo(e) {
    setTimeout(function () {
        throw e;
    });
}
function go(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Gr(t);
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Gr(t);
}
function vo(e) {
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
function yo(e) {
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
var bo = Math.random().toString(36).slice(2),
    wo = '__reactFiber$' + bo,
    ko = '__reactProps$' + bo,
    So = '__reactContainer$' + bo,
    xo = '__reactEvents$' + bo,
    Eo = '__reactListeners$' + bo,
    _o = '__reactHandles$' + bo;
function Co(e) {
    var t = e[wo];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[So] || n[wo])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = yo(e); null !== e; ) {
                    if ((n = e[wo])) return n;
                    e = yo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function Po(e) {
    return !(e = e[wo] || e[So]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function No(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(dt(33));
}
function zo(e) {
    return e[ko] || null;
}
var To = [],
    Oo = -1;
function Ro(e) {
    return { current: e };
}
function Lo(e) {
    0 > Oo || ((e.current = To[Oo]), (To[Oo] = null), Oo--);
}
function Fo(e, t) {
    Oo++, (To[Oo] = e.current), (e.current = t);
}
var Mo = {},
    Io = Ro(Mo),
    Ao = Ro(!1),
    Do = Mo;
function jo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mo;
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
function Uo(e) {
    return null != (e = e.childContextTypes);
}
function $o() {
    Lo(Ao), Lo(Io);
}
function Vo(e, t, n) {
    if (Io.current !== Mo) throw Error(dt(168));
    Fo(Io, t), Fo(Ao, n);
}
function Bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(dt(108, Gt(e) || 'Unknown', a));
    return Ht({}, n, r);
}
function Ho(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mo),
        (Do = Io.current),
        Fo(Io, e),
        Fo(Ao, Ao.current),
        !0
    );
}
function Wo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(dt(169));
    n ? ((e = Bo(e, t, Do)), (r.__reactInternalMemoizedMergedChildContext = e), Lo(Ao), Lo(Io), Fo(Io, e)) : Lo(Ao),
        Fo(Ao, n);
}
var Qo = null,
    qo = !1,
    Ko = !1;
function Yo(e) {
    null === Qo ? (Qo = [e]) : Qo.push(e);
}
function Go() {
    if (!Ko && null !== Qo) {
        Ko = !0;
        var e = 0,
            t = Pr;
        try {
            var n = Qo;
            for (Pr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            (Qo = null), (qo = !1);
        } catch (a) {
            throw (null !== Qo && (Qo = Qo.slice(e + 1)), tr(ir, Go), a);
        } finally {
            (Pr = t), (Ko = !1);
        }
    }
    return null;
}
var Xo = [],
    Zo = 0,
    Jo = null,
    ei = 0,
    ti = [],
    ni = 0,
    ri = null,
    ai = 1,
    li = '';
function oi(e, t) {
    (Xo[Zo++] = ei), (Xo[Zo++] = Jo), (Jo = e), (ei = t);
}
function ii(e, t, n) {
    (ti[ni++] = ai), (ti[ni++] = li), (ti[ni++] = ri), (ri = e);
    var r = ai;
    e = li;
    var a = 32 - hr(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var l = 32 - hr(t) + a;
    if (30 < l) {
        var o = a - (a % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (ai = (1 << (32 - hr(t) + a)) | (n << a) | r),
            (li = l + e);
    } else (ai = (1 << l) | (n << a) | r), (li = e);
}
function ui(e) {
    null !== e.return && (oi(e, 1), ii(e, 1, 0));
}
function si(e) {
    for (; e === Jo; ) (Jo = Xo[--Zo]), (Xo[Zo] = null), (ei = Xo[--Zo]), (Xo[Zo] = null);
    for (; e === ri; )
        (ri = ti[--ni]), (ti[ni] = null), (li = ti[--ni]), (ti[ni] = null), (ai = ti[--ni]), (ti[ni] = null);
}
var ci = null,
    fi = null,
    di = !1,
    pi = null;
function hi(e, t) {
    var n = jf(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function mi(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ci = e), (fi = vo(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ci = e), (fi = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== ri ? { id: ai, overflow: li } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = jf(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ci = e),
                (fi = null),
                !0)
            );
        default:
            return !1;
    }
}
function gi(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function vi(e) {
    if (di) {
        var t = fi;
        if (t) {
            var n = t;
            if (!mi(e, t)) {
                if (gi(e)) throw Error(dt(418));
                t = vo(n.nextSibling);
                var r = ci;
                t && mi(e, t) ? hi(r, n) : ((e.flags = (-4097 & e.flags) | 2), (di = !1), (ci = e));
            }
        } else {
            if (gi(e)) throw Error(dt(418));
            (e.flags = (-4097 & e.flags) | 2), (di = !1), (ci = e);
        }
    }
}
function yi(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    ci = e;
}
function bi(e) {
    if (e !== ci) return !1;
    if (!di) return yi(e), (di = !0), !1;
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !so(e.type, e.memoizedProps)),
        t && (t = fi))
    ) {
        if (gi(e)) throw (wi(), Error(dt(418)));
        for (; t; ) hi(e, t), (t = vo(t.nextSibling));
    }
    if ((yi(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(dt(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            fi = vo(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            fi = null;
        }
    } else fi = ci ? vo(e.stateNode.nextSibling) : null;
    return !0;
}
function wi() {
    for (var e = fi; e; ) e = vo(e.nextSibling);
}
function ki() {
    (fi = ci = null), (di = !1);
}
function Si(e) {
    null === pi ? (pi = [e]) : pi.push(e);
}
var xi = Pt.ReactCurrentBatchConfig;
function Ei(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(dt(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(dt(147, e));
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
        if ('string' != typeof e) throw Error(dt(284));
        if (!n._owner) throw Error(dt(290, e));
    }
    return e;
}
function _i(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(dt(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
}
function Ci(e) {
    return (0, e._init)(e._payload);
}
function Pi(e) {
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
        return ((e = $f(e, t)).index = 0), (e.sibling = null), e;
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
        return null === t || 6 !== t.tag ? (((t = Wf(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var l = n.type;
        return l === Tt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === l || ('object' == typeof l && null !== l && l.$$typeof === jt && Ci(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ei(e, t, n)), (r.return = e), r)
              : (((r = Vf(n.type, n.key, n.props, null, e.mode, r)).ref = Ei(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Qf(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, l) {
        return null === t || 7 !== t.tag
            ? (((t = Bf(n, e.mode, r, l)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return ((t = Wf('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case Nt:
                    return ((n = Vf(t.type, t.key, t.props, null, e.mode, n)).ref = Ei(e, null, t)), (n.return = e), n;
                case zt:
                    return ((t = Qf(t, e.mode, n)).return = e), t;
                case jt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (sn(t) || Vt(t)) return ((t = Bf(t, e.mode, n, null)).return = e), t;
            _i(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : i(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case Nt:
                    return n.key === a ? u(e, t, n, r) : null;
                case zt:
                    return n.key === a ? s(e, t, n, r) : null;
                case jt:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (sn(n) || Vt(n)) return null !== a ? null : c(e, t, n, r, null);
            _i(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return i(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case Nt:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case zt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case jt:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (sn(r) || Vt(r)) return c(t, (e = e.get(n) || null), r, a, null);
            _i(t, r);
        }
        return null;
    }
    return function i(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === Tt && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case Nt:
                    e: {
                        for (var m = c.key, g = s; null !== g; ) {
                            if (g.key === m) {
                                if ((m = c.type) === Tt) {
                                    if (7 === g.tag) {
                                        n(u, g.sibling), ((s = a(g, c.props.children)).return = u), (u = s);
                                        break e;
                                    }
                                } else if (
                                    g.elementType === m ||
                                    ('object' == typeof m && null !== m && m.$$typeof === jt && Ci(m) === g.type)
                                ) {
                                    n(u, g.sibling), ((s = a(g, c.props)).ref = Ei(u, g, c)), (s.return = u), (u = s);
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            t(u, g), (g = g.sibling);
                        }
                        c.type === Tt
                            ? (((s = Bf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = Vf(c.type, c.key, c.props, null, u.mode, h)).ref = Ei(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case zt:
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
                        ((s = Qf(c, u.mode, h)).return = u), (u = s);
                    }
                    return o(u);
                case jt:
                    return i(u, s, (g = c._init)(c._payload), h);
            }
            if (sn(c))
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
                    if (m === i.length) return n(a, h), di && oi(a, m), s;
                    if (null === h) {
                        for (; m < i.length; m++)
                            null !== (h = f(a, i[m], u)) &&
                                ((o = l(h, o, m)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return di && oi(a, m), s;
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
                        di && oi(a, m),
                        s
                    );
                })(u, s, c, h);
            if (Vt(c))
                return (function (a, o, i, u) {
                    var s = Vt(i);
                    if ('function' != typeof s) throw Error(dt(150));
                    if (null == (i = s.call(i))) throw Error(dt(151));
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
                    if (v.done) return n(a, h), di && oi(a, m), s;
                    if (null === h) {
                        for (; !v.done; m++, v = i.next())
                            null !== (v = f(a, v.value, u)) &&
                                ((o = l(v, o, m)), null === c ? (s = v) : (c.sibling = v), (c = v));
                        return di && oi(a, m), s;
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
                        di && oi(a, m),
                        s
                    );
                })(u, s, c, h);
            _i(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = Wf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var Ni = Pi(!0),
    zi = Pi(!1),
    Ti = Ro(null),
    Oi = null,
    Ri = null,
    Li = null;
function Fi() {
    Li = Ri = Oi = null;
}
function Mi(e) {
    var t = Ti.current;
    Lo(Ti), (e._currentValue = t);
}
function Ii(e, t, n) {
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
function Ai(e, t) {
    (Oi = e),
        (Li = Ri = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Cs = !0), (e.firstContext = null));
}
function Di(e) {
    var t = e._currentValue;
    if (Li !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === Ri)) {
            if (null === Oi) throw Error(dt(308));
            (Ri = e), (Oi.dependencies = { lanes: 0, firstContext: e });
        } else Ri = Ri.next = e;
    return t;
}
var ji = null;
function Ui(e) {
    null === ji ? (ji = [e]) : ji.push(e);
}
function $i(e, t, n, r) {
    var a = t.interleaved;
    return null === a ? ((n.next = n), Ui(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), Vi(e, r);
}
function Vi(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
}
var Bi = !1;
function Hi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Wi(e, t) {
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
function Qi(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qi(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & Mc))) {
        var a = r.pending;
        return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Vi(e, n);
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), Ui(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        Vi(e, n)
    );
}
function Ki(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Cr(e, n);
    }
}
function Yi(e, t) {
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
function Gi(e, t, n, r) {
    var a = e.updateQueue;
    Bi = !1;
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
                            f = Ht({}, f, d);
                            break e;
                        case 2:
                            Bi = !0;
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
        (Bc |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function Xi(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(dt(191, a));
                a.call(r);
            }
        }
}
var Zi = {},
    Ji = Ro(Zi),
    eu = Ro(Zi),
    tu = Ro(Zi);
function nu(e) {
    if (e === Zi) throw Error(dt(174));
    return e;
}
function ru(e, t) {
    switch ((Fo(tu, t), Fo(eu, e), Fo(Ji, Zi), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : gn(null, '');
            break;
        default:
            t = gn((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    Lo(Ji), Fo(Ji, t);
}
function au() {
    Lo(Ji), Lo(eu), Lo(tu);
}
function lu(e) {
    nu(tu.current);
    var t = nu(Ji.current),
        n = gn(t, e.type);
    t !== n && (Fo(eu, e), Fo(Ji, n));
}
function ou(e) {
    eu.current === e && (Lo(Ji), Lo(eu));
}
var iu = Ro(0);
function uu(e) {
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
var su = [];
function cu() {
    for (var e = 0; e < su.length; e++) su[e]._workInProgressVersionPrimary = null;
    su.length = 0;
}
var fu = Pt.ReactCurrentDispatcher,
    du = Pt.ReactCurrentBatchConfig,
    pu = 0,
    hu = null,
    mu = null,
    gu = null,
    vu = !1,
    yu = !1,
    bu = 0,
    wu = 0;
function ku() {
    throw Error(dt(321));
}
function Su(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!hl(e[n], t[n])) return !1;
    return !0;
}
function xu(e, t, n, r, a, l) {
    if (
        ((pu = l),
        (hu = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (fu.current = null === e || null === e.memoizedState ? os : is),
        (e = n(r, a)),
        yu)
    ) {
        l = 0;
        do {
            if (((yu = !1), (bu = 0), 25 <= l)) throw Error(dt(301));
            (l += 1), (gu = mu = null), (t.updateQueue = null), (fu.current = us), (e = n(r, a));
        } while (yu);
    }
    if (((fu.current = ls), (t = null !== mu && null !== mu.next), (pu = 0), (gu = mu = hu = null), (vu = !1), t))
        throw Error(dt(300));
    return e;
}
function Eu() {
    var e = 0 !== bu;
    return (bu = 0), e;
}
function _u() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === gu ? (hu.memoizedState = gu = e) : (gu = gu.next = e), gu;
}
function Cu() {
    if (null === mu) {
        var e = hu.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = mu.next;
    var t = null === gu ? hu.memoizedState : gu.next;
    if (null !== t) (gu = t), (mu = e);
    else {
        if (null === e) throw Error(dt(310));
        (e = {
            memoizedState: (mu = e).memoizedState,
            baseState: mu.baseState,
            baseQueue: mu.baseQueue,
            queue: mu.queue,
            next: null,
        }),
            null === gu ? (hu.memoizedState = gu = e) : (gu = gu.next = e);
    }
    return gu;
}
function Pu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function Nu(e) {
    var t = Cu(),
        n = t.queue;
    if (null === n) throw Error(dt(311));
    n.lastRenderedReducer = e;
    var r = mu,
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
            if ((pu & c) === c)
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
                null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (hu.lanes |= c), (Bc |= c);
            }
            s = s.next;
        } while (null !== s && s !== l);
        null === u ? (o = r) : (u.next = i),
            hl(r, t.memoizedState) || (Cs = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            (l = a.lane), (hu.lanes |= l), (Bc |= l), (a = a.next);
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function zu(e) {
    var t = Cu(),
        n = t.queue;
    if (null === n) throw Error(dt(311));
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
        hl(l, t.memoizedState) || (Cs = !0),
            (t.memoizedState = l),
            null === t.baseQueue && (t.baseState = l),
            (n.lastRenderedState = l);
    }
    return [l, r];
}
function Tu() {}
function Ou(e, t) {
    var n = hu,
        r = Cu(),
        a = t(),
        l = !hl(r.memoizedState, a);
    if (
        (l && ((r.memoizedState = a), (Cs = !0)),
        (r = r.queue),
        Bu(Fu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (null !== gu && 1 & gu.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), Du(9, Lu.bind(null, n, r, a, t), void 0, null), null === Ic)) throw Error(dt(349));
        0 != (30 & pu) || Ru(n, t, a);
    }
    return a;
}
function Ru(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = hu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (hu.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function Lu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Mu(t) && Iu(e);
}
function Fu(e, t, n) {
    return n(function () {
        Mu(t) && Iu(e);
    });
}
function Mu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !hl(e, n);
    } catch (r) {
        return !0;
    }
}
function Iu(e) {
    var t = Vi(e, 1);
    null !== t && cf(t, e, 1, -1);
}
function Au(e) {
    var t = _u();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Pu,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = ts.bind(null, hu, e)),
        [t.memoizedState, e]
    );
}
function Du(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = hu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (hu.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function ju() {
    return Cu().memoizedState;
}
function Uu(e, t, n, r) {
    var a = _u();
    (hu.flags |= e), (a.memoizedState = Du(1 | t, n, void 0, void 0 === r ? null : r));
}
function $u(e, t, n, r) {
    var a = Cu();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== mu) {
        var o = mu.memoizedState;
        if (((l = o.destroy), null !== r && Su(r, o.deps))) return void (a.memoizedState = Du(t, n, l, r));
    }
    (hu.flags |= e), (a.memoizedState = Du(1 | t, n, l, r));
}
function Vu(e, t) {
    return Uu(8390656, 8, e, t);
}
function Bu(e, t) {
    return $u(2048, 8, e, t);
}
function Hu(e, t) {
    return $u(4, 2, e, t);
}
function Wu(e, t) {
    return $u(4, 4, e, t);
}
function Qu(e, t) {
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
function qu(e, t, n) {
    return (n = null != n ? n.concat([e]) : null), $u(4, 4, Qu.bind(null, t, e), n);
}
function Ku() {}
function Yu(e, t) {
    var n = Cu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Su(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Gu(e, t) {
    var n = Cu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Su(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xu(e, t, n) {
    return 0 == (21 & pu)
        ? (e.baseState && ((e.baseState = !1), (Cs = !0)), (e.memoizedState = n))
        : (hl(n, t) || ((n = xr()), (hu.lanes |= n), (Bc |= n), (e.baseState = !0)), t);
}
function Zu(e, t) {
    var n = Pr;
    (Pr = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = du.transition;
    du.transition = {};
    try {
        e(!1), t();
    } finally {
        (Pr = n), (du.transition = r);
    }
}
function Ju() {
    return Cu().memoizedState;
}
function es(e, t, n) {
    var r = sf(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ns(e))) rs(t, n);
    else if (null !== (n = $i(e, t, n, r))) {
        cf(n, e, r, uf()), as(n, t, r);
    }
}
function ts(e, t, n) {
    var r = sf(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ns(e)) rs(t, a);
    else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), hl(i, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), Ui(t)) : ((a.next = u.next), (u.next = a)), void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = $i(e, t, a, r)) && (cf(n, e, r, (a = uf())), as(n, t, r));
    }
}
function ns(e) {
    var t = e.alternate;
    return e === hu || (null !== t && t === hu);
}
function rs(e, t) {
    yu = vu = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function as(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Cr(e, n);
    }
}
var ls = {
        readContext: Di,
        useCallback: ku,
        useContext: ku,
        useEffect: ku,
        useImperativeHandle: ku,
        useInsertionEffect: ku,
        useLayoutEffect: ku,
        useMemo: ku,
        useReducer: ku,
        useRef: ku,
        useState: ku,
        useDebugValue: ku,
        useDeferredValue: ku,
        useTransition: ku,
        useMutableSource: ku,
        useSyncExternalStore: ku,
        useId: ku,
        unstable_isNewReconciler: !1,
    },
    os = {
        readContext: Di,
        useCallback: function (e, t) {
            return (_u().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: Di,
        useEffect: Vu,
        useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), Uu(4194308, 4, Qu.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Uu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Uu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = _u();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = _u();
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
                (e = e.dispatch = es.bind(null, hu, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (e = { current: e }), (_u().memoizedState = e);
        },
        useState: Au,
        useDebugValue: Ku,
        useDeferredValue: function (e) {
            return (_u().memoizedState = e);
        },
        useTransition: function () {
            var e = Au(!1),
                t = e[0];
            return (e = Zu.bind(null, e[1])), (_u().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = hu,
                a = _u();
            if (di) {
                if (void 0 === n) throw Error(dt(407));
                n = n();
            } else {
                if (((n = t()), null === Ic)) throw Error(dt(349));
                0 != (30 & pu) || Ru(r, t, n);
            }
            a.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
                (a.queue = l),
                Vu(Fu.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Du(9, Lu.bind(null, r, l, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = _u(),
                t = Ic.identifierPrefix;
            if (di) {
                var n = li;
                (t = ':' + t + 'R' + (n = (ai & ~(1 << (32 - hr(ai) - 1))).toString(32) + n)),
                    0 < (n = bu++) && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else t = ':' + t + 'r' + (n = wu++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    is = {
        readContext: Di,
        useCallback: Yu,
        useContext: Di,
        useEffect: Bu,
        useImperativeHandle: qu,
        useInsertionEffect: Hu,
        useLayoutEffect: Wu,
        useMemo: Gu,
        useReducer: Nu,
        useRef: ju,
        useState: function () {
            return Nu(Pu);
        },
        useDebugValue: Ku,
        useDeferredValue: function (e) {
            return Xu(Cu(), mu.memoizedState, e);
        },
        useTransition: function () {
            return [Nu(Pu)[0], Cu().memoizedState];
        },
        useMutableSource: Tu,
        useSyncExternalStore: Ou,
        useId: Ju,
        unstable_isNewReconciler: !1,
    },
    us = {
        readContext: Di,
        useCallback: Yu,
        useContext: Di,
        useEffect: Bu,
        useImperativeHandle: qu,
        useInsertionEffect: Hu,
        useLayoutEffect: Wu,
        useMemo: Gu,
        useReducer: zu,
        useRef: ju,
        useState: function () {
            return zu(Pu);
        },
        useDebugValue: Ku,
        useDeferredValue: function (e) {
            var t = Cu();
            return null === mu ? (t.memoizedState = e) : Xu(t, mu.memoizedState, e);
        },
        useTransition: function () {
            return [zu(Pu)[0], Cu().memoizedState];
        },
        useMutableSource: Tu,
        useSyncExternalStore: Ou,
        useId: Ju,
        unstable_isNewReconciler: !1,
    };
function ss(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = Ht({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function cs(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Ht({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var fs = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Gn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = uf(),
            a = sf(e),
            l = Qi(r, a);
        (l.payload = t), null != n && (l.callback = n), null !== (t = qi(e, l, a)) && (cf(t, e, a, r), Ki(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = uf(),
            a = sf(e),
            l = Qi(r, a);
        (l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            null !== (t = qi(e, l, a)) && (cf(t, e, a, r), Ki(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = uf(),
            r = sf(e),
            a = Qi(n, r);
        (a.tag = 2), null != t && (a.callback = t), null !== (t = qi(e, a, r)) && (cf(t, e, r, n), Ki(t, e, r));
    },
};
function ds(e, t, n, r, a, l, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !ml(n, r) || !ml(a, l);
}
function ps(e, t, n) {
    var r = !1,
        a = Mo,
        l = t.contextType;
    return (
        'object' == typeof l && null !== l
            ? (l = Di(l))
            : ((a = Uo(t) ? Do : Io.current), (l = (r = null != (r = t.contextTypes)) ? jo(e, a) : Mo)),
        (t = new t(n, l)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = fs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function hs(e, t, n, r) {
    (e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && fs.enqueueReplaceState(t, t.state, null);
}
function ms(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Hi(e);
    var l = t.contextType;
    'object' == typeof l && null !== l ? (a.context = Di(l)) : ((l = Uo(t) ? Do : Io.current), (a.context = jo(e, l))),
        (a.state = e.memoizedState),
        'function' == typeof (l = t.getDerivedStateFromProps) && (cs(e, t, l, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && fs.enqueueReplaceState(a, a.state, null),
            Gi(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
}
function gs(e, t) {
    try {
        var n = '',
            r = t;
        do {
            (n += Kt(r)), (r = r.return);
        } while (r);
        var a = n;
    } catch (l) {
        a = '\nError generating stack: ' + l.message + '\n' + l.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function vs(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function ys(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var bs = 'function' == typeof WeakMap ? WeakMap : Map;
function ws(e, t, n) {
    ((n = Qi(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Xc || ((Xc = !0), (Zc = r)), ys(0, t);
        }),
        n
    );
}
function ks(e, t, n) {
    (n = Qi(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        (n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                ys(0, t);
            });
    }
    var l = e.stateNode;
    return (
        null !== l &&
            'function' == typeof l.componentDidCatch &&
            (n.callback = function () {
                ys(0, t), 'function' != typeof r && (null === Jc ? (Jc = new Set([this])) : Jc.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Ss(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new bs();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = Lf.bind(null, e, t, n)), t.then(e, e));
}
function xs(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function Es(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Qi(-1, 1)).tag = 2), qi(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var _s = Pt.ReactCurrentOwner,
    Cs = !1;
function Ps(e, t, n, r) {
    t.child = null === e ? zi(t, null, n, r) : Ni(t, e.child, n, r);
}
function Ns(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
        Ai(t, a),
        (r = xu(e, t, n, r, l, a)),
        (n = Eu()),
        null === e || Cs
            ? (di && n && ui(t), (t.flags |= 1), Ps(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xs(e, t, a))
    );
}
function zs(e, t, n, r, a) {
    if (null === e) {
        var l = n.type;
        return 'function' != typeof l ||
            Uf(l) ||
            void 0 !== l.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Vf(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = l), Ts(e, t, l, r, a));
    }
    if (((l = e.child), 0 == (e.lanes & a))) {
        var o = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : ml)(o, r) && e.ref === t.ref) return Xs(e, t, a);
    }
    return (t.flags |= 1), ((e = $f(l, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function Ts(e, t, n, r, a) {
    if (null !== e) {
        var l = e.memoizedProps;
        if (ml(l, r) && e.ref === t.ref) {
            if (((Cs = !1), (t.pendingProps = r = l), 0 == (e.lanes & a))) return (t.lanes = e.lanes), Xs(e, t, a);
            0 != (131072 & e.flags) && (Cs = !0);
        }
    }
    return Ls(e, t, n, r, a);
}
function Os(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Fo(Uc, jc), (jc |= n);
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== l ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    Fo(Uc, jc),
                    (jc |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== l ? l.baseLanes : n),
                Fo(Uc, jc),
                (jc |= r);
        }
    else null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Fo(Uc, jc), (jc |= r);
    return Ps(e, t, a, n), t.child;
}
function Rs(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ls(e, t, n, r, a) {
    var l = Uo(n) ? Do : Io.current;
    return (
        (l = jo(t, l)),
        Ai(t, a),
        (n = xu(e, t, n, r, l, a)),
        (r = Eu()),
        null === e || Cs
            ? (di && r && ui(t), (t.flags |= 1), Ps(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xs(e, t, a))
    );
}
function Fs(e, t, n, r, a) {
    if (Uo(n)) {
        var l = !0;
        Ho(t);
    } else l = !1;
    if ((Ai(t, a), null === t.stateNode)) Gs(e, t), ps(t, n, r), ms(t, n, r, a), (r = !0);
    else if (null === e) {
        var o = t.stateNode,
            i = t.memoizedProps;
        o.props = i;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = Di(s)) : (s = jo(t, (s = Uo(n) ? Do : Io.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== r || u !== s) && hs(t, o, r, s)),
            (Bi = !1);
        var d = t.memoizedState;
        (o.state = d),
            Gi(t, r, o, a),
            (u = t.memoizedState),
            i !== r || d !== u || Ao.current || Bi
                ? ('function' == typeof c && (cs(t, n, c, r), (u = t.memoizedState)),
                  (i = Bi || ds(t, n, i, r, d, u, s))
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
            Wi(e, t),
            (i = t.memoizedProps),
            (s = t.type === t.elementType ? i : ss(t.type, i)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = Di(u))
                : (u = jo(t, (u = Uo(n) ? Do : Io.current)));
        var p = n.getDerivedStateFromProps;
        (c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== f || d !== u) && hs(t, o, r, u)),
            (Bi = !1),
            (d = t.memoizedState),
            (o.state = d),
            Gi(t, r, o, a);
        var h = t.memoizedState;
        i !== f || d !== h || Ao.current || Bi
            ? ('function' == typeof p && (cs(t, n, p, r), (h = t.memoizedState)),
              (s = Bi || ds(t, n, s, r, d, h, u) || !1)
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
    return Ms(e, t, n, r, l, a);
}
function Ms(e, t, n, r, a, l) {
    Rs(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return a && Wo(t, n, !1), Xs(e, t, l);
    (r = t.stateNode), (_s.current = t);
    var i = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = Ni(t, e.child, null, l)), (t.child = Ni(t, null, i, l))) : Ps(e, t, i, l),
        (t.memoizedState = r.state),
        a && Wo(t, n, !0),
        t.child
    );
}
function Is(e) {
    var t = e.stateNode;
    t.pendingContext ? Vo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Vo(0, t.context, !1),
        ru(e, t.containerInfo);
}
function As(e, t, n, r, a) {
    return ki(), Si(a), (t.flags |= 256), Ps(e, t, n, r), t.child;
}
var Ds,
    js,
    Us,
    $s,
    Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Hs(e, t, n) {
    var r,
        a = t.pendingProps,
        l = iu.current,
        o = !1,
        i = 0 != (128 & t.flags);
    if (
        ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (l |= 1),
        Fo(iu, 1 & l),
        null === e)
    )
        return (
            vi(t),
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
                            : (o = Hf(i, a, 0, null)),
                        (e = Bf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Bs(n)),
                        (t.memoizedState = Vs),
                        e)
                      : Ws(t, i))
        );
    if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, t, n, r, a, l, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Qs(e, t, o, (r = vs(Error(dt(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((l = r.fallback),
                        (a = t.mode),
                        (r = Hf({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((l = Bf(l, a, o, null)).flags |= 2),
                        (r.return = t),
                        (l.return = t),
                        (r.sibling = l),
                        (t.child = r),
                        0 != (1 & t.mode) && Ni(t, e.child, null, o),
                        (t.child.memoizedState = Bs(o)),
                        (t.memoizedState = Vs),
                        l);
            if (0 == (1 & t.mode)) return Qs(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
                return (r = i), Qs(e, t, o, (r = vs((l = Error(dt(419))), r, void 0)));
            }
            if (((i = 0 != (o & e.childLanes)), Cs || i)) {
                if (null !== (r = Ic)) {
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
                        ((l.retryLane = a), Vi(e, a), cf(r, e, a, -1));
                }
                return xf(), Qs(e, t, o, (r = vs(Error(dt(421)))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = Mf.bind(null, e)), (a._reactRetry = t), null)
                : ((e = l.treeContext),
                  (fi = vo(a.nextSibling)),
                  (ci = t),
                  (di = !0),
                  (pi = null),
                  null !== e &&
                      ((ti[ni++] = ai), (ti[ni++] = li), (ti[ni++] = ri), (ai = e.id), (li = e.overflow), (ri = t)),
                  (t = Ws(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, i, a, r, l, n);
    if (o) {
        (o = a.fallback), (i = t.mode), (r = (l = e.child).sibling);
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & i) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = $f(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
            null !== r ? (o = $f(r, o)) : ((o = Bf(o, i, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (i =
                null === (i = e.child.memoizedState)
                    ? Bs(n)
                    : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Vs),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = $f(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function Ws(e, t) {
    return ((t = Hf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
}
function Qs(e, t, n, r) {
    return (
        null !== r && Si(r),
        Ni(t, e.child, null, n),
        ((e = Ws(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), Ii(e.return, t, n);
}
function Ks(e, t, n, r, a) {
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
function Ys(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
    if ((Ps(e, t, r.children, n), 0 != (2 & (r = iu.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && qs(e, n, t);
                else if (19 === e.tag) qs(e, n, t);
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
    if ((Fo(iu, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    null !== (e = n.alternate) && null === uu(e) && (a = n), (n = n.sibling);
                null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    Ks(t, !1, a, n, l);
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === uu(e)) {
                        t.child = a;
                        break;
                    }
                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ks(t, !0, n, null, l);
                break;
            case 'together':
                Ks(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Gs(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (Bc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(dt(153));
    if (null !== t.child) {
        for (n = $f((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = $f(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function Zs(e, t) {
    if (!di)
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
function Js(e) {
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
function ec(e, t, n) {
    var r = t.pendingProps;
    switch ((si(t), t.tag)) {
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
            return Js(t), null;
        case 1:
        case 17:
            return Uo(t.type) && $o(), Js(t), null;
        case 3:
            return (
                (r = t.stateNode),
                au(),
                Lo(Ao),
                Lo(Io),
                cu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (bi(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== pi && (hf(pi), (pi = null)))),
                js(e, t),
                Js(t),
                null
            );
        case 5:
            ou(t);
            var a = nu(tu.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                Us(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(dt(166));
                    return Js(t), null;
                }
                if (((e = nu(Ji.current)), bi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[wo] = t), (r[ko] = l), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            Ql('cancel', r), Ql('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Ql('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < Vl.length; a++) Ql(Vl[a], r);
                            break;
                        case 'source':
                            Ql('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            Ql('error', r), Ql('load', r);
                            break;
                        case 'details':
                            Ql('toggle', r);
                            break;
                        case 'input':
                            rn(r, l), Ql('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!l.multiple }), Ql('invalid', r);
                            break;
                        case 'textarea':
                            dn(r, l), Ql('invalid', r);
                    }
                    for (var o in (Cn(n, l), (a = null), l))
                        if (l.hasOwnProperty(o)) {
                            var i = l[o];
                            'children' === o
                                ? 'string' == typeof i
                                    ? r.textContent !== i &&
                                      (!0 !== l.suppressHydrationWarning && lo(r.textContent, i, e),
                                      (a = ['children', i]))
                                    : 'number' == typeof i &&
                                      r.textContent !== '' + i &&
                                      (!0 !== l.suppressHydrationWarning && lo(r.textContent, i, e),
                                      (a = ['children', '' + i]))
                                : ht.hasOwnProperty(o) && null != i && 'onScroll' === o && Ql('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            Jt(r), on(r, l, !0);
                            break;
                        case 'textarea':
                            Jt(r), hn(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof l.onClick && (r.onclick = oo);
                    }
                    (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                    (o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = mn(n)),
                        'http://www.w3.org/1999/xhtml' === e
                            ? 'script' === n
                                ? (((e = o.createElement('div')).innerHTML = '<script><\/script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : 'string' == typeof r.is
                                  ? (e = o.createElement(n, { is: r.is }))
                                  : ((e = o.createElement(n)),
                                    'select' === n &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[wo] = t),
                        (e[ko] = r),
                        Ds(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Pn(n, r)), n)) {
                            case 'dialog':
                                Ql('cancel', e), Ql('close', e), (a = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                Ql('load', e), (a = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < Vl.length; a++) Ql(Vl[a], e);
                                a = r;
                                break;
                            case 'source':
                                Ql('error', e), (a = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                Ql('error', e), Ql('load', e), (a = r);
                                break;
                            case 'details':
                                Ql('toggle', e), (a = r);
                                break;
                            case 'input':
                                rn(e, r), (a = nn(e, r)), Ql('invalid', e);
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = Ht({}, r, { value: void 0 })),
                                    Ql('invalid', e);
                                break;
                            case 'textarea':
                                dn(e, r), (a = fn(e, r)), Ql('invalid', e);
                        }
                        for (l in (Cn(n, a), (i = a)))
                            if (i.hasOwnProperty(l)) {
                                var u = i[l];
                                'style' === l
                                    ? En(e, u)
                                    : 'dangerouslySetInnerHTML' === l
                                      ? null != (u = u ? u.__html : void 0) && bn(e, u)
                                      : 'children' === l
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && wn(e, u)
                                            : 'number' == typeof u && wn(e, '' + u)
                                        : 'suppressContentEditableWarning' !== l &&
                                          'suppressHydrationWarning' !== l &&
                                          'autoFocus' !== l &&
                                          (ht.hasOwnProperty(l)
                                              ? null != u && 'onScroll' === l && Ql('scroll', e)
                                              : null != u && Ct(e, l, u, o));
                            }
                        switch (n) {
                            case 'input':
                                Jt(e), on(e, r, !1);
                                break;
                            case 'textarea':
                                Jt(e), hn(e);
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Xt(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    null != (l = r.value)
                                        ? cn(e, !!r.multiple, l, !1)
                                        : null != r.defaultValue && cn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = oo);
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
            return Js(t), null;
        case 6:
            if (e && null != t.stateNode) $s(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(dt(166));
                if (((n = nu(tu.current)), nu(Ji.current), bi(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[wo] = t),
                        (l = r.nodeValue !== n) && null !== (e = ci))
                    )
                        switch (e.tag) {
                            case 3:
                                lo(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    lo(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    l && (t.flags |= 4);
                } else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[wo] = t), (t.stateNode = r);
            }
            return Js(t), null;
        case 13:
            if (
                (Lo(iu),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (di && null !== fi && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    wi(), ki(), (t.flags |= 98560), (l = !1);
                else if (((l = bi(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!l) throw Error(dt(318));
                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(dt(317));
                        l[wo] = t;
                    } else ki(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    Js(t), (l = !1);
                } else null !== pi && (hf(pi), (pi = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & iu.current) ? 0 === $c && ($c = 3) : xf())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Js(t),
                  null);
        case 4:
            return au(), js(e, t), null === e && Yl(t.stateNode.containerInfo), Js(t), null;
        case 10:
            return Mi(t.type._context), Js(t), null;
        case 19:
            if ((Lo(iu), null === (l = t.memoizedState))) return Js(t), null;
            if (((r = 0 != (128 & t.flags)), null === (o = l.rendering)))
                if (r) Zs(l, !1);
                else {
                    if (0 !== $c || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = uu(e))) {
                                for (
                                    t.flags |= 128,
                                        Zs(l, !1),
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
                                return Fo(iu, (1 & iu.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== l.tail && lr() > Yc && ((t.flags |= 128), (r = !0), Zs(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = uu(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Zs(l, !0),
                            null === l.tail && 'hidden' === l.tailMode && !o.alternate && !di)
                        )
                            return Js(t), null;
                    } else
                        2 * lr() - l.renderingStartTime > Yc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Zs(l, !1), (t.lanes = 4194304));
                l.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o), (l.last = o));
            }
            return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = lr()),
                  (t.sibling = null),
                  (n = iu.current),
                  Fo(iu, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Js(t), null);
        case 22:
        case 23:
            return (
                bf(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & jc) && (Js(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Js(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(dt(156, t.tag));
}
function tc(e, t) {
    switch ((si(t), t.tag)) {
        case 1:
            return Uo(t.type) && $o(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                au(),
                Lo(Ao),
                Lo(Io),
                cu(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return ou(t), null;
        case 13:
            if ((Lo(iu), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(dt(340));
                ki();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return Lo(iu), null;
        case 4:
            return au(), null;
        case 10:
            return Mi(t.type._context), null;
        case 22:
        case 23:
            return bf(), null;
        default:
            return null;
    }
}
(Ds = function (e, t) {
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
    (js = function () {}),
    (Us = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            (e = t.stateNode), nu(Ji.current);
            var l,
                o = null;
            switch (n) {
                case 'input':
                    (a = nn(e, a)), (r = nn(e, r)), (o = []);
                    break;
                case 'select':
                    (a = Ht({}, a, { value: void 0 })), (r = Ht({}, r, { value: void 0 })), (o = []);
                    break;
                case 'textarea':
                    (a = fn(e, a)), (r = fn(e, r)), (o = []);
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = oo);
            }
            for (s in (Cn(n, r), (n = null), a))
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
                            (ht.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
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
                                (ht.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && Ql('scroll', e), o || i === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    ($s = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    });
var nc = !1,
    rc = !1,
    ac = 'function' == typeof WeakSet ? WeakSet : Set,
    lc = null;
function oc(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                Rf(e, t, r);
            }
        else n.current = null;
}
function ic(e, t, n) {
    try {
        n();
    } catch (r) {
        Rf(e, t, r);
    }
}
var uc = !1;
function sc(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ic(t, n, l);
            }
            a = a.next;
        } while (a !== r);
    }
}
function cc(e, t) {
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
function fc(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
    }
}
function dc(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), dc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[wo], delete t[ko], delete t[xo], delete t[Eo], delete t[_o]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function pc(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function hc(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || pc(e.return)) return null;
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
function mc(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = oo));
    else if (4 !== r && null !== (e = e.child))
        for (mc(e, t, n), e = e.sibling; null !== e; ) mc(e, t, n), (e = e.sibling);
}
function gc(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (gc(e, t, n), e = e.sibling; null !== e; ) gc(e, t, n), (e = e.sibling);
}
var vc = null,
    yc = !1;
function bc(e, t, n) {
    for (n = n.child; null !== n; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
    if (pr && 'function' == typeof pr.onCommitFiberUnmount)
        try {
            pr.onCommitFiberUnmount(dr, n);
        } catch (i) {}
    switch (n.tag) {
        case 5:
            rc || oc(n, t);
        case 6:
            var r = vc,
                a = yc;
            (vc = null),
                bc(e, t, n),
                (yc = a),
                null !== (vc = r) &&
                    (yc
                        ? ((e = vc),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : vc.removeChild(n.stateNode));
            break;
        case 18:
            null !== vc &&
                (yc
                    ? ((e = vc),
                      (n = n.stateNode),
                      8 === e.nodeType ? go(e.parentNode, n) : 1 === e.nodeType && go(e, n),
                      Gr(e))
                    : go(vc, n.stateNode));
            break;
        case 4:
            (r = vc), (a = yc), (vc = n.stateNode.containerInfo), (yc = !0), bc(e, t, n), (vc = r), (yc = a);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!rc && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var l = a,
                        o = l.destroy;
                    (l = l.tag), void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && ic(n, t, o), (a = a.next);
                } while (a !== r);
            }
            bc(e, t, n);
            break;
        case 1:
            if (!rc && (oc(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (i) {
                    Rf(n, t, i);
                }
            bc(e, t, n);
            break;
        case 21:
            bc(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((rc = (r = rc) || null !== n.memoizedState), bc(e, t, n), (rc = r)) : bc(e, t, n);
            break;
        default:
            bc(e, t, n);
    }
}
function kc(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new ac()),
            t.forEach(function (t) {
                var r = If.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            });
    }
}
function Sc(e, t) {
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
                            (vc = i.stateNode), (yc = !1);
                            break e;
                        case 3:
                        case 4:
                            (vc = i.stateNode.containerInfo), (yc = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (null === vc) throw Error(dt(160));
                wc(l, o, a), (vc = null), (yc = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
            } catch (s) {
                Rf(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) xc(t, e), (t = t.sibling);
}
function xc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Sc(t, e), Ec(e), 4 & r)) {
                try {
                    sc(3, e, e.return), cc(3, e);
                } catch (m) {
                    Rf(e, e.return, m);
                }
                try {
                    sc(5, e, e.return);
                } catch (m) {
                    Rf(e, e.return, m);
                }
            }
            break;
        case 1:
            Sc(t, e), Ec(e), 512 & r && null !== n && oc(n, n.return);
            break;
        case 5:
            if ((Sc(t, e), Ec(e), 512 & r && null !== n && oc(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    wn(a, '');
                } catch (m) {
                    Rf(e, e.return, m);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : l,
                    i = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        'input' === i && 'radio' === l.type && null != l.name && an(a, l), Pn(i, o);
                        var s = Pn(i, l);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? En(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? bn(a, f)
                                  : 'children' === c
                                    ? wn(a, f)
                                    : Ct(a, c, f, s);
                        }
                        switch (i) {
                            case 'input':
                                ln(a, l);
                                break;
                            case 'textarea':
                                pn(a, l);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!l.multiple;
                                var p = l.value;
                                null != p
                                    ? cn(a, !!l.multiple, p, !1)
                                    : d !== !!l.multiple &&
                                      (null != l.defaultValue
                                          ? cn(a, !!l.multiple, l.defaultValue, !0)
                                          : cn(a, !!l.multiple, l.multiple ? [] : '', !1));
                        }
                        a[ko] = l;
                    } catch (m) {
                        Rf(e, e.return, m);
                    }
            }
            break;
        case 6:
            if ((Sc(t, e), Ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(dt(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                    a.nodeValue = l;
                } catch (m) {
                    Rf(e, e.return, m);
                }
            }
            break;
        case 3:
            if ((Sc(t, e), Ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Gr(t.containerInfo);
                } catch (m) {
                    Rf(e, e.return, m);
                }
            break;
        case 4:
        default:
            Sc(t, e), Ec(e);
            break;
        case 13:
            Sc(t, e),
                Ec(e),
                8192 & (a = e.child).flags &&
                    ((l = null !== a.memoizedState),
                    (a.stateNode.isHidden = l),
                    !l || (null !== a.alternate && null !== a.alternate.memoizedState) || (Kc = lr())),
                4 & r && kc(e);
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((rc = (s = rc) || c), Sc(t, e), (rc = s)) : Sc(t, e),
                Ec(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (lc = e, c = e.child; null !== c; ) {
                        for (f = lc = c; null !== lc; ) {
                            switch (((p = (d = lc).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    sc(4, d, d.return);
                                    break;
                                case 1:
                                    oc(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount();
                                        } catch (m) {
                                            Rf(r, n, m);
                                        }
                                    }
                                    break;
                                case 5:
                                    oc(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        Nc(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (lc = p)) : Nc(f);
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
                                          (i.style.display = xn('display', o)));
                            } catch (m) {
                                Rf(e, e.return, m);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (m) {
                                Rf(e, e.return, m);
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
            Sc(t, e), Ec(e), 4 & r && kc(e);
        case 21:
    }
}
function Ec(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (pc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(dt(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    32 & r.flags && (wn(a, ''), (r.flags &= -33)), gc(e, hc(e), a);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo;
                    mc(e, hc(e), l);
                    break;
                default:
                    throw Error(dt(161));
            }
        } catch (o) {
            Rf(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function _c(e, t, n) {
    (lc = e), Cc(e);
}
function Cc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== lc; ) {
        var a = lc,
            l = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || nc;
            if (!o) {
                var i = a.alternate,
                    u = (null !== i && null !== i.memoizedState) || rc;
                i = nc;
                var s = rc;
                if (((nc = o), (rc = u) && !s))
                    for (lc = a; null !== lc; )
                        (u = (o = lc).child),
                            22 === o.tag && null !== o.memoizedState
                                ? zc(a)
                                : null !== u
                                  ? ((u.return = o), (lc = u))
                                  : zc(a);
                for (; null !== l; ) (lc = l), Cc(l), (l = l.sibling);
                (lc = a), (nc = i), (rc = s);
            }
            Pc(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== l ? ((l.return = a), (lc = l)) : Pc(e);
    }
}
function Pc(e) {
    for (; null !== lc; ) {
        var t = lc;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            rc || cc(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !rc)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : ss(t.type, n.memoizedProps);
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
                                        null !== f && Gr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(dt(163));
                    }
                rc || (512 & t.flags && fc(t));
            } catch (d) {
                Rf(t, t.return, d);
            }
        }
        if (t === e) {
            lc = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            (n.return = t.return), (lc = n);
            break;
        }
        lc = t.return;
    }
}
function Nc(e) {
    for (; null !== lc; ) {
        var t = lc;
        if (t === e) {
            lc = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            (n.return = t.return), (lc = n);
            break;
        }
        lc = t.return;
    }
}
function zc(e) {
    for (; null !== lc; ) {
        var t = lc;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        cc(4, t);
                    } catch (u) {
                        Rf(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            Rf(t, a, u);
                        }
                    }
                    var l = t.return;
                    try {
                        fc(t);
                    } catch (u) {
                        Rf(t, l, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        fc(t);
                    } catch (u) {
                        Rf(t, o, u);
                    }
            }
        } catch (u) {
            Rf(t, t.return, u);
        }
        if (t === e) {
            lc = null;
            break;
        }
        var i = t.sibling;
        if (null !== i) {
            (i.return = t.return), (lc = i);
            break;
        }
        lc = t.return;
    }
}
var Tc,
    Oc = Math.ceil,
    Rc = Pt.ReactCurrentDispatcher,
    Lc = Pt.ReactCurrentOwner,
    Fc = Pt.ReactCurrentBatchConfig,
    Mc = 0,
    Ic = null,
    Ac = null,
    Dc = 0,
    jc = 0,
    Uc = Ro(0),
    $c = 0,
    Vc = null,
    Bc = 0,
    Hc = 0,
    Wc = 0,
    Qc = null,
    qc = null,
    Kc = 0,
    Yc = 1 / 0,
    Gc = null,
    Xc = !1,
    Zc = null,
    Jc = null,
    ef = !1,
    tf = null,
    nf = 0,
    rf = 0,
    af = null,
    lf = -1,
    of = 0;
function uf() {
    return 0 != (6 & Mc) ? lr() : -1 !== lf ? lf : (lf = lr());
}
function sf(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Mc) && 0 !== Dc
          ? Dc & -Dc
          : null !== xi.transition
            ? (0 === of && (of = xr()), of)
            : 0 !== (e = Pr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : aa(e.type));
}
function cf(e, t, n, r) {
    if (50 < rf) throw ((rf = 0), (af = null), Error(dt(185)));
    _r(e, n, r),
        (0 != (2 & Mc) && e === Ic) ||
            (e === Ic && (0 == (2 & Mc) && (Hc |= n), 4 === $c && mf(e, Dc)),
            ff(e, r),
            1 === n && 0 === Mc && 0 == (1 & t.mode) && ((Yc = lr() + 500), qo && Go()));
}
function ff(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
            var o = 31 - hr(l),
                i = 1 << o,
                u = a[o];
            -1 === u ? (0 != (i & n) && 0 == (i & r)) || (a[o] = kr(i, t)) : u <= t && (e.expiredLanes |= i), (l &= ~i);
        }
    })(e, t);
    var r = wr(e, e === Ic ? Dc : 0);
    if (0 === r) null !== n && nr(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && nr(n), 1 === t))
            0 === e.tag
                ? (function (e) {
                      (qo = !0), Yo(e);
                  })(gf.bind(null, e))
                : Yo(gf.bind(null, e)),
                ho(function () {
                    0 == (6 & Mc) && Go();
                }),
                (n = null);
        else {
            switch (Nr(r)) {
                case 1:
                    n = ir;
                    break;
                case 4:
                    n = ur;
                    break;
                case 16:
                default:
                    n = sr;
                    break;
                case 536870912:
                    n = fr;
            }
            n = Af(n, df.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function df(e, t) {
    if (((lf = -1), (of = 0), 0 != (6 & Mc))) throw Error(dt(327));
    var n = e.callbackNode;
    if (Tf() && e.callbackNode !== n) return null;
    var r = wr(e, e === Ic ? Dc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ef(e, r);
    else {
        t = r;
        var a = Mc;
        Mc |= 2;
        var l = Sf();
        for ((Ic === e && Dc === t) || ((Gc = null), (Yc = lr() + 500), wf(e, t)); ; )
            try {
                Cf();
                break;
            } catch (i) {
                kf(e, i);
            }
        Fi(), (Rc.current = l), (Mc = a), null !== Ac ? (t = 0) : ((Ic = null), (Dc = 0), (t = $c));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = Sr(e)) && ((r = a), (t = pf(e, a))), 1 === t))
            throw ((n = Vc), wf(e, 0), mf(e, r), ff(e, lr()), n);
        if (6 === t) mf(e, r);
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
                                            if (!hl(l(), a)) return !1;
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
                    (2 === (t = Ef(e, r)) && 0 !== (l = Sr(e)) && ((r = l), (t = pf(e, l))), 1 === t))
            )
                throw ((n = Vc), wf(e, 0), mf(e, r), ff(e, lr()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(dt(345));
                case 2:
                case 5:
                    zf(e, qc, Gc);
                    break;
                case 3:
                    if ((mf(e, r), (130023424 & r) === r && 10 < (t = Kc + 500 - lr()))) {
                        if (0 !== wr(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            uf(), (e.pingedLanes |= e.suspendedLanes & a);
                            break;
                        }
                        e.timeoutHandle = co(zf.bind(null, e, qc, Gc), t);
                        break;
                    }
                    zf(e, qc, Gc);
                    break;
                case 4:
                    if ((mf(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - hr(r);
                        (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = lr() - r)
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
                                              : 1960 * Oc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = co(zf.bind(null, e, qc, Gc), r);
                        break;
                    }
                    zf(e, qc, Gc);
                    break;
                default:
                    throw Error(dt(329));
            }
        }
    }
    return ff(e, lr()), e.callbackNode === n ? df.bind(null, e) : null;
}
function pf(e, t) {
    var n = Qc;
    return (
        e.current.memoizedState.isDehydrated && (wf(e, t).flags |= 256),
        2 !== (e = Ef(e, t)) && ((t = qc), (qc = n), null !== t && hf(t)),
        e
    );
}
function hf(e) {
    null === qc ? (qc = e) : qc.push.apply(qc, e);
}
function mf(e, t) {
    for (t &= ~Wc, t &= ~Hc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - hr(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function gf(e) {
    if (0 != (6 & Mc)) throw Error(dt(327));
    Tf();
    var t = wr(e, 0);
    if (0 == (1 & t)) return ff(e, lr()), null;
    var n = Ef(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Sr(e);
        0 !== r && ((t = r), (n = pf(e, r)));
    }
    if (1 === n) throw ((n = Vc), wf(e, 0), mf(e, t), ff(e, lr()), n);
    if (6 === n) throw Error(dt(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), zf(e, qc, Gc), ff(e, lr()), null;
}
function vf(e, t) {
    var n = Mc;
    Mc |= 1;
    try {
        return e(t);
    } finally {
        0 === (Mc = n) && ((Yc = lr() + 500), qo && Go());
    }
}
function yf(e) {
    null !== tf && 0 === tf.tag && 0 == (6 & Mc) && Tf();
    var t = Mc;
    Mc |= 1;
    var n = Fc.transition,
        r = Pr;
    try {
        if (((Fc.transition = null), (Pr = 1), e)) return e();
    } finally {
        (Pr = r), (Fc.transition = n), 0 == (6 & (Mc = t)) && Go();
    }
}
function bf() {
    (jc = Uc.current), Lo(Uc);
}
function wf(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), fo(n)), null !== Ac))
        for (n = Ac.return; null !== n; ) {
            var r = n;
            switch ((si(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && $o();
                    break;
                case 3:
                    au(), Lo(Ao), Lo(Io), cu();
                    break;
                case 5:
                    ou(r);
                    break;
                case 4:
                    au();
                    break;
                case 13:
                case 19:
                    Lo(iu);
                    break;
                case 10:
                    Mi(r.type._context);
                    break;
                case 22:
                case 23:
                    bf();
            }
            n = n.return;
        }
    if (
        ((Ic = e),
        (Ac = e = $f(e.current, null)),
        (Dc = jc = t),
        ($c = 0),
        (Vc = null),
        (Wc = Hc = Bc = 0),
        (qc = Qc = null),
        null !== ji)
    ) {
        for (t = 0; t < ji.length; t++)
            if (null !== (r = (n = ji[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    l = n.pending;
                if (null !== l) {
                    var o = l.next;
                    (l.next = a), (r.next = o);
                }
                n.pending = r;
            }
        ji = null;
    }
    return e;
}
function kf(e, t) {
    for (;;) {
        var n = Ac;
        try {
            if ((Fi(), (fu.current = ls), vu)) {
                for (var r = hu.memoizedState; null !== r; ) {
                    var a = r.queue;
                    null !== a && (a.pending = null), (r = r.next);
                }
                vu = !1;
            }
            if (
                ((pu = 0),
                (gu = mu = hu = null),
                (yu = !1),
                (bu = 0),
                (Lc.current = null),
                null === n || null === n.return)
            ) {
                ($c = 1), (Vc = t), (Ac = null);
                break;
            }
            e: {
                var l = e,
                    o = n.return,
                    i = n,
                    u = t;
                if (((t = Dc), (i.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var p = xs(o);
                    if (null !== p) {
                        (p.flags &= -257), Es(p, o, i, 0, t), 1 & p.mode && Ss(l, s, t), (u = s);
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var m = new Set();
                            m.add(u), (t.updateQueue = m);
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        Ss(l, s, t), xf();
                        break e;
                    }
                    u = Error(dt(426));
                } else if (di && 1 & i.mode) {
                    var g = xs(o);
                    if (null !== g) {
                        0 == (65536 & g.flags) && (g.flags |= 256), Es(g, o, i, 0, t), Si(gs(u, i));
                        break e;
                    }
                }
                (l = u = gs(u, i)), 4 !== $c && ($c = 2), null === Qc ? (Qc = [l]) : Qc.push(l), (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t), Yi(l, ws(0, u, t));
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
                                        (null === Jc || !Jc.has(y))))
                            ) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t), Yi(l, ks(l, i, t));
                                break e;
                            }
                    }
                    l = l.return;
                } while (null !== l);
            }
            Nf(n);
        } catch (b) {
            (t = b), Ac === n && null !== n && (Ac = n = n.return);
            continue;
        }
        break;
    }
}
function Sf() {
    var e = Rc.current;
    return (Rc.current = ls), null === e ? ls : e;
}
function xf() {
    (0 !== $c && 3 !== $c && 2 !== $c) || ($c = 4),
        null === Ic || (0 == (268435455 & Bc) && 0 == (268435455 & Hc)) || mf(Ic, Dc);
}
function Ef(e, t) {
    var n = Mc;
    Mc |= 2;
    var r = Sf();
    for ((Ic === e && Dc === t) || ((Gc = null), wf(e, t)); ; )
        try {
            _f();
            break;
        } catch (a) {
            kf(e, a);
        }
    if ((Fi(), (Mc = n), (Rc.current = r), null !== Ac)) throw Error(dt(261));
    return (Ic = null), (Dc = 0), $c;
}
function _f() {
    for (; null !== Ac; ) Pf(Ac);
}
function Cf() {
    for (; null !== Ac && !rr(); ) Pf(Ac);
}
function Pf(e) {
    var t = Tc(e.alternate, e, jc);
    (e.memoizedProps = e.pendingProps), null === t ? Nf(e) : (Ac = t), (Lc.current = null);
}
function Nf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = ec(n, t, jc))) return void (Ac = n);
        } else {
            if (null !== (n = tc(n, t))) return (n.flags &= 32767), void (Ac = n);
            if (null === e) return ($c = 6), void (Ac = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (t = t.sibling)) return void (Ac = t);
        Ac = t = e;
    } while (null !== t);
    0 === $c && ($c = 5);
}
function zf(e, t, n) {
    var r = Pr,
        a = Fc.transition;
    try {
        (Fc.transition = null),
            (Pr = 1),
            (function (e, t, n, r) {
                do {
                    Tf();
                } while (null !== tf);
                if (0 != (6 & Mc)) throw Error(dt(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(dt(177));
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
                            var a = 31 - hr(n),
                                l = 1 << a;
                            (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                        }
                    })(e, l),
                    e === Ic && ((Ac = Ic = null), (Dc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        ef ||
                        ((ef = !0),
                        Af(sr, function () {
                            return Tf(), null;
                        })),
                    (l = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || l)
                ) {
                    (l = Fc.transition), (Fc.transition = null);
                    var o = Pr;
                    Pr = 1;
                    var i = Mc;
                    (Mc |= 4),
                        (Lc.current = null),
                        (function (e, t) {
                            if (((io = Zr), wl((e = bl())))) {
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
                            for (uo = { focusedElem: e, selectionRange: n }, Zr = !1, lc = t; null !== lc; )
                                if (((e = (t = lc).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    (e.return = t), (lc = e);
                                else
                                    for (; null !== lc; ) {
                                        t = lc;
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
                                                                    t.elementType === t.type ? m : ss(t.type, m),
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
                                                        throw Error(dt(163));
                                                }
                                        } catch (w) {
                                            Rf(t, t.return, w);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            (e.return = t.return), (lc = e);
                                            break;
                                        }
                                        lc = t.return;
                                    }
                            (h = uc), (uc = !1);
                        })(e, n),
                        xc(n, e),
                        kl(uo),
                        (Zr = !!io),
                        (uo = io = null),
                        (e.current = n),
                        _c(n),
                        ar(),
                        (Mc = i),
                        (Pr = o),
                        (Fc.transition = l);
                } else e.current = n;
                if (
                    (ef && ((ef = !1), (tf = e), (nf = a)),
                    (l = e.pendingLanes),
                    0 === l && (Jc = null),
                    (function (e) {
                        if (pr && 'function' == typeof pr.onCommitFiberRoot)
                            try {
                                pr.onCommitFiberRoot(dr, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    ff(e, lr()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Xc) throw ((Xc = !1), (e = Zc), (Zc = null), e);
                0 != (1 & nf) && 0 !== e.tag && Tf(),
                    (l = e.pendingLanes),
                    0 != (1 & l) ? (e === af ? rf++ : ((rf = 0), (af = e))) : (rf = 0),
                    Go();
            })(e, t, n, r);
    } finally {
        (Fc.transition = a), (Pr = r);
    }
    return null;
}
function Tf() {
    if (null !== tf) {
        var e = Nr(nf),
            t = Fc.transition,
            n = Pr;
        try {
            if (((Fc.transition = null), (Pr = 16 > e ? 16 : e), null === tf)) var r = !1;
            else {
                if (((e = tf), (tf = null), (nf = 0), 0 != (6 & Mc))) throw Error(dt(331));
                var a = Mc;
                for (Mc |= 4, lc = e.current; null !== lc; ) {
                    var l = lc,
                        o = l.child;
                    if (0 != (16 & lc.flags)) {
                        var i = l.deletions;
                        if (null !== i) {
                            for (var u = 0; u < i.length; u++) {
                                var s = i[u];
                                for (lc = s; null !== lc; ) {
                                    var c = lc;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            sc(8, c, l);
                                    }
                                    var f = c.child;
                                    if (null !== f) (f.return = c), (lc = f);
                                    else
                                        for (; null !== lc; ) {
                                            var d = (c = lc).sibling,
                                                p = c.return;
                                            if ((dc(c), c === s)) {
                                                lc = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                (d.return = p), (lc = d);
                                                break;
                                            }
                                            lc = p;
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
                            lc = l;
                        }
                    }
                    if (0 != (2064 & l.subtreeFlags) && null !== o) (o.return = l), (lc = o);
                    else
                        e: for (; null !== lc; ) {
                            if (0 != (2048 & (l = lc).flags))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        sc(9, l, l.return);
                                }
                            var v = l.sibling;
                            if (null !== v) {
                                (v.return = l.return), (lc = v);
                                break e;
                            }
                            lc = l.return;
                        }
                }
                var y = e.current;
                for (lc = y; null !== lc; ) {
                    var b = (o = lc).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) (b.return = o), (lc = b);
                    else
                        e: for (o = y; null !== lc; ) {
                            if (0 != (2048 & (i = lc).flags))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cc(9, i);
                                    }
                                } catch (k) {
                                    Rf(i, i.return, k);
                                }
                            if (i === o) {
                                lc = null;
                                break e;
                            }
                            var w = i.sibling;
                            if (null !== w) {
                                (w.return = i.return), (lc = w);
                                break e;
                            }
                            lc = i.return;
                        }
                }
                if (((Mc = a), Go(), pr && 'function' == typeof pr.onPostCommitFiberRoot))
                    try {
                        pr.onPostCommitFiberRoot(dr, e);
                    } catch (k) {}
                r = !0;
            }
            return r;
        } finally {
            (Pr = n), (Fc.transition = t);
        }
    }
    return !1;
}
function Of(e, t, n) {
    (e = qi(e, (t = ws(0, (t = gs(n, t)), 1)), 1)), (t = uf()), null !== e && (_r(e, 1, t), ff(e, t));
}
function Rf(e, t, n) {
    if (3 === e.tag) Of(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                Of(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Jc || !Jc.has(r)))
                ) {
                    (t = qi(t, (e = ks(t, (e = gs(n, e)), 1)), 1)), (e = uf()), null !== t && (_r(t, 1, e), ff(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Lf(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (t = uf()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ic === e &&
            (Dc & n) === n &&
            (4 === $c || (3 === $c && (130023424 & Dc) === Dc && 500 > lr() - Kc) ? wf(e, 0) : (Wc |= n)),
        ff(e, t);
}
function Ff(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = yr), 0 == (130023424 & (yr <<= 1)) && (yr = 4194304)));
    var n = uf();
    null !== (e = Vi(e, t)) && (_r(e, t, n), ff(e, n));
}
function Mf(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), Ff(e, n);
}
function If(e, t) {
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
            throw Error(dt(314));
    }
    null !== r && r.delete(t), Ff(e, n);
}
function Af(e, t) {
    return tr(e, t);
}
function Df(e, t, n, r) {
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
function jf(e, t, n, r) {
    return new Df(e, t, n, r);
}
function Uf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function $f(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = jf(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function Vf(e, t, n, r, a, l) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) Uf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case Tt:
                return Bf(n.children, a, l, t);
            case Ot:
                (o = 8), (a |= 8);
                break;
            case Rt:
                return ((e = jf(12, n, t, 2 | a)).elementType = Rt), (e.lanes = l), e;
            case It:
                return ((e = jf(13, n, t, a)).elementType = It), (e.lanes = l), e;
            case At:
                return ((e = jf(19, n, t, a)).elementType = At), (e.lanes = l), e;
            case Ut:
                return Hf(n, a, l, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case Lt:
                            o = 10;
                            break e;
                        case Ft:
                            o = 9;
                            break e;
                        case Mt:
                            o = 11;
                            break e;
                        case Dt:
                            o = 14;
                            break e;
                        case jt:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(dt(130, null == e ? e : typeof e, ''));
        }
    return ((t = jf(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
}
function Bf(e, t, n, r) {
    return ((e = jf(7, e, r, t)).lanes = n), e;
}
function Hf(e, t, n, r) {
    return ((e = jf(22, e, r, t)).elementType = Ut), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Wf(e, t, n) {
    return ((e = jf(6, e, null, t)).lanes = n), e;
}
function Qf(e, t, n) {
    return (
        ((t = jf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function qf(e, t, n, r, a) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Er(0)),
        (this.expirationTimes = Er(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Er(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
}
function Kf(e, t, n, r, a, l, o, i, u) {
    return (
        (e = new qf(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
        (l = jf(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Hi(l),
        e
    );
}
function Yf(e) {
    if (!e) return Mo;
    e: {
        if (Gn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(dt(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Uo(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(dt(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (Uo(n)) return Bo(e, n, t);
    }
    return t;
}
function Gf(e, t, n, r, a, l, o, i, u) {
    return (
        ((e = Kf(n, r, !0, e, 0, l, 0, i, u)).context = Yf(null)),
        (n = e.current),
        ((l = Qi((r = uf()), (a = sf(n)))).callback = null != t ? t : null),
        qi(n, l, a),
        (e.current.lanes = a),
        _r(e, a, r),
        ff(e, r),
        e
    );
}
function Xf(e, t, n, r) {
    var a = t.current,
        l = uf(),
        o = sf(a);
    return (
        (n = Yf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Qi(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = qi(a, t, o)) && (cf(e, a, o, l), Ki(e, a, o)),
        o
    );
}
function Zf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Jf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function ed(e, t) {
    Jf(e, t), (e = e.alternate) && Jf(e, t);
}
Tc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Ao.current) Cs = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Cs = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Is(t), ki();
                                break;
                            case 5:
                                lu(t);
                                break;
                            case 1:
                                Uo(t.type) && Ho(t);
                                break;
                            case 4:
                                ru(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                Fo(Ti, r._currentValue), (r._currentValue = a);
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (Fo(iu, 1 & iu.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? Hs(e, t, n)
                                          : (Fo(iu, 1 & iu.current), null !== (e = Xs(e, t, n)) ? e.sibling : null);
                                Fo(iu, 1 & iu.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ys(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    Fo(iu, iu.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return (t.lanes = 0), Os(e, t, n);
                        }
                        return Xs(e, t, n);
                    })(e, t, n)
                );
            Cs = 0 != (131072 & e.flags);
        }
    else (Cs = !1), di && 0 != (1048576 & t.flags) && ii(t, ei, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Gs(e, t), (e = t.pendingProps);
            var a = jo(t, Io.current);
            Ai(t, n), (a = xu(null, t, r, e, a, n));
            var l = Eu();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Uo(r) ? ((l = !0), Ho(t)) : (l = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      Hi(t),
                      (a.updater = fs),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      ms(t, r, e, n),
                      (t = Ms(null, t, r, !0, l, n)))
                    : ((t.tag = 0), di && l && ui(t), Ps(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Gs(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return Uf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === Mt) return 11;
                                if (e === Dt) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = ss(r, e)),
                    a)
                ) {
                    case 0:
                        t = Ls(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Fs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ns(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zs(null, t, r, ss(r.type, e), n);
                        break e;
                }
                throw Error(dt(306, r, ''));
            }
            return t;
        case 0:
            return (r = t.type), (a = t.pendingProps), Ls(e, t, r, (a = t.elementType === r ? a : ss(r, a)), n);
        case 1:
            return (r = t.type), (a = t.pendingProps), Fs(e, t, r, (a = t.elementType === r ? a : ss(r, a)), n);
        case 3:
            e: {
                if ((Is(t), null === e)) throw Error(dt(387));
                (r = t.pendingProps), (a = (l = t.memoizedState).element), Wi(e, t), Gi(t, r, null, n);
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
                        t = As(e, t, r, n, (a = gs(Error(dt(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = As(e, t, r, n, (a = gs(Error(dt(424)), t)));
                        break e;
                    }
                    for (
                        fi = vo(t.stateNode.containerInfo.firstChild),
                            ci = t,
                            di = !0,
                            pi = null,
                            n = zi(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                    if ((ki(), r === a)) {
                        t = Xs(e, t, n);
                        break e;
                    }
                    Ps(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                lu(t),
                null === e && vi(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (o = a.children),
                so(r, a) ? (o = null) : null !== l && so(r, l) && (t.flags |= 32),
                Rs(e, t),
                Ps(e, t, o, n),
                t.child
            );
        case 6:
            return null === e && vi(t), null;
        case 13:
            return Hs(e, t, n);
        case 4:
            return (
                ru(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ni(t, null, r, n)) : Ps(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (a = t.pendingProps), Ns(e, t, r, (a = t.elementType === r ? a : ss(r, a)), n);
        case 7:
            return Ps(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return Ps(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (l = t.memoizedProps),
                    (o = a.value),
                    Fo(Ti, r._currentValue),
                    (r._currentValue = o),
                    null !== l)
                )
                    if (hl(l.value, o)) {
                        if (l.children === a.children && !Ao.current) {
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
                                            (u = Qi(-1, n & -n)).tag = 2;
                                            var s = l.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (l.lanes |= n),
                                            null !== (u = l.alternate) && (u.lanes |= n),
                                            Ii(l.return, n, t),
                                            (i.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === l.tag) o = l.type === t.type ? null : l.child;
                            else if (18 === l.tag) {
                                if (null === (o = l.return)) throw Error(dt(341));
                                (o.lanes |= n),
                                    null !== (i = o.alternate) && (i.lanes |= n),
                                    Ii(o, n, t),
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
                Ps(e, t, a.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ai(t, n),
                (r = r((a = Di(a)))),
                (t.flags |= 1),
                Ps(e, t, r, n),
                t.child
            );
        case 14:
            return (a = ss((r = t.type), t.pendingProps)), zs(e, t, r, (a = ss(r.type, a)), n);
        case 15:
            return Ts(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ss(r, a)),
                Gs(e, t),
                (t.tag = 1),
                Uo(r) ? ((e = !0), Ho(t)) : (e = !1),
                Ai(t, n),
                ps(t, r, a),
                ms(t, r, a, n),
                Ms(null, t, r, !0, e, n)
            );
        case 19:
            return Ys(e, t, n);
        case 22:
            return Os(e, t, n);
    }
    throw Error(dt(156, t.tag));
};
var td =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function nd(e) {
    this._internalRoot = e;
}
function rd(e) {
    this._internalRoot = e;
}
function ad(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function ld(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function od() {}
function id(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if ('function' == typeof a) {
            var i = a;
            a = function () {
                var e = Zf(o);
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
                        var e = Zf(o);
                        l.call(e);
                    };
                }
                var o = Gf(t, r, e, 0, null, !1, 0, '', od);
                return (
                    (e._reactRootContainer = o), (e[So] = o.current), Yl(8 === e.nodeType ? e.parentNode : e), yf(), o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var i = r;
                r = function () {
                    var e = Zf(u);
                    i.call(e);
                };
            }
            var u = Kf(e, 0, !1, null, 0, !1, 0, '', od);
            return (
                (e._reactRootContainer = u),
                (e[So] = u.current),
                Yl(8 === e.nodeType ? e.parentNode : e),
                yf(function () {
                    Xf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Zf(o);
}
(rd.prototype.render = nd.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(dt(409));
        Xf(e, t, null, null);
    }),
    (rd.prototype.unmount = nd.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                yf(function () {
                    Xf(null, e, null, null);
                }),
                    (t[So] = null);
            }
        }),
    (rd.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Rr();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < $r.length && 0 !== t && t < $r[n].priority; n++);
            $r.splice(n, 0, e), 0 === n && Wr(e);
        }
    }),
    (zr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = br(t.pendingLanes);
                    0 !== n && (Cr(t, 1 | n), ff(t, lr()), 0 == (6 & Mc) && ((Yc = lr() + 500), Go()));
                }
                break;
            case 13:
                yf(function () {
                    var t = Vi(e, 1);
                    if (null !== t) {
                        var n = uf();
                        cf(t, e, 1, n);
                    }
                }),
                    ed(e, 1);
        }
    }),
    (Tr = function (e) {
        if (13 === e.tag) {
            var t = Vi(e, 134217728);
            if (null !== t) cf(t, e, 134217728, uf());
            ed(e, 134217728);
        }
    }),
    (Or = function (e) {
        if (13 === e.tag) {
            var t = sf(e),
                n = Vi(e, t);
            if (null !== n) cf(n, e, t, uf());
            ed(e, t);
        }
    }),
    (Rr = function () {
        return Pr;
    }),
    (Lr = function (e, t) {
        var n = Pr;
        try {
            return (Pr = e), t();
        } finally {
            Pr = n;
        }
    }),
    (Tn = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((ln(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = zo(r);
                            if (!a) throw Error(dt(90));
                            en(r), ln(r, a);
                        }
                    }
                }
                break;
            case 'textarea':
                pn(e, n);
                break;
            case 'select':
                null != (t = n.value) && cn(e, !!n.multiple, t, !1);
        }
    }),
    (In = vf),
    (An = yf);
var ud = { usingClientEntryPoint: !1, Events: [Po, No, zo, Fn, Mn, vf] },
    sd = { findFiberByHostInstance: Co, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    cd = {
        bundleType: sd.bundleType,
        version: sd.version,
        rendererPackageName: sd.rendererPackageName,
        rendererConfig: sd.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Jn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            sd.findFiberByHostInstance ||
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
    var fd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fd.isDisabled && fd.supportsFiber)
        try {
            (dr = fd.inject(cd)), (pr = fd);
        } catch (yn) {}
}
(ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ud),
    (ot.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ad(t)) throw Error(dt(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: zt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (ot.createRoot = function (e, t) {
        if (!ad(e)) throw Error(dt(299));
        var n = !1,
            r = '',
            a = td;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = Kf(e, 1, !1, null, 0, n, 0, r, a)),
            (e[So] = t.current),
            Yl(8 === e.nodeType ? e.parentNode : e),
            new nd(t)
        );
    }),
    (ot.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(dt(188));
            throw ((e = Object.keys(e).join(',')), Error(dt(268, e)));
        }
        return (e = null === (e = Jn(t)) ? null : e.stateNode);
    }),
    (ot.flushSync = function (e) {
        return yf(e);
    }),
    (ot.hydrate = function (e, t, n) {
        if (!ld(t)) throw Error(dt(200));
        return id(null, e, t, !0, n);
    }),
    (ot.hydrateRoot = function (e, t, n) {
        if (!ad(e)) throw Error(dt(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            l = '',
            o = td;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Gf(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
            (e[So] = t.current),
            Yl(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a);
        return new rd(t);
    }),
    (ot.render = function (e, t, n) {
        if (!ld(t)) throw Error(dt(200));
        return id(null, e, t, !1, n);
    }),
    (ot.unmountComponentAtNode = function (e) {
        if (!ld(e)) throw Error(dt(40));
        return (
            !!e._reactRootContainer &&
            (yf(function () {
                id(null, null, e, !1, function () {
                    (e._reactRootContainer = null), (e[So] = null);
                });
            }),
            !0)
        );
    }),
    (ot.unstable_batchedUpdates = vf),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!ld(n)) throw Error(dt(200));
        if (null == e || void 0 === e._reactInternals) throw Error(dt(38));
        return id(e, t, n, !1, r);
    }),
    (ot.version = '18.3.1-next-f1338f8080-20240426'),
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
    (lt.exports = ot);
var dd = lt.exports,
    pd = dd;
(at.createRoot = pd.createRoot), (at.hydrateRoot = pd.hydrateRoot);
const hd = V.createContext(void 0);
function md({ children: e }) {
    const [t, n] = V.useState(() => We('rem'));
    return (
        V.useEffect(() => {
            function e() {
                n(We('rem'));
            }
            const t = Ve(e),
                r = Be(e);
            return () => {
                t(), r();
            };
        }, []),
        X.jsx(hd.Provider, { value: t, children: e })
    );
}
const gd = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    vd = {
        small: { weight: 1, name: gd.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: gd.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: gd.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: gd.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    },
    yd = Object.values(vd);
function bd() {
    const { width: e, height: t } = (function () {
            const e = V.useContext(hd);
            if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
            return e;
        })(),
        n = V.useMemo(
            () =>
                (function (e, t) {
                    const n = yd.reduce(
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
                        a = r.names[r.names.length - 1] ?? gd.extraSmall;
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
function wd({ children: e, className: t, ...n }) {
    const { mediaClass: r } = bd();
    return X.jsx('div', { className: je(t, 'media-wrapper', r), ...n, children: e });
}
function kd({ children: e, ...t }) {
    return X.jsx(md, { children: X.jsx(wd, { ...t, children: e }) });
}
const Sd = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new Ze();
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
                if (e === Xe) return Ge;
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
    xd = V.createContext(void 0);
function Ed(e) {
    const t = V.useMemo(Sd, []);
    V.useEffect(() => {
        function e(e) {
            const n = t.takeCurrent(e.keyCode);
            n && n(e);
        }
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    });
    const n = V.useMemo(() => ({ keydown: { register: t.register, unregister: t.unregister } }), [t]);
    return X.jsx(xd.Provider, { value: n, children: e.children });
}
var _d = $d(),
    Cd = (e) => Ad(e, _d),
    Pd = $d();
Cd.write = (e) => Ad(e, Pd);
var Nd = $d();
Cd.onStart = (e) => Ad(e, Nd);
var zd = $d();
Cd.onFrame = (e) => Ad(e, zd);
var Td = $d();
Cd.onFinish = (e) => Ad(e, Td);
var Od = [];
Cd.setTimeout = (e, t) => {
    const n = Cd.now() + t,
        r = () => {
            const e = Od.findIndex((e) => e.cancel == r);
            ~e && Od.splice(e, 1), (Md -= ~e ? 1 : 0);
        },
        a = { time: n, handler: e, cancel: r };
    return Od.splice(Rd(n), 0, a), (Md += 1), Dd(), a;
};
var Rd = (e) => ~(~Od.findIndex((t) => t.time > e) || ~Od.length);
(Cd.cancel = (e) => {
    Nd.delete(e), zd.delete(e), Td.delete(e), _d.delete(e), Pd.delete(e);
}),
    (Cd.sync = (e) => {
        (Id = !0), Cd.batchedUpdates(e), (Id = !1);
    }),
    (Cd.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            (t = e), Cd.onStart(n);
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                Nd.delete(n), (t = null);
            }),
            r
        );
    });
var Ld = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
(Cd.use = (e) => (Ld = e)),
    (Cd.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Cd.batchedUpdates = (e) => e()),
    (Cd.catch = console.error),
    (Cd.frameLoop = 'always'),
    (Cd.advance = () => {
        'demand' !== Cd.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Ud();
    });
var Fd = -1,
    Md = 0,
    Id = !1;
function Ad(e, t) {
    Id ? (t.delete(e), e(0)) : (t.add(e), Dd());
}
function Dd() {
    Fd < 0 && ((Fd = 0), 'demand' !== Cd.frameLoop && Ld(jd));
}
function jd() {
    ~Fd && (Ld(jd), Cd.batchedUpdates(Ud));
}
function Ud() {
    const e = Fd;
    Fd = Cd.now();
    const t = Rd(Fd);
    t && (Vd(Od.splice(0, t), (e) => e.handler()), (Md -= t)),
        Md ? (Nd.flush(), _d.flush(e ? Math.min(64, Fd - e) : 16.667), zd.flush(), Pd.flush(), Td.flush()) : (Fd = -1);
}
function $d() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            (Md += t != e || e.has(n) ? 0 : 1), e.add(n);
        },
        delete: (n) => ((Md -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Md -= t.size), Vd(t, (t) => t(n) && e.add(t)), (Md += e.size), (t = e));
        },
    };
}
function Vd(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Cd.catch(n);
        }
    });
}
var Bd = Object.defineProperty,
    Hd = {};
((e, t) => {
    for (var n in t) Bd(e, n, { get: t[n], enumerable: !0 });
})(Hd, {
    assign: () => tp,
    colors: () => Zd,
    createStringInterpolator: () => Kd,
    skipAnimation: () => Jd,
    to: () => Yd,
    willAdvance: () => ep,
});
var Wd = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Qd = (e, t) => e.forEach(t);
function qd(e, t, n) {
    if (Wd.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Kd,
    Yd,
    Gd = (e) => (Wd.und(e) ? [] : Wd.arr(e) ? e : [e]),
    Xd = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Zd = null,
    Jd = !1,
    ep = function () {},
    tp = (e) => {
        e.to && (Yd = e.to),
            e.now && (Cd.now = e.now),
            void 0 !== e.colors && (Zd = e.colors),
            null != e.skipAnimation && (Jd = e.skipAnimation),
            e.createStringInterpolator && (Kd = e.createStringInterpolator),
            e.requestAnimationFrame && Cd.use(e.requestAnimationFrame),
            e.batchedUpdates && (Cd.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (ep = e.willAdvance),
            e.frameLoop && (Cd.frameLoop = e.frameLoop);
    },
    np = new Set(),
    rp = [],
    ap = [],
    lp = 0,
    op = {
        get idle() {
            return !np.size && !rp.length;
        },
        start(e) {
            lp > e.priority ? (np.add(e), Cd.onStart(ip)) : (up(e), Cd(cp));
        },
        advance: cp,
        sort(e) {
            if (lp) Cd.onFrame(() => op.sort(e));
            else {
                const t = rp.indexOf(e);
                ~t && (rp.splice(t, 1), sp(e));
            }
        },
        clear() {
            (rp = []), np.clear();
        },
    };
function ip() {
    np.forEach(up), np.clear(), Cd(cp);
}
function up(e) {
    rp.includes(e) || sp(e);
}
function sp(e) {
    rp.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(rp, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function cp(e) {
    const t = ap;
    for (let n = 0; n < rp.length; n++) {
        const r = rp[n];
        (lp = r.priority), r.idle || (ep(r), r.advance(e), r.idle || t.push(r));
    }
    return (lp = 0), ((ap = rp).length = 0), (rp = t).length > 0;
}
var fp = '[-+]?\\d*\\.?\\d+',
    dp = fp + '%';
function pp(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var hp = new RegExp('rgb' + pp(fp, fp, fp)),
    mp = new RegExp('rgba' + pp(fp, fp, fp, fp)),
    gp = new RegExp('hsl' + pp(fp, dp, dp)),
    vp = new RegExp('hsla' + pp(fp, dp, dp, fp)),
    yp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    bp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    wp = /^#([0-9a-fA-F]{6})$/,
    kp = /^#([0-9a-fA-F]{8})$/;
function Sp(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function xp(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        l = Sp(a, r, e + 1 / 3),
        o = Sp(a, r, e),
        i = Sp(a, r, e - 1 / 3);
    return (Math.round(255 * l) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * i) << 8);
}
function Ep(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function _p(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Cp(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Pp(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Np(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = wp.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Zd && void 0 !== Zd[e]
                ? Zd[e]
                : (t = hp.exec(e))
                  ? ((Ep(t[1]) << 24) | (Ep(t[2]) << 16) | (Ep(t[3]) << 8) | 255) >>> 0
                  : (t = mp.exec(e))
                    ? ((Ep(t[1]) << 24) | (Ep(t[2]) << 16) | (Ep(t[3]) << 8) | Cp(t[4])) >>> 0
                    : (t = yp.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = kp.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = bp.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = gp.exec(e))
                            ? (255 | xp(_p(t[1]), Pp(t[2]), Pp(t[3]))) >>> 0
                            : (t = vp.exec(e))
                              ? (xp(_p(t[1]), Pp(t[2]), Pp(t[3])) | Cp(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var zp = (e, t, n) => {
    if (Wd.fun(e)) return e;
    if (Wd.arr(e)) return zp({ range: e, output: t, extrapolate: n });
    if (Wd.str(e.output[0])) return Kd(e);
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
var Tp = Symbol.for('FluidValue.get'),
    Op = Symbol.for('FluidValue.observers'),
    Rp = (e) => Boolean(e && e[Tp]),
    Lp = (e) => (e && e[Tp] ? e[Tp]() : e);
function Fp(e, t) {
    const n = e[Op];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Mp = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Ip(this, e);
        }
    },
    Ip = (e, t) => Up(e, Tp, t);
function Ap(e, t) {
    if (e[Tp]) {
        let n = e[Op];
        n || Up(e, Op, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
    }
    return t;
}
function Dp(e, t) {
    const n = e[Op];
    if (n && n.has(t)) {
        const r = n.size - 1;
        r ? n.delete(t) : (e[Op] = null), e.observerRemoved && e.observerRemoved(r, t);
    }
}
var jp,
    Up = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    $p = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Vp = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Bp = new RegExp(`(${$p.source})(%|[a-z]+)`, 'i'),
    Hp = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Wp = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Qp = (e) => {
        const [t, n] = qp(e);
        if (!t || Xd()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Wp.test(n) ? Qp(n) : n || e;
    },
    qp = (e) => {
        const t = Wp.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Kp = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Yp = (e) => {
        jp || (jp = Zd ? new RegExp(`(${Object.keys(Zd).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Lp(e).replace(Wp, Qp).replace(Vp, Np).replace(jp, Np)),
            n = t.map((e) => e.match($p).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => zp({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !Bp.test(t[0]) && (null == (n = t.find((e) => Bp.test(e))) ? void 0 : n.replace($p, ''));
            let l = 0;
            return t[0].replace($p, () => `${r[l++](e)}${a || ''}`).replace(Hp, Kp);
        };
    },
    Gp = 'react-spring: ',
    Xp = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Gp}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Zp = Xp(console.warn);
function Jp(e) {
    return Wd.str(e) && ('#' == e[0] || /\d/.test(e) || (!Xd() && Wp.test(e)) || e in (Zd || {}));
}
Xp(console.warn);
var eh = Xd() ? V.useEffect : V.useLayoutEffect;
function th() {
    const e = V.useState()[1],
        t = (() => {
            const e = V.useRef(!1);
            return (
                eh(
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
var nh = [],
    rh = Symbol.for('Animated:node'),
    ah = (e) => e && e[rh],
    lh = (e, t) => {
        return (n = e), (r = rh), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 });
        var n, r, a;
    },
    oh = (e) => e && e[rh] && e[rh].getPayload(),
    ih = class {
        constructor() {
            lh(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    uh = class extends ih {
        constructor(e) {
            super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Wd.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
            return new uh(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Wd.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            (this.done = !1),
                Wd.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null));
        }
    },
    sh = class extends uh {
        constructor(e) {
            super(0), (this._string = null), (this._toString = zp({ output: [e, e] }));
        }
        static create(e) {
            return new sh(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Wd.str(e)) {
                if (e == this._string) return !1;
                (this._string = e), (this._value = 1);
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            e && (this._toString = zp({ output: [this.getValue(), e] })), (this._value = 0), super.reset();
        }
    },
    ch = { dependencies: null },
    fh = class extends ih {
        constructor(e) {
            super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
            const t = {};
            return (
                qd(this.source, (n, r) => {
                    var a;
                    (a = n) && a[rh] === a ? (t[r] = n.getValue(e)) : Rp(n) ? (t[r] = Lp(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
            this.payload && Qd(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return qd(e, this._addToPayload, t), Array.from(t);
            }
        }
        _addToPayload(e) {
            ch.dependencies && Rp(e) && ch.dependencies.add(e);
            const t = oh(e);
            t && Qd(t, (e) => this.add(e));
        }
    },
    dh = class extends fh {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new dh(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(ph)), !0);
        }
    };
function ph(e) {
    return (Jp(e) ? sh : uh).create(e);
}
var hh = (e, t) => {
        const n = !Wd.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, a) => {
            const l = V.useRef(null),
                o =
                    n &&
                    V.useCallback(
                        (e) => {
                            l.current = (function (e, t) {
                                e && (Wd.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [i, u] = (function (e, t) {
                    const n = new Set();
                    (ch.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) });
                    return (e = new fh(e)), (ch.dependencies = null), [e, n];
                })(r, t),
                s = th(),
                c = () => {
                    const e = l.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && s();
                },
                f = new mh(c, u),
                d = V.useRef();
            var p;
            eh(
                () => (
                    (d.current = f),
                    Qd(u, (e) => Ap(e, f)),
                    () => {
                        d.current && (Qd(d.current.deps, (e) => Dp(e, d.current)), Cd.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    Qd(e.deps, (t) => Dp(t, e));
                }),
                V.useEffect(p, nh);
            const h = t.getComponentProps(i.getValue());
            return V.createElement(e, { ...h, ref: o });
        });
    },
    mh = class {
        constructor(e, t) {
            (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
            'change' == e.type && Cd.write(this.update);
        }
    };
var gh,
    vh,
    yh = Symbol.for('AnimatedComponent'),
    bh = (e) => (Wd.str(e) ? e : e && Wd.str(e.displayName) ? e.displayName : (Wd.fun(e) && e.name) || null),
    wh = (e) => e instanceof Sh,
    kh = 1,
    Sh = class extends Mp {
        constructor() {
            super(...arguments), (this.id = kh++), (this._priority = 0);
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = ah(this);
            return e && e.getValue();
        }
        to(...e) {
            return Hd.to(this, e);
        }
        interpolate(...e) {
            return Zp(`${Gp}The "interpolate" function is deprecated in v9 (use "to" instead)`), Hd.to(this, e);
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
            Fp(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            this.idle || op.sort(this), Fp(this, { type: 'priority', parent: this, priority: e });
        }
    },
    xh = ({ children: e, ...t }) => {
        const n = V.useContext(Eh),
            r = t.pause || !!n.pause,
            a = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = V.useState(() => ({ inputs: t, result: e() })),
                r = V.useRef(),
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
                V.useEffect(() => {
                    (r.current = l), a == n && (n.inputs = n.result = void 0);
                }, [l]),
                l.result
            );
        })(() => ({ pause: r, immediate: a }), [r, a]);
        const { Provider: l } = Eh;
        return V.createElement(l, { value: t }, e);
    },
    Eh =
        ((gh = xh),
        (vh = {}),
        Object.assign(gh, V.createContext(vh)),
        (gh.Provider._context = gh),
        (gh.Consumer._context = gh),
        gh);
(xh.Provider = Eh.Provider), (xh.Consumer = Eh.Consumer);
var _h = class extends Sh {
    constructor(e, t) {
        super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = zp(...t));
        const n = this._get(),
            r = (function (e) {
                const t = ah(e);
                return t ? t.constructor : Wd.arr(e) ? dh : Jp(e) ? sh : uh;
            })(n);
        lh(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (function (e, t) {
            if (Wd.arr(e)) {
                if (!Wd.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (ah(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Ph(this._active) && Nh(this);
    }
    _get() {
        const e = Wd.arr(this.source) ? this.source.map(Lp) : Gd(Lp(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Ph(this._active) &&
            ((this.idle = !1),
            Qd(oh(this), (e) => {
                e.done = !1;
            }),
            Hd.skipAnimation ? (Cd.batchedUpdates(() => this.advance()), Nh(this)) : op.start(this));
    }
    _attach() {
        let e = 1;
        Qd(Gd(this.source), (t) => {
            Rp(t) && Ap(t, this), wh(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
        }),
            (this.priority = e),
            this._start();
    }
    _detach() {
        Qd(Gd(this.source), (e) => {
            Rp(e) && Dp(e, this);
        }),
            this._active.clear(),
            Nh(this);
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Gd(this.source).reduce((e, t) => Math.max(e, (wh(t) ? t.priority : 0) + 1), 0));
    }
};
function Ch(e) {
    return !1 !== e.idle;
}
function Ph(e) {
    return !e.size || Array.from(e).every(Ch);
}
function Nh(e) {
    e.idle ||
        ((e.idle = !0),
        Qd(oh(e), (e) => {
            e.done = !0;
        }),
        Fp(e, { type: 'idle', parent: e }));
}
Hd.assign({ createStringInterpolator: Yp, to: (e, t) => new _h(e, t) });
var zh = /^--/;
function Th(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || zh.test(e) || (Rh.hasOwnProperty(e) && Rh[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Oh = {};
var Rh = {
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
    Lh = ['Webkit', 'Ms', 'Moz', 'O'];
Rh = Object.keys(Rh).reduce(
    (e, t) => (Lh.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Rh,
);
var Fh = /^(matrix|translate|scale|rotate|skew)/,
    Mh = /^(translate)/,
    Ih = /^(rotate|skew)/,
    Ah = (e, t) => (Wd.num(e) && 0 !== e ? e + t : e),
    Dh = (e, t) => (Wd.arr(e) ? e.every((e) => Dh(e, t)) : Wd.num(e) ? e === t : parseFloat(e) === t),
    jh = class extends fh {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                l = [];
            (e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                l.push((e) => [`translate3d(${e.map((e) => Ah(e, 'px')).join(',')})`, Dh(e, 0)])),
                qd(r, (e, t) => {
                    if ('transform' === t) a.push([e || '']), l.push((e) => [e, '' === e]);
                    else if (Fh.test(t)) {
                        if ((delete r[t], Wd.und(e))) return;
                        const n = Mh.test(t) ? 'px' : Ih.test(t) ? 'deg' : '';
                        a.push(Gd(e)),
                            l.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${Ah(a, n)})`, Dh(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Ah(e, n)).join(',')})`,
                                          Dh(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            );
                    }
                }),
                a.length && (r.transform = new Uh(a, l)),
                super(r);
        }
    },
    Uh = class extends Mp {
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
                Qd(this.inputs, (n, r) => {
                    const a = Lp(n[0]),
                        [l, o] = this.transforms[r](Wd.arr(a) ? a : n.map(Lp));
                    (e += ' ' + l), (t = t && o);
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Qd(this.inputs, (e) => Qd(e, (e) => Rp(e) && Ap(e, this)));
        }
        observerRemoved(e) {
            0 == e && Qd(this.inputs, (e) => Qd(e, (e) => Rp(e) && Dp(e, this)));
        }
        eventObserved(e) {
            'change' == e.type && (this._value = null), Fp(this, e);
        }
    };
Hd.assign({
    batchedUpdates: dd.unstable_batchedUpdates,
    createStringInterpolator: Yp,
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
            createAnimatedStyle: n = (e) => new fh(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            l = (e) => {
                const t = bh(e) || 'Anonymous';
                return (
                    ((e = Wd.str(e) ? l[e] || (l[e] = hh(e, a)) : e[yh] || (e[yh] = hh(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        qd(e, (t, n) => {
            Wd.arr(e) && (n = bh(t)), (l[n] = l(t));
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
                            : Oh[t] || (Oh[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = Th(f, r[f]);
                        zh.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== l && (e.scrollTop = l),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== i && e.setAttribute('viewBox', i);
            },
            createAnimatedStyle: (e) => new jh(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ),
    V.createContext({ mode: 'real' });
V.forwardRef(function (e, t) {
    const n = V.useRef(null);
    return (
        V.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return Ye.onHitTest((t) => {
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
    Le.register({
        strings: ye(() => new tt()).singleton(),
        images: ye(() => new Ie(window.R.images.gui.maps.icons)).singleton(),
        atlases: ye(() => new Ie(window.R.atlases)).singleton(),
        videos: be(nt).singleton(),
        views: be(rt).singleton(),
        sounds: be(Je).singleton(),
    });
const $h = { root: '_root_1f7gl_1', card: '_card_1f7gl_7', 'read-the-docs': '_read-the-docs_1f7gl_11' };
function Vh() {
    const [e, t] = V.useState(0);
    return X.jsxs('div', {
        className: $h.base,
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
    const l = n ? kd : B.Fragment;
    a.then(() => {
        at.createRoot(t).render(X.jsx(l, { children: X.jsx(Ed, { children: e }) }));
    });
})(X.jsx(Vh, {}));
