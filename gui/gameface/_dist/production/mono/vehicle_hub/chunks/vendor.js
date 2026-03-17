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
function r(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ('function' == typeof t) {
        var n = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
        };
        n.prototype = t.prototype;
    } else n = {};
    return (
        Object.defineProperty(n, '__esModule', { value: !0 }),
        Object.keys(e).forEach(function (t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
                n,
                t,
                r.get
                    ? r
                    : {
                          enumerable: !0,
                          get: function () {
                              return e[t];
                          },
                      },
            );
        }),
        n
    );
}
var o = { exports: {} },
    i = {},
    a = { exports: {} },
    l = {},
    u = Symbol.for('react.element'),
    s = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    d = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    p = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    g = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    y = Symbol.iterator;
var _ = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    w = Object.assign,
    S = {};
function k(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = S), (this.updater = n || _));
}
function C() {}
function x(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = S), (this.updater = n || _));
}
((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            );
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (k.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (C.prototype = k.prototype));
var O = (x.prototype = new C());
((O.constructor = x), w(O, k.prototype), (O.isPureReactComponent = !0));
var P = Array.isArray,
    E = Object.prototype.hasOwnProperty,
    R = { current: null },
    A = { key: !0, ref: !0, __self: !0, __source: !0 };
function I(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            E.call(t, r) && !A.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) o.children = n;
    else if (1 < l) {
        for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
        o.children = s;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
    return { $$typeof: u, type: e, key: i, ref: a, props: o, _owner: R.current };
}
function M(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === u;
}
var T = /\/+/g;
function j(e, t) {
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
function F(e, t, n, r, o) {
    var i = typeof e;
    ('undefined' !== i && 'boolean' !== i) || (e = null);
    var a = !1;
    if (null === e) a = !0;
    else
        switch (i) {
            case 'string':
            case 'number':
                a = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case u:
                    case s:
                        a = !0;
                }
        }
    if (a)
        return (
            (o = o((a = e))),
            (e = '' === r ? '.' + j(a, 0) : r),
            P(o)
                ? ((n = ''),
                  null != e && (n = e.replace(T, '$&/') + '/'),
                  F(o, t, n, '', function (e) {
                      return e;
                  }))
                : null != o &&
                  (M(o) &&
                      (o = (function (e, t) {
                          return { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(o, n + (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(T, '$&/') + '/') + e)),
                  t.push(o)),
            1
        );
    if (((a = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + j((i = e[l]), l);
            a += F(i, t, n, c, o);
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
        for (e = c.call(e), l = 0; !(i = e.next()).done; ) a += F((i = i.value), t, n, (c = r + j(i, l++)), o);
    else if ('object' === i)
        throw (
            (t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            )
        );
    return a;
}
function V(e, t, n) {
    if (null == e) return e;
    var r = [],
        o = 0;
    return (
        F(e, r, '', '', function (e) {
            return t.call(n, e, o++);
        }),
        r
    );
}
function N(e) {
    if (-1 === e._status) {
        var t = e._result;
        ((t = t()).then(
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
            },
        ),
            -1 === e._status && ((e._status = 0), (e._result = t)));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var L = { current: null },
    z = { transition: null },
    D = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: z, ReactCurrentOwner: R };
function B() {
    throw Error('act(...) is not supported in production builds of React.');
}
((l.Children = {
    map: V,
    forEach: function (e, t, n) {
        V(
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
            V(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            V(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!M(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (l.Component = k),
    (l.Fragment = c),
    (l.Profiler = f),
    (l.PureComponent = x),
    (l.StrictMode = d),
    (l.Suspense = v),
    (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (l.act = B),
    (l.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            o = e.key,
            i = e.ref,
            a = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((i = t.ref), (a = R.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var l = e.type.defaultProps;
            for (s in t) E.call(t, s) && !A.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            l = Array(s);
            for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return { $$typeof: u, type: e.type, key: o, ref: i, props: r, _owner: a };
    }),
    (l.createContext = function (e) {
        return (
            ((e = {
                $$typeof: h,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
            }).Provider = { $$typeof: p, _context: e }),
            (e.Consumer = e)
        );
    }),
    (l.createElement = I),
    (l.createFactory = function (e) {
        var t = I.bind(null, e);
        return ((t.type = e), t);
    }),
    (l.createRef = function () {
        return { current: null };
    }),
    (l.forwardRef = function (e) {
        return { $$typeof: g, render: e };
    }),
    (l.isValidElement = M),
    (l.lazy = function (e) {
        return { $$typeof: b, _payload: { _status: -1, _result: e }, _init: N };
    }),
    (l.memo = function (e, t) {
        return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
    }),
    (l.startTransition = function (e) {
        var t = z.transition;
        z.transition = {};
        try {
            e();
        } finally {
            z.transition = t;
        }
    }),
    (l.unstable_act = B),
    (l.useCallback = function (e, t) {
        return L.current.useCallback(e, t);
    }),
    (l.useContext = function (e) {
        return L.current.useContext(e);
    }),
    (l.useDebugValue = function () {}),
    (l.useDeferredValue = function (e) {
        return L.current.useDeferredValue(e);
    }),
    (l.useEffect = function (e, t) {
        return L.current.useEffect(e, t);
    }),
    (l.useId = function () {
        return L.current.useId();
    }),
    (l.useImperativeHandle = function (e, t, n) {
        return L.current.useImperativeHandle(e, t, n);
    }),
    (l.useInsertionEffect = function (e, t) {
        return L.current.useInsertionEffect(e, t);
    }),
    (l.useLayoutEffect = function (e, t) {
        return L.current.useLayoutEffect(e, t);
    }),
    (l.useMemo = function (e, t) {
        return L.current.useMemo(e, t);
    }),
    (l.useReducer = function (e, t, n) {
        return L.current.useReducer(e, t, n);
    }),
    (l.useRef = function (e) {
        return L.current.useRef(e);
    }),
    (l.useState = function (e) {
        return L.current.useState(e);
    }),
    (l.useSyncExternalStore = function (e, t, n) {
        return L.current.useSyncExternalStore(e, t, n);
    }),
    (l.useTransition = function () {
        return L.current.useTransition();
    }),
    (l.version = '18.3.1'),
    (a.exports = l));
var U = a.exports;
const H = n(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G = U,
    $ = Symbol.for('react.element'),
    q = Symbol.for('react.fragment'),
    W = Object.prototype.hasOwnProperty,
    K = G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
function X(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    for (r in (void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        W.call(t, r) && !Q.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
    return { $$typeof: $, type: e, key: i, ref: a, props: o, _owner: K.current };
}
((i.Fragment = q), (i.jsx = X), (i.jsxs = X), (o.exports = i));
var Y = o.exports,
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
    (Z(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
}
var ee = function () {
    return (
        (ee =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }),
        ee.apply(this, arguments)
    );
};
function te(e, t) {
    var n,
        r,
        o,
        i,
        a = {
            label: 0,
            sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (i = { next: l(0), throw: l(1), return: l(2) }),
        'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
                return this;
            }),
        i
    );
    function l(l) {
        return function (u) {
            return (function (l) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; i && ((i = 0), l[0] && (a = 0)), a; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (o =
                                    2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw || ((o = r.return) && o.call(r), 0)
                                          : r.next) &&
                                !(o = o.call(r, l[1])).done)
                        )
                            return o;
                        switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                            case 0:
                            case 1:
                                o = l;
                                break;
                            case 4:
                                return (a.label++, { value: l[1], done: !1 });
                            case 5:
                                (a.label++, (r = l[1]), (l = [0]));
                                continue;
                            case 7:
                                ((l = a.ops.pop()), a.trys.pop());
                                continue;
                            default:
                                if (
                                    !((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== l[0] && 2 !== l[0]))
                                ) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                    a.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && a.label < o[1]) {
                                    ((a.label = o[1]), (o = l));
                                    break;
                                }
                                if (o && a.label < o[2]) {
                                    ((a.label = o[2]), a.ops.push(l));
                                    break;
                                }
                                (o[2] && a.ops.pop(), a.trys.pop());
                                continue;
                        }
                        l = t.call(e, a);
                    } catch (u) {
                        ((l = [6, u]), (r = 0));
                    } finally {
                        n = o = 0;
                    }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, u]);
        };
    }
}
function ne(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var re = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (J(t, e), t);
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
            return (J(t, e), t);
        })(Error),
    ),
    oe = (function (e) {
        function t(t, n, r, o) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(o, '.')) ||
                this
            );
        }
        return (
            J(t, e),
            (t.assert = function (e, n, r, o, i) {
                if (!e) throw new t(n, r, o, i);
                return e;
            }),
            t
        );
    })(re),
    ie = (function (e) {
        function t(t, n, r) {
            var o = t.toString(),
                i = n.map(function (e) {
                    return e.name.toString();
                });
            i.push(o);
            var a = i.join(' -> '),
                l = "Could not resolve '".concat(o, "'.");
            return (
                r && (l += ' '.concat(r)),
                (l += '\n\n'),
                (l += 'Resolution path: '.concat(a)),
                e.call(this, l) || this
            );
        }
        return (J(t, e), t);
    })(re),
    ae = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                o = "Could not register '".concat(r, "'.");
            return (n && (o += ' '.concat(n)), e.call(this, o) || this);
        }
        return (J(t, e), t);
    })(re),
    le = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ue = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function se(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        o = '',
        i = 0,
        a = 0,
        l = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((i = e), u(), f());
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function u() {
        for (o = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            var u = e.charAt(n);
            if (ce(u)) n++;
            else
                switch (u) {
                    case '(':
                        return (n++, a++, (r = u));
                    case ')':
                        return (n++, l++, (r = u));
                    case '*':
                    case ',':
                        return (n++, (r = u));
                    case '=':
                        return (
                            n++,
                            0 == (1 & i) &&
                                c(function (e) {
                                    var t = a === l + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (a++, !1) : !(')' !== e || (l++, !t)));
                                }),
                            (r = u)
                        );
                    case '/':
                        n++;
                        var d = e.charAt(n);
                        ('/' === d &&
                            (c(function (e) {
                                return '\n' === e;
                            }, !0),
                            n++),
                            '*' === d &&
                                (c(function (t) {
                                    var r = e.charAt(n + 1);
                                    return '*' === t && '/' === r;
                                }, !0),
                                n++));
                        continue;
                    default:
                        if (he(u)) return (s(), r);
                        n++;
                }
        }
    }
    function s() {
        for (var t, i = e.charAt(n), a = ++n; (t = e.charAt(n)), pe.test(t); ) n++;
        return (
            (o = '' + i + e.substring(a, n)),
            'ident' !== (r = 'function' === o || 'class' === o ? o : 'ident') && (o = ''),
            o
        );
    }
    function c(t, r) {
        for (void 0 === r && (r = !1); n < e.length; ) {
            var o = e.charAt(n);
            if (t(o)) return;
            if (!r) {
                if (ce(o)) {
                    n++;
                    continue;
                }
                if (de(o)) {
                    d();
                    continue;
                }
            }
            n++;
        }
    }
    function d() {
        var t = e.charAt(n);
        for (n++; n < e.length; ) {
            var r = e.charAt(n),
                o = e.charAt(n - 1);
            if (r === t && '\\' !== o) return void n++;
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
    function f() {
        return o ? { value: o, type: r } : { type: r };
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
function de(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
var fe = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    pe = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function he(e) {
    return fe.test(e);
}
function ge(e) {
    if ('function' != typeof e) return !1;
    var t = se(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function ve(e) {
    return 'function' == typeof e;
}
var me = Symbol('Awilix Resolver Config');
function be(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function ye(e, t) {
    if (!ve(e)) throw new oe('asFunction', 'fn', 'function', e);
    t = Ce({ lifetime: ue.TRANSIENT }, t, e[me]);
    var n = Pe(e);
    return Se(we(ee({ resolve: n }, t)));
}
function _e(e, t) {
    if (!ve(e)) throw new oe('asClass', 'Type', 'class', e);
    t = Ce({ lifetime: ue.TRANSIENT }, t, e[me]);
    var n = Pe(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return Se(we(ee(ee({}, t), { resolve: n })));
}
function we(e) {
    function t(e) {
        return we(ee(ee({}, this), { lifetime: e }));
    }
    function n(e) {
        return we(ee(ee({}, this), { injectionMode: e }));
    }
    return xe(e, {
        setLifetime: t,
        inject: function (e) {
            return we(ee(ee({}, this), { injector: e }));
        },
        transient: ke(t, ue.TRANSIENT),
        scoped: ke(t, ue.SCOPED),
        singleton: ke(t, ue.SINGLETON),
        setInjectionMode: n,
        proxy: ke(n, le.PROXY),
        classic: ke(n, le.CLASSIC),
    });
}
function Se(e) {
    return xe(e, {
        disposer: function (e) {
            return Se(ee(ee({}, this), { dispose: e }));
        },
    });
}
function ke(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function Ce(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, ne([{}, e], t, !1));
}
function xe(e, t) {
    return ee(ee({}, e), t);
}
function Oe(e, t) {
    var n,
        r = t(e),
        o = ((n = ne(ne([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, o, i, a, l, u, s;
                          return te(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (o in ((t = e.cradle), (n = []), t)) n.push(o);
                                      ((i = 0), (c.label = 1));
                                  case 1:
                                      return i < n.length ? ((o = n[i]) in t ? [4, o] : [3, 3]) : [3, 4];
                                  case 2:
                                      (c.sent(), (c.label = 3));
                                  case 3:
                                      return (i++, [3, 1]);
                                  case 4:
                                      for (u in ((l = []), (a = r))) l.push(u);
                                      ((s = 0), (c.label = 5));
                                  case 5:
                                      return s < l.length ? ((u = l[s]) in a ? [4, u] : [3, 7]) : [3, 8];
                                  case 6:
                                      (c.sent(), (c.label = 7));
                                  case 7:
                                      return (s++, [3, 5]);
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
                return o;
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (o.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
            },
        },
    );
}
function Pe(e, t) {
    t || (t = e);
    var n = Ee(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || le.PROXY) !== le.CLASSIC) {
            var r = this.injector ? Oe(t, this.injector) : t.cradle;
            return e(r);
        }
        if (n.length > 0) {
            var o = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                i = n.map(function (e) {
                    return o(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, i);
        }
        return e();
    };
}
function Ee(e) {
    var t = (function (e) {
        var t = se(e),
            n = t.next,
            r = t.done,
            o = [],
            i = null;
        for (d(); !r(); )
            switch (i.type) {
                case 'class':
                    if ((s(), !c())) return null;
                    d();
                    break;
                case 'function':
                    ('ident' !== (a = d()).type && '*' !== a.type) || d();
                    break;
                case '(':
                    u();
                    break;
                case ')':
                    return o;
                case 'ident':
                    var a,
                        l = { name: i.value, optional: !1 };
                    if ('async' === i.value && (a = d()) && '=' !== a.type) break;
                    return (o.push(l), o);
                default:
                    throw f();
            }
        return o;
        function u() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((d(), i.type)) {
                    case 'ident':
                        e.name = i.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        (o.push(e), (e = { name: '', optional: !1 }));
                        break;
                    case ')':
                        return void (e.name && o.push(e));
                    default:
                        throw f();
                }
        }
        function s() {
            for (; !c() && !r(); ) d(1);
        }
        function c() {
            return 'ident' === i.type && 'constructor' === i.value;
        }
        function d(e) {
            return (void 0 === e && (e = 0), (i = n(e)));
        }
        function f() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(i.type, ' token')
                    .concat(i.value ? ' ('.concat(i.value, ')') : ''),
            );
        }
    })(e.toString());
    if (!t) {
        var n = Object.getPrototypeOf(e);
        return 'function' == typeof n && n !== Function.prototype ? Ee(n) : [];
    }
    return t;
}
var Re = Symbol('familyTree'),
    Ae = Symbol('rollUpRegistrations'),
    Ie = 'AwilixContainerCradle';
function Me(e) {
    return (void 0 === e && (e = {}), Te(e));
}
function Te(e, t, n) {
    var r;
    e = ee({ injectionMode: le.PROXY, strict: !1 }, e);
    var o = null != n ? n : [],
        i = {},
        a = new Proxy(
            {},
            {
                get: function (e, t) {
                    return g(t);
                },
                set: function (e, t) {
                    throw new Error(
                        'Attempted setting property "'.concat(t, '" on container cradle - this is not allowed.'),
                    );
                },
                ownKeys: function () {
                    return Array.from(a);
                },
                getOwnPropertyDescriptor: function (e, t) {
                    var n = d();
                    if (Object.getOwnPropertyDescriptor(n, t)) return { enumerable: !0, configurable: !0 };
                },
            },
        ),
        l =
            (((r = {
                options: e,
                cradle: a,
                inspect: function () {
                    return '[AwilixContainer ('
                        .concat(t ? 'scoped, ' : '', 'registrations: ')
                        .concat(Object.keys(l.registrations).length, ')]');
                },
                cache: new Map(),
                loadModules: function () {
                    throw new Error('loadModules is not supported in the browser.');
                },
                createScope: function () {
                    return Te(e, l, o);
                },
                register: function (n, r) {
                    for (
                        var o = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            a = ne(ne([], Object.keys(o), !0), Object.getOwnPropertySymbols(o), !0),
                            u = 0,
                            s = a;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            d = o[c];
                        if (e.strict && d.lifetime === ue.SINGLETON && t)
                            throw new ae(c, 'Cannot register a singleton on a scoped container.');
                        i[c] = d;
                    }
                    return l;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(l);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        oe.assert(e, n, r, 'a registration, function or class', e),
                        oe.assert('function' == typeof e, n, r, 'a function or class', e),
                        (ge(e) ? _e(e, t) : ye(e, t)).resolve(l)
                    );
                },
                resolve: g,
                hasRegistration: function (e) {
                    return !!h(e);
                },
                dispose: function () {
                    var e = Array.from(l.cache.entries());
                    return (
                        l.cache.clear(),
                        Promise.all(
                            e.map(function (e) {
                                var t = e[1],
                                    n = t.resolver,
                                    r = t.value,
                                    o = n;
                                return o.dispose
                                    ? Promise.resolve().then(function () {
                                          return o.dispose(r);
                                      })
                                    : Promise.resolve();
                            }),
                        ).then(function () {})
                    );
                },
                getRegistration: h,
            })[Ae] = d),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return d();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [l].concat(t[Re]) : [l];
    l[Re] = u;
    var s,
        c = (s = u)[s.length - 1];
    return l;
    function d() {
        return ee(ee({}, t && t[Ae]()), i);
    }
    function f() {
        var e, t, n, r, o;
        return te(this, function (i) {
            switch (i.label) {
                case 0:
                    for (r in ((e = d()), (n = []), (t = e))) n.push(r);
                    ((o = 0), (i.label = 1));
                case 1:
                    return o < n.length ? ((r = n[o]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    (i.sent(), (i.label = 3));
                case 3:
                    return (o++, [3, 1]);
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(a);
    }
    function h(e) {
        var n = i[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function g(t, n) {
        n = n || {};
        try {
            var r = h(t);
            if (
                o.some(function (e) {
                    return e.name === t;
                })
            )
                throw new ie(t, o, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Me;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Ie;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return f;
                }
                if (n.allowUnregistered) return;
                throw new ie(t, o);
            }
            var i = r.lifetime || ue.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var a = o.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = i),
                        ((t = r) === ue.SINGLETON && n !== ue.SINGLETON) || (t === ue.SCOPED && n === ue.TRANSIENT)
                    );
                });
                if (a > -1)
                    throw new ie(
                        t,
                        o,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(o[a].name.toString(), "'"),
                    );
            }
            o.push({ name: t, lifetime: i });
            var u = void 0,
                s = void 0;
            switch (i) {
                case ue.TRANSIENT:
                    s = r.resolve(l);
                    break;
                case ue.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : l)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ue.SCOPED:
                    if (void 0 !== (u = l.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    ((s = r.resolve(l)), l.cache.set(t, { resolver: r, value: s }));
                    break;
                default:
                    throw new ie(t, o, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (o.pop(), s);
        } catch (d) {
            throw ((o.length = 0), d);
        }
    }
}
var je = {},
    Fe = { exports: {} },
    Ve = {},
    Ne = { exports: {} },
    Le = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(!(function (e) {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
                i = e[r];
            if (!(0 < o(i, t))) break e;
            ((e[r] = t), (e[n] = i), (n = r));
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
            e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
                var l = 2 * (r + 1) - 1,
                    u = e[l],
                    s = l + 1,
                    c = e[s];
                if (0 > o(u, n))
                    s < i && 0 > o(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[l] = n), (r = l));
                else {
                    if (!(s < i && 0 > o(c, n))) break e;
                    ((e[r] = c), (e[s] = n), (r = s));
                }
            }
        }
        return t;
    }
    function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
    }
    if ('object' == typeof performance && 'function' == typeof performance.now) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function () {
            return a.now() - l;
        };
    }
    var u = [],
        s = [],
        c = 1,
        d = null,
        f = 3,
        p = !1,
        h = !1,
        g = !1,
        v = 'function' == typeof setTimeout ? setTimeout : null,
        m = 'function' == typeof clearTimeout ? clearTimeout : null,
        b = 'undefined' != typeof setImmediate ? setImmediate : null;
    function y(e) {
        for (var o = n(s); null !== o; ) {
            if (null === o.callback) r(s);
            else {
                if (!(o.startTime <= e)) break;
                (r(s), (o.sortIndex = o.expirationTime), t(u, o));
            }
            o = n(s);
        }
    }
    function _(e) {
        if (((g = !1), y(e), !h))
            if (null !== n(u)) ((h = !0), M(w));
            else {
                var t = n(s);
                null !== t && T(_, t.startTime - e);
            }
    }
    function w(t, o) {
        ((h = !1), g && ((g = !1), m(x), (x = -1)), (p = !0));
        var i = f;
        try {
            for (y(o), d = n(u); null !== d && (!(d.expirationTime > o) || (t && !E())); ) {
                var a = d.callback;
                if ('function' == typeof a) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var l = a(d.expirationTime <= o);
                    ((o = e.unstable_now()), 'function' == typeof l ? (d.callback = l) : d === n(u) && r(u), y(o));
                } else r(u);
                d = n(u);
            }
            if (null !== d) var c = !0;
            else {
                var v = n(s);
                (null !== v && T(_, v.startTime - o), (c = !1));
            }
            return c;
        } finally {
            ((d = null), (f = i), (p = !1));
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
        k = !1,
        C = null,
        x = -1,
        O = 5,
        P = -1;
    function E() {
        return !(e.unstable_now() - P < O);
    }
    function R() {
        if (null !== C) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = C(!0, t);
            } finally {
                n ? S() : ((k = !1), (C = null));
            }
        } else k = !1;
    }
    if ('function' == typeof b)
        S = function () {
            b(R);
        };
    else if ('undefined' != typeof MessageChannel) {
        var A = new MessageChannel(),
            I = A.port2;
        ((A.port1.onmessage = R),
            (S = function () {
                I.postMessage(null);
            }));
    } else
        S = function () {
            v(R, 0);
        };
    function M(e) {
        ((C = e), k || ((k = !0), S()));
    }
    function T(t, n) {
        x = v(function () {
            t(e.unstable_now());
        }, n);
    }
    ((e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
            e.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            h || p || ((h = !0), M(w));
        }),
        (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (O = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (e) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = f;
            }
            var n = f;
            f = t;
            try {
                return e();
            } finally {
                f = n;
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
            var n = f;
            f = e;
            try {
                return t();
            } finally {
                f = n;
            }
        }),
        (e.unstable_scheduleCallback = function (r, o, i) {
            var a = e.unstable_now();
            switch (
                ('object' == typeof i && null !== i
                    ? (i = 'number' == typeof (i = i.delay) && 0 < i ? a + i : a)
                    : (i = a),
                r)
            ) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3;
            }
            return (
                (r = {
                    id: c++,
                    callback: o,
                    priorityLevel: r,
                    startTime: i,
                    expirationTime: (l = i + l),
                    sortIndex: -1,
                }),
                i > a
                    ? ((r.sortIndex = i),
                      t(s, r),
                      null === n(u) && r === n(s) && (g ? (m(x), (x = -1)) : (g = !0), T(_, i - a)))
                    : ((r.sortIndex = l), t(u, r), h || p || ((h = !0), M(w))),
                r
            );
        }),
        (e.unstable_shouldYield = E),
        (e.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
                var n = f;
                f = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    f = n;
                }
            };
        }));
})(Le),
    (Ne.exports = Le));
var ze = Ne.exports,
    De = U,
    Be = ze;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ue(e) {
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
var He = new Set(),
    Ge = {};
function $e(e, t) {
    (qe(e, t), qe(e + 'Capture', t));
}
function qe(e, t) {
    for (Ge[e] = t, e = 0; e < t.length; e++) He.add(t[e]);
}
var We = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Ke = Object.prototype.hasOwnProperty,
    Qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Xe = {},
    Ye = {};
function Ze(e, t, n, r, o, i, a) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = a));
}
var Je = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Je[e] = new Ze(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Je[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Je[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Je[e] = new Ze(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Je[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Je[e] = new Ze(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Je[e] = new Ze(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Je[e] = new Ze(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Je[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var et = /[\-:]([a-z])/g;
function tt(e) {
    return e[1].toUpperCase();
}
function nt(e, t, n, r) {
    var o = Je.hasOwnProperty(t) ? Je[t] : null;
    (null !== o
        ? 0 !== o.type
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
        })(t, n, o, r) && (n = null),
        r || null === o
            ? (function (e) {
                  return !!Ke.call(Ye, e) || (!Ke.call(Xe, e) && (Qe.test(e) ? (Ye[e] = !0) : ((Xe[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(et, tt);
        Je[t] = new Ze(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(et, tt);
        Je[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(et, tt);
        Je[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Je[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Je.xlinkHref = new Ze('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Je[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var rt = De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ot = Symbol.for('react.element'),
    it = Symbol.for('react.portal'),
    at = Symbol.for('react.fragment'),
    lt = Symbol.for('react.strict_mode'),
    ut = Symbol.for('react.profiler'),
    st = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    dt = Symbol.for('react.forward_ref'),
    ft = Symbol.for('react.suspense'),
    pt = Symbol.for('react.suspense_list'),
    ht = Symbol.for('react.memo'),
    gt = Symbol.for('react.lazy'),
    vt = Symbol.for('react.offscreen'),
    mt = Symbol.iterator;
function bt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (mt && e[mt]) || e['@@iterator'])
          ? e
          : null;
}
var yt,
    _t = Object.assign;
function wt(e) {
    if (void 0 === yt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            yt = (t && t[1]) || '';
        }
    return '\n' + yt + e;
}
var St = !1;
function kt(e, t) {
    if (!e || St) return '';
    St = !0;
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
                var o = s.stack.split('\n'), i = r.stack.split('\n'), a = o.length - 1, l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];
            )
                l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                    if (1 !== a || 1 !== l)
                        do {
                            if ((a--, 0 > --l || o[a] !== i[l])) {
                                var u = '\n' + o[a].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        u.includes('<anonymous>') &&
                                        (u = u.replace('<anonymous>', e.displayName)),
                                    u
                                );
                            }
                        } while (1 <= a && 0 <= l);
                    break;
                }
        }
    } finally {
        ((St = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? wt(e) : '';
}
function Ct(e) {
    switch (e.tag) {
        case 5:
            return wt(e.type);
        case 16:
            return wt('Lazy');
        case 13:
            return wt('Suspense');
        case 19:
            return wt('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = kt(e.type, !1));
        case 11:
            return (e = kt(e.type.render, !1));
        case 1:
            return (e = kt(e.type, !0));
        default:
            return '';
    }
}
function xt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case at:
            return 'Fragment';
        case it:
            return 'Portal';
        case ut:
            return 'Profiler';
        case lt:
            return 'StrictMode';
        case ft:
            return 'Suspense';
        case pt:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ct:
                return (e.displayName || 'Context') + '.Consumer';
            case st:
                return (e._context.displayName || 'Context') + '.Provider';
            case dt:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case ht:
                return null !== (t = e.displayName || null) ? t : xt(e.type) || 'Memo';
            case gt:
                ((t = e._payload), (e = e._init));
                try {
                    return xt(e(t));
                } catch (n) {}
        }
    return null;
}
function Ot(e) {
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
            return xt(t);
        case 8:
            return t === lt ? 'StrictMode' : 'Mode';
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
function Pt(e) {
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
function Et(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Rt(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Et(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var o = n.get,
                    i = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return o.call(this);
                        },
                        set: function (e) {
                            ((r = '' + e), i.call(this, e));
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
                            ((e._valueTracker = null), delete e[t]);
                        },
                    }
                );
            }
        })(e));
}
function At(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Et(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function It(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function Mt(e, t) {
    var n = t.checked;
    return _t({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Tt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Pt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function jt(e, t) {
    null != (t = t.checked) && nt(e, 'checked', t, !1);
}
function Ft(e, t) {
    jt(e, t);
    var n = Pt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Nt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Nt(e, t.type, Pt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Vt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Nt(e, t, n) {
    ('number' === t && It(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Lt = Array.isArray;
function zt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            ((o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Pt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return ((e[o].selected = !0), void (r && (e[o].defaultSelected = !0)));
            null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
    }
}
function Dt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ue(91));
    return _t({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Bt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ue(92));
            if (Lt(n)) {
                if (1 < n.length) throw Error(Ue(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Pt(n) };
}
function Ut(e, t) {
    var n = Pt(t.value),
        r = Pt(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function Ht(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Gt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function $t(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Gt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var qt,
    Wt,
    Kt =
        ((Wt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (qt = qt || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = qt.firstChild;
                    e.firstChild;
                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return Wt(e, t);
                  });
              }
            : Wt);
function Qt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var Xt = {
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
    Yt = ['Webkit', 'ms', 'Moz', 'O'];
function Zt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Xt.hasOwnProperty(e) && Xt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Jt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                o = Zt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o));
        }
}
Object.keys(Xt).forEach(function (e) {
    Yt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xt[t] = Xt[e]));
    });
});
var en = _t(
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
function tn(e, t) {
    if (t) {
        if (en[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ue(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Ue(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Ue(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Ue(62));
    }
}
function nn(e, t) {
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
var rn = null;
function on(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var an = null,
    ln = null,
    un = null;
function sn(e) {
    if ((e = ra(e))) {
        if ('function' != typeof an) throw Error(Ue(280));
        var t = e.stateNode;
        t && ((t = ia(t)), an(e.stateNode, e.type, t));
    }
}
function cn(e) {
    ln ? (un ? un.push(e) : (un = [e])) : (ln = e);
}
function dn() {
    if (ln) {
        var e = ln,
            t = un;
        if (((un = ln = null), sn(e), t)) for (e = 0; e < t.length; e++) sn(t[e]);
    }
}
function fn(e, t) {
    return e(t);
}
function pn() {}
var hn = !1;
function gn(e, t, n) {
    if (hn) return e(t, n);
    hn = !0;
    try {
        return fn(e, t, n);
    } finally {
        ((hn = !1), (null !== ln || null !== un) && (pn(), dn()));
    }
}
function vn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = ia(n);
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
            ((r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r));
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && 'function' != typeof n) throw Error(Ue(231, t, typeof n));
    return n;
}
var mn = !1;
if (We)
    try {
        var bn = {};
        (Object.defineProperty(bn, 'passive', {
            get: function () {
                mn = !0;
            },
        }),
            window.addEventListener('test', bn, bn),
            window.removeEventListener('test', bn, bn));
    } catch (Wt) {
        mn = !1;
    }
function yn(e, t, n, r, o, i, a, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var _n = !1,
    wn = null,
    Sn = !1,
    kn = null,
    Cn = {
        onError: function (e) {
            ((_n = !0), (wn = e));
        },
    };
function xn(e, t, n, r, o, i, a, l, u) {
    ((_n = !1), (wn = null), yn.apply(Cn, arguments));
}
function On(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do {
            (0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return));
        } while (e);
    }
    return 3 === t.tag ? n : null;
}
function Pn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function En(e) {
    if (On(e) !== e) throw Error(Ue(188));
}
function Rn(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = On(e))) throw Error(Ue(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                    if (null !== (r = o.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (o.child === i.child) {
                    for (i = o.child; i; ) {
                        if (i === n) return (En(o), e);
                        if (i === r) return (En(o), t);
                        i = i.sibling;
                    }
                    throw Error(Ue(188));
                }
                if (n.return !== r.return) ((n = o), (r = i));
                else {
                    for (var a = !1, l = o.child; l; ) {
                        if (l === n) {
                            ((a = !0), (n = o), (r = i));
                            break;
                        }
                        if (l === r) {
                            ((a = !0), (r = o), (n = i));
                            break;
                        }
                        l = l.sibling;
                    }
                    if (!a) {
                        for (l = i.child; l; ) {
                            if (l === n) {
                                ((a = !0), (n = i), (r = o));
                                break;
                            }
                            if (l === r) {
                                ((a = !0), (r = i), (n = o));
                                break;
                            }
                            l = l.sibling;
                        }
                        if (!a) throw Error(Ue(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ue(190));
            }
            if (3 !== n.tag) throw Error(Ue(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? An(e)
        : null;
}
function An(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = An(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var In = Be.unstable_scheduleCallback,
    Mn = Be.unstable_cancelCallback,
    Tn = Be.unstable_shouldYield,
    jn = Be.unstable_requestPaint,
    Fn = Be.unstable_now,
    Vn = Be.unstable_getCurrentPriorityLevel,
    Nn = Be.unstable_ImmediatePriority,
    Ln = Be.unstable_UserBlockingPriority,
    zn = Be.unstable_NormalPriority,
    Dn = Be.unstable_LowPriority,
    Bn = Be.unstable_IdlePriority,
    Un = null,
    Hn = null;
var Gn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - (($n(e) / qn) | 0)) | 0);
          },
    $n = Math.log,
    qn = Math.LN2;
var Wn = 64,
    Kn = 4194304;
function Qn(e) {
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
function Xn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = 268435455 & n;
    if (0 !== a) {
        var l = a & ~o;
        0 !== l ? (r = Qn(l)) : 0 !== (i &= a) && (r = Qn(i));
    } else 0 !== (a = n & ~o) ? (r = Qn(a)) : 0 !== i && (r = Qn(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (i = t & -t) || (16 === o && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((o = 1 << (n = 31 - Gn(t))), (r |= e[n]), (t &= ~o));
    return r;
}
function Yn(e, t) {
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
function Zn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Jn() {
    var e = Wn;
    return (0 == (4194240 & (Wn <<= 1)) && (Wn = 64), e);
}
function er(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function tr(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Gn(t))] = n));
}
function nr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Gn(n),
            o = 1 << r;
        ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
}
var rr = 0;
function or(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var ir,
    ar,
    lr,
    ur,
    sr,
    cr = !1,
    dr = [],
    fr = null,
    pr = null,
    hr = null,
    gr = new Map(),
    vr = new Map(),
    mr = [],
    br =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function yr(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            fr = null;
            break;
        case 'dragenter':
        case 'dragleave':
            pr = null;
            break;
        case 'mouseover':
        case 'mouseout':
            hr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            gr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            vr.delete(t.pointerId);
    }
}
function _r(e, t, n, r, o, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
          null !== t && null !== (t = ra(t)) && ar(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
}
function wr(e) {
    var t = na(e.target);
    if (null !== t) {
        var n = On(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Pn(n)))
                    return (
                        (e.blockedOn = t),
                        void sr(e.priority, function () {
                            lr(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Sr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Tr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ra(n)) && ar(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((rn = r), n.target.dispatchEvent(r), (rn = null), t.shift());
    }
    return !0;
}
function kr(e, t, n) {
    Sr(e) && n.delete(t);
}
function Cr() {
    ((cr = !1),
        null !== fr && Sr(fr) && (fr = null),
        null !== pr && Sr(pr) && (pr = null),
        null !== hr && Sr(hr) && (hr = null),
        gr.forEach(kr),
        vr.forEach(kr));
}
function xr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), cr || ((cr = !0), Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Cr)));
}
function Or(e) {
    function t(t) {
        return xr(t, e);
    }
    if (0 < dr.length) {
        xr(dr[0], e);
        for (var n = 1; n < dr.length; n++) {
            var r = dr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== fr && xr(fr, e),
            null !== pr && xr(pr, e),
            null !== hr && xr(hr, e),
            gr.forEach(t),
            vr.forEach(t),
            n = 0;
        n < mr.length;
        n++
    )
        (r = mr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < mr.length && null === (n = mr[0]).blockedOn; ) (wr(n), null === n.blockedOn && mr.shift());
}
var Pr = rt.ReactCurrentBatchConfig,
    Er = !0;
function Rr(e, t, n, r) {
    var o = rr,
        i = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 1), Ir(e, t, n, r));
    } finally {
        ((rr = o), (Pr.transition = i));
    }
}
function Ar(e, t, n, r) {
    var o = rr,
        i = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 4), Ir(e, t, n, r));
    } finally {
        ((rr = o), (Pr.transition = i));
    }
}
function Ir(e, t, n, r) {
    if (Er) {
        var o = Tr(e, t, n, r);
        if (null === o) (Ei(e, t, r, Mr, n), yr(e, r));
        else if (
            (function (e, t, n, r, o) {
                switch (t) {
                    case 'focusin':
                        return ((fr = _r(fr, e, t, n, r, o)), !0);
                    case 'dragenter':
                        return ((pr = _r(pr, e, t, n, r, o)), !0);
                    case 'mouseover':
                        return ((hr = _r(hr, e, t, n, r, o)), !0);
                    case 'pointerover':
                        var i = o.pointerId;
                        return (gr.set(i, _r(gr.get(i) || null, e, t, n, r, o)), !0);
                    case 'gotpointercapture':
                        return ((i = o.pointerId), vr.set(i, _r(vr.get(i) || null, e, t, n, r, o)), !0);
                }
                return !1;
            })(o, e, t, n, r)
        )
            r.stopPropagation();
        else if ((yr(e, r), 4 & t && -1 < br.indexOf(e))) {
            for (; null !== o; ) {
                var i = ra(o);
                if ((null !== i && ir(i), null === (i = Tr(e, t, n, r)) && Ei(e, t, r, Mr, n), i === o)) break;
                o = i;
            }
            null !== o && r.stopPropagation();
        } else Ei(e, t, r, null, n);
    }
}
var Mr = null;
function Tr(e, t, n, r) {
    if (((Mr = null), null !== (e = na((e = on(r))))))
        if (null === (t = On(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Pn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Mr = e), null);
}
function jr(e) {
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
            switch (Vn()) {
                case Nn:
                    return 1;
                case Ln:
                    return 4;
                case zn:
                case Dn:
                    return 16;
                case Bn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Fr = null,
    Vr = null,
    Nr = null;
function Lr() {
    if (Nr) return Nr;
    var e,
        t,
        n = Vr,
        r = n.length,
        o = 'value' in Fr ? Fr.value : Fr.textContent,
        i = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
    return (Nr = o.slice(e, 1 < t ? 1 - t : void 0));
}
function zr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Dr() {
    return !0;
}
function Br() {
    return !1;
}
function Ur(e) {
    function t(t, n, r, o, i) {
        for (var a in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
        return (
            (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue)
                ? Dr
                : Br),
            (this.isPropagationStopped = Br),
            this
        );
    }
    return (
        _t(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Dr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Dr));
            },
            persist: function () {},
            isPersistent: Dr,
        }),
        t
    );
}
var Hr,
    Gr,
    $r,
    qr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Wr = Ur(qr),
    Kr = _t({}, qr, { view: 0, detail: 0 }),
    Qr = Ur(Kr),
    Xr = _t({}, Kr, {
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
        getModifierState: uo,
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
                : (e !== $r &&
                      ($r && 'mousemove' === e.type
                          ? ((Hr = e.screenX - $r.screenX), (Gr = e.screenY - $r.screenY))
                          : (Gr = Hr = 0),
                      ($r = e)),
                  Hr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Gr;
        },
    }),
    Yr = Ur(Xr),
    Zr = Ur(_t({}, Xr, { dataTransfer: 0 })),
    Jr = Ur(_t({}, Kr, { relatedTarget: 0 })),
    eo = Ur(_t({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    to = _t({}, qr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    no = Ur(to),
    ro = Ur(_t({}, qr, { data: 0 })),
    oo = {
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
    io = {
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
    ao = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function lo(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ao[e]) && !!t[e];
}
function uo() {
    return lo;
}
var so = _t({}, Kr, {
        key: function (e) {
            if (e.key) {
                var t = oo[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = zr(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? io[e.keyCode] || 'Unidentified'
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
        getModifierState: uo,
        charCode: function (e) {
            return 'keypress' === e.type ? zr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? zr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    co = Ur(so),
    fo = Ur(
        _t({}, Xr, {
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
    po = Ur(
        _t({}, Kr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: uo,
        }),
    ),
    ho = Ur(_t({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    go = _t({}, Xr, {
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
    vo = Ur(go),
    mo = [9, 13, 27, 32],
    bo = We && 'CompositionEvent' in window,
    yo = null;
We && 'documentMode' in document && (yo = document.documentMode);
var _o = We && 'TextEvent' in window && !yo,
    wo = We && (!bo || (yo && 8 < yo && 11 >= yo)),
    So = String.fromCharCode(32),
    ko = !1;
function Co(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== mo.indexOf(t.keyCode);
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
function xo(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Oo = !1;
var Po = {
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
function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Po[e.type] : 'textarea' === t;
}
function Ro(e, t, n, r) {
    (cn(r),
        0 < (t = Ai(t, 'onChange')).length &&
            ((n = new Wr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ao = null,
    Io = null;
function Mo(e) {
    Si(e, 0);
}
function To(e) {
    if (At(oa(e))) return e;
}
function jo(e, t) {
    if ('change' === e) return t;
}
var Fo = !1;
if (We) {
    var Vo;
    if (We) {
        var No = 'oninput' in document;
        if (!No) {
            var Lo = document.createElement('div');
            (Lo.setAttribute('oninput', 'return;'), (No = 'function' == typeof Lo.oninput));
        }
        Vo = No;
    } else Vo = !1;
    Fo = Vo && (!document.documentMode || 9 < document.documentMode);
}
function zo() {
    Ao && (Ao.detachEvent('onpropertychange', Do), (Io = Ao = null));
}
function Do(e) {
    if ('value' === e.propertyName && To(Io)) {
        var t = [];
        (Ro(t, Io, e, on(e)), gn(Mo, t));
    }
}
function Bo(e, t, n) {
    'focusin' === e ? (zo(), (Io = n), (Ao = t).attachEvent('onpropertychange', Do)) : 'focusout' === e && zo();
}
function Uo(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return To(Io);
}
function Ho(e, t) {
    if ('click' === e) return To(t);
}
function Go(e, t) {
    if ('input' === e || 'change' === e) return To(t);
}
var $o =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function qo(e, t) {
    if ($o(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ke.call(t, o) || !$o(e[o], t[o])) return !1;
    }
    return !0;
}
function Wo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ko(e, t) {
    var n,
        r = Wo(e);
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
        r = Wo(r);
    }
}
function Qo(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Qo(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Xo() {
    for (var e = window, t = It(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = It((e = t.contentWindow).document);
    }
    return t;
}
function Yo(e) {
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
function Zo(e) {
    var t = Xo(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qo(n.ownerDocument.documentElement, n)) {
        if (null !== r && Yo(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                ((r = void 0 === r.end ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Ko(n, i)));
                var a = Ko(n, r);
                o &&
                    a &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== a.node ||
                        e.focusOffset !== a.offset) &&
                    ((t = t.createRange()).setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            (((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
}
var Jo = We && 'documentMode' in document && 11 >= document.documentMode,
    ei = null,
    ti = null,
    ni = null,
    ri = !1;
function oi(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ri ||
        null == ei ||
        ei !== It(r) ||
        ('selectionStart' in (r = ei) && Yo(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ni && qo(ni, r)) ||
            ((ni = r),
            0 < (r = Ai(ti, 'onSelect')).length &&
                ((t = new Wr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = ei))));
}
function ii(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var ai = {
        animationend: ii('Animation', 'AnimationEnd'),
        animationiteration: ii('Animation', 'AnimationIteration'),
        animationstart: ii('Animation', 'AnimationStart'),
        transitionend: ii('Transition', 'TransitionEnd'),
    },
    li = {},
    ui = {};
function si(e) {
    if (li[e]) return li[e];
    if (!ai[e]) return e;
    var t,
        n = ai[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ui) return (li[e] = n[t]);
    return e;
}
We &&
    ((ui = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation),
    'TransitionEvent' in window || delete ai.transitionend.transition);
var ci = si('animationend'),
    di = si('animationiteration'),
    fi = si('animationstart'),
    pi = si('transitionend'),
    hi = new Map(),
    gi =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function vi(e, t) {
    (hi.set(e, t), $e(t, [e]));
}
for (var mi = 0; mi < gi.length; mi++) {
    var bi = gi[mi];
    vi(bi.toLowerCase(), 'on' + (bi[0].toUpperCase() + bi.slice(1)));
}
(vi(ci, 'onAnimationEnd'),
    vi(di, 'onAnimationIteration'),
    vi(fi, 'onAnimationStart'),
    vi('dblclick', 'onDoubleClick'),
    vi('focusin', 'onFocus'),
    vi('focusout', 'onBlur'),
    vi(pi, 'onTransitionEnd'),
    qe('onMouseEnter', ['mouseout', 'mouseover']),
    qe('onMouseLeave', ['mouseout', 'mouseover']),
    qe('onPointerEnter', ['pointerout', 'pointerover']),
    qe('onPointerLeave', ['pointerout', 'pointerover']),
    $e('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    $e('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    $e('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    $e('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    $e('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    $e('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var yi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    _i = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yi));
function wi(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, o, i, a, l, u) {
            if ((xn.apply(this, arguments), _n)) {
                if (!_n) throw Error(Ue(198));
                var s = wn;
                ((_n = !1), (wn = null), Sn || ((Sn = !0), (kn = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function Si(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a],
                        u = l.instance,
                        s = l.currentTarget;
                    if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
                    (wi(o, l, s), (i = u));
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((u = (l = r[a]).instance),
                        (s = l.currentTarget),
                        (l = l.listener),
                        u !== i && o.isPropagationStopped())
                    )
                        break e;
                    (wi(o, l, s), (i = u));
                }
        }
    }
    if (Sn) throw ((e = kn), (Sn = !1), (kn = null), e);
}
function ki(e, t) {
    var n = t[Ji];
    void 0 === n && (n = t[Ji] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Pi(t, e, 2, !1), n.add(r));
}
function Ci(e, t, n) {
    var r = 0;
    (t && (r |= 4), Pi(n, e, r, t));
}
var xi = '_reactListening' + Math.random().toString(36).slice(2);
function Oi(e) {
    if (!e[xi]) {
        ((e[xi] = !0),
            He.forEach(function (t) {
                'selectionchange' !== t && (_i.has(t) || Ci(t, !1, e), Ci(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[xi] || ((t[xi] = !0), Ci('selectionchange', !1, t));
    }
}
function Pi(e, t, n, r) {
    switch (jr(t)) {
        case 1:
            var o = Rr;
            break;
        case 4:
            o = Ar;
            break;
        default:
            o = Ir;
    }
    ((n = o.bind(null, t, n, e)),
        (o = void 0),
        !mn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
        r
            ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1));
}
function Ei(e, t, n, r, o) {
    var i = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var a = r.tag;
            if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                    for (a = r.return; null !== a; ) {
                        var u = a.tag;
                        if (
                            (3 === u || 4 === u) &&
                            ((u = a.stateNode.containerInfo) === o || (8 === u.nodeType && u.parentNode === o))
                        )
                            return;
                        a = a.return;
                    }
                for (; null !== l; ) {
                    if (null === (a = na(l))) return;
                    if (5 === (u = a.tag) || 6 === u) {
                        r = i = a;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    gn(function () {
        var r = i,
            o = on(n),
            a = [];
        e: {
            var l = hi.get(e);
            if (void 0 !== l) {
                var u = Wr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === zr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = co;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (u = Jr));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (u = Jr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = Jr;
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
                        u = Yr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = Zr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = po;
                        break;
                    case ci:
                    case di:
                    case fi:
                        u = eo;
                        break;
                    case pi:
                        u = ho;
                        break;
                    case 'scroll':
                        u = Qr;
                        break;
                    case 'wheel':
                        u = vo;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = no;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = fo;
                }
                var c = 0 != (4 & t),
                    d = !c && 'scroll' === e,
                    f = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                    var g = (p = h).stateNode;
                    if (
                        (5 === p.tag &&
                            null !== g &&
                            ((p = g), null !== f && null != (g = vn(h, f)) && c.push(Ri(h, g, p))),
                        d)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((l = new u(l, s, null, n, o)), a.push({ event: l, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!na(s) && !s[Zi])) &&
                    (u || l) &&
                    ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? na(s) : null) &&
                              (s !== (d = On(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = Yr),
                    (g = 'onMouseLeave'),
                    (f = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = fo), (g = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                    (d = null == u ? l : oa(u)),
                    (p = null == s ? l : oa(s)),
                    ((l = new c(g, h + 'leave', u, n, o)).target = d),
                    (l.relatedTarget = p),
                    (g = null),
                    na(o) === r && (((c = new c(f, h + 'enter', s, n, o)).target = p), (c.relatedTarget = d), (g = c)),
                    (d = g),
                    u && s)
                )
                    e: {
                        for (f = s, h = 0, p = c = u; p; p = Ii(p)) h++;
                        for (p = 0, g = f; g; g = Ii(g)) p++;
                        for (; 0 < h - p; ) ((c = Ii(c)), h--);
                        for (; 0 < p - h; ) ((f = Ii(f)), p--);
                        for (; h--; ) {
                            if (c === f || (null !== f && c === f.alternate)) break e;
                            ((c = Ii(c)), (f = Ii(f)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Mi(a, l, u, c, !1), null !== s && null !== d && Mi(a, d, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? oa(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var v = jo;
            else if (Eo(l))
                if (Fo) v = Go;
                else {
                    v = Uo;
                    var m = Bo;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (v = Ho);
            switch (
                (v && (v = v(e, r))
                    ? Ro(a, v, n, o)
                    : (m && m(e, l, r),
                      'focusout' === e &&
                          (m = l._wrapperState) &&
                          m.controlled &&
                          'number' === l.type &&
                          Nt(l, 'number', l.value)),
                (m = r ? oa(r) : window),
                e)
            ) {
                case 'focusin':
                    (Eo(m) || 'true' === m.contentEditable) && ((ei = m), (ti = r), (ni = null));
                    break;
                case 'focusout':
                    ni = ti = ei = null;
                    break;
                case 'mousedown':
                    ri = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((ri = !1), oi(a, n, o));
                    break;
                case 'selectionchange':
                    if (Jo) break;
                case 'keydown':
                case 'keyup':
                    oi(a, n, o);
            }
            var b;
            if (bo)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var y = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            y = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            y = 'onCompositionUpdate';
                            break e;
                    }
                    y = void 0;
                }
            else
                Oo
                    ? Co(e, n) && (y = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
            (y &&
                (wo &&
                    'ko' !== n.locale &&
                    (Oo || 'onCompositionStart' !== y
                        ? 'onCompositionEnd' === y && Oo && (b = Lr())
                        : ((Vr = 'value' in (Fr = o) ? Fr.value : Fr.textContent), (Oo = !0))),
                0 < (m = Ai(r, y)).length &&
                    ((y = new ro(y, e, null, n, o)),
                    a.push({ event: y, listeners: m }),
                    b ? (y.data = b) : null !== (b = xo(n)) && (y.data = b))),
                (b = _o
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return xo(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((ko = !0), So);
                              case 'textInput':
                                  return (e = t.data) === So && ko ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Oo)
                              return 'compositionend' === e || (!bo && Co(e, t))
                                  ? ((e = Lr()), (Nr = Vr = Fr = null), (Oo = !1), e)
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
                                  return wo && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Ai(r, 'onBeforeInput')).length &&
                    ((o = new ro('onBeforeInput', 'beforeinput', null, n, o)),
                    a.push({ event: o, listeners: r }),
                    (o.data = b)));
        }
        Si(a, t);
    });
}
function Ri(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ai(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var o = e,
            i = o.stateNode;
        (5 === o.tag &&
            null !== i &&
            ((o = i), null != (i = vn(e, n)) && r.unshift(Ri(e, i, o)), null != (i = vn(e, t)) && r.push(Ri(e, i, o))),
            (e = e.return));
    }
    return r;
}
function Ii(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Mi(e, t, n, r, o) {
    for (var i = t._reactName, a = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            o
                ? null != (u = vn(n, i)) && a.unshift(Ri(n, u, l))
                : o || (null != (u = vn(n, i)) && a.push(Ri(n, u, l)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Ti = /\r\n?/g,
    ji = /\u0000|\uFFFD/g;
function Fi(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ti, '\n').replace(ji, '');
}
function Vi(e, t, n) {
    if (((t = Fi(t)), Fi(e) !== t && n)) throw Error(Ue(425));
}
function Ni() {}
var Li = null,
    zi = null;
function Di(e, t) {
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
var Bi = 'function' == typeof setTimeout ? setTimeout : void 0,
    Ui = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Hi = 'function' == typeof Promise ? Promise : void 0,
    Gi =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Hi
              ? function (e) {
                    return Hi.resolve(null).then(e).catch($i);
                }
              : Bi;
function $i(e) {
    setTimeout(function () {
        throw e;
    });
}
function qi(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && 8 === o.nodeType))
            if ('/$' === (n = o.data)) {
                if (0 === r) return (e.removeChild(o), void Or(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = o;
    } while (n);
    Or(t);
}
function Wi(e) {
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
function Ki(e) {
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
var Qi = Math.random().toString(36).slice(2),
    Xi = '__reactFiber$' + Qi,
    Yi = '__reactProps$' + Qi,
    Zi = '__reactContainer$' + Qi,
    Ji = '__reactEvents$' + Qi,
    ea = '__reactListeners$' + Qi,
    ta = '__reactHandles$' + Qi;
function na(e) {
    var t = e[Xi];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Zi] || n[Xi])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ki(e); null !== e; ) {
                    if ((n = e[Xi])) return n;
                    e = Ki(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ra(e) {
    return !(e = e[Xi] || e[Zi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function oa(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ue(33));
}
function ia(e) {
    return e[Yi] || null;
}
var aa = [],
    la = -1;
function ua(e) {
    return { current: e };
}
function sa(e) {
    0 > la || ((e.current = aa[la]), (aa[la] = null), la--);
}
function ca(e, t) {
    (la++, (aa[la] = e.current), (e.current = t));
}
var da = {},
    fa = ua(da),
    pa = ua(!1),
    ha = da;
function ga(e, t) {
    var n = e.type.contextTypes;
    if (!n) return da;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o,
        i = {};
    for (o in n) i[o] = t[o];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function va(e) {
    return null != (e = e.childContextTypes);
}
function ma() {
    (sa(pa), sa(fa));
}
function ba(e, t, n) {
    if (fa.current !== da) throw Error(Ue(168));
    (ca(fa, t), ca(pa, n));
}
function ya(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var o in (r = r.getChildContext())) if (!(o in t)) throw Error(Ue(108, Ot(e) || 'Unknown', o));
    return _t({}, n, r);
}
function _a(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || da),
        (ha = fa.current),
        ca(fa, e),
        ca(pa, pa.current),
        !0
    );
}
function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ue(169));
    (n ? ((e = ya(e, t, ha)), (r.__reactInternalMemoizedMergedChildContext = e), sa(pa), sa(fa), ca(fa, e)) : sa(pa),
        ca(pa, n));
}
var Sa = null,
    ka = !1,
    Ca = !1;
function xa(e) {
    null === Sa ? (Sa = [e]) : Sa.push(e);
}
function Oa() {
    if (!Ca && null !== Sa) {
        Ca = !0;
        var e = 0,
            t = rr;
        try {
            var n = Sa;
            for (rr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((Sa = null), (ka = !1));
        } catch (o) {
            throw (null !== Sa && (Sa = Sa.slice(e + 1)), In(Nn, Oa), o);
        } finally {
            ((rr = t), (Ca = !1));
        }
    }
    return null;
}
var Pa = [],
    Ea = 0,
    Ra = null,
    Aa = 0,
    Ia = [],
    Ma = 0,
    Ta = null,
    ja = 1,
    Fa = '';
function Va(e, t) {
    ((Pa[Ea++] = Aa), (Pa[Ea++] = Ra), (Ra = e), (Aa = t));
}
function Na(e, t, n) {
    ((Ia[Ma++] = ja), (Ia[Ma++] = Fa), (Ia[Ma++] = Ta), (Ta = e));
    var r = ja;
    e = Fa;
    var o = 32 - Gn(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var i = 32 - Gn(t) + o;
    if (30 < i) {
        var a = o - (o % 5);
        ((i = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (o -= a),
            (ja = (1 << (32 - Gn(t) + o)) | (n << o) | r),
            (Fa = i + e));
    } else ((ja = (1 << i) | (n << o) | r), (Fa = e));
}
function La(e) {
    null !== e.return && (Va(e, 1), Na(e, 1, 0));
}
function za(e) {
    for (; e === Ra; ) ((Ra = Pa[--Ea]), (Pa[Ea] = null), (Aa = Pa[--Ea]), (Pa[Ea] = null));
    for (; e === Ta; )
        ((Ta = Ia[--Ma]), (Ia[Ma] = null), (Fa = Ia[--Ma]), (Ia[Ma] = null), (ja = Ia[--Ma]), (Ia[Ma] = null));
}
var Da = null,
    Ba = null,
    Ua = !1,
    Ha = null;
function Ga(e, t) {
    var n = hd(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function $a(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Da = e), (Ba = Wi(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Da = e), (Ba = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ta ? { id: ja, overflow: Fa } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = hd(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Da = e),
                (Ba = null),
                !0)
            );
        default:
            return !1;
    }
}
function qa(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Wa(e) {
    if (Ua) {
        var t = Ba;
        if (t) {
            var n = t;
            if (!$a(e, t)) {
                if (qa(e)) throw Error(Ue(418));
                t = Wi(n.nextSibling);
                var r = Da;
                t && $a(e, t) ? Ga(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Ua = !1), (Da = e));
            }
        } else {
            if (qa(e)) throw Error(Ue(418));
            ((e.flags = (-4097 & e.flags) | 2), (Ua = !1), (Da = e));
        }
    }
}
function Ka(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Da = e;
}
function Qa(e) {
    if (e !== Da) return !1;
    if (!Ua) return (Ka(e), (Ua = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Di(e.type, e.memoizedProps)),
        t && (t = Ba))
    ) {
        if (qa(e)) throw (Xa(), Error(Ue(418)));
        for (; t; ) (Ga(e, t), (t = Wi(t.nextSibling)));
    }
    if ((Ka(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ue(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ba = Wi(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ba = null;
        }
    } else Ba = Da ? Wi(e.stateNode.nextSibling) : null;
    return !0;
}
function Xa() {
    for (var e = Ba; e; ) e = Wi(e.nextSibling);
}
function Ya() {
    ((Ba = Da = null), (Ua = !1));
}
function Za(e) {
    null === Ha ? (Ha = [e]) : Ha.push(e);
}
var Ja = rt.ReactCurrentBatchConfig;
function el(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ue(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ue(147, e));
            var o = r,
                i = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === i
                ? t.ref
                : (((t = function (e) {
                      var t = o.refs;
                      null === e ? delete t[i] : (t[i] = e);
                  })._stringRef = i),
                  t);
        }
        if ('string' != typeof e) throw Error(Ue(284));
        if (!n._owner) throw Error(Ue(290, e));
    }
    return e;
}
function tl(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Ue(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function nl(e) {
    return (0, e._init)(e._payload);
}
function rl(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
    }
    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) (t(n, r), (r = r.sibling));
        return null;
    }
    function r(e, t) {
        for (e = new Map(); null !== t; ) (null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling));
        return e;
    }
    function o(e, t) {
        return (((e = vd(e, t)).index = 0), (e.sibling = null), e);
    }
    function i(t, n, r) {
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
    function a(t) {
        return (e && null === t.alternate && (t.flags |= 2), t);
    }
    function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = _d(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === at
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === gt && nl(i) === t.type))
              ? (((r = o(t, n.props)).ref = el(e, t, n)), (r.return = e), r)
              : (((r = md(n.type, n.key, n.props, null, e.mode, r)).ref = el(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = wd(n, e.mode, r)).return = e), t)
            : (((t = o(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = bd(n, e.mode, r, i)).return = e), t)
            : (((t = o(t, n)).return = e), t);
    }
    function d(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = _d('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case ot:
                    return (
                        ((n = md(t.type, t.key, t.props, null, e.mode, n)).ref = el(e, null, t)),
                        (n.return = e),
                        n
                    );
                case it:
                    return (((t = wd(t, e.mode, n)).return = e), t);
                case gt:
                    return d(e, (0, t._init)(t._payload), n);
            }
            if (Lt(t) || bt(t)) return (((t = bd(t, e.mode, n, null)).return = e), t);
            tl(e, t);
        }
        return null;
    }
    function f(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== o ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case ot:
                    return n.key === o ? u(e, t, n, r) : null;
                case it:
                    return n.key === o ? s(e, t, n, r) : null;
                case gt:
                    return f(e, t, (o = n._init)(n._payload), r);
            }
            if (Lt(n) || bt(n)) return null !== o ? null : c(e, t, n, r, null);
            tl(e, n);
        }
        return null;
    }
    function p(e, t, n, r, o) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, o);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case ot:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case it:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case gt:
                    return p(e, t, n, (0, r._init)(r._payload), o);
            }
            if (Lt(r) || bt(r)) return c(t, (e = e.get(n) || null), r, o, null);
            tl(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === at && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case ot:
                    e: {
                        for (var g = c.key, v = s; null !== v; ) {
                            if (v.key === g) {
                                if ((g = c.type) === at) {
                                    if (7 === v.tag) {
                                        (n(u, v.sibling), ((s = o(v, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    v.elementType === g ||
                                    ('object' == typeof g && null !== g && g.$$typeof === gt && nl(g) === v.type)
                                ) {
                                    (n(u, v.sibling), ((s = o(v, c.props)).ref = el(u, v, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, v);
                                break;
                            }
                            (t(u, v), (v = v.sibling));
                        }
                        c.type === at
                            ? (((s = bd(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = md(c.type, c.key, c.props, null, u.mode, h)).ref = el(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return a(u);
                case it:
                    e: {
                        for (v = c.key; null !== s; ) {
                            if (s.key === v) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    (n(u, s.sibling), ((s = o(s, c.children || [])).return = u), (u = s));
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            (t(u, s), (s = s.sibling));
                        }
                        (((s = wd(c, u.mode, h)).return = u), (u = s));
                    }
                    return a(u);
                case gt:
                    return l(u, s, (v = c._init)(c._payload), h);
            }
            if (Lt(c))
                return (function (o, a, l, u) {
                    for (var s = null, c = null, h = a, g = (a = 0), v = null; null !== h && g < l.length; g++) {
                        h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
                        var m = f(o, h, l[g], u);
                        if (null === m) {
                            null === h && (h = v);
                            break;
                        }
                        (e && h && null === m.alternate && t(o, h),
                            (a = i(m, a, g)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m),
                            (h = v));
                    }
                    if (g === l.length) return (n(o, h), Ua && Va(o, g), s);
                    if (null === h) {
                        for (; g < l.length; g++)
                            null !== (h = d(o, l[g], u)) &&
                                ((a = i(h, a, g)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Ua && Va(o, g), s);
                    }
                    for (h = r(o, h); g < l.length; g++)
                        null !== (v = p(h, o, g, l[g], u)) &&
                            (e && null !== v.alternate && h.delete(null === v.key ? g : v.key),
                            (a = i(v, a, g)),
                            null === c ? (s = v) : (c.sibling = v),
                            (c = v));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(o, e);
                            }),
                        Ua && Va(o, g),
                        s
                    );
                })(u, s, c, h);
            if (bt(c))
                return (function (o, a, l, u) {
                    var s = bt(l);
                    if ('function' != typeof s) throw Error(Ue(150));
                    if (null == (l = s.call(l))) throw Error(Ue(151));
                    for (
                        var c = (s = null), h = a, g = (a = 0), v = null, m = l.next();
                        null !== h && !m.done;
                        g++, m = l.next()
                    ) {
                        h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
                        var b = f(o, h, m.value, u);
                        if (null === b) {
                            null === h && (h = v);
                            break;
                        }
                        (e && h && null === b.alternate && t(o, h),
                            (a = i(b, a, g)),
                            null === c ? (s = b) : (c.sibling = b),
                            (c = b),
                            (h = v));
                    }
                    if (m.done) return (n(o, h), Ua && Va(o, g), s);
                    if (null === h) {
                        for (; !m.done; g++, m = l.next())
                            null !== (m = d(o, m.value, u)) &&
                                ((a = i(m, a, g)), null === c ? (s = m) : (c.sibling = m), (c = m));
                        return (Ua && Va(o, g), s);
                    }
                    for (h = r(o, h); !m.done; g++, m = l.next())
                        null !== (m = p(h, o, g, m.value, u)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? g : m.key),
                            (a = i(m, a, g)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(o, e);
                            }),
                        Ua && Va(o, g),
                        s
                    );
                })(u, s, c, h);
            tl(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = o(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = _d(c, u.mode, h)).return = u), (u = s)),
              a(u))
            : n(u, s);
    };
}
var ol = rl(!0),
    il = rl(!1),
    al = ua(null),
    ll = null,
    ul = null,
    sl = null;
function cl() {
    sl = ul = ll = null;
}
function dl(e) {
    var t = al.current;
    (sa(al), (e._currentValue = t));
}
function fl(e, t, n) {
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
function pl(e, t) {
    ((ll = e),
        (sl = ul = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (ns = !0), (e.firstContext = null)));
}
function hl(e) {
    var t = e._currentValue;
    if (sl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === ul)) {
            if (null === ll) throw Error(Ue(308));
            ((ul = e), (ll.dependencies = { lanes: 0, firstContext: e }));
        } else ul = ul.next = e;
    return t;
}
var gl = null;
function vl(e) {
    null === gl ? (gl = [e]) : gl.push(e);
}
function ml(e, t, n, r) {
    var o = t.interleaved;
    return (null === o ? ((n.next = n), vl(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), bl(e, r));
}
function bl(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var yl = !1;
function _l(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function wl(e, t) {
    ((e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            }));
}
function Sl(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & dc))) {
        var o = r.pending;
        return (null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), bl(e, n));
    }
    return (
        null === (o = r.interleaved) ? ((t.next = t), vl(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        bl(e, n)
    );
}
function Cl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
function xl(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
            i = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                (null === i ? (o = i = a) : (i = i.next = a), (n = n.next));
            } while (null !== n);
            null === i ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
            }),
            void (e.updateQueue = n)
        );
    }
    (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
}
function Ol(e, t, n, r) {
    var o = e.updateQueue;
    yl = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        l = o.shared.pending;
    if (null !== l) {
        o.shared.pending = null;
        var u = l,
            s = u.next;
        ((u.next = null), null === a ? (i = s) : (a.next = s), (a = u));
        var c = e.alternate;
        null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
            (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
    }
    if (null !== i) {
        var d = o.baseState;
        for (a = 0, c = s = u = null, l = i; ; ) {
            var f = l.lane,
                p = l.eventTime;
            if ((r & f) === f) {
                null !== c &&
                    (c = c.next =
                        { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var h = e,
                        g = l;
                    switch (((f = t), (p = n), g.tag)) {
                        case 1:
                            if ('function' == typeof (h = g.payload)) {
                                d = h.call(p, d, f);
                                break e;
                            }
                            d = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (f = 'function' == typeof (h = g.payload) ? h.call(p, d, f) : h)) break e;
                            d = _t({}, d, f);
                            break e;
                        case 2:
                            yl = !0;
                    }
                }
                null !== l.callback &&
                    0 !== l.lane &&
                    ((e.flags |= 64), null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
            } else
                ((p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                    null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                    (a |= f));
            if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                ((l = (f = l).next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null));
            }
        }
        if (
            (null === c && (u = d),
            (o.baseState = u),
            (o.firstBaseUpdate = s),
            (o.lastBaseUpdate = c),
            null !== (t = o.shared.interleaved))
        ) {
            o = t;
            do {
                ((a |= o.lane), (o = o.next));
            } while (o !== t);
        } else null === i && (o.shared.lanes = 0);
        ((yc |= a), (e.lanes = a), (e.memoizedState = d));
    }
}
function Pl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (null !== o) {
                if (((r.callback = null), (r = n), 'function' != typeof o)) throw Error(Ue(191, o));
                o.call(r);
            }
        }
}
var El = {},
    Rl = ua(El),
    Al = ua(El),
    Il = ua(El);
function Ml(e) {
    if (e === El) throw Error(Ue(174));
    return e;
}
function Tl(e, t) {
    switch ((ca(Il, t), ca(Al, e), ca(Rl, El), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $t(null, '');
            break;
        default:
            t = $t((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (sa(Rl), ca(Rl, t));
}
function jl() {
    (sa(Rl), sa(Al), sa(Il));
}
function Fl(e) {
    Ml(Il.current);
    var t = Ml(Rl.current),
        n = $t(t, e.type);
    t !== n && (ca(Al, e), ca(Rl, n));
}
function Vl(e) {
    Al.current === e && (sa(Rl), sa(Al));
}
var Nl = ua(0);
function Ll(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
            ((t.child.return = t), (t = t.child));
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
}
var zl = [];
function Dl() {
    for (var e = 0; e < zl.length; e++) zl[e]._workInProgressVersionPrimary = null;
    zl.length = 0;
}
var Bl = rt.ReactCurrentDispatcher,
    Ul = rt.ReactCurrentBatchConfig,
    Hl = 0,
    Gl = null,
    $l = null,
    ql = null,
    Wl = !1,
    Kl = !1,
    Ql = 0,
    Xl = 0;
function Yl() {
    throw Error(Ue(321));
}
function Zl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!$o(e[n], t[n])) return !1;
    return !0;
}
function Jl(e, t, n, r, o, i) {
    if (
        ((Hl = i),
        (Gl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Bl.current = null === e || null === e.memoizedState ? Vu : Nu),
        (e = n(r, o)),
        Kl)
    ) {
        i = 0;
        do {
            if (((Kl = !1), (Ql = 0), 25 <= i)) throw Error(Ue(301));
            ((i += 1), (ql = $l = null), (t.updateQueue = null), (Bl.current = Lu), (e = n(r, o)));
        } while (Kl);
    }
    if (((Bl.current = Fu), (t = null !== $l && null !== $l.next), (Hl = 0), (ql = $l = Gl = null), (Wl = !1), t))
        throw Error(Ue(300));
    return e;
}
function eu() {
    var e = 0 !== Ql;
    return ((Ql = 0), e);
}
function tu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === ql ? (Gl.memoizedState = ql = e) : (ql = ql.next = e), ql);
}
function nu() {
    if (null === $l) {
        var e = Gl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = $l.next;
    var t = null === ql ? Gl.memoizedState : ql.next;
    if (null !== t) ((ql = t), ($l = e));
    else {
        if (null === e) throw Error(Ue(310));
        ((e = {
            memoizedState: ($l = e).memoizedState,
            baseState: $l.baseState,
            baseQueue: $l.baseQueue,
            queue: $l.queue,
            next: null,
        }),
            null === ql ? (Gl.memoizedState = ql = e) : (ql = ql.next = e));
    }
    return ql;
}
function ru(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function ou(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = $l,
        o = r.baseQueue,
        i = n.pending;
    if (null !== i) {
        if (null !== o) {
            var a = o.next;
            ((o.next = i.next), (i.next = a));
        }
        ((r.baseQueue = o = i), (n.pending = null));
    }
    if (null !== o) {
        ((i = o.next), (r = r.baseState));
        var l = (a = null),
            u = null,
            s = i;
        do {
            var c = s.lane;
            if ((Hl & c) === c)
                (null !== u &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action)));
            else {
                var d = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                (null === u ? ((l = u = d), (a = r)) : (u = u.next = d), (Gl.lanes |= c), (yc |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (a = r) : (u.next = l),
            $o(r, t.memoizedState) || (ns = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            ((i = o.lane), (Gl.lanes |= i), (yc |= i), (o = o.next));
        } while (o !== e);
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function iu(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (null !== o) {
        n.pending = null;
        var a = (o = o.next);
        do {
            ((i = e(i, a.action)), (a = a.next));
        } while (a !== o);
        ($o(i, t.memoizedState) || (ns = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function au() {}
function lu(e, t) {
    var n = Gl,
        r = nu(),
        o = t(),
        i = !$o(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (ns = !0)),
        (r = r.queue),
        yu(cu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== ql && 1 & ql.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), hu(9, su.bind(null, n, r, o, t), void 0, null), null === fc)) throw Error(Ue(349));
        0 != (30 & Hl) || uu(n, t, o);
    }
    return o;
}
function uu(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Gl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Gl.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function su(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), du(t) && fu(e));
}
function cu(e, t, n) {
    return n(function () {
        du(t) && fu(e);
    });
}
function du(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$o(e, n);
    } catch (r) {
        return !0;
    }
}
function fu(e) {
    var t = bl(e, 1);
    null !== t && zc(t, e, 1, -1);
}
function pu(e) {
    var t = tu();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ru,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Iu.bind(null, Gl, e)),
        [t.memoizedState, e]
    );
}
function hu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Gl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Gl.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function gu() {
    return nu().memoizedState;
}
function vu(e, t, n, r) {
    var o = tu();
    ((Gl.flags |= e), (o.memoizedState = hu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function mu(e, t, n, r) {
    var o = nu();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== $l) {
        var a = $l.memoizedState;
        if (((i = a.destroy), null !== r && Zl(r, a.deps))) return void (o.memoizedState = hu(t, n, i, r));
    }
    ((Gl.flags |= e), (o.memoizedState = hu(1 | t, n, i, r)));
}
function bu(e, t) {
    return vu(8390656, 8, e, t);
}
function yu(e, t) {
    return mu(2048, 8, e, t);
}
function _u(e, t) {
    return mu(4, 2, e, t);
}
function wu(e, t) {
    return mu(4, 4, e, t);
}
function Su(e, t) {
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
function ku(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), mu(4, 4, Su.bind(null, t, e), n));
}
function Cu() {}
function xu(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ou(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pu(e, t, n) {
    return 0 == (21 & Hl)
        ? (e.baseState && ((e.baseState = !1), (ns = !0)), (e.memoizedState = n))
        : ($o(n, t) || ((n = Jn()), (Gl.lanes |= n), (yc |= n), (e.baseState = !0)), t);
}
function Eu(e, t) {
    var n = rr;
    ((rr = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Ul.transition;
    Ul.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((rr = n), (Ul.transition = r));
    }
}
function Ru() {
    return nu().memoizedState;
}
function Au(e, t, n) {
    var r = Lc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Mu(e))) Tu(t, n);
    else if (null !== (n = ml(e, t, n, r))) {
        (zc(n, e, r, Nc()), ju(n, t, r));
    }
}
function Iu(e, t, n) {
    var r = Lc(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Mu(e)) Tu(t, o);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    l = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), $o(l, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((o.next = o), vl(t)) : ((o.next = u.next), (u.next = o)),
                        void (t.interleaved = o)
                    );
                }
            } catch (s) {}
        null !== (n = ml(e, t, o, r)) && (zc(n, e, r, (o = Nc())), ju(n, t, r));
    }
}
function Mu(e) {
    var t = e.alternate;
    return e === Gl || (null !== t && t === Gl);
}
function Tu(e, t) {
    Kl = Wl = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function ju(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
var Fu = {
        readContext: hl,
        useCallback: Yl,
        useContext: Yl,
        useEffect: Yl,
        useImperativeHandle: Yl,
        useInsertionEffect: Yl,
        useLayoutEffect: Yl,
        useMemo: Yl,
        useReducer: Yl,
        useRef: Yl,
        useState: Yl,
        useDebugValue: Yl,
        useDeferredValue: Yl,
        useTransition: Yl,
        useMutableSource: Yl,
        useSyncExternalStore: Yl,
        useId: Yl,
        unstable_isNewReconciler: !1,
    },
    Vu = {
        readContext: hl,
        useCallback: function (e, t) {
            return ((tu().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: hl,
        useEffect: bu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), vu(4194308, 4, Su.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return vu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return vu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = tu();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = tu();
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
                (e = e.dispatch = Au.bind(null, Gl, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (tu().memoizedState = e));
        },
        useState: pu,
        useDebugValue: Cu,
        useDeferredValue: function (e) {
            return (tu().memoizedState = e);
        },
        useTransition: function () {
            var e = pu(!1),
                t = e[0];
            return ((e = Eu.bind(null, e[1])), (tu().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Gl,
                o = tu();
            if (Ua) {
                if (void 0 === n) throw Error(Ue(407));
                n = n();
            } else {
                if (((n = t()), null === fc)) throw Error(Ue(349));
                0 != (30 & Hl) || uu(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                bu(cu.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                hu(9, su.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = tu(),
                t = fc.identifierPrefix;
            if (Ua) {
                var n = Fa;
                ((t = ':' + t + 'R' + (n = (ja & ~(1 << (32 - Gn(ja) - 1))).toString(32) + n)),
                    0 < (n = Ql++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Xl++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Nu = {
        readContext: hl,
        useCallback: xu,
        useContext: hl,
        useEffect: yu,
        useImperativeHandle: ku,
        useInsertionEffect: _u,
        useLayoutEffect: wu,
        useMemo: Ou,
        useReducer: ou,
        useRef: gu,
        useState: function () {
            return ou(ru);
        },
        useDebugValue: Cu,
        useDeferredValue: function (e) {
            return Pu(nu(), $l.memoizedState, e);
        },
        useTransition: function () {
            return [ou(ru)[0], nu().memoizedState];
        },
        useMutableSource: au,
        useSyncExternalStore: lu,
        useId: Ru,
        unstable_isNewReconciler: !1,
    },
    Lu = {
        readContext: hl,
        useCallback: xu,
        useContext: hl,
        useEffect: yu,
        useImperativeHandle: ku,
        useInsertionEffect: _u,
        useLayoutEffect: wu,
        useMemo: Ou,
        useReducer: iu,
        useRef: gu,
        useState: function () {
            return iu(ru);
        },
        useDebugValue: Cu,
        useDeferredValue: function (e) {
            var t = nu();
            return null === $l ? (t.memoizedState = e) : Pu(t, $l.memoizedState, e);
        },
        useTransition: function () {
            return [iu(ru)[0], nu().memoizedState];
        },
        useMutableSource: au,
        useSyncExternalStore: lu,
        useId: Ru,
        unstable_isNewReconciler: !1,
    };
function zu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = _t({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Du(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : _t({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Bu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && On(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nc(),
            o = Lc(e),
            i = Sl(r, o);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = kl(e, i, o)) && (zc(t, e, o, r), Cl(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nc(),
            o = Lc(e),
            i = Sl(r, o);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = kl(e, i, o)) && (zc(t, e, o, r), Cl(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Nc(),
            r = Lc(e),
            o = Sl(n, r);
        ((o.tag = 2), null != t && (o.callback = t), null !== (t = kl(e, o, r)) && (zc(t, e, r, n), Cl(t, e, r)));
    },
};
function Uu(e, t, n, r, o, i, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !qo(n, r) || !qo(o, i);
}
function Hu(e, t, n) {
    var r = !1,
        o = da,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = hl(i))
            : ((o = va(t) ? ha : fa.current), (i = (r = null != (r = t.contextTypes)) ? ga(e, o) : da)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Bu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Gu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Bu.enqueueReplaceState(t, t.state, null));
}
function $u(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), _l(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (o.context = hl(i)) : ((i = va(t) ? ha : fa.current), (o.context = ga(e, i))),
        (o.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Du(e, t, i, n), (o.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof o.getSnapshotBeforeUpdate ||
            ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
            ((t = o.state),
            'function' == typeof o.componentWillMount && o.componentWillMount(),
            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
            t !== o.state && Bu.enqueueReplaceState(o, o.state, null),
            Ol(e, n, o, r),
            (o.state = e.memoizedState)),
        'function' == typeof o.componentDidMount && (e.flags |= 4194308));
}
function qu(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += Ct(r)), (r = r.return));
        } while (r);
        var o = n;
    } catch (i) {
        o = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Wu(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Ku(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Qu = 'function' == typeof WeakMap ? WeakMap : Map;
function Xu(e, t, n) {
    (((n = Sl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Pc || ((Pc = !0), (Ec = r)), Ku(0, t));
        }),
        n
    );
}
function Yu(e, t, n) {
    (n = Sl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var o = t.value;
        ((n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Ku(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (Ku(0, t), 'function' != typeof r && (null === Rc ? (Rc = new Set([this])) : Rc.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Zu(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Qu();
        var o = new Set();
        r.set(t, o);
    } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = ud.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function es(e, t, n, r, o) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Sl(-1, 1)).tag = 2), kl(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = o), e);
}
var ts = rt.ReactCurrentOwner,
    ns = !1;
function rs(e, t, n, r) {
    t.child = null === e ? il(t, null, n, r) : ol(t, e.child, n, r);
}
function os(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        pl(t, o),
        (r = Jl(e, t, n, r, i, o)),
        (n = eu()),
        null === e || ns
            ? (Ua && n && La(t), (t.flags |= 1), rs(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ps(e, t, o))
    );
}
function is(e, t, n, r, o) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            gd(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = md(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), as(e, t, i, r, o));
    }
    if (((i = e.child), 0 == (e.lanes & o))) {
        var a = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : qo)(a, r) && e.ref === t.ref) return Ps(e, t, o);
    }
    return ((t.flags |= 1), ((e = vd(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function as(e, t, n, r, o) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (qo(i, r) && e.ref === t.ref) {
            if (((ns = !1), (t.pendingProps = r = i), 0 == (e.lanes & o))) return ((t.lanes = e.lanes), Ps(e, t, o));
            0 != (131072 & e.flags) && (ns = !0);
        }
    }
    return ss(e, t, n, r, o);
}
function ls(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ca(vc, gc), (gc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ca(vc, gc),
                    (gc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                ca(vc, gc),
                (gc |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ca(vc, gc), (gc |= r));
    return (rs(e, t, o, n), t.child);
}
function us(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, o) {
    var i = va(n) ? ha : fa.current;
    return (
        (i = ga(t, i)),
        pl(t, o),
        (n = Jl(e, t, n, r, i, o)),
        (r = eu()),
        null === e || ns
            ? (Ua && r && La(t), (t.flags |= 1), rs(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ps(e, t, o))
    );
}
function cs(e, t, n, r, o) {
    if (va(n)) {
        var i = !0;
        _a(t);
    } else i = !1;
    if ((pl(t, o), null === t.stateNode)) (Os(e, t), Hu(t, n, r), $u(t, n, r, o), (r = !0));
    else if (null === e) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var u = a.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = hl(s)) : (s = ga(t, (s = va(n) ? ha : fa.current)));
        var c = n.getDerivedStateFromProps,
            d = 'function' == typeof c || 'function' == typeof a.getSnapshotBeforeUpdate;
        (d ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== r || u !== s) && Gu(t, a, r, s)),
            (yl = !1));
        var f = t.memoizedState;
        ((a.state = f),
            Ol(t, r, a, o),
            (u = t.memoizedState),
            l !== r || f !== u || pa.current || yl
                ? ('function' == typeof c && (Du(t, n, c, r), (u = t.memoizedState)),
                  (l = yl || Uu(t, n, l, r, f, u, s))
                      ? (d ||
                            ('function' != typeof a.UNSAFE_componentWillMount &&
                                'function' != typeof a.componentWillMount) ||
                            ('function' == typeof a.componentWillMount && a.componentWillMount(),
                            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                        'function' == typeof a.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof a.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = l))
                : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((a = t.stateNode),
            wl(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : zu(t.type, l)),
            (a.props = s),
            (d = t.pendingProps),
            (f = a.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = hl(u))
                : (u = ga(t, (u = va(n) ? ha : fa.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== d || f !== u) && Gu(t, a, r, u)),
            (yl = !1),
            (f = t.memoizedState),
            (a.state = f),
            Ol(t, r, a, o));
        var h = t.memoizedState;
        l !== d || f !== h || pa.current || yl
            ? ('function' == typeof p && (Du(t, n, p, r), (h = t.memoizedState)),
              (s = yl || Uu(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                        ('function' != typeof a.UNSAFE_componentWillUpdate &&
                            'function' != typeof a.componentWillUpdate) ||
                        ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, u),
                        'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate ||
                        (l === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (a.props = r),
              (a.state = h),
              (a.context = u),
              (r = s))
            : ('function' != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ds(e, t, n, r, i, o);
}
function ds(e, t, n, r, o, i) {
    us(e, t);
    var a = 0 != (128 & t.flags);
    if (!r && !a) return (o && wa(t, n, !1), Ps(e, t, i));
    ((r = t.stateNode), (ts.current = t));
    var l = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = ol(t, e.child, null, i)), (t.child = ol(t, null, l, i))) : rs(e, t, l, i),
        (t.memoizedState = r.state),
        o && wa(t, n, !0),
        t.child
    );
}
function fs(e) {
    var t = e.stateNode;
    (t.pendingContext ? ba(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ba(0, t.context, !1),
        Tl(e, t.containerInfo));
}
function ps(e, t, n, r, o) {
    return (Ya(), Za(o), (t.flags |= 256), rs(e, t, n, r), t.child);
}
var hs,
    gs,
    vs,
    ms,
    bs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ys(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function _s(e, t, n) {
    var r,
        o = t.pendingProps,
        i = Nl.current,
        a = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        ca(Nl, 1 & i),
        null === e)
    )
        return (
            Wa(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((l = o.children),
                  (e = o.fallback),
                  a
                      ? ((o = t.mode),
                        (a = t.child),
                        (l = { mode: 'hidden', children: l }),
                        0 == (1 & o) && null !== a
                            ? ((a.childLanes = 0), (a.pendingProps = l))
                            : (a = yd(l, o, 0, null)),
                        (e = bd(e, o, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = ys(n)),
                        (t.memoizedState = bs),
                        e)
                      : ws(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, o, i, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Ss(e, t, a, (r = Wu(Error(Ue(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (o = t.mode),
                        (r = yd({ mode: 'visible', children: r.children }, o, 0, null)),
                        ((i = bd(i, o, a, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && ol(t, e.child, null, a),
                        (t.child.memoizedState = ys(a)),
                        (t.memoizedState = bs),
                        i);
            if (0 == (1 & t.mode)) return Ss(e, t, a, null);
            if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), Ss(e, t, a, (r = Wu((i = Error(Ue(419))), r, void 0))));
            }
            if (((l = 0 != (a & e.childLanes)), ns || l)) {
                if (null !== (r = fc)) {
                    switch (a & -a) {
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
                            o = 0;
                    }
                    0 !== (o = 0 != (o & (r.suspendedLanes | a)) ? 0 : o) &&
                        o !== i.retryLane &&
                        ((i.retryLane = o), bl(e, o), zc(r, e, o, -1));
                }
                return (Zc(), Ss(e, t, a, (r = Wu(Error(Ue(421))))));
            }
            return '$?' === o.data
                ? ((t.flags |= 128), (t.child = e.child), (t = cd.bind(null, e)), (o._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Ba = Wi(o.nextSibling)),
                  (Da = t),
                  (Ua = !0),
                  (Ha = null),
                  null !== e &&
                      ((Ia[Ma++] = ja), (Ia[Ma++] = Fa), (Ia[Ma++] = Ta), (ja = e.id), (Fa = e.overflow), (Ta = t)),
                  (t = ws(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, o, r, i, n);
    if (a) {
        ((a = o.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: o.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = vd(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (a = vd(r, a)) : ((a = bd(a, l, n, null)).flags |= 2),
            (a.return = t),
            (o.return = t),
            (o.sibling = a),
            (t.child = o),
            (o = a),
            (a = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? ys(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (a.memoizedState = l),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = bs),
            o
        );
    }
    return (
        (e = (a = e.child).sibling),
        (o = vd(a, { mode: 'visible', children: o.children })),
        0 == (1 & t.mode) && (o.lanes = n),
        (o.return = t),
        (o.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
    );
}
function ws(e, t) {
    return (((t = yd({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function Ss(e, t, n, r) {
    return (
        null !== r && Za(r),
        ol(t, e.child, null, n),
        ((e = ws(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function ks(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), fl(e.return, t, n));
}
function Cs(e, t, n, r, o) {
    var i = e.memoizedState;
    null === i
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function xs(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((rs(e, t, r.children, n), 0 != (2 & (r = Nl.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ks(e, n, t);
                else if (19 === e.tag) ks(e, n, t);
                else if (null !== e.child) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
            }
        r &= 1;
    }
    if ((ca(Nl, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (o) {
            case 'forwards':
                for (n = t.child, o = null; null !== n; )
                    (null !== (e = n.alternate) && null === Ll(e) && (o = n), (n = n.sibling));
                (null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    Cs(t, !1, o, n, i));
                break;
            case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                    if (null !== (e = o.alternate) && null === Ll(e)) {
                        t.child = o;
                        break;
                    }
                    ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
                }
                Cs(t, !0, n, null, i);
                break;
            case 'together':
                Cs(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Os(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ps(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (yc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ue(153));
    if (null !== t.child) {
        for (n = vd((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = vd(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Es(e, t) {
    if (!Ua)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Rs(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; null !== o; )
            ((n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling));
    else
        for (o = e.child; null !== o; )
            ((n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function As(e, t, n) {
    var r = t.pendingProps;
    switch ((za(t), t.tag)) {
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
            return (Rs(t), null);
        case 1:
        case 17:
            return (va(t.type) && ma(), Rs(t), null);
        case 3:
            return (
                (r = t.stateNode),
                jl(),
                sa(pa),
                sa(fa),
                Dl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Qa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Ha && (Hc(Ha), (Ha = null)))),
                gs(e, t),
                Rs(t),
                null
            );
        case 5:
            Vl(t);
            var o = Ml(Il.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (vs(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ue(166));
                    return (Rs(t), null);
                }
                if (((e = Ml(Rl.current)), Qa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[Xi] = t), (r[Yi] = i), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (ki('cancel', r), ki('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ki('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (o = 0; o < yi.length; o++) ki(yi[o], r);
                            break;
                        case 'source':
                            ki('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (ki('error', r), ki('load', r));
                            break;
                        case 'details':
                            ki('toggle', r);
                            break;
                        case 'input':
                            (Tt(r, i), ki('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), ki('invalid', r));
                            break;
                        case 'textarea':
                            (Bt(r, i), ki('invalid', r));
                    }
                    for (var a in (tn(n, i), (o = null), i))
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            'children' === a
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && Vi(r.textContent, l, e),
                                      (o = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && Vi(r.textContent, l, e),
                                      (o = ['children', '' + l]))
                                : Ge.hasOwnProperty(a) && null != l && 'onScroll' === a && ki('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Rt(r), Vt(r, i, !0));
                            break;
                        case 'textarea':
                            (Rt(r), Ht(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = Ni);
                    }
                    ((r = o), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === o.nodeType ? o : o.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Gt(n)),
                        'http://www.w3.org/1999/xhtml' === e
                            ? 'script' === n
                                ? (((e = a.createElement('div')).innerHTML = '<script><\/script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : 'string' == typeof r.is
                                  ? (e = a.createElement(n, { is: r.is }))
                                  : ((e = a.createElement(n)),
                                    'select' === n &&
                                        ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
                            : (e = a.createElementNS(e, n)),
                        (e[Xi] = t),
                        (e[Yi] = r),
                        hs(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((a = nn(n, r)), n)) {
                            case 'dialog':
                                (ki('cancel', e), ki('close', e), (o = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (ki('load', e), (o = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (o = 0; o < yi.length; o++) ki(yi[o], e);
                                o = r;
                                break;
                            case 'source':
                                (ki('error', e), (o = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (ki('error', e), ki('load', e), (o = r));
                                break;
                            case 'details':
                                (ki('toggle', e), (o = r));
                                break;
                            case 'input':
                                (Tt(e, r), (o = Mt(e, r)), ki('invalid', e));
                                break;
                            case 'option':
                            default:
                                o = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = _t({}, r, { value: void 0 })),
                                    ki('invalid', e));
                                break;
                            case 'textarea':
                                (Bt(e, r), (o = Dt(e, r)), ki('invalid', e));
                        }
                        for (i in (tn(n, o), (l = o)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? Jt(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && Kt(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Qt(e, u)
                                            : 'number' == typeof u && Qt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (Ge.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && ki('scroll', e)
                                              : null != u && nt(e, i, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (Rt(e), Vt(e, r, !1));
                                break;
                            case 'textarea':
                                (Rt(e), Ht(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Pt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? zt(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && zt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof o.onClick && (e.onclick = Ni);
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
            return (Rs(t), null);
        case 6:
            if (e && null != t.stateNode) ms(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ue(166));
                if (((n = Ml(Il.current)), Ml(Rl.current), Qa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Xi] = t),
                        (i = r.nodeValue !== n) && null !== (e = Da))
                    )
                        switch (e.tag) {
                            case 3:
                                Vi(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Vi(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xi] = t), (t.stateNode = r));
            }
            return (Rs(t), null);
        case 13:
            if (
                (sa(Nl),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Ua && null !== Ba && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Xa(), Ya(), (t.flags |= 98560), (i = !1));
                else if (((i = Qa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Ue(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ue(317));
                        i[Xi] = t;
                    } else (Ya(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Rs(t), (i = !1));
                } else (null !== Ha && (Hc(Ha), (Ha = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Nl.current) ? 0 === mc && (mc = 3) : Zc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Rs(t),
                  null);
        case 4:
            return (jl(), gs(e, t), null === e && Oi(t.stateNode.containerInfo), Rs(t), null);
        case 10:
            return (dl(t.type._context), Rs(t), null);
        case 19:
            if ((sa(Nl), null === (i = t.memoizedState))) return (Rs(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
                if (r) Es(i, !1);
                else {
                    if (0 !== mc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Ll(e))) {
                                for (
                                    t.flags |= 128,
                                        Es(i, !1),
                                        null !== (r = a.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;
                                )
                                    ((e = r),
                                        ((i = n).flags &= 14680066),
                                        null === (a = i.alternate)
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = a.childLanes),
                                              (i.lanes = a.lanes),
                                              (i.child = a.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = a.memoizedProps),
                                              (i.memoizedState = a.memoizedState),
                                              (i.updateQueue = a.updateQueue),
                                              (i.type = a.type),
                                              (e = a.dependencies),
                                              (i.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling));
                                return (ca(Nl, (1 & Nl.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && Fn() > xc && ((t.flags |= 128), (r = !0), Es(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Ll(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Es(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !a.alternate && !Ua)
                        )
                            return (Rs(t), null);
                    } else
                        2 * Fn() - i.renderingStartTime > xc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Es(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (n = i.last) ? (n.sibling = a) : (t.child = a), (i.last = a));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Fn()),
                  (t.sibling = null),
                  (n = Nl.current),
                  ca(Nl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Rs(t), null);
        case 22:
        case 23:
            return (
                Kc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & gc) && (Rs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Rs(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ue(156, t.tag));
}
function Is(e, t) {
    switch ((za(t), t.tag)) {
        case 1:
            return (va(t.type) && ma(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                jl(),
                sa(pa),
                sa(fa),
                Dl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Vl(t), null);
        case 13:
            if ((sa(Nl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ue(340));
                Ya();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (sa(Nl), null);
        case 4:
            return (jl(), null);
        case 10:
            return (dl(t.type._context), null);
        case 22:
        case 23:
            return (Kc(), null);
        default:
            return null;
    }
}
((hs = function (e, t) {
    for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            ((n.child.return = n), (n = n.child));
            continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
    }
}),
    (gs = function () {}),
    (vs = function (e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            ((e = t.stateNode), Ml(Rl.current));
            var i,
                a = null;
            switch (n) {
                case 'input':
                    ((o = Mt(e, o)), (r = Mt(e, r)), (a = []));
                    break;
                case 'select':
                    ((o = _t({}, o, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((o = Dt(e, o)), (r = Dt(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof o.onClick && 'function' == typeof r.onClick && (e.onclick = Ni);
            }
            for (s in (tn(n, r), (n = null), o))
                if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                    if ('style' === s) {
                        var l = o[s];
                        for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (Ge.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
            for (s in r) {
                var u = r[s];
                if (((l = null != o ? o[s] : void 0), r.hasOwnProperty(s) && u !== l && (null != u || null != l)))
                    if ('style' === s)
                        if (l) {
                            for (i in l)
                                !l.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
                            for (i in u) u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
                        } else (n || (a || (a = []), a.push(s, n)), (n = u));
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((u = u ? u.__html : void 0),
                              (l = l ? l.__html : void 0),
                              null != u && l !== u && (a = a || []).push(s, u))
                            : 'children' === s
                              ? ('string' != typeof u && 'number' != typeof u) || (a = a || []).push(s, '' + u)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (Ge.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && ki('scroll', e), a || l === u || (a = []))
                                    : (a = a || []).push(s, u));
            }
            n && (a = a || []).push('style', n);
            var s = a;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (ms = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Ms = !1,
    Ts = !1,
    js = 'function' == typeof WeakSet ? WeakSet : Set,
    Fs = null;
function Vs(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                ld(e, t, r);
            }
        else n.current = null;
}
function Ns(e, t, n) {
    try {
        n();
    } catch (r) {
        ld(e, t, r);
    }
}
var Ls = !1;
function zs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                ((o.destroy = void 0), void 0 !== i && Ns(t, n, i));
            }
            o = o.next;
        } while (o !== r);
    }
}
function Ds(e, t) {
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
function Bs(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Us(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Us(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Xi], delete t[Yi], delete t[Ji], delete t[ea], delete t[ta]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function Hs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Gs(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Hs(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            ((e.child.return = e), (e = e.child));
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function $s(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ni)));
    else if (4 !== r && null !== (e = e.child))
        for ($s(e, t, n), e = e.sibling; null !== e; ) ($s(e, t, n), (e = e.sibling));
}
function qs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (qs(e, t, n), e = e.sibling; null !== e; ) (qs(e, t, n), (e = e.sibling));
}
var Ws = null,
    Ks = !1;
function Qs(e, t, n) {
    for (n = n.child; null !== n; ) (Xs(e, t, n), (n = n.sibling));
}
function Xs(e, t, n) {
    if (Hn && 'function' == typeof Hn.onCommitFiberUnmount)
        try {
            Hn.onCommitFiberUnmount(Un, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Ts || Vs(n, t);
        case 6:
            var r = Ws,
                o = Ks;
            ((Ws = null),
                Qs(e, t, n),
                (Ks = o),
                null !== (Ws = r) &&
                    (Ks
                        ? ((e = Ws),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Ws.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Ws &&
                (Ks
                    ? ((e = Ws),
                      (n = n.stateNode),
                      8 === e.nodeType ? qi(e.parentNode, n) : 1 === e.nodeType && qi(e, n),
                      Or(e))
                    : qi(Ws, n.stateNode));
            break;
        case 4:
            ((r = Ws), (o = Ks), (Ws = n.stateNode.containerInfo), (Ks = !0), Qs(e, t, n), (Ws = r), (Ks = o));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ts && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                    var i = o,
                        a = i.destroy;
                    ((i = i.tag), void 0 !== a && (0 != (2 & i) || 0 != (4 & i)) && Ns(n, t, a), (o = o.next));
                } while (o !== r);
            }
            Qs(e, t, n);
            break;
        case 1:
            if (!Ts && (Vs(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    ld(n, t, l);
                }
            Qs(e, t, n);
            break;
        case 21:
            Qs(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Ts = (r = Ts) || null !== n.memoizedState), Qs(e, t, n), (Ts = r)) : Qs(e, t, n);
            break;
        default:
            Qs(e, t, n);
    }
}
function Ys(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new js()),
            t.forEach(function (t) {
                var r = dd.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Zs(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    a = t,
                    l = a;
                e: for (; null !== l; ) {
                    switch (l.tag) {
                        case 5:
                            ((Ws = l.stateNode), (Ks = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Ws = l.stateNode.containerInfo), (Ks = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Ws) throw Error(Ue(160));
                (Xs(i, a, o), (Ws = null), (Ks = !1));
                var u = o.alternate;
                (null !== u && (u.return = null), (o.return = null));
            } catch (s) {
                ld(o, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Js(t, e), (t = t.sibling));
}
function Js(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Zs(t, e), ec(e), 4 & r)) {
                try {
                    (zs(3, e, e.return), Ds(3, e));
                } catch (g) {
                    ld(e, e.return, g);
                }
                try {
                    zs(5, e, e.return);
                } catch (g) {
                    ld(e, e.return, g);
                }
            }
            break;
        case 1:
            (Zs(t, e), ec(e), 512 & r && null !== n && Vs(n, n.return));
            break;
        case 5:
            if ((Zs(t, e), ec(e), 512 & r && null !== n && Vs(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                    Qt(o, '');
                } catch (g) {
                    ld(e, e.return, g);
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                    a = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && jt(o, i), nn(l, a));
                        var s = nn(l, i);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                d = u[a + 1];
                            'style' === c
                                ? Jt(o, d)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Kt(o, d)
                                  : 'children' === c
                                    ? Qt(o, d)
                                    : nt(o, c, d, s);
                        }
                        switch (l) {
                            case 'input':
                                Ft(o, i);
                                break;
                            case 'textarea':
                                Ut(o, i);
                                break;
                            case 'select':
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? zt(o, !!i.multiple, p, !1)
                                    : f !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? zt(o, !!i.multiple, i.defaultValue, !0)
                                          : zt(o, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        o[Yi] = i;
                    } catch (g) {
                        ld(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((Zs(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ue(162));
                ((o = e.stateNode), (i = e.memoizedProps));
                try {
                    o.nodeValue = i;
                } catch (g) {
                    ld(e, e.return, g);
                }
            }
            break;
        case 3:
            if ((Zs(t, e), ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Or(t.containerInfo);
                } catch (g) {
                    ld(e, e.return, g);
                }
            break;
        case 4:
        default:
            (Zs(t, e), ec(e));
            break;
        case 13:
            (Zs(t, e),
                ec(e),
                8192 & (o = e.child).flags &&
                    ((i = null !== o.memoizedState),
                    (o.stateNode.isHidden = i),
                    !i || (null !== o.alternate && null !== o.alternate.memoizedState) || (Cc = Fn())),
                4 & r && Ys(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ts = (s = Ts) || c), Zs(t, e), (Ts = s)) : Zs(t, e),
                ec(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (Fs = e, c = e.child; null !== c; ) {
                        for (d = Fs = c; null !== Fs; ) {
                            switch (((p = (f = Fs).child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zs(4, f, f.return);
                                    break;
                                case 1:
                                    Vs(f, f.return);
                                    var h = f.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = f), (n = f.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (g) {
                                            ld(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    Vs(f, f.return);
                                    break;
                                case 22:
                                    if (null !== f.memoizedState) {
                                        oc(d);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = f), (Fs = p)) : oc(d);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, d = e; ; ) {
                    if (5 === d.tag) {
                        if (null === c) {
                            c = d;
                            try {
                                ((o = d.stateNode),
                                    s
                                        ? 'function' == typeof (i = o.style).setProperty
                                            ? i.setProperty('display', 'none', 'important')
                                            : (i.display = 'none')
                                        : ((l = d.stateNode),
                                          (a =
                                              null != (u = d.memoizedProps.style) && u.hasOwnProperty('display')
                                                  ? u.display
                                                  : null),
                                          (l.style.display = Zt('display', a))));
                            } catch (g) {
                                ld(e, e.return, g);
                            }
                        }
                    } else if (6 === d.tag) {
                        if (null === c)
                            try {
                                d.stateNode.nodeValue = s ? '' : d.memoizedProps;
                            } catch (g) {
                                ld(e, e.return, g);
                            }
                    } else if (
                        ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                        null !== d.child
                    ) {
                        ((d.child.return = d), (d = d.child));
                        continue;
                    }
                    if (d === e) break e;
                    for (; null === d.sibling; ) {
                        if (null === d.return || d.return === e) break e;
                        (c === d && (c = null), (d = d.return));
                    }
                    (c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling));
                }
            }
            break;
        case 19:
            (Zs(t, e), ec(e), 4 & r && Ys(e));
        case 21:
    }
}
function ec(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Hs(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ue(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    (32 & r.flags && (Qt(o, ''), (r.flags &= -33)), qs(e, Gs(e), o));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    $s(e, Gs(e), i);
                    break;
                default:
                    throw Error(Ue(161));
            }
        } catch (a) {
            ld(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function tc(e, t, n) {
    ((Fs = e), nc(e));
}
function nc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Fs; ) {
        var o = Fs,
            i = o.child;
        if (22 === o.tag && r) {
            var a = null !== o.memoizedState || Ms;
            if (!a) {
                var l = o.alternate,
                    u = (null !== l && null !== l.memoizedState) || Ts;
                l = Ms;
                var s = Ts;
                if (((Ms = a), (Ts = u) && !s))
                    for (Fs = o; null !== Fs; )
                        ((u = (a = Fs).child),
                            22 === a.tag && null !== a.memoizedState
                                ? ic(o)
                                : null !== u
                                  ? ((u.return = a), (Fs = u))
                                  : ic(o));
                for (; null !== i; ) ((Fs = i), nc(i), (i = i.sibling));
                ((Fs = o), (Ms = l), (Ts = s));
            }
            rc(e);
        } else 0 != (8772 & o.subtreeFlags) && null !== i ? ((i.return = o), (Fs = i)) : rc(e);
    }
}
function rc(e) {
    for (; null !== Fs; ) {
        var t = Fs;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ts || Ds(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Ts)
                                if (null === n) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : zu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && Pl(t, i, r);
                            break;
                        case 3:
                            var a = t.updateQueue;
                            if (null !== a) {
                                if (((n = null), null !== t.child))
                                    switch (t.child.tag) {
                                        case 5:
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Pl(t, a, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (null === n && 4 & t.flags) {
                                n = l;
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
                                        var d = c.dehydrated;
                                        null !== d && Or(d);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ue(163));
                    }
                Ts || (512 & t.flags && Bs(t));
            } catch (f) {
                ld(t, t.return, f);
            }
        }
        if (t === e) {
            Fs = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Fs = n));
            break;
        }
        Fs = t.return;
    }
}
function oc(e) {
    for (; null !== Fs; ) {
        var t = Fs;
        if (t === e) {
            Fs = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Fs = n));
            break;
        }
        Fs = t.return;
    }
}
function ic(e) {
    for (; null !== Fs; ) {
        var t = Fs;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ds(4, t);
                    } catch (u) {
                        ld(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            ld(t, o, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Bs(t);
                    } catch (u) {
                        ld(t, i, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Bs(t);
                    } catch (u) {
                        ld(t, a, u);
                    }
            }
        } catch (u) {
            ld(t, t.return, u);
        }
        if (t === e) {
            Fs = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (Fs = l));
            break;
        }
        Fs = t.return;
    }
}
var ac,
    lc = Math.ceil,
    uc = rt.ReactCurrentDispatcher,
    sc = rt.ReactCurrentOwner,
    cc = rt.ReactCurrentBatchConfig,
    dc = 0,
    fc = null,
    pc = null,
    hc = 0,
    gc = 0,
    vc = ua(0),
    mc = 0,
    bc = null,
    yc = 0,
    _c = 0,
    wc = 0,
    Sc = null,
    kc = null,
    Cc = 0,
    xc = 1 / 0,
    Oc = null,
    Pc = !1,
    Ec = null,
    Rc = null,
    Ac = !1,
    Ic = null,
    Mc = 0,
    Tc = 0,
    jc = null,
    Fc = -1,
    Vc = 0;
function Nc() {
    return 0 != (6 & dc) ? Fn() : -1 !== Fc ? Fc : (Fc = Fn());
}
function Lc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & dc) && 0 !== hc
          ? hc & -hc
          : null !== Ja.transition
            ? (0 === Vc && (Vc = Jn()), Vc)
            : 0 !== (e = rr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : jr(e.type));
}
function zc(e, t, n, r) {
    if (50 < Tc) throw ((Tc = 0), (jc = null), Error(Ue(185)));
    (tr(e, n, r),
        (0 != (2 & dc) && e === fc) ||
            (e === fc && (0 == (2 & dc) && (_c |= n), 4 === mc && Gc(e, hc)),
            Dc(e, r),
            1 === n && 0 === dc && 0 == (1 & t.mode) && ((xc = Fn() + 500), ka && Oa())));
}
function Dc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var a = 31 - Gn(i),
                l = 1 << a,
                u = o[a];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (o[a] = Yn(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = Xn(e, e === fc ? hc : 0);
    if (0 === r) (null !== n && Mn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Mn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((ka = !0), xa(e));
                  })($c.bind(null, e))
                : xa($c.bind(null, e)),
                Gi(function () {
                    0 == (6 & dc) && Oa();
                }),
                (n = null));
        else {
            switch (or(r)) {
                case 1:
                    n = Nn;
                    break;
                case 4:
                    n = Ln;
                    break;
                case 16:
                default:
                    n = zn;
                    break;
                case 536870912:
                    n = Bn;
            }
            n = fd(n, Bc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Bc(e, t) {
    if (((Fc = -1), (Vc = 0), 0 != (6 & dc))) throw Error(Ue(327));
    var n = e.callbackNode;
    if (id() && e.callbackNode !== n) return null;
    var r = Xn(e, e === fc ? hc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Jc(e, r);
    else {
        t = r;
        var o = dc;
        dc |= 2;
        var i = Yc();
        for ((fc === e && hc === t) || ((Oc = null), (xc = Fn() + 500), Qc(e, t)); ; )
            try {
                td();
                break;
            } catch (l) {
                Xc(e, l);
            }
        (cl(), (uc.current = i), (dc = o), null !== pc ? (t = 0) : ((fc = null), (hc = 0), (t = mc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (o = Zn(e)) && ((r = o), (t = Uc(e, o))), 1 === t))
            throw ((n = bc), Qc(e, 0), Gc(e, r), Dc(e, Fn()), n);
        if (6 === t) Gc(e, r);
        else {
            if (
                ((o = e.current.alternate),
                0 == (30 & r) &&
                    !(function (e) {
                        for (var t = e; ; ) {
                            if (16384 & t.flags) {
                                var n = t.updateQueue;
                                if (null !== n && null !== (n = n.stores))
                                    for (var r = 0; r < n.length; r++) {
                                        var o = n[r],
                                            i = o.getSnapshot;
                                        o = o.value;
                                        try {
                                            if (!$o(i(), o)) return !1;
                                        } catch (a) {
                                            return !1;
                                        }
                                    }
                            }
                            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n));
                            else {
                                if (t === e) break;
                                for (; null === t.sibling; ) {
                                    if (null === t.return || t.return === e) return !0;
                                    t = t.return;
                                }
                                ((t.sibling.return = t.return), (t = t.sibling));
                            }
                        }
                        return !0;
                    })(o) &&
                    (2 === (t = Jc(e, r)) && 0 !== (i = Zn(e)) && ((r = i), (t = Uc(e, i))), 1 === t))
            )
                throw ((n = bc), Qc(e, 0), Gc(e, r), Dc(e, Fn()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ue(345));
                case 2:
                case 5:
                    od(e, kc, Oc);
                    break;
                case 3:
                    if ((Gc(e, r), (130023424 & r) === r && 10 < (t = Cc + 500 - Fn()))) {
                        if (0 !== Xn(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            (Nc(), (e.pingedLanes |= e.suspendedLanes & o));
                            break;
                        }
                        e.timeoutHandle = Bi(od.bind(null, e, kc, Oc), t);
                        break;
                    }
                    od(e, kc, Oc);
                    break;
                case 4:
                    if ((Gc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var a = 31 - Gn(r);
                        ((i = 1 << a), (a = t[a]) > o && (o = a), (r &= ~i));
                    }
                    if (
                        ((r = o),
                        10 <
                            (r =
                                (120 > (r = Fn() - r)
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
                                              : 1960 * lc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Bi(od.bind(null, e, kc, Oc), r);
                        break;
                    }
                    od(e, kc, Oc);
                    break;
                default:
                    throw Error(Ue(329));
            }
        }
    }
    return (Dc(e, Fn()), e.callbackNode === n ? Bc.bind(null, e) : null);
}
function Uc(e, t) {
    var n = Sc;
    return (
        e.current.memoizedState.isDehydrated && (Qc(e, t).flags |= 256),
        2 !== (e = Jc(e, t)) && ((t = kc), (kc = n), null !== t && Hc(t)),
        e
    );
}
function Hc(e) {
    null === kc ? (kc = e) : kc.push.apply(kc, e);
}
function Gc(e, t) {
    for (t &= ~wc, t &= ~_c, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Gn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function $c(e) {
    if (0 != (6 & dc)) throw Error(Ue(327));
    id();
    var t = Xn(e, 0);
    if (0 == (1 & t)) return (Dc(e, Fn()), null);
    var n = Jc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Zn(e);
        0 !== r && ((t = r), (n = Uc(e, r)));
    }
    if (1 === n) throw ((n = bc), Qc(e, 0), Gc(e, t), Dc(e, Fn()), n);
    if (6 === n) throw Error(Ue(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), od(e, kc, Oc), Dc(e, Fn()), null);
}
function qc(e, t) {
    var n = dc;
    dc |= 1;
    try {
        return e(t);
    } finally {
        0 === (dc = n) && ((xc = Fn() + 500), ka && Oa());
    }
}
function Wc(e) {
    null !== Ic && 0 === Ic.tag && 0 == (6 & dc) && id();
    var t = dc;
    dc |= 1;
    var n = cc.transition,
        r = rr;
    try {
        if (((cc.transition = null), (rr = 1), e)) return e();
    } finally {
        ((rr = r), (cc.transition = n), 0 == (6 & (dc = t)) && Oa());
    }
}
function Kc() {
    ((gc = vc.current), sa(vc));
}
function Qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Ui(n)), null !== pc))
        for (n = pc.return; null !== n; ) {
            var r = n;
            switch ((za(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ma();
                    break;
                case 3:
                    (jl(), sa(pa), sa(fa), Dl());
                    break;
                case 5:
                    Vl(r);
                    break;
                case 4:
                    jl();
                    break;
                case 13:
                case 19:
                    sa(Nl);
                    break;
                case 10:
                    dl(r.type._context);
                    break;
                case 22:
                case 23:
                    Kc();
            }
            n = n.return;
        }
    if (
        ((fc = e),
        (pc = e = vd(e.current, null)),
        (hc = gc = t),
        (mc = 0),
        (bc = null),
        (wc = _c = yc = 0),
        (kc = Sc = null),
        null !== gl)
    ) {
        for (t = 0; t < gl.length; t++)
            if (null !== (r = (n = gl[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (null !== i) {
                    var a = i.next;
                    ((i.next = o), (r.next = a));
                }
                n.pending = r;
            }
        gl = null;
    }
    return e;
}
function Xc(e, t) {
    for (;;) {
        var n = pc;
        try {
            if ((cl(), (Bl.current = Fu), Wl)) {
                for (var r = Gl.memoizedState; null !== r; ) {
                    var o = r.queue;
                    (null !== o && (o.pending = null), (r = r.next));
                }
                Wl = !1;
            }
            if (
                ((Hl = 0),
                (ql = $l = Gl = null),
                (Kl = !1),
                (Ql = 0),
                (sc.current = null),
                null === n || null === n.return)
            ) {
                ((mc = 1), (bc = t), (pc = null));
                break;
            }
            e: {
                var i = e,
                    a = n.return,
                    l = n,
                    u = t;
                if (((t = hc), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
                    var s = u,
                        c = l,
                        d = c.tag;
                    if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                        var f = c.alternate;
                        f
                            ? ((c.updateQueue = f.updateQueue),
                              (c.memoizedState = f.memoizedState),
                              (c.lanes = f.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = Ju(a);
                    if (null !== p) {
                        ((p.flags &= -257), es(p, a, l, 0, t), 1 & p.mode && Zu(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var g = new Set();
                            (g.add(u), (t.updateQueue = g));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Zu(i, s, t), Zc());
                        break e;
                    }
                    u = Error(Ue(426));
                } else if (Ua && 1 & l.mode) {
                    var v = Ju(a);
                    if (null !== v) {
                        (0 == (65536 & v.flags) && (v.flags |= 256), es(v, a, l, 0, t), Za(qu(u, l)));
                        break e;
                    }
                }
                ((i = u = qu(u, l)), 4 !== mc && (mc = 2), null === Sc ? (Sc = [i]) : Sc.push(i), (i = a));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), xl(i, Xu(0, u, t)));
                            break e;
                        case 1:
                            l = u;
                            var m = i.type,
                                b = i.stateNode;
                            if (
                                0 == (128 & i.flags) &&
                                ('function' == typeof m.getDerivedStateFromError ||
                                    (null !== b &&
                                        'function' == typeof b.componentDidCatch &&
                                        (null === Rc || !Rc.has(b))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), xl(i, Yu(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
            }
            rd(n);
        } catch (y) {
            ((t = y), pc === n && null !== n && (pc = n = n.return));
            continue;
        }
        break;
    }
}
function Yc() {
    var e = uc.current;
    return ((uc.current = Fu), null === e ? Fu : e);
}
function Zc() {
    ((0 !== mc && 3 !== mc && 2 !== mc) || (mc = 4),
        null === fc || (0 == (268435455 & yc) && 0 == (268435455 & _c)) || Gc(fc, hc));
}
function Jc(e, t) {
    var n = dc;
    dc |= 2;
    var r = Yc();
    for ((fc === e && hc === t) || ((Oc = null), Qc(e, t)); ; )
        try {
            ed();
            break;
        } catch (o) {
            Xc(e, o);
        }
    if ((cl(), (dc = n), (uc.current = r), null !== pc)) throw Error(Ue(261));
    return ((fc = null), (hc = 0), mc);
}
function ed() {
    for (; null !== pc; ) nd(pc);
}
function td() {
    for (; null !== pc && !Tn(); ) nd(pc);
}
function nd(e) {
    var t = ac(e.alternate, e, gc);
    ((e.memoizedProps = e.pendingProps), null === t ? rd(e) : (pc = t), (sc.current = null));
}
function rd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = As(n, t, gc))) return void (pc = n);
        } else {
            if (null !== (n = Is(n, t))) return ((n.flags &= 32767), void (pc = n));
            if (null === e) return ((mc = 6), void (pc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (pc = t);
        pc = t = e;
    } while (null !== t);
    0 === mc && (mc = 5);
}
function od(e, t, n) {
    var r = rr,
        o = cc.transition;
    try {
        ((cc.transition = null),
            (rr = 1),
            (function (e, t, n, r) {
                do {
                    id();
                } while (null !== Ic);
                if (0 != (6 & dc)) throw Error(Ue(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ue(177));
                ((e.callbackNode = null), (e.callbackPriority = 0));
                var i = n.lanes | n.childLanes;
                if (
                    ((function (e, t) {
                        var n = e.pendingLanes & ~t;
                        ((e.pendingLanes = t),
                            (e.suspendedLanes = 0),
                            (e.pingedLanes = 0),
                            (e.expiredLanes &= t),
                            (e.mutableReadLanes &= t),
                            (e.entangledLanes &= t),
                            (t = e.entanglements));
                        var r = e.eventTimes;
                        for (e = e.expirationTimes; 0 < n; ) {
                            var o = 31 - Gn(n),
                                i = 1 << o;
                            ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === fc && ((pc = fc = null), (hc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Ac ||
                        ((Ac = !0),
                        fd(zn, function () {
                            return (id(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = cc.transition), (cc.transition = null));
                    var a = rr;
                    rr = 1;
                    var l = dc;
                    ((dc |= 4),
                        (sc.current = null),
                        (function (e, t) {
                            if (((Li = Er), Yo((e = Xo())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var o = r.anchorOffset,
                                                i = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                (n.nodeType, i.nodeType);
                                            } catch (_) {
                                                n = null;
                                                break e;
                                            }
                                            var a = 0,
                                                l = -1,
                                                u = -1,
                                                s = 0,
                                                c = 0,
                                                d = e,
                                                f = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    d !== n || (0 !== o && 3 !== d.nodeType) || (l = a + o),
                                                        d !== i || (0 !== r && 3 !== d.nodeType) || (u = a + r),
                                                        3 === d.nodeType && (a += d.nodeValue.length),
                                                        null !== (p = d.firstChild);
                                                )
                                                    ((f = d), (d = p));
                                                for (;;) {
                                                    if (d === e) break t;
                                                    if (
                                                        (f === n && ++s === o && (l = a),
                                                        f === i && ++c === r && (u = a),
                                                        null !== (p = d.nextSibling))
                                                    )
                                                        break;
                                                    f = (d = f).parentNode;
                                                }
                                                d = p;
                                            }
                                            n = -1 === l || -1 === u ? null : { start: l, end: u };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (zi = { focusedElem: e, selectionRange: n }, Er = !1, Fs = t; null !== Fs; )
                                if (((e = (t = Fs).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Fs = e));
                                else
                                    for (; null !== Fs; ) {
                                        t = Fs;
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
                                                            var g = h.memoizedProps,
                                                                v = h.memoizedState,
                                                                m = t.stateNode,
                                                                b = m.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? g : zu(t.type, g),
                                                                    v,
                                                                );
                                                            m.__reactInternalSnapshotBeforeUpdate = b;
                                                        }
                                                        break;
                                                    case 3:
                                                        var y = t.stateNode.containerInfo;
                                                        1 === y.nodeType
                                                            ? (y.textContent = '')
                                                            : 9 === y.nodeType &&
                                                              y.documentElement &&
                                                              y.removeChild(y.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(Ue(163));
                                                }
                                        } catch (_) {
                                            ld(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Fs = e));
                                            break;
                                        }
                                        Fs = t.return;
                                    }
                            ((h = Ls), (Ls = !1));
                        })(e, n),
                        Js(n, e),
                        Zo(zi),
                        (Er = !!Li),
                        (zi = Li = null),
                        (e.current = n),
                        tc(n),
                        jn(),
                        (dc = l),
                        (rr = a),
                        (cc.transition = i));
                } else e.current = n;
                if (
                    (Ac && ((Ac = !1), (Ic = e), (Mc = o)),
                    (i = e.pendingLanes),
                    0 === i && (Rc = null),
                    (function (e) {
                        if (Hn && 'function' == typeof Hn.onCommitFiberRoot)
                            try {
                                Hn.onCommitFiberRoot(Un, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Dc(e, Fn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
                if (Pc) throw ((Pc = !1), (e = Ec), (Ec = null), e);
                (0 != (1 & Mc) && 0 !== e.tag && id(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === jc ? Tc++ : ((Tc = 0), (jc = e))) : (Tc = 0),
                    Oa());
            })(e, t, n, r));
    } finally {
        ((cc.transition = o), (rr = r));
    }
    return null;
}
function id() {
    if (null !== Ic) {
        var e = or(Mc),
            t = cc.transition,
            n = rr;
        try {
            if (((cc.transition = null), (rr = 16 > e ? 16 : e), null === Ic)) var r = !1;
            else {
                if (((e = Ic), (Ic = null), (Mc = 0), 0 != (6 & dc))) throw Error(Ue(331));
                var o = dc;
                for (dc |= 4, Fs = e.current; null !== Fs; ) {
                    var i = Fs,
                        a = i.child;
                    if (0 != (16 & Fs.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (Fs = s; null !== Fs; ) {
                                    var c = Fs;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zs(8, c, i);
                                    }
                                    var d = c.child;
                                    if (null !== d) ((d.return = c), (Fs = d));
                                    else
                                        for (; null !== Fs; ) {
                                            var f = (c = Fs).sibling,
                                                p = c.return;
                                            if ((Us(c), c === s)) {
                                                Fs = null;
                                                break;
                                            }
                                            if (null !== f) {
                                                ((f.return = p), (Fs = f));
                                                break;
                                            }
                                            Fs = p;
                                        }
                                }
                            }
                            var h = i.alternate;
                            if (null !== h) {
                                var g = h.child;
                                if (null !== g) {
                                    h.child = null;
                                    do {
                                        var v = g.sibling;
                                        ((g.sibling = null), (g = v));
                                    } while (null !== g);
                                }
                            }
                            Fs = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== a) ((a.return = i), (Fs = a));
                    else
                        e: for (; null !== Fs; ) {
                            if (0 != (2048 & (i = Fs).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zs(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (null !== m) {
                                ((m.return = i.return), (Fs = m));
                                break e;
                            }
                            Fs = i.return;
                        }
                }
                var b = e.current;
                for (Fs = b; null !== Fs; ) {
                    var y = (a = Fs).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== y) ((y.return = a), (Fs = y));
                    else
                        e: for (a = b; null !== Fs; ) {
                            if (0 != (2048 & (l = Fs).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ds(9, l);
                                    }
                                } catch (w) {
                                    ld(l, l.return, w);
                                }
                            if (l === a) {
                                Fs = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (Fs = _));
                                break e;
                            }
                            Fs = l.return;
                        }
                }
                if (((dc = o), Oa(), Hn && 'function' == typeof Hn.onPostCommitFiberRoot))
                    try {
                        Hn.onPostCommitFiberRoot(Un, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((rr = n), (cc.transition = t));
        }
    }
    return !1;
}
function ad(e, t, n) {
    ((e = kl(e, (t = Xu(0, (t = qu(n, t)), 1)), 1)), (t = Nc()), null !== e && (tr(e, 1, t), Dc(e, t)));
}
function ld(e, t, n) {
    if (3 === e.tag) ad(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                ad(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Rc || !Rc.has(r)))
                ) {
                    ((t = kl(t, (e = Yu(t, (e = qu(n, e)), 1)), 1)), (e = Nc()), null !== t && (tr(t, 1, e), Dc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function ud(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Nc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        fc === e &&
            (hc & n) === n &&
            (4 === mc || (3 === mc && (130023424 & hc) === hc && 500 > Fn() - Cc) ? Qc(e, 0) : (wc |= n)),
        Dc(e, t));
}
function sd(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Kn), 0 == (130023424 & (Kn <<= 1)) && (Kn = 4194304)));
    var n = Nc();
    null !== (e = bl(e, t)) && (tr(e, t, n), Dc(e, n));
}
function cd(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), sd(e, n));
}
function dd(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            null !== o && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(Ue(314));
    }
    (null !== r && r.delete(t), sd(e, n));
}
function fd(e, t) {
    return In(e, t);
}
function pd(e, t, n, r) {
    ((this.tag = e),
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
        (this.alternate = null));
}
function hd(e, t, n, r) {
    return new pd(e, t, n, r);
}
function gd(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function vd(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = hd(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function md(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), 'function' == typeof e)) gd(e) && (a = 1);
    else if ('string' == typeof e) a = 5;
    else
        e: switch (e) {
            case at:
                return bd(n.children, o, i, t);
            case lt:
                ((a = 8), (o |= 8));
                break;
            case ut:
                return (((e = hd(12, n, t, 2 | o)).elementType = ut), (e.lanes = i), e);
            case ft:
                return (((e = hd(13, n, t, o)).elementType = ft), (e.lanes = i), e);
            case pt:
                return (((e = hd(19, n, t, o)).elementType = pt), (e.lanes = i), e);
            case vt:
                return yd(n, o, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case st:
                            a = 10;
                            break e;
                        case ct:
                            a = 9;
                            break e;
                        case dt:
                            a = 11;
                            break e;
                        case ht:
                            a = 14;
                            break e;
                        case gt:
                            ((a = 16), (r = null));
                            break e;
                    }
                throw Error(Ue(130, null == e ? e : typeof e, ''));
        }
    return (((t = hd(a, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function bd(e, t, n, r) {
    return (((e = hd(7, e, r, t)).lanes = n), e);
}
function yd(e, t, n, r) {
    return (((e = hd(22, e, r, t)).elementType = vt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function _d(e, t, n) {
    return (((e = hd(6, e, null, t)).lanes = n), e);
}
function wd(e, t, n) {
    return (
        ((t = hd(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Sd(e, t, n, r, o) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = er(0)),
        (this.expirationTimes = er(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = er(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null));
}
function kd(e, t, n, r, o, i, a, l, u) {
    return (
        (e = new Sd(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = hd(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        _l(i),
        e
    );
}
function Cd(e) {
    if (!e) return da;
    e: {
        if (On((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ue(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (va(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Ue(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (va(n)) return ya(e, n, t);
    }
    return t;
}
function xd(e, t, n, r, o, i, a, l, u) {
    return (
        ((e = kd(n, r, !0, e, 0, i, 0, l, u)).context = Cd(null)),
        (n = e.current),
        ((i = Sl((r = Nc()), (o = Lc(n)))).callback = null != t ? t : null),
        kl(n, i, o),
        (e.current.lanes = o),
        tr(e, o, r),
        Dc(e, r),
        e
    );
}
function Od(e, t, n, r) {
    var o = t.current,
        i = Nc(),
        a = Lc(o);
    return (
        (n = Cd(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Sl(i, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = kl(o, t, a)) && (zc(e, o, a, i), Cl(e, o, a)),
        a
    );
}
function Pd(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Ed(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Rd(e, t) {
    (Ed(e, t), (e = e.alternate) && Ed(e, t));
}
ac = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || pa.current) ns = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (ns = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (fs(t), Ya());
                                break;
                            case 5:
                                Fl(t);
                                break;
                            case 1:
                                va(t.type) && _a(t);
                                break;
                            case 4:
                                Tl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    o = t.memoizedProps.value;
                                (ca(al, r._currentValue), (r._currentValue = o));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (ca(Nl, 1 & Nl.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _s(e, t, n)
                                          : (ca(Nl, 1 & Nl.current), null !== (e = Ps(e, t, n)) ? e.sibling : null);
                                ca(Nl, 1 & Nl.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return xs(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (o = t.memoizedState) &&
                                        ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                                    ca(Nl, Nl.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), ls(e, t, n));
                        }
                        return Ps(e, t, n);
                    })(e, t, n)
                );
            ns = 0 != (131072 & e.flags);
        }
    else ((ns = !1), Ua && 0 != (1048576 & t.flags) && Na(t, Aa, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Os(e, t), (e = t.pendingProps));
            var o = ga(t, fa.current);
            (pl(t, n), (o = Jl(null, t, r, e, o, n)));
            var i = eu();
            return (
                (t.flags |= 1),
                'object' == typeof o && null !== o && 'function' == typeof o.render && void 0 === o.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      va(r) ? ((i = !0), _a(t)) : (i = !1),
                      (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                      _l(t),
                      (o.updater = Bu),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      $u(t, r, e, n),
                      (t = ds(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Ua && i && La(t), rs(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Os(e, t),
                    (e = t.pendingProps),
                    (r = (o = r._init)(r._payload)),
                    (t.type = r),
                    (o = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return gd(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === dt) return 11;
                                if (e === ht) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = zu(r, e)),
                    o)
                ) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = os(null, t, r, e, n);
                        break e;
                    case 14:
                        t = is(null, t, r, zu(r.type, e), n);
                        break e;
                }
                throw Error(Ue(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (o = t.pendingProps), ss(e, t, r, (o = t.elementType === r ? o : zu(r, o)), n));
        case 1:
            return ((r = t.type), (o = t.pendingProps), cs(e, t, r, (o = t.elementType === r ? o : zu(r, o)), n));
        case 3:
            e: {
                if ((fs(t), null === e)) throw Error(Ue(387));
                ((r = t.pendingProps), (o = (i = t.memoizedState).element), wl(e, t), Ol(t, r, null, n));
                var a = t.memoizedState;
                if (((r = a.element), i.isDehydrated)) {
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        256 & t.flags)
                    ) {
                        t = ps(e, t, r, n, (o = qu(Error(Ue(423)), t)));
                        break e;
                    }
                    if (r !== o) {
                        t = ps(e, t, r, n, (o = qu(Error(Ue(424)), t)));
                        break e;
                    }
                    for (
                        Ba = Wi(t.stateNode.containerInfo.firstChild),
                            Da = t,
                            Ua = !0,
                            Ha = null,
                            n = il(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Ya(), r === o)) {
                        t = Ps(e, t, n);
                        break e;
                    }
                    rs(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Fl(t),
                null === e && Wa(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (a = o.children),
                Di(r, o) ? (a = null) : null !== i && Di(r, i) && (t.flags |= 32),
                us(e, t),
                rs(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && Wa(t), null);
        case 13:
            return _s(e, t, n);
        case 4:
            return (
                Tl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ol(t, null, r, n)) : rs(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (o = t.pendingProps), os(e, t, r, (o = t.elementType === r ? o : zu(r, o)), n));
        case 7:
            return (rs(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (rs(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (a = o.value),
                    ca(al, r._currentValue),
                    (r._currentValue = a),
                    null !== i)
                )
                    if ($o(i.value, a)) {
                        if (i.children === o.children && !pa.current) {
                            t = Ps(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                            var l = i.dependencies;
                            if (null !== l) {
                                a = i.child;
                                for (var u = l.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === i.tag) {
                                            (u = Sl(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            fl(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) a = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (a = i.return)) throw Error(Ue(341));
                                ((a.lanes |= n),
                                    null !== (l = a.alternate) && (l.lanes |= n),
                                    fl(a, n, t),
                                    (a = i.sibling));
                            } else a = i.child;
                            if (null !== a) a.return = i;
                            else
                                for (a = i; null !== a; ) {
                                    if (a === t) {
                                        a = null;
                                        break;
                                    }
                                    if (null !== (i = a.sibling)) {
                                        ((i.return = a.return), (a = i));
                                        break;
                                    }
                                    a = a.return;
                                }
                            i = a;
                        }
                (rs(e, t, o.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                pl(t, n),
                (r = r((o = hl(o)))),
                (t.flags |= 1),
                rs(e, t, r, n),
                t.child
            );
        case 14:
            return ((o = zu((r = t.type), t.pendingProps)), is(e, t, r, (o = zu(r.type, o)), n));
        case 15:
            return as(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : zu(r, o)),
                Os(e, t),
                (t.tag = 1),
                va(r) ? ((e = !0), _a(t)) : (e = !1),
                pl(t, n),
                Hu(t, r, o),
                $u(t, r, o, n),
                ds(null, t, r, !0, e, n)
            );
        case 19:
            return xs(e, t, n);
        case 22:
            return ls(e, t, n);
    }
    throw Error(Ue(156, t.tag));
};
var Ad =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Id(e) {
    this._internalRoot = e;
}
function Md(e) {
    this._internalRoot = e;
}
function Td(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function jd(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Fd() {}
function Vd(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if ('function' == typeof o) {
            var l = o;
            o = function () {
                var e = Pd(a);
                l.call(e);
            };
        }
        Od(t, a, e, o);
    } else
        a = (function (e, t, n, r, o) {
            if (o) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Pd(a);
                        i.call(e);
                    };
                }
                var a = xd(t, r, e, 0, null, !1, 0, '', Fd);
                return (
                    (e._reactRootContainer = a),
                    (e[Zi] = a.current),
                    Oi(8 === e.nodeType ? e.parentNode : e),
                    Wc(),
                    a
                );
            }
            for (; (o = e.lastChild); ) e.removeChild(o);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Pd(u);
                    l.call(e);
                };
            }
            var u = kd(e, 0, !1, null, 0, !1, 0, '', Fd);
            return (
                (e._reactRootContainer = u),
                (e[Zi] = u.current),
                Oi(8 === e.nodeType ? e.parentNode : e),
                Wc(function () {
                    Od(t, u, n, r);
                }),
                u
            );
        })(n, t, e, o, r);
    return Pd(a);
}
((Md.prototype.render = Id.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ue(409));
        Od(e, t, null, null);
    }),
    (Md.prototype.unmount = Id.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Wc(function () {
                    Od(null, e, null, null);
                }),
                    (t[Zi] = null));
            }
        }),
    (Md.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ur();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < mr.length && 0 !== t && t < mr[n].priority; n++);
            (mr.splice(n, 0, e), 0 === n && wr(e));
        }
    }),
    (ir = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Qn(t.pendingLanes);
                    0 !== n && (nr(t, 1 | n), Dc(t, Fn()), 0 == (6 & dc) && ((xc = Fn() + 500), Oa()));
                }
                break;
            case 13:
                (Wc(function () {
                    var t = bl(e, 1);
                    if (null !== t) {
                        var n = Nc();
                        zc(t, e, 1, n);
                    }
                }),
                    Rd(e, 1));
        }
    }),
    (ar = function (e) {
        if (13 === e.tag) {
            var t = bl(e, 134217728);
            if (null !== t) zc(t, e, 134217728, Nc());
            Rd(e, 134217728);
        }
    }),
    (lr = function (e) {
        if (13 === e.tag) {
            var t = Lc(e),
                n = bl(e, t);
            if (null !== n) zc(n, e, t, Nc());
            Rd(e, t);
        }
    }),
    (ur = function () {
        return rr;
    }),
    (sr = function (e, t) {
        var n = rr;
        try {
            return ((rr = e), t());
        } finally {
            rr = n;
        }
    }),
    (an = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((Ft(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = ia(r);
                            if (!o) throw Error(Ue(90));
                            (At(r), Ft(r, o));
                        }
                    }
                }
                break;
            case 'textarea':
                Ut(e, n);
                break;
            case 'select':
                null != (t = n.value) && zt(e, !!n.multiple, t, !1);
        }
    }),
    (fn = qc),
    (pn = Wc));
var Nd = { usingClientEntryPoint: !1, Events: [ra, oa, ia, cn, dn, qc] },
    Ld = { findFiberByHostInstance: na, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    zd = {
        bundleType: Ld.bundleType,
        version: Ld.version,
        rendererPackageName: Ld.rendererPackageName,
        rendererConfig: Ld.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Rn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Ld.findFiberByHostInstance ||
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
    var Dd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dd.isDisabled && Dd.supportsFiber)
        try {
            ((Un = Dd.inject(zd)), (Hn = Dd));
        } catch (Wt) {}
}
((Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nd),
    (Ve.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Td(t)) throw Error(Ue(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: it, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Ve.createRoot = function (e, t) {
        if (!Td(e)) throw Error(Ue(299));
        var n = !1,
            r = '',
            o = Ad;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
            (t = kd(e, 1, !1, null, 0, n, 0, r, o)),
            (e[Zi] = t.current),
            Oi(8 === e.nodeType ? e.parentNode : e),
            new Id(t)
        );
    }),
    (Ve.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ue(188));
            throw ((e = Object.keys(e).join(',')), Error(Ue(268, e)));
        }
        return (e = null === (e = Rn(t)) ? null : e.stateNode);
    }),
    (Ve.flushSync = function (e) {
        return Wc(e);
    }),
    (Ve.hydrate = function (e, t, n) {
        if (!jd(t)) throw Error(Ue(200));
        return Vd(null, e, t, !0, n);
    }),
    (Ve.hydrateRoot = function (e, t, n) {
        if (!Td(e)) throw Error(Ue(405));
        var r = (null != n && n.hydratedSources) || null,
            o = !1,
            i = '',
            a = Ad;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = xd(t, null, e, 1, null != n ? n : null, o, 0, i, a)),
            (e[Zi] = t.current),
            Oi(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((o = (o = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, o])
                        : t.mutableSourceEagerHydrationData.push(n, o));
        return new Md(t);
    }),
    (Ve.render = function (e, t, n) {
        if (!jd(t)) throw Error(Ue(200));
        return Vd(null, e, t, !1, n);
    }),
    (Ve.unmountComponentAtNode = function (e) {
        if (!jd(e)) throw Error(Ue(40));
        return (
            !!e._reactRootContainer &&
            (Wc(function () {
                Vd(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Zi] = null));
                });
            }),
            !0)
        );
    }),
    (Ve.unstable_batchedUpdates = qc),
    (Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!jd(n)) throw Error(Ue(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ue(38));
        return Vd(e, t, n, !1, r);
    }),
    (Ve.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Fe.exports = Ve));
var Bd = Fe.exports;
const Ud = n(Bd);
var Hd = Bd;
((je.createRoot = Hd.createRoot), (je.hydrateRoot = Hd.hydrateRoot));
var Gd,
    $d = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Gd = $d),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var o = arguments[r];
                if (o) {
                    var i = typeof o;
                    if ('string' === i || 'number' === i) n.push(o);
                    else if (Array.isArray(o)) {
                        if (o.length) {
                            var a = t.apply(null, o);
                            a && n.push(a);
                        }
                    } else if ('object' === i) {
                        if (
                            o.toString !== Object.prototype.toString &&
                            !o.toString.toString().includes('[native code]')
                        ) {
                            n.push(o.toString());
                            continue;
                        }
                        for (var l in o) e.call(o, l) && o[l] && n.push(l);
                    }
                }
            }
            return n.join(' ');
        }
        Gd.exports ? ((t.default = t), (Gd.exports = t)) : (window.classNames = t);
    })());
const qd = n($d.exports);
function Wd(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error(
        'number' == typeof e
            ? '[MobX] minified error nr: ' +
                  e +
                  (n.length ? ' ' + n.map(String).join(',') : '') +
                  '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
            : '[MobX] ' + e,
    );
}
var Kd = {};
function Qd() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Kd;
}
var Xd = Object.assign,
    Yd = Object.getOwnPropertyDescriptor,
    Zd = Object.defineProperty,
    Jd = Object.prototype,
    ef = [];
Object.freeze(ef);
var tf = {};
Object.freeze(tf);
var nf = 'undefined' != typeof Proxy,
    rf = Object.toString();
function of() {
    nf || Wd('Proxy not available');
}
function af(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var lf = function () {};
function uf(e) {
    return 'function' == typeof e;
}
function sf(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function cf(e) {
    return null !== e && 'object' == typeof e;
}
function df(e) {
    if (!cf(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === rf;
}
function ff(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function pf(e, t, n) {
    Zd(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function hf(e, t, n) {
    Zd(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function gf(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return cf(e) && !0 === e[n];
        }
    );
}
function vf(e) {
    return e instanceof Map;
}
function mf(e) {
    return e instanceof Set;
}
var bf = void 0 !== Object.getOwnPropertySymbols;
var yf =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : bf
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function _f(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function wf(e, t) {
    return Jd.hasOwnProperty.call(e, t);
}
var Sf =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            yf(e).forEach(function (n) {
                t[n] = Yd(e, n);
            }),
            t
        );
    };
function kf(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
                e,
                ((o = r.key),
                (i = void 0),
                'symbol' ==
                typeof (i = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ('object' != typeof r) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(o, 'string'))
                    ? i
                    : String(i)),
                r,
            ));
    }
    var o, i;
}
function Cf(e, t, n) {
    return (t && kf(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function xf() {
    return (
        (xf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        xf.apply(this, arguments)
    );
}
function Of(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Pf(e, t));
}
function Pf(e, t) {
    return (Pf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function Ef(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Rf(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Af(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Rf(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Rf(e, t)
                          : void 0
                );
            }
        })(e)) ||
        t
    ) {
        n && (e = n);
        var r = 0;
        return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        };
    }
    throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
}
var If = Symbol('mobx-stored-annotations');
function Mf(e) {
    return Object.assign(function (t, n) {
        if (jf(n)) return e.decorate_20223_(t, n);
        Tf(t, n, e);
    }, e);
}
function Tf(e, t, n) {
    (wf(e, If) || pf(e, If, xf({}, e[If])),
        (function (e) {
            return e.annotationType_ === Uf;
        })(n) || (e[If][t] = n));
}
function jf(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Ff = Symbol('mobx administration'),
    Vf = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Up.NOT_TRACKING_),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                (this.name_ = e));
        }
        var t = e.prototype;
        return (
            (t.onBO = function () {
                this.onBOL &&
                    this.onBOL.forEach(function (e) {
                        return e();
                    });
            }),
            (t.onBUO = function () {
                this.onBUOL &&
                    this.onBUOL.forEach(function (e) {
                        return e();
                    });
            }),
            (t.reportObserved = function () {
                return hh(this);
            }),
            (t.reportChanged = function () {
                (fh(), gh(this), ph());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Nf = gf('Atom', Vf);
function Lf(e, t, n) {
    (void 0 === t && (t = lf), void 0 === n && (n = lf));
    var r,
        o = new Vf(e);
    return (t !== lf && Bh(Lh, o, t, r), n !== lf && Dh(o, n), o);
}
var zf = {
    structural: function (e, t) {
        return dv(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return dv(e, t, 1);
    },
};
function Df(e, t, n) {
    return rg(e)
        ? e
        : Array.isArray(e)
          ? xp.array(e, { name: n })
          : df(e)
            ? xp.object(e, void 0, { name: n })
            : vf(e)
              ? xp.map(e, { name: n })
              : mf(e)
                ? xp.set(e, { name: n })
                : 'function' != typeof e || Th(e) || eg(e)
                  ? e
                  : ff(e)
                    ? Zh(e)
                    : Ih(n, e);
}
function Bf(e) {
    return e;
}
var Uf = 'override';
function Hf(e, t) {
    return { annotationType_: e, options_: t, make_: Gf, extend_: $f, decorate_20223_: qf };
}
function Gf(e, t, n, r) {
    var o;
    if (null != (o = this.options_) && o.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Th(n.value)) return 1;
    var i = Wf(e, this, t, n, !1);
    return (Zd(r, t, i), 2);
}
function $f(e, t, n, r) {
    var o = Wf(e, this, t, n);
    return e.defineProperty_(t, o, r);
}
function qf(e, t) {
    var n = t.kind,
        r = t.name,
        o = t.addInitializer,
        i = this;
    if ('field' != n) {
        var a, l, u, s, c, d;
        if ('method' == n)
            return (
                Th(e) ||
                    ((l = e),
                    (e = Fp(
                        null != (u = null == (s = i.options_) ? void 0 : s.name) ? u : r.toString(),
                        l,
                        null != (c = null == (d = i.options_) ? void 0 : d.autoAction) && c,
                    ))),
                null != (a = this.options_) &&
                    a.bound &&
                    o(function () {
                        var e = this,
                            t = e[r].bind(e);
                        ((t.isMobxAction = !0), (e[r] = t));
                    }),
                e
            );
        Wd(
            "Cannot apply '" +
                i.annotationType_ +
                "' to '" +
                String(r) +
                "' (kind: " +
                n +
                "):\n'" +
                i.annotationType_ +
                "' can only be used on properties with a function value.",
        );
    } else
        o(function () {
            Tf(this, r, i);
        });
}
function Wf(e, t, n, r, o) {
    var i, a, l, u, s, c, d, f;
    (void 0 === o && (o = uh.safeDescriptors), (f = r), t.annotationType_, f.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Fp(
            null != (a = null == (l = t.options_) ? void 0 : l.name) ? a : n.toString(),
            h,
            null != (u = null == (s = t.options_) ? void 0 : s.autoAction) && u,
            null != (c = t.options_) && c.bound ? (null != (d = e.proxy_) ? d : e.target_) : void 0,
        ),
        configurable: !o || e.isPlainObject_,
        enumerable: !1,
        writable: !o,
    };
}
function Kf(e, t) {
    return { annotationType_: e, options_: t, make_: Qf, extend_: Xf, decorate_20223_: Yf };
}
function Qf(e, t, n, r) {
    var o;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (o = this.options_) &&
        o.bound &&
        (!wf(e.target_, t) || !eg(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (eg(n.value)) return 1;
    var i = Zf(e, this, t, n, !1, !1);
    return (Zd(r, t, i), 2);
}
function Xf(e, t, n, r) {
    var o,
        i = Zf(e, this, t, n, null == (o = this.options_) ? void 0 : o.bound);
    return e.defineProperty_(t, i, r);
}
function Yf(e, t) {
    var n,
        r = t.name,
        o = t.addInitializer;
    return (
        eg(e) || (e = Zh(e)),
        null != (n = this.options_) &&
            n.bound &&
            o(function () {
                var e = this,
                    t = e[r].bind(e);
                ((t.isMobXFlow = !0), (e[r] = t));
            }),
        e
    );
}
function Zf(e, t, n, r, o, i) {
    var a;
    (void 0 === i && (i = uh.safeDescriptors), (a = r), t.annotationType_, a.value);
    var l,
        u = r.value;
    (eg(u) || (u = Zh(u)), o) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Jf(e, t) {
    return { annotationType_: e, options_: t, make_: ep, extend_: tp, decorate_20223_: np };
}
function ep(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function tp(e, t, n, r) {
    var o;
    return (
        (o = n),
        this.annotationType_,
        o.get,
        e.defineComputedProperty_(t, xf({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function np(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Gg(this)[Ff],
                o = xf({}, n.options_, { get: e, context: this });
            (o.name || (o.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new qp(o)));
        }),
        function () {
            return this[Ff].getObservablePropValue_(r);
        }
    );
}
function rp(e, t) {
    return { annotationType_: e, options_: t, make_: op, extend_: ip, decorate_20223_: ap };
}
function op(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ip(e, t, n, r) {
    var o, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (o = null == (i = this.options_) ? void 0 : i.enhancer) ? o : Df,
            r,
        )
    );
}
function ap(e, t) {
    var n = this,
        r = t.kind,
        o = t.name,
        i = new WeakSet();
    function a(e, t) {
        var r,
            a,
            l = Gg(e)[Ff],
            u = new Bp(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Df,
                'ObservableObject.' + o.toString(),
                !1,
            );
        (l.values_.set(o, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || a(this, e.get.call(this)), this[Ff].getObservablePropValue_(o));
            },
            set: function (e) {
                return (i.has(this) || a(this, e), this[Ff].setObservablePropValue_(o, e));
            },
            init: function (e) {
                return (i.has(this) || a(this, e), e);
            },
        };
}
var lp = 'true',
    up = sp();
function sp(e) {
    return { annotationType_: lp, options_: e, make_: cp, extend_: dp, decorate_20223_: fp };
}
function cp(e, t, n, r) {
    var o, i, a, l;
    if (n.get) return Rp.make_(e, t, n, r);
    if (n.set) {
        var u = Fp(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !uh.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Zd(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ff(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Zh.bound : Zh).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Ih.bound : Ih).make_(e, t, n, r);
    var s,
        c = !1 === (null == (o = this.options_) ? void 0 : o.deep) ? xp.ref : xp;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function dp(e, t, n, r) {
    var o, i, a;
    if (n.get) return Rp.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !uh.safeDescriptors || e.isPlainObject_, set: Fp(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? xp.ref : xp).extend_(e, t, n, r);
}
function fp(e, t) {
    Wd("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var pp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function hp(e) {
    return e || pp;
}
Object.freeze(pp);
var gp = rp('observable'),
    vp = rp('observable.ref', { enhancer: Bf }),
    mp = rp('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Wg(e) || Ag(e) || Ng(e) || Dg(e)
                ? e
                : Array.isArray(e)
                  ? xp.array(e, { name: n, deep: !1 })
                  : df(e)
                    ? xp.object(e, void 0, { name: n, deep: !1 })
                    : vf(e)
                      ? xp.map(e, { name: n, deep: !1 })
                      : mf(e)
                        ? xp.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    bp = rp('observable.struct', {
        enhancer: function (e, t) {
            return dv(e, t) ? t : e;
        },
    }),
    yp = Mf(gp);
function _p(e) {
    return !0 === e.deep
        ? Df
        : !1 === e.deep
          ? Bf
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Df;
    var t, n, r;
}
function wp(e, t, n) {
    return jf(t)
        ? gp.decorate_20223_(e, t)
        : sf(t)
          ? void Tf(e, t, gp)
          : rg(e)
            ? e
            : df(e)
              ? xp.object(e, t, n)
              : Array.isArray(e)
                ? xp.array(e, t)
                : vf(e)
                  ? xp.map(e, t)
                  : mf(e)
                    ? xp.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : xp.box(e, t);
}
Xd(wp, yp);
var Sp,
    kp,
    Cp = {
        box: function (e, t) {
            var n = hp(t);
            return new Bp(e, _p(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = hp(t);
            return (!1 === uh.useProxies || !1 === n.proxy ? iv : wg)(e, _p(n), n.name);
        },
        map: function (e, t) {
            var n = hp(t);
            return new Vg(e, _p(n), n.name);
        },
        set: function (e, t) {
            var n = hp(t);
            return new zg(e, _p(n), n.name);
        },
        object: function (e, t, n) {
            return sv(function () {
                return qh(
                    !1 === uh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Gg({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  of(),
                                  (e = Gg(e, t)),
                                  null != (r = (n = e[Ff]).proxy_) ? r : (n.proxy_ = new Proxy(e, sg))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Mf(vp),
        shallow: Mf(mp),
        deep: yp,
        struct: Mf(bp),
    },
    xp = Xd(wp, Cp),
    Op = 'computed',
    Pp = Jf(Op),
    Ep = Jf('computed.struct', { equals: zf.structural }),
    Rp = function (e, t) {
        if (jf(t)) return Pp.decorate_20223_(e, t);
        if (sf(t)) return Tf(e, t, Pp);
        if (df(e)) return Mf(Jf(Op, e));
        var n = df(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new qp(n));
    };
(Object.assign(Rp, Pp), (Rp.struct = Mf(Ep)));
var Ap,
    Ip = 0,
    Mp = 1,
    Tp = null != (Sp = null == (kp = Yd(function () {}, 'name')) ? void 0 : kp.configurable) && Sp,
    jp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Fp(e, t, n, r) {
    function o() {
        return Vp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (o.isMobxAction = !0),
        (o.toString = function () {
            return t.toString();
        }),
        Tp && ((jp.value = e), Zd(o, 'name', jp)),
        o
    );
}
function Vp(e, t, n, r, o) {
    var i = (function (e, t, n, r) {
        var o = !1,
            i = 0,
            a = uh.trackingDerivation,
            l = !t || !a;
        fh();
        var u = uh.allowStateChanges;
        l && (eh(), (u = Lp(!0)));
        var s = nh(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: s,
                notifySpy_: o,
                startTime_: i,
                actionId_: Mp++,
                parentActionId_: Ip,
            };
        return ((Ip = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, o);
    } catch (a) {
        throw ((i.error_ = a), a);
    } finally {
        !(function (e) {
            Ip !== e.actionId_ && Wd(30);
            ((Ip = e.parentActionId_), void 0 !== e.error_ && (uh.suppressReactionErrors = !0));
            (zp(e.prevAllowStateChanges_), rh(e.prevAllowStateReads_), ph(), e.runAsAction_ && th(e.prevDerivation_));
            uh.suppressReactionErrors = !1;
        })(i);
    }
}
function Np(e, t) {
    var n = Lp(e);
    try {
        return t();
    } finally {
        zp(n);
    }
}
function Lp(e) {
    var t = uh.allowStateChanges;
    return ((uh.allowStateChanges = e), t);
}
function zp(e) {
    uh.allowStateChanges = e;
}
Ap = Symbol.toPrimitive;
var Dp,
    Bp = (function (e) {
        function t(t, n, r, o, i) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = zf.default),
                ((a = e.call(this, r) || this).enhancer = void 0),
                (a.name_ = void 0),
                (a.equals = void 0),
                (a.hasUnreportedChange_ = !1),
                (a.interceptors_ = void 0),
                (a.changeListeners_ = void 0),
                (a.value_ = void 0),
                (a.dehancer = void 0),
                (a.enhancer = n),
                (a.name_ = r),
                (a.equals = i),
                (a.value_ = n(t, void 0, r)),
                a
            );
        }
        Of(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== uh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (cg(this)) {
                    var t = fg(this, { object: this, type: bg, newValue: e });
                    if (!t) return uh.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? uh.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    pg(this) && gg(this, { type: bg, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return dg(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: bg,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    hg(this, e)
                );
            }),
            (n.raw = function () {
                return this.value_;
            }),
            (n.toJSON = function () {
                return this.get();
            }),
            (n.toString = function () {
                return this.name_ + '[' + this.value_ + ']';
            }),
            (n.valueOf = function () {
                return _f(this.get());
            }),
            (n[Ap] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Vf);
Dp = Symbol.toPrimitive;
var Up,
    Hp,
    Gp,
    $p,
    qp = (function () {
        function e(e) {
            ((this.dependenciesState_ = Up.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Up.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Kp(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Gp.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Wd(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Fp('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? zf.structural : zf.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Up.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Up.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Up.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Up.POSSIBLY_STALE_), e.onBecomeStale_());
                        }));
                })(this);
            }),
            (t.onBO = function () {
                this.onBOL &&
                    this.onBOL.forEach(function (e) {
                        return e();
                    });
            }),
            (t.onBUO = function () {
                this.onBUOL &&
                    this.onBUOL.forEach(function (e) {
                        return e();
                    });
            }),
            (t.get = function () {
                if (
                    (this.isComputing_ && Wd(32, this.name_, this.derivation),
                    0 !== uh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((hh(this), Xp(this))) {
                        var e = uh.trackingContext;
                        (this.keepAlive_ && !e && (uh.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Up.STALE_) return;
                                    ((e.lowestObserverState_ = Up.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Up.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Up.STALE_)
                                                : t.dependenciesState_ === Up.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Up.UP_TO_DATE_);
                                        }));
                                })(this),
                            (uh.trackingContext = e));
                    }
                } else Xp(this) && (this.warnAboutUntrackedRead_(), fh(), (this.value_ = this.computeValue_(!1)), ph());
                var t = this.value_;
                if (Qp(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Wd(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Wd(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Up.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Qp(e) || Qp(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Lp(!1);
                if (e) t = Yp(this, this.derivation, this.scope_);
                else if (!0 === uh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Kp(r);
                    }
                return (zp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Zp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    o = void 0;
                return jh(function () {
                    var i = n.get();
                    if (!r || t) {
                        var a = eh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: bg,
                            object: n,
                            newValue: i,
                            oldValue: o,
                        }),
                            th(a));
                    }
                    ((r = !1), (o = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return _f(this.get());
            }),
            (t[Dp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Wp = gf('ComputedValue', qp);
(((Hp = Up || (Up = {}))[(Hp.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Hp[(Hp.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Hp[(Hp.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Hp[(Hp.STALE_ = 2)] = 'STALE_'),
    (($p = Gp || (Gp = {}))[($p.NONE = 0)] = 'NONE'),
    ($p[($p.LOG = 1)] = 'LOG'),
    ($p[($p.BREAK = 2)] = 'BREAK'));
var Kp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Qp(e) {
    return e instanceof Kp;
}
function Xp(e) {
    switch (e.dependenciesState_) {
        case Up.UP_TO_DATE_:
            return !1;
        case Up.NOT_TRACKING_:
        case Up.STALE_:
            return !0;
        case Up.POSSIBLY_STALE_:
            for (var t = nh(!0), n = eh(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
                var a = r[i];
                if (Wp(a)) {
                    if (uh.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (l) {
                            return (th(n), rh(t), !0);
                        }
                    if (e.dependenciesState_ === Up.STALE_) return (th(n), rh(t), !0);
                }
            }
            return (oh(e), th(n), rh(t), !1);
    }
}
function Yp(e, t, n) {
    var r = nh(!0);
    (oh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++uh.runId));
    var o,
        i = uh.trackingDerivation;
    if (((uh.trackingDerivation = e), uh.inBatch++, !0 === uh.disableErrorBoundaries)) o = t.call(n);
    else
        try {
            o = t.call(n);
        } catch (a) {
            o = new Kp(a);
        }
    return (
        uh.inBatch--,
        (uh.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Up.UP_TO_DATE_,
                    o = 0,
                    i = e.unboundDepsCount_,
                    a = 0;
                a < i;
                a++
            ) {
                var l = n[a];
                (0 === l.diffValue_ && ((l.diffValue_ = 1), o !== a && (n[o] = l), o++),
                    l.dependenciesState_ > r && (r = l.dependenciesState_));
            }
            ((n.length = o), (e.newObserving_ = null), (i = t.length));
            for (; i--; ) {
                var u = t[i];
                (0 === u.diffValue_ && ch(u, e), (u.diffValue_ = 0));
            }
            for (; o--; ) {
                var s = n[o];
                1 === s.diffValue_ && ((s.diffValue_ = 0), sh(s, e));
            }
            r !== Up.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        rh(r),
        o
    );
}
function Zp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ch(t[n], e);
    e.dependenciesState_ = Up.NOT_TRACKING_;
}
function Jp(e) {
    var t = eh();
    try {
        return e();
    } finally {
        th(t);
    }
}
function eh() {
    var e = uh.trackingDerivation;
    return ((uh.trackingDerivation = null), e);
}
function th(e) {
    uh.trackingDerivation = e;
}
function nh(e) {
    var t = uh.allowStateReads;
    return ((uh.allowStateReads = e), t);
}
function rh(e) {
    uh.allowStateReads = e;
}
function oh(e) {
    if (e.dependenciesState_ !== Up.UP_TO_DATE_) {
        e.dependenciesState_ = Up.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Up.UP_TO_DATE_;
    }
}
var ih = function () {
        ((this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0));
    },
    ah = !0,
    lh = !1,
    uh = (function () {
        var e = Qd();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ah = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new ih().version && (ah = !1),
            ah
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ih()))
                : (setTimeout(function () {
                      lh || Wd(35);
                  }, 1),
                  new ih())
        );
    })();
function sh(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function ch(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && dh(e));
}
function dh(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), uh.pendingUnobservations.push(e));
}
function fh() {
    uh.inBatch++;
}
function ph() {
    if (0 == --uh.inBatch) {
        yh();
        for (var e = uh.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof qp && n.suspend_()));
        }
        uh.pendingUnobservations = [];
    }
}
function hh(e) {
    var t = uh.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && uh.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && uh.inBatch > 0 && dh(e), !1);
}
function gh(e) {
    e.lowestObserverState_ !== Up.STALE_ &&
        ((e.lowestObserverState_ = Up.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Up.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Up.STALE_));
        }));
}
var vh = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Up.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Gp.NONE),
                (this.name_ = e),
                (this.onInvalidate_ = t),
                (this.errorHandler_ = n),
                (this.requiresObservable_ = r));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                this.schedule_();
            }),
            (t.schedule_ = function () {
                this.isScheduled_ || ((this.isScheduled_ = !0), uh.pendingReactions.push(this), yh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (fh(), (this.isScheduled_ = !1));
                    var e = uh.trackingContext;
                    if (((uh.trackingContext = this), Xp(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((uh.trackingContext = e), ph());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (fh(), (this.isRunning_ = !0));
                    var t = uh.trackingContext;
                    uh.trackingContext = this;
                    var n = Yp(this, e, void 0);
                    ((uh.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Zp(this),
                        Qp(n) && this.reportExceptionInDerivation_(n.cause),
                        ph());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (uh.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (uh.suppressReactionErrors || console.error(n, e),
                        uh.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (fh(), Zp(this), ph()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Ff] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    mh = 100,
    bh = function (e) {
        return e();
    };
function yh() {
    uh.inBatch > 0 || uh.isRunningReactions || bh(_h);
}
function _h() {
    uh.isRunningReactions = !0;
    for (var e = uh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === mh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction_();
    }
    uh.isRunningReactions = !1;
}
var wh = gf('Reaction', vh);
var Sh = 'action',
    kh = 'autoAction',
    Ch = '<unnamed action>',
    xh = Hf(Sh),
    Oh = Hf('action.bound', { bound: !0 }),
    Ph = Hf(kh, { autoAction: !0 }),
    Eh = Hf('autoAction.bound', { autoAction: !0, bound: !0 });
function Rh(e) {
    return function (t, n) {
        return uf(t)
            ? Fp(t.name || Ch, t, e)
            : uf(n)
              ? Fp(t, n, e)
              : jf(n)
                ? (e ? Ph : xh).decorate_20223_(t, n)
                : sf(n)
                  ? Tf(t, n, e ? Ph : xh)
                  : sf(t)
                    ? Mf(Hf(e ? kh : Sh, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ah = Rh(!1);
Object.assign(Ah, xh);
var Ih = Rh(!0);
function Mh(e) {
    return Vp(e.name, !1, e, this, void 0);
}
function Th(e) {
    return uf(e) && !0 === e.isMobxAction;
}
function jh(e, t) {
    var n, r, o, i, a;
    void 0 === t && (t = tf);
    var l,
        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        l = new vh(
            u,
            function () {
                this.track(d);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var s = Vh(t),
            c = !1;
        l = new vh(
            u,
            function () {
                c ||
                    ((c = !0),
                    s(function () {
                        ((c = !1), l.isDisposed_ || l.track(d));
                    }));
            },
            t.onError,
            t.requiresObservable,
        );
    }
    function d() {
        e(l);
    }
    return (
        (null != (o = t) && null != (i = o.signal) && i.aborted) || l.schedule_(),
        l.getDisposer_(null == (a = t) ? void 0 : a.signal)
    );
}
(Object.assign(Ih, Ph), (Ah.bound = Mf(Oh)), (Ih.bound = Mf(Eh)));
var Fh = function (e) {
    return e();
};
function Vh(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Fh;
}
function Nh(e, t, n) {
    var r, o, i, a;
    void 0 === n && (n = tf);
    var l,
        u,
        s,
        c,
        d = null != (r = n.name) ? r : 'Reaction',
        f = Ah(
            d,
            n.onError
                ? ((l = n.onError),
                  (u = t),
                  function () {
                      try {
                          return u.apply(this, arguments);
                      } catch (e) {
                          l.call(this, e);
                      }
                  })
                : t,
        ),
        p = !n.scheduler && !n.delay,
        h = Vh(n),
        g = !0,
        v = !1,
        m = n.compareStructural ? zf.structural : n.equals || zf.default,
        b = new vh(
            d,
            function () {
                g || p ? y() : v || ((v = !0), h(y));
            },
            n.onError,
            n.requiresObservable,
        );
    function y() {
        if (((v = !1), !b.isDisposed_)) {
            var t = !1;
            (b.track(function () {
                var n = Np(!1, function () {
                    return e(b);
                });
                ((t = g || !m(s, n)), (c = s), (s = n));
            }),
                ((g && n.fireImmediately) || (!g && t)) && f(s, c, b),
                (g = !1));
        }
    }
    return (
        (null != (o = n) && null != (i = o.signal) && i.aborted) || b.schedule_(),
        b.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var Lh = 'onBO',
    zh = 'onBUO';
function Dh(e, t, n) {
    return Bh(zh, e, t, n);
}
function Bh(e, t, n, r) {
    var o = av(t),
        i = uf(r) ? r : n,
        a = e + 'L';
    return (
        o[a] ? o[a].add(i) : (o[a] = new Set([i])),
        function () {
            var e = o[a];
            e && (e.delete(i), 0 === e.size && delete o[a]);
        }
    );
}
var Uh = 'never',
    Hh = 'always',
    Gh = 'observed';
function $h(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((uh.pendingReactions.length || uh.inBatch || uh.isRunningReactions) && Wd(36), (lh = !0), ah)) {
                var e = Qd();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (uh = new ih()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        o = e.enforceActions;
    if (
        (void 0 !== r && (uh.useProxies = r === Hh || (r !== Uh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (uh.verifyProxies = !0),
        void 0 !== o)
    ) {
        var i = o === Hh ? Hh : o === Gh;
        ((uh.enforceActions = i), (uh.allowStateChanges = !0 !== i && i !== Hh));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (uh[t] = !!e[t]);
    }),
        (uh.allowStateReads = !uh.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = bh),
            (bh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function qh(e, t, n, r) {
    var o = Sf(t);
    return (
        sv(function () {
            var t = Gg(e, r)[Ff];
            yf(o).forEach(function (e) {
                t.extend_(e, o[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Wh(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Wh)),
        n
    );
}
var Kh = 0;
function Qh() {
    this.message = 'FLOW_CANCELLED';
}
Qh.prototype = Object.create(Error.prototype);
var Xh = Kf('flow'),
    Yh = Kf('flow.bound', { bound: !0 }),
    Zh = Object.assign(function (e, t) {
        if (jf(t)) return Xh.decorate_20223_(e, t);
        if (sf(t)) return Tf(e, t, Xh);
        var n = e,
            r = n.name || '<unnamed flow>',
            o = function () {
                var e,
                    t = arguments,
                    o = ++Kh,
                    i = Ah(r + ' - runid: ' + o + ' - init', n).apply(this, t),
                    a = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ah(r + ' - runid: ' + o + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ah(r + ' - runid: ' + o + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!uf(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = Ah(r + ' - runid: ' + o + ' - cancel', function () {
                        try {
                            a && Jh(a);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(lf, lf), Jh(n), e(new Qh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((o.isMobXFlow = !0), o);
    }, Xh);
function Jh(e) {
    uf(e.cancel) && e.cancel();
}
function eg(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function tg(e, t) {
    if (void 0 === t) return Wp(e);
    if (!1 === Wg(e)) return !1;
    if (!e[Ff].values_.has(t)) return !1;
    var n = av(e, t);
    return Wp(n);
}
function ng(e, t) {
    return tg(e, t);
}
function rg(e) {
    return (function (e, t) {
        return !!e && (Wg(e) || !!e[Ff] || Nf(e) || wh(e) || Wp(e));
    })(e);
}
function og(e, t, n, r) {
    return uf(n)
        ? (function (e, t, n, r) {
              return lv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return lv(e).observe_(t, n);
          })(e, t, n);
}
function ig(e, t) {
    (void 0 === t && (t = void 0), fh());
    try {
        return e.apply(t);
    } finally {
        ph();
    }
}
function ag(e, t, n) {
    return 1 === arguments.length || (t && 'object' == typeof t)
        ? (function (e, t) {
              var n, r, o;
              if (null != t && null != (n = t.signal) && n.aborted)
                  return Object.assign(Promise.reject(new Error('WHEN_ABORTED')), {
                      cancel: function () {
                          return null;
                      },
                  });
              var i = new Promise(function (n, i) {
                  var a,
                      l = lg(e, n, xf({}, t, { onError: i }));
                  ((r = function () {
                      (l(), i(new Error('WHEN_CANCELLED')));
                  }),
                      (o = function () {
                          (l(), i(new Error('WHEN_ABORTED')));
                      }),
                      null == t ||
                          null == (a = t.signal) ||
                          null == a.addEventListener ||
                          a.addEventListener('abort', o));
              }).finally(function () {
                  var e;
                  return null == t || null == (e = t.signal) || null == e.removeEventListener
                      ? void 0
                      : e.removeEventListener('abort', o);
              });
              return ((i.cancel = r), i);
          })(e, t)
        : lg(e, t, {});
}
function lg(e, t, n) {
    var r;
    if ('number' == typeof n.timeout) {
        var o = new Error('WHEN_TIMEOUT');
        r = setTimeout(function () {
            if (!a[Ff].isDisposed_) {
                if ((a(), !n.onError)) throw o;
                n.onError(o);
            }
        }, n.timeout);
    }
    n.name = 'When';
    var i = Fp('When-effect', t),
        a = jh(function (t) {
            Np(!1, e) && (t.dispose(), r && clearTimeout(r), i());
        }, n);
    return a;
}
function ug(e) {
    return e[Ff];
}
Zh.bound = Mf(Yh);
var sg = {
    has: function (e, t) {
        return ug(e).has_(t);
    },
    get: function (e, t) {
        return ug(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!sf(t) && (null == (r = ug(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!sf(t) && (null == (n = ug(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = ug(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return ug(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Wd(13);
    },
};
function cg(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function dg(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        af(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function fg(e, t) {
    var n = eh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), o = 0, i = r.length;
            o < i && ((t = r[o](t)) && !t.type && Wd(14), t);
            o++
        );
        return t;
    } finally {
        th(n);
    }
}
function pg(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function hg(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        af(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function gg(e, t) {
    var n = eh(),
        r = e.changeListeners_;
    if (r) {
        for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
        th(n);
    }
}
function vg(e, t, n) {
    return (
        sv(function () {
            var r = Gg(e, n)[Ff];
            (null != t ||
                (t = (function (e) {
                    return (wf(e, If) || pf(e, If, xf({}, e[If])), e[If]);
                })(e)),
                yf(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var mg = 'splice',
    bg = 'update',
    yg = {
        get: function (e, t) {
            var n = e[Ff];
            return t === Ff
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? wf(Sg, t)
                        ? Sg[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Ff];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Wd(15);
        },
    },
    _g = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'ObservableArray'),
                (this.owned_ = void 0),
                (this.legacyMode_ = void 0),
                (this.atom_ = void 0),
                (this.values_ = []),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.enhancer_ = void 0),
                (this.dehancer = void 0),
                (this.proxy_ = void 0),
                (this.lastKnownLength_ = 0),
                (this.owned_ = n),
                (this.legacyMode_ = r),
                (this.atom_ = new Vf(e)),
                (this.enhancer_ = function (e, n) {
                    return t(e, n, 'ObservableArray[..]');
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
                return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
            }),
            (t.intercept_ = function (e) {
                return dg(this, e);
            }),
            (t.observe_ = function (e, t) {
                return (
                    void 0 === t && (t = !1),
                    t &&
                        e({
                            observableKind: 'array',
                            object: this.proxy_,
                            debugObjectName: this.atom_.name_,
                            type: 'splice',
                            index: 0,
                            added: this.values_.slice(),
                            addedCount: this.values_.length,
                            removed: [],
                            removedCount: 0,
                        }),
                    hg(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Wd('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Wd(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && ov(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var o = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > o ? (e = o) : e < 0 && (e = Math.max(0, o + e)),
                    (t = 1 === arguments.length ? o - e : null == t ? 0 : Math.max(0, Math.min(t, o - e))),
                    void 0 === n && (n = ef),
                    cg(this))
                ) {
                    var i = fg(this, { object: this.proxy_, type: mg, index: e, removedCount: t, added: n });
                    if (!i) return ef;
                    ((t = i.removedCount), (n = i.added));
                }
                if (
                    ((n =
                        0 === n.length
                            ? n
                            : n.map(function (e) {
                                  return r.enhancer_(e, void 0);
                              })),
                    this.legacyMode_)
                ) {
                    var a = n.length - t;
                    this.updateArrayLength_(o, a);
                }
                var l = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, l), this.dehanceValues_(l));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var o = this.values_.slice(e, e + t),
                    i = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
                for (var l = 0; l < i.length; l++) this.values_[e + n.length + l] = i[l];
                return o;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    o = pg(this),
                    i =
                        o || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: bg,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), o && gg(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    o = pg(this),
                    i =
                        o || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: mg,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), o && gg(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Wd(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (cg(this)) {
                        var o = fg(this, { type: bg, object: this.proxy_, index: e, newValue: t });
                        if (!o) return;
                        t = o.newValue;
                    }
                    (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
                } else {
                    for (var i = new Array(e + 1 - n.length), a = 0; a < i.length - 1; a++) i[a] = void 0;
                    ((i[i.length - 1] = t), this.spliceWithArray_(n.length, 0, i));
                }
            }),
            e
        );
    })();
function wg(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        of(),
        sv(function () {
            var o = new _g(n, t, r, !1);
            hf(o.values_, Ff, o);
            var i = new Proxy(o.values_, yg);
            return ((o.proxy_ = i), e && e.length && o.spliceWithArray_(0, 0, e), i);
        })
    );
}
var Sg = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Ff];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        var i = this[Ff];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return i.spliceWithArray_(e);
            case 2:
                return i.spliceWithArray_(e, t);
        }
        return i.spliceWithArray_(e, t, r);
    },
    spliceWithArray: function (e, t, n) {
        return this[Ff].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Ff], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Ff].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Ff], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (uh.trackingDerivation && Wd(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        uh.trackingDerivation && Wd(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Ff],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function kg(e, t) {
    'function' == typeof Array.prototype[e] && (Sg[e] = t(e));
}
function Cg(e) {
    return function () {
        var t = this[Ff];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function xg(e) {
    return function (t, n) {
        var r = this,
            o = this[Ff];
        return (
            o.atom_.reportObserved(),
            o.dehanceValues_(o.values_)[e](function (e, o) {
                return t.call(n, e, o, r);
            })
        );
    };
}
function Og(e) {
    return function () {
        var t = this,
            n = this[Ff];
        n.atom_.reportObserved();
        var r = n.dehanceValues_(n.values_),
            o = arguments[0];
        return (
            (arguments[0] = function (e, n, r) {
                return o(e, n, r, t);
            }),
            r[e].apply(r, arguments)
        );
    };
}
(kg('at', Cg),
    kg('concat', Cg),
    kg('flat', Cg),
    kg('includes', Cg),
    kg('indexOf', Cg),
    kg('join', Cg),
    kg('lastIndexOf', Cg),
    kg('slice', Cg),
    kg('toString', Cg),
    kg('toLocaleString', Cg),
    kg('toSorted', Cg),
    kg('toSpliced', Cg),
    kg('with', Cg),
    kg('every', xg),
    kg('filter', xg),
    kg('find', xg),
    kg('findIndex', xg),
    kg('findLast', xg),
    kg('findLastIndex', xg),
    kg('flatMap', xg),
    kg('forEach', xg),
    kg('map', xg),
    kg('some', xg),
    kg('toReversed', xg),
    kg('reduce', Og),
    kg('reduceRight', Og));
var Pg,
    Eg,
    Rg = gf('ObservableArrayAdministration', _g);
function Ag(e) {
    return cf(e) && Rg(e[Ff]);
}
var Ig = {},
    Mg = 'add',
    Tg = 'delete';
((Pg = Symbol.iterator), (Eg = Symbol.toStringTag));
var jg,
    Fg,
    Vg = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Df),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Ff] = Ig),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                uf(Map) || Wd(18),
                sv(function () {
                    ((r.keysAtom_ = Lf('ObservableMap.keys()')),
                        (r.data_ = new Map()),
                        (r.hasMap_ = new Map()),
                        e && r.merge(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.has_ = function (e) {
                return this.data_.has(e);
            }),
            (t.has = function (e) {
                var t = this;
                if (!uh.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Bp(this.has_(e), Bf, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Dh(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (cg(this)) {
                    var r = fg(this, { type: n ? bg : Mg, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, cg(this)) && !fg(this, { type: Tg, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = pg(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Tg,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        ig(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && gg(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== uh.UNCHANGED) {
                    var r = pg(this),
                        o = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: bg,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && gg(this, o));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    ig(function () {
                        var r,
                            o = new Bp(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, o),
                            (t = o.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = pg(this),
                    o = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Mg,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && gg(this, o);
            }),
            (t.get = function (e) {
                return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
                return (this.keysAtom_.reportObserved(), this.data_.keys());
            }),
            (t.values = function () {
                var e = this,
                    t = this.keys();
                return hv({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            o = n.value;
                        return { done: r, value: r ? void 0 : e.get(o) };
                    },
                });
            }),
            (t.entries = function () {
                var e = this,
                    t = this.keys();
                return hv({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            o = n.value;
                        return { done: r, value: r ? void 0 : [o, e.get(o)] };
                    },
                });
            }),
            (t[Pg] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Af(this); !(n = r()).done; ) {
                    var o = n.value,
                        i = o[0],
                        a = o[1];
                    e.call(t, a, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Ng(e) && (e = new Map(e)),
                    ig(function () {
                        df(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!bf) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Jd.propertyIsEnumerable.call(e, t);
                                            }),
                                        )
                                      : t;
                              })(e).forEach(function (n) {
                                  return t.set(n, e[n]);
                              })
                            : Array.isArray(e)
                              ? e.forEach(function (e) {
                                    var n = e[0],
                                        r = e[1];
                                    return t.set(n, r);
                                })
                              : vf(e)
                                ? (e.constructor !== Map && Wd(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Wd(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                ig(function () {
                    Jp(function () {
                        for (var t, n = Af(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    ig(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (vf(e) || Ng(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (df(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Wd(21, e);
                                })(e),
                                o = new Map(),
                                i = !1,
                                a = Af(t.data_.keys());
                            !(n = a()).done;
                        ) {
                            var l = n.value;
                            if (!r.has(l))
                                if (t.delete(l)) i = !0;
                                else {
                                    var u = t.data_.get(l);
                                    o.set(l, u);
                                }
                        }
                        for (var s, c = Af(r.entries()); !(s = c()).done; ) {
                            var d = s.value,
                                f = d[0],
                                p = d[1],
                                h = t.data_.has(f);
                            if ((t.set(f, p), t.data_.has(f))) {
                                var g = t.data_.get(f);
                                (o.set(f, g), h || (i = !0));
                            }
                        }
                        if (!i)
                            if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                            else
                                for (var v = t.data_.keys(), m = o.keys(), b = v.next(), y = m.next(); !b.done; ) {
                                    if (b.value !== y.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((b = v.next()), (y = m.next()));
                                }
                        t.data_ = o;
                    }),
                    this
                );
            }),
            (t.toString = function () {
                return '[object ObservableMap]';
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
                return hg(this, e);
            }),
            (t.intercept_ = function (e) {
                return dg(this, e);
            }),
            Cf(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Eg,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Ng = gf('ObservableMap', Vg);
var Lg = {};
((jg = Symbol.iterator), (Fg = Symbol.toStringTag));
var zg = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Df),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Ff] = Lg),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                uf(Set) || Wd(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                sv(function () {
                    ((r.atom_ = Lf(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                ig(function () {
                    Jp(function () {
                        for (var t, n = Af(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Af(this); !(n = r()).done; ) {
                    var o = n.value;
                    e.call(t, o, o, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, cg(this)) && !fg(this, { type: Mg, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    ig(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = pg(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Mg,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && gg(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (cg(this) && !fg(this, { type: Tg, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = pg(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Tg,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        ig(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && gg(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.has = function (e) {
                return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e)));
            }),
            (t.entries = function () {
                var e = 0,
                    t = Array.from(this.keys()),
                    n = Array.from(this.values());
                return hv({
                    next: function () {
                        var r = e;
                        return ((e += 1), r < n.length ? { value: [t[r], n[r]], done: !1 } : { done: !0 });
                    },
                });
            }),
            (t.keys = function () {
                return this.values();
            }),
            (t.values = function () {
                this.atom_.reportObserved();
                var e = this,
                    t = 0,
                    n = Array.from(this.data_.values());
                return hv({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Dg(e) && (e = new Set(e)),
                    ig(function () {
                        Array.isArray(e) || mf(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Wd('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return hg(this, e);
            }),
            (t.intercept_ = function (e) {
                return dg(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[jg] = function () {
                return this.values();
            }),
            Cf(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Fg,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Dg = gf('ObservableSet', zg),
    Bg = Object.create(null),
    Ug = 'remove',
    Hg = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = up),
                (this.target_ = void 0),
                (this.values_ = void 0),
                (this.name_ = void 0),
                (this.defaultAnnotation_ = void 0),
                (this.keysAtom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.proxy_ = void 0),
                (this.isPlainObject_ = void 0),
                (this.appliedAnnotations_ = void 0),
                (this.pendingKeys_ = void 0),
                (this.target_ = e),
                (this.values_ = t),
                (this.name_ = n),
                (this.defaultAnnotation_ = r),
                (this.keysAtom_ = new Vf('ObservableObject.keys')),
                (this.isPlainObject_ = df(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof qp) return (n.set(t), !0);
                if (cg(this)) {
                    var r = fg(this, { type: bg, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== uh.UNCHANGED) {
                    var o = pg(this),
                        i = o
                            ? {
                                  type: bg,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), o && gg(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (uh.trackingDerivation && !wf(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    wf(this.target_, e)
                        ? this.values_.has(e)
                            ? this.setObservablePropValue_(e, t)
                            : n
                              ? Reflect.set(this.target_, e, t)
                              : ((this.target_[e] = t), !0)
                        : this.extend_(
                              e,
                              { value: t, enumerable: !0, writable: !0, configurable: !0 },
                              this.defaultAnnotation_,
                              n,
                          )
                );
            }),
            (t.has_ = function (e) {
                if (!uh.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Bp(e in this.target_, Bf, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[If]) && n[e]) return;
                        Wd(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Jd; ) {
                        var o = Yd(r, e);
                        if (o) {
                            var i = t.make_(this, e, o, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Kg(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var o = n.extend_(this, e, t, r);
                return (o && Kg(this, n, e), o);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (cg(this)) {
                        var o = fg(this, { object: this.proxy_ || this.target_, name: e, type: Mg, newValue: t.value });
                        if (!o) return null;
                        var i = o.newValue;
                        t.value !== i && (t = xf({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Zd(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    ph();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    fh();
                    var o = this.delete_(e);
                    if (!o) return o;
                    if (cg(this)) {
                        var i = fg(this, { object: this.proxy_ || this.target_, name: e, type: Mg, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var a = qg(e),
                        l = {
                            configurable: !uh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Zd(this.target_, e, l);
                    var u = new Bp(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    ph();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (cg(this))
                        if (!fg(this, { object: this.proxy_ || this.target_, name: e, type: Mg, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var o = qg(e),
                        i = {
                            configurable: !uh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: o.get,
                            set: o.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Zd(this.target_, e, i);
                    (this.values_.set(e, new qp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    ph();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !wf(this.target_, e))) return !0;
                if (cg(this) && !fg(this, { object: this.proxy_ || this.target_, name: e, type: Ug })) return null;
                try {
                    var n, r;
                    fh();
                    var o,
                        i = pg(this),
                        a = this.values_.get(e),
                        l = void 0;
                    if (!a && i) l = null == (o = Yd(this.target_, e)) ? void 0 : o.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Bp && (l = a.value_), gh(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: Ug,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && gg(this, u));
                    }
                } finally {
                    ph();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return hg(this, e);
            }),
            (t.intercept_ = function (e) {
                return dg(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    o = pg(this);
                if (o) {
                    var i = o
                        ? {
                              type: Mg,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    o && gg(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), yf(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Gg(e, t) {
    var n;
    if (wf(e, Ff)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        o = new Hg(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : sp(e)) : void 0;
            })(t),
        );
    return (pf(e, Ff, o), e);
}
var $g = gf('ObservableObjectAdministration', Hg);
function qg(e) {
    return (
        Bg[e] ||
        (Bg[e] = {
            get: function () {
                return this[Ff].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Ff].setObservablePropValue_(e, t);
            },
        })
    );
}
function Wg(e) {
    return !!cf(e) && $g(e[Ff]);
}
function Kg(e, t, n) {
    var r;
    null == (r = e.target_[If]) || delete r[n];
}
var Qg,
    Xg,
    Yg = nv(0),
    Zg = (function () {
        var e = !1,
            t = {};
        return (
            Object.defineProperty(t, '0', {
                set: function () {
                    e = !0;
                },
            }),
            (Object.create(t)[0] = 1),
            !1 === e
        );
    })(),
    Jg = 0,
    ev = function () {};
((Qg = ev),
    (Xg = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Qg.prototype, Xg)
        : void 0 !== Qg.prototype.__proto__
          ? (Qg.prototype.__proto__ = Xg)
          : (Qg.prototype = Xg));
var tv = (function (e, t, n) {
    function r(t, n, r, o) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === o && (o = !1),
            (i = e.call(this) || this),
            sv(function () {
                var e = new _g(r, n, o, !0);
                ((e.proxy_ = Ef(i)),
                    hf(Ef(i), Ff, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    Zg && Object.defineProperty(Ef(i), '0', Yg));
            }),
            i
        );
    }
    Of(r, e);
    var o = r.prototype;
    return (
        (o.concat = function () {
            this[Ff].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Ag(e) ? e.slice() : e;
                }),
            );
        }),
        (o[n] = function () {
            var e = this,
                t = 0;
            return hv({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        Cf(r, [
            {
                key: 'length',
                get: function () {
                    return this[Ff].getArrayLength_();
                },
                set: function (e) {
                    this[Ff].setArrayLength_(e);
                },
            },
            {
                key: t,
                get: function () {
                    return 'Array';
                },
            },
        ]),
        r
    );
})(ev, Symbol.toStringTag, Symbol.iterator);
function nv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Ff].get_(e);
        },
        set: function (t) {
            this[Ff].set_(e, t);
        },
    };
}
function rv(e) {
    Zd(tv.prototype, '' + e, nv(e));
}
function ov(e) {
    if (e > Jg) {
        for (var t = Jg; t < e + 100; t++) rv(t);
        Jg = e;
    }
}
function iv(e, t, n) {
    return new tv(e, t, n);
}
function av(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Ag(e)) return (void 0 !== t && Wd(23), e[Ff].atom_);
        if (Dg(e)) return e.atom_;
        if (Ng(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Wd(25, t, uv(e)), n);
        }
        if (Wg(e)) {
            if (!t) return Wd(26);
            var r = e[Ff].values_.get(t);
            return (r || Wd(27, t, uv(e)), r);
        }
        if (Nf(e) || Wp(e) || wh(e)) return e;
    } else if (uf(e) && wh(e[Ff])) return e[Ff];
    Wd(28);
}
function lv(e, t) {
    return (
        e || Wd(29),
        void 0 !== t ? lv(av(e, t)) : Nf(e) || Wp(e) || wh(e) || Ng(e) || Dg(e) ? e : e[Ff] ? e[Ff] : void Wd(24, e)
    );
}
function uv(e, t) {
    var n;
    if (void 0 !== t) n = av(e, t);
    else {
        if (Th(e)) return e.name;
        n = Wg(e) || Ng(e) || Dg(e) ? lv(e) : av(e);
    }
    return n.name_;
}
function sv(e) {
    var t = eh(),
        n = Lp(!0);
    fh();
    try {
        return e();
    } finally {
        (ph(), zp(n), th(t));
    }
}
(Object.entries(Sg).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && pf(tv.prototype, t, n);
}),
    ov(1e3));
var cv = Jd.toString;
function dv(e, t, n) {
    return (void 0 === n && (n = -1), fv(e, t, n));
}
function fv(e, t, n, r, o) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var a = cv.call(e);
    if (a !== cv.call(t)) return !1;
    switch (a) {
        case '[object RegExp]':
        case '[object String]':
            return '' + e == '' + t;
        case '[object Number]':
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case '[object Date]':
        case '[object Boolean]':
            return +e == +t;
        case '[object Symbol]':
            return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
        case '[object Map]':
        case '[object Set]':
            n >= 0 && n++;
    }
    ((e = pv(e)), (t = pv(t)));
    var l = '[object Array]' === a;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(uf(u) && u instanceof u && uf(s) && s instanceof s) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (o = o || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return o[c] === t;
    if ((r.push(e), o.push(t), l)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!fv(e[c], t[c], n - 1, r, o)) return !1;
    } else {
        var d,
            f = Object.keys(e);
        if (((c = f.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!wf(t, (d = f[c])) || !fv(e[d], t[d], n - 1, r, o)) return !1;
    }
    return (r.pop(), o.pop(), !0);
}
function pv(e) {
    return Ag(e) ? e.slice() : vf(e) || Ng(e) || mf(e) || Dg(e) ? Array.from(e.entries()) : e;
}
function hv(e) {
    return ((e[Symbol.iterator] = gv), e);
}
function gv() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Qd()[e] && Wd("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: uv },
            $mobx: Ff,
        }));
var vv = Mv(),
    mv = (e) => Ev(e, vv),
    bv = Mv();
mv.write = (e) => Ev(e, bv);
var yv = Mv();
mv.onStart = (e) => Ev(e, yv);
var _v = Mv();
mv.onFrame = (e) => Ev(e, _v);
var wv = Mv();
mv.onFinish = (e) => Ev(e, wv);
var Sv = [];
mv.setTimeout = (e, t) => {
    const n = mv.now() + t,
        r = () => {
            const e = Sv.findIndex((e) => e.cancel == r);
            (~e && Sv.splice(e, 1), (Ov -= ~e ? 1 : 0));
        },
        o = { time: n, handler: e, cancel: r };
    return (Sv.splice(kv(n), 0, o), (Ov += 1), Rv(), o);
};
var kv = (e) => ~(~Sv.findIndex((t) => t.time > e) || ~Sv.length);
((mv.cancel = (e) => {
    (yv.delete(e), _v.delete(e), wv.delete(e), vv.delete(e), bv.delete(e));
}),
    (mv.sync = (e) => {
        ((Pv = !0), mv.batchedUpdates(e), (Pv = !1));
    }),
    (mv.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), mv.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (yv.delete(n), (t = null));
            }),
            r
        );
    }));
var Cv = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((mv.use = (e) => (Cv = e)),
    (mv.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (mv.batchedUpdates = (e) => e()),
    (mv.catch = console.error),
    (mv.frameLoop = 'always'),
    (mv.advance = () => {
        'demand' !== mv.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Iv();
    }));
var xv = -1,
    Ov = 0,
    Pv = !1;
function Ev(e, t) {
    Pv ? (t.delete(e), e(0)) : (t.add(e), Rv());
}
function Rv() {
    xv < 0 && ((xv = 0), 'demand' !== mv.frameLoop && Cv(Av));
}
function Av() {
    ~xv && (Cv(Av), mv.batchedUpdates(Iv));
}
function Iv() {
    const e = xv;
    xv = mv.now();
    const t = kv(xv);
    (t && (Tv(Sv.splice(0, t), (e) => e.handler()), (Ov -= t)),
        Ov ? (yv.flush(), vv.flush(e ? Math.min(64, xv - e) : 16.667), _v.flush(), bv.flush(), wv.flush()) : (xv = -1));
}
function Mv() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Ov += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Ov -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Ov -= t.size), Tv(t, (t) => t(n) && e.add(t)), (Ov += e.size), (t = e));
        },
    };
}
function Tv(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            mv.catch(n);
        }
    });
}
var jv = Object.defineProperty,
    Fv = {};
function Vv() {}
((e, t) => {
    for (var n in t) jv(e, n, { get: t[n], enumerable: !0 });
})(Fv, {
    assign: () => Xv,
    colors: () => Wv,
    createStringInterpolator: () => Hv,
    skipAnimation: () => Kv,
    to: () => Gv,
    willAdvance: () => Qv,
});
var Nv = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Lv(e, t) {
    if (Nv.arr(e)) {
        if (!Nv.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var zv = (e, t) => e.forEach(t);
function Dv(e, t, n) {
    if (Nv.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Bv = (e) => (Nv.und(e) ? [] : Nv.arr(e) ? e : [e]);
function Uv(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), zv(n, t));
    }
}
var Hv,
    Gv,
    $v = (e, ...t) => Uv(e, (e) => e(...t)),
    qv = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Wv = null,
    Kv = !1,
    Qv = Vv,
    Xv = (e) => {
        (e.to && (Gv = e.to),
            e.now && (mv.now = e.now),
            void 0 !== e.colors && (Wv = e.colors),
            null != e.skipAnimation && (Kv = e.skipAnimation),
            e.createStringInterpolator && (Hv = e.createStringInterpolator),
            e.requestAnimationFrame && mv.use(e.requestAnimationFrame),
            e.batchedUpdates && (mv.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Qv = e.willAdvance),
            e.frameLoop && (mv.frameLoop = e.frameLoop));
    },
    Yv = new Set(),
    Zv = [],
    Jv = [],
    em = 0,
    tm = {
        get idle() {
            return !Yv.size && !Zv.length;
        },
        start(e) {
            em > e.priority ? (Yv.add(e), mv.onStart(nm)) : (rm(e), mv(im));
        },
        advance: im,
        sort(e) {
            if (em) mv.onFrame(() => tm.sort(e));
            else {
                const t = Zv.indexOf(e);
                ~t && (Zv.splice(t, 1), om(e));
            }
        },
        clear() {
            ((Zv = []), Yv.clear());
        },
    };
function nm() {
    (Yv.forEach(rm), Yv.clear(), mv(im));
}
function rm(e) {
    Zv.includes(e) || om(e);
}
function om(e) {
    Zv.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Zv, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function im(e) {
    const t = Jv;
    for (let n = 0; n < Zv.length; n++) {
        const r = Zv[n];
        ((em = r.priority), r.idle || (Qv(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((em = 0), ((Jv = Zv).length = 0), (Zv = t).length > 0);
}
var am = '[-+]?\\d*\\.?\\d+',
    lm = am + '%';
function um(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var sm = new RegExp('rgb' + um(am, am, am)),
    cm = new RegExp('rgba' + um(am, am, am, am)),
    dm = new RegExp('hsl' + um(am, lm, lm)),
    fm = new RegExp('hsla' + um(am, lm, lm, am)),
    pm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    gm = /^#([0-9a-fA-F]{6})$/,
    vm = /^#([0-9a-fA-F]{8})$/;
function mm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function bm(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r,
        i = mm(o, r, e + 1 / 3),
        a = mm(o, r, e),
        l = mm(o, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * l) << 8);
}
function ym(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function _m(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function wm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Sm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function km(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = gm.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Wv && void 0 !== Wv[e]
                ? Wv[e]
                : (t = sm.exec(e))
                  ? ((ym(t[1]) << 24) | (ym(t[2]) << 16) | (ym(t[3]) << 8) | 255) >>> 0
                  : (t = cm.exec(e))
                    ? ((ym(t[1]) << 24) | (ym(t[2]) << 16) | (ym(t[3]) << 8) | wm(t[4])) >>> 0
                    : (t = pm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = vm.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = hm.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = dm.exec(e))
                            ? (255 | bm(_m(t[1]), Sm(t[2]), Sm(t[3]))) >>> 0
                            : (t = fm.exec(e))
                              ? (bm(_m(t[1]), Sm(t[2]), Sm(t[3])) | wm(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Cm = (e, t, n) => {
    if (Nv.fun(e)) return e;
    if (Nv.arr(e)) return Cm({ range: e, output: t, extrapolate: n });
    if (Nv.str(e.output[0])) return Hv(e);
    const r = e,
        o = r.output,
        i = r.range || [0, 1],
        a = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, i);
        return (function (e, t, n, r, o, i, a, l, u) {
            let s = u ? u(e) : e;
            if (s < t) {
                if ('identity' === a) return s;
                'clamp' === a && (s = t);
            }
            if (s > n) {
                if ('identity' === l) return s;
                'clamp' === l && (s = n);
            }
            if (r === o) return r;
            if (t === n) return e <= t ? r : o;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            ((s = i(s)), r === -1 / 0 ? (s = -s) : o === 1 / 0 ? (s += r) : (s = s * (o - r) + r));
            return s;
        })(e, i[t], i[t + 1], o[t], o[t + 1], u, a, l, r.map);
    };
};
var xm = Symbol.for('FluidValue.get'),
    Om = Symbol.for('FluidValue.observers'),
    Pm = (e) => Boolean(e && e[xm]),
    Em = (e) => (e && e[xm] ? e[xm]() : e),
    Rm = (e) => e[Om] || null;
function Am(e, t) {
    const n = e[Om];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Im = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Mm(this, e);
        }
    },
    Mm = (e, t) => Vm(e, xm, t);
function Tm(e, t) {
    if (e[xm]) {
        let n = e[Om];
        (n || Vm(e, Om, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function jm(e, t) {
    const n = e[Om];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Om] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Fm,
    Vm = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Nm = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Lm = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    zm = new RegExp(`(${Nm.source})(%|[a-z]+)`, 'i'),
    Dm = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Bm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Um = (e) => {
        const [t, n] = Hm(e);
        if (!t || qv()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Bm.test(n) ? Um(n) : n || e;
    },
    Hm = (e) => {
        const t = Bm.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Gm = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
    $m = (e) => {
        Fm || (Fm = Wv ? new RegExp(`(${Object.keys(Wv).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Em(e).replace(Bm, Um).replace(Lm, km).replace(Fm, km)),
            n = t.map((e) => e.match(Nm).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Cm({ ...e, output: t }));
        return (e) => {
            var n;
            const o = !zm.test(t[0]) && (null == (n = t.find((e) => zm.test(e))) ? void 0 : n.replace(Nm, ''));
            let i = 0;
            return t[0].replace(Nm, () => `${r[i++](e)}${o || ''}`).replace(Dm, Gm);
        };
    },
    qm = 'react-spring: ',
    Wm = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${qm}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Km = Wm(console.warn);
var Qm = Wm(console.warn);
function Xm(e) {
    return Nv.str(e) && ('#' == e[0] || /\d/.test(e) || (!qv() && Bm.test(e)) || e in (Wv || {}));
}
var Ym = qv() ? U.useEffect : U.useLayoutEffect,
    Zm = () => {
        const e = U.useRef(!1);
        return (
            Ym(
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
    };
function Jm() {
    const e = U.useState()[1],
        t = Zm();
    return () => {
        t.current && e(Math.random());
    };
}
var eb = (e) => U.useEffect(e, tb),
    tb = [];
function nb(e) {
    const t = U.useRef();
    return (
        U.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var rb = Symbol.for('Animated:node'),
    ob = (e) => e && e[rb],
    ib = (e, t) => {
        return ((n = e), (r = rb), (o = t), Object.defineProperty(n, r, { value: o, writable: !0, configurable: !0 }));
        var n, r, o;
    },
    ab = (e) => e && e[rb] && e[rb].getPayload(),
    lb = class {
        constructor() {
            ib(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    ub = class extends lb {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Nv.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new ub(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Nv.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Nv.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    sb = class extends ub {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = Cm({ output: [e, e] })));
        }
        static create(e) {
            return new sb(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Nv.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = Cm({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    cb = { dependencies: null },
    db = class extends lb {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Dv(this.source, (n, r) => {
                    var o;
                    (o = n) && o[rb] === o ? (t[r] = n.getValue(e)) : Pm(n) ? (t[r] = Em(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && zv(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Dv(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            cb.dependencies && Pm(e) && cb.dependencies.add(e);
            const t = ab(e);
            t && zv(t, (e) => this.add(e));
        }
    },
    fb = class extends db {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new fb(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(pb)), !0);
        }
    };
function pb(e) {
    return (Xm(e) ? sb : ub).create(e);
}
function hb(e) {
    const t = ob(e);
    return t ? t.constructor : Nv.arr(e) ? fb : Xm(e) ? sb : ub;
}
var gb = (e, t) => {
        const n = !Nv.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return U.forwardRef((r, o) => {
            const i = U.useRef(null),
                a =
                    n &&
                    U.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (Nv.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(o, e);
                        },
                        [o],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((cb.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new db(e)), (cb.dependencies = null), [e, n]);
                })(r, t),
                s = Jm(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                d = new vb(c, u),
                f = U.useRef();
            (Ym(
                () => (
                    (f.current = d),
                    zv(u, (e) => Tm(e, d)),
                    () => {
                        f.current && (zv(f.current.deps, (e) => jm(e, f.current)), mv.cancel(f.current.update));
                    }
                ),
            ),
                U.useEffect(c, []),
                eb(() => () => {
                    const e = f.current;
                    zv(e.deps, (t) => jm(t, e));
                }));
            const p = t.getComponentProps(l.getValue());
            return U.createElement(e, { ...p, ref: a });
        });
    },
    vb = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && mv.write(this.update);
        }
    };
var mb = Symbol.for('AnimatedComponent'),
    bb = (e) => (Nv.str(e) ? e : e && Nv.str(e.displayName) ? e.displayName : (Nv.fun(e) && e.name) || null);
function yb(e, ...t) {
    return Nv.fun(e) ? e(...t) : e;
}
var _b = (e, t) => !0 === e || !!(t && e && (Nv.fun(e) ? e(t) : Bv(e).includes(t))),
    wb = (e, t) => (Nv.obj(e) ? t && e[t] : e),
    Sb = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    kb = (e) => e,
    Cb = (e, t = kb) => {
        let n = xb;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const o of n) {
            const n = t(e[o], o);
            Nv.und(n) || (r[o] = n);
        }
        return r;
    },
    xb = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Ob = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1,
    };
function Pb(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Dv(e, (e, r) => {
                Ob[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Dv(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Eb(e) {
    return (
        (e = Em(e)),
        Nv.arr(e) ? e.map(Eb) : Xm(e) ? Fv.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Rb(e) {
    for (const t in e) return !0;
    return !1;
}
function Ab(e) {
    return Nv.fun(e) || (Nv.arr(e) && Nv.obj(e[0]));
}
function Ib(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function Mb(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var Tb = { default: { tension: 170, friction: 26 }, molasses: { tension: 280, friction: 120 } },
    jb = { ...Tb.default, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function Fb(e, t) {
    if (Nv.und(t.decay)) {
        const n = !Nv.und(t.tension) || !Nv.und(t.friction);
        ((!n && Nv.und(t.frequency) && Nv.und(t.damping) && Nv.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Vb = [];
function Nb(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
    return new Promise((a, l) => {
        let u,
            s,
            c = _b(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) p();
        else {
            Nv.und(n.pause) || (o.paused = _b(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = o.paused || _b(e, t)),
                (u = yb(n.delay || 0, t)),
                e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f()));
        }
        function d() {
            (o.resumeQueue.add(f), o.timeouts.delete(s), s.cancel(), (u = s.time - mv.now()));
        }
        function f() {
            u > 0 && !Fv.skipAnimation
                ? ((o.delayed = !0), (s = mv.setTimeout(p, u)), o.pauseQueue.add(d), o.timeouts.add(s))
                : p();
        }
        function p() {
            (o.delayed && (o.delayed = !1),
                o.pauseQueue.delete(d),
                o.timeouts.delete(s),
                e <= (o.cancelId || 0) && (c = !0));
            try {
                i.start({ ...n, callId: e, cancel: c }, a);
            } catch (t) {
                l(t);
            }
        }
    });
}
var Lb = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Bb(e.get())
              : t.every((e) => e.noop)
                ? zb(e.get())
                : Db(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    zb = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Db = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Bb = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Ub(e, t, n, r) {
    const { callId: o, parentId: i, onRest: a } = t,
        { asyncTo: l, promise: u } = n;
    return i || e !== l || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = o), (n.asyncTo = e));
              const s = Cb(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, d;
              const f = new Promise((e, t) => ((c = e), (d = t))),
                  p = (e) => {
                      const t = (o <= (n.cancelId || 0) && Bb(r)) || (o !== n.asyncId && Db(r, !1));
                      if (t) throw ((e.result = t), d(e), e);
                  },
                  h = (e, t) => {
                      const i = new Gb(),
                          a = new $b();
                      return (async () => {
                          if (Fv.skipAnimation) throw (Hb(n), (a.result = Db(r, !1)), d(a), a);
                          p(i);
                          const l = Nv.obj(e) ? { ...e } : { ...t, to: e };
                          ((l.parentId = o),
                              Dv(s, (e, t) => {
                                  Nv.und(l[t]) && (l[t] = e);
                              }));
                          const u = await r.start(l);
                          return (
                              p(i),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              u
                          );
                      })();
                  };
              let g;
              if (Fv.skipAnimation) return (Hb(n), Db(r, !1));
              try {
                  let t;
                  ((t = Nv.arr(e)
                      ? (async (e) => {
                            for (const t of e) await h(t);
                        })(e)
                      : Promise.resolve(e(h, r.stop.bind(r)))),
                      await Promise.all([t.then(c), f]),
                      (g = Db(r.get(), !0, !1)));
              } catch (v) {
                  if (v instanceof Gb) g = v.result;
                  else {
                      if (!(v instanceof $b)) throw v;
                      g = v.result;
                  }
              } finally {
                  o == n.asyncId && ((n.asyncId = i), (n.asyncTo = i ? l : void 0), (n.promise = i ? u : void 0));
              }
              return (
                  Nv.fun(a) &&
                      mv.batchedUpdates(() => {
                          a(g, r, r.item);
                      }),
                  g
              );
          })())
        : u;
}
function Hb(e, t) {
    (Uv(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Gb = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    $b = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    qb = (e) => e instanceof Kb,
    Wb = 1,
    Kb = class extends Im {
        constructor() {
            (super(...arguments), (this.id = Wb++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = ob(this);
            return e && e.getValue();
        }
        to(...e) {
            return Fv.to(this, e);
        }
        interpolate(...e) {
            return (Km(`${qm}The "interpolate" function is deprecated in v9 (use "to" instead)`), Fv.to(this, e));
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
            Am(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || tm.sort(this), Am(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Qb = Symbol.for('SpringPhase'),
    Xb = (e) => (1 & e[Qb]) > 0,
    Yb = (e) => (2 & e[Qb]) > 0,
    Zb = (e) => (4 & e[Qb]) > 0,
    Jb = (e, t) => (t ? (e[Qb] |= 3) : (e[Qb] &= -3)),
    ey = (e, t) => (t ? (e[Qb] |= 4) : (e[Qb] &= -5)),
    ty = class extends Kb {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Vb),
                            (this.toValues = null),
                            (this.fromValues = Vb),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, jb));
                                }
                            })()),
                            (this.immediate = !1));
                    }
                })()),
                (this.defaultProps = {}),
                (this._state = {
                    paused: !1,
                    delayed: !1,
                    pauseQueue: new Set(),
                    resumeQueue: new Set(),
                    timeouts: new Set(),
                }),
                (this._pendingCalls = new Set()),
                (this._lastCallId = 0),
                (this._lastToId = 0),
                (this._memoizedDuration = 0),
                !Nv.und(e) || !Nv.und(t))
            ) {
                const n = Nv.obj(e) ? { ...e } : { ...t, from: e };
                (Nv.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(Yb(this) || this._state.asyncTo) || Zb(this);
        }
        get goal() {
            return Em(this.animation.to);
        }
        get velocity() {
            const e = ob(this);
            return e instanceof ub ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return Xb(this);
        }
        get isAnimating() {
            return Yb(this);
        }
        get isPaused() {
            return Zb(this);
        }
        get isDelayed() {
            return this._state.delayed;
        }
        advance(e) {
            let t = !0,
                n = !1;
            const r = this.animation;
            let { toValues: o } = r;
            const { config: i } = r,
                a = ab(r.to);
            (!a && Pm(r.to) && (o = Bv(Em(r.to))),
                r.values.forEach((l, u) => {
                    if (l.done) return;
                    const s = l.constructor == sb ? 1 : a ? a[u].lastPosition : o[u];
                    let c = r.immediate,
                        d = s;
                    if (!c) {
                        if (((d = l.lastPosition), i.tension <= 0)) return void (l.done = !0);
                        let t = (l.elapsedTime += e);
                        const n = r.fromValues[u],
                            o = null != l.v0 ? l.v0 : (l.v0 = Nv.arr(i.velocity) ? i.velocity[u] : i.velocity);
                        let a;
                        const f = i.precision || (n == s ? 0.005 : Math.min(1, 0.001 * Math.abs(s - n)));
                        if (Nv.und(i.duration))
                            if (i.decay) {
                                const e = !0 === i.decay ? 0.998 : i.decay,
                                    r = Math.exp(-(1 - e) * t);
                                ((d = n + (o / (1 - e)) * (1 - r)),
                                    (c = Math.abs(l.lastPosition - d) <= f),
                                    (a = o * r));
                            } else {
                                a = null == l.lastVelocity ? o : l.lastVelocity;
                                const t = i.restVelocity || f / 10,
                                    r = i.clamp ? 0 : i.bounce,
                                    u = !Nv.und(r),
                                    p = n == s ? l.v0 > 0 : n < s;
                                let h,
                                    g = !1;
                                const v = 1,
                                    m = Math.ceil(e / v);
                                for (
                                    let e = 0;
                                    e < m && ((h = Math.abs(a) > t), h || ((c = Math.abs(s - d) <= f), !c));
                                    ++e
                                ) {
                                    u && ((g = d == s || d > s == p), g && ((a = -a * r), (d = s)));
                                    ((a += ((1e-6 * -i.tension * (d - s) + 0.001 * -i.friction * a) / i.mass) * v),
                                        (d += a * v));
                                }
                            }
                        else {
                            let r = 1;
                            (i.duration > 0 &&
                                (this._memoizedDuration !== i.duration &&
                                    ((this._memoizedDuration = i.duration),
                                    l.durationProgress > 0 &&
                                        ((l.elapsedTime = i.duration * l.durationProgress), (t = l.elapsedTime += e))),
                                (r = (i.progress || 0) + t / this._memoizedDuration),
                                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                (l.durationProgress = r)),
                                (d = n + i.easing(r) * (s - n)),
                                (a = (d - l.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((l.lastVelocity = a),
                            Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (a && !a[u].done && (c = !1), c ? (l.done = !0) : (t = !1), l.setValue(d, i.round) && (n = !0));
                }));
            const l = ob(this),
                u = l.getValue();
            if (t) {
                const e = Em(r.to);
                ((u === e && !n) || i.decay ? n && i.decay && this._onChange(u) : (l.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                mv.batchedUpdates(() => {
                    (this._stop(), this._focus(e), this._set(e));
                }),
                this
            );
        }
        pause() {
            this._update({ pause: !0 });
        }
        resume() {
            this._update({ pause: !1 });
        }
        finish() {
            if (Yb(this)) {
                const { to: e, config: t } = this.animation;
                mv.batchedUpdates(() => {
                    (this._onStart(), t.decay || this._set(e, !1), this._stop());
                });
            }
            return this;
        }
        update(e) {
            return ((this.queue || (this.queue = [])).push(e), this);
        }
        start(e, t) {
            let n;
            return (
                Nv.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Nv.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Lb(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Hb(this._state, e && this._lastCallId),
                mv.batchedUpdates(() => this._stop(t, e)),
                this
            );
        }
        reset() {
            this._update({ reset: !0 });
        }
        eventObserved(e) {
            'change' == e.type ? this._start() : 'priority' == e.type && (this.priority = e.priority + 1);
        }
        _prepareNode(e) {
            const t = this.key || '';
            let { to: n, from: r } = e;
            ((n = Nv.obj(n) ? n[t] : n),
                (null == n || Ab(n)) && (n = void 0),
                (r = Nv.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const o = { to: n, from: r };
            return (
                Xb(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Em(r)), Nv.und(r) ? ob(this) || this._set(n) : this._set(r)),
                o
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    Cb(e, (e, t) => (/^on/.test(t) ? wb(e, n) : e)),
                ),
                uy(this, e, 'onProps'),
                sy(this, 'onProps', e, this));
            const o = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const i = this._state;
            return Nb(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: i,
                actions: {
                    pause: () => {
                        Zb(this) ||
                            (ey(this, !0),
                            $v(i.pauseQueue),
                            sy(this, 'onPause', Db(this, ny(this, this.animation.to)), this));
                    },
                    resume: () => {
                        Zb(this) &&
                            (ey(this, !1),
                            Yb(this) && this._resume(),
                            $v(i.resumeQueue),
                            sy(this, 'onResume', Db(this, ny(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, o),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = ry(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Bb(this)));
            const r = !Nv.und(e.to),
                o = !Nv.und(e.from);
            if (r || o) {
                if (!(t.callId > this._lastToId)) return n(Bb(this));
                this._lastToId = t.callId;
            }
            const { key: i, defaultProps: a, animation: l } = this,
                { to: u, from: s } = l;
            let { to: c = u, from: d = s } = e;
            (!o || r || (t.default && !Nv.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
            const f = !Lv(d, s);
            (f && (l.from = d), (d = Em(d)));
            const p = !Lv(c, u);
            p && this._focus(c);
            const h = Ab(t.to),
                { config: g } = l,
                { decay: v, velocity: m } = g;
            ((r || o) && (g.velocity = 0),
                t.config &&
                    !h &&
                    (function (e, t, n) {
                        (n && (Fb((n = { ...n }), t), (t = { ...n, ...t })), Fb(e, t), Object.assign(e, t));
                        for (const a in jb) null == e[a] && (e[a] = jb[a]);
                        let { frequency: r, damping: o } = e;
                        const { mass: i } = e;
                        Nv.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            o < 0 && (o = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * i),
                            (e.friction = (4 * Math.PI * o * i) / r));
                    })(g, yb(t.config, i), t.config !== a.config ? yb(a.config, i) : void 0));
            let b = ob(this);
            if (!b || Nv.und(c)) return n(Db(this, !0));
            const y = Nv.und(t.reset) ? o && !t.default : !Nv.und(d) && _b(t.reset, i),
                _ = y ? d : this.get(),
                w = Eb(c),
                S = Nv.num(w) || Nv.arr(w) || Xm(w),
                k = !h && (!S || _b(a.immediate || t.immediate, i));
            if (p) {
                const e = hb(c);
                if (e !== b.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    b = this._set(w);
                }
            }
            const C = b.constructor;
            let x = Pm(c),
                O = !1;
            if (!x) {
                const e = y || (!Xb(this) && f);
                ((p || e) && ((O = Lv(Eb(_), w)), (x = !O)),
                    ((Lv(l.immediate, k) || k) && Lv(g.decay, v) && Lv(g.velocity, m)) || (x = !0));
            }
            if (
                (O && Yb(this) && (l.changed && !y ? (x = !0) : x || this._stop(u)),
                !h &&
                    ((x || Pm(u)) && ((l.values = b.getPayload()), (l.toValues = Pm(c) ? null : C == sb ? [1] : Bv(w))),
                    l.immediate != k && ((l.immediate = k), k || y || this._set(u)),
                    x))
            ) {
                const { onRest: e } = l;
                zv(ly, (e) => uy(this, t, e));
                const r = Db(this, ny(this, u));
                ($v(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    l.changed &&
                        mv.batchedUpdates(() => {
                            var t;
                            ((l.changed = !y),
                                null == e || e(r, this),
                                y ? yb(a.onRest, r) : null == (t = l.onStart) || t.call(l, r, this));
                        }));
            }
            (y && this._set(_),
                h
                    ? n(Ub(t.to, t, this._state, this))
                    : x
                      ? this._start()
                      : Yb(this) && !p
                        ? this._pendingCalls.add(n)
                        : n(zb(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Rm(this) && this._detach(), (t.to = e), Rm(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Pm(t) && (Tm(t, this), qb(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Pm(e) && jm(e, this);
        }
        _set(e, t = !0) {
            const n = Em(e);
            if (!Nv.und(n)) {
                const e = ob(this);
                if (!e || !Lv(n, e.getValue())) {
                    const r = hb(n);
                    (e && e.constructor == r ? e.setValue(n) : ib(this, r.create(n)),
                        e &&
                            mv.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return ob(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), sy(this, 'onStart', Db(this, ny(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), yb(this.animation.onChange, e, this)),
                yb(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (ob(this).reset(Em(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                Yb(this) || (Jb(this, !0), Zb(this) || this._resume()));
        }
        _resume() {
            Fv.skipAnimation ? this.finish() : tm.start(this);
        }
        _stop(e, t) {
            if (Yb(this)) {
                Jb(this, !1);
                const n = this.animation;
                (zv(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Am(this, { type: 'idle', parent: this }));
                const r = t ? Bb(this.get()) : Db(this.get(), ny(this, e ?? n.to));
                ($v(this._pendingCalls, r), n.changed && ((n.changed = !1), sy(this, 'onRest', r, this)));
            }
        }
    };
function ny(e, t) {
    const n = Eb(t);
    return Lv(Eb(e.get()), n);
}
function ry(e, t = e.loop, n = e.to) {
    const r = yb(t);
    if (r) {
        const o = !0 !== r && Pb(r),
            i = (o || e).reverse,
            a = !o || o.reset;
        return oy({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ab(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o,
        });
    }
}
function oy(e) {
    const { to: t, from: n } = (e = Pb(e)),
        r = new Set();
    return (Nv.obj(t) && ay(t, r), Nv.obj(n) && ay(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function iy(e) {
    const t = oy(e);
    return (Nv.und(t.default) && (t.default = Cb(t)), t);
}
function ay(e, t) {
    Dv(e, (e, n) => null != e && t.add(n));
}
var ly = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function uy(e, t, n) {
    e.animation[n] = t[n] !== Sb(t, n) ? wb(t[n], e.key) : void 0;
}
function sy(e, t, ...n) {
    var r, o, i, a;
    (null == (o = (r = e.animation)[t]) || o.call(r, ...n), null == (a = (i = e.defaultProps)[t]) || a.call(i, ...n));
}
var cy = ['onStart', 'onChange', 'onRest'],
    dy = 1,
    fy = class {
        constructor(e, t) {
            ((this.id = dy++),
                (this.springs = {}),
                (this.queue = []),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._changed = new Set()),
                (this._started = !1),
                (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
                (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
                (this._onFrame = this._onFrame.bind(this)),
                t && (this._flush = t),
                e && this.start({ default: !0, ...e }));
        }
        get idle() {
            return (
                !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused)
            );
        }
        get item() {
            return this._item;
        }
        set item(e) {
            this._item = e;
        }
        get() {
            const e = {};
            return (this.each((t, n) => (e[n] = t.get())), e);
        }
        set(e) {
            for (const t in e) {
                const n = e[t];
                Nv.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(oy(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = Bv(e).map(oy)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (yy(this, t), py(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                zv(Bv(t), (t) => n[t].stop(!!e));
            } else (Hb(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Nv.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                zv(Bv(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Nv.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                zv(Bv(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Dv(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                o = this._changed.size > 0;
            ((r && !this._started) || (o && !this._started)) &&
                ((this._started = !0),
                Uv(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const i = !r && this._started,
                a = o || (i && n.size) ? this.get() : null;
            (o &&
                t.size &&
                Uv(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                i &&
                    ((this._started = !1),
                    Uv(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            mv.onFrame(this._onFrame);
        }
    };
function py(e, t) {
    return Promise.all(t.map((t) => hy(e, t))).then((t) => Lb(e, t));
}
async function hy(e, t, n) {
    const { keys: r, to: o, from: i, loop: a, onRest: l, onResolve: u } = t,
        s = Nv.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null));
    const c = Nv.arr(o) || Nv.fun(o) ? o : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), s && (s.onRest = void 0))
        : zv(cy, (n) => {
              const r = t[n];
              if (Nv.fun(r)) {
                  const o = e._events[n];
                  ((t[n] = ({ finished: e, cancelled: t }) => {
                      const n = o.get(r);
                      n
                          ? (e || (n.finished = !1), t && (n.cancelled = !0))
                          : o.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                  }),
                      s && (s[n] = t[n]));
              }
          });
    const d = e._state;
    t.pause === !d.paused
        ? ((d.paused = t.pause), $v(t.pause ? d.pauseQueue : d.resumeQueue))
        : d.paused && (t.pause = !0);
    const f = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        p = !0 === t.cancel || !0 === Sb(t, 'cancel');
    ((c || (p && d.asyncId)) &&
        f.push(
            Nb(++e._lastAsyncId, {
                props: t,
                state: d,
                actions: {
                    pause: Vv,
                    resume: Vv,
                    start(t, n) {
                        p ? (Hb(d, e._lastAsyncId), n(Bb(e))) : ((t.onRest = l), n(Ub(c, t, d, e)));
                    },
                },
            }),
        ),
        d.paused &&
            (await new Promise((e) => {
                d.resumeQueue.add(e);
            })));
    const h = Lb(e, await Promise.all(f));
    if (a && h.finished && (!n || !h.noop)) {
        const n = ry(t, a, o);
        if (n) return (yy(e, [n]), hy(e, n, !0));
    }
    return (u && mv.batchedUpdates(() => u(h, e, e.item)), h);
}
function gy(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            zv(Bv(t), (e) => {
                (Nv.und(e.keys) && (e = oy(e)), Nv.obj(e.to) || (e = { ...e, to: void 0 }), by(n, e, (e) => my(e)));
            }),
        vy(e, n),
        n
    );
}
function vy(e, t) {
    Dv(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Tm(t, e));
    });
}
function my(e, t) {
    const n = new ty();
    return ((n.key = e), t && Tm(n, t), n);
}
function by(e, t, n) {
    t.keys &&
        zv(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function yy(e, t) {
    zv(t, (t) => {
        by(e.springs, t, (t) => my(t, e));
    });
}
var _y,
    wy,
    Sy = ({ children: e, ...t }) => {
        const n = U.useContext(ky),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = U.useState(() => ({ inputs: t, result: e() })),
                r = U.useRef(),
                o = r.current;
            let i = o;
            i
                ? Boolean(
                      t &&
                      i.inputs &&
                      (function (e, t) {
                          if (e.length !== t.length) return !1;
                          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                          return !0;
                      })(t, i.inputs),
                  ) || (i = { inputs: t, result: e() })
                : (i = n);
            return (
                U.useEffect(() => {
                    ((r.current = i), o == n && (n.inputs = n.result = void 0));
                }, [i]),
                i.result
            );
        })(() => ({ pause: r, immediate: o }), [r, o]);
        const { Provider: i } = ky;
        return U.createElement(i, { value: t }, e);
    },
    ky =
        ((_y = Sy),
        (wy = {}),
        Object.assign(_y, U.createContext(wy)),
        (_y.Provider._context = _y),
        (_y.Consumer._context = _y),
        _y);
((Sy.Provider = ky.Provider), (Sy.Consumer = ky.Consumer));
var Cy = () => {
    const e = [],
        t = function (t) {
            Qm(
                `${qm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                zv(e, (e, o) => {
                    if (Nv.und(t)) r.push(e.start());
                    else {
                        const i = n(t, e, o);
                        i && r.push(e.start(i));
                    }
                }),
                r
            );
        };
    ((t.current = e),
        (t.add = function (t) {
            e.includes(t) || e.push(t);
        }),
        (t.delete = function (t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1);
        }),
        (t.pause = function () {
            return (zv(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (zv(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            zv(e, (e, n) => {
                const r = Nv.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                zv(e, (e, r) => {
                    if (Nv.und(t)) n.push(e.start());
                    else {
                        const o = this._getProps(t, e, r);
                        o && n.push(e.start(o));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (zv(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (zv(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Nv.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function xy(e, t) {
    const n = Nv.fun(e),
        [[r], o] = (function (e, t, n) {
            const r = Nv.fun(t) && t;
            r && !n && (n = []);
            const o = U.useMemo(() => (r || 3 == arguments.length ? Cy() : void 0), []),
                i = U.useRef(0),
                a = Jm(),
                l = U.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = gy(e, t);
                            return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? py(e, t)
                                : new Promise((r) => {
                                      (vy(e, n),
                                          l.queue.push(() => {
                                              r(py(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = U.useRef([...l.ctrls]),
                s = [],
                c = nb(e) || 0;
            function d(e, n) {
                for (let o = e; o < n; o++) {
                    const e = u.current[o] || (u.current[o] = new fy(null, l.flush)),
                        n = r ? r(o, e) : t[o];
                    n && (s[o] = iy(n));
                }
            }
            (U.useMemo(() => {
                (zv(u.current.slice(e, c), (e) => {
                    (Ib(e, o), e.stop(!0));
                }),
                    (u.current.length = e),
                    d(c, e));
            }, [e]),
                U.useMemo(() => {
                    d(0, Math.min(c, e));
                }, n));
            const f = u.current.map((e, t) => gy(e, s[t])),
                p = U.useContext(Sy),
                h = nb(p),
                g = p !== h && Rb(p);
            (Ym(() => {
                (i.current++, (l.ctrls = u.current));
                const { queue: e } = l;
                (e.length && ((l.queue = []), zv(e, (e) => e())),
                    zv(u.current, (e, t) => {
                        (null == o || o.add(e), g && e.start({ default: p }));
                        const n = s[t];
                        n && (Mb(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                eb(() => () => {
                    zv(l.ctrls, (e) => e.stop(!0));
                }));
            const v = f.map((e) => ({ ...e }));
            return o ? [v, o] : v;
        })(1, n ? e : [e], n ? t || [] : t);
    return n || 2 == arguments.length ? [r, o] : r;
}
function Oy(e, t, n) {
    const r = Nv.fun(t) && t,
        {
            reset: o,
            sort: i,
            trail: a = 0,
            expires: l = !0,
            exitBeforeEnter: u = !1,
            onDestroyed: s,
            ref: c,
            config: d,
        } = r ? r() : t,
        f = U.useMemo(() => (r || 3 == arguments.length ? Cy() : void 0), []),
        p = Bv(e),
        h = [],
        g = U.useRef(null),
        v = o ? null : g.current;
    (Ym(() => {
        g.current = h;
    }),
        eb(
            () => (
                zv(h, (e) => {
                    (null == f || f.add(e.ctrl), (e.ctrl.ref = f));
                }),
                () => {
                    zv(g.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Ib(e.ctrl, f), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const m = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : Py++;
                });
            }
            return Nv.und(n) ? e : Nv.fun(n) ? e.map(n) : Bv(n);
        })(p, r ? r() : t, v),
        b = (o && g.current) || [];
    Ym(() =>
        zv(b, ({ ctrl: e, item: t, key: n }) => {
            (Ib(e, f), yb(s, t, n));
        }),
    );
    const y = [];
    if (
        (v &&
            zv(v, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = y[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        zv(p, (e, t) => {
            h[t] || ((h[t] = { key: m[t], item: e, phase: 'mount', ctrl: new fy() }), (h[t].ctrl.item = e));
        }),
        y.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        zv(y, (t, r) => {
            const o = v[r];
            ~t ? ((e = h.indexOf(o)), (h[e] = { ...o, item: p[t] })) : n && h.splice(++e, 0, o);
        });
    }
    Nv.fun(i) && h.sort((e, t) => i(e.item, t.item));
    let _ = -a;
    const w = Jm(),
        S = Cb(t),
        k = new Map(),
        C = U.useRef(new Map()),
        x = U.useRef(!1);
    zv(h, (e, n) => {
        const o = e.key,
            i = e.phase,
            s = r ? r() : t;
        let f, p;
        const h = yb(s.delay || 0, o);
        if ('mount' == i) ((f = s.enter), (p = 'enter'));
        else {
            const e = m.indexOf(o) < 0;
            if ('leave' != i)
                if (e) ((f = s.leave), (p = 'leave'));
                else {
                    if (!(f = s.update)) return;
                    p = 'update';
                }
            else {
                if (e) return;
                ((f = s.enter), (p = 'enter'));
            }
        }
        if (((f = yb(f, e.item, n)), (f = Nv.obj(f) ? Pb(f) : { to: f }), !f.config)) {
            const t = d || S.config;
            f.config = yb(t, e.item, n, p);
        }
        _ += a;
        const b = { ...S, delay: h + _, ref: c, immediate: s.immediate, reset: !1, ...f };
        if ('enter' == p && Nv.und(b.from)) {
            const o = r ? r() : t,
                i = Nv.und(o.initial) || v ? o.from : o.initial;
            b.from = yb(i, e.item, n);
        }
        const { onResolve: y } = b;
        b.onResolve = (e) => {
            yb(y, e);
            const t = g.current,
                n = t.find((e) => e.key === o);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = yb(l, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (C.current.delete(n), u && (x.current = !0), w());
            }
        };
        const O = gy(e.ctrl, b);
        'leave' === p && u
            ? C.current.set(e, { phase: p, springs: O, payload: b })
            : k.set(e, { phase: p, springs: O, payload: b });
    });
    const O = U.useContext(Sy),
        P = nb(O),
        E = O !== P && Rb(O);
    (Ym(() => {
        E &&
            zv(h, (e) => {
                e.ctrl.start({ default: O });
            });
    }, [O]),
        zv(k, (e, t) => {
            if (C.current.size) {
                const e = h.findIndex((e) => e.key === t.key);
                h.splice(e, 1);
            }
        }),
        Ym(
            () => {
                zv(C.current.size ? C.current : k, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == f || f.add(r),
                        E && 'enter' == e && r.start({ default: O }),
                        t &&
                            (Mb(r, t.ref),
                            (!r.ref && !f) || x.current ? (r.start(t), x.current && (x.current = !1)) : r.update(t)));
                });
            },
            o ? void 0 : n,
        ));
    const R = (e) =>
        U.createElement(
            U.Fragment,
            null,
            h.map((t, n) => {
                const { springs: r } = k.get(t) || t.ctrl,
                    o = e({ ...r }, t.item, t, n);
                return o && o.type
                    ? U.createElement(o.type, {
                          ...o.props,
                          key: Nv.str(t.key) || Nv.num(t.key) ? t.key : t.ctrl.id,
                          ref: o.ref,
                      })
                    : o;
            }),
        );
    return f ? [R, f] : R;
}
var Py = 1;
var Ey = class extends Kb {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Cm(...t)));
        const n = this._get(),
            r = hb(n);
        ib(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Lv(t, this.get()) || (ob(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Ay(this._active) && Iy(this));
    }
    _get() {
        const e = Nv.arr(this.source) ? this.source.map(Em) : Bv(Em(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Ay(this._active) &&
            ((this.idle = !1),
            zv(ab(this), (e) => {
                e.done = !1;
            }),
            Fv.skipAnimation ? (mv.batchedUpdates(() => this.advance()), Iy(this)) : tm.start(this));
    }
    _attach() {
        let e = 1;
        (zv(Bv(this.source), (t) => {
            (Pm(t) && Tm(t, this), qb(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (zv(Bv(this.source), (e) => {
            Pm(e) && jm(e, this);
        }),
            this._active.clear(),
            Iy(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Bv(this.source).reduce((e, t) => Math.max(e, (qb(t) ? t.priority : 0) + 1), 0));
    }
};
function Ry(e) {
    return !1 !== e.idle;
}
function Ay(e) {
    return !e.size || Array.from(e).every(Ry);
}
function Iy(e) {
    e.idle ||
        ((e.idle = !0),
        zv(ab(e), (e) => {
            e.done = !0;
        }),
        Am(e, { type: 'idle', parent: e }));
}
Fv.assign({ createStringInterpolator: $m, to: (e, t) => new Ey(e, t) });
var My = /^--/;
function Ty(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || My.test(e) || (Fy.hasOwnProperty(e) && Fy[e])
          ? ('' + t).trim()
          : t + 'px';
}
var jy = {};
var Fy = {
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
    Vy = ['Webkit', 'Ms', 'Moz', 'O'];
Fy = Object.keys(Fy).reduce(
    (e, t) => (Vy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Fy,
);
var Ny = /^(matrix|translate|scale|rotate|skew)/,
    Ly = /^(translate)/,
    zy = /^(rotate|skew)/,
    Dy = (e, t) => (Nv.num(e) && 0 !== e ? e + t : e),
    By = (e, t) => (Nv.arr(e) ? e.every((e) => By(e, t)) : Nv.num(e) ? e === t : parseFloat(e) === t),
    Uy = class extends db {
        constructor({ x: e, y: t, z: n, ...r }) {
            const o = [],
                i = [];
            ((e || t || n) &&
                (o.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => Dy(e, 'px')).join(',')})`, By(e, 0)])),
                Dv(r, (e, t) => {
                    if ('transform' === t) (o.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (Ny.test(t)) {
                        if ((delete r[t], Nv.und(e))) return;
                        const n = Ly.test(t) ? 'px' : zy.test(t) ? 'deg' : '';
                        (o.push(Bv(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Dy(o, n)})`, By(o, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Dy(e, n)).join(',')})`,
                                          By(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                o.length && (r.transform = new Hy(o, i)),
                super(r));
        }
    },
    Hy = class extends Im {
        constructor(e, t) {
            (super(), (this.inputs = e), (this.transforms = t), (this._value = null));
        }
        get() {
            return this._value || (this._value = this._get());
        }
        _get() {
            let e = '',
                t = !0;
            return (
                zv(this.inputs, (n, r) => {
                    const o = Em(n[0]),
                        [i, a] = this.transforms[r](Nv.arr(o) ? o : n.map(Em));
                    ((e += ' ' + i), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && zv(this.inputs, (e) => zv(e, (e) => Pm(e) && Tm(e, this)));
        }
        observerRemoved(e) {
            0 == e && zv(this.inputs, (e) => zv(e, (e) => Pm(e) && jm(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Am(this, e));
        }
    };
Fv.assign({
    batchedUpdates: Bd.unstable_batchedUpdates,
    createStringInterpolator: $m,
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
});
var Gy = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new db(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        i = (e) => {
            const t = bb(e) || 'Anonymous';
            return (
                ((e = Nv.str(e) ? i[e] || (i[e] = gb(e, o)) : e[mb] || (e[mb] = gb(e, o))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        Dv(e, (t, n) => {
            (Nv.arr(e) && (n = bb(t)), (i[n] = i(t)));
        }),
        { animated: i }
    );
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
                { style: r, children: o, scrollTop: i, scrollLeft: a, viewBox: l, ...u } = t,
                s = Object.values(u),
                c = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : jy[t] || (jy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== o && (e.textContent = o);
            for (const d in r)
                if (r.hasOwnProperty(d)) {
                    const t = Ty(d, r[d]);
                    My.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, s[n]);
            }),
                void 0 !== i && (e.scrollTop = i),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new Uy(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function $y(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var qy,
    Wy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Wy(Object.getPrototypeOf(e)) || []);
    },
    Ky = function (e) {
        return (function (e) {
            var t = Wy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Qy = 'pending',
    Xy = 'fulfilled',
    Yy = 'rejected';
function Zy(e) {
    switch (this.state) {
        case Qy:
            return e.pending && e.pending(this.value);
        case Yy:
            return e.rejected && e.rejected(this.value);
        case Xy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Jy(e, t) {
    if (
        ($y(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        $y(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Ah('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Xy));
        }),
        Ah('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Yy));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Zy));
    var r = !t || (t.state !== Xy && t.state !== Qy) ? void 0 : t.value;
    return (qh(n, { value: r, state: Qy }, {}, { deep: !1 }), n);
}
(((qy = Jy || (Jy = {})).reject = Ah('fromPromise.reject', function (e) {
    var t = qy(Promise.reject(e));
    return ((t.state = Yy), (t.value = e), t);
})),
    (qy.resolve = Ah('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = qy(Promise.resolve(e));
        return ((t.state = Xy), (t.value = e), t);
    })));
var e_ = function (e, t, n, r) {
    var o,
        i = arguments.length,
        a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
    else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
    return (i > 3 && a && Object.defineProperty(t, n, a), a);
};
!(function () {
    function e(e, t) {
        var n = this;
        (Object.defineProperty(this, 'current', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'subscription', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            vg(this),
            Mh(function () {
                ((n.current = t), (n.subscription = e.subscribe(n)));
            }));
    }
    (Object.defineProperty(e.prototype, 'dispose', {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
            this.subscription && this.subscription.unsubscribe();
        },
    }),
        Object.defineProperty(e.prototype, 'next', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                this.current = e;
            },
        }),
        Object.defineProperty(e.prototype, 'complete', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
                this.dispose();
            },
        }),
        Object.defineProperty(e.prototype, 'error', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                ((this.current = e), this.dispose());
            },
        }),
        e_([xp.ref], e.prototype, 'current', void 0),
        e_([Ah.bound], e.prototype, 'next', null),
        e_([Ah.bound], e.prototype, 'complete', null),
        e_([Ah.bound], e.prototype, 'error', null));
})();
var t_ = function () {
        return (
            (t_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            t_.apply(this, arguments)
        );
    },
    n_ = function (e, t, n, r) {
        var o,
            i = arguments.length,
            a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return (i > 3 && a && Object.defineProperty(t, n, a), a);
    },
    r_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: xp.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: xp.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            vg(this),
            $y(Wg(e), 'createViewModel expects an observable object'));
        var n = Ky(this);
        Ky(e).forEach(function (r) {
            var o;
            if (!n.includes(r) && r !== Ff && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    ($y(
                        -1 === r_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    ng(e, r))
                ) {
                    var i = lv(e, r),
                        a = i.derivation.bind(t),
                        l = null === (o = i.setter_) || void 0 === o ? void 0 : o.bind(t);
                    t.localComputedValues.set(r, Rp(a, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    t_(t_({}, s), {
                        configurable: !0,
                        get: function () {
                            return ng(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Ah(function (n) {
                            ng(e, r)
                                ? t.localComputedValues.get(r).set(n)
                                : n !== t.model[r]
                                  ? t.localValues.set(r, n)
                                  : t.localValues.delete(r);
                        }),
                    }),
                );
            }
        });
    }
    (Object.defineProperty(e.prototype, 'isDirty', {
        get: function () {
            return this.localValues.size > 0;
        },
        enumerable: !1,
        configurable: !0,
    }),
        Object.defineProperty(e.prototype, 'changedValues', {
            get: function () {
                return new Map(this.localValues);
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'submit', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
                var e,
                    t = this;
                (((e = this.localValues),
                Wg(e)
                    ? e[Ff].keys_()
                    : Ng(e) || Dg(e)
                      ? Array.from(e.keys())
                      : Ag(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Wd(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Ag(r) ? r.replace(n) : Ng(r) ? (r.clear(), r.merge(n)) : tg(n) || (t.model[e] = n);
                }),
                    this.localValues.clear());
            },
        }),
        Object.defineProperty(e.prototype, 'reset', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
                this.localValues.clear();
            },
        }),
        Object.defineProperty(e.prototype, 'resetProperty', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                this.localValues.delete(e);
            },
        }),
        n_([Rp], e.prototype, 'isDirty', null),
        n_([Rp], e.prototype, 'changedValues', null),
        n_([Ah.bound], e.prototype, 'submit', null),
        n_([Ah.bound], e.prototype, 'reset', null),
        n_([Ah.bound], e.prototype, 'resetProperty', null));
})();
var o_ = (function () {
    var e = function (t, n) {
        return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(t, n);
    };
    return function (t, n) {
        function r() {
            this.constructor = t;
        }
        (e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())));
    };
})();
!(function (e) {
    function t(t, n, r) {
        var o = void 0 === r ? {} : r,
            i = o.name,
            a = void 0 === i ? 'ogm' + ((1e3 * Math.random()) | 0) : i,
            l = o.keyToName,
            u =
                void 0 === l
                    ? function (e) {
                          return '' + e;
                      }
                    : l,
            s = e.call(this) || this;
        (Object.defineProperty(s, '_base', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(s, '_ogmInfoKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(s, '_groupBy', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(s, '_keyToName', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(s, '_disposeBaseObserver', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            (s._keyToName = u),
            (s._groupBy = n),
            (s._ogmInfoKey = Symbol('ogmInfo' + a)),
            (s._base = t));
        for (var c = 0; c < t.length; c++) s._addItem(t[c]);
        return (
            (s._disposeBaseObserver = og(s._base, function (e) {
                if ('splice' === e.type)
                    ig(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            s._removeItem(r);
                        }
                        for (var o = 0, i = e.added; o < i.length; o++) {
                            var a = i[o];
                            s._addItem(a);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    ig(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (o_(t, e),
        Object.defineProperty(t.prototype, 'clear', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
                throw new Error('not supported');
            },
        }),
        Object.defineProperty(t.prototype, 'delete', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                throw new Error('not supported');
            },
        }),
        Object.defineProperty(t.prototype, 'set', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
                throw new Error('not supported');
            },
        }),
        Object.defineProperty(t.prototype, 'dispose', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
                this._disposeBaseObserver();
                for (var e = 0; e < this._base.length; e++) {
                    var t = this._base[e];
                    (t[this._ogmInfoKey].reaction(), delete t[this._ogmInfoKey]);
                }
            },
        }),
        Object.defineProperty(t.prototype, '_getGroupArr', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t) {
                var n = e.prototype.get.call(this, t);
                return (
                    void 0 === n &&
                        ((n = xp([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
                        e.prototype.set.call(this, t, n)),
                    n
                );
            },
        }),
        Object.defineProperty(t.prototype, '_removeFromGroupArr', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t, n) {
                var r = e.prototype.get.call(this, t);
                1 === r.length
                    ? e.prototype.delete.call(this, t)
                    : (n === r.length - 1 || ((r[n] = r[r.length - 1]), (r[n][this._ogmInfoKey].groupArrIndex = n)),
                      r.length--);
            },
        }),
        Object.defineProperty(t.prototype, '_addItem', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                var t = this,
                    n = this._groupBy(e),
                    r = this._getGroupArr(n),
                    o = {
                        groupByValue: n,
                        groupArrIndex: r.length,
                        reaction: Nh(
                            function () {
                                return t._groupBy(e);
                            },
                            function (n, r) {
                                var o = e[t._ogmInfoKey];
                                t._removeFromGroupArr(o.groupByValue, o.groupArrIndex);
                                var i = t._getGroupArr(n),
                                    a = i.length;
                                (i.push(e), (o.groupByValue = n), (o.groupArrIndex = a));
                            },
                        ),
                    };
                (Object.defineProperty(e, this._ogmInfoKey, { configurable: !0, enumerable: !1, value: o }), r.push(e));
            },
        }),
        Object.defineProperty(t.prototype, '_removeItem', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                var t = e[this._ogmInfoKey];
                (this._removeFromGroupArr(t.groupByValue, t.groupArrIndex), t.reaction(), delete e[this._ogmInfoKey]);
            },
        }));
})(Vg);
var i_ = (function () {
        function e(e, t) {
            (Object.defineProperty(this, 'base', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                Object.defineProperty(this, 'args', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                Object.defineProperty(this, 'root', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                Object.defineProperty(this, 'closest', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0,
                }),
                Object.defineProperty(this, 'closestIdx', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                Object.defineProperty(this, 'isDisposed', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1,
                }));
            for (var n = (this.closest = this.root = e), r = 0; r < this.args.length - 1 && (n = n.get(t[r])); r++)
                this.closest = n;
            this.closestIdx = r;
        }
        return (
            Object.defineProperty(e.prototype, 'exists', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.assertNotDisposed();
                    var e = this.args.length;
                    return this.closestIdx >= e - 1 && this.closest.has(this.args[e - 1]);
                },
            }),
            Object.defineProperty(e.prototype, 'get', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if ((this.assertNotDisposed(), !this.exists())) throw new Error("Entry doesn't exist");
                    return this.closest.get(this.args[this.args.length - 1]);
                },
            }),
            Object.defineProperty(e.prototype, 'set', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    this.assertNotDisposed();
                    for (var t = this.args.length, n = this.closest, r = this.closestIdx; r < t - 1; r++) {
                        var o = new Map();
                        (n.set(this.args[r], o), (n = o));
                    }
                    ((this.closestIdx = t - 1), (this.closest = n), n.set(this.args[t - 1], e));
                },
            }),
            Object.defineProperty(e.prototype, 'delete', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if ((this.assertNotDisposed(), !this.exists())) throw new Error("Entry doesn't exist");
                    var e = this.args.length;
                    this.closest.delete(this.args[e - 1]);
                    for (var t = this.root, n = [t], r = 0; r < e - 1; r++) ((t = t.get(this.args[r])), n.push(t));
                    for (r = n.length - 1; r > 0; r--) 0 === n[r].size && n[r - 1].delete(this.args[r - 1]);
                    this.isDisposed = !0;
                },
            }),
            Object.defineProperty(e.prototype, 'assertNotDisposed', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if (this.isDisposed) throw new Error('Concurrent modification exception');
                },
            }),
            e
        );
    })(),
    a_ = (function () {
        function e() {
            (Object.defineProperty(this, 'store', { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
                Object.defineProperty(this, 'argsLength', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1,
                }),
                Object.defineProperty(this, 'last', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }));
        }
        return (
            Object.defineProperty(e.prototype, 'entry', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    if (-1 === this.argsLength) this.argsLength = e.length;
                    else if (this.argsLength !== e.length)
                        throw new Error(
                            'DeepMap should be used with functions with a consistent length, expected: ' +
                                this.argsLength +
                                ', got: ' +
                                e.length,
                        );
                    return (this.last && (this.last.isDisposed = !0), (this.last = new i_(this.store, e)));
                },
            }),
            e
        );
    })(),
    l_ = function () {
        return (
            (l_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            l_.apply(this, arguments)
        );
    };
function u_(e, t) {
    if ((void 0 === t && (t = !1), Th(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        o = 'boolean' == typeof t ? { keepAlive: t } : t,
        i = new a_();
    return function () {
        for (var t = this, a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
        var u,
            s = i.entry(a);
        if (s.exists()) return s.get().get();
        if (!o.keepAlive && null === uh.trackingDerivation)
            return (
                !n &&
                    uh.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Rp(
            function () {
                return (u = e.apply(t, a));
            },
            l_(l_({}, o), { name: 'computedFn(' + (o.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            s.set(c),
            o.keepAlive ||
                Dh(c, function () {
                    (i.entry(a).delete(),
                        o.onCleanup &&
                            o.onCleanup.apply(
                                o,
                                (function () {
                                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                    var r = Array(e),
                                        o = 0;
                                    for (t = 0; t < n; t++)
                                        for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++) r[o] = i[a];
                                    return r;
                                })([u], a),
                            ),
                        (u = void 0));
                }),
            c.get()
        );
    };
}
var s_ = {};
class c_ extends Error {
    constructor(e) {
        (super(
            e.message ||
                `Error on ${e.method}(): invalid type${e.path ? ` on ${e.path}` : ''}, expect to be ${e.expected}`,
        ),
            t(this, 'method'),
            t(this, 'path'),
            t(this, 'expected'),
            t(this, 'value'),
            t(this, 'fake_expected_typed_value_'));
        const n = new.target.prototype;
        (Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : (this.__proto__ = n),
            (this.method = e.method),
            (this.path = e.path),
            (this.expected = e.expected),
            (this.value = e.value));
    }
}
const d_ = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: c_ }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(s_, '__esModule', { value: !0 });
var f_ = (s_._assertGuard = void 0);
const p_ = d_;
if (
    ((f_ = s_._assertGuard =
        (e, t, n) => {
            if (!0 === e) throw n ? n(t) : new p_.TypeGuardError(t);
            return !1;
        }),
    !U.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!vg) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function h_(e) {
    e();
}
function g_(e) {
    return Wh(av(e, t));
    var t;
}
var v_ = new ((function () {
        function e(e) {
            var t = this;
            (Object.defineProperty(this, 'finalize', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                Object.defineProperty(this, 'registrations', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map(),
                }),
                Object.defineProperty(this, 'sweepTimeout', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0,
                }),
                Object.defineProperty(this, 'sweep', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function (e) {
                        (void 0 === e && (e = 1e4), clearTimeout(t.sweepTimeout), (t.sweepTimeout = void 0));
                        var n = Date.now();
                        (t.registrations.forEach(function (r, o) {
                            n - r.registeredAt >= e && (t.finalize(r.value), t.registrations.delete(o));
                        }),
                            t.registrations.size > 0 && t.scheduleSweep());
                    },
                }),
                Object.defineProperty(this, 'finalizeAllImmediately', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        t.sweep(0);
                    },
                }));
        }
        return (
            Object.defineProperty(e.prototype, 'register', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e, t, n) {
                    (this.registrations.set(n, { value: t, registeredAt: Date.now() }), this.scheduleSweep());
                },
            }),
            Object.defineProperty(e.prototype, 'unregister', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    this.registrations.delete(e);
                },
            }),
            Object.defineProperty(e.prototype, 'scheduleSweep', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    void 0 === this.sweepTimeout && (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                },
            }),
            e
        );
    })())(function (e) {
        var t;
        (null === (t = e.reaction) || void 0 === t || t.dispose(), (e.reaction = null));
    }),
    m_ = { exports: {} },
    b_ = {},
    y_ = U;
var __ =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    w_ = y_.useState,
    S_ = y_.useEffect,
    k_ = y_.useLayoutEffect,
    C_ = y_.useDebugValue;
function x_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !__(e, n);
    } catch (r) {
        return !0;
    }
}
var O_ =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = w_({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  i = r[1];
              return (
                  k_(
                      function () {
                          ((o.value = n), (o.getSnapshot = t), x_(o) && i({ inst: o }));
                      },
                      [e, n, t],
                  ),
                  S_(
                      function () {
                          return (
                              x_(o) && i({ inst: o }),
                              e(function () {
                                  x_(o) && i({ inst: o });
                              })
                          );
                      },
                      [e],
                  ),
                  C_(n),
                  n
              );
          };
((b_.useSyncExternalStore = void 0 !== y_.useSyncExternalStore ? y_.useSyncExternalStore : O_), (m_.exports = b_));
var P_,
    E_,
    R_ = m_.exports;
function A_(e) {
    e.reaction = new vh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var I_ = 'function' == typeof Symbol && Symbol.for,
    M_ =
        null !==
            (E_ =
                null === (P_ = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === P_
                    ? void 0
                    : P_.configurable) &&
        void 0 !== E_ &&
        E_,
    T_ = I_
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof U.forwardRef &&
          U.forwardRef(function (e) {
              return null;
          }).$$typeof,
    j_ = I_
        ? Symbol.for('react.memo')
        : 'function' == typeof U.memo &&
          U.memo(function (e) {
              return null;
          }).$$typeof;
function F_(e, t) {
    if (j_ && e.$$typeof === j_)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        o = e.displayName || e.name;
    if (T_ && e.$$typeof === T_ && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var i = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = H.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            v_.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (A_(r), (r.stateVersion = Symbol())),
                            function () {
                                var e;
                                ((r.onStoreChange = null),
                                    null === (e = r.reaction) || void 0 === e || e.dispose(),
                                    (r.reaction = null));
                            }
                        );
                    },
                    getSnapshot: function () {
                        return r.stateVersion;
                    },
                };
                n.current = r;
            }
            var o,
                i,
                a = n.current;
            if (
                (a.reaction || (A_(a), v_.register(n, a, a)),
                H.useDebugValue(a.reaction, g_),
                R_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
                a.reaction.track(function () {
                    try {
                        o = e();
                    } catch (t) {
                        i = t;
                    }
                }),
                i)
            )
                throw i;
            return o;
        })(function () {
            return r(e, t);
        }, o);
    };
    return (
        (i.displayName = e.displayName),
        M_ && Object.defineProperty(i, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (i.contextTypes = e.contextTypes),
        n && (i = U.forwardRef(i)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                N_[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (i = U.memo(i))),
        i
    );
}
var V_,
    N_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function L_(e, t) {
    return U.useState(function () {
        return xp(e(), t, { autoBind: !0 });
    })[0];
}
function z_(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = z_(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((V_ = Bd.unstable_batchedUpdates) || (V_ = h_), $h({ reactionScheduler: V_ }), v_.finalizeAllImmediately);
const D_ = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    B_ = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = z_(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    U_ = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return B_(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t,
            a = Object.keys(o).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == i ? void 0 : i[e];
                if (null === t) return null;
                const a = D_(t) || D_(r);
                return o[e][a];
            }),
            l =
                n &&
                Object.entries(n).reduce((e, t) => {
                    let [n, r] = t;
                    return (void 0 === r || (e[n] = r), e);
                }, {}),
            u =
                null == t || null === (r = t.compoundVariants) || void 0 === r
                    ? void 0
                    : r.reduce((e, t) => {
                          let { class: n, className: r, ...o } = t;
                          return Object.entries(o).every((e) => {
                              let [t, n] = e;
                              return Array.isArray(n) ? n.includes({ ...i, ...l }[t]) : { ...i, ...l }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return B_(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var H_ = (function () {
        if ('undefined' != typeof Map) return Map;
        function e(e, t) {
            var n = -1;
            return (
                e.some(function (e, r) {
                    return e[0] === t && ((n = r), !0);
                }),
                n
            );
        }
        return (function () {
            function t() {
                this.__entries__ = [];
            }
            return (
                Object.defineProperty(t.prototype, 'size', {
                    get: function () {
                        return this.__entries__.length;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.get = function (t) {
                    var n = e(this.__entries__, t),
                        r = this.__entries__[n];
                    return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                    var r = e(this.__entries__, t);
                    ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                    var n = this.__entries__,
                        r = e(n, t);
                    ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                    return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                    this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                        var o = r[n];
                        e.call(t, o[1], o[0]);
                    }
                }),
                t
            );
        })();
    })(),
    G_ = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    $_ =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    q_ =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind($_)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var W_ = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    K_ = 'undefined' != typeof MutationObserver,
    Q_ = (function () {
        function e() {
            ((this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                    var n = !1,
                        r = !1,
                        o = 0;
                    function i() {
                        (n && ((n = !1), e()), r && l());
                    }
                    function a() {
                        q_(i);
                    }
                    function l() {
                        var e = Date.now();
                        if (n) {
                            if (e - o < 2) return;
                            r = !0;
                        } else ((n = !0), (r = !1), setTimeout(a, t));
                        o = e;
                    }
                    return l;
                })(this.refresh.bind(this), 20)));
        }
        return (
            (e.prototype.addObserver = function (e) {
                (~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_());
            }),
            (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                    n = t.indexOf(e);
                (~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_());
            }),
            (e.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                    return (e.gatherActive(), e.hasActive());
                });
                return (
                    e.forEach(function (e) {
                        return e.broadcastActive();
                    }),
                    e.length > 0
                );
            }),
            (e.prototype.connect_ = function () {
                G_ &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    K_
                        ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                          this.mutationsObserver_.observe(document, {
                              attributes: !0,
                              childList: !0,
                              characterData: !0,
                              subtree: !0,
                          }))
                        : (document.addEventListener('DOMSubtreeModified', this.refresh),
                          (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
                G_ &&
                    this.connected_ &&
                    (document.removeEventListener('transitionend', this.onTransitionEnd_),
                    window.removeEventListener('resize', this.refresh),
                    this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                    n = void 0 === t ? '' : t;
                W_.some(function (e) {
                    return !!~n.indexOf(e);
                }) && this.refresh();
            }),
            (e.getInstance = function () {
                return (this.instance_ || (this.instance_ = new e()), this.instance_);
            }),
            (e.instance_ = null),
            e
        );
    })(),
    X_ = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    Y_ = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || $_;
    },
    Z_ = ow(0, 0, 0, 0);
function J_(e) {
    return parseFloat(e) || 0;
}
function ew(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + J_(e['border-' + n + '-width']);
    }, 0);
}
function tw(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return Z_;
    var r = Y_(e).getComputedStyle(e),
        o = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var o = r[n],
                    i = e['padding-' + o];
                t[o] = J_(i);
            }
            return t;
        })(r),
        i = o.left + o.right,
        a = o.top + o.bottom,
        l = J_(r.width),
        u = J_(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(l + i) !== t && (l -= ew(r, 'left', 'right') + i),
            Math.round(u + a) !== n && (u -= ew(r, 'top', 'bottom') + a)),
        !(function (e) {
            return e === Y_(e).document.documentElement;
        })(e))
    ) {
        var s = Math.round(l + i) - t,
            c = Math.round(u + a) - n;
        (1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(c) && (u -= c));
    }
    return ow(o.left, o.top, l, u);
}
var nw =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof Y_(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof Y_(e).SVGElement && 'function' == typeof e.getBBox;
          };
function rw(e) {
    return G_
        ? nw(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return ow(0, 0, t.width, t.height);
              })(e)
            : tw(e)
        : Z_;
}
function ow(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var iw = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = ow(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = rw(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    aw = (function () {
        return function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                l,
                u,
                s =
                    ((r = (n = t).x),
                    (o = n.y),
                    (i = n.width),
                    (a = n.height),
                    (l = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (u = Object.create(l.prototype)),
                    X_(u, { x: r, y: o, width: i, height: a, top: o, right: r + i, bottom: a + o, left: r }),
                    u);
            X_(this, { target: e, contentRect: s });
        };
    })(),
    lw = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new H_()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Y_(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new iw(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Y_(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                }
            }),
            (e.prototype.disconnect = function () {
                (this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this));
            }),
            (e.prototype.gatherActive = function () {
                var e = this;
                (this.clearActive(),
                    this.observations_.forEach(function (t) {
                        t.isActive() && e.activeObservations_.push(t);
                    }));
            }),
            (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                    var e = this.callbackCtx_,
                        t = this.activeObservations_.map(function (e) {
                            return new aw(e.target, e.broadcastRect());
                        });
                    (this.callback_.call(e, t, e), this.clearActive());
                }
            }),
            (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
            }),
            e
        );
    })(),
    uw = 'undefined' != typeof WeakMap ? new WeakMap() : new H_(),
    sw = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = Q_.getInstance(),
                r = new lw(t, n, this);
            uw.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    sw.prototype[e] = function () {
        var t;
        return (t = uw.get(this))[e].apply(t, arguments);
    };
});
var cw = void 0 !== $_.ResizeObserver ? $_.ResizeObserver : sw;
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dw() {
    return {
        accessor: (e, t) => ('function' == typeof e ? { ...t, accessorFn: e } : { ...t, accessorKey: e }),
        display: (e) => e,
        group: (e) => e,
    };
}
function fw(e, t) {
    return 'function' == typeof e ? e(t) : e;
}
function pw(e, t) {
    return (n) => {
        t.setState((t) => ({ ...t, [e]: fw(n, t[e]) }));
    };
}
function hw(e) {
    return e instanceof Function;
}
function gw(e, t, n) {
    let r,
        o = [];
    return (i) => {
        let a;
        n.key && n.debug && (a = Date.now());
        const l = e(i);
        if (!(l.length !== o.length || l.some((e, t) => o[t] !== e))) return r;
        let u;
        if (
            ((o = l),
            n.key && n.debug && (u = Date.now()),
            (r = t(...l)),
            null == n || null == n.onChange || n.onChange(r),
            n.key && n.debug && null != n && n.debug())
        ) {
            const e = Math.round(100 * (Date.now() - a)) / 100,
                t = Math.round(100 * (Date.now() - u)) / 100,
                r = t / 16,
                o = (e, t) => {
                    for (e = String(e); e.length < t; ) e = ' ' + e;
                    return e;
                };
            console.info(
                `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
                `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
                null == n ? void 0 : n.key,
            );
        }
        return r;
    };
}
function vw(e, t, n, r) {
    return {
        debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
        },
        key: !1,
        onChange: r,
    };
}
const mw = 'debugHeaders';
function bw(e, t, n) {
    var r;
    let o = {
        id: null != (r = n.id) ? r : t.id,
        column: t,
        index: n.index,
        isPlaceholder: !!n.isPlaceholder,
        placeholderId: n.placeholderId,
        depth: n.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: () => {
            const e = [],
                t = (n) => {
                    (n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n));
                };
            return (t(o), e);
        },
        getContext: () => ({ table: e, header: o, column: t }),
    };
    return (
        e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(o, e);
        }),
        o
    );
}
const yw = {
    createTable: (e) => {
        ((e.getHeaderGroups = gw(
            () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
            ],
            (t, n, r, o) => {
                var i, a;
                const l =
                        null != (i = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? i
                            : [],
                    u =
                        null != (a = null == o ? void 0 : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? a
                            : [];
                return _w(
                    t,
                    [
                        ...l,
                        ...n.filter((e) => !((null != r && r.includes(e.id)) || (null != o && o.includes(e.id)))),
                        ...u,
                    ],
                    e,
                );
            },
            vw(e.options, mw),
        )),
            (e.getCenterHeaderGroups = gw(
                () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                ],
                (t, n, r, o) =>
                    _w(
                        t,
                        (n = n.filter((e) => !((null != r && r.includes(e.id)) || (null != o && o.includes(e.id))))),
                        e,
                        'center',
                    ),
                vw(e.options, mw),
            )),
            (e.getLeftHeaderGroups = gw(
                () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left],
                (t, n, r) => {
                    var o;
                    return _w(
                        t,
                        null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? o
                            : [],
                        e,
                        'left',
                    );
                },
                vw(e.options, mw),
            )),
            (e.getRightHeaderGroups = gw(
                () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right],
                (t, n, r) => {
                    var o;
                    return _w(
                        t,
                        null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? o
                            : [],
                        e,
                        'right',
                    );
                },
                vw(e.options, mw),
            )),
            (e.getFooterGroups = gw(
                () => [e.getHeaderGroups()],
                (e) => [...e].reverse(),
                vw(e.options, mw),
            )),
            (e.getLeftFooterGroups = gw(
                () => [e.getLeftHeaderGroups()],
                (e) => [...e].reverse(),
                vw(e.options, mw),
            )),
            (e.getCenterFooterGroups = gw(
                () => [e.getCenterHeaderGroups()],
                (e) => [...e].reverse(),
                vw(e.options, mw),
            )),
            (e.getRightFooterGroups = gw(
                () => [e.getRightHeaderGroups()],
                (e) => [...e].reverse(),
                vw(e.options, mw),
            )),
            (e.getFlatHeaders = gw(
                () => [e.getHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                vw(e.options, mw),
            )),
            (e.getLeftFlatHeaders = gw(
                () => [e.getLeftHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                vw(e.options, mw),
            )),
            (e.getCenterFlatHeaders = gw(
                () => [e.getCenterHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                vw(e.options, mw),
            )),
            (e.getRightFlatHeaders = gw(
                () => [e.getRightHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                vw(e.options, mw),
            )),
            (e.getCenterLeafHeaders = gw(
                () => [e.getCenterFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                vw(e.options, mw),
            )),
            (e.getLeftLeafHeaders = gw(
                () => [e.getLeftFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                vw(e.options, mw),
            )),
            (e.getRightLeafHeaders = gw(
                () => [e.getRightFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                vw(e.options, mw),
            )),
            (e.getLeafHeaders = gw(
                () => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()],
                (e, t, n) => {
                    var r, o, i, a, l, u;
                    return [
                        ...(null != (r = null == (o = e[0]) ? void 0 : o.headers) ? r : []),
                        ...(null != (i = null == (a = t[0]) ? void 0 : a.headers) ? i : []),
                        ...(null != (l = null == (u = n[0]) ? void 0 : u.headers) ? l : []),
                    ]
                        .map((e) => e.getLeafHeaders())
                        .flat();
                },
                vw(e.options, mw),
            )));
    },
};
function _w(e, t, n, r) {
    var o, i;
    let a = 0;
    const l = function (e, t) {
        (void 0 === t && (t = 1),
            (a = Math.max(a, t)),
            e
                .filter((e) => e.getIsVisible())
                .forEach((e) => {
                    var n;
                    null != (n = e.columns) && n.length && l(e.columns, t + 1);
                }, 0));
    };
    l(e);
    let u = [];
    const s = (e, t) => {
            const o = { depth: t, id: [r, `${t}`].filter(Boolean).join('_'), headers: [] },
                i = [];
            (e.forEach((e) => {
                const a = [...i].reverse()[0];
                let l,
                    u = !1;
                if (
                    (e.column.depth === o.depth && e.column.parent ? (l = e.column.parent) : ((l = e.column), (u = !0)),
                    a && (null == a ? void 0 : a.column) === l)
                )
                    a.subHeaders.push(e);
                else {
                    const o = bw(n, l, {
                        id: [r, t, l.id, null == e ? void 0 : e.id].filter(Boolean).join('_'),
                        isPlaceholder: u,
                        placeholderId: u ? `${i.filter((e) => e.column === l).length}` : void 0,
                        depth: t,
                        index: i.length,
                    });
                    (o.subHeaders.push(e), i.push(o));
                }
                (o.headers.push(e), (e.headerGroup = o));
            }),
                u.push(o),
                t > 0 && s(i, t - 1));
        },
        c = t.map((e, t) => bw(n, e, { depth: a, index: t }));
    (s(c, a - 1), u.reverse());
    const d = (e) =>
        e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
                let t = 0,
                    n = 0,
                    r = [0];
                e.subHeaders && e.subHeaders.length
                    ? ((r = []),
                      d(e.subHeaders).forEach((e) => {
                          let { colSpan: n, rowSpan: o } = e;
                          ((t += n), r.push(o));
                      }))
                    : (t = 1);
                return ((n += Math.min(...r)), (e.colSpan = t), (e.rowSpan = n), { colSpan: t, rowSpan: n });
            });
    return (d(null != (o = null == (i = u[0]) ? void 0 : i.headers) ? o : []), u);
}
const ww = (e, t, n, r, o, i, a) => {
        let l = {
            id: t,
            index: r,
            original: n,
            depth: o,
            parentId: a,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
                if (l._valuesCache.hasOwnProperty(t)) return l._valuesCache[t];
                const n = e.getColumn(t);
                return null != n && n.accessorFn
                    ? ((l._valuesCache[t] = n.accessorFn(l.original, r)), l._valuesCache[t])
                    : void 0;
            },
            getUniqueValues: (t) => {
                if (l._uniqueValuesCache.hasOwnProperty(t)) return l._uniqueValuesCache[t];
                const n = e.getColumn(t);
                return null != n && n.accessorFn
                    ? n.columnDef.getUniqueValues
                        ? ((l._uniqueValuesCache[t] = n.columnDef.getUniqueValues(l.original, r)),
                          l._uniqueValuesCache[t])
                        : ((l._uniqueValuesCache[t] = [l.getValue(t)]), l._uniqueValuesCache[t])
                    : void 0;
            },
            renderValue: (t) => {
                var n;
                return null != (n = l.getValue(t)) ? n : e.options.renderFallbackValue;
            },
            subRows: [],
            getLeafRows: () =>
                (function (e, t) {
                    const n = [],
                        r = (e) => {
                            e.forEach((e) => {
                                n.push(e);
                                const o = t(e);
                                null != o && o.length && r(o);
                            });
                        };
                    return (r(e), n);
                })(l.subRows, (e) => e.subRows),
            getParentRow: () => (l.parentId ? e.getRow(l.parentId, !0) : void 0),
            getParentRows: () => {
                let e = [],
                    t = l;
                for (;;) {
                    const n = t.getParentRow();
                    if (!n) break;
                    (e.push(n), (t = n));
                }
                return e.reverse();
            },
            getAllCells: gw(
                () => [e.getAllLeafColumns()],
                (t) =>
                    t.map((t) =>
                        (function (e, t, n, r) {
                            const o = {
                                id: `${t.id}_${n.id}`,
                                row: t,
                                column: n,
                                getValue: () => t.getValue(r),
                                renderValue: () => {
                                    var t;
                                    return null != (t = o.getValue()) ? t : e.options.renderFallbackValue;
                                },
                                getContext: gw(
                                    () => [e, n, t, o],
                                    (e, t, n, r) => ({
                                        table: e,
                                        column: t,
                                        row: n,
                                        cell: r,
                                        getValue: r.getValue,
                                        renderValue: r.renderValue,
                                    }),
                                    vw(e.options, 'debugCells'),
                                ),
                            };
                            return (
                                e._features.forEach((r) => {
                                    null == r.createCell || r.createCell(o, n, t, e);
                                }, {}),
                                o
                            );
                        })(e, l, t, t.id),
                    ),
                vw(e.options, 'debugRows'),
            ),
            _getAllCellsByColumnId: gw(
                () => [l.getAllCells()],
                (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
                vw(e.options, 'debugRows'),
            ),
        };
        for (let u = 0; u < e._features.length; u++) {
            const t = e._features[u];
            null == t || null == t.createRow || t.createRow(l, e);
        }
        return l;
    },
    Sw = {
        createColumn: (e, t) => {
            ((e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
                (e.getFacetedRowModel = () =>
                    e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel()),
                (e._getFacetedUniqueValues =
                    t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id)),
                (e.getFacetedUniqueValues = () =>
                    e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
                (e._getFacetedMinMaxValues =
                    t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id)),
                (e.getFacetedMinMaxValues = () => {
                    if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
                }));
        },
    },
    kw = (e, t, n) => {
        var r, o;
        const i = null == n || null == (r = n.toString()) ? void 0 : r.toLowerCase();
        return Boolean(
            null == (o = e.getValue(t)) || null == (o = o.toString()) || null == (o = o.toLowerCase())
                ? void 0
                : o.includes(i),
        );
    };
kw.autoRemove = (e) => Tw(e);
const Cw = (e, t, n) => {
    var r;
    return Boolean(null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.includes(n));
};
Cw.autoRemove = (e) => Tw(e);
const xw = (e, t, n) => {
    var r;
    return (
        (null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.toLowerCase()) ===
        (null == n ? void 0 : n.toLowerCase())
    );
};
xw.autoRemove = (e) => Tw(e);
const Ow = (e, t, n) => {
    var r;
    return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
};
Ow.autoRemove = (e) => Tw(e) || !(null != e && e.length);
const Pw = (e, t, n) =>
    !n.some((n) => {
        var r;
        return !(null != (r = e.getValue(t)) && r.includes(n));
    });
Pw.autoRemove = (e) => Tw(e) || !(null != e && e.length);
const Ew = (e, t, n) =>
    n.some((n) => {
        var r;
        return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
    });
Ew.autoRemove = (e) => Tw(e) || !(null != e && e.length);
const Rw = (e, t, n) => e.getValue(t) === n;
Rw.autoRemove = (e) => Tw(e);
const Aw = (e, t, n) => e.getValue(t) == n;
Aw.autoRemove = (e) => Tw(e);
const Iw = (e, t, n) => {
    let [r, o] = n;
    const i = e.getValue(t);
    return i >= r && i <= o;
};
((Iw.resolveFilterValue = (e) => {
    let [t, n] = e,
        r = 'number' != typeof t ? parseFloat(t) : t,
        o = 'number' != typeof n ? parseFloat(n) : n,
        i = null === t || Number.isNaN(r) ? -1 / 0 : r,
        a = null === n || Number.isNaN(o) ? 1 / 0 : o;
    if (i > a) {
        const e = i;
        ((i = a), (a = e));
    }
    return [i, a];
}),
    (Iw.autoRemove = (e) => Tw(e) || (Tw(e[0]) && Tw(e[1]))));
const Mw = {
    includesString: kw,
    includesStringSensitive: Cw,
    equalsString: xw,
    arrIncludes: Ow,
    arrIncludesAll: Pw,
    arrIncludesSome: Ew,
    equals: Rw,
    weakEquals: Aw,
    inNumberRange: Iw,
};
function Tw(e) {
    return null == e || '' === e;
}
const jw = {
    getDefaultColumnDef: () => ({ filterFn: 'auto' }),
    getInitialState: (e) => ({ columnFilters: [], ...e }),
    getDefaultOptions: (e) => ({
        onColumnFiltersChange: pw('columnFilters', e),
        filterFromLeafRows: !1,
        maxLeafRowFilterDepth: 100,
    }),
    createColumn: (e, t) => {
        ((e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
                r = null == n ? void 0 : n.getValue(e.id);
            return 'string' == typeof r
                ? Mw.includesString
                : 'number' == typeof r
                  ? Mw.inNumberRange
                  : 'boolean' == typeof r || (null !== r && 'object' == typeof r)
                    ? Mw.equals
                    : Array.isArray(r)
                      ? Mw.arrIncludes
                      : Mw.weakEquals;
        }),
            (e.getFilterFn = () => {
                var n, r;
                return hw(e.columnDef.filterFn)
                    ? e.columnDef.filterFn
                    : 'auto' === e.columnDef.filterFn
                      ? e.getAutoFilterFn()
                      : null != (n = null == (r = t.options.filterFns) ? void 0 : r[e.columnDef.filterFn])
                        ? n
                        : Mw[e.columnDef.filterFn];
            }),
            (e.getCanFilter = () => {
                var n, r, o;
                return (
                    (null == (n = e.columnDef.enableColumnFilter) || n) &&
                    (null == (r = t.options.enableColumnFilters) || r) &&
                    (null == (o = t.options.enableFilters) || o) &&
                    !!e.accessorFn
                );
            }),
            (e.getIsFiltered = () => e.getFilterIndex() > -1),
            (e.getFilterValue = () => {
                var n;
                return null == (n = t.getState().columnFilters) || null == (n = n.find((t) => t.id === e.id))
                    ? void 0
                    : n.value;
            }),
            (e.getFilterIndex = () => {
                var n, r;
                return null !=
                    (n = null == (r = t.getState().columnFilters) ? void 0 : r.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
            }),
            (e.setFilterValue = (n) => {
                t.setColumnFilters((t) => {
                    const r = e.getFilterFn(),
                        o = null == t ? void 0 : t.find((t) => t.id === e.id),
                        i = fw(n, o ? o.value : void 0);
                    var a;
                    if (Fw(r, i, e)) return null != (a = null == t ? void 0 : t.filter((t) => t.id !== e.id)) ? a : [];
                    const l = { id: e.id, value: i };
                    var u;
                    return o
                        ? null != (u = null == t ? void 0 : t.map((t) => (t.id === e.id ? l : t)))
                            ? u
                            : []
                        : null != t && t.length
                          ? [...t, l]
                          : [l];
                });
            }));
    },
    createRow: (e, t) => {
        ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
    },
    createTable: (e) => {
        ((e.setColumnFilters = (t) => {
            const n = e.getAllLeafColumns();
            null == e.options.onColumnFiltersChange ||
                e.options.onColumnFiltersChange((e) => {
                    var r;
                    return null == (r = fw(t, e))
                        ? void 0
                        : r.filter((e) => {
                              const t = n.find((t) => t.id === e.id);
                              if (t) {
                                  if (Fw(t.getFilterFn(), e.value, t)) return !1;
                              }
                              return !0;
                          });
                });
        }),
            (e.resetColumnFilters = (t) => {
                var n, r;
                e.setColumnFilters(
                    t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.columnFilters) ? n : [],
                );
            }),
            (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
            (e.getFilteredRowModel = () => (
                !e._getFilteredRowModel &&
                    e.options.getFilteredRowModel &&
                    (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                e.options.manualFiltering || !e._getFilteredRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getFilteredRowModel()
            )));
    },
};
function Fw(e, t, n) {
    return (!(!e || !e.autoRemove) && e.autoRemove(t, n)) || void 0 === t || ('string' == typeof t && !t);
}
const Vw = {
        sum: (e, t, n) =>
            n.reduce((t, n) => {
                const r = n.getValue(e);
                return t + ('number' == typeof r ? r : 0);
            }, 0),
        min: (e, t, n) => {
            let r;
            return (
                n.forEach((t) => {
                    const n = t.getValue(e);
                    null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
                }),
                r
            );
        },
        max: (e, t, n) => {
            let r;
            return (
                n.forEach((t) => {
                    const n = t.getValue(e);
                    null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
                }),
                r
            );
        },
        extent: (e, t, n) => {
            let r, o;
            return (
                n.forEach((t) => {
                    const n = t.getValue(e);
                    null != n && (void 0 === r ? n >= n && (r = o = n) : (r > n && (r = n), o < n && (o = n)));
                }),
                [r, o]
            );
        },
        mean: (e, t) => {
            let n = 0,
                r = 0;
            if (
                (t.forEach((t) => {
                    let o = t.getValue(e);
                    null != o && (o = +o) >= o && (++n, (r += o));
                }),
                n)
            )
                return r / n;
        },
        median: (e, t) => {
            if (!t.length) return;
            const n = t.map((t) => t.getValue(e));
            if (((r = n), !Array.isArray(r) || !r.every((e) => 'number' == typeof e))) return;
            var r;
            if (1 === n.length) return n[0];
            const o = Math.floor(n.length / 2),
                i = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? i[o] : (i[o - 1] + i[o]) / 2;
        },
        unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
        uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
        count: (e, t) => t.length,
    },
    Nw = {
        getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
                var t, n;
                return null != (t = null == (n = e.getValue()) || null == n.toString ? void 0 : n.toString())
                    ? t
                    : null;
            },
            aggregationFn: 'auto',
        }),
        getInitialState: (e) => ({ grouping: [], ...e }),
        getDefaultOptions: (e) => ({ onGroupingChange: pw('grouping', e), groupedColumnMode: 'reorder' }),
        createColumn: (e, t) => {
            ((e.toggleGrouping = () => {
                t.setGrouping((t) =>
                    null != t && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...(null != t ? t : []), e.id],
                );
            }),
                (e.getCanGroup = () => {
                    var n, r;
                    return (
                        (null == (n = e.columnDef.enableGrouping) || n) &&
                        (null == (r = t.options.enableGrouping) || r) &&
                        (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                    );
                }),
                (e.getIsGrouped = () => {
                    var n;
                    return null == (n = t.getState().grouping) ? void 0 : n.includes(e.id);
                }),
                (e.getGroupedIndex = () => {
                    var n;
                    return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id);
                }),
                (e.getToggleGroupingHandler = () => {
                    const t = e.getCanGroup();
                    return () => {
                        t && e.toggleGrouping();
                    };
                }),
                (e.getAutoAggregationFn = () => {
                    const n = t.getCoreRowModel().flatRows[0],
                        r = null == n ? void 0 : n.getValue(e.id);
                    return 'number' == typeof r
                        ? Vw.sum
                        : '[object Date]' === Object.prototype.toString.call(r)
                          ? Vw.extent
                          : void 0;
                }),
                (e.getAggregationFn = () => {
                    var n, r;
                    if (!e) throw new Error();
                    return hw(e.columnDef.aggregationFn)
                        ? e.columnDef.aggregationFn
                        : 'auto' === e.columnDef.aggregationFn
                          ? e.getAutoAggregationFn()
                          : null != (n = null == (r = t.options.aggregationFns) ? void 0 : r[e.columnDef.aggregationFn])
                            ? n
                            : Vw[e.columnDef.aggregationFn];
                }));
        },
        createTable: (e) => {
            ((e.setGrouping = (t) => (null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t))),
                (e.resetGrouping = (t) => {
                    var n, r;
                    e.setGrouping(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.grouping) ? n : []);
                }),
                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                (e.getGroupedRowModel = () => (
                    !e._getGroupedRowModel &&
                        e.options.getGroupedRowModel &&
                        (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                    e.options.manualGrouping || !e._getGroupedRowModel
                        ? e.getPreGroupedRowModel()
                        : e._getGroupedRowModel()
                )));
        },
        createRow: (e, t) => {
            ((e.getIsGrouped = () => !!e.groupingColumnId),
                (e.getGroupingValue = (n) => {
                    if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                    const r = t.getColumn(n);
                    return null != r && r.columnDef.getGroupingValue
                        ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original)),
                          e._groupingValuesCache[n])
                        : e.getValue(n);
                }),
                (e._groupingValuesCache = {}));
        },
        createCell: (e, t, n, r) => {
            ((e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
                (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
                (e.getIsAggregated = () => {
                    var t;
                    return !e.getIsGrouped() && !e.getIsPlaceholder() && !(null == (t = n.subRows) || !t.length);
                }));
        },
    };
const Lw = {
        getInitialState: (e) => ({ columnOrder: [], ...e }),
        getDefaultOptions: (e) => ({ onColumnOrderChange: pw('columnOrder', e) }),
        createColumn: (e, t) => {
            ((e.getIndex = gw(
                (e) => [Gw(t, e)],
                (t) => t.findIndex((t) => t.id === e.id),
                vw(t.options, 'debugColumns'),
            )),
                (e.getIsFirstColumn = (n) => {
                    var r;
                    return (null == (r = Gw(t, n)[0]) ? void 0 : r.id) === e.id;
                }),
                (e.getIsLastColumn = (n) => {
                    var r;
                    const o = Gw(t, n);
                    return (null == (r = o[o.length - 1]) ? void 0 : r.id) === e.id;
                }));
        },
        createTable: (e) => {
            ((e.setColumnOrder = (t) =>
                null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t)),
                (e.resetColumnOrder = (t) => {
                    var n;
                    e.setColumnOrder(t ? [] : null != (n = e.initialState.columnOrder) ? n : []);
                }),
                (e._getOrderColumnsFn = gw(
                    () => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode],
                    (e, t, n) => (r) => {
                        let o = [];
                        if (null != e && e.length) {
                            const t = [...e],
                                n = [...r];
                            for (; n.length && t.length; ) {
                                const e = t.shift(),
                                    r = n.findIndex((t) => t.id === e);
                                r > -1 && o.push(n.splice(r, 1)[0]);
                            }
                            o = [...o, ...n];
                        } else o = r;
                        return (function (e, t, n) {
                            if (null == t || !t.length || !n) return e;
                            const r = e.filter((e) => !t.includes(e.id));
                            return 'remove' === n
                                ? r
                                : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
                        })(o, t, n);
                    },
                    vw(e.options, 'debugTable'),
                )));
        },
    },
    zw = {
        getInitialState: (e) => ({ columnPinning: { left: [], right: [] }, ...e }),
        getDefaultOptions: (e) => ({ onColumnPinningChange: pw('columnPinning', e) }),
        createColumn: (e, t) => {
            ((e.pin = (n) => {
                const r = e
                    .getLeafColumns()
                    .map((e) => e.id)
                    .filter(Boolean);
                t.setColumnPinning((e) => {
                    var t, o, i, a, l, u;
                    return 'right' === n
                        ? {
                              left: (null != (i = null == e ? void 0 : e.left) ? i : []).filter(
                                  (e) => !(null != r && r.includes(e)),
                              ),
                              right: [
                                  ...(null != (a = null == e ? void 0 : e.right) ? a : []).filter(
                                      (e) => !(null != r && r.includes(e)),
                                  ),
                                  ...r,
                              ],
                          }
                        : 'left' === n
                          ? {
                                left: [
                                    ...(null != (l = null == e ? void 0 : e.left) ? l : []).filter(
                                        (e) => !(null != r && r.includes(e)),
                                    ),
                                    ...r,
                                ],
                                right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter(
                                    (e) => !(null != r && r.includes(e)),
                                ),
                            }
                          : {
                                left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter(
                                    (e) => !(null != r && r.includes(e)),
                                ),
                                right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter(
                                    (e) => !(null != r && r.includes(e)),
                                ),
                            };
                });
            }),
                (e.getCanPin = () =>
                    e.getLeafColumns().some((e) => {
                        var n, r, o;
                        return (
                            (null == (n = e.columnDef.enablePinning) || n) &&
                            (null == (r = null != (o = t.options.enableColumnPinning) ? o : t.options.enablePinning) ||
                                r)
                        );
                    })),
                (e.getIsPinned = () => {
                    const n = e.getLeafColumns().map((e) => e.id),
                        { left: r, right: o } = t.getState().columnPinning,
                        i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                        a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                    return i ? 'left' : !!a && 'right';
                }),
                (e.getPinnedIndex = () => {
                    var n, r;
                    const o = e.getIsPinned();
                    return o
                        ? null !=
                          (n =
                              null == (r = t.getState().columnPinning) || null == (r = r[o]) ? void 0 : r.indexOf(e.id))
                            ? n
                            : -1
                        : 0;
                }));
        },
        createRow: (e, t) => {
            ((e.getCenterVisibleCells = gw(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right],
                (e, t, n) => {
                    const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !r.includes(e.column.id));
                },
                vw(t.options, 'debugRows'),
            )),
                (e.getLeftVisibleCells = gw(
                    () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                    (e, t) =>
                        (null != t ? t : [])
                            .map((t) => e.find((e) => e.column.id === t))
                            .filter(Boolean)
                            .map((e) => ({ ...e, position: 'left' })),
                    vw(t.options, 'debugRows'),
                )),
                (e.getRightVisibleCells = gw(
                    () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                    (e, t) =>
                        (null != t ? t : [])
                            .map((t) => e.find((e) => e.column.id === t))
                            .filter(Boolean)
                            .map((e) => ({ ...e, position: 'right' })),
                    vw(t.options, 'debugRows'),
                )));
        },
        createTable: (e) => {
            ((e.setColumnPinning = (t) =>
                null == e.options.onColumnPinningChange ? void 0 : e.options.onColumnPinningChange(t)),
                (e.resetColumnPinning = (t) => {
                    var n, r;
                    return e.setColumnPinning(
                        t
                            ? { left: [], right: [] }
                            : null != (n = null == (r = e.initialState) ? void 0 : r.columnPinning)
                              ? n
                              : { left: [], right: [] },
                    );
                }),
                (e.getIsSomeColumnsPinned = (t) => {
                    var n;
                    const r = e.getState().columnPinning;
                    var o, i;
                    return t
                        ? Boolean(null == (n = r[t]) ? void 0 : n.length)
                        : Boolean(
                              (null == (o = r.left) ? void 0 : o.length) || (null == (i = r.right) ? void 0 : i.length),
                          );
                }),
                (e.getLeftLeafColumns = gw(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                    vw(e.options, 'debugColumns'),
                )),
                (e.getRightLeafColumns = gw(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                    vw(e.options, 'debugColumns'),
                )),
                (e.getCenterLeafColumns = gw(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right],
                    (e, t, n) => {
                        const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                        return e.filter((e) => !r.includes(e.id));
                    },
                    vw(e.options, 'debugColumns'),
                )));
        },
    },
    Dw = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
    Bw = {
        getDefaultColumnDef: () => Dw,
        getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: {
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                isResizingColumn: !1,
                columnSizingStart: [],
            },
            ...e,
        }),
        getDefaultOptions: (e) => ({
            columnResizeMode: 'onEnd',
            columnResizeDirection: 'ltr',
            onColumnSizingChange: pw('columnSizing', e),
            onColumnSizingInfoChange: pw('columnSizingInfo', e),
        }),
        createColumn: (e, t) => {
            ((e.getSize = () => {
                var n, r, o;
                const i = t.getState().columnSizing[e.id];
                return Math.min(
                    Math.max(
                        null != (n = e.columnDef.minSize) ? n : Dw.minSize,
                        null != (r = null != i ? i : e.columnDef.size) ? r : Dw.size,
                    ),
                    null != (o = e.columnDef.maxSize) ? o : Dw.maxSize,
                );
            }),
                (e.getStart = gw(
                    (e) => [e, Gw(t, e), t.getState().columnSizing],
                    (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
                    vw(t.options, 'debugColumns'),
                )),
                (e.getAfter = gw(
                    (e) => [e, Gw(t, e), t.getState().columnSizing],
                    (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
                    vw(t.options, 'debugColumns'),
                )),
                (e.resetSize = () => {
                    t.setColumnSizing((t) => {
                        let { [e.id]: n, ...r } = t;
                        return r;
                    });
                }),
                (e.getCanResize = () => {
                    var n, r;
                    return (
                        (null == (n = e.columnDef.enableResizing) || n) &&
                        (null == (r = t.options.enableColumnResizing) || r)
                    );
                }),
                (e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id));
        },
        createHeader: (e, t) => {
            ((e.getSize = () => {
                let t = 0;
                const n = (e) => {
                    var r;
                    e.subHeaders.length ? e.subHeaders.forEach(n) : (t += null != (r = e.column.getSize()) ? r : 0);
                };
                return (n(e), t);
            }),
                (e.getStart = () => {
                    if (e.index > 0) {
                        const t = e.headerGroup.headers[e.index - 1];
                        return t.getStart() + t.getSize();
                    }
                    return 0;
                }),
                (e.getResizeHandler = (n) => {
                    const r = t.getColumn(e.column.id),
                        o = null == r ? void 0 : r.getCanResize();
                    return (i) => {
                        if (!r || !o) return;
                        if ((null == i.persist || i.persist(), Hw(i) && i.touches && i.touches.length > 1)) return;
                        const a = e.getSize(),
                            l = e
                                ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()])
                                : [[r.id, r.getSize()]],
                            u = Hw(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                            s = {},
                            c = (e, n) => {
                                'number' == typeof n &&
                                    (t.setColumnSizingInfo((e) => {
                                        var r, o;
                                        const i = 'rtl' === t.options.columnResizeDirection ? -1 : 1,
                                            a = (n - (null != (r = null == e ? void 0 : e.startOffset) ? r : 0)) * i,
                                            l = Math.max(
                                                a / (null != (o = null == e ? void 0 : e.startSize) ? o : 0),
                                                -0.999999,
                                            );
                                        return (
                                            e.columnSizingStart.forEach((e) => {
                                                let [t, n] = e;
                                                s[t] = Math.round(100 * Math.max(n + n * l, 0)) / 100;
                                            }),
                                            { ...e, deltaOffset: a, deltaPercentage: l }
                                        );
                                    }),
                                    ('onChange' !== t.options.columnResizeMode && 'end' !== e) ||
                                        t.setColumnSizing((e) => ({ ...e, ...s })));
                            },
                            d = (e) => c('move', e),
                            f = (e) => {
                                (c('end', e),
                                    t.setColumnSizingInfo((e) => ({
                                        ...e,
                                        isResizingColumn: !1,
                                        startOffset: null,
                                        startSize: null,
                                        deltaOffset: null,
                                        deltaPercentage: null,
                                        columnSizingStart: [],
                                    })));
                            },
                            p = n || 'undefined' != typeof document ? document : null,
                            h = {
                                moveHandler: (e) => d(e.clientX),
                                upHandler: (e) => {
                                    (null == p || p.removeEventListener('mousemove', h.moveHandler),
                                        null == p || p.removeEventListener('mouseup', h.upHandler),
                                        f(e.clientX));
                                },
                            },
                            g = {
                                moveHandler: (e) => (
                                    e.cancelable && (e.preventDefault(), e.stopPropagation()),
                                    d(e.touches[0].clientX),
                                    !1
                                ),
                                upHandler: (e) => {
                                    var t;
                                    (null == p || p.removeEventListener('touchmove', g.moveHandler),
                                        null == p || p.removeEventListener('touchend', g.upHandler),
                                        e.cancelable && (e.preventDefault(), e.stopPropagation()),
                                        f(null == (t = e.touches[0]) ? void 0 : t.clientX));
                                },
                            },
                            v = !!(function () {
                                if ('boolean' == typeof Uw) return Uw;
                                let e = !1;
                                try {
                                    const t = {
                                            get passive() {
                                                return ((e = !0), !1);
                                            },
                                        },
                                        n = () => {};
                                    (window.addEventListener('test', n, t), window.removeEventListener('test', n));
                                } catch (t) {
                                    e = !1;
                                }
                                return ((Uw = e), Uw);
                            })() && { passive: !1 };
                        (Hw(i)
                            ? (null == p || p.addEventListener('touchmove', g.moveHandler, v),
                              null == p || p.addEventListener('touchend', g.upHandler, v))
                            : (null == p || p.addEventListener('mousemove', h.moveHandler, v),
                              null == p || p.addEventListener('mouseup', h.upHandler, v)),
                            t.setColumnSizingInfo((e) => ({
                                ...e,
                                startOffset: u,
                                startSize: a,
                                deltaOffset: 0,
                                deltaPercentage: 0,
                                columnSizingStart: l,
                                isResizingColumn: r.id,
                            })));
                    };
                }));
        },
        createTable: (e) => {
            ((e.setColumnSizing = (t) =>
                null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t)),
                (e.setColumnSizingInfo = (t) =>
                    null == e.options.onColumnSizingInfoChange ? void 0 : e.options.onColumnSizingInfoChange(t)),
                (e.resetColumnSizing = (t) => {
                    var n;
                    e.setColumnSizing(t ? {} : null != (n = e.initialState.columnSizing) ? n : {});
                }),
                (e.resetHeaderSizeInfo = (t) => {
                    var n;
                    e.setColumnSizingInfo(
                        t
                            ? {
                                  startOffset: null,
                                  startSize: null,
                                  deltaOffset: null,
                                  deltaPercentage: null,
                                  isResizingColumn: !1,
                                  columnSizingStart: [],
                              }
                            : null != (n = e.initialState.columnSizingInfo)
                              ? n
                              : {
                                    startOffset: null,
                                    startSize: null,
                                    deltaOffset: null,
                                    deltaPercentage: null,
                                    isResizingColumn: !1,
                                    columnSizingStart: [],
                                },
                    );
                }),
                (e.getTotalSize = () => {
                    var t, n;
                    return null !=
                        (t =
                            null == (n = e.getHeaderGroups()[0])
                                ? void 0
                                : n.headers.reduce((e, t) => e + t.getSize(), 0))
                        ? t
                        : 0;
                }),
                (e.getLeftTotalSize = () => {
                    var t, n;
                    return null !=
                        (t =
                            null == (n = e.getLeftHeaderGroups()[0])
                                ? void 0
                                : n.headers.reduce((e, t) => e + t.getSize(), 0))
                        ? t
                        : 0;
                }),
                (e.getCenterTotalSize = () => {
                    var t, n;
                    return null !=
                        (t =
                            null == (n = e.getCenterHeaderGroups()[0])
                                ? void 0
                                : n.headers.reduce((e, t) => e + t.getSize(), 0))
                        ? t
                        : 0;
                }),
                (e.getRightTotalSize = () => {
                    var t, n;
                    return null !=
                        (t =
                            null == (n = e.getRightHeaderGroups()[0])
                                ? void 0
                                : n.headers.reduce((e, t) => e + t.getSize(), 0))
                        ? t
                        : 0;
                }));
        },
    };
let Uw = null;
function Hw(e) {
    return 'touchstart' === e.type;
}
function Gw(e, t) {
    return t
        ? 'center' === t
            ? e.getCenterVisibleLeafColumns()
            : 'left' === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
        : e.getVisibleLeafColumns();
}
const $w = {
        getInitialState: (e) => ({ rowSelection: {}, ...e }),
        getDefaultOptions: (e) => ({
            onRowSelectionChange: pw('rowSelection', e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
        }),
        createTable: (e) => {
            ((e.setRowSelection = (t) =>
                null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t)),
                (e.resetRowSelection = (t) => {
                    var n;
                    return e.setRowSelection(t ? {} : null != (n = e.initialState.rowSelection) ? n : {});
                }),
                (e.toggleAllRowsSelected = (t) => {
                    e.setRowSelection((n) => {
                        t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                        const r = { ...n },
                            o = e.getPreGroupedRowModel().flatRows;
                        return (
                            t
                                ? o.forEach((e) => {
                                      e.getCanSelect() && (r[e.id] = !0);
                                  })
                                : o.forEach((e) => {
                                      delete r[e.id];
                                  }),
                            r
                        );
                    });
                }),
                (e.toggleAllPageRowsSelected = (t) =>
                    e.setRowSelection((n) => {
                        const r = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                            o = { ...n };
                        return (
                            e.getRowModel().rows.forEach((t) => {
                                qw(o, t.id, r, !0, e);
                            }),
                            o
                        );
                    })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = gw(
                    () => [e.getState().rowSelection, e.getCoreRowModel()],
                    (t, n) => (Object.keys(t).length ? Ww(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    vw(e.options, 'debugTable'),
                )),
                (e.getFilteredSelectedRowModel = gw(
                    () => [e.getState().rowSelection, e.getFilteredRowModel()],
                    (t, n) => (Object.keys(t).length ? Ww(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    vw(e.options, 'debugTable'),
                )),
                (e.getGroupedSelectedRowModel = gw(
                    () => [e.getState().rowSelection, e.getSortedRowModel()],
                    (t, n) => (Object.keys(t).length ? Ww(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    vw(e.options, 'debugTable'),
                )),
                (e.getIsAllRowsSelected = () => {
                    const t = e.getFilteredRowModel().flatRows,
                        { rowSelection: n } = e.getState();
                    let r = Boolean(t.length && Object.keys(n).length);
                    return (r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r);
                }),
                (e.getIsAllPageRowsSelected = () => {
                    const t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()),
                        { rowSelection: n } = e.getState();
                    let r = !!t.length;
                    return (r && t.some((e) => !n[e.id]) && (r = !1), r);
                }),
                (e.getIsSomeRowsSelected = () => {
                    var t;
                    const n = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                    return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                }),
                (e.getIsSomePageRowsSelected = () => {
                    const t = e.getPaginationRowModel().flatRows;
                    return (
                        !e.getIsAllPageRowsSelected() &&
                        t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected())
                    );
                }),
                (e.getToggleAllRowsSelectedHandler = () => (t) => {
                    e.toggleAllRowsSelected(t.target.checked);
                }),
                (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                    e.toggleAllPageRowsSelected(t.target.checked);
                }));
        },
        createRow: (e, t) => {
            ((e.toggleSelected = (n, r) => {
                const o = e.getIsSelected();
                t.setRowSelection((i) => {
                    var a;
                    if (((n = void 0 !== n ? n : !o), e.getCanSelect() && o === n)) return i;
                    const l = { ...i };
                    return (qw(l, e.id, n, null == (a = null == r ? void 0 : r.selectChildren) || a, t), l);
                });
            }),
                (e.getIsSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return Kw(e, n);
                }),
                (e.getIsSomeSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return 'some' === Qw(e, n);
                }),
                (e.getIsAllSubRowsSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return 'all' === Qw(e, n);
                }),
                (e.getCanSelect = () => {
                    var n;
                    return 'function' == typeof t.options.enableRowSelection
                        ? t.options.enableRowSelection(e)
                        : null == (n = t.options.enableRowSelection) || n;
                }),
                (e.getCanSelectSubRows = () => {
                    var n;
                    return 'function' == typeof t.options.enableSubRowSelection
                        ? t.options.enableSubRowSelection(e)
                        : null == (n = t.options.enableSubRowSelection) || n;
                }),
                (e.getCanMultiSelect = () => {
                    var n;
                    return 'function' == typeof t.options.enableMultiRowSelection
                        ? t.options.enableMultiRowSelection(e)
                        : null == (n = t.options.enableMultiRowSelection) || n;
                }),
                (e.getToggleSelectedHandler = () => {
                    const t = e.getCanSelect();
                    return (n) => {
                        var r;
                        t && e.toggleSelected(null == (r = n.target) ? void 0 : r.checked);
                    };
                }));
        },
    },
    qw = (e, t, n, r, o) => {
        var i;
        const a = o.getRow(t, !0);
        (n
            ? (a.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), a.getCanSelect() && (e[t] = !0))
            : delete e[t],
            r &&
                null != (i = a.subRows) &&
                i.length &&
                a.getCanSelectSubRows() &&
                a.subRows.forEach((t) => qw(e, t.id, n, r, o)));
    };
function Ww(e, t) {
    const n = e.getState().rowSelection,
        r = [],
        o = {},
        i = function (e, t) {
            return e
                .map((e) => {
                    var t;
                    const a = Kw(e, n);
                    if (
                        (a && (r.push(e), (o[e.id] = e)),
                        null != (t = e.subRows) && t.length && (e = { ...e, subRows: i(e.subRows) }),
                        a)
                    )
                        return e;
                })
                .filter(Boolean);
        };
    return { rows: i(t.rows), flatRows: r, rowsById: o };
}
function Kw(e, t) {
    var n;
    return null != (n = t[e.id]) && n;
}
function Qw(e, t, n) {
    var r;
    if (null == (r = e.subRows) || !r.length) return !1;
    let o = !0,
        i = !1;
    return (
        e.subRows.forEach((e) => {
            if ((!i || o) && (e.getCanSelect() && (Kw(e, t) ? (i = !0) : (o = !1)), e.subRows && e.subRows.length)) {
                const n = Qw(e, t);
                'all' === n ? (i = !0) : 'some' === n ? ((i = !0), (o = !1)) : (o = !1);
            }
        }),
        o ? 'all' : !!i && 'some'
    );
}
const Xw = /([0-9]+)/gm;
function Yw(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
}
function Zw(e) {
    return 'number' == typeof e
        ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ''
            : String(e)
        : 'string' == typeof e
          ? e
          : '';
}
function Jw(e, t) {
    const n = e.split(Xw).filter(Boolean),
        r = t.split(Xw).filter(Boolean);
    for (; n.length && r.length; ) {
        const e = n.shift(),
            t = r.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            a = [o, i].sort();
        if (isNaN(a[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
        } else {
            if (isNaN(a[1])) return isNaN(o) ? -1 : 1;
            if (o > i) return 1;
            if (i > o) return -1;
        }
    }
    return n.length - r.length;
}
const eS = {
        alphanumeric: (e, t, n) => Jw(Zw(e.getValue(n)).toLowerCase(), Zw(t.getValue(n)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, n) => Jw(Zw(e.getValue(n)), Zw(t.getValue(n))),
        text: (e, t, n) => Yw(Zw(e.getValue(n)).toLowerCase(), Zw(t.getValue(n)).toLowerCase()),
        textCaseSensitive: (e, t, n) => Yw(Zw(e.getValue(n)), Zw(t.getValue(n))),
        datetime: (e, t, n) => {
            const r = e.getValue(n),
                o = t.getValue(n);
            return r > o ? 1 : r < o ? -1 : 0;
        },
        basic: (e, t, n) => Yw(e.getValue(n), t.getValue(n)),
    },
    tS = [
        yw,
        {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({ onColumnVisibilityChange: pw('columnVisibility', e) }),
            createColumn: (e, t) => {
                ((e.toggleVisibility = (n) => {
                    e.getCanHide() &&
                        t.setColumnVisibility((t) => ({ ...t, [e.id]: null != n ? n : !e.getIsVisible() }));
                }),
                    (e.getIsVisible = () => {
                        var n, r;
                        const o = e.columns;
                        return (
                            null ==
                                (n = o.length
                                    ? o.some((e) => e.getIsVisible())
                                    : null == (r = t.getState().columnVisibility)
                                      ? void 0
                                      : r[e.id]) || n
                        );
                    }),
                    (e.getCanHide = () => {
                        var n, r;
                        return (
                            (null == (n = e.columnDef.enableHiding) || n) && (null == (r = t.options.enableHiding) || r)
                        );
                    }),
                    (e.getToggleVisibilityHandler = () => (t) => {
                        null == e.toggleVisibility || e.toggleVisibility(t.target.checked);
                    }));
            },
            createRow: (e, t) => {
                ((e._getAllVisibleCells = gw(
                    () => [e.getAllCells(), t.getState().columnVisibility],
                    (e) => e.filter((e) => e.column.getIsVisible()),
                    vw(t.options, 'debugRows'),
                )),
                    (e.getVisibleCells = gw(
                        () => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()],
                        (e, t, n) => [...e, ...t, ...n],
                        vw(t.options, 'debugRows'),
                    )));
            },
            createTable: (e) => {
                const t = (t, n) =>
                    gw(
                        () => [
                            n(),
                            n()
                                .filter((e) => e.getIsVisible())
                                .map((e) => e.id)
                                .join('_'),
                        ],
                        (e) => e.filter((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible())),
                        vw(e.options, 'debugColumns'),
                    );
                ((e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
                    (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
                    (e.getLeftVisibleLeafColumns = t(0, () => e.getLeftLeafColumns())),
                    (e.getRightVisibleLeafColumns = t(0, () => e.getRightLeafColumns())),
                    (e.getCenterVisibleLeafColumns = t(0, () => e.getCenterLeafColumns())),
                    (e.setColumnVisibility = (t) =>
                        null == e.options.onColumnVisibilityChange ? void 0 : e.options.onColumnVisibilityChange(t)),
                    (e.resetColumnVisibility = (t) => {
                        var n;
                        e.setColumnVisibility(t ? {} : null != (n = e.initialState.columnVisibility) ? n : {});
                    }),
                    (e.toggleAllColumnsVisible = (t) => {
                        var n;
                        ((t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                            e.setColumnVisibility(
                                e
                                    .getAllLeafColumns()
                                    .reduce(
                                        (e, n) => ({ ...e, [n.id]: t || !(null != n.getCanHide && n.getCanHide()) }),
                                        {},
                                    ),
                            ));
                    }),
                    (e.getIsAllColumnsVisible = () =>
                        !e.getAllLeafColumns().some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
                    (e.getIsSomeColumnsVisible = () =>
                        e.getAllLeafColumns().some((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible()))),
                    (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                        var n;
                        e.toggleAllColumnsVisible(null == (n = t.target) ? void 0 : n.checked);
                    }));
            },
        },
        Lw,
        zw,
        Sw,
        jw,
        {
            createTable: (e) => {
                ((e._getGlobalFacetedRowModel =
                    e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, '__global__')),
                    (e.getGlobalFacetedRowModel = () =>
                        e.options.manualFiltering || !e._getGlobalFacetedRowModel
                            ? e.getPreFilteredRowModel()
                            : e._getGlobalFacetedRowModel()),
                    (e._getGlobalFacetedUniqueValues =
                        e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, '__global__')),
                    (e.getGlobalFacetedUniqueValues = () =>
                        e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map()),
                    (e._getGlobalFacetedMinMaxValues =
                        e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, '__global__')),
                    (e.getGlobalFacetedMinMaxValues = () => {
                        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
                    }));
            },
        },
        {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
                onGlobalFilterChange: pw('globalFilter', e),
                globalFilterFn: 'auto',
                getColumnCanGlobalFilter: (t) => {
                    var n;
                    const r =
                        null == (n = e.getCoreRowModel().flatRows[0]) || null == (n = n._getAllCellsByColumnId()[t.id])
                            ? void 0
                            : n.getValue();
                    return 'string' == typeof r || 'number' == typeof r;
                },
            }),
            createColumn: (e, t) => {
                e.getCanGlobalFilter = () => {
                    var n, r, o, i;
                    return (
                        (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                        (null == (r = t.options.enableGlobalFilter) || r) &&
                        (null == (o = t.options.enableFilters) || o) &&
                        (null ==
                            (i =
                                null == t.options.getColumnCanGlobalFilter
                                    ? void 0
                                    : t.options.getColumnCanGlobalFilter(e)) ||
                            i) &&
                        !!e.accessorFn
                    );
                };
            },
            createTable: (e) => {
                ((e.getGlobalAutoFilterFn = () => Mw.includesString),
                    (e.getGlobalFilterFn = () => {
                        var t, n;
                        const { globalFilterFn: r } = e.options;
                        return hw(r)
                            ? r
                            : 'auto' === r
                              ? e.getGlobalAutoFilterFn()
                              : null != (t = null == (n = e.options.filterFns) ? void 0 : n[r])
                                ? t
                                : Mw[r];
                    }),
                    (e.setGlobalFilter = (t) => {
                        null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t);
                    }),
                    (e.resetGlobalFilter = (t) => {
                        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                    }));
            },
        },
        {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({ sortingFn: 'auto', sortUndefined: 1 }),
            getDefaultOptions: (e) => ({ onSortingChange: pw('sorting', e), isMultiSortEvent: (e) => e.shiftKey }),
            createColumn: (e, t) => {
                ((e.getAutoSortingFn = () => {
                    const n = t.getFilteredRowModel().flatRows.slice(10);
                    let r = !1;
                    for (const t of n) {
                        const n = null == t ? void 0 : t.getValue(e.id);
                        if ('[object Date]' === Object.prototype.toString.call(n)) return eS.datetime;
                        if ('string' == typeof n && ((r = !0), n.split(Xw).length > 1)) return eS.alphanumeric;
                    }
                    return r ? eS.text : eS.basic;
                }),
                    (e.getAutoSortDir = () => {
                        const n = t.getFilteredRowModel().flatRows[0];
                        return 'string' == typeof (null == n ? void 0 : n.getValue(e.id)) ? 'asc' : 'desc';
                    }),
                    (e.getSortingFn = () => {
                        var n, r;
                        if (!e) throw new Error();
                        return hw(e.columnDef.sortingFn)
                            ? e.columnDef.sortingFn
                            : 'auto' === e.columnDef.sortingFn
                              ? e.getAutoSortingFn()
                              : null != (n = null == (r = t.options.sortingFns) ? void 0 : r[e.columnDef.sortingFn])
                                ? n
                                : eS[e.columnDef.sortingFn];
                    }),
                    (e.toggleSorting = (n, r) => {
                        const o = e.getNextSortingOrder(),
                            i = null != n;
                        t.setSorting((a) => {
                            const l = null == a ? void 0 : a.find((t) => t.id === e.id),
                                u = null == a ? void 0 : a.findIndex((t) => t.id === e.id);
                            let s,
                                c = [],
                                d = i ? n : 'desc' === o;
                            var f;
                            ((s =
                                null != a && a.length && e.getCanMultiSort() && r
                                    ? l
                                        ? 'toggle'
                                        : 'add'
                                    : null != a && a.length && u !== a.length - 1
                                      ? 'replace'
                                      : l
                                        ? 'toggle'
                                        : 'replace'),
                            'toggle' === s && (i || o || (s = 'remove')),
                            'add' === s)
                                ? ((c = [...a, { id: e.id, desc: d }]),
                                  c.splice(
                                      0,
                                      c.length -
                                          (null != (f = t.options.maxMultiSortColCount) ? f : Number.MAX_SAFE_INTEGER),
                                  ))
                                : (c =
                                      'toggle' === s
                                          ? a.map((t) => (t.id === e.id ? { ...t, desc: d } : t))
                                          : 'remove' === s
                                            ? a.filter((t) => t.id !== e.id)
                                            : [{ id: e.id, desc: d }]);
                            return c;
                        });
                    }),
                    (e.getFirstSortDir = () => {
                        var n, r;
                        return (
                            null != (n = null != (r = e.columnDef.sortDescFirst) ? r : t.options.sortDescFirst)
                                ? n
                                : 'desc' === e.getAutoSortDir()
                        )
                            ? 'desc'
                            : 'asc';
                    }),
                    (e.getNextSortingOrder = (n) => {
                        var r, o;
                        const i = e.getFirstSortDir(),
                            a = e.getIsSorted();
                        return a
                            ? !!(
                                  a === i ||
                                  (null != (r = t.options.enableSortingRemoval) && !r) ||
                                  (n && null != (o = t.options.enableMultiRemove) && !o)
                              ) && ('desc' === a ? 'asc' : 'desc')
                            : i;
                    }),
                    (e.getCanSort = () => {
                        var n, r;
                        return (
                            (null == (n = e.columnDef.enableSorting) || n) &&
                            (null == (r = t.options.enableSorting) || r) &&
                            !!e.accessorFn
                        );
                    }),
                    (e.getCanMultiSort = () => {
                        var n, r;
                        return null != (n = null != (r = e.columnDef.enableMultiSort) ? r : t.options.enableMultiSort)
                            ? n
                            : !!e.accessorFn;
                    }),
                    (e.getIsSorted = () => {
                        var n;
                        const r = null == (n = t.getState().sorting) ? void 0 : n.find((t) => t.id === e.id);
                        return !!r && (r.desc ? 'desc' : 'asc');
                    }),
                    (e.getSortIndex = () => {
                        var n, r;
                        return null !=
                            (n = null == (r = t.getState().sorting) ? void 0 : r.findIndex((t) => t.id === e.id))
                            ? n
                            : -1;
                    }),
                    (e.clearSorting = () => {
                        t.setSorting((t) => (null != t && t.length ? t.filter((t) => t.id !== e.id) : []));
                    }),
                    (e.getToggleSortingHandler = () => {
                        const n = e.getCanSort();
                        return (r) => {
                            n &&
                                (null == r.persist || r.persist(),
                                null == e.toggleSorting ||
                                    e.toggleSorting(
                                        void 0,
                                        !!e.getCanMultiSort() &&
                                            (null == t.options.isMultiSortEvent
                                                ? void 0
                                                : t.options.isMultiSortEvent(r)),
                                    ));
                        };
                    }));
            },
            createTable: (e) => {
                ((e.setSorting = (t) => (null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t))),
                    (e.resetSorting = (t) => {
                        var n, r;
                        e.setSorting(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.sorting) ? n : []);
                    }),
                    (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                    (e.getSortedRowModel = () => (
                        !e._getSortedRowModel &&
                            e.options.getSortedRowModel &&
                            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                        e.options.manualSorting || !e._getSortedRowModel
                            ? e.getPreSortedRowModel()
                            : e._getSortedRowModel()
                    )));
            },
        },
        Nw,
        {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({ onExpandedChange: pw('expanded', e), paginateExpandedRows: !0 }),
            createTable: (e) => {
                let t = !1,
                    n = !1;
                ((e._autoResetExpanded = () => {
                    var r, o;
                    if (t) {
                        if (
                            null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded)
                                ? r
                                : !e.options.manualExpanding
                        ) {
                            if (n) return;
                            ((n = !0),
                                e._queue(() => {
                                    (e.resetExpanded(), (n = !1));
                                }));
                        }
                    } else
                        e._queue(() => {
                            t = !0;
                        });
                }),
                    (e.setExpanded = (t) =>
                        null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t)),
                    (e.toggleAllRowsExpanded = (t) => {
                        (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0) : e.setExpanded({});
                    }),
                    (e.resetExpanded = (t) => {
                        var n, r;
                        e.setExpanded(
                            t ? {} : null != (n = null == (r = e.initialState) ? void 0 : r.expanded) ? n : {},
                        );
                    }),
                    (e.getCanSomeRowsExpand = () =>
                        e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand())),
                    (e.getToggleAllRowsExpandedHandler = () => (t) => {
                        (null == t.persist || t.persist(), e.toggleAllRowsExpanded());
                    }),
                    (e.getIsSomeRowsExpanded = () => {
                        const t = e.getState().expanded;
                        return !0 === t || Object.values(t).some(Boolean);
                    }),
                    (e.getIsAllRowsExpanded = () => {
                        const t = e.getState().expanded;
                        return 'boolean' == typeof t
                            ? !0 === t
                            : !!Object.keys(t).length && !e.getRowModel().flatRows.some((e) => !e.getIsExpanded());
                    }),
                    (e.getExpandedDepth = () => {
                        let t = 0;
                        return (
                            (!0 === e.getState().expanded
                                ? Object.keys(e.getRowModel().rowsById)
                                : Object.keys(e.getState().expanded)
                            ).forEach((e) => {
                                const n = e.split('.');
                                t = Math.max(t, n.length);
                            }),
                            t
                        );
                    }),
                    (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                    (e.getExpandedRowModel = () => (
                        !e._getExpandedRowModel &&
                            e.options.getExpandedRowModel &&
                            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                        e.options.manualExpanding || !e._getExpandedRowModel
                            ? e.getPreExpandedRowModel()
                            : e._getExpandedRowModel()
                    )));
            },
            createRow: (e, t) => {
                ((e.toggleExpanded = (n) => {
                    t.setExpanded((r) => {
                        var o;
                        const i = !0 === r || !(null == r || !r[e.id]);
                        let a = {};
                        if (
                            (!0 === r
                                ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                                      a[e] = !0;
                                  })
                                : (a = r),
                            (n = null != (o = n) ? o : !i),
                            !i && n)
                        )
                            return { ...a, [e.id]: !0 };
                        if (i && !n) {
                            const { [e.id]: t, ...n } = a;
                            return n;
                        }
                        return r;
                    });
                }),
                    (e.getIsExpanded = () => {
                        var n;
                        const r = t.getState().expanded;
                        return !!(null !=
                        (n = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e))
                            ? n
                            : !0 === r || (null == r ? void 0 : r[e.id]));
                    }),
                    (e.getCanExpand = () => {
                        var n, r, o;
                        return null != (n = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e))
                            ? n
                            : (null == (r = t.options.enableExpanding) || r) && !(null == (o = e.subRows) || !o.length);
                    }),
                    (e.getIsAllParentsExpanded = () => {
                        let n = !0,
                            r = e;
                        for (; n && r.parentId; ) ((r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded()));
                        return n;
                    }),
                    (e.getToggleExpandedHandler = () => {
                        const t = e.getCanExpand();
                        return () => {
                            t && e.toggleExpanded();
                        };
                    }));
            },
        },
        {
            getInitialState: (e) => ({
                ...e,
                pagination: { pageIndex: 0, pageSize: 10, ...(null == e ? void 0 : e.pagination) },
            }),
            getDefaultOptions: (e) => ({ onPaginationChange: pw('pagination', e) }),
            createTable: (e) => {
                let t = !1,
                    n = !1;
                ((e._autoResetPageIndex = () => {
                    var r, o;
                    if (t) {
                        if (
                            null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex)
                                ? r
                                : !e.options.manualPagination
                        ) {
                            if (n) return;
                            ((n = !0),
                                e._queue(() => {
                                    (e.resetPageIndex(), (n = !1));
                                }));
                        }
                    } else
                        e._queue(() => {
                            t = !0;
                        });
                }),
                    (e.setPagination = (t) =>
                        null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange((e) => fw(t, e))),
                    (e.resetPagination = (t) => {
                        var n;
                        e.setPagination(
                            t
                                ? { pageIndex: 0, pageSize: 10 }
                                : null != (n = e.initialState.pagination)
                                  ? n
                                  : { pageIndex: 0, pageSize: 10 },
                        );
                    }),
                    (e.setPageIndex = (t) => {
                        e.setPagination((n) => {
                            let r = fw(t, n.pageIndex);
                            const o =
                                void 0 === e.options.pageCount || -1 === e.options.pageCount
                                    ? Number.MAX_SAFE_INTEGER
                                    : e.options.pageCount - 1;
                            return ((r = Math.max(0, Math.min(r, o))), { ...n, pageIndex: r });
                        });
                    }),
                    (e.resetPageIndex = (t) => {
                        var n, r;
                        e.setPageIndex(
                            t
                                ? 0
                                : null !=
                                    (n =
                                        null == (r = e.initialState) || null == (r = r.pagination)
                                            ? void 0
                                            : r.pageIndex)
                                  ? n
                                  : 0,
                        );
                    }),
                    (e.resetPageSize = (t) => {
                        var n, r;
                        e.setPageSize(
                            t
                                ? 10
                                : null !=
                                    (n =
                                        null == (r = e.initialState) || null == (r = r.pagination)
                                            ? void 0
                                            : r.pageSize)
                                  ? n
                                  : 10,
                        );
                    }),
                    (e.setPageSize = (t) => {
                        e.setPagination((e) => {
                            const n = Math.max(1, fw(t, e.pageSize)),
                                r = e.pageSize * e.pageIndex,
                                o = Math.floor(r / n);
                            return { ...e, pageIndex: o, pageSize: n };
                        });
                    }),
                    (e.setPageCount = (t) =>
                        e.setPagination((n) => {
                            var r;
                            let o = fw(t, null != (r = e.options.pageCount) ? r : -1);
                            return ('number' == typeof o && (o = Math.max(-1, o)), { ...n, pageCount: o });
                        })),
                    (e.getPageOptions = gw(
                        () => [e.getPageCount()],
                        (e) => {
                            let t = [];
                            return (e && e > 0 && (t = [...new Array(e)].fill(null).map((e, t) => t)), t);
                        },
                        vw(e.options, 'debugTable'),
                    )),
                    (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
                    (e.getCanNextPage = () => {
                        const { pageIndex: t } = e.getState().pagination,
                            n = e.getPageCount();
                        return -1 === n || (0 !== n && t < n - 1);
                    }),
                    (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                    (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                    (e.firstPage = () => e.setPageIndex(0)),
                    (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                    (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                    (e.getPaginationRowModel = () => (
                        !e._getPaginationRowModel &&
                            e.options.getPaginationRowModel &&
                            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
                        e.options.manualPagination || !e._getPaginationRowModel
                            ? e.getPrePaginationRowModel()
                            : e._getPaginationRowModel()
                    )),
                    (e.getPageCount = () => {
                        var t;
                        return null != (t = e.options.pageCount)
                            ? t
                            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
                    }),
                    (e.getRowCount = () => {
                        var t;
                        return null != (t = e.options.rowCount) ? t : e.getPrePaginationRowModel().rows.length;
                    }));
            },
        },
        {
            getInitialState: (e) => ({ rowPinning: { top: [], bottom: [] }, ...e }),
            getDefaultOptions: (e) => ({ onRowPinningChange: pw('rowPinning', e) }),
            createRow: (e, t) => {
                ((e.pin = (n, r, o) => {
                    const i = r
                            ? e.getLeafRows().map((e) => {
                                  let { id: t } = e;
                                  return t;
                              })
                            : [],
                        a = o
                            ? e.getParentRows().map((e) => {
                                  let { id: t } = e;
                                  return t;
                              })
                            : [],
                        l = new Set([...a, e.id, ...i]);
                    t.setRowPinning((e) => {
                        var t, r, o, i, a, u;
                        return 'bottom' === n
                            ? {
                                  top: (null != (o = null == e ? void 0 : e.top) ? o : []).filter(
                                      (e) => !(null != l && l.has(e)),
                                  ),
                                  bottom: [
                                      ...(null != (i = null == e ? void 0 : e.bottom) ? i : []).filter(
                                          (e) => !(null != l && l.has(e)),
                                      ),
                                      ...Array.from(l),
                                  ],
                              }
                            : 'top' === n
                              ? {
                                    top: [
                                        ...(null != (a = null == e ? void 0 : e.top) ? a : []).filter(
                                            (e) => !(null != l && l.has(e)),
                                        ),
                                        ...Array.from(l),
                                    ],
                                    bottom: (null != (u = null == e ? void 0 : e.bottom) ? u : []).filter(
                                        (e) => !(null != l && l.has(e)),
                                    ),
                                }
                              : {
                                    top: (null != (t = null == e ? void 0 : e.top) ? t : []).filter(
                                        (e) => !(null != l && l.has(e)),
                                    ),
                                    bottom: (null != (r = null == e ? void 0 : e.bottom) ? r : []).filter(
                                        (e) => !(null != l && l.has(e)),
                                    ),
                                };
                    });
                }),
                    (e.getCanPin = () => {
                        var n;
                        const { enableRowPinning: r, enablePinning: o } = t.options;
                        return 'function' == typeof r ? r(e) : null == (n = null != r ? r : o) || n;
                    }),
                    (e.getIsPinned = () => {
                        const n = [e.id],
                            { top: r, bottom: o } = t.getState().rowPinning,
                            i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                            a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                        return i ? 'top' : !!a && 'bottom';
                    }),
                    (e.getPinnedIndex = () => {
                        var n, r;
                        const o = e.getIsPinned();
                        if (!o) return -1;
                        const i =
                            null == (n = 'top' === o ? t.getTopRows() : t.getBottomRows())
                                ? void 0
                                : n.map((e) => {
                                      let { id: t } = e;
                                      return t;
                                  });
                        return null != (r = null == i ? void 0 : i.indexOf(e.id)) ? r : -1;
                    }));
            },
            createTable: (e) => {
                ((e.setRowPinning = (t) =>
                    null == e.options.onRowPinningChange ? void 0 : e.options.onRowPinningChange(t)),
                    (e.resetRowPinning = (t) => {
                        var n, r;
                        return e.setRowPinning(
                            t
                                ? { top: [], bottom: [] }
                                : null != (n = null == (r = e.initialState) ? void 0 : r.rowPinning)
                                  ? n
                                  : { top: [], bottom: [] },
                        );
                    }),
                    (e.getIsSomeRowsPinned = (t) => {
                        var n;
                        const r = e.getState().rowPinning;
                        var o, i;
                        return t
                            ? Boolean(null == (n = r[t]) ? void 0 : n.length)
                            : Boolean(
                                  (null == (o = r.top) ? void 0 : o.length) ||
                                  (null == (i = r.bottom) ? void 0 : i.length),
                              );
                    }),
                    (e._getPinnedRows = (t, n, r) => {
                        var o;
                        return (
                            null == (o = e.options.keepPinnedRows) || o
                                ? (null != n ? n : []).map((t) => {
                                      const n = e.getRow(t, !0);
                                      return n.getIsAllParentsExpanded() ? n : null;
                                  })
                                : (null != n ? n : []).map((e) => t.find((t) => t.id === e))
                        )
                            .filter(Boolean)
                            .map((e) => ({ ...e, position: r }));
                    }),
                    (e.getTopRows = gw(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top],
                        (t, n) => e._getPinnedRows(t, n, 'top'),
                        vw(e.options, 'debugRows'),
                    )),
                    (e.getBottomRows = gw(
                        () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                        (t, n) => e._getPinnedRows(t, n, 'bottom'),
                        vw(e.options, 'debugRows'),
                    )),
                    (e.getCenterRows = gw(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom],
                        (e, t, n) => {
                            const r = new Set([...(null != t ? t : []), ...(null != n ? n : [])]);
                            return e.filter((e) => !r.has(e.id));
                        },
                        vw(e.options, 'debugRows'),
                    )));
            },
        },
        $w,
        Bw,
    ];
function nS(e) {
    var t, n;
    const r = [...tS, ...(null != (t = e._features) ? t : [])];
    let o = { _features: r };
    const i = o._features.reduce(
        (e, t) => Object.assign(e, null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(o)),
        {},
    );
    let a = { ...(null != (n = e.initialState) ? n : {}) };
    o._features.forEach((e) => {
        var t;
        a = null != (t = null == e.getInitialState ? void 0 : e.getInitialState(a)) ? t : a;
    });
    const l = [];
    let u = !1;
    const s = {
        _features: r,
        options: { ...i, ...e },
        initialState: a,
        _queue: (e) => {
            (l.push(e),
                u ||
                    ((u = !0),
                    Promise.resolve()
                        .then(() => {
                            for (; l.length; ) l.shift()();
                            u = !1;
                        })
                        .catch((e) =>
                            setTimeout(() => {
                                throw e;
                            }),
                        )));
        },
        reset: () => {
            o.setState(o.initialState);
        },
        setOptions: (e) => {
            const t = fw(e, o.options);
            var n;
            o.options = ((n = t), o.options.mergeOptions ? o.options.mergeOptions(i, n) : { ...i, ...n });
        },
        getState: () => o.options.state,
        setState: (e) => {
            null == o.options.onStateChange || o.options.onStateChange(e);
        },
        _getRowId: (e, t, n) => {
            var r;
            return null != (r = null == o.options.getRowId ? void 0 : o.options.getRowId(e, t, n))
                ? r
                : `${n ? [n.id, t].join('.') : t}`;
        },
        getCoreRowModel: () => (
            o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)),
            o._getCoreRowModel()
        ),
        getRowModel: () => o.getPaginationRowModel(),
        getRow: (e, t) => {
            let n = (t ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[e];
            if (!n && ((n = o.getCoreRowModel().rowsById[e]), !n)) throw new Error();
            return n;
        },
        _getDefaultColumnDef: gw(
            () => [o.options.defaultColumn],
            (e) => {
                var t;
                return (
                    (e = null != (t = e) ? t : {}),
                    {
                        header: (e) => {
                            const t = e.header.column.columnDef;
                            return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
                        },
                        cell: (e) => {
                            var t, n;
                            return null !=
                                (t = null == (n = e.renderValue()) || null == n.toString ? void 0 : n.toString())
                                ? t
                                : null;
                        },
                        ...o._features.reduce(
                            (e, t) =>
                                Object.assign(e, null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef()),
                            {},
                        ),
                        ...e,
                    }
                );
            },
            vw(e, 'debugColumns'),
        ),
        _getColumnDefs: () => o.options.columns,
        getAllColumns: gw(
            () => [o._getColumnDefs()],
            (e) => {
                const t = function (e, n, r) {
                    return (
                        void 0 === r && (r = 0),
                        e.map((e) => {
                            const i = (function (e, t, n, r) {
                                    var o, i;
                                    const a = { ...e._getDefaultColumnDef(), ...t },
                                        l = a.accessorKey;
                                    let u,
                                        s =
                                            null !=
                                            (o =
                                                null != (i = a.id)
                                                    ? i
                                                    : l
                                                      ? 'function' == typeof String.prototype.replaceAll
                                                          ? l.replaceAll('.', '_')
                                                          : l.replace(/\./g, '_')
                                                      : void 0)
                                                ? o
                                                : 'string' == typeof a.header
                                                  ? a.header
                                                  : void 0;
                                    if (
                                        (a.accessorFn
                                            ? (u = a.accessorFn)
                                            : l &&
                                              (u = l.includes('.')
                                                  ? (e) => {
                                                        let t = e;
                                                        for (const r of l.split('.')) {
                                                            var n;
                                                            t = null == (n = t) ? void 0 : n[r];
                                                        }
                                                        return t;
                                                    }
                                                  : (e) => e[a.accessorKey]),
                                        !s)
                                    )
                                        throw new Error();
                                    let c = {
                                        id: `${String(s)}`,
                                        accessorFn: u,
                                        parent: r,
                                        depth: n,
                                        columnDef: a,
                                        columns: [],
                                        getFlatColumns: gw(
                                            () => [!0],
                                            () => {
                                                var e;
                                                return [
                                                    c,
                                                    ...(null == (e = c.columns)
                                                        ? void 0
                                                        : e.flatMap((e) => e.getFlatColumns())),
                                                ];
                                            },
                                            vw(e.options, 'debugColumns'),
                                        ),
                                        getLeafColumns: gw(
                                            () => [e._getOrderColumnsFn()],
                                            (e) => {
                                                var t;
                                                return null != (t = c.columns) && t.length
                                                    ? e(c.columns.flatMap((e) => e.getLeafColumns()))
                                                    : [c];
                                            },
                                            vw(e.options, 'debugColumns'),
                                        ),
                                    };
                                    for (const d of e._features) null == d.createColumn || d.createColumn(c, e);
                                    return c;
                                })(o, e, r, n),
                                a = e;
                            return ((i.columns = a.columns ? t(a.columns, i, r + 1) : []), i);
                        })
                    );
                };
                return t(e);
            },
            vw(e, 'debugColumns'),
        ),
        getAllFlatColumns: gw(
            () => [o.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            vw(e, 'debugColumns'),
        ),
        _getAllFlatColumnsById: gw(
            () => [o.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            vw(e, 'debugColumns'),
        ),
        getAllLeafColumns: gw(
            () => [o.getAllColumns(), o._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            vw(e, 'debugColumns'),
        ),
        getColumn: (e) => o._getAllFlatColumnsById()[e],
    };
    Object.assign(o, s);
    for (let c = 0; c < o._features.length; c++) {
        const e = o._features[c];
        null == e || null == e.createTable || e.createTable(o);
    }
    return o;
}
function rS() {
    return (e) =>
        gw(
            () => [e.options.data],
            (t) => {
                const n = { rows: [], flatRows: [], rowsById: {} },
                    r = function (t, o, i) {
                        void 0 === o && (o = 0);
                        const a = [];
                        for (let u = 0; u < t.length; u++) {
                            const s = ww(e, e._getRowId(t[u], u, i), t[u], u, o, 0, null == i ? void 0 : i.id);
                            var l;
                            if ((n.flatRows.push(s), (n.rowsById[s.id] = s), a.push(s), e.options.getSubRows))
                                ((s.originalSubRows = e.options.getSubRows(t[u], u)),
                                    null != (l = s.originalSubRows) &&
                                        l.length &&
                                        (s.subRows = r(s.originalSubRows, o + 1, s)));
                        }
                        return a;
                    };
                return ((n.rows = r(t)), n);
            },
            vw(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
        );
}
function oS(e) {
    return (e) =>
        gw(
            () => [
                e.getState().pagination,
                e.getPrePaginationRowModel(),
                e.options.paginateExpandedRows ? void 0 : e.getState().expanded,
            ],
            (t, n) => {
                if (!n.rows.length) return n;
                const { pageSize: r, pageIndex: o } = t;
                let { rows: i, flatRows: a, rowsById: l } = n;
                const u = r * o,
                    s = u + r;
                let c;
                ((i = i.slice(u, s)),
                    (c = e.options.paginateExpandedRows
                        ? { rows: i, flatRows: a, rowsById: l }
                        : (function (e) {
                              const t = [],
                                  n = (e) => {
                                      var r;
                                      (t.push(e),
                                          null != (r = e.subRows) &&
                                              r.length &&
                                              e.getIsExpanded() &&
                                              e.subRows.forEach(n));
                                  };
                              return (e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById });
                          })({ rows: i, flatRows: a, rowsById: l })),
                    (c.flatRows = []));
                const d = (e) => {
                    (c.flatRows.push(e), e.subRows.length && e.subRows.forEach(d));
                };
                return (c.rows.forEach(d), c);
            },
            vw(e.options, 'debugTable'),
        );
}
function iS() {
    return (e) =>
        gw(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, n) => {
                if (!n.rows.length || null == t || !t.length) return n;
                const r = e.getState().sorting,
                    o = [],
                    i = r.filter((t) => {
                        var n;
                        return null == (n = e.getColumn(t.id)) ? void 0 : n.getCanSort();
                    }),
                    a = {};
                i.forEach((t) => {
                    const n = e.getColumn(t.id);
                    n &&
                        (a[t.id] = {
                            sortUndefined: n.columnDef.sortUndefined,
                            invertSorting: n.columnDef.invertSorting,
                            sortingFn: n.getSortingFn(),
                        });
                });
                const l = (e) => {
                    const t = e.map((e) => ({ ...e }));
                    return (
                        t.sort((e, t) => {
                            for (let r = 0; r < i.length; r += 1) {
                                var n;
                                const o = i[r],
                                    l = a[o.id],
                                    u = l.sortUndefined,
                                    s = null != (n = null == o ? void 0 : o.desc) && n;
                                let c = 0;
                                if (u) {
                                    const n = void 0 === e.getValue(o.id),
                                        r = void 0 === t.getValue(o.id);
                                    if (n || r) {
                                        if ('first' === u) return n ? -1 : 1;
                                        if ('last' === u) return n ? 1 : -1;
                                        c = n && r ? 0 : n ? u : -u;
                                    }
                                }
                                if ((0 === c && (c = l.sortingFn(e, t, o.id)), 0 !== c))
                                    return (s && (c *= -1), l.invertSorting && (c *= -1), c);
                            }
                            return e.index - t.index;
                        }),
                        t.forEach((e) => {
                            var t;
                            (o.push(e), null != (t = e.subRows) && t.length && (e.subRows = l(e.subRows)));
                        }),
                        t
                    );
                };
                return { rows: l(n.rows), flatRows: o, rowsById: n.rowsById };
            },
            vw(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
        );
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function aS(e, t) {
    return e
        ? (function (e) {
              return (
                  'function' == typeof e &&
                  (() => {
                      const t = Object.getPrototypeOf(e);
                      return t.prototype && t.prototype.isReactComponent;
                  })()
              );
          })((n = e)) ||
          'function' == typeof n ||
          (function (e) {
              return (
                  'object' == typeof e &&
                  'symbol' == typeof e.$$typeof &&
                  ['react.memo', 'react.forward_ref'].includes(e.$$typeof.description)
              );
          })(n)
            ? U.createElement(e, t)
            : e
        : null;
    var n;
}
function lS(e) {
    const t = { state: {}, onStateChange: () => {}, renderFallbackValue: null, ...e },
        [n] = U.useState(() => ({ current: nS(t) })),
        [r, o] = U.useState(() => n.current.initialState);
    return (
        n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...r, ...e.state },
            onStateChange: (t) => {
                (o(t), null == e.onStateChange || e.onStateChange(t));
            },
        })),
        n.current
    );
}
export {
    Oy as A,
    dw as B,
    aS as C,
    Nh as D,
    Tb as E,
    ag as F,
    H as R,
    f_ as _,
    be as a,
    _e as b,
    Me as c,
    ye as d,
    Ah as e,
    qd as f,
    u_ as g,
    zf as h,
    je as i,
    Y as j,
    U_ as k,
    xy as l,
    Ud as m,
    Gy as n,
    xp as o,
    Mh as p,
    jh as q,
    U as r,
    cw as s,
    L_ as t,
    Jp as u,
    lS as v,
    oS as w,
    iS as x,
    rS as y,
    F_ as z,
};
