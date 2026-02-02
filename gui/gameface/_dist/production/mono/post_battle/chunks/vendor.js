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
function x() {}
function C(e, t, n) {
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
    (x.prototype = k.prototype));
var O = (C.prototype = new x());
((O.constructor = C), w(O, k.prototype), (O.isPureReactComponent = !0));
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
var j = /\/+/g;
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
function T(e, t, n, r, o) {
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
            (e = '' === r ? '.' + F(a, 0) : r),
            P(o)
                ? ((n = ''),
                  null != e && (n = e.replace(j, '$&/') + '/'),
                  T(o, t, n, '', function (e) {
                      return e;
                  }))
                : null != o &&
                  (M(o) &&
                      (o = (function (e, t) {
                          return { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(o, n + (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(j, '$&/') + '/') + e)),
                  t.push(o)),
            1
        );
    if (((a = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + F((i = e[l]), l);
            a += T(i, t, n, c, o);
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
        for (e = c.call(e), l = 0; !(i = e.next()).done; ) a += T((i = i.value), t, n, (c = r + F(i, l++)), o);
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
        T(e, r, '', '', function (e) {
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
    (l.PureComponent = C),
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
var Y = o.exports;
const J = n(Y);
var Z = function (e, t) {
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
function ee(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    (Z(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
}
var te = function () {
    return (
        (te =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }),
        te.apply(this, arguments)
    );
};
function ne(e, t) {
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
function re(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var oe = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (ee(t, e), t);
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
            return (ee(t, e), t);
        })(Error),
    ),
    ie = (function (e) {
        function t(t, n, r, o) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(o, '.')) ||
                this
            );
        }
        return (
            ee(t, e),
            (t.assert = function (e, n, r, o, i) {
                if (!e) throw new t(n, r, o, i);
                return e;
            }),
            t
        );
    })(oe),
    ae = (function (e) {
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
        return (ee(t, e), t);
    })(oe),
    le = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                o = "Could not register '".concat(r, "'.");
            return (n && (o += ' '.concat(n)), e.call(this, o) || this);
        }
        return (ee(t, e), t);
    })(oe),
    ue = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    se = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ce(e) {
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
            if (de(u)) n++;
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
                        if (ge(u)) return (s(), r);
                        n++;
                }
        }
    }
    function s() {
        for (var t, i = e.charAt(n), a = ++n; (t = e.charAt(n)), he.test(t); ) n++;
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
                if (de(o)) {
                    n++;
                    continue;
                }
                if (fe(o)) {
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
function de(e) {
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
var pe = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    he = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function ge(e) {
    return pe.test(e);
}
function ve(e) {
    if ('function' != typeof e) return !1;
    var t = ce(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function me(e) {
    return 'function' == typeof e;
}
var be = Symbol('Awilix Resolver Config');
function ye(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function _e(e, t) {
    if (!me(e)) throw new ie('asFunction', 'fn', 'function', e);
    t = Ce({ lifetime: se.TRANSIENT }, t, e[be]);
    var n = Ee(e);
    return ke(Se(te({ resolve: n }, t)));
}
function we(e, t) {
    if (!me(e)) throw new ie('asClass', 'Type', 'class', e);
    t = Ce({ lifetime: se.TRANSIENT }, t, e[be]);
    var n = Ee(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return ke(Se(te(te({}, t), { resolve: n })));
}
function Se(e) {
    function t(e) {
        return Se(te(te({}, this), { lifetime: e }));
    }
    function n(e) {
        return Se(te(te({}, this), { injectionMode: e }));
    }
    return Oe(e, {
        setLifetime: t,
        inject: function (e) {
            return Se(te(te({}, this), { injector: e }));
        },
        transient: xe(t, se.TRANSIENT),
        scoped: xe(t, se.SCOPED),
        singleton: xe(t, se.SINGLETON),
        setInjectionMode: n,
        proxy: xe(n, ue.PROXY),
        classic: xe(n, ue.CLASSIC),
    });
}
function ke(e) {
    return Oe(e, {
        disposer: function (e) {
            return ke(te(te({}, this), { dispose: e }));
        },
    });
}
function xe(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function Ce(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, re([{}, e], t, !1));
}
function Oe(e, t) {
    return te(te({}, e), t);
}
function Pe(e, t) {
    var n,
        r = t(e),
        o = ((n = re(re([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, o, i, a, l, u, s;
                          return ne(this, function (c) {
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
function Ee(e, t) {
    t || (t = e);
    var n = Re(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ue.PROXY) !== ue.CLASSIC) {
            var r = this.injector ? Pe(t, this.injector) : t.cradle;
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
function Re(e) {
    var t = (function (e) {
        var t = ce(e),
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
        return 'function' == typeof n && n !== Function.prototype ? Re(n) : [];
    }
    return t;
}
var Ae = Symbol('familyTree'),
    Ie = Symbol('rollUpRegistrations'),
    Me = 'AwilixContainerCradle';
function je(e) {
    return (void 0 === e && (e = {}), Fe(e));
}
function Fe(e, t, n) {
    var r;
    e = te({ injectionMode: ue.PROXY, strict: !1 }, e);
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
                    return Fe(e, l, o);
                },
                register: function (n, r) {
                    for (
                        var o = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            a = re(re([], Object.keys(o), !0), Object.getOwnPropertySymbols(o), !0),
                            u = 0,
                            s = a;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            d = o[c];
                        if (e.strict && d.lifetime === se.SINGLETON && t)
                            throw new le(c, 'Cannot register a singleton on a scoped container.');
                        i[c] = d;
                    }
                    return l;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(l);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        ie.assert(e, n, r, 'a registration, function or class', e),
                        ie.assert('function' == typeof e, n, r, 'a function or class', e),
                        (ve(e) ? we(e, t) : _e(e, t)).resolve(l)
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
            })[Ie] = d),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return d();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [l].concat(t[Ae]) : [l];
    l[Ae] = u;
    var s,
        c = (s = u)[s.length - 1];
    return l;
    function d() {
        return te(te({}, t && t[Ie]()), i);
    }
    function f() {
        var e, t, n, r, o;
        return ne(this, function (i) {
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
                throw new ae(t, o, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return je;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Me;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return f;
                }
                if (n.allowUnregistered) return;
                throw new ae(t, o);
            }
            var i = r.lifetime || se.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var a = o.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = i),
                        ((t = r) === se.SINGLETON && n !== se.SINGLETON) || (t === se.SCOPED && n === se.TRANSIENT)
                    );
                });
                if (a > -1)
                    throw new ae(
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
                case se.TRANSIENT:
                    s = r.resolve(l);
                    break;
                case se.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : l)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case se.SCOPED:
                    if (void 0 !== (u = l.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    ((s = r.resolve(l)), l.cache.set(t, { resolver: r, value: s }));
                    break;
                default:
                    throw new ae(t, o, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (o.pop(), s);
        } catch (d) {
            throw ((o.length = 0), d);
        }
    }
}
const Te = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            AwilixError: oe,
            AwilixRegistrationError: le,
            AwilixResolutionError: ae,
            AwilixTypeError: ie,
            InjectionMode: ue,
            Lifetime: se,
            RESOLVER: be,
            aliasTo: function (e) {
                return {
                    resolve: function (t) {
                        return t.resolve(e);
                    },
                    isLeakSafe: !0,
                };
            },
            asClass: we,
            asFunction: _e,
            asValue: ye,
            createBuildResolver: Se,
            createContainer: je,
            createDisposableResolver: ke,
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
);
var Ve = {},
    Ne = { exports: {} },
    Le = {},
    ze = { exports: {} },
    De = {};
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
                null !== t && j(_, t.startTime - e);
            }
    }
    function w(t, o) {
        ((h = !1), g && ((g = !1), m(C), (C = -1)), (p = !0));
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
                (null !== v && j(_, v.startTime - o), (c = !1));
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
        x = null,
        C = -1,
        O = 5,
        P = -1;
    function E() {
        return !(e.unstable_now() - P < O);
    }
    function R() {
        if (null !== x) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = x(!0, t);
            } finally {
                n ? S() : ((k = !1), (x = null));
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
        ((x = e), k || ((k = !0), S()));
    }
    function j(t, n) {
        C = v(function () {
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
                      null === n(u) && r === n(s) && (g ? (m(C), (C = -1)) : (g = !0), j(_, i - a)))
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
})(De),
    (ze.exports = De));
var Be = ze.exports,
    Ue = U,
    He = Be;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ge(e) {
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
var $e = new Set(),
    qe = {};
function We(e, t) {
    (Ke(e, t), Ke(e + 'Capture', t));
}
function Ke(e, t) {
    for (qe[e] = t, e = 0; e < t.length; e++) $e.add(t[e]);
}
var Qe = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Xe = Object.prototype.hasOwnProperty,
    Ye =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Je = {},
    Ze = {};
function et(e, t, n, r, o, i, a) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = a));
}
var tt = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        tt[e] = new et(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        tt[t] = new et(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        tt[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        tt[e] = new et(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            tt[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        tt[e] = new et(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        tt[e] = new et(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        tt[e] = new et(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        tt[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var nt = /[\-:]([a-z])/g;
function rt(e) {
    return e[1].toUpperCase();
}
function ot(e, t, n, r) {
    var o = tt.hasOwnProperty(t) ? tt[t] : null;
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
                  return !!Xe.call(Ze, e) || (!Xe.call(Je, e) && (Ye.test(e) ? (Ze[e] = !0) : ((Je[e] = !0), !1)));
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
        var t = e.replace(nt, rt);
        tt[t] = new et(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(nt, rt);
        tt[t] = new et(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(nt, rt);
        tt[t] = new et(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        tt[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (tt.xlinkHref = new et('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        tt[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var it = Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    at = Symbol.for('react.element'),
    lt = Symbol.for('react.portal'),
    ut = Symbol.for('react.fragment'),
    st = Symbol.for('react.strict_mode'),
    ct = Symbol.for('react.profiler'),
    dt = Symbol.for('react.provider'),
    ft = Symbol.for('react.context'),
    pt = Symbol.for('react.forward_ref'),
    ht = Symbol.for('react.suspense'),
    gt = Symbol.for('react.suspense_list'),
    vt = Symbol.for('react.memo'),
    mt = Symbol.for('react.lazy'),
    bt = Symbol.for('react.offscreen'),
    yt = Symbol.iterator;
function _t(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (yt && e[yt]) || e['@@iterator'])
          ? e
          : null;
}
var wt,
    St = Object.assign;
function kt(e) {
    if (void 0 === wt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            wt = (t && t[1]) || '';
        }
    return '\n' + wt + e;
}
var xt = !1;
function Ct(e, t) {
    if (!e || xt) return '';
    xt = !0;
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
        ((xt = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? kt(e) : '';
}
function Ot(e) {
    switch (e.tag) {
        case 5:
            return kt(e.type);
        case 16:
            return kt('Lazy');
        case 13:
            return kt('Suspense');
        case 19:
            return kt('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Ct(e.type, !1));
        case 11:
            return (e = Ct(e.type.render, !1));
        case 1:
            return (e = Ct(e.type, !0));
        default:
            return '';
    }
}
function Pt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case ut:
            return 'Fragment';
        case lt:
            return 'Portal';
        case ct:
            return 'Profiler';
        case st:
            return 'StrictMode';
        case ht:
            return 'Suspense';
        case gt:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ft:
                return (e.displayName || 'Context') + '.Consumer';
            case dt:
                return (e._context.displayName || 'Context') + '.Provider';
            case pt:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case vt:
                return null !== (t = e.displayName || null) ? t : Pt(e.type) || 'Memo';
            case mt:
                ((t = e._payload), (e = e._init));
                try {
                    return Pt(e(t));
                } catch (n) {}
        }
    return null;
}
function Et(e) {
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
            return Pt(t);
        case 8:
            return t === st ? 'StrictMode' : 'Mode';
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
function Rt(e) {
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
function At(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function It(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = At(e) ? 'checked' : 'value',
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
function Mt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = At(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function jt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function Ft(e, t) {
    var n = t.checked;
    return St({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Tt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Rt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Vt(e, t) {
    null != (t = t.checked) && ot(e, 'checked', t, !1);
}
function Nt(e, t) {
    Vt(e, t);
    var n = Rt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? zt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && zt(e, t.type, Rt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Lt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function zt(e, t, n) {
    ('number' === t && jt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Dt = Array.isArray;
function Bt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            ((o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Rt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return ((e[o].selected = !0), void (r && (e[o].defaultSelected = !0)));
            null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
    }
}
function Ut(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ge(91));
    return St({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ht(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ge(92));
            if (Dt(n)) {
                if (1 < n.length) throw Error(Ge(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Rt(n) };
}
function Gt(e, t) {
    var n = Rt(t.value),
        r = Rt(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function $t(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function qt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Wt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? qt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Kt,
    Qt,
    Xt =
        ((Qt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Kt = Kt || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Kt.firstChild;
                    e.firstChild;
                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return Qt(e, t);
                  });
              }
            : Qt);
function Yt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var Jt = {
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
    Zt = ['Webkit', 'ms', 'Moz', 'O'];
function en(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Jt.hasOwnProperty(e) && Jt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function tn(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                o = en(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o));
        }
}
Object.keys(Jt).forEach(function (e) {
    Zt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jt[t] = Jt[e]));
    });
});
var nn = St(
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
function rn(e, t) {
    if (t) {
        if (nn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ge(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Ge(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Ge(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Ge(62));
    }
}
function on(e, t) {
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
var an = null;
function ln(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var un = null,
    sn = null,
    cn = null;
function dn(e) {
    if ((e = ia(e))) {
        if ('function' != typeof un) throw Error(Ge(280));
        var t = e.stateNode;
        t && ((t = la(t)), un(e.stateNode, e.type, t));
    }
}
function fn(e) {
    sn ? (cn ? cn.push(e) : (cn = [e])) : (sn = e);
}
function pn() {
    if (sn) {
        var e = sn,
            t = cn;
        if (((cn = sn = null), dn(e), t)) for (e = 0; e < t.length; e++) dn(t[e]);
    }
}
function hn(e, t) {
    return e(t);
}
function gn() {}
var vn = !1;
function mn(e, t, n) {
    if (vn) return e(t, n);
    vn = !0;
    try {
        return hn(e, t, n);
    } finally {
        ((vn = !1), (null !== sn || null !== cn) && (gn(), pn()));
    }
}
function bn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = la(n);
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
    if (n && 'function' != typeof n) throw Error(Ge(231, t, typeof n));
    return n;
}
var yn = !1;
if (Qe)
    try {
        var _n = {};
        (Object.defineProperty(_n, 'passive', {
            get: function () {
                yn = !0;
            },
        }),
            window.addEventListener('test', _n, _n),
            window.removeEventListener('test', _n, _n));
    } catch (Qt) {
        yn = !1;
    }
function wn(e, t, n, r, o, i, a, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var Sn = !1,
    kn = null,
    xn = !1,
    Cn = null,
    On = {
        onError: function (e) {
            ((Sn = !0), (kn = e));
        },
    };
function Pn(e, t, n, r, o, i, a, l, u) {
    ((Sn = !1), (kn = null), wn.apply(On, arguments));
}
function En(e) {
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
function Rn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function An(e) {
    if (En(e) !== e) throw Error(Ge(188));
}
function In(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = En(e))) throw Error(Ge(188));
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
                        if (i === n) return (An(o), e);
                        if (i === r) return (An(o), t);
                        i = i.sibling;
                    }
                    throw Error(Ge(188));
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
                        if (!a) throw Error(Ge(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ge(190));
            }
            if (3 !== n.tag) throw Error(Ge(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Mn(e)
        : null;
}
function Mn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Mn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var jn = He.unstable_scheduleCallback,
    Fn = He.unstable_cancelCallback,
    Tn = He.unstable_shouldYield,
    Vn = He.unstable_requestPaint,
    Nn = He.unstable_now,
    Ln = He.unstable_getCurrentPriorityLevel,
    zn = He.unstable_ImmediatePriority,
    Dn = He.unstable_UserBlockingPriority,
    Bn = He.unstable_NormalPriority,
    Un = He.unstable_LowPriority,
    Hn = He.unstable_IdlePriority,
    Gn = null,
    $n = null;
var qn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Wn(e) / Kn) | 0)) | 0);
          },
    Wn = Math.log,
    Kn = Math.LN2;
var Qn = 64,
    Xn = 4194304;
function Yn(e) {
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
function Jn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = 268435455 & n;
    if (0 !== a) {
        var l = a & ~o;
        0 !== l ? (r = Yn(l)) : 0 !== (i &= a) && (r = Yn(i));
    } else 0 !== (a = n & ~o) ? (r = Yn(a)) : 0 !== i && (r = Yn(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (i = t & -t) || (16 === o && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((o = 1 << (n = 31 - qn(t))), (r |= e[n]), (t &= ~o));
    return r;
}
function Zn(e, t) {
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
function er(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function tr() {
    var e = Qn;
    return (0 == (4194240 & (Qn <<= 1)) && (Qn = 64), e);
}
function nr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function rr(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - qn(t))] = n));
}
function or(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - qn(n),
            o = 1 << r;
        ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
}
var ir = 0;
function ar(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var lr,
    ur,
    sr,
    cr,
    dr,
    fr = !1,
    pr = [],
    hr = null,
    gr = null,
    vr = null,
    mr = new Map(),
    br = new Map(),
    yr = [],
    _r =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function wr(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            hr = null;
            break;
        case 'dragenter':
        case 'dragleave':
            gr = null;
            break;
        case 'mouseover':
        case 'mouseout':
            vr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            mr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            br.delete(t.pointerId);
    }
}
function Sr(e, t, n, r, o, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
          null !== t && null !== (t = ia(t)) && ur(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
}
function kr(e) {
    var t = oa(e.target);
    if (null !== t) {
        var n = En(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Rn(n)))
                    return (
                        (e.blockedOn = t),
                        void dr(e.priority, function () {
                            sr(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function xr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Tr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ia(n)) && ur(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((an = r), n.target.dispatchEvent(r), (an = null), t.shift());
    }
    return !0;
}
function Cr(e, t, n) {
    xr(e) && n.delete(t);
}
function Or() {
    ((fr = !1),
        null !== hr && xr(hr) && (hr = null),
        null !== gr && xr(gr) && (gr = null),
        null !== vr && xr(vr) && (vr = null),
        mr.forEach(Cr),
        br.forEach(Cr));
}
function Pr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), fr || ((fr = !0), He.unstable_scheduleCallback(He.unstable_NormalPriority, Or)));
}
function Er(e) {
    function t(t) {
        return Pr(t, e);
    }
    if (0 < pr.length) {
        Pr(pr[0], e);
        for (var n = 1; n < pr.length; n++) {
            var r = pr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== hr && Pr(hr, e),
            null !== gr && Pr(gr, e),
            null !== vr && Pr(vr, e),
            mr.forEach(t),
            br.forEach(t),
            n = 0;
        n < yr.length;
        n++
    )
        (r = yr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < yr.length && null === (n = yr[0]).blockedOn; ) (kr(n), null === n.blockedOn && yr.shift());
}
var Rr = it.ReactCurrentBatchConfig,
    Ar = !0;
function Ir(e, t, n, r) {
    var o = ir,
        i = Rr.transition;
    Rr.transition = null;
    try {
        ((ir = 1), jr(e, t, n, r));
    } finally {
        ((ir = o), (Rr.transition = i));
    }
}
function Mr(e, t, n, r) {
    var o = ir,
        i = Rr.transition;
    Rr.transition = null;
    try {
        ((ir = 4), jr(e, t, n, r));
    } finally {
        ((ir = o), (Rr.transition = i));
    }
}
function jr(e, t, n, r) {
    if (Ar) {
        var o = Tr(e, t, n, r);
        if (null === o) (Ai(e, t, r, Fr, n), wr(e, r));
        else if (
            (function (e, t, n, r, o) {
                switch (t) {
                    case 'focusin':
                        return ((hr = Sr(hr, e, t, n, r, o)), !0);
                    case 'dragenter':
                        return ((gr = Sr(gr, e, t, n, r, o)), !0);
                    case 'mouseover':
                        return ((vr = Sr(vr, e, t, n, r, o)), !0);
                    case 'pointerover':
                        var i = o.pointerId;
                        return (mr.set(i, Sr(mr.get(i) || null, e, t, n, r, o)), !0);
                    case 'gotpointercapture':
                        return ((i = o.pointerId), br.set(i, Sr(br.get(i) || null, e, t, n, r, o)), !0);
                }
                return !1;
            })(o, e, t, n, r)
        )
            r.stopPropagation();
        else if ((wr(e, r), 4 & t && -1 < _r.indexOf(e))) {
            for (; null !== o; ) {
                var i = ia(o);
                if ((null !== i && lr(i), null === (i = Tr(e, t, n, r)) && Ai(e, t, r, Fr, n), i === o)) break;
                o = i;
            }
            null !== o && r.stopPropagation();
        } else Ai(e, t, r, null, n);
    }
}
var Fr = null;
function Tr(e, t, n, r) {
    if (((Fr = null), null !== (e = oa((e = ln(r))))))
        if (null === (t = En(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Rn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Fr = e), null);
}
function Vr(e) {
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
            switch (Ln()) {
                case zn:
                    return 1;
                case Dn:
                    return 4;
                case Bn:
                case Un:
                    return 16;
                case Hn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Nr = null,
    Lr = null,
    zr = null;
function Dr() {
    if (zr) return zr;
    var e,
        t,
        n = Lr,
        r = n.length,
        o = 'value' in Nr ? Nr.value : Nr.textContent,
        i = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
    return (zr = o.slice(e, 1 < t ? 1 - t : void 0));
}
function Br(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Ur() {
    return !0;
}
function Hr() {
    return !1;
}
function Gr(e) {
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
                ? Ur
                : Hr),
            (this.isPropagationStopped = Hr),
            this
        );
    }
    return (
        St(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Ur));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Ur));
            },
            persist: function () {},
            isPersistent: Ur,
        }),
        t
    );
}
var $r,
    qr,
    Wr,
    Kr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Qr = Gr(Kr),
    Xr = St({}, Kr, { view: 0, detail: 0 }),
    Yr = Gr(Xr),
    Jr = St({}, Xr, {
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
        getModifierState: co,
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
                : (e !== Wr &&
                      (Wr && 'mousemove' === e.type
                          ? (($r = e.screenX - Wr.screenX), (qr = e.screenY - Wr.screenY))
                          : (qr = $r = 0),
                      (Wr = e)),
                  $r);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : qr;
        },
    }),
    Zr = Gr(Jr),
    eo = Gr(St({}, Jr, { dataTransfer: 0 })),
    to = Gr(St({}, Xr, { relatedTarget: 0 })),
    no = Gr(St({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ro = St({}, Kr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    oo = Gr(ro),
    io = Gr(St({}, Kr, { data: 0 })),
    ao = {
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
    lo = {
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
    uo = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function so(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = uo[e]) && !!t[e];
}
function co() {
    return so;
}
var fo = St({}, Xr, {
        key: function (e) {
            if (e.key) {
                var t = ao[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Br(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? lo[e.keyCode] || 'Unidentified'
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
        getModifierState: co,
        charCode: function (e) {
            return 'keypress' === e.type ? Br(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Br(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    po = Gr(fo),
    ho = Gr(
        St({}, Jr, {
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
    go = Gr(
        St({}, Xr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: co,
        }),
    ),
    vo = Gr(St({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    mo = St({}, Jr, {
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
    bo = Gr(mo),
    yo = [9, 13, 27, 32],
    _o = Qe && 'CompositionEvent' in window,
    wo = null;
Qe && 'documentMode' in document && (wo = document.documentMode);
var So = Qe && 'TextEvent' in window && !wo,
    ko = Qe && (!_o || (wo && 8 < wo && 11 >= wo)),
    xo = String.fromCharCode(32),
    Co = !1;
function Oo(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== yo.indexOf(t.keyCode);
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
function Po(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Eo = !1;
var Ro = {
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
function Ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Ro[e.type] : 'textarea' === t;
}
function Io(e, t, n, r) {
    (fn(r),
        0 < (t = Mi(t, 'onChange')).length &&
            ((n = new Qr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Mo = null,
    jo = null;
function Fo(e) {
    xi(e, 0);
}
function To(e) {
    if (Mt(aa(e))) return e;
}
function Vo(e, t) {
    if ('change' === e) return t;
}
var No = !1;
if (Qe) {
    var Lo;
    if (Qe) {
        var zo = 'oninput' in document;
        if (!zo) {
            var Do = document.createElement('div');
            (Do.setAttribute('oninput', 'return;'), (zo = 'function' == typeof Do.oninput));
        }
        Lo = zo;
    } else Lo = !1;
    No = Lo && (!document.documentMode || 9 < document.documentMode);
}
function Bo() {
    Mo && (Mo.detachEvent('onpropertychange', Uo), (jo = Mo = null));
}
function Uo(e) {
    if ('value' === e.propertyName && To(jo)) {
        var t = [];
        (Io(t, jo, e, ln(e)), mn(Fo, t));
    }
}
function Ho(e, t, n) {
    'focusin' === e ? (Bo(), (jo = n), (Mo = t).attachEvent('onpropertychange', Uo)) : 'focusout' === e && Bo();
}
function Go(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return To(jo);
}
function $o(e, t) {
    if ('click' === e) return To(t);
}
function qo(e, t) {
    if ('input' === e || 'change' === e) return To(t);
}
var Wo =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Ko(e, t) {
    if (Wo(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Xe.call(t, o) || !Wo(e[o], t[o])) return !1;
    }
    return !0;
}
function Qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Xo(e, t) {
    var n,
        r = Qo(e);
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
        r = Qo(r);
    }
}
function Yo(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Yo(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Jo() {
    for (var e = window, t = jt(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = jt((e = t.contentWindow).document);
    }
    return t;
}
function Zo(e) {
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
function ei(e) {
    var t = Jo(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yo(n.ownerDocument.documentElement, n)) {
        if (null !== r && Zo(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                ((r = void 0 === r.end ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Xo(n, i)));
                var a = Xo(n, r);
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
var ti = Qe && 'documentMode' in document && 11 >= document.documentMode,
    ni = null,
    ri = null,
    oi = null,
    ii = !1;
function ai(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ii ||
        null == ni ||
        ni !== jt(r) ||
        ('selectionStart' in (r = ni) && Zo(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (oi && Ko(oi, r)) ||
            ((oi = r),
            0 < (r = Mi(ri, 'onSelect')).length &&
                ((t = new Qr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = ni))));
}
function li(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var ui = {
        animationend: li('Animation', 'AnimationEnd'),
        animationiteration: li('Animation', 'AnimationIteration'),
        animationstart: li('Animation', 'AnimationStart'),
        transitionend: li('Transition', 'TransitionEnd'),
    },
    si = {},
    ci = {};
function di(e) {
    if (si[e]) return si[e];
    if (!ui[e]) return e;
    var t,
        n = ui[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ci) return (si[e] = n[t]);
    return e;
}
Qe &&
    ((ci = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ui.animationend.animation, delete ui.animationiteration.animation, delete ui.animationstart.animation),
    'TransitionEvent' in window || delete ui.transitionend.transition);
var fi = di('animationend'),
    pi = di('animationiteration'),
    hi = di('animationstart'),
    gi = di('transitionend'),
    vi = new Map(),
    mi =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function bi(e, t) {
    (vi.set(e, t), We(t, [e]));
}
for (var yi = 0; yi < mi.length; yi++) {
    var _i = mi[yi];
    bi(_i.toLowerCase(), 'on' + (_i[0].toUpperCase() + _i.slice(1)));
}
(bi(fi, 'onAnimationEnd'),
    bi(pi, 'onAnimationIteration'),
    bi(hi, 'onAnimationStart'),
    bi('dblclick', 'onDoubleClick'),
    bi('focusin', 'onFocus'),
    bi('focusout', 'onBlur'),
    bi(gi, 'onTransitionEnd'),
    Ke('onMouseEnter', ['mouseout', 'mouseover']),
    Ke('onMouseLeave', ['mouseout', 'mouseover']),
    Ke('onPointerEnter', ['pointerout', 'pointerover']),
    Ke('onPointerLeave', ['pointerout', 'pointerover']),
    We('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    We('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    We('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    We('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    We('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    We('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var wi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Si = new Set('cancel close invalid load scroll toggle'.split(' ').concat(wi));
function ki(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, o, i, a, l, u) {
            if ((Pn.apply(this, arguments), Sn)) {
                if (!Sn) throw Error(Ge(198));
                var s = kn;
                ((Sn = !1), (kn = null), xn || ((xn = !0), (Cn = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function xi(e, t) {
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
                    (ki(o, l, s), (i = u));
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
                    (ki(o, l, s), (i = u));
                }
        }
    }
    if (xn) throw ((e = Cn), (xn = !1), (Cn = null), e);
}
function Ci(e, t) {
    var n = t[ta];
    void 0 === n && (n = t[ta] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ri(t, e, 2, !1), n.add(r));
}
function Oi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ri(n, e, r, t));
}
var Pi = '_reactListening' + Math.random().toString(36).slice(2);
function Ei(e) {
    if (!e[Pi]) {
        ((e[Pi] = !0),
            $e.forEach(function (t) {
                'selectionchange' !== t && (Si.has(t) || Oi(t, !1, e), Oi(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Pi] || ((t[Pi] = !0), Oi('selectionchange', !1, t));
    }
}
function Ri(e, t, n, r) {
    switch (Vr(t)) {
        case 1:
            var o = Ir;
            break;
        case 4:
            o = Mr;
            break;
        default:
            o = jr;
    }
    ((n = o.bind(null, t, n, e)),
        (o = void 0),
        !yn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
        r
            ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1));
}
function Ai(e, t, n, r, o) {
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
                    if (null === (a = oa(l))) return;
                    if (5 === (u = a.tag) || 6 === u) {
                        r = i = a;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    mn(function () {
        var r = i,
            o = ln(n),
            a = [];
        e: {
            var l = vi.get(e);
            if (void 0 !== l) {
                var u = Qr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Br(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = po;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (u = to));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (u = to));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = to;
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
                        u = Zr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = eo;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = go;
                        break;
                    case fi:
                    case pi:
                    case hi:
                        u = no;
                        break;
                    case gi:
                        u = vo;
                        break;
                    case 'scroll':
                        u = Yr;
                        break;
                    case 'wheel':
                        u = bo;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = oo;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = ho;
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
                            ((p = g), null !== f && null != (g = bn(h, f)) && c.push(Ii(h, g, p))),
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
                    n === an ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!oa(s) && !s[ea])) &&
                    (u || l) &&
                    ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? oa(s) : null) &&
                              (s !== (d = En(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = Zr),
                    (g = 'onMouseLeave'),
                    (f = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = ho), (g = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                    (d = null == u ? l : aa(u)),
                    (p = null == s ? l : aa(s)),
                    ((l = new c(g, h + 'leave', u, n, o)).target = d),
                    (l.relatedTarget = p),
                    (g = null),
                    oa(o) === r && (((c = new c(f, h + 'enter', s, n, o)).target = p), (c.relatedTarget = d), (g = c)),
                    (d = g),
                    u && s)
                )
                    e: {
                        for (f = s, h = 0, p = c = u; p; p = ji(p)) h++;
                        for (p = 0, g = f; g; g = ji(g)) p++;
                        for (; 0 < h - p; ) ((c = ji(c)), h--);
                        for (; 0 < p - h; ) ((f = ji(f)), p--);
                        for (; h--; ) {
                            if (c === f || (null !== f && c === f.alternate)) break e;
                            ((c = ji(c)), (f = ji(f)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Fi(a, l, u, c, !1), null !== s && null !== d && Fi(a, d, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? aa(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var v = Vo;
            else if (Ao(l))
                if (No) v = qo;
                else {
                    v = Go;
                    var m = Ho;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (v = $o);
            switch (
                (v && (v = v(e, r))
                    ? Io(a, v, n, o)
                    : (m && m(e, l, r),
                      'focusout' === e &&
                          (m = l._wrapperState) &&
                          m.controlled &&
                          'number' === l.type &&
                          zt(l, 'number', l.value)),
                (m = r ? aa(r) : window),
                e)
            ) {
                case 'focusin':
                    (Ao(m) || 'true' === m.contentEditable) && ((ni = m), (ri = r), (oi = null));
                    break;
                case 'focusout':
                    oi = ri = ni = null;
                    break;
                case 'mousedown':
                    ii = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((ii = !1), ai(a, n, o));
                    break;
                case 'selectionchange':
                    if (ti) break;
                case 'keydown':
                case 'keyup':
                    ai(a, n, o);
            }
            var b;
            if (_o)
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
                Eo
                    ? Oo(e, n) && (y = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
            (y &&
                (ko &&
                    'ko' !== n.locale &&
                    (Eo || 'onCompositionStart' !== y
                        ? 'onCompositionEnd' === y && Eo && (b = Dr())
                        : ((Lr = 'value' in (Nr = o) ? Nr.value : Nr.textContent), (Eo = !0))),
                0 < (m = Mi(r, y)).length &&
                    ((y = new io(y, e, null, n, o)),
                    a.push({ event: y, listeners: m }),
                    b ? (y.data = b) : null !== (b = Po(n)) && (y.data = b))),
                (b = So
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return Po(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Co = !0), xo);
                              case 'textInput':
                                  return (e = t.data) === xo && Co ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Eo)
                              return 'compositionend' === e || (!_o && Oo(e, t))
                                  ? ((e = Dr()), (zr = Lr = Nr = null), (Eo = !1), e)
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
                                  return ko && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Mi(r, 'onBeforeInput')).length &&
                    ((o = new io('onBeforeInput', 'beforeinput', null, n, o)),
                    a.push({ event: o, listeners: r }),
                    (o.data = b)));
        }
        xi(a, t);
    });
}
function Ii(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Mi(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var o = e,
            i = o.stateNode;
        (5 === o.tag &&
            null !== i &&
            ((o = i), null != (i = bn(e, n)) && r.unshift(Ii(e, i, o)), null != (i = bn(e, t)) && r.push(Ii(e, i, o))),
            (e = e.return));
    }
    return r;
}
function ji(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Fi(e, t, n, r, o) {
    for (var i = t._reactName, a = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            o
                ? null != (u = bn(n, i)) && a.unshift(Ii(n, u, l))
                : o || (null != (u = bn(n, i)) && a.push(Ii(n, u, l)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Ti = /\r\n?/g,
    Vi = /\u0000|\uFFFD/g;
function Ni(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ti, '\n').replace(Vi, '');
}
function Li(e, t, n) {
    if (((t = Ni(t)), Ni(e) !== t && n)) throw Error(Ge(425));
}
function zi() {}
var Di = null,
    Bi = null;
function Ui(e, t) {
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
var Hi = 'function' == typeof setTimeout ? setTimeout : void 0,
    Gi = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    $i = 'function' == typeof Promise ? Promise : void 0,
    qi =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== $i
              ? function (e) {
                    return $i.resolve(null).then(e).catch(Wi);
                }
              : Hi;
function Wi(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ki(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && 8 === o.nodeType))
            if ('/$' === (n = o.data)) {
                if (0 === r) return (e.removeChild(o), void Er(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = o;
    } while (n);
    Er(t);
}
function Qi(e) {
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
function Xi(e) {
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
var Yi = Math.random().toString(36).slice(2),
    Ji = '__reactFiber$' + Yi,
    Zi = '__reactProps$' + Yi,
    ea = '__reactContainer$' + Yi,
    ta = '__reactEvents$' + Yi,
    na = '__reactListeners$' + Yi,
    ra = '__reactHandles$' + Yi;
function oa(e) {
    var t = e[Ji];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ea] || n[Ji])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Xi(e); null !== e; ) {
                    if ((n = e[Ji])) return n;
                    e = Xi(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ia(e) {
    return !(e = e[Ji] || e[ea]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function aa(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ge(33));
}
function la(e) {
    return e[Zi] || null;
}
var ua = [],
    sa = -1;
function ca(e) {
    return { current: e };
}
function da(e) {
    0 > sa || ((e.current = ua[sa]), (ua[sa] = null), sa--);
}
function fa(e, t) {
    (sa++, (ua[sa] = e.current), (e.current = t));
}
var pa = {},
    ha = ca(pa),
    ga = ca(!1),
    va = pa;
function ma(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pa;
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
function ba(e) {
    return null != (e = e.childContextTypes);
}
function ya() {
    (da(ga), da(ha));
}
function _a(e, t, n) {
    if (ha.current !== pa) throw Error(Ge(168));
    (fa(ha, t), fa(ga, n));
}
function wa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var o in (r = r.getChildContext())) if (!(o in t)) throw Error(Ge(108, Et(e) || 'Unknown', o));
    return St({}, n, r);
}
function Sa(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pa),
        (va = ha.current),
        fa(ha, e),
        fa(ga, ga.current),
        !0
    );
}
function ka(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ge(169));
    (n ? ((e = wa(e, t, va)), (r.__reactInternalMemoizedMergedChildContext = e), da(ga), da(ha), fa(ha, e)) : da(ga),
        fa(ga, n));
}
var xa = null,
    Ca = !1,
    Oa = !1;
function Pa(e) {
    null === xa ? (xa = [e]) : xa.push(e);
}
function Ea() {
    if (!Oa && null !== xa) {
        Oa = !0;
        var e = 0,
            t = ir;
        try {
            var n = xa;
            for (ir = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((xa = null), (Ca = !1));
        } catch (o) {
            throw (null !== xa && (xa = xa.slice(e + 1)), jn(zn, Ea), o);
        } finally {
            ((ir = t), (Oa = !1));
        }
    }
    return null;
}
var Ra = [],
    Aa = 0,
    Ia = null,
    Ma = 0,
    ja = [],
    Fa = 0,
    Ta = null,
    Va = 1,
    Na = '';
function La(e, t) {
    ((Ra[Aa++] = Ma), (Ra[Aa++] = Ia), (Ia = e), (Ma = t));
}
function za(e, t, n) {
    ((ja[Fa++] = Va), (ja[Fa++] = Na), (ja[Fa++] = Ta), (Ta = e));
    var r = Va;
    e = Na;
    var o = 32 - qn(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var i = 32 - qn(t) + o;
    if (30 < i) {
        var a = o - (o % 5);
        ((i = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (o -= a),
            (Va = (1 << (32 - qn(t) + o)) | (n << o) | r),
            (Na = i + e));
    } else ((Va = (1 << i) | (n << o) | r), (Na = e));
}
function Da(e) {
    null !== e.return && (La(e, 1), za(e, 1, 0));
}
function Ba(e) {
    for (; e === Ia; ) ((Ia = Ra[--Aa]), (Ra[Aa] = null), (Ma = Ra[--Aa]), (Ra[Aa] = null));
    for (; e === Ta; )
        ((Ta = ja[--Fa]), (ja[Fa] = null), (Na = ja[--Fa]), (ja[Fa] = null), (Va = ja[--Fa]), (ja[Fa] = null));
}
var Ua = null,
    Ha = null,
    Ga = !1,
    $a = null;
function qa(e, t) {
    var n = vd(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Wa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Ua = e), (Ha = Qi(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ua = e), (Ha = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ta ? { id: Va, overflow: Na } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = vd(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Ua = e),
                (Ha = null),
                !0)
            );
        default:
            return !1;
    }
}
function Ka(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Qa(e) {
    if (Ga) {
        var t = Ha;
        if (t) {
            var n = t;
            if (!Wa(e, t)) {
                if (Ka(e)) throw Error(Ge(418));
                t = Qi(n.nextSibling);
                var r = Ua;
                t && Wa(e, t) ? qa(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Ga = !1), (Ua = e));
            }
        } else {
            if (Ka(e)) throw Error(Ge(418));
            ((e.flags = (-4097 & e.flags) | 2), (Ga = !1), (Ua = e));
        }
    }
}
function Xa(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Ua = e;
}
function Ya(e) {
    if (e !== Ua) return !1;
    if (!Ga) return (Xa(e), (Ga = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Ui(e.type, e.memoizedProps)),
        t && (t = Ha))
    ) {
        if (Ka(e)) throw (Ja(), Error(Ge(418)));
        for (; t; ) (qa(e, t), (t = Qi(t.nextSibling)));
    }
    if ((Xa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ge(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ha = Qi(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ha = null;
        }
    } else Ha = Ua ? Qi(e.stateNode.nextSibling) : null;
    return !0;
}
function Ja() {
    for (var e = Ha; e; ) e = Qi(e.nextSibling);
}
function Za() {
    ((Ha = Ua = null), (Ga = !1));
}
function el(e) {
    null === $a ? ($a = [e]) : $a.push(e);
}
var tl = it.ReactCurrentBatchConfig;
function nl(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ge(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ge(147, e));
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
        if ('string' != typeof e) throw Error(Ge(284));
        if (!n._owner) throw Error(Ge(290, e));
    }
    return e;
}
function rl(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Ge(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function ol(e) {
    return (0, e._init)(e._payload);
}
function il(e) {
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
        return (((e = bd(e, t)).index = 0), (e.sibling = null), e);
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
        return null === t || 6 !== t.tag ? (((t = Sd(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === ut
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === mt && ol(i) === t.type))
              ? (((r = o(t, n.props)).ref = nl(e, t, n)), (r.return = e), r)
              : (((r = yd(n.type, n.key, n.props, null, e.mode, r)).ref = nl(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = kd(n, e.mode, r)).return = e), t)
            : (((t = o(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = _d(n, e.mode, r, i)).return = e), t)
            : (((t = o(t, n)).return = e), t);
    }
    function d(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = Sd('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case at:
                    return (
                        ((n = yd(t.type, t.key, t.props, null, e.mode, n)).ref = nl(e, null, t)),
                        (n.return = e),
                        n
                    );
                case lt:
                    return (((t = kd(t, e.mode, n)).return = e), t);
                case mt:
                    return d(e, (0, t._init)(t._payload), n);
            }
            if (Dt(t) || _t(t)) return (((t = _d(t, e.mode, n, null)).return = e), t);
            rl(e, t);
        }
        return null;
    }
    function f(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== o ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case at:
                    return n.key === o ? u(e, t, n, r) : null;
                case lt:
                    return n.key === o ? s(e, t, n, r) : null;
                case mt:
                    return f(e, t, (o = n._init)(n._payload), r);
            }
            if (Dt(n) || _t(n)) return null !== o ? null : c(e, t, n, r, null);
            rl(e, n);
        }
        return null;
    }
    function p(e, t, n, r, o) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, o);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case at:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case lt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case mt:
                    return p(e, t, n, (0, r._init)(r._payload), o);
            }
            if (Dt(r) || _t(r)) return c(t, (e = e.get(n) || null), r, o, null);
            rl(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === ut && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case at:
                    e: {
                        for (var g = c.key, v = s; null !== v; ) {
                            if (v.key === g) {
                                if ((g = c.type) === ut) {
                                    if (7 === v.tag) {
                                        (n(u, v.sibling), ((s = o(v, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    v.elementType === g ||
                                    ('object' == typeof g && null !== g && g.$$typeof === mt && ol(g) === v.type)
                                ) {
                                    (n(u, v.sibling), ((s = o(v, c.props)).ref = nl(u, v, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, v);
                                break;
                            }
                            (t(u, v), (v = v.sibling));
                        }
                        c.type === ut
                            ? (((s = _d(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = yd(c.type, c.key, c.props, null, u.mode, h)).ref = nl(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return a(u);
                case lt:
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
                        (((s = kd(c, u.mode, h)).return = u), (u = s));
                    }
                    return a(u);
                case mt:
                    return l(u, s, (v = c._init)(c._payload), h);
            }
            if (Dt(c))
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
                    if (g === l.length) return (n(o, h), Ga && La(o, g), s);
                    if (null === h) {
                        for (; g < l.length; g++)
                            null !== (h = d(o, l[g], u)) &&
                                ((a = i(h, a, g)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Ga && La(o, g), s);
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
                        Ga && La(o, g),
                        s
                    );
                })(u, s, c, h);
            if (_t(c))
                return (function (o, a, l, u) {
                    var s = _t(l);
                    if ('function' != typeof s) throw Error(Ge(150));
                    if (null == (l = s.call(l))) throw Error(Ge(151));
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
                    if (m.done) return (n(o, h), Ga && La(o, g), s);
                    if (null === h) {
                        for (; !m.done; g++, m = l.next())
                            null !== (m = d(o, m.value, u)) &&
                                ((a = i(m, a, g)), null === c ? (s = m) : (c.sibling = m), (c = m));
                        return (Ga && La(o, g), s);
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
                        Ga && La(o, g),
                        s
                    );
                })(u, s, c, h);
            rl(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = o(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = Sd(c, u.mode, h)).return = u), (u = s)),
              a(u))
            : n(u, s);
    };
}
var al = il(!0),
    ll = il(!1),
    ul = ca(null),
    sl = null,
    cl = null,
    dl = null;
function fl() {
    dl = cl = sl = null;
}
function pl(e) {
    var t = ul.current;
    (da(ul), (e._currentValue = t));
}
function hl(e, t, n) {
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
function gl(e, t) {
    ((sl = e),
        (dl = cl = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (os = !0), (e.firstContext = null)));
}
function vl(e) {
    var t = e._currentValue;
    if (dl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === cl)) {
            if (null === sl) throw Error(Ge(308));
            ((cl = e), (sl.dependencies = { lanes: 0, firstContext: e }));
        } else cl = cl.next = e;
    return t;
}
var ml = null;
function bl(e) {
    null === ml ? (ml = [e]) : ml.push(e);
}
function yl(e, t, n, r) {
    var o = t.interleaved;
    return (null === o ? ((n.next = n), bl(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), _l(e, r));
}
function _l(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var wl = !1;
function Sl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function kl(e, t) {
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
function xl(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Cl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & pc))) {
        var o = r.pending;
        return (null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), _l(e, n));
    }
    return (
        null === (o = r.interleaved) ? ((t.next = t), bl(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        _l(e, n)
    );
}
function Ol(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), or(e, n));
    }
}
function Pl(e, t) {
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
function El(e, t, n, r) {
    var o = e.updateQueue;
    wl = !1;
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
                            d = St({}, d, f);
                            break e;
                        case 2:
                            wl = !0;
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
        ((wc |= a), (e.lanes = a), (e.memoizedState = d));
    }
}
function Rl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (null !== o) {
                if (((r.callback = null), (r = n), 'function' != typeof o)) throw Error(Ge(191, o));
                o.call(r);
            }
        }
}
var Al = {},
    Il = ca(Al),
    Ml = ca(Al),
    jl = ca(Al);
function Fl(e) {
    if (e === Al) throw Error(Ge(174));
    return e;
}
function Tl(e, t) {
    switch ((fa(jl, t), fa(Ml, e), fa(Il, Al), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Wt(null, '');
            break;
        default:
            t = Wt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (da(Il), fa(Il, t));
}
function Vl() {
    (da(Il), da(Ml), da(jl));
}
function Nl(e) {
    Fl(jl.current);
    var t = Fl(Il.current),
        n = Wt(t, e.type);
    t !== n && (fa(Ml, e), fa(Il, n));
}
function Ll(e) {
    Ml.current === e && (da(Il), da(Ml));
}
var zl = ca(0);
function Dl(e) {
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
var Bl = [];
function Ul() {
    for (var e = 0; e < Bl.length; e++) Bl[e]._workInProgressVersionPrimary = null;
    Bl.length = 0;
}
var Hl = it.ReactCurrentDispatcher,
    Gl = it.ReactCurrentBatchConfig,
    $l = 0,
    ql = null,
    Wl = null,
    Kl = null,
    Ql = !1,
    Xl = !1,
    Yl = 0,
    Jl = 0;
function Zl() {
    throw Error(Ge(321));
}
function eu(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wo(e[n], t[n])) return !1;
    return !0;
}
function tu(e, t, n, r, o, i) {
    if (
        (($l = i),
        (ql = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Hl.current = null === e || null === e.memoizedState ? Lu : zu),
        (e = n(r, o)),
        Xl)
    ) {
        i = 0;
        do {
            if (((Xl = !1), (Yl = 0), 25 <= i)) throw Error(Ge(301));
            ((i += 1), (Kl = Wl = null), (t.updateQueue = null), (Hl.current = Du), (e = n(r, o)));
        } while (Xl);
    }
    if (((Hl.current = Nu), (t = null !== Wl && null !== Wl.next), ($l = 0), (Kl = Wl = ql = null), (Ql = !1), t))
        throw Error(Ge(300));
    return e;
}
function nu() {
    var e = 0 !== Yl;
    return ((Yl = 0), e);
}
function ru() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Kl ? (ql.memoizedState = Kl = e) : (Kl = Kl.next = e), Kl);
}
function ou() {
    if (null === Wl) {
        var e = ql.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Wl.next;
    var t = null === Kl ? ql.memoizedState : Kl.next;
    if (null !== t) ((Kl = t), (Wl = e));
    else {
        if (null === e) throw Error(Ge(310));
        ((e = {
            memoizedState: (Wl = e).memoizedState,
            baseState: Wl.baseState,
            baseQueue: Wl.baseQueue,
            queue: Wl.queue,
            next: null,
        }),
            null === Kl ? (ql.memoizedState = Kl = e) : (Kl = Kl.next = e));
    }
    return Kl;
}
function iu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function au(e) {
    var t = ou(),
        n = t.queue;
    if (null === n) throw Error(Ge(311));
    n.lastRenderedReducer = e;
    var r = Wl,
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
            if (($l & c) === c)
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
                (null === u ? ((l = u = d), (a = r)) : (u = u.next = d), (ql.lanes |= c), (wc |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (a = r) : (u.next = l),
            Wo(r, t.memoizedState) || (os = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            ((i = o.lane), (ql.lanes |= i), (wc |= i), (o = o.next));
        } while (o !== e);
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function lu(e) {
    var t = ou(),
        n = t.queue;
    if (null === n) throw Error(Ge(311));
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
        (Wo(i, t.memoizedState) || (os = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function uu() {}
function su(e, t) {
    var n = ql,
        r = ou(),
        o = t(),
        i = !Wo(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (os = !0)),
        (r = r.queue),
        wu(fu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== Kl && 1 & Kl.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), vu(9, du.bind(null, n, r, o, t), void 0, null), null === hc)) throw Error(Ge(349));
        0 != (30 & $l) || cu(n, t, o);
    }
    return o;
}
function cu(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = ql.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (ql.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function du(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), pu(t) && hu(e));
}
function fu(e, t, n) {
    return n(function () {
        pu(t) && hu(e);
    });
}
function pu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Wo(e, n);
    } catch (r) {
        return !0;
    }
}
function hu(e) {
    var t = _l(e, 1);
    null !== t && Bc(t, e, 1, -1);
}
function gu(e) {
    var t = ru();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: iu,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = ju.bind(null, ql, e)),
        [t.memoizedState, e]
    );
}
function vu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = ql.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (ql.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function mu() {
    return ou().memoizedState;
}
function bu(e, t, n, r) {
    var o = ru();
    ((ql.flags |= e), (o.memoizedState = vu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function yu(e, t, n, r) {
    var o = ou();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== Wl) {
        var a = Wl.memoizedState;
        if (((i = a.destroy), null !== r && eu(r, a.deps))) return void (o.memoizedState = vu(t, n, i, r));
    }
    ((ql.flags |= e), (o.memoizedState = vu(1 | t, n, i, r)));
}
function _u(e, t) {
    return bu(8390656, 8, e, t);
}
function wu(e, t) {
    return yu(2048, 8, e, t);
}
function Su(e, t) {
    return yu(4, 2, e, t);
}
function ku(e, t) {
    return yu(4, 4, e, t);
}
function xu(e, t) {
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
function Cu(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), yu(4, 4, xu.bind(null, t, e), n));
}
function Ou() {}
function Pu(e, t) {
    var n = ou();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && eu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Eu(e, t) {
    var n = ou();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && eu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ru(e, t, n) {
    return 0 == (21 & $l)
        ? (e.baseState && ((e.baseState = !1), (os = !0)), (e.memoizedState = n))
        : (Wo(n, t) || ((n = tr()), (ql.lanes |= n), (wc |= n), (e.baseState = !0)), t);
}
function Au(e, t) {
    var n = ir;
    ((ir = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Gl.transition;
    Gl.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((ir = n), (Gl.transition = r));
    }
}
function Iu() {
    return ou().memoizedState;
}
function Mu(e, t, n) {
    var r = Dc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Fu(e))) Tu(t, n);
    else if (null !== (n = yl(e, t, n, r))) {
        (Bc(n, e, r, zc()), Vu(n, t, r));
    }
}
function ju(e, t, n) {
    var r = Dc(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Fu(e)) Tu(t, o);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    l = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Wo(l, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((o.next = o), bl(t)) : ((o.next = u.next), (u.next = o)),
                        void (t.interleaved = o)
                    );
                }
            } catch (s) {}
        null !== (n = yl(e, t, o, r)) && (Bc(n, e, r, (o = zc())), Vu(n, t, r));
    }
}
function Fu(e) {
    var t = e.alternate;
    return e === ql || (null !== t && t === ql);
}
function Tu(e, t) {
    Xl = Ql = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Vu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), or(e, n));
    }
}
var Nu = {
        readContext: vl,
        useCallback: Zl,
        useContext: Zl,
        useEffect: Zl,
        useImperativeHandle: Zl,
        useInsertionEffect: Zl,
        useLayoutEffect: Zl,
        useMemo: Zl,
        useReducer: Zl,
        useRef: Zl,
        useState: Zl,
        useDebugValue: Zl,
        useDeferredValue: Zl,
        useTransition: Zl,
        useMutableSource: Zl,
        useSyncExternalStore: Zl,
        useId: Zl,
        unstable_isNewReconciler: !1,
    },
    Lu = {
        readContext: vl,
        useCallback: function (e, t) {
            return ((ru().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: vl,
        useEffect: _u,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), bu(4194308, 4, xu.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return bu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return bu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = ru();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = ru();
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
                (e = e.dispatch = Mu.bind(null, ql, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (ru().memoizedState = e));
        },
        useState: gu,
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            return (ru().memoizedState = e);
        },
        useTransition: function () {
            var e = gu(!1),
                t = e[0];
            return ((e = Au.bind(null, e[1])), (ru().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ql,
                o = ru();
            if (Ga) {
                if (void 0 === n) throw Error(Ge(407));
                n = n();
            } else {
                if (((n = t()), null === hc)) throw Error(Ge(349));
                0 != (30 & $l) || cu(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                _u(fu.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                vu(9, du.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = ru(),
                t = hc.identifierPrefix;
            if (Ga) {
                var n = Na;
                ((t = ':' + t + 'R' + (n = (Va & ~(1 << (32 - qn(Va) - 1))).toString(32) + n)),
                    0 < (n = Yl++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Jl++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    zu = {
        readContext: vl,
        useCallback: Pu,
        useContext: vl,
        useEffect: wu,
        useImperativeHandle: Cu,
        useInsertionEffect: Su,
        useLayoutEffect: ku,
        useMemo: Eu,
        useReducer: au,
        useRef: mu,
        useState: function () {
            return au(iu);
        },
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            return Ru(ou(), Wl.memoizedState, e);
        },
        useTransition: function () {
            return [au(iu)[0], ou().memoizedState];
        },
        useMutableSource: uu,
        useSyncExternalStore: su,
        useId: Iu,
        unstable_isNewReconciler: !1,
    },
    Du = {
        readContext: vl,
        useCallback: Pu,
        useContext: vl,
        useEffect: wu,
        useImperativeHandle: Cu,
        useInsertionEffect: Su,
        useLayoutEffect: ku,
        useMemo: Eu,
        useReducer: lu,
        useRef: mu,
        useState: function () {
            return lu(iu);
        },
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            var t = ou();
            return null === Wl ? (t.memoizedState = e) : Ru(t, Wl.memoizedState, e);
        },
        useTransition: function () {
            return [lu(iu)[0], ou().memoizedState];
        },
        useMutableSource: uu,
        useSyncExternalStore: su,
        useId: Iu,
        unstable_isNewReconciler: !1,
    };
function Bu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = St({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Uu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : St({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Hu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && En(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = zc(),
            o = Dc(e),
            i = xl(r, o);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = Cl(e, i, o)) && (Bc(t, e, o, r), Ol(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = zc(),
            o = Dc(e),
            i = xl(r, o);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = Cl(e, i, o)) && (Bc(t, e, o, r), Ol(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = zc(),
            r = Dc(e),
            o = xl(n, r);
        ((o.tag = 2), null != t && (o.callback = t), null !== (t = Cl(e, o, r)) && (Bc(t, e, r, n), Ol(t, e, r)));
    },
};
function Gu(e, t, n, r, o, i, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !Ko(n, r) || !Ko(o, i);
}
function $u(e, t, n) {
    var r = !1,
        o = pa,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = vl(i))
            : ((o = ba(t) ? va : ha.current), (i = (r = null != (r = t.contextTypes)) ? ma(e, o) : pa)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Hu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function qu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Hu.enqueueReplaceState(t, t.state, null));
}
function Wu(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Sl(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (o.context = vl(i)) : ((i = ba(t) ? va : ha.current), (o.context = ma(e, i))),
        (o.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Uu(e, t, i, n), (o.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof o.getSnapshotBeforeUpdate ||
            ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
            ((t = o.state),
            'function' == typeof o.componentWillMount && o.componentWillMount(),
            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
            t !== o.state && Hu.enqueueReplaceState(o, o.state, null),
            El(e, n, o, r),
            (o.state = e.memoizedState)),
        'function' == typeof o.componentDidMount && (e.flags |= 4194308));
}
function Ku(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += Ot(r)), (r = r.return));
        } while (r);
        var o = n;
    } catch (i) {
        o = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Qu(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Xu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Yu = 'function' == typeof WeakMap ? WeakMap : Map;
function Ju(e, t, n) {
    (((n = xl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Rc || ((Rc = !0), (Ac = r)), Xu(0, t));
        }),
        n
    );
}
function Zu(e, t, n) {
    (n = xl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var o = t.value;
        ((n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Xu(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (Xu(0, t), 'function' != typeof r && (null === Ic ? (Ic = new Set([this])) : Ic.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function es(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Yu();
        var o = new Set();
        r.set(t, o);
    } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = cd.bind(null, e, t, n)), t.then(e, e));
}
function ts(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function ns(e, t, n, r, o) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = xl(-1, 1)).tag = 2), Cl(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = o), e);
}
var rs = it.ReactCurrentOwner,
    os = !1;
function is(e, t, n, r) {
    t.child = null === e ? ll(t, null, n, r) : al(t, e.child, n, r);
}
function as(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        gl(t, o),
        (r = tu(e, t, n, r, i, o)),
        (n = nu()),
        null === e || os
            ? (Ga && n && Da(t), (t.flags |= 1), is(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Rs(e, t, o))
    );
}
function ls(e, t, n, r, o) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            md(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = yd(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), us(e, t, i, r, o));
    }
    if (((i = e.child), 0 == (e.lanes & o))) {
        var a = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Ko)(a, r) && e.ref === t.ref) return Rs(e, t, o);
    }
    return ((t.flags |= 1), ((e = bd(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function us(e, t, n, r, o) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (Ko(i, r) && e.ref === t.ref) {
            if (((os = !1), (t.pendingProps = r = i), 0 == (e.lanes & o))) return ((t.lanes = e.lanes), Rs(e, t, o));
            0 != (131072 & e.flags) && (os = !0);
        }
    }
    return ds(e, t, n, r, o);
}
function ss(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), fa(bc, mc), (mc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    fa(bc, mc),
                    (mc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                fa(bc, mc),
                (mc |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), fa(bc, mc), (mc |= r));
    return (is(e, t, o, n), t.child);
}
function cs(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ds(e, t, n, r, o) {
    var i = ba(n) ? va : ha.current;
    return (
        (i = ma(t, i)),
        gl(t, o),
        (n = tu(e, t, n, r, i, o)),
        (r = nu()),
        null === e || os
            ? (Ga && r && Da(t), (t.flags |= 1), is(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Rs(e, t, o))
    );
}
function fs(e, t, n, r, o) {
    if (ba(n)) {
        var i = !0;
        Sa(t);
    } else i = !1;
    if ((gl(t, o), null === t.stateNode)) (Es(e, t), $u(t, n, r), Wu(t, n, r, o), (r = !0));
    else if (null === e) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var u = a.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = vl(s)) : (s = ma(t, (s = ba(n) ? va : ha.current)));
        var c = n.getDerivedStateFromProps,
            d = 'function' == typeof c || 'function' == typeof a.getSnapshotBeforeUpdate;
        (d ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== r || u !== s) && qu(t, a, r, s)),
            (wl = !1));
        var f = t.memoizedState;
        ((a.state = f),
            El(t, r, a, o),
            (u = t.memoizedState),
            l !== r || f !== u || ga.current || wl
                ? ('function' == typeof c && (Uu(t, n, c, r), (u = t.memoizedState)),
                  (l = wl || Gu(t, n, l, r, f, u, s))
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
            kl(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Bu(t.type, l)),
            (a.props = s),
            (d = t.pendingProps),
            (f = a.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = vl(u))
                : (u = ma(t, (u = ba(n) ? va : ha.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== d || f !== u) && qu(t, a, r, u)),
            (wl = !1),
            (f = t.memoizedState),
            (a.state = f),
            El(t, r, a, o));
        var h = t.memoizedState;
        l !== d || f !== h || ga.current || wl
            ? ('function' == typeof p && (Uu(t, n, p, r), (h = t.memoizedState)),
              (s = wl || Gu(t, n, s, r, f, h, u) || !1)
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
    return ps(e, t, n, r, i, o);
}
function ps(e, t, n, r, o, i) {
    cs(e, t);
    var a = 0 != (128 & t.flags);
    if (!r && !a) return (o && ka(t, n, !1), Rs(e, t, i));
    ((r = t.stateNode), (rs.current = t));
    var l = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = al(t, e.child, null, i)), (t.child = al(t, null, l, i))) : is(e, t, l, i),
        (t.memoizedState = r.state),
        o && ka(t, n, !0),
        t.child
    );
}
function hs(e) {
    var t = e.stateNode;
    (t.pendingContext ? _a(0, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(0, t.context, !1),
        Tl(e, t.containerInfo));
}
function gs(e, t, n, r, o) {
    return (Za(), el(o), (t.flags |= 256), is(e, t, n, r), t.child);
}
var vs,
    ms,
    bs,
    ys,
    _s = { dehydrated: null, treeContext: null, retryLane: 0 };
function ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ss(e, t, n) {
    var r,
        o = t.pendingProps,
        i = zl.current,
        a = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        fa(zl, 1 & i),
        null === e)
    )
        return (
            Qa(t),
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
                            : (a = wd(l, o, 0, null)),
                        (e = _d(e, o, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = ws(n)),
                        (t.memoizedState = _s),
                        e)
                      : ks(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, o, i, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), xs(e, t, a, (r = Qu(Error(Ge(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (o = t.mode),
                        (r = wd({ mode: 'visible', children: r.children }, o, 0, null)),
                        ((i = _d(i, o, a, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && al(t, e.child, null, a),
                        (t.child.memoizedState = ws(a)),
                        (t.memoizedState = _s),
                        i);
            if (0 == (1 & t.mode)) return xs(e, t, a, null);
            if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), xs(e, t, a, (r = Qu((i = Error(Ge(419))), r, void 0))));
            }
            if (((l = 0 != (a & e.childLanes)), os || l)) {
                if (null !== (r = hc)) {
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
                        ((i.retryLane = o), _l(e, o), Bc(r, e, o, -1));
                }
                return (ed(), xs(e, t, a, (r = Qu(Error(Ge(421))))));
            }
            return '$?' === o.data
                ? ((t.flags |= 128), (t.child = e.child), (t = fd.bind(null, e)), (o._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Ha = Qi(o.nextSibling)),
                  (Ua = t),
                  (Ga = !0),
                  ($a = null),
                  null !== e &&
                      ((ja[Fa++] = Va), (ja[Fa++] = Na), (ja[Fa++] = Ta), (Va = e.id), (Na = e.overflow), (Ta = t)),
                  (t = ks(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, o, r, i, n);
    if (a) {
        ((a = o.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: o.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = bd(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (a = bd(r, a)) : ((a = _d(a, l, n, null)).flags |= 2),
            (a.return = t),
            (o.return = t),
            (o.sibling = a),
            (t.child = o),
            (o = a),
            (a = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? ws(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (a.memoizedState = l),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = _s),
            o
        );
    }
    return (
        (e = (a = e.child).sibling),
        (o = bd(a, { mode: 'visible', children: o.children })),
        0 == (1 & t.mode) && (o.lanes = n),
        (o.return = t),
        (o.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
    );
}
function ks(e, t) {
    return (((t = wd({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function xs(e, t, n, r) {
    return (
        null !== r && el(r),
        al(t, e.child, null, n),
        ((e = ks(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Cs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), hl(e.return, t, n));
}
function Os(e, t, n, r, o) {
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
function Ps(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((is(e, t, r.children, n), 0 != (2 & (r = zl.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Cs(e, n, t);
                else if (19 === e.tag) Cs(e, n, t);
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
    if ((fa(zl, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (o) {
            case 'forwards':
                for (n = t.child, o = null; null !== n; )
                    (null !== (e = n.alternate) && null === Dl(e) && (o = n), (n = n.sibling));
                (null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    Os(t, !1, o, n, i));
                break;
            case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                    if (null !== (e = o.alternate) && null === Dl(e)) {
                        t.child = o;
                        break;
                    }
                    ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
                }
                Os(t, !0, n, null, i);
                break;
            case 'together':
                Os(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Es(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (wc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ge(153));
    if (null !== t.child) {
        for (n = bd((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = bd(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function As(e, t) {
    if (!Ga)
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
function Is(e) {
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
function Ms(e, t, n) {
    var r = t.pendingProps;
    switch ((Ba(t), t.tag)) {
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
            return (Is(t), null);
        case 1:
        case 17:
            return (ba(t.type) && ya(), Is(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Vl(),
                da(ga),
                da(ha),
                Ul(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Ya(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== $a && ($c($a), ($a = null)))),
                ms(e, t),
                Is(t),
                null
            );
        case 5:
            Ll(t);
            var o = Fl(jl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (bs(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ge(166));
                    return (Is(t), null);
                }
                if (((e = Fl(Il.current)), Ya(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[Ji] = t), (r[Zi] = i), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (Ci('cancel', r), Ci('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Ci('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (o = 0; o < wi.length; o++) Ci(wi[o], r);
                            break;
                        case 'source':
                            Ci('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (Ci('error', r), Ci('load', r));
                            break;
                        case 'details':
                            Ci('toggle', r);
                            break;
                        case 'input':
                            (Tt(r, i), Ci('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), Ci('invalid', r));
                            break;
                        case 'textarea':
                            (Ht(r, i), Ci('invalid', r));
                    }
                    for (var a in (rn(n, i), (o = null), i))
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            'children' === a
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && Li(r.textContent, l, e),
                                      (o = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && Li(r.textContent, l, e),
                                      (o = ['children', '' + l]))
                                : qe.hasOwnProperty(a) && null != l && 'onScroll' === a && Ci('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (It(r), Lt(r, i, !0));
                            break;
                        case 'textarea':
                            (It(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = zi);
                    }
                    ((r = o), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === o.nodeType ? o : o.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = qt(n)),
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
                        (e[Ji] = t),
                        (e[Zi] = r),
                        vs(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((a = on(n, r)), n)) {
                            case 'dialog':
                                (Ci('cancel', e), Ci('close', e), (o = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (Ci('load', e), (o = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (o = 0; o < wi.length; o++) Ci(wi[o], e);
                                o = r;
                                break;
                            case 'source':
                                (Ci('error', e), (o = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (Ci('error', e), Ci('load', e), (o = r));
                                break;
                            case 'details':
                                (Ci('toggle', e), (o = r));
                                break;
                            case 'input':
                                (Tt(e, r), (o = Ft(e, r)), Ci('invalid', e));
                                break;
                            case 'option':
                            default:
                                o = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = St({}, r, { value: void 0 })),
                                    Ci('invalid', e));
                                break;
                            case 'textarea':
                                (Ht(e, r), (o = Ut(e, r)), Ci('invalid', e));
                        }
                        for (i in (rn(n, o), (l = o)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? tn(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && Xt(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Yt(e, u)
                                            : 'number' == typeof u && Yt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (qe.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && Ci('scroll', e)
                                              : null != u && ot(e, i, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (It(e), Lt(e, r, !1));
                                break;
                            case 'textarea':
                                (It(e), $t(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Rt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? Bt(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && Bt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof o.onClick && (e.onclick = zi);
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
            return (Is(t), null);
        case 6:
            if (e && null != t.stateNode) ys(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ge(166));
                if (((n = Fl(jl.current)), Fl(Il.current), Ya(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ji] = t),
                        (i = r.nodeValue !== n) && null !== (e = Ua))
                    )
                        switch (e.tag) {
                            case 3:
                                Li(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Li(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ji] = t), (t.stateNode = r));
            }
            return (Is(t), null);
        case 13:
            if (
                (da(zl),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Ga && null !== Ha && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ja(), Za(), (t.flags |= 98560), (i = !1));
                else if (((i = Ya(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Ge(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ge(317));
                        i[Ji] = t;
                    } else (Za(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Is(t), (i = !1));
                } else (null !== $a && ($c($a), ($a = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & zl.current) ? 0 === yc && (yc = 3) : ed())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Is(t),
                  null);
        case 4:
            return (Vl(), ms(e, t), null === e && Ei(t.stateNode.containerInfo), Is(t), null);
        case 10:
            return (pl(t.type._context), Is(t), null);
        case 19:
            if ((da(zl), null === (i = t.memoizedState))) return (Is(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
                if (r) As(i, !1);
                else {
                    if (0 !== yc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Dl(e))) {
                                for (
                                    t.flags |= 128,
                                        As(i, !1),
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
                                return (fa(zl, (1 & zl.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && Nn() > Pc && ((t.flags |= 128), (r = !0), As(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Dl(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            As(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !a.alternate && !Ga)
                        )
                            return (Is(t), null);
                    } else
                        2 * Nn() - i.renderingStartTime > Pc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), As(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (n = i.last) ? (n.sibling = a) : (t.child = a), (i.last = a));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Nn()),
                  (t.sibling = null),
                  (n = zl.current),
                  fa(zl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Is(t), null);
        case 22:
        case 23:
            return (
                Xc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & mc) && (Is(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Is(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ge(156, t.tag));
}
function js(e, t) {
    switch ((Ba(t), t.tag)) {
        case 1:
            return (ba(t.type) && ya(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Vl(),
                da(ga),
                da(ha),
                Ul(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Ll(t), null);
        case 13:
            if ((da(zl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ge(340));
                Za();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (da(zl), null);
        case 4:
            return (Vl(), null);
        case 10:
            return (pl(t.type._context), null);
        case 22:
        case 23:
            return (Xc(), null);
        default:
            return null;
    }
}
((vs = function (e, t) {
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
    (ms = function () {}),
    (bs = function (e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            ((e = t.stateNode), Fl(Il.current));
            var i,
                a = null;
            switch (n) {
                case 'input':
                    ((o = Ft(e, o)), (r = Ft(e, r)), (a = []));
                    break;
                case 'select':
                    ((o = St({}, o, { value: void 0 })), (r = St({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((o = Ut(e, o)), (r = Ut(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof o.onClick && 'function' == typeof r.onClick && (e.onclick = zi);
            }
            for (s in (rn(n, r), (n = null), o))
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
                            (qe.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
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
                                (qe.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && Ci('scroll', e), a || l === u || (a = []))
                                    : (a = a || []).push(s, u));
            }
            n && (a = a || []).push('style', n);
            var s = a;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (ys = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Fs = !1,
    Ts = !1,
    Vs = 'function' == typeof WeakSet ? WeakSet : Set,
    Ns = null;
function Ls(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                sd(e, t, r);
            }
        else n.current = null;
}
function zs(e, t, n) {
    try {
        n();
    } catch (r) {
        sd(e, t, r);
    }
}
var Ds = !1;
function Bs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                ((o.destroy = void 0), void 0 !== i && zs(t, n, i));
            }
            o = o.next;
        } while (o !== r);
    }
}
function Us(e, t) {
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
function Hs(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Gs(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Gs(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ji], delete t[Zi], delete t[ta], delete t[na], delete t[ra]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function $s(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function qs(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || $s(e.return)) return null;
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
function Ws(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = zi)));
    else if (4 !== r && null !== (e = e.child))
        for (Ws(e, t, n), e = e.sibling; null !== e; ) (Ws(e, t, n), (e = e.sibling));
}
function Ks(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Ks(e, t, n), e = e.sibling; null !== e; ) (Ks(e, t, n), (e = e.sibling));
}
var Qs = null,
    Xs = !1;
function Ys(e, t, n) {
    for (n = n.child; null !== n; ) (Js(e, t, n), (n = n.sibling));
}
function Js(e, t, n) {
    if ($n && 'function' == typeof $n.onCommitFiberUnmount)
        try {
            $n.onCommitFiberUnmount(Gn, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Ts || Ls(n, t);
        case 6:
            var r = Qs,
                o = Xs;
            ((Qs = null),
                Ys(e, t, n),
                (Xs = o),
                null !== (Qs = r) &&
                    (Xs
                        ? ((e = Qs),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Qs.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Qs &&
                (Xs
                    ? ((e = Qs),
                      (n = n.stateNode),
                      8 === e.nodeType ? Ki(e.parentNode, n) : 1 === e.nodeType && Ki(e, n),
                      Er(e))
                    : Ki(Qs, n.stateNode));
            break;
        case 4:
            ((r = Qs), (o = Xs), (Qs = n.stateNode.containerInfo), (Xs = !0), Ys(e, t, n), (Qs = r), (Xs = o));
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
                    ((i = i.tag), void 0 !== a && (0 != (2 & i) || 0 != (4 & i)) && zs(n, t, a), (o = o.next));
                } while (o !== r);
            }
            Ys(e, t, n);
            break;
        case 1:
            if (!Ts && (Ls(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    sd(n, t, l);
                }
            Ys(e, t, n);
            break;
        case 21:
            Ys(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Ts = (r = Ts) || null !== n.memoizedState), Ys(e, t, n), (Ts = r)) : Ys(e, t, n);
            break;
        default:
            Ys(e, t, n);
    }
}
function Zs(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Vs()),
            t.forEach(function (t) {
                var r = pd.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function ec(e, t) {
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
                            ((Qs = l.stateNode), (Xs = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Qs = l.stateNode.containerInfo), (Xs = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Qs) throw Error(Ge(160));
                (Js(i, a, o), (Qs = null), (Xs = !1));
                var u = o.alternate;
                (null !== u && (u.return = null), (o.return = null));
            } catch (s) {
                sd(o, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (tc(t, e), (t = t.sibling));
}
function tc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ec(t, e), nc(e), 4 & r)) {
                try {
                    (Bs(3, e, e.return), Us(3, e));
                } catch (g) {
                    sd(e, e.return, g);
                }
                try {
                    Bs(5, e, e.return);
                } catch (g) {
                    sd(e, e.return, g);
                }
            }
            break;
        case 1:
            (ec(t, e), nc(e), 512 & r && null !== n && Ls(n, n.return));
            break;
        case 5:
            if ((ec(t, e), nc(e), 512 & r && null !== n && Ls(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                    Yt(o, '');
                } catch (g) {
                    sd(e, e.return, g);
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                    a = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && Vt(o, i), on(l, a));
                        var s = on(l, i);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                d = u[a + 1];
                            'style' === c
                                ? tn(o, d)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Xt(o, d)
                                  : 'children' === c
                                    ? Yt(o, d)
                                    : ot(o, c, d, s);
                        }
                        switch (l) {
                            case 'input':
                                Nt(o, i);
                                break;
                            case 'textarea':
                                Gt(o, i);
                                break;
                            case 'select':
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? Bt(o, !!i.multiple, p, !1)
                                    : f !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? Bt(o, !!i.multiple, i.defaultValue, !0)
                                          : Bt(o, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        o[Zi] = i;
                    } catch (g) {
                        sd(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((ec(t, e), nc(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ge(162));
                ((o = e.stateNode), (i = e.memoizedProps));
                try {
                    o.nodeValue = i;
                } catch (g) {
                    sd(e, e.return, g);
                }
            }
            break;
        case 3:
            if ((ec(t, e), nc(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Er(t.containerInfo);
                } catch (g) {
                    sd(e, e.return, g);
                }
            break;
        case 4:
        default:
            (ec(t, e), nc(e));
            break;
        case 13:
            (ec(t, e),
                nc(e),
                8192 & (o = e.child).flags &&
                    ((i = null !== o.memoizedState),
                    (o.stateNode.isHidden = i),
                    !i || (null !== o.alternate && null !== o.alternate.memoizedState) || (Oc = Nn())),
                4 & r && Zs(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ts = (s = Ts) || c), ec(t, e), (Ts = s)) : ec(t, e),
                nc(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (Ns = e, c = e.child; null !== c; ) {
                        for (d = Ns = c; null !== Ns; ) {
                            switch (((p = (f = Ns).child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Bs(4, f, f.return);
                                    break;
                                case 1:
                                    Ls(f, f.return);
                                    var h = f.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = f), (n = f.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (g) {
                                            sd(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ls(f, f.return);
                                    break;
                                case 22:
                                    if (null !== f.memoizedState) {
                                        ac(d);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = f), (Ns = p)) : ac(d);
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
                                          (l.style.display = en('display', a))));
                            } catch (g) {
                                sd(e, e.return, g);
                            }
                        }
                    } else if (6 === d.tag) {
                        if (null === c)
                            try {
                                d.stateNode.nodeValue = s ? '' : d.memoizedProps;
                            } catch (g) {
                                sd(e, e.return, g);
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
            (ec(t, e), nc(e), 4 & r && Zs(e));
        case 21:
    }
}
function nc(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if ($s(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ge(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    (32 & r.flags && (Yt(o, ''), (r.flags &= -33)), Ks(e, qs(e), o));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    Ws(e, qs(e), i);
                    break;
                default:
                    throw Error(Ge(161));
            }
        } catch (a) {
            sd(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function rc(e, t, n) {
    ((Ns = e), oc(e));
}
function oc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Ns; ) {
        var o = Ns,
            i = o.child;
        if (22 === o.tag && r) {
            var a = null !== o.memoizedState || Fs;
            if (!a) {
                var l = o.alternate,
                    u = (null !== l && null !== l.memoizedState) || Ts;
                l = Fs;
                var s = Ts;
                if (((Fs = a), (Ts = u) && !s))
                    for (Ns = o; null !== Ns; )
                        ((u = (a = Ns).child),
                            22 === a.tag && null !== a.memoizedState
                                ? lc(o)
                                : null !== u
                                  ? ((u.return = a), (Ns = u))
                                  : lc(o));
                for (; null !== i; ) ((Ns = i), oc(i), (i = i.sibling));
                ((Ns = o), (Fs = l), (Ts = s));
            }
            ic(e);
        } else 0 != (8772 & o.subtreeFlags) && null !== i ? ((i.return = o), (Ns = i)) : ic(e);
    }
}
function ic(e) {
    for (; null !== Ns; ) {
        var t = Ns;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ts || Us(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Ts)
                                if (null === n) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Bu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && Rl(t, i, r);
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
                                Rl(t, a, n);
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
                                        null !== d && Er(d);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ge(163));
                    }
                Ts || (512 & t.flags && Hs(t));
            } catch (f) {
                sd(t, t.return, f);
            }
        }
        if (t === e) {
            Ns = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Ns = n));
            break;
        }
        Ns = t.return;
    }
}
function ac(e) {
    for (; null !== Ns; ) {
        var t = Ns;
        if (t === e) {
            Ns = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Ns = n));
            break;
        }
        Ns = t.return;
    }
}
function lc(e) {
    for (; null !== Ns; ) {
        var t = Ns;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Us(4, t);
                    } catch (u) {
                        sd(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            sd(t, o, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Hs(t);
                    } catch (u) {
                        sd(t, i, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Hs(t);
                    } catch (u) {
                        sd(t, a, u);
                    }
            }
        } catch (u) {
            sd(t, t.return, u);
        }
        if (t === e) {
            Ns = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (Ns = l));
            break;
        }
        Ns = t.return;
    }
}
var uc,
    sc = Math.ceil,
    cc = it.ReactCurrentDispatcher,
    dc = it.ReactCurrentOwner,
    fc = it.ReactCurrentBatchConfig,
    pc = 0,
    hc = null,
    gc = null,
    vc = 0,
    mc = 0,
    bc = ca(0),
    yc = 0,
    _c = null,
    wc = 0,
    Sc = 0,
    kc = 0,
    xc = null,
    Cc = null,
    Oc = 0,
    Pc = 1 / 0,
    Ec = null,
    Rc = !1,
    Ac = null,
    Ic = null,
    Mc = !1,
    jc = null,
    Fc = 0,
    Tc = 0,
    Vc = null,
    Nc = -1,
    Lc = 0;
function zc() {
    return 0 != (6 & pc) ? Nn() : -1 !== Nc ? Nc : (Nc = Nn());
}
function Dc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & pc) && 0 !== vc
          ? vc & -vc
          : null !== tl.transition
            ? (0 === Lc && (Lc = tr()), Lc)
            : 0 !== (e = ir)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Vr(e.type));
}
function Bc(e, t, n, r) {
    if (50 < Tc) throw ((Tc = 0), (Vc = null), Error(Ge(185)));
    (rr(e, n, r),
        (0 != (2 & pc) && e === hc) ||
            (e === hc && (0 == (2 & pc) && (Sc |= n), 4 === yc && qc(e, vc)),
            Uc(e, r),
            1 === n && 0 === pc && 0 == (1 & t.mode) && ((Pc = Nn() + 500), Ca && Ea())));
}
function Uc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var a = 31 - qn(i),
                l = 1 << a,
                u = o[a];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (o[a] = Zn(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = Jn(e, e === hc ? vc : 0);
    if (0 === r) (null !== n && Fn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Fn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((Ca = !0), Pa(e));
                  })(Wc.bind(null, e))
                : Pa(Wc.bind(null, e)),
                qi(function () {
                    0 == (6 & pc) && Ea();
                }),
                (n = null));
        else {
            switch (ar(r)) {
                case 1:
                    n = zn;
                    break;
                case 4:
                    n = Dn;
                    break;
                case 16:
                default:
                    n = Bn;
                    break;
                case 536870912:
                    n = Hn;
            }
            n = hd(n, Hc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Hc(e, t) {
    if (((Nc = -1), (Lc = 0), 0 != (6 & pc))) throw Error(Ge(327));
    var n = e.callbackNode;
    if (ld() && e.callbackNode !== n) return null;
    var r = Jn(e, e === hc ? vc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = td(e, r);
    else {
        t = r;
        var o = pc;
        pc |= 2;
        var i = Zc();
        for ((hc === e && vc === t) || ((Ec = null), (Pc = Nn() + 500), Yc(e, t)); ; )
            try {
                rd();
                break;
            } catch (l) {
                Jc(e, l);
            }
        (fl(), (cc.current = i), (pc = o), null !== gc ? (t = 0) : ((hc = null), (vc = 0), (t = yc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (o = er(e)) && ((r = o), (t = Gc(e, o))), 1 === t))
            throw ((n = _c), Yc(e, 0), qc(e, r), Uc(e, Nn()), n);
        if (6 === t) qc(e, r);
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
                                            if (!Wo(i(), o)) return !1;
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
                    (2 === (t = td(e, r)) && 0 !== (i = er(e)) && ((r = i), (t = Gc(e, i))), 1 === t))
            )
                throw ((n = _c), Yc(e, 0), qc(e, r), Uc(e, Nn()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ge(345));
                case 2:
                case 5:
                    ad(e, Cc, Ec);
                    break;
                case 3:
                    if ((qc(e, r), (130023424 & r) === r && 10 < (t = Oc + 500 - Nn()))) {
                        if (0 !== Jn(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            (zc(), (e.pingedLanes |= e.suspendedLanes & o));
                            break;
                        }
                        e.timeoutHandle = Hi(ad.bind(null, e, Cc, Ec), t);
                        break;
                    }
                    ad(e, Cc, Ec);
                    break;
                case 4:
                    if ((qc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var a = 31 - qn(r);
                        ((i = 1 << a), (a = t[a]) > o && (o = a), (r &= ~i));
                    }
                    if (
                        ((r = o),
                        10 <
                            (r =
                                (120 > (r = Nn() - r)
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
                                              : 1960 * sc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Hi(ad.bind(null, e, Cc, Ec), r);
                        break;
                    }
                    ad(e, Cc, Ec);
                    break;
                default:
                    throw Error(Ge(329));
            }
        }
    }
    return (Uc(e, Nn()), e.callbackNode === n ? Hc.bind(null, e) : null);
}
function Gc(e, t) {
    var n = xc;
    return (
        e.current.memoizedState.isDehydrated && (Yc(e, t).flags |= 256),
        2 !== (e = td(e, t)) && ((t = Cc), (Cc = n), null !== t && $c(t)),
        e
    );
}
function $c(e) {
    null === Cc ? (Cc = e) : Cc.push.apply(Cc, e);
}
function qc(e, t) {
    for (t &= ~kc, t &= ~Sc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - qn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Wc(e) {
    if (0 != (6 & pc)) throw Error(Ge(327));
    ld();
    var t = Jn(e, 0);
    if (0 == (1 & t)) return (Uc(e, Nn()), null);
    var n = td(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = er(e);
        0 !== r && ((t = r), (n = Gc(e, r)));
    }
    if (1 === n) throw ((n = _c), Yc(e, 0), qc(e, t), Uc(e, Nn()), n);
    if (6 === n) throw Error(Ge(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), ad(e, Cc, Ec), Uc(e, Nn()), null);
}
function Kc(e, t) {
    var n = pc;
    pc |= 1;
    try {
        return e(t);
    } finally {
        0 === (pc = n) && ((Pc = Nn() + 500), Ca && Ea());
    }
}
function Qc(e) {
    null !== jc && 0 === jc.tag && 0 == (6 & pc) && ld();
    var t = pc;
    pc |= 1;
    var n = fc.transition,
        r = ir;
    try {
        if (((fc.transition = null), (ir = 1), e)) return e();
    } finally {
        ((ir = r), (fc.transition = n), 0 == (6 & (pc = t)) && Ea());
    }
}
function Xc() {
    ((mc = bc.current), da(bc));
}
function Yc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Gi(n)), null !== gc))
        for (n = gc.return; null !== n; ) {
            var r = n;
            switch ((Ba(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ya();
                    break;
                case 3:
                    (Vl(), da(ga), da(ha), Ul());
                    break;
                case 5:
                    Ll(r);
                    break;
                case 4:
                    Vl();
                    break;
                case 13:
                case 19:
                    da(zl);
                    break;
                case 10:
                    pl(r.type._context);
                    break;
                case 22:
                case 23:
                    Xc();
            }
            n = n.return;
        }
    if (
        ((hc = e),
        (gc = e = bd(e.current, null)),
        (vc = mc = t),
        (yc = 0),
        (_c = null),
        (kc = Sc = wc = 0),
        (Cc = xc = null),
        null !== ml)
    ) {
        for (t = 0; t < ml.length; t++)
            if (null !== (r = (n = ml[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (null !== i) {
                    var a = i.next;
                    ((i.next = o), (r.next = a));
                }
                n.pending = r;
            }
        ml = null;
    }
    return e;
}
function Jc(e, t) {
    for (;;) {
        var n = gc;
        try {
            if ((fl(), (Hl.current = Nu), Ql)) {
                for (var r = ql.memoizedState; null !== r; ) {
                    var o = r.queue;
                    (null !== o && (o.pending = null), (r = r.next));
                }
                Ql = !1;
            }
            if (
                (($l = 0),
                (Kl = Wl = ql = null),
                (Xl = !1),
                (Yl = 0),
                (dc.current = null),
                null === n || null === n.return)
            ) {
                ((yc = 1), (_c = t), (gc = null));
                break;
            }
            e: {
                var i = e,
                    a = n.return,
                    l = n,
                    u = t;
                if (((t = vc), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var p = ts(a);
                    if (null !== p) {
                        ((p.flags &= -257), ns(p, a, l, 0, t), 1 & p.mode && es(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var g = new Set();
                            (g.add(u), (t.updateQueue = g));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (es(i, s, t), ed());
                        break e;
                    }
                    u = Error(Ge(426));
                } else if (Ga && 1 & l.mode) {
                    var v = ts(a);
                    if (null !== v) {
                        (0 == (65536 & v.flags) && (v.flags |= 256), ns(v, a, l, 0, t), el(Ku(u, l)));
                        break e;
                    }
                }
                ((i = u = Ku(u, l)), 4 !== yc && (yc = 2), null === xc ? (xc = [i]) : xc.push(i), (i = a));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Pl(i, Ju(0, u, t)));
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
                                        (null === Ic || !Ic.has(b))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Pl(i, Zu(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
            }
            id(n);
        } catch (y) {
            ((t = y), gc === n && null !== n && (gc = n = n.return));
            continue;
        }
        break;
    }
}
function Zc() {
    var e = cc.current;
    return ((cc.current = Nu), null === e ? Nu : e);
}
function ed() {
    ((0 !== yc && 3 !== yc && 2 !== yc) || (yc = 4),
        null === hc || (0 == (268435455 & wc) && 0 == (268435455 & Sc)) || qc(hc, vc));
}
function td(e, t) {
    var n = pc;
    pc |= 2;
    var r = Zc();
    for ((hc === e && vc === t) || ((Ec = null), Yc(e, t)); ; )
        try {
            nd();
            break;
        } catch (o) {
            Jc(e, o);
        }
    if ((fl(), (pc = n), (cc.current = r), null !== gc)) throw Error(Ge(261));
    return ((hc = null), (vc = 0), yc);
}
function nd() {
    for (; null !== gc; ) od(gc);
}
function rd() {
    for (; null !== gc && !Tn(); ) od(gc);
}
function od(e) {
    var t = uc(e.alternate, e, mc);
    ((e.memoizedProps = e.pendingProps), null === t ? id(e) : (gc = t), (dc.current = null));
}
function id(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Ms(n, t, mc))) return void (gc = n);
        } else {
            if (null !== (n = js(n, t))) return ((n.flags &= 32767), void (gc = n));
            if (null === e) return ((yc = 6), void (gc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (gc = t);
        gc = t = e;
    } while (null !== t);
    0 === yc && (yc = 5);
}
function ad(e, t, n) {
    var r = ir,
        o = fc.transition;
    try {
        ((fc.transition = null),
            (ir = 1),
            (function (e, t, n, r) {
                do {
                    ld();
                } while (null !== jc);
                if (0 != (6 & pc)) throw Error(Ge(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ge(177));
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
                            var o = 31 - qn(n),
                                i = 1 << o;
                            ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === hc && ((gc = hc = null), (vc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Mc ||
                        ((Mc = !0),
                        hd(Bn, function () {
                            return (ld(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = fc.transition), (fc.transition = null));
                    var a = ir;
                    ir = 1;
                    var l = pc;
                    ((pc |= 4),
                        (dc.current = null),
                        (function (e, t) {
                            if (((Di = Ar), Zo((e = Jo())))) {
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
                            for (Bi = { focusedElem: e, selectionRange: n }, Ar = !1, Ns = t; null !== Ns; )
                                if (((e = (t = Ns).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Ns = e));
                                else
                                    for (; null !== Ns; ) {
                                        t = Ns;
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
                                                                    t.elementType === t.type ? g : Bu(t.type, g),
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
                                                        throw Error(Ge(163));
                                                }
                                        } catch (_) {
                                            sd(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Ns = e));
                                            break;
                                        }
                                        Ns = t.return;
                                    }
                            ((h = Ds), (Ds = !1));
                        })(e, n),
                        tc(n, e),
                        ei(Bi),
                        (Ar = !!Di),
                        (Bi = Di = null),
                        (e.current = n),
                        rc(n),
                        Vn(),
                        (pc = l),
                        (ir = a),
                        (fc.transition = i));
                } else e.current = n;
                if (
                    (Mc && ((Mc = !1), (jc = e), (Fc = o)),
                    (i = e.pendingLanes),
                    0 === i && (Ic = null),
                    (function (e) {
                        if ($n && 'function' == typeof $n.onCommitFiberRoot)
                            try {
                                $n.onCommitFiberRoot(Gn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Uc(e, Nn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
                if (Rc) throw ((Rc = !1), (e = Ac), (Ac = null), e);
                (0 != (1 & Fc) && 0 !== e.tag && ld(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Vc ? Tc++ : ((Tc = 0), (Vc = e))) : (Tc = 0),
                    Ea());
            })(e, t, n, r));
    } finally {
        ((fc.transition = o), (ir = r));
    }
    return null;
}
function ld() {
    if (null !== jc) {
        var e = ar(Fc),
            t = fc.transition,
            n = ir;
        try {
            if (((fc.transition = null), (ir = 16 > e ? 16 : e), null === jc)) var r = !1;
            else {
                if (((e = jc), (jc = null), (Fc = 0), 0 != (6 & pc))) throw Error(Ge(331));
                var o = pc;
                for (pc |= 4, Ns = e.current; null !== Ns; ) {
                    var i = Ns,
                        a = i.child;
                    if (0 != (16 & Ns.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (Ns = s; null !== Ns; ) {
                                    var c = Ns;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Bs(8, c, i);
                                    }
                                    var d = c.child;
                                    if (null !== d) ((d.return = c), (Ns = d));
                                    else
                                        for (; null !== Ns; ) {
                                            var f = (c = Ns).sibling,
                                                p = c.return;
                                            if ((Gs(c), c === s)) {
                                                Ns = null;
                                                break;
                                            }
                                            if (null !== f) {
                                                ((f.return = p), (Ns = f));
                                                break;
                                            }
                                            Ns = p;
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
                            Ns = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== a) ((a.return = i), (Ns = a));
                    else
                        e: for (; null !== Ns; ) {
                            if (0 != (2048 & (i = Ns).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bs(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (null !== m) {
                                ((m.return = i.return), (Ns = m));
                                break e;
                            }
                            Ns = i.return;
                        }
                }
                var b = e.current;
                for (Ns = b; null !== Ns; ) {
                    var y = (a = Ns).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== y) ((y.return = a), (Ns = y));
                    else
                        e: for (a = b; null !== Ns; ) {
                            if (0 != (2048 & (l = Ns).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Us(9, l);
                                    }
                                } catch (w) {
                                    sd(l, l.return, w);
                                }
                            if (l === a) {
                                Ns = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (Ns = _));
                                break e;
                            }
                            Ns = l.return;
                        }
                }
                if (((pc = o), Ea(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
                    try {
                        $n.onPostCommitFiberRoot(Gn, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((ir = n), (fc.transition = t));
        }
    }
    return !1;
}
function ud(e, t, n) {
    ((e = Cl(e, (t = Ju(0, (t = Ku(n, t)), 1)), 1)), (t = zc()), null !== e && (rr(e, 1, t), Uc(e, t)));
}
function sd(e, t, n) {
    if (3 === e.tag) ud(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                ud(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Ic || !Ic.has(r)))
                ) {
                    ((t = Cl(t, (e = Zu(t, (e = Ku(n, e)), 1)), 1)), (e = zc()), null !== t && (rr(t, 1, e), Uc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function cd(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = zc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        hc === e &&
            (vc & n) === n &&
            (4 === yc || (3 === yc && (130023424 & vc) === vc && 500 > Nn() - Oc) ? Yc(e, 0) : (kc |= n)),
        Uc(e, t));
}
function dd(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Xn), 0 == (130023424 & (Xn <<= 1)) && (Xn = 4194304)));
    var n = zc();
    null !== (e = _l(e, t)) && (rr(e, t, n), Uc(e, n));
}
function fd(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), dd(e, n));
}
function pd(e, t) {
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
            throw Error(Ge(314));
    }
    (null !== r && r.delete(t), dd(e, n));
}
function hd(e, t) {
    return jn(e, t);
}
function gd(e, t, n, r) {
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
function vd(e, t, n, r) {
    return new gd(e, t, n, r);
}
function md(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function bd(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = vd(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function yd(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), 'function' == typeof e)) md(e) && (a = 1);
    else if ('string' == typeof e) a = 5;
    else
        e: switch (e) {
            case ut:
                return _d(n.children, o, i, t);
            case st:
                ((a = 8), (o |= 8));
                break;
            case ct:
                return (((e = vd(12, n, t, 2 | o)).elementType = ct), (e.lanes = i), e);
            case ht:
                return (((e = vd(13, n, t, o)).elementType = ht), (e.lanes = i), e);
            case gt:
                return (((e = vd(19, n, t, o)).elementType = gt), (e.lanes = i), e);
            case bt:
                return wd(n, o, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case dt:
                            a = 10;
                            break e;
                        case ft:
                            a = 9;
                            break e;
                        case pt:
                            a = 11;
                            break e;
                        case vt:
                            a = 14;
                            break e;
                        case mt:
                            ((a = 16), (r = null));
                            break e;
                    }
                throw Error(Ge(130, null == e ? e : typeof e, ''));
        }
    return (((t = vd(a, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function _d(e, t, n, r) {
    return (((e = vd(7, e, r, t)).lanes = n), e);
}
function wd(e, t, n, r) {
    return (((e = vd(22, e, r, t)).elementType = bt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function Sd(e, t, n) {
    return (((e = vd(6, e, null, t)).lanes = n), e);
}
function kd(e, t, n) {
    return (
        ((t = vd(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function xd(e, t, n, r, o) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = nr(0)),
        (this.expirationTimes = nr(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = nr(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null));
}
function Cd(e, t, n, r, o, i, a, l, u) {
    return (
        (e = new xd(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = vd(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Sl(i),
        e
    );
}
function Od(e) {
    if (!e) return pa;
    e: {
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ge(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ba(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Ge(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ba(n)) return wa(e, n, t);
    }
    return t;
}
function Pd(e, t, n, r, o, i, a, l, u) {
    return (
        ((e = Cd(n, r, !0, e, 0, i, 0, l, u)).context = Od(null)),
        (n = e.current),
        ((i = xl((r = zc()), (o = Dc(n)))).callback = null != t ? t : null),
        Cl(n, i, o),
        (e.current.lanes = o),
        rr(e, o, r),
        Uc(e, r),
        e
    );
}
function Ed(e, t, n, r) {
    var o = t.current,
        i = zc(),
        a = Dc(o);
    return (
        (n = Od(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = xl(i, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Cl(o, t, a)) && (Bc(e, o, a, i), Ol(e, o, a)),
        a
    );
}
function Rd(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Ad(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Id(e, t) {
    (Ad(e, t), (e = e.alternate) && Ad(e, t));
}
uc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || ga.current) os = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (os = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (hs(t), Za());
                                break;
                            case 5:
                                Nl(t);
                                break;
                            case 1:
                                ba(t.type) && Sa(t);
                                break;
                            case 4:
                                Tl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    o = t.memoizedProps.value;
                                (fa(ul, r._currentValue), (r._currentValue = o));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (fa(zl, 1 & zl.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? Ss(e, t, n)
                                          : (fa(zl, 1 & zl.current), null !== (e = Rs(e, t, n)) ? e.sibling : null);
                                fa(zl, 1 & zl.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ps(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (o = t.memoizedState) &&
                                        ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                                    fa(zl, zl.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), ss(e, t, n));
                        }
                        return Rs(e, t, n);
                    })(e, t, n)
                );
            os = 0 != (131072 & e.flags);
        }
    else ((os = !1), Ga && 0 != (1048576 & t.flags) && za(t, Ma, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Es(e, t), (e = t.pendingProps));
            var o = ma(t, ha.current);
            (gl(t, n), (o = tu(null, t, r, e, o, n)));
            var i = nu();
            return (
                (t.flags |= 1),
                'object' == typeof o && null !== o && 'function' == typeof o.render && void 0 === o.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ba(r) ? ((i = !0), Sa(t)) : (i = !1),
                      (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                      Sl(t),
                      (o.updater = Hu),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Wu(t, r, e, n),
                      (t = ps(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Ga && i && Da(t), is(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Es(e, t),
                    (e = t.pendingProps),
                    (r = (o = r._init)(r._payload)),
                    (t.type = r),
                    (o = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return md(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === pt) return 11;
                                if (e === vt) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Bu(r, e)),
                    o)
                ) {
                    case 0:
                        t = ds(null, t, r, e, n);
                        break e;
                    case 1:
                        t = fs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = as(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ls(null, t, r, Bu(r.type, e), n);
                        break e;
                }
                throw Error(Ge(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (o = t.pendingProps), ds(e, t, r, (o = t.elementType === r ? o : Bu(r, o)), n));
        case 1:
            return ((r = t.type), (o = t.pendingProps), fs(e, t, r, (o = t.elementType === r ? o : Bu(r, o)), n));
        case 3:
            e: {
                if ((hs(t), null === e)) throw Error(Ge(387));
                ((r = t.pendingProps), (o = (i = t.memoizedState).element), kl(e, t), El(t, r, null, n));
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
                        t = gs(e, t, r, n, (o = Ku(Error(Ge(423)), t)));
                        break e;
                    }
                    if (r !== o) {
                        t = gs(e, t, r, n, (o = Ku(Error(Ge(424)), t)));
                        break e;
                    }
                    for (
                        Ha = Qi(t.stateNode.containerInfo.firstChild),
                            Ua = t,
                            Ga = !0,
                            $a = null,
                            n = ll(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Za(), r === o)) {
                        t = Rs(e, t, n);
                        break e;
                    }
                    is(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Nl(t),
                null === e && Qa(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (a = o.children),
                Ui(r, o) ? (a = null) : null !== i && Ui(r, i) && (t.flags |= 32),
                cs(e, t),
                is(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && Qa(t), null);
        case 13:
            return Ss(e, t, n);
        case 4:
            return (
                Tl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = al(t, null, r, n)) : is(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (o = t.pendingProps), as(e, t, r, (o = t.elementType === r ? o : Bu(r, o)), n));
        case 7:
            return (is(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (is(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (a = o.value),
                    fa(ul, r._currentValue),
                    (r._currentValue = a),
                    null !== i)
                )
                    if (Wo(i.value, a)) {
                        if (i.children === o.children && !ga.current) {
                            t = Rs(e, t, n);
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
                                            (u = xl(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            hl(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) a = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (a = i.return)) throw Error(Ge(341));
                                ((a.lanes |= n),
                                    null !== (l = a.alternate) && (l.lanes |= n),
                                    hl(a, n, t),
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
                (is(e, t, o.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                gl(t, n),
                (r = r((o = vl(o)))),
                (t.flags |= 1),
                is(e, t, r, n),
                t.child
            );
        case 14:
            return ((o = Bu((r = t.type), t.pendingProps)), ls(e, t, r, (o = Bu(r.type, o)), n));
        case 15:
            return us(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Bu(r, o)),
                Es(e, t),
                (t.tag = 1),
                ba(r) ? ((e = !0), Sa(t)) : (e = !1),
                gl(t, n),
                $u(t, r, o),
                Wu(t, r, o, n),
                ps(null, t, r, !0, e, n)
            );
        case 19:
            return Ps(e, t, n);
        case 22:
            return ss(e, t, n);
    }
    throw Error(Ge(156, t.tag));
};
var Md =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function jd(e) {
    this._internalRoot = e;
}
function Fd(e) {
    this._internalRoot = e;
}
function Td(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Vd(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Nd() {}
function Ld(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if ('function' == typeof o) {
            var l = o;
            o = function () {
                var e = Rd(a);
                l.call(e);
            };
        }
        Ed(t, a, e, o);
    } else
        a = (function (e, t, n, r, o) {
            if (o) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Rd(a);
                        i.call(e);
                    };
                }
                var a = Pd(t, r, e, 0, null, !1, 0, '', Nd);
                return (
                    (e._reactRootContainer = a),
                    (e[ea] = a.current),
                    Ei(8 === e.nodeType ? e.parentNode : e),
                    Qc(),
                    a
                );
            }
            for (; (o = e.lastChild); ) e.removeChild(o);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Rd(u);
                    l.call(e);
                };
            }
            var u = Cd(e, 0, !1, null, 0, !1, 0, '', Nd);
            return (
                (e._reactRootContainer = u),
                (e[ea] = u.current),
                Ei(8 === e.nodeType ? e.parentNode : e),
                Qc(function () {
                    Ed(t, u, n, r);
                }),
                u
            );
        })(n, t, e, o, r);
    return Rd(a);
}
((Fd.prototype.render = jd.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ge(409));
        Ed(e, t, null, null);
    }),
    (Fd.prototype.unmount = jd.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Qc(function () {
                    Ed(null, e, null, null);
                }),
                    (t[ea] = null));
            }
        }),
    (Fd.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = cr();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < yr.length && 0 !== t && t < yr[n].priority; n++);
            (yr.splice(n, 0, e), 0 === n && kr(e));
        }
    }),
    (lr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Yn(t.pendingLanes);
                    0 !== n && (or(t, 1 | n), Uc(t, Nn()), 0 == (6 & pc) && ((Pc = Nn() + 500), Ea()));
                }
                break;
            case 13:
                (Qc(function () {
                    var t = _l(e, 1);
                    if (null !== t) {
                        var n = zc();
                        Bc(t, e, 1, n);
                    }
                }),
                    Id(e, 1));
        }
    }),
    (ur = function (e) {
        if (13 === e.tag) {
            var t = _l(e, 134217728);
            if (null !== t) Bc(t, e, 134217728, zc());
            Id(e, 134217728);
        }
    }),
    (sr = function (e) {
        if (13 === e.tag) {
            var t = Dc(e),
                n = _l(e, t);
            if (null !== n) Bc(n, e, t, zc());
            Id(e, t);
        }
    }),
    (cr = function () {
        return ir;
    }),
    (dr = function (e, t) {
        var n = ir;
        try {
            return ((ir = e), t());
        } finally {
            ir = n;
        }
    }),
    (un = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((Nt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = la(r);
                            if (!o) throw Error(Ge(90));
                            (Mt(r), Nt(r, o));
                        }
                    }
                }
                break;
            case 'textarea':
                Gt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Bt(e, !!n.multiple, t, !1);
        }
    }),
    (hn = Kc),
    (gn = Qc));
var zd = { usingClientEntryPoint: !1, Events: [ia, aa, la, fn, pn, Kc] },
    Dd = { findFiberByHostInstance: oa, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Bd = {
        bundleType: Dd.bundleType,
        version: Dd.version,
        rendererPackageName: Dd.rendererPackageName,
        rendererConfig: Dd.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: it.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = In(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Dd.findFiberByHostInstance ||
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
    var Ud = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ud.isDisabled && Ud.supportsFiber)
        try {
            ((Gn = Ud.inject(Bd)), ($n = Ud));
        } catch (Qt) {}
}
((Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd),
    (Le.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Td(t)) throw Error(Ge(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: lt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Le.createRoot = function (e, t) {
        if (!Td(e)) throw Error(Ge(299));
        var n = !1,
            r = '',
            o = Md;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
            (t = Cd(e, 1, !1, null, 0, n, 0, r, o)),
            (e[ea] = t.current),
            Ei(8 === e.nodeType ? e.parentNode : e),
            new jd(t)
        );
    }),
    (Le.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ge(188));
            throw ((e = Object.keys(e).join(',')), Error(Ge(268, e)));
        }
        return (e = null === (e = In(t)) ? null : e.stateNode);
    }),
    (Le.flushSync = function (e) {
        return Qc(e);
    }),
    (Le.hydrate = function (e, t, n) {
        if (!Vd(t)) throw Error(Ge(200));
        return Ld(null, e, t, !0, n);
    }),
    (Le.hydrateRoot = function (e, t, n) {
        if (!Td(e)) throw Error(Ge(405));
        var r = (null != n && n.hydratedSources) || null,
            o = !1,
            i = '',
            a = Md;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = Pd(t, null, e, 1, null != n ? n : null, o, 0, i, a)),
            (e[ea] = t.current),
            Ei(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((o = (o = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, o])
                        : t.mutableSourceEagerHydrationData.push(n, o));
        return new Fd(t);
    }),
    (Le.render = function (e, t, n) {
        if (!Vd(t)) throw Error(Ge(200));
        return Ld(null, e, t, !1, n);
    }),
    (Le.unmountComponentAtNode = function (e) {
        if (!Vd(e)) throw Error(Ge(40));
        return (
            !!e._reactRootContainer &&
            (Qc(function () {
                Ld(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[ea] = null));
                });
            }),
            !0)
        );
    }),
    (Le.unstable_batchedUpdates = Kc),
    (Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Vd(n)) throw Error(Ge(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ge(38));
        return Ld(e, t, n, !1, r);
    }),
    (Le.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Ne.exports = Le));
var Hd = Ne.exports,
    Gd = Hd;
((Ve.createRoot = Gd.createRoot), (Ve.hydrateRoot = Gd.hydrateRoot));
var $d,
    qd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (($d = qd),
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
        $d.exports ? ((t.default = t), ($d.exports = t)) : (window.classNames = t);
    })());
const Wd = n(qd.exports);
function Kd(e) {
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
var Qd = {};
function Xd() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Qd;
}
var Yd = Object.assign,
    Jd = Object.getOwnPropertyDescriptor,
    Zd = Object.defineProperty,
    ef = Object.prototype,
    tf = [];
Object.freeze(tf);
var nf = {};
Object.freeze(nf);
var rf = 'undefined' != typeof Proxy,
    of = Object.toString();
function af() {
    rf || Kd('Proxy not available');
}
function lf(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var uf = function () {};
function sf(e) {
    return 'function' == typeof e;
}
function cf(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function df(e) {
    return null !== e && 'object' == typeof e;
}
function ff(e) {
    if (!df(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === of;
}
function pf(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function hf(e, t, n) {
    Zd(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function gf(e, t, n) {
    Zd(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function vf(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return df(e) && !0 === e[n];
        }
    );
}
function mf(e) {
    return e instanceof Map;
}
function bf(e) {
    return e instanceof Set;
}
var yf = void 0 !== Object.getOwnPropertySymbols;
var _f =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : yf
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function wf(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function Sf(e, t) {
    return ef.hasOwnProperty.call(e, t);
}
var kf =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            _f(e).forEach(function (n) {
                t[n] = Jd(e, n);
            }),
            t
        );
    };
function xf(e, t) {
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
    return (t && xf(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Of() {
    return (
        (Of = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Of.apply(this, arguments)
    );
}
function Pf(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ef(e, t));
}
function Ef(e, t) {
    return (Ef = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function Rf(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Af(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function If(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Af(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Af(e, t)
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
var Mf = Symbol('mobx-stored-annotations');
function jf(e) {
    return Object.assign(function (t, n) {
        if (Tf(n)) return e.decorate_20223_(t, n);
        Ff(t, n, e);
    }, e);
}
function Ff(e, t, n) {
    (Sf(e, Mf) || hf(e, Mf, Of({}, e[Mf])),
        (function (e) {
            return e.annotationType_ === Hf;
        })(n) || (e[Mf][t] = n));
}
function Tf(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Vf = Symbol('mobx administration'),
    Nf = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Wp.NOT_TRACKING_),
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
                return Sh(this);
            }),
            (t.reportChanged = function () {
                (_h(), kh(this), wh());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Lf = vf('Atom', Nf);
function zf(e, t, n) {
    (void 0 === t && (t = uf), void 0 === n && (n = uf));
    var r = new Nf(e);
    return (t !== uf && Qh(r, t), n !== uf && Xh(r, n), r);
}
var Df = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return Mv(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return Mv(e, t, 1);
    },
};
function Bf(e, t, n) {
    return mg(e)
        ? e
        : Array.isArray(e)
          ? Pp.array(e, { name: n })
          : ff(e)
            ? Pp.object(e, void 0, { name: n })
            : mf(e)
              ? Pp.map(e, { name: n })
              : bf(e)
                ? Pp.set(e, { name: n })
                : 'function' != typeof e || Uh(e) || fg(e)
                  ? e
                  : pf(e)
                    ? cg(e)
                    : Dh(n, e);
}
function Uf(e) {
    return e;
}
var Hf = 'override',
    Gf = jf({
        annotationType_: Hf,
        make_: function (e, t) {
            return 0;
        },
        extend_: function (e, t, n, r) {
            Kd("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
        },
        decorate_20223_: function (e, t) {
            console.warn("'" + this.annotationType_ + "' cannot be used with decorators - this is a no-op");
        },
    });
function $f(e, t) {
    return { annotationType_: e, options_: t, make_: qf, extend_: Wf, decorate_20223_: Kf };
}
function qf(e, t, n, r) {
    var o;
    if (null != (o = this.options_) && o.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Uh(n.value)) return 1;
    var i = Qf(e, this, t, n, !1);
    return (Zd(r, t, i), 2);
}
function Wf(e, t, n, r) {
    var o = Qf(e, this, t, n);
    return e.defineProperty_(t, o, r);
}
function Kf(e, t) {
    var n = t.kind,
        r = t.name,
        o = t.addInitializer,
        i = this;
    if ('field' != n) {
        var a, l, u, s, c, d;
        if ('method' == n)
            return (
                Uh(e) ||
                    ((l = e),
                    (e = Np(
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
        Kd(
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
            Ff(this, r, i);
        });
}
function Qf(e, t, n, r, o) {
    var i, a, l, u, s, c, d, f;
    (void 0 === o && (o = gh.safeDescriptors), (f = r), t.annotationType_, f.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Np(
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
function Xf(e, t) {
    return { annotationType_: e, options_: t, make_: Yf, extend_: Jf, decorate_20223_: Zf };
}
function Yf(e, t, n, r) {
    var o;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (o = this.options_) &&
        o.bound &&
        (!Sf(e.target_, t) || !fg(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (fg(n.value)) return 1;
    var i = ep(e, this, t, n, !1, !1);
    return (Zd(r, t, i), 2);
}
function Jf(e, t, n, r) {
    var o,
        i = ep(e, this, t, n, null == (o = this.options_) ? void 0 : o.bound);
    return e.defineProperty_(t, i, r);
}
function Zf(e, t) {
    var n,
        r = t.name,
        o = t.addInitializer;
    return (
        fg(e) || (e = cg(e)),
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
function ep(e, t, n, r, o, i) {
    var a;
    (void 0 === i && (i = gh.safeDescriptors), (a = r), t.annotationType_, a.value);
    var l,
        u = r.value;
    (fg(u) || (u = cg(u)), o) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function tp(e, t) {
    return { annotationType_: e, options_: t, make_: np, extend_: rp, decorate_20223_: op };
}
function np(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function rp(e, t, n, r) {
    var o;
    return (
        (o = n),
        this.annotationType_,
        o.get,
        e.defineComputedProperty_(t, Of({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function op(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = dv(this)[Vf],
                o = Of({}, n.options_, { get: e, context: this });
            (o.name || (o.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Yp(o)));
        }),
        function () {
            return this[Vf].getObservablePropValue_(r);
        }
    );
}
function ip(e, t) {
    return { annotationType_: e, options_: t, make_: ap, extend_: lp, decorate_20223_: up };
}
function ap(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function lp(e, t, n, r) {
    var o, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (o = null == (i = this.options_) ? void 0 : i.enhancer) ? o : Bf,
            r,
        )
    );
}
function up(e, t) {
    var n = this,
        r = t.kind,
        o = t.name,
        i = new WeakSet();
    function a(e, t) {
        var r,
            a,
            l = dv(e)[Vf],
            u = new $p(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Bf,
                'ObservableObject.' + o.toString(),
                !1,
            );
        (l.values_.set(o, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || a(this, e.get.call(this)), this[Vf].getObservablePropValue_(o));
            },
            set: function (e) {
                return (i.has(this) || a(this, e), this[Vf].setObservablePropValue_(o, e));
            },
            init: function (e) {
                return (i.has(this) || a(this, e), e);
            },
        };
}
var sp = 'true',
    cp = dp();
function dp(e) {
    return { annotationType_: sp, options_: e, make_: fp, extend_: pp, decorate_20223_: hp };
}
function fp(e, t, n, r) {
    var o, i, a, l;
    if (n.get) return Ip.make_(e, t, n, r);
    if (n.set) {
        var u = Np(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !gh.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Zd(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return pf(n.value)
            ? (null != (l = this.options_) && l.autoBind ? cg.bound : cg).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Dh.bound : Dh).make_(e, t, n, r);
    var s,
        c = !1 === (null == (o = this.options_) ? void 0 : o.deep) ? Pp.ref : Pp;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function pp(e, t, n, r) {
    var o, i, a;
    if (n.get) return Ip.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !gh.safeDescriptors || e.isPlainObject_, set: Np(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? Pp.ref : Pp).extend_(e, t, n, r);
}
function hp(e, t) {
    Kd("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var gp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function vp(e) {
    return e || gp;
}
Object.freeze(gp);
var mp = ip('observable'),
    bp = ip('observable.ref', { enhancer: Uf }),
    yp = ip('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || hv(e) || Yg(e) || ov(e) || lv(e)
                ? e
                : Array.isArray(e)
                  ? Pp.array(e, { name: n, deep: !1 })
                  : ff(e)
                    ? Pp.object(e, void 0, { name: n, deep: !1 })
                    : mf(e)
                      ? Pp.map(e, { name: n, deep: !1 })
                      : bf(e)
                        ? Pp.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    _p = ip('observable.struct', {
        enhancer: function (e, t) {
            return Mv(e, t) ? t : e;
        },
    }),
    wp = jf(mp);
function Sp(e) {
    return !0 === e.deep
        ? Bf
        : !1 === e.deep
          ? Uf
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Bf;
    var t, n, r;
}
function kp(e, t, n) {
    return Tf(t)
        ? mp.decorate_20223_(e, t)
        : cf(t)
          ? void Ff(e, t, mp)
          : mg(e)
            ? e
            : ff(e)
              ? Pp.object(e, t, n)
              : Array.isArray(e)
                ? Pp.array(e, t)
                : mf(e)
                  ? Pp.map(e, t)
                  : bf(e)
                    ? Pp.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Pp.box(e, t);
}
Yd(kp, wp);
var xp,
    Cp,
    Op = {
        box: function (e, t) {
            var n = vp(t);
            return new $p(e, Sp(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = vp(t);
            return (!1 === gh.useProxies || !1 === n.proxy ? Ov : Ug)(e, Sp(n), n.name);
        },
        map: function (e, t) {
            var n = vp(t);
            return new rv(e, Sp(n), n.name);
        },
        set: function (e, t) {
            var n = vp(t);
            return new av(e, Sp(n), n.name);
        },
        object: function (e, t, n) {
            return Av(function () {
                return ng(
                    !1 === gh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? dv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  af(),
                                  (e = dv(e, t)),
                                  null != (r = (n = e[Vf]).proxy_) ? r : (n.proxy_ = new Proxy(e, Rg))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: jf(bp),
        shallow: jf(yp),
        deep: wp,
        struct: jf(_p),
    },
    Pp = Yd(kp, Op),
    Ep = 'computed',
    Rp = tp(Ep),
    Ap = tp('computed.struct', { equals: Df.structural }),
    Ip = function (e, t) {
        if (Tf(t)) return Rp.decorate_20223_(e, t);
        if (cf(t)) return Ff(e, t, Rp);
        if (ff(e)) return jf(tp(Ep, e));
        var n = ff(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Yp(n));
    };
(Object.assign(Ip, Rp), (Ip.struct = jf(Ap)));
var Mp,
    jp = 0,
    Fp = 1,
    Tp = null != (xp = null == (Cp = Jd(function () {}, 'name')) ? void 0 : Cp.configurable) && xp,
    Vp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Np(e, t, n, r) {
    function o() {
        return Lp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (o.isMobxAction = !0),
        (o.toString = function () {
            return t.toString();
        }),
        Tp && ((Vp.value = e), Zd(o, 'name', Vp)),
        o
    );
}
function Lp(e, t, n, r, o) {
    var i = zp(e, t);
    try {
        return n.apply(r, o);
    } catch (a) {
        throw ((i.error_ = a), a);
    } finally {
        Dp(i);
    }
}
function zp(e, t, n, r) {
    var o = gh.trackingDerivation,
        i = !t || !o;
    _h();
    var a = gh.allowStateChanges;
    i && (ah(), (a = Up(!0)));
    var l = {
        runAsAction_: i,
        prevDerivation_: o,
        prevAllowStateChanges_: a,
        prevAllowStateReads_: uh(!0),
        notifySpy_: !1,
        startTime_: 0,
        actionId_: Fp++,
        parentActionId_: jp,
    };
    return ((jp = l.actionId_), l);
}
function Dp(e) {
    (jp !== e.actionId_ && Kd(30),
        (jp = e.parentActionId_),
        void 0 !== e.error_ && (gh.suppressReactionErrors = !0),
        Hp(e.prevAllowStateChanges_),
        sh(e.prevAllowStateReads_),
        wh(),
        e.runAsAction_ && lh(e.prevDerivation_),
        (gh.suppressReactionErrors = !1));
}
function Bp(e, t) {
    var n = Up(e);
    try {
        return t();
    } finally {
        Hp(n);
    }
}
function Up(e) {
    var t = gh.allowStateChanges;
    return ((gh.allowStateChanges = e), t);
}
function Hp(e) {
    gh.allowStateChanges = e;
}
Mp = Symbol.toPrimitive;
var Gp,
    $p = (function (e) {
        function t(t, n, r, o, i) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = Df.default),
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
        Pf(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== gh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (Ag(this)) {
                    var t = Mg(this, { object: this, type: zg, newValue: e });
                    if (!t) return gh.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? gh.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    jg(this) && Tg(this, { type: zg, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return Ig(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: zg,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    Fg(this, e)
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
                return wf(this.get());
            }),
            (n[Mp] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Nf),
    qp = vf('ObservableValue', $p);
Gp = Symbol.toPrimitive;
var Wp,
    Kp,
    Qp,
    Xp,
    Yp = (function () {
        function e(e) {
            ((this.dependenciesState_ = Wp.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Wp.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Zp(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Qp.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Kd(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Np('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Df.structural : Df.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Wp.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Wp.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Wp.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Wp.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Kd(32, this.name_, this.derivation),
                    0 !== gh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((Sh(this), th(this))) {
                        var e = gh.trackingContext;
                        (this.keepAlive_ && !e && (gh.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Wp.STALE_) return;
                                    ((e.lowestObserverState_ = Wp.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Wp.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Wp.STALE_)
                                                : t.dependenciesState_ === Wp.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Wp.UP_TO_DATE_);
                                        }));
                                })(this),
                            (gh.trackingContext = e));
                    }
                } else th(this) && (this.warnAboutUntrackedRead_(), _h(), (this.value_ = this.computeValue_(!1)), wh());
                var t = this.value_;
                if (eh(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Kd(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Kd(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Wp.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || eh(e) || eh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Up(!1);
                if (e) t = rh(this, this.derivation, this.scope_);
                else if (!0 === gh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Zp(r);
                    }
                return (Hp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (oh(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    o = void 0;
                return Hh(function () {
                    var i = n.get();
                    if (!r || t) {
                        var a = ah();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: zg,
                            object: n,
                            newValue: i,
                            oldValue: o,
                        }),
                            lh(a));
                    }
                    ((r = !1), (o = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return wf(this.get());
            }),
            (t[Gp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Jp = vf('ComputedValue', Yp);
(((Kp = Wp || (Wp = {}))[(Kp.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Kp[(Kp.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Kp[(Kp.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Kp[(Kp.STALE_ = 2)] = 'STALE_'),
    ((Xp = Qp || (Qp = {}))[(Xp.NONE = 0)] = 'NONE'),
    (Xp[(Xp.LOG = 1)] = 'LOG'),
    (Xp[(Xp.BREAK = 2)] = 'BREAK'));
var Zp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function eh(e) {
    return e instanceof Zp;
}
function th(e) {
    switch (e.dependenciesState_) {
        case Wp.UP_TO_DATE_:
            return !1;
        case Wp.NOT_TRACKING_:
        case Wp.STALE_:
            return !0;
        case Wp.POSSIBLY_STALE_:
            for (var t = uh(!0), n = ah(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
                var a = r[i];
                if (Jp(a)) {
                    if (gh.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (l) {
                            return (lh(n), sh(t), !0);
                        }
                    if (e.dependenciesState_ === Wp.STALE_) return (lh(n), sh(t), !0);
                }
            }
            return (ch(e), lh(n), sh(t), !1);
    }
}
function nh() {
    return null !== gh.trackingDerivation;
}
function rh(e, t, n) {
    var r = uh(!0);
    (ch(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++gh.runId));
    var o,
        i = gh.trackingDerivation;
    if (((gh.trackingDerivation = e), gh.inBatch++, !0 === gh.disableErrorBoundaries)) o = t.call(n);
    else
        try {
            o = t.call(n);
        } catch (a) {
            o = new Zp(a);
        }
    return (
        gh.inBatch--,
        (gh.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Wp.UP_TO_DATE_,
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
                (0 === u.diffValue_ && bh(u, e), (u.diffValue_ = 0));
            }
            for (; o--; ) {
                var s = n[o];
                1 === s.diffValue_ && ((s.diffValue_ = 0), mh(s, e));
            }
            r !== Wp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        sh(r),
        o
    );
}
function oh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) bh(t[n], e);
    e.dependenciesState_ = Wp.NOT_TRACKING_;
}
function ih(e) {
    var t = ah();
    try {
        return e();
    } finally {
        lh(t);
    }
}
function ah() {
    var e = gh.trackingDerivation;
    return ((gh.trackingDerivation = null), e);
}
function lh(e) {
    gh.trackingDerivation = e;
}
function uh(e) {
    var t = gh.allowStateReads;
    return ((gh.allowStateReads = e), t);
}
function sh(e) {
    gh.allowStateReads = e;
}
function ch(e) {
    if (e.dependenciesState_ !== Wp.UP_TO_DATE_) {
        e.dependenciesState_ = Wp.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Wp.UP_TO_DATE_;
    }
}
var dh = [
        'mobxGuid',
        'spyListeners',
        'enforceActions',
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'allowStateReads',
        'disableErrorBoundaries',
        'runId',
        'UNCHANGED',
        'useProxies',
    ],
    fh = function () {
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
    ph = !0,
    hh = !1,
    gh = (function () {
        var e = Xd();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ph = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new fh().version && (ph = !1),
            ph
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new fh()))
                : (setTimeout(function () {
                      hh || Kd(35);
                  }, 1),
                  new fh())
        );
    })();
function vh() {
    return gh;
}
function mh(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function bh(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && yh(e));
}
function yh(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), gh.pendingUnobservations.push(e));
}
function _h() {
    gh.inBatch++;
}
function wh() {
    if (0 == --gh.inBatch) {
        Ph();
        for (var e = gh.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Yp && n.suspend_()));
        }
        gh.pendingUnobservations = [];
    }
}
function Sh(e) {
    var t = gh.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && gh.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && gh.inBatch > 0 && yh(e), !1);
}
function kh(e) {
    e.lowestObserverState_ !== Wp.STALE_ &&
        ((e.lowestObserverState_ = Wp.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Wp.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Wp.STALE_));
        }));
}
var xh = (function () {
    function e(e, t, n, r) {
        (void 0 === e && (e = 'Reaction'),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = Wp.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = Qp.NONE),
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
            this.isScheduled_ || ((this.isScheduled_ = !0), gh.pendingReactions.push(this), Ph());
        }),
        (t.isScheduled = function () {
            return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
            if (!this.isDisposed_) {
                (_h(), (this.isScheduled_ = !1));
                var e = gh.trackingContext;
                if (((gh.trackingContext = this), th(this))) {
                    this.isTrackPending_ = !0;
                    try {
                        this.onInvalidate_();
                    } catch (t) {
                        this.reportExceptionInDerivation_(t);
                    }
                }
                ((gh.trackingContext = e), wh());
            }
        }),
        (t.track = function (e) {
            if (!this.isDisposed_) {
                (_h(), (this.isRunning_ = !0));
                var t = gh.trackingContext;
                gh.trackingContext = this;
                var n = rh(this, e, void 0);
                ((gh.trackingContext = t),
                    (this.isRunning_ = !1),
                    (this.isTrackPending_ = !1),
                    this.isDisposed_ && oh(this),
                    eh(n) && this.reportExceptionInDerivation_(n.cause),
                    wh());
            }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
                if (gh.disableErrorBoundaries) throw e;
                var n = "[mobx] uncaught error in '" + this + "'";
                (gh.suppressReactionErrors || console.error(n, e),
                    gh.globalReactionErrorHandlers.forEach(function (n) {
                        return n(e, t);
                    }));
            }
        }),
        (t.dispose = function () {
            this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (_h(), oh(this), wh()));
        }),
        (t.getDisposer_ = function (e) {
            var t = this,
                n = function n() {
                    (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                };
            return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Vf] = this), n);
        }),
        (t.toString = function () {
            return 'Reaction[' + this.name_ + ']';
        }),
        (t.trace = function (e) {}),
        e
    );
})();
var Ch = 100,
    Oh = function (e) {
        return e();
    };
function Ph() {
    gh.inBatch > 0 || gh.isRunningReactions || Oh(Eh);
}
function Eh() {
    gh.isRunningReactions = !0;
    for (var e = gh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === Ch && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction_();
    }
    gh.isRunningReactions = !1;
}
var Rh = vf('Reaction', xh);
function Ah(e) {
    return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
}
var Ih = 'action',
    Mh = 'autoAction',
    jh = '<unnamed action>',
    Fh = $f(Ih),
    Th = $f('action.bound', { bound: !0 }),
    Vh = $f(Mh, { autoAction: !0 }),
    Nh = $f('autoAction.bound', { autoAction: !0, bound: !0 });
function Lh(e) {
    return function (t, n) {
        return sf(t)
            ? Np(t.name || jh, t, e)
            : sf(n)
              ? Np(t, n, e)
              : Tf(n)
                ? (e ? Vh : Fh).decorate_20223_(t, n)
                : cf(n)
                  ? Ff(t, n, e ? Vh : Fh)
                  : cf(t)
                    ? jf($f(e ? Mh : Ih, { name: t, autoAction: e }))
                    : void 0;
    };
}
var zh = Lh(!1);
Object.assign(zh, Fh);
var Dh = Lh(!0);
function Bh(e) {
    return Lp(e.name || jh, !1, e, this, void 0);
}
function Uh(e) {
    return sf(e) && !0 === e.isMobxAction;
}
function Hh(e, t) {
    var n, r, o, i, a;
    void 0 === t && (t = nf);
    var l,
        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        l = new xh(
            u,
            function () {
                this.track(d);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var s = $h(t),
            c = !1;
        l = new xh(
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
(Object.assign(Dh, Vh), (zh.bound = jf(Th)), (Dh.bound = jf(Nh)));
var Gh = function (e) {
    return e();
};
function $h(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Gh;
}
function qh(e, t, n) {
    var r, o, i, a;
    void 0 === n && (n = nf);
    var l,
        u,
        s,
        c,
        d = null != (r = n.name) ? r : 'Reaction',
        f = zh(
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
        h = $h(n),
        g = !0,
        v = !1,
        m = n.compareStructural ? Df.structural : n.equals || Df.default,
        b = new xh(
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
                var n = Bp(!1, function () {
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
var Wh = 'onBO',
    Kh = 'onBUO';
function Qh(e, t, n) {
    return Yh(Wh, e, t, n);
}
function Xh(e, t, n) {
    return Yh(Kh, e, t, n);
}
function Yh(e, t, n, r) {
    var o = 'function' == typeof r ? Pv(t, n) : Pv(t),
        i = sf(r) ? r : n,
        a = e + 'L';
    return (
        o[a] ? o[a].add(i) : (o[a] = new Set([i])),
        function () {
            var e = o[a];
            e && (e.delete(i), 0 === e.size && delete o[a]);
        }
    );
}
var Jh = 'never',
    Zh = 'always',
    eg = 'observed';
function tg(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((gh.pendingReactions.length || gh.inBatch || gh.isRunningReactions) && Kd(36), (hh = !0), ph)) {
                var e = Xd();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (gh = new fh()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        o = e.enforceActions;
    if (
        (void 0 !== r && (gh.useProxies = r === Zh || (r !== Jh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (gh.verifyProxies = !0),
        void 0 !== o)
    ) {
        var i = o === Zh ? Zh : o === eg;
        ((gh.enforceActions = i), (gh.allowStateChanges = !0 !== i && i !== Zh));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (gh[t] = !!e[t]);
    }),
        (gh.allowStateReads = !gh.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = Oh),
            (Oh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function ng(e, t, n, r) {
    var o = kf(t);
    return (
        Av(function () {
            var t = dv(e, r)[Vf];
            _f(o).forEach(function (e) {
                t.extend_(e, o[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function rg(e, t) {
    return og(Pv(e, t));
}
function og(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(og)),
        n
    );
}
function ig(e) {
    var t,
        n = { name: e.name_ };
    return (
        (t = e).observers_ &&
            t.observers_.size > 0 &&
            (n.observers = Array.from(
                (function (e) {
                    return e.observers_;
                })(e),
            ).map(ig)),
        n
    );
}
var ag = 0;
function lg() {
    this.message = 'FLOW_CANCELLED';
}
lg.prototype = Object.create(Error.prototype);
var ug = Xf('flow'),
    sg = Xf('flow.bound', { bound: !0 }),
    cg = Object.assign(function (e, t) {
        if (Tf(t)) return ug.decorate_20223_(e, t);
        if (cf(t)) return Ff(e, t, ug);
        var n = e,
            r = n.name || '<unnamed flow>',
            o = function () {
                var e,
                    t = arguments,
                    o = ++ag,
                    i = zh(r + ' - runid: ' + o + ' - init', n).apply(this, t),
                    a = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = zh(r + ' - runid: ' + o + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            a = void 0;
                            try {
                                t = zh(r + ' - runid: ' + o + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!sf(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = zh(r + ' - runid: ' + o + ' - cancel', function () {
                        try {
                            a && dg(a);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(uf, uf), dg(n), e(new lg()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((o.isMobXFlow = !0), o);
    }, ug);
function dg(e) {
    sf(e.cancel) && e.cancel();
}
function fg(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function pg(e, t) {
    if (void 0 === t) return Jp(e);
    if (!1 === hv(e)) return !1;
    if (!e[Vf].values_.has(t)) return !1;
    var n = Pv(e, t);
    return Jp(n);
}
function hg(e) {
    return pg(e);
}
function gg(e, t) {
    return pg(e, t);
}
function vg(e, t) {
    return !!e && (void 0 !== t ? !!hv(e) && e[Vf].values_.has(t) : hv(e) || !!e[Vf] || Lf(e) || Rh(e) || Jp(e));
}
function mg(e) {
    return vg(e);
}
function bg(e) {
    return hv(e)
        ? e[Vf].keys_()
        : ov(e) || lv(e)
          ? Array.from(e.keys())
          : Yg(e)
            ? e.map(function (e, t) {
                  return t;
              })
            : void Kd(5);
}
function yg(e) {
    return hv(e)
        ? bg(e).map(function (t) {
              return e[t];
          })
        : ov(e)
          ? bg(e).map(function (t) {
                return e.get(t);
            })
          : lv(e)
            ? Array.from(e.values())
            : Yg(e)
              ? e.slice()
              : void Kd(6);
}
function _g(e) {
    return hv(e)
        ? bg(e).map(function (t) {
              return [t, e[t]];
          })
        : ov(e)
          ? bg(e).map(function (t) {
                return [t, e.get(t)];
            })
          : lv(e)
            ? Array.from(e.entries())
            : Yg(e)
              ? e.map(function (e, t) {
                    return [t, e];
                })
              : void Kd(7);
}
function wg(e, t) {
    return hv(e) ? e[Vf].has_(t) : ov(e) || lv(e) ? e.has(t) : Yg(e) ? t >= 0 && t < e.length : void Kd(10);
}
function Sg(e) {
    if (hv(e)) return e[Vf].ownKeys_();
    Kd(38);
}
function kg(e, t, n, r) {
    return sf(n)
        ? (function (e, t, n, r) {
              return Ev(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Ev(e).observe_(t, n);
          })(e, t, n);
}
function xg(e, t, n) {
    return (e.set(t, n), n);
}
function Cg(e, t) {
    if (null == e || 'object' != typeof e || e instanceof Date || !mg(e)) return e;
    if (qp(e) || Jp(e)) return Cg(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (Yg(e)) {
        var n = xg(t, e, new Array(e.length));
        return (
            e.forEach(function (e, r) {
                n[r] = Cg(e, t);
            }),
            n
        );
    }
    if (lv(e)) {
        var r = xg(t, e, new Set());
        return (
            e.forEach(function (e) {
                r.add(Cg(e, t));
            }),
            r
        );
    }
    if (ov(e)) {
        var o = xg(t, e, new Map());
        return (
            e.forEach(function (e, n) {
                o.set(n, Cg(e, t));
            }),
            o
        );
    }
    var i = xg(t, e, {});
    return (
        Sg(e).forEach(function (n) {
            ef.propertyIsEnumerable.call(e, n) && (i[n] = Cg(e[n], t));
        }),
        i
    );
}
function Og(e, t) {
    (void 0 === t && (t = void 0), _h());
    try {
        return e.apply(t);
    } finally {
        wh();
    }
}
function Pg(e, t, n) {
    var r;
    if ('number' == typeof n.timeout) {
        var o = new Error('WHEN_TIMEOUT');
        r = setTimeout(function () {
            if (!a[Vf].isDisposed_) {
                if ((a(), !n.onError)) throw o;
                n.onError(o);
            }
        }, n.timeout);
    }
    n.name = 'When';
    var i = Np('When-effect', t),
        a = Hh(function (t) {
            Bp(!1, e) && (t.dispose(), r && clearTimeout(r), i());
        }, n);
    return a;
}
function Eg(e) {
    return e[Vf];
}
cg.bound = jf(sg);
var Rg = {
    has: function (e, t) {
        return Eg(e).has_(t);
    },
    get: function (e, t) {
        return Eg(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!cf(t) && (null == (r = Eg(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!cf(t) && (null == (n = Eg(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Eg(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Eg(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Kd(13);
    },
};
function Ag(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function Ig(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        lf(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Mg(e, t) {
    var n = ah();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), o = 0, i = r.length;
            o < i && ((t = r[o](t)) && !t.type && Kd(14), t);
            o++
        );
        return t;
    } finally {
        lh(n);
    }
}
function jg(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function Fg(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        lf(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Tg(e, t) {
    var n = ah(),
        r = e.changeListeners_;
    if (r) {
        for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
        lh(n);
    }
}
function Vg(e, t, n) {
    return (
        Av(function () {
            var r = dv(e, n)[Vf];
            (null != t ||
                (t = (function (e) {
                    return (Sf(e, Mf) || hf(e, Mf, Of({}, e[Mf])), e[Mf]);
                })(e)),
                _f(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var Ng = Symbol('mobx-keys');
var Lg = 'splice',
    zg = 'update',
    Dg = {
        get: function (e, t) {
            var n = e[Vf];
            return t === Vf
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? Sf(Hg, t)
                        ? Hg[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Vf];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Kd(15);
        },
    },
    Bg = (function () {
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
                (this.atom_ = new Nf(e)),
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
                return Ig(this, e);
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
                    Fg(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Kd('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Kd(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Cv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var o = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > o ? (e = o) : e < 0 && (e = Math.max(0, o + e)),
                    (t = 1 === arguments.length ? o - e : null == t ? 0 : Math.max(0, Math.min(t, o - e))),
                    void 0 === n && (n = tf),
                    Ag(this))
                ) {
                    var i = Mg(this, { object: this.proxy_, type: Lg, index: e, removedCount: t, added: n });
                    if (!i) return tf;
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
                    o = jg(this),
                    i =
                        o || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: zg,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), o && Tg(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    o = jg(this),
                    i =
                        o || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Lg,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), o && Tg(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Kd(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (Ag(this)) {
                        var o = Mg(this, { type: zg, object: this.proxy_, index: e, newValue: t });
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
function Ug(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        af(),
        Av(function () {
            var o = new Bg(n, t, r, !1);
            gf(o.values_, Vf, o);
            var i = new Proxy(o.values_, Dg);
            return ((o.proxy_ = i), e && e.length && o.spliceWithArray_(0, 0, e), i);
        })
    );
}
var Hg = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Vf];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        var i = this[Vf];
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
        return this[Vf].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Vf], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Vf].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Vf], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (gh.trackingDerivation && Kd(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        gh.trackingDerivation && Kd(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Vf],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Gg(e, t) {
    'function' == typeof Array.prototype[e] && (Hg[e] = t(e));
}
function $g(e) {
    return function () {
        var t = this[Vf];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function qg(e) {
    return function (t, n) {
        var r = this,
            o = this[Vf];
        return (
            o.atom_.reportObserved(),
            o.dehanceValues_(o.values_)[e](function (e, o) {
                return t.call(n, e, o, r);
            })
        );
    };
}
function Wg(e) {
    return function () {
        var t = this,
            n = this[Vf];
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
(Gg('at', $g),
    Gg('concat', $g),
    Gg('flat', $g),
    Gg('includes', $g),
    Gg('indexOf', $g),
    Gg('join', $g),
    Gg('lastIndexOf', $g),
    Gg('slice', $g),
    Gg('toString', $g),
    Gg('toLocaleString', $g),
    Gg('toSorted', $g),
    Gg('toSpliced', $g),
    Gg('with', $g),
    Gg('every', qg),
    Gg('filter', qg),
    Gg('find', qg),
    Gg('findIndex', qg),
    Gg('findLast', qg),
    Gg('findLastIndex', qg),
    Gg('flatMap', qg),
    Gg('forEach', qg),
    Gg('map', qg),
    Gg('some', qg),
    Gg('toReversed', qg),
    Gg('reduce', Wg),
    Gg('reduceRight', Wg));
var Kg,
    Qg,
    Xg = vf('ObservableArrayAdministration', Bg);
function Yg(e) {
    return df(e) && Xg(e[Vf]);
}
var Jg = {},
    Zg = 'add',
    ev = 'delete';
((Kg = Symbol.iterator), (Qg = Symbol.toStringTag));
var tv,
    nv,
    rv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Bf),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Vf] = Jg),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                sf(Map) || Kd(18),
                Av(function () {
                    ((r.keysAtom_ = zf('ObservableMap.keys()')),
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
                if (!gh.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new $p(this.has_(e), Uf, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Xh(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Ag(this)) {
                    var r = Mg(this, { type: n ? zg : Zg, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Ag(this)) && !Mg(this, { type: ev, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = jg(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: ev,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Og(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Tg(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== gh.UNCHANGED) {
                    var r = jg(this),
                        o = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: zg,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Tg(this, o));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Og(function () {
                        var r,
                            o = new $p(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, o),
                            (t = o.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = jg(this),
                    o = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Zg,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Tg(this, o);
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
                return Tv({
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
                return Tv({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            o = n.value;
                        return { done: r, value: r ? void 0 : [o, e.get(o)] };
                    },
                });
            }),
            (t[Kg] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = If(this); !(n = r()).done; ) {
                    var o = n.value,
                        i = o[0],
                        a = o[1];
                    e.call(t, a, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    ov(e) && (e = new Map(e)),
                    Og(function () {
                        ff(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!yf) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return ef.propertyIsEnumerable.call(e, t);
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
                              : mf(e)
                                ? (e.constructor !== Map && Kd(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Kd(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                Og(function () {
                    ih(function () {
                        for (var t, n = If(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Og(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (mf(e) || ov(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (ff(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Kd(21, e);
                                })(e),
                                o = new Map(),
                                i = !1,
                                a = If(t.data_.keys());
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
                        for (var s, c = If(r.entries()); !(s = c()).done; ) {
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
                return Fg(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ig(this, e);
            }),
            Cf(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Qg,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    ov = vf('ObservableMap', rv);
var iv = {};
((tv = Symbol.iterator), (nv = Symbol.toStringTag));
var av = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Bf),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Vf] = iv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                sf(Set) || Kd(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                Av(function () {
                    ((r.atom_ = zf(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Og(function () {
                    ih(function () {
                        for (var t, n = If(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = If(this); !(n = r()).done; ) {
                    var o = n.value;
                    e.call(t, o, o, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Ag(this)) && !Mg(this, { type: Zg, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Og(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = jg(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Zg,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && Tg(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (Ag(this) && !Mg(this, { type: ev, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = jg(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: ev,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Og(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Tg(this, r),
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
                return Tv({
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
                return Tv({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    lv(e) && (e = new Set(e)),
                    Og(function () {
                        Array.isArray(e) || bf(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Kd('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return Fg(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ig(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[tv] = function () {
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
                    key: nv,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    lv = vf('ObservableSet', av),
    uv = Object.create(null),
    sv = 'remove',
    cv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = cp),
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
                (this.keysAtom_ = new Nf('ObservableObject.keys')),
                (this.isPlainObject_ = ff(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Yp) return (n.set(t), !0);
                if (Ag(this)) {
                    var r = Mg(this, { type: zg, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== gh.UNCHANGED) {
                    var o = jg(this),
                        i = o
                            ? {
                                  type: zg,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), o && Tg(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (gh.trackingDerivation && !Sf(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    Sf(this.target_, e)
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
                if (!gh.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new $p(e in this.target_, Uf, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Mf]) && n[e]) return;
                        Kd(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== ef; ) {
                        var o = Jd(r, e);
                        if (o) {
                            var i = t.make_(this, e, o, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    gv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var o = n.extend_(this, e, t, r);
                return (o && gv(this, n, e), o);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    _h();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Ag(this)) {
                        var o = Mg(this, { object: this.proxy_ || this.target_, name: e, type: Zg, newValue: t.value });
                        if (!o) return null;
                        var i = o.newValue;
                        t.value !== i && (t = Of({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Zd(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    wh();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    _h();
                    var o = this.delete_(e);
                    if (!o) return o;
                    if (Ag(this)) {
                        var i = Mg(this, { object: this.proxy_ || this.target_, name: e, type: Zg, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var a = pv(e),
                        l = {
                            configurable: !gh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Zd(this.target_, e, l);
                    var u = new $p(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    wh();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    _h();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Ag(this))
                        if (!Mg(this, { object: this.proxy_ || this.target_, name: e, type: Zg, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var o = pv(e),
                        i = {
                            configurable: !gh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: o.get,
                            set: o.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Zd(this.target_, e, i);
                    (this.values_.set(e, new Yp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    wh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !Sf(this.target_, e))) return !0;
                if (Ag(this) && !Mg(this, { object: this.proxy_ || this.target_, name: e, type: sv })) return null;
                try {
                    var n, r;
                    _h();
                    var o,
                        i = jg(this),
                        a = this.values_.get(e),
                        l = void 0;
                    if (!a && i) l = null == (o = Jd(this.target_, e)) ? void 0 : o.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof $p && (l = a.value_), kh(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: sv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && Tg(this, u));
                    }
                } finally {
                    wh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return Fg(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ig(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    o = jg(this);
                if (o) {
                    var i = o
                        ? {
                              type: Zg,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    o && Tg(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), _f(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function dv(e, t) {
    var n;
    if (Sf(e, Vf)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        o = new cv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : dp(e)) : void 0;
            })(t),
        );
    return (hf(e, Vf, o), e);
}
var fv = vf('ObservableObjectAdministration', cv);
function pv(e) {
    return (
        uv[e] ||
        (uv[e] = {
            get: function () {
                return this[Vf].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Vf].setObservablePropValue_(e, t);
            },
        })
    );
}
function hv(e) {
    return !!df(e) && fv(e[Vf]);
}
function gv(e, t, n) {
    var r;
    null == (r = e.target_[Mf]) || delete r[n];
}
var vv,
    mv,
    bv = kv(0),
    yv = (function () {
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
    _v = 0,
    wv = function () {};
((vv = wv),
    (mv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(vv.prototype, mv)
        : void 0 !== vv.prototype.__proto__
          ? (vv.prototype.__proto__ = mv)
          : (vv.prototype = mv));
var Sv = (function (e, t, n) {
    function r(t, n, r, o) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === o && (o = !1),
            (i = e.call(this) || this),
            Av(function () {
                var e = new Bg(r, n, o, !0);
                ((e.proxy_ = Rf(i)),
                    gf(Rf(i), Vf, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    yv && Object.defineProperty(Rf(i), '0', bv));
            }),
            i
        );
    }
    Pf(r, e);
    var o = r.prototype;
    return (
        (o.concat = function () {
            this[Vf].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Yg(e) ? e.slice() : e;
                }),
            );
        }),
        (o[n] = function () {
            var e = this,
                t = 0;
            return Tv({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        Cf(r, [
            {
                key: 'length',
                get: function () {
                    return this[Vf].getArrayLength_();
                },
                set: function (e) {
                    this[Vf].setArrayLength_(e);
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
})(wv, Symbol.toStringTag, Symbol.iterator);
function kv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Vf].get_(e);
        },
        set: function (t) {
            this[Vf].set_(e, t);
        },
    };
}
function xv(e) {
    Zd(Sv.prototype, '' + e, kv(e));
}
function Cv(e) {
    if (e > _v) {
        for (var t = _v; t < e + 100; t++) xv(t);
        _v = e;
    }
}
function Ov(e, t, n) {
    return new Sv(e, t, n);
}
function Pv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Yg(e)) return (void 0 !== t && Kd(23), e[Vf].atom_);
        if (lv(e)) return e.atom_;
        if (ov(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Kd(25, t, Rv(e)), n);
        }
        if (hv(e)) {
            if (!t) return Kd(26);
            var r = e[Vf].values_.get(t);
            return (r || Kd(27, t, Rv(e)), r);
        }
        if (Lf(e) || Jp(e) || Rh(e)) return e;
    } else if (sf(e) && Rh(e[Vf])) return e[Vf];
    Kd(28);
}
function Ev(e, t) {
    return (
        e || Kd(29),
        void 0 !== t ? Ev(Pv(e, t)) : Lf(e) || Jp(e) || Rh(e) || ov(e) || lv(e) ? e : e[Vf] ? e[Vf] : void Kd(24, e)
    );
}
function Rv(e, t) {
    var n;
    if (void 0 !== t) n = Pv(e, t);
    else {
        if (Uh(e)) return e.name;
        n = hv(e) || ov(e) || lv(e) ? Ev(e) : Pv(e);
    }
    return n.name_;
}
function Av(e) {
    var t = ah(),
        n = Up(!0);
    _h();
    try {
        return e();
    } finally {
        (wh(), Hp(n), lh(t));
    }
}
(Object.entries(Hg).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && hf(Sv.prototype, t, n);
}),
    Cv(1e3));
var Iv = ef.toString;
function Mv(e, t, n) {
    return (void 0 === n && (n = -1), jv(e, t, n));
}
function jv(e, t, n, r, o) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var a = Iv.call(e);
    if (a !== Iv.call(t)) return !1;
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
    ((e = Fv(e)), (t = Fv(t)));
    var l = '[object Array]' === a;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(sf(u) && u instanceof u && sf(s) && s instanceof s) &&
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
        for (; c--; ) if (!jv(e[c], t[c], n - 1, r, o)) return !1;
    } else {
        var d,
            f = Object.keys(e);
        if (((c = f.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!Sf(t, (d = f[c])) || !jv(e[d], t[d], n - 1, r, o)) return !1;
    }
    return (r.pop(), o.pop(), !0);
}
function Fv(e) {
    return Yg(e) ? e.slice() : mf(e) || ov(e) || bf(e) || lv(e) ? Array.from(e.entries()) : e;
}
function Tv(e) {
    return ((e[Symbol.iterator] = Vv), e);
}
function Vv() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Xd()[e] && Kd("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ah, extras: { getDebugName: Rv }, $mobx: Vf }));
const Nv = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            $mobx: Vf,
            FlowCancellationError: lg,
            ObservableMap: rv,
            ObservableSet: av,
            Reaction: xh,
            _allowStateChanges: Bp,
            _allowStateChangesInsideComputed: Bh,
            _allowStateReadsEnd: sh,
            _allowStateReadsStart: uh,
            _autoAction: Dh,
            _endAction: Dp,
            _getAdministration: Ev,
            _getGlobalState: vh,
            _interceptReads: function (e, t, n) {
                var r;
                return (
                    ov(e) || Yg(e) || qp(e) ? (r = Ev(e)) : hv(e) && (r = Ev(e, t)),
                    (r.dehancer = 'function' == typeof t ? t : n),
                    function () {
                        r.dehancer = void 0;
                    }
                );
            },
            _isComputingDerivation: nh,
            _resetGlobalState: function () {
                var e = new fh();
                for (var t in e) -1 === dh.indexOf(t) && (gh[t] = e[t]);
                gh.allowStateChanges = !gh.enforceActions;
            },
            _startAction: zp,
            action: zh,
            autorun: Hh,
            comparer: Df,
            computed: Ip,
            configure: tg,
            createAtom: zf,
            defineProperty: function (e, t, n) {
                if (hv(e)) return e[Vf].defineProperty_(t, n);
                Kd(39);
            },
            entries: _g,
            extendObservable: ng,
            flow: cg,
            flowResult: function (e) {
                return e;
            },
            get: function (e, t) {
                if (wg(e, t)) return hv(e) ? e[Vf].get_(t) : ov(e) ? e.get(t) : Yg(e) ? e[t] : void Kd(11);
            },
            getAtom: Pv,
            getDebugName: Rv,
            getDependencyTree: rg,
            getObserverTree: function (e, t) {
                return ig(Pv(e, t));
            },
            has: wg,
            intercept: function (e, t, n) {
                return sf(n)
                    ? (function (e, t, n) {
                          return Ev(e, t).intercept_(n);
                      })(e, t, n)
                    : (function (e, t) {
                          return Ev(e).intercept_(t);
                      })(e, t);
            },
            isAction: Uh,
            isBoxedObservable: qp,
            isComputed: hg,
            isComputedProp: gg,
            isFlow: fg,
            isFlowCancellationError: function (e) {
                return e instanceof lg;
            },
            isObservable: mg,
            isObservableArray: Yg,
            isObservableMap: ov,
            isObservableObject: hv,
            isObservableProp: function (e, t) {
                return vg(e, t);
            },
            isObservableSet: lv,
            keys: bg,
            makeAutoObservable: function (e, t, n) {
                return ff(e)
                    ? ng(e, e, t, n)
                    : (Av(function () {
                          var r = dv(e, n)[Vf];
                          if (!e[Ng]) {
                              var o = Object.getPrototypeOf(e),
                                  i = new Set([].concat(_f(e), _f(o)));
                              (i.delete('constructor'), i.delete(Vf), hf(o, Ng, i));
                          }
                          e[Ng].forEach(function (e) {
                              return r.make_(e, !t || !(e in t) || t[e]);
                          });
                      }),
                      e);
            },
            makeObservable: Vg,
            observable: Pp,
            observe: kg,
            onBecomeObserved: Qh,
            onBecomeUnobserved: Xh,
            onReactionError: function (e) {
                return (
                    gh.globalReactionErrorHandlers.push(e),
                    function () {
                        var t = gh.globalReactionErrorHandlers.indexOf(e);
                        t >= 0 && gh.globalReactionErrorHandlers.splice(t, 1);
                    }
                );
            },
            override: Gf,
            ownKeys: Sg,
            reaction: qh,
            remove: function (e, t) {
                hv(e)
                    ? e[Vf].delete_(t)
                    : ov(e) || lv(e)
                      ? e.delete(t)
                      : Yg(e)
                        ? ('number' != typeof t && (t = parseInt(t, 10)), e.splice(t, 1))
                        : Kd(9);
            },
            runInAction: Bh,
            set: function e(t, n, r) {
                if (2 !== arguments.length || lv(t))
                    hv(t)
                        ? t[Vf].set_(n, r)
                        : ov(t)
                          ? t.set(n, r)
                          : lv(t)
                            ? t.add(n)
                            : Yg(t)
                              ? ('number' != typeof n && (n = parseInt(n, 10)),
                                n < 0 && Kd("Invalid index: '" + n + "'"),
                                _h(),
                                n >= t.length && (t.length = n + 1),
                                (t[n] = r),
                                wh())
                              : Kd(8);
                else {
                    _h();
                    var o = n;
                    try {
                        for (var i in o) e(t, i, o[i]);
                    } finally {
                        wh();
                    }
                }
            },
            spy: Ah,
            toJS: function (e, t) {
                return Cg(e, new Map());
            },
            trace: function () {},
            transaction: Og,
            untracked: ih,
            values: yg,
            when: function (e, t, n) {
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
                                  l = Pg(e, n, Of({}, t, { onError: i }));
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
                    : Pg(e, t, n || {});
            },
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
);
var Lv = em(),
    zv = (e) => Xv(e, Lv),
    Dv = em();
zv.write = (e) => Xv(e, Dv);
var Bv = em();
zv.onStart = (e) => Xv(e, Bv);
var Uv = em();
zv.onFrame = (e) => Xv(e, Uv);
var Hv = em();
zv.onFinish = (e) => Xv(e, Hv);
var Gv = [];
zv.setTimeout = (e, t) => {
    const n = zv.now() + t,
        r = () => {
            const e = Gv.findIndex((e) => e.cancel == r);
            (~e && Gv.splice(e, 1), (Kv -= ~e ? 1 : 0));
        },
        o = { time: n, handler: e, cancel: r };
    return (Gv.splice($v(n), 0, o), (Kv += 1), Yv(), o);
};
var $v = (e) => ~(~Gv.findIndex((t) => t.time > e) || ~Gv.length);
((zv.cancel = (e) => {
    (Bv.delete(e), Uv.delete(e), Hv.delete(e), Lv.delete(e), Dv.delete(e));
}),
    (zv.sync = (e) => {
        ((Qv = !0), zv.batchedUpdates(e), (Qv = !1));
    }),
    (zv.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), zv.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Bv.delete(n), (t = null));
            }),
            r
        );
    }));
var qv = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((zv.use = (e) => (qv = e)),
    (zv.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (zv.batchedUpdates = (e) => e()),
    (zv.catch = console.error),
    (zv.frameLoop = 'always'),
    (zv.advance = () => {
        'demand' !== zv.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Zv();
    }));
var Wv = -1,
    Kv = 0,
    Qv = !1;
function Xv(e, t) {
    Qv ? (t.delete(e), e(0)) : (t.add(e), Yv());
}
function Yv() {
    Wv < 0 && ((Wv = 0), 'demand' !== zv.frameLoop && qv(Jv));
}
function Jv() {
    ~Wv && (qv(Jv), zv.batchedUpdates(Zv));
}
function Zv() {
    const e = Wv;
    Wv = zv.now();
    const t = $v(Wv);
    (t && (tm(Gv.splice(0, t), (e) => e.handler()), (Kv -= t)),
        Kv ? (Bv.flush(), Lv.flush(e ? Math.min(64, Wv - e) : 16.667), Uv.flush(), Dv.flush(), Hv.flush()) : (Wv = -1));
}
function em() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Kv += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Kv -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Kv -= t.size), tm(t, (t) => t(n) && e.add(t)), (Kv += e.size), (t = e));
        },
    };
}
function tm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            zv.catch(n);
        }
    });
}
var nm = Object.defineProperty,
    rm = {};
function om() {}
((e, t) => {
    for (var n in t) nm(e, n, { get: t[n], enumerable: !0 });
})(rm, {
    assign: () => bm,
    colors: () => gm,
    createStringInterpolator: () => dm,
    skipAnimation: () => vm,
    to: () => fm,
    willAdvance: () => mm,
});
var im = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function am(e, t) {
    if (im.arr(e)) {
        if (!im.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var lm = (e, t) => e.forEach(t);
function um(e, t, n) {
    if (im.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var sm = (e) => (im.und(e) ? [] : im.arr(e) ? e : [e]);
function cm(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), lm(n, t));
    }
}
var dm,
    fm,
    pm = (e, ...t) => cm(e, (e) => e(...t)),
    hm = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    gm = null,
    vm = !1,
    mm = om,
    bm = (e) => {
        (e.to && (fm = e.to),
            e.now && (zv.now = e.now),
            void 0 !== e.colors && (gm = e.colors),
            null != e.skipAnimation && (vm = e.skipAnimation),
            e.createStringInterpolator && (dm = e.createStringInterpolator),
            e.requestAnimationFrame && zv.use(e.requestAnimationFrame),
            e.batchedUpdates && (zv.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (mm = e.willAdvance),
            e.frameLoop && (zv.frameLoop = e.frameLoop));
    },
    ym = new Set(),
    _m = [],
    wm = [],
    Sm = 0,
    km = {
        get idle() {
            return !ym.size && !_m.length;
        },
        start(e) {
            Sm > e.priority ? (ym.add(e), zv.onStart(xm)) : (Cm(e), zv(Pm));
        },
        advance: Pm,
        sort(e) {
            if (Sm) zv.onFrame(() => km.sort(e));
            else {
                const t = _m.indexOf(e);
                ~t && (_m.splice(t, 1), Om(e));
            }
        },
        clear() {
            ((_m = []), ym.clear());
        },
    };
function xm() {
    (ym.forEach(Cm), ym.clear(), zv(Pm));
}
function Cm(e) {
    _m.includes(e) || Om(e);
}
function Om(e) {
    _m.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(_m, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Pm(e) {
    const t = wm;
    for (let n = 0; n < _m.length; n++) {
        const r = _m[n];
        ((Sm = r.priority), r.idle || (mm(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Sm = 0), ((wm = _m).length = 0), (_m = t).length > 0);
}
var Em = '[-+]?\\d*\\.?\\d+',
    Rm = Em + '%';
function Am(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Im = new RegExp('rgb' + Am(Em, Em, Em)),
    Mm = new RegExp('rgba' + Am(Em, Em, Em, Em)),
    jm = new RegExp('hsl' + Am(Em, Rm, Rm)),
    Fm = new RegExp('hsla' + Am(Em, Rm, Rm, Em)),
    Tm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Vm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Nm = /^#([0-9a-fA-F]{6})$/,
    Lm = /^#([0-9a-fA-F]{8})$/;
function zm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Dm(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r,
        i = zm(o, r, e + 1 / 3),
        a = zm(o, r, e),
        l = zm(o, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * l) << 8);
}
function Bm(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Um(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Hm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Gm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function $m(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Nm.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : gm && void 0 !== gm[e]
                ? gm[e]
                : (t = Im.exec(e))
                  ? ((Bm(t[1]) << 24) | (Bm(t[2]) << 16) | (Bm(t[3]) << 8) | 255) >>> 0
                  : (t = Mm.exec(e))
                    ? ((Bm(t[1]) << 24) | (Bm(t[2]) << 16) | (Bm(t[3]) << 8) | Hm(t[4])) >>> 0
                    : (t = Tm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Lm.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Vm.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = jm.exec(e))
                            ? (255 | Dm(Um(t[1]), Gm(t[2]), Gm(t[3]))) >>> 0
                            : (t = Fm.exec(e))
                              ? (Dm(Um(t[1]), Gm(t[2]), Gm(t[3])) | Hm(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var qm = (e, t, n) => {
    if (im.fun(e)) return e;
    if (im.arr(e)) return qm({ range: e, output: t, extrapolate: n });
    if (im.str(e.output[0])) return dm(e);
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
var Wm = Symbol.for('FluidValue.get'),
    Km = Symbol.for('FluidValue.observers'),
    Qm = (e) => Boolean(e && e[Wm]),
    Xm = (e) => (e && e[Wm] ? e[Wm]() : e),
    Ym = (e) => e[Km] || null;
function Jm(e, t) {
    const n = e[Km];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Zm = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            eb(this, e);
        }
    },
    eb = (e, t) => ob(e, Wm, t);
function tb(e, t) {
    if (e[Wm]) {
        let n = e[Km];
        (n || ob(e, Km, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function nb(e, t) {
    const n = e[Km];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Km] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var rb,
    ob = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    ib = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    ab = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    lb = new RegExp(`(${ib.source})(%|[a-z]+)`, 'i'),
    ub = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    sb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    cb = (e) => {
        const [t, n] = db(e);
        if (!t || hm()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && sb.test(n) ? cb(n) : n || e;
    },
    db = (e) => {
        const t = sb.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    fb = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
    pb = (e) => {
        rb || (rb = gm ? new RegExp(`(${Object.keys(gm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Xm(e).replace(sb, cb).replace(ab, $m).replace(rb, $m)),
            n = t.map((e) => e.match(ib).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => qm({ ...e, output: t }));
        return (e) => {
            var n;
            const o = !lb.test(t[0]) && (null == (n = t.find((e) => lb.test(e))) ? void 0 : n.replace(ib, ''));
            let i = 0;
            return t[0].replace(ib, () => `${r[i++](e)}${o || ''}`).replace(ub, fb);
        };
    },
    hb = 'react-spring: ',
    gb = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${hb}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    vb = gb(console.warn);
var mb = gb(console.warn);
function bb(e) {
    return im.str(e) && ('#' == e[0] || /\d/.test(e) || (!hm() && sb.test(e)) || e in (gm || {}));
}
var yb = hm() ? U.useEffect : U.useLayoutEffect,
    _b = () => {
        const e = U.useRef(!1);
        return (
            yb(
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
function wb() {
    const e = U.useState()[1],
        t = _b();
    return () => {
        t.current && e(Math.random());
    };
}
var Sb = (e) => U.useEffect(e, kb),
    kb = [];
function xb(e) {
    const t = U.useRef();
    return (
        U.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var Cb = Symbol.for('Animated:node'),
    Ob = (e) => e && e[Cb],
    Pb = (e, t) => {
        return ((n = e), (r = Cb), (o = t), Object.defineProperty(n, r, { value: o, writable: !0, configurable: !0 }));
        var n, r, o;
    },
    Eb = (e) => e && e[Cb] && e[Cb].getPayload(),
    Rb = class {
        constructor() {
            Pb(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Ab = class extends Rb {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                im.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Ab(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                im.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                im.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Ib = class extends Ab {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = qm({ output: [e, e] })));
        }
        static create(e) {
            return new Ib(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (im.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = qm({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Mb = { dependencies: null },
    jb = class extends Rb {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                um(this.source, (n, r) => {
                    var o;
                    (o = n) && o[Cb] === o ? (t[r] = n.getValue(e)) : Qm(n) ? (t[r] = Xm(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && lm(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (um(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Mb.dependencies && Qm(e) && Mb.dependencies.add(e);
            const t = Eb(e);
            t && lm(t, (e) => this.add(e));
        }
    },
    Fb = class extends jb {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Fb(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Tb)), !0);
        }
    };
function Tb(e) {
    return (bb(e) ? Ib : Ab).create(e);
}
function Vb(e) {
    const t = Ob(e);
    return t ? t.constructor : im.arr(e) ? Fb : bb(e) ? Ib : Ab;
}
var Nb = (e, t) => {
        const n = !im.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return U.forwardRef((r, o) => {
            const i = U.useRef(null),
                a =
                    n &&
                    U.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (im.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(o, e);
                        },
                        [o],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((Mb.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new jb(e)), (Mb.dependencies = null), [e, n]);
                })(r, t),
                s = wb(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                d = new Lb(c, u),
                f = U.useRef();
            (yb(
                () => (
                    (f.current = d),
                    lm(u, (e) => tb(e, d)),
                    () => {
                        f.current && (lm(f.current.deps, (e) => nb(e, f.current)), zv.cancel(f.current.update));
                    }
                ),
            ),
                U.useEffect(c, []),
                Sb(() => () => {
                    const e = f.current;
                    lm(e.deps, (t) => nb(t, e));
                }));
            const p = t.getComponentProps(l.getValue());
            return U.createElement(e, { ...p, ref: a });
        });
    },
    Lb = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && zv.write(this.update);
        }
    };
var zb = Symbol.for('AnimatedComponent'),
    Db = (e) => (im.str(e) ? e : e && im.str(e.displayName) ? e.displayName : (im.fun(e) && e.name) || null);
function Bb(e, ...t) {
    return im.fun(e) ? e(...t) : e;
}
var Ub = (e, t) => !0 === e || !!(t && e && (im.fun(e) ? e(t) : sm(e).includes(t))),
    Hb = (e, t) => (im.obj(e) ? t && e[t] : e),
    Gb = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    $b = (e) => e,
    qb = (e, t = $b) => {
        let n = Wb;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const o of n) {
            const n = t(e[o], o);
            im.und(n) || (r[o] = n);
        }
        return r;
    },
    Wb = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Kb = {
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
function Qb(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (um(e, (e, r) => {
                Kb[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (um(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Xb(e) {
    return (
        (e = Xm(e)),
        im.arr(e) ? e.map(Xb) : bb(e) ? rm.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Yb(e) {
    for (const t in e) return !0;
    return !1;
}
function Jb(e) {
    return im.fun(e) || (im.arr(e) && im.obj(e[0]));
}
function Zb(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function ey(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var ty = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function ny(e, t) {
    if (im.und(t.decay)) {
        const n = !im.und(t.tension) || !im.und(t.friction);
        ((!n && im.und(t.frequency) && im.und(t.damping) && im.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var ry = [];
function oy(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
    return new Promise((a, l) => {
        let u,
            s,
            c = Ub(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) p();
        else {
            im.und(n.pause) || (o.paused = Ub(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = o.paused || Ub(e, t)),
                (u = Bb(n.delay || 0, t)),
                e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f()));
        }
        function d() {
            (o.resumeQueue.add(f), o.timeouts.delete(s), s.cancel(), (u = s.time - zv.now()));
        }
        function f() {
            u > 0 && !rm.skipAnimation
                ? ((o.delayed = !0), (s = zv.setTimeout(p, u)), o.pauseQueue.add(d), o.timeouts.add(s))
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
var iy = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? uy(e.get())
              : t.every((e) => e.noop)
                ? ay(e.get())
                : ly(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    ay = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    ly = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    uy = (e) => ({ value: e, cancelled: !0, finished: !1 });
function sy(e, t, n, r) {
    const { callId: o, parentId: i, onRest: a } = t,
        { asyncTo: l, promise: u } = n;
    return i || e !== l || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = o), (n.asyncTo = e));
              const s = qb(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, d;
              const f = new Promise((e, t) => ((c = e), (d = t))),
                  p = (e) => {
                      const t = (o <= (n.cancelId || 0) && uy(r)) || (o !== n.asyncId && ly(r, !1));
                      if (t) throw ((e.result = t), d(e), e);
                  },
                  h = (e, t) => {
                      const i = new dy(),
                          a = new fy();
                      return (async () => {
                          if (rm.skipAnimation) throw (cy(n), (a.result = ly(r, !1)), d(a), a);
                          p(i);
                          const l = im.obj(e) ? { ...e } : { ...t, to: e };
                          ((l.parentId = o),
                              um(s, (e, t) => {
                                  im.und(l[t]) && (l[t] = e);
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
              if (rm.skipAnimation) return (cy(n), ly(r, !1));
              try {
                  let t;
                  ((t = im.arr(e)
                      ? (async (e) => {
                            for (const t of e) await h(t);
                        })(e)
                      : Promise.resolve(e(h, r.stop.bind(r)))),
                      await Promise.all([t.then(c), f]),
                      (g = ly(r.get(), !0, !1)));
              } catch (v) {
                  if (v instanceof dy) g = v.result;
                  else {
                      if (!(v instanceof fy)) throw v;
                      g = v.result;
                  }
              } finally {
                  o == n.asyncId && ((n.asyncId = i), (n.asyncTo = i ? l : void 0), (n.promise = i ? u : void 0));
              }
              return (
                  im.fun(a) &&
                      zv.batchedUpdates(() => {
                          a(g, r, r.item);
                      }),
                  g
              );
          })())
        : u;
}
function cy(e, t) {
    (cm(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var dy = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    fy = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    py = (e) => e instanceof gy,
    hy = 1,
    gy = class extends Zm {
        constructor() {
            (super(...arguments), (this.id = hy++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Ob(this);
            return e && e.getValue();
        }
        to(...e) {
            return rm.to(this, e);
        }
        interpolate(...e) {
            return (vb(`${hb}The "interpolate" function is deprecated in v9 (use "to" instead)`), rm.to(this, e));
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
            Jm(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || km.sort(this), Jm(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    vy = Symbol.for('SpringPhase'),
    my = (e) => (1 & e[vy]) > 0,
    by = (e) => (2 & e[vy]) > 0,
    yy = (e) => (4 & e[vy]) > 0,
    _y = (e, t) => (t ? (e[vy] |= 3) : (e[vy] &= -3)),
    wy = (e, t) => (t ? (e[vy] |= 4) : (e[vy] &= -5)),
    Sy = class extends gy {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = ry),
                            (this.toValues = null),
                            (this.fromValues = ry),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, ty));
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
                !im.und(e) || !im.und(t))
            ) {
                const n = im.obj(e) ? { ...e } : { ...t, from: e };
                (im.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(by(this) || this._state.asyncTo) || yy(this);
        }
        get goal() {
            return Xm(this.animation.to);
        }
        get velocity() {
            const e = Ob(this);
            return e instanceof Ab ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return my(this);
        }
        get isAnimating() {
            return by(this);
        }
        get isPaused() {
            return yy(this);
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
                a = Eb(r.to);
            (!a && Qm(r.to) && (o = sm(Xm(r.to))),
                r.values.forEach((l, u) => {
                    if (l.done) return;
                    const s = l.constructor == Ib ? 1 : a ? a[u].lastPosition : o[u];
                    let c = r.immediate,
                        d = s;
                    if (!c) {
                        if (((d = l.lastPosition), i.tension <= 0)) return void (l.done = !0);
                        let t = (l.elapsedTime += e);
                        const n = r.fromValues[u],
                            o = null != l.v0 ? l.v0 : (l.v0 = im.arr(i.velocity) ? i.velocity[u] : i.velocity);
                        let a;
                        const f = i.precision || (n == s ? 0.005 : Math.min(1, 0.001 * Math.abs(s - n)));
                        if (im.und(i.duration))
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
                                    u = !im.und(r),
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
            const l = Ob(this),
                u = l.getValue();
            if (t) {
                const e = Xm(r.to);
                ((u === e && !n) || i.decay ? n && i.decay && this._onChange(u) : (l.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                zv.batchedUpdates(() => {
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
            if (by(this)) {
                const { to: e, config: t } = this.animation;
                zv.batchedUpdates(() => {
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
                im.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [im.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => iy(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                cy(this._state, e && this._lastCallId),
                zv.batchedUpdates(() => this._stop(t, e)),
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
            ((n = im.obj(n) ? n[t] : n),
                (null == n || Jb(n)) && (n = void 0),
                (r = im.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const o = { to: n, from: r };
            return (
                my(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Xm(r)), im.und(r) ? Ob(this) || this._set(n) : this._set(r)),
                o
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    qb(e, (e, t) => (/^on/.test(t) ? Hb(e, n) : e)),
                ),
                Ry(this, e, 'onProps'),
                Ay(this, 'onProps', e, this));
            const o = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const i = this._state;
            return oy(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: i,
                actions: {
                    pause: () => {
                        yy(this) ||
                            (wy(this, !0),
                            pm(i.pauseQueue),
                            Ay(this, 'onPause', ly(this, ky(this, this.animation.to)), this));
                    },
                    resume: () => {
                        yy(this) &&
                            (wy(this, !1),
                            by(this) && this._resume(),
                            pm(i.resumeQueue),
                            Ay(this, 'onResume', ly(this, ky(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, o),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = xy(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(uy(this)));
            const r = !im.und(e.to),
                o = !im.und(e.from);
            if (r || o) {
                if (!(t.callId > this._lastToId)) return n(uy(this));
                this._lastToId = t.callId;
            }
            const { key: i, defaultProps: a, animation: l } = this,
                { to: u, from: s } = l;
            let { to: c = u, from: d = s } = e;
            (!o || r || (t.default && !im.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
            const f = !am(d, s);
            (f && (l.from = d), (d = Xm(d)));
            const p = !am(c, u);
            p && this._focus(c);
            const h = Jb(t.to),
                { config: g } = l,
                { decay: v, velocity: m } = g;
            ((r || o) && (g.velocity = 0),
                t.config &&
                    !h &&
                    (function (e, t, n) {
                        (n && (ny((n = { ...n }), t), (t = { ...n, ...t })), ny(e, t), Object.assign(e, t));
                        for (const a in ty) null == e[a] && (e[a] = ty[a]);
                        let { frequency: r, damping: o } = e;
                        const { mass: i } = e;
                        im.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            o < 0 && (o = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * i),
                            (e.friction = (4 * Math.PI * o * i) / r));
                    })(g, Bb(t.config, i), t.config !== a.config ? Bb(a.config, i) : void 0));
            let b = Ob(this);
            if (!b || im.und(c)) return n(ly(this, !0));
            const y = im.und(t.reset) ? o && !t.default : !im.und(d) && Ub(t.reset, i),
                _ = y ? d : this.get(),
                w = Xb(c),
                S = im.num(w) || im.arr(w) || bb(w),
                k = !h && (!S || Ub(a.immediate || t.immediate, i));
            if (p) {
                const e = Vb(c);
                if (e !== b.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    b = this._set(w);
                }
            }
            const x = b.constructor;
            let C = Qm(c),
                O = !1;
            if (!C) {
                const e = y || (!my(this) && f);
                ((p || e) && ((O = am(Xb(_), w)), (C = !O)),
                    ((am(l.immediate, k) || k) && am(g.decay, v) && am(g.velocity, m)) || (C = !0));
            }
            if (
                (O && by(this) && (l.changed && !y ? (C = !0) : C || this._stop(u)),
                !h &&
                    ((C || Qm(u)) && ((l.values = b.getPayload()), (l.toValues = Qm(c) ? null : x == Ib ? [1] : sm(w))),
                    l.immediate != k && ((l.immediate = k), k || y || this._set(u)),
                    C))
            ) {
                const { onRest: e } = l;
                lm(Ey, (e) => Ry(this, t, e));
                const r = ly(this, ky(this, u));
                (pm(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    l.changed &&
                        zv.batchedUpdates(() => {
                            var t;
                            ((l.changed = !y),
                                null == e || e(r, this),
                                y ? Bb(a.onRest, r) : null == (t = l.onStart) || t.call(l, r, this));
                        }));
            }
            (y && this._set(_),
                h
                    ? n(sy(t.to, t, this._state, this))
                    : C
                      ? this._start()
                      : by(this) && !p
                        ? this._pendingCalls.add(n)
                        : n(ay(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Ym(this) && this._detach(), (t.to = e), Ym(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Qm(t) && (tb(t, this), py(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Qm(e) && nb(e, this);
        }
        _set(e, t = !0) {
            const n = Xm(e);
            if (!im.und(n)) {
                const e = Ob(this);
                if (!e || !am(n, e.getValue())) {
                    const r = Vb(n);
                    (e && e.constructor == r ? e.setValue(n) : Pb(this, r.create(n)),
                        e &&
                            zv.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return Ob(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), Ay(this, 'onStart', ly(this, ky(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), Bb(this.animation.onChange, e, this)),
                Bb(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (Ob(this).reset(Xm(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                by(this) || (_y(this, !0), yy(this) || this._resume()));
        }
        _resume() {
            rm.skipAnimation ? this.finish() : km.start(this);
        }
        _stop(e, t) {
            if (by(this)) {
                _y(this, !1);
                const n = this.animation;
                (lm(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Jm(this, { type: 'idle', parent: this }));
                const r = t ? uy(this.get()) : ly(this.get(), ky(this, e ?? n.to));
                (pm(this._pendingCalls, r), n.changed && ((n.changed = !1), Ay(this, 'onRest', r, this)));
            }
        }
    };
function ky(e, t) {
    const n = Xb(t);
    return am(Xb(e.get()), n);
}
function xy(e, t = e.loop, n = e.to) {
    const r = Bb(t);
    if (r) {
        const o = !0 !== r && Qb(r),
            i = (o || e).reverse,
            a = !o || o.reset;
        return Cy({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Jb(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o,
        });
    }
}
function Cy(e) {
    const { to: t, from: n } = (e = Qb(e)),
        r = new Set();
    return (im.obj(t) && Py(t, r), im.obj(n) && Py(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function Oy(e) {
    const t = Cy(e);
    return (im.und(t.default) && (t.default = qb(t)), t);
}
function Py(e, t) {
    um(e, (e, n) => null != e && t.add(n));
}
var Ey = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function Ry(e, t, n) {
    e.animation[n] = t[n] !== Gb(t, n) ? Hb(t[n], e.key) : void 0;
}
function Ay(e, t, ...n) {
    var r, o, i, a;
    (null == (o = (r = e.animation)[t]) || o.call(r, ...n), null == (a = (i = e.defaultProps)[t]) || a.call(i, ...n));
}
var Iy = ['onStart', 'onChange', 'onRest'],
    My = 1,
    jy = class {
        constructor(e, t) {
            ((this.id = My++),
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
                im.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(Cy(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = sm(e).map(Cy)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (Dy(this, t), Fy(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                lm(sm(t), (t) => n[t].stop(!!e));
            } else (cy(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (im.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                lm(sm(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (im.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                lm(sm(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            um(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                o = this._changed.size > 0;
            ((r && !this._started) || (o && !this._started)) &&
                ((this._started = !0),
                cm(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const i = !r && this._started,
                a = o || (i && n.size) ? this.get() : null;
            (o &&
                t.size &&
                cm(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                i &&
                    ((this._started = !1),
                    cm(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            zv.onFrame(this._onFrame);
        }
    };
function Fy(e, t) {
    return Promise.all(t.map((t) => Ty(e, t))).then((t) => iy(e, t));
}
async function Ty(e, t, n) {
    const { keys: r, to: o, from: i, loop: a, onRest: l, onResolve: u } = t,
        s = im.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null));
    const c = im.arr(o) || im.fun(o) ? o : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), s && (s.onRest = void 0))
        : lm(Iy, (n) => {
              const r = t[n];
              if (im.fun(r)) {
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
        ? ((d.paused = t.pause), pm(t.pause ? d.pauseQueue : d.resumeQueue))
        : d.paused && (t.pause = !0);
    const f = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        p = !0 === t.cancel || !0 === Gb(t, 'cancel');
    ((c || (p && d.asyncId)) &&
        f.push(
            oy(++e._lastAsyncId, {
                props: t,
                state: d,
                actions: {
                    pause: om,
                    resume: om,
                    start(t, n) {
                        p ? (cy(d, e._lastAsyncId), n(uy(e))) : ((t.onRest = l), n(sy(c, t, d, e)));
                    },
                },
            }),
        ),
        d.paused &&
            (await new Promise((e) => {
                d.resumeQueue.add(e);
            })));
    const h = iy(e, await Promise.all(f));
    if (a && h.finished && (!n || !h.noop)) {
        const n = xy(t, a, o);
        if (n) return (Dy(e, [n]), Ty(e, n, !0));
    }
    return (u && zv.batchedUpdates(() => u(h, e, e.item)), h);
}
function Vy(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            lm(sm(t), (e) => {
                (im.und(e.keys) && (e = Cy(e)), im.obj(e.to) || (e = { ...e, to: void 0 }), zy(n, e, (e) => Ly(e)));
            }),
        Ny(e, n),
        n
    );
}
function Ny(e, t) {
    um(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), tb(t, e));
    });
}
function Ly(e, t) {
    const n = new Sy();
    return ((n.key = e), t && tb(n, t), n);
}
function zy(e, t, n) {
    t.keys &&
        lm(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function Dy(e, t) {
    lm(t, (t) => {
        zy(e.springs, t, (t) => Ly(t, e));
    });
}
var By,
    Uy,
    Hy = ({ children: e, ...t }) => {
        const n = U.useContext(Gy),
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
        const { Provider: i } = Gy;
        return U.createElement(i, { value: t }, e);
    },
    Gy =
        ((By = Hy),
        (Uy = {}),
        Object.assign(By, U.createContext(Uy)),
        (By.Provider._context = By),
        (By.Consumer._context = By),
        By);
((Hy.Provider = Gy.Provider), (Hy.Consumer = Gy.Consumer));
var $y = () => {
    const e = [],
        t = function (t) {
            mb(
                `${hb}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                lm(e, (e, o) => {
                    if (im.und(t)) r.push(e.start());
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
            return (lm(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (lm(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            lm(e, (e, n) => {
                const r = im.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                lm(e, (e, r) => {
                    if (im.und(t)) n.push(e.start());
                    else {
                        const o = this._getProps(t, e, r);
                        o && n.push(e.start(o));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (lm(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (lm(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return im.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function qy(e, t, n) {
    const r = im.fun(t) && t;
    r && !n && (n = []);
    const o = U.useMemo(() => (r || 3 == arguments.length ? $y() : void 0), []),
        i = U.useRef(0),
        a = wb(),
        l = U.useMemo(
            () => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                    const n = Vy(e, t);
                    return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                        ? Fy(e, t)
                        : new Promise((r) => {
                              (Ny(e, n),
                                  l.queue.push(() => {
                                      r(Fy(e, t));
                                  }),
                                  a());
                          });
                },
            }),
            [],
        ),
        u = U.useRef([...l.ctrls]),
        s = [],
        c = xb(e) || 0;
    function d(e, n) {
        for (let o = e; o < n; o++) {
            const e = u.current[o] || (u.current[o] = new jy(null, l.flush)),
                n = r ? r(o, e) : t[o];
            n && (s[o] = Oy(n));
        }
    }
    (U.useMemo(() => {
        (lm(u.current.slice(e, c), (e) => {
            (Zb(e, o), e.stop(!0));
        }),
            (u.current.length = e),
            d(c, e));
    }, [e]),
        U.useMemo(() => {
            d(0, Math.min(c, e));
        }, n));
    const f = u.current.map((e, t) => Vy(e, s[t])),
        p = U.useContext(Hy),
        h = xb(p),
        g = p !== h && Yb(p);
    (yb(() => {
        (i.current++, (l.ctrls = u.current));
        const { queue: e } = l;
        (e.length && ((l.queue = []), lm(e, (e) => e())),
            lm(u.current, (e, t) => {
                (null == o || o.add(e), g && e.start({ default: p }));
                const n = s[t];
                n && (ey(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
            }));
    }),
        Sb(() => () => {
            lm(l.ctrls, (e) => e.stop(!0));
        }));
    const v = f.map((e) => ({ ...e }));
    return o ? [v, o] : v;
}
function Wy(e, t) {
    const n = im.fun(e),
        [[r], o] = qy(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, o] : r;
}
var Ky = () => $y(),
    Qy = () => U.useState(Ky)[0];
function Xy(e, t, n) {
    const r = im.fun(t) && t,
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
        f = U.useMemo(() => (r || 3 == arguments.length ? $y() : void 0), []),
        p = sm(e),
        h = [],
        g = U.useRef(null),
        v = o ? null : g.current;
    (yb(() => {
        g.current = h;
    }),
        Sb(
            () => (
                lm(h, (e) => {
                    (null == f || f.add(e.ctrl), (e.ctrl.ref = f));
                }),
                () => {
                    lm(g.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Zb(e.ctrl, f), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const m = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : Yy++;
                });
            }
            return im.und(n) ? e : im.fun(n) ? e.map(n) : sm(n);
        })(p, r ? r() : t, v),
        b = (o && g.current) || [];
    yb(() =>
        lm(b, ({ ctrl: e, item: t, key: n }) => {
            (Zb(e, f), Bb(s, t, n));
        }),
    );
    const y = [];
    if (
        (v &&
            lm(v, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = y[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        lm(p, (e, t) => {
            h[t] || ((h[t] = { key: m[t], item: e, phase: 'mount', ctrl: new jy() }), (h[t].ctrl.item = e));
        }),
        y.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        lm(y, (t, r) => {
            const o = v[r];
            ~t ? ((e = h.indexOf(o)), (h[e] = { ...o, item: p[t] })) : n && h.splice(++e, 0, o);
        });
    }
    im.fun(i) && h.sort((e, t) => i(e.item, t.item));
    let _ = -a;
    const w = wb(),
        S = qb(t),
        k = new Map(),
        x = U.useRef(new Map()),
        C = U.useRef(!1);
    lm(h, (e, n) => {
        const o = e.key,
            i = e.phase,
            s = r ? r() : t;
        let f, p;
        const h = Bb(s.delay || 0, o);
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
        if (((f = Bb(f, e.item, n)), (f = im.obj(f) ? Qb(f) : { to: f }), !f.config)) {
            const t = d || S.config;
            f.config = Bb(t, e.item, n, p);
        }
        _ += a;
        const b = { ...S, delay: h + _, ref: c, immediate: s.immediate, reset: !1, ...f };
        if ('enter' == p && im.und(b.from)) {
            const o = r ? r() : t,
                i = im.und(o.initial) || v ? o.from : o.initial;
            b.from = Bb(i, e.item, n);
        }
        const { onResolve: y } = b;
        b.onResolve = (e) => {
            Bb(y, e);
            const t = g.current,
                n = t.find((e) => e.key === o);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = Bb(l, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (x.current.delete(n), u && (C.current = !0), w());
            }
        };
        const O = Vy(e.ctrl, b);
        'leave' === p && u
            ? x.current.set(e, { phase: p, springs: O, payload: b })
            : k.set(e, { phase: p, springs: O, payload: b });
    });
    const O = U.useContext(Hy),
        P = xb(O),
        E = O !== P && Yb(O);
    (yb(() => {
        E &&
            lm(h, (e) => {
                e.ctrl.start({ default: O });
            });
    }, [O]),
        lm(k, (e, t) => {
            if (x.current.size) {
                const e = h.findIndex((e) => e.key === t.key);
                h.splice(e, 1);
            }
        }),
        yb(
            () => {
                lm(x.current.size ? x.current : k, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == f || f.add(r),
                        E && 'enter' == e && r.start({ default: O }),
                        t &&
                            (ey(r, t.ref),
                            (!r.ref && !f) || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t)));
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
                          key: im.str(t.key) || im.num(t.key) ? t.key : t.ctrl.id,
                          ref: o.ref,
                      })
                    : o;
            }),
        );
    return f ? [R, f] : R;
}
var Yy = 1;
var Jy = class extends gy {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = qm(...t)));
        const n = this._get(),
            r = Vb(n);
        Pb(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (am(t, this.get()) || (Ob(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && e_(this._active) && t_(this));
    }
    _get() {
        const e = im.arr(this.source) ? this.source.map(Xm) : sm(Xm(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !e_(this._active) &&
            ((this.idle = !1),
            lm(Eb(this), (e) => {
                e.done = !1;
            }),
            rm.skipAnimation ? (zv.batchedUpdates(() => this.advance()), t_(this)) : km.start(this));
    }
    _attach() {
        let e = 1;
        (lm(sm(this.source), (t) => {
            (Qm(t) && tb(t, this), py(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (lm(sm(this.source), (e) => {
            Qm(e) && nb(e, this);
        }),
            this._active.clear(),
            t_(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = sm(this.source).reduce((e, t) => Math.max(e, (py(t) ? t.priority : 0) + 1), 0));
    }
};
function Zy(e) {
    return !1 !== e.idle;
}
function e_(e) {
    return !e.size || Array.from(e).every(Zy);
}
function t_(e) {
    e.idle ||
        ((e.idle = !0),
        lm(Eb(e), (e) => {
            e.done = !0;
        }),
        Jm(e, { type: 'idle', parent: e }));
}
rm.assign({ createStringInterpolator: pb, to: (e, t) => new Jy(e, t) });
var n_ = /^--/;
function r_(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || n_.test(e) || (i_.hasOwnProperty(e) && i_[e])
          ? ('' + t).trim()
          : t + 'px';
}
var o_ = {};
var i_ = {
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
    a_ = ['Webkit', 'Ms', 'Moz', 'O'];
i_ = Object.keys(i_).reduce(
    (e, t) => (a_.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    i_,
);
var l_ = /^(matrix|translate|scale|rotate|skew)/,
    u_ = /^(translate)/,
    s_ = /^(rotate|skew)/,
    c_ = (e, t) => (im.num(e) && 0 !== e ? e + t : e),
    d_ = (e, t) => (im.arr(e) ? e.every((e) => d_(e, t)) : im.num(e) ? e === t : parseFloat(e) === t),
    f_ = class extends jb {
        constructor({ x: e, y: t, z: n, ...r }) {
            const o = [],
                i = [];
            ((e || t || n) &&
                (o.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => c_(e, 'px')).join(',')})`, d_(e, 0)])),
                um(r, (e, t) => {
                    if ('transform' === t) (o.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (l_.test(t)) {
                        if ((delete r[t], im.und(e))) return;
                        const n = u_.test(t) ? 'px' : s_.test(t) ? 'deg' : '';
                        (o.push(sm(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${c_(o, n)})`, d_(o, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => c_(e, n)).join(',')})`,
                                          d_(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                o.length && (r.transform = new p_(o, i)),
                super(r));
        }
    },
    p_ = class extends Zm {
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
                lm(this.inputs, (n, r) => {
                    const o = Xm(n[0]),
                        [i, a] = this.transforms[r](im.arr(o) ? o : n.map(Xm));
                    ((e += ' ' + i), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && lm(this.inputs, (e) => lm(e, (e) => Qm(e) && tb(e, this)));
        }
        observerRemoved(e) {
            0 == e && lm(this.inputs, (e) => lm(e, (e) => Qm(e) && nb(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Jm(this, e));
        }
    };
rm.assign({
    batchedUpdates: Hd.unstable_batchedUpdates,
    createStringInterpolator: pb,
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
var h_ = ((
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new jb(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = Db(e) || 'Anonymous';
                return (
                    ((e = im.str(e) ? i[e] || (i[e] = Nb(e, o)) : e[zb] || (e[zb] = Nb(e, o))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        return (
            um(e, (t, n) => {
                (im.arr(e) && (n = Db(t)), (i[n] = i(t)));
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
                        n || e.hasAttribute(t)
                            ? t
                            : o_[t] || (o_[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== o && (e.textContent = o);
                for (const d in r)
                    if (r.hasOwnProperty(d)) {
                        const t = r_(d, r[d]);
                        n_.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== a && (e.scrollLeft = a),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new f_(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ).animated,
    g_ = function () {};
function v_(e) {
    throw new Error('[mobx-utils] ' + e);
}
function m_(e, t) {
    (void 0 === t && (t = 'Illegal state'), e || v_(t));
}
function b_(e, t, n) {
    Object.defineProperty(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
var y_,
    __ = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(__(Object.getPrototypeOf(e)) || []);
    },
    w_ = function (e) {
        return (function (e) {
            var t = __(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    S_ = 'pending',
    k_ = 'fulfilled',
    x_ = 'rejected';
function C_(e) {
    switch (this.state) {
        case S_:
            return e.pending && e.pending(this.value);
        case x_:
            return e.rejected && e.rejected(this.value);
        case k_:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function O_(e, t) {
    if (
        (m_(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        m_(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        zh('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = k_));
        }),
        zh('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = x_));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = C_));
    var r = !t || (t.state !== k_ && t.state !== S_) ? void 0 : t.value;
    return (ng(n, { value: r, state: S_ }, {}, { deep: !1 }), n);
}
(((y_ = O_ || (O_ = {})).reject = zh('fromPromise.reject', function (e) {
    var t = y_(Promise.reject(e));
    return ((t.state = x_), (t.value = e), t);
})),
    (y_.resolve = zh('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = y_(Promise.resolve(e));
        return ((t.state = k_), (t.value = e), t);
    })));
var P_ = function () {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    var r = Array(e),
        o = 0;
    for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++) r[o] = i[a];
    return r;
};
function E_(e, t) {
    if (t < 0) throw new Error('[mobx.array] Index out of bounds: ' + t + ' is negative');
    var n = e.length;
    if (t >= n) throw new Error('[mobx.array] Index out of bounds: ' + t + ' is not smaller than ' + n);
}
function R_(e, t, n) {
    (void 0 === t && (t = g_), void 0 === n && (n = void 0));
    var r = !1,
        o = !1,
        i = n,
        a = function () {
            r && ((r = !1), t());
        },
        l = zf(
            'ResourceBasedObservable',
            function () {
                (m_(!r && !o),
                    (r = !0),
                    e(function (e) {
                        Bp(!0, function () {
                            ((i = e), l.reportChanged());
                        });
                    }));
            },
            a,
        );
    return {
        current: function () {
            return (
                m_(!o, 'subscribingObservable has already been disposed'),
                l.reportObserved() ||
                    r ||
                    console.warn(
                        'Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started',
                    ),
                i
            );
        },
        dispose: function () {
            ((o = !0), a());
        },
        isAlive: function () {
            return r;
        },
    };
}
var A_ = function (e, t, n, r) {
    var o,
        i = arguments.length,
        a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
    else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
    return (i > 3 && a && Object.defineProperty(t, n, a), a);
};
var I_ = (function () {
    function e(e, t) {
        var n = this;
        (Object.defineProperty(this, 'current', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(this, 'subscription', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            Vg(this),
            Bh(function () {
                ((n.current = t), (n.subscription = e.subscribe(n)));
            }));
    }
    return (
        Object.defineProperty(e.prototype, 'dispose', {
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
        A_([Pp.ref], e.prototype, 'current', void 0),
        A_([zh.bound], e.prototype, 'next', null),
        A_([zh.bound], e.prototype, 'complete', null),
        A_([zh.bound], e.prototype, 'error', null),
        e
    );
})();
var M_ = function () {
        return (
            (M_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            M_.apply(this, arguments)
        );
    },
    j_ = function (e, t, n, r) {
        var o,
            i = arguments.length,
            a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return (i > 3 && a && Object.defineProperty(t, n, a), a);
    },
    F_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'],
    T_ = (function () {
        function e(e) {
            var t = this;
            (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                Object.defineProperty(this, 'localValues', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Pp.map({}),
                }),
                Object.defineProperty(this, 'localComputedValues', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Pp.map({}),
                }),
                Object.defineProperty(this, 'isPropertyDirty', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function (e) {
                        return t.localValues.has(e);
                    },
                }),
                Vg(this),
                m_(hv(e), 'createViewModel expects an observable object'));
            var n = w_(this);
            w_(e).forEach(function (r) {
                var o;
                if (!n.includes(r) && r !== Vf && '__mobxDidRunLazyInitializers' !== r) {
                    if (
                        (m_(
                            -1 === F_.indexOf(r),
                            'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                        ),
                        gg(e, r))
                    ) {
                        var i = Ev(e, r),
                            a = i.derivation.bind(t),
                            l = null === (o = i.setter_) || void 0 === o ? void 0 : o.bind(t);
                        t.localComputedValues.set(r, Ip(a, { set: l }));
                    }
                    var u = Object.getOwnPropertyDescriptor(e, r),
                        s = u ? { enumerable: u.enumerable } : {};
                    Object.defineProperty(
                        t,
                        r,
                        M_(M_({}, s), {
                            configurable: !0,
                            get: function () {
                                return gg(e, r)
                                    ? t.localComputedValues.get(r).get()
                                    : t.isPropertyDirty(r)
                                      ? t.localValues.get(r)
                                      : t.model[r];
                            },
                            set: zh(function (n) {
                                gg(e, r)
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
        return (
            Object.defineProperty(e.prototype, 'isDirty', {
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
                    var e = this;
                    (bg(this.localValues).forEach(function (t) {
                        var n = e.localValues.get(t),
                            r = e.model[t];
                        Yg(r) ? r.replace(n) : ov(r) ? (r.clear(), r.merge(n)) : hg(n) || (e.model[t] = n);
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
            j_([Ip], e.prototype, 'isDirty', null),
            j_([Ip], e.prototype, 'changedValues', null),
            j_([zh.bound], e.prototype, 'submit', null),
            j_([zh.bound], e.prototype, 'reset', null),
            j_([zh.bound], e.prototype, 'resetProperty', null),
            e
        );
    })();
var V_ = {};
var N_ = function () {
        return (
            (N_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            N_.apply(this, arguments)
        );
    },
    L_ = 0;
function z_(e) {
    if (!e) return 'ROOT';
    for (var t = []; e.parent; ) (t.push(e.path), (e = e.parent));
    return t.reverse().join('/');
}
function D_(e) {
    return hv(e) || Yg(e) || ov(e);
}
var B_ = (function () {
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
    })(),
    U_ = (function (e) {
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
                Object.defineProperty(s, '_ogmInfoKey', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0,
                }),
                Object.defineProperty(s, '_groupBy', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                Object.defineProperty(s, '_keyToName', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0,
                }),
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
                (s._disposeBaseObserver = kg(s._base, function (e) {
                    if ('splice' === e.type)
                        Og(function () {
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
                        Og(function () {
                            (s._removeItem(e.oldValue), s._addItem(e.newValue));
                        });
                    }
                })),
                s
            );
        }
        return (
            B_(t, e),
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
                            ((n = Pp([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                            reaction: qh(
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
                    (Object.defineProperty(e, this._ogmInfoKey, { configurable: !0, enumerable: !1, value: o }),
                        r.push(e));
                },
            }),
            Object.defineProperty(t.prototype, '_removeItem', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    var t = e[this._ogmInfoKey];
                    (this._removeFromGroupArr(t.groupByValue, t.groupArrIndex),
                        t.reaction(),
                        delete e[this._ogmInfoKey]);
                },
            }),
            t
        );
    })(rv),
    H_ = (function () {
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
    G_ = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new H_(this.store, e)));
                },
            }),
            e
        );
    })(),
    $_ = function () {
        return (
            ($_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            $_.apply(this, arguments)
        );
    };
function q_(e, t) {
    if ((void 0 === t && (t = !1), Uh(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        o = 'boolean' == typeof t ? { keepAlive: t } : t,
        i = new G_();
    return function () {
        for (var t = this, a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
        var u,
            s = i.entry(a);
        if (s.exists()) return s.get().get();
        if (!o.keepAlive && !nh())
            return (
                !n &&
                    vh().computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Ip(
            function () {
                return (u = e.apply(t, a));
            },
            $_($_({}, o), { name: 'computedFn(' + (o.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            s.set(c),
            o.keepAlive ||
                Xh(c, function () {
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
const W_ = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            FULFILLED: k_,
            IDENTITY: function (e) {
                return e;
            },
            NOOP: g_,
            ObservableGroupMap: U_,
            PENDING: S_,
            REJECTED: x_,
            ViewModel: T_,
            addHiddenProp: b_,
            chunkProcessor: function (e, t, n, r) {
                if ((void 0 === n && (n = 0), void 0 === r && (r = 0), !Yg(e)))
                    throw new Error('Expected observable array as first argument');
                Uh(t) || (t = zh('chunkProcessor', t));
                var o = function () {
                    for (
                        var n = function () {
                            var n = 0 === r ? e.length : Math.min(e.length, r),
                                o = e.slice(0, n);
                            (Bh(function () {
                                return e.splice(0, n);
                            }),
                                t(o));
                        };
                        e.length > 0;
                    )
                        n();
                };
                return n > 0 ? Hh(o, { delay: n }) : Hh(o);
            },
            computedFn: q_,
            createTransformer: function (e, t) {
                m_(
                    'function' == typeof e && e.length < 2,
                    'createTransformer expects a function that accepts one argument',
                );
                var n = {},
                    r = void 0,
                    o = !1,
                    i = void 0;
                'object' == typeof t
                    ? ((r = t.onCleanup), (o = void 0 !== t.keepAlive && t.keepAlive), (i = t.debugNameGenerator))
                    : 'function' == typeof t && (r = t);
                var a = !1;
                return function (l) {
                    var u = (function (e) {
                            var t = typeof e;
                            if ('string' === t) return 'string:' + e;
                            if ('number' === t) return 'number:' + e;
                            if (null === e || ('object' !== t && 'function' !== t))
                                throw new Error(
                                    '[mobx-utils] transform expected an object, function, string or number, got: ' +
                                        String(e),
                                );
                            var n = e.$transformId;
                            void 0 === n && b_(e, '$transformId', (n = 'memoizationId:' + ++L_));
                            return n;
                        })(l),
                        s = n[u];
                    if (s) return s.get();
                    if (!o && !nh()) {
                        a ||
                            (console.warn(
                                "invoking a transformer from outside a reactive context won't memorized and is cleaned up immediately, unless keepAlive is set",
                            ),
                            (a = !0));
                        var c = e(l);
                        return (r && r(c, l), c);
                    }
                    return (s = n[u] =
                        (function (a, l) {
                            var u,
                                s = {};
                            'object' == typeof t
                                ? ((r = t.onCleanup), (i = t.debugNameGenerator), (s = t))
                                : 'function' == typeof t
                                  ? (r = t)
                                  : ((r = void 0), (i = void 0));
                            var c = i ? i(l) : 'Transformer-' + e.name + '-' + a,
                                d = Ip(
                                    function () {
                                        return (u = e(l));
                                    },
                                    N_(N_({}, s), { name: c }),
                                );
                            if (!o)
                                var f = Xh(d, function () {
                                    (delete n[a], f(), r && r(u, l));
                                });
                            return d;
                        })(u, l)).get();
                };
            },
            createViewModel: function (e) {
                return new T_(e);
            },
            deepObserve: function (e, t) {
                var n = new WeakMap();
                function r(r) {
                    var a = n.get(r.object);
                    (!(function (e, t) {
                        switch (e.type) {
                            case 'add':
                                o(e.newValue, t, e.name);
                                break;
                            case 'update':
                                (i(e.oldValue), o(e.newValue, t, e.name || '' + e.index));
                                break;
                            case 'remove':
                            case 'delete':
                                i(e.oldValue);
                                break;
                            case 'splice':
                                (e.removed.map(i),
                                    e.added.forEach(function (n, r) {
                                        return o(n, t, '' + (e.index + r));
                                    }));
                                for (var r = e.index + e.addedCount; r < e.object.length; r++)
                                    if (D_(e.object[r])) {
                                        var a = n.get(e.object[r]);
                                        a && (a.path = '' + r);
                                    }
                        }
                    })(r, a),
                        t(r, z_(a), e));
                }
                function o(e, t, i) {
                    if (D_(e)) {
                        var a = n.get(e);
                        if (a) {
                            if (a.parent !== t || a.path !== i)
                                throw new Error(
                                    "The same observable object cannot appear twice in the same tree, trying to assign it to '" +
                                        z_(t) +
                                        '/' +
                                        i +
                                        "', but it already exists at '" +
                                        z_(a.parent) +
                                        '/' +
                                        a.path +
                                        "'",
                                );
                        } else {
                            var l = { parent: t, path: i, dispose: kg(e, r) };
                            (n.set(e, l),
                                _g(e).forEach(function (e) {
                                    var t = e[0];
                                    return o(e[1], l, t);
                                }));
                        }
                    }
                }
                function i(e) {
                    if (D_(e)) {
                        var t = n.get(e);
                        if (!t) return;
                        (n.delete(e), t.dispose(), yg(e).forEach(i));
                    }
                }
                return (
                    o(e, void 0, ''),
                    function () {
                        i(e);
                    }
                );
            },
            expr: function (e) {
                return (
                    nh() || console.warn("'expr' should only be used inside other reactive functions."),
                    Ip(e).get()
                );
            },
            fail: v_,
            get fromPromise() {
                return O_;
            },
            fromResource: R_,
            fromStream: function (e, t) {
                return (void 0 === t && (t = void 0), new I_(e, t));
            },
            getAllMethodsAndProperties: w_,
            invariant: m_,
            isPromiseBasedObservable: function (e) {
                return e && !0 === e.isPromiseBasedObservable;
            },
            keepAlive: function (e, t) {
                var n = Pv(e, t);
                if (!n)
                    throw new Error(
                        'No computed provided, please provide an object created with `computed(() => expr)` or an object + property name',
                    );
                return kg(n, function () {});
            },
            lazyObservable: function (e, t) {
                void 0 === t && (t = void 0);
                var n = !1,
                    r = Pp.box(t, { deep: !1 }),
                    o = Pp.box(!1),
                    i = function () {
                        return (
                            n ||
                                ((n = !0),
                                Bp(!0, function () {
                                    o.set(!0);
                                }),
                                e(function (e) {
                                    Bp(!0, function () {
                                        (r.set(e), o.set(!1));
                                    });
                                })),
                            r.get()
                        );
                    },
                    a = zh('lazyObservable-reset', function () {
                        return ((n = !1), r.set(t), r.get());
                    });
                return {
                    current: i,
                    refresh: function () {
                        return n ? ((n = !1), i()) : r.get();
                    },
                    reset: function () {
                        return a();
                    },
                    get pending() {
                        return o.get();
                    },
                };
            },
            moveItem: function (e, t, n) {
                if ((E_(e, t), E_(e, n), t !== n)) {
                    var r,
                        o = e.slice();
                    return (
                        (r =
                            t < n
                                ? P_(o.slice(0, t), o.slice(t + 1, n + 1), [o[t]], o.slice(n + 1))
                                : P_(o.slice(0, n), [o[t]], o.slice(n, t), o.slice(t + 1))),
                        e.replace(r),
                        e
                    );
                }
            },
            now: function (e) {
                return (
                    void 0 === e && (e = 1e3),
                    nh()
                        ? (V_[e] ||
                              (V_[e] =
                                  'number' == typeof e
                                      ? (function (e) {
                                            var t;
                                            return R_(
                                                function (n) {
                                                    (n(Date.now()),
                                                        (t = setInterval(function () {
                                                            return n(Date.now());
                                                        }, e)));
                                                },
                                                function () {
                                                    clearInterval(t);
                                                },
                                                Date.now(),
                                            );
                                        })(e)
                                      : (t = R_(
                                            function (e) {
                                                function n() {
                                                    window.requestAnimationFrame(function () {
                                                        (e(Date.now()), t.isAlive() && n());
                                                    });
                                                }
                                                (e(Date.now()), n());
                                            },
                                            function () {},
                                            Date.now(),
                                        ))),
                          V_[e].current())
                        : Date.now()
                );
                var t;
            },
            queueProcessor: function (e, t, n) {
                if ((void 0 === n && (n = 0), !Yg(e))) throw new Error('Expected observable array as first argument');
                Uh(t) || (t = zh('queueProcessor', t));
                var r = function () {
                    var n = e.slice(0);
                    (Bh(function () {
                        return e.splice(0);
                    }),
                        n.forEach(t));
                };
                return n > 0 ? Hh(r, { delay: n }) : Hh(r);
            },
            toStream: function (e, t) {
                var n;
                void 0 === t && (t = !1);
                var r = Ip(e);
                return (
                    ((n = {
                        subscribe: function (e) {
                            return 'function' == typeof e
                                ? {
                                      unsubscribe: kg(
                                          r,
                                          function (t) {
                                              var n = t.newValue;
                                              return e(n);
                                          },
                                          t,
                                      ),
                                  }
                                : e && 'object' == typeof e && e.next
                                  ? {
                                        unsubscribe: kg(
                                            r,
                                            function (t) {
                                                var n = t.newValue;
                                                return e.next(n);
                                            },
                                            t,
                                        ),
                                    }
                                  : { unsubscribe: function () {} };
                        },
                    })[('function' == typeof Symbol && Symbol.observable) || '@@observable'] = function () {
                        return this;
                    }),
                    n
                );
            },
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
);
if (!U.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!Vg) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function K_(e) {
    e();
}
function Q_(e) {
    (e || (e = K_), tg({ reactionScheduler: e }));
}
function X_(e) {
    return rg(e);
}
var Y_ = !1;
function J_(e) {
    Y_ = e;
}
function Z_() {
    return Y_;
}
var ew = new ((function () {
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
    tw = { exports: {} },
    nw = {},
    rw = U;
var ow =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    iw = rw.useState,
    aw = rw.useEffect,
    lw = rw.useLayoutEffect,
    uw = rw.useDebugValue;
function sw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ow(e, n);
    } catch (r) {
        return !0;
    }
}
var cw =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = iw({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  i = r[1];
              return (
                  lw(
                      function () {
                          ((o.value = n), (o.getSnapshot = t), sw(o) && i({ inst: o }));
                      },
                      [e, n, t],
                  ),
                  aw(
                      function () {
                          return (
                              sw(o) && i({ inst: o }),
                              e(function () {
                                  sw(o) && i({ inst: o });
                              })
                          );
                      },
                      [e],
                  ),
                  uw(n),
                  n
              );
          };
((nw.useSyncExternalStore = void 0 !== rw.useSyncExternalStore ? rw.useSyncExternalStore : cw), (tw.exports = nw));
var dw,
    fw,
    pw = tw.exports;
function hw(e) {
    e.reaction = new xh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
function gw(e, t) {
    if ((void 0 === t && (t = 'observed'), Z_())) return e();
    var n = H.useRef(null);
    if (!n.current) {
        var r = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
                return (
                    ew.unregister(r),
                    (r.onStoreChange = e),
                    r.reaction || (hw(r), (r.stateVersion = Symbol())),
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
        (a.reaction || (hw(a), ew.register(n, a, a)),
        H.useDebugValue(a.reaction, X_),
        pw.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
}
var vw = 'function' == typeof Symbol && Symbol.for,
    mw =
        null !==
            (fw =
                null === (dw = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === dw
                    ? void 0
                    : dw.configurable) &&
        void 0 !== fw &&
        fw,
    bw = vw
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof U.forwardRef &&
          U.forwardRef(function (e) {
              return null;
          }).$$typeof,
    yw = vw
        ? Symbol.for('react.memo')
        : 'function' == typeof U.memo &&
          U.memo(function (e) {
              return null;
          }).$$typeof;
function _w(e, t) {
    var n;
    if (yw && e.$$typeof === yw)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    if (Z_()) return e;
    var r = null !== (n = null == t ? void 0 : t.forwardRef) && void 0 !== n && n,
        o = e,
        i = e.displayName || e.name;
    if (bw && e.$$typeof === bw && ((r = !0), 'function' != typeof (o = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var a = function (e, t) {
        return gw(function () {
            return o(e, t);
        }, i);
    };
    return (
        (a.displayName = e.displayName),
        mw && Object.defineProperty(a, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (a.contextTypes = e.contextTypes),
        r && (a = U.forwardRef(a)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                Sw[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (a = U.memo(a))),
        a
    );
}
var ww,
    Sw = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function kw(e) {
    var t = e.children,
        n = e.render,
        r = t || n;
    return 'function' != typeof r ? null : gw(r);
}
function xw(e, t) {
    return U.useState(function () {
        return Pp(e(), t, { autoBind: !0 });
    })[0];
}
function Cw(e) {
    var t = U.useState(function () {
        return Pp(e, {}, { deep: !1 });
    })[0];
    return (
        Bh(function () {
            Object.assign(t, e);
        }),
        t
    );
}
((kw.displayName = 'Observer'), Q_(Hd.unstable_batchedUpdates));
var Ow = null !== (ww = ew.finalizeAllImmediately) && void 0 !== ww ? ww : function () {};
const Pw = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Observer: kw,
            _observerFinalizationRegistry: ew,
            clearTimers: Ow,
            enableStaticRendering: J_,
            isObserverBatched: function () {
                return !0;
            },
            isUsingStaticRendering: Z_,
            observer: _w,
            observerBatching: Q_,
            useAsObservableSource: Cw,
            useLocalObservable: xw,
            useLocalStore: function (e, t) {
                var n = t && Cw(t);
                return U.useState(function () {
                    return Pp(e(n), void 0, { autoBind: !0 });
                })[0];
            },
            useObserver: function (e, t) {
                return (void 0 === t && (t = 'observed'), gw(e, t));
            },
            useStaticRendering: function (e) {
                J_(e);
            },
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
);
function Ew(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ew(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
const Rw = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    Aw = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = Ew(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    Iw = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return Aw(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t,
            a = Object.keys(o).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == i ? void 0 : i[e];
                if (null === t) return null;
                const a = Rw(t) || Rw(r);
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
        return Aw(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var Mw = { exports: {} },
    jw = {},
    Fw = Symbol.for('react.fragment');
((jw.Fragment = Fw), (jw.jsxDEV = void 0), (Mw.exports = jw));
const Tw = n(Mw.exports);
var Vw, Nw, Lw, zw;
function Dw(e) {
    return {
        lang: (null == e ? void 0 : e.lang) ?? (null == Vw ? void 0 : Vw.lang),
        message: null == e ? void 0 : e.message,
        abortEarly: (null == e ? void 0 : e.abortEarly) ?? (null == Vw ? void 0 : Vw.abortEarly),
        abortPipeEarly: (null == e ? void 0 : e.abortPipeEarly) ?? (null == Vw ? void 0 : Vw.abortPipeEarly),
    };
}
function Bw(e) {
    return null == Nw ? void 0 : Nw.get(e);
}
function Uw(e) {
    return null == Lw ? void 0 : Lw.get(e);
}
function Hw(e, t) {
    var n;
    return null == (n = null == zw ? void 0 : zw.get(e)) ? void 0 : n.get(t);
}
function Gw(e) {
    var t, n;
    const r = typeof e;
    return 'string' === r
        ? `"${e}"`
        : 'number' === r || 'bigint' === r || 'boolean' === r
          ? `${e}`
          : 'object' === r || 'function' === r
            ? ((e &&
                  (null == (n = null == (t = Object.getPrototypeOf(e)) ? void 0 : t.constructor) ? void 0 : n.name)) ??
              'null')
            : r;
}
function $w(e, t, n, r, o) {
    const i = o && 'input' in o ? o.input : n.value,
        a = (null == o ? void 0 : o.expected) ?? e.expects ?? null,
        l = (null == o ? void 0 : o.received) ?? Gw(i),
        u = {
            kind: e.kind,
            type: e.type,
            input: i,
            expected: a,
            received: l,
            message: `Invalid ${t}: ${a ? `Expected ${a} but r` : 'R'}eceived ${l}`,
            requirement: e.requirement,
            path: null == o ? void 0 : o.path,
            issues: null == o ? void 0 : o.issues,
            lang: r.lang,
            abortEarly: r.abortEarly,
            abortPipeEarly: r.abortPipeEarly,
        },
        s = 'schema' === e.kind,
        c =
            (null == o ? void 0 : o.message) ??
            e.message ??
            Hw(e.reference, u.lang) ??
            (s ? Uw(u.lang) : null) ??
            r.message ??
            Bw(u.lang);
    (void 0 !== c && (u.message = 'function' == typeof c ? c(u) : c),
        s && (n.typed = !1),
        n.issues ? n.issues.push(u) : (n.issues = [u]));
}
function qw(e) {
    return { version: 1, vendor: 'valibot', validate: (t) => e['~run']({ value: t }, Dw()) };
}
function Ww(e, t) {
    const n = [...new Set(e)];
    return n.length > 1 ? `(${n.join(` ${t} `)})` : (n[0] ?? 'never');
}
function Kw(e, t, n) {
    return 'function' == typeof e.fallback ? e.fallback(t, n) : e.fallback;
}
function Qw(e, t, n) {
    return 'function' == typeof e.default ? e.default(t, n) : e.default;
}
function Xw(e, t) {
    return !e['~run']({ value: t }, { abortEarly: !0 }).issues;
}
function Yw(e, t) {
    return {
        kind: 'schema',
        type: 'array',
        reference: Yw,
        expects: 'Array',
        async: !1,
        item: e,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            var n;
            const r = e.value;
            if (Array.isArray(r)) {
                ((e.typed = !0), (e.value = []));
                for (let o = 0; o < r.length; o++) {
                    const i = r[o],
                        a = this.item['~run']({ value: i }, t);
                    if (a.issues) {
                        const l = { type: 'array', origin: 'value', input: r, key: o, value: i };
                        for (const t of a.issues)
                            (t.path ? t.path.unshift(l) : (t.path = [l]), null == (n = e.issues) || n.push(t));
                        if ((e.issues || (e.issues = a.issues), t.abortEarly)) {
                            e.typed = !1;
                            break;
                        }
                    }
                    (a.typed || (e.typed = !1), e.value.push(a.value));
                }
            } else $w(this, 'type', e, t);
            return e;
        },
    };
}
function Jw(e) {
    return {
        kind: 'schema',
        type: 'boolean',
        reference: Jw,
        expects: 'boolean',
        async: !1,
        message: e,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return ('boolean' == typeof e.value ? (e.typed = !0) : $w(this, 'type', e, t), e);
        },
    };
}
function Zw(e, t) {
    return {
        kind: 'schema',
        type: 'custom',
        reference: Zw,
        expects: 'unknown',
        async: !1,
        check: e,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return (this.check(e.value) ? (e.typed = !0) : $w(this, 'type', e, t), e);
        },
    };
}
function eS(e, t) {
    const n = [];
    for (const r in e) ('' + +r === r && 'string' == typeof e[r] && Object.is(e[e[r]], +r)) || n.push(e[r]);
    return {
        kind: 'schema',
        type: 'enum',
        reference: eS,
        expects: Ww(n.map(Gw), '|'),
        async: !1,
        enum: e,
        options: n,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return (this.options.includes(e.value) ? (e.typed = !0) : $w(this, 'type', e, t), e);
        },
    };
}
function tS(e) {
    return {
        kind: 'schema',
        type: 'lazy',
        reference: tS,
        expects: 'unknown',
        async: !1,
        getter: e,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return this.getter(e.value)['~run'](e, t);
        },
    };
}
function nS(e, t) {
    return {
        kind: 'schema',
        type: 'literal',
        reference: nS,
        expects: Gw(e),
        async: !1,
        literal: e,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return (e.value === this.literal ? (e.typed = !0) : $w(this, 'type', e, t), e);
        },
    };
}
function rS(e) {
    return {
        kind: 'schema',
        type: 'number',
        reference: rS,
        expects: 'number',
        async: !1,
        message: e,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return ('number' != typeof e.value || isNaN(e.value) ? $w(this, 'type', e, t) : (e.typed = !0), e);
        },
    };
}
function oS(e, t) {
    return {
        kind: 'schema',
        type: 'object',
        reference: oS,
        expects: 'Object',
        async: !1,
        entries: e,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            var n;
            const r = e.value;
            if (r && 'object' == typeof r) {
                ((e.typed = !0), (e.value = {}));
                for (const o in this.entries) {
                    const i = this.entries[o];
                    if (
                        o in r ||
                        (('exact_optional' === i.type || 'optional' === i.type || 'nullish' === i.type) &&
                            void 0 !== i.default)
                    ) {
                        const a = o in r ? r[o] : Qw(i),
                            l = i['~run']({ value: a }, t);
                        if (l.issues) {
                            const i = { type: 'object', origin: 'value', input: r, key: o, value: a };
                            for (const t of l.issues)
                                (t.path ? t.path.unshift(i) : (t.path = [i]), null == (n = e.issues) || n.push(t));
                            if ((e.issues || (e.issues = l.issues), t.abortEarly)) {
                                e.typed = !1;
                                break;
                            }
                        }
                        (l.typed || (e.typed = !1), (e.value[o] = l.value));
                    } else if (void 0 !== i.fallback) e.value[o] = Kw(i);
                    else if (
                        'exact_optional' !== i.type &&
                        'optional' !== i.type &&
                        'nullish' !== i.type &&
                        ($w(this, 'key', e, t, {
                            input: void 0,
                            expected: `"${o}"`,
                            path: [{ type: 'object', origin: 'key', input: r, key: o, value: r[o] }],
                        }),
                        t.abortEarly)
                    )
                        break;
                }
            } else $w(this, 'type', e, t);
            return e;
        },
    };
}
function iS(e, t) {
    return {
        kind: 'schema',
        type: 'optional',
        reference: iS,
        expects: `(${e.expects} | undefined)`,
        async: !1,
        wrapped: e,
        default: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return void 0 === e.value && (void 0 !== this.default && (e.value = Qw(this, e, t)), void 0 === e.value)
                ? ((e.typed = !0), e)
                : this.wrapped['~run'](e, t);
        },
    };
}
function aS(e) {
    return {
        kind: 'schema',
        type: 'string',
        reference: aS,
        expects: 'string',
        async: !1,
        message: e,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            return ('string' == typeof e.value ? (e.typed = !0) : $w(this, 'type', e, t), e);
        },
    };
}
function lS(e) {
    let t;
    if (e) for (const n of e) t ? t.push(...n.issues) : (t = n.issues);
    return t;
}
function uS(e, t) {
    return {
        kind: 'schema',
        type: 'union',
        reference: uS,
        expects: Ww(
            e.map((e) => e.expects),
            '|',
        ),
        async: !1,
        options: e,
        message: t,
        get '~standard'() {
            return qw(this);
        },
        '~run'(e, t) {
            let n, r, o;
            for (const i of this.options) {
                const a = i['~run']({ value: e.value }, t);
                if (a.typed) {
                    if (!a.issues) {
                        n = a;
                        break;
                    }
                    r ? r.push(a) : (r = [a]);
                } else o ? o.push(a) : (o = [a]);
            }
            if (n) return n;
            if (r) {
                if (1 === r.length) return r[0];
                ($w(this, 'type', e, t, { issues: lS(r) }), (e.typed = !0));
            } else {
                if (1 === (null == o ? void 0 : o.length)) return o[0];
                $w(this, 'type', e, t, { issues: lS(o) });
            }
            return e;
        },
    };
}
function sS(e, t, n) {
    const r = e['~run']({ value: t }, Dw(n));
    return { typed: r.typed, success: !r.issues, output: r.value, issues: r.issues };
}
const cS = Symbol('@ts-pattern/matcher'),
    dS = '@ts-pattern/anonymous-select-key',
    fS = (e) => Boolean(e && 'object' == typeof e),
    pS = (e) => e && !!e[cS],
    hS = (e, t, n) => {
        if (fS(e)) {
            if (pS(e)) {
                const r = e[cS](),
                    { matched: o, selections: i = {} } = r.match(t);
                return (o && Object.keys(i).forEach((e) => n(e, i[e])), o);
            }
            if (!fS(t)) return !1;
            if (Array.isArray(e))
                return !!Array.isArray(t) && e.length === t.length && e.every((e, r) => hS(e, t[r], n));
            if (e instanceof Map)
                return t instanceof Map && Array.from(e.keys()).every((r) => hS(e.get(r), t.get(r), n));
            if (e instanceof Set) {
                if (!(t instanceof Set)) return !1;
                if (0 === e.size) return 0 === t.size;
                if (1 === e.size) {
                    const [r] = Array.from(e.values());
                    return pS(r) ? Array.from(t.values()).every((e) => hS(r, e, n)) : t.has(r);
                }
                return Array.from(e.values()).every((e) => t.has(e));
            }
            return Object.keys(e).every((r) => {
                const o = e[r];
                return (r in t || (pS((i = o)) && 'optional' === i[cS]().matcherType)) && hS(o, t[r], n);
                var i;
            });
        }
        return Object.is(t, e);
    },
    gS = (e) => vS(e, []),
    vS = (e, t) => {
        const n = () => {
            const n = t.find(({ test: t }) => t(e));
            if (!n) {
                let t;
                try {
                    t = JSON.stringify(e);
                } catch (r) {
                    t = e;
                }
                throw new Error(`Pattern matching error: no pattern matches value ${t}`);
            }
            return n.handler(n.select(e), e);
        };
        return {
            with(...n) {
                const r = n[n.length - 1],
                    o = [],
                    i = [];
                3 === n.length && 'function' == typeof n[1]
                    ? (o.push(n[0]), i.push(n[1]))
                    : o.push(...n.slice(0, n.length - 1));
                let a = {};
                return vS(
                    e,
                    t.concat([
                        {
                            test: (e) =>
                                Boolean(
                                    o.some((t) =>
                                        hS(t, e, (e, t) => {
                                            a[e] = t;
                                        }),
                                    ) && i.every((t) => t(e)),
                                ),
                            handler: r,
                            select: (e) => (Object.keys(a).length ? (dS in a ? a[dS] : a) : e),
                        },
                    ]),
                );
            },
            when: (n, r) => vS(e, t.concat([{ test: n, handler: r, select: (e) => e }])),
            otherwise: (n) => vS(e, t.concat([{ test: () => !0, handler: n, select: (e) => e }])).run(),
            exhaustive: () => n(),
            run: n,
        };
    };
var mS = {};
class bS extends Error {
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
const yS = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: bS }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(mS, '__esModule', { value: !0 });
var _S = (mS._assertGuard = void 0);
const wS = yS;
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function SS() {
    return {
        accessor: (e, t) => ('function' == typeof e ? { ...t, accessorFn: e } : { ...t, accessorKey: e }),
        display: (e) => e,
        group: (e) => e,
    };
}
function kS(e, t) {
    return 'function' == typeof e ? e(t) : e;
}
function xS(e, t) {
    return (n) => {
        t.setState((t) => ({ ...t, [e]: kS(n, t[e]) }));
    };
}
function CS(e) {
    return e instanceof Function;
}
function OS(e, t, n) {
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
function PS(e, t, n, r) {
    return {
        debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
        },
        key: !1,
        onChange: r,
    };
}
_S = mS._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new wS.TypeGuardError(t);
    return !1;
};
const ES = 'debugHeaders';
function RS(e, t, n) {
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
const AS = {
    createTable: (e) => {
        ((e.getHeaderGroups = OS(
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
                return IS(
                    t,
                    [
                        ...l,
                        ...n.filter((e) => !((null != r && r.includes(e.id)) || (null != o && o.includes(e.id)))),
                        ...u,
                    ],
                    e,
                );
            },
            PS(e.options, ES),
        )),
            (e.getCenterHeaderGroups = OS(
                () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                ],
                (t, n, r, o) =>
                    IS(
                        t,
                        (n = n.filter((e) => !((null != r && r.includes(e.id)) || (null != o && o.includes(e.id))))),
                        e,
                        'center',
                    ),
                PS(e.options, ES),
            )),
            (e.getLeftHeaderGroups = OS(
                () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left],
                (t, n, r) => {
                    var o;
                    return IS(
                        t,
                        null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? o
                            : [],
                        e,
                        'left',
                    );
                },
                PS(e.options, ES),
            )),
            (e.getRightHeaderGroups = OS(
                () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right],
                (t, n, r) => {
                    var o;
                    return IS(
                        t,
                        null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                            ? o
                            : [],
                        e,
                        'right',
                    );
                },
                PS(e.options, ES),
            )),
            (e.getFooterGroups = OS(
                () => [e.getHeaderGroups()],
                (e) => [...e].reverse(),
                PS(e.options, ES),
            )),
            (e.getLeftFooterGroups = OS(
                () => [e.getLeftHeaderGroups()],
                (e) => [...e].reverse(),
                PS(e.options, ES),
            )),
            (e.getCenterFooterGroups = OS(
                () => [e.getCenterHeaderGroups()],
                (e) => [...e].reverse(),
                PS(e.options, ES),
            )),
            (e.getRightFooterGroups = OS(
                () => [e.getRightHeaderGroups()],
                (e) => [...e].reverse(),
                PS(e.options, ES),
            )),
            (e.getFlatHeaders = OS(
                () => [e.getHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                PS(e.options, ES),
            )),
            (e.getLeftFlatHeaders = OS(
                () => [e.getLeftHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                PS(e.options, ES),
            )),
            (e.getCenterFlatHeaders = OS(
                () => [e.getCenterHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                PS(e.options, ES),
            )),
            (e.getRightFlatHeaders = OS(
                () => [e.getRightHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                PS(e.options, ES),
            )),
            (e.getCenterLeafHeaders = OS(
                () => [e.getCenterFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                PS(e.options, ES),
            )),
            (e.getLeftLeafHeaders = OS(
                () => [e.getLeftFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                PS(e.options, ES),
            )),
            (e.getRightLeafHeaders = OS(
                () => [e.getRightFlatHeaders()],
                (e) =>
                    e.filter((e) => {
                        var t;
                        return !(null != (t = e.subHeaders) && t.length);
                    }),
                PS(e.options, ES),
            )),
            (e.getLeafHeaders = OS(
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
                PS(e.options, ES),
            )));
    },
};
function IS(e, t, n, r) {
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
                    const o = RS(n, l, {
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
        c = t.map((e, t) => RS(n, e, { depth: a, index: t }));
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
const MS = (e, t, n, r, o, i, a) => {
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
            getAllCells: OS(
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
                                getContext: OS(
                                    () => [e, n, t, o],
                                    (e, t, n, r) => ({
                                        table: e,
                                        column: t,
                                        row: n,
                                        cell: r,
                                        getValue: r.getValue,
                                        renderValue: r.renderValue,
                                    }),
                                    PS(e.options, 'debugCells'),
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
                PS(e.options, 'debugRows'),
            ),
            _getAllCellsByColumnId: OS(
                () => [l.getAllCells()],
                (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
                PS(e.options, 'debugRows'),
            ),
        };
        for (let u = 0; u < e._features.length; u++) {
            const t = e._features[u];
            null == t || null == t.createRow || t.createRow(l, e);
        }
        return l;
    },
    jS = {
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
    FS = (e, t, n) => {
        var r, o;
        const i = null == n || null == (r = n.toString()) ? void 0 : r.toLowerCase();
        return Boolean(
            null == (o = e.getValue(t)) || null == (o = o.toString()) || null == (o = o.toLowerCase())
                ? void 0
                : o.includes(i),
        );
    };
FS.autoRemove = (e) => GS(e);
const TS = (e, t, n) => {
    var r;
    return Boolean(null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.includes(n));
};
TS.autoRemove = (e) => GS(e);
const VS = (e, t, n) => {
    var r;
    return (
        (null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.toLowerCase()) ===
        (null == n ? void 0 : n.toLowerCase())
    );
};
VS.autoRemove = (e) => GS(e);
const NS = (e, t, n) => {
    var r;
    return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
};
NS.autoRemove = (e) => GS(e) || !(null != e && e.length);
const LS = (e, t, n) =>
    !n.some((n) => {
        var r;
        return !(null != (r = e.getValue(t)) && r.includes(n));
    });
LS.autoRemove = (e) => GS(e) || !(null != e && e.length);
const zS = (e, t, n) =>
    n.some((n) => {
        var r;
        return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
    });
zS.autoRemove = (e) => GS(e) || !(null != e && e.length);
const DS = (e, t, n) => e.getValue(t) === n;
DS.autoRemove = (e) => GS(e);
const BS = (e, t, n) => e.getValue(t) == n;
BS.autoRemove = (e) => GS(e);
const US = (e, t, n) => {
    let [r, o] = n;
    const i = e.getValue(t);
    return i >= r && i <= o;
};
((US.resolveFilterValue = (e) => {
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
    (US.autoRemove = (e) => GS(e) || (GS(e[0]) && GS(e[1]))));
const HS = {
    includesString: FS,
    includesStringSensitive: TS,
    equalsString: VS,
    arrIncludes: NS,
    arrIncludesAll: LS,
    arrIncludesSome: zS,
    equals: DS,
    weakEquals: BS,
    inNumberRange: US,
};
function GS(e) {
    return null == e || '' === e;
}
const $S = {
    getDefaultColumnDef: () => ({ filterFn: 'auto' }),
    getInitialState: (e) => ({ columnFilters: [], ...e }),
    getDefaultOptions: (e) => ({
        onColumnFiltersChange: xS('columnFilters', e),
        filterFromLeafRows: !1,
        maxLeafRowFilterDepth: 100,
    }),
    createColumn: (e, t) => {
        ((e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
                r = null == n ? void 0 : n.getValue(e.id);
            return 'string' == typeof r
                ? HS.includesString
                : 'number' == typeof r
                  ? HS.inNumberRange
                  : 'boolean' == typeof r || (null !== r && 'object' == typeof r)
                    ? HS.equals
                    : Array.isArray(r)
                      ? HS.arrIncludes
                      : HS.weakEquals;
        }),
            (e.getFilterFn = () => {
                var n, r;
                return CS(e.columnDef.filterFn)
                    ? e.columnDef.filterFn
                    : 'auto' === e.columnDef.filterFn
                      ? e.getAutoFilterFn()
                      : null != (n = null == (r = t.options.filterFns) ? void 0 : r[e.columnDef.filterFn])
                        ? n
                        : HS[e.columnDef.filterFn];
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
                        i = kS(n, o ? o.value : void 0);
                    var a;
                    if (qS(r, i, e)) return null != (a = null == t ? void 0 : t.filter((t) => t.id !== e.id)) ? a : [];
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
                    return null == (r = kS(t, e))
                        ? void 0
                        : r.filter((e) => {
                              const t = n.find((t) => t.id === e.id);
                              if (t) {
                                  if (qS(t.getFilterFn(), e.value, t)) return !1;
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
function qS(e, t, n) {
    return (!(!e || !e.autoRemove) && e.autoRemove(t, n)) || void 0 === t || ('string' == typeof t && !t);
}
const WS = {
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
    KS = {
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
        getDefaultOptions: (e) => ({ onGroupingChange: xS('grouping', e), groupedColumnMode: 'reorder' }),
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
                        ? WS.sum
                        : '[object Date]' === Object.prototype.toString.call(r)
                          ? WS.extent
                          : void 0;
                }),
                (e.getAggregationFn = () => {
                    var n, r;
                    if (!e) throw new Error();
                    return CS(e.columnDef.aggregationFn)
                        ? e.columnDef.aggregationFn
                        : 'auto' === e.columnDef.aggregationFn
                          ? e.getAutoAggregationFn()
                          : null != (n = null == (r = t.options.aggregationFns) ? void 0 : r[e.columnDef.aggregationFn])
                            ? n
                            : WS[e.columnDef.aggregationFn];
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
const QS = {
        getInitialState: (e) => ({ columnOrder: [], ...e }),
        getDefaultOptions: (e) => ({ onColumnOrderChange: xS('columnOrder', e) }),
        createColumn: (e, t) => {
            ((e.getIndex = OS(
                (e) => [tk(t, e)],
                (t) => t.findIndex((t) => t.id === e.id),
                PS(t.options, 'debugColumns'),
            )),
                (e.getIsFirstColumn = (n) => {
                    var r;
                    return (null == (r = tk(t, n)[0]) ? void 0 : r.id) === e.id;
                }),
                (e.getIsLastColumn = (n) => {
                    var r;
                    const o = tk(t, n);
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
                (e._getOrderColumnsFn = OS(
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
                    PS(e.options, 'debugTable'),
                )));
        },
    },
    XS = {
        getInitialState: (e) => ({ columnPinning: { left: [], right: [] }, ...e }),
        getDefaultOptions: (e) => ({ onColumnPinningChange: xS('columnPinning', e) }),
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
            ((e.getCenterVisibleCells = OS(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right],
                (e, t, n) => {
                    const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !r.includes(e.column.id));
                },
                PS(t.options, 'debugRows'),
            )),
                (e.getLeftVisibleCells = OS(
                    () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                    (e, t) =>
                        (null != t ? t : [])
                            .map((t) => e.find((e) => e.column.id === t))
                            .filter(Boolean)
                            .map((e) => ({ ...e, position: 'left' })),
                    PS(t.options, 'debugRows'),
                )),
                (e.getRightVisibleCells = OS(
                    () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                    (e, t) =>
                        (null != t ? t : [])
                            .map((t) => e.find((e) => e.column.id === t))
                            .filter(Boolean)
                            .map((e) => ({ ...e, position: 'right' })),
                    PS(t.options, 'debugRows'),
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
                (e.getLeftLeafColumns = OS(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                    PS(e.options, 'debugColumns'),
                )),
                (e.getRightLeafColumns = OS(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                    PS(e.options, 'debugColumns'),
                )),
                (e.getCenterLeafColumns = OS(
                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right],
                    (e, t, n) => {
                        const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                        return e.filter((e) => !r.includes(e.id));
                    },
                    PS(e.options, 'debugColumns'),
                )));
        },
    },
    YS = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
    JS = {
        getDefaultColumnDef: () => YS,
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
            onColumnSizingChange: xS('columnSizing', e),
            onColumnSizingInfoChange: xS('columnSizingInfo', e),
        }),
        createColumn: (e, t) => {
            ((e.getSize = () => {
                var n, r, o;
                const i = t.getState().columnSizing[e.id];
                return Math.min(
                    Math.max(
                        null != (n = e.columnDef.minSize) ? n : YS.minSize,
                        null != (r = null != i ? i : e.columnDef.size) ? r : YS.size,
                    ),
                    null != (o = e.columnDef.maxSize) ? o : YS.maxSize,
                );
            }),
                (e.getStart = OS(
                    (e) => [e, tk(t, e), t.getState().columnSizing],
                    (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
                    PS(t.options, 'debugColumns'),
                )),
                (e.getAfter = OS(
                    (e) => [e, tk(t, e), t.getState().columnSizing],
                    (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
                    PS(t.options, 'debugColumns'),
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
                        if ((null == i.persist || i.persist(), ek(i) && i.touches && i.touches.length > 1)) return;
                        const a = e.getSize(),
                            l = e
                                ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()])
                                : [[r.id, r.getSize()]],
                            u = ek(i) ? Math.round(i.touches[0].clientX) : i.clientX,
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
                                if ('boolean' == typeof ZS) return ZS;
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
                                return ((ZS = e), ZS);
                            })() && { passive: !1 };
                        (ek(i)
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
let ZS = null;
function ek(e) {
    return 'touchstart' === e.type;
}
function tk(e, t) {
    return t
        ? 'center' === t
            ? e.getCenterVisibleLeafColumns()
            : 'left' === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
        : e.getVisibleLeafColumns();
}
const nk = {
        getInitialState: (e) => ({ rowSelection: {}, ...e }),
        getDefaultOptions: (e) => ({
            onRowSelectionChange: xS('rowSelection', e),
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
                                rk(o, t.id, r, !0, e);
                            }),
                            o
                        );
                    })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = OS(
                    () => [e.getState().rowSelection, e.getCoreRowModel()],
                    (t, n) => (Object.keys(t).length ? ok(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    PS(e.options, 'debugTable'),
                )),
                (e.getFilteredSelectedRowModel = OS(
                    () => [e.getState().rowSelection, e.getFilteredRowModel()],
                    (t, n) => (Object.keys(t).length ? ok(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    PS(e.options, 'debugTable'),
                )),
                (e.getGroupedSelectedRowModel = OS(
                    () => [e.getState().rowSelection, e.getSortedRowModel()],
                    (t, n) => (Object.keys(t).length ? ok(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                    PS(e.options, 'debugTable'),
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
                    return (rk(l, e.id, n, null == (a = null == r ? void 0 : r.selectChildren) || a, t), l);
                });
            }),
                (e.getIsSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return ik(e, n);
                }),
                (e.getIsSomeSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return 'some' === ak(e, n);
                }),
                (e.getIsAllSubRowsSelected = () => {
                    const { rowSelection: n } = t.getState();
                    return 'all' === ak(e, n);
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
    rk = (e, t, n, r, o) => {
        var i;
        const a = o.getRow(t, !0);
        (n
            ? (a.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), a.getCanSelect() && (e[t] = !0))
            : delete e[t],
            r &&
                null != (i = a.subRows) &&
                i.length &&
                a.getCanSelectSubRows() &&
                a.subRows.forEach((t) => rk(e, t.id, n, r, o)));
    };
function ok(e, t) {
    const n = e.getState().rowSelection,
        r = [],
        o = {},
        i = function (e, t) {
            return e
                .map((e) => {
                    var t;
                    const a = ik(e, n);
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
function ik(e, t) {
    var n;
    return null != (n = t[e.id]) && n;
}
function ak(e, t, n) {
    var r;
    if (null == (r = e.subRows) || !r.length) return !1;
    let o = !0,
        i = !1;
    return (
        e.subRows.forEach((e) => {
            if ((!i || o) && (e.getCanSelect() && (ik(e, t) ? (i = !0) : (o = !1)), e.subRows && e.subRows.length)) {
                const n = ak(e, t);
                'all' === n ? (i = !0) : 'some' === n ? ((i = !0), (o = !1)) : (o = !1);
            }
        }),
        o ? 'all' : !!i && 'some'
    );
}
const lk = /([0-9]+)/gm;
function uk(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
}
function sk(e) {
    return 'number' == typeof e
        ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ''
            : String(e)
        : 'string' == typeof e
          ? e
          : '';
}
function ck(e, t) {
    const n = e.split(lk).filter(Boolean),
        r = t.split(lk).filter(Boolean);
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
const dk = {
        alphanumeric: (e, t, n) => ck(sk(e.getValue(n)).toLowerCase(), sk(t.getValue(n)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, n) => ck(sk(e.getValue(n)), sk(t.getValue(n))),
        text: (e, t, n) => uk(sk(e.getValue(n)).toLowerCase(), sk(t.getValue(n)).toLowerCase()),
        textCaseSensitive: (e, t, n) => uk(sk(e.getValue(n)), sk(t.getValue(n))),
        datetime: (e, t, n) => {
            const r = e.getValue(n),
                o = t.getValue(n);
            return r > o ? 1 : r < o ? -1 : 0;
        },
        basic: (e, t, n) => uk(e.getValue(n), t.getValue(n)),
    },
    fk = [
        AS,
        {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({ onColumnVisibilityChange: xS('columnVisibility', e) }),
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
                ((e._getAllVisibleCells = OS(
                    () => [e.getAllCells(), t.getState().columnVisibility],
                    (e) => e.filter((e) => e.column.getIsVisible()),
                    PS(t.options, 'debugRows'),
                )),
                    (e.getVisibleCells = OS(
                        () => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()],
                        (e, t, n) => [...e, ...t, ...n],
                        PS(t.options, 'debugRows'),
                    )));
            },
            createTable: (e) => {
                const t = (t, n) =>
                    OS(
                        () => [
                            n(),
                            n()
                                .filter((e) => e.getIsVisible())
                                .map((e) => e.id)
                                .join('_'),
                        ],
                        (e) => e.filter((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible())),
                        PS(e.options, 'debugColumns'),
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
        QS,
        XS,
        jS,
        $S,
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
                onGlobalFilterChange: xS('globalFilter', e),
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
                ((e.getGlobalAutoFilterFn = () => HS.includesString),
                    (e.getGlobalFilterFn = () => {
                        var t, n;
                        const { globalFilterFn: r } = e.options;
                        return CS(r)
                            ? r
                            : 'auto' === r
                              ? e.getGlobalAutoFilterFn()
                              : null != (t = null == (n = e.options.filterFns) ? void 0 : n[r])
                                ? t
                                : HS[r];
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
            getDefaultOptions: (e) => ({ onSortingChange: xS('sorting', e), isMultiSortEvent: (e) => e.shiftKey }),
            createColumn: (e, t) => {
                ((e.getAutoSortingFn = () => {
                    const n = t.getFilteredRowModel().flatRows.slice(10);
                    let r = !1;
                    for (const t of n) {
                        const n = null == t ? void 0 : t.getValue(e.id);
                        if ('[object Date]' === Object.prototype.toString.call(n)) return dk.datetime;
                        if ('string' == typeof n && ((r = !0), n.split(lk).length > 1)) return dk.alphanumeric;
                    }
                    return r ? dk.text : dk.basic;
                }),
                    (e.getAutoSortDir = () => {
                        const n = t.getFilteredRowModel().flatRows[0];
                        return 'string' == typeof (null == n ? void 0 : n.getValue(e.id)) ? 'asc' : 'desc';
                    }),
                    (e.getSortingFn = () => {
                        var n, r;
                        if (!e) throw new Error();
                        return CS(e.columnDef.sortingFn)
                            ? e.columnDef.sortingFn
                            : 'auto' === e.columnDef.sortingFn
                              ? e.getAutoSortingFn()
                              : null != (n = null == (r = t.options.sortingFns) ? void 0 : r[e.columnDef.sortingFn])
                                ? n
                                : dk[e.columnDef.sortingFn];
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
        KS,
        {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({ onExpandedChange: xS('expanded', e), paginateExpandedRows: !0 }),
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
            getDefaultOptions: (e) => ({ onPaginationChange: xS('pagination', e) }),
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
                        null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange((e) => kS(t, e))),
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
                            let r = kS(t, n.pageIndex);
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
                            const n = Math.max(1, kS(t, e.pageSize)),
                                r = e.pageSize * e.pageIndex,
                                o = Math.floor(r / n);
                            return { ...e, pageIndex: o, pageSize: n };
                        });
                    }),
                    (e.setPageCount = (t) =>
                        e.setPagination((n) => {
                            var r;
                            let o = kS(t, null != (r = e.options.pageCount) ? r : -1);
                            return ('number' == typeof o && (o = Math.max(-1, o)), { ...n, pageCount: o });
                        })),
                    (e.getPageOptions = OS(
                        () => [e.getPageCount()],
                        (e) => {
                            let t = [];
                            return (e && e > 0 && (t = [...new Array(e)].fill(null).map((e, t) => t)), t);
                        },
                        PS(e.options, 'debugTable'),
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
            getDefaultOptions: (e) => ({ onRowPinningChange: xS('rowPinning', e) }),
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
                    (e.getTopRows = OS(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top],
                        (t, n) => e._getPinnedRows(t, n, 'top'),
                        PS(e.options, 'debugRows'),
                    )),
                    (e.getBottomRows = OS(
                        () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                        (t, n) => e._getPinnedRows(t, n, 'bottom'),
                        PS(e.options, 'debugRows'),
                    )),
                    (e.getCenterRows = OS(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom],
                        (e, t, n) => {
                            const r = new Set([...(null != t ? t : []), ...(null != n ? n : [])]);
                            return e.filter((e) => !r.has(e.id));
                        },
                        PS(e.options, 'debugRows'),
                    )));
            },
        },
        nk,
        JS,
    ];
function pk(e) {
    var t, n;
    const r = [...fk, ...(null != (t = e._features) ? t : [])];
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
            const t = kS(e, o.options);
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
        _getDefaultColumnDef: OS(
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
            PS(e, 'debugColumns'),
        ),
        _getColumnDefs: () => o.options.columns,
        getAllColumns: OS(
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
                                        getFlatColumns: OS(
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
                                            PS(e.options, 'debugColumns'),
                                        ),
                                        getLeafColumns: OS(
                                            () => [e._getOrderColumnsFn()],
                                            (e) => {
                                                var t;
                                                return null != (t = c.columns) && t.length
                                                    ? e(c.columns.flatMap((e) => e.getLeafColumns()))
                                                    : [c];
                                            },
                                            PS(e.options, 'debugColumns'),
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
            PS(e, 'debugColumns'),
        ),
        getAllFlatColumns: OS(
            () => [o.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            PS(e, 'debugColumns'),
        ),
        _getAllFlatColumnsById: OS(
            () => [o.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            PS(e, 'debugColumns'),
        ),
        getAllLeafColumns: OS(
            () => [o.getAllColumns(), o._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            PS(e, 'debugColumns'),
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
function hk() {
    return (e) =>
        OS(
            () => [e.options.data],
            (t) => {
                const n = { rows: [], flatRows: [], rowsById: {} },
                    r = function (t, o, i) {
                        void 0 === o && (o = 0);
                        const a = [];
                        for (let u = 0; u < t.length; u++) {
                            const s = MS(e, e._getRowId(t[u], u, i), t[u], u, o, void 0, null == i ? void 0 : i.id);
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
            PS(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
        );
}
function gk(e, t, n) {
    return n.options.filterFromLeafRows
        ? (function (e, t, n) {
              var r;
              const o = [],
                  i = {},
                  a = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                  l = function (e, r) {
                      void 0 === r && (r = 0);
                      const u = [];
                      for (let c = 0; c < e.length; c++) {
                          var s;
                          let d = e[c];
                          const f = MS(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
                          if (((f.columnFilters = d.columnFilters), null != (s = d.subRows) && s.length && r < a)) {
                              if (((f.subRows = l(d.subRows, r + 1)), (d = f), t(d) && !f.subRows.length)) {
                                  (u.push(d), (i[d.id] = d), o.push(d));
                                  continue;
                              }
                              if (t(d) || f.subRows.length) {
                                  (u.push(d), (i[d.id] = d), o.push(d));
                                  continue;
                              }
                          } else ((d = f), t(d) && (u.push(d), (i[d.id] = d), o.push(d)));
                      }
                      return u;
                  };
              return { rows: l(e), flatRows: o, rowsById: i };
          })(e, t, n)
        : (function (e, t, n) {
              var r;
              const o = [],
                  i = {},
                  a = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                  l = function (e, r) {
                      void 0 === r && (r = 0);
                      const u = [];
                      for (let c = 0; c < e.length; c++) {
                          let d = e[c];
                          if (t(d)) {
                              var s;
                              if (null != (s = d.subRows) && s.length && r < a) {
                                  const e = MS(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
                                  ((e.subRows = l(d.subRows, r + 1)), (d = e));
                              }
                              (u.push(d), o.push(d), (i[d.id] = d));
                          }
                      }
                      return u;
                  };
              return { rows: l(e), flatRows: o, rowsById: i };
          })(e, t, n);
}
function vk() {
    return (e) =>
        OS(
            () => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter],
            (t, n, r) => {
                if (!t.rows.length || ((null == n || !n.length) && !r)) {
                    for (let e = 0; e < t.flatRows.length; e++)
                        ((t.flatRows[e].columnFilters = {}), (t.flatRows[e].columnFiltersMeta = {}));
                    return t;
                }
                const o = [],
                    i = [];
                (null != n ? n : []).forEach((t) => {
                    var n;
                    const r = e.getColumn(t.id);
                    if (!r) return;
                    const i = r.getFilterFn();
                    i &&
                        o.push({
                            id: t.id,
                            filterFn: i,
                            resolvedValue:
                                null != (n = null == i.resolveFilterValue ? void 0 : i.resolveFilterValue(t.value))
                                    ? n
                                    : t.value,
                        });
                });
                const a = (null != n ? n : []).map((e) => e.id),
                    l = e.getGlobalFilterFn(),
                    u = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
                let s, c;
                r &&
                    l &&
                    u.length &&
                    (a.push('__global__'),
                    u.forEach((e) => {
                        var t;
                        i.push({
                            id: e.id,
                            filterFn: l,
                            resolvedValue:
                                null != (t = null == l.resolveFilterValue ? void 0 : l.resolveFilterValue(r)) ? t : r,
                        });
                    }));
                for (let e = 0; e < t.flatRows.length; e++) {
                    const n = t.flatRows[e];
                    if (((n.columnFilters = {}), o.length))
                        for (let e = 0; e < o.length; e++) {
                            s = o[e];
                            const t = s.id;
                            n.columnFilters[t] = s.filterFn(n, t, s.resolvedValue, (e) => {
                                n.columnFiltersMeta[t] = e;
                            });
                        }
                    if (i.length) {
                        for (let e = 0; e < i.length; e++) {
                            c = i[e];
                            const t = c.id;
                            if (
                                c.filterFn(n, t, c.resolvedValue, (e) => {
                                    n.columnFiltersMeta[t] = e;
                                })
                            ) {
                                n.columnFilters.__global__ = !0;
                                break;
                            }
                        }
                        !0 !== n.columnFilters.__global__ && (n.columnFilters.__global__ = !1);
                    }
                }
                return gk(
                    t.rows,
                    (e) => {
                        for (let t = 0; t < a.length; t++) if (!1 === e.columnFilters[a[t]]) return !1;
                        return !0;
                    },
                    e,
                );
            },
            PS(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
        );
}
function mk(e) {
    return (e) =>
        OS(
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
            PS(e.options, 'debugTable'),
        );
}
function bk() {
    return (e) =>
        OS(
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
            PS(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
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
 */ function yk(e, t) {
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
function _k(e) {
    const t = { state: {}, onStateChange: () => {}, renderFallbackValue: null, ...e },
        [n] = U.useState(() => ({ current: pk(t) })),
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
    Bh as A,
    _k as B,
    mk as C,
    bk as D,
    hk as E,
    _w as F,
    Xy as G,
    Qy as H,
    aS as I,
    eS as J,
    gS as K,
    rS as L,
    Yw as M,
    uS as N,
    tS as O,
    iS as P,
    Jw as Q,
    H as R,
    nS as S,
    Hh as T,
    sS as U,
    qy as V,
    yk as W,
    SS as X,
    vk as Y,
    _S as _,
    ye as a,
    we as b,
    je as c,
    _e as d,
    Wd as e,
    zh as f,
    q_ as g,
    Df as h,
    Ve as i,
    Y as j,
    Iw as k,
    Te as l,
    Pw as m,
    W_ as n,
    Pp as o,
    Nv as p,
    J as q,
    U as r,
    Tw as s,
    Xw as t,
    ih as u,
    oS as v,
    Zw as w,
    Wy as x,
    h_ as y,
    xw as z,
};
